/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

class Eyes {
  constructor() {
    // Object to hold the globies
    this.globies = [];

    this.onReady = this.onReady.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    $(window).resize(this.onResize);

    $(document).ready(this.onReady);
  }

  onResize() {

  }

  onReady() {
    this.setupSvg();
    this.bindMovement();
  }

  setupSvg() {
    this.$globies = $('.globie');

    this.$globies.each( (index, element) => {
      // assign svg .globie as Snap object
      const globie = Snap(element);

      // Temporary object to hold current globie props
      const currentGlobie = {};

      // select pupils
      currentGlobie.leftPupil = globie.select('.left-pupil');
      currentGlobie.rightPupil = globie.select('.right-pupil');

      // select containers
      currentGlobie.leftContainer = globie.select('.left-pupil-container');
      currentGlobie.rightContainer = globie.select('.right-pupil-container');

      // get lengths of eye paths
      currentGlobie.leftLength = Snap.path.getTotalLength(currentGlobie.leftContainer);
      currentGlobie.rightLength = Snap.path.getTotalLength(currentGlobie.rightContainer);

      // get eye bounding boxes
      currentGlobie.leftBBox = Snap.path.getBBox(currentGlobie.leftContainer);
      currentGlobie.rightBBox = Snap.path.getBBox(currentGlobie.rightContainer);

      // find center point of left eye
      currentGlobie.leftCenter = {
        x: currentGlobie.leftBBox.x + (currentGlobie.leftBBox.width / 2),
        y: currentGlobie.leftBBox.y + (currentGlobie.leftBBox.height / 2),
      };

      // find center point of right eye
      currentGlobie.rightCenter = {
        x: currentGlobie.rightBBox.x + (currentGlobie.rightBBox.width / 2),
        y: currentGlobie.rightBBox.y + (currentGlobie.rightBBox.height / 2),
      };

      // Save current globie into the globies object
      this.globies[index] = currentGlobie;
    });
  }

  bindMovement() {
    // mobile width check to be made does hover exist check
    if ( window.innerWidth > 720 ) {
      // Eyeballs follow cursor
      $(document).mousemove(this.onMouseMove);
    } else {
      if(window.DeviceOrientationEvent){
        window.addEventListener('deviceorientation', function(e) {
          return this.onDeviceOrientationChange(e);
        }.bind(this), false);
      }
    }

  }

  onMouseMove(event) {

    this.$globies.each( (index, element) => {
      // get cursor position relative to Globie position
      const targetX = event.clientX - $(element).offset().left;
      const targetY = event.clientY - ($(element).offset().top - $(document).scrollTop());

      this.moveEyes(index, targetX, targetY);
    });
  }

  onDeviceOrientationChange(event) {
    const x = (event.gamma + 90) / 180 * window.innerWidth;
    const y = (event.beta - 45 + 90) / 180 * window.innerHeight;

    this.moveEyes(x, y);

  }

  moveEyes(index, targetX, targetY) {
    const globie = this.globies[index];

    // get angles of cursor from eye centerpoints
    const leftAngle = (Snap.angle(globie.leftCenter.x, globie.leftCenter.y, targetX, targetY) + 90) / 360;
    const rightAngle = (Snap.angle(globie.rightCenter.x, globie.rightCenter.y, targetX, targetY) + 90) / 360;

    // get point of cursor angle from left eye centerpoint
    const leftPointAtLength = globie.leftContainer.getPointAtLength((leftAngle * globie.leftLength) % globie.leftLength);

    // get point of cursor angle from left eye centerpoint
    const rightPointAtLength = globie.rightContainer.getPointAtLength((rightAngle * globie.rightLength) % globie.rightLength);

    if (Snap.path.isPointInsideBBox(globie.leftBBox, targetX, targetY)) {
      // cursor is inside left pupil container bounding box
      // position left pupil center at cursor
      globie.leftPupil.attr({
        cx: targetX,
        cy: targetY,
      });
    } else {
      // position left pupil at cursor angle from left eye centerpoint
      globie.leftPupil.attr({
        cx: leftPointAtLength.x,
        cy: leftPointAtLength.y,
      });
    }

    if (Snap.path.isPointInsideBBox(globie.rightBBox, targetX, targetY)) {
      // cursor is inside right pupil container bounding box
      // position right pupil center at cursor
      globie.rightPupil.attr({
        cx: targetX,
        cy: targetY,
      });
    } else {
      // position right pupil at cursor angle from right eye centerpoint
      globie.rightPupil.attr({
        cx: rightPointAtLength.x,
        cy: rightPointAtLength.y,
      });
    }

  }
}

export default Eyes;

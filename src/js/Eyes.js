/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

class Eyes {
  constructor() {
    this.onReady = this.onReady.bind(this);

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
    // assign svg .globie as Snap object
    const globie = Snap('#footer .globie');

    // select pupils
    this.leftPupil = globie.select('.left-pupil');
    this.rightPupil = globie.select('.right-pupil');

    // select containers
    this.leftContainer = globie.select('.left-pupil-container');
    this.rightContainer = globie.select('.right-pupil-container');

    // get lengths of eye paths
    this.leftLength = Snap.path.getTotalLength(this.leftContainer);
    this.rightLength = Snap.path.getTotalLength(this.rightContainer);

    // get eye bounding boxes
    this.leftBBox = Snap.path.getBBox(this.leftContainer);
    this.rightBBox = Snap.path.getBBox(this.rightContainer);

    // find center point of left eye
    this.leftCenter = {
      x: this.leftBBox.x + (this.leftBBox.width / 2),
      y: this.leftBBox.y + (this.leftBBox.height / 2),
    };

    // find center point of right eye
    this.rightCenter = {
      x: this.rightBBox.x + (this.rightBBox.width / 2),
      y: this.rightBBox.y + (this.rightBBox.height / 2),
    };
  }

  bindMovement() {
    // mobile width check to be made does hover exist check
    if ( window.innerWidth > 720 ) {
      // Eyeballs follow cursor
      $(document).mousemove(function (e) {
        // get cursor position relative to Globie position
        const targetX = e.clientX - $('#footer .globie').offset().left;
        const targetY = e.clientY - ($('#footer .globie').offset().top - $(document).scrollTop());

        this.moveEyes(targetX, targetY);
      }.bind(this));
    } else {
      if(window.DeviceOrientationEvent){
        window.addEventListener('deviceorientation', function(e) {
          return this.onDeviceOrientationChange(e);
        }.bind(this), false);
      }
    }

  }

  onDeviceOrientationChange(event) {
    var x = (event.gamma + 90) / 180 * window.innerWidth;
    var y = (event.beta - 45 + 90) / 180 * window.innerHeight;

    this.moveEyes(x, y);

  }

  moveEyes(targetX, targetY) {
    // get angles of cursor from eye centerpoints
    const leftAngle = (Snap.angle(this.leftCenter.x, this.leftCenter.y, targetX, targetY) + 90) / 360;
    const rightAngle = (Snap.angle(this.rightCenter.x, this.rightCenter.y, targetX, targetY) + 90) / 360;

    // get point of cursor angle from left eye centerpoint
    const leftPointAtLength = this.leftContainer.getPointAtLength((leftAngle * this.leftLength) % this.leftLength);

    // get point of cursor angle from left eye centerpoint
    const rightPointAtLength = this.rightContainer.getPointAtLength((rightAngle * this.rightLength) % this.rightLength);

    if (Snap.path.isPointInsideBBox(this.leftBBox, targetX, targetY)) {
      // cursor is inside left pupil container bounding box
      // position left pupil center at cursor
      this.leftPupil.attr({
        cx: targetX,
        cy: targetY,
      });
    } else {
      // position left pupil at cursor angle from left eye centerpoint
      this.leftPupil.attr({
        cx: leftPointAtLength.x,
        cy: leftPointAtLength.y,
      });
    }

    if (Snap.path.isPointInsideBBox(this.rightBBox, targetX, targetY)) {
      // cursor is inside right pupil container bounding box
      // position right pupil center at cursor
      this.rightPupil.attr({
        cx: targetX,
        cy: targetY,
      });
    } else {
      // position right pupil at cursor angle from right eye centerpoint
      this.rightPupil.attr({
        cx: rightPointAtLength.x,
        cy: rightPointAtLength.y,
      });
    }

  }
}

export default Eyes;

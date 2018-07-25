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

    // select eyes
    this.leftEye = globie.select('.left-eye');
    this.rightEye = globie.select('.right-eye');

    // select pupils
    this.leftPupil = globie.select('.left-pupil');
    this.rightPupil = globie.select('.right-pupil');

    // get lengths of eye paths
    this.leftLength = Snap.path.getTotalLength(this.leftEye);
    this.rightLength = Snap.path.getTotalLength(this.rightEye);

    // get eye bounding boxes
    this.leftBBox = Snap.path.getBBox(this.leftEye);
    this.rightBBox = Snap.path.getBBox(this.rightEye);

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
        this.moveEyes(e.clientX, e.clientY);
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

  moveEyes(posX, posY) {

    const mouseRelativeX = posX - ($('#footer .globie .left-eye').offset().left - $('footer .globie .left-eye').width());
    const mouseRelativeY = posY - ($('#footer .globie .left-eye').offset().top - ($('#footer .globie .left-eye').height() / 2));

    $('#red-box').css({
      top: posY,
      left: posX,
    })

    $('#blue-box').css({
      top: mouseRelativeY,
      left: mouseRelativeX,
    })

    const leftAngle = Snap.angle(this.leftCenter.x, this.leftCenter.y, mouseRelativeX, mouseRelativeY) / 360;
    const rightAngle = Snap.angle(this.rightCenter.x, this.rightCenter.y, mouseRelativeX, mouseRelativeY) / 360;

    const leftPointAtLength = this.leftEye.getPointAtLength((leftAngle * this.leftLength) % this.leftLength);

    const rightPointAtLength = this.rightEye.getPointAtLength((rightAngle * this.rightLength) % this.rightLength);

    if (Snap.path.isPointInside(this.leftEye, mouseRelativeX, mouseRelativeY)) {
      this.leftPupil.attr({
        cx: mouseRelativeX,
        cy: mouseRelativeY,
      });
    } else {
      this.leftPupil.attr({
        cx: leftPointAtLength.x,
        cy: leftPointAtLength.y,
      });
    }

    if (Snap.path.isPointInside(this.rightEye, mouseRelativeX, mouseRelativeY)) {
      this.rightPupil.attr({
        cx: mouseRelativeX,
        cy: mouseRelativeY,
      });
    } else {
      this.rightPupil.attr({
        cx: rightPointAtLength.x,
        cy: rightPointAtLength.y,
      });
    }

  }
}

export default Eyes;

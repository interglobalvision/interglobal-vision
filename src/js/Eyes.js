/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

import Snap from 'snapsvg-cjs';

console.log(Snap);

class Eyes {
  constructor() {
    // BINDINGS

    $(window).resize(this.onResize);

    $(document).ready(this.onReady);
  }

  onResize() {

  }

  onReady() {
    // assign svg .globie as Snap object
    const globie = Snap('.globie');
    // select #leftEye from globie object
    this.lefteye = globie.select('.EyeLeftFill');
    // draw left eyeball in globie object
    this.leftball = globie.ellipse(220, 150, 27, 40).attr({});
    // select #rightEye from globie object
    this.righteye = globie.select('.EyeRightFill');
    // draw right eyeball in globie object
    this.rightball = globie.ellipse(280, 150, 27, 40).attr({});

    // get length of left eye path
    this.lenl = Snap.path.getTotalLength(this.lefteye);
    // get length of right eye path
    this.lenr = Snap.path.getTotalLength(this.lefteye);
    // get bounding box of left eye path
    this.bbl = Snap.path.getBBox(this.lefteye);
    // get bounding box of right eye path
    this.bbr = Snap.path.getBBox(this.righteye);

    // find center point of left eye
    this.midl = {
      x: this.bbl.x + (this.bbl.width / 2),
      y: this.bbl.y + (this.bbl.height / 2),
    };

    // find center point of right eye
    this.midr = {
      x: this.bbr.x + (this.bbr.width / 2),
      y: this.bbr.y + (this.bbr.height / 2),
    };

    // Returns the (x,y) coordinate in user space which is distance units along the path
    this.lpal = Snap.path.getPointAtLength(this.lefteye);
    // Returns the (x,y) coordinate in user space which is distance units along the path
    this.rpal = Snap.path.getPointAtLength(this.righteye);

    this.bind();

  }

  bind() {
    // mobile width check to be made does hover exist check
    if ( window.innerWidth > 720 ) {
      // Eyeballs follow cursor
      $(document).mousemove(function (e) {
        this.moveEyes(e.pageX, e.pageY);
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
    var mX = posX - $('.globie:first-of-type').offset().left;
    var mY = posY - $('.globie:first-of-type').offset().top;

    var tl = Snap.angle(this.midl.x, this.midl.y, mX, mY) / 360;
    var tr = Snap.angle(this.midr.x, this.midr.y, mX, mY) / 360;

    var lpal = this.lefteye.getPointAtLength((tl * this.lenl) % this.lenl);
    var lpalx = lpal.x;
    var lpaly = lpal.y;

    var rpal = this.righteye.getPointAtLength((tr * this.lenr) % this.lenr);
    var rpalx = rpal.x;
    var rpaly = rpal.y;

    if (Snap.path.isPointInside(this.lefteye, mX, mY)) {
      this.leftball.attr({
        cx: mX,
        cy: mY,
      });
    } else {
      this.leftball.attr({
        cx: lpalx,
        cy: lpaly,
      });
    }

    if (Snap.path.isPointInside(this.righteye, mX, mY)) {
      this.rightball.attr({
        cx: mX,
        cy: mY,
      });
    } else {
      this.rightball.attr({
        cx: rpalx,
        cy: rpaly,
      });
    }

  }
}

export default Eyes;

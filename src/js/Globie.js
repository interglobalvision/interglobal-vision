/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

class Globie {
  constructor() {
    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    this.$globie = $('svg#globie');
    this.footFrame = 1;
    this.footTapRate = 80;
    this.bodyRotateRate = 30;
  }

  onResize() {

  }

  onReady() {
    this.triggerFootTap();

    this.bindScroll();
  }

  bindScroll() {
    $(window).on('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.scrollTop = $(document).scrollTop();

    this.rotateBody();
  }

  rotateBody() {
    const scrollTop = this.scrollTop / this.bodyRotateRate;
    const frame = Math.floor(scrollTop % 24) + 1;

    this.$globie.find('g.show').removeClass('show');
    this.$globie.find('g#_Body_' + frame + '_').addClass('show');
  }

  triggerFootTap() {
    setTimeout(this.runFootTap.bind(this), this.footTapRate);
  }

  runFootTap() {
    window.requestAnimationFrame(this.triggerFootTap.bind(this));
    this.tapFoot();
  }

  tapFoot() {
    this.$globie.find('path#Right-' + this.footFrame).removeClass('show');
    this.footFrame = this.footFrame === 7 ? 1 : this.footFrame + 1;
    this.$globie.find('path#Right-' + this.footFrame).addClass('show');
  }
}

export default Globie;

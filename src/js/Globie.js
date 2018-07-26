/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

class Globie {
  constructor() {
    // BINDINGS
    this.onResize = this.onResize.bind(this);
    this.onReady = this.onReady.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.triggerFootTap = this.triggerFootTap.bind(this);
    this.runFootTap = this.runFootTap.bind(this);

    $(window).resize(this.onResize);

    $(document).ready(this.onReady);

    this.$globie = $('svg.globie');
    this.footFrame = 1;
    this.footTapRate = 60;
    this.footTapNumber = this.footTapRate * (9 * 3); // 3 taps
    this.footTapDelay = 10000; // 10 secs
    this.bodyRotateRate = 30;
  }

  onResize() {

  }

  onReady() {
    this.setFootTap();
    this.bindMouseMove();
    this.bindScroll();
  }

  bindScroll() {
    $(window).on('scroll', this.handleScroll);
    $('#project-wrapper').on('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.scrollTop = $(event.target).scrollTop()
    this.rotateBody();
  }

  rotateBody() {
    const scrollTop = this.scrollTop / this.bodyRotateRate;
    const frame = Math.floor(scrollTop % 24) + 1;

    this.$globie.find('g.show').removeClass('show');
    this.$globie.find('g.body-' + frame + '').addClass('show');
  }

  setFootTap() {
    setInterval(() => {
      this.triggerFootTap();

      setTimeout(this.cancelFootTap.bind(this), this.footTapNumber);
    }, this.footTapDelay);
  }

  triggerFootTap() {
    this.tapTimeout = setTimeout(this.runFootTap, this.footTapRate);
  }

  runFootTap() {
    this.tapRequest = window.requestAnimationFrame(this.triggerFootTap);
    this.tapFoot();
  }

  tapFoot() {
    this.$globie.find('path.right-' + this.footFrame).removeClass('show');
    this.footFrame = this.footFrame === 8 ? 1 : this.footFrame + 1;
    this.$globie.find('path.right-' + this.footFrame).addClass('show');
  }

  cancelFootTap() {
    clearTimeout(this.tapTimeout);
    window.cancelAnimationFrame(this.tapRequest);
    this.$globie.find('path.right-' + this.footFrame).removeClass('show');
    this.footFrame = 1;
    this.$globie.find('path.right-1').addClass('show');
  }

  bindMouseMove() {
    window.addEventListener('mousemove', this.cancelFootTap.bind(this));
  }
}

export default Globie;

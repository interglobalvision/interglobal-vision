/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

class StickyContact {
  constructor() {
    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    this.handleScroll = this.handleScroll.bind(this);

    this.$stickyContact = $('#contact');
    this.$footerContact = $('#footer .contact-item');
  }

  onResize() {
    this.handleScroll();
  }

  onReady() {
    this.stickyContact();
  }

  stickyContact() {
    $(window).on('scroll', this.handleScroll);
    this.handleScroll();
  }

  handleScroll() {
    const $body = $('body');
    const stickyTop = $(window).height() - this.$stickyContact.height();
    const scrollPosition = $(document).scrollTop() + stickyTop;
    const footerContactTop = this.$footerContact.offset().top;

    if (scrollPosition >= footerContactTop && !$body.hasClass('contact-stuck')) {
      $body.addClass('contact-stuck');
    } else if (scrollPosition < footerContactTop && $body.hasClass('contact-stuck')) {
      $body.removeClass('contact-stuck');
    }
  }
}

export default StickyContact;

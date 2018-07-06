/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import lazySizes from 'lazysizes';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

  }

  onResize() {
    this.stickyContact();
  }

  onReady() {
    lazySizes.init();
    this.stickyContact();
  }

  fixWidows() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  }

  stickyContact() {
    const $stickyContact = $('#contact');
    const $footerContact = $('#footer .contact-item');
    const $body = $('body');
    const stickyTop = $(window).height() - $stickyContact.height();

    $(window).on('scroll', function(e) {
      const scrollPosition = $(document).scrollTop() + stickyTop;
      const footerContactTop = $footerContact.offset().top

      if (scrollPosition >= footerContactTop && !$body.hasClass('contact-stuck')) {
        $body.addClass('contact-stuck')
      } else if (scrollPosition < footerContactTop && $body.hasClass('contact-stuck')) {
        $body.removeClass('contact-stuck')
      }
    });
  }
}

new Site();

/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import lazySizes from 'lazysizes';

import StickyContact from './StickyContact';
import Projects from './Projects';
import DropShadow from './DropShadow';
import Globie from './Globie';
import Eyes from './Eyes';
import './animationFrame';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;

    this.onResize = this.onResize.bind(this);
    this.onReady = this.onReady.bind(this);

    $(window).resize(this.onResize);
    $(document).ready(this.onReady);

  }

  onResize() {
  }

  onReady() {
    lazySizes.init();
  }

  fixWidows() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  }
}

const IGV = new Site();
const IGVStickyContact = new StickyContact();
const IGVProjects = new Projects();
const IGVDropShadow = new DropShadow();
const IGVGlobie = new Globie();
const IGVEyes = new Eyes();

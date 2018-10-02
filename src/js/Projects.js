/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

class Projects {
  constructor() {

    this.handleProjectListTitleClick = this.handleProjectListTitleClick.bind(this);
    this.handleProjectCloseOverlayClick = this.handleProjectCloseOverlayClick.bind(this);
    this.handleSiteTitleClick = this.handleSiteTitleClick.bind(this);
    this.stickTitle = this.stickTitle.bind(this);
    this.unstickTitle = this.unstickTitle.bind(this);
    this.stickGlobie = this.stickGlobie.bind(this);
    this.unstickGlobie = this.unstickGlobie.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onReady = this.onReady.bind(this);
    this.handlePopState = this.handlePopState.bind(this);

    // Project Events
    this.openEvent = new Event('projectOpen');
    this.closeEvent = new Event('projectClose');

    // Elements
    this.$body = $('body');
    this.$headerSiteTitle = $('#header-site-title');
    this.$projectSiteTitle = $('#project-site-title');
    this.$footerGlobie = $('#footer svg.globie');
    this.$projectGlobie = $('#project svg.globie');

    $(window).resize(this.onResize);
    $(document).ready(this.onReady);

    // Listen for `popstate` event
    $(window).bind('popstate', this.handlePopState);

  }

  onResize() {
  }

  onReady() {
    this.bindProjectList();
    this.bindHomeClick();

    if (this.$body.hasClass('single-project')) {
      // If single project template:
      // Set first project active &
      // disable scrolling on home content
      $('.project-content').addClass('active');
      $('html').css('overflow', 'hidden');
    }
  }

  handlePopState(e) {
    // Check if back button
    if (document.location.origin + document.location.pathname === WP.siteUrl || document.location.origin + document.location.pathname === WP.siteUrl + '/') {
      this.handleSiteTitleClick();
    } else if (document.location.href === this.projectUrl && !this.$body.hasClass('project-open')) {
      this.openProjectPanel();
      this.$body.addClass('project-loaded');
    }
  }

  bindProjectList() {
    $('.project-list-title a').on('click', this.handleProjectListTitleClick);
  }


  handleProjectListTitleClick(e) {
    e.preventDefault();

    this.getProject(e.target);
  }

  getProject(target) {
    this.projectUrl = target.href;
    const projectId = target.dataset.id;

    if (!this.$body.hasClass('project-open')) {
      this.openProjectPanel();
    }

    $.ajax({
      type: 'GET',
      url: this.projectUrl,
      dataType: 'html',
      success: (data) => this.handleAjaxSuccess(data, projectId),
    });
  }

  handleAjaxSuccess(data, projectId) {
    const $parsed = $('<div>').append($.parseHTML(data));
    const project = $parsed.find('#project-' + projectId);
    const title = $parsed.find('title').text();

    if (this.$body.hasClass('project-loaded')) {
      $('#project-container').append(project);
    } else {
      $('#project-container').html(project);
      this.$body.addClass('project-loaded');
      $(project).addClass('active');
    }

    this.updateHistory(title, this.projectUrl);
  }

  updateHistory(title, url) {
    history.pushState(null, title, url);
    document.title = title;
  }

  bindHomeClick() {
    $('#project-close-overlay').on('click', this.handleProjectCloseOverlayClick);

    $('.site-title a').on('click', this.handleSiteTitleClick);
  }

  handleProjectCloseOverlayClick() {
    this.closeProjectPanel();
    this.updateHistory(WP.siteTitle, WP.siteUrl);
  }

  handleSiteTitleClick(e) {
    if ($('body').hasClass('project-open')) {

      if(e) {
        e.preventDefault();
      }

      this.closeProjectPanel();
      this.updateHistory(WP.siteTitle, WP.siteUrl);
    }
  }

  openProjectPanel() {
    // Trigger event on window
    window.dispatchEvent(this.openEvent);

    $('#project-wrapper').scrollTop(0);
    $('html').css('overflow', 'hidden');
    this.$body.addClass('project-open');
    this.titleSwapRequest = window.requestAnimationFrame(this.stickTitle);
    this.globieSwapRequest = window.requestAnimationFrame(this.stickGlobie);
  }

  closeProjectPanel() {
    // Trigger event on window
    window.dispatchEvent(this.closeEvent);

    $('html').css('overflow', 'initial');
    this.$body.removeClass('project-open project-loaded');
    this.titleSwapRequest = window.requestAnimationFrame(this.unstickTitle);
    this.globieSwapRequest = window.requestAnimationFrame(this.unstickGlobie);
  }

  stickTitle() {
    const siteTitleLeft = this.$headerSiteTitle.offset().left;
    const panelTitleLeft = this.$projectSiteTitle.offset().left;

    if (panelTitleLeft <= siteTitleLeft) {
      window.cancelAnimationFrame(this.titleSwapRequest);
      this.$body.addClass('title-stuck');
    } else {
      this.titleSwapRequest = window.requestAnimationFrame(this.stickTitle);
    }
  }

  unstickTitle() {
    const siteTitleLeft = this.$headerSiteTitle.offset().left;
    const panelTitleLeft = this.$projectSiteTitle.offset().left;

    if (panelTitleLeft >= siteTitleLeft) {
      window.cancelAnimationFrame(this.titleSwapRequest);
      this.$body.removeClass('title-stuck');
    } else {
      this.titleSwapRequest = window.requestAnimationFrame(this.unstickTitle);
    }
  }

  stickGlobie() {
    const footerGlobieLeft = this.$footerGlobie.offset().left;
    const projectGlobieLeft = this.$projectGlobie.offset().left;

    if (projectGlobieLeft <= footerGlobieLeft) {
      window.cancelAnimationFrame(this.globieSwapRequest);
      this.$body.addClass('globie-stuck');
    } else {
      this.globieSwapRequest = window.requestAnimationFrame(this.stickGlobie);
    }
  }

  unstickGlobie() {
    const footerGlobieLeft = this.$footerGlobie.offset().left;
    const projectGlobieLeft = this.$projectGlobie.offset().left;

    if (projectGlobieLeft >= footerGlobieLeft) {
      window.cancelAnimationFrame(this.globieSwapRequest);
      this.$body.removeClass('globie-stuck');
    } else {
      this.globieSwapRequest = window.requestAnimationFrame(this.unstickGlobie);
    }
  }
}

export default Projects;

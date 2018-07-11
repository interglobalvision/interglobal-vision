/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

class Projects {
  constructor() {
    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    window.requestAnimationFrame = window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60
 
    window.cancelAnimationFrame = window.cancelAnimationFrame
      || window.mozCancelAnimationFrame
      || function(requestID){clearTimeout(requestID)} //fall back
  }

  onResize() {
  }

  onReady() {
    this.bindProjectList();
    this.bindHomeClick();

    if ($('body').hasClass('single-project')) {
      // If single project template:
      // Set first project active &
      // disable scrolling on home content
      $('.project-content').addClass('active');
      $('html').css('overflow', 'hidden');
    }
  }

  bindProjectList() {
    const _this = this;

    $('.project-list-title a').on('click', this.handleProjectListTitleClick.bind(this));
  }

  handleProjectListTitleClick(e) {
    e.preventDefault();

    this.getProject(e.target);
  }

  getProject(target) {
    const projectUrl = target.href;
    const projectId = target.dataset.id;

    if (!$('body').hasClass('project-open')) {
      this.openProjectPanel();
    }

    $.ajax({
      type: 'GET',
      url: projectUrl,
      dataType: 'html',
      success: (data) => this.handleAjaxSuccess(data, projectUrl, projectId),
    });
  }

  handleAjaxSuccess(data, projectUrl, projectId) {
    const $parsed = $('<div>').append($.parseHTML(data));
    const project = $parsed.find('#project-' + projectId);
    const title = $parsed.find('title').text();

    if ($('body').hasClass('project-loaded')) {
      $('#project-container').append(project);
    } else {
      $('#project-container').html(project)
      $('body').addClass('project-loaded');
      $(project).addClass('active');
    }

    this.updateHistory(title, projectUrl);
  }

  updateHistory(title, url) {
    history.pushState(null, title, url);
    document.title = title;
  }

  bindHomeClick() {
    $('#project-close-overlay').on('click', this.handleProjectCloseOverlayClick.bind(this));

    $('.site-title a').on('click', this.handleSiteTitleClick.bind(this));
  }

  handleProjectCloseOverlayClick() {
    this.closeProjectPanel();
    this.updateHistory(WP.siteTitle, WP.siteUrl)
  }

  handleSiteTitleClick(e) {
    if ($('body').hasClass('project-open')) {
      e.preventDefault();
      this.closeProjectPanel();
      this.updateHistory(WP.siteTitle, WP.siteUrl);
    }
  }

  openProjectPanel() {
    $('#project-wrapper').scrollTop(0);
    $('html').css('overflow', 'hidden');
    $('body').addClass('project-open');
    this.titleSwapRequest = window.requestAnimationFrame(this.stickTitle.bind(this));
  }

  closeProjectPanel() {
    $('html').css('overflow', 'initial');
    $('body').removeClass('project-open project-loaded');
    this.titleSwapRequest = window.requestAnimationFrame(this.unstickTitle.bind(this));
  }

  stickTitle() {
    const siteTitleLeft = $('#header-site-title').offset().left
    const panelTitleLeft = $('#project-site-title').offset().left;

    if (panelTitleLeft <= siteTitleLeft) {
      window.cancelAnimationFrame(this.titleSwapRequest);
      $('body').addClass('title-stuck');
    } else {
      this.titleSwapRequest = window.requestAnimationFrame(this.stickTitle.bind(this));
    }
  }

  unstickTitle() {
    const siteTitleLeft = $('#header-site-title').offset().left
    const panelTitleLeft = $('#project-site-title').offset().left;

    if (panelTitleLeft >= siteTitleLeft) {
      window.cancelAnimationFrame(this.titleSwapRequest);
      $('body').removeClass('title-stuck');
    } else {
      this.titleSwapRequest = window.requestAnimationFrame(this.unstickTitle.bind(this));
    }
  }
}

export default Projects;

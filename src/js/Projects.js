/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

class Projects {
  constructor() {

    this.handleProjectListTitleClick = this.handleProjectListTitleClick.bind(this);
    this.handleProjectCloseOverlayClick = this.handleProjectCloseOverlayClick.bind(this);
    this.handleSiteTitleClick = this.handleSiteTitleClick.bind(this);
    this.handleAjaxSuccess = this.handleAjaxSuccess.bind(this);
    this.stickTitle = this.stickTitle.bind(this);
    this.unstickTitle = this.unstickTitle.bind(this);
    this.stickGlobie = this.stickGlobie.bind(this);
    this.unstickGlobie = this.unstickGlobie.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onReady = this.onReady.bind(this);

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

  }

  onResize() {
  }

  onReady() {
    this.$window = $(window);

    this.bindProjectList();
    this.bindHomeClick();

    if (this.$body.hasClass('single-project')) {
      // If single project template:
      // Set first project active &
      // disable scrolling on home content
      $('.project-content').addClass('active');
      $('html').css('overflow', 'hidden');

      this.bindNextProject();
    }
  }

  bindProjectList() {
    $('.project-list-title a').on('click', this.handleProjectListTitleClick);
  }

  handleProjectListTitleClick(e) {
    e.preventDefault();

    const url = e.target.href;
    const id = e.target.dataset.id;

    this.getProject(url, id, true);
  }

  getProject(url, id = '', pushHistory = true) {
    if (!this.$body.hasClass('project-open')) {
      this.openProjectPanel();
    }

    $.ajax({
      type: 'GET',
      url,
      dataType: 'html',
      success: (data) => this.handleAjaxSuccess(data, url, id, pushHistory),
    });
  }

  handleAjaxSuccess(data, projectUrl, projectId, pushHistory = true) {
    console.log('AJAX SUCCESS');

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

    this.bindNextProject();

    if(pushHistory)
      this.updateHistory(title, projectUrl);
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
      e.preventDefault();
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

  bindScroll() {
    console.log('BIND SCROLL');
    $('#project-wrapper').on('scroll.projectScroll', this.handleScroll);
  }

  unbindScroll() {
    console.log('UNBIND SCROLL');
    $('#project-wrapper').off('scroll.projectScroll', this.handleScroll);
  }

  handleScroll() {
    if (this.$nextProject.length) {
      if(this.$nextProject.offset().top - this.$window.height() * 1.2 <= 0) {
        // unbind scroll to avoid mutiple loads

        const { nextId, nextUrl } = this.$nextProject.data();
        this.getProject(nextUrl, nextId, false);

        console.log('LOAD NEW PROJECT', nextUrl);

        // Reset next project
        this.$nextProject.remove();
        this.$nextProject = [];
      }
    }
  }

  bindNextProject() {
    if ($('.next-project').length) {
      this.$nextProject = $('.next-project');
      console.log('NEW NEXT PROJECT', this.$nextProject[0]);
      this.bindScroll();
    }
  }
}

export default Projects;

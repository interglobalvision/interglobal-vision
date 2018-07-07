/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

class Projects {
  constructor() {
    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));
  }

  onResize() {
  }

  onReady() {
    this.bindProjectList();
    this.bindHomeClick();
  }

  bindProjectList() {
    const _this = this;

    $('.project-list-title a').on('click', (e) => {
      e.preventDefault();

      _this.getProject(e.target);
    });
  }

  getProject(target) {
    const _this = this;
    const projectUrl = target.href;
    const projectId = target.dataset.id;

    $.ajax({
      type: 'GET',
      url: projectUrl,
      dataType: 'html',
      success: function(data){
        const project = $(data).find('#project-' + projectId);
        const title = $(data).filter('title').text();

        if ($('body').hasClass('project-open')) {
          $('#project-container').append(project);
        } else {
          $('#project-container').html(project);
        }

        _this.openProjectPanel();
        _this.updateHistory(title, projectUrl);
      }
    });
  }

  updateHistory(title, url) {
    history.pushState(null, title, url);
    document.title = title;
  }

  bindHomeClick() {
    const _this = this;

    $('#project-close-overlay').on('click', () => {
      _this.closeProjectPanel();
      _this.updateHistory(WP.siteTitle, WP.siteUrl)
    });

    $('#site-title a').on('click', (e) => {
      if ($('body').hasClass('project-open')) {
        e.preventDefault();
        _this.closeProjectPanel();
        _this.updateHistory(WP.siteTitle, WP.siteUrl);
      }
    });
  }

  openProjectPanel() {
    $('#project-wrapper').scrollTop(0);
    $('html').css('overflow', 'hidden');
    $('body').addClass('project-open');
  }

  closeProjectPanel() {
    $('html').css('overflow', 'initial');
    $('body').removeClass('project-open');
  }
}

export default Projects;

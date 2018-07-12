<?php
get_header();
?>

<main id="main-content">
  <section id="project-list" class="margin-top-extra margin-bottom-large">
    <div class="container">
      <div class="grid-row">

<?php
$projects = new WP_Query( array(
  'posts_per_page' => -1,
  'post_type' => 'project',
));

if ($projects->have_posts()) {
  while ($projects->have_posts()) {
    $projects->the_post();

    $services = get_the_terms(get_the_ID(), 'service');
?>

        <article <?php post_class('grid-item item-s-12 margin-bottom-tiny'); ?>>

          <h1 class="project-list-title font-size-large font-bold"><a href="<?php the_permalink() ?>" data-id="<?php the_ID(); ?>"><?php the_title(); ?></a></h1>

          <span class="project-list-service font-size-tiny"><?php echo !empty($services) ? $services[0]->name : ''; ?></span>

        </article>

<?php
  }
}
?>

      </div>
    </div>
  </section>

  <div id="project-close-overlay"></div>

  <section id="project">
    <canvas id="dropshadow" width="100"></canvas>
    <div id="project-wrapper">
      <div id="project-site-title" class="site-title font-size-basic font-bold padding-top-basic"><a href="<?php echo home_url(); ?>">interglobal.vision</a></div>
      <div id="project-container" class="container padding-bottom-mid">
        <?php
          if (is_singular('project')) {
            get_template_part('partials/project');
          }
        ?>
      </div>
    </div>
  </section>

</main>

<div id="contact">
  <div class="container">
    <div class="grid-row">
      <div class="grid-item item-l-6 offset-l-6 no-gutter font-size-small">
        <?php get_template_part('partials/contact'); ?>
      </div>
    </div>
  </div>
</div>

<?php
  get_footer();
?>

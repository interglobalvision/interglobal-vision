<?php
get_header();
?>

<main id="main-content">
  <section id="posts">
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

    $project_type = get_post_meta( get_the_ID(), '_igv_project_type', true );
?>

        <article <?php post_class('grid-item item-s-12'); ?> id="post-<?php the_ID(); ?>">

          <h1><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
          <?php echo $project_type; ?>

        </article>

<?php
  }
}
?>

      </div>
    </div>
  </section>

</main>

<?php
  get_footer();
?>

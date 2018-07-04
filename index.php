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

          <a href="<?php the_permalink() ?>"><h1 href="<?php the_permalink() ?>"><?php the_title(); ?></h1></a>
          <a href="<?php the_permalink() ?>"><?php echo $project_type; ?></a>

        </article>

<?php
  }
} else {
?>
        <article class="u-alert grid-item item-s-12"><?php _e('Sorry, no posts matched your criteria :{'); ?></article>
<?php
} ?>

      </div>
    </div>
  </section>

</main>

<?php
  get_footer();
?>

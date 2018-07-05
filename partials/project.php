<section id="project">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
    $project_doc = get_post_meta( get_the_ID(), '_igv_project_documentation', true );
?>

        <article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
          <div class="grid-row">
            <div class="item-s-12 item-l-6 offset-l-1">
              <?php the_content(); ?>
            </div>
          </div>

<?php
    // Iterate thru rows
    foreach($project_doc as $row_key => $row) {
      // Make row classes (alignment and justify)
      $row_classes = "{$row['align_items']} {$row['justify_content']}";
?>
  <div class="grid-row margin-bottom-mid <?php echo $row_classes; ?>">
<?php
      if (!empty($row['caption'])) { // CAPTION
?>
            <div class="item-s-12 item-m-10 item-l-6 offset-l-1">
              <?php echo apply_filters('the_content', $row['caption']); ?>
            </div>
<?php
      } else if (!empty($row['files'])) { // FILES

        $files = $row['files'];

        // Go thru items in the row
        foreach($files as $item_key => $items) {
          $item_classes = !empty($row['item_widths'][$item_key]) ? $row['item_widths'][$item_key] : '';

          if (is_videos($items)) { // VIDEO
            $videos = $items;
?>
            <div class="<?php echo $item_classes; ?>">
              <?php include(locate_template('partials/video.php')); ?>
            </div>
<?php
          } else if (is_images($items)) { // IMAGE
            $media_id = array_keys($items)[0];
?>
            <div class="<?php echo $item_classes; ?>">
              <?php echo wp_get_attachment_image($media_id, 'gallery'); ?>
            </div>
<?php
          }
        }
      }
?>

          </div>
<?php
    }
?>

        </article>

<?php
  }
} else {
?>
        <article class="u-alert grid-item item-s-12"><?php _e('Sorry, no posts matched your criteria :{'); ?></article>
<?php
} ?>
</section>
<?php

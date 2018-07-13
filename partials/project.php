<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
    $project_doc = get_post_meta( get_the_ID(), '_igv_project_documentation', true );
?>

        <article <?php post_class('project-content'); ?> id="project-<?php the_ID(); ?>">
          <header class="project-header grid-row align-items-center padding-top-small">
            <div class="arrow"></div>
            <h1 class="project-title font-size-basic font-bold flex-grow"><?php the_title(); ?></h1>
          </header>

          <div class="grid-row margin-top-extra margin-bottom-basic">
            <div class="grid-item item-s-12 item-m-8 offset-l-1 item-xl-6 font-size-mid">
              <?php the_content(); ?>
            </div>
          </div>

<?php
    // Iterate thru rows
    foreach($project_doc as $row_key => $row) {
      // Make row classes (alignment and justify)
      $row_classes = "{$row['align_items']} {$row['justify_content']}";
?>
          <div class="grid-row">
<?php
      if (!empty($row['caption'])) { // CAPTION
?>
            <div class="grid-item item-s-12 item-m-8 offset-l-1 item-xl-6 font-size-mid margin-top-basic margin-bottom-basic">
              <?php echo apply_filters('the_content', $row['caption']); ?>
            </div>
<?php
      } else if (!empty($row['files'])) { // FILES
?>
            <div class="project-image-row item-s-12 item-m-12 item-l-8 offset-l-2 no-gutter grid-row <?php echo $row_classes; ?>">
<?php
        $files = $row['files'];

        // Go thru items in the row
        foreach($files as $item_key => $items) {
          $item_classes = !empty($row['item_widths'][$item_key]) ? $row['item_widths'][$item_key] : '';
?>
              <div class="grid-item margin-top-basic margin-bottom-basic text-align-center <?php echo $item_classes; ?>">
<?php
          if (!empty($row['item_frame'][$item_key])) {
?>
                <div class="browser-frame <?php echo $row['item_frame'][$item_key]; ?>">
<?php
          }

          if (is_videos($items)) { // VIDEO
            $videos = $items;
            include(locate_template('partials/video.php'));
          } else if (is_images($items)) { // IMAGE
            $media_id = array_keys($items)[0];
            echo wp_get_attachment_image($media_id, 'gallery');
          }

          if (!empty($row['item_frame'][$item_key])) {
?>
                </div>
<?php
          }
?>
              </div>
<?php
        }
?>
            </div>
<?php
      }
?>
          </div>
<?php
    }
?>

        </article>

<?php
  }
}
?>

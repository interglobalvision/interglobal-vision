<?php
$home_page = get_page_by_path('home');
$about = $home_page->post_content;
$clients = get_post_meta($home_page->ID, '_igv_clients', true);
$careers = get_post_meta($home_page->ID, '_igv_careers', true);
?>
  <footer id="footer" class="shadow shadow-top padding-top-mid padding-bottom-small">
    <div class="container">
      <div class="grid-row">
        <div class="grid-item item-s-12 item-m-6 item-l-6 item-xl-7 padding-bottom-mid font-size-mid">
          <?php echo apply_filters('the_content', $about); ?>
        </div>
        <div class="grid-item item-s-12 item-m-6 item-l-6 item-xl-5 no-gutter font-size-small padding-bottom-mid">
        <?php
          get_template_part('partials/contact');

          if (!empty($clients)) {
        ?>
          <div class="grid-row margin-bottom-micro">
            <div class="grid-item item-s-12 item-l-2 offset-l-2">
              <h4 class="font-size-tiny font-bold"><?php _e('[:en]Select Clients[:es]Clientes selectos[:ko]셀렉트 <span class="u-inline-block">클라이언트</span>[:]'); ?></h4>
            </div>
            <div class="grid-item item-s-12 item-l-6 item-l-8">
              <p>
                <?php
                  $last_index = count($clients) - 1;
                  for ($i = 0; $i <= $last_index; $i++) {
                    echo '<span>';
                    echo $clients[$i];
                    echo $i !== $last_index ? ' • ' : '';
                    echo '</span>';
                  }
                ?>
              </p>
            </div>
          </div>
        <?php
          }

          if (!empty($careers)) {
        ?>
          <div class="grid-row margin-bottom-micro">
            <div class="grid-item item-s-12 item-l-2 offset-l-2">
              <h4 class="font-size-tiny font-bold"><?php _e('[:en]Careers[:es]Oportunidades[:ko]기회[:]'); ?></h4>
            </div>
            <div class="grid-item item-s-12 item-l-8">
              <?php echo apply_filters('the_content', $careers); ?>
            </div>
          </div>
        <?php
          }
        ?>
        </div>
      </div>
    </div>

    <?php get_template_part('partials/globie.svg'); ?>
  </footer>

</section>

<?php
get_template_part('partials/scripts');
get_template_part('partials/schema-org');
?>

</body>
</html>

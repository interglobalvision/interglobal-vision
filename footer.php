<?php
$home_page = get_page_by_path('home');
$about = $home_page->post_content;
$email = get_post_meta($home_page->ID, '_igv_email', true);
$phone = get_post_meta($home_page->ID, '_igv_phone', true);
$clients = get_post_meta($home_page->ID, '_igv_clients', true);
$careers = get_post_meta($home_page->ID, '_igv_careers', true);
?>
  <footer id="footer" class="shadow shadow-top">
    <div class="container">
      <div class="grid-row">
        <div class="grid-item item-s-12 item-m-10 item-l-5">
          <?php echo apply_filters('the_content', $about); ?>
        </div>
        <div class="grid-item item-s-12 item-m-8 item-l-6 offset-l-1 no-gutter font-size-small">
        <?php
          if (!empty($email)) {
        ?>
          <div class="grid-row margin-bottom-micro">
            <div class="grid-item item-s-12 item-l-2 offset-l-2">
              <h4 class="font-size-tiny font-bold">Email</h4>
            </div>
            <div class="grid-item item-s-12 item-l-8">
              <a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a>
            </div>
          </div>
        <?php
          }

          if (!empty($phone)) {
        ?>
          <div class="grid-row margin-bottom-micro">
            <div class="grid-item item-s-12 item-l-2 offset-l-2">
              <h4 class="font-size-tiny font-bold">Telephone</h4>
            </div>
            <div class="grid-item item-s-12 item-l-8">
              <a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a>
            </div>
          </div>
        <?php
          }

          if (!empty($clients)) {
        ?>
          <div class="grid-row margin-bottom-micro">
            <div class="grid-item item-s-12 item-l-2 offset-l-2">
              <h4 class="font-size-tiny font-bold">Select Clients</h4>
            </div>
            <div class="grid-item item-s-12 item-l-6 item-l-8">
            <?php
              $last_index = count($clients) - 1;
              for ($i = 0; $i <= $last_index; $i++) {
                echo '<span>';
                echo $clients[$i];
                echo $i !== $last_index ? ' • ' : '';
                echo '</span>';
              }
            ?>
            </div>
          </div>
        <?php
          }

          if (!empty($careers)) {
        ?>
          <div class="grid-row margin-bottom-micro">
            <div class="grid-item item-s-12 item-l-2 offset-l-2">
              <h4 class="font-size-tiny font-bold">Careers</h4>
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
  </footer>

</section>

<?php
get_template_part('partials/scripts');
get_template_part('partials/schema-org');
?>

</body>
</html>

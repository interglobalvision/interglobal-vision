<?php
$home_page = get_page_by_path('home');
$email = get_post_meta($home_page->ID, '_igv_email', true);
$phone = get_post_meta($home_page->ID, '_igv_phone', true);

if (!empty($email)) {
?>
<div class="grid-row margin-bottom-micro contact-item">
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
<div class="grid-row margin-bottom-micro contact-item">
  <div class="grid-item item-s-12 item-l-2 offset-l-2">
    <h4 class="font-size-tiny font-bold">Telephone</h4>
  </div>
  <div class="grid-item item-s-12 item-l-8">
    <a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a>
  </div>
</div>
<?php
}
?>

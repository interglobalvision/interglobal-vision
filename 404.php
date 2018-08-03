<?php
get_header();
?>

<main id="main-content">
  <section id="404" class="margin-top-extra margin-bottom-large">
    <div class="container">
      <div class="grid-row align-items-center">
        <div class="grid-item item-s-12 text-align-center font-size-large">
<?php
switch(qtranxf_getLanguage()) {
  case 'es':
?>
          <span>404: ¡No se encontraron los <span id="globie-part">Pies</span>!</span>
<?php
    break;
  case 'ko':
?>
          <span>404: <span id="globie-part">발</span>를 찾을 수 없음!</span>
<?php
    break;
  default:
?>
          <span>404: <span id="globie-part">Feet</span> not found!</span>
<?php
}
?>
        </div>
      </div>
    </div>
  </section>
</main>

<div id="contact">
  <div class="container">
    <div class="grid-row">
      <div class="grid-item item-l-6 offset-l-6 item-xl-5 offset-xl-7 no-gutter font-size-small">
        <?php get_template_part('partials/contact'); ?>
      </div>
    </div>
  </div>
</div>

<?php
get_footer();
?>

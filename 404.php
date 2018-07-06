<?php
get_header();
?>

<section id="main-content">
  <div id="page-404" class="grid-row align-items-center">
    <div class="grid-item item-s-12 text-align-center font-size-large">
<?php
switch(qtranxf_getLanguage()) {
  case 'es':
?>
      <span>¡404 No se encontraron los <span id="globie-part">Pies</span>!</span>
<?php
    break;
  case 'kr':
?>
      <span>404 <span id="globie-part">발</span>를 찾을 수 없음!</span>
<?php
    break;
  default:
?>
      <span>404 <span id="globie-part">Foot</span> not found!</span>
<?php
}
?>
    </div>
  </div>
</section>

<?php
get_footer();
?>

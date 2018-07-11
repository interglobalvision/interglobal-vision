<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php wp_title('|',true,'right'); bloginfo('name'); ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

<?php
get_template_part('partials/globie');
get_template_part('partials/seo');
?>

  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
  <link rel="icon" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.png">
  <link rel="shortcut" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.ico">
  <link rel="apple-touch-icon" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon-touch.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.png">

<?php if (is_singular() && pings_open(get_queried_object())) { ?>
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
<?php } ?>

  <?php wp_head(); ?>

<?php
  $home_page = get_page_by_path('home');
  $color_home = get_post_meta($home_page->ID, '_igv_home_color', true);
  $color_footer = get_post_meta($home_page->ID, '_igv_footer_color', true);
  $color_project = get_post_meta($home_page->ID, '_igv_project_color', true);
  $color_font = get_post_meta($home_page->ID, '_igv_font_color', true);

  echo '<style type="text/css">';
  echo !empty($color_home) ? 'html, #project-close-overlay { background-color: ' . $color_home . '}' : '';
  echo !empty($color_footer) ? 'footer#footer { background-color: ' . $color_footer . '}' : '';
  echo !empty($color_project) ? '#project { background-color: ' . $color_project . '}' : '';
  echo !empty($color_font) ? 'html, body.contact-stuck #footer .contact-item { color: ' . $color_font . '}' : '';
  echo '</style>';
?>

</head>

<?php
  $body_classes = is_singular('project') ? 'project-open project-loaded title-stuck' : '';
?>

<body <?php body_class($body_classes); ?>>
<!--[if lt IE 9]><p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->

<section id="main-container">

  <header id="header">
    <div id="language-switch" class="margin-top-basic">
      <div class="grid-row justify-end">
        <div class="grid-item font-size-small font-bold">
          <?php
            // language switcher
            global $q_config;
            $enabled_langs = $q_config['enabled_languages'];
            $lang_names = $q_config['language_name'];

            for ($i = 0; $i < count($enabled_langs); $i++) {
              // echo language conversion link
              echo '<a href="' . qtranxf_convertURL('', $enabled_langs[$i], false, true) . '" hreflang="' . $enabled_langs[$i] . '">' . $lang_names[$enabled_langs[$i]] . '</a>';
              // echo backslash divider
              echo $i < (count($enabled_langs) - 1) ? ' / ' : '';
            };
          ?>
        </div>
      </div>
    </div>

    <h1 id="site-title" class="site-title font-size-basic font-bold padding-top-basic"><a href="<?php echo home_url(); ?>">interglobal.vision</a></h1>
  </header>

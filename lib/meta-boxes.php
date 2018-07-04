<?php

/* Get post objects for select field options */
function get_post_objects( $query_args ) {
  $args = wp_parse_args( $query_args, array(
    'post_type' => 'post',
  ) );
  $posts = get_posts( $args );
  $post_options = array();
  if ( $posts ) {
    foreach ( $posts as $post ) {
      $post_options [ $post->ID ] = $post->post_title;
    }
  }
  return $post_options;
}


/**
 * Include and setup custom metaboxes and fields.
 *
 * @category YourThemeOrPlugin
 * @package  Metaboxes
 * @license  http://www.opensource.org/licenses/gpl-license.php GPL v2.0 (or later)
 * @link     https://github.com/WebDevStudios/CMB2
 */

/**
 * Hook in and add metaboxes. Can only happen on the 'cmb2_init' hook.
 */
add_action( 'cmb2_init', 'igv_cmb_metaboxes' );
function igv_cmb_metaboxes() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  /**
  * Metaboxes declarations here
  * Reference: https://github.com/WebDevStudios/CMB2/blob/master/example-functions.php
  */

  $home_page = get_page_by_path('home');

  if(!empty($home_page)) {

    $home_metabox = new_cmb2_box( array(
      'id'            => $prefix . 'home_metabox',
      'title'         => esc_html__( 'Options', 'cmb2' ),
      'object_types'  => array( 'page' ), // Post type
      'show_on'      => array(
        'key' => 'id',
        'value' => array($home_page->ID)
      ),
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Email', 'cmb2' ),
      'id'         => $prefix . 'email',
      'type'       => 'text_email',
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Phone', 'cmb2' ),
      'id'         => $prefix . 'phone',
      'type'       => 'text_medium',
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Select Clients', 'cmb2' ),
      'id'         => $prefix . 'clients',
      'type'       => 'text',
      'repeatable'  => true,
      'options' => array(
        'add_row_text' => 'Add Client',
      ),
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Careers', 'cmb2' ),
      'id'         => $prefix . 'careers',
      'type'       => 'wysiwyg',
      'options' => array(
        'textarea_rows' => 5,
        'teeny' => true,
        'media_buttons'  => false,
      ),
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Home Background Color', 'cmb2' ),
      'id'         => $prefix . 'home_color',
      'type'       => 'colorpicker',
      'default' => '#E9D5C0',
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Footer Background Color', 'cmb2' ),
      'id'         => $prefix . 'footer_color',
      'type'       => 'colorpicker',
      'default' => '#F0F0F0',
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Project Background Color', 'cmb2' ),
      'id'         => $prefix . 'project_color',
      'type'       => 'colorpicker',
      'default' => '#FEFEFE',
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Font Color', 'cmb2' ),
      'id'         => $prefix . 'font_color',
      'type'       => 'colorpicker',
      'default' => '#010101',
    ) );

    $home_metabox->add_field( array(
      'name'       => esc_html__( 'Drop Shadow Color', 'cmb2' ),
      'id'         => $prefix . 'shadow_color',
      'type'       => 'colorpicker',
      'default' => '#010101',
    ) );

  }

}
?>

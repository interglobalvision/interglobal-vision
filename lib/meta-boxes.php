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

  $project_metabox = new_cmb2_box( array(
    'id'            => $prefix . 'project_metabox',
    'title'         => esc_html__( 'Documentation', 'cmb2' ),
    'object_types'  => array( 'project' ), // Post type
    // 'show_on_cb' => 'yourprefix_show_if_front_page', // function should return a bool value
    // 'context'    => 'normal',
    // 'priority'   => 'high',
    // 'show_names' => true, // Show field names on the left
    // 'cmb_styles' => false, // false to disable the CMB stylesheet
    // 'closed'     => true, // true to keep the metabox closed by default
    // 'classes'    => 'extra-class', // Extra cmb2-wrap classes
    // 'classes_cb' => 'yourprefix_add_some_classes', // Add classes through a callback.
  ) );


  $project_metabox->add_field( array(
    'name'       => esc_html__( 'Project Type', 'cmb2' ),
    'id'         => $prefix . 'project_type',
    'type'       => 'text',
  ) );

  $documentation_group = $project_metabox->add_field( array(
    'id'          => $prefix . 'project_documentation',
    'type'        => 'group',
    'options'     => array(
      'group_title'   => esc_html__( 'Row {#}', 'cmb2' ), // {#} gets replaced by row number
      'add_button'    => esc_html__( 'Add Another Row', 'cmb2' ),
      'remove_button' => esc_html__( 'Remove Row', 'cmb2' ),
      'sortable'      => true, // beta
      // 'closed'     => true, // true to have the groups closed by default
    ),
  ) );

  $project_metabox->add_group_field( $documentation_group, array(
    'name' => esc_html__( 'Images / Videos', 'cmb2' ),
    'id'   => 'files',
    'type' => 'file_list',
    'preview_size' => array( 150, 150 ),
    'repeatable' => true,
  ) );

  $project_metabox->add_group_field( $documentation_group, array(
    'name'             => esc_html__( 'align-items:', 'cmb2' ),
    'id'               => 'align_items',
    'type'             => 'radio_inline',
    'options'          => array(
      'align-items-start' => esc_html__( 'start', 'cmb2' ),
      'align-items-center' => esc_html__( 'center', 'cmb2' ),
      'align-items-end' => esc_html__( 'end', 'cmb2' ),
    ),
    'default' => 'align-items-start',
  ) );

  $project_metabox->add_group_field( $documentation_group, array(
    'name'             => esc_html__( 'justify-content:', 'cmb2' ),
    'id'               => 'justify_content',
    'type'             => 'radio_inline',
    'options'          => array(
      'justify-start' => esc_html__( 'start', 'cmb2' ),
      'justify-center' => esc_html__( 'center', 'cmb2' ),
      'justify-end' => esc_html__( 'end', 'cmb2' ),
      'justify-between' => esc_html__( 'space between', 'cmb2' ),
      'justify-around' => esc_html__( 'space around', 'cmb2' ),
    ),
    'default' => 'justify-center',
  ) );

  $project_metabox->add_group_field( $documentation_group, array(
    'name' => esc_html__( 'Item widths', 'cmb2' ),
    'id'   => 'item_widths',
    'desc' => esc_html__( 'Ex: item-s-12 item-m-6 item-l-3. Not applied to Captions', 'cmb2' ),
    'type' => 'text',
    'options'          => array(
      'add_row_text' => __( 'Add Item', 'cmb2' ),
    ),
    'repeatable' => true,
  ) );

  $project_metabox->add_group_field( $documentation_group, array(
    'name' => esc_html__( 'Item frame', 'cmb2' ),
    'id'               => 'item_frame',
    'type'             => 'select',
    'options'          => array(
      '' => esc_html__( 'None', 'cmb2' ),
      'frame-mobile' => esc_html__( 'Mobile', 'cmb2' ),
      'frame-desktop' => esc_html__( 'Desktop', 'cmb2' ),
    ),
    'default' => '',
    'repeatable' => true,
  ) );

  $project_metabox->add_group_field( $documentation_group, array(
    'name'    => esc_html__( 'Caption', 'cmb2' ),
    'id'      => 'caption',
    'type'    => 'wysiwyg',
    'options' => array(
      'textarea_rows' => 5,
      'media_buttons' => false,
      'teeny' => true,
    ),
  ) );
}
?>

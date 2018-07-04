<?php
// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_project_taxonomies', 0 );

// create two taxonomies, types and themes for the post type "book"
function create_project_taxonomies() {
	// Add new taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Types', 'taxonomy general name', 'igv' ),
		'singular_name'     => _x( 'Type', 'taxonomy singular name', 'igv' ),
		'search_items'      => __( 'Search Types', 'igv' ),
		'all_items'         => __( 'All Types', 'igv' ),
		'parent_item'       => __( 'Parent Type', 'igv' ),
		'parent_item_colon' => __( 'Parent Type:', 'igv' ),
		'edit_item'         => __( 'Edit Type', 'igv' ),
		'update_item'       => __( 'Update Type', 'igv' ),
		'add_new_item'      => __( 'Add New Type', 'igv' ),
		'new_item_name'     => __( 'New Type Name', 'igv' ),
		'menu_name'         => __( 'Type', 'igv' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'type' ),
	);

	register_taxonomy( 'type', array( 'project' ), $args );
}
?>

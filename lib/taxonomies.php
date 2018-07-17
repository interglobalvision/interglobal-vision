<?php
// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_project_taxonomies', 0 );

function create_project_taxonomies() {
	// Add new taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Services', 'taxonomy general name', 'igv' ),
		'singular_name'     => _x( 'Service', 'taxonomy singular name', 'igv' ),
		'search_items'      => __( 'Search Services', 'igv' ),
		'all_items'         => __( 'All Services', 'igv' ),
		'parent_item'       => __( 'Parent Service', 'igv' ),
		'parent_item_colon' => __( 'Parent Service:', 'igv' ),
		'edit_item'         => __( 'Edit Service', 'igv' ),
		'update_item'       => __( 'Update Service', 'igv' ),
		'add_new_item'      => __( 'Add New Service', 'igv' ),
		'new_item_name'     => __( 'New Service Name', 'igv' ),
		'menu_name'         => __( 'Service', 'igv' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'service' ),
	);

	register_taxonomy( 'service', array( 'project' ), $args );
}
?>

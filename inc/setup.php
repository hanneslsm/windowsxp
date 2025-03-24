<?php

/**
 * Setup
 *
 * @package windowsxp
 * @since 0.1.0
 * @link https://developer.wordpress.org/themes/block-themes/block-theme-setup/
 */



if (!function_exists('windowsxp_setup')) :
	function windowsxp_setup()
	{
		// Make theme available for translation.
		load_theme_textdomain('windowsxp', get_template_directory() . '/languages');

		// Enqueue editor styles.
		add_editor_style('assets/css/editor-style.css');
	}
endif; // windowsxp_setup
add_action('after_setup_theme', 'windowsxp_setup');

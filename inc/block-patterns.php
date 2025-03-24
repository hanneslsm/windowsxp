<?php

/**
 * Patterns Setup
 *
 * @package windowsxp
 * @since 0.7
 */


/**
 * Remove core patterns.
 * @link https://developer.wordpress.org/themes/patterns/registering-patterns/#removing-core-patterns
 */
add_action('after_setup_theme', 'windowsxp_remove_core_patterns');

function windowsxp_remove_core_patterns()
{
    remove_theme_support('core-block-patterns');
}

/**
 * Disable remote patterns
 * @link https://developer.wordpress.org/themes/patterns/registering-patterns/#disabling-remote-patterns
 */
add_filter('should_load_remote_block_patterns', '__return_false');


/**
 * Register custom pattern categories
 * @link https://developer.wordpress.org/themes/patterns/registering-patterns/#registering-a-pattern-category
 */

add_action('init', 'windowsxp_register_pattern_categories');

function windowsxp_register_pattern_categories()
{
    register_block_pattern_category(
        'windowsxp/content',
        array(
            'label'       => __('Content', 'windowsxp'),
            'description' => __('Default basic heading & text layouts.', 'windowsxp')
        )
    );
}

/** Register Block Variations
 * --------------------------------------------- */

/**
 * Core Sapcer
 */
wp.blocks.registerBlockVariation( 'core/spacer', {
	name: 'spacer',
	title: 'Spacer',
	isDefault: true,
	attributes: {
		height: 'var:preset|spacing|40',
	},
} );

wp.blocks.registerBlockVariation( 'core/heading', {
	name: 'title-bar',
	title: 'Title bar',
	isDefault: false,
	description: 'A title bar for a window.',
	attributes: {
		level: 2,
		className: 'is-variation-title-bar',
	},
} );

wp.blocks.registerBlockVariation( 'core/group', {
	name: 'notepad-content',
	title: 'Notepad Content',
	isDefault: false,
	description: 'The content area for Noteoad.',
	attributes: {
		className: 'is-variation-notepad--content',
	},
} );

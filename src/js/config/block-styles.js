/** Register Block Styles
 * --------------------------------------------- */
import { registerBlockStyle } from '@wordpress/blocks';

const blockStyles = [
	{
		block: 'core/navigation',
		styles: [ { name: 'xp-taskbar--nav', label: 'XP Taskbar: Nav' } ],
	},
	{
		block: 'core/group',
		styles: [
			{ name: 'xp-taskbar', label: 'XP Taskbar' },
			{
				name: 'xp-taskbar--notification-area',
				label: 'XP Taskbar: Notification Area',
			},
			{ name: 'xp-notepad', label: 'XP Notepad' },
		],
	},
];

blockStyles.forEach( ( { block, styles } ) => {
	styles.forEach( ( { name, label } ) => {
		wp.blocks.registerBlockStyle( block, { name, label } );
	} );
} );

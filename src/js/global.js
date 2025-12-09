/**
 * global.js is loaded for both frontend and editor.
 */

/* Import Configs: Custom Block Styles & Block Variations */
import './config/block-styles.js';
import './config/block-variations.js';

/* Import Utilities */
import './utilities/on-stuck.js';

/* Import Cursor from npm */
import { trailingCursor } from "cursor-effects";
new trailingCursor({ element: document.querySelector(".wp-theme-windowsxp") });

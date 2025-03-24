///
/// Group
///

/* Block Style: Spotlight
============================================================== */
document.addEventListener( 'DOMContentLoaded', function () {
	const gradient = document.querySelector( '.is-style-prolooks-spotlight' );

	// Ensure the element exists before adding event listeners and manipulating styles
	if ( gradient ) {
		function onMouseMove( event ) {
			gradient.style.backgroundImage =
				'radial-gradient(at ' +
				event.clientX +
				'px ' +
				event.clientY +
				'px, rgba(0, 0, 0, 0) 0, var(--wp--preset--color--brand-3) 70%)';
		}

		// Add the mousemove event listener only if the element exists
		document.addEventListener( 'mousemove', onMouseMove );
	}
} );

console.log( 'Hello Script!' );

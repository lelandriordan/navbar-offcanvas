'use strict';

(function( $ ) {
	$(document).ready(function() {
		$('[data-toggle="offcanvas"]').click(function() {
			$('.offcanvas-wrapper, .navbar-offcanvas').toggleClass('active');
		});
	});
})( jQuery );
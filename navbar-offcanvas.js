'use strict';

(function( $ ) {
	$(document).ready(function() {
		$('[data-toggle="offcanvas"]').click(function() {
			$('.row-offcanvas, .navbar-offcanvas').toggleClass('active');
		});
	});
})( jQuery );
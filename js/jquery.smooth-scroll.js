/**
 * Created by stefan on 4/10/2015.
 * It's best practice to wrap your code in a closure. A closure is nothing more
 * than a function that helps limit the scope of variables so you don't
 * accidentally overwrite global variables.
 * https://www.drupal.org/node/171213
 */
jQuery(document).ready(function($) {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
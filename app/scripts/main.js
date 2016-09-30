(function() {
	function toggleClassMenu() {
		myMenu.classList.add('menu--animatable');
		if(!myMenu.classList.contains('menu--visible')) {
			myMenu.classList.add('menu--visible');
		} else {
			myMenu.classList.remove('menu--visible');
		}
	}

	function OnTransitionEnd() {
		myMenu.classList.remove('menu--animatable');
	}

	var myMenu = document.querySelector('.menu');
	var oppMenu = document.querySelector('.menu-icon');
	var closeMenu = document.querySelector('.menu-close');
	myMenu.addEventListener('transitionend', OnTransitionEnd, false);
	oppMenu.addEventListener('click', toggleClassMenu, false);
	closeMenu.addEventListener('click', toggleClassMenu, false);
})

$(function(){
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var $navbar = $('.header')
	var navbarHeight = $navbar.outerHeight();
	var $window = $(window);

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $window.scrollTop();

		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
		return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$navbar.removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if(st + $window.height() < $(document).height()) {
				$navbar.removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = st;
	}
});

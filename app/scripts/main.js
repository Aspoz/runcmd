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

$(function() {

    var didScroll = null,
        lastScrollTop = 0,
        delta = 4,
        headerTop = -96,
        navbarHeight = $('.header.sticky').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;

        if ($(document).scrollTop() <= headerTop) {
            $('.header').removeClass('sticky');
        } else {
            $('.header').addClass('sticky');
        }
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled($(this));
            didScroll = false;
        }
    }, 250);

    function hasScrolled(scrollObj) {

        var st = scrollObj.scrollTop();
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight && $('.header').hasClass('sticky')) {
            // Scroll Down
            console.log('add class');
            $('.header.sticky').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.header.sticky').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

});

;(function(){
	$(window).on('load', function(){
		setTimeout(function(){
			$(".ba-preloader").fadeOut();
		}, 500);

	});
})();


$(document).ready(function(){
	

});

$(window).on('load', function(){

	$('.hamburger').on('click', function (){
		$(this).toggleClass('is-active');

		if ($(this).has('.is-active')) {
			$('.ca-main-menu').toggleClass("mobile");
		} 

	});

	$('.ca-main-menu a').on('click', function (){
		$('.ca-main-menu a').removeClass('menu-active');
		$(this).toggleClass('menu-active');
	});
	
	// $(window).on('resize', function(){

	// if ($('.hamburger').css("display", "none")) {
	// 	$('.ca-main-menu').toggleClass("mobile");
	// }

	// });

	$('.ca-main-menu a').on('click', function (){
		$('.ca-main-menu a').removeClass('menu-active');
		$(this).toggleClass('menu-active');
	});
	

});

// else if ($(this).css("display", "none")) {
// 			$('.ca-main-menu').removeClass("mobile");
// 		}


;(function ($) {
	
	function checkScroll() {
		var scrollTop = $(window).scrollTop();
			if (scrollTop < 974) {
				$('.ca-main-menu a').removeClass('menu-active');
				$('.ca-main-menu li:nth-child(1) a').toggleClass('menu-active');
			} else if (scrollTop > 974 && !(scrollTop > 1674)) {
				$('.ca-main-menu a').removeClass('menu-active');
				$('.ca-main-menu li:nth-child(2) a').toggleClass('menu-active');
			} else if (scrollTop > 1674 && !(scrollTop > 2464)) {
				$('.ca-main-menu a').removeClass('menu-active');
				$('.ca-main-menu li:nth-child(3) a').toggleClass('menu-active');
			} else if (scrollTop > 2464 && !(scrollTop > 4448)) {
				$('.ca-main-menu a').removeClass('menu-active');
				$('.ca-main-menu li:nth-child(4) a').toggleClass('menu-active');
			} else if (scrollTop > 4448 && !(scrollTop > 5291)) {
				$('.ca-main-menu a').removeClass('menu-active');
				$('.ca-main-menu li:nth-child(5) a').toggleClass('menu-active');
			} else if (scrollTop > 5291) {
				$('.ca-main-menu a').removeClass('menu-active');
				$('.ca-main-menu li:nth-child(6) a').toggleClass('menu-active');
			} 

	}

	$(document).ready(function(){
				
		$(window).scroll(function(event) {
			checkScroll();
		});

			

	});

})(jQuery);
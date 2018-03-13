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
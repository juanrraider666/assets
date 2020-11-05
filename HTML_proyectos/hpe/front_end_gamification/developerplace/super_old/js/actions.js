// JavaScript Document


$(window).on("load", function (e) {
    'use strict';
	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(1200).fadeOut("slow");
})





 jQuery('.scrollbar-outer').scrollbar();  

var scene = document.getElementById('scene');
	var parallax = new Parallax(scene, {
    selector: '.layer'
  });
        

$('.show_more.left').click( function() {
    $(this).toggleClass("up");
    $(".col-left > div").slideToggle();
   
});

$('.show_more.right').click( function() {
    $(this).toggleClass("up");
    $(".col-right > div").slideToggle();
   
});

$('.change_color').click( function() {
    $(this).closest(".box").find(".palette").toggleClass("opened");
   
});

$('.palette').mouseleave( function() {
    $(this).removeClass("opened");
   
});

$('.all_right').mouseleave( function() {
   $(".b_scroll_list li").removeClass("active");
   
});


$('.palette li').click( function() {
     $(this).closest(".box").find(".palette li").removeClass("selected");
    $(this).addClass("selected");
   
});

$('.all_right .box').click( function() {
     $('.all_right .box').find(".b_scroll_list li").removeClass("active");
     $(this).closest('.all_right .box').find(".b_scroll_list li").addClass("active");
   
   
});







/*$('.test').click(function() {
    var sectionTo = $(this).attr('href');
    $('header, body, .w_inner, .scroll-wrapper, .scrollbar-outer').animate({
      scrollTop: $(sectionTo).offset().top 
    }, 500);
});*/



/*$(function() {
		'use strict';

		$('.scroll').click( function(event) {
			var $anchor = $(this);
			var headerH = $('.show_more').outerHeight();
			$(' .col-right, .all_right').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200);

			event.preventDefault();
		});
	});
*/

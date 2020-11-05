// JavaScript Document

$(document).ready( function() {
 "use strict";
 $('.carousel_wish').bxSlider({
 slideMargin: 30,
 autoReload: true,
 pager:false,
 moveSlides: 1,
 infiniteLoop: false,
 hideControlOnEnd: true,
 breaks: [{screen:0, slides:1 },{screen:550, slides:2, moveSlides: 2, slideMargin: 10},{screen:768, slides:3, moveSlides: 3, slideMargin: 10,},{screen:992, slides:4, moveSlides: 4, }, {screen:1200, slides:4, moveSlides: 5}]
 });
 
 });


/* refresh video al cerrar */
$('#modal-video').on('hidden.bs.modal', function () {
 $iframe = $(this).find( 'iframe' );
 $iframe.attr('src', $iframe.attr('src'));
 });
	/* fin refresh video al cerrar */	
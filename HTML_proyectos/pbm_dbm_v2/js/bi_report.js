// JavaScript Document


  /*  $(document).ready(function() {
        $('.mult_hpe_select').multiselect({
            includeSelectAllOption: true,
			numberDisplayed: 1,
		});
    });
*/

$(document).ready(function(){
	$(".filter_trigger").stop().mousedown(function(){
		$(".open_HPE").fadeIn(400);
	  });
	  
	$(".close_open_filter").stop().click(function(){
		$(".open_HPE").fadeOut(200);
	  });
	 
	$(".clear_filter_bc").click(function(){ 
	 $('input:checkbox').removeAttr('checked');
	 }); 
    
   
    $(".open_filter").click(function(){
       
       $(this).toggleClass("active"); $(this).closest(".hpe_filter").find(".content_checkboxes").slideToggle(300);
	  });
    
    
    
    
    
    
    
    /* center modal */
function centerModals($element) {
	"use strict";
  var $modals;
  if ($element.length) {
    $modals = $element;
  } else {
    $modals = $('.modal-vcenter:visible');
  }
  $modals.each( function() {
    var $clone = $(this).clone().css('display', 'block').appendTo('body');
    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
    top = top > 0 ? top : 0;
    $clone.remove();
    $(this).find('.modal-content').css("margin-top", top);
  });
}
$('.modal-vcenter').on('show.bs.modal', function() {
	"use strict";
  centerModals($(this));
});
$(window).on('resize', centerModals);
/* fin center modal */	


/* refresh video al cerrar */
$('#modal-video').on('hidden.bs.modal', function () {
 $iframe = $(this).find( 'iframe' );
 $iframe.attr('src', $iframe.attr('src'));
 });
	/* fin refresh video al cerrar */	
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
	}); 
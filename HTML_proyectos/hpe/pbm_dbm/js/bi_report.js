// JavaScript Document


  /*  $(document).ready(function() {
        $('.mult_hpe_select').multiselect({
            includeSelectAllOption: true,
			numberDisplayed: 1,
		});
    });
*/

$(document).ready(function(){
	

   
$(".open_filter").click(function(){
    $(this).toggleClass("active"); 
    $(".content_checkboxes").stop().slideUp(300);
   
    $(this).closest(".hpe_filter").find(".content_checkboxes").stop().slideToggle(300);
});

$("#btn_search").click(function(){
    $(".content_checkboxes").stop().slideUp(300);
      
});
    
    
    

 $(".select_all").click(function(){
    $(this).closest(".hpe_filter").find('input:checkbox').prop('checked', this.checked); 
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
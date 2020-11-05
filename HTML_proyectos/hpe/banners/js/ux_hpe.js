// JavaScript Document


  /*  $(document).ready(function() {
        $('.mult_hpe_select').multiselect({
            includeSelectAllOption: true,
			numberDisplayed: 1,
		});
    });
*/



$(document).ready(function(){
	
 "use strict";
    $('section.slider .bxslider').bxSlider({
        pager: true,
       // mode: 'fade',
        adaptiveHeight: true,
       // auto:true,

    });
    
  jQuery('.scrollbar-outer').scrollbar();  
    
     $('[data-toggle="tooltip"]').tooltip(); 
    
    
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
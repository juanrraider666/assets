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
    
    
	}); 
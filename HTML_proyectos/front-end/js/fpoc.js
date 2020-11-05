// JavaScript Document


/*slider = $('.slide_m').bxSlider();

$(window).on('resize',function() {
	"use strict";
   if ($(window).width() < 960) {
	slider.bxSlider();
	}
	else {
	slider.destroySlider();
	}
});


$(document).ready(function() {
	"use strict";
    $(window).trigger('resize');
});*/

$(document).ready(function(){		
"use strict";
$('.n_o_box').click( function() {
	$(".new_obj").addClass('show_fixed');
	$(".full_conten").addClass('full_positioned');
	});	

$('.save_obj').click( function() {
	$(".new_obj").removeClass('show_fixed');
	$(".obj_disti").addClass('show_fixed');
	$('.overlay_obj_disti').fadeIn();
	});	
	
$('.close_fixed').click( function() {
	$(".fixed_page").removeClass('show_fixed');
	$(".full_conten").removeClass('full_positioned');
	});		
	
$('.obj_disti').click(function(){
	$('.overlay_obj_disti').fadeOut();	  
});	
// add sams
$('#clone-js').click( function() {
    $('.clone_obj').removeClass('hidden');
});
$('.clone_obj--content .title').click(function(){
    $('.clone_obj').addClass('hidden');
});
$('.remove_mess').click(function(){
	$(".contain_message").fadeOut();

});	
$('.show_mess').click(function(){
	$(".contain_message").fadeIn();

});		
	
$('.box_default').click( function() {
	$(".box_default").removeClass('active');
	$(this).addClass('active');
	});		
	
 $('.box_default').change(function(){
   if($(this).is(':checked')) {
       $(this).parent().addClass('active'); 
   }
  else {
      $(this).parent().removeClass('active');
  }
 });	

/*Segmentos*/	
	
$('.seg_gr_box').click( function() {
	$(".new_seg_gr").addClass('show_fixed');
	$(".full_conten").addClass('full_positioned');
	});
	
$('.seg_team_box').click( function() {
	$(".new_seg_team").addClass('show_fixed');
	$(".full_conten").addClass('full_positioned');
	});		
	
$('.save_seg').click( function() {
	$(".fixed_page").removeClass('show_fixed');
	$(".full_conten").removeClass('full_positioned');
});

$('.icon_exp').click(function() {
  $('.pend_items_hidden').toggleClass('ppptr');
    $('.icon_exp').toggleClass('active');
	    if($(this).hasClass('active')) {
       $('.txt_pend').addClass('sda'); 
   }
  else {
      $('.txt_pend').removeClass('sda');
  }
  });


$('.collapse_awards').click( function(){
	$(".collapse").removeClass('in');
});

	$('.show_rewards').click(function() {
		if($(this).hasClass('active')) {			$(this).closest('.table-responsive').find('.show_rewards.active').removeClass('active');
    	}else{
			$(this).addClass('active');
		}
    });
	$(".collapse-level-one").off('hide.bs.collapse').on('hide.bs.collapse', function () {
	  var id = $(this).data('id');
	 $(".collapse-" + id, $(this).parent()).collapse('hide');
	});	
});		


/*$('.btn-active').mouseenter(function(){
	$(this).hasClass('acti');
	if($('.js-icon').hasClass('acti')){
		$('.js-icon').removeClass('acti');
		$('.js-icon').addClass('inactive');
		
	}else{
		$('.js-icon').removeClass('inactive');
		$('.js-icon').addClass('acti');
	}
});*/

$('.btn-active').hover(function(){
	$(".js-icon").addClass("acti");
    $(".js-icon").removeClass("active");
});


/**/


$('input[class="GoalType"]').click(function () {
	"use strict";
    $(this).tab('show');
});


$(".disti_evenly").change(function() {
	"use strict";
    if(this.checked) {
		
		$('.inside').addClass('w100');
		$('.balance_obj .input-group-addon, .w_disti').addClass('balance');
        
    }
	else{ $('.inside').removeClass('w100');
			$('.balance_obj .input-group-addon, .w_disti').removeClass('balance');
		}
		  
});	




$('#bulk_up').click(function () {
	"use strict";
    $('#diferent_goal .manual_upload, #diferent_goal .bulk_upload').toggleClass('hidden');
	 $(this).text(function(i, text){
          return text === "Back to List" ? "Bulk Upload" : "Back to List";
      });
});


$('#bulk_up2').click(function () {
	"use strict";
    $('#diferent_goal_pace .manual_upload, #diferent_goal_pace .bulk_upload').toggleClass('hidden');
	 $(this).text(function(i, text){
          return text === "Back to List" ? "Bulk Upload" : "Back to List";
      });

});



$('.show_more').click(function () {
	"use strict";
	 $(this).text(function(i, text){
          return text === "Show Less" ? "Show More" : "Show Less";
      });
	

	
	
	
});




Dropzone.autoDiscover = false;
$(function() {
"use strict";
  var myDropzone = new Dropzone("#drop_form");
  maxFiles: 1,
myDropzone.on("removedfile", function(file) {
    $(".bulk_upload_2").addClass("hidden");
	$("#drop_form").removeClass("slim_drop");  
  });	  
	
myDropzone.on("uploadprogress", function(file) {
 
	if($("#drop_form.dz-started .dz-message").css('display').toLowerCase() === 'none') {
		
	$("#drop_form").addClass("slim_drop");

	}
	else {
	$("#drop_form").removeClass("slim_drop");
	}

	
  });
	  
  myDropzone.on("success", function(file) { alert("Added file."); 
  $(".bulk_upload_2").removeClass("hidden");						
  });
});





$(function() {
"use strict";
  var myDropzone2 = new Dropzone("#drop_form2");
  maxFiles: 1,
myDropzone2.on("removedfile", function(file) {
    $(".bulk_upload_2a").addClass("hidden");
	$("#drop_form2").removeClass("slim_drop");  
  });	  
	
myDropzone2.on("uploadprogress", function(file) {
 
	if($("#drop_form2.dz-started .dz-message").css('display').toLowerCase() === 'none') {
		
	$("#drop_form2").addClass("slim_drop");

	}
	else {
	$("#drop_form2").removeClass("slim_drop");
	}

	
  });
	  
  myDropzone2.on("success", function(file) { alert("Added file."); 
  $(".bulk_upload_2a").removeClass("hidden");						
  });
});






$('.btn-number').click(function(e){
	
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
	"use strict";
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });







function check_cb(e) {
    if ( $('.cat_brack_item').children().length > 2 ) {
     $(".btn-close-cb").removeAttr('disabled');
	 }
}


$(".add_bracket").click(function(){
      $(".cat_brack:last").clone().appendTo(".cat_brack_item");
    });	




$(document).ready(check_cb);
$(".add_bracket").on("click", check_cb);




$(document).ready(function(){
	"use strict";
   $('.second_menu').affix({
      offset: {
        top: $('.header_logos').outerHeight(false)  
      }
});
	
	
	
    $('.second_menu').on('affixed.bs.affix', function(){
        $(this).next('.abc').css({"margin-top": $(".second_menu").outerHeight(true)  });
    });
	
	$('.second_menu').on('affixed-top.bs.affix', function(){
        $(this).next('.abc').css({"margin-top": 'inherit' });
    });

	
});
















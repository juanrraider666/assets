
$(document).ready(function(){
	
$('.sidebar-toggle').click(function(){
	

	if ( $('.sidebar-title').is(':hidden') ) {
    $('.sidebar').addClass('sidebar_opened').removeClass("sidebar_closed");
	$('.overlay_menu').show();
	
	$('.content-main').addClass('content_main_wide').removeClass("content_main_small");
	$('body').addClass('noscroll').removeClass('scrollable');
	}
	
	else{$('.sidebar').addClass('sidebar_closed').removeClass("sidebar_opened");
	
		$('.content-main').addClass('content_main_small').removeClass("content_main_wide");
		 
		$('.overlay_menu').hide();
		$('body').removeClass('noscroll').addClass('scrollable');

		 
		}
	});
});








$(document).ready(smallGraphtxt);
$(window).on('resize',smallGraphtxt);

function smallGraphtxt() {
	
    if ($('.graph_item').width() > 230 ) {
		$('.graph_item .va_c').addClass('big').removeClass('smallest');
  
		
}
	else if
		
		(  $('.graph_item').width() < 175)  {
		
		$('.graph_item .va_c').addClass('smallest').removeClass('big');
	}
	
else {

	$('.graph_item .va_c').removeClass('big smallest');
}
	
}












$(function () {
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 0, 9 - 1, 30);
	$('#defaultCountdown').countdown({until: austDay, format: 'DHMS', padZeroes: true});
	
	$('#defaultCountdown2').countdown({until: austDay, format: 'DHMS', padZeroes: true});
});
	






(function( $ ) {

    var $container = $('.grid');
    $container.imagesLoaded( function () {
        $container.masonry({
            itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
		  stamp: '.stamp',
        });
    });
    
    //Reinitialize masonry inside each panel after the relative tab link is clicked - 
    $('a[data-toggle=tab]').each(function () {
        var $this = $(this);

        $this.on('shown.bs.tab', function () {
        
            $container.imagesLoaded( function () {
                $container.masonry({
                     itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
		  stamp: '.stamp',
                });
            });

        }); //end shown
    });  //end each

	
    
})(jQuery);





 

var masonryUpdate = function() {
    setTimeout(function() {
        $('.grid').masonry({
                     itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
		  stamp: '.stamp',
                });
    }, 200);
	
};
 
$(document).on('click', masonryUpdate);




$(function () {
      $('.datapicker').datetimepicker({
		  
		  format: 'DD/MM/YYYY'
		  
	  });
 });






$('.filter_button').click(function(){
	
$('.filter_column > .row').toggleClass("show_filters").slideToggle(200);
	$('.dash').toggleClass("filter");
	
	
	});




$('.sidebar-content a').click(function(){
	
	$('.sidebar-content a').removeClass('active');
	$(this).toggleClass('active');
	
	
});

$('.dashboard_btn').click(function(){
	$(".col_item").hide();
	$(".dash_item").show();
	$(".ranking_ma_item").show();
	 $('.ranking_ma_item').removeClass('col-sm-12 col-md-12 col-lg-12');
	 $('.ranking_ma_item').addClass('col-sm-6 col-md-6 col-lg-6');
	$(".expand_btn").removeClass('cont');
	 masonryUpdate();
	

	 
});
	

$('.how_to_win_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".how_to_win_item").show();
	$('.nav a[href="#how_to_win"]').tab('show');
	 masonryUpdate();
	

});


$('.my_wins_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".how_to_win_item").show();
	$('.nav a[href="#my_wins"]').tab('show');
	 masonryUpdate();
	

});


$('.rewards_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".how_to_win_item").show();
	$('.nav a[href="#my_rewards"]').tab('show');
	 masonryUpdate();
	

});



$('.results_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".how_to_win_item").show();
	$('.nav a[href="#results"]').tab('show');
	 masonryUpdate();
	

});




$('.messages_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".messages_item").show();
	$('.nav a[href="#messages"]').tab('show');
	 masonryUpdate();
	

});


$('.alerts_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".messages_item").show();
	$('.nav a[href="#alerts"]').tab('show');
	 masonryUpdate();
	

});



$('.profile_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".profile_item").show();
	 masonryUpdate();
	

});


$('.expand_btn').click(function () {
	
	if ( $(this).hasClass('cont') ) {
	$(".dash_item").show();
	 $('.ranking_ma_item').removeClass('col-sm-12 col-md-12 col-lg-12');
	 $('.ranking_ma_item').addClass('col-sm-6 col-md-6 col-lg-6');
	$(this).removeClass('cont');
	masonryUpdate();
			
		}
	else {
	$(".col_item").hide();
	 $('.ranking_ma_item').removeClass('col-sm-6 col-md-6 col-lg-6');
	 $('.ranking_ma_item').addClass('col-sm-12 col-md-12 col-lg-12');
	$(this).addClass('cont');
	masonryUpdate();
		
	}

  });











$('.selectpicker').selectpicker({
  style: '',
  size: 4,
	
	
});








(function($) {

  'use strict';

  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-responsive');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
		$current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function($el, position){
      $el
      	.find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
      	.addClass( 'pull-xs-' + position );
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');
    
    updateDropdownMenu( $prev, 'left' );
    updateDropdownMenu( $current, 'center' );
    updateDropdownMenu( $next, 'right' );
  });

})(jQuery);






$('.j_caret').click(function(){
	
	if ( $(this).hasClass("rot") ) {
    $('.j_caret').removeClass("rot");
	}
	
	else{
		$('.j_caret').removeClass("rot");
		$(this).addClass("rot");
		 
		}


});










$('.show_rewards').click(function(){
	
	if ( $(this).find(".j_caret").hasClass("rot") ) {
    $(this).find(".j_caret").removeClass("rot");
	}
	
	else{
		
		$(this).find(".j_caret").addClass("rot");
		 
		}


});








$(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
      });	








	$('.pre_msg .dropdown-menu > li').click( function() {	
	$(".comp_msg_gen").hide();
	
	});	
		
	$('.pre_msg .dropdown-menu > li:last-child').click( function() {	
	$(".comp_msg_gen").show();
	
	});	
			



new ResizeSensor(jQuery('.sidebar'), function(){ 
	
	smallGraphtxt();
	// drawChart();
	//drawChart2();
	//drawChart3();
	//drawChart4();
});

jQuery(document).ready(function(){
	"use strict";
	jQuery('.scrollbar-outer').scrollbar({
		
		ignoreMobile : true,
		
	});
	
	
});




$('.remove_valid').click(function(){
	$(".validation").fadeOut();

});




    $(window).on('load',function(){
		
    $('#modal_fs').modal('show');
		
		
    });






$('#modal_fs').on('shown.bs.modal', function (e) {
   $('.swtch_txt, .swtch_txt2').circleType({fluid:true, });
	
	$('.slide_winners').bxSlider({
		
	pager:false,
	adaptiveHeight:true,

});


});



$(document).ready(function(){		
"use strict";
$('.open_detail').click( function() {

	if($(this).closest('.track_wrap').find(".tl_d, .wrap_details").css('display').toLowerCase() === 'none') {
	$(".tl_d, .wrap_details").slideUp();

	
	$(this).closest('.track_wrap').find(".tl_d, .wrap_details").slideDown();
	$('.open_detail span').text('Open Details');
	$('.open_detail').removeClass('down');
	$(this).find("span").text('Close Details');
	$(this).addClass('down');
	}
	else {
	$(this).closest('.track_wrap').find(".tl_d, .wrap_details").slideUp();
	
	$(this).find("span").text('Open Details');
	$(this).removeClass('down');
	}
	});	

	$('.step_r').hover( function() {	
	$(this).find(".tooltip_info").toggleClass("view");
	});

});	 

   


$('.special_drop li a').click(function () {
	 $(this).parents('.spc_drop').find('.dropdown-toggle').html($(this).text() + ' <span class="caret"></span>');
  });








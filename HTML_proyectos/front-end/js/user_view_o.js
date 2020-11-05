
$(document).ready(function(){
	
$('.sidebar-toggle').click(function(){
	

	if ( $('.sidebar-title').is(':hidden') ) {
    $('.sidebar').addClass('sidebar_opened').removeClass("sidebar_closed");
	$('.overlay_menu').show();
	$(".logo_o").removeClass("hide_copy");	
	$(".logo_o").addClass("show_copy");
	
	$('.content-main').addClass('content_main_wide').removeClass("content_main_small");
	$('body').addClass('noscroll').removeClass('scrollable');
	}
	
	else{$('.sidebar').addClass('sidebar_closed').removeClass("sidebar_opened");
		 $(".logo_o").removeClass("show_copy");
		 $(".logo_o").addClass("hide_copy");	
	
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

$('.dashboard_btn, .close_tabs').click(function(){
	$(".col_item").hide();
	$(".dash_item").show();
	$(".ranking_ma_item").show();
	 $('.ranking_ma_item').removeClass('col-sm-12 col-md-12 col-lg-12');
	 $('.ranking_ma_item').addClass('col-sm-6 col-md-6 col-lg-6');
	$(".expand_btn").removeClass('cont');
	$('.sidebar-content a').removeClass('active');
	$(".dashboard_btn").toggleClass('active');
	 masonryUpdate();
	 
});










var show_tab_menu = function(item, t){
    $(".col_item").hide();
    $(".ranking_ma_item").hide();
    item.show();
    t.tab('show');
    masonryUpdate();
}

if($('#how_to_win_team').length == 0){
    $('.how_to_win_btn').click(function(){
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#how_to_win"]'));
    });


    $('.my_wins_btn').click(function(){
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#my_wins"]'));
    });


    $('.rewards_btn').click(function(){
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#my_rewards"]'));
    });



    $('.results_btn').click(function(){
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#results"]'));
    });
}
else{
    $('.how_to_win_btn').click(function(){
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#how_to_win"]'));
    });


    $('.my_wins_btn').click(function(){
        show_tab_menu($('.my_wins_item'), $('.nav a[href="#my_wins"]'));
    });


    $('.rewards_btn').click(function(){
        show_tab_menu($('.my_rewards_item'), $('.nav a[href="#my_rewards"]'));
    });
    $('.results_btn').click(function(){
        show_tab_menu($('.results_item'), $('.nav a[href="#results"]'));
    });
}







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



$('.t_c_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".t_c_item").show();
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
	 drawChart();
	drawChart2();
	drawChart3();
	drawChart4();
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

var open_details_event = function (open) {
    var details = open.closest('.track_wrap').find(".wrap_details");
	details.css('overflow: hidden;');
    var redeemed_id = open.attr("id");
    var award_result_id = open.attr("data-content");

    if((redeemed_id + "" ) == ""){
        var form_reward_country = "";
        var form_reward_state = "";
        var form_reward_city = "";
        //
        $.get('tracking_details', { type_details:"confirm_address"}, function(template) {
            details.html($(template).html());
            $('.selectpicker').selectpicker('refresh');

            form_reward_country = $(template).find('#form_reward_country').val();
            form_reward_state = $(template).find('#form_reward_state').val();
            form_reward_city = $(template).find('#form_reward_city').val();
        })
            .done(function () {
                    var country = 0;

                    if(form_reward_country != "") {
                        $($("#state_" + userId).closest('.wrap_details').find('select')[0]).val(form_reward_country);
                        country = form_reward_country;
                    }else {
                        $($("#state_" + userId).closest('.wrap_details').find('select')[0]).val(1);
                        country = 1;
                    }

                    var route_citiies = url_get_states;
                    var route_countries = url_get_states_by_country;

                    $.ajax({
                        url: route_countries,
                        data: {id: country},
                        method: 'POST'
                    })
                        .done(function (data) {
                            $("#state_" + userId).html(data);

                            if(form_reward_state != "") {
                                $("#state_" + userId).find("select").val(form_reward_state);
                            }

                            $.ajax({
                                url: route_citiies,
                                data: {id: $("#state_" + userId).find("select").val()},
                            method: 'POST'
                        })
                            .done(function (data) {
                                $("#city_" + userId).html(data);
                                if(form_reward_city != "") {
                                    $("#city_" + userId).find("select").val(form_reward_city);
                                }

                                $("#city_" + userId).find("select").addClass('selectpicker');
                                $("#state_" + userId).find("select").addClass('selectpicker');
                                $('.selectpicker').selectpicker('refresh');
                            });
                            ///
                            $("#state_" + userId).find("select").on('change', function (e) {
                                $.ajax({
                                    url: route_citiies,
                                    data: {id: $("#state_" + userId).find("select").val()},
                                method: 'POST'
                            })
                                .done(function (data) {
                                    $("#city_" + userId).html(data);
                                    $("#city_" + userId).find("select").addClass('selectpicker');
                                    $('.selectpicker').selectpicker('refresh');
                                });
                            });

                            $('#cancel_address_validation').on('click', function () {
                                $('#validation_modal_rewards').slideUp();
                            });

                            $('#confirm_address_validation').on('click', function () {
                                var data = [];
                                data.push( award_result_id );
                                data.push($('#redeemed_filter_address_lineOne').val());
                                data.push(0);
                                data.push($($("#state_" + userId).find('select')[0]).val());
                                data.push($($("#city_" + userId).find('select')[0]).val());
                                data.push($('#redeemed_filter_address_postalCode').val());
                                data.push($('#redeemed_filter_person_phones_0_countryCode').val());
                                data.push($('#redeemed_filter_person_phones_0_areaCode').val());
                                data.push($('#redeemed_filter_person_phones_0_phoneNumber').val());
                                $('#validation_modal_rewards').slideUp();
                                $.ajax({
                                    url: route_confirm_addres,
                                    data: {data: data},
                                    method: 'POST'
                                })
                                    .done(function (data) {
                                        $.get('update_tracking_view', function(template) {
                                            $('#my_rewards').html($(template).html());

                                            $('.open_detail').click(function () {
                                                open_detail_click(this);

                                            });
                                            //repetir click de .open_detail
                                        })
                                    });
                                open.closest('.track_wrap').find(".tl_d, .wrap_details").slideUp();

                                open.text('Open Details');
                                open.removeClass('down');
                            });

                            $('#confirm_address').on('click', function () {
                                $('#validation_modal_rewards').slideDown();
                            });


                        });
                }
            )
    }
    else{
        if(open.attr("content") == "Rejected") {
            $.get('tracking_details', {type_details: "Rejected"}, function (template) {
                details.html(template);
            })
        }
        else{
            if(open.attr("content") == "Reloadable Cards"){
                $.get('tracking_details', { type_details:"Reloadable Cards", status_redeemed: open.attr("data-num")}, function(template) {
                    details.html($(template).html());
                })
            }
            else{
                if(open.attr("content") == "Reloadable Plastic Card") {
                    $.get('tracking_details', {type_details: "Reloadable Plastic Card"}, function (template) {
                        details.html(template);
                    })
                }
            }
        }
    }
}
// }

var open_detail_click = function (element) {
    if($(element).closest('.track_wrap').find(".tl_d, .wrap_details").css('display').toLowerCase() === 'none') {
        $(".tl_d, .wrap_details").slideUp();


        $(element).closest('.track_wrap').find(".tl_d, .wrap_details").slideDown();
        $('.open_detail span').text('Open Details');
        $('.open_detail').removeClass('down');
        $(element).find("span").text('Close Details');
        $(element).addClass('down');

        open_details_event($(element));
    }
    else {
        $(element).closest('.track_wrap').find(".tl_d, .wrap_details").slideUp();

        $(element).find("span").text('Open Details');
        $(element).removeClass('down');
    }
}

$('.step_r').hover( function() {
    $(this).find(".tooltip_info").toggleClass("view");
});


   


$('.special_drop li a').click(function () {
	 $(this).parents('.spc_drop').find('.dropdown-toggle').html($(this).text() + ' <span class="caret"></span>');
  });


$(document).ready(function() {
    "use strict";
    $('.open_detail').click(function () {
        open_detail_click(this);

    });
});


$('.close_error_box').click(function () {
	 $(this).parents('.error_box').slideUp();
  });





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
		 $('.submenu_lateral').removeClass('open');
		 $(".logo_o").removeClass("show_copy");
		 $(".logo_o").addClass("hide_copy");	
	
		$('.content-main').addClass('content_main_small').removeClass("content_main_wide");
		 
		$('.overlay_menu').hide();
		$('body').removeClass('noscroll').addClass('scrollable');

		 
		}

        setTimeout(function () {
            smallGraphtxt();
            masonryUpdate();
            charts_module.drawChart();
        },400);

	});
});




















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







$('.datepicker_scroll').datetimepicker({
	format: 'DD/MM/YYYY',
	widgetParent:'.wrap_filter_scroll',
	widgetPositioning: {
        vertical: 'auto',
        horizontal: 'right'
    }
}).on('dp.show', function(){
var top = ($(this).offset().top-300);
var left = $(this).offset().left;
var right = $(this).offset().right;
if($(this).offset().top - 400 <= 0) { //display below if not enough room above
top = $(this).offset().top+$(this).height()+10;
}
$('.bootstrap-datetimepicker-widget').css(
{
'top':'60px',
'left':'auto',
'bottom':'auto',
'right':0,
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
    $('.filter_column').show();
    $('#timeline-dashboard').show();
	 masonryUpdate();

});










var show_tab_menu = function(item, t){
    $(".col_item").hide();
    $(".ranking_ma_item").hide();
    item.show();
    t.tab('show');
    setTimeout(function () {
        masonryUpdate();
    },600);

}

if($('#how_to_win_team').length == 0){
    $('.how_to_win_btn').click(function(){
        $('.filter_column').hide();
        $('#timeline-dashboard').hide();
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#how_to_win"]'));
        setTimeout(function () {
            google.charts.setOnLoadCallback(drawChartHow);
        }, 700);

    });


    $('.my_wins_btn').click(function(){
        $('.filter_column').hide();
        $('#timeline-dashboard').hide();
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#my_wins"]'));
    });


    $('.rewards_btn').click(function(){
        $('.filter_column').hide();
        $('#timeline-dashboard').hide();
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#my_rewards"]'));
    });



    $('.results_btn').click(function(){
        $('.filter_column').hide();
        $('#timeline-dashboard').hide();
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#results"]'));
    });
}
else{
    $('.how_to_win_btn').click(function(){
        $('.filter_column').hide();
        $('#timeline-dashboard').hide();
        show_tab_menu($('.how_to_win_item'), $('.nav a[href="#how_to_win_team"]'));
        setTimeout(function () {
            google.charts.setOnLoadCallback(drawChartHow);
        }, 700);
    });


    $('.my_wins_btn').click(function(){
        $('.filter_column').hide();
        $('#timeline-dashboard').hide();
        show_tab_menu($('.my_wins_item'), $('.nav a[href="#my_wins"]'));
    });


    $('.rewards_btn').click(function(){
        $('.filter_column').hide();
        $('#timeline-dashboard').hide();
        show_tab_menu($('.my_rewards_item'), $('.nav a[href="#my_rewards"]'));
    });
    $('.results_btn').click(function(){
        $('.filter_column').hide();
        $('#timeline-dashboard').hide();
        show_tab_menu($('.results_item'), $('.nav a[href="#team_results"]'));
    });
}







$('.messages_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".messages_item").show();
	$('.nav a[href="#messages"]').tab('show');
    $('.filter_column').hide();
    $('#timeline-dashboard').hide();
	 masonryUpdate();
	

});


$('.alerts_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".messages_item").show();
	$('.nav a[href="#alerts"]').tab('show');
    $('.filter_column').hide();
    $('#timeline-dashboard').hide();
	 masonryUpdate();
	

});



$('.profile_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".profile_item").show();
    $('.filter_column').hide();
    $('#timeline-dashboard').hide();
	 masonryUpdate();
	

});



$('.t_c_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".t_c_item").show();
    $('.filter_column').hide();
    $('#timeline-dashboard').hide();
	 masonryUpdate();
	

});

$('.reports_btn').click(function(){
	$(".col_item").hide();
	$(".ranking_ma_item").hide();
	$(".reports_item").show();
    $('.filter_column').hide();
    $('#timeline-dashboard').hide();
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
//	
smallGraphtxt();
smallGraphtxt_2();	
//    charts_module.drawChart();*/
	drawChart();
drawChart2();
	drawChart3();
	drawChart4();
	 initChart();
	
})

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

                            $('#confirm_address_validation').off('click');
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
                                        console.log(data);
                                        if(data.result){
                                            $.get('update_tracking_view', function(template) {
                                                $('#my_rewards').html($(template).html());

                                                $('.open_detail').click(function () {
                                                    open_detail_click(this);

                                                });
                                                //repetir click de .open_detail
                                            })
                                        }
                                        else{
                                            //mensaje de error para cuando no se puede procesar el premio por falta de presupuesto
                                            $('#warning_msg').html("An error has occurred");
                                        }
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

$(document).ready(function() {
    console.log("1");
    if($('a[href="#my_ranking"]').length >0){
        console.log("2");
        console.log("2.1",$('a[href="#my_ranking"]'));
        $('#ranking_view').on('click', 'a[href="#my_ranking"]', function () {
            console.log("3");
            if($('#countdown_s').val() == "0"){
                console.log("4");
                console.log(url_count_down_supervisor);
                $.get( url_count_down_supervisor, function( data ) {
                    if( data.result ){
                        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                        ];
                        var date = monthNames[data.month -1] + " " + data.day + ", " + data.year;
                        $('#defaultCountdown_sup').removeClass('hidden');
                        $('#defaultCountdown').addClass('hidden');
                        $('#date_countdown').html(date);
                        $('.date_my_wins_summary').html(date);
                        $('#tittle_countdown').html("MY UPCOMING AWARD");
                        $('#date_supervisor').val("" + date);

                        $('#my_wins_summary_s').removeClass('hidden');
                        $('#my_team_wins_summary').addClass('hidden');

                        $('#countdown_s').val("1");

                        date_award = new Date(data.year, data.month - 1, data.day, data.hour, data.minute, data.second, 0);
                        current_date = new Date(data.year_now, data.month_now -1, data.day_now, data.hour_now, data.minute_now, data.second_now, 0);
                        $('#defaultCountdown_sup').countdown({
                            now: current_date,
                            until: date_award,
                            format: 'DHMS',
                            padZeroes: true
                        });
                    }
                    else{
                        $('#defaultCountdown_sup').removeClass('hidden');
                        $('#defaultCountdown').addClass('hidden');
                        // $('#date_countdown').html(date);
                        // $('.date_my_wins_summary').html(date);
                        $('#tittle_countdown').html("MY UPCOMING AWARD");
                        // $('#date_supervisor').val("" + date);

                        $('#my_wins_summary_s').removeClass('hidden');
                        $('#my_team_wins_summary').addClass('hidden');
                        $('#defaultCountdown_sup').countdown({
                            now: 0,
                            until: 0,
                            format: 'DHMS',
                            padZeroes: true
                        });
                        if($('#box_countdown').length > 0 ){
                            $('#box_countdown').addClass("no_visible");
                        }

                    }
                });
            }
            else{
                $('#my_wins_summary_s').removeClass('hidden');
                $('#my_team_wins_summary').addClass('hidden');

                $('#defaultCountdown_sup').removeClass('hidden');
                $('#defaultCountdown').addClass('hidden');
                $('#date_countdown').html("" + $('#date_supervisor').val());
                $('.date_my_wins_summary').html("" + $('#date_supervisor').val());
                $('#tittle_countdown').html("MY UPCOMING AWARD");
            }
        });
        $('#ranking_view').on('click', 'a[href="#my_team_ranking"]', function () {
            console.log("11");
            $('#my_wins_summary_s').addClass('hidden');
            $('#my_team_wins_summary').removeClass('hidden');

            $('#defaultCountdown_sup').addClass('hidden');
            $('#defaultCountdown').removeClass('hidden');
            $('#date_countdown').html("" + $('#date_team').val());
            $('.date_my_wins_summary').html("" + $('#date_team').val());
            $('#tittle_countdown').html("UPCOMING AWARD MY TEAM");
        });
    }

    $('.my_wins_item ul.nav-tabs a').on('click', function () {
        setTimeout(function () {
            masonryUpdate();
        }, 400);
    });

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



$('.period_filter .dropdown-toggle').click(function (){
            dropDownFixPosition($(this),$('.dropdown-menu.open'));
        });
function dropDownFixPosition(button,dropdown){
      var dropDownTop = button.offset().top + button.outerHeight();
        dropdown.css('top', dropDownTop + "px");
        dropdown.css('left', button.offset().left + "px");
}
$(window).on('resize', dropDownFixPosition);


$(".sidebar-titleficti").click(function (){

	$('.submenu_lateral').toggleClass('open');
	
	});



$('.period_filter  .bootstrap-select').on('click', function () {
$('.period_filter .dropdown-menu.open').each(function(){
      var parentWidth = $(this).parent().width();
      //$(this).minWidth(parentWidth); 
	$(this).css({ "min-width": parentWidth });
});

    });



   
$('#porcentage_overall').html(function() {
  var txt= $(this).text();
  return txt.substr(0, txt.length-3)          //all but the last two characters
         + '<span>'+txt.slice(-3)+'</span>';  //put last two characters in a span
});




/////nuevos/////







////////






function smallGraphtxt_2() {
	
    if ($('.overall_container').width() > 345 ) {
		$('.overall_container .va_c').addClass('big').removeClass('smallest');
  
		
}
	else if
		
		(  $('.overall_container').width() < 345)  {
		
		$('.overall_container .va_c').addClass('smallest').removeClass('big');
	}
	
else {

	$('.overall_container .va_c').removeClass('big smallest');
}
	
}

$(document).ready(smallGraphtxt_2);

$(window).on('resize',smallGraphtxt_2);




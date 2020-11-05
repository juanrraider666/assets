// JavaScript Document
//adobe 2017


$(function () {
    "use strict";
    $('.datetimepicker2').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('.birthdaypicker2').datetimepicker({
        viewMode: 'months',
        format: 'DD-MM',
        dayViewHeaderFormat: 'MMM',
        ignoreReadonly: true,
    });
    $('.datetimepicker3').datetimepicker({
        format: 'DD-MM'
    });
    $('.birthdaypicker3').datetimepicker({
        viewMode: 'months',
        format: 'DD-MM',
        dayViewHeaderFormat: 'MMM',
        ignoreReadonly: true,
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
    $modals.each(function () {
        var $clone = $(this).clone().css('display', 'block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}
$('.modal-vcenter').on('show.bs.modal', function () {
    "use strict";
    centerModals($(this));
});
$(window).on('resize', centerModals);
/* fin center modal */



/*$(document).ready(function () {
    "use strict";
    $('.open_detail').click(function () {

        if ($(this).closest('.track_wrap').find(".tl_d, .wrap_details").css('display').toLowerCase() === 'none') {
            $(".tl_d, .wrap_details").slideUp();


            $(this).closest('.track_wrap').find(".tl_d, .wrap_details").slideDown();
            $('.open_detail').text('Open Details');
            $('.open_detail').removeClass('down');
            $(this).text('Close Details');
            $(this).addClass('down');
        }
        else {
            $(this).closest('.track_wrap').find(".tl_d, .wrap_details").slideUp();

            $(this).text('Open Details');
            $(this).removeClass('down');
        }
    });

    $('.step_r').hover(function () {
        $(this).find(".tooltip_info").toggleClass("view");
    });

});*/






$('.has-clear input[type="text"]').on('input propertychange', function () {
    "use strict";
    var $this = $(this);
    var visible = Boolean($this.val());
    $this.siblings('.form-control-clear').toggleClass('hidden', !visible);
}).trigger('propertychange');

$('.form-control-clear').click(function () {
    "use strict";
    $(this).siblings('input[type="text"]').val('')
            .trigger('propertychange').focus();
});






$(document).ready(function () {
    "use strict";
    $('.bxslider').bxSlider({
        pager: false,
        mode: 'fade',
        adaptiveHeight: true,
    });
});





 $(document).ready( function() {
 "use strict";
 $('.carousel_wish').bxSlider({
 slideMargin: 10,
 autoReload: true,
 pager:false,
 moveSlides: 1,
 infiniteLoop: false,
 hideControlOnEnd: true,
 breaks: [{screen:0, slides:1 },{screen:480, slides:2, moveSlides: 2},{screen:768, slides:3, moveSlides: 3},{screen:992, slides:4, moveSlides: 4}, {screen:1200, slides:5, moveSlides: 5}]
 });
 
 });

$(document).ready(function () {
    "use strict";
    $('.wish_list_b').click(function () {
        $(".wish_all").toggleClass("closed");
    });
});


$(document).ready(function () {
    "use strict";
    $("body").on("click", '.filter_b', function () {
        $(".filter_all").toggleClass("closed");
    });
});

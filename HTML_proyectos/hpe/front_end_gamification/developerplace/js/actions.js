// JavaScript Document





$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://clients.developerplace.com/hpe/2019/gamification/audio/Epic_and_Heroic.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
      audioElement.play();
    
     $('#play').click(function() {
        audioElement.play();
         $(this).hide();
  $('#pause').show();
       // $("#status").text("Status: Playing");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $(this).hide();
  $('#play').show();
        //$("#status").text("Status: Paused");
    });
    
    
    /*audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
   
    
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });*/
});


$(window).on("load", function (e) {
    'use strict';
	$(".loader-item").delay(700).fadeOut();
     
	//$("#pageloader").delay(1200).fadeOut("slow");
    
    $.when($('#pageloader').delay(1200).fadeOut("slow"))
                               .done(function() {
         $(".progress_bar .inside_prog.stop").removeClass("stop");
          
});
    
    
var bg = $("html, body");

function resizeBackground() {
    bg.height($(window).height() + 60);
}

$(window).resize(resizeBackground);
resizeBackground();    
    
    
    $(window).resize(function() {
    $('.buttons_scroll').height($(".other > div").height()) ;
 
});

$(window).trigger('resize');
})







var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
    selector: '.layer'
  });
        

$('.col-left .show_more.left').click( function() {
    $(this).toggleClass("up");
    $(".all_left ").toggleClass("gone");
   
  
});




$('.col-right .show_more.right').click( function() {
    $(this).toggleClass("up");
    $(".all_right").toggleClass("gone");
   
});




$('.left_mobile ').click( function() {
    $(".left_mobile .show_more").toggleClass("up");
    $(this).closest(".left_mobile").toggleClass("wide");
    $(".col-left").toggleClass("opened");
    $(".right_mobile").toggleClass("gone");
     $("html").toggleClass("over_body");
    
    
   
});




$('.right_mobile').click( function() {
   $(".right_mobile .show_more").toggleClass("up");
    $(this).closest(".right_mobile").toggleClass("wide");
    $(".col-right").toggleClass("opened");
    $(".left_mobile").toggleClass("gone");
    $("html").toggleClass("over_body");
    
   
});





$('.change_color').click( function() {
    $(this).closest(".box").find(".palette").toggleClass("opened");
   
});

$('.palette').mouseleave( function() {
    $(this).removeClass("opened");
   
});

$('body').on('touchstart', function(){ 
    $(".palette").removeClass("opened");   
});

$('.palette').on('touchstart', function(event){
     event.stopPropagation();
 });


$('.all_right').mouseleave( function() {
   $(".b_scroll_list li").removeClass("active");
   
});


function removeColorClasses (index, classNames) {
  var current_classes = classNames.split(" "), // change the list into an array
      classes_to_remove = []; // array of classes which are to be removed

  $.each(current_classes, function (index, class_name) {
    // if the classname begins with bg add it to the classes_to_remove array
    if (/c.*/.test(class_name)) {
      classes_to_remove.push(class_name);
    }
  });
  // turn the array back into a string
  return classes_to_remove.join(" ");
}


$(".arm .head_col .palette li").click(function() {
      $(this).closest(".box").find(".palette li").removeClass("selected");
    $(this).addClass("selected");
        var index = $(this).index() + 1;
        var img_name = "images/tools/man/head5_" + index + ".png";
        var class_name = "c" + index;
      //  $("#example_index").html("Index " + index  + " was clicked");
        $(this).closest(".ch_col").find("img").attr('src', img_name);
    $('.wrap_img .head_5').removeClass(removeColorClasses);
      $(".wrap_img .head_5").addClass(class_name);
    
    });


$(".arm .arms_col .palette li").click(function() {
      $(this).closest(".box").find(".palette li").removeClass("selected");
    $(this).addClass("selected");
        var index = $(this).index() + 1;
        var img_name = "images/tools/man/arms6_" + index + ".png";
        var class_name = "c" + index;
      //  $("#example_index").html("Index " + index  + " was clicked");
        $(this).closest(".ch_col").find("img").attr('src', img_name);
    $('.wrap_img .arms_6').removeClass(removeColorClasses);
      $(".wrap_img .arms_6").addClass(class_name);
    
    });

$(".arm .legs_col .palette li").click(function() {
      $(this).closest(".box").find(".palette li").removeClass("selected");
    $(this).addClass("selected");
        var index = $(this).index() + 1;
        var img_name = "images/tools/man/legs6_" + index + ".png";
        var class_name = "c" + index;
      //  $("#example_index").html("Index " + index  + " was clicked");
        $(this).closest(".ch_col").find("img").attr('src', img_name);
    $('.wrap_img .legs_6').removeClass(removeColorClasses);
      $(".wrap_img .legs_6").addClass(class_name);
    
    });




//woman palette

$(".arw .head_col .palette li").click(function() {
      $(this).closest(".box").find(".palette li").removeClass("selected");
    $(this).addClass("selected");
        var index = $(this).index() + 1;
        var img_name = "images/tools/woman/head5_" + index + ".png";
        var class_name = "c" + index;
      //  $("#example_index").html("Index " + index  + " was clicked");
        $(this).closest(".ch_col").find("img").attr('src', img_name);
    $('.wrap_img .head_5').removeClass(removeColorClasses);
      $(".wrap_img .head_5").addClass(class_name);
    
    });


$(".arw .arms_col .palette li").click(function() {
      $(this).closest(".box").find(".palette li").removeClass("selected");
    $(this).addClass("selected");
        var index = $(this).index() + 1;
        var img_name = "images/tools/woman/arms6_" + index + ".png";
        var class_name = "c" + index;
      //  $("#example_index").html("Index " + index  + " was clicked");
        $(this).closest(".ch_col").find("img").attr('src', img_name);
    $('.wrap_img .arms_6').removeClass(removeColorClasses);
      $(".wrap_img .arms_6").addClass(class_name);
    
    });

$(".arw .legs_col .palette li").click(function() {
      $(this).closest(".box").find(".palette li").removeClass("selected");
    $(this).addClass("selected");
        var index = $(this).index() + 1;
        var img_name = "images/tools/woman/legs6_" + index + ".png";
        var class_name = "c" + index;
      //  $("#example_index").html("Index " + index  + " was clicked");
        $(this).closest(".ch_col").find("img").attr('src', img_name);
    $('.wrap_img .legs_6').removeClass(removeColorClasses);
      $(".wrap_img .legs_6").addClass(class_name);
    
    });



/*----put parts----*/


  
$(".head_col img").click(function() {
    var index = $(this).closest("div").index() + 1;
    var class_part = ".head_" + index;
    $(".wrap_img").find(class_part).toggleClass("d-nones");
    $(this).closest("div").toggleClass("used");
    });

$(".arms_col img").click(function() {
    var index = $(this).closest("div").index() + 1;
    var class_part = ".arms_" + index;
    $(".wrap_img").find(class_part).toggleClass("d-nones");
    $(this).closest("div").toggleClass("used");
    });

$(".chest_col img").click(function() {
    var index = $(this).closest("div").index() + 1;
    var class_part = ".chest_" + index;
    $(".wrap_img").find(class_part).toggleClass("d-nones");
    $(this).closest("div").toggleClass("used");
    });

$(".legs_col img").click(function() {
    var index = $(this).closest("div").index() + 1;
    var class_part = ".legs_" + index;
    $(".wrap_img").find(class_part).toggleClass("d-nones");
    $(this).closest("div").toggleClass("used");
    });

$(".gear_col img").click(function() {
    var index = $(this).closest("div").index() + 1;
    var class_part = ".gear_" + index;
    $(".wrap_img").find(class_part).toggleClass("d-nones");
    $(this).closest("div").toggleClass("used");
    });



$('.all_right .box').click( function() {
     $('.all_right .box').find(".b_scroll_list li").removeClass("active");
     $(this).closest('.all_right .box').find(".b_scroll_list li").addClass("active");
   
   
});


$('.all_right .box').click( function() {
     $('.all_right .box').find(".b_scroll_list li").removeClass("active");
     $(this).closest('.all_right .box').find(".b_scroll_list li").addClass("active");
});


$('.reset_btn').click( function() {
     $('.tool').addClass("d-nones");
      $('.all_right .new_accs > div > div').removeClass("used");
});






$(function () {

  $('[data-toggle="tooltip"]').tooltip({ container: 'html' })
})


$('.mute > div').click( function()  {
  $('[data-toggle="tooltip"]').tooltip({ container: 'html'});
});


	$(".nav-two > div")
  .each(function(i) {
    if (i != 0) { 
      $("#beep-two")
        .clone()
        .attr("id", "beep-two" + i)
        .appendTo($(this).parent()); 
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#beep-two" + $(this).data("beeper"))[0].play();
  });
$("#beep-two").attr("id", "beep-two0");





jQuery('.scrollbar-outer').scrollbar({
		ignoreMobile : true,
    disableBodyScroll: true,
    scrolly: "advanced",
	});





document.addEventListener('touchstart', {passive: true, capture: false}); // {passive: true, capture: false}





/*$('#play').click(function() {
    
   var media = document.getElementsByTagName('audio');
        i = media.length;

    while (i--) {
        media[i].volume = 1;
    } 
  $(this).hide();
  $('#pause').show();
   
});

$('#pause').click(function() {
 
var media = document.getElementsByTagName('audio');
        i = media.length;

    while (i--) {
        media[i].volume = 0;
    } 

  $(this).hide();
  $('#play').show();
   
});
*/



$('.info_box span').click( function() {
     $('.info_box').toggleClass("fade");
     $('.bell_icon').toggleClass("fade");
});

$('.bell_icon').click( function() {
    $('.info_box').toggleClass("fade");
     $('.bell_icon').toggleClass("fade");
});





    
    

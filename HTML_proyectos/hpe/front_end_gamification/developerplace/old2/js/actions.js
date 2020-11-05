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
     $("body, html").toggleClass("over_body");
    
    
   
});




$('.right_mobile').click( function() {
   $(".right_mobile .show_more").toggleClass("up");
    $(this).closest(".right_mobile").toggleClass("wide");
    $(".col-right").toggleClass("opened");
    $(".left_mobile").toggleClass("gone");
    $("body, html").toggleClass("over_body");
    
   
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


$('.palette li').click( function() {
     $(this).closest(".box").find(".palette li").removeClass("selected");
    $(this).addClass("selected");
   
});

$('.all_right .box').click( function() {
     $('.all_right .box').find(".b_scroll_list li").removeClass("active");
     $(this).closest('.all_right .box').find(".b_scroll_list li").addClass("active");
   
   
});


$('.all_right .box').click( function() {
     $('.all_right .box').find(".b_scroll_list li").removeClass("active");
     $(this).closest('.all_right .box').find(".b_scroll_list li").addClass("active");
});





$(function () {
  $('[data-toggle="tooltip"]').tooltip({ boundary: 'window'})
})


$('.mute > div').click( function()  {
  $('[data-toggle="tooltip"]').tooltip();
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
       
	});









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




$(window).resize(function() {
    $('.buttons_scroll').height($(".other > div").height() );
 
});

$(window).trigger('resize');








    
    

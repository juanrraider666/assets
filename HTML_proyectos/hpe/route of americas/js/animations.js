// JavaScript Document

    var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var scene = document.getElementById('plain');
var parallax = new Parallax(scene);

$(window).scroll(function() {
   var hT = $('.animation_plain').offset().top,
       hH = $('.animation_plain').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop() + 55;
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
    $('.animation_plain').addClass('animate_plain');
    $('.button_awards').addClass('drop_button');   
   }
});
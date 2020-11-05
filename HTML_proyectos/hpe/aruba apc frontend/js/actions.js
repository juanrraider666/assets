// JavaScript Document

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 30){
            $('.header_landing').addClass('solid');
        }
        else{
         $('.header_landing').removeClass('solid');
        }
    });
});



var btn = $('.top_button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 1000);
});

//////////validacion de campos/////////
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();








/////// slider home /////

$(document).ready(function(){

    
$('.video').on('hide.bs.modal', function(e) {    
    var memory = $(this).html();
     $(this).html(memory);
});
    
    $('.slide_aruba').bxSlider({
    pager: false,
    adaptiveHeight: true,
    auto: true,
    pause: 8000,
    autoHover: true,
    adaptiveHeightSpeed: 1000,

  });    
    
    
});


 $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('.custom-file-label').html(fileName);
    });
 

 $('.datepicker').datepicker({
            uiLibrary: 'bootstrap4'
        });

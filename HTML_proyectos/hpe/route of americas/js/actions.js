// JavaScript Document


$(window).on("load", function (e) {
  'use strict';
  $(".loader-item").delay(700).fadeOut();

  //$("#pageloader").delay(1200).fadeOut("slow");

  $.when($('#pageloader').delay(1200).fadeOut("slow"));


});


$(document).ready(function () {


  $('.menu_trigger').click(function () {
    $('#nav-icon3').toggleClass('open');
    $('.menu').toggleClass('open');
    $('.menu_wrap').toggleClass('to_left');


  });


  $('body').on('click', function (event) {
    if (!$(event.target).is('.menu_trigger *')) {
      $(".menu, #nav-icon3").removeClass("open");
      $('.menu_wrap').addClass('to_left');
    }
  });


  $(window).scroll(function () {
    if ($(window).scrollTop() > 35) {
      $('.header').addClass('solid');
    } else {
      $('.header').removeClass('solid');
    }
  });


  var formFields = $('.hpe_input');

  formFields.each(function () {
    var field = $(this);
    var input = field.find('input');
    var select = field.find('select');
    var label = field.find('label');

    function checkInput() {
      var valueLength = input.val().length;

      if (valueLength > 0) {
        label.addClass('freeze')
      } else {
        label.removeClass('freeze')
      }
    }

    function checkSelect() {
      var valueLength_select = select.val().length;

      if (valueLength_select > 0) {
        label.addClass('freeze');
        label.removeClass('d-none')
      } else {
        label.removeClass('freeze');
        label.addClass('d-none')
      }
    }

    input.change(function () {
      checkInput()
    })


    select.change(function () {
      checkSelect()
    })


  });
    
    
    
      $(".to_scroll").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var maxtop = $("#header").outerHeight();

      $('html, body').animate({
        scrollTop: $(hash).offset().top - maxtop
      }, 1500, function () {

      });
    } // End if
  });
    
  
    
    
    
    
    


});


//////////validacion de campos/////////
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


jQuery(function ($) {
  //form submit handler
  $('#mauticform_hpegrutadelasamericas').submit(function (e) {
    if (!$('#check1').is(':checked')) {
      e.preventDefault();
    } else if (typeof MauticSDKLoaded == 'undefined') {
      var MauticSDKLoaded = true;
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://hpeg.optimeconnect.com/media/js/mautic-form.js';
      script.onload = function () {
        MauticSDK.onLoad();
      };
      head.appendChild(script);
      var MauticDomain = 'https://hpeg.optimeconnect.com';
      var MauticLang = {
        'submittingMessage': "Please wait..."
      }
    }
  })
})


/** This section is only needed once per page if manually copying **/

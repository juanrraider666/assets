/**
 * Created by MCANTOR on 3/10/2017.
 */

/*Modulo Cropit - Modulo para el manejo de imagenes con el apoyo de la libreria
 *                 Cropit js */
var cropitjs = (function (){
    /*Se pasan los parametros */
    var parameters = {
        exportZoom: 1.25,
        imageBackground: true,
        imageBackgroundBorderWidth: 20,
        allowDragNDrop: true,
        width: 150,
        height:150,
        onFileChange: function () {
            showDetails();
        }
    };

    var parameters2 = {
        exportZoom: 1,
        imageBackground: true,
        imageBackgroundBorderWidth: 20,
        allowDragNDrop: true,
        width: 186,
        height:186,
        onFileChange: function () {
            showDetails();
        }
    };

    var objectImage;
    /*Se ejecuta para mostrar la parte del recorte de las imagenes*/
    var showDetails = function () {
        if($('#fileInput').val()!= ''){
            $('#dropContainer').hide();
            $('.text-or').hide();
            $('.custom-input-file').hide();
            $('#recorte').show();
            $('span#or_photo').hide();
            $('a#browser_photo').hide();
        }
    };
    /*Se ejecuta para ocultar la parte del recorte de las imagenes*/
    var hideDetails = function () {
        $('#dropContainer').show();
        $('.text-or').show();
        $('.custom-input-file').show().val('');
        $('#recorte').hide();
        $('span#or_photo').show();
        $('a#browser_photo').show();
    };

    var image = function () {
        objectImage = $('.image-editor');
    };

    var run = function () {
        image();
        var modalSetting = $('#settingModal');

        if(modalSetting.length > 0 ) {
            $(objectImage).cropit(parameters);
        }else{
            $(objectImage).cropit(parameters2);
        }
        loadEvents();
    };
    /*Se ejecuta para almacenar la imagen recortada en el servidor y asignarla al usuario*/
    var exportImage = function () {
        hideDetails();
        $('.loader_photo').slideToggle(0);
        $('#dropContainer .drag_text').slideToggle(0);
        let imageData = $(objectImage).cropit('export',{
            type: 'image/jpeg',
            quality: .9
        });
        $('#image-editor').val(imageData);
        let data = $('form#form').serialize();
        $.post(window.url_upload, data, function (data) {
            $('.img-profile img').attr('src', data.file);
            $('#img-profile img').attr('src', data.file);
            $('#image_profile_section div.profile_img div.circle_all').removeAttr('style').attr('style', "background-image:url("+data.file+")");
            $('li.profile_menu span.p_img div.circle_all').removeAttr('style').attr('style', "background-image:url("+data.file+")");
            $(".change_photo_box").hide();
            $(".box_profile").show();
            $('#cancel_edit_photo').trigger('click');
            $('.loader_photo').slideToggle(0);
            $('#dropContainer .drag_text').slideToggle(0);
            returnImage();
            hideDetails();

        });
    };

    var returnImage = function () {
        $(".content_profile").fadeOut(0);
        $(".content-img-profile").fadeIn(0);
    };

    /*Se asignan los eventos en los botones de rotacion, y el boton de exportar o de guardar*/
    var loadEvents = function () {
        $('.rotate-cw').click(function() {
            $(objectImage).cropit('rotateCW');
        });
        $('.rotate-ccw').click(function() {
            $(objectImage).cropit('rotateCCW');
        });
        $('.export').click(function() {
            exportImage();
            $("#fileInput").val("");
        });

        $('.show_select_profile').click(function() {

            ($(".content_profile").css('display').toLowerCase() === 'none');
            $(".content_profile").fadeIn(0);
            $(".content-img-profile").fadeOut(0);
        });

        $('.content_profile .btn_back_photo').click( function() {
            returnImage();
        });
    };

    return{
        initcropit: run,
        showDetails: showDetails(),
        hideDetails: hideDetails()
    }
})();
/*Modulo del Formulario*/
var moduleForm = (function () {
    var formulario;
    var findForm = function () {
        formulario = $('form#form');
    };

    var addEvents = function () {
        findForm();
        $(formulario).on('submit', function (e) {
            e.preventDefault();
            return false;
        });

        $('#action_pencil_photo').on('click', function () {
            $('div#image_profile_section').slideToggle(0);
            $('div#drag_section').slideToggle(0);
            $(this).hide();
            $('#cancel_edit_photo').show();
        });

        $('a#browser_photo').on('click', function () {
            $('input#fileInput').trigger('click');
        });

        $('#cancel_edit_photo').on('click', function () {
            $('#delete_photo').trigger('click');
            $('#action_pencil_photo').trigger('click').show();
            $(this).hide();
        });

        $('#delete_photo').on('click', function () {
            $('#fileInput').val('');
            $('#dropContainer').show();
            $('.custom-input-file').show();
            $('.text-or').show();
            $('#recorte').hide();
            $('span#or_photo').show();
            $('a#browser_photo').show();
            $('#save_edit_photo').hide();
        });
        cropitjs.hideDetails;
    };

    // dragover and dragenter events need to have 'preventDefault' called
    // in order for the 'drop' event to register.
    // See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations#droptargets
    dropContainer.ondragover = dropContainer.ondragenter = function(evt) {
        evt.preventDefault();
    };

    dropContainer.ondrop = function(evt) {
        // pretty simple -- but not for IE :(
        fileInput.files = evt.dataTransfer.files;
        evt.preventDefault();
    };

    return{
        initForm: addEvents()
    }
})();

(function () {
    cropitjs.initcropit();
    moduleForm.initForm;
})();
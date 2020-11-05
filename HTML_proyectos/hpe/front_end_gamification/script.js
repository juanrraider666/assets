
// TURN ENTER KEYUP INTO CLICK FOR IMPROVED KEYBOARD ACCESSIBILITY
$(document).keyup(function(e) {
    var key = e.which;
    if(key == 13) {
        $(document.activeElement).click()
    }
});


// MAKE THE HEIGHT CHANGES FROM SLIDE TO SLIDE SMOOTHER
$('.controls *[role=button]').on('click',function(){

    // find the outermost carousel parent, dive back in for the div with the slides
    var carInner = $(this).closest('.carousel').find('.carousel-inner');
    // identify the active slide
    var carInnerActive = carInner.find('.active').index();

    // do different things based on the control button that has been clicked/pressed
    switch ( $(this).attr('data-slide') ){
        case 'next':
            // if the last slide is active then get the height of the first slide...
            if ( carInnerActive == carInner.find('.item').last().index() ){
                var slideHeight = carInner.find('.item').first().height();
            }
            else {
                // ...otherwise get the height of the next slide in rotation
                var slideHeight = carInner.find('.active').next().height();
            }
            break;
        case 'prev':
            //if the first slide is active then get the height of the last slide...
            if( carInnerActive == 0 ){
                var slideHeight = carInner.find('.item').last().height();
            }
            else {
                // ...otherwise get the height of the next slide in rotation
                var slideHeight = carInner.find('.active').prev().height();
            }
            break;
        default:
            // indicator dots lack the data-slide attribute and are caught here
            var dataTarget = $(this).attr('data-target');
            var slideTo = $(this).attr('data-slide-to');
            var slideHeight = $(dataTarget + ' .item:eq(' + slideTo + ')').height();
    }
    // animate the height of the container with the slides based on the next active slide's height
    carInner.animate(
    {
        height: slideHeight // get the height of the prev/next slide
    },
    700 // set animation duration; 700 is a slightly slower than bootstrap's default carousel speed
    );

});


// MAKE SURE THAT THE VISIBLE AREA OF THE CAROUSEL DOESN'T 
// SHRINK OR EXPAND TOO MUCH AFTER THE WINDOW IS RESIZED
$(window).on('resize', function(){
	$('.carousel-inner').each(function(){
		$(this).height( ($(this).find('.active').height() + 20) + 'px' );
	});
});
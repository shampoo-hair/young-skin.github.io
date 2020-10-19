/*wow js*/

$(document).ready(function(){

  $(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeIn(); // will first fade out the loading animation 
  $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(500).css({'overflow':'visible'});
});

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();


/* filter js*/



    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
         if(value == "mon")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
 
    
        if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
     });



  /* back to top button js */
  


  // hide #back-top first
  $("#back-top").hide();
  
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });


  /* owl crousel js */
if($('.ps_slider .owl-carousel').length){
$('.ps_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

}


/* testimonial slider */

if($('.slider1 .owl-carousel').length){
$('.slider1 .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

}



/* mail function */

  });

// window height js

$(window).on('load', function() {

   //window height

   var h = window.innerHeight;
    $(".ps_slider .item").css("height", h);
   $(".ps_slider .item").css("width", "100%");
    
  
  });





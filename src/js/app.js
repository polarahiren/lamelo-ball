require('jquery');
//gsap.registerPlugin(ScrollTrigger);
try {
    window.$ = window.jQuery = require('jquery')
  } catch (e) {}
  
  require('slick-carousel')
  
  $(document).ready(function(){
    $(".humburg-menu").click(function(){
      $(".download-buttons").slideToggle(200);
      $(".download-buttons").toggleClass('show');
    });

    //hero slider
    $('.hero-slider').slick({
      autoplay: true,
      infinite: true,
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });  
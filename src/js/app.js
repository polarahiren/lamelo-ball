require('jquery');
//gsap.registerPlugin(ScrollTrigger);
try {
    window.$ = window.jQuery = require('jquery')
  } catch (e) {}
  
  
  $(document).ready(function(){
    $(".humburg-menu").click(function(){
      $(".download-buttons").slideToggle(200);
      $(".download-buttons").toggleClass('show');
    });
  });  
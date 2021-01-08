
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 700,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow/right_arrow.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrow: false
              }
            }
          ]
      });
  });
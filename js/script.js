(function ($) {
    if ($(".headslide").length > 0) {
      $(".headslide").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        fade: true,
        cssEase: "linear"
      });
    }
    if ($(".carouselslide").length > 0) {
      $(".carouselslide").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1
            }
          }
        ]
      });
    }
  })(jQuery);
  
 
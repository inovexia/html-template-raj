(function ($) {
  $(document).ready(function () {
    $(".menu-icon").click(function () {
      $(".menu-list").slideToggle();
    });
    new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: {
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  });
  
})(jQuery);

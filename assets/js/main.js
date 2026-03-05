// main script
(function () {
  "use strict";

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();

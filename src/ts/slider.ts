const swiper = new Swiper('.arg__slider', {
  spaceBetween: 33,
  navigation: {
    nextEl: '.arg__slider-btn_next',
    prevEl: '.arg__slider-btn_prev',
  },
  pagination: {
    el: '.arg__slider-pag',
  },
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    1070: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
  },
});

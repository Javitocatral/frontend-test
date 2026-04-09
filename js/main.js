const heroSwiperEl = document.querySelector('.heroSection .heroSwiper')

if (heroSwiperEl) {
  const swiper = new Swiper(heroSwiperEl, {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        autoplay: false,
        allowTouchMove: false,
      },
      768: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        allowTouchMove: true,
      },
    },
    navigation: {
      nextEl: heroSwiperEl.querySelector('.swiper-button-next'),
      prevEl: heroSwiperEl.querySelector('.swiper-button-prev'),
    },
  })
}

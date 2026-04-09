const hero = document.querySelector('.mdlhero .swiper')

if (hero && hero.querySelectorAll('.swiper-slide').length > 1) {
  new Swiper(hero, {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.mdlhero .swiper-button-next',
      prevEl: '.mdlhero .swiper-button-prev',
    },
    pagination: {
      el: '.mdlhero .swiper-pagination',
      clickable: true,
    },
  })
}

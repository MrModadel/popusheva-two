let links = document.querySelectorAll('.menu__link')

links.forEach((link) => {
   link.onclick = (e) => {
      e.preventDefault()
      links.forEach(x => x.classList.remove('active'))
      link.classList.add('active')
   }
})
new Swiper('.main-slider', {
   navigation: {
      nextEl: '.info-slider__next',
      prevEl: '.info-slider__prev'
   },
   loop:true,
});


/* --------------------------------bigSlider------------------------------- */
new Swiper('.home-slide', {
   navigation: {
      nextEl: '[data-next]',
      prevEl: '[data-prev]'
   },
   loop:true,
});
/* --------------------------------smSlider------------------------------- */
// let smPrev = document.querySelectorAll('.sm-slider__prev')
// let smNext = document.querySelectorAll('.sm-slider__next')
// let smSliders = document.querySelectorAll('.sm-slider')
new Swiper('.sm-slide', {
   navigation: {
      nextEl: '.sm-slider__next',
      prevEl: '.sm-slider__prev',
   },
   loop:true,
});
/* ---------------------light-slider------------------------- */
// new Swiper('.light-slide', {
//    navigation: {
//       nextEl: '.light-slider__next',
//       prevEl: '.light-slider__prev',
//    },
//    loop:true,
// });
/* ------------------arrow-animation---------------------- */
let arrow = document.querySelector('.main-face__arrow');
function arAni(arrow) {
   setTimeout(t => {
      arrow.style.translate = '0 -7px';
      setTimeout(i => {
         arrow.style.translate = '0 7px';
         arAni(arrow)
      }, 900)
   }, 900)
}
arAni(arrow)
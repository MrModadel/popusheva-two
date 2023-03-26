let links = document.querySelectorAll('.menu__link')

links.forEach((link) => {
   link.onclick = (e) => {
      e.preventDefault()
      links.forEach(x => x.classList.remove('active'))
      link.classList.add('active')
   }
})

let prev = document.querySelectorAll('.info-slider__prev')
let next = document.querySelectorAll('.info-slider__next')
let sliders = document.querySelectorAll('.info-slider')
let slideIndex = 0
showSlides(slideIndex)

function showSlides(n) {

   if (n >= sliders.length) {
      slideIndex = 0
   }
   if (n < 0) {
      slideIndex = sliders.length - 1
   }
   sliders.forEach(el => el.classList.add('hide'))
   
   sliders[slideIndex].classList.remove('hide')
   sliders[slideIndex].classList.add('show', 'fade')
}



prev.forEach(pr => {
   pr.onclick = () => {
      slideIndex--
      showSlides(slideIndex)
   }
})

next.forEach(nx => {
   nx.onclick = () => {
      slideIndex++
      showSlides(slideIndex)
   }
})

/* --------------------------------bigSlider------------------------------- */
let bigPrev = document.querySelectorAll('[data-prev]')
let bigNext = document.querySelectorAll('[data-next]')
let bigSliders = document.querySelectorAll('.big-slider')
let bigSlideIndex = 0
bigShowSlides(bigSlideIndex)

function bigShowSlides(z) {
   if (z >= bigSliders.length) {
      bigSlideIndex = 0
   }
   if (z < 0) {
      bigSlideIndex = bigSliders.length - 1
   }
   
   bigSliders.forEach(h => h.classList.add('hide'))
   
   bigSliders[bigSlideIndex].classList.remove('hide')
   bigSliders[bigSlideIndex].classList.add('show', 'fade')
}



bigPrev.forEach(tr => {
   tr.onclick = () => {
      bigSlideIndex--
      bigShowSlides(bigSlideIndex)
   }
})

bigNext.forEach(zx => {
   zx.onclick = () => {
      bigSlideIndex++
      bigShowSlides(bigSlideIndex)
   }
})

/* --------------------------------smSlider------------------------------- */
let smPrev = document.querySelectorAll('.sm-slider__prev')
let smNext = document.querySelectorAll('.sm-slider__next')
let smSliders = document.querySelectorAll('.sm-slider')
let smSlideIndex = 0
smShowSlides(smSlideIndex)

function smShowSlides(z) {
   if (z >= smSliders.length) {
      smSlideIndex = 0
   }
   if (z < 0) {
      smSlideIndex = smSliders.length - 1
   }
   
   smSliders.forEach(h => h.classList.add('hide'))
   
   smSliders[smSlideIndex].classList.remove('hide')
   smSliders[smSlideIndex].classList.add('show', 'fade')
}



smPrev.forEach(xl => {
   xl.onclick = () => {
      smSlideIndex--
      smShowSlides(smSlideIndex)
   }
})

smNext.forEach(sk => {
   sk.onclick = () => {
      smSlideIndex++
      smShowSlides(smSlideIndex)
   }
})
/* ---------------------light-slider------------------------- */
let prevLight = document.querySelectorAll('light-slider__prev')
let nextLight = document.querySelectorAll('.light-slider__next')
let slidersLight = document.querySelectorAll('.light-sider')
let slideIndexLight = 0
showSlidesLight(slideIndexLight)

function showSlidesLight(n) {

   if (n >= slidersLight.length) {
      slideIndexLight = 0
   }
   if (n < 0) {
      slideIndexLight = slidersLight.length - 1
   }
   slidersLight.forEach(el => el.classList.add('hide'))
   
   slidersLight[slideIndexLight].classList.remove('hide')
   slidersLight[slideIndexLight].classList.add('show', 'fade')
}
prevLight.forEach(xl => {
   xl.onclick = () => {
      slideIndexLight--
      showSlidesLight(slideIndexLight)
   }
})

nextLight.forEach(sk => {
   sk.onclick = () => {
      slideIndexLight++
      showSlidesLight(slideIndexLight)
   }
})

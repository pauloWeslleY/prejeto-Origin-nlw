// DOM -> Document Object Model
// NOTE: abre e fecha o menu quando clicar no icone
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll("nav .toogle")

for (const element of toogle) {
   element.addEventListener('click', function () {
      nav.classList.toggle('show')
   })
}

// NOTE: quando clicar no item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
   link.addEventListener('click', function () {
      nav.classList.remove('show')
   })
}

// NOTE: Coloca sombra no header quando der scroll
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
   if (window.scrollY >= navHeight) {
      // maior que a altura do header
      header.classList.add('scroll')
   } else {
      // menor que a altura do header
      header.classList.remove('scroll')
   }
})

/* HACK: Pluign Testimonials Slider -> Carousel */
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true
})
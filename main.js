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
function changeHeaderWhenScroll() {
   const header = document.querySelector("#header")
   const navHeight = header.offsetHeight

   if (window.scrollY >= navHeight) {
      // maior que a altura do header
      header.classList.add('scroll')
   } else {
      // menor que a altura do header
      header.classList.remove('scroll')
   }
}


/* HACK: Plugin Testimonials Slider -> Carousel */
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true
})

/* HACK: Plugin ScrollReveal Mostrar element quando der scroll! */
const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
   reset: true
})

scrollReveal.reveal(`
   #home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
`, { interval: 100 })

/* NOTE: back-to-top botão voltar para o topo */
function backToTop() {
   const backToTopButton = document.querySelector('.back-to-top')

   if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
   } else {
      backToTopButton.classList.remove('show')
   }
}

// TODO: When Scroll
window.addEventListener('scroll', function () {
   changeHeaderWhenScroll()
   backToTop()
})
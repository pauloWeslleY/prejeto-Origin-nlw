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
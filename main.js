// DOM -> Document Object Model
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll("nav .toogle")

for (const element of toogle) {
   element.addEventListener('click', function () {
      nav.classList.toggle('show')
   })
}
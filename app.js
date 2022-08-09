let button = document.querySelector('.button')
let nav = document.querySelector('.nav')
let header = document.querySelector('.header')

button.addEventListener("click", ()=>{
    nav.classList.toggle('active')
})

button.addEventListener("click", ()=>{
    header.classList.toggle('active1')
})
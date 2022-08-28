let button = document.querySelector('.button')
let nav = document.querySelector('.nav')
let header = document.querySelector('.header')
const parrafo = document.querySelectorAll('.parrafo')

for (i=0; i<parrafo.length; i++) {
    parrafo[i].addEventListener('click', function () {
    this.classList.toggle('heightt')
})
}


button.addEventListener("click", ()=>{
    nav.classList.toggle('active')
})

button.addEventListener("click", ()=>{
    header.classList.toggle('active1')
})

let cursor = document.querySelector('.pointer')
let clicked = "clicked"

let addEventListener = () => {
    document.addEventListener("mousemove",onMouseMove)
}

let onMouseMove = (e) => {
    cursor.style.setProperty('--cursor-x', e.clientX + "px")
    cursor.style.setProperty('--cursor-y', e.clientY + "px")
}


addEventListener()
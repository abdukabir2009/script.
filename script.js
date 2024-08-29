const a = prompt('Как тебя зовут?')
const b = prompt('ЦВет фона?')
const c = prompt('Цвет box?')


const h1 = document.querySelector('h1')
const body = document.querySelector('body')
const box = document.querySelector('.box')

h1.innerText = a

body.style.backgroundColor = b

box.style.backgroundColor = c
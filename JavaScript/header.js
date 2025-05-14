// Объект с пунктами меню
let obj = {
    1: "Loren Ipsum",
    2: "Loren Ipsum",
    3: "Loren Ipsum"
}

// Скрипт для хэдера 
let overlay = document.querySelector('body > div')
let burgerMenu = document.querySelector('.burger-menu')
let menu = document.querySelector('.menu')
let menuBlock = document.querySelector('.menu > div')
let burgerTitle = document.querySelector('.burger-container > h3')
let logo = document.querySelector('.header > p')

// Слушатель события "клик" на кнопку
burgerMenu.addEventListener('click', function() {
  this.classList.toggle('active')
  this.classList.contains('active') ?  menu.classList.add('active') || burgerTitle.classList.add('active') || logo.classList.add('active') || overlay.classList.add('overlay') :  menu.classList.remove('active') || burgerTitle.classList.remove('active') || logo.classList.remove('active') || overlay.classList.remove('overlay')
});

/* Загрузка данных в пункты меню */
document.addEventListener('DOMContentLoaded', function() {
  
  for (key in obj) {
    let listItem = document.createElement('li')
    let link = document.createElement('a')
    link.textContent = `${obj[key]}`
    listItem.appendChild(link)
    menuBlock.appendChild(listItem)
  }
  menu.appendChild(menuBlock)
  let paragraph = document.createElement('p')
  paragraph.textContent = `Loren Ipsum`
  menu.appendChild(paragraph)
})
"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})

let button = document.querySelectorAll('.buttn');
let modal = document.querySelector(".modal");
let closemodal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
let butModal = document.querySelector('.button-modal')
for (let but of button){
    but.addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        })
}
closemodal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

butModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

//закрытие по нажатию на ескейп

document.addEventListener('keydown', function(event){
    if (event.key == "Escape"){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

})
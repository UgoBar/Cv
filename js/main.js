'use strict';

/***********************************************************
 * --------------------- BURGER MENU ----------------------
 ***********************************************************/
let burgerButton = document.querySelector('#burger');
let crossButton  = document.querySelector('#cross');
let navbarMobile = document.querySelector('#navbar-mobile');
let main         = document.querySelector('main');

burgerButton.addEventListener('click', displayNavbar);
crossButton.addEventListener('click', hideNavbar);
main.addEventListener('click', hideNavbar);

// On affiche la navbar et on remplace le burger par la croix
function displayNavbar() {
    burgerButton.classList.add('hidden');
    crossButton.classList.remove('hidden');
    navbarMobile.classList.add('mobile-nav-active');
}

// On enlève la nav et on remplace la croix par le burger
function hideNavbar() {
    burgerButton.classList.remove('hidden');
    crossButton.classList.add('hidden');
    navbarMobile.classList.remove('mobile-nav-active');
}
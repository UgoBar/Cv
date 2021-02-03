'use strict';

/***********************************************************
 * --------------------- BURGER MENU ----------------------
 ***********************************************************/
const burgerButton = document.querySelector('#burger');
const crossButton  = document.querySelector('#cross');
const navbarMobile = document.querySelector('#navbar-mobile');
const main         = document.querySelector('main');

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

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const resume = document.querySelector('#resume');
const projects = document.querySelector('#projects');

console.log(home.clientHeight);
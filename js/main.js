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


/***********************************************************
 * -------------------- SCROLL SPY -------------------------
 ***********************************************************/

 /** LIENS */
const homeLink     = document.querySelector('#homeLink');
const aboutLink    = document.querySelector('#aboutLink');
const skillsLink   = document.querySelector('#skillsLink');
const resumeLink   = document.querySelector('#resumeLink');
const projectsLink = document.querySelector('#projectsLink');
/** Je range les liens dans un tableau */
const linkSections = [homeLink, aboutLink, skillsLink, resumeLink, projectsLink];
/** J'attribue la classe active au chargement de la page */
homeLink.classList.add('active');

/** RECUPERATION DES SECTIONS */
const home     = document.querySelector('#home');
const about    = document.querySelector('#about');
const skills   = document.querySelector('#skills');
const resume   = document.querySelector('#resume');
const projects = document.querySelector('#projects');

/** TAILLE DES SECTIONS */
const homeHeight     = home.clientHeight;
const aboutHeight    = home.clientHeight  + about.clientHeight;
const skillsHeight   = about.clientHeight + home.clientHeight + skills.clientHeight;
const resumeHeight   = about.clientHeight + home.clientHeight + skills.clientHeight + resume.clientHeight;
const projectsHeight = about.clientHeight + home.clientHeight + skills.clientHeight + resume.clientHeight + projects.clientHeight;

/** Fonction qui track à quelle hauteur de la page l'utilisateur se trouve
 *  Selon où il est un des liens prends la classe active
 *  Les autres liens perdent la classe active */
window.onscroll = () => {
    
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition < homeHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        homeLink.classList.add('active');

        /** Sur toute la hauteur de la section home le burger et la croix sont blancs */
        burgerButton.style.color = 'white';
        crossButton.style.color  = 'white';
    }
    else {
        /** Sinon le burger et la croix sont oranges */
        burgerButton.style.color = 'var(--orange';
        crossButton.style.color  = 'var(--orange';
    }

    if (scrollPosition >= homeHeight && scrollPosition < aboutHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        aboutLink.classList.add('active');
    }

    if (scrollPosition >= aboutHeight && scrollPosition < skillsHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        skillsLink.classList.add('active');
    }

    if (scrollPosition >= skillsHeight && scrollPosition < resumeHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        resumeLink.classList.add('active');
    }

    if (scrollPosition >= resumeHeight - 50 && scrollPosition < projectsHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        projectsLink.classList.add('active');
    }
}
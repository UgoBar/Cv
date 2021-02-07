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

 /** LIENS NAVBAR MOBILE */
const mobileHomeLink     = document.querySelector('#homeLink');
const mobileAboutLink    = document.querySelector('#aboutLink');
const mobileSkillsLink   = document.querySelector('#skillsLink');
const mobileResumeLink   = document.querySelector('#resumeLink');
const mobileProjectsLink = document.querySelector('#projectsLink');
 /** LIENS NAVBAR MOBILE */
 const desktopHomeLink     = document.querySelector('.homeLink');
 const desktopAboutLink    = document.querySelector('.aboutLink');
 const desktopSkillsLink   = document.querySelector('.skillsLink');
 const desktopResumeLink   = document.querySelector('.resumeLink');
 const desktopProjectsLink = document.querySelector('.projectsLink');

 /** Je range les liens dans un tableau */
const linkSections = [
    /** Liens mobile */
    mobileHomeLink,
    mobileAboutLink,
    mobileSkillsLink,
    mobileResumeLink,
    mobileProjectsLink,

    /** liens desktop */
    desktopHomeLink,
    desktopAboutLink,
    desktopSkillsLink,
    desktopResumeLink, 
    desktopProjectsLink
];

/** J'attribue la classe active au chargement de la page */
mobileHomeLink.classList.add('active');
desktopHomeLink.classList.add('active');

/** RECUPERATION DES SECTIONS */
const home     = document.querySelector('#home');
const about    = document.querySelector('#about');
const skills   = document.querySelector('#skills');
const resume   = document.querySelector('#resume');
const projects = document.querySelector('#projects');

/** TAILLE DES SECTIONS */
const homeHeight     = home.clientHeight -100;
const aboutHeight    = home.clientHeight  + about.clientHeight;
const skillsHeight   = about.clientHeight + home.clientHeight + skills.clientHeight -100;
const resumeHeight   = about.clientHeight + home.clientHeight + skills.clientHeight + resume.clientHeight -100;
const projectsHeight = about.clientHeight + home.clientHeight + skills.clientHeight + resume.clientHeight + projects.clientHeight -100;

/** Fonction qui track à quelle hauteur de la page l'utilisateur se trouve
 *  Selon où il est un des liens prends la classe active
 *  Les autres liens perdent la classe active */
window.onscroll = () => {
    
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition < homeHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        mobileHomeLink.classList.add('active');
        desktopHomeLink.classList.add('active');

        /** Sur toute la hauteur de la section home le burger et la croix sont blancs */
        burgerButton.style.color = 'white';
        crossButton.style.color  = 'white';
    }
    else {
        /** Sinon le burger et la croix sont oranges */
        burgerButton.style.color = 'var(--orange';
        crossButton.style.color  = 'var(--orange';
    }

    if (scrollPosition > homeHeight && scrollPosition < aboutHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        mobileAboutLink.classList.add('active');
        desktopAboutLink.classList.add('active');
    }

    if (scrollPosition > aboutHeight && scrollPosition < skillsHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        mobileSkillsLink.classList.add('active');
        desktopSkillsLink.classList.add('active');
    }

    if (scrollPosition > skillsHeight && scrollPosition < resumeHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        mobileResumeLink.classList.add('active');
        desktopResumeLink.classList.add('active');
    }

    if (scrollPosition > resumeHeight - 50 && scrollPosition < projectsHeight) {
        linkSections.forEach(element => element.classList.remove('active'));
        mobileProjectsLink.classList.add('active');
        desktopProjectsLink.classList.add('active');
    }
}
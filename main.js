/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* MOSTRAR MENU - MENU SHOW ( validar se ocorrer saída constante*/
if(navToggle){
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})
}

/* ESCONDE MENU - MENU HIDDEN ( validar se ocorrer saída constante  */
if(navClose){
navClose.addEventListener('click', () => {  
navMenu.classList.remove('show-menu')
})
}

/* esconder menu mobile */

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
const navMenu = document.getElementById('nav-menu')

// quando clica em cada nav__link remove o show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*adiciona BLUR ao HEADER*/

const blurHeader = () =>{
const header = document.getElementById('header')
this.scrollY>= 50 ? header.classList.add('blur-header')
              : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*  paralax  */


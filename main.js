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

const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");

const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");

const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })


    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    
    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})

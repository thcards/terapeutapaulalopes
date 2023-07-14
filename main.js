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


/*  EMAIL  JS */

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()
// service ID - templateID - #form e PublicKey//
    emailjs.sendForm('service_ev8oy9h','template_e7fx8ab', '#contact-form', 'npquNgzz52d5rnWO3')
        .then(()=>{
            //Mostrar mensagem enviada//
            contactMessage.textContent = 'Mensagem Enviada com Sucesso ✔'

            // remover msg a cada 10 seg//
            setTimeout(()=>{
                contactMessage.textContent=''
            }, 10000)

            // limpar inputs //
            contactForm.reset()
        
        }, () =>{
            //Mostrar Erro//
            contactMessage.textContent = '❌❌Sua mensagem não pode ser enviada (SERVICE#ERROR#) 🤷‍♂️🤦‍♂️❌ '
        })


}


contactForm.addEventListener('submit', sendEmail)


/*  SCROLL REVEAL*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
   // reset: true //animação repete
})

sr.reveal('.person, .container,container2, footer__container')
sr.reveal('.imgContainer', {origin: 'bottom'})
sr.reveal('.text, .skills_data', {origin: 'left'})
sr.reveal('.imgContainer3, .title-others-section', {origin: 'right'})
sr.reveal('.contact section, .contact__form"', {interval: 100})
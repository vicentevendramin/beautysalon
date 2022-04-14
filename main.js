/* OPEN & CLOSE MENU -- ICONS */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}

/* HIDE THE MENU WHEN CLICKIN ON A MENU ICON */
const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    })
}

/* CHANGE PAGE HEADER WHEN SCROLLING */
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header');
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

/* TESTIMONIALS CAROUSEL / SLIDER / SWIPER */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/* SCROLLREVEAL: Show elements when scrolling on the page */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, { interval: 100 })

/* BUTTON: Back to top */

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top');

    if(window.scrollY >= 560){
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

/* WHEN SCROLL */
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
})
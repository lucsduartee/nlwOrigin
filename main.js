/**
 * DOM elements
 */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
const backToTopBtn = document.querySelector('.back-to-top');


/**
 * Adding eventListeners to open and close side menu
 */
toggle.forEach((element) => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  })
})

/**
 * Hiding menu when link is clicked 
 */
links.forEach((element) => {
  element.addEventListener('click', () => {
    nav.classList.remove('show');
  })
});

/**
 * Testimonials carousel
 */
 const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});

/**
 * Scroll Reveal
 */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
});

scrollReveal.reveal(`
  #home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
`, { interval: 100});

/**
 * Changing header when scroll page
 */
 const changeHeaderWhenScroll = () => {
  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll');
}

/**
 * Back to Top button
 */
const revealBackToTopBtn = () => {
  window.scrollY >= 560
  ? backToTopBtn.classList.add('show')
  : backToTopBtn.classList.remove('show');
 }

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
  revealBackToTopBtn();
});

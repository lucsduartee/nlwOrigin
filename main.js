/**
 * DOM elements
 */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

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
 * Changing header when scroll page
 */
window.addEventListener('scroll', () => {
  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll');
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
  duration: 1000,
  reset: true
});

scrollReveal.reveal(`
  #home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
`, { interval: 100});

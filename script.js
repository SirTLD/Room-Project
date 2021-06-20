const burgerIcon = document.querySelector('.burger');

const navbarLinks = document.querySelector('.nav-links');

const navLinkItems = document.querySelectorAll('.nav-links li');

burgerIcon.addEventListener('click', () => {
  navbarLinks.classList.toggle('nav-active');
  burgerIcon.classList.toggle('toggle-close');
});

const arrowLeft = document.querySelector('.fa-chevron-left');
const arrowRight = document.querySelector('.fa-chevron-right');

// const divContainer = document.querySelector('.hero-title');

const divContainer = document.querySelectorAll('.hero-title');

const headerImage = document.querySelector('.header');

const headingText = document.querySelector('.main-text');

const bodyText = document.querySelector('.body-text');

arrowRight.addEventListener('click', () => {
  headerImage.classList.add('header-1');
});

arrowLeft.addEventListener('click', () => {
  headerImage.classList.remove('header-1');
});

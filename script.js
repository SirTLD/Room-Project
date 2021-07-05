const burgerIcon = document.querySelector('.burger');

const navbarLinks = document.querySelector('.nav-links');

const navLinkItems = document.querySelectorAll('.nav-links li');

const header = document.querySelector('.header');

burgerIcon.addEventListener('click', () => {
  navbarLinks.classList.toggle('nav-active');
  if (navbarLinks.classList.contains('nav-active')) {
    burgerIcon.style.position = 'fixed';
  } else {
    burgerIcon.style.position = 'static';
  }

  burgerIcon.classList.toggle('toggle-close');
});

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function currentSlide(n) {
  displaySlides((slide_index = n));
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName('showSlide');
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if ((window.innerWidth = '700px' || window.innerWidth < '700px')) {
    header.style.backgroundImage = `url('/images/mobile-image-hero-${slide_index}.jpg')`;
    header.style.backgroundSize = 'cover';
  }
  if (window.innerWidth > '700px') {
    header.style.backgroundImage = `url('/images/desktop-image-hero-${slide_index}.jpg')`;
  }
  slides[slide_index - 1].style.display = 'block';
}

"use strict";
// First fulscreen slider
const fullSlideContainer = document.querySelector(".fulscreen-slider__container");
const fullSliderText = document.querySelector(".fulscreen-slider__slide-title");
const prevBtn1 = document.querySelector("#prevBtn1");
const nextBtn1= document.querySelector("#nextBtn1");

const sliderImages = [
  {
    src: "https://img.freepik.com/premium-photo/colorful-abstract-background-with-lots-different-colored-shapes-colors-it-generative-ai_97167-9340.jpg",
    title: "Slide 7",
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg",
    title: "Slide 8",
  },
  {
    src: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    title: "Slide 9",
  },
  {
    src: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=600&q=80",
    title: "First slide",
  },
  {
    src: "https://st5.depositphotos.com/35914836/63547/i/450/depositphotos_635479520-stock-photo-background-texture-old-brick-wall.jpg",
    title: "Second slide",
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg",
    title: "Third slide",
  },
  {
    src: "https://img.freepik.com/premium-photo/old-brick-wall-background-deep-colors-grunge-texture-pattern-design-generative-ai_982005-1321.jpg?w=600",
    title: "Slide 4",
  },
  {
    src: "https://as1.ftcdn.net/v2/jpg/01/27/47/06/1000_F_127470643_z6NkdDsjvI9LEwrRPDV3I8E1Bi4h1mKr.jpg",
    title: "Slide 5",
  },
  {
    src: "https://img.freepik.com/premium-photo/colorful-rainbow-brick-wall-background_566493-327.jpg?w=600",
    title: "Slide 6",
  },
];

let slideCounter = 3;
setSlideContent(slideCounter);

prevBtn1.addEventListener('click', () => {
  prevSlide();
  setSlideContent(slideCounter);
});

nextBtn1.addEventListener('click', () => {
  nextSlide();
  setSlideContent(slideCounter);
});

function setSlideContent(index) {
  fullSlideContainer.style.backgroundImage = `url(${sliderImages[index].src})`;
  fullSliderText.innerHTML = sliderImages[index].title;
}

function nextSlide() {
  slideCounter = slideCounter < sliderImages.length - 1 ? slideCounter + 1 : 0;
}

function prevSlide() {
  slideCounter = slideCounter > 0 ? slideCounter - 1 : sliderImages.length - 1;
}

// Second carousel slider

const slides = document.querySelectorAll('.carousel__slide');

slides.forEach((slide, i) => {
  slide.querySelector('img').src = sliderImages[i].src;
  slide.querySelector('img').alt = sliderImages[i].title;

  slide.querySelector('p').innerHTML = sliderImages[i].title;
});

const carousel = document.querySelector('.carousel__content');
const cardsCenter = document.querySelectorAll('.center-item');
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2= document.querySelector("#nextBtn2");

let left = false;
let right = false;

const moveLeft = () => {
  carousel.classList.add('transition-right');
  prevBtn2.removeEventListener('click', moveLeft);
  nextBtn2.removeEventListener('click', moveRight);
  left = true;
}
const moveRight = () => {
  carousel.classList.add('transition-left');
  prevBtn2.removeEventListener('click', moveLeft);
  nextBtn2.removeEventListener('click', moveRight);
  right = true;
}

const disableNavBtns = () => {
  prevBtn2.disabled = true;
  nextBtn2.disabled = true;
}

const enableNavBtns = () => {
  prevBtn2.disabled = false;
  nextBtn2.disabled = false;
}

prevBtn2.addEventListener('click', () => {
  disableNavBtns();
  moveRight();
});

nextBtn2.addEventListener('click', () => {
  disableNavBtns();
  moveLeft();
});

carousel.addEventListener('animationend', () => {
  enableNavBtns();
  prevBtn2.addEventListener('click', moveLeft);
  nextBtn2.addEventListener('click', moveRight);

  if (right){
    carousel.classList.remove('transition-left');
    right = false;

    const buffer = document.querySelector('.right-item').innerHTML;

    document.querySelector('.right-item').innerHTML = document.querySelector('.center-item').innerHTML;
    document.querySelector('.center-item').innerHTML = document.querySelector('.left-item').innerHTML;
    document.querySelector('.left-item').innerHTML = buffer;
    } else if (left){
      carousel.classList.remove('transition-right');
      left = false;

      const buffer = document.querySelector('.left-item').innerHTML;

      document.querySelector('.left-item').innerHTML = document.querySelector('.center-item').innerHTML;
      document.querySelector('.center-item').innerHTML = document.querySelector('.right-item').innerHTML;
      document.querySelector('.right-item').innerHTML = buffer;
    }
});

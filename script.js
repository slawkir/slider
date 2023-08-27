const sliderImages = document.querySelectorAll(".slider__img");
const sliderLine = document.querySelector(".slider__line");
const sliderDots = document.querySelectorAll(".slider__dot");
const sliderBtnPrev = document.querySelector(".slider__btn-prev");
const sliderBtnNext = document.querySelector(".slider__btn-next");

let sliderWidth = document.querySelector('.slider__img').offsetWidth;
let sliderCount = 0;


function rollSlide() {
  sliderLine.style.transform = `translateX(-${sliderWidth * sliderCount}px)`;
}
function showNextSlide() { 
  sliderCount++;
  if (sliderCount >= sliderImages.length - 1) { 
    sliderCount = sliderImages.length - 1;
  }
  rollSlide();
}
function showPrevSlide() { 
  sliderCount--;
  if (sliderCount <= 0) { 
    sliderCount = 0;
  }
  rollSlide();
}

sliderBtnNext.addEventListener('click', showNextSlide);
sliderBtnPrev.addEventListener('click', showPrevSlide);
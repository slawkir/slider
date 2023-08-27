const sliderImages = document.querySelectorAll(".slider__img");
const sliderLine = document.querySelector(".slider__line");
const sliderDots = document.querySelectorAll(".slider__dot");
const sliderBtnPrev = document.querySelector(".slider__btn-prev");
const sliderBtnNext = document.querySelector(".slider__btn-next");

let sliderWidth = document.querySelector('.slider__img').offsetWidth;
let sliderCount = 0;



function rollSlide() {
  sliderLine.style.transform = `translateX(-${sliderWidth * sliderCount}px)`;
  disabledArrowNext();
  disabledArrowPrev();
}
function disabledArrowNext() { 
if (sliderCount >= sliderImages.length - 1) {
    sliderBtnNext.classList.add('disabled');
  } else { 
    sliderBtnNext.classList.remove('disabled');
  }
};
function disabledArrowPrev() { 
  if (sliderCount <= 0) {
    sliderBtnPrev.classList.add('disabled');
  } else { 
    sliderBtnPrev.classList.remove('disabled');
  }
}
function showNextSlide() { 
  sliderCount++;
  if (sliderCount >= sliderImages.length - 1) { 
    sliderCount = sliderImages.length - 1;
  }
  rollSlide();
  currentSlide(sliderCount);
}
function showPrevSlide() { 
  sliderCount--;
  if (sliderCount <= 0) { 
    sliderCount = 0;
  }
  rollSlide();
  currentSlide(sliderCount);
}

function currentSlide(index) { 
  sliderDots.forEach(item => item.classList.remove('active-dot'));
  sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => { 
  dot.addEventListener('click', () => { 
    sliderCount = index;
    rollSlide();
    currentSlide(sliderCount);
  })
})


sliderBtnNext.addEventListener('click', showNextSlide);
sliderBtnPrev.addEventListener('click', showPrevSlide);
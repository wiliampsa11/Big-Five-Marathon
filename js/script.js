// Carousel
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('carousel__button--next')
    .addEventListener("click", moveToNextSlide);
document.getElementById('carousel__button--prev')
    .addEventListener("click", moveToPrevSlide);

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    slides[slidePosition].classList.add('carousel__item--visible');
    slides[slidePosition].classList.remove('carousel__item--hidden');
}

function moveToNextSlide() {
    slidePosition = (slidePosition + 1) % totalSlides;
    updateSlidePosition();
}

function moveToPrevSlide() {
    slidePosition = (slidePosition - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Countdown
function countdown() {
    const now = new Date();
    // Set your next marathon date here (example: June 19, 2025)
    const eventDate = new Date(2025, 5, 19); // Months are 0-indexed

    const remTime = eventDate.getTime() - now.getTime();

    if (remTime <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = m.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = s.toString().padStart(2, '0');

    setTimeout(countdown, 1000);
}

countdown();
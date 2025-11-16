// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let index = 0;
let sliderInterval;

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0;
        slide.classList.remove('active_slide');
    });
};

const showSlide = (i = 0) => {
    slides[i].style.opacity = 1;
    slides[i].classList.add('active_slide');
};

const nextSlide = () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    hideSlide();
    showSlide(index);
};

const prevSlide = () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    hideSlide();
    showSlide(index);
};

hideSlide();
showSlide(index);

sliderInterval = setInterval(nextSlide, 3000);

next.onclick = () => {
    nextSlide();
    resetInterval();
};

prev.onclick = () => {
    prevSlide();
    resetInterval();
};

function resetInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 3000);
}




const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.addEventListener('click', () => {
    const value = gmailInput.value.trim();
    if (gmailRegExp.test(value)) {
        gmailResult.innerText = "Валидный Gmail ";
        gmailResult.style.color = "green";
    } else {
        gmailResult.innerText = "Невалидный Gmail";
        gmailResult.style.color = "red";
    }
});

const child = document.querySelector('.child_block');
const parent = document.querySelector('.parent_block');

let posX = 0;
let posY = 0;
let step = 2;
let direction = 'right';

function moveSquare() {
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;
    const childWidth = child.offsetWidth;
    const childHeight = child.offsetHeight;

    switch(direction) {
        case 'right':
            if (posX + childWidth < parentWidth) {
                posX += step;
            } else {
                direction = 'down';
            }
            break;
        case 'down':
            if (posY + childHeight < parentHeight) {
                posY += step;
            } else {
                direction = 'left';
            }
            break;
        case 'left':
            if (posX > 0) {
                posX -= step;
            } else {
                direction = 'up';
            }
            break;
        case 'up':
            if (posY > 0) {
                posY -= step;
            } else {
                direction = 'right';
            }
            break;
    }

    child.style.left = posX + 'px';
    child.style.top = posY + 'px';

    requestAnimationFrame(moveSquare);
}

moveSquare();

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const secondsBlock = document.querySelector('#seconds');

let intervalId = null;
let seconds = 0;

function updateCounter() {
    seconds++;
    secondsBlock.innerText = seconds;
}

startBtn.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(updateCounter, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    secondsBlock.innerText = seconds;
});

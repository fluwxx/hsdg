<<<<<<< HEAD
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');

function showModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

modalClose.addEventListener('click', closeModal);

setTimeout(() => {
    showModal();
}, 10000);

let scrollModalShown = false;

function checkScrollEnd() {
    if (!scrollModalShown && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        showModal();
        scrollModalShown = true;
        window.removeEventListener('scroll', checkScrollEnd);
    }
}

=======
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');

function showModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

modalClose.addEventListener('click', closeModal);

setTimeout(() => {
    showModal();
}, 10000);

let scrollModalShown = false;

function checkScrollEnd() {
    if (!scrollModalShown && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        showModal();
        scrollModalShown = true;
        window.removeEventListener('scroll', checkScrollEnd);
    }
}

>>>>>>> f39dfcda4a0fc3a3ffdf6329dccda390df6171ad
window.addEventListener('scroll', checkScrollEnd);
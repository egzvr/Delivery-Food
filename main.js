const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('modal-auth')

buttonAuth.addEventListener('click', () => {
    console.log('click');
})

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", togglModal);
close.addEventListener("click",togglModal);

function togglModal() {
    modal.classList.toggle("is-open");
}

new WOW().init();


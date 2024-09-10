document.querySelector('.header__hamburger').addEventListener('click', hamburgerHandler);
function hamburgerHandler() {
  let element = document.querySelector('.header__hamburger');
  let menu = document.querySelector('.header__menu');
  element.classList.toggle('header__hamburger--active');
  menu.classList.toggle('header__menu--active');
}

function inputFilled() {
  if (this.value) {
    this.parentNode.classList.add('input-default--filled');
  } else {
    this.parentNode.classList.remove('input-default--filled');
  }
}

const inputs = document.querySelectorAll('.input-default__input');
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', inputFilled);
  }
});

function toggleModal() {
  let modal = document.querySelector('.modal');
  modal.classList.toggle('modal--active');
}

document.querySelector('.modal__open').addEventListener('click', toggleModal);
document.querySelector('.modal__close').addEventListener('click', toggleModal);

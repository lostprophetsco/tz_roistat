document.querySelector('.header__hamburger').addEventListener('click', myFunction);
function myFunction() {
  let element = document.querySelector('.header__hamburger');
  let menu = document.querySelector('.header__menu');
  element.classList.toggle('header__hamburger--active');
  menu.classList.toggle('header__menu--active');
}

const showNav = () => {
  const navBar = document.querySelector('.header__nav--bar');
  const burger = document.querySelector('.header__nav--burger');

  burger.addEventListener('click', () => {
    navBar.classList.toggle('header__nav--active');
  });
};

showNav();

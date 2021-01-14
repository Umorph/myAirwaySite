let burgerButton = document.querySelector('.main-nav__burger-toggle'),
  bugrerWindow = document.querySelector('.main-nav');

burgerButton.addEventListener('click', function(evt){
  burgerButton.classList.toggle('main-nav__burger-toggle--opened');
  bugrerWindow.classList.toggle('main-nav--opened');
});

const menu_bar = document.getElementById('mbar-list');
menu_bar.addEventListener('click', function () {
  this.classList.toggle('mbtn');
});

const navBar = document.getElementById('mbar-list');
navBar.addEventListener('click', function () {
  const navBarClass = document.getElementById('navBar')
  navBarClass.classList.toggle('navToggle');
});
// Start Ham-burger menu bar button interaction
const menu_bar = document.getElementById('mbar-list');
menu_bar.addEventListener('click', function () {
  this.classList.toggle('mbtn');
});
// End Ham-burger menu bar button interaction
// Start navigation menu bar interaction
const navBar = document.getElementById('mbar-list');
navBar.addEventListener('click', function () {
  var navBarClass = document.getElementById('navBar');
  navBarClass.classList.toggle('navToggle');
});
// End navigation menu bar interaction
// Start Shifting main-contents to the bottom of navbar
const main_content = document.getElementById('mbar-list');
navBar.addEventListener('click', function () {
  var main_content_class = document.getElementById('main-content');
  main_content_class.classList.toggle('main-content-toggle');
});
// Ends Shifting main-contents to the bottom of navbar

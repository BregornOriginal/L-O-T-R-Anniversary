// Dom Variables
const $hamburgerMenu = document.getElementById('hamburguer-menu-button');
const $menuNav = document.getElementById('mobile-menu');
const $closeButton = document.getElementById('close-button-image');
const $about = document.getElementById('about');

// Functions
function hideMobileMenu() {
  $menuNav.classList.add('menu-display-off');
}

// Dom Manipulation
$hamburgerMenu.addEventListener('click', () => {
  $menuNav.classList.remove('menu-display-off');
});

$closeButton.addEventListener('click', () => {
  hideMobileMenu();
});

$about.addEventListener('click', () => {
  hideMobileMenu();
})

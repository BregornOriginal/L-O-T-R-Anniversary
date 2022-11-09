/**
 * @jest-environment jsdom
 */

const $testMenuNav = document.createElement('div');
$testMenuNav.setAttribute('id', 'mobile-menu');
$testMenuNav.classList.add('disable-scroll');
document.body.appendChild($testMenuNav);

function hideMobileMenu() {
  $menuNav.classList.add('menu-display-off');
  $menuNav.classList.remove('disable-scroll');
  $html.classList.remove('disable-scroll');
}

const $menuNav = document.getElementById('mobile-menu');

describe ('test hidden mobile funciton', () => {
  test ('mobile menu is visible', () => {
    expect($menuNav.classList.contains('disable-scroll')).toBeTrue;
  })
  test ('mobile menu is hidden', () => {
    expect($menuNav.classList.contains('menu-display-off')).toBeTrue;
  })
 }
);

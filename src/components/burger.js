export function addBurgerMenuEvents() {
  const burgerMenuEl = document.querySelector('#burgerMenu');
  const menuOpenButtonEl = burgerMenuEl.querySelector('#menuOpenButton');
  const overlayEl = burgerMenuEl.querySelector('#menuOverlay');

  menuOpenButtonEl.addEventListener('click', () => {
    const menuBaseEl = burgerMenuEl.querySelector('#menuBase');
    menuBaseEl.style.left = '0px';
    overlayEl.classList.add('active');
  });

  overlayEl.addEventListener('click', () => {
    const menuBaseEl = burgerMenuEl.querySelector('#menuBase');
    menuBaseEl.style.left = '-300px';
    overlayEl.classList.remove('active');
  });
}
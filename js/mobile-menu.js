(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    console.log('Czy menu jest otwarte?', isMenuOpen); // Diagnoza stanu menu

    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    console.log('Zmieniono stan menu na:', !isMenuOpen); // Diagnoza zmiany stanu

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    console.log('Metoda blokady przewijania:', scrollLockMethod); // Diagnoza blokady przewijania
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  console.log('Event listenery zostały dodane'); // Potwierdzenie dodania słuchaczy

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    console.log('Zmiana orientacji/rozmiaru ekranu:', e.matches); // Diagnoza zmiany orientacji
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    console.log('Menu zostało zamknięte na dużym ekranie'); // Informacja o zamknięciu menu
  });
})();

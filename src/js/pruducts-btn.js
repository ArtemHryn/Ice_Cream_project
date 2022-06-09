(() => {
  const menuBtnRef = document.querySelector('[data-products-button]');
  const mobileMenuRef = document.querySelector('[data-description]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expended') === 'true' || false;

    menuBtnRef.setAttribute('aria-expended', !expanded);

    mobileMenuRef.classList.toggle('visually-hidden');
  });
})();

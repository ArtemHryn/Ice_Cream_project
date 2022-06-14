(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeAnchorLink: document.querySelector('[data-anchor-close]'),
    closeModalbuy: document.querySelector('[data-buy-modal-close]'),
    modal: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    buyButton: document.querySelector('.js-buy-button'),
  };
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeAnchorLink.addEventListener('click', toggleModal);
  refs.closeModalbuy.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.buyButton.classList.toggle('hide-button');
  }
})();

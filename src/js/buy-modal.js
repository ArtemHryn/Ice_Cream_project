(() => {
  const refs = {
    openModalBuyBtn: document.querySelector('[data-modal-buy-open]'),
    openModalBuySecondBtn: document.querySelector(
      '[data-modal-buy-second-open]'
    ),
    closeModalBuyBtn: document.querySelector('[data-modal-buy-close]'),
    modalBuy: document.querySelector('[data-modal-buy]'),
    body: document.querySelector('body'),
  };

  refs.openModalBuyBtn.addEventListener('click', toggleModalBuy);
  refs.openModalBuySecondBtn.addEventListener('click', toggleModalBuy);
  refs.closeModalBuyBtn.addEventListener('click', toggleModalBuy);

  function toggleModalBuy() {
    refs.modalBuy.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

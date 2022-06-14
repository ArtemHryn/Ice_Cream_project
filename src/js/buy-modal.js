(() => {
  const refs = {
    openModalBuyBtn: document.querySelector('[data-modal-buy-open]'),
    openModalBuySecondBtn: document.querySelector(
      '[data-modal-buy-second-open]'
    ),
    closeModalBuyBtn: document.querySelector('[data-modal-buy-close]'),
    modalBuy: document.querySelector('[data-modal-buy]'),
    buyBtn: document.querySelector('.js-buy-button-modal'),
    body: document.querySelector('body'),
  };

  refs.openModalBuyBtn.addEventListener('click', toggleModalBuy);
  refs.openModalBuySecondBtn.addEventListener('click', toggleModalBuy);
  refs.closeModalBuyBtn.addEventListener('click', toggleModalBuy);
  refs.buyBtn.addEventListener('click', toggleModalBuy);

  function toggleModalBuy() {
    refs.modalBuy.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    document.querySelector('[data-total-price]').textContent = 0;
    document.querySelector('[data-value]').textContent = 0;
    for (let i = 1; i < 4; i += 1) {
      document.querySelector(`.js-value-${i}`).textContent = 0;
    }
  }
})();

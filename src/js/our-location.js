(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-our-location-open'),
    closeModalBtn: document.querySelector('.js-our-location-close'),
    modal: document.querySelector('.js-our-location-window'),
    body: document.querySelector('body'),
    
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll-not-for-Yura');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-franchise-open'),
    closeModalBtn: document.querySelector('.js-franchise-close'),
    modal: document.querySelector('.js-franchise-window'),
    body: document.querySelector('body'),
    
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

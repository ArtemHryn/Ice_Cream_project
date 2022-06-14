(() => {
  const refs = {
    openFranchiseBtn: document.querySelector('.js-franchise-open'),
    closeFranchiseBtn: document.querySelector('.js-franchise-close'),
    modalFranchiseWindow: document.querySelector('.js-franchise-window'),
    body: document.querySelector('body'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleModalFranchiseWindow);
  refs.closeFranchiseBtn.addEventListener('click', toggleModalFranchiseWindow);

  console.log(refs.openFranchiseBtn);
  console.log(refs.closeFranchiseBtn);

  function toggleModalFranchiseWindow() {
    refs.modalFranchiseWindow.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll-not-for-Yura');
  }
})();

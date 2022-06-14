(() => {
    const refs = {
      openModalAboutBtn: document.querySelector('[data-modal-about-open]'),
      closeModalAboutBtn: document.querySelector('[data-modal-about-close]'),
      modalAbout: document.querySelector('[data-modal-about]'),
      body: document.querySelector('body'),
    };
  
    refs.openModalAboutBtn.addEventListener("click", toggleModalAbout);
    refs.closeModalAboutBtn.addEventListener("click", toggleModalAbout);
  
    function toggleModalAbout() {
      refs.modalAbout.classList.toggle("is-hidden");
      refs.body.classList.toggle('no-scroll-not-for-Yura');
    }
  })();
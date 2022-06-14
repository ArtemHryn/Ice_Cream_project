(() => {
    const refs = {
      openModalAboutBtn: document.querySelector("[data-modal-about-open]"),
      closeModalAboutBtn: document.querySelector("[data-modal-about-close]"),
      modalAbout: document.querySelector("[data-modal-about]"),
    };
  
    refs.openModalAboutBtn.addEventListener("click", toggleModalAbout);
    refs.closeModalAboutBtn.addEventListener("click", toggleModalAbout);
  
    function toggleModalAbout() {
      refs.modalAbout.classList.toggle("is-hidden");
    }
  })();
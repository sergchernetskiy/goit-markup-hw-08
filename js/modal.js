(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.modal.addEventListener("click", onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function openModal() {
    document.addEventListener("keydown", onEscKeyPress);
    toggleModal();
  }

  function closeModal() {
    document.removeEventListener("keydown", onEscKeyPress);
    toggleModal();
  }

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  }

  function onEscKeyPress(e) {
    if (e.code === "Escape") {
      toggleModal();
    }
  }
})();

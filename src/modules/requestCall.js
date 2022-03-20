export const requestCall = () => {
  const btnCallback = document.querySelector(`.button a[href="#callback"]`);
  const overlayModal = document.querySelector(".overlay");
  const headerModal = document.querySelector(".header-modal");
  const btnCloseModal = headerModal.querySelector(".header-modal__close");

  const closeModal = () => {
    headerModal.style.display = "";
    overlayModal.style.display = "";
  };

  btnCallback.addEventListener("click", (e) => {
    headerModal.style.display = "block";
    overlayModal.style.display = "block";
    e.preventDefault();
  });

  document.addEventListener("click", (e) => {
    if (e.target === overlayModal || e.target === btnCloseModal) {
      closeModal();
    }
  });
};

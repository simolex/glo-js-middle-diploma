import { disableBodyScroll, enableBodyScroll } from "./helpers";
export const requestCall = () => {
  const btnCallback = document.querySelector(`.button a[href="#callback"]`);
  const overlayModal = document.querySelector(".overlay");
  const headerModal = document.querySelector(".header-modal");
  const btnCloseModal = headerModal.querySelector(".header-modal__close");

  // const closeModal = () => {
  //   headerModal.style.display = "";
  //   closeOverlay();
  // };

  btnCallback.addEventListener("click", (e) => {
    headerModal.style.display = "block";
    openOverlay();
    disableBodyScroll(true);
    window.glCloseModal = () => {
      headerModal.style.display = "";
      closeOverlay();
      enableBodyScroll();
      window.glCloseModal = () => {};
    };
    e.preventDefault();
  });

  document.addEventListener("click", (e) => {
    if (e.target === btnCloseModal) {
      glCloseModal();
    }
  });
};

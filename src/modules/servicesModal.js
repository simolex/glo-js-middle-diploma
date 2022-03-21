import { disableBodyScroll, enableBodyScroll } from "./helpers";
export const servicesModal = () => {
  const servicesSlider = document.querySelector(".services-swiper");
  const serviceButtons = servicesSlider.querySelectorAll(".service-button");

  const overlayModal = document.querySelector(".overlay");
  const serviceModal = document.querySelector(".services-modal");
  const btnCloseModal = serviceModal.querySelector(".services-modal__close");

  const closeModal = () => {
    serviceModal.style.display = "";
    closeOverlay();
  };

  servicesSlider.addEventListener("click", (e) => {
    serviceButtons.forEach((button) => {
      if (button === e.target.closest(".service-button")) {
        serviceModal.style.display = "block";
        openOverlay();
        disableBodyScroll(true);
        window.glCloseModal = () => {
          serviceModal.style.display = "";
          closeOverlay();
          enableBodyScroll();
          window.glCloseModal = () => {};
        };
        e.preventDefault();
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target === btnCloseModal) {
      closeModal();
    }
  });
};

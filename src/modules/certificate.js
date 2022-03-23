import { animate, disableBodyScroll, enableBodyScroll } from "./helpers";

export const certificate = () => {
  const documents = document.getElementById("documents");
  const documentOverlay = documents.querySelectorAll(".document-overlay");
  const overlay = document.querySelector(".overlay");
  const button = document.createElement("span");
  button.classList.add("header-modal__close");
  button.textContent = "x";
  button.title = "Close";

  documents.addEventListener("click", (e) => {
    e.preventDefault();
    const sertificateDocument = e.target.closest(".sertificate-document");
    if (sertificateDocument) {
      const sertificateImage = document.createElement("img");
      const startHeight = 35,
        finishHeight = 95;
      sertificateImage.style.height = `${startHeight}%`;
      sertificateImage.classList.add("header-modal--opened");
      sertificateImage.src = sertificateDocument.getAttribute("href");

      openOverlay();
      disableBodyScroll(true);
      window.glCloseModal = () => {
        closeOverlay();
        enableBodyScroll();
        window.glCloseModal = () => {};
      };

      overlay.append(sertificateImage);
      overlay.append(button);

      animate({
        duration: 400,
        timing: (timeFraction) => timeFraction,
        draw(progress) {
          sertificateImage.style.height = `${
            startHeight + Math.round((finishHeight - startHeight) * progress)
          }%`;
        },
      });
    }
  });
  documents.addEventListener(
    "mouseenter",
    (e) => {
      documentOverlay.forEach((overlay) => {
        if (overlay === e.target.closest(".document-overlay")) {
          overlay.style.opacity = 1;
        } else {
          overlay.style.opacity = 0;
        }
      });
    },
    true
  );
  documents.addEventListener(
    "mouseleave",
    (e) => {
      if (!e.target.closest(".document-overlay")) {
        documentOverlay.forEach((overlay) => (overlay.style.opacity = 0));
      }
    },
    true
  );
  document.addEventListener("click", (e) => {
    if (e.target === button) {
      glCloseModal();
    }
  });
};

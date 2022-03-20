export const closeOverlay = () => {
  const overlayModal = document.querySelector(".overlay");

  const closeOL = () => {
    overlayModal.style.display = "";
    overlayModal.innerHTML = "";
  };

  document.addEventListener("click", (e) => {
    if (e.target === overlayModal) {
      closeOL();
    }
  });
};

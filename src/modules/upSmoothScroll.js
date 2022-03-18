export const upSmoothScroll = () => {
  const btnSmoothScroll = document.querySelector(".smooth-scroll");
  const secondPage = document.getElementById("benefits");

  const toggleScrollButton = () => {
    if (scrollY > secondPage.offsetTop) {
      btnSmoothScroll.style.display = "";
    } else {
      btnSmoothScroll.style.display = "none";
    }
  };

  btnSmoothScroll.addEventListener("click", (e) => {
    document.getElementById("header").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  toggleScrollButton();
  document.addEventListener("scroll", () => toggleScrollButton());
};

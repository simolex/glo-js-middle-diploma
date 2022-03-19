import Swiper, { Navigation, Lazy } from "swiper";
import { requestCall } from "./modules/requestCall";
import { timer } from "./modules/timer";
import { upSmoothScroll } from "./modules/upSmoothScroll";
import { calculate } from "./modules/calculate";
import { certificate } from "./modules/certificate";
import { sliderService } from "./modules/sliderService";

requestCall();
timer("23 march 2022", true);
upSmoothScroll();
calculate();
certificate();
sliderService(
  new Swiper(".services-swiper", {
    // Optional parameters
    //direction: "vertical",
    modules: [Navigation, Lazy],
    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
      disabledClass: "services__arrow--disabled",
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
  })
);

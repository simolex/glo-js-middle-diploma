import Swiper, { Navigation } from "swiper";
import { closeOverlay } from "./modules/closeOverlay";
import { requestCall } from "./modules/requestCall";
import { timer } from "./modules/timer";
import { upSmoothScroll } from "./modules/upSmoothScroll";
import { calculate } from "./modules/calculate";
import { certificate } from "./modules/certificate";
import { sliderService } from "./modules/sliderService";
import { sliderBenefit } from "./modules/sliderBenefit";
import { servicesModal } from "./modules/servicesModal";
import { applyForm } from "./modules/applyForm";
import { reviewComments } from "./modules/reviewComments";

closeOverlay();
requestCall();
timer("23 march 2022", true);
upSmoothScroll();
calculate();
certificate();
sliderService(
  new Swiper(".services-swiper", {
    // Optional parameters
    //direction: "vertical",
    modules: [Navigation],
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

sliderBenefit(
  new Swiper(".benefits-wrap", {
    // Optional parameters
    //direction: "vertical",
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 7,
    // Navigation arrows
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
      disabledClass: "services__arrow--disabled",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  })
);
servicesModal();

const forms = {
  constransTemplates: {
    hasNotName: /[^а-яёa-z \-]/gi,
    hasNotTelephone: /[^\d\(\)\-\+]/gi,
  },
  validateTest: {
    lengthMin: function (value, length = 1) {
      return {
        result: value.length >= +length,
        message: `Минимальное кол-во символов: ${length}`,
      };
    },
    phoneMask: function (value) {
      return {
        result: /\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}/gi.test(value),
        message: "Шаблон для телефона +x(xxx)xxx-xx-xx",
      };
    },
  },
  formList: [
    {
      formId: "callback-form",
      formFields: [
        {
          fieldSelector: "input[name=fio]",
          fieldConstrians: ["hasNotName"],
          fieldValidate: [{ test: "lengthMin", args: [2] }],
        },
        {
          fieldSelector: "input[name=phone]",
          fieldConstrians: ["hasNotTelephone"],
          fieldValidate: [{ test: "phoneMask", args: [] }],
        },
      ],
      someElement: [
        {
          type: "input",
          id: "calc-total",
          noTheEmpty: "",
        },
      ],
    },
    {
      formId: "application-form",
      formFields: [
        {
          fieldSelector: "input[name=fio]",
          fieldConstrians: ["hasNotName"],
          fieldValidate: [{ test: "lengthMin", args: [2] }],
        },
        {
          fieldSelector: "input[name=phone]",
          fieldConstrians: ["hasNotTelephone"],
          fieldValidate: [{ test: "phoneMask", args: [] }],
        },
      ],
      someElement: [
        {
          type: "input",
          id: "calc-total",
          noTheEmpty: "",
        },
      ],
    },
    {
      formId: "timer-form-1",
      formFields: [
        {
          fieldSelector: "input[name=fio]",
          fieldConstrians: ["hasNotName"],
          fieldValidate: [{ test: "lengthMin", args: [2] }],
        },
        {
          fieldSelector: "input[name=phone]",
          fieldConstrians: ["hasNotTelephone"],
          fieldValidate: [{ test: "phoneMask", args: [] }],
        },
      ],
      someElement: [
        {
          type: "input",
          id: "calc-total",
          noTheEmpty: "",
        },
      ],
    },
    {
      formId: "timer-form-2",
      formFields: [
        {
          fieldSelector: "input[name=fio]",
          fieldConstrians: ["hasNotName"],
          fieldValidate: [{ test: "lengthMin", args: [2] }],
        },
        {
          fieldSelector: "input[name=phone]",
          fieldConstrians: ["hasNotTelephone"],
          fieldValidate: [{ test: "phoneMask", args: [] }],
        },
      ],
      someElement: [
        {
          type: "input",
          id: "calc-total",
          noTheEmpty: "",
        },
      ],
    },
  ],
};
applyForm(forms);

reviewComments();

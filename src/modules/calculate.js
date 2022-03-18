import { animate } from "./helpers";

export const calculate = (price = 100) => {
  const calc = document.getElementById("calc");
  const calcType = document.getElementById("calc-type");
  const calcTypeMaterial = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");

  if (!calc) {
    return false;
  }

  try {
    const getTotalPrice = () => {
      const calcTypeValue = calcType.value !== "--" ? +calcType.value : 0;
      const calcTypeMaterialValue = calcTypeMaterial.value !== "--" ? +calcTypeMaterial.value : 0;
      const calcInputValue = +calcInput.value;
      let startAnimateValue, targetAnimateValue;
      let totalValue = 0;

      totalValue = calcInputValue * calcTypeValue * calcTypeMaterialValue * price;

      startAnimateValue = +calcTotal.value;
      targetAnimateValue = totalValue;

      animate({
        duration: 400,
        timing: (timeFraction) => timeFraction,
        draw(progress) {
          calcTotal.value = startAnimateValue + Math.round((targetAnimateValue - startAnimateValue) * progress);
          if (calcTotal.value === "0") {
            calcTotal.value = "";
          }
        },
      });
    };

    calc.addEventListener("input", (e) => {
      if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput) {
        if (e.target === calcInput) {
          if (+e.target.value <= 0 && e.target.value !== "") {
            e.target.value = 0;
          }
        }
        getTotalPrice();
      }
    });
  } catch (err) {
    console.log(`При работе калькулятор возникла ошибка: ${err.message}`);
  }
};

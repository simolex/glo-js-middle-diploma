/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_requestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/requestCall */ \"./modules/requestCall.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_upSmoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/upSmoothScroll */ \"./modules/upSmoothScroll.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculate */ \"./modules/calculate.js\");\n/* harmony import */ var _modules_certificate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/certificate */ \"./modules/certificate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_requestCall__WEBPACK_IMPORTED_MODULE_0__.requestCall)();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(\"23 march 2022\", true);\r\n(0,_modules_upSmoothScroll__WEBPACK_IMPORTED_MODULE_2__.upSmoothScroll)();\r\n(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_3__.calculate)();\r\n(0,_modules_certificate__WEBPACK_IMPORTED_MODULE_4__.certificate)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculate.js":
/*!******************************!*\
  !*** ./modules/calculate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculate\": () => (/* binding */ calculate)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calculate = (price = 100) => {\r\n  const calc = document.getElementById(\"calc\");\r\n  const calcType = document.getElementById(\"calc-type\");\r\n  const calcTypeMaterial = document.getElementById(\"calc-type-material\");\r\n  const calcInput = document.getElementById(\"calc-input\");\r\n  const calcTotal = document.getElementById(\"calc-total\");\r\n\r\n  if (!calc) {\r\n    return false;\r\n  }\r\n\r\n  try {\r\n    const getTotalPrice = () => {\r\n      const calcTypeValue = calcType.value !== \"--\" ? +calcType.value : 0;\r\n      const calcTypeMaterialValue = calcTypeMaterial.value !== \"--\" ? +calcTypeMaterial.value : 0;\r\n      const calcInputValue = +calcInput.value;\r\n      let startAnimateValue, targetAnimateValue;\r\n      let totalValue = 0;\r\n\r\n      totalValue = calcInputValue * calcTypeValue * calcTypeMaterialValue * price;\r\n\r\n      startAnimateValue = +calcTotal.value;\r\n      targetAnimateValue = totalValue;\r\n\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 400,\r\n        timing: (timeFraction) => timeFraction,\r\n        draw(progress) {\r\n          calcTotal.value = startAnimateValue + Math.round((targetAnimateValue - startAnimateValue) * progress);\r\n          if (calcTotal.value === \"0\") {\r\n            calcTotal.value = \"\";\r\n          }\r\n        },\r\n      });\r\n    };\r\n\r\n    calc.addEventListener(\"input\", (e) => {\r\n      if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput) {\r\n        if (e.target === calcInput) {\r\n          if (+e.target.value <= 0 && e.target.value !== \"\") {\r\n            e.target.value = 0;\r\n          }\r\n        }\r\n        getTotalPrice();\r\n      }\r\n    });\r\n  } catch (err) {\r\n    console.log(`При работе калькулятор возникла ошибка: ${err.message}`);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/calculate.js?");

/***/ }),

/***/ "./modules/certificate.js":
/*!********************************!*\
  !*** ./modules/certificate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"certificate\": () => (/* binding */ certificate)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst certificate = () => {\r\n  const documents = document.getElementById(\"documents\");\r\n  const documentOverlay = documents.querySelectorAll(\".document-overlay\");\r\n  const overlay = document.querySelector(\".overlay\");\r\n  console.log(documents);\r\n\r\n  documents.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    const sertificateDocument = e.target.closest(\".sertificate-document\");\r\n    if (sertificateDocument) {\r\n      const sertificateImage = document.createElement(\"img\");\r\n      const startHeight = 35,\r\n        finishHeight = 95;\r\n      sertificateImage.style.height = `${startHeight}%`;\r\n      sertificateImage.classList.add(\"header-modal--opened\");\r\n      sertificateImage.src = sertificateDocument.getAttribute(\"href\");\r\n\r\n      overlay.style.display = \"block\";\r\n      overlay.append(sertificateImage);\r\n\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 400,\r\n        timing: (timeFraction) => timeFraction,\r\n        draw(progress) {\r\n          sertificateImage.style.height = `${startHeight + Math.round((finishHeight - startHeight) * progress)}%`;\r\n        },\r\n      });\r\n    }\r\n  });\r\n  documents.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      documentOverlay.forEach((overlay) => {\r\n        if (overlay === e.target.closest(\".document-overlay\")) {\r\n          overlay.style.opacity = 1;\r\n        } else {\r\n          overlay.style.opacity = 0;\r\n        }\r\n      });\r\n    },\r\n    true\r\n  );\r\n  documents.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (!e.target.closest(\".document-overlay\")) {\r\n        documentOverlay.forEach((overlay) => (overlay.style.opacity = 0));\r\n      }\r\n    },\r\n    true\r\n  );\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/certificate.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) {\r\n      timeFraction = 1;\r\n    }\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/requestCall.js":
/*!********************************!*\
  !*** ./modules/requestCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"requestCall\": () => (/* binding */ requestCall)\n/* harmony export */ });\nconst requestCall = () => {\r\n  const btnCallback = document.querySelector(`.button a[href=\"#callback\"]`);\r\n  const overlayModal = document.querySelector(\".overlay\");\r\n  const headerModal = document.querySelector(\".header-modal\");\r\n  const btnCloseModal = headerModal.querySelector(\".header-modal__close\");\r\n\r\n  const closeModal = () => {\r\n    headerModal.style.display = \"\";\r\n    overlayModal.style.display = \"\";\r\n    overlayModal.innerHTML = \"\";\r\n  };\r\n\r\n  btnCallback.addEventListener(\"click\", (e) => {\r\n    headerModal.style.display = \"block\";\r\n    overlayModal.style.display = \"block\";\r\n    e.preventDefault();\r\n  });\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (e.target === overlayModal || e.target === btnCloseModal) {\r\n      closeModal();\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/requestCall.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadLine, hasDays = false) => {\r\n  const timerDays = document.querySelectorAll(\".count_1 span\");\r\n  const timerHours = document.querySelectorAll(\".count_2 span\");\r\n  const timerMinutes = document.querySelectorAll(\".count_3 span\");\r\n  const timerSeconds = document.querySelectorAll(\".count_4 span\");\r\n  const dateStop = new Date(deadLine).getTime();\r\n  let timerHandle;\r\n\r\n  const leadingZero = (num) => (num < 10 ? \"0\" + num : \"\" + num);\r\n\r\n  const getTimeRemaining = () => {\r\n    const dateNow = new Date().getTime();\r\n    const timeRemaining = (dateStop - dateNow) / 1000;\r\n    const days = Math.floor(timeRemaining / 3600 / 24);\r\n    let hours = Math.floor(timeRemaining / 3600);\r\n    hours = hasDays ? hours % 24 : hours;\r\n    const minutes = Math.floor(timeRemaining / 60) % 60;\r\n    const seconds = Math.floor(timeRemaining) % 60;\r\n    return {\r\n      timeRemaining,\r\n      days: leadingZero(days),\r\n      hours: leadingZero(hours),\r\n      minutes: leadingZero(minutes),\r\n      seconds: leadingZero(seconds),\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining <= 0) {\r\n      clearInterval(timerHandle);\r\n    } else {\r\n      for (let i = 0; i < 2; i++) {\r\n        timerDays[i].textContent = getTime.days;\r\n        timerHours[i].textContent = getTime.hours;\r\n        timerMinutes[i].textContent = getTime.minutes;\r\n        timerSeconds[i].textContent = getTime.seconds;\r\n      }\r\n    }\r\n  };\r\n\r\n  timerHandle = setInterval(updateClock, 1000);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/upSmoothScroll.js":
/*!***********************************!*\
  !*** ./modules/upSmoothScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"upSmoothScroll\": () => (/* binding */ upSmoothScroll)\n/* harmony export */ });\nconst upSmoothScroll = () => {\r\n  const btnSmoothScroll = document.querySelector(\".smooth-scroll\");\r\n  const secondPage = document.getElementById(\"benefits\");\r\n\r\n  const toggleScrollButton = () => {\r\n    if (scrollY > secondPage.offsetTop) {\r\n      btnSmoothScroll.style.display = \"\";\r\n    } else {\r\n      btnSmoothScroll.style.display = \"none\";\r\n    }\r\n  };\r\n\r\n  btnSmoothScroll.addEventListener(\"click\", (e) => {\r\n    document.getElementById(\"header\").scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  });\r\n\r\n  toggleScrollButton();\r\n  document.addEventListener(\"scroll\", () => toggleScrollButton());\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/upSmoothScroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
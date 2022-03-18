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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_requestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/requestCall */ \"./modules/requestCall.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_upSmoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/upSmoothScroll */ \"./modules/upSmoothScroll.js\");\n\r\n\r\n\r\n\r\n(0,_modules_requestCall__WEBPACK_IMPORTED_MODULE_0__.requestCall)();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(\"23 march 2022\", true);\r\n(0,_modules_upSmoothScroll__WEBPACK_IMPORTED_MODULE_2__.upSmoothScroll)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/requestCall.js":
/*!********************************!*\
  !*** ./modules/requestCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"requestCall\": () => (/* binding */ requestCall)\n/* harmony export */ });\nconst requestCall = () => {\r\n  const btnCallback = document.querySelector(`.button a[href=\"#callback\"]`);\r\n  const overlayModal = document.querySelector(\".overlay\");\r\n  const headerModal = document.querySelector(\".header-modal\");\r\n  const btnCloseModal = headerModal.querySelector(\".header-modal__close\");\r\n\r\n  const closeModal = () => {\r\n    headerModal.style.display = \"\";\r\n    overlayModal.style.display = \"\";\r\n  };\r\n\r\n  btnCallback.addEventListener(\"click\", (e) => {\r\n    headerModal.style.display = \"block\";\r\n    overlayModal.style.display = \"block\";\r\n    e.preventDefault();\r\n  });\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    console.log(e.target);\r\n    if (e.target === overlayModal || e.target === btnCloseModal) {\r\n      closeModal();\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/requestCall.js?");

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
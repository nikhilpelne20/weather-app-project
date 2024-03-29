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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n\r\n\r\n\r\nconst form = document.getElementById(\"searchForm\")\r\nconst inputCity = document.getElementById(\"cityNameInput\")\r\nconst submitBtn = document.getElementById(\"searchBtn\")\r\n\r\nform.addEventListener(\"submit\",(e)=>{\r\n    e.preventDefault()\r\n})\r\n\r\nsubmitBtn.addEventListener(\"click\",async ()=>{\r\n    if(inputCity.value === \"\") return;\r\n    const getData = await _modules_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeatherData(inputCity.value)\r\n    _modules_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayCard(getData)\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTemperature = (()=>{\r\n    const convertData = async (data)=>{\r\n      const name = data.location.name\r\n      const {\r\n        temp_c:temp_in_c,\r\n        feelslike_c:what_feelslike_c,\r\n        temp_f:temp_in_f,\r\n        feelslike_f:what_feelslike_f,\r\n        wind_kph:wind_in_kph,\r\n        humidity:what_humidity\r\n        } = data.current;\r\n       const condition = data.current.condition.text;\r\n       const gifImageUrl = await getWeatherConditionImage(condition)\r\n       return{name,temp_in_c,what_feelslike_c,temp_in_f,what_feelslike_f,wind_in_kph,what_humidity,condition,gifImageUrl}\r\n    }\r\n\r\n    async function getWeatherData(city){\r\n        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=1fb9b24b0ecd46f3b25110719242301&q=${city}`;\r\n        \r\n        try{\r\n            const response = await fetch(apiUrl, {mode:'cors'})\r\n            if(!response.ok) throw new Error(`entered ${city} is not a city`)\r\n            const data = convertData(await response.json())\r\n            return data\r\n        }\r\n        catch(error){\r\n            alert(error)\r\n            return null\r\n        }\r\n    }\r\n\r\n    async function getWeatherConditionImage(condition){\r\n        const conditionUrl = `https://api.giphy.com/v1/gifs/translate?api_key=fBYwmg7FlJvqtqxC3qON93YDNj3hpuUP&s=${condition}`;\r\n\r\n        try{\r\n            const response = await fetch(conditionUrl,{mode:'cors'})\r\n            if(!response.ok) throw new Error(`Condition Unclear`)\r\n            const data = await response.json()\r\n            return data.data.images.original.url;\r\n        }\r\n        catch(error){\r\n            alert(error)\r\n            return null\r\n        }\r\n    }\r\nreturn{getWeatherData}\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTemperature);\r\n\r\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getCard = (()=>{\r\n    function displayCard(data){\r\n        if(!data) return;\r\n        const cardSection = document.getElementById(\"card-container\")\r\n        const gifSection = document.getElementById(\"gifSection\")\r\n        \r\n        cardSection.classList.add(\"active\")\r\n        gifSection.classList.add(\"active\")\r\n\r\n\r\n        const gifImage = document.querySelector('img')\r\n        const cityName = document.getElementById(\"cityName\")\r\n        const cityTemp = document.getElementById(\"cityTemp\")\r\n        const feelsLike = document.getElementById(\"feelsLike\")\r\n        const condition = document.getElementById(\"condition\")\r\n        const humidity = document.getElementById(\"humidity\")\r\n        const wind = document.getElementById(\"wind\")\r\n\r\n        cityName.innerText=`${data.name}`\r\n        cityTemp.innerText=`${data.temp_in_c} °C`\r\n        feelsLike.innerText=`Fells like: ${data.what_feelslike_c} °C`\r\n        condition.innerText=`condition: ${data.condition}`\r\n        humidity.innerText=`Humidity: ${data.what_humidity} %`\r\n        wind.innerText=`Wind: ${data.wind_in_kph} km/h`\r\n        gifImage.src=data.gifImageUrl\r\n    } \r\n    return {displayCard}\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCard);\n\n//# sourceURL=webpack://webpack-template-repo/./src/modules/view.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
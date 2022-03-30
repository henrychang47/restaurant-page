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

/***/ "./src/area.js":
/*!*********************!*\
  !*** ./src/area.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBody\": () => (/* binding */ createBody),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader() {\r\n  const header = document.createElement('div');\r\n  const tabsArea = document.createElement('div');\r\n\r\n  header.setAttribute('id', 'header');\r\n  tabsArea.setAttribute('id', 'tabs-area');\r\n\r\n  header.append('BURGERS', tabsArea);\r\n\r\n  return header;\r\n}\r\n\r\nfunction createBody() {\r\n  const div = document.createElement('div');\r\n  div.setAttribute('id', 'body');\r\n\r\n  return div;\r\n}\r\n\r\nfunction createFooter() {\r\n  const div = document.createElement('div');\r\n  const photoLink = document.createElement('a');\r\n  const unsplashLink = document.createElement('a');\r\n\r\n  div.setAttribute('id', 'footer');\r\n\r\n  photoLink.textContent = '@amir_v_ali';\r\n  photoLink.setAttribute('href', 'https://unsplash.com/@amir_v_ali');\r\n\r\n  unsplashLink.textContent = 'Unsplash.';\r\n  unsplashLink.setAttribute('href', 'https://unsplash.com');\r\n\r\n  div.append(\"Photo by\", photoLink, \"on\", unsplashLink);\r\n\r\n  return div;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/area.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area */ \"./src/area.js\");\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab */ \"./src/tab.js\");\n\r\n\r\n\r\nconst content = document.querySelector('#content');\r\n\r\nconst header = (0,_area__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\r\nconst body = (0,_area__WEBPACK_IMPORTED_MODULE_0__.createBody)();\r\nconst footer = (0,_area__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\r\n\r\ncontent.appendChild(header);\r\ncontent.appendChild(body);\r\ncontent.appendChild(footer);\r\n\r\n(0,_tab__WEBPACK_IMPORTED_MODULE_1__.createTabs)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageContents/contact.js":
/*!*************************************!*\
  !*** ./src/pageContents/contact.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\r\n  const content = document.createElement('div');\r\n  const header = document.createElement('h2');\r\n  const paragraph1 = document.createElement('p');\r\n  const paragraph2 = document.createElement('p');\r\n  const hr = document.createElement('hr');\r\n\r\n  header.textContent = 'Contact Us';\r\n\r\n  paragraph1.textContent = `Phone: 1234-567-890`;\r\n  paragraph2.textContent = `Email:weloveburgers@eat.com`;\r\n\r\n\r\n  content.setAttribute('class', 'bodyContent');\r\n  content.append(header, hr, paragraph1, paragraph2);\r\n\r\n  return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact());\n\n//# sourceURL=webpack://restaurant-page/./src/pageContents/contact.js?");

/***/ }),

/***/ "./src/pageContents/home.js":
/*!**********************************!*\
  !*** ./src/pageContents/home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home() {\r\n  const content = document.createElement('div');\r\n  const header = document.createElement('h2');\r\n  const paragraph1 = document.createElement('p');\r\n  const paragraph2 = document.createElement('p');\r\n  const hr = document.createElement('hr');\r\n\r\n  header.textContent = 'Burgers';\r\n\r\n  paragraph1.textContent = `A hamburger (or burger for short) is a food consisting \r\n                            of fillings —usually a patty of ground meat, typically \r\n                            beef — placed inside a sliced bun or bread roll. `\r\n  paragraph2.textContent = `Hamburgers are often served with cheese, lettuce, tomato,\r\n                            onion, pickles, bacon, or chilis.`;\r\n\r\n\r\n  content.setAttribute('class', 'bodyContent');\r\n  content.append(header, hr, paragraph1, paragraph2);\r\n\r\n  return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home());\n\n//# sourceURL=webpack://restaurant-page/./src/pageContents/home.js?");

/***/ }),

/***/ "./src/pageContents/menu.js":
/*!**********************************!*\
  !*** ./src/pageContents/menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu() {\r\n  const content = document.createElement('div');\r\n  const header = document.createElement('h2');\r\n  const hr = document.createElement('hr');\r\n  const foodList = createFoodList();\r\n\r\n  header.textContent = 'Menu';\r\n\r\n  content.setAttribute('class', 'bodyContent');\r\n  content.append(header, hr, foodList);\r\n\r\n  return content;\r\n}\r\n\r\nfunction createFoodList() {\r\n  const content = document.createElement('div');\r\n  const foodDatas =\r\n    [{ name: 'Burger3X', describe: 'Cu malorum din omittantur cum, te iusto libris.' },\r\n    { name: 'YummyBurger', describe: 'Te seeda utamur nusquam percipitur.' },\r\n    { name: 'Burger2Z', describe: ' In pri rationibus, at pro iudico populo.' },\r\n    { name: 'CheeseBurger', describe: 'QId mei nisl officiis.' },\r\n    { name: 'GoodBurger', describe: 'Ne sed posse forensibus. Eu sed ferri simul.' },\r\n    { name: 'Burger3Y', describe: 'Quo ei quando possim elaboraret. Id mei nisl officiis.' },];\r\n  content.setAttribute('id', 'food-list');\r\n\r\n  foodDatas.forEach(({ name, describe }) => {\r\n    let food = createFoodCard(name, describe);\r\n    content.append(food);\r\n  });\r\n\r\n  return content;\r\n}\r\n\r\nfunction createFoodCard(name, describe) {\r\n  const content = document.createElement('div');\r\n  const img = document.createElement('img');\r\n  const text = document.createElement('div');\r\n  const title = document.createElement('h3');\r\n\r\n  content.setAttribute('class', 'food-card');\r\n  img.setAttribute('src', `../../assets/${name}.jpeg`);\r\n  title.textContent = name;\r\n\r\n  text.append(title, describe);\r\n\r\n  content.append(img, text);\r\n\r\n  return content;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu());\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageContents/menu.js?");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTabs\": () => (/* binding */ createTabs)\n/* harmony export */ });\n/* harmony import */ var _pageContents_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageContents/home */ \"./src/pageContents/home.js\");\n/* harmony import */ var _pageContents_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageContents/menu */ \"./src/pageContents/menu.js\");\n/* harmony import */ var _pageContents_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageContents/contact */ \"./src/pageContents/contact.js\");\n\r\n\r\n\r\n\r\nfunction createTabs() {\r\n  const body = document.querySelector('#body');\r\n  const tabsArea = document.querySelector('#tabs-area')\r\n\r\n  const homeTab = createHomeTab();\r\n  const menuTab = createMenuTab();\r\n  const contactTab = createContactTab();\r\n\r\n  let lastContent = _pageContents_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"];// init page\r\n  body.appendChild(lastContent);\r\n\r\n  tabsArea.appendChild(homeTab);\r\n  tabsArea.appendChild(menuTab);\r\n  tabsArea.appendChild(contactTab);\r\n\r\n  homeTab.addEventListener('click', () => {\r\n    body.replaceChild(_pageContents_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"], lastContent);\r\n    lastContent = _pageContents_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  });\r\n\r\n  menuTab.addEventListener('click', () => {\r\n    body.replaceChild(_pageContents_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], lastContent);\r\n    lastContent = _pageContents_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n  });\r\n\r\n  contactTab.addEventListener('click', () => {\r\n    body.replaceChild(_pageContents_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"], lastContent);\r\n    lastContent = _pageContents_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n  });\r\n}\r\n\r\nfunction createHomeTab() {\r\n  const homeTab = document.createElement('div');\r\n  homeTab.appendChild(document.createTextNode(\"Home\"));\r\n  homeTab.setAttribute('class', 'tab');\r\n\r\n  return homeTab;\r\n}\r\n\r\nfunction createMenuTab() {\r\n  const menuTab = document.createElement('div');\r\n  menuTab.appendChild(document.createTextNode(\"Menu\"));\r\n  menuTab.setAttribute('class', 'tab');\r\n\r\n  return menuTab;\r\n}\r\n\r\nfunction createContactTab() {\r\n  const contactTab = document.createElement('div');\r\n  contactTab.appendChild(document.createTextNode(\"Contact\"));\r\n  contactTab.setAttribute('class', 'tab');\r\n\r\n  return contactTab;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/tab.js?");

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
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("const showMore = document.getElementById(\"show-more\");\r\nconst showLess = document.getElementById(\"show-less\");\r\nconst hideCollection = document.getElementsByClassName(\"tag__item-hide\");\r\n\r\nconst itemsCount = hideCollection.length;\r\n\r\nshowMore.addEventListener(\"click\", (event) => {\r\n  showMore.style.display = 'none';\r\n  showLess.style.display = 'block';\r\n  for (var j = 0; j <= itemsCount; j++) {\r\n    hideCollection[j].style.display = 'block';\r\n  }\r\n});\r\n\r\nshowLess.addEventListener(\"click\", (event) => {\r\n    showMore.style.display = 'block';\r\n    showLess.style.display = 'none';\r\n    for (var j = 0; j <= itemsCount; j++) {\r\n        hideCollection[j].style.display = 'none';\r\n      }\r\n  });\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;
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

/***/ "./src/assets/js/accordion.js":
/*!************************************!*\
  !*** ./src/assets/js/accordion.js ***!
  \************************************/
/***/ (function() {

eval("let accordion = document.getElementsByClassName(\"accordion\");\r\n\r\nfor (let i = 0; i < accordion.length; i++) {\r\n    accordion[i].addEventListener(\"click\", function () {\r\n        this.classList.toggle(\"active\");\r\n        var panel = this.nextElementSibling;\r\n        if (panel.style.maxHeight) {\r\n            panel.style.maxHeight = null;\r\n        } else {\r\n            panel.style.maxHeight = panel.scrollHeight + \"px\";\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/accordion.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("const showMore = document.getElementById(\"show-more\");\r\nconst showLess = document.getElementById(\"show-less\");\r\nconst hideCollection = document.getElementsByClassName(\"tag__item-hide\");\r\n\r\nconst itemsCount = hideCollection.length;\r\n\r\nshowMore.addEventListener(\"click\", (event) => {\r\n  showMore.style.display = 'none';\r\n  showLess.style.display = 'block';\r\n  for (var j = 0; j <= itemsCount; j++) {\r\n    hideCollection[j].style.display = 'block';\r\n  }\r\n});\r\n\r\nshowLess.addEventListener(\"click\", (event) => {\r\n    showMore.style.display = 'block';\r\n    showLess.style.display = 'none';\r\n    for (var j = 0; j <= itemsCount; j++) {\r\n        hideCollection[j].style.display = 'none';\r\n      }\r\n  });\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const filter = document.getElementById(\"filter-menu\");\r\nconst sidebar = document.getElementById(\"sidebar\");\r\nconst menu = document.getElementById(\"burger-menu\");\r\nconst navbar = document.getElementById(\"navbar\");\r\nconst breadcrumb = document.getElementById(\"breadcrumb\")\r\nconst header = document.getElementById(\"header\");\r\nconst mwNavbar = document.getElementById(\"mw-navbar\");\r\nconst mwHeader = document.getElementById(\"mw-header\");\r\nconst body = document.body;\r\n\r\nwindow.addEventListener(\"resize\", AutoScale);\r\n\r\nAutoScale();\r\n\r\nfunction AutoScale() {\r\n  let windowInnerWidth = window.innerWidth;\r\n\r\n  if (windowInnerWidth < 1024) {\r\n    body.classList.add(\"mobile-view\");\r\n    navbar.classList.add(\"hidden\");\r\n    breadcrumb.classList.add(\"hidden\");\r\n    header.classList.add(\"hidden\");\r\n    mwNavbar.classList.remove(\"hidden\");\r\n    mwHeader.classList.remove(\"hidden\");\r\n\r\n    filter.addEventListener(\"click\", (event) => {\r\n      if (body.classList.contains(\"show-sidebar\")) {\r\n        closeSidebar();\r\n      } else {\r\n        showSidebar();\r\n      }\r\n    });\r\n  }\r\n\r\n  if (windowInnerWidth > 1024) {\r\n    body.classList.remove(\"mobile-view\");\r\n    navbar.classList.remove(\"hidden\");\r\n    header.classList.remove(\"hidden\");\r\n    breadcrumb.classList.remove(\"hidden\");\r\n    mwNavbar.classList.add(\"hidden\");\r\n    mwHeader.classList.add(\"hidden\");\r\n  }\r\n}\r\n\r\nfunction showSidebar() {\r\n  let mask = document.createElement(\"div\");\r\n  mask.addEventListener(\"click\", closeSidebar);\r\n\r\n  body.classList.add(\"show-sidebar\");\r\n\r\n  filter.classList.add(\"open\");\r\n  menu.classList.add(\"open\");\r\n\r\n  sidebar.classList.add(\"opened\");\r\n}\r\n\r\nfunction closeSidebar() {\r\n  body.classList.remove(\"show-sidebar\");\r\n\r\n  filter.classList.remove(\"open\");\r\n  menu.classList.remove(\"open\");\r\n\r\n  sidebar.classList.remove(\"opened\");\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\n\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute('data-modal');\r\n        let modal = document.getElementById(modalId);\r\n        let modalContent = modal.querySelector('.modal__content');\r\n        \r\n        modalContent.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        });\r\n        \r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n        \r\n        setTimeout(() => {\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        }, 1);\r\n        \r\n    });\r\n});\r\n\r\n\r\nmodalClose.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n        \r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\n\r\nmodal.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget;\r\n        \r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\n\r\nfunction closeModal(currentModal) {\r\n    let modalContent = currentModal.querySelector('.modal__content');\r\n    modalContent.removeAttribute('style');\r\n    \r\n    setTimeout(() => {\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n    }, 200);\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/price.js":
/*!********************************!*\
  !*** ./src/assets/js/price.js ***!
  \********************************/
/***/ (function() {

eval("\r\n(function () {\r\n  var parent = document.querySelector(\".price-slider\");\r\n  if (!parent) return;\r\n\r\n  var rangeS = parent.querySelectorAll(\"input[type=range]\"),\r\n    numberS = parent.querySelectorAll(\"input[type=number]\");\r\n\r\n  rangeS.forEach(function (el) {\r\n    el.oninput = function () {\r\n      var slide1 = parseFloat(rangeS[0].value),\r\n        slide2 = parseFloat(rangeS[1].value);\r\n\r\n      if (slide1 > slide2) {\r\n        [slide1, slide2] = [slide2, slide1];\r\n      }\r\n\r\n      numberS[0].value = slide1;\r\n      numberS[1].value = slide2;\r\n    };\r\n  });\r\n\r\n  numberS.forEach(function (el) {\r\n    el.oninput = function () {\r\n      var number1 = parseFloat(numberS[0].value),\r\n        number2 = parseFloat(numberS[1].value);\r\n\r\n      if (number1 > number2) {\r\n        var tmp = number1;\r\n        numberS[0].value = number2;\r\n        numberS[1].value = tmp;\r\n      }\r\n\r\n      rangeS[0].value = number1;\r\n      rangeS[1].value = number2;\r\n    };\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/price.js?");

/***/ }),

/***/ "./src/assets/js/stepper.js":
/*!**********************************!*\
  !*** ./src/assets/js/stepper.js ***!
  \**********************************/
/***/ (function() {

eval("var spins = document.getElementsByClassName(\"spin\");\r\nfor (var i = 0, len = spins.length; i < len; i++) {\r\n  var spin = spins[i],\r\n    span = spin.getElementsByTagName(\"span\"),\r\n    input = spin.getElementsByTagName(\"input\")[0];\r\n\r\n  input.onchange = function () {\r\n    input.value = +input.value || 0;\r\n  };\r\n  span[0].onclick = function () {\r\n    input.value = Math.max(0, input.value - 1);\r\n  };\r\n  span[1].onclick = function () {\r\n    input.value -= -1;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/stepper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/accordion.js"]();
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	__webpack_modules__["./src/assets/js/price.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/stepper.js"]();
/******/ 	
/******/ })()
;
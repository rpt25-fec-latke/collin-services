/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecollin_services_game_info_carousel"]("main",{

/***/ "./client/src/components/ImageCarousel/ImageCarousel.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/ImageCarousel/ImageCarousel.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ImageStrip_ImageStrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImageStrip/ImageStrip */ \"./client/src/components/ImageStrip/ImageStrip.jsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./client/src/components/ImageCarousel/styles.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./client/src/context/index.js\");\n\n\n\n\n\nvar ImageCarousel = function ImageCarousel() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.default),\n      images = _useContext.images,\n      mainImage = _useContext.mainImage;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.MainImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.MainImage, {\n    src: mainImage,\n    alt: \"\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.ImageStripWrapper, null, images.map(function (image, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageStrip_ImageStrip__WEBPACK_IMPORTED_MODULE_1__.default, {\n      key: i,\n      image: image\n    });\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCarousel);\n\n//# sourceURL=webpack://collin-services-game-info-carousel/./client/src/components/ImageCarousel/ImageCarousel.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "511f14f00068d659a662"
/******/ 	})();
/******/ 	
/******/ }
);
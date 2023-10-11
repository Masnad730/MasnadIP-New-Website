/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notistack */ \"notistack\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/base.css */ \"./styles/base.css\");\n/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_base_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_components_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/components.css */ \"./styles/components.css\");\n/* harmony import */ var _styles_components_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_components_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_grid_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/grid.css */ \"./styles/grid.css\");\n/* harmony import */ var _styles_grid_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_grid_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/nprogress.css */ \"./styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", (url)=>{\n    console.log(`Loading: ${url}`);\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nfunction MyApp({ Component , pageProps  }) {\n    // Use the layout defined at the page level, if available\n    const getLayout = Component.getLayout || ((page)=>page\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"viewport-fit=cover\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Emal - Data/masnad-law-firm/MasnadIP New Website/masnadip-app/pages/_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Emal - Data/masnad-law-firm/MasnadIP New Website/masnadip-app/pages/_app.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"mobile-web-app-capable\",\n                        content: \"yes\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Emal - Data/masnad-law-firm/MasnadIP New Website/masnadip-app/pages/_app.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"apple-mobile-web-app-capable\",\n                        content: \"yes\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Emal - Data/masnad-law-firm/MasnadIP New Website/masnadip-app/pages/_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Emal - Data/masnad-law-firm/MasnadIP New Website/masnadip-app/pages/_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_7__.SnackbarProvider, {\n                maxSnack: 3,\n                children: getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Volumes/Emal - Data/masnad-law-firm/MasnadIP New Website/masnadip-app/pages/_app.js\",\n                    lineNumber: 35,\n                    columnNumber: 20\n                }, this), pageProps)\n            }, void 0, false, {\n                fileName: \"/Volumes/Emal - Data/masnad-law-firm/MasnadIP New Website/masnadip-app/pages/_app.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ0k7QUFDQztBQUNNO0FBQ007QUFDaUI7QUFDbEI7QUFFakI7QUFDQTtBQUNNO0FBQ047QUFDSztBQUVoQ0MsNERBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQ0ssR0FBRyxHQUFLO0lBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRUYsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5Qkosc0RBQWUsRUFBRTtDQUNsQixDQUFDO0FBQ0ZELDREQUFnQixDQUFDLHFCQUFxQixFQUFFLElBQU1DLHFEQUFjLEVBQUU7QUFBQSxDQUFDO0FBQy9ERCw0REFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFNQyxxREFBYyxFQUFFO0FBQUEsQ0FBQztBQUU1RCxTQUFTUyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2Qyx5REFBeUQ7SUFDekQsTUFBTUMsU0FBUyxHQUFHRixTQUFTLENBQUNFLFNBQVMsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBS0EsSUFBSTtJQUFBLENBQUM7SUFFekQscUJBQ0U7OzBCQUNFLDhEQUFDZixrREFBSTs7a0NBQ0gsOERBQUNnQixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLG9CQUFvQjs7Ozs7NEJBQUc7a0NBQ3JELDhEQUFDRixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7NEJBQUc7a0NBQ3RFLDhEQUFDRixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsd0JBQXdCO3dCQUFDQyxPQUFPLEVBQUMsS0FBSzs7Ozs7NEJBQUc7a0NBQ3BELDhEQUFDRixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsOEJBQThCO3dCQUFDQyxPQUFPLEVBQUMsS0FBSzs7Ozs7NEJBQUc7Ozs7OztvQkFDckQ7MEJBQ1AsOERBQUNmLHVEQUFnQjtnQkFBQ2dCLFFBQVEsRUFBRSxDQUFDOzBCQUMxQkwsU0FBUyxlQUFDLDhEQUFDRixTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJLEVBQUVBLFNBQVMsQ0FBQzs7Ozs7b0JBQ2xDOztvQkFDbEIsQ0FDSjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXNuYWRpcC1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcydcbmltcG9ydCAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MnXG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJ1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9iYXNlLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvY29tcG9uZW50cy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9ncmlkLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL25wcm9ncmVzcy5jc3MnXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBVc2UgdGhlIGxheW91dCBkZWZpbmVkIGF0IHRoZSBwYWdlIGxldmVsLCBpZiBhdmFpbGFibGVcbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCB8fCAoKHBhZ2UpID0+IHBhZ2UpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd2aWV3cG9ydC1maXQ9Y292ZXInIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0nbW9iaWxlLXdlYi1hcHAtY2FwYWJsZScgY29udGVudD0neWVzJyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJyBjb250ZW50PSd5ZXMnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U25hY2tiYXJQcm92aWRlciBtYXhTbmFjaz17M30+XG4gICAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPiwgcGFnZVByb3BzKX1cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJTbmFja2JhclByb3ZpZGVyIiwiZXZlbnRzIiwib24iLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMYXlvdXQiLCJwYWdlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWF4U25hY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/base.css":
/*!*************************!*\
  !*** ./styles/base.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/components.css":
/*!*******************************!*\
  !*** ./styles/components.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/grid.css":
/*!*************************!*\
  !*** ./styles/grid.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
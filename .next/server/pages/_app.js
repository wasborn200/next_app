/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1R0FBNkMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./lib/redux-store.js":
/*!****************************!*\
  !*** ./lib/redux-store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.js\");\n\nvar _jsxFileName = \"/Users/shota/environment/2021/react/react_app/next_app/lib/redux-store.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst isServer = true;\nconst _NRS_ = '__NEXT_REDUX_STORE__';\n\nfunction getOrCreateStore(initialState) {\n  if (isServer) {\n    return (0,_store__WEBPACK_IMPORTED_MODULE_2__.initStore)(initialState);\n  }\n\n  if (!window[_NRS_]) {\n    window[_NRS_] = (0,_store__WEBPACK_IMPORTED_MODULE_2__.initStore)(initialState);\n  }\n\n  return window[_NRS_];\n}\n\nconst functionRedux = App => {\n  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(appContext) {\n      const reduxStore = getOrCreateStore();\n      appContext.ctx.reduxStore = reduxStore;\n      let appProps = {};\n\n      if (typeof App.getInitialProps === 'function') {\n        appProps = await App.getInitialProps(appContext);\n      }\n\n      return _objectSpread(_objectSpread({}, appProps), {}, {\n        initialReduxState: reduxStore.getState()\n      });\n    }\n\n    constructor(props) {\n      super(props);\n      this.reduxStore = getOrCreateStore(props.initialReduxState);\n    }\n\n    render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread(_objectSpread({}, this.props), {}, {\n        reduxStore: this.reduxStore\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 14\n      }, this);\n    }\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (functionRedux);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVkdXgtc3RvcmUuanM/YmU2MyJdLCJuYW1lcyI6WyJpc1NlcnZlciIsIl9OUlNfIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRTdG9yZSIsIndpbmRvdyIsImZ1bmN0aW9uUmVkdXgiLCJBcHAiLCJBcHBXaXRoUmVkdXgiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLE9BQWQ7QUFDQSxNQUFNQyxLQUFLLEdBQUcsc0JBQWQ7O0FBR0EsU0FBU0MsZ0JBQVQsQ0FBMkJDLFlBQTNCLEVBQXlDO0FBQ3ZDLE1BQUlILFFBQUosRUFBYztBQUNaLFdBQU9JLGlEQUFTLENBQUNELFlBQUQsQ0FBaEI7QUFDRDs7QUFHRCxNQUFJLENBQUNFLE1BQU0sQ0FBQ0osS0FBRCxDQUFYLEVBQW9CO0FBQ2xCSSxVQUFNLENBQUNKLEtBQUQsQ0FBTixHQUFnQkcsaURBQVMsQ0FBQ0QsWUFBRCxDQUF6QjtBQUNEOztBQUNELFNBQU9FLE1BQU0sQ0FBQ0osS0FBRCxDQUFiO0FBQ0Q7O0FBR0QsTUFBTUssYUFBYSxHQUFJQyxHQUFELElBQVM7QUFDN0IsU0FBTyxNQUFNQyxZQUFOLFNBQTJCQyw0Q0FBM0IsQ0FBcUM7QUFFMUMsaUJBQWFDLGVBQWIsQ0FBOEJDLFVBQTlCLEVBQTBDO0FBQ3hDLFlBQU1DLFVBQVUsR0FBR1YsZ0JBQWdCLEVBQW5DO0FBQ0FTLGdCQUFVLENBQUNFLEdBQVgsQ0FBZUQsVUFBZixHQUE0QkEsVUFBNUI7QUFDQSxVQUFJRSxRQUFRLEdBQUcsRUFBZjs7QUFDQSxVQUFJLE9BQU9QLEdBQUcsQ0FBQ0csZUFBWCxLQUErQixVQUFuQyxFQUErQztBQUM3Q0ksZ0JBQVEsR0FBRyxNQUFNUCxHQUFHLENBQUNHLGVBQUosQ0FBb0JDLFVBQXBCLENBQWpCO0FBQ0Q7O0FBQ0QsNkNBQ0tHLFFBREw7QUFFRUMseUJBQWlCLEVBQUVILFVBQVUsQ0FBQ0ksUUFBWDtBQUZyQjtBQUlEOztBQUdEQyxlQUFXLENBQUVDLEtBQUYsRUFBUztBQUNsQixZQUFNQSxLQUFOO0FBQ0EsV0FBS04sVUFBTCxHQUFrQlYsZ0JBQWdCLENBQUNnQixLQUFLLENBQUNILGlCQUFQLENBQWxDO0FBQ0Q7O0FBR0RJLFVBQU0sR0FBSTtBQUNSLDBCQUFPLDhEQUFDLEdBQUQsa0NBQVMsS0FBS0QsS0FBZDtBQUNMLGtCQUFVLEVBQUUsS0FBS047QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFFRDs7QUF6QnlDLEdBQTVDO0FBMkJELENBNUJEOztBQThCQSwrREFBZU4sYUFBZiIsImZpbGUiOiIuL2xpYi9yZWR1eC1zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuY29uc3QgX05SU18gPSAnX19ORVhUX1JFRFVYX1NUT1JFX18nXG5cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZSAoaW5pdGlhbFN0YXRlKSB7XG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKVxuICB9XG5cblxuICBpZiAoIXdpbmRvd1tfTlJTX10pIHtcbiAgICB3aW5kb3dbX05SU19dID0gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSlcbiAgfVxuICByZXR1cm4gd2luZG93W19OUlNfXVxufVxuXG5cbmNvbnN0IGZ1bmN0aW9uUmVkdXggPSAoQXBwKSA9PiB7XG4gIHJldHVybiBjbGFzcyBBcHBXaXRoUmVkdXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoYXBwQ29udGV4dCkge1xuICAgICAgY29uc3QgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKVxuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmVcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XG4gICAgICBpZiAodHlwZW9mIEFwcC5nZXRJbml0aWFsUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hcHBQcm9wcyxcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMucmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUocHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIHJlZHV4U3RvcmU9e3RoaXMucmVkdXhTdG9yZX0gLz5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb25SZWR1eFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redux-store.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, pageProps);\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/MDc5NSJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImRlZmF1bHQiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsTUFBTSxHQUFDSCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQ0MsdUJBQUEsR0FBd0JFLE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0NILDJCQUFBLEdBQTRCRSxNQUFNLENBQUNFLG1CQUFuQztBQUF1RDtBQUN4VjtBQUNBO0FBQ0E7O0FBQUcsZUFBZUMsa0JBQWYsQ0FBa0M7QUFBQ0MsV0FBRDtBQUFXQztBQUFYLENBQWxDLEVBQWtEO0FBQUMsUUFBTUMsU0FBUyxHQUFDLE1BQUssQ0FBQyxHQUFFTixNQUFNLENBQUNPLG1CQUFWLEVBQStCSCxTQUEvQixFQUF5Q0MsR0FBekMsQ0FBckI7QUFBbUUsU0FBTTtBQUFDQztBQUFELEdBQU47QUFBbUI7O0FBQUEsTUFBTUUsR0FBTixTQUFrQlQsTUFBTSxDQUFDVSxPQUFQLENBQWVMLFNBQWpDLENBQTBDO0FBQUNNLFFBQU0sR0FBRTtBQUFDLFVBQUs7QUFBQ04sZUFBRDtBQUFXRTtBQUFYLFFBQXNCLEtBQUtLLEtBQWhDO0FBQXNDLFdBQU0sYUFBYVosTUFBTSxDQUFDVSxPQUFQLENBQWVHLGFBQWYsQ0FBNkJSLFNBQTdCLEVBQXVDRSxTQUF2QyxDQUFuQjtBQUFzRTs7QUFBdEg7O0FBQXVIUixlQUFBLEdBQWdCVSxHQUFoQjtBQUFvQkEsR0FBRyxDQUFDSyxtQkFBSixHQUF3QlYsa0JBQXhCO0FBQTJDSyxHQUFHLENBQUNNLGVBQUosR0FBb0JYLGtCQUFwQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/redux-store */ \"./lib/redux-store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/shota/environment/2021/react/react_app/next_app/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass _App extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {\n  render() {\n    const {\n      Component,\n      pageProps,\n      reduxStore\n    } = this.props;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n      store: reduxStore,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_lib_redux_store__WEBPACK_IMPORTED_MODULE_3__.default)(_App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiX0FwcCIsIkFwcCIsInJlbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlZHV4U3RvcmUiLCJwcm9wcyIsIndpdGhSZWR1eFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsaURBQW5CLENBQXVCO0FBQ3JCQyxRQUFNLEdBQUk7QUFDUixVQUFNO0FBQUNDLGVBQUQ7QUFBWUMsZUFBWjtBQUF1QkM7QUFBdkIsUUFBcUMsS0FBS0MsS0FBaEQ7QUFDQSx3QkFDRSw4REFBQyxpREFBRDtBQUFVLFdBQUssRUFBRUQsVUFBakI7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFSb0I7O0FBV3ZCLCtEQUFlRyx5REFBYyxDQUFDUCxJQUFELENBQTdCIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFJlZHV4U3RvcmUgZnJvbSAnLi4vbGliL3JlZHV4LXN0b3JlJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jbGFzcyBfQXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmV9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKF9BcHApXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStore\": function() { return /* binding */ initStore; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n\n // ステート初期値\n\nconst initial = {\n  message: 'START',\n  data: [],\n  number: [],\n  result: 0\n}; // レデューサー\n\nfunction calcReducer(state = initial, action) {\n  switch (action.type) {\n    case 'ENTER':\n      let data2 = state.data.slice();\n      let s = action.value;\n      data2.unshift(s);\n      let num = s.replace(/[^0-9]/g, \"\");\n      let number2 = state.number.slice();\n      number2.unshift(num);\n      let result = state.result * 1 + num * 1;\n      return {\n        message: 'ENTER',\n        data: data2,\n        number: number2,\n        result: result\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        data: [],\n        number: [],\n        result: 0\n      };\n\n    default:\n      return state;\n  }\n} // initStore関数（redux-store.jsで必要）\n\n\nfunction initStore(state = initial) {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(calcReducer, state, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz8wNTcxIl0sIm5hbWVzIjpbImluaXRpYWwiLCJtZXNzYWdlIiwiZGF0YSIsIm51bWJlciIsInJlc3VsdCIsImNhbGNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YTIiLCJzbGljZSIsInMiLCJ2YWx1ZSIsInVuc2hpZnQiLCJudW0iLCJyZXBsYWNlIiwibnVtYmVyMiIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBSUE7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBQyxPQURNO0FBRWRDLE1BQUksRUFBQyxFQUZTO0FBR2RDLFFBQU0sRUFBQyxFQUhPO0FBSWRDLFFBQU0sRUFBQztBQUpPLENBQWhCLEMsQ0FRQTs7QUFDQSxTQUFTQyxXQUFULENBQXNCQyxLQUFLLEdBQUdOLE9BQTlCLEVBQXVDTyxNQUF2QyxFQUErQztBQUM3QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLE9BQUw7QUFDRSxVQUFJQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0osSUFBTixDQUFXUSxLQUFYLEVBQVo7QUFDQSxVQUFJQyxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBZjtBQUNBSCxXQUFLLENBQUNJLE9BQU4sQ0FBY0YsQ0FBZDtBQUNBLFVBQUlHLEdBQUcsR0FBR0gsQ0FBQyxDQUFDSSxPQUFGLENBQVUsU0FBVixFQUFvQixFQUFwQixDQUFWO0FBQ0EsVUFBSUMsT0FBTyxHQUFHVixLQUFLLENBQUNILE1BQU4sQ0FBYU8sS0FBYixFQUFkO0FBQ0FNLGFBQU8sQ0FBQ0gsT0FBUixDQUFnQkMsR0FBaEI7QUFDQSxVQUFJVixNQUFNLEdBQUlFLEtBQUssQ0FBQ0YsTUFBTixHQUFlLENBQWhCLEdBQXNCVSxHQUFHLEdBQUcsQ0FBekM7QUFDQSxhQUFPO0FBQ0xiLGVBQU8sRUFBQyxPQURIO0FBRUxDLFlBQUksRUFBQ08sS0FGQTtBQUdMTixjQUFNLEVBQUNhLE9BSEY7QUFJTFosY0FBTSxFQUFDQTtBQUpGLE9BQVA7O0FBTUYsU0FBSyxPQUFMO0FBQ0UsYUFBTztBQUNMSCxlQUFPLEVBQUMsT0FESDtBQUVMQyxZQUFJLEVBQUMsRUFGQTtBQUdMQyxjQUFNLEVBQUMsRUFIRjtBQUlMQyxjQUFNLEVBQUM7QUFKRixPQUFQOztBQU1GO0FBQ0UsYUFBT0UsS0FBUDtBQXZCSjtBQXlCRCxDLENBRUQ7OztBQUNPLFNBQVNXLFNBQVQsQ0FBbUJYLEtBQUssR0FBR04sT0FBM0IsRUFBb0M7QUFDekMsU0FBT2tCLGtEQUFXLENBQUNiLFdBQUQsRUFBY0MsS0FBZCxFQUNoQmEsc0RBQWUsQ0FBQ0Msb0RBQUQsQ0FEQyxDQUFsQjtBQUVEIiwiZmlsZSI6Ii4vc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cblxuLy8g44K544OG44O844OI5Yid5pyf5YCkXG5jb25zdCBpbml0aWFsID0ge1xuICBtZXNzYWdlOidTVEFSVCcsXG4gIGRhdGE6W10sXG4gIG51bWJlcjpbXSxcbiAgcmVzdWx0OjBcbn1cblxuXG4vLyDjg6zjg4fjg6Xjg7zjgrXjg7xcbmZ1bmN0aW9uIGNhbGNSZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnRU5URVInOlxuICAgICAgbGV0IGRhdGEyID0gc3RhdGUuZGF0YS5zbGljZSgpO1xuICAgICAgbGV0IHMgPSBhY3Rpb24udmFsdWU7XG4gICAgICBkYXRhMi51bnNoaWZ0KHMpO1xuICAgICAgbGV0IG51bSA9IHMucmVwbGFjZSgvW14wLTldL2csXCJcIik7XG4gICAgICBsZXQgbnVtYmVyMiA9IHN0YXRlLm51bWJlci5zbGljZSgpO1xuICAgICAgbnVtYmVyMi51bnNoaWZ0KG51bSk7XG4gICAgICBsZXQgcmVzdWx0ID0gKHN0YXRlLnJlc3VsdCAqIDEpICsgKG51bSAqIDEpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTonRU5URVInLFxuICAgICAgICBkYXRhOmRhdGEyLFxuICAgICAgICBudW1iZXI6bnVtYmVyMixcbiAgICAgICAgcmVzdWx0OnJlc3VsdFxuICAgICAgfTtcbiAgICBjYXNlICdSRVNFVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOidSRVNFVCcsXG4gICAgICAgIGRhdGE6W10sXG4gICAgICAgIG51bWJlcjpbXSxcbiAgICAgICAgcmVzdWx0OjBcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG4vLyBpbml0U3RvcmXplqLmlbDvvIhyZWR1eC1zdG9yZS5qc+OBp+W/heimge+8iVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZShzdGF0ZSA9IGluaXRpYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNhbGNSZWR1Y2VyLCBzdGF0ZSxcbiAgICBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
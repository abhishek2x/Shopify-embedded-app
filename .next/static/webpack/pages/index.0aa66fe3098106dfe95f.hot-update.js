webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, {\n        oneHalf: true,\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h1\", {\n          children: \"Hello\"\n        })\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, {\n        oneHalf: true,\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          customers: selected,\n          setCustomers: setSelected\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_ReviewForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          customers: selected,\n          setCustomers: setSelected\n        })]\n      })]\n    })\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJDdXN0b21lckxpc3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNmQyxRQURlO0FBQUEsTUFDTEMsV0FESzs7QUFHdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNFLDhEQUFDLDJEQUFEO0FBQUEsMkJBQ0UsK0RBQUMsdURBQUQ7QUFBQSw4QkFDRSw4REFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0IsZUFBTyxNQUF2QjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQURGLFFBREYsZUFxQkUsK0RBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLGVBQU8sTUFBdkI7QUFBQSxnQ0FDRSw4REFBQyw2Q0FBRDtBQUFNLG1CQUFTLEVBQUVBLFFBQWpCO0FBQTJCLHNCQUFZLEVBQUVDO0FBQXpDLFVBREYsZUFFRSw4REFBQyxtREFBRDtBQUFZLG1CQUFTLEVBQUVELFFBQXZCO0FBQWlDLHNCQUFZLEVBQUVDO0FBQS9DLFVBRkY7QUFBQSxRQXJCRjtBQUFBO0FBREYsSUFERjtBQThCRDs7R0FwQ1FILFk7O0tBQUFBLFk7QUFxQ01BLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBFbXB0eVN0YXRlLCBMYXlvdXQsIE9wdGlvbkxpc3QsIFNjcm9sbGFibGUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nO1xuaW1wb3J0IFJldmlld0Zvcm0gZnJvbSAnLi9SZXZpZXdGb3JtJztcblxuZnVuY3Rpb24gQ3VzdG9tZXJMaXN0KCkge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxuICB9LCBbc2VsZWN0ZWRdKVxuICByZXR1cm4gKFxuICAgIDxFbXB0eVN0YXRlPlxuICAgICAgPExheW91dCA+XG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbiBvbmVIYWxmPlxuICAgICAgICAgIDxoMT5IZWxsbzwvaDE+XG4gICAgICAgICAgey8qIDxDYXJkPlxuICAgICAgICAgICAgPFNjcm9sbGFibGUgc2hhZG93IHN0eWxlPXt7IGhlaWdodDogJzMwMHB4JyB9fT5cbiAgICAgICAgICAgICAgPE9wdGlvbkxpc3RcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkN1c3RvbWVyc1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQkJOIEZyYW5rJywgdmFsdWU6ICdhYmhpc2hla3NyaXZhc3RhdmFiYm5AZ21haWwuY29tJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1NlcHQgRmlmdGgnLCB2YWx1ZTogJ2FiaGlzaGVrc3JpdmFzdGF2YXNlcHQ1QGdtYWlsLmNvbScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdMb25kZXIgU2VwdCcsIHZhbHVlOiAnYWJoaXNoZWtzcml2YXN0YXZhMjlzZXB0QGdtYWlsLmNvbScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdWIHRlY2hub2xvZ3knLCB2YWx1ZTogJ2FiaGlzaGVrLnNyaXZhc3RhdmEyMDE5QHZpdGJob3BhbC5hYy5pbicgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTdXJ2ZXkgUGxheWVyJywgdmFsdWU6ICdhYmhpc2hlay5zcml2YXN0YXZhQHN1cnZleXNwYXJyb3cuY29tJyB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TY3JvbGxhYmxlPlxuICAgICAgICAgIDwvQ2FyZD4gKi99XG4gICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbiBvbmVIYWxmPlxuICAgICAgICAgIDxGb3JtIGN1c3RvbWVycz17c2VsZWN0ZWR9IHNldEN1c3RvbWVycz17c2V0U2VsZWN0ZWR9IC8+XG4gICAgICAgICAgPFJldmlld0Zvcm0gY3VzdG9tZXJzPXtzZWxlY3RlZH0gc2V0Q3VzdG9tZXJzPXtzZXRTZWxlY3RlZH0gLz5cbiAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRW1wdHlTdGF0ZT5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyTGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
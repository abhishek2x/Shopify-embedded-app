webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, {\n      oneHalf: true,\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Scrollable\"], {\n            shadow: true,\n            style: {\n              height: '300px'\n            },\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"OptionList\"], {\n              title: \"Customers\",\n              onChange: setSelected,\n              allowMultiple: true,\n              options: [{\n                label: 'BBN Frank',\n                value: 'abhisheksrivastavabbn@gmail.com'\n              }, {\n                label: 'Sept Fifth',\n                value: 'abhisheksrivastavasept5@gmail.com'\n              }, {\n                label: 'Londer Sept',\n                value: 'abhisheksrivastava29sept@gmail.com'\n              }, {\n                label: 'V technology',\n                value: 'abhishek.srivastava2019@vitbhopal.ac.in'\n              }, {\n                label: 'Survey Player',\n                value: 'abhishek.srivastava@surveysparrow.com'\n              }],\n              selected: selected\n            })\n          })\n        })\n      })\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, {\n      oneHalf: true,\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        customers: selected,\n        setCustomers: setSelected\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_ReviewForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        customers: selected,\n        setCustomers: setSelected\n      })]\n    })]\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJDdXN0b21lckxpc3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0IiwibGFiZWwiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDZkMsUUFEZTtBQUFBLE1BQ0xDLFdBREs7O0FBR3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsUUFBRCxDQUZNLENBQVQ7QUFHQSxzQkFDRSwrREFBQyx1REFBRDtBQUFBLDRCQUNFLDhEQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixhQUFPLE1BQXZCO0FBQUEsNkJBQ0UsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFBLGlDQUNFLDhEQUFDLDJEQUFEO0FBQVksa0JBQU0sTUFBbEI7QUFBbUIsaUJBQUssRUFBRTtBQUFFSyxvQkFBTSxFQUFFO0FBQVYsYUFBMUI7QUFBQSxtQ0FDRSw4REFBQywyREFBRDtBQUNFLG1CQUFLLEVBQUMsV0FEUjtBQUVFLHNCQUFRLEVBQUVKLFdBRlo7QUFHRSwyQkFBYSxNQUhmO0FBSUUscUJBQU8sRUFBRSxDQUNQO0FBQUVLLHFCQUFLLEVBQUUsV0FBVDtBQUFzQkMscUJBQUssRUFBRTtBQUE3QixlQURPLEVBRVA7QUFBRUQscUJBQUssRUFBRSxZQUFUO0FBQXVCQyxxQkFBSyxFQUFFO0FBQTlCLGVBRk8sRUFHUDtBQUFFRCxxQkFBSyxFQUFFLGFBQVQ7QUFBd0JDLHFCQUFLLEVBQUU7QUFBL0IsZUFITyxFQUlQO0FBQUVELHFCQUFLLEVBQUUsY0FBVDtBQUF5QkMscUJBQUssRUFBRTtBQUFoQyxlQUpPLEVBS1A7QUFBRUQscUJBQUssRUFBRSxlQUFUO0FBQTBCQyxxQkFBSyxFQUFFO0FBQWpDLGVBTE8sQ0FKWDtBQVdFLHNCQUFRLEVBQUVQO0FBWFo7QUFERjtBQURGO0FBREY7QUFERixNQURGLGVBc0JFLCtEQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixhQUFPLE1BQXZCO0FBQUEsOEJBQ0UsOERBQUMsNkNBQUQ7QUFBTSxpQkFBUyxFQUFFQSxRQUFqQjtBQUEyQixvQkFBWSxFQUFFQztBQUF6QyxRQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBWSxpQkFBUyxFQUFFRCxRQUF2QjtBQUFpQyxvQkFBWSxFQUFFQztBQUEvQyxRQUZGO0FBQUEsTUF0QkY7QUFBQSxJQURGO0FBNkJEOztHQW5DUUgsWTs7S0FBQUEsWTtBQW9DTUEsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIEVtcHR5U3RhdGUsIExheW91dCwgT3B0aW9uTGlzdCwgU2Nyb2xsYWJsZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSc7XG5pbXBvcnQgUmV2aWV3Rm9ybSBmcm9tICcuL1Jldmlld0Zvcm0nO1xuXG5mdW5jdGlvbiBDdXN0b21lckxpc3QoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWQpXG4gIH0sIFtzZWxlY3RlZF0pXG4gIHJldHVybiAoXG4gICAgPExheW91dCA+XG4gICAgICA8TGF5b3V0LlNlY3Rpb24gb25lSGFsZj5cbiAgICAgICAgPEVtcHR5U3RhdGU+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8U2Nyb2xsYWJsZSBzaGFkb3cgc3R5bGU9e3sgaGVpZ2h0OiAnMzAwcHgnIH19PlxuICAgICAgICAgICAgICA8T3B0aW9uTGlzdFxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ3VzdG9tZXJzXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdCQk4gRnJhbmsnLCB2YWx1ZTogJ2FiaGlzaGVrc3JpdmFzdGF2YWJibkBnbWFpbC5jb20nIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU2VwdCBGaWZ0aCcsIHZhbHVlOiAnYWJoaXNoZWtzcml2YXN0YXZhc2VwdDVAZ21haWwuY29tJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0xvbmRlciBTZXB0JywgdmFsdWU6ICdhYmhpc2hla3NyaXZhc3RhdmEyOXNlcHRAZ21haWwuY29tJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1YgdGVjaG5vbG9neScsIHZhbHVlOiAnYWJoaXNoZWsuc3JpdmFzdGF2YTIwMTlAdml0YmhvcGFsLmFjLmluJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1N1cnZleSBQbGF5ZXInLCB2YWx1ZTogJ2FiaGlzaGVrLnNyaXZhc3RhdmFAc3VydmV5c3BhcnJvdy5jb20nIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Njcm9sbGFibGU+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgPExheW91dC5TZWN0aW9uIG9uZUhhbGY+XG4gICAgICAgIDxGb3JtIGN1c3RvbWVycz17c2VsZWN0ZWR9IHNldEN1c3RvbWVycz17c2V0U2VsZWN0ZWR9IC8+XG4gICAgICAgIDxSZXZpZXdGb3JtIGN1c3RvbWVycz17c2VsZWN0ZWR9IHNldEN1c3RvbWVycz17c2V0U2VsZWN0ZWR9IC8+XG4gICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
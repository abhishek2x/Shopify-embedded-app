webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  {\\n    customers(first: 10) {\\n      edges {\\n        node {\\n          id\\n          displayName\\n          email\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n/*\n\n* Getting List of existing Customers -> Shopify API - here (not done)\n\n*/\n\nvar Get_10_Customers = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Query\"], {\n    query: Get_10_Customers,\n    children: function children(_ref) {\n      var loading = _ref.loading,\n          error = _ref.error,\n          data = _ref.data;\n      if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: \"Loading...\"\n      });\n      if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: error.message\n      });\n      console.log(data);\n      return data.customers.map(function (_ref2) {\n        var id = _ref2.id,\n            email = _ref2.email,\n            displayName = _ref2.displayName;\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n            children: \"\".concat(displayName, \" by \").concat(email)\n          })\n        }, id);\n      });\n    }\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJHZXRfMTBfQ3VzdG9tZXJzIiwiZ3FsIiwiQ3VzdG9tZXJMaXN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiY3VzdG9tZXJzIiwibWFwIiwiaWQiLCJlbWFpbCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLHdEQUFILG1CQUF0Qjs7QUFjQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ2ZDLFFBRGU7QUFBQSxNQUNMQyxXQURLOztBQUd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLFFBQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTyxTQUFLLEVBQUVKLGdCQUFkO0FBQUEsY0FDRyx3QkFBOEI7QUFBQSxVQUEzQlMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsVUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLFVBQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QixVQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBLFFBQVA7QUFDYixVQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxrQkFBS0EsS0FBSyxDQUFDRTtBQUFYLFFBQVA7QUFDWEwsYUFBTyxDQUFDQyxHQUFSLENBQVlHLElBQVo7QUFFQSxhQUFPQSxJQUFJLENBQUNFLFNBQUwsQ0FBZUMsR0FBZixDQUFtQjtBQUFBLFlBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFlBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFlBQWNDLFdBQWQsU0FBY0EsV0FBZDtBQUFBLDRCQUN4QjtBQUFBLGlDQUNFO0FBQUEsZ0NBQU9BLFdBQVAsaUJBQXlCRCxLQUF6QjtBQUFBO0FBREYsV0FBVUQsRUFBVixDQUR3QjtBQUFBLE9BQW5CLENBQVA7QUFLRDtBQVhILElBREY7QUFlRDs7R0F2QlFiLFk7O0tBQUFBLFk7QUF3Qk1BLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBFbXB0eVN0YXRlLCBMYXlvdXQsIE9wdGlvbkxpc3QsIFNjcm9sbGFibGUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCBSZXZpZXdGb3JtIGZyb20gJy4vUmV2aWV3Rm9ybSc7XG5cbi8qXG5cbiogR2V0dGluZyBMaXN0IG9mIGV4aXN0aW5nIEN1c3RvbWVycyAtPiBTaG9waWZ5IEFQSSAtIGhlcmUgKG5vdCBkb25lKVxuXG4qL1xuXG5jb25zdCBHZXRfMTBfQ3VzdG9tZXJzID0gZ3FsYFxuICB7XG4gICAgY3VzdG9tZXJzKGZpcnN0OiAxMCkge1xuICAgICAgZWRnZXMge1xuICAgICAgICBub2RlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgZW1haWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5mdW5jdGlvbiBDdXN0b21lckxpc3QoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWQpXG4gIH0sIFtzZWxlY3RlZF0pXG5cblxuICByZXR1cm4gKFxuICAgIDxRdWVyeSBxdWVyeT17R2V0XzEwX0N1c3RvbWVyc30+XG4gICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8cD57IGVycm9yLm1lc3NhZ2UgfTwvcD47XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YS5jdXN0b21lcnMubWFwKCh7IGlkLCBlbWFpbCwgZGlzcGxheU5hbWUgfSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgICA8cD57YCR7ZGlzcGxheU5hbWV9IGJ5ICR7ZW1haWx9YH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpO1xuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
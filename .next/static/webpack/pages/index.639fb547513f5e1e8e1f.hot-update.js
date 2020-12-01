webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CreateOrder.js":
/*!***********************************!*\
  !*** ./components/CreateOrder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Shopify API\n\nfunction Form() {\n  var url = 'https://embedded-game.myshopify.com/admin/api/2020-10/customers.json';\n  var requestOptions = {\n    method: 'GET',\n    mode: 'no-cors',\n    withCredentials: true,\n    headers: {\n      'Content-Type': 'application/json',\n      'X-Shopify-Access-Token': 'ae3cb5e86bd8d57567291d56426f12a8',\n      'X-Requested-With': 'XMLHttpRequest',\n      'Access-Control-Allow-Origin': '*'\n    } // body: JSON.stringify({\n    //   \"draft_order\": {\n    //     \"id\": 719429238971,\n    //     \"note\": \"Customer contacted us about a custom engraving on this iPod\"\n    //   }\n    // })\n\n  };\n\n  var createOrder = function createOrder(e) {\n    e.preventDefault();\n    console.log(\"Order Create Button clicked\");\n    fetch(url, requestOptions).then(function (res) {\n      console.log(res);\n      console.log(\"There you go...!\");\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Create Order\",\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"form\", {\n      onSubmit: createOrder,\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        submit: true,\n        primary: true,\n        children: \"Create a new Draft Order\"\n      })\n    })\n  });\n}\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVPcmRlci5qcz8xMDgzIl0sIm5hbWVzIjpbIkZvcm0iLCJ1cmwiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsIm1vZGUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiY3JlYXRlT3JkZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxTQUFTQSxJQUFULEdBQWdCO0FBRWQsTUFBTUMsR0FBRyxHQUFHLHNFQUFaO0FBRUEsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxVQUFNLEVBQUUsS0FEYTtBQUVyQkMsUUFBSSxFQUFFLFNBRmU7QUFHckJDLG1CQUFlLEVBQUUsSUFISTtBQUlyQkMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCLGtCQURUO0FBRVAsZ0NBQTBCLGtDQUZuQjtBQUdQLDBCQUFvQixnQkFIYjtBQUlQLHFDQUErQjtBQUp4QixLQUpZLENBVXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmcUIsR0FBdkI7O0FBa0JBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0FDLFNBQUssQ0FBQ1gsR0FBRCxFQUFNQyxjQUFOLENBQUwsQ0FDR1csSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNiSixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWjtBQUNBSixhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNELEtBSkgsV0FLUyxVQUFDSSxHQUFELEVBQVM7QUFDZEwsYUFBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7QUFDRCxLQVBIO0FBUUQsR0FYRDs7QUFhQSxzQkFDRSw4REFBQywyREFBRDtBQUNFLFdBQU8sRUFBQyxjQURWO0FBQUEsMkJBR0U7QUFBTSxjQUFRLEVBQUVSLFdBQWhCO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFNLE1BQWQ7QUFBZSxlQUFPLE1BQXRCO0FBQUE7QUFBQTtBQURGO0FBSEYsSUFERjtBQVNEOztLQTVDUVAsSTtBQThDTUEsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZU9yZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBFbXB0eVN0YXRlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy8gU2hvcGlmeSBBUElcbmZ1bmN0aW9uIEZvcm0oKSB7XG5cbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZW1iZWRkZWQtZ2FtZS5teXNob3BpZnkuY29tL2FkbWluL2FwaS8yMDIwLTEwL2N1c3RvbWVycy5qc29uJ1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgbW9kZTogJ25vLWNvcnMnLFxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ1gtU2hvcGlmeS1BY2Nlc3MtVG9rZW4nOiAnYWUzY2I1ZTg2YmQ4ZDU3NTY3MjkxZDU2NDI2ZjEyYTgnLFxuICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgIH0sXG4gICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgXCJkcmFmdF9vcmRlclwiOiB7XG4gICAgLy8gICAgIFwiaWRcIjogNzE5NDI5MjM4OTcxLFxuICAgIC8vICAgICBcIm5vdGVcIjogXCJDdXN0b21lciBjb250YWN0ZWQgdXMgYWJvdXQgYSBjdXN0b20gZW5ncmF2aW5nIG9uIHRoaXMgaVBvZFwiXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgfTtcblxuICBjb25zdCBjcmVhdGVPcmRlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiT3JkZXIgQ3JlYXRlIEJ1dHRvbiBjbGlja2VkXCIpXG4gICAgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIHlvdSBnby4uLiFcIilcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlTdGF0ZVxuICAgICAgaGVhZGluZz1cIkNyZWF0ZSBPcmRlclwiXG4gICAgPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2NyZWF0ZU9yZGVyfT5cbiAgICAgICAgPEJ1dHRvbiBzdWJtaXQgcHJpbWFyeT5DcmVhdGUgYSBuZXcgRHJhZnQgT3JkZXI8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0VtcHR5U3RhdGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CreateOrder.js\n");

/***/ })

})
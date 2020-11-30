webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CreateOrder.js":
/*!***********************************!*\
  !*** ./components/CreateOrder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Form() {\n  var url = 'https://embedded-game.myshopify.com/admin/api/2020-10/draft_orders.json';\n  var bearer = 'Bearer ' + 'pr0XQuLJrxoeXIiJ6fhDnp_pJ3QgHQ2-8jY2xTrjbfLx1Iv-iFn6KxNtGi01SRDDFWJUmDpNS8SnawQl97OGIMkA';\n  var requestOptions = {\n    method: 'POST',\n    withCredentials: true,\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': bearer,\n      \"crossDomain\": true\n    },\n    body: JSON.stringify({\n      \"draft_order\": {\n        \"line_items\": [{\n          \"title\": \"Custom Tee\",\n          \"price\": \"20.00\",\n          \"quantity\": 2\n        }],\n        \"applied_discount\": {\n          \"description\": \"Custom discount\",\n          \"value_type\": \"fixed_amount\",\n          \"value\": \"10.0\",\n          \"amount\": \"10.00\",\n          \"title\": \"Custom\"\n        },\n        \"customer\": {\n          \"id\": 4434849562811 // 207119551\n\n        },\n        \"use_customer_default_address\": true\n      }\n    })\n  };\n\n  var createOrder = function createOrder(e) {\n    e.preventDefault();\n    console.log(\"Order Create Button clicked\");\n    fetch(url, requestOptions).then(console.log(\"Order Created!!\"))[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Create Order\",\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"form\", {\n      onSubmit: createOrder,\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n        type: \"submit\",\n        children: \"Create a new Draft Order\"\n      })\n    })\n  });\n}\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVPcmRlci5qcz8xMDgzIl0sIm5hbWVzIjpbIkZvcm0iLCJ1cmwiLCJiZWFyZXIiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZU9yZGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUVkLE1BQU1DLEdBQUcsR0FBRyx5RUFBWjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxZQUFZLDBGQUEzQjtBQUVBLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsVUFBTSxFQUFFLE1BRGE7QUFFckJDLG1CQUFlLEVBQUUsSUFGSTtBQUdyQkMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCLGtCQURUO0FBRVAsdUJBQWlCSixNQUZWO0FBR1AscUJBQWU7QUFIUixLQUhZO0FBUXJCSyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CLHFCQUFlO0FBQ2Isc0JBQWMsQ0FDWjtBQUNFLG1CQUFTLFlBRFg7QUFFRSxtQkFBUyxPQUZYO0FBR0Usc0JBQVk7QUFIZCxTQURZLENBREQ7QUFRYiw0QkFBb0I7QUFDbEIseUJBQWUsaUJBREc7QUFFbEIsd0JBQWMsY0FGSTtBQUdsQixtQkFBUyxNQUhTO0FBSWxCLG9CQUFVLE9BSlE7QUFLbEIsbUJBQVM7QUFMUyxTQVJQO0FBZWIsb0JBQVk7QUFDVixnQkFBTSxhQURJLENBRVY7O0FBRlUsU0FmQztBQW1CYix3Q0FBZ0M7QUFuQm5CO0FBREksS0FBZjtBQVJlLEdBQXZCOztBQWlDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBQyxTQUFLLENBQUNkLEdBQUQsRUFBTUUsY0FBTixDQUFMLENBQ0dhLElBREgsQ0FFSUgsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosQ0FGSixXQUlTLFVBQUNHLEdBQUQsRUFBUztBQUNkSixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWjtBQUNELEtBTkg7QUFPRCxHQVZEOztBQVlBLHNCQUNFLDhEQUFDLDJEQUFEO0FBQ0UsV0FBTyxFQUFDLGNBRFY7QUFBQSwyQkFHRTtBQUFNLGNBQVEsRUFBRVAsV0FBaEI7QUFBQSw2QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQURGO0FBSEYsSUFERjtBQVVEOztLQTVEUVYsSTtBQThETUEsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZU9yZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBFbXB0eVN0YXRlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG5cbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZW1iZWRkZWQtZ2FtZS5teXNob3BpZnkuY29tL2FkbWluL2FwaS8yMDIwLTEwL2RyYWZ0X29yZGVycy5qc29uJ1xuICBjb25zdCBiZWFyZXIgPSAnQmVhcmVyICcgKyAncHIwWFF1TEpyeG9lWElpSjZmaERucF9wSjNRZ0hRMi04alkyeFRyamJmTHgxSXYtaUZuNkt4TnRHaTAxU1JEREZXSlVtRHBOUzhTbmF3UWw5N09HSU1rQSc7XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlcixcbiAgICAgIFwiY3Jvc3NEb21haW5cIjogdHJ1ZSxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwiZHJhZnRfb3JkZXJcIjoge1xuICAgICAgICBcImxpbmVfaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDdXN0b20gVGVlXCIsXG4gICAgICAgICAgICBcInByaWNlXCI6IFwiMjAuMDBcIixcbiAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJhcHBsaWVkX2Rpc2NvdW50XCI6IHtcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VzdG9tIGRpc2NvdW50XCIsXG4gICAgICAgICAgXCJ2YWx1ZV90eXBlXCI6IFwiZml4ZWRfYW1vdW50XCIsXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjEwLjBcIixcbiAgICAgICAgICBcImFtb3VudFwiOiBcIjEwLjAwXCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkN1c3RvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3VzdG9tZXJcIjoge1xuICAgICAgICAgIFwiaWRcIjogNDQzNDg0OTU2MjgxMVxuICAgICAgICAgIC8vIDIwNzExOTU1MVxuICAgICAgICB9LFxuICAgICAgICBcInVzZV9jdXN0b21lcl9kZWZhdWx0X2FkZHJlc3NcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgY29uc3QgY3JlYXRlT3JkZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIk9yZGVyIENyZWF0ZSBCdXR0b24gY2xpY2tlZFwiKVxuICAgIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAudGhlbihcbiAgICAgICAgY29uc29sZS5sb2coXCJPcmRlciBDcmVhdGVkISFcIilcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbXB0eVN0YXRlXG4gICAgICBoZWFkaW5nPVwiQ3JlYXRlIE9yZGVyXCJcbiAgICA+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17Y3JlYXRlT3JkZXJ9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgYSBuZXcgRHJhZnQgT3JkZXI8L2J1dHRvbj5cbiAgICAgICAgey8qIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPjwvQnV0dG9uPiAqL31cbiAgICAgIDwvZm9ybT5cbiAgICA8L0VtcHR5U3RhdGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CreateOrder.js\n");

/***/ })

})
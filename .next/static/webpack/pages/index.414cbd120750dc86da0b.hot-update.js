webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Form() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState2[0],\n      setemail = _useState2[1];\n\n  var url = 'https://api.surveysparrow.com/v1/shares/email/2233677';\n  var bearer = 'Bearer ' + 'prUJqEHlpzWrjBGP477dWklUz2sP6YlxMb4x0tY4J1rgW59TIJei20mhE2bpSvmnt56tG9N5xRMBmwMYDSkVQ4NQ';\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var requestOptions = {\n      method: 'PUT',\n      withCredentials: true,\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': bearer\n      },\n      body: JSON.stringify({\n        \"contacts\": [\"abhisheksrivastavabbn@gmail.com\"]\n      })\n    };\n    fetch(url, requestOptions).then(console.log(\"sent\"));\n  }, [email]);\n\n  var sendSurveys = function sendSurveys(e) {\n    e.preventDefault();\n    setemail(input);\n    console.log(email);\n    setInput(\"\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Share Survey through emails\",\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"form\", {\n      onSubmit: sendSurveys,\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"label\", {\n        \"for\": \"name\",\n        children: \"Name\"\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\", {\n        placeholder: \"Email id\",\n        type: \"input\",\n        name: \"input\",\n        id: \"input\",\n        value: input,\n        onChange: function onChange(e) {\n          return setInput(e.target.value);\n        }\n      })]\n    })\n  });\n}\n\n_s(Form, \"T2kYT5/+zkArN1OI8OIpSwQns+k=\");\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzPzQ3MjkiXSwibmFtZXMiOlsiRm9ybSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImVtYWlsIiwic2V0ZW1haWwiLCJ1cmwiLCJiZWFyZXIiLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU3VydmV5cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ0xDLEtBREs7QUFBQSxNQUNFQyxRQURGOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVMRyxLQUZLO0FBQUEsTUFFRUMsUUFGRjs7QUFJWixNQUFNQyxHQUFHLEdBQUcsdURBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUcsWUFBWSwwRkFBM0I7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxZQUFNLEVBQUUsS0FEVztBQUVuQkMscUJBQWUsRUFBRSxJQUZFO0FBR25CQyxhQUFPLEVBQUU7QUFDTCx3QkFBZ0Isa0JBRFg7QUFFTCx5QkFBaUJMO0FBRlosT0FIVTtBQU9uQk0sVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQixvQkFBWSxDQUFDLGlDQUFEO0FBREssT0FBZjtBQVBhLEtBQXZCO0FBV0FDLFNBQUssQ0FBQ1YsR0FBRCxFQUFNRyxjQUFOLENBQUwsQ0FDS1EsSUFETCxDQUVRQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLENBRlI7QUFJSCxHQWhCUSxFQWdCTixDQUFDZixLQUFELENBaEJNLENBQVQ7O0FBbUJBLE1BQU1nQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBakIsWUFBUSxDQUFDSCxLQUFELENBQVI7QUFDQWdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaO0FBQ0FELFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDSCxHQUxEOztBQU9BLHNCQUNJLDhEQUFDLDJEQUFEO0FBQ0ksV0FBTyxFQUFDLDZCQURaO0FBQUEsMkJBSUk7QUFBTSxjQUFRLEVBQUVpQixXQUFoQjtBQUFBLDhCQUNJO0FBQU8sZUFBSSxNQUFYO0FBQUE7QUFBQSxRQURKLGVBRUk7QUFDSSxtQkFBVyxFQUFDLFVBRGhCO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxZQUFJLEVBQUMsT0FIVDtBQUlJLFVBQUUsRUFBQyxPQUpQO0FBS0ksYUFBSyxFQUFFbEIsS0FMWDtBQU1JLGdCQUFRLEVBQUUsa0JBQUNtQixDQUFEO0FBQUEsaUJBQU9sQixRQUFRLENBQUNrQixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFOZCxRQUZKO0FBQUE7QUFKSixJQURKO0FBbUJIOztHQXBEUXhCLEk7O0tBQUFBLEk7QUFzRE1BLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wdHlTdGF0ZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBGb3JtKCkge1xuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuc3VydmV5c3BhcnJvdy5jb20vdjEvc2hhcmVzL2VtYWlsLzIyMzM2NzcnXG4gICAgY29uc3QgYmVhcmVyID0gJ0JlYXJlciAnICsgJ3ByVUpxRUhscHpXcmpCR1A0NzdkV2tsVXoyc1A2WWx4TWI0eDB0WTRKMXJnVzU5VElKZWkyMG1oRTJicFN2bW50NTZ0RzlONXhSTUJtd01ZRFNrVlE0TlEnO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBiZWFyZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFwiY29udGFjdHNcIjogW1wiYWJoaXNoZWtzcml2YXN0YXZhYmJuQGdtYWlsLmNvbVwiXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VudFwiKVxuICAgICAgICAgICAgKVxuICAgIH0sIFtlbWFpbF0pO1xuXG5cbiAgICBjb25zdCBzZW5kU3VydmV5cyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0ZW1haWwoaW5wdXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbClcbiAgICAgICAgc2V0SW5wdXQoXCJcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgICAgIGhlYWRpbmc9XCJTaGFyZSBTdXJ2ZXkgdGhyb3VnaCBlbWFpbHNcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7LyogPHA+RW50ZXIgdGhlIGVtYWlsIGFkZHJlc3Mgb2YgY3VzdG9tZXJzLjwvcD4gKi99XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZFN1cnZleXN9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgaWRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ })

})
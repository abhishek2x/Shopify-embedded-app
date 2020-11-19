webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ReviewForm.js":
/*!**********************************!*\
  !*** ./components/ReviewForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ReviewForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState2[0],\n      setemail = _useState2[1];\n\n  var url = 'https://api.surveysparrow.com/v1/surveys/88713/sections';\n  var bearer = 'Bearer ' + 'prUJqEHlpzWrjBGP477dWklUz2sP6YlxMb4x0tY4J1rgW59TIJei20mhE2bpSvmnt56tG9N5xRMBmwMYDSkVQ4NQ';\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var requestOptions = {\n      method: 'PUT',\n      withCredentials: true,\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': bearer\n      },\n      body: JSON.stringify({\n        \"name\": \"Welcome to Review Form\",\n        \"description\": \"This is section will be based on the leadership quality\",\n        \"properties\": {\n          \"label\": \"start a this section\"\n        },\n        \"questions\": [{\n          \"text\": \"Please enter your feedback\",\n          \"type\": \"TextInput\",\n          \"properties\": {\n            \"data\": {\n              \"type\": \"MULTI_LINE\"\n            }\n          }\n        }, {\n          \"text\": \"Please give your rating\",\n          \"type\": \"OpinionScale\",\n          \"properties\": {\n            \"data\": {\n              \"min\": \"min label\",\n              \"max\": \"max label\",\n              \"start\": 1,\n              \"step\": 7\n            }\n          }\n        }]\n      })\n    };\n    fetch(url, requestOptions).then(console.log(\"sent\"));\n  }, [email]);\n\n  var sendSurveys = function sendSurveys(e) {\n    e.preventDefault();\n\n    if (input) {\n      setemail(input);\n      console.log(email);\n      setInput(\"\");\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Share Review Survey through emails\",\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"form\", {\n      onSubmit: sendSurveys,\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"label\", {\n        \"for\": \"name\",\n        children: \"Name\"\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\", {\n        placeholder: \"Email id\",\n        type: \"input\",\n        name: \"input\",\n        id: \"input\",\n        value: input,\n        onChange: function onChange(e) {\n          return setInput(e.target.value);\n        }\n      })]\n    })\n  });\n}\n\n_s(ReviewForm, \"T2kYT5/+zkArN1OI8OIpSwQns+k=\");\n\n_c = ReviewForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ReviewForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdGb3JtLmpzPzdjMTAiXSwibmFtZXMiOlsiUmV2aWV3Rm9ybSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImVtYWlsIiwic2V0ZW1haWwiLCJ1cmwiLCJiZWFyZXIiLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU3VydmV5cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVYRyxLQUZXO0FBQUEsTUFFSkMsUUFGSTs7QUFJbEIsTUFBTUMsR0FBRyxHQUFHLHlEQUFaO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFlBQVksMEZBQTNCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLGNBQWMsR0FBRztBQUNuQkMsWUFBTSxFQUFFLEtBRFc7QUFFbkJDLHFCQUFlLEVBQUUsSUFGRTtBQUduQkMsYUFBTyxFQUFFO0FBQ0wsd0JBQWdCLGtCQURYO0FBRUwseUJBQWlCTDtBQUZaLE9BSFU7QUFPbkJNLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakIsZ0JBQVEsd0JBRFM7QUFFakIsdUJBQWUseURBRkU7QUFHakIsc0JBQWM7QUFDVixtQkFBUztBQURDLFNBSEc7QUFNakIscUJBQWEsQ0FBQztBQUNWLGtCQUFRLDRCQURFO0FBRVYsa0JBQVEsV0FGRTtBQUdWLHdCQUFjO0FBQ1Ysb0JBQVE7QUFDSixzQkFBUTtBQURKO0FBREU7QUFISixTQUFELEVBUVY7QUFDQyxrQkFBUSx5QkFEVDtBQUVDLGtCQUFRLGNBRlQ7QUFHQyx3QkFBYztBQUNWLG9CQUFRO0FBQ0oscUJBQU8sV0FESDtBQUVKLHFCQUFPLFdBRkg7QUFHSix1QkFBUyxDQUhMO0FBSUosc0JBQVE7QUFKSjtBQURFO0FBSGYsU0FSVTtBQU5JLE9BQWY7QUFQYSxLQUF2QjtBQW1DQUMsU0FBSyxDQUFDVixHQUFELEVBQU1HLGNBQU4sQ0FBTCxDQUNLUSxJQURMLENBRVFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosQ0FGUjtBQUlILEdBeENRLEVBd0NOLENBQUNmLEtBQUQsQ0F4Q00sQ0FBVDs7QUEyQ0EsTUFBTWdCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUlwQixLQUFKLEVBQVc7QUFDUEcsY0FBUSxDQUFDSCxLQUFELENBQVI7QUFDQWdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaO0FBQ0FELGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDSDtBQUNKLEdBUEQ7O0FBU0Esc0JBQ0ksOERBQUMsMkRBQUQ7QUFDSSxXQUFPLEVBQUMsb0NBRFo7QUFBQSwyQkFJSTtBQUFNLGNBQVEsRUFBRWlCLFdBQWhCO0FBQUEsOEJBQ0k7QUFBTyxlQUFJLE1BQVg7QUFBQTtBQUFBLFFBREosZUFFSTtBQUNJLG1CQUFXLEVBQUMsVUFEaEI7QUFFSSxZQUFJLEVBQUMsT0FGVDtBQUdJLFlBQUksRUFBQyxPQUhUO0FBSUksVUFBRSxFQUFDLE9BSlA7QUFLSSxhQUFLLEVBQUVsQixLQUxYO0FBTUksZ0JBQVEsRUFBRSxrQkFBQ21CLENBQUQ7QUFBQSxpQkFBT2xCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQU5kLFFBRko7QUFBQTtBQUpKLElBREo7QUFvQkg7O0dBL0VReEIsVTs7S0FBQUEsVTtBQWlGTUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jldmlld0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbXB0eVN0YXRlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFJldmlld0Zvcm0oKSB7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5zdXJ2ZXlzcGFycm93LmNvbS92MS9zdXJ2ZXlzLzg4NzEzL3NlY3Rpb25zJ1xuICAgIGNvbnN0IGJlYXJlciA9ICdCZWFyZXIgJyArICdwclVKcUVIbHB6V3JqQkdQNDc3ZFdrbFV6MnNQNllseE1iNHgwdFk0SjFyZ1c1OVRJSmVpMjBtaEUyYnBTdm1udDU2dEc5TjV4Uk1CbXdNWURTa1ZRNE5RJztcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYmVhcmVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWxjb21lIHRvIFJldmlldyBGb3JtXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgc2VjdGlvbiB3aWxsIGJlIGJhc2VkIG9uIHRoZSBsZWFkZXJzaGlwIHF1YWxpdHlcIixcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwic3RhcnQgYSB0aGlzIHNlY3Rpb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiUGxlYXNlIGVudGVyIHlvdXIgZmVlZGJhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dElucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk1VTFRJX0xJTkVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJQbGVhc2UgZ2l2ZSB5b3VyIHJhdGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJPcGluaW9uU2NhbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5cIjogXCJtaW4gbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heFwiOiBcIm1heCBsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0ZXBcIjogN1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbnRcIilcbiAgICAgICAgICAgIClcbiAgICB9LCBbZW1haWxdKTtcblxuXG4gICAgY29uc3Qgc2VuZFN1cnZleXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgc2V0ZW1haWwoaW5wdXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZW1haWwpXG4gICAgICAgICAgICBzZXRJbnB1dChcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICBoZWFkaW5nPVwiU2hhcmUgUmV2aWV3IFN1cnZleSB0aHJvdWdoIGVtYWlsc1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8cD5FbnRlciB0aGUgZW1haWwgYWRkcmVzcyBvZiBjdXN0b21lcnMuPC9wPiAqL31cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kU3VydmV5c30+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBpZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+ICovfVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ReviewForm.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\n\n// import React, { Component } from \"react\";\n// class Form extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.initialState = {\n//       name: \"\",\n//     //   job: \"\",\n//     };\n//     this.state = this.initialState;\n//   }\n//   handleChange = (event) => {\n//     const { name, value } = event.target;\n//     this.setState({\n//       [name]: value,\n//     });\n//   };\n//   onFormSubmit = (event) => {\n//     event.preventDefault();\n//     this.props.handleSubmit(this.state);\n//     this.setState(this.initialState);\n//   };\n//   render() {\n//     const { name, job } = this.state;\n//     return (\n//       <form onSubmit={this.onFormSubmit}>\n//         <label for=\"name\">Name</label>\n//         <input\n//           type=\"text\"\n//           name=\"name\"\n//           id=\"name\"\n//           value={name}\n//           onChange={this.handleChange}\n//         />\n//         <button type=\"submit\">Submit</button>\n//       </form>\n//     );\n//   }\n// }\n// export default Form;\n\n\n\nfunction Form() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initialState),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"form\", {\n    onSubmit: sendSurveys,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"label\", {\n      \"for\": \"name\",\n      children: \"Name\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\", {\n      type: \"input\",\n      name: \"input\",\n      id: \"input\",\n      value: input,\n      onChange: function onChange(e) {\n        return setInput(e.target.value);\n      }\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    })]\n  });\n}\n\n_s(Form, \"LBa8xFqiFfUYharTqc2KM5hnBxs=\");\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzPzQ3MjkiXSwibmFtZXMiOlsiRm9ybSIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInNlbmRTdXJ2ZXlzIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUNDLFlBQUQsQ0FEdEI7QUFBQSxNQUNMQyxLQURLO0FBQUEsTUFDRUMsUUFERjs7QUFHWixzQkFDSTtBQUFNLFlBQVEsRUFBRUMsV0FBaEI7QUFBQSw0QkFDSztBQUFPLGFBQUksTUFBWDtBQUFBO0FBQUEsTUFETCxlQUVLO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLFFBQUUsRUFBQyxPQUhMO0FBSUUsV0FBSyxFQUFFRixLQUpUO0FBS0UsY0FBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsZUFBT0YsUUFBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFMWixNQUZMLGVBU0s7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUEsTUFUTDtBQUFBLElBREo7QUFhSDs7R0FoQlFSLEk7O0tBQUFBLEk7QUFrQk1BLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG5cbi8vICAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IHtcbi8vICAgICAgIG5hbWU6IFwiXCIsXG4vLyAgICAgLy8gICBqb2I6IFwiXCIsXG4vLyAgICAgfTtcblxuLy8gICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcbi8vICAgfVxuXG4vLyAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuLy8gICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcblxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgW25hbWVdOiB2YWx1ZSxcbi8vICAgICB9KTtcbi8vICAgfTtcblxuLy8gICBvbkZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZSk7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XG4vLyAgIH07XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGNvbnN0IHsgbmFtZSwgam9iIH0gPSB0aGlzLnN0YXRlO1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH0+XG4vLyAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4vLyAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4vLyAgICAgICAgICAgaWQ9XCJuYW1lXCJcbi8vICAgICAgICAgICB2YWx1ZT17bmFtZX1cbi8vICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuLy8gICAgICAgPC9mb3JtPlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gRm9ybSgpIHtcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkgICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZFN1cnZleXN9PlxuICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICB0eXBlPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgbmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\n\n// import React, { Component } from \"react\";\n// class Form extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.initialState = {\n//       name: \"\",\n//     //   job: \"\",\n//     };\n//     this.state = this.initialState;\n//   }\n//   handleChange = (event) => {\n//     const { name, value } = event.target;\n//     this.setState({\n//       [name]: value,\n//     });\n//   };\n//   onFormSubmit = (event) => {\n//     event.preventDefault();\n//     this.props.handleSubmit(this.state);\n//     this.setState(this.initialState);\n//   };\n//   render() {\n//     const { name, job } = this.state;\n//     return (\n//       <form onSubmit={this.onFormSubmit}>\n//         <label for=\"name\">Name</label>\n//         <input\n//           type=\"text\"\n//           name=\"name\"\n//           id=\"name\"\n//           value={name}\n//           onChange={this.handleChange}\n//         />\n//         <button type=\"submit\">Submit</button>\n//       </form>\n//     );\n//   }\n// }\n// export default Form;\n\n\n\nfunction Form() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var sendSurveys = function sendSurveys(e) {\n    e.preventDefault();\n    console.log(e.target.value);\n    setInput(\"\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"form\", {\n    onSubmit: sendSurveys,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"label\", {\n      \"for\": \"name\",\n      children: \"Name\"\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\", {\n      type: \"input\",\n      name: \"input\",\n      id: \"input\",\n      value: input,\n      onChange: function onChange(e) {\n        return setInput(e.target.value);\n      }\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    })]\n  });\n}\n\n_s(Form, \"RL+Zbs2TIka0YpcBOJptmHqCgYA=\");\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzPzQ3MjkiXSwibmFtZXMiOlsiRm9ybSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInNlbmRTdXJ2ZXlzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ0xDLEtBREs7QUFBQSxNQUNFQyxRQURGOztBQUdaLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBckI7QUFDQVAsWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNILEdBSkQ7O0FBTUEsc0JBQ0k7QUFBTSxZQUFRLEVBQUVDLFdBQWhCO0FBQUEsNEJBQ0k7QUFBTyxhQUFJLE1BQVg7QUFBQTtBQUFBLE1BREosZUFFSTtBQUNJLFVBQUksRUFBQyxPQURUO0FBRUksVUFBSSxFQUFDLE9BRlQ7QUFHSSxRQUFFLEVBQUMsT0FIUDtBQUlJLFdBQUssRUFBRUYsS0FKWDtBQUtJLGNBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGVBQU9GLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTGQsTUFGSixlQVNJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBLE1BVEo7QUFBQSxJQURKO0FBYUg7O0dBdEJRVixJOztLQUFBQSxJO0FBd0JNQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuXG4vLyAgICAgdGhpcy5pbml0aWFsU3RhdGUgPSB7XG4vLyAgICAgICBuYW1lOiBcIlwiLFxuLy8gICAgIC8vICAgam9iOiBcIlwiLFxuLy8gICAgIH07XG5cbi8vICAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XG4vLyAgIH1cblxuLy8gICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbi8vICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG5cbi8vICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgIFtuYW1lXTogdmFsdWUsXG4vLyAgICAgfSk7XG4vLyAgIH07XG5cbi8vICAgb25Gb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KHRoaXMuc3RhdGUpO1xuLy8gICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUpO1xuLy8gICB9O1xuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zdCB7IG5hbWUsIGpvYiB9ID0gdGhpcy5zdGF0ZTtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9PlxuLy8gICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuLy8gICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuLy8gICAgICAgICAgIGlkPVwibmFtZVwiXG4vLyAgICAgICAgICAgdmFsdWU9e25hbWV9XG4vLyAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbi8vICAgICAgIDwvZm9ybT5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEZvcm07XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3Qgc2VuZFN1cnZleXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0SW5wdXQoXCJcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRTdXJ2ZXlzfT5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ })

})
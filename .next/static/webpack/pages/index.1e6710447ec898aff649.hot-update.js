webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ReviewForm.js":
/*!**********************************!*\
  !*** ./components/ReviewForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ReviewForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState2[0],\n      setemail = _useState2[1]; // const url = 'https://api.surveysparrow.com/v1/shares/email/2233677'\n\n\n  var bearer = 'Bearer ' + 'prUJqEHlpzWrjBGP477dWklUz2sP6YlxMb4x0tY4J1rgW59TIJei20mhE2bpSvmnt56tG9N5xRMBmwMYDSkVQ4NQ'; // useEffect(() => {\n  //     const requestOptions = {\n  //         method: 'PUT',\n  //         withCredentials: true,\n  //         headers: {\n  //             'Content-Type': 'application/json',\n  //             'Authorization': bearer,\n  //         },\n  //         body: JSON.stringify({\n  //             \"contacts\": [email]\n  //         })\n  //     };\n  //     fetch(url, requestOptions)\n  //         .then(\n  //             console.log(\"sent\")\n  //         )\n  // }, [email]);\n\n  var sendSurveys = function sendSurveys(e) {\n    e.preventDefault();\n\n    if (inpul) {\n      setemail(input);\n      console.log(email);\n      setInput(\"\");\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Share Review Survey through emails\",\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"form\", {\n      onSubmit: sendSurveys,\n      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"label\", {\n        \"for\": \"name\",\n        children: \"Name\"\n      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"input\", {\n        placeholder: \"Email id\",\n        type: \"input\",\n        name: \"input\",\n        id: \"input\",\n        value: input,\n        onChange: function onChange(e) {\n          return setInput(e.target.value);\n        }\n      })]\n    })\n  });\n}\n\n_s(ReviewForm, \"lFDlduF1Ok8tHeNy80lNb4auJaE=\");\n\n_c = ReviewForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ReviewForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdGb3JtLmpzPzdjMTAiXSwibmFtZXMiOlsiUmV2aWV3Rm9ybSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImVtYWlsIiwic2V0ZW1haWwiLCJiZWFyZXIiLCJzZW5kU3VydmV5cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHVsIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVYRyxLQUZXO0FBQUEsTUFFSkMsUUFGSSxrQkFJbEI7OztBQUNBLE1BQU1DLE1BQU0sR0FBRyxZQUFZLDBGQUEzQixDQUxrQixDQU9sQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUdDLEtBQUgsRUFBUztBQUNMTCxjQUFRLENBQUNILEtBQUQsQ0FBUjtBQUNBUyxhQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNBRCxjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0g7QUFDSixHQVBEOztBQVNBLHNCQUNJLDhEQUFDLDJEQUFEO0FBQ0ksV0FBTyxFQUFDLG9DQURaO0FBQUEsMkJBSUk7QUFBTSxjQUFRLEVBQUVJLFdBQWhCO0FBQUEsOEJBQ0k7QUFBTyxlQUFJLE1BQVg7QUFBQTtBQUFBLFFBREosZUFFSTtBQUNJLG1CQUFXLEVBQUMsVUFEaEI7QUFFSSxZQUFJLEVBQUMsT0FGVDtBQUdJLFlBQUksRUFBQyxPQUhUO0FBSUksVUFBRSxFQUFDLE9BSlA7QUFLSSxhQUFLLEVBQUVMLEtBTFg7QUFNSSxnQkFBUSxFQUFFLGtCQUFDTSxDQUFEO0FBQUEsaUJBQU9MLFFBQVEsQ0FBQ0ssQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTmQsUUFGSjtBQUFBO0FBSkosSUFESjtBQW9CSDs7R0F2RFFkLFU7O0tBQUFBLFU7QUF5RE1BLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXZpZXdGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wdHlTdGF0ZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBSZXZpZXdGb3JtKCkge1xuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICAvLyBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuc3VydmV5c3BhcnJvdy5jb20vdjEvc2hhcmVzL2VtYWlsLzIyMzM2NzcnXG4gICAgY29uc3QgYmVhcmVyID0gJ0JlYXJlciAnICsgJ3ByVUpxRUhscHpXcmpCR1A0NzdkV2tsVXoyc1A2WWx4TWI0eDB0WTRKMXJnVzU5VElKZWkyMG1oRTJicFN2bW50NTZ0RzlONXhSTUJtd01ZRFNrVlE0TlEnO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgIC8vICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgIC8vICAgICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBiZWFyZXIsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgICAgICAgICAgIFwiY29udGFjdHNcIjogW2VtYWlsXVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucylcbiAgICAvLyAgICAgICAgIC50aGVuKFxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VudFwiKVxuICAgIC8vICAgICAgICAgKVxuICAgIC8vIH0sIFtlbWFpbF0pO1xuXG5cbiAgICBjb25zdCBzZW5kU3VydmV5cyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoaW5wdWwpe1xuICAgICAgICAgICAgc2V0ZW1haWwoaW5wdXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZW1haWwpXG4gICAgICAgICAgICBzZXRJbnB1dChcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICBoZWFkaW5nPVwiU2hhcmUgUmV2aWV3IFN1cnZleSB0aHJvdWdoIGVtYWlsc1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8cD5FbnRlciB0aGUgZW1haWwgYWRkcmVzcyBvZiBjdXN0b21lcnMuPC9wPiAqL31cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kU3VydmV5c30+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBpZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+ICovfVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ReviewForm.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList.js\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql */ \"./node_modules/graphql/index.mjs\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Form */ \"./components/Form.js\");\n/* harmony import */ var _components_ReviewForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar img = \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\";\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      open: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSelection\", function (resources) {\n      var idsFromResources = resources.selection.map(function (product) {\n        return product.id;\n      });\n\n      _this.setState({\n        open: false\n      });\n\n      store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set(\"ids\", idsFromResources);\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get(\"ids\");\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__[\"TitleBar\"], {\n          title: \"SurveySparrow App\",\n          primaryAction: {\n            content: \"Send Surveys\",\n            onAction: function onAction() {\n              return _this2.setState({\n                on: true\n              });\n            }\n          }\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__[\"ResourcePicker\"], {\n          resourceType: \"Product\",\n          showVariants: false,\n          open: this.state.open,\n          onSelection: function onSelection(resources) {\n            return _this2.handleSelection(resources);\n          },\n          onCancel: function onCancel() {\n            return _this2.setState({\n              open: false\n            });\n          }\n        }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"EmptyState\"], {\n            heading: \"Select products to start\",\n            action: {\n              content: \"Select products\",\n              onAction: function onAction() {\n                return _this2.setState({\n                  open: true\n                });\n              }\n            },\n            image: img,\n            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\", {\n              children: \"Select products and change their price.\"\n            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"sendSurvey\", {})]\n          })\n        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Modal\"], {\n            activator: \"<Button onClick={handleChange}>Open</Button>\",\n            open: true,\n            onClose: handleChange,\n            title: \"Reach more shoppers with Instagram product tags\",\n            primaryAction: {\n              content: 'Add Instagram',\n              onAction: handleChange\n            },\n            secondaryActions: [{\n              content: 'Learn more',\n              onAction: handleChange\n            }]\n          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {})]\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Form__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {})]\n      });\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbWciLCJJbmRleCIsIm9wZW4iLCJyZXNvdXJjZXMiLCJpZHNGcm9tUmVzb3VyY2VzIiwic2VsZWN0aW9uIiwibWFwIiwicHJvZHVjdCIsImlkIiwic2V0U3RhdGUiLCJzdG9yZSIsInNldCIsImVtcHR5U3RhdGUiLCJnZXQiLCJjb250ZW50Iiwib25BY3Rpb24iLCJvbiIsInN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsbUVBQVo7O0lBRU1DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFBRUMsVUFBSSxFQUFFO0FBQVIsSzs7ME5BOERVLFVBQUNDLFNBQUQsRUFBZTtBQUMvQixVQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxFQUFyQjtBQUFBLE9BQXhCLENBQXpCOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkOztBQUNBUSxzREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixFQUFpQlAsZ0JBQWpCO0FBQ0QsSzs7Ozs7Ozs2QkFoRVE7QUFBQTs7QUFDUCxVQUFNUSxVQUFVLEdBQUcsQ0FBQ0YsZ0RBQUssQ0FBQ0csR0FBTixDQUFVLEtBQVYsQ0FBcEI7QUFFQSwwQkFDRSwrREFBQyxxREFBRDtBQUFBLGdDQUNFLDhEQUFDLG1FQUFEO0FBQ0UsZUFBSyxFQUFDLG1CQURSO0FBRUUsdUJBQWEsRUFBRTtBQUNiQyxtQkFBTyxFQUFFLGNBREk7QUFFYkMsb0JBQVEsRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUVPLGtCQUFFLEVBQUU7QUFBTixlQUFkLENBQU47QUFBQTtBQUZHO0FBRmpCLFVBREYsZUFTRSw4REFBQyx5RUFBRDtBQUNFLHNCQUFZLEVBQUMsU0FEZjtBQUVFLHNCQUFZLEVBQUUsS0FGaEI7QUFHRSxjQUFJLEVBQUUsS0FBS0MsS0FBTCxDQUFXZixJQUhuQjtBQUlFLHFCQUFXLEVBQUUscUJBQUNDLFNBQUQ7QUFBQSxtQkFBZSxNQUFJLENBQUNlLGVBQUwsQ0FBcUJmLFNBQXJCLENBQWY7QUFBQSxXQUpmO0FBS0Usa0JBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ00sUUFBTCxDQUFjO0FBQUVQLGtCQUFJLEVBQUU7QUFBUixhQUFkLENBQU47QUFBQTtBQUxaLFVBVEYsRUFnQklVLFVBQVUsZ0JBQ1YsOERBQUMsdURBQUQ7QUFBQSxpQ0FDRSwrREFBQywyREFBRDtBQUNFLG1CQUFPLEVBQUMsMEJBRFY7QUFFRSxrQkFBTSxFQUFFO0FBQ05FLHFCQUFPLEVBQUUsaUJBREg7QUFFTkMsc0JBQVEsRUFBRTtBQUFBLHVCQUFNLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUVQLHNCQUFJLEVBQUU7QUFBUixpQkFBZCxDQUFOO0FBQUE7QUFGSixhQUZWO0FBTUUsaUJBQUssRUFBRUYsR0FOVDtBQUFBLG9DQVFFO0FBQUE7QUFBQSxjQVJGLGVBU0UsK0VBVEY7QUFBQTtBQURGLFVBRFUsZ0JBZVI7QUFBQSxrQ0FDRSw4REFBQyxzREFBRDtBQUNFLHFCQUFTLGdEQURYO0FBRUUsZ0JBQUksRUFBRSxJQUZSO0FBR0UsbUJBQU8sRUFBRW1CLFlBSFg7QUFJRSxpQkFBSyxFQUFDLGlEQUpSO0FBS0UseUJBQWEsRUFBRTtBQUNiTCxxQkFBTyxFQUFFLGVBREk7QUFFYkMsc0JBQVEsRUFBRUk7QUFGRyxhQUxqQjtBQVNFLDRCQUFnQixFQUFFLENBQ2hCO0FBQ0VMLHFCQUFPLEVBQUUsWUFEWDtBQUVFQyxzQkFBUSxFQUFFSTtBQUZaLGFBRGdCO0FBVHBCLFlBREYsZUFpQkUsOERBQUMsaUVBQUQsS0FqQkY7QUFBQSxVQS9CTixlQW9ERSw4REFBQyx5REFBRCxLQXBERjtBQUFBLFFBREY7QUF3REQ7Ozs7RUE5RGlCQyw0Q0FBSyxDQUFDQyxTOztBQXVFWHBCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVtcHR5U3RhdGUsIExheW91dCwgTW9kYWwsIFBhZ2UgfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyIH0gZnJvbSBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmUtanNcIjtcbmltcG9ydCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0XCI7XG5pbXBvcnQgeyBWYXJpYWJsZXNBcmVJbnB1dFR5cGVzUnVsZSB9IGZyb20gXCJncmFwaHFsXCI7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nXG5pbXBvcnQgUmV2aWV3Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Jldmlld0Zvcm0nXG5cbmNvbnN0IGltZyA9IFwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIjtcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoXCJpZHNcIik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxUaXRsZUJhclxuICAgICAgICAgIHRpdGxlPVwiU3VydmV5U3BhcnJvdyBBcHBcIlxuICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2VuZCBTdXJ2ZXlzXCIsXG4gICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9uOiB0cnVlIH0pLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiA8aDE+aEVLS0k8L2gxPiAqL31cbiAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgLz5cbiAgICAgICAgeyBlbXB0eVN0YXRlID8gKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgICBoZWFkaW5nPVwiU2VsZWN0IHByb2R1Y3RzIHRvIHN0YXJ0XCJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgcHJvZHVjdHNcIixcbiAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGltYWdlPXtpbWd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyBhbmQgY2hhbmdlIHRoZWlyIHByaWNlLjwvcD5cbiAgICAgICAgICAgICAgPHNlbmRTdXJ2ZXkgLz5cbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGFjdGl2YXRvcj17YDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2hhbmdlfT5PcGVuPC9CdXR0b24+YH1cbiAgICAgICAgICAgICAgICBvcGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWNoIG1vcmUgc2hvcHBlcnMgd2l0aCBJbnN0YWdyYW0gcHJvZHVjdCB0YWdzXCJcbiAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnQWRkIEluc3RhZ3JhbScsXG4gICAgICAgICAgICAgICAgICBvbkFjdGlvbjogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnTGVhcm4gbW9yZScsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgID48L01vZGFsPlxuICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuXG4gICAgICAgIDxGb3JtIC8+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgc3RvcmUuc2V0KFwiaWRzXCIsIGlkc0Zyb21SZXNvdXJjZXMpO1xuICB9O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
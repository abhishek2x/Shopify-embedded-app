webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList.js\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql */ \"./node_modules/graphql/index.mjs\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar img = \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\";\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      open: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSelection\", function (resources) {\n      var idsFromResources = resources.selection.map(function (product) {\n        return product.id;\n      });\n\n      _this.setState({\n        open: false\n      });\n\n      store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set(\"ids\", idsFromResources);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleChange\", function () {// this.setState({ open: false });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get(\"ids\");\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__[\"TitleBar\"], {\n          title: \"SurveySparrow App\",\n          primaryAction: {\n            content: \"Send Surveys\",\n            onAction: function onAction() {\n              return _this2.setState({\n                on: true\n              });\n            }\n          }\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(H1, {\n          children: \"hEKKI\"\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__[\"ResourcePicker\"], {\n          resourceType: \"Product\",\n          showVariants: false,\n          open: this.state.open,\n          onSelection: function onSelection(resources) {\n            return _this2.handleSelection(resources);\n          },\n          onCancel: function onCancel() {\n            return _this2.setState({\n              open: false\n            });\n          }\n        }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"EmptyState\"], {\n            heading: \"Select products to start\",\n            action: {\n              content: \"Select products\",\n              onAction: function onAction() {\n                return _this2.setState({\n                  open: true\n                });\n              }\n            },\n            image: img,\n            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\", {\n              children: \"Select products and change their price.\"\n            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"sendSurvey\", {})]\n          })\n        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Modal\"], {\n            activator: \"<Button onClick={handleChange}>Open</Button>\",\n            open: true,\n            onClose: handleChange,\n            title: \"Reach more shoppers with Instagram product tags\",\n            primaryAction: {\n              content: 'Add Instagram',\n              onAction: handleChange\n            },\n            secondaryActions: [{\n              content: 'Learn more',\n              onAction: handleChange\n            }]\n          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {})]\n        })]\n      });\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbWciLCJJbmRleCIsIm9wZW4iLCJyZXNvdXJjZXMiLCJpZHNGcm9tUmVzb3VyY2VzIiwic2VsZWN0aW9uIiwibWFwIiwicHJvZHVjdCIsImlkIiwic2V0U3RhdGUiLCJzdG9yZSIsInNldCIsImVtcHR5U3RhdGUiLCJnZXQiLCJjb250ZW50Iiwib25BY3Rpb24iLCJvbiIsInN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsbUVBQVo7O0lBRU1DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFBRUMsVUFBSSxFQUFFO0FBQVIsSzs7ME5BNkRVLFVBQUNDLFNBQUQsRUFBZTtBQUMvQixVQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxFQUFyQjtBQUFBLE9BQXhCLENBQXpCOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkOztBQUNBUSxzREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixFQUFpQlAsZ0JBQWpCO0FBQ0QsSzs7dU5BRWMsWUFBTSxDQUNuQjtBQUNELEs7Ozs7Ozs7NkJBbkVRO0FBQUE7O0FBQ1AsVUFBTVEsVUFBVSxHQUFHLENBQUNGLGdEQUFLLENBQUNHLEdBQU4sQ0FBVSxLQUFWLENBQXBCO0FBRUEsMEJBQ0UsK0RBQUMscURBQUQ7QUFBQSxnQ0FDRSw4REFBQyxtRUFBRDtBQUNFLGVBQUssRUFBQyxtQkFEUjtBQUVFLHVCQUFhLEVBQUU7QUFDYkMsbUJBQU8sRUFBRSxjQURJO0FBRWJDLG9CQUFRLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNOLFFBQUwsQ0FBYztBQUFFTyxrQkFBRSxFQUFFO0FBQU4sZUFBZCxDQUFOO0FBQUE7QUFGRztBQUZqQixVQURGLGVBUUUsOERBQUMsRUFBRDtBQUFBO0FBQUEsVUFSRixlQVNFLDhEQUFDLHlFQUFEO0FBQ0Usc0JBQVksRUFBQyxTQURmO0FBRUUsc0JBQVksRUFBRSxLQUZoQjtBQUdFLGNBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdmLElBSG5CO0FBSUUscUJBQVcsRUFBRSxxQkFBQ0MsU0FBRDtBQUFBLG1CQUFlLE1BQUksQ0FBQ2UsZUFBTCxDQUFxQmYsU0FBckIsQ0FBZjtBQUFBLFdBSmY7QUFLRSxrQkFBUSxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDTSxRQUFMLENBQWM7QUFBRVAsa0JBQUksRUFBRTtBQUFSLGFBQWQsQ0FBTjtBQUFBO0FBTFosVUFURixFQWdCSVUsVUFBVSxnQkFDViw4REFBQyx1REFBRDtBQUFBLGlDQUNFLCtEQUFDLDJEQUFEO0FBQ0UsbUJBQU8sRUFBQywwQkFEVjtBQUVFLGtCQUFNLEVBQUU7QUFDTkUscUJBQU8sRUFBRSxpQkFESDtBQUVOQyxzQkFBUSxFQUFFO0FBQUEsdUJBQU0sTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBRVAsc0JBQUksRUFBRTtBQUFSLGlCQUFkLENBQU47QUFBQTtBQUZKLGFBRlY7QUFNRSxpQkFBSyxFQUFFRixHQU5UO0FBQUEsb0NBUUU7QUFBQTtBQUFBLGNBUkYsZUFTRSwrRUFURjtBQUFBO0FBREYsVUFEVSxnQkFlUjtBQUFBLGtDQUNFLDhEQUFDLHNEQUFEO0FBQ0UscUJBQVMsZ0RBRFg7QUFFRSxnQkFBSSxFQUFFLElBRlI7QUFHRSxtQkFBTyxFQUFFbUIsWUFIWDtBQUlFLGlCQUFLLEVBQUMsaURBSlI7QUFLRSx5QkFBYSxFQUFFO0FBQ2JMLHFCQUFPLEVBQUUsZUFESTtBQUViQyxzQkFBUSxFQUFFSTtBQUZHLGFBTGpCO0FBU0UsNEJBQWdCLEVBQUUsQ0FDaEI7QUFDRUwscUJBQU8sRUFBRSxZQURYO0FBRUVDLHNCQUFRLEVBQUVJO0FBRlosYUFEZ0I7QUFUcEIsWUFERixlQWlCRSw4REFBQyxpRUFBRCxLQWpCRjtBQUFBLFVBL0JOO0FBQUEsUUFERjtBQXNERDs7OztFQTVEaUJDLDRDQUFLLENBQUNDLFM7O0FBeUVYcEIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBNb2RhbCwgUGFnZSB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZS1qc1wiO1xuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3RcIjtcbmltcG9ydCB7IFZhcmlhYmxlc0FyZUlucHV0VHlwZXNSdWxlIH0gZnJvbSBcImdyYXBocWxcIjtcblxuY29uc3QgaW1nID0gXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldChcImlkc1wiKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgPFRpdGxlQmFyXG4gICAgICAgICAgdGl0bGU9XCJTdXJ2ZXlTcGFycm93IEFwcFwiXG4gICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgY29udGVudDogXCJTZW5kIFN1cnZleXNcIixcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb246IHRydWUgfSksXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPEgxPmhFS0tJPC9IMT5cbiAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgLz5cbiAgICAgICAgeyBlbXB0eVN0YXRlID8gKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgICBoZWFkaW5nPVwiU2VsZWN0IHByb2R1Y3RzIHRvIHN0YXJ0XCJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgcHJvZHVjdHNcIixcbiAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGltYWdlPXtpbWd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyBhbmQgY2hhbmdlIHRoZWlyIHByaWNlLjwvcD5cbiAgICAgICAgICAgICAgPHNlbmRTdXJ2ZXkgLz5cbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGFjdGl2YXRvcj17YDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2hhbmdlfT5PcGVuPC9CdXR0b24+YH1cbiAgICAgICAgICAgICAgICBvcGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWNoIG1vcmUgc2hvcHBlcnMgd2l0aCBJbnN0YWdyYW0gcHJvZHVjdCB0YWdzXCJcbiAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnQWRkIEluc3RhZ3JhbScsXG4gICAgICAgICAgICAgICAgICBvbkFjdGlvbjogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnTGVhcm4gbW9yZScsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgID48L01vZGFsPlxuICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbiAgXG4gIGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+IHtcbiAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICBzdG9yZS5zZXQoXCJpZHNcIiwgaWRzRnJvbVJlc291cmNlcyk7XG4gIH07IFxuICBcbiAgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList.js\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql */ \"./node_modules/graphql/index.mjs\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar img = \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\";\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      open: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"value\", \"\");\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"sendSurvey\", function (e) {\n      e.preventDefault();\n      console.log(e);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSelection\", function (resources) {\n      var idsFromResources = resources.selection.map(function (product) {\n        return product.id;\n      });\n\n      _this.setState({\n        open: false\n      });\n\n      store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set(\"ids\", idsFromResources);\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get(\"ids\");\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__[\"TitleBar\"], {\n          title: \"SurveySparrow App\",\n          primaryAction: {\n            content: \"Send Surveys\",\n            onAction: function onAction() {\n              return _this2.setState({\n                on: true\n              });\n            }\n          }\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"input\", {\n          type: \"text\"\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"button\", {\n          onSubmit: this.sendSurvey,\n          children: \"Send Surveys\"\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__[\"ResourcePicker\"], {\n          resourceType: \"Product\",\n          showVariants: false,\n          open: this.state.open,\n          onSelection: function onSelection(resources) {\n            return _this2.handleSelection(resources);\n          },\n          onCancel: function onCancel() {\n            return _this2.setState({\n              open: false\n            });\n          }\n        }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"EmptyState\"], {\n            heading: \"Select products to start\",\n            action: {\n              content: \"Select products\",\n              onAction: function onAction() {\n                return _this2.setState({\n                  open: true\n                });\n              }\n            },\n            image: img,\n            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\", {\n              children: \"Select products and change their price.\"\n            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"sendSurvey\", {})]\n          })\n        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Modal\"], {\n            activator: \"<Button onClick={handleChange}>Open</Button>\",\n            open: true,\n            onClose: handleChange,\n            title: \"Reach more shoppers with Instagram product tags\",\n            primaryAction: {\n              content: 'Add Instagram',\n              onAction: handleChange\n            },\n            secondaryActions: [{\n              content: 'Learn more',\n              onAction: handleChange\n            }]\n          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {})]\n        })]\n      });\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbWciLCJJbmRleCIsIm9wZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJlbXB0eVN0YXRlIiwiZ2V0IiwiY29udGVudCIsIm9uQWN0aW9uIiwib24iLCJzZW5kU3VydmV5Iiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxtRUFBWjs7SUFFTUMsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLOztnTkFDQSxFOztxTkFpRUssVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xCQSxPQUFDLENBQUNDLGNBQUY7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILENBQVo7QUFDRCxLOzswTkFFaUIsVUFBQ0ksU0FBRCxFQUFlO0FBQy9CLFVBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLEVBQXJCO0FBQUEsT0FBeEIsQ0FBekI7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUVYLFlBQUksRUFBRTtBQUFSLE9BQWQ7O0FBQ0FZLHNEQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLEVBQWlCUCxnQkFBakI7QUFDRCxLOzs7Ozs7OzZCQXhFUTtBQUFBOztBQUNQLFVBQU1RLFVBQVUsR0FBRyxDQUFDRixnREFBSyxDQUFDRyxHQUFOLENBQVUsS0FBVixDQUFwQjtBQUVBLDBCQUNFLCtEQUFDLHFEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsbUVBQUQ7QUFDRSxlQUFLLEVBQUMsbUJBRFI7QUFFRSx1QkFBYSxFQUFFO0FBQ2JDLG1CQUFPLEVBQUUsY0FESTtBQUViQyxvQkFBUSxFQUFFO0FBQUEscUJBQU0sTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBRU8sa0JBQUUsRUFBRTtBQUFOLGVBQWQsQ0FBTjtBQUFBO0FBRkc7QUFGakIsVUFERixlQVNJO0FBQU8sY0FBSSxFQUFDO0FBQVosVUFUSixlQVVJO0FBQVEsa0JBQVEsRUFBRSxLQUFLQyxVQUF2QjtBQUFBO0FBQUEsVUFWSixlQWFFLDhEQUFDLHlFQUFEO0FBQ0Usc0JBQVksRUFBQyxTQURmO0FBRUUsc0JBQVksRUFBRSxLQUZoQjtBQUdFLGNBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdwQixJQUhuQjtBQUlFLHFCQUFXLEVBQUUscUJBQUNLLFNBQUQ7QUFBQSxtQkFBZSxNQUFJLENBQUNnQixlQUFMLENBQXFCaEIsU0FBckIsQ0FBZjtBQUFBLFdBSmY7QUFLRSxrQkFBUSxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDTSxRQUFMLENBQWM7QUFBRVgsa0JBQUksRUFBRTtBQUFSLGFBQWQsQ0FBTjtBQUFBO0FBTFosVUFiRixFQW9CSWMsVUFBVSxnQkFDViw4REFBQyx1REFBRDtBQUFBLGlDQUNFLCtEQUFDLDJEQUFEO0FBQ0UsbUJBQU8sRUFBQywwQkFEVjtBQUVFLGtCQUFNLEVBQUU7QUFDTkUscUJBQU8sRUFBRSxpQkFESDtBQUVOQyxzQkFBUSxFQUFFO0FBQUEsdUJBQU0sTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBRVgsc0JBQUksRUFBRTtBQUFSLGlCQUFkLENBQU47QUFBQTtBQUZKLGFBRlY7QUFNRSxpQkFBSyxFQUFFRixHQU5UO0FBQUEsb0NBUUU7QUFBQTtBQUFBLGNBUkYsZUFTRSwrRUFURjtBQUFBO0FBREYsVUFEVSxnQkFlUjtBQUFBLGtDQUNFLDhEQUFDLHNEQUFEO0FBQ0UscUJBQVMsZ0RBRFg7QUFFRSxnQkFBSSxFQUFFLElBRlI7QUFHRSxtQkFBTyxFQUFFd0IsWUFIWDtBQUlFLGlCQUFLLEVBQUMsaURBSlI7QUFLRSx5QkFBYSxFQUFFO0FBQ2JOLHFCQUFPLEVBQUUsZUFESTtBQUViQyxzQkFBUSxFQUFFSztBQUZHLGFBTGpCO0FBU0UsNEJBQWdCLEVBQUUsQ0FDaEI7QUFDRU4scUJBQU8sRUFBRSxZQURYO0FBRUVDLHNCQUFRLEVBQUVLO0FBRlosYUFEZ0I7QUFUcEIsWUFERixlQWlCRSw4REFBQyxpRUFBRCxLQWpCRjtBQUFBLFVBbkNOO0FBQUEsUUFERjtBQTBERDs7OztFQWpFaUJDLDRDQUFLLENBQUNDLFM7O0FBZ0ZYekIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBNb2RhbCwgUGFnZSB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZS1qc1wiO1xuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3RcIjtcbmltcG9ydCB7IFZhcmlhYmxlc0FyZUlucHV0VHlwZXNSdWxlIH0gZnJvbSBcImdyYXBocWxcIjtcblxuY29uc3QgaW1nID0gXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuICB2YWx1ZSA9IFwiXCI7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KFwiaWRzXCIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICB0aXRsZT1cIlN1cnZleVNwYXJyb3cgQXBwXCJcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICBjb250ZW50OiBcIlNlbmQgU3VydmV5c1wiLFxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvbjogdHJ1ZSB9KSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7LyogPGZvcm0+ICovfVxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICA8YnV0dG9uIG9uU3VibWl0PXt0aGlzLnNlbmRTdXJ2ZXl9PlNlbmQgU3VydmV5czwvYnV0dG9uPlxuICAgICAgICB7LyogPC9mb3JtPiAqL31cbiAgICAgICAgey8qIDxoMT5oRUtLSTwvaDE+ICovfVxuICAgICAgICA8UmVzb3VyY2VQaWNrZXJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxuICAgICAgICAvPlxuICAgICAgICB7IGVtcHR5U3RhdGUgPyAoXG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICAgIGhlYWRpbmc9XCJTZWxlY3QgcHJvZHVjdHMgdG8gc3RhcnRcIlxuICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlNlbGVjdCBwcm9kdWN0c1wiLFxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2ltZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIGFuZCBjaGFuZ2UgdGhlaXIgcHJpY2UuPC9wPlxuICAgICAgICAgICAgICA8c2VuZFN1cnZleSAvPlxuICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgYWN0aXZhdG9yPXtgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9Pk9wZW48L0J1dHRvbj5gfVxuICAgICAgICAgICAgICAgIG9wZW49e3RydWV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhY2ggbW9yZSBzaG9wcGVycyB3aXRoIEluc3RhZ3JhbSBwcm9kdWN0IHRhZ3NcIlxuICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgSW5zdGFncmFtJyxcbiAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgPjwvTW9kYWw+XG4gICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuXG4gIHNlbmRTdXJ2ZXkgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG4gIFxuICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgc3RvcmUuc2V0KFwiaWRzXCIsIGlkc0Zyb21SZXNvdXJjZXMpO1xuICB9OyBcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
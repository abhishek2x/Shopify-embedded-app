webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getCustomers {\\n    customers (first: 3) {\\n      edges {\\n        node {\\n          id\\n          displayName\\n          email\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n/*\n\n* Getting List of existing Customers -> Shopify API - here (done)\n\n*/\n\nvar GET_CUSTOMERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Query\"], {\n    query: GET_CUSTOMERS,\n    children: function children(_ref) {\n      var loading = _ref.loading,\n          error = _ref.error,\n          data = _ref.data;\n      if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: \"Loading...\"\n      });\n      if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: error.message\n      });\n      console.log(data); // return data.customers.edges.map(edge => (\n      //   <div key={edge.node.id}>\n      //     <p>{`${edge.node.displayName} by ${edge.node.email}`}</p>\n      //   </div>\n      // ));\n\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_ReviewForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              customers: selected,\n              setCustomers: setSelected\n            })\n          })\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Scrollable\"], {\n              shadow: true,\n              style: {\n                height: '300px'\n              },\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"OptionList\"], {\n                title: \"To be added among customers\",\n                onChange: setSelected,\n                allowMultiple: true,\n                options: [{\n                  label: 'BBN Frank',\n                  value: 'abhisheksrivastavabbn@gmail.com'\n                }, {\n                  label: 'BBN Frank',\n                  value: 'abhisheksrivastavabbn@gmail.com'\n                }, {\n                  label: 'BBN Frank',\n                  value: 'abhisheksrivastavabbn@gmail.com'\n                }, {\n                  label: 'Sept Fifth',\n                  value: 'abhisheksrivastavasept5@gmail.com'\n                }],\n                selected: selected\n              })\n            })\n          })\n        })]\n      });\n    }\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJHRVRfQ1VTVE9NRVJTIiwiZ3FsIiwiQ3VzdG9tZXJMaXN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiaGVpZ2h0IiwibGFiZWwiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxhQUFhLEdBQUdDLHdEQUFILG1CQUFuQjs7QUFjQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ2ZDLFFBRGU7QUFBQSxNQUNMQyxXQURLOztBQUd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLFFBQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTyxTQUFLLEVBQUVKLGFBQWQ7QUFBQSxjQUNHLHdCQUE4QjtBQUFBLFVBQTNCUyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxVQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsVUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLFVBQUlGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUEsUUFBUDtBQUNiLFVBQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLGtCQUFJQSxLQUFLLENBQUNFO0FBQVYsUUFBUDtBQUNYTCxhQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWixFQUg2QixDQUs3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLDBCQUNFLCtEQUFDLHVEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLGlCQUFPLE1BQXZCO0FBQUEsaUNBQ0UsOERBQUMsMkRBQUQ7QUFBQSxtQ0FDRSw4REFBQyxtREFBRDtBQUFZLHVCQUFTLEVBQUVQLFFBQXZCO0FBQWlDLDBCQUFZLEVBQUVDO0FBQS9DO0FBREY7QUFERixVQURGLGVBUUUsOERBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLGlCQUFPLE1BQXZCO0FBQUEsaUNBRUUsOERBQUMscURBQUQ7QUFBQSxtQ0FDRSw4REFBQywyREFBRDtBQUFZLG9CQUFNLE1BQWxCO0FBQW1CLG1CQUFLLEVBQUU7QUFBRVEsc0JBQU0sRUFBRTtBQUFWLGVBQTFCO0FBQUEscUNBQ0UsOERBQUMsMkRBQUQ7QUFDRSxxQkFBSyxFQUFDLDZCQURSO0FBRUUsd0JBQVEsRUFBRVIsV0FGWjtBQUdFLDZCQUFhLE1BSGY7QUFJRSx1QkFBTyxFQUFFLENBQ1A7QUFBRVMsdUJBQUssRUFBRSxXQUFUO0FBQXNCQyx1QkFBSyxFQUFFO0FBQTdCLGlCQURPLEVBRVA7QUFBRUQsdUJBQUssRUFBRSxXQUFUO0FBQXNCQyx1QkFBSyxFQUFFO0FBQTdCLGlCQUZPLEVBR1A7QUFBRUQsdUJBQUssRUFBRSxXQUFUO0FBQXNCQyx1QkFBSyxFQUFFO0FBQTdCLGlCQUhPLEVBSVA7QUFBRUQsdUJBQUssRUFBRSxZQUFUO0FBQXVCQyx1QkFBSyxFQUFFO0FBQTlCLGlCQUpPLENBSlg7QUFVRSx3QkFBUSxFQUFFWDtBQVZaO0FBREY7QUFERjtBQUZGLFVBUkY7QUFBQSxRQURGO0FBOEJEO0FBekNILElBREY7QUE2Q0Q7O0dBckRRRixZOztLQUFBQSxZO0FBdURNQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3VzdG9tZXJMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgRW1wdHlTdGF0ZSwgTGF5b3V0LCBPcHRpb25MaXN0LCBTY3JvbGxhYmxlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSc7XG5pbXBvcnQgUmV2aWV3Rm9ybSBmcm9tICcuL1Jldmlld0Zvcm0nO1xuXG4vKlxuXG4qIEdldHRpbmcgTGlzdCBvZiBleGlzdGluZyBDdXN0b21lcnMgLT4gU2hvcGlmeSBBUEkgLSBoZXJlIChkb25lKVxuXG4qL1xuXG5cbmNvbnN0IEdFVF9DVVNUT01FUlMgPSBncWxgXG5xdWVyeSBnZXRDdXN0b21lcnMge1xuICAgIGN1c3RvbWVycyAoZmlyc3Q6IDMpIHtcbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgbm9kZSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgIGVtYWlsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZnVuY3Rpb24gQ3VzdG9tZXJMaXN0KCkge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxuICB9LCBbc2VsZWN0ZWRdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnkgcXVlcnk9e0dFVF9DVVNUT01FUlN9PlxuICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICAvLyByZXR1cm4gZGF0YS5jdXN0b21lcnMuZWRnZXMubWFwKGVkZ2UgPT4gKFxuICAgICAgICAvLyAgIDxkaXYga2V5PXtlZGdlLm5vZGUuaWR9PlxuICAgICAgICAvLyAgICAgPHA+e2Ake2VkZ2Uubm9kZS5kaXNwbGF5TmFtZX0gYnkgJHtlZGdlLm5vZGUuZW1haWx9YH08L3A+XG4gICAgICAgIC8vICAgPC9kaXY+XG4gICAgICAgIC8vICkpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXlvdXQgPlxuICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZUhhbGY+XG4gICAgICAgICAgICAgIDxFbXB0eVN0YXRlPlxuICAgICAgICAgICAgICAgIDxSZXZpZXdGb3JtIGN1c3RvbWVycz17c2VsZWN0ZWR9IHNldEN1c3RvbWVycz17c2V0U2VsZWN0ZWR9IC8+XG5cbiAgICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxuICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cblxuICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZUhhbGY+XG5cbiAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPFNjcm9sbGFibGUgc2hhZG93IHN0eWxlPXt7IGhlaWdodDogJzMwMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxPcHRpb25MaXN0XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVG8gYmUgYWRkZWQgYW1vbmcgY3VzdG9tZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQkJOIEZyYW5rJywgdmFsdWU6ICdhYmhpc2hla3NyaXZhc3RhdmFiYm5AZ21haWwuY29tJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdCQk4gRnJhbmsnLCB2YWx1ZTogJ2FiaGlzaGVrc3JpdmFzdGF2YWJibkBnbWFpbC5jb20nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0JCTiBGcmFuaycsIHZhbHVlOiAnYWJoaXNoZWtzcml2YXN0YXZhYmJuQGdtYWlsLmNvbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU2VwdCBGaWZ0aCcsIHZhbHVlOiAnYWJoaXNoZWtzcml2YXN0YXZhc2VwdDVAZ21haWwuY29tJyB9LFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckxpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
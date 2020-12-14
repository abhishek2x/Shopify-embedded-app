webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getCustomers {\\n    customers (first: 3) {\\n      edges {\\n        node {\\n          id\\n          displayName\\n          email\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n/*\n\n* Getting List of existing Customers -> Shopify API - here (done)\n\n*/\n\nvar GET_CUSTOMERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Query\"], {\n    query: GET_CUSTOMERS,\n    children: function children(_ref) {\n      var loading = _ref.loading,\n          error = _ref.error,\n          data = _ref.data;\n      if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: \"Loading...\"\n      });\n      if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: error.message\n      });\n      console.log(\"Here's the ENDGAME ==>> \\n\", data); // return data.customers.edges.map(edge => (\n      //   <div key={edge.node.id}>\n      //     <p>{`${edge.node.displayName} by ${edge.node.email}`}</p>\n      //   </div>\n      // ));\n\n      var FinalList = data.customers.edges.map(function (edge) {\n        return \"{\\n            label: \".concat(edge.node.displayName, \", value: \").concat(edge.node.email, \"\\n          },\");\n      });\n      console.log(\">>>>\", FinalList);\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_ReviewForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              customers: selected,\n              setCustomers: setSelected\n            })\n          })\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Scrollable\"], {\n              shadow: true,\n              style: {\n                height: '300px'\n              },\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"OptionList\"], {\n                title: \"To be added among customers\",\n                onChange: setSelected,\n                allowMultiple: true,\n                options: [FinalList],\n                selected: selected\n              })\n            })\n          })\n        })]\n      });\n    }\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJHRVRfQ1VTVE9NRVJTIiwiZ3FsIiwiQ3VzdG9tZXJMaXN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiRmluYWxMaXN0IiwiY3VzdG9tZXJzIiwiZWRnZXMiLCJtYXAiLCJlZGdlIiwibm9kZSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxhQUFhLEdBQUdDLHdEQUFILG1CQUFuQjs7QUFjQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ2ZDLFFBRGU7QUFBQSxNQUNMQyxXQURLOztBQUd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLFFBQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTyxTQUFLLEVBQUVKLGFBQWQ7QUFBQSxjQUNHLHdCQUE4QjtBQUFBLFVBQTNCUyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxVQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsVUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLFVBQUlGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUEsUUFBUDtBQUNiLFVBQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLGtCQUFJQSxLQUFLLENBQUNFO0FBQVYsUUFBUDtBQUVYTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0csSUFBMUMsRUFKNkIsQ0FNN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFNRSxTQUFTLEdBQUdGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxLQUFmLENBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxJQUFJO0FBQUEsK0NBRWxDQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FGd0Isc0JBRURGLElBQUksQ0FBQ0MsSUFBTCxDQUFVRSxLQUZUO0FBQUEsT0FBN0IsQ0FBbEI7QUFNQWIsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFxQkssU0FBckI7QUFFQSwwQkFDRSwrREFBQyx1REFBRDtBQUFBLGdDQUNFLDhEQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixpQkFBTyxNQUF2QjtBQUFBLGlDQUNFLDhEQUFDLDJEQUFEO0FBQUEsbUNBQ0UsOERBQUMsbURBQUQ7QUFBWSx1QkFBUyxFQUFFVCxRQUF2QjtBQUFpQywwQkFBWSxFQUFFQztBQUEvQztBQURGO0FBREYsVUFERixlQU9FLDhEQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixpQkFBTyxNQUF2QjtBQUFBLGlDQUVFLDhEQUFDLHFEQUFEO0FBQUEsbUNBQ0UsOERBQUMsMkRBQUQ7QUFBWSxvQkFBTSxNQUFsQjtBQUFtQixtQkFBSyxFQUFFO0FBQUVnQixzQkFBTSxFQUFFO0FBQVYsZUFBMUI7QUFBQSxxQ0FDRSw4REFBQywyREFBRDtBQUNFLHFCQUFLLEVBQUMsNkJBRFI7QUFFRSx3QkFBUSxFQUFFaEIsV0FGWjtBQUdFLDZCQUFhLE1BSGY7QUFLRSx1QkFBTyxFQUFFLENBQUNRLFNBQUQsQ0FMWDtBQU1FLHdCQUFRLEVBQUVUO0FBTlo7QUFERjtBQURGO0FBRkYsVUFQRjtBQUFBLFFBREY7QUF5QkQ7QUE5Q0gsSUFERjtBQWtERDs7R0ExRFFGLFk7O0tBQUFBLFk7QUE0RE1BLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBFbXB0eVN0YXRlLCBMYXlvdXQsIE9wdGlvbkxpc3QsIFNjcm9sbGFibGUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCBSZXZpZXdGb3JtIGZyb20gJy4vUmV2aWV3Rm9ybSc7XG5pbXBvcnQge1xuICBSZXNvdXJjZUxpc3QsXG4gIFN0YWNrLFxuICBUZXh0U3R5bGUsXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5cbi8qXG5cbiogR2V0dGluZyBMaXN0IG9mIGV4aXN0aW5nIEN1c3RvbWVycyAtPiBTaG9waWZ5IEFQSSAtIGhlcmUgKGRvbmUpXG5cbiovXG5cblxuY29uc3QgR0VUX0NVU1RPTUVSUyA9IGdxbGBcbnF1ZXJ5IGdldEN1c3RvbWVycyB7XG4gICAgY3VzdG9tZXJzIChmaXJzdDogMykge1xuICAgICAgZWRnZXMge1xuICAgICAgICBub2RlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgZW1haWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5mdW5jdGlvbiBDdXN0b21lckxpc3QoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWQpXG4gIH0sIFtzZWxlY3RlZF0pXG5cblxuICByZXR1cm4gKFxuICAgIDxRdWVyeSBxdWVyeT17R0VUX0NVU1RPTUVSU30+XG4gICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8cD57ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVyZSdzIHRoZSBFTkRHQU1FID09Pj4gXFxuXCIsIGRhdGEpXG5cbiAgICAgICAgLy8gcmV0dXJuIGRhdGEuY3VzdG9tZXJzLmVkZ2VzLm1hcChlZGdlID0+IChcbiAgICAgICAgLy8gICA8ZGl2IGtleT17ZWRnZS5ub2RlLmlkfT5cbiAgICAgICAgLy8gICAgIDxwPntgJHtlZGdlLm5vZGUuZGlzcGxheU5hbWV9IGJ5ICR7ZWRnZS5ub2RlLmVtYWlsfWB9PC9wPlxuICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAvLyApKTtcblxuICAgICAgICBjb25zdCBGaW5hbExpc3QgPSBkYXRhLmN1c3RvbWVycy5lZGdlcy5tYXAoZWRnZSA9PiAoXG4gICAgICAgICAgYHtcbiAgICAgICAgICAgIGxhYmVsOiAke2VkZ2Uubm9kZS5kaXNwbGF5TmFtZX0sIHZhbHVlOiAke2VkZ2Uubm9kZS5lbWFpbH1cbiAgICAgICAgICB9LGBcbiAgICAgICAgKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCI+Pj4+XCIsICBGaW5hbExpc3QpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGF5b3V0ID5cbiAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBvbmVIYWxmPlxuICAgICAgICAgICAgICA8RW1wdHlTdGF0ZT5cbiAgICAgICAgICAgICAgICA8UmV2aWV3Rm9ybSBjdXN0b21lcnM9e3NlbGVjdGVkfSBzZXRDdXN0b21lcnM9e3NldFNlbGVjdGVkfSAvPlxuICAgICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuXG4gICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gb25lSGFsZj5cblxuICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8U2Nyb2xsYWJsZSBzaGFkb3cgc3R5bGU9e3sgaGVpZ2h0OiAnMzAwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgPE9wdGlvbkxpc3RcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUbyBiZSBhZGRlZCBhbW9uZyBjdXN0b21lcnNcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVcblxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbRmluYWxMaXN0XX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbGFibGU+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
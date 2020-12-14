webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getCustomers {\\n    customers (first: 3) {\\n      edges {\\n        node {\\n          id\\n          displayName\\n          email\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n/*\n\n* Getting List of existing Customers -> Shopify API - here (done)\n\n*/\n\nvar GET_CUSTOMERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Query\"], {\n    query: GET_CUSTOMERS,\n    children: function children(_ref) {\n      var loading = _ref.loading,\n          error = _ref.error,\n          data = _ref.data;\n      if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: \"Loading...\"\n      });\n      if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: error.message\n      });\n      console.log(data);\n      var Options = data.customers.edges.map(function (edge) {\n        return \"lable: \".concat(edge.displayName, \",\\n          value: \").concat(edge.email);\n      }); // return data.customers.edges.map(edge => (\n      //   <div key={edge.node.id}>\n      //     <p>{`${edge.node.displayName} by ${edge.node.email}`}</p>\n      //   </div>\n      // ));\n\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_ReviewForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              customers: selected,\n              setCustomers: setSelected\n            })\n          })\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Scrollable\"], {\n              shadow: true,\n              style: {\n                height: '300px'\n              },\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"OptionList\"], {\n                title: \"To be added among customers\",\n                onChange: setSelected,\n                allowMultiple: true // options={[\n                //   { \n                //     label: 'BBN Frank', \n                //     value: 'abhisheksrivastavabbn@gmail.com' \n                //   },\n                //   { \n                //     label: 'Dale Frank', \n                //     value: 'abhisheksrivastavabbn@gmail.com' \n                //   }\n                // ]}\n                ,\n                selected: selected\n              })\n            })\n          })\n        })]\n      });\n    }\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJHRVRfQ1VTVE9NRVJTIiwiZ3FsIiwiQ3VzdG9tZXJMaXN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiT3B0aW9ucyIsImN1c3RvbWVycyIsImVkZ2VzIiwibWFwIiwiZWRnZSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHQyx3REFBSCxtQkFBbkI7O0FBY0EsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNmQyxRQURlO0FBQUEsTUFDTEMsV0FESzs7QUFHdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVDtBQUtBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU8sU0FBSyxFQUFFSixhQUFkO0FBQUEsY0FDRyx3QkFBOEI7QUFBQSxVQUEzQlMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsVUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLFVBQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QixVQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBLFFBQVA7QUFDYixVQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxrQkFBSUEsS0FBSyxDQUFDRTtBQUFWLFFBQVA7QUFDWEwsYUFBTyxDQUFDQyxHQUFSLENBQVlHLElBQVo7QUFFQSxVQUFNRSxPQUFPLEdBQUdGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxLQUFmLENBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxJQUFJO0FBQUEsZ0NBQ2pDQSxJQUFJLENBQUNDLFdBRDRCLGlDQUVsQ0QsSUFBSSxDQUFDRSxLQUY2QjtBQUFBLE9BQTdCLENBQWhCLENBTDZCLENBVzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQ0UsK0RBQUMsdURBQUQ7QUFBQSxnQ0FDRSw4REFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0IsaUJBQU8sTUFBdkI7QUFBQSxpQ0FDRSw4REFBQywyREFBRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQVksdUJBQVMsRUFBRWYsUUFBdkI7QUFBaUMsMEJBQVksRUFBRUM7QUFBL0M7QUFERjtBQURGLFVBREYsZUFPRSw4REFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0IsaUJBQU8sTUFBdkI7QUFBQSxpQ0FFRSw4REFBQyxxREFBRDtBQUFBLG1DQUNFLDhEQUFDLDJEQUFEO0FBQVksb0JBQU0sTUFBbEI7QUFBbUIsbUJBQUssRUFBRTtBQUFFZSxzQkFBTSxFQUFFO0FBQVYsZUFBMUI7QUFBQSxxQ0FDRSw4REFBQywyREFBRDtBQUNFLHFCQUFLLEVBQUMsNkJBRFI7QUFFRSx3QkFBUSxFQUFFZixXQUZaO0FBR0UsNkJBQWEsTUFIZixDQUtFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEY7QUFlRSx3QkFBUSxFQUFFRDtBQWZaO0FBREY7QUFERjtBQUZGLFVBUEY7QUFBQSxRQURGO0FBa0NEO0FBcERILElBREY7QUF3REQ7O0dBaEVRRixZOztLQUFBQSxZO0FBa0VNQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3VzdG9tZXJMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgRW1wdHlTdGF0ZSwgTGF5b3V0LCBPcHRpb25MaXN0LCBTY3JvbGxhYmxlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSc7XG5pbXBvcnQgUmV2aWV3Rm9ybSBmcm9tICcuL1Jldmlld0Zvcm0nO1xuXG4vKlxuXG4qIEdldHRpbmcgTGlzdCBvZiBleGlzdGluZyBDdXN0b21lcnMgLT4gU2hvcGlmeSBBUEkgLSBoZXJlIChkb25lKVxuXG4qL1xuXG5cbmNvbnN0IEdFVF9DVVNUT01FUlMgPSBncWxgXG5xdWVyeSBnZXRDdXN0b21lcnMge1xuICAgIGN1c3RvbWVycyAoZmlyc3Q6IDMpIHtcbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgbm9kZSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgIGVtYWlsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZnVuY3Rpb24gQ3VzdG9tZXJMaXN0KCkge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxuICB9LCBbc2VsZWN0ZWRdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnkgcXVlcnk9e0dFVF9DVVNUT01FUlN9PlxuICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICBjb25zdCBPcHRpb25zID0gZGF0YS5jdXN0b21lcnMuZWRnZXMubWFwKGVkZ2UgPT4gKFxuICAgICAgICAgIGBsYWJsZTogJHtlZGdlLmRpc3BsYXlOYW1lfSxcbiAgICAgICAgICB2YWx1ZTogJHtlZGdlLmVtYWlsfWBcbiAgICAgICAgKSlcblxuXG4gICAgICAgIC8vIHJldHVybiBkYXRhLmN1c3RvbWVycy5lZGdlcy5tYXAoZWRnZSA9PiAoXG4gICAgICAgIC8vICAgPGRpdiBrZXk9e2VkZ2Uubm9kZS5pZH0+XG4gICAgICAgIC8vICAgICA8cD57YCR7ZWRnZS5ub2RlLmRpc3BsYXlOYW1lfSBieSAke2VkZ2Uubm9kZS5lbWFpbH1gfTwvcD5cbiAgICAgICAgLy8gICA8L2Rpdj5cbiAgICAgICAgLy8gKSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGF5b3V0ID5cbiAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBvbmVIYWxmPlxuICAgICAgICAgICAgICA8RW1wdHlTdGF0ZT5cbiAgICAgICAgICAgICAgICA8UmV2aWV3Rm9ybSBjdXN0b21lcnM9e3NlbGVjdGVkfSBzZXRDdXN0b21lcnM9e3NldFNlbGVjdGVkfSAvPlxuICAgICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuXG4gICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gb25lSGFsZj5cblxuICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8U2Nyb2xsYWJsZSBzaGFkb3cgc3R5bGU9e3sgaGVpZ2h0OiAnMzAwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgPE9wdGlvbkxpc3RcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUbyBiZSBhZGRlZCBhbW9uZyBjdXN0b21lcnNcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVcblxuICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgeyBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxhYmVsOiAnQkJOIEZyYW5rJywgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YWx1ZTogJ2FiaGlzaGVrc3JpdmFzdGF2YWJibkBnbWFpbC5jb20nIFxuICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgeyBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxhYmVsOiAnRGFsZSBGcmFuaycsIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFsdWU6ICdhYmhpc2hla3NyaXZhc3RhdmFiYm5AZ21haWwuY29tJyBcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIF19XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TY3JvbGxhYmxlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgICB9fVxuICAgIDwvUXVlcnk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyTGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
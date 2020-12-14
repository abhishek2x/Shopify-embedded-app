webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getCustomers {\\n    customers (first: 3) {\\n      edges {\\n        node {\\n          id\\n          displayName\\n          email\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n/*\n\n* Getting List of existing Customers -> Shopify API - here (done)\n\n*/\n\nvar GET_CUSTOMERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Query\"], {\n    query: GET_CUSTOMERS,\n    children: function children(_ref) {\n      var loading = _ref.loading,\n          error = _ref.error,\n          data = _ref.data;\n      if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: \"Loading...\"\n      });\n      if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: error.message\n      });\n      console.log(\"Here's the ENDGAME ==>> \\n\", data); // return data.customers.edges.map(edge => (\n      //   <div key={edge.node.id}>\n      //     <p>{`${edge.node.displayName} by ${edge.node.email}`}</p>\n      //   </div>\n      // ));\n\n      var label = [];\n      var value = [];\n      label = data.customers.edges.map(function (edge) {\n        return edge.node.displayName;\n      });\n      value = data.customers.edges.map(function (edge) {\n        return edge.node.email;\n      });\n      var FinalList = [{\n        label: '',\n        value: ''\n      }]; // keys.forEach((key, i) => result[key] = values[i]);\n\n      FinalList.forEach(function (i) {\n        FinalList.label = label[i], FinalList.value = value[i];\n      });\n      console.log(\">>>>\", FinalList);\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_ReviewForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              customers: selected,\n              setCustomers: setSelected\n            })\n          })\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Scrollable\"], {\n              shadow: true,\n              style: {\n                height: '300px'\n              },\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"OptionList\"], {\n                title: \"To be added among customers\",\n                onChange: setSelected,\n                allowMultiple: true,\n                options: [{\n                  label: 'BBN Frank',\n                  value: 'abhisheksrivastavabbn@gmail.com'\n                }, {\n                  label: 'Dale Frank',\n                  value: 'abhisheksrivastavabbn@gmail.com'\n                }],\n                selected: selected\n              })\n            })\n          })\n        })]\n      });\n    }\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJHRVRfQ1VTVE9NRVJTIiwiZ3FsIiwiQ3VzdG9tZXJMaXN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwibGFiZWwiLCJ2YWx1ZSIsImN1c3RvbWVycyIsImVkZ2VzIiwibWFwIiwiZWRnZSIsIm5vZGUiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiRmluYWxMaXN0IiwiZm9yRWFjaCIsImkiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxhQUFhLEdBQUdDLHdEQUFILG1CQUFuQjs7QUFjQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ2ZDLFFBRGU7QUFBQSxNQUNMQyxXQURLOztBQUd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLFFBQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTyxTQUFLLEVBQUVKLGFBQWQ7QUFBQSxjQUNHLHdCQUE4QjtBQUFBLFVBQTNCUyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxVQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsVUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLFVBQUlGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUEsUUFBUDtBQUNiLFVBQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLGtCQUFJQSxLQUFLLENBQUNFO0FBQVYsUUFBUDtBQUVYTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0csSUFBMUMsRUFKNkIsQ0FNN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxVQUFJRSxLQUFLLEdBQUcsRUFBWjtBQUNBLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FBRUFELFdBQUssR0FBR0YsSUFBSSxDQUFDSSxTQUFMLENBQWVDLEtBQWYsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFDLElBQUk7QUFBQSxlQUNuQ0EsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFdBRHlCO0FBQUEsT0FBN0IsQ0FBUjtBQUdBTixXQUFLLEdBQUdILElBQUksQ0FBQ0ksU0FBTCxDQUFlQyxLQUFmLENBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxJQUFJO0FBQUEsZUFDbkNBLElBQUksQ0FBQ0MsSUFBTCxDQUFVRSxLQUR5QjtBQUFBLE9BQTdCLENBQVI7QUFJQSxVQUFJQyxTQUFTLEdBQUcsQ0FBQztBQUNmVCxhQUFLLEVBQUUsRUFEUTtBQUVmQyxhQUFLLEVBQUU7QUFGUSxPQUFELENBQWhCLENBdkI2QixDQTJCN0I7O0FBRUFRLGVBQVMsQ0FBQ0MsT0FBVixDQUFrQixVQUFBQyxDQUFDLEVBQUk7QUFDckJGLGlCQUFTLENBQUNULEtBQVYsR0FBaUJBLEtBQUssQ0FBQ1csQ0FBRCxDQUF0QixFQUNBRixTQUFTLENBQUNSLEtBQVYsR0FBaUJBLEtBQUssQ0FBQ1UsQ0FBRCxDQUR0QjtBQUVELE9BSEQ7QUFLQWpCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JjLFNBQXBCO0FBRUEsMEJBQ0UsK0RBQUMsdURBQUQ7QUFBQSxnQ0FDRSw4REFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0IsaUJBQU8sTUFBdkI7QUFBQSxpQ0FDRSw4REFBQywyREFBRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQVksdUJBQVMsRUFBRWxCLFFBQXZCO0FBQWlDLDBCQUFZLEVBQUVDO0FBQS9DO0FBREY7QUFERixVQURGLGVBT0UsOERBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLGlCQUFPLE1BQXZCO0FBQUEsaUNBRUUsOERBQUMscURBQUQ7QUFBQSxtQ0FDRSw4REFBQywyREFBRDtBQUFZLG9CQUFNLE1BQWxCO0FBQW1CLG1CQUFLLEVBQUU7QUFBRW9CLHNCQUFNLEVBQUU7QUFBVixlQUExQjtBQUFBLHFDQUNFLDhEQUFDLDJEQUFEO0FBQ0UscUJBQUssRUFBQyw2QkFEUjtBQUVFLHdCQUFRLEVBQUVwQixXQUZaO0FBR0UsNkJBQWEsTUFIZjtBQUtFLHVCQUFPLEVBQUUsQ0FDUDtBQUNFUSx1QkFBSyxFQUFFLFdBRFQ7QUFFRUMsdUJBQUssRUFBRTtBQUZULGlCQURPLEVBS1A7QUFDRUQsdUJBQUssRUFBRSxZQURUO0FBRUVDLHVCQUFLLEVBQUU7QUFGVCxpQkFMTyxDQUxYO0FBZUUsd0JBQVEsRUFBRVY7QUFmWjtBQURGO0FBREY7QUFGRixVQVBGO0FBQUEsUUFERjtBQWtDRDtBQXZFSCxJQURGO0FBMkVEOztHQW5GUUYsWTs7S0FBQUEsWTtBQXFGTUEsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIEVtcHR5U3RhdGUsIExheW91dCwgT3B0aW9uTGlzdCwgU2Nyb2xsYWJsZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nO1xuaW1wb3J0IFJldmlld0Zvcm0gZnJvbSAnLi9SZXZpZXdGb3JtJztcbmltcG9ydCB7XG4gIFJlc291cmNlTGlzdCxcbiAgU3RhY2ssXG4gIFRleHRTdHlsZSxcbn0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcblxuLypcblxuKiBHZXR0aW5nIExpc3Qgb2YgZXhpc3RpbmcgQ3VzdG9tZXJzIC0+IFNob3BpZnkgQVBJIC0gaGVyZSAoZG9uZSlcblxuKi9cblxuXG5jb25zdCBHRVRfQ1VTVE9NRVJTID0gZ3FsYFxucXVlcnkgZ2V0Q3VzdG9tZXJzIHtcbiAgICBjdXN0b21lcnMgKGZpcnN0OiAzKSB7XG4gICAgICBlZGdlcyB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICBlbWFpbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmZ1bmN0aW9uIEN1c3RvbWVyTGlzdCgpIHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZClcbiAgfSwgW3NlbGVjdGVkXSlcblxuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfQ1VTVE9NRVJTfT5cbiAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJIZXJlJ3MgdGhlIEVOREdBTUUgPT0+PiBcXG5cIiwgZGF0YSlcblxuICAgICAgICAvLyByZXR1cm4gZGF0YS5jdXN0b21lcnMuZWRnZXMubWFwKGVkZ2UgPT4gKFxuICAgICAgICAvLyAgIDxkaXYga2V5PXtlZGdlLm5vZGUuaWR9PlxuICAgICAgICAvLyAgICAgPHA+e2Ake2VkZ2Uubm9kZS5kaXNwbGF5TmFtZX0gYnkgJHtlZGdlLm5vZGUuZW1haWx9YH08L3A+XG4gICAgICAgIC8vICAgPC9kaXY+XG4gICAgICAgIC8vICkpO1xuXG5cbiAgICAgICAgbGV0IGxhYmVsID0gW107XG4gICAgICAgIGxldCB2YWx1ZSA9IFtdO1xuXG4gICAgICAgIGxhYmVsID0gZGF0YS5jdXN0b21lcnMuZWRnZXMubWFwKGVkZ2UgPT4gKFxuICAgICAgICAgIGVkZ2Uubm9kZS5kaXNwbGF5TmFtZVxuICAgICAgICApKTtcbiAgICAgICAgdmFsdWUgPSBkYXRhLmN1c3RvbWVycy5lZGdlcy5tYXAoZWRnZSA9PiAoXG4gICAgICAgICAgZWRnZS5ub2RlLmVtYWlsXG4gICAgICAgICkpO1xuXG4gICAgICAgIGxldCBGaW5hbExpc3QgPSBbe1xuICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfV1cbiAgICAgICAgLy8ga2V5cy5mb3JFYWNoKChrZXksIGkpID0+IHJlc3VsdFtrZXldID0gdmFsdWVzW2ldKTtcblxuICAgICAgICBGaW5hbExpc3QuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICBGaW5hbExpc3QubGFiZWw9IGxhYmVsW2ldLFxuICAgICAgICAgIEZpbmFsTGlzdC52YWx1ZT0gdmFsdWVbaV07XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCI+Pj4+XCIsIEZpbmFsTGlzdClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXlvdXQgPlxuICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZUhhbGY+XG4gICAgICAgICAgICAgIDxFbXB0eVN0YXRlPlxuICAgICAgICAgICAgICAgIDxSZXZpZXdGb3JtIGN1c3RvbWVycz17c2VsZWN0ZWR9IHNldEN1c3RvbWVycz17c2V0U2VsZWN0ZWR9IC8+XG4gICAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG5cbiAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBvbmVIYWxmPlxuXG4gICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxTY3JvbGxhYmxlIHNoYWRvdyBzdHlsZT17eyBoZWlnaHQ6ICczMDBweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8T3B0aW9uTGlzdFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRvIGJlIGFkZGVkIGFtb25nIGN1c3RvbWVyc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZVxuXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0JCTiBGcmFuaycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FiaGlzaGVrc3JpdmFzdGF2YWJibkBnbWFpbC5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhbGUgRnJhbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhYmhpc2hla3NyaXZhc3RhdmFiYm5AZ21haWwuY29tJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbGFibGU+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
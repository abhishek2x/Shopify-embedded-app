webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getCustomers {\\n    customers (first: 3) {\\n      edges {\\n        node {\\n          id\\n          displayName\\n          email\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n/*\n\n* Getting List of existing Customers -> Shopify API - here (done)\n\n*/\n\nvar GET_CUSTOMERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Query\"], {\n    query: GET_CUSTOMERS,\n    children: function children(_ref) {\n      var loading = _ref.loading,\n          error = _ref.error,\n          data = _ref.data;\n      if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: \"Loading...\"\n      });\n      if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: error.message\n      });\n      console.log(\"Here's the ENDGAME \\n\", data);\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"ResourceList\"], {\n          showHeader: true,\n          resourceName: {\n            singular: \"Customer\",\n            plural: \"Customers\"\n          },\n          items: data.customers.edges.node,\n          renderItem: function renderItem(item) {\n            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"ResourceList\"].Item, {\n              id: item.id,\n              accessibilityLabel: \"View details for \".concat(item.displayName),\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"].Item, {\n                  fill: true,\n                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h3\", {\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextStyle\"], {\n                      variation: \"strong\",\n                      children: item.displayName\n                    })\n                  })\n                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"].Item, {\n                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n                    children: email\n                  })\n                })]\n              })\n            });\n          }\n        })\n      }); // return data.customers.edges.map(edge => (\n      //   <div key={edge.node.id}>\n      //     <p>{`${edge.node.displayName} by ${edge.node.email}`}</p>\n      //   </div>\n      // ));\n      // return (\n      //   <Layout >\n      //     <Layout.Section oneHalf>\n      //       <EmptyState>\n      //         <ReviewForm customers={selected} setCustomers={setSelected} />\n      //       </EmptyState>\n      //     </Layout.Section>\n      //     <Layout.Section oneHalf>\n      //       <Card>\n      //         <Scrollable shadow style={{ height: '300px' }}>\n      //           <OptionList\n      //             title=\"To be added among customers\"\n      //             onChange={setSelected}\n      //             allowMultiple\n      //             // options={[\n      //             //   { \n      //             //     label: 'BBN Frank', \n      //             //     value: 'abhisheksrivastavabbn@gmail.com' \n      //             //   },\n      //             //   { \n      //             //     label: 'Dale Frank', \n      //             //     value: 'abhisheksrivastavabbn@gmail.com' \n      //             //   }\n      //             // ]}\n      //             selected={selected}\n      //           />\n      //         </Scrollable>\n      //       </Card>\n      //     </Layout.Section>\n      //   </Layout>\n      // )\n    }\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJHRVRfQ1VTVE9NRVJTIiwiZ3FsIiwiQ3VzdG9tZXJMaXN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJjdXN0b21lcnMiLCJlZGdlcyIsIm5vZGUiLCJpdGVtIiwiaWQiLCJkaXNwbGF5TmFtZSIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHQyx3REFBSCxtQkFBbkI7O0FBY0EsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNmQyxRQURlO0FBQUEsTUFDTEMsV0FESzs7QUFHdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVDtBQUtBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU8sU0FBSyxFQUFFSixhQUFkO0FBQUEsY0FDRyx3QkFBOEI7QUFBQSxVQUEzQlMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsVUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLFVBQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QixVQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBLFFBQVA7QUFDYixVQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxrQkFBSUEsS0FBSyxDQUFDRTtBQUFWLFFBQVA7QUFFWEwsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNHLElBQXJDO0FBRUEsMEJBQ0UsOERBQUMscURBQUQ7QUFBQSwrQkFDRSw4REFBQyw2REFBRDtBQUNFLG9CQUFVLE1BRFo7QUFFRSxzQkFBWSxFQUFFO0FBQUVFLG9CQUFRLEVBQUUsVUFBWjtBQUF3QkMsa0JBQU0sRUFBRTtBQUFoQyxXQUZoQjtBQUdFLGVBQUssRUFBRUgsSUFBSSxDQUFDSSxTQUFMLENBQWVDLEtBQWYsQ0FBcUJDLElBSDlCO0FBSUUsb0JBQVUsRUFBRSxvQkFBQ0MsSUFBRCxFQUFVO0FBQ3BCLGdDQUNFLDhEQUFDLDZEQUFELENBQWMsSUFBZDtBQUNFLGdCQUFFLEVBQUVBLElBQUksQ0FBQ0MsRUFEWDtBQUVFLGdDQUFrQiw2QkFBc0JELElBQUksQ0FBQ0UsV0FBM0IsQ0FGcEI7QUFBQSxxQ0FJRSwrREFBQyxzREFBRDtBQUFBLHdDQUNFLDhEQUFDLHNEQUFELENBQU8sSUFBUDtBQUFZLHNCQUFJLE1BQWhCO0FBQUEseUNBQ0U7QUFBQSwyQ0FDRSw4REFBQywwREFBRDtBQUFXLCtCQUFTLEVBQUMsUUFBckI7QUFBQSxnQ0FDR0YsSUFBSSxDQUFDRTtBQURSO0FBREY7QUFERixrQkFERixlQVFFLDhEQUFDLHNEQUFELENBQU8sSUFBUDtBQUFBLHlDQUNFO0FBQUEsOEJBQUlDO0FBQUo7QUFERixrQkFSRjtBQUFBO0FBSkYsY0FERjtBQW1CRDtBQXhCSDtBQURGLFFBREYsQ0FONkIsQ0FxQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBOUVILElBREY7QUFrRkQ7O0dBMUZRbkIsWTs7S0FBQUEsWTtBQTRGTUEsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIEVtcHR5U3RhdGUsIExheW91dCwgT3B0aW9uTGlzdCwgU2Nyb2xsYWJsZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nO1xuaW1wb3J0IFJldmlld0Zvcm0gZnJvbSAnLi9SZXZpZXdGb3JtJztcbmltcG9ydCB7XG4gIFJlc291cmNlTGlzdCxcbiAgU3RhY2ssXG4gIFRleHRTdHlsZSxcbn0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcblxuLypcblxuKiBHZXR0aW5nIExpc3Qgb2YgZXhpc3RpbmcgQ3VzdG9tZXJzIC0+IFNob3BpZnkgQVBJIC0gaGVyZSAoZG9uZSlcblxuKi9cblxuXG5jb25zdCBHRVRfQ1VTVE9NRVJTID0gZ3FsYFxucXVlcnkgZ2V0Q3VzdG9tZXJzIHtcbiAgICBjdXN0b21lcnMgKGZpcnN0OiAzKSB7XG4gICAgICBlZGdlcyB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICBlbWFpbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmZ1bmN0aW9uIEN1c3RvbWVyTGlzdCgpIHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZClcbiAgfSwgW3NlbGVjdGVkXSlcblxuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfQ1VTVE9NRVJTfT5cbiAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJIZXJlJ3MgdGhlIEVOREdBTUUgXFxuXCIsIGRhdGEpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgc2hvd0hlYWRlclxuICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6IFwiQ3VzdG9tZXJcIiwgcGx1cmFsOiBcIkN1c3RvbWVyc1wiIH19XG4gICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLmN1c3RvbWVycy5lZGdlcy5ub2RlfVxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLmRpc3BsYXlOYW1lfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKTtcblxuICAgICAgICAvLyByZXR1cm4gZGF0YS5jdXN0b21lcnMuZWRnZXMubWFwKGVkZ2UgPT4gKFxuICAgICAgICAvLyAgIDxkaXYga2V5PXtlZGdlLm5vZGUuaWR9PlxuICAgICAgICAvLyAgICAgPHA+e2Ake2VkZ2Uubm9kZS5kaXNwbGF5TmFtZX0gYnkgJHtlZGdlLm5vZGUuZW1haWx9YH08L3A+XG4gICAgICAgIC8vICAgPC9kaXY+XG4gICAgICAgIC8vICkpO1xuXG4gICAgICAgIC8vIHJldHVybiAoXG4gICAgICAgIC8vICAgPExheW91dCA+XG4gICAgICAgIC8vICAgICA8TGF5b3V0LlNlY3Rpb24gb25lSGFsZj5cbiAgICAgICAgLy8gICAgICAgPEVtcHR5U3RhdGU+XG4gICAgICAgIC8vICAgICAgICAgPFJldmlld0Zvcm0gY3VzdG9tZXJzPXtzZWxlY3RlZH0gc2V0Q3VzdG9tZXJzPXtzZXRTZWxlY3RlZH0gLz5cbiAgICAgICAgLy8gICAgICAgPC9FbXB0eVN0YXRlPlxuICAgICAgICAvLyAgICAgPC9MYXlvdXQuU2VjdGlvbj5cblxuICAgICAgICAvLyAgICAgPExheW91dC5TZWN0aW9uIG9uZUhhbGY+XG5cbiAgICAgICAgLy8gICAgICAgPENhcmQ+XG4gICAgICAgIC8vICAgICAgICAgPFNjcm9sbGFibGUgc2hhZG93IHN0eWxlPXt7IGhlaWdodDogJzMwMHB4JyB9fT5cbiAgICAgICAgLy8gICAgICAgICAgIDxPcHRpb25MaXN0XG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlPVwiVG8gYmUgYWRkZWQgYW1vbmcgY3VzdG9tZXJzXCJcbiAgICAgICAgLy8gICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkfVxuICAgICAgICAvLyAgICAgICAgICAgICBhbGxvd011bHRpcGxlXG5cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gb3B0aW9ucz17W1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgIHsgXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBsYWJlbDogJ0JCTiBGcmFuaycsIFxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgdmFsdWU6ICdhYmhpc2hla3NyaXZhc3RhdmFiYm5AZ21haWwuY29tJyBcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgIHsgXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBsYWJlbDogJ0RhbGUgRnJhbmsnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHZhbHVlOiAnYWJoaXNoZWtzcml2YXN0YXZhYmJuQGdtYWlsLmNvbScgXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBdfVxuICAgICAgICAvLyAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgIDwvU2Nyb2xsYWJsZT5cbiAgICAgICAgLy8gICAgICAgPC9DYXJkPlxuICAgICAgICAvLyAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgLy8gICA8L0xheW91dD5cbiAgICAgICAgLy8gKVxuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckxpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
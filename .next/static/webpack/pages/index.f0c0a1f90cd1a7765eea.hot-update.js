webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CustomerList.js":
/*!************************************!*\
  !*** ./components/CustomerList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewForm */ \"./components/ReviewForm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getCustomers {\\n    customers (first: 3) {\\n      edges {\\n        node {\\n          id\\n          displayName\\n          email\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n/*\n\n* Getting List of existing Customers -> Shopify API - here (done)\n\n*/\n\nvar GET_CUSTOMERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nfunction CustomerList() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log(selected);\n  }, [selected]);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Query\"], {\n    query: GET_CUSTOMERS,\n    children: function children(_ref) {\n      var loading = _ref.loading,\n          error = _ref.error,\n          data = _ref.data;\n      if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: \"Loading...\"\n      });\n      if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n        children: error.message\n      });\n      console.log(\"Here's the ENDGAME ==>> \\n\", data); // return data.customers.edges.map(edge => (\n      //   <div key={edge.node.id}>\n      //     <p>{`${edge.node.displayName} by ${edge.node.email}`}</p>\n      //   </div>\n      // ));\n\n      var label = [];\n      var value = [];\n      label = data.customers.edges.map(function (edge) {\n        return edge.node.displayName;\n      });\n      value = data.customers.edges.map(function (edge) {\n        return edge.node.email;\n      }); // let FinalList = [{\n      //   label: '',\n      //   value: ''\n      // }]\n      // keys.forEach((key, i) => result[key] = values[i]);\n      // var firstArray = ['John', 'David', 'Bob'];\n      // var secondArray = ['Mike','Sam','Carol'];\n\n      var arrayOfObject = label.map(function (value, index) {\n        return [value, email[index]];\n      });\n      console.log(\">>>>\", arrayOfObject);\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_ReviewForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              customers: selected,\n              setCustomers: setSelected\n            })\n          })\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          oneHalf: true,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Scrollable\"], {\n              shadow: true,\n              style: {\n                height: '300px'\n              },\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"OptionList\"], {\n                title: \"To be added among customers\",\n                onChange: setSelected,\n                allowMultiple: true,\n                options: [{\n                  label: 'BBN Frank',\n                  value: 'abhisheksrivastavabbn@gmail.com'\n                }, {\n                  label: 'Dale Frank',\n                  value: 'abhisheksrivastavabbn@gmail.com'\n                }],\n                selected: selected\n              })\n            })\n          })\n        })]\n      });\n    }\n  });\n}\n\n_s(CustomerList, \"239Ve9yO4iC/9vfIgHzDkghA5LI=\");\n\n_c = CustomerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomerList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/ODUyNyJdLCJuYW1lcyI6WyJHRVRfQ1VTVE9NRVJTIiwiZ3FsIiwiQ3VzdG9tZXJMaXN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwibGFiZWwiLCJ2YWx1ZSIsImN1c3RvbWVycyIsImVkZ2VzIiwibWFwIiwiZWRnZSIsIm5vZGUiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiYXJyYXlPZk9iamVjdCIsImluZGV4IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHQyx3REFBSCxtQkFBbkI7O0FBY0EsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNmQyxRQURlO0FBQUEsTUFDTEMsV0FESzs7QUFHdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVDtBQUtBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU8sU0FBSyxFQUFFSixhQUFkO0FBQUEsY0FDRyx3QkFBOEI7QUFBQSxVQUEzQlMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsVUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLFVBQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QixVQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBLFFBQVA7QUFDYixVQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxrQkFBSUEsS0FBSyxDQUFDRTtBQUFWLFFBQVA7QUFFWEwsYUFBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosRUFBMENHLElBQTFDLEVBSjZCLENBTTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsVUFBSUUsS0FBSyxHQUFHLEVBQVo7QUFDQSxVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBRCxXQUFLLEdBQUdGLElBQUksQ0FBQ0ksU0FBTCxDQUFlQyxLQUFmLENBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxJQUFJO0FBQUEsZUFDbkNBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxXQUR5QjtBQUFBLE9BQTdCLENBQVI7QUFHQU4sV0FBSyxHQUFHSCxJQUFJLENBQUNJLFNBQUwsQ0FBZUMsS0FBZixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQUMsSUFBSTtBQUFBLGVBQ25DQSxJQUFJLENBQUNDLElBQUwsQ0FBVUUsS0FEeUI7QUFBQSxPQUE3QixDQUFSLENBbkI2QixDQXVCN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBSUMsYUFBYSxHQUFHVCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFVSCxLQUFWLEVBQWlCUyxLQUFqQixFQUF1QjtBQUNsRCxlQUFPLENBQUNULEtBQUQsRUFBUU8sS0FBSyxDQUFDRSxLQUFELENBQWIsQ0FBUDtBQUNGLE9BRm1CLENBQXBCO0FBSUFoQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CYyxhQUFwQjtBQUVBLDBCQUNFLCtEQUFDLHVEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLGlCQUFPLE1BQXZCO0FBQUEsaUNBQ0UsOERBQUMsMkRBQUQ7QUFBQSxtQ0FDRSw4REFBQyxtREFBRDtBQUFZLHVCQUFTLEVBQUVsQixRQUF2QjtBQUFpQywwQkFBWSxFQUFFQztBQUEvQztBQURGO0FBREYsVUFERixlQU9FLDhEQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixpQkFBTyxNQUF2QjtBQUFBLGlDQUVFLDhEQUFDLHFEQUFEO0FBQUEsbUNBQ0UsOERBQUMsMkRBQUQ7QUFBWSxvQkFBTSxNQUFsQjtBQUFtQixtQkFBSyxFQUFFO0FBQUVtQixzQkFBTSxFQUFFO0FBQVYsZUFBMUI7QUFBQSxxQ0FDRSw4REFBQywyREFBRDtBQUNFLHFCQUFLLEVBQUMsNkJBRFI7QUFFRSx3QkFBUSxFQUFFbkIsV0FGWjtBQUdFLDZCQUFhLE1BSGY7QUFLRSx1QkFBTyxFQUFFLENBQ1A7QUFDRVEsdUJBQUssRUFBRSxXQURUO0FBRUVDLHVCQUFLLEVBQUU7QUFGVCxpQkFETyxFQUtQO0FBQ0VELHVCQUFLLEVBQUUsWUFEVDtBQUVFQyx1QkFBSyxFQUFFO0FBRlQsaUJBTE8sQ0FMWDtBQWVFLHdCQUFRLEVBQUVWO0FBZlo7QUFERjtBQURGO0FBRkYsVUFQRjtBQUFBLFFBREY7QUFrQ0Q7QUF4RUgsSUFERjtBQTRFRDs7R0FwRlFGLFk7O0tBQUFBLFk7QUFzRk1BLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DdXN0b21lckxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBFbXB0eVN0YXRlLCBMYXlvdXQsIE9wdGlvbkxpc3QsIFNjcm9sbGFibGUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCBSZXZpZXdGb3JtIGZyb20gJy4vUmV2aWV3Rm9ybSc7XG5pbXBvcnQge1xuICBSZXNvdXJjZUxpc3QsXG4gIFN0YWNrLFxuICBUZXh0U3R5bGUsXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5cbi8qXG5cbiogR2V0dGluZyBMaXN0IG9mIGV4aXN0aW5nIEN1c3RvbWVycyAtPiBTaG9waWZ5IEFQSSAtIGhlcmUgKGRvbmUpXG5cbiovXG5cblxuY29uc3QgR0VUX0NVU1RPTUVSUyA9IGdxbGBcbnF1ZXJ5IGdldEN1c3RvbWVycyB7XG4gICAgY3VzdG9tZXJzIChmaXJzdDogMykge1xuICAgICAgZWRnZXMge1xuICAgICAgICBub2RlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgZW1haWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5mdW5jdGlvbiBDdXN0b21lckxpc3QoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWQpXG4gIH0sIFtzZWxlY3RlZF0pXG5cblxuICByZXR1cm4gKFxuICAgIDxRdWVyeSBxdWVyeT17R0VUX0NVU1RPTUVSU30+XG4gICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8cD57ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVyZSdzIHRoZSBFTkRHQU1FID09Pj4gXFxuXCIsIGRhdGEpXG5cbiAgICAgICAgLy8gcmV0dXJuIGRhdGEuY3VzdG9tZXJzLmVkZ2VzLm1hcChlZGdlID0+IChcbiAgICAgICAgLy8gICA8ZGl2IGtleT17ZWRnZS5ub2RlLmlkfT5cbiAgICAgICAgLy8gICAgIDxwPntgJHtlZGdlLm5vZGUuZGlzcGxheU5hbWV9IGJ5ICR7ZWRnZS5ub2RlLmVtYWlsfWB9PC9wPlxuICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAvLyApKTtcblxuXG4gICAgICAgIGxldCBsYWJlbCA9IFtdO1xuICAgICAgICBsZXQgdmFsdWUgPSBbXTtcblxuICAgICAgICBsYWJlbCA9IGRhdGEuY3VzdG9tZXJzLmVkZ2VzLm1hcChlZGdlID0+IChcbiAgICAgICAgICBlZGdlLm5vZGUuZGlzcGxheU5hbWVcbiAgICAgICAgKSk7XG4gICAgICAgIHZhbHVlID0gZGF0YS5jdXN0b21lcnMuZWRnZXMubWFwKGVkZ2UgPT4gKFxuICAgICAgICAgIGVkZ2Uubm9kZS5lbWFpbFxuICAgICAgICApKTtcblxuICAgICAgICAvLyBsZXQgRmluYWxMaXN0ID0gW3tcbiAgICAgICAgLy8gICBsYWJlbDogJycsXG4gICAgICAgIC8vICAgdmFsdWU6ICcnXG4gICAgICAgIC8vIH1dXG4gICAgICAgIC8vIGtleXMuZm9yRWFjaCgoa2V5LCBpKSA9PiByZXN1bHRba2V5XSA9IHZhbHVlc1tpXSk7XG4gICAgICAgIC8vIHZhciBmaXJzdEFycmF5ID0gWydKb2huJywgJ0RhdmlkJywgJ0JvYiddO1xuICAgICAgICAvLyB2YXIgc2Vjb25kQXJyYXkgPSBbJ01pa2UnLCdTYW0nLCdDYXJvbCddO1xuXG4gICAgICAgIHZhciBhcnJheU9mT2JqZWN0ID0gbGFiZWwubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpe1xuICAgICAgICAgICByZXR1cm4gW3ZhbHVlLCBlbWFpbFtpbmRleF1dXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+PlwiLCBhcnJheU9mT2JqZWN0KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExheW91dCA+XG4gICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gb25lSGFsZj5cbiAgICAgICAgICAgICAgPEVtcHR5U3RhdGU+XG4gICAgICAgICAgICAgICAgPFJldmlld0Zvcm0gY3VzdG9tZXJzPXtzZWxlY3RlZH0gc2V0Q3VzdG9tZXJzPXtzZXRTZWxlY3RlZH0gLz5cbiAgICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxuICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cblxuICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZUhhbGY+XG5cbiAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPFNjcm9sbGFibGUgc2hhZG93IHN0eWxlPXt7IGhlaWdodDogJzMwMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxPcHRpb25MaXN0XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVG8gYmUgYWRkZWQgYW1vbmcgY3VzdG9tZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlXG5cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQkJOIEZyYW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYWJoaXNoZWtzcml2YXN0YXZhYmJuQGdtYWlsLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGFsZSBGcmFuaycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FiaGlzaGVrc3JpdmFzdGF2YWJibkBnbWFpbC5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckxpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CustomerList.js\n");

/***/ })

})
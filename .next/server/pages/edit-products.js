module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`\n  mutation productVariantUpdate($input: ProductVariantInput!) {\n    productVariantUpdate(input: $input) {\n      product {\n        title\n      }\n      productVariant {\n        id\n        price\n      }\n    }\n  }\n`;\n\nclass EditProduct extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: \"\",\n      price: \"\",\n      variantId: \"\",\n      showToast: false\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"itemToBeConsumed\", () => {\n      const item = store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"item\");\n      const price = item.variants.edges[0].node.price;\n      const variantId = item.variants.edges[0].node.id;\n      const discounter = price * 0.1;\n      this.setState({\n        price,\n        variantId\n      });\n      return (price - discounter).toFixed(2);\n    });\n  }\n\n  componentDidMount() {\n    this.setState({\n      discount: this.itemToBeConsumed()\n    });\n  }\n\n  render() {\n    const {\n      name,\n      price,\n      discount,\n      variantId\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Mutation\"], {\n      mutation: UPDATE_PRICE,\n      children: (handleSubmit, {\n        error,\n        data\n      }) => {\n        const showError = error && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n          status: \"critical\",\n          children: error.message\n        });\n\n        const showToast = data && data.productVariantUpdate && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Toast\"], {\n          content: \"Sucessfully updated\",\n          onDismiss: () => this.setState({\n            showToast: false\n          })\n        });\n\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Frame\"], {\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n              children: [showToast, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n                children: showError\n              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"DisplayText\"], {\n                  size: \"large\",\n                  children: name\n                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n                    sectioned: true,\n                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"].Group, {\n                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: price,\n                          disabled: true,\n                          label: \"Original price\",\n                          type: \"price\"\n                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: discount,\n                          onChange: this.handleChange(\"discount\"),\n                          label: \"Discounted price\",\n                          type: \"discount\"\n                        })]\n                      })\n                    })\n                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"PageActions\"], {\n                    primaryAction: [{\n                      content: \"Save\",\n                      onAction: () => {\n                        const productVariableInput = {\n                          id: variantId,\n                          price: discount\n                        };\n                        handleSubmit({\n                          variables: {\n                            input: productVariableInput\n                          }\n                        });\n                      }\n                    }],\n                    secondaryActions: [{\n                      content: \"Remove discount\"\n                    }]\n                  })]\n                })]\n              })]\n            })\n          })\n        });\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzPzg4MzIiXSwibmFtZXMiOlsiVVBEQVRFX1BSSUNFIiwiZ3FsIiwiRWRpdFByb2R1Y3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW1Ub0JlQ29uc3VtZWQiLCJyZW5kZXIiLCJuYW1lIiwic3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwicHJvZHVjdFZhcmlhbnRVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJwcm9kdWN0VmFyaWFibGVJbnB1dCIsInZhcmlhYmxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxrREFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTs7QUFjQSxNQUFNQyxXQUFOLFNBQTBCQyw0Q0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUFBO0FBQUE7O0FBQUEsbUNBQ2hDO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLFdBQUssRUFBRSxFQUZEO0FBR05DLGVBQVMsRUFBRSxFQUhMO0FBSU5DLGVBQVMsRUFBRTtBQUpMLEtBRGdDOztBQUFBLDBDQTRGeEJDLEtBQUQsSUFBVztBQUN4QixhQUFRQyxLQUFELElBQVcsS0FBS0MsUUFBTCxDQUFjO0FBQUUsU0FBQ0YsS0FBRCxHQUFTQztBQUFYLE9BQWQs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O0FBRm9CLHlCQUE3QjtBQUlBcUIsb0NBQVksQ0FBQztBQUNYVSxtQ0FBUyxFQUFFO0FBQUVDLGlDQUFLLEVBQUVGO0FBQVQ7QUFEQSx5QkFBRCxDQUFaO0FBR0Q7QUFWSCxxQkFEYSxDQURqQjtBQWVFLG9DQUFnQixFQUFFLENBQ2hCO0FBQ0VGLDZCQUFPLEVBQUU7QUFEWCxxQkFEZ0I7QUFmcEIsb0JBckJGO0FBQUEsa0JBRkY7QUFBQSxnQkFMRjtBQUFBO0FBREY7QUFERixVQURGO0FBMEREO0FBeEVILE1BREY7QUE0RUQ7O0FBMUZ1Qzs7QUEwRzNCL0IsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQmFubmVyLFxuICBDYXJkLFxuICBEaXNwbGF5VGV4dCxcbiAgRm9ybSxcbiAgRm9ybUxheW91dCxcbiAgRnJhbWUsXG4gIExheW91dCxcbiAgUGFnZSxcbiAgUGFnZUFjdGlvbnMsXG4gIFRleHRGaWVsZCxcbiAgVG9hc3QsXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlLWpzXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5cbmNvbnN0IFVQREFURV9QUklDRSA9IGdxbGBcbiAgbXV0YXRpb24gcHJvZHVjdFZhcmlhbnRVcGRhdGUoJGlucHV0OiBQcm9kdWN0VmFyaWFudElucHV0ISkge1xuICAgIHByb2R1Y3RWYXJpYW50VXBkYXRlKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHByb2R1Y3Qge1xuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgICAgcHJvZHVjdFZhcmlhbnQge1xuICAgICAgICBpZFxuICAgICAgICBwcmljZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY2xhc3MgRWRpdFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaXNjb3VudDogXCJcIixcbiAgICBwcmljZTogXCJcIixcbiAgICB2YXJpYW50SWQ6IFwiXCIsXG4gICAgc2hvd1RvYXN0OiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzY291bnQ6IHRoaXMuaXRlbVRvQmVDb25zdW1lZCgpIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UsIGRpc2NvdW50LCB2YXJpYW50SWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNdXRhdGlvbiBtdXRhdGlvbj17VVBEQVRFX1BSSUNFfT5cbiAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHsgZXJyb3IsIGRhdGEgfSkgPT4ge1xuXG4gICAgICAgICAgY29uc3Qgc2hvd0Vycm9yID0gZXJyb3IgJiYgKFxuICAgICAgICAgICAgPEJhbm5lciBzdGF0dXM9XCJjcml0aWNhbFwiPntlcnJvci5tZXNzYWdlfTwvQmFubmVyPlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBzaG93VG9hc3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdFZhcmlhbnRVcGRhdGUgJiYgKFxuICAgICAgICAgICAgPFRvYXN0XG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJTdWNlc3NmdWxseSB1cGRhdGVkXCJcbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICB7c2hvd1RvYXN0fVxuICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yfVxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJsYXJnZVwiPntuYW1lfTwvRGlzcGxheVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dC5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoXCJkaXNjb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnRlZCBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlNhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhYmxlSW5wdXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB2YXJpYW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBkaXNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHByb2R1Y3RWYXJpYWJsZUlucHV0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVtb3ZlIGRpc2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgIDwvRnJhbWU+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvTXV0YXRpb24+XG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xuICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBpdGVtVG9CZUNvbnN1bWVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBzdG9yZS5nZXQoXCJpdGVtXCIpO1xuICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xuICAgIGNvbnN0IHZhcmlhbnRJZCA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5pZDtcbiAgICBjb25zdCBkaXNjb3VudGVyID0gcHJpY2UgKiAwLjE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlLCB2YXJpYW50SWQgfSk7XG4gICAgcmV0dXJuIChwcmljZSAtIGRpc2NvdW50ZXIpLnRvRml4ZWQoMik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/edit-products.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });
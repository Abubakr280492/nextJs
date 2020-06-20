webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/Prices.js":
/*!*****************************!*\
  !*** ./component/Prices.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "C:\\Users\\Abubakr\\Documents\\1\\nextJs\\BitzPrize\\component\\Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// class Prices extends React.Component{
//     state= {
//         currency: 'USD'
//     }
//     render(){
//         return (
//             <div>
//                 <ul className='list-group'>
//                     <li className="list-group-item" >
//                         Bitcoin rate for {this.props.bpi.USD.description}: <span
//                         class='badge badge-primary'>{this.props.bpi.USD.code}</span>
//                         <strong>{this.props.bpi.USD.rate}</strong> 
//                     </li>
//                 </ul>
//             </div>
//         );
//      }
// }
// export default Prices;
var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var list = '';

      if (this.state.currency === 'USD') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 20
          }
        }, "Bitcoin rate for ", this.props.bpi.USDdescription, ": ", __jsx("span", {
          "class": "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 63
          }
        }, this.props.bpi.USDcode), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }
        }, this.props.bpi.USDrate));
      } else if (this.state.currency === 'GBP') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 20
          }
        }, "Bitcoin rate for ", this.props.bpi.USDdescription, ": ", __jsx("span", {
          "class": "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 63
          }
        }, this.props.bpi.USDcode), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }
        }, this.props.bpi.USDrate));
      } else if (this.state.currency === 'EUR') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 20
          }
        }, "Bitcoin rate for ", this.props.bpi.USDdescription, ": ", __jsx("span", {
          "class": "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 63
          }
        }, this.props.bpi.USDcode), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }
        }, this.props.bpi.USDrate));
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHJpY2VzLmpzIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwibGlzdCIsInN0YXRlIiwicHJvcHMiLCJicGkiLCJVU0RkZXNjcmlwdGlvbiIsIlVTRGNvZGUiLCJVU0RyYXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7SUFNTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSztBQUNIQyxjQUFRLEVBQUU7QUFEUCxLOzs7Ozs7OzZCQUlDO0FBQ0osVUFBSUMsSUFBSSxHQUFDLEVBQVQ7O0FBR0EsVUFBRyxLQUFLQyxLQUFMLENBQVdGLFFBQVgsS0FBd0IsS0FBM0IsRUFBaUM7QUFDN0JDLFlBQUksR0FBRztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDVyxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsY0FEMUIsUUFDMkM7QUFDbEQsbUJBQU0scUJBRDRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDckIsS0FBS0YsS0FBTCxDQUFXQyxHQUFYLENBQWVFLE9BRE0sQ0FEM0MsRUFHUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVHLE9BQXhCLENBSE8sQ0FBUDtBQUtILE9BTkQsTUFPSyxJQUFJLEtBQUtMLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUE1QixFQUFrQztBQUNuQ0MsWUFBSSxHQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNXLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxjQUQxQixRQUMyQztBQUNsRCxtQkFBTSxxQkFENEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNyQixLQUFLRixLQUFMLENBQVdDLEdBQVgsQ0FBZUUsT0FETSxDQUQzQyxFQUdQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUcsT0FBeEIsQ0FITyxDQUFQO0FBSUgsT0FMSSxNQU1BLElBQUksS0FBS0wsS0FBTCxDQUFXRixRQUFYLEtBQXdCLEtBQTVCLEVBQWtDO0FBQ25DQyxZQUFJLEdBQUc7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ1csS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQWVDLGNBRDFCLFFBQzJDO0FBQ2xELG1CQUFNLHFCQUQ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ3JCLEtBQUtGLEtBQUwsQ0FBV0MsR0FBWCxDQUFlRSxPQURNLENBRDNDLEVBR1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFTLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlRyxPQUF4QixDQUhPLENBQVA7QUFJSDs7QUFDRCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESjtBQVFGOzs7O0VBcENlQyw0Q0FBSyxDQUFDQyxTOztBQXVDWlYscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjUwYTA1N2YzODQxMzkxNDg0OWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIGNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuLy8gICAgIHN0YXRlPSB7XHJcbi8vICAgICAgICAgY3VycmVuY3k6ICdVU0QnXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmVuZGVyKCl7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn06IDxzcGFuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz4gXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8L3VsPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHN0YXRlPSB7XHJcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGxpc3Q9Jyc7XHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIgPlxyXG4gICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5VU0RkZXNjcmlwdGlvbn06IDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57dGhpcy5wcm9wcy5icGkuVVNEY29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRHJhdGV9PC9zdHJvbmc+PC9saT5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdHQlAnKXtcclxuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiA+XHJcbiAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRGRlc2NyaXB0aW9ufTogPHNwYW5cclxuICAgICAgICAgICAgY2xhc3M9J2JhZGdlIGJhZGdlLXByaW1hcnknPnt0aGlzLnByb3BzLmJwaS5VU0Rjb2RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNEcmF0ZX08L3N0cm9uZz48L2xpPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIgPlxyXG4gICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5VU0RkZXNjcmlwdGlvbn06IDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57dGhpcy5wcm9wcy5icGkuVVNEY29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRHJhdGV9PC9zdHJvbmc+PC9saT5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==
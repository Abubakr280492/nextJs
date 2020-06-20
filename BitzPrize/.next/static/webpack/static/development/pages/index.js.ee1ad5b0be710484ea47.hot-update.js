webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/layouts */ "./component/layouts.js");
/* harmony import */ var _component_Prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Prices */ "./component/Prices.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Abubakr\\Documents\\1\\nextJs\\BitzPrize\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
//1st
//export default()=> (<div>Hello NEXT.JS</div>)
//2nd
// const Index = () => (
//     <div>
//         <h1>Hello NEXT.JS</h1>
//         </div>
// );
// export default Index;
// //npm run dev
//3 rd
// import Link from 'next/link';
// const Index = () => (
//     <div>
//         <ul>
//             <li><Link href='/'><a>Home</a></Link></li>
//             <li><Link href='/about'><a>About</a></Link></li>
//         </ul>
//         <h1>Hello welcome to Homepage NEXT.JS</h1>
//         </div>
// );
// export default Index;
//4th




var Index = function Index(props) {
  return __jsx(_component_layouts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 1
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Welcome to BitzPrice"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Check current bitcoin rate "), __jsx(_component_Prices__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bpi: props.bpi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
};

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            bpi: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index); //npm install isomorphic-unfetch

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiYnBpIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2QsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUhKLEVBSUksTUFBQyx5REFBRDtBQUFRLE9BQUcsRUFBRUEsS0FBSyxDQUFDQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixDQURjO0FBQUEsQ0FBZDs7S0FBTUYsSztBQVlOQSxLQUFLLENBQUNHLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0ZDLEtBQUssQ0FBQyxtREFBRCxDQURIOztBQUFBO0FBQ2RDLGFBRGM7QUFBQTtBQUFBLGlCQUVEQSxHQUFHLENBQUNDLElBQUosRUFGQzs7QUFBQTtBQUVkQyxjQUZjO0FBQUEsMkNBSWQ7QUFDRkwsZUFBRyxFQUFFSztBQURILFdBSmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFXZVAsb0VBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lZTFhZDViMGJlNzEwNDg0ZWE0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vMXN0XHJcbi8vZXhwb3J0IGRlZmF1bHQoKT0+ICg8ZGl2PkhlbGxvIE5FWFQuSlM8L2Rpdj4pXHJcblxyXG5cclxuXHJcbi8vMm5kXHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgICAgPGgxPkhlbGxvIE5FWFQuSlM8L2gxPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyApO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcblxyXG4vLyAvL25wbSBydW4gZGV2XHJcblxyXG4vLzMgcmRcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIDx1bD5cclxuLy8gICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9Jy8nPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XHJcbi8vICAgICAgICAgICAgIDxsaT48TGluayBocmVmPScvYWJvdXQnPjxhPkFib3V0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICBcclxuXHJcbi8vICAgICAgICAgPC91bD5cclxuLy8gICAgICAgICA8aDE+SGVsbG8gd2VsY29tZSB0byBIb21lcGFnZSBORVhULkpTPC9oMT5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG5cclxuXHJcbi8vNHRoXHJcbmltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9sYXlvdXRzJztcclxuaW1wb3J0IFByaWNlcyBmcm9tICcuLi9jb21wb25lbnQvUHJpY2VzJztcclxuXHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxyXG48TGF5b3V0PiAgICAgICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5XZWxjb21lIHRvIEJpdHpQcmljZTwvaDE+XHJcbiAgICAgICAgey8qIHtwcm9wcy5icGkudGltZS51cGRhdGVkfSAqL31cclxuICAgICAgICA8cD5DaGVjayBjdXJyZW50IGJpdGNvaW4gcmF0ZSA8L3A+XHJcbiAgICAgICAgPFByaWNlcyBicGk9e3Byb3BzLmJwaX0vPlxyXG4gICAgPC9kaXY+XHJcbjwvTGF5b3V0PlxyXG5cclxuKTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbicpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGJwaTogZGF0YVxyXG4gICAgfTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcbi8vbnBtIGluc3RhbGwgaXNvbW9ycGhpYy11bmZldGNoIl0sInNvdXJjZVJvb3QiOiIifQ==
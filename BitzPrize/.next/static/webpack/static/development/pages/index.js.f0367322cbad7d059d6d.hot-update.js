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
      lineNumber: 40,
      columnNumber: 1
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Welcome to BitzPrice"), props.bpi.time.updated));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiYnBpIiwidGltZSIsInVwZGF0ZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDZCxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixFQUVLQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixDQUFlQyxPQUZwQixDQURKLENBRGM7QUFBQSxDQUFkOztLQUFNSixLO0FBVU5BLEtBQUssQ0FBQ0ssZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDRkMsS0FBSyxDQUFDLG1EQUFELENBREg7O0FBQUE7QUFDZEMsYUFEYztBQUFBO0FBQUEsaUJBRURBLEdBQUcsQ0FBQ0MsSUFBSixFQUZDOztBQUFBO0FBRWRDLGNBRmM7QUFBQSwyQ0FJZDtBQUNGUCxlQUFHLEVBQUVPO0FBREgsV0FKYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVdlVCxvRUFBZixFLENBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmYwMzY3MzIyY2JhZDdkMDU5ZDZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8xc3RcclxuLy9leHBvcnQgZGVmYXVsdCgpPT4gKDxkaXY+SGVsbG8gTkVYVC5KUzwvZGl2PilcclxuXHJcblxyXG5cclxuLy8ybmRcclxuXHJcbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgICA8aDE+SGVsbG8gTkVYVC5KUzwvaDE+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuXHJcbi8vIC8vbnBtIHJ1biBkZXZcclxuXHJcbi8vMyByZFxyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgICAgPHVsPlxyXG4vLyAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj0nLyc+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cclxuLy8gICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9Jy9hYm91dCc+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIFxyXG5cclxuLy8gICAgICAgICA8L3VsPlxyXG4vLyAgICAgICAgIDxoMT5IZWxsbyB3ZWxjb21lIHRvIEhvbWVwYWdlIE5FWFQuSlM8L2gxPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyApO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcblxyXG5cclxuLy80dGhcclxuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L2xheW91dHMnO1xyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxyXG48TGF5b3V0PiAgICAgICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5XZWxjb21lIHRvIEJpdHpQcmljZTwvaDE+XHJcbiAgICAgICAge3Byb3BzLmJwaS50aW1lLnVwZGF0ZWR9XHJcbiAgICA8L2Rpdj5cclxuPC9MYXlvdXQ+XHJcblxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS5qc29uJyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgYnBpOiBkYXRhXHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuLy9ucG0gaW5zdGFsbCBpc29tb3JwaGljLXVuZmV0Y2giXSwic291cmNlUm9vdCI6IiJ9
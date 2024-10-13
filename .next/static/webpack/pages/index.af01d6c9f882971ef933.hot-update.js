webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/Footer.jsx":
/*!************************************!*\
  !*** ./components/Home/Footer.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ "./hooks/useMediaQuery.js");
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AppBar */ "./components/AppBar/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Footer.jsx",
  _s = $RefreshSig$();




const variants = {
  hidden: isTabletView => ({
    y: isTabletView ? -81 : -131
  }),
  show: {
    y: 0
  }
};
const Footer = () => {
  _s();
  const isTabletView = Object(_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref => {
    let {
      breakpoints
    } = _ref;
    return `(max-width:${breakpoints.sizes.tablet}px)`;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "up",
    renderAs: "footer",
    variants: variants,
    initial: false,
    custom: isTabletView,
    transition: {
      duration: 0.7,
      ease: [0.666, 0, 0.237, 1]
    }
  }, isTabletView, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};
_s(Footer, "kvvo0lrRNZqJFt32GVh+2sGPoVM=", false, function () {
  return [_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"]];
});
_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));
var _c, _c2;
$RefreshReg$(_c, "Footer");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Banner */ "./components/Home/Banner/index.js");
/* harmony import */ var _components_Home_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Content */ "./components/Home/Content/index.js");
/* harmony import */ var _components_Home_FeaturedProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/FeaturedProject */ "./components/Home/FeaturedProject/index.js");
/* harmony import */ var _components_Home_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/About */ "./components/Home/About/index.js");
/* harmony import */ var _components_Home_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/Contact */ "./components/Home/Contact/index.js");
/* harmony import */ var _components_Home_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/Footer */ "./components/Home/Footer.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\pages\\index.js";








function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_Content__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_FeaturedProject__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_About__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Home));
var _c, _c2;
$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwiaGlkZGVuIiwiaXNUYWJsZXRWaWV3IiwieSIsInNob3ciLCJGb290ZXIiLCJfcyIsInVzZU1lZGlhUXVlcnkiLCJfcmVmIiwiYnJlYWtwb2ludHMiLCJzaXplcyIsInRhYmxldCIsIl9qc3hERVYiLCJBcHBCYXIiLCJkaXJlY3Rpb24iLCJyZW5kZXJBcyIsImluaXRpYWwiLCJjdXN0b20iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCJfYzIiLCJSZWFjdCIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiLCJIb21lIiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJCYW5uZXJTZWN0aW9uIiwiQ29udGVudFNlY3Rpb24iLCJGZWF0dXJlZFNlY3Rpb24iLCJBYm91dFNlY3Rpb24iLCJDb250YWN0U2VjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNUO0FBQUE7QUFFN0MsTUFBTUEsUUFBUSxHQUFHO0VBQ2ZDLE1BQU0sRUFBRUMsWUFBWSxLQUFLO0lBQUVDLENBQUMsRUFBRUQsWUFBWSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7RUFBSSxDQUFDLENBQUM7RUFDMURFLElBQUksRUFBRTtJQUFFRCxDQUFDLEVBQUU7RUFBRTtBQUNmLENBQUM7QUFFRCxNQUFNRSxNQUFNLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQ25CLE1BQU1KLFlBQVksR0FBR0ssb0VBQWEsQ0FDaENDLElBQUE7SUFBQSxJQUFDO01BQUVDO0lBQVksQ0FBQyxHQUFBRCxJQUFBO0lBQUEsT0FBSyxjQUFjQyxXQUFXLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxLQUFLO0VBQUEsQ0FDbEUsQ0FBQztFQUVELG9CQUNFQyxvRUFBQSxDQUFDQywwREFBTTtJQUVMQyxTQUFTLEVBQUMsSUFBSTtJQUNkQyxRQUFRLEVBQUMsUUFBUTtJQUNqQmYsUUFBUSxFQUFFQSxRQUFTO0lBQ25CZ0IsT0FBTyxFQUFFLEtBQU07SUFDZkMsTUFBTSxFQUFFZixZQUFhO0lBQ3JCZ0IsVUFBVSxFQUFFO01BQ1ZDLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDM0I7RUFBRSxHQVRHbEIsWUFBWTtJQUFBbUIsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBVWxCLENBQUM7QUFFTixDQUFDO0FBQUNsQixFQUFBLENBbkJJRCxNQUFNO0VBQUEsUUFDV0UsNERBQWE7QUFBQTtBQUFBa0IsRUFBQSxHQUQ5QnBCLE1BQU07QUFxQlpxQixrRUFBQSxnQkFBZUMsNENBQUssQ0FBQ0MsSUFBSSxDQUFDdkIsTUFBTSxDQUFDLEVBQUM7QUFBQSxJQUFBb0IsRUFBQSxFQUFBQyxHQUFBO0FBQUFHLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFILEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCUjtBQUM0QjtBQUNFO0FBQ1M7QUFDYjtBQUNJO0FBQ1Q7QUFBQTtBQUUvQyxTQUFTSSxJQUFJQSxDQUFBLEVBQUc7RUFDZCxvQkFDRWxCLG9FQUFBLENBQUFtQiw4REFBQTtJQUFBQyxRQUFBLGdCQUNFcEIsb0VBQUEsQ0FBQ3FCLCtEQUFhO01BQUFaLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDakJaLG9FQUFBLENBQUNzQixnRUFBYztNQUFBYixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRSxDQUFDLGVBQ2xCWixvRUFBQSxDQUFDdUIsd0VBQWU7TUFBQWQsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQUUsQ0FBQyxlQUNuQlosb0VBQUEsQ0FBQ3dCLDhEQUFZO01BQUFmLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDaEJaLG9FQUFBLENBQUN5QixnRUFBYztNQUFBaEIsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQUUsQ0FBQyxlQUNsQlosb0VBQUEsQ0FBQ1AsK0RBQU07TUFBQWdCLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUM7RUFBQSxlQUNWLENBQUM7QUFFUDtBQUFDQyxFQUFBLEdBWFFLLElBQUk7QUFhYkosa0VBQUEsZ0JBQWVDLDRDQUFLLENBQUNDLElBQUksQ0FBQ0UsSUFBSSxDQUFDLEVBQUM7QUFBQSxJQUFBTCxFQUFBLEVBQUFDLEdBQUE7QUFBQUcsWUFBQSxDQUFBSixFQUFBO0FBQUFJLFlBQUEsQ0FBQUgsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZjAxZDZjOWY4ODI5NzFlZjkzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vaG9va3MvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBCYXInO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaGlkZGVuOiBpc1RhYmxldFZpZXcgPT4gKHsgeTogaXNUYWJsZXRWaWV3ID8gLTgxIDogLTEzMSB9KSxcclxuICBzaG93OiB7IHk6IDAgfSxcclxufTtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBpc1RhYmxldFZpZXcgPSB1c2VNZWRpYVF1ZXJ5KFxyXG4gICAgKHsgYnJlYWtwb2ludHMgfSkgPT4gYChtYXgtd2lkdGg6JHticmVha3BvaW50cy5zaXplcy50YWJsZXR9cHgpYCxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhclxyXG4gICAgICBrZXk9e2lzVGFibGV0Vmlld31cclxuICAgICAgZGlyZWN0aW9uPVwidXBcIlxyXG4gICAgICByZW5kZXJBcz1cImZvb3RlclwiXHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgaW5pdGlhbD17ZmFsc2V9XHJcbiAgICAgIGN1c3RvbT17aXNUYWJsZXRWaWV3fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgZHVyYXRpb246IDAuNyxcclxuICAgICAgICBlYXNlOiBbMC42NjYsIDAsIDAuMjM3LCAxXSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRm9vdGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhbm5lclNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0Jhbm5lcic7XHJcbmltcG9ydCBDb250ZW50U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQ29udGVudCc7XHJcbmltcG9ydCBGZWF0dXJlZFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0ZlYXR1cmVkUHJvamVjdCc7XHJcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0Fib3V0JztcclxuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9Db250YWN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvRm9vdGVyJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCYW5uZXJTZWN0aW9uIC8+XHJcbiAgICAgIDxDb250ZW50U2VjdGlvbiAvPlxyXG4gICAgICA8RmVhdHVyZWRTZWN0aW9uIC8+XHJcbiAgICAgIDxBYm91dFNlY3Rpb24gLz5cclxuICAgICAgPENvbnRhY3RTZWN0aW9uIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSG9tZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
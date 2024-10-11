webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/Banner/Banner.jsx":
/*!*******************************************!*\
  !*** ./components/Home/Banner/Banner.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useStyledTheme */ "./hooks/useStyledTheme.js");
/* harmony import */ var _CanvasEraser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CanvasEraser */ "./components/CanvasEraser/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/Home/Banner/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Banner\\Banner.jsx",
  _s = $RefreshSig$();








const titleAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemTitleAnimation = {
  initial: {
    y: '100vh'
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
const Banner = () => {
  _s();
  const canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const windowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const theme = Object(_hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const isMobile = windowSize.width < 768; // Adjust breakpoint as needed

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["BannerSection"], {
    style: {
      height: windowSize.height
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["VideoContainer"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("video", {
        src: "/videos/menu.mp4",
        height: "100%",
        width: "100%",
        loop: true,
        autoPlay: true,
        muted: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), !isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_CanvasEraser__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: canvasRef,
      width: windowSize.width,
      height: windowSize.height,
      size: 120,
      background: theme.background,
      onMouseEnter: addCursorBorder,
      onMouseLeave: removeCursorBorder
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["BannerTitle"], {
      variants: titleAnimation,
      initial: "initial",
      animate: "animate",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: itemTitleAnimation,
        children: "nex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: itemTitleAnimation,
        children: "000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};
_s(Banner, "RzKl5wL4oikpMsLBKWliTd+ULF8=", false, function () {
  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c = Banner;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Banner));
var _c, _c2;
$RefreshReg$(_c, "Banner");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9CYW5uZXIuanN4Il0sIm5hbWVzIjpbInRpdGxlQW5pbWF0aW9uIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJpdGVtVGl0bGVBbmltYXRpb24iLCJpbml0aWFsIiwieSIsImR1cmF0aW9uIiwiZWFzZSIsIkJhbm5lciIsIl9zIiwiY2FudmFzUmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJ3aW5kb3dTaXplIiwidXNlV2luZG93U2l6ZSIsInRoZW1lIiwidXNlU3R5bGVkVGhlbWUiLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsImlzTW9iaWxlIiwid2lkdGgiLCJfanN4REVWIiwiQmFubmVyU2VjdGlvbiIsInN0eWxlIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJWaWRlb0NvbnRhaW5lciIsInNyYyIsImxvb3AiLCJhdXRvUGxheSIsIm11dGVkIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ2FudmFzRXJhc2VyIiwicmVmIiwic2l6ZSIsImJhY2tncm91bmQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJCYW5uZXJUaXRsZSIsInZhcmlhbnRzIiwibW90aW9uIiwic3BhbiIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNvQjtBQUNGO0FBQ0U7QUFDYjtBQUN3QjtBQUFBO0FBRXRFLE1BQU1BLGNBQWMsR0FBRztFQUNyQkMsT0FBTyxFQUFFO0lBQ1BDLFVBQVUsRUFBRTtNQUNWQyxlQUFlLEVBQUU7SUFDbkI7RUFDRjtBQUNGLENBQUM7QUFFRCxNQUFNQyxrQkFBa0IsR0FBRztFQUN6QkMsT0FBTyxFQUFFO0lBQUVDLENBQUMsRUFBRTtF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TUFBTSxDQUFDLEVBQUM7QUFBQSxJQUFBc0MsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLFlBQUEsQ0FBQUgsRUFBQTtBQUFBRyxZQUFBLENBQUFGLEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDMzMmJhZThiODVlMjEyMmI4ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJztcclxuaW1wb3J0IHVzZVN0eWxlZFRoZW1lIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVN0eWxlZFRoZW1lJztcclxuaW1wb3J0IENhbnZhc0VyYXNlciBmcm9tICcuLi8uLi9DYW52YXNFcmFzZXInO1xyXG5pbXBvcnQgeyBCYW5uZXJTZWN0aW9uLCBCYW5uZXJUaXRsZSwgVmlkZW9Db250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0aXRsZUFuaW1hdGlvbiA9IHtcclxuICBhbmltYXRlOiB7XHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xNSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGl0ZW1UaXRsZUFuaW1hdGlvbiA9IHtcclxuICBpbml0aWFsOiB7IHk6ICcxMDB2aCcgfSxcclxuICBhbmltYXRlOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMC45LFxyXG4gICAgICBlYXNlOiBbMC40LCAwLCAwLjIsIDFdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCB3aW5kb3dTaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlU3R5bGVkVGhlbWUoKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHdpbmRvd1NpemUud2lkdGggPCA3Njg7IC8vIEFkanVzdCBicmVha3BvaW50IGFzIG5lZWRlZFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhbm5lclNlY3Rpb24gc3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3dTaXplLmhlaWdodCB9fT5cclxuICAgICAgPFZpZGVvQ29udGFpbmVyPlxyXG4gICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgc3JjPVwiL3ZpZGVvcy9tZW51Lm1wNFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICBsb29wXHJcbiAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgbXV0ZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L1ZpZGVvQ29udGFpbmVyPlxyXG4gICAgICB7IWlzTW9iaWxlICYmIChcclxuICAgICAgICA8Q2FudmFzRXJhc2VyXHJcbiAgICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICAgIHdpZHRoPXt3aW5kb3dTaXplLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXt3aW5kb3dTaXplLmhlaWdodH1cclxuICAgICAgICAgIHNpemU9ezEyMH1cclxuICAgICAgICAgIGJhY2tncm91bmQ9e3RoZW1lLmJhY2tncm91bmR9XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxCYW5uZXJUaXRsZVxyXG4gICAgICAgIHZhcmlhbnRzPXt0aXRsZUFuaW1hdGlvbn1cclxuICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG1vdGlvbi5zcGFuIHZhcmlhbnRzPXtpdGVtVGl0bGVBbmltYXRpb259Pm5leDwvbW90aW9uLnNwYW4+XHJcbiAgICAgICAgPG1vdGlvbi5zcGFuIHZhcmlhbnRzPXtpdGVtVGl0bGVBbmltYXRpb259PjAwMDwvbW90aW9uLnNwYW4+XHJcbiAgICAgIDwvQmFubmVyVGl0bGU+XHJcbiAgICA8L0Jhbm5lclNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQmFubmVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
    opacity: 0,
    scale: 0.8
  },
  // Start with opacity 0 and scale down
  animate: {
    opacity: 1,
    // Fade in
    scale: 1,
    // Scale up to full size
    transition: {
      duration: 0.3,
      // Duration of the animation
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
const texts = ['AR', 'net', 'AI'];
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

  const {
    0: currentText,
    1: setCurrentText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(texts[0]);
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCurrentText(texts[index]);
  }, [index]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["BannerSection"], {
    style: {
      height: windowSize.height
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["VideoContainer"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("video", {
        src: "/videos/banner.mp4",
        height: "100%",
        width: "100%",
        loop: true,
        autoPlay: true,
        muted: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 67,
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
        lineNumber: 82,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: itemTitleAnimation,
        children: currentText
      }, currentText, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};
_s(Banner, "BLNQNkPzO/kY8ZaZD9XU5e/nXaU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9CYW5uZXIuanN4Il0sIm5hbWVzIjpbInRpdGxlQW5pbWF0aW9uIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJpdGVtVGl0bGVBbmltYXRpb24iLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwiZHVyYXRpb24iLCJlYXNlIiwidGV4dHMiLCJCYW5uZXIiLCJfcyIsImNhbnZhc1JlZiIsIlJlYWN0IiwidXNlUmVmIiwid2luZG93U2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ0aGVtZSIsInVzZVN0eWxlZFRoZW1lIiwiYWRkQ3Vyc29yQm9yZGVyIiwicmVtb3ZlQ3Vyc29yQm9yZGVyIiwidXNlQ3Vyc29yU3R5bGUiLCJpc01vYmlsZSIsIndpZHRoIiwiY3VycmVudFRleHQiLCJzZXRDdXJyZW50VGV4dCIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiX2pzeERFViIsIkJhbm5lclNlY3Rpb24iLCJzdHlsZSIsImhlaWdodCIsImNoaWxkcmVuIiwiVmlkZW9Db250YWluZXIiLCJzcmMiLCJsb29wIiwiYXV0b1BsYXkiLCJtdXRlZCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNhbnZhc0VyYXNlciIsInJlZiIsInNpemUiLCJiYWNrZ3JvdW5kIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiQmFubmVyVGl0bGUiLCJ2YXJpYW50cyIsIm1vdGlvbiIsInNwYW4iLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1o7QUFDb0I7QUFDRjtBQUNFO0FBQ2I7QUFD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d2VicGFjay9wYWdlcy9pbmRleC44ZGFkZjQwM2M4YTVhYzExNjdhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJztcclxuaW1wb3J0IHVzZVN0eWxlZFRoZW1lIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVN0eWxlZFRoZW1lJztcclxuaW1wb3J0IENhbnZhc0VyYXNlciBmcm9tICcuLi8uLi9DYW52YXNFcmFzZXInO1xyXG5pbXBvcnQgeyBCYW5uZXJTZWN0aW9uLCBCYW5uZXJUaXRsZSwgVmlkZW9Db250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0aXRsZUFuaW1hdGlvbiA9IHtcclxuICBhbmltYXRlOiB7XHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xNSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGl0ZW1UaXRsZUFuaW1hdGlvbiA9IHtcclxuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjggfSwgLy8gU3RhcnQgd2l0aCBvcGFjaXR5IDAgYW5kIHNjYWxlIGRvd25cclxuICBhbmltYXRlOiB7XHJcbiAgICBvcGFjaXR5OiAxLCAvLyBGYWRlIGluXHJcbiAgICBzY2FsZTogMSwgICAvLyBTY2FsZSB1cCB0byBmdWxsIHNpemVcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDAuMywgLy8gRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICBlYXNlOiBbMC40LCAwLCAwLjIsIDFdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdGV4dHMgPSBbJ0FSJywgJ25ldCcsICdBSSddO1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCB3aW5kb3dTaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlU3R5bGVkVGhlbWUoKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHdpbmRvd1NpemUud2lkdGggPCA3Njg7IC8vIEFkanVzdCBicmVha3BvaW50IGFzIG5lZWRlZFxyXG5cclxuICBjb25zdCBbY3VycmVudFRleHQsIHNldEN1cnJlbnRUZXh0XSA9IHVzZVN0YXRlKHRleHRzWzBdKTtcclxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIHRleHRzLmxlbmd0aCk7XHJcbiAgICB9LCAyMDAwKTsgLy8gQ2hhbmdlIHRleHQgZXZlcnkgMiBzZWNvbmRzXHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEN1cnJlbnRUZXh0KHRleHRzW2luZGV4XSk7XHJcbiAgfSwgW2luZGV4XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFubmVyU2VjdGlvbiBzdHlsZT17eyBoZWlnaHQ6IHdpbmRvd1NpemUuaGVpZ2h0IH19PlxyXG4gICAgICA8VmlkZW9Db250YWluZXI+XHJcbiAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICBzcmM9XCIvdmlkZW9zL2Jhbm5lci5tcDRcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9WaWRlb0NvbnRhaW5lcj5cclxuICAgICAgeyFpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPENhbnZhc0VyYXNlclxyXG4gICAgICAgICAgcmVmPXtjYW52YXNSZWZ9XHJcbiAgICAgICAgICB3aWR0aD17d2luZG93U2l6ZS53aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17d2luZG93U2l6ZS5oZWlnaHR9XHJcbiAgICAgICAgICBzaXplPXsxMjB9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kPXt0aGVtZS5iYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3JlbW92ZUN1cnNvckJvcmRlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8QmFubmVyVGl0bGVcclxuICAgICAgICB2YXJpYW50cz17dGl0bGVBbmltYXRpb259XHJcbiAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxtb3Rpb24uc3BhbiB2YXJpYW50cz17aXRlbVRpdGxlQW5pbWF0aW9ufT5uZXg8L21vdGlvbi5zcGFuPlxyXG4gICAgICAgIDxtb3Rpb24uc3BhbiB2YXJpYW50cz17aXRlbVRpdGxlQW5pbWF0aW9ufSBrZXk9e2N1cnJlbnRUZXh0fT5cclxuICAgICAgICAgIHtjdXJyZW50VGV4dH1cclxuICAgICAgICA8L21vdGlvbi5zcGFuPlxyXG4gICAgICA8L0Jhbm5lclRpdGxlPlxyXG4gICAgPC9CYW5uZXJTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJhbm5lcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
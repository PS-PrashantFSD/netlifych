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
      duration: 0.1,
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
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 66,
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
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: itemTitleAnimation,
        children: currentText
      }, currentText, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9CYW5uZXIuanN4Il0sIm5hbWVzIjpbInRpdGxlQW5pbWF0aW9uIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJpdGVtVGl0bGVBbmltYXRpb24iLCJpbml0aWFsIiwieSIsImR1cmF0aW9uIiwiZWFzZSIsInRleHRzIiwiQmFubmVyIiwiX3MiLCJjYW52YXNSZWYiLCJSZWFjdCIsInVzZVJlZiIsIndpbmRvd1NpemUiLCJ1c2VXaW5kb3dTaXplIiwidGhlbWUiLCJ1c2VTdHlsZWRUaGVtZSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaXNNb2JpbGUiLCJ3aWR0aCIsImN1cnJlbnRUZXh0Iiwic2V0Q3VycmVudFRleHQiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldkluZGV4IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsIl9qc3hERVYiLCJCYW5uZXJTZWN0aW9uIiwic3R5bGUiLCJoZWlnaHQiLCJjaGlsZHJlbiIsIlZpZGVvQ29udGFpbmVyIiwic3JjIiwibG9vcCIsImF1dG9QbGF5IiwibXV0ZWQiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDYW52YXNFcmFzZXIiLCJyZWYiLCJzaXplIiwiYmFja2dyb3VuZCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIkJhbm5lclRpdGxlIiwidmFyaWFudHMiLCJtb3Rpb24iLCJzcGFuIiwiX2MiLCJfYzIiLCJtZW1vIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNaO0FBQ29CO0FBQ0Y7QUFDRTtBQUNiO0FBQ3dCO0FBQUE7QUFFdEUs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QUFBO01BQUFDLFlBQUE7SUFBQSxZQUNsQyxDQUNGLGVBQ0RiLG9FQUFBLENBQUNvQixtREFBVztNQUNWQyxRQUFRLEVBQUV4RCxjQUFlO01BQ3pCSyxPQUFPLEVBQUMsU0FBUztNQUNqQkosT0FBTyxFQUFDLFNBQVM7TUFBQXNDLFFBQUEsZ0JBRWpCSixvRUFBQSxDQUFDc0Isb0RBQU0sQ0FBQ0MsSUFBSTtRQUFDRixRQUFRLEVBQUVwRCxrQkFBbUI7UUFBQW1DLFFBQUEsRUFBQztNQUFHO1FBQUFNLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFhLENBQUMsZUFDNURiLG9FQUFBLENBQUNzQixvREFBTSxDQUFDQyxJQUFJO1FBQUNGLFFBQVEsRUFBRXBELGtCQUFtQjtRQUFBbUMsUUFBQSxFQUN2Q2Y7TUFBVyxHQURrQ0EsV0FBVztRQUFBcUIsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBRTlDLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSCxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0QsQ0FBQztBQUVwQixDQUFDO0FBQUNyQyxFQUFBLENBMURJRCxNQUFNO0VBQUEsUUFFU00sNERBQWEsRUFDbEJFLDZEQUFjLEVBQ29CRyw2REFBYztBQUFBO0FBQUFzQyxFQUFBLEdBSjFEakQsTUFBTTtBQTREWmtELGtFQUFBLGdCQUFlL0MsNENBQUssQ0FBQ2dELElBQUksQ0FBQ25ELE1BQU0sQ0FBQyxFQUFDO0FBQUEsSUFBQWlELEVBQUEsRUFBQUMsR0FBQTtBQUFBRSxZQUFBLENBQUFILEVBQUE7QUFBQUcsWUFBQSxDQUFBRixHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzYWJlYjg1ZjFlNmVkYmYxZTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xyXG5pbXBvcnQgdXNlU3R5bGVkVGhlbWUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlU3R5bGVkVGhlbWUnO1xyXG5pbXBvcnQgQ2FudmFzRXJhc2VyIGZyb20gJy4uLy4uL0NhbnZhc0VyYXNlcic7XHJcbmltcG9ydCB7IEJhbm5lclNlY3Rpb24sIEJhbm5lclRpdGxlLCBWaWRlb0NvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRpdGxlQW5pbWF0aW9uID0ge1xyXG4gIGFuaW1hdGU6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjE1LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaXRlbVRpdGxlQW5pbWF0aW9uID0ge1xyXG4gIGluaXRpYWw6IHsgeTogJzEwMHZoJyB9LFxyXG4gIGFuaW1hdGU6IHtcclxuICAgIHk6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAwLjEsXHJcbiAgICAgIGVhc2U6IFswLjQsIDAsIDAuMiwgMV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB0ZXh0cyA9IFsnQVInLCAnbmV0JywgJ0FJJ107XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VTdHlsZWRUaGVtZSgpO1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGlzTW9iaWxlID0gd2luZG93U2l6ZS53aWR0aCA8IDc2ODsgLy8gQWRqdXN0IGJyZWFrcG9pbnQgYXMgbmVlZGVkXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50VGV4dCwgc2V0Q3VycmVudFRleHRdID0gdXNlU3RhdGUodGV4dHNbMF0pO1xyXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgdGV4dHMubGVuZ3RoKTtcclxuICAgIH0sIDIwMDApOyAvLyBDaGFuZ2UgdGV4dCBldmVyeSAyIHNlY29uZHNcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFRleHQodGV4dHNbaW5kZXhdKTtcclxuICB9LCBbaW5kZXhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCYW5uZXJTZWN0aW9uIHN0eWxlPXt7IGhlaWdodDogd2luZG93U2l6ZS5oZWlnaHQgfX0+XHJcbiAgICAgIDxWaWRlb0NvbnRhaW5lcj5cclxuICAgICAgICA8dmlkZW9cclxuICAgICAgICAgIHNyYz1cIi92aWRlb3MvYmFubmVyLm1wNFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICBsb29wXHJcbiAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgbXV0ZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L1ZpZGVvQ29udGFpbmVyPlxyXG4gICAgICB7IWlzTW9iaWxlICYmIChcclxuICAgICAgICA8Q2FudmFzRXJhc2VyXHJcbiAgICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICAgIHdpZHRoPXt3aW5kb3dTaXplLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXt3aW5kb3dTaXplLmhlaWdodH1cclxuICAgICAgICAgIHNpemU9ezEyMH1cclxuICAgICAgICAgIGJhY2tncm91bmQ9e3RoZW1lLmJhY2tncm91bmR9XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxCYW5uZXJUaXRsZVxyXG4gICAgICAgIHZhcmlhbnRzPXt0aXRsZUFuaW1hdGlvbn1cclxuICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG1vdGlvbi5zcGFuIHZhcmlhbnRzPXtpdGVtVGl0bGVBbmltYXRpb259Pm5leDwvbW90aW9uLnNwYW4+XHJcbiAgICAgICAgPG1vdGlvbi5zcGFuIHZhcmlhbnRzPXtpdGVtVGl0bGVBbmltYXRpb259IGtleT17Y3VycmVudFRleHR9PlxyXG4gICAgICAgICAge2N1cnJlbnRUZXh0fVxyXG4gICAgICAgIDwvbW90aW9uLnNwYW4+XHJcbiAgICAgIDwvQmFubmVyVGl0bGU+XHJcbiAgICA8L0Jhbm5lclNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQmFubmVyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
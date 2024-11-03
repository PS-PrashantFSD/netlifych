webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/FeaturedProject/FeaturedProject.jsx":
/*!*************************************************************!*\
  !*** ./components/Home/FeaturedProject/FeaturedProject.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/menu */ "./context/menu.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useMediaQuery */ "./hooks/useMediaQuery.js");
/* harmony import */ var _hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useStyledTheme */ "./hooks/useStyledTheme.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _Icons_Arrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Icons/Arrow */ "./components/Icons/Arrow.jsx");
/* harmony import */ var _Misc_Nexcard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Misc/Nexcard */ "./components/Misc/Nexcard.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./components/Home/FeaturedProject/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\FeaturedProject\\FeaturedProject.jsx",
  _s = $RefreshSig$();












const transition = {
  duration: 1,
  ease: [0.4, 0, 0.2, 1]
};
const words = ["nexAR", "nexNet", "nexAi"];
const FeaturedProject = () => {
  _s();
  const {
    0: currentWord,
    1: setCurrentWord
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: wordIndex,
    1: setWordIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isTyping,
    1: setIsTyping
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const controlsInfo = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();
  const controlsArrow = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();
  const theme = Object(_hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const [{
    isMenuOpen
  }] = Object(_context_menu__WEBPACK_IMPORTED_MODULE_3__["useMenuContext"])();
  const {
    addCursorColor,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const isTabletView = Object(_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref => {
    let {
      breakpoints
    } = _ref;
    return `(max-width:${breakpoints.sizes.tablet}px)`;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const typingEffect = () => {
      if (isTyping) {
        setCurrentWord(prev => {
          const nextCharIndex = prev.length < words[wordIndex].length ? prev.length + 1 : prev.length;
          return words[wordIndex].slice(0, nextCharIndex);
        });
      } else {
        setCurrentWord(prev => prev.slice(0, -1));
      }
    };
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentWord.length === words[wordIndex].length) {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 1000); // Wait before starting to clear
        }
      } else {
        if (currentWord.length === 0) {
          setWordIndex(prev => (prev + 1) % words.length);
          setIsTyping(true);
        }
      }
      typingEffect();
    }, isTyping ? 150 : 100);
    return () => clearTimeout(timeout);
  }, [currentWord, isTyping, wordIndex]);
  const handleMouseEnter = () => {
    addCursorBorder();
    addCursorColor(theme.text);
  };
  const handleMouseLeave = () => {
    if (isMenuOpen) return;
    removeCursorBorder();
    resetCursorColor();
  };
  const handleAnchorHoverStart = () => {
    addCursorBorder();
    controlsInfo.start({
      opacity: 1
    });
    controlsArrow.start({
      x: 0
    });
  };
  const handleAnchorHoverEnd = () => {
    removeCursorBorder();
    controlsInfo.start({
      opacity: 0
    });
    controlsArrow.start({
      x: isTabletView ? -25.19 : -33
    });
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    controlsArrow.start({
      x: isTabletView ? -25.19 : -33
    });
  }, [controlsArrow, isTabletView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/projects/not-humble",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ProjectAnchor"], {
            onHoverStart: handleAnchorHoverStart,
            onHoverEnd: handleAnchorHoverEnd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ProjectInfo"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ProjectTitle"], {
                children: ["Get ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 23
                }, undefined), " Started", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["VideoPreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("video", {
                loop: true,
                autoPlay: true,
                muted: true,
                src: "videos/vidm.mp4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Misc_Nexcard__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, undefined);
};
_s(FeaturedProject, "5QQzd+LkRheyy/QGrVNflmpnBzQ=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], _hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_6__["default"], _context_menu__WEBPACK_IMPORTED_MODULE_3__["useMenuContext"], _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"]];
});
_c = FeaturedProject;
/* harmony default export */ __webpack_exports__["default"] = (FeaturedProject);
var _c;
$RefreshReg$(_c, "FeaturedProject");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0ZlYXR1cmVkUHJvamVjdC9GZWF0dXJlZFByb2plY3QuanN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ3b3JkcyIsIkZlYXR1cmVkUHJvamVjdCIsIl9zIiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsInVzZVN0YXRlIiwid29yZEluZGV4Iiwic2V0V29yZEluZGV4IiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsImNvbnRyb2xzSW5mbyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xzQXJyb3ciLCJ0aGVtZSIsInVzZVN0eWxlZFRoZW1lIiwiaXNNZW51T3BlbiIsInVzZU1lbnVDb250ZXh0IiwiYWRkQ3Vyc29yQ29sb3IiLCJyZXNldEN1cnNvckNvbG9yIiwiYWRkQ3Vyc29yQm9yZGVyIiwicmVtb3ZlQ3Vyc29yQm9yZGVyIiwidXNlQ3Vyc29yU3R5bGUiLCJpc1RhYmxldFZpZXciLCJ1c2VNZWRpYVF1ZXJ5IiwiX3JlZiIsImJyZWFrcG9pbnRzIiwic2l6ZXMiLCJ0YWJsZXQiLCJ1c2VFZmZlY3QiLCJ0eXBpbmdFZmZlY3QiLCJwcmV2IiwibmV4dENoYXJJbmRleCIsImxlbmd0aCIsInNsaWNlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVNb3VzZUVudGVyIiwidGV4dCIsImhhbmRsZU1vdXNlTGVhdmUiLCJoYW5kbGVBbmNob3JIb3ZlclN0YXJ0Iiwic3RhcnQiLCJvcGFjaXR5IiwieCIsImhhbmRsZUFuY2hvckhvdmVyRW5kIiwiX2pzeERFViIsIkNvbnRlbnRTZWN0aW9uIiwiY2hpbGRyZW4iLCJBbmltYXRlT25TY3JlZW4iLCJtb3Rpb24iLCJkaXYiLCJMaW5rIiwiaHJlZiIsInBhc3NIcmVmIiwiUHJvamVjdEFuY2hvciIsIm9uSG92ZXJTdGFydCIsIm9uSG92ZXJFbmQiLCJQcm9qZWN0SW5mbyIsIlByb2plY3RUaXRsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsIkFycm93IiwiYW5pbWF0ZSIsIlZpZGVvUHJldmlldyIsImxvb3AiLCJhdXRvUGxheSIsIm11dGVkIiwic3JjIiwiTmV4Y2FyZCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ3dCO0FBQ0U7QUFDSTtBQUNGO0FBQ0U7QUFDUDtBQUNkO0FBQ0c7QUFTdkI7QUFBQTtBQUVsQixNQUFNQSxVQUFVLEdBQUc7RUFDakJDLFFBQVEsRUFBRSxDQUFDO0VBQ1hDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQUVELE1BQU1DLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO0FBRTFDLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0VBQUFDLEVBQUE7RUFDNUIsTUFBTTtJQUFBLEdBQUNDLFdBQVc7SUFBQSxHQUFFQztFQUFjLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2xELE1BQU07SUFBQSxHQUFDQyxTQUFTO0lBQUEsR0FBRUM7RUFBWSxJQUFJRixzREFBUSxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNO0lBQUEsR0FBQ0csUUFBUTtJQUFBLEdBQUVDO0VBQVcsSUFBSUosc0RBQVEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTUssWUFBWSxHQUFHQyxrRUFBWSxDQUFDLENBQUM7RUFDbkMsTUFBTUMsYUFBYSxHQUFHRCxrRUFBWSxDQUFDLENBQUM7RUFDcEMsTUFBTUUsS0FBSyxHQUFHQyxxRUFBYyxDQUFDLENBQUM7RUFDOUIsTUFBTSxDQUFDO0lBQUVDO0VBQVcsQ0FBQyxDQUFDLEdBQUdDLG9FQUFjLENBQUMsQ0FBQztFQUN6QyxNQUFNO0lBQ0pDLGNBQWM7SUFD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QWQ5QnZFLGVBQWU7QUEwR05BLDhFQUFlLEVBQUM7QUFBQSxJQUFBdUUsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzRkNGY5MmU2N2MwZDcwYmU3ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VNZW51Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvbWVudSc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgdXNlU3R5bGVkVGhlbWUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlU3R5bGVkVGhlbWUnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCBBcnJvdyBmcm9tICcuLi8uLi9JY29ucy9BcnJvdyc7XHJcbmltcG9ydCBOZXhjYXJkIGZyb20gJy4uLy4uL01pc2MvTmV4Y2FyZCc7XHJcbmltcG9ydCB7XHJcbiAgQ29udGVudFNlY3Rpb24sXHJcbiAgUHJvamVjdEFuY2hvcixcclxuICBQcm9qZWN0SW5mbyxcclxuICBQcm9qZWN0VGl0bGUsXHJcbiAgVmlkZW9QcmV2aWV3LFxyXG4gIE1lbnVDb250YWluZXIsXHJcbiAgTWVudUJ1dHRvbixcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIGR1cmF0aW9uOiAxLFxyXG4gIGVhc2U6IFswLjQsIDAsIDAuMiwgMV0sXHJcbn07XHJcblxyXG5jb25zdCB3b3JkcyA9IFtcIm5leEFSXCIsIFwibmV4TmV0XCIsIFwibmV4QWlcIl07XHJcblxyXG5jb25zdCBGZWF0dXJlZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbd29yZEluZGV4LCBzZXRXb3JkSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzVHlwaW5nLCBzZXRJc1R5cGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBjb250cm9sc0luZm8gPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBjb250cm9sc0Fycm93ID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VTdHlsZWRUaGVtZSgpO1xyXG4gIGNvbnN0IFt7IGlzTWVudU9wZW4gfV0gPSB1c2VNZW51Q29udGV4dCgpO1xyXG4gIGNvbnN0IHtcclxuICAgIGFkZEN1cnNvckNvbG9yLFxyXG4gICAgcmVzZXRDdXJzb3JDb2xvcixcclxuICAgIGFkZEN1cnNvckJvcmRlcixcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcixcclxuICB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuICBjb25zdCBpc1RhYmxldFZpZXcgPSB1c2VNZWRpYVF1ZXJ5KFxyXG4gICAgKHsgYnJlYWtwb2ludHMgfSkgPT4gYChtYXgtd2lkdGg6JHticmVha3BvaW50cy5zaXplcy50YWJsZXR9cHgpYCxcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdHlwaW5nRWZmZWN0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUeXBpbmcpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCgocHJldikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV4dENoYXJJbmRleCA9IHByZXYubGVuZ3RoIDwgd29yZHNbd29yZEluZGV4XS5sZW5ndGggXHJcbiAgICAgICAgICAgID8gcHJldi5sZW5ndGggKyAxIFxyXG4gICAgICAgICAgICA6IHByZXYubGVuZ3RoO1xyXG4gICAgICAgICAgcmV0dXJuIHdvcmRzW3dvcmRJbmRleF0uc2xpY2UoMCwgbmV4dENoYXJJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQoKHByZXYpID0+IHByZXYuc2xpY2UoMCwgLTEpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIGlmIChjdXJyZW50V29yZC5sZW5ndGggPT09IHdvcmRzW3dvcmRJbmRleF0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzZXRJc1R5cGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzVHlwaW5nKHRydWUpLCAxMDAwKTsgLy8gV2FpdCBiZWZvcmUgc3RhcnRpbmcgdG8gY2xlYXJcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0V29yZEluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgd29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgIHNldElzVHlwaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0eXBpbmdFZmZlY3QoKTtcclxuICAgIH0sIGlzVHlwaW5nID8gMTUwIDogMTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gIH0sIFtjdXJyZW50V29yZCwgaXNUeXBpbmcsIHdvcmRJbmRleF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBhZGRDdXJzb3JDb2xvcih0aGVtZS50ZXh0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzTWVudU9wZW4pIHJldHVybjtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgcmVzZXRDdXJzb3JDb2xvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGNvbnRyb2xzSW5mby5zdGFydCh7IG9wYWNpdHk6IDEgfSk7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogMCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlckVuZCA9ICgpID0+IHtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMCB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfSwgW2NvbnRyb2xzQXJyb3csIGlzVGFibGV0Vmlld10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9ub3QtaHVtYmxlXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0QW5jaG9yXHJcbiAgICAgICAgICAgICAgb25Ib3ZlclN0YXJ0PXtoYW5kbGVBbmNob3JIb3ZlclN0YXJ0fVxyXG4gICAgICAgICAgICAgIG9uSG92ZXJFbmQ9e2hhbmRsZUFuY2hvckhvdmVyRW5kfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgR2V0IDxiciAvPiBTdGFydGVkXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycm93IGFuaW1hdGU9e2NvbnRyb2xzQXJyb3d9IHRyYW5zaXRpb249e3RyYW5zaXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvUHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgPFZpZGVvUHJldmlldz5cclxuICAgICAgICAgICAgICAgIDx2aWRlbyBsb29wIGF1dG9QbGF5IG11dGVkIHNyYz1cInZpZGVvcy92aWRtLm1wNFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9WaWRlb1ByZXZpZXc+XHJcbiAgICAgICAgICAgIDwvUHJvamVjdEFuY2hvcj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgIDxOZXhjYXJkLz5cclxuICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUHJvamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
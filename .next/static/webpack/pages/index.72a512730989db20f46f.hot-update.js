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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./components/Home/FeaturedProject/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/projects/not-humble",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectAnchor"], {
            onHoverStart: handleAnchorHoverStart,
            onHoverEnd: handleAnchorHoverEnd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectInfo"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectTitle"], {
                children: ["Get ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 23
                }, undefined), " Started", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["VideoPreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("video", {
                loop: true,
                autoPlay: true,
                muted: true,
                src: "videos/vidm.mp4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["MenuContainer"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/services",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["MenuButton"], {
            sticky: false,
            title: "Services",
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0ZlYXR1cmVkUHJvamVjdC9GZWF0dXJlZFByb2plY3QuanN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ3b3JkcyIsIkZlYXR1cmVkUHJvamVjdCIsIl9zIiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsInVzZVN0YXRlIiwid29yZEluZGV4Iiwic2V0V29yZEluZGV4IiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsImNvbnRyb2xzSW5mbyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xzQXJyb3ciLCJ0aGVtZSIsInVzZVN0eWxlZFRoZW1lIiwiaXNNZW51T3BlbiIsInVzZU1lbnVDb250ZXh0IiwiYWRkQ3Vyc29yQ29sb3IiLCJyZXNldEN1cnNvckNvbG9yIiwiYWRkQ3Vyc29yQm9yZGVyIiwicmVtb3ZlQ3Vyc29yQm9yZGVyIiwidXNlQ3Vyc29yU3R5bGUiLCJpc1RhYmxldFZpZXciLCJ1c2VNZWRpYVF1ZXJ5IiwiX3JlZiIsImJyZWFrcG9pbnRzIiwic2l6ZXMiLCJ0YWJsZXQiLCJ1c2VFZmZlY3QiLCJ0eXBpbmdFZmZlY3QiLCJwcmV2IiwibmV4dENoYXJJbmRleCIsImxlbmd0aCIsInNsaWNlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVNb3VzZUVudGVyIiwidGV4dCIsImhhbmRsZU1vdXNlTGVhdmUiLCJoYW5kbGVBbmNob3JIb3ZlclN0YXJ0Iiwic3RhcnQiLCJvcGFjaXR5IiwieCIsImhhbmRsZUFuY2hvckhvdmVyRW5kIiwiX2pzeERFViIsIkNvbnRlbnRTZWN0aW9uIiwiY2hpbGRyZW4iLCJBbmltYXRlT25TY3JlZW4iLCJtb3Rpb24iLCJkaXYiLCJMaW5rIiwiaHJlZiIsInBhc3NIcmVmIiwiUHJvamVjdEFuY2hvciIsIm9uSG92ZXJTdGFydCIsIm9uSG92ZXJFbmQiLCJQcm9qZWN0SW5mbyIsIlByb2plY3RUaXRsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsIkFycm93IiwiYW5pbWF0ZSIsIlZpZGVvUHJldmlldyIsImxvb3AiLCJhdXRvUGxheSIsIm11dGVkIiwic3JjIiwiTWVudUNvbnRhaW5lciIsIk1lbnVCdXR0b24iLCJzdGlja3kiLCJ0aXRsZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFDd0I7QUFDRTtBQUNJO0FBQ0Y7QUFDRTtBQUNQO0FBQ2Q7QUFTcEI7QUFBQTtBQUVsQixNQUFNQSxVQUFVLEdBQUc7RUFDakJDLFFBQVEsRUFBRSxDQUFDO0VBQ1hDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQUVELE1BQU1DLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO0FBRTFDLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0VBQUFDLEVBQUE7RUFDNUIsTUFBTTtJQUFBLEdBQUNDLFdBQVc7SUFBQSxHQUFFQztFQUFjLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2xELE1BQU07SUFBQSxHQUFDQyxTQUFTO0lBQUEsR0FBRUM7RUFBWSxJQUFJRixzREFBUSxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNO0lBQUEsR0FBQ0csUUFBUTtJQUFBLEdBQUVDO0VBQVcsSUFBSUosc0RBQVEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTUssWUFBWSxHQUFHQyxrRUFBWSxDQUFDLENBQUM7RUFDbkMsTUFBTUMsYUFBYSxHQUFHRCxrRUFBWSxDQUFDLENBQUM7RUFDcEMsTUFBTUUsS0FBSyxHQUFHQyxxRUFBYyxDQUFDLENBQUM7RUFDOUIsTUFBTSxDQUFDO0lBQUVDO0VB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QUFFdEMsZ0JBQWlCO1lBQy9CdUMsWUFBWSxFQUFFckM7VUFBaUI7WUFBQW9CLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNoQztRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNFO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ007SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDRCxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0osQ0FBQztBQUVyQixDQUFDO0FBQUM1RCxFQUFBLENBbkhJRCxlQUFlO0VBQUEsUUFJRVUsMERBQVksRUFDWEEsMERBQVksRUFDcEJHLDZEQUFjLEVBQ0hFLDREQUFjLEVBTW5DSyw2REFBYyxFQUNHRSw0REFBYTtBQUFBO0FBQUFzRCxFQUFBLEdBZDlCNUUsZUFBZTtBQXFITkEsOEVBQWUsRUFBQztBQUFBLElBQUE0RSxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MmE1MTI3MzA5ODlkYjIwZjQ2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZU1lbnVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9tZW51JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB1c2VTdHlsZWRUaGVtZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VTdHlsZWRUaGVtZSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uLy4uL0ljb25zL0Fycm93JztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBQcm9qZWN0QW5jaG9yLFxyXG4gIFByb2plY3RJbmZvLFxyXG4gIFByb2plY3RUaXRsZSxcclxuICBWaWRlb1ByZXZpZXcsXHJcbiAgTWVudUNvbnRhaW5lcixcclxuICBNZW51QnV0dG9uLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZHVyYXRpb246IDEsXHJcbiAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxufTtcclxuXHJcbmNvbnN0IHdvcmRzID0gW1wibmV4QVJcIiwgXCJuZXhOZXRcIiwgXCJuZXhBaVwiXTtcclxuXHJcbmNvbnN0IEZlYXR1cmVkUHJvamVjdCA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3b3JkSW5kZXgsIHNldFdvcmRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGNvbnRyb2xzSW5mbyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IGNvbnRyb2xzQXJyb3cgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVN0eWxlZFRoZW1lKCk7XHJcbiAgY29uc3QgW3sgaXNNZW51T3BlbiB9XSA9IHVzZU1lbnVDb250ZXh0KCk7XHJcbiAgY29uc3Qge1xyXG4gICAgYWRkQ3Vyc29yQ29sb3IsXHJcbiAgICByZXNldEN1cnNvckNvbG9yLFxyXG4gICAgYWRkQ3Vyc29yQm9yZGVyLFxyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyLFxyXG4gIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG4gIGNvbnN0IGlzVGFibGV0VmlldyA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgICAoeyBicmVha3BvaW50cyB9KSA9PiBgKG1heC13aWR0aDoke2JyZWFrcG9pbnRzLnNpemVzLnRhYmxldH1weClgLFxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eXBpbmdFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKChwcmV2KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0Q2hhckluZGV4ID0gcHJldi5sZW5ndGggPCB3b3Jkc1t3b3JkSW5kZXhdLmxlbmd0aCBcclxuICAgICAgICAgICAgPyBwcmV2Lmxlbmd0aCArIDEgXHJcbiAgICAgICAgICAgIDogcHJldi5sZW5ndGg7XHJcbiAgICAgICAgICByZXR1cm4gd29yZHNbd29yZEluZGV4XS5zbGljZSgwLCBuZXh0Q2hhckluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCgocHJldikgPT4gcHJldi5zbGljZSgwLCAtMSkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA9PT0gd29yZHNbd29yZEluZGV4XS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNldElzVHlwaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNUeXBpbmcodHJ1ZSksIDEwMDApOyAvLyBXYWl0IGJlZm9yZSBzdGFydGluZyB0byBjbGVhclxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudFdvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRXb3JkSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSB3b3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHR5cGluZ0VmZmVjdCgpO1xyXG4gICAgfSwgaXNUeXBpbmcgPyAxNTAgOiAxMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgfSwgW2N1cnJlbnRXb3JkLCBpc1R5cGluZywgd29yZEluZGV4XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGFkZEN1cnNvckNvbG9yKHRoZW1lLnRleHQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNNZW51T3BlbikgcmV0dXJuO1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICByZXNldEN1cnNvckNvbG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJTdGFydCA9ICgpID0+IHtcclxuICAgIGFkZEN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMSB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiAwIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyRW5kID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBjb250cm9sc0luZm8uc3RhcnQoeyBvcGFjaXR5OiAwIH0pO1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9LCBbY29udHJvbHNBcnJvdywgaXNUYWJsZXRWaWV3XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPG1vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL25vdC1odW1ibGVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPFByb2plY3RBbmNob3JcclxuICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9e2hhbmRsZUFuY2hvckhvdmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgb25Ib3ZlckVuZD17aGFuZGxlQW5jaG9ySG92ZXJFbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgPGJyIC8+IFN0YXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyb3cgYW5pbWF0ZT17Y29udHJvbHNBcnJvd30gdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9Qcm9qZWN0SW5mbz5cclxuICAgICAgICAgICAgICA8VmlkZW9QcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvIGxvb3AgYXV0b1BsYXkgbXV0ZWQgc3JjPVwidmlkZW9zL3ZpZG0ubXA0XCIgLz5cclxuICAgICAgICAgICAgICA8L1ZpZGVvUHJldmlldz5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0QW5jaG9yPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPE1lbnVDb250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxNZW51QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3RpY2t5PXtmYWxzZX1cclxuICAgICAgICAgICAgICB0aXRsZT1cIlNlcnZpY2VzXCJcclxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudUNvbnRhaW5lcj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFByb2plY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
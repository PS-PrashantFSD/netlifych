webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Home/AboutUs/AboutUs.jsx":
/*!*********************************************!*\
  !*** ./components/Home/AboutUs/AboutUs.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useMediaQuery */ "./hooks/useMediaQuery.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _Icons_Arrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Icons/Arrow */ "./components/Icons/Arrow.jsx");
/* harmony import */ var _Home_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../Home/Contact */ "./components/Home/Contact/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./components/Home/AboutUs/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\AboutUs\\AboutUs.jsx",
  _s = $RefreshSig$();










const transition = {
  duration: 1,
  ease: [0.4, 0, 0.2, 1]
};
const words = ["Our Story", "Our Mission", "Our Vision"];
const AboutUs = () => {
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
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const isTabletView = Object(_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref => {
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
          setTimeout(() => setIsTyping(false), 1000); // wait before starting to delete
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/about",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ProjectAnchor"], {
            onHoverStart: handleAnchorHoverStart,
            onHoverEnd: handleAnchorHoverEnd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ProjectInfo"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                children: currentWord
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
                initial: {
                  opacity: 0
                },
                animate: controlsInfo,
                transition: transition,
                className: "project-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h4", {
                  children: "Join Us on a Journey"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h4", {
                  children: "003"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ProjectTitle"], {
                children: ["ABOUT ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 25
                }, undefined), " US", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ImagePreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                src: "2386.jpg",
                alt: "About Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["AboutDescription"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
          children: "We are trailblazers in visual technology, specializing in augmented reality applications and web application design. Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds. With cutting-edge solutions like image tracking, 3D image tracking, and avatar creation, we empower businesses and creators to redefine how we interact with the visual world."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["Wrap"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
          children: "Our Mission"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
          children: "We are trailblazers in visual technology, specializing in augmented reality applications and web application design. Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds. With cutting-edge solutions like image tracking, 3D image tracking, and avatar creation, we empower businesses and creators to redefine how we interact with the visual world."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
          children: "Our Vision"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
          children: "We are trailblazers in visual technology, specializing in augmented reality applications and web application design. Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds. With cutting-edge solutions like image tracking, 3D image tracking, and avatar creation, we empower businesses and creators to redefine how we interact with the visual world."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Home_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, undefined);
};
_s(AboutUs, "amLMw3ASS8Gz1sCjcfqA97mEfgY=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"]];
});
_c = AboutUs;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AboutUs));
var _c, _c2;
$RefreshReg$(_c, "AboutUs");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0VXMvQWJvdXRVcy5qc3giXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIndvcmRzIiwiQWJvdXRVcyIsIl9zIiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsInVzZVN0YXRlIiwid29yZEluZGV4Iiwic2V0V29yZEluZGV4IiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsImNvbnRyb2xzSW5mbyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xzQXJyb3ciLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsImlzVGFibGV0VmlldyIsInVzZU1lZGlhUXVlcnkiLCJfcmVmIiwiYnJlYWtwb2ludHMiLCJzaXplcyIsInRhYmxldCIsInVzZUVmZmVjdCIsInR5cGluZ0VmZmVjdCIsInByZXYiLCJuZXh0Q2hhckluZGV4IiwibGVuZ3RoIiwic2xpY2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJzdGFydCIsIm9wYWNpdHkiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJfanN4REVWIiwiQ29udGVudFNlY3Rpb24iLCJjaGlsZHJlbiIsIkFuaW1hdGVPblNjcmVlbiIsIm1vdGlvbiIsImRpdiIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJQcm9qZWN0VGl0bGUiLCJBcnJvdyIsIkltYWdlUHJldmlldyIsInNyYyIsImFsdCIsIkFib3V0RGVzY3JpcHRpb24iLCJXcmFwIiwi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SVVVLDBEQUFZLEVBQ1hBLDBEQUFZLEVBSTlCSSw2REFBYyxFQUNHRSw0REFBYTtBQUFBO0FBQUErQyxFQUFBLEdBVjlCL0QsT0FBTztBQWdKYmdFLGtFQUFBLGdCQUFlQyw0Q0FBSyxDQUFDQyxJQUFJLENBQUNsRSxPQUFPLENBQUMsRUFBQztBQUFBLElBQUErRCxFQUFBLEVBQUFDLEdBQUE7QUFBQUcsWUFBQSxDQUFBSixFQUFBO0FBQUFJLFlBQUEsQ0FBQUgsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC45MmU4ZGJlMjcxMDIxMmRkM2UzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCBBcnJvdyBmcm9tICcuLi8uLi9JY29ucy9BcnJvdyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vLi4vLi4vSG9tZS9Db250YWN0JztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBQcm9qZWN0QW5jaG9yLFxyXG4gIFByb2plY3RJbmZvLFxyXG4gIFByb2plY3RUaXRsZSxcclxuICBJbWFnZVByZXZpZXcsXHJcbiAgQWJvdXREZXNjcmlwdGlvbixcclxuICBXcmFwXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICBkdXJhdGlvbjogMSxcclxuICBlYXNlOiBbMC40LCAwLCAwLjIsIDFdLFxyXG59O1xyXG5cclxuY29uc3Qgd29yZHMgPSBbXCJPdXIgU3RvcnlcIiwgXCJPdXIgTWlzc2lvblwiLCBcIk91ciBWaXNpb25cIl07XHJcblxyXG5jb25zdCBBYm91dFVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50V29yZCwgc2V0Q3VycmVudFdvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3dvcmRJbmRleCwgc2V0V29yZEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc1R5cGluZywgc2V0SXNUeXBpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgY29udHJvbHNJbmZvID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgY29udHJvbHNBcnJvdyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IHtcclxuICAgIGFkZEN1cnNvckJvcmRlcixcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcixcclxuICB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuICBjb25zdCBpc1RhYmxldFZpZXcgPSB1c2VNZWRpYVF1ZXJ5KFxyXG4gICAgKHsgYnJlYWtwb2ludHMgfSkgPT4gYChtYXgtd2lkdGg6JHticmVha3BvaW50cy5zaXplcy50YWJsZXR9cHgpYCxcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdHlwaW5nRWZmZWN0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUeXBpbmcpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCgocHJldikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV4dENoYXJJbmRleCA9IHByZXYubGVuZ3RoIDwgd29yZHNbd29yZEluZGV4XS5sZW5ndGggXHJcbiAgICAgICAgICAgID8gcHJldi5sZW5ndGggKyAxIFxyXG4gICAgICAgICAgICA6IHByZXYubGVuZ3RoO1xyXG4gICAgICAgICAgcmV0dXJuIHdvcmRzW3dvcmRJbmRleF0uc2xpY2UoMCwgbmV4dENoYXJJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQoKHByZXYpID0+IHByZXYuc2xpY2UoMCwgLTEpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIGlmIChjdXJyZW50V29yZC5sZW5ndGggPT09IHdvcmRzW3dvcmRJbmRleF0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzZXRJc1R5cGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzVHlwaW5nKGZhbHNlKSwgMTAwMCk7IC8vIHdhaXQgYmVmb3JlIHN0YXJ0aW5nIHRvIGRlbGV0ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudFdvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRXb3JkSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSB3b3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHR5cGluZ0VmZmVjdCgpO1xyXG4gICAgfSwgaXNUeXBpbmcgPyAxNTAgOiAxMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgfSwgW2N1cnJlbnRXb3JkLCBpc1R5cGluZywgd29yZEluZGV4XSk7XHJcblxyXG4gXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGNvbnRyb2xzSW5mby5zdGFydCh7IG9wYWNpdHk6IDEgfSk7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogMCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlckVuZCA9ICgpID0+IHtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMCB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfSwgW2NvbnRyb2xzQXJyb3csIGlzVGFibGV0Vmlld10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8UHJvamVjdEFuY2hvclxyXG4gICAgICAgICAgICAgIG9uSG92ZXJTdGFydD17aGFuZGxlQW5jaG9ySG92ZXJTdGFydH1cclxuICAgICAgICAgICAgICBvbkhvdmVyRW5kPXtoYW5kbGVBbmNob3JIb3ZlckVuZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0SW5mbz5cclxuICAgICAgICAgICAgICAgIDxoMz57Y3VycmVudFdvcmR9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc0luZm99XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5Kb2luIFVzIG9uIGEgSm91cm5leTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxoND4wMDM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgQUJPVVQgPGJyLz4gVVNcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyb3cgYW5pbWF0ZT17Y29udHJvbHNBcnJvd30gdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9Qcm9qZWN0SW5mbz5cclxuICAgICAgICAgICAgICA8SW1hZ2VQcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIyMzg2LmpwZ1wiIGFsdD1cIkFib3V0IFVzXCIgLz5cclxuICAgICAgICAgICAgICA8L0ltYWdlUHJldmlldz5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0QW5jaG9yPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcblxyXG4gICAgICB7LyogQWJvdXQgRGVzY3JpcHRpb24gKi99XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPEFib3V0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIFdlIGFyZSB0cmFpbGJsYXplcnMgaW4gdmlzdWFsIHRlY2hub2xvZ3ksIHNwZWNpYWxpemluZyBpbiBhdWdtZW50ZWQgcmVhbGl0eSBhcHBsaWNhdGlvbnMgXHJcbiAgICAgICAgICAgIGFuZCB3ZWIgYXBwbGljYXRpb24gZGVzaWduLiBPdXIgbWlzc2lvbiBpcyB0byByZXZvbHV0aW9uaXplIHZpc3VhbCBleHBlcmllbmNlcywgYnJpZGdpbmcgXHJcbiAgICAgICAgICAgIHRoZSBnYXAgYmV0d2VlbiB0aGUgcGh5c2ljYWwgYW5kIGRpZ2l0YWwgd29ybGRzLiBXaXRoIGN1dHRpbmctZWRnZSBzb2x1dGlvbnMgbGlrZSBpbWFnZSBcclxuICAgICAgICAgICAgdHJhY2tpbmcsIDNEIGltYWdlIHRyYWNraW5nLCBhbmQgYXZhdGFyIGNyZWF0aW9uLCB3ZSBlbXBvd2VyIGJ1c2luZXNzZXMgYW5kIGNyZWF0b3JzIHRvIFxyXG4gICAgICAgICAgICByZWRlZmluZSBob3cgd2UgaW50ZXJhY3Qgd2l0aCB0aGUgdmlzdWFsIHdvcmxkLlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvQWJvdXREZXNjcmlwdGlvbj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPFdyYXA+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBPdXIgTWlzc2lvblxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgIFdlIGFyZSB0cmFpbGJsYXplcnMgaW4gdmlzdWFsIHRlY2hub2xvZ3ksIHNwZWNpYWxpemluZyBpbiBhdWdtZW50ZWQgcmVhbGl0eSBhcHBsaWNhdGlvbnMgXHJcbiAgICAgICAgICAgIGFuZCB3ZWIgYXBwbGljYXRpb24gZGVzaWduLiBPdXIgbWlzc2lvbiBpcyB0byByZXZvbHV0aW9uaXplIHZpc3VhbCBleHBlcmllbmNlcywgYnJpZGdpbmcgXHJcbiAgICAgICAgICAgIHRoZSBnYXAgYmV0d2VlbiB0aGUgcGh5c2ljYWwgYW5kIGRpZ2l0YWwgd29ybGRzLiBXaXRoIGN1dHRpbmctZWRnZSBzb2x1dGlvbnMgbGlrZSBpbWFnZSBcclxuICAgICAgICAgICAgdHJhY2tpbmcsIDNEIGltYWdlIHRyYWNraW5nLCBhbmQgYXZhdGFyIGNyZWF0aW9uLCB3ZSBlbXBvd2VyIGJ1c2luZXNzZXMgYW5kIGNyZWF0b3JzIHRvIFxyXG4gICAgICAgICAgICByZWRlZmluZSBob3cgd2UgaW50ZXJhY3Qgd2l0aCB0aGUgdmlzdWFsIHdvcmxkLlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgT3VyIFZpc2lvblxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgIFdlIGFyZSB0cmFpbGJsYXplcnMgaW4gdmlzdWFsIHRlY2hub2xvZ3ksIHNwZWNpYWxpemluZyBpbiBhdWdtZW50ZWQgcmVhbGl0eSBhcHBsaWNhdGlvbnMgXHJcbiAgICAgICAgICAgIGFuZCB3ZWIgYXBwbGljYXRpb24gZGVzaWduLiBPdXIgbWlzc2lvbiBpcyB0byByZXZvbHV0aW9uaXplIHZpc3VhbCBleHBlcmllbmNlcywgYnJpZGdpbmcgXHJcbiAgICAgICAgICAgIHRoZSBnYXAgYmV0d2VlbiB0aGUgcGh5c2ljYWwgYW5kIGRpZ2l0YWwgd29ybGRzLiBXaXRoIGN1dHRpbmctZWRnZSBzb2x1dGlvbnMgbGlrZSBpbWFnZSBcclxuICAgICAgICAgICAgdHJhY2tpbmcsIDNEIGltYWdlIHRyYWNraW5nLCBhbmQgYXZhdGFyIGNyZWF0aW9uLCB3ZSBlbXBvd2VyIGJ1c2luZXNzZXMgYW5kIGNyZWF0b3JzIHRvIFxyXG4gICAgICAgICAgICByZWRlZmluZSBob3cgd2UgaW50ZXJhY3Qgd2l0aCB0aGUgdmlzdWFsIHdvcmxkLlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L1dyYXA+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICBcclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQWJvdXRVcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==
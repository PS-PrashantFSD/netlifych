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
                lineNumber: 99,
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
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h4", {
                  children: "003"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ProjectTitle"], {
                children: ["ABOUT ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 25
                }, undefined), " US", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ImagePreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                src: "2386.jpg",
                alt: "About Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["AboutDescription"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
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
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
            children: "Mission"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Home_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0VXMvQWJvdXRVcy5qc3giXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIndvcmRzIiwiQWJvdXRVcyIsIl9zIiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsInVzZVN0YXRlIiwid29yZEluZGV4Iiwic2V0V29yZEluZGV4IiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsImNvbnRyb2xzSW5mbyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xzQXJyb3ciLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsImlzVGFibGV0VmlldyIsInVzZU1lZGlhUXVlcnkiLCJfcmVmIiwiYnJlYWtwb2ludHMiLCJzaXplcyIsInRhYmxldCIsInVzZUVmZmVjdCIsInR5cGluZ0VmZmVjdCIsInByZXYiLCJuZXh0Q2hhckluZGV4IiwibGVuZ3RoIiwic2xpY2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJzdGFydCIsIm9wYWNpdHkiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJfanN4REVWIiwiQ29udGVudFNlY3Rpb24iLCJjaGlsZHJlbiIsIkFuaW1hdGVPblNjcmVlbiIsIm1vdGlvbiIsImRpdiIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJQcm9qZWN0VGl0bGUiLCJBcnJvdyIsIkltYWdlUHJldmlldyIsInNyYyIsImFsdCIsIkFib3V0RGVzY3JpcHRpb24iLCJDb250YWN0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QUMsZUFDTmhCLG9FQUFBO1VBQUFFLFFBQUEsZUFDRUYsb0VBQUE7WUFBQUUsUUFBQSxFQUFJO1VBQU87WUFBQVcsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQUk7UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDYixDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ1U7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSixDQUFDLGVBRWxCaEIsb0VBQUEsQ0FBQ0csd0RBQWU7TUFBQUQsUUFBQSxlQUNkRixvRUFBQSxDQUFDMEIscURBQU87UUFBQWIsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUU7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSSxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0osQ0FBQztBQUVyQixDQUFDO0FBQUNsRCxFQUFBLENBMUhJRCxPQUFPO0VBQUEsUUFJVVUsMERBQVksRUFDWEEsMERBQVksRUFJOUJJLDZEQUFjLEVBQ0dFLDREQUFhO0FBQUE7QUFBQThDLEVBQUEsR0FWOUI5RCxPQUFPO0FBNEhiK0Qsa0VBQUEsZ0JBQWVDLDRDQUFLLENBQUNDLElBQUksQ0FBQ2pFLE9BQU8sQ0FBQyxFQUFDO0FBQUEsSUFBQThELEVBQUEsRUFBQUMsR0FBQTtBQUFBRyxZQUFBLENBQUFKLEVBQUE7QUFBQUksWUFBQSxDQUFBSCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjQ4OTk3ZDYyOTZiZGJhNTE4MjQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uLy4uL0ljb25zL0Fycm93JztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi8uLi8uLi9Ib21lL0NvbnRhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENvbnRlbnRTZWN0aW9uLFxyXG4gIFByb2plY3RBbmNob3IsXHJcbiAgUHJvamVjdEluZm8sXHJcbiAgUHJvamVjdFRpdGxlLFxyXG4gIEltYWdlUHJldmlldyxcclxuICBBYm91dERlc2NyaXB0aW9uLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZHVyYXRpb246IDEsXHJcbiAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxufTtcclxuXHJcbmNvbnN0IHdvcmRzID0gW1wiT3VyIFN0b3J5XCIsIFwiT3VyIE1pc3Npb25cIiwgXCJPdXIgVmlzaW9uXCJdO1xyXG5cclxuY29uc3QgQWJvdXRVcyA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3b3JkSW5kZXgsIHNldFdvcmRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGNvbnRyb2xzSW5mbyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IGNvbnRyb2xzQXJyb3cgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIsXHJcbiAgICByZW1vdmVDdXJzb3JCb3JkZXIsXHJcbiAgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcbiAgY29uc3QgaXNUYWJsZXRWaWV3ID0gdXNlTWVkaWFRdWVyeShcclxuICAgICh7IGJyZWFrcG9pbnRzIH0pID0+IGAobWF4LXdpZHRoOiR7YnJlYWtwb2ludHMuc2l6ZXMudGFibGV0fXB4KWAsXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR5cGluZ0VmZmVjdCA9ICgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQoKHByZXYpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5leHRDaGFySW5kZXggPSBwcmV2Lmxlbmd0aCA8IHdvcmRzW3dvcmRJbmRleF0ubGVuZ3RoIFxyXG4gICAgICAgICAgICA/IHByZXYubGVuZ3RoICsgMSBcclxuICAgICAgICAgICAgOiBwcmV2Lmxlbmd0aDtcclxuICAgICAgICAgIHJldHVybiB3b3Jkc1t3b3JkSW5kZXhdLnNsaWNlKDAsIG5leHRDaGFySW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKChwcmV2KSA9PiBwcmV2LnNsaWNlKDAsIC0xKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUeXBpbmcpIHtcclxuICAgICAgICBpZiAoY3VycmVudFdvcmQubGVuZ3RoID09PSB3b3Jkc1t3b3JkSW5kZXhdLmxlbmd0aCkge1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1R5cGluZyhmYWxzZSksIDEwMDApOyAvLyB3YWl0IGJlZm9yZSBzdGFydGluZyB0byBkZWxldGVcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0V29yZEluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgd29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgIHNldElzVHlwaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0eXBpbmdFZmZlY3QoKTtcclxuICAgIH0sIGlzVHlwaW5nID8gMTUwIDogMTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gIH0sIFtjdXJyZW50V29yZCwgaXNUeXBpbmcsIHdvcmRJbmRleF0pO1xyXG5cclxuIFxyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlclN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBjb250cm9sc0luZm8uc3RhcnQoeyBvcGFjaXR5OiAxIH0pO1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IDAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJFbmQgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVDdXJzb3JCb3JkZXIoKTtcclxuICAgIGNvbnRyb2xzSW5mby5zdGFydCh7IG9wYWNpdHk6IDAgfSk7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogaXNUYWJsZXRWaWV3ID8gLTI1LjE5IDogLTMzIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogaXNUYWJsZXRWaWV3ID8gLTI1LjE5IDogLTMzIH0pO1xyXG4gIH0sIFtjb250cm9sc0Fycm93LCBpc1RhYmxldFZpZXddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8bW90aW9uLmRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPFByb2plY3RBbmNob3JcclxuICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9e2hhbmRsZUFuY2hvckhvdmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgb25Ib3ZlckVuZD17aGFuZGxlQW5jaG9ySG92ZXJFbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRXb3JkfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHNJbmZvfVxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+Sm9pbiBVcyBvbiBhIEpvdXJuZXk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+MDAzPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIEFCT1VUIDxici8+IFVTXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycm93IGFuaW1hdGU9e2NvbnRyb2xzQXJyb3d9IHRyYW5zaXRpb249e3RyYW5zaXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvUHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgPEltYWdlUHJldmlldz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiMjM4Ni5qcGdcIiBhbHQ9XCJBYm91dCBVc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZVByZXZpZXc+XHJcbiAgICAgICAgICAgIDwvUHJvamVjdEFuY2hvcj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG5cclxuICAgICAgey8qIEFib3V0IERlc2NyaXB0aW9uICovfVxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxBYm91dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgV2UgYXJlIHRyYWlsYmxhemVycyBpbiB2aXN1YWwgdGVjaG5vbG9neSwgc3BlY2lhbGl6aW5nIGluIGF1Z21lbnRlZCByZWFsaXR5IGFwcGxpY2F0aW9ucyBcclxuICAgICAgICAgICAgYW5kIHdlYiBhcHBsaWNhdGlvbiBkZXNpZ24uIE91ciBtaXNzaW9uIGlzIHRvIHJldm9sdXRpb25pemUgdmlzdWFsIGV4cGVyaWVuY2VzLCBicmlkZ2luZyBcclxuICAgICAgICAgICAgdGhlIGdhcCBiZXR3ZWVuIHRoZSBwaHlzaWNhbCBhbmQgZGlnaXRhbCB3b3JsZHMuIFdpdGggY3V0dGluZy1lZGdlIHNvbHV0aW9ucyBsaWtlIGltYWdlIFxyXG4gICAgICAgICAgICB0cmFja2luZywgM0QgaW1hZ2UgdHJhY2tpbmcsIGFuZCBhdmF0YXIgY3JlYXRpb24sIHdlIGVtcG93ZXIgYnVzaW5lc3NlcyBhbmQgY3JlYXRvcnMgdG8gXHJcbiAgICAgICAgICAgIHJlZGVmaW5lIGhvdyB3ZSBpbnRlcmFjdCB3aXRoIHRoZSB2aXN1YWwgd29ybGQuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+TWlzc2lvbjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Fib3V0RGVzY3JpcHRpb24+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgXHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFib3V0VXMpOyJdLCJzb3VyY2VSb290IjoiIn0=
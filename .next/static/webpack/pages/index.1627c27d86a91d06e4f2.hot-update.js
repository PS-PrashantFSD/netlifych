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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["MenuContainer"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Misc_Nexcard__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
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

/***/ }),

/***/ "./components/Misc/Nexcard.jsx":
/*!*************************************!*\
  !*** ./components/Misc/Nexcard.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Nexcard.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "container noselect",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "canvas",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-10"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-12"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-13"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-14"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-15"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-16"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-17"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-19"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-20"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-21"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-22"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-23"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-24"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "tracker tr-25"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          id: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            id: "prompt",
            children: "BRANDING"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "title",
            children: "We understand the importance of a strong brand identity, that's why our team is dedicated to helping you create and maintain a cohesive identity that appeals to your target audience and helps you stand out from the competition."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
_c = Card;
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  /*works janky on mobile :<*/
  .container {
    position: relative;
    width: 500px;
    height: 254px;
    transition: 200ms;
  }

  .container:active {
    width: 500px;
    height: 245px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
    background: #191919;
  }

  .subtitle {
    transform: translateY(160px);
    color: rgb(134, 110, 221);
    text-align: center;
    width: 100%;
  }

  .title {
    opacity: 0;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out-out;
    transition-delay: 100ms;
    position: absolute;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    color: black;
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
  }

  #prompt {
    bottom: 8px;
    left: 12px;
    z-index: 20;
    font-size: 50px;
    font-weight: bold;
    transition: 300ms ease-in-out-out;
    max-width: 1000px;
    color: rgb(255, 255, 255);
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container:hover #card::before {
    transition: 200ms;
    content: "";
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }

  #card::before {
    content: "";
    background: #ffcc00;
    opacity: 0%;
    width: 105%;
    height: 105%;
    border-radius: 20px;
    position: absolute;
    z-index: -;
    transition: 200ms;
  }

  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-2:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-3:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-4:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-5:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-6:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-7:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-8:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-9:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-10:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-11:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-12:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-13:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-14:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-15:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-16:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-17:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-18:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-19:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-20:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-21:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-22:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-23:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-24:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-25:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently
  									supported by Chrome, Edge, Opera and Firefox */
  }`;
_c2 = StyledWrapper;
/* harmony default export */ __webpack_exports__["default"] = (Card);
var _c, _c2;
$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "StyledWrapper");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0ZlYXR1cmVkUHJvamVjdC9GZWF0dXJlZFByb2plY3QuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01pc2MvTmV4Y2FyZC5qc3giXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIndvcmRzIiwiRmVhdHVyZWRQcm9qZWN0IiwiX3MiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwidXNlU3RhdGUiLCJ3b3JkSW5kZXgiLCJzZXRXb3JkSW5kZXgiLCJpc1R5cGluZyIsInNldElzVHlwaW5nIiwiY29udHJvbHNJbmZvIiwidXNlQW5pbWF0aW9uIiwiY29udHJvbHNBcnJvdyIsInRoZW1lIiwidXNlU3R5bGVkVGhlbWUiLCJpc01lbnVPcGVuIiwidXNlTWVudUNvbnRleHQiLCJhZGRDdXJzb3JDb2xvciIsInJlc2V0Q3Vyc29yQ29sb3IiLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsImlzVGFibGV0VmlldyIsInVzZU1lZGlhUXVlcnkiLCJfcmVmIiwiYnJlYWtwb2ludHMiLCJzaXplcyIsInRhYmxldCIsInVzZUVmZmVjdCIsInR5cGluZ0VmZmVjdCIsInByZXYiLCJuZXh0Q2hhckluZGV4IiwibGVuZ3RoIiwic2xpY2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZU1vdXNlRW50ZXIiLCJ0ZXh0IiwiaGFuZGxlTW91c2VMZWF2ZSIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJzdGFydCIsIm9wYWNpdHkiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJfanN4REVWIiwiQ29udGVudFNlY3Rpb24iLCJjaGlsZHJlbiIsIkFuaW1hdGVPblNjcmVlbiIsIm1vdGlvbiIsImRpdiIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiUHJvamVjdFRpdGxlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiY2xhc3NOYW1lIiwiQXJyb3ciLCJhbmltYXRlIiwiVmlkZW9QcmV2aWV3IiwibG9vcCIsImF1dG9QbGF5IiwibXV0ZWQiLCJzcmMiLCJNZW51Q29udGFpbmVyIiwiTmV4Y2FyZCIsIl9jIiwiJFJlZnJlc2hSZWckIiwiQ2FyZCIsIlN0eWxlZFdyYXBwZXIiLCJpZCIsInN0eWxlZCIsIl9jMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUN3QjtBQUNFO0FBQ0k7QUFDRjtBQUNFO0FBQ1A7QUFDZDtBQUNHO0FBU3ZCO0FBQUE7QUFFbEIsTUFBTUEsVUFBVSxHQUFHO0VBQ2pCQyxRQUFRLEVBQUUsQ0FBQztFQUNYQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxNQUFNQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztBQUUxQyxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQzVCLE1BQU07SUFBQSxHQUFDQyxXQUFXO0lBQUEsR0FBRUM7RUFBYyxJQUFJQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztFQUNsRCxNQUFNO0lBQUEsR0FBQ0MsU0FBUztJQUFBLEdBQUVDO0VBQVksSUFBSUYsc0RBQVEsQ0FBQyxDQUFDLENBQUM7RUFDN0MsTUFBTTtJQUFBLEdBQUNHLFFBQVE7SUFBQSxHQUFFQztFQUFXLElBQUlKLHNEQUFRLENBQUMsSUFBSSxDQUFDO0VBQzlDLE1BQU1LLFlBQVksR0FBR0Msa0VBQVksQ0FBQyxDQUFDO0VBQ25DLE1BQU1DLGFBQWEsR0FBR0Qsa0VBQVksQ0FBQyxDQUFDO0VBQ3BDLE1BQU1FLEtBQUssR0FBR0MscUVBQWMsQ0FBQyxDQUFDO0VBQzlCLE1BQU0sQ0FBQztJQUFFQztFQUFXLENBQUMsQ0FBQyxHQUFHQyxvRUFBYyxDQUFDLENBQUM7RUFDekMsTUFBTTtJQUNKQyxjQUFjO0lBQ2RDLGdCQUFnQjtJQUNoQkMsZUFBZTtJQUNmQztFQUNGLENBQUMsR0FBR0MscUVBQWMsQ0FBQyxDQUFDO0VBQ3BCLE1BQU1DLFlBQVksR0FBR0Msb0VBQWEsQ0FDaENDLElBQUE7SUFBQSxJQUFDO01BQUVDO0lBQVksQ0FBQyxHQUFBRCxJQUFBO0lBQUEsT0FBSyxjQUFjQyxXQUFXLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxLQUFLO0VBQUEsQ0FDbEUsQ0FBQztFQUVEQyx1REFBUyxDQUFDLE1BQU07SUFDZCxNQUFNQyxZQUFZLEdBQUdBLENBQUEsS0FBTTtNQUN6QixJQUFJckIsUUFBUSxFQUFFO1FBQ1pKLGNBQWMsQ0FBRTBCLElBQUksSUFBSztVQUN2QixNQUFNQyxhQUFhLEdBQUdELElBQUksQ0FBQ0UsTUFBTSxHQUFHaEMsS0FBSyxDQUFDTSxTQUFTLENBQUMsQ0FBQzBCLE1BQU0sR0FDdkRGLElBQUksQ0FBQ0UsTUFBTSxHQUFHLENBQUMsR0FDZkYsSUFBSSxDQUFDRSxNQUFNO1VBQ2YsT0FBT2hDLEtBQUssQ0FBQ00sU0FBUyxDQUFDLENBQUMyQixLQUFLLENBQUMsQ0FBQyxFQUFFRixhQUFhLENBQUM7UUFDakQsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0wzQixjQUFjLENBQUUwQixJQUFJLElBQUtBLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzdDO0lBQ0YsQ0FBQztJQUVELE1BQU1DLE9BQU8sR0FBR0MsVUFBVSxDQUFDLE1BQU07TUFDL0IsSUFBSTNCLFFBQVEsRUFBRTtRQUNaLElBQUlMLFdBQVcsQ0FBQzZCLE1BQU0sS0FBS2hDLEtBQUssQ0FBQ00sU0FBUyxDQUFDLENBQUMwQixNQUFNLEVBQUU7VUFDbER2QixXQUFXLENBQUMsS0FBSyxDQUFDO1VBQ2xCMEIsVUFBVSxDQUFDLE1BQU0xQixXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3QztNQUNGLENBQUMsTUFBTTtRQUNMLElBQUlOLFdBQVcsQ0FBQzZCLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDNUJ6QixZQUFZLENBQUV1QixJQUFJLElBQUssQ0FBQ0EsSUFBSSxHQUFHLENBQUMsSUFBSTlCLEtBQUssQ0FBQ2dDLE1BQU0sQ0FBQztVQUNqRHZCLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbkI7TUFDRjtNQUNBb0IsWUFBWSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxFQUFFckIsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFeEIsT0FBTyxNQUFNNEIsWUFBWSxDQUFDRixPQUFPLENBQUM7RUFDcEMsQ0FBQyxFQUFFLENBQUMvQixXQUFXLEVBQUVLLFFBQVEsRUFBRUYsU0FBUyxDQUFDLENBQUM7RUFFdEMsTUFBTStCLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0JsQixlQUFlLENBQUMsQ0FBQztJQUNqQkYsY0FBYyxDQUFDSixLQUFLLENBQUN5QixJQUFJLENBQUM7RUFDNUIsQ0FBQztFQUVELE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0IsSUFBSXhCLFVBQVUsRUFBRTtJQUNoQkssa0JBQWtCLENBQUMsQ0FBQztJQUNwQkYsZ0JBQWdCLENBQUMsQ0FBQztFQUNwQixDQUFDO0VBRUQsTUFBTXNCLHNCQUFzQixHQUFHQSxDQUFBLEtBQU07SUFDbkNyQixlQUFlLENBQUMsQ0FBQztJQUNqQlQsWUFBWSxDQUFDK0IsS0FBSyxDQUFDO01BQUVDLE9BQU8sRUFBRTtJQUFFLENBQUMsQ0FBQztJQUNsQzlCLGFBQWEsQ0FBQzZCLEtBQUssQ0FBQztNQUFFRSxDQUFDLEVBQUU7SUFBRSxDQUFDLENBQUM7RUFDL0IsQ0FBQztFQUVELE1BQU1DLG9CQUFvQixHQUFHQSxDQUFBLEtBQU07SUFDakN4QixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BCVixZQUFZLENBQUMrQixLQUFLLENBQUM7TUFBRUMsT0FBTyxFQUFFO0lBQUUsQ0FBQyxDQUFDO0lBQ2xDOUIsYUFBYSxDQUFDNkIsS0FBSyxDQUFDO01BQUVFLENBQUMsRUFBRXJCLFlBQVksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQUcsQ0FBQyxDQUFDO0VBQ3pELENBQUM7RUFFRE0sdURBQVMsQ0FBQyxNQUFNO0lBQ2RoQixhQUFhLENBQUM2QixLQUFLLENBQUM7TUFBRUUsQ0FBQyxFQUFFckIsWUFBWSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7SUFBRyxDQUFDLENBQUM7RUFDekQsQ0FBQyxFQUFFLENBQUNWLGFBQWEsRUFBRVUsWUFBWSxDQUFDLENBQUM7RUFFakMsb0JBQ0V1QixxRUFBQSxDQUFDQyx1REFBYztJQUFBQyxRQUFBLGdCQUNiRixxRUFBQSxDQUFDRyx3REFBZTtNQUFBRCxRQUFBLGVBQ2RGLHFFQUFBLENBQUNJLG9EQUFNLENBQUNDLEdBQUc7UUFBQUgsUUFBQSxlQUNURixxRUFBQSxDQUFDTSxnREFBSTtVQUFDQyxJQUFJLEVBQUMsc0JBQXNCO1VBQUNDLFFBQVE7VUFBQU4sUUFBQSxlQUN4Q0YscUVBQUEsQ0FBQ1Msc0RBQWE7WUFDWkMsWUFBWSxFQUFFZixzQkFBdUI7WUFDckNnQixVQUFVLEVBQUVaLG9CQUFxQjtZQUFBRyxRQUFBLGdCQUVqQ0YscUVBQUEsQ0FBQ1ksb0RBQVc7Y0FBQVYsUUFBQSxlQUNWRixxRUFBQSxDQUFDYSxxREFBWTtnQkFBQVgsUUFBQSxHQUFDLE1BQ1IsZUFBQUYscUVBQUE7a0JBQUFjLFFBQUEsRUFBQUMsWUFBQTtrQkFBQUMsVUFBQTtrQkFBQUMsWUFBQTtnQkFBQSxZQUFLLENBQUMsWUFDVixlQUFBakIscUVBQUE7a0JBQU1rQixTQUFTLEVBQUMsT0FBTztrQkFBQWhCLFFBQUEsZUFDckJGLHFFQUFBLENBQUNtQixvREFBSztvQkFBQ0MsT0FBTyxFQUFFckQsYUFBYztvQkFBQ2YsVUFBVSxFQUFFQTtrQkFBVztvQkFBQThELFFBQUEsRUFBQUMsWUFBQTtvQkFBQUMsVUFBQTtvQkFBQUMsWUFBQTtrQkFBQSxZQUFFO2dCQUFDO2tCQUFBSCxRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsWUFDckQsQ0FBQztjQUFBO2dCQUFBSCxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUNLO1lBQUM7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQ0osQ0FBQyxlQUNkakIscUVBQUEsQ0FBQ3FCLHFEQUFZO2NBQUFuQixRQUFBLGVBQ1hGLHFFQUFBO2dCQUFPc0IsSUFBSTtnQkFBQ0MsUUFBUTtnQkFBQ0MsS0FBSztnQkFBQ0MsR0FBRyxFQUFDO2NBQWlCO2dCQUFBWCxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUFFO1lBQUM7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQ3ZDLENBQUM7VUFBQTtZQUFBSCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFDRjtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNaO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0c7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDRSxDQUFDLGVBQ2xCakIscUVBQUEsQ0FBQ0csd0RBQWU7TUFBQUQsUUFBQSxlQUNkRixxRUFBQSxDQUFDMEIsc0RBQWE7UUFBQXhCLFFBQUEsZUFDWkYscUVBQUEsQ0FBQzJCLHFEQUFPO1VBQUFiLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFDO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0c7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDRCxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0osQ0FBQztBQUVyQixDQUFDO0FBQUM1RCxFQUFBLENBNUdJRCxlQUFlO0VBQUEsUUFJRVUsMERBQVksRUFDWEEsMERBQVksRUFDcEJHLDZEQUFjLEVBQ0hFLDREQUFjLEVBTW5DSyw2REFBYyxFQUNHRSw0REFBYTtBQUFBO0FBQUFrRCxFQUFBLEdBZDlCeEUsZUFBZTtBQThHTkEsOEVBQWUsRUFBQztBQUFBLElBQUF3RSxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJTDtBQUNhO0FBQUE7QUFFdkMsTUFBTUUsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0U5QixvRUFBQSxDQUFDK0IsYUFBYTtJQUFBN0IsUUFBQSxlQUNaRixvRUFBQTtNQUFLa0IsU0FBUyxFQUFDLG9CQUFvQjtNQUFBaEIsUUFBQSxlQUNqQ0Ysb0VBQUE7UUFBS2tCLFNBQVMsRUFBQyxRQUFRO1FBQUFoQixRQUFBLGdCQUNyQkYsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFjO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDaENqQixvRUFBQTtVQUFLa0IsU0FBUyxFQUFDO1FBQWM7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNoQ2pCLG9FQUFBO1VBQUtrQixTQUFTLEVBQUM7UUFBYztVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRSxDQUFDLGVBQ2hDakIsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFjO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDaENqQixvRUFBQTtVQUFLa0IsU0FBUyxFQUFDO1FBQWM7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNoQ2pCLG9FQUFBO1VBQUtrQixTQUFTLEVBQUM7UUFBYztVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRSxDQUFDLGVBQ2hDakIsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFjO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDaENqQixvRUFBQTtVQUFLa0IsU0FBUyxFQUFDO1FBQWM7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNoQ2pCLG9FQUFBO1VBQUtrQixTQUFTLEVBQUM7UUFBYztVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRSxDQUFDLGVBQ2hDakIsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFlO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDakNqQixvRUFBQTtVQUFLa0IsU0FBUyxFQUFDO1FBQWU7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNqQ2pCLG9FQUFBO1VBQUtrQixTQUFTLEVBQUM7UUFBZTtVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRSxDQUFDLGVBQ2pDakIsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFlO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDakNqQixvRUFBQTtVQUFLa0IsU0FBUyxFQUFDO1FBQWU7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNqQ2pCLG9FQUFBO1VBQUtrQixTQUFTLEVBQUM7UUFBZTtVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRSxDQUFDLGVBQ2pDakIsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFlO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDakNqQixvRUFBQTtVQUFLa0IsU0FBUyxFQUFDO1FBQWU7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNqQ2pCLG9FQUFBO1VBQUtrQixTQUFTLEVBQUM7UUFBZTtVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRSxDQUFDLGVBQ2pDakIsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFlO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDakNqQixvRUFBQTtVQUFLa0IsU0FBUyxFQUFDO1FBQWU7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNqQ2pCLG9FQUFBO1VBQUtrQixTQUFTLEVBQUM7UUFBZTtVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRSxDQUFDLGVBQ2pDakIsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFlO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDakNqQixvRUFBQTtVQUFLa0IsU0FBUyxFQUFDO1FBQWU7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNqQ2pCLG9FQUFBO1VBQUtrQixTQUFTLEVBQUM7UUFBZTtVQUFBSixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRSxDQUFDLGVBQ2pDakIsb0VBQUE7VUFBS2tCLFNBQVMsRUFBQztRQUFlO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUMsZUFDakNqQixvRUFBQTtVQUFLZ0MsRUFBRSxFQUFDLE1BQU07VUFBQTlCLFFBQUEsZ0JBQ1pGLG9FQUFBO1lBQUdnQyxFQUFFLEVBQUMsUUFBUTtZQUFBOUIsUUFBQSxFQUFDO1VBQVE7WUFBQVksUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQUcsQ0FBQyxlQUMzQmpCLG9FQUFBO1lBQUtrQixTQUFTLEVBQUMsT0FBTztZQUFBaEIsUUFBQSxFQUFDO1VBS3ZCO1lBQUFZLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFLLENBQUM7UUFBQTtVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDSCxDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0g7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNPLENBQUM7QUFFcEIsQ0FBQztBQUFBVyxFQUFBLEdBM0NLRSxJQUFJO0FBNkNWLE1BQU1DLGFBQWEsR0FBR0UseURBQU0sQ0FBQzVCLEdBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFBQzZCLEdBQUEsR0FsV0NILGFBQWE7QUFvV0pELG1FQUFJLEVBQUM7QUFBQSxJQUFBRixFQUFBLEVBQUFNLEdBQUE7QUFBQUwsWUFBQSxDQUFBRCxFQUFBO0FBQUFDLFlBQUEsQ0FBQUssR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNjI3YzI3ZDg2YTkxZDA2ZTRmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZU1lbnVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9tZW51JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB1c2VTdHlsZWRUaGVtZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VTdHlsZWRUaGVtZSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uLy4uL0ljb25zL0Fycm93JztcclxuaW1wb3J0IE5leGNhcmQgZnJvbSAnLi4vLi4vTWlzYy9OZXhjYXJkJztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBQcm9qZWN0QW5jaG9yLFxyXG4gIFByb2plY3RJbmZvLFxyXG4gIFByb2plY3RUaXRsZSxcclxuICBWaWRlb1ByZXZpZXcsXHJcbiAgTWVudUNvbnRhaW5lcixcclxuICBNZW51QnV0dG9uLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZHVyYXRpb246IDEsXHJcbiAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxufTtcclxuXHJcbmNvbnN0IHdvcmRzID0gW1wibmV4QVJcIiwgXCJuZXhOZXRcIiwgXCJuZXhBaVwiXTtcclxuXHJcbmNvbnN0IEZlYXR1cmVkUHJvamVjdCA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3b3JkSW5kZXgsIHNldFdvcmRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGNvbnRyb2xzSW5mbyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IGNvbnRyb2xzQXJyb3cgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVN0eWxlZFRoZW1lKCk7XHJcbiAgY29uc3QgW3sgaXNNZW51T3BlbiB9XSA9IHVzZU1lbnVDb250ZXh0KCk7XHJcbiAgY29uc3Qge1xyXG4gICAgYWRkQ3Vyc29yQ29sb3IsXHJcbiAgICByZXNldEN1cnNvckNvbG9yLFxyXG4gICAgYWRkQ3Vyc29yQm9yZGVyLFxyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyLFxyXG4gIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG4gIGNvbnN0IGlzVGFibGV0VmlldyA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgICAoeyBicmVha3BvaW50cyB9KSA9PiBgKG1heC13aWR0aDoke2JyZWFrcG9pbnRzLnNpemVzLnRhYmxldH1weClgLFxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eXBpbmdFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKChwcmV2KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0Q2hhckluZGV4ID0gcHJldi5sZW5ndGggPCB3b3Jkc1t3b3JkSW5kZXhdLmxlbmd0aCBcclxuICAgICAgICAgICAgPyBwcmV2Lmxlbmd0aCArIDEgXHJcbiAgICAgICAgICAgIDogcHJldi5sZW5ndGg7XHJcbiAgICAgICAgICByZXR1cm4gd29yZHNbd29yZEluZGV4XS5zbGljZSgwLCBuZXh0Q2hhckluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCgocHJldikgPT4gcHJldi5zbGljZSgwLCAtMSkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA9PT0gd29yZHNbd29yZEluZGV4XS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNldElzVHlwaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNUeXBpbmcodHJ1ZSksIDEwMDApOyAvLyBXYWl0IGJlZm9yZSBzdGFydGluZyB0byBjbGVhclxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudFdvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRXb3JkSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSB3b3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHR5cGluZ0VmZmVjdCgpO1xyXG4gICAgfSwgaXNUeXBpbmcgPyAxNTAgOiAxMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgfSwgW2N1cnJlbnRXb3JkLCBpc1R5cGluZywgd29yZEluZGV4XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGFkZEN1cnNvckNvbG9yKHRoZW1lLnRleHQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNNZW51T3BlbikgcmV0dXJuO1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICByZXNldEN1cnNvckNvbG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJTdGFydCA9ICgpID0+IHtcclxuICAgIGFkZEN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMSB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiAwIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyRW5kID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBjb250cm9sc0luZm8uc3RhcnQoeyBvcGFjaXR5OiAwIH0pO1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9LCBbY29udHJvbHNBcnJvdywgaXNUYWJsZXRWaWV3XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPG1vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL25vdC1odW1ibGVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPFByb2plY3RBbmNob3JcclxuICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9e2hhbmRsZUFuY2hvckhvdmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgb25Ib3ZlckVuZD17aGFuZGxlQW5jaG9ySG92ZXJFbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgPGJyIC8+IFN0YXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyb3cgYW5pbWF0ZT17Y29udHJvbHNBcnJvd30gdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9Qcm9qZWN0SW5mbz5cclxuICAgICAgICAgICAgICA8VmlkZW9QcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvIGxvb3AgYXV0b1BsYXkgbXV0ZWQgc3JjPVwidmlkZW9zL3ZpZG0ubXA0XCIgLz5cclxuICAgICAgICAgICAgICA8L1ZpZGVvUHJldmlldz5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0QW5jaG9yPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPE1lbnVDb250YWluZXI+XHJcbiAgICAgICAgICA8TmV4Y2FyZC8+XHJcbiAgICAgICAgPC9NZW51Q29udGFpbmVyPlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUHJvamVjdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkV3JhcHBlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbm9zZWxlY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbnZhc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTFcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTJcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTNcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTRcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTVcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTZcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTdcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLThcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTlcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTEwXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlciB0ci0xMVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrZXIgdHItMTJcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTEzXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlciB0ci0xNFwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrZXIgdHItMTVcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTE2XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlciB0ci0xN1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrZXIgdHItMThcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTE5XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlciB0ci0yMFwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrZXIgdHItMjFcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTIyXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlciB0ci0yM1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrZXIgdHItMjRcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2VyIHRyLTI1XCIgLz5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxwIGlkPVwicHJvbXB0XCI+QlJBTkRJTkc8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICBXZSB1bmRlcnN0YW5kIHRoZSBpbXBvcnRhbmNlIG9mIGEgc3Ryb25nIGJyYW5kIGlkZW50aXR5LCB0aGF0J3Mgd2h5IG91clxyXG4gICAgICAgICAgICAgIHRlYW0gaXMgZGVkaWNhdGVkIHRvIGhlbHBpbmcgeW91IGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBjb2hlc2l2ZSBpZGVudGl0eVxyXG4gICAgICAgICAgICAgIHRoYXQgYXBwZWFscyB0byB5b3VyIHRhcmdldCBhdWRpZW5jZSBhbmQgaGVscHMgeW91IHN0YW5kIG91dCBmcm9tIHRoZVxyXG4gICAgICAgICAgICAgIGNvbXBldGl0aW9uLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAvKndvcmtzIGphbmt5IG9uIG1vYmlsZSA6PCovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI1NHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyOmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI0NXB4O1xyXG4gIH1cclxuXHJcbiAgI2NhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiA3MDBtcztcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2MHB4KTtcclxuICAgIGNvbG9yOiByZ2IoMTM0LCAxMTAsIDIyMSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQtb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC50cmFja2VyOmhvdmVyIH4gI2NhcmQgLnRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAjcHJvbXB0IHtcclxuICAgIGJvdHRvbTogOHB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dC1vdXQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5cclxuICAudHJhY2tlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50cmFja2VyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC50cmFja2VyOmhvdmVyIH4gI2NhcmQgI3Byb21wdCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLnRyYWNrZXI6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcjpob3ZlciAjY2FyZDo6YmVmb3JlIHtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIG9wYWNpdHk6IDgwJTtcclxuICB9XHJcblxyXG4gIC5jYW52YXMge1xyXG4gICAgcGVyc3BlY3RpdmU6IDgwMHB4O1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgXCJ0ci0xIHRyLTIgdHItMyB0ci00IHRyLTVcIlxyXG4gICAgICBcInRyLTYgdHItNyB0ci04IHRyLTkgdHItMTBcIlxyXG4gICAgICBcInRyLTExIHRyLTEyIHRyLTEzIHRyLTE0IHRyLTE1XCJcclxuICAgICAgXCJ0ci0xNiB0ci0xNyB0ci0xOCB0ci0xOSB0ci0yMFwiXHJcbiAgICAgIFwidHItMjEgdHItMjIgdHItMjMgdHItMjQgdHItMjVcIjtcclxuICB9XHJcblxyXG4gICNjYXJkOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmNjMDA7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICAgIHdpZHRoOiAxMDUlO1xyXG4gICAgaGVpZ2h0OiAxMDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC07XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICB9XHJcblxyXG4gIC50ci0xIHtcclxuICAgIGdyaWQtYXJlYTogdHItMTtcclxuICB9XHJcblxyXG4gIC50ci0yIHtcclxuICAgIGdyaWQtYXJlYTogdHItMjtcclxuICB9XHJcblxyXG4gIC50ci0zIHtcclxuICAgIGdyaWQtYXJlYTogdHItMztcclxuICB9XHJcblxyXG4gIC50ci00IHtcclxuICAgIGdyaWQtYXJlYTogdHItNDtcclxuICB9XHJcblxyXG4gIC50ci01IHtcclxuICAgIGdyaWQtYXJlYTogdHItNTtcclxuICB9XHJcblxyXG4gIC50ci02IHtcclxuICAgIGdyaWQtYXJlYTogdHItNjtcclxuICB9XHJcblxyXG4gIC50ci03IHtcclxuICAgIGdyaWQtYXJlYTogdHItNztcclxuICB9XHJcblxyXG4gIC50ci04IHtcclxuICAgIGdyaWQtYXJlYTogdHItODtcclxuICB9XHJcblxyXG4gIC50ci05IHtcclxuICAgIGdyaWQtYXJlYTogdHItOTtcclxuICB9XHJcblxyXG4gIC50ci0xMCB7XHJcbiAgICBncmlkLWFyZWE6IHRyLTEwO1xyXG4gIH1cclxuXHJcbiAgLnRyLTExIHtcclxuICAgIGdyaWQtYXJlYTogdHItMTE7XHJcbiAgfVxyXG5cclxuICAudHItMTIge1xyXG4gICAgZ3JpZC1hcmVhOiB0ci0xMjtcclxuICB9XHJcblxyXG4gIC50ci0xMyB7XHJcbiAgICBncmlkLWFyZWE6IHRyLTEzO1xyXG4gIH1cclxuXHJcbiAgLnRyLTE0IHtcclxuICAgIGdyaWQtYXJlYTogdHItMTQ7XHJcbiAgfVxyXG5cclxuICAudHItMTUge1xyXG4gICAgZ3JpZC1hcmVhOiB0ci0xNTtcclxuICB9XHJcblxyXG4gIC50ci0xNiB7XHJcbiAgICBncmlkLWFyZWE6IHRyLTE2O1xyXG4gIH1cclxuXHJcbiAgLnRyLTE3IHtcclxuICAgIGdyaWQtYXJlYTogdHItMTc7XHJcbiAgfVxyXG5cclxuICAudHItMTgge1xyXG4gICAgZ3JpZC1hcmVhOiB0ci0xODtcclxuICB9XHJcblxyXG4gIC50ci0xOSB7XHJcbiAgICBncmlkLWFyZWE6IHRyLTE5O1xyXG4gIH1cclxuXHJcbiAgLnRyLTIwIHtcclxuICAgIGdyaWQtYXJlYTogdHItMjA7XHJcbiAgfVxyXG5cclxuICAudHItMjEge1xyXG4gICAgZ3JpZC1hcmVhOiB0ci0yMTtcclxuICB9XHJcblxyXG4gIC50ci0yMiB7XHJcbiAgICBncmlkLWFyZWE6IHRyLTIyO1xyXG4gIH1cclxuXHJcbiAgLnRyLTIzIHtcclxuICAgIGdyaWQtYXJlYTogdHItMjM7XHJcbiAgfVxyXG5cclxuICAudHItMjQge1xyXG4gICAgZ3JpZC1hcmVhOiB0ci0yNDtcclxuICB9XHJcblxyXG4gIC50ci0yNSB7XHJcbiAgICBncmlkLWFyZWE6IHRyLTI1O1xyXG4gIH1cclxuXHJcbiAgLnRyLTE6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgyMGRlZykgcm90YXRlWSgtMTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfVxyXG5cclxuICAudHItMjpob3ZlciB+ICNjYXJkIHtcclxuICAgIHRyYW5zaXRpb246IDEyNW1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDIwZGVnKSByb3RhdGVZKC01ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTM6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgyMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTQ6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgyMGRlZykgcm90YXRlWSg1ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTU6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgyMGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwZGVnKTtcclxuICB9XHJcblxyXG4gIC50ci02OmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTEwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTc6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtNWRlZykgcm90YXRlWigwZGVnKTtcclxuICB9XHJcblxyXG4gIC50ci04OmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcclxuICB9XHJcblxyXG4gIC50ci05OmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoNWRlZykgcm90YXRlWigwZGVnKTtcclxuICB9XHJcblxyXG4gIC50ci0xMDpob3ZlciB+ICNjYXJkIHtcclxuICAgIHRyYW5zaXRpb246IDEyNW1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTExOmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgtMTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfVxyXG5cclxuICAudHItMTI6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKC01ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTEzOmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTE0OmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSg1ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTE1OmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwZGVnKTtcclxuICB9XHJcblxyXG4gIC50ci0xNjpob3ZlciB+ICNjYXJkIHtcclxuICAgIHRyYW5zaXRpb246IDEyNW1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMGRlZykgcm90YXRlWSgtMTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfVxyXG5cclxuICAudHItMTc6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTBkZWcpIHJvdGF0ZVkoLTVkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfVxyXG5cclxuICAudHItMTg6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcclxuICB9XHJcblxyXG4gIC50ci0xOTpob3ZlciB+ICNjYXJkIHtcclxuICAgIHRyYW5zaXRpb246IDEyNW1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMGRlZykgcm90YXRlWSg1ZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTIwOmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTIxOmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTIwZGVnKSByb3RhdGVZKC0xMGRlZykgcm90YXRlWigwZGVnKTtcclxuICB9XHJcblxyXG4gIC50ci0yMjpob3ZlciB+ICNjYXJkIHtcclxuICAgIHRyYW5zaXRpb246IDEyNW1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yMGRlZykgcm90YXRlWSgtNWRlZykgcm90YXRlWigwZGVnKTtcclxuICB9XHJcblxyXG4gIC50ci0yMzpob3ZlciB+ICNjYXJkIHtcclxuICAgIHRyYW5zaXRpb246IDEyNW1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnRyLTI0OmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMTI1bXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTIwZGVnKSByb3RhdGVZKDVkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfVxyXG5cclxuICAudHItMjU6aG92ZXIgfiAjY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMjVtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMjBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfVxyXG5cclxuICAubm9zZWxlY3Qge1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgLyogaU9TIFNhZmFyaSAqL1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC8qIFNhZmFyaSAqL1xyXG4gICAgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XHJcbiAgXHRcdFx0XHRcdFx0XHRcdFx0c3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cclxuICB9YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
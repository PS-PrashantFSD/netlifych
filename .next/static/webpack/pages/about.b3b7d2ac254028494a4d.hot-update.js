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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ContentSection"], {
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
                  lineNumber: 102,
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
                    lineNumber: 109,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h4", {
                    children: "003"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ProjectTitle"], {
                  children: ["ABOUT ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 25
                  }, undefined), " US", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    className: "arrow",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      animate: controlsArrow,
                      transition: transition
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 17
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ImagePreview"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                  src: "2386.jpg",
                  alt: "About Us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["AboutDescription"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            children: "We are trailblazers in visual technology, specializing in augmented reality applications and web application design. Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds. With cutting-edge solutions like image tracking, 3D image tracking, and avatar creation, we empower businesses and creators to redefine how we interact with the visual world."
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["Wrap"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
            children: "Our Mission"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
              children: "Contribute to our community by pioneering innovative solutions that enhance everyday experiences. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 11
            }, undefined), "We are dedicated to delivering unparalleled value to our customers, guided by principles of integrity, sustainability, and continuous improvement."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
            children: "Our Vision"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            children: ["Empower positive change through cutting-edge technologies. ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
              children: "Our vision is to be the leading force in our industry, "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 70
            }, undefined), "driving global impact and inspiring a future where possibilities are limitless."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Home_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0VXMvQWJvdXRVcy5qc3giXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIndvcmRzIiwiQWJvdXRVcyIsIl9zIiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsInVzZVN0YXRlIiwid29yZEluZGV4Iiwic2V0V29yZEluZGV4IiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsImNvbnRyb2xzSW5mbyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xzQXJyb3ciLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsImlzVGFibGV0VmlldyIsInVzZU1lZGlhUXVlcnkiLCJfcmVmIiwiYnJlYWtwb2ludHMiLCJzaXplcyIsInRhYmxldCIsInVzZUVmZmVjdCIsInR5cGluZ0VmZmVjdCIsInByZXYiLCJuZXh0Q2hhckluZGV4IiwibGVuZ3RoIiwic2xpY2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJzdGFydCIsIm9wYWNpdHkiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJfanN4REVWIiwiY2hpbGRyZW4iLCJDb250ZW50U2VjdGlvbiIsIkFuaW1hdGVPblNjcmVlbiIsIm1vdGlvbiIsImRpdiIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJQcm9qZWN0VGl0bGUiLCJBcnJvdyIsIkltYWdlUHJldmlldyIsInNyYyIsImFsdCIsIkFib3V0RGVzY3JpcHRpb24iLCJXcmFwIiwiQ29udGFjdCIsIl9jIiwiX2MyIiwiUmVhY3QiLCJtZW1vIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUN3QjtBQUNNO0FBQ0Y7QUFDTDtBQUNkO0FBQ0s7QUFTekI7QUFBQTtBQUVsQixNQUFNQSxVQUFVLEdBQUc7RUFDakJDLFFBQVEsRUFBRSxDQUFDO0VBQ1hDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQUVELE1BQU1DLEtBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO0FBRXhELE1BQU1DLE9BQU8sR0FBR0EsQ0FBQSxLQUFNO0VBQUFDLEVBQUE7RUFDcEIsTUFBTTtJQUFBLEdBQUNDLFdBQVc7SUFBQSxHQUFFQztFQUFjLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2xELE1BQU07SUFBQSxHQUFDQyxTQUFTO0lBQUEsR0FBRUM7RUFBWSxJQUFJRixzREFBUSxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNO0lBQUEsR0FBQ0csUUFBUTtJQUFBLEdBQUVDO0VBQVcsSUFBSUosc0RBQVEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTUssWUFBWSxHQUFHQyxrRUFBWSxDQUFDLENBQUM7RUFDbkMsTUFBTUMsYUFBYSxHQUFHRCxrRUFBWSxDQUFDLENBQUM7RUFDcEMsTUFBTTtJQUNKRSxlQUFlO0lBQ2ZDO0VBQ0YsQ0FBQyxHQUFHQyxxRUFBYyxDQUFDLENBQUM7RUFDcEIsTUFBTUMsWUFBWSxHQUFHQyxvRUFBYSxDQUNoQ0MsSUFBQTtJQUFBLElBQUM7TUFBRUM7SUFBWSxDQUFDLEdBQUFELElBQUE7SUFBQSxPQUFLLGNBQWNDLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEtBQUs7RUFBQSxDQUNsRSxDQUFDO0VBRURDLHVEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1DLFlBQVksR0FBR0EsQ0FBQSxLQUFNO01BQ3pCLElBQUlmLFFBQVEsRUFBRTtRQUNaSixjQUFjLENBQUVvQixJQUFJLElBQUs7VUFDdkIsTUFBTUMsYUFBYSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sR0FBRzFCLEtBQUssQ0FBQ00sU0FBUyxDQUFDLENBQUNvQixNQUFNLEdBQ3ZERixJQUFJLENBQUNFLE1BQU0sR0FBRyxDQUFDLEdBQ2ZGLElBQUksQ0FBQ0UsTUFBTTtVQUNmLE9BQU8xQixLQUFLLENBQUNNLFNBQVMsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDLENBQUMsRUFBRUYsYUFBYSxDQUFDO1FBQ2pELENBQUMsQ0FBQztNQUNKLENBQUMsTUFBTTtRQUNMckIsY0FBYyxDQUFFb0IsSUFBSSxJQUFLQSxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM3QztJQUNGLENBQUM7SUFFRCxNQUFNQyxPQUFPLEdBQUdDLFVBQVUsQ0FBQyxNQUFNO01BQy9CLElBQUlyQixRQUFRLEVBQUU7UUFDWixJQUFJTCxXQUFXLENBQUN1QixNQUFNLEtBQUsxQixLQUFLLENBQUNNLFNBQVMsQ0FBQyxDQUFDb0IsTUFBTSxFQUFFO1VBQ2xEakIsV0FBVyxDQUFDLEtBQUssQ0FBQztVQUNsQm9CLFVBQVUsQ0FBQyxNQUFNcEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUM7TUFDRixDQUFDLE1BQU07UUFDTCxJQUFJTixXQUFXLENBQUN1QixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzVCbkIsWUFBWSxDQUFFaUIsSUFBSSxJQUFLLENBQUNBLElBQUksR0FBRyxDQUFDLElBQUl4QixLQUFLLENBQUMwQixNQUFNLENBQUM7VUFDakRqQixXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ25CO01BQ0Y7TUFDQWMsWUFBWSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxFQUFFZixRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUV4QixPQUFPLE1BQU1zQixZQUFZLENBQUNGLE9BQU8sQ0FBQztFQUNwQyxDQUFDLEVBQUUsQ0FBQ3pCLFdBQVcsRUFBRUssUUFBUSxFQUFFRixTQUFTLENBQUMsQ0FBQztFQUl0QyxNQUFNeUIsc0JBQXNCLEdBQUdBLENBQUEsS0FBTTtJQUNuQ2xCLGVBQWUsQ0FBQyxDQUFDO0lBQ2pCSCxZQUFZLENBQUNzQixLQUFLLENBQUM7TUFBRUMsT0FBTyxFQUFFO0lBQUUsQ0FBQyxDQUFDO0lBQ2xDckIsYUFBYSxDQUFDb0IsS0FBSyxDQUFDO01BQUVFLENBQUMsRUFBRTtJQUFFLENBQUMsQ0FBQztFQUMvQixDQUFDO0VBRUQsTUFBTUMsb0JBQW9CLEdBQUdBLENBQUEsS0FBTTtJQUNqQ3JCLGtCQUFrQixDQUFDLENBQUM7SUFDcEJKLFlBQVksQ0FBQ3NCLEtBQUssQ0FBQztNQUFFQyxPQUFPLEVBQUU7SUFBRSxDQUFDLENBQUM7SUFDbENyQixhQUFhLENBQUNvQixLQUFLLENBQUM7TUFBRUUsQ0FBQyxFQUFFbEIsWUFBWSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7SUFBRyxDQUFDLENBQUM7RUFDekQsQ0FBQztFQUVETSx1REFBUyxDQUFDLE1BQU07SUFDZFYsYUFBYSxDQUFDb0IsS0FBSyxDQUFDO01BQUVFLENBQUMsRUFBRWxCLFlBQVksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQUcsQ0FBQyxDQUFDO0VBQ3pELENBQUMsRUFBRSxDQUFDSixhQUFhLEVBQUVJLFlBQVksQ0FBQyxDQUFDO0VBRWpDLG9CQUNFb0Isb0VBQUE7SUFBQUMsUUFBQSxnQkFFQUQsb0VBQUEsQ0FBQ0Usc0RBQWM7TUFBQUQsUUFBQSxnQkFDYkQsb0VBQUEsQ0FBQ0csd0RBQWU7UUFBQUYsUUFBQSxlQUNkRCxvRUFBQSxDQUFDSSxvREFBTSxDQUFDQyxHQUFHO1VBQUFKLFFBQUEsZUFDVEQsb0VBQUEsQ0FBQ00sZ0RBQUk7WUFBQ0MsSUFBSSxFQUFDLFFBQVE7WUFBQ0MsUUFBUTtZQUFBUCxRQUFBLGVBQzFCRCxvRUFBQSxDQUFDUyxxREFBYTtjQUNaQyxZQUFZLEVBQUVmLHNCQUF1QjtjQUNyQ2dCLFVBQVUsRUFBRVosb0JBQXFCO2NBQUFFLFFBQUEsZ0JBRWpDRCxvRUFBQSxDQUFDWSxtREFBVztnQkFBQVgsUUFBQSxnQkFDVkQsb0VBQUE7a0JBQUFDLFFBQUEsRUFBS2xDO2dCQUFXO2tCQUFBOEMsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLFlBQUssQ0FBQyxlQUN0QmhCLG9FQUFBLENBQUNJLG9EQUFNLENBQUNDLEdBQUc7a0JBQ1RZLE9BQU8sRUFBRTtvQkFBRXBCLE9BQU8sRUFBRTtrQkFBRSxDQUFFO2tCQUN4QnFCLE9BQU8sRUFBRTVDLFlBQWE7a0JBQ3RCYixVQUFVLEVBQUVBLFVBQVc7a0JBQ3ZCMEQsU0FBUyxFQUFDLGNBQWM7a0JBQUFsQixRQUFBLGdCQUV4QkQsb0VBQUE7b0JBQUFDLFFBQUEsRUFBSTtrQkFBb0I7b0JBQUFZLFFBQUEsRUFBQUMsWUFBQTtvQkFBQUMsVUFBQTtvQkFBQUMsWUFBQTtrQkFBQSxZQUFJLENBQUMsZUFDN0JoQixvRUFBQTtvQkFBQUMsUUFBQSxFQUFJO2tCQUFHO29CQUFBWSxRQUFBLEVBQUFDLFlBQUE7b0JBQUFDLFVBQUE7b0JBQUFDLFlBQUE7a0JBQUEsWUFBSSxDQUFDO2dCQUFBO2tCQUFBSCxRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsWUFDRixDQUFDLGVBQ2JoQixvRUFBQSxDQUFDb0Isb0RBQVk7a0JBQUFuQixRQUFBLEdBQUMsUUFDTixlQUFBRCxvRUFBQTtvQkFBQWEsUUFBQSxFQUFBQyxZQUFBO29CQUFBQyxVQUFBO29CQUFBQyxZQUFBO2tCQUFBLFlBQUksQ0FBQyxPQUNYLGVBQUFoQixvRUFBQTtvQkFBTW1CLFNBQVMsRUFBQyxPQUFPO29CQUFBbEIsUUFBQSxlQUNyQkQsb0VBQUEsQ0FBQ3FCLG9EQUFLO3NCQUFDSCxPQUFPLEVBQUUxQyxhQUFjO3NCQUFDZixVQUFVLEVBQUVBO29CQUFXO3NCQUFBb0QsUUFBQSxFQUFBQyxZQUFBO3NCQUFBQyxVQUFBO3NCQUFBQyxZQUFBO29CQUFBLFlBQUU7a0JBQUM7b0JBQUFILFFBQUEsRUFBQUMsWUFBQTtvQkFBQUMsVUFBQTtvQkFBQUMsWUFBQTtrQkFBQSxZQUNyRCxDQUFDO2dCQUFBO2tCQUFBSCxRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsWUFDSyxDQUFDO2NBQUE7Z0JBQUFILFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLFlBQ0osQ0FBQyxlQUNkaEIsb0VBQUEsQ0FBQ3NCLG9EQUFZO2dCQUFBckIsUUFBQSxlQUNYRCxvRUFBQTtrQkFBS3VCLEdBQUcsRUFBQyxVQUFVO2tCQUFDQyxHQUFHLEVBQUM7Z0JBQVU7a0JBQUFYLFFBQUEsRUFBQUMsWUFBQTtrQkFBQUMsVUFBQTtrQkFBQUMsWUFBQTtnQkFBQSxZQUFFO2NBQUM7Z0JBQUFILFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLFlBQ3pCLENBQUM7WUFBQTtjQUFBSCxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFDRjtVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNaO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ0c7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDRSxDQUFDLGVBR2xCaEIsb0VBQUEsQ0FBQ0csd0RBQWU7UUFBQUYsUUFBQSxlQUNkRCxvRUFBQSxDQUFDeUIsd0RBQWdCO1VBQUF4QixRQUFBLGVBQ2ZELG9FQUFBO1lBQUFDLFFBQUEsRUFBRztVQU1IO1lBQUFZLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFHO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBRVk7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSixDQUFDLGVBQ2xCaEIsb0VBQUEsQ0FBQ0csd0RBQWU7UUFBQUYsUUFBQSxlQUNkRCxvRUFBQSxDQUFDMEIsNENBQUk7VUFBQXpCLFFBQUEsZ0JBQ0xELG9FQUFBO1lBQUFDLFFBQUEsRUFBSTtVQUVGO1lBQUFZLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFJLENBQUMsZUFDTGhCLG9FQUFBO1lBQUFDLFFBQUEsZ0JBQ0FELG9FQUFBO2NBQUFDLFFBQUEsRUFBUTtZQUFrRztjQUFBWSxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFBUSxDQUFDLHNKQUduSDtVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFHLENBQUMsZUFFSmhCLG9FQUFBO1lBQUFDLFFBQUEsRUFBSTtVQUVKO1lBQUFZLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFJLENBQUMsZUFDTGhCLG9FQUFBO1lBQUFDLFFBQUEsR0FBRyw2REFDd0QsZUFBQUQsb0VBQUE7Y0FBQUMsUUFBQSxFQUFRO1lBQ3BDO2NBQUFZLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxZQUFRLENBQUMsbUZBRXhDO1VBQUE7WUFBQUgsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQUcsQ0FBQztRQUFBO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNBO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ1EsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUtKLENBQUMsZUFDakJoQixvRUFBQSxDQUFDRyx3REFBZTtNQUFBRixRQUFBLGVBQ2hCRCxvRUFBQSxDQUFDMkIscURBQU87UUFBQWQsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUU7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDTSxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBRWIsQ0FBQztBQUVWLENBQUM7QUFBQ2xELEVBQUEsQ0FsSklELE9BQU87RUFBQSxRQUlVVSwwREFBWSxFQUNYQSwwREFBWSxFQUk5QkksNkRBQWMsRUFDR0UsNERBQWE7QUFBQTtBQUFBK0MsRUFBQSxHQVY5Qi9ELE9BQU87QUFvSmJnRSxrRUFBQSxnQkFBZUMsNENBQUssQ0FBQ0MsSUFBSSxDQUFDbEUsT0FBTyxDQUFDLEVBQUM7QUFBQSxJQUFBK0QsRUFBQSxFQUFBQyxHQUFBO0FBQUFHLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFILEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYjNiN2QyYWMyNTQwMjg0OTRhNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vSWNvbnMvQXJyb3cnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLy4uLy4uL0hvbWUvQ29udGFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ29udGVudFNlY3Rpb24sXHJcbiAgUHJvamVjdEFuY2hvcixcclxuICBQcm9qZWN0SW5mbyxcclxuICBQcm9qZWN0VGl0bGUsXHJcbiAgSW1hZ2VQcmV2aWV3LFxyXG4gIEFib3V0RGVzY3JpcHRpb24sXHJcbiAgV3JhcFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZHVyYXRpb246IDEsXHJcbiAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxufTtcclxuXHJcbmNvbnN0IHdvcmRzID0gW1wiT3VyIFN0b3J5XCIsIFwiT3VyIE1pc3Npb25cIiwgXCJPdXIgVmlzaW9uXCJdO1xyXG5cclxuY29uc3QgQWJvdXRVcyA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3b3JkSW5kZXgsIHNldFdvcmRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGNvbnRyb2xzSW5mbyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IGNvbnRyb2xzQXJyb3cgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIsXHJcbiAgICByZW1vdmVDdXJzb3JCb3JkZXIsXHJcbiAgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcbiAgY29uc3QgaXNUYWJsZXRWaWV3ID0gdXNlTWVkaWFRdWVyeShcclxuICAgICh7IGJyZWFrcG9pbnRzIH0pID0+IGAobWF4LXdpZHRoOiR7YnJlYWtwb2ludHMuc2l6ZXMudGFibGV0fXB4KWAsXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR5cGluZ0VmZmVjdCA9ICgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQoKHByZXYpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5leHRDaGFySW5kZXggPSBwcmV2Lmxlbmd0aCA8IHdvcmRzW3dvcmRJbmRleF0ubGVuZ3RoIFxyXG4gICAgICAgICAgICA/IHByZXYubGVuZ3RoICsgMSBcclxuICAgICAgICAgICAgOiBwcmV2Lmxlbmd0aDtcclxuICAgICAgICAgIHJldHVybiB3b3Jkc1t3b3JkSW5kZXhdLnNsaWNlKDAsIG5leHRDaGFySW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKChwcmV2KSA9PiBwcmV2LnNsaWNlKDAsIC0xKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUeXBpbmcpIHtcclxuICAgICAgICBpZiAoY3VycmVudFdvcmQubGVuZ3RoID09PSB3b3Jkc1t3b3JkSW5kZXhdLmxlbmd0aCkge1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1R5cGluZyhmYWxzZSksIDEwMDApOyAvLyB3YWl0IGJlZm9yZSBzdGFydGluZyB0byBkZWxldGVcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0V29yZEluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgd29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgIHNldElzVHlwaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0eXBpbmdFZmZlY3QoKTtcclxuICAgIH0sIGlzVHlwaW5nID8gMTUwIDogMTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gIH0sIFtjdXJyZW50V29yZCwgaXNUeXBpbmcsIHdvcmRJbmRleF0pO1xyXG5cclxuIFxyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlclN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBjb250cm9sc0luZm8uc3RhcnQoeyBvcGFjaXR5OiAxIH0pO1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IDAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJFbmQgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVDdXJzb3JCb3JkZXIoKTtcclxuICAgIGNvbnRyb2xzSW5mby5zdGFydCh7IG9wYWNpdHk6IDAgfSk7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogaXNUYWJsZXRWaWV3ID8gLTI1LjE5IDogLTMzIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogaXNUYWJsZXRWaWV3ID8gLTI1LjE5IDogLTMzIH0pO1xyXG4gIH0sIFtjb250cm9sc0Fycm93LCBpc1RhYmxldFZpZXddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICBcclxuICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8bW90aW9uLmRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPFByb2plY3RBbmNob3JcclxuICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9e2hhbmRsZUFuY2hvckhvdmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgb25Ib3ZlckVuZD17aGFuZGxlQW5jaG9ySG92ZXJFbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRXb3JkfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHNJbmZvfVxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+Sm9pbiBVcyBvbiBhIEpvdXJuZXk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+MDAzPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIEFCT1VUIDxici8+IFVTXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycm93IGFuaW1hdGU9e2NvbnRyb2xzQXJyb3d9IHRyYW5zaXRpb249e3RyYW5zaXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvUHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgPEltYWdlUHJldmlldz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiMjM4Ni5qcGdcIiBhbHQ9XCJBYm91dCBVc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZVByZXZpZXc+XHJcbiAgICAgICAgICAgIDwvUHJvamVjdEFuY2hvcj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG5cclxuICAgICAgey8qIEFib3V0IERlc2NyaXB0aW9uICovfVxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxBYm91dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFdlIGFyZSB0cmFpbGJsYXplcnMgaW4gdmlzdWFsIHRlY2hub2xvZ3ksIHNwZWNpYWxpemluZyBpbiBhdWdtZW50ZWQgcmVhbGl0eSBhcHBsaWNhdGlvbnMgXHJcbiAgICAgICAgICAgIGFuZCB3ZWIgYXBwbGljYXRpb24gZGVzaWduLiBPdXIgbWlzc2lvbiBpcyB0byByZXZvbHV0aW9uaXplIHZpc3VhbCBleHBlcmllbmNlcywgYnJpZGdpbmcgXHJcbiAgICAgICAgICAgIHRoZSBnYXAgYmV0d2VlbiB0aGUgcGh5c2ljYWwgYW5kIGRpZ2l0YWwgd29ybGRzLiBXaXRoIGN1dHRpbmctZWRnZSBzb2x1dGlvbnMgbGlrZSBpbWFnZSBcclxuICAgICAgICAgICAgdHJhY2tpbmcsIDNEIGltYWdlIHRyYWNraW5nLCBhbmQgYXZhdGFyIGNyZWF0aW9uLCB3ZSBlbXBvd2VyIGJ1c2luZXNzZXMgYW5kIGNyZWF0b3JzIHRvIFxyXG4gICAgICAgICAgICByZWRlZmluZSBob3cgd2UgaW50ZXJhY3Qgd2l0aCB0aGUgdmlzdWFsIHdvcmxkLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9BYm91dERlc2NyaXB0aW9uPlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8V3JhcD5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIE91ciBNaXNzaW9uXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPkNvbnRyaWJ1dGUgdG8gb3VyIGNvbW11bml0eSBieSBwaW9uZWVyaW5nIGlubm92YXRpdmUgc29sdXRpb25zIHRoYXQgZW5oYW5jZSBldmVyeWRheSBleHBlcmllbmNlcy4gPC9zdHJvbmc+XHJcbiAgICAgICAgICBXZSBhcmUgZGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgdW5wYXJhbGxlbGVkIHZhbHVlIHRvIG91ciBjdXN0b21lcnMsIGd1aWRlZCBieSBwcmluY2lwbGVzIG9mIFxyXG4gICAgICAgICAgaW50ZWdyaXR5LCBzdXN0YWluYWJpbGl0eSwgYW5kIGNvbnRpbnVvdXMgaW1wcm92ZW1lbnQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgT3VyIFZpc2lvblxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgRW1wb3dlciBwb3NpdGl2ZSBjaGFuZ2UgdGhyb3VnaCBjdXR0aW5nLWVkZ2UgdGVjaG5vbG9naWVzLiA8c3Ryb25nPk91ciB2aXNpb24gaXMgdG8gYmUgdGhlIFxyXG4gICAgICAgICAgbGVhZGluZyBmb3JjZSBpbiBvdXIgaW5kdXN0cnksIDwvc3Ryb25nPlxyXG4gICAgICAgICAgZHJpdmluZyBnbG9iYWwgaW1wYWN0IGFuZCBpbnNwaXJpbmcgYSBmdXR1cmUgd2hlcmUgcG9zc2liaWxpdGllcyBhcmUgbGltaXRsZXNzLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvV3JhcD5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgIDxDb250YWN0IC8+XHJcbiAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBYm91dFVzKTsiXSwic291cmNlUm9vdCI6IiJ9
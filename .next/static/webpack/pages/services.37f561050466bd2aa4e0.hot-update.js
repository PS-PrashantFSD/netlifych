webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Home/Services/Services.jsx":
/*!***********************************************!*\
  !*** ./components/Home/Services/Services.jsx ***!
  \***********************************************/
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
/* harmony import */ var _Misc_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Misc/Card */ "./components/Misc/Card.jsx");
/* harmony import */ var _Icons_Arrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Icons/Arrow */ "./components/Icons/Arrow.jsx");
/* harmony import */ var _Home_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../Home/Contact */ "./components/Home/Contact/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./components/Home/Services/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Services\\Services.jsx",
  _s = $RefreshSig$();











const transition = {
  duration: 1,
  ease: [0.4, 0, 0.2, 1]
};
const services = ["nexNet", "nexAR", "nexAI"];
const Services = () => {
  _s();
  const {
    0: currentService,
    1: setCurrentService
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: serviceIndex,
    1: setServiceIndex
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
        setCurrentService(prev => {
          const nextCharIndex = prev.length < services[serviceIndex].length ? prev.length + 1 : prev.length;
          return services[serviceIndex].slice(0, nextCharIndex);
        });
      } else {
        setCurrentService(prev => prev.slice(0, -1));
      }
    };
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentService.length === services[serviceIndex].length) {
          setIsTyping(false);
          setTimeout(() => setIsTyping(false), 1000);
        }
      } else {
        if (currentService.length === 0) {
          setServiceIndex(prev => (prev + 1) % services.length);
          setIsTyping(true);
        }
      }
      typingEffect();
    }, isTyping ? 150 : 100);
    return () => clearTimeout(timeout);
  }, [currentService, isTyping, serviceIndex]);
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/services",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectAnchor"], {
            onHoverStart: handleAnchorHoverStart,
            onHoverEnd: handleAnchorHoverEnd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectInfo"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h3", {
                children: currentService
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
                initial: {
                  opacity: 0
                },
                animate: controlsInfo,
                transition: transition,
                className: "project-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
                  children: "Explore Our Offerings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
                  children: "001"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectTitle"], {
                children: ["OUR ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 23
                }, undefined), " SERVICES", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ImagePreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                src: "108502.jpg",
                alt: "Our Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["AboutDescription"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
          children: "We offer a range of services tailored to meet the unique needs of our clients, including web development, augmented reality solutions, and innovative design services. Our team is dedicated to delivering exceptional results that drive success and engagement."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Misc_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Home_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, undefined);
};
_s(Services, "+66IJq5CHcTty43RQ+TZ7uarUvw=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"]];
});
_c = Services;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Services));
var _c, _c2;
$RefreshReg$(_c, "Services");
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

/***/ }),

/***/ "./components/Misc/Card.jsx":
/*!**********************************!*\
  !*** ./components/Misc/Card.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Card.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-inner",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "card-front",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Front Side"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "card-back",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Back Side"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
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
  .card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #6A2C70;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6A2C70;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #F08A5D;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #F08A5D;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}

`;
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

/***/ }),

/***/ "./components/Misc/Vcard.jsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL1NlcnZpY2VzLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmQuanN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJzZXJ2aWNlcyIsIlNlcnZpY2VzIiwiX3MiLCJjdXJyZW50U2VydmljZSIsInNldEN1cnJlbnRTZXJ2aWNlIiwidXNlU3RhdGUiLCJzZXJ2aWNlSW5kZXgiLCJzZXRTZXJ2aWNlSW5kZXgiLCJpc1R5cGluZyIsInNldElzVHlwaW5nIiwiY29udHJvbHNJbmZvIiwidXNlQW5pbWF0aW9uIiwiY29udHJvbHNBcnJvdyIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaXNUYWJsZXRWaWV3IiwidXNlTWVkaWFRdWVyeSIsIl9yZWYiLCJicmVha3BvaW50cyIsInNpemVzIiwidGFibGV0IiwidXNlRWZmZWN0IiwidHlwaW5nRWZmZWN0IiwicHJldiIsIm5leHRDaGFySW5kZXgiLCJsZW5ndGgiLCJzbGljZSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQW5jaG9ySG92ZXJTdGFydCIsInN0YXJ0Iiwib3BhY2l0eSIsIngiLCJoYW5kbGVBbmNob3JIb3ZlckVuZCIsIl9qc3hERVYiLCJDb250ZW50U2VjdGlvbiIsImNoaWxkcmVuIiwiQW5pbWF0ZU9uU2NyZWVuIiwibW90aW9uIiwiZGl2IiwiTGluayIsImhyZWYiLCJwYXNzSHJlZiIsIlByb2plY3RBbmNob3IiLCJvbkhvdmVyU3RhcnQiLCJvbkhvdmVyRW5kIiwiUHJvamVjdEluZm8iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImNsYXNzTmFtZSIsIlByb2plY3RUaXRsZSIsIkFycm93IiwiSW1hZ2VQcmV2aWV3Iiwic3JjIiwiYWx0IiwiQWJvdXREZXNjcmlwdGlvbiIsIkNhcmQiLCJDb250YWN0IiwiX2MiLCJfYzIiLCJSZWFjdCIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiLCJTdHlsZWRXcmFwcGVyIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFDd0I7QUFDTTtBQUNGO0FBQ0w7QUFDaEI7QUFDRTtBQUNLO0FBUXpCO0FBQUE7QUFFbEIsTUFBTUEsVUFBVSxHQUFHO0VBQ2pCQyxRQUFRLEVBQUUsQ0FBQztFQUNYQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUU3QyxNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQ3JCLE1BQU07SUFBQSxHQUFDQyxjQUFjO0lBQUEsR0FBRUM7RUFBaUIsSUFBSUMsc0RBQVEsQ0FBQyxFQUFFLENBQUM7RUFDeEQsTUFBTTtJQUFBLEdBQUNDLFlBQVk7SUFBQSxHQUFFQztFQUFlLElBQUlGLHNEQUFRLENBQUMsQ0FBQyxDQUFDO0VBQ25ELE1BQU07SUFBQSxHQUFDRyxRQUFRO0lBQUEsR0FBRUM7RUFBVyxJQUFJSixzREFBUSxDQUFDLElBQUksQ0FBQztFQUM5QyxNQUFNSyxZQUFZLEdBQUdDLGtFQUFZLENBQUMsQ0FBQztFQUNuQyxNQUFNQyxhQUFhLEdBQUdELGtFQUFZLENBQUMsQ0FBQztFQUNwQyxNQUFNO0lBQUVFLGVBQWU7SUFBRUM7RUFBbUIsQ0FBQyxHQUFHQyxxRUFBYyxDQUFDLENBQUM7RUFDaEUsTUFBTUMsWUFBWSxHQUFHQyxvRUFBYSxDQUNoQ0MsSUFBQTtJQUFBLElBQUM7TUFBRUM7SUFBWSxDQUFDLEdBQUFELElBQUE7SUFBQSxPQUFLLGNBQWNDLFdBQVcsQ0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUN3QixHQUFBLEdBbkRJSSxhQUFhO0FBcURKUCxtRUFBSSxFQUFDO0FBQUEsSUFBQUUsRUFBQSxFQUFBQyxHQUFBO0FBQUFHLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFILEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuMzdmNTYxMDUwNDY2YmQyYWE0ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLy4uLy4uL01pc2MvQ2FyZCdcclxuaW1wb3J0IEFycm93IGZyb20gJy4uLy4uL0ljb25zL0Fycm93JztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi8uLi8uLi9Ib21lL0NvbnRhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENvbnRlbnRTZWN0aW9uLFxyXG4gIFByb2plY3RBbmNob3IsXHJcbiAgUHJvamVjdEluZm8sXHJcbiAgUHJvamVjdFRpdGxlLFxyXG4gIEltYWdlUHJldmlldyxcclxuICBBYm91dERlc2NyaXB0aW9uLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZHVyYXRpb246IDEsXHJcbiAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxufTtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1wibmV4TmV0XCIsIFwibmV4QVJcIiwgXCJuZXhBSVwiXTtcclxuXHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2VydmljZSwgc2V0Q3VycmVudFNlcnZpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlcnZpY2VJbmRleCwgc2V0U2VydmljZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc1R5cGluZywgc2V0SXNUeXBpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgY29udHJvbHNJbmZvID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgY29udHJvbHNBcnJvdyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcbiAgY29uc3QgaXNUYWJsZXRWaWV3ID0gdXNlTWVkaWFRdWVyeShcclxuICAgICh7IGJyZWFrcG9pbnRzIH0pID0+IGAobWF4LXdpZHRoOiR7YnJlYWtwb2ludHMuc2l6ZXMudGFibGV0fXB4KWAsXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR5cGluZ0VmZmVjdCA9ICgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFNlcnZpY2UoKHByZXYpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5leHRDaGFySW5kZXggPSBwcmV2Lmxlbmd0aCA8IHNlcnZpY2VzW3NlcnZpY2VJbmRleF0ubGVuZ3RoIFxyXG4gICAgICAgICAgICA/IHByZXYubGVuZ3RoICsgMSBcclxuICAgICAgICAgICAgOiBwcmV2Lmxlbmd0aDtcclxuICAgICAgICAgIHJldHVybiBzZXJ2aWNlc1tzZXJ2aWNlSW5kZXhdLnNsaWNlKDAsIG5leHRDaGFySW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEN1cnJlbnRTZXJ2aWNlKChwcmV2KSA9PiBwcmV2LnNsaWNlKDAsIC0xKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUeXBpbmcpIHtcclxuICAgICAgICBpZiAoY3VycmVudFNlcnZpY2UubGVuZ3RoID09PSBzZXJ2aWNlc1tzZXJ2aWNlSW5kZXhdLmxlbmd0aCkge1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1R5cGluZyhmYWxzZSksIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudFNlcnZpY2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRTZXJ2aWNlSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSBzZXJ2aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHR5cGluZ0VmZmVjdCgpO1xyXG4gICAgfSwgaXNUeXBpbmcgPyAxNTAgOiAxMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgfSwgW2N1cnJlbnRTZXJ2aWNlLCBpc1R5cGluZywgc2VydmljZUluZGV4XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGNvbnRyb2xzSW5mby5zdGFydCh7IG9wYWNpdHk6IDEgfSk7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogMCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlckVuZCA9ICgpID0+IHtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMCB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfSwgW2NvbnRyb2xzQXJyb3csIGlzVGFibGV0Vmlld10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8UHJvamVjdEFuY2hvclxyXG4gICAgICAgICAgICAgIG9uSG92ZXJTdGFydD17aGFuZGxlQW5jaG9ySG92ZXJTdGFydH1cclxuICAgICAgICAgICAgICBvbkhvdmVyRW5kPXtoYW5kbGVBbmNob3JIb3ZlckVuZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0SW5mbz5cclxuICAgICAgICAgICAgICAgIDxoMz57Y3VycmVudFNlcnZpY2V9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc0luZm99XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5FeHBsb3JlIE91ciBPZmZlcmluZ3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+MDAxPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIE9VUiA8YnIvPiBTRVJWSUNFU1xyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJvdyBhbmltYXRlPXtjb250cm9sc0Fycm93fSB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RUaXRsZT5cclxuICAgICAgICAgICAgICA8L1Byb2plY3RJbmZvPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVByZXZpZXc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjEwODUwMi5qcGdcIiBhbHQ9XCJPdXIgU2VydmljZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvSW1hZ2VQcmV2aWV3PlxyXG4gICAgICAgICAgICA8L1Byb2plY3RBbmNob3I+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuXHJcbiAgICAgIHsvKiBBYm91dCBEZXNjcmlwdGlvbiAqL31cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8QWJvdXREZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgV2Ugb2ZmZXIgYSByYW5nZSBvZiBzZXJ2aWNlcyB0YWlsb3JlZCB0byBtZWV0IHRoZSB1bmlxdWUgbmVlZHMgb2Ygb3VyIGNsaWVudHMsIFxyXG4gICAgICAgICAgICBpbmNsdWRpbmcgd2ViIGRldmVsb3BtZW50LCBhdWdtZW50ZWQgcmVhbGl0eSBzb2x1dGlvbnMsIGFuZCBpbm5vdmF0aXZlIGRlc2lnbiBzZXJ2aWNlcy4gXHJcbiAgICAgICAgICAgIE91ciB0ZWFtIGlzIGRlZGljYXRlZCB0byBkZWxpdmVyaW5nIGV4Y2VwdGlvbmFsIHJlc3VsdHMgdGhhdCBkcml2ZSBzdWNjZXNzIGFuZCBlbmdhZ2VtZW50LlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L0Fib3V0RGVzY3JpcHRpb24+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxDYXJkLz5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlcnZpY2VzKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZyb250XCI+XHJcbiAgICAgICAgICAgIDxwPkZyb250IFNpZGU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1iYWNrXCI+XHJcbiAgICAgICAgICAgIDxwPkJhY2sgU2lkZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcmQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWlubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOTk5cztcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmNhcmQtaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uY2FyZC1mcm9udCxcclxuLmNhcmQtYmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWZyb250IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkEyQzcwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDEwcHggc29saWQgIzZBMkM3MDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMDhBNUQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjRjA4QTVEO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
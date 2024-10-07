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
/* harmony import */ var _Misc_Vcard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../Misc/Vcard */ "./components/Misc/Vcard.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./components/Home/Services/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/services",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ProjectAnchor"], {
            onHoverStart: handleAnchorHoverStart,
            onHoverEnd: handleAnchorHoverEnd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ProjectInfo"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h3", {
                children: currentService
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
                initial: {
                  opacity: 0
                },
                animate: controlsInfo,
                transition: transition,
                className: "project-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h4", {
                  children: "Explore Our Offerings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h4", {
                  children: "001"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ProjectTitle"], {
                children: ["OUR ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 23
                }, undefined), " SERVICES", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ImagePreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                src: "108502.jpg",
                alt: "Our Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["AboutDescription"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
          children: "We offer a range of services tailored to meet the unique needs of our clients, including web development, augmented reality solutions, and innovative design services. Our team is dedicated to delivering exceptional results that drive success and engagement."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Misc_Vcard__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Home_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL1NlcnZpY2VzLmpzeCJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic2VydmljZXMiLCJTZXJ2aWNlcyIsIl9zIiwiY3VycmVudFNlcnZpY2UiLCJzZXRDdXJyZW50U2VydmljZSIsInVzZVN0YXRlIiwic2VydmljZUluZGV4Iiwic2V0U2VydmljZUluZGV4IiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsImNvbnRyb2xzSW5mbyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xzQXJyb3ciLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsImlzVGFibGV0VmlldyIsInVzZU1lZGlhUXVlcnkiLCJfcmVmIiwiYnJlYWtwb2ludHMiLCJzaXplcyIsInRhYmxldCIsInVzZUVmZmVjdCIsInR5cGluZ0VmZmVjdCIsInByZXYiLCJuZXh0Q2hhckluZGV4IiwibGVuZ3RoIiwic2xpY2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJzdGFydCIsIm9wYWNpdHkiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJfanN4REVWIiwiQ29udGVudFNlY3Rpb24iLCJjaGlsZHJlbiIsIkFuaW1hdGVPblNjcmVlbiIsIm1vdGlvbiIsImRpdiIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJQcm9qZWN0VGl0bGUiLCJBcnJvdyIsIkltYWdlUHJldmlldyIsInNyYyIsImFsdCIsIkFib3V0RGVzY3JpcHRpb24iLCJWY2FyZCIsIkNvbnRhY3QiLCJfYyIsIl9jMiIsIlJlYWN0IiwibWVtbyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUN3QjtBQUNNO0FBQ0Y7QUFDTDtBQUNoQjtBQUNFO0FBQ0s7QUFDTDtBQVFwQjtBQUFBO0FBRWxCLE1BQU1BLFVBQVUsR0FBRztFQUNqQkMsUUFBUSxFQUFFLENBQUM7RUFDWEMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTUMsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7QUFFN0MsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQU07RUFBQUMsRUFBQTtFQUNyQixNQUFNO0lBQUEsR0FBQ0MsY0FBYztJQUFBLEdBQUVDO0VBQWlCLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3hELE1BQU07SUFBQSxHQUFDQyxZQUFZO0lBQUEsR0FBRUM7RUFBZSxJQUFJRixzREFBUSxDQUFDLENBQUMsQ0FBQztFQUNuRCxNQUFNO0lBQUEsR0FBQ0csUUFBUTtJQUFBLEdBQUVDO0VBQVcsSUFBSUosc0RBQVEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTUssWUFBWSxHQUFHQyxrRUFBWSxDQUFDLENBQUM7RUFDbkMsTUFBTUMsYUFBYSxHQUFHRCxrRUFBWSxDQUFDLENBQUM7RUFDcEMsTUFBTTtJQUFFRSxlQUFlO0lBQUVDO0VBQW1CLENBQUMsR0FBR0MscUVBQWMsQ0FBQyxDQUFDO0VBQ2hFLE1BQU1DLFlBQVksR0FBR0Msb0VBQWEsQ0FDaENDLElBQUE7SUFBQSxJQUFDO01BQUVDO0lBQVksQ0FBQyxHQUFBRCxJQUFBO0lBQUEsT0FBSyxjQUFjQyxXQUFXLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxLQUFLO0VBQUEsQ0FDbEUsQ0FBQztFQUVEQyx1REFBUyxDQUFDLE1BQU07SUFDZCxNQUFNQyxZQUFZLEdBQUdBLENBQUEsS0FBTTtNQUN6QixJQUFJZixRQUFRLEVBQUU7UUFDWkosaUJBQWlCLENBQUVvQixJQUFJLElBQUs7VUFDMUIsTUFBTUMsYUFBYSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sR0FBRzFCLFFBQVEsQ0FBQ00sWUFBWSxDQUFDLENBQUNvQixNQUFNLEdBQzdERixJQUFJLENBQUNFLE1BQU0sR0FBRyxDQUFDLEdBQ2ZGLElBQUksQ0FBQ0UsTUFBTTtVQUNmLE9BQU8xQixRQUFRLENBQUNNLFlBQVksQ0FBQyxDQUFDcUIsS0FBSyxDQUFDLENBQUMsRUFBRUYsYUFBYSxDQUFDO1FBQ3ZELENBQUMsQ0FBQztNQUNKLENBQUMsTUFBTTtRQUNMckIsaUJBQWlCLENBQUVvQixJQUFJLElBQUtBLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hEO0lBQ0YsQ0FBQztJQUVELE1BQU1DLE9BQU8sR0FBR0MsVUFBVSxDQUFDLE1BQU07TUFDL0IsSUFBSXJCLFFBQVEsRUFBRTtRQUNaLElBQUlMLGNBQWMsQ0FBQ3VCLE1BQU0sS0FBSzFCLFFBQVEsQ0FBQ00sWUFBWSxDQUFDLENBQUNvQixNQUFNLEVBQUU7VUFDM0RqQixXQUFXLENBQUMsS0FBSyxDQUFDO1VBQ2xCb0IsVUFBVSxDQUFDLE1BQU1wQixXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQzVDO01BQ0YsQ0FBQyxNQUFNO1FBQ0wsSUFBSU4sY0FBYyxDQUFDdUIsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUMvQm5CLGVBQWUsQ0FBRWlCLElBQUksSUFBSyxDQUFDQSxJQUFJLEdBQUcsQ0FBQyxJQUFJeEIsUUFBUSxDQUFDMEIsTUFBTSxDQUFDO1VBQ3ZEakIsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNuQjtNQUNGO01BQ0FjLFlBQVksQ0FBQyxDQUFDO0lBQ2hCLENBQUMsRUFBRWYsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFeEIsT0FBTyxNQUFNc0IsWUFBWSxDQUFDRixPQUFPLENBQUM7RUFDcEMsQ0FBQyxFQUFFLENBQUN6QixjQUFjLEVBQUVLLFFBQVEsRUFBRUYsWUFBWSxDQUFDLENBQUM7RUFFNUMsTUFBTXlCLHNCQUFzQixHQUFHQSxDQUFBLEtBQU07SUFDbkNsQixlQUFlLENBQUMsQ0FBQztJQUNqQkgsWUFBWSxDQUFDc0IsS0FBSyxDQUFDO01BQUVDLE9BQU8sRUFBRTtJQUFFLENBQUMsQ0FBQztJQUNsQ3JCLGFBQWEsQ0FBQ29CLEtBQUssQ0FBQztNQUFFRSxDQUFDLEVBQUU7SUFBRSxDQUFDLENBQUM7RUFDL0IsQ0FBQztFQUVELE1BQU1DLG9CQUFvQixHQUFHQSxDQUFBLEtBQU07SUFDakNyQixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BCSixZQUFZLENBQUNzQixLQUFLLENBQUM7TUFBRUMsT0FBTyxFQUFFO0lBQUUsQ0FBQyxDQUFDO0lBQ2xDckIsYUFBYSxDQUFDb0IsS0FBSyxDQUFDO01BQUVFLENBQUMsRUFBRWxCLFlBQVksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQUcsQ0FBQyxDQUFDO0VBQ3pELENBQUM7RUFFRE0sdURBQVMsQ0FBQyxNQUFNO0lBQ2RWLGFBQWEsQ0FBQ29CLEtBQUssQ0FBQztNQUFFRSxDQUFDLEVBQUVsQixZQUFZLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUFHLENBQUMsQ0FBQztFQUN6RCxDQUFDLEVBQUUsQ0FBQ0osYUFBYSxFQUFFSSxZQUFZLENBQUMsQ0FBQztFQUVqQyxvQkFDRW9CLHFFQUFBLENBQUNDLHVEQUFjO0lBQUFDLFFBQUEsZ0JBQ2JGLHFFQUFBLENBQUNHLHdEQUFlO01BQUFELFFBQUEsZUFDZEYscUVBQUEsQ0FBQ0ksb0RBQU0sQ0FBQ0MsR0FBRztRQUFBSCxRQUFBLGVBQ1RGLHFFQUFBLENBQUNNLGdEQUFJO1VBQUNDLElBQUksRUFBQyxXQUFXO1VBQUNDLFFBQVE7VUFBQU4sUUFBQSxlQUM3QkYscUVBQUEsQ0FBQ1Msc0RBQWE7WUFDWkMsWUFBWSxFQUFFZixzQkFBdUI7WUFDckNnQixVQUFVLEVBQUVaLG9CQUFxQjtZQUFBRyxRQUFBLGdCQUVqQ0YscUVBQUEsQ0FBQ1ksb0RBQVc7Y0FBQVYsUUFBQSxnQkFDVkYscUVBQUE7Z0JBQUFFLFFBQUEsRUFBS25DO2NBQWM7Z0JBQUE4QyxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUFLLENBQUMsZUFDekJoQixxRUFBQSxDQUFDSSxvREFBTSxDQUFDQyxHQUFHO2dCQUNUWSxPQUFPLEVBQUU7a0JBQUVwQixPQUFPLEVBQUU7Z0JBQUUsQ0FBRTtnQkFDeEJxQixPQUFPLEVBQUU1QyxZQUFhO2dCQUN0QmIsVUFBVSxFQUFFQSxVQUFXO2dCQUN2QjBELFNBQVMsRUFBQyxjQUFjO2dCQUFBakIsUUFBQSxnQkFFeEJGLHFFQUFBO2tCQUFBRSxRQUFBLEVBQUk7Z0JBQXFCO2tCQUFBVyxRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsWUFBSSxDQUFDLGVBQzlCaEIscUVBQUE7a0JBQUFFLFFBQUEsRUFBSTtnQkFBRztrQkFBQVcsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLFlBQUksQ0FBQztjQUFBO2dCQUFBSCxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUNGLENBQUMsZUFDYmhCLHFFQUFBLENBQUNvQixxREFBWTtnQkFBQWxCLFFBQUEsR0FBQyxNQUNSLGVBQUFGLHFFQUFBO2tCQUFBYSxRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsWUFBSSxDQUFDLGFBQ1QsZUFBQWhCLHFFQUFBO2tCQUFNbUIsU0FBUyxFQUFDLE9BQU87a0JBQUFqQixRQUFBLGVBQ3JCRixxRUFBQSxDQUFDcUIsb0RBQUs7b0JBQUNILE9BQU8sRUFBRTFDLGFBQWM7b0JBQUNmLFVBQVUsRUFBRUE7a0JBQVc7b0JBQUFvRCxRQUFBLEVBQUFDLFlBQUE7b0JBQUFDLFVBQUE7b0JBQUFDLFlBQUE7a0JBQUEsWUFBRTtnQkFBQztrQkFBQUgsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLFlBQ3JELENBQUM7Y0FBQTtnQkFBQUgsUUFBQSxFQUFBQyxZQUFBO2dCQUFBQyxVQUFBO2dCQUFBQyxZQUFBO2NBQUEsWUFDSyxDQUFDO1lBQUE7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQ0osQ0FBQyxlQUNkaEIscUVBQUEsQ0FBQ3NCLHFEQUFZO2NBQUFwQixRQUFBLGVBQ1hGLHFFQUFBO2dCQUFLdUIsR0FBRyxFQUFDLFlBQVk7Z0JBQUNDLEdBQUcsRUFBQztjQUFjO2dCQUFBWCxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUFFO1lBQUM7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQy9CLENBQUM7VUFBQTtZQUFBSCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFDRjtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNaO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0c7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDRSxDQUFDLGVBR2xCaEIscUVBQUEsQ0FBQ0csd0RBQWU7TUFBQUQsUUFBQSxlQUNkRixxRUFBQSxDQUFDeUIseURBQWdCO1FBQUF2QixRQUFBLGVBQ2ZGLHFFQUFBO1VBQUFFLFFBQUEsRUFBSTtRQUlKO1VBQUFXLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFJO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ1c7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSixDQUFDLGVBQ2xCaEIscUVBQUEsQ0FBQ0csd0RBQWU7TUFBQUQsUUFBQSxlQUNkRixxRUFBQSxDQUFDMEIsbURBQUs7UUFBQWIsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUM7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDTyxDQUFDLGVBQ2xCaEIscUVBQUEsQ0FBQ0csd0RBQWU7TUFBQUQsUUFBQSxlQUNkRixxRUFBQSxDQUFDMkIscURBQU87UUFBQWQsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUU7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSSxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0osQ0FBQztBQUVyQixDQUFDO0FBQUNsRCxFQUFBLENBaEhJRCxRQUFRO0VBQUEsUUFJU1UsMERBQVksRUFDWEEsMERBQVksRUFDY0ksNkRBQWMsRUFDekNFLDREQUFhO0FBQUE7QUFBQStDLEVBQUEsR0FQOUIvRCxRQUFRO0FBa0hkZ0Usa0VBQUEsZ0JBQWVDLDRDQUFLLENBQUNDLElBQUksQ0FBQ2xFLFFBQVEsQ0FBQyxFQUFDO0FBQUEsSUFBQStELEVBQUEsRUFBQUMsR0FBQTtBQUFBRyxZQUFBLENBQUFKLEVBQUE7QUFBQUksWUFBQSxDQUFBSCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZpY2VzLjc4ZmE4NTQ0MmU4MGNjODgyNjU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi8uLi8uLi9NaXNjL0NhcmQnXHJcbmltcG9ydCBBcnJvdyBmcm9tICcuLi8uLi9JY29ucy9BcnJvdyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vLi4vLi4vSG9tZS9Db250YWN0JztcclxuaW1wb3J0IFZjYXJkIGZyb20gJy4vLi4vLi4vTWlzYy9WY2FyZCdcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBQcm9qZWN0QW5jaG9yLFxyXG4gIFByb2plY3RJbmZvLFxyXG4gIFByb2plY3RUaXRsZSxcclxuICBJbWFnZVByZXZpZXcsXHJcbiAgQWJvdXREZXNjcmlwdGlvbixcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIGR1cmF0aW9uOiAxLFxyXG4gIGVhc2U6IFswLjQsIDAsIDAuMiwgMV0sXHJcbn07XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcIm5leE5ldFwiLCBcIm5leEFSXCIsIFwibmV4QUlcIl07XHJcblxyXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudFNlcnZpY2UsIHNldEN1cnJlbnRTZXJ2aWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZXJ2aWNlSW5kZXgsIHNldFNlcnZpY2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGNvbnRyb2xzSW5mbyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IGNvbnRyb2xzQXJyb3cgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG4gIGNvbnN0IGlzVGFibGV0VmlldyA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgICAoeyBicmVha3BvaW50cyB9KSA9PiBgKG1heC13aWR0aDoke2JyZWFrcG9pbnRzLnNpemVzLnRhYmxldH1weClgLFxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eXBpbmdFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIHNldEN1cnJlbnRTZXJ2aWNlKChwcmV2KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0Q2hhckluZGV4ID0gcHJldi5sZW5ndGggPCBzZXJ2aWNlc1tzZXJ2aWNlSW5kZXhdLmxlbmd0aCBcclxuICAgICAgICAgICAgPyBwcmV2Lmxlbmd0aCArIDEgXHJcbiAgICAgICAgICAgIDogcHJldi5sZW5ndGg7XHJcbiAgICAgICAgICByZXR1cm4gc2VydmljZXNbc2VydmljZUluZGV4XS5zbGljZSgwLCBuZXh0Q2hhckluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDdXJyZW50U2VydmljZSgocHJldikgPT4gcHJldi5zbGljZSgwLCAtMSkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTZXJ2aWNlLmxlbmd0aCA9PT0gc2VydmljZXNbc2VydmljZUluZGV4XS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNldElzVHlwaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNUeXBpbmcoZmFsc2UpLCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTZXJ2aWNlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0U2VydmljZUluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgc2VydmljZXMubGVuZ3RoKTtcclxuICAgICAgICAgIHNldElzVHlwaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0eXBpbmdFZmZlY3QoKTtcclxuICAgIH0sIGlzVHlwaW5nID8gMTUwIDogMTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gIH0sIFtjdXJyZW50U2VydmljZSwgaXNUeXBpbmcsIHNlcnZpY2VJbmRleF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlclN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBjb250cm9sc0luZm8uc3RhcnQoeyBvcGFjaXR5OiAxIH0pO1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IDAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJFbmQgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVDdXJzb3JCb3JkZXIoKTtcclxuICAgIGNvbnRyb2xzSW5mby5zdGFydCh7IG9wYWNpdHk6IDAgfSk7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogaXNUYWJsZXRWaWV3ID8gLTI1LjE5IDogLTMzIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogaXNUYWJsZXRWaWV3ID8gLTI1LjE5IDogLTMzIH0pO1xyXG4gIH0sIFtjb250cm9sc0Fycm93LCBpc1RhYmxldFZpZXddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8bW90aW9uLmRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPFByb2plY3RBbmNob3JcclxuICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9e2hhbmRsZUFuY2hvckhvdmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgb25Ib3ZlckVuZD17aGFuZGxlQW5jaG9ySG92ZXJFbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRTZXJ2aWNlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHNJbmZvfVxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+RXhwbG9yZSBPdXIgT2ZmZXJpbmdzPC9oND5cclxuICAgICAgICAgICAgICAgICAgPGg0PjAwMTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICBPVVIgPGJyLz4gU0VSVklDRVNcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyb3cgYW5pbWF0ZT17Y29udHJvbHNBcnJvd30gdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9Qcm9qZWN0SW5mbz5cclxuICAgICAgICAgICAgICA8SW1hZ2VQcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIxMDg1MDIuanBnXCIgYWx0PVwiT3VyIFNlcnZpY2VzXCIgLz5cclxuICAgICAgICAgICAgICA8L0ltYWdlUHJldmlldz5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0QW5jaG9yPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcblxyXG4gICAgICB7LyogQWJvdXQgRGVzY3JpcHRpb24gKi99XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPEFib3V0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIFdlIG9mZmVyIGEgcmFuZ2Ugb2Ygc2VydmljZXMgdGFpbG9yZWQgdG8gbWVldCB0aGUgdW5pcXVlIG5lZWRzIG9mIG91ciBjbGllbnRzLCBcclxuICAgICAgICAgICAgaW5jbHVkaW5nIHdlYiBkZXZlbG9wbWVudCwgYXVnbWVudGVkIHJlYWxpdHkgc29sdXRpb25zLCBhbmQgaW5ub3ZhdGl2ZSBkZXNpZ24gc2VydmljZXMuIFxyXG4gICAgICAgICAgICBPdXIgdGVhbSBpcyBkZWRpY2F0ZWQgdG8gZGVsaXZlcmluZyBleGNlcHRpb25hbCByZXN1bHRzIHRoYXQgZHJpdmUgc3VjY2VzcyBhbmQgZW5nYWdlbWVudC5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9BYm91dERlc2NyaXB0aW9uPlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8VmNhcmQvPlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VydmljZXMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
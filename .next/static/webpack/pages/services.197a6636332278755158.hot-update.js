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
/* harmony import */ var _Icons_Arrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Icons/Arrow */ "./components/Icons/Arrow.jsx");
/* harmony import */ var _Home_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../Home/Contact */ "./components/Home/Contact/index.js");
/* harmony import */ var _Misc_Vcard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../Misc/Vcard */ "./components/Misc/Vcard.jsx");
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
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Misc_Vcard__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Home_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL1NlcnZpY2VzLmpzeCJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic2VydmljZXMiLCJTZXJ2aWNlcyIsIl9zIiwiY3VycmVudFNlcnZpY2UiLCJzZXRDdXJyZW50U2VydmljZSIsInVzZVN0YXRlIiwic2VydmljZUluZGV4Iiwic2V0U2VydmljZUluZGV4IiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsImNvbnRyb2xzSW5mbyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xzQXJyb3ciLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsImlzVGFibGV0VmlldyIsInVzZU1lZGlhUXVlcnkiLCJfcmVmIiwiYnJlYWtwb2ludHMiLCJzaXplcyIsInRhYmxldCIsInVzZUVmZmVjdCIsInR5cGluZ0VmZmVjdCIsInByZXYiLCJuZXh0Q2hhckluZGV4IiwibGVuZ3RoIiwic2xpY2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJzdGFydCIsIm9wYWNpdHkiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJfanN4REVWIiwiQ29udGVudFNlY3Rpb24iLCJjaGlsZHJlbiIsIkFuaW1hdGVPblNjcmVlbiIsIm1vdGlvbiIsImRpdiIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJQcm9qZWN0VGl0bGUiLCJBcnJvdyIsIkltYWdlUHJldmlldyIsInNyYyIsImFsdCIsIkFib3V0RGVzY3JpcHRpb24iLCJWY2FyZCIsIkNvbnRhY3QiLCJfYyIsIl9jMiIsIlJlYWN0IiwibWVtbyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ3dCO0FBQ007QUFDRjtBQUNMO0FBQ2Q7QUFDSztBQUNMO0FBUXBCO0FBQUE7QUFFbEIsTUFBTUEsVUFBVSxHQUFHO0VBQ2pCQyxRQUFRLEVBQUUsQ0FBQztFQUNYQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUU3QyxNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQ3JCLE1BQU07SUFBQSxHQUFDQyxjQUFjO0lBQUEsR0FBRUM7RUFBaUIsSUFBSUMsc0RBQVEsQ0FBQyxFQUFFLENBQUM7RUFDeEQsTUFBTTtJQUFBLEdBQUNDLFlBQVk7SUFBQSxHQUFFQztFQUFlLElBQUlGLHNEQUFRLENBQUMsQ0FBQyxDQUFDO0VBQ25ELE1BQU07SUFBQSxHQUFDRyxRQUFRO0lBQUEsR0FBRUM7RUFBVyxJQUFJSixzREFBUSxDQUFDLElBQUksQ0FBQztFQUM5QyxNQUFNSyxZQUFZLEdBQUdDLGtFQUFZLENBQUMsQ0FBQztFQUNuQyxNQUFNQyxhQUFhLEdBQUdELGtFQUFZLENBQUMsQ0FBQztFQUNwQyxNQUFNO0lBQUVFLGVBQWU7SUFBRUM7RUFBbUIsQ0FBQyxHQUFHQyxxRUFBYyxDQUFDLENBQUM7RUFDaEUsTUFBTUMsWUFBWSxHQUFHQyxvRUFBYSxDQUNoQ0MsSUFBQTtJQUFBLElBQUM7TUFBRUM7SUFBWSxDQUFDLEdBQUFELElBQUE7SUFBQSxPQUFLLGNBQWNDLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEtBQUs7RUFBQSxDQUNsRSxDQUFDO0VBRURDLHVEQUFTLENBQUMsTUFBTTtJQUNkLE1B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VztJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNKLENBQUMsZUFDbEJoQixxRUFBQSxDQUFDRyx3REFBZTtNQUFBRCxRQUFBLGVBQ2RGLHFFQUFBLENBQUMwQixtREFBSztRQUFBYixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBQztJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNPLENBQUMsZUFDbEJoQixxRUFBQSxDQUFDRyx3REFBZTtNQUFBRCxRQUFBLGVBQ2RGLHFFQUFBLENBQUMyQixxREFBTztRQUFBZCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBRTtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNJLENBQUM7RUFBQTtJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDSixDQUFDO0FBRXJCLENBQUM7QUFBQ2xELEVBQUEsQ0FoSElELFFBQVE7RUFBQSxRQUlTVSwwREFBWSxFQUNYQSwwREFBWSxFQUNjSSw2REFBYyxFQUN6Q0UsNERBQWE7QUFBQTtBQUFBK0MsRUFBQSxHQVA5Qi9ELFFBQVE7QUFrSGRnRSxrRUFBQSxnQkFBZUMsNENBQUssQ0FBQ0MsSUFBSSxDQUFDbEUsUUFBUSxDQUFDLEVBQUM7QUFBQSxJQUFBK0QsRUFBQSxFQUFBQyxHQUFBO0FBQUFHLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFILEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuMTk3YTY2MzYzMzIyNzg3NTUxNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vSWNvbnMvQXJyb3cnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLy4uLy4uL0hvbWUvQ29udGFjdCc7XHJcbmltcG9ydCBWY2FyZCBmcm9tICcuLy4uLy4uL01pc2MvVmNhcmQnXHJcbmltcG9ydCB7XHJcbiAgQ29udGVudFNlY3Rpb24sXHJcbiAgUHJvamVjdEFuY2hvcixcclxuICBQcm9qZWN0SW5mbyxcclxuICBQcm9qZWN0VGl0bGUsXHJcbiAgSW1hZ2VQcmV2aWV3LFxyXG4gIEFib3V0RGVzY3JpcHRpb24sXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICBkdXJhdGlvbjogMSxcclxuICBlYXNlOiBbMC40LCAwLCAwLjIsIDFdLFxyXG59O1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXCJuZXhOZXRcIiwgXCJuZXhBUlwiLCBcIm5leEFJXCJdO1xyXG5cclxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTZXJ2aWNlLCBzZXRDdXJyZW50U2VydmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VydmljZUluZGV4LCBzZXRTZXJ2aWNlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzVHlwaW5nLCBzZXRJc1R5cGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBjb250cm9sc0luZm8gPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBjb250cm9sc0Fycm93ID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuICBjb25zdCBpc1RhYmxldFZpZXcgPSB1c2VNZWRpYVF1ZXJ5KFxyXG4gICAgKHsgYnJlYWtwb2ludHMgfSkgPT4gYChtYXgtd2lkdGg6JHticmVha3BvaW50cy5zaXplcy50YWJsZXR9cHgpYCxcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdHlwaW5nRWZmZWN0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUeXBpbmcpIHtcclxuICAgICAgICBzZXRDdXJyZW50U2VydmljZSgocHJldikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV4dENoYXJJbmRleCA9IHByZXYubGVuZ3RoIDwgc2VydmljZXNbc2VydmljZUluZGV4XS5sZW5ndGggXHJcbiAgICAgICAgICAgID8gcHJldi5sZW5ndGggKyAxIFxyXG4gICAgICAgICAgICA6IHByZXYubGVuZ3RoO1xyXG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2VzW3NlcnZpY2VJbmRleF0uc2xpY2UoMCwgbmV4dENoYXJJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFNlcnZpY2UoKHByZXYpID0+IHByZXYuc2xpY2UoMCwgLTEpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIGlmIChjdXJyZW50U2VydmljZS5sZW5ndGggPT09IHNlcnZpY2VzW3NlcnZpY2VJbmRleF0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzZXRJc1R5cGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzVHlwaW5nKGZhbHNlKSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjdXJyZW50U2VydmljZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHNldFNlcnZpY2VJbmRleCgocHJldikgPT4gKHByZXYgKyAxKSAlIHNlcnZpY2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICBzZXRJc1R5cGluZyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdHlwaW5nRWZmZWN0KCk7XHJcbiAgICB9LCBpc1R5cGluZyA/IDE1MCA6IDEwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICB9LCBbY3VycmVudFNlcnZpY2UsIGlzVHlwaW5nLCBzZXJ2aWNlSW5kZXhdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJTdGFydCA9ICgpID0+IHtcclxuICAgIGFkZEN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMSB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiAwIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyRW5kID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBjb250cm9sc0luZm8uc3RhcnQoeyBvcGFjaXR5OiAwIH0pO1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9LCBbY29udHJvbHNBcnJvdywgaXNUYWJsZXRWaWV3XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPG1vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0QW5jaG9yXHJcbiAgICAgICAgICAgICAgb25Ib3ZlclN0YXJ0PXtoYW5kbGVBbmNob3JIb3ZlclN0YXJ0fVxyXG4gICAgICAgICAgICAgIG9uSG92ZXJFbmQ9e2hhbmRsZUFuY2hvckhvdmVyRW5kfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgPGgzPntjdXJyZW50U2VydmljZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzSW5mb31cclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGg0PkV4cGxvcmUgT3VyIE9mZmVyaW5nczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxoND4wMDE8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgT1VSIDxici8+IFNFUlZJQ0VTXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycm93IGFuaW1hdGU9e2NvbnRyb2xzQXJyb3d9IHRyYW5zaXRpb249e3RyYW5zaXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvUHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgPEltYWdlUHJldmlldz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiMTA4NTAyLmpwZ1wiIGFsdD1cIk91ciBTZXJ2aWNlc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZVByZXZpZXc+XHJcbiAgICAgICAgICAgIDwvUHJvamVjdEFuY2hvcj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG5cclxuICAgICAgey8qIEFib3V0IERlc2NyaXB0aW9uICovfVxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxBYm91dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICBXZSBvZmZlciBhIHJhbmdlIG9mIHNlcnZpY2VzIHRhaWxvcmVkIHRvIG1lZXQgdGhlIHVuaXF1ZSBuZWVkcyBvZiBvdXIgY2xpZW50cywgXHJcbiAgICAgICAgICAgIGluY2x1ZGluZyB3ZWIgZGV2ZWxvcG1lbnQsIGF1Z21lbnRlZCByZWFsaXR5IHNvbHV0aW9ucywgYW5kIGlubm92YXRpdmUgZGVzaWduIHNlcnZpY2VzLiBcclxuICAgICAgICAgICAgT3VyIHRlYW0gaXMgZGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgZXhjZXB0aW9uYWwgcmVzdWx0cyB0aGF0IGRyaXZlIHN1Y2Nlc3MgYW5kIGVuZ2FnZW1lbnQuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvQWJvdXREZXNjcmlwdGlvbj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPFZjYXJkLz5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlcnZpY2VzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
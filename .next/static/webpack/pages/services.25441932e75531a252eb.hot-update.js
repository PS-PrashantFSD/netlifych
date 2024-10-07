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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./components/Home/Services/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/services",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ProjectAnchor"], {
            onHoverStart: handleAnchorHoverStart,
            onHoverEnd: handleAnchorHoverEnd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ProjectInfo"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
                children: currentService
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
                initial: {
                  opacity: 0
                },
                animate: controlsInfo,
                transition: transition,
                className: "project-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h4", {
                  children: "Explore Our Offerings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h4", {
                  children: "001"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ProjectTitle"], {
                children: ["OUR ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 23
                }, undefined), " SERVICES", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["ImagePreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                src: "108502.jpg",
                alt: "Our Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["AboutDescription"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
          children: "We offer a range of services tailored to meet the unique needs of our clients, including web development, augmented reality solutions, and innovative design services. Our team is dedicated to delivering exceptional results that drive success and engagement."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Home_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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

/***/ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL1NlcnZpY2VzLmpzeCJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic2VydmljZXMiLCJTZXJ2aWNlcyIsIl9zIiwiY3VycmVudFNlcnZpY2UiLCJzZXRDdXJyZW50U2VydmljZSIsInVzZVN0YXRlIiwic2VydmljZUluZGV4Iiwic2V0U2VydmljZUluZGV4IiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsImNvbnRyb2xzSW5mbyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xzQXJyb3ciLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsImlzVGFibGV0VmlldyIsInVzZU1lZGlhUXVlcnkiLCJfcmVmIiwiYnJlYWtwb2ludHMiLCJzaXplcyIsInRhYmxldCIsInVzZUVmZmVjdCIsInR5cGluZ0VmZmVjdCIsInByZXYiLCJuZXh0Q2hhckluZGV4IiwibGVuZ3RoIiwic2xpY2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJzdGFydCIsIm9wYWNpdHkiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJfanN4REVWIiwiQ29udGVudFNlY3Rpb24iLCJjaGlsZHJlbiIsIkFuaW1hdGVPblNjcmVlbiIsIm1vdGlvbiIsImRpdiIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJQcm9qZWN0VGl0bGUiLCJBcnJvdyIsIkltYWdlUHJldmlldyIsInNyYyIsImFsdCIsIkFib3V0RGVz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QUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSixDQUFDLGVBRWxCaEIsb0VBQUEsQ0FBQ0csd0RBQWU7TUFBQUQsUUFBQSxlQUNkRixvRUFBQSxDQUFDMEIscURBQU87UUFBQWIsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUU7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSSxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0osQ0FBQztBQUVyQixDQUFDO0FBQUNsRCxFQUFBLENBOUdJRCxRQUFRO0VBQUEsUUFJU1UsMERBQVksRUFDWEEsMERBQVksRUFDY0ksNkRBQWMsRUFDekNFLDREQUFhO0FBQUE7QUFBQThDLEVBQUEsR0FQOUI5RCxRQUFRO0FBZ0hkK0Qsa0VBQUEsZ0JBQWVDLDRDQUFLLENBQUNDLElBQUksQ0FBQ2pFLFFBQVEsQ0FBQyxFQUFDO0FBQUEsSUFBQThELEVBQUEsRUFBQUMsR0FBQTtBQUFBRyxZQUFBLENBQUFKLEVBQUE7QUFBQUksWUFBQSxDQUFBSCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZpY2VzLjI1NDQxOTMyZTc1NTMxYTI1MmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uLy4uL0ljb25zL0Fycm93JztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi8uLi8uLi9Ib21lL0NvbnRhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENvbnRlbnRTZWN0aW9uLFxyXG4gIFByb2plY3RBbmNob3IsXHJcbiAgUHJvamVjdEluZm8sXHJcbiAgUHJvamVjdFRpdGxlLFxyXG4gIEltYWdlUHJldmlldyxcclxuICBBYm91dERlc2NyaXB0aW9uLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZHVyYXRpb246IDEsXHJcbiAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxufTtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1wibmV4TmV0XCIsIFwibmV4QVJcIiwgXCJuZXhBSVwiXTtcclxuXHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2VydmljZSwgc2V0Q3VycmVudFNlcnZpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlcnZpY2VJbmRleCwgc2V0U2VydmljZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc1R5cGluZywgc2V0SXNUeXBpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgY29udHJvbHNJbmZvID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgY29udHJvbHNBcnJvdyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcbiAgY29uc3QgaXNUYWJsZXRWaWV3ID0gdXNlTWVkaWFRdWVyeShcclxuICAgICh7IGJyZWFrcG9pbnRzIH0pID0+IGAobWF4LXdpZHRoOiR7YnJlYWtwb2ludHMuc2l6ZXMudGFibGV0fXB4KWAsXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR5cGluZ0VmZmVjdCA9ICgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFNlcnZpY2UoKHByZXYpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5leHRDaGFySW5kZXggPSBwcmV2Lmxlbmd0aCA8IHNlcnZpY2VzW3NlcnZpY2VJbmRleF0ubGVuZ3RoIFxyXG4gICAgICAgICAgICA/IHByZXYubGVuZ3RoICsgMSBcclxuICAgICAgICAgICAgOiBwcmV2Lmxlbmd0aDtcclxuICAgICAgICAgIHJldHVybiBzZXJ2aWNlc1tzZXJ2aWNlSW5kZXhdLnNsaWNlKDAsIG5leHRDaGFySW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEN1cnJlbnRTZXJ2aWNlKChwcmV2KSA9PiBwcmV2LnNsaWNlKDAsIC0xKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUeXBpbmcpIHtcclxuICAgICAgICBpZiAoY3VycmVudFNlcnZpY2UubGVuZ3RoID09PSBzZXJ2aWNlc1tzZXJ2aWNlSW5kZXhdLmxlbmd0aCkge1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1R5cGluZyhmYWxzZSksIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudFNlcnZpY2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRTZXJ2aWNlSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSBzZXJ2aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHR5cGluZ0VmZmVjdCgpO1xyXG4gICAgfSwgaXNUeXBpbmcgPyAxNTAgOiAxMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgfSwgW2N1cnJlbnRTZXJ2aWNlLCBpc1R5cGluZywgc2VydmljZUluZGV4XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGNvbnRyb2xzSW5mby5zdGFydCh7IG9wYWNpdHk6IDEgfSk7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogMCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlckVuZCA9ICgpID0+IHtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMCB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfSwgW2NvbnRyb2xzQXJyb3csIGlzVGFibGV0Vmlld10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8UHJvamVjdEFuY2hvclxyXG4gICAgICAgICAgICAgIG9uSG92ZXJTdGFydD17aGFuZGxlQW5jaG9ySG92ZXJTdGFydH1cclxuICAgICAgICAgICAgICBvbkhvdmVyRW5kPXtoYW5kbGVBbmNob3JIb3ZlckVuZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0SW5mbz5cclxuICAgICAgICAgICAgICAgIDxoMz57Y3VycmVudFNlcnZpY2V9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc0luZm99XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5FeHBsb3JlIE91ciBPZmZlcmluZ3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+MDAxPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIE9VUiA8YnIvPiBTRVJWSUNFU1xyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJvdyBhbmltYXRlPXtjb250cm9sc0Fycm93fSB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RUaXRsZT5cclxuICAgICAgICAgICAgICA8L1Byb2plY3RJbmZvPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVByZXZpZXc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjEwODUwMi5qcGdcIiBhbHQ9XCJPdXIgU2VydmljZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvSW1hZ2VQcmV2aWV3PlxyXG4gICAgICAgICAgICA8L1Byb2plY3RBbmNob3I+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuXHJcbiAgICAgIHsvKiBBYm91dCBEZXNjcmlwdGlvbiAqL31cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICA8QWJvdXREZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgV2Ugb2ZmZXIgYSByYW5nZSBvZiBzZXJ2aWNlcyB0YWlsb3JlZCB0byBtZWV0IHRoZSB1bmlxdWUgbmVlZHMgb2Ygb3VyIGNsaWVudHMsIFxyXG4gICAgICAgICAgICBpbmNsdWRpbmcgd2ViIGRldmVsb3BtZW50LCBhdWdtZW50ZWQgcmVhbGl0eSBzb2x1dGlvbnMsIGFuZCBpbm5vdmF0aXZlIGRlc2lnbiBzZXJ2aWNlcy4gXHJcbiAgICAgICAgICAgIE91ciB0ZWFtIGlzIGRlZGljYXRlZCB0byBkZWxpdmVyaW5nIGV4Y2VwdGlvbmFsIHJlc3VsdHMgdGhhdCBkcml2ZSBzdWNjZXNzIGFuZCBlbmdhZ2VtZW50LlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L0Fib3V0RGVzY3JpcHRpb24+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgXHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlcnZpY2VzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
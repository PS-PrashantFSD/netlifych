webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/About/About.jsx":
/*!*****************************************!*\
  !*** ./components/Home/About/About.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants_services_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/constants/services-items */ "./utils/constants/services-items.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _Misc_Call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Misc/Call */ "./components/Misc/Call.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/Home/About/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\About\\About.jsx",
  _s = $RefreshSig$();







const About = () => {
  _s();
  const [selectedItem, setSelectedItem] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const handleMouseEnter = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(curr => {
    if (curr === selectedItem) return;
    addCursorBorder();
  }, [selectedItem, addCursorBorder]);
  const handleMouseLeave = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(curr => {
    if (curr === selectedItem) return;
    removeCursorBorder();
  }, [selectedItem, removeCursorBorder]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["ContentSection"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["TextWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
          style: {
            fontSize: '99px'
          },
          children: "About Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          children: "Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
          children: ["We specialize in a range of cutting-edge digital solutions. Our services include advanced Augmented Reality software that transforms your digital interactions, comprehensive Web Development to create user friendly online platforms, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
            children: "innovative Image Tracking And Object detection"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 22
          }, undefined), " system designed to streamline processes through smart recognition."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["ServicesWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
          children: "Services"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), _utils_constants_services_items__WEBPACK_IMPORTED_MODULE_1__["default"].map((_ref, itemIndex) => {
          let [item, services] = _ref;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["AccordionToggle"], {
              "aria-expanded": itemIndex === selectedItem,
              onClick: () => setSelectedItem(itemIndex),
              onMouseEnter: () => handleMouseEnter(itemIndex),
              onMouseLeave: () => handleMouseLeave(itemIndex),
              children: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["AccordionContent"], {
              animate: {
                height: itemIndex === selectedItem ? '100%' : '0'
              },
              transition: {
                duration: 0.7,
                ease: [0, 0.7, 0.29, 0.97]
              },
              children: services.map((service, serviceIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
                children: service
              }, `${itemIndex}_${serviceIndex}`, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, undefined)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Misc_Call__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};
_s(About, "6zB8vWuTWR2rDHHwYujoKKyPE1Q=", false, function () {
  return [_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c = About;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(About));
var _c, _c2;
$RefreshReg$(_c, "About");
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

/***/ "./components/Misc/Call.jsx":
/*!**********************************!*\
  !*** ./components/Misc/Call.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Call.jsx";





const CTASection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_3__["default"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  text-align: center;
`;
_c = CTASection;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;
_c2 = CTAHeading;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
`;
_c3 = CTADescription;
const CTAButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  padding: 15px 30px;
  font-size: 1rem;
  color: white;
  background-color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.red;
}};
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.colors.darkRed;
}};
  }
`;
_c4 = CTAButton;
const CallToAction = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTASection, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.5
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
      children: "Unlock the potential of AR and AI in your business"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
      children: "Click to explore our transformative solutions in augmented reality, web development, and smart detection technologies. Start your digital revolution now!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAButton, {
      href: "/explore",
      children: "Explore Solutions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};
_c5 = CallToAction;
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "CTASection");
$RefreshReg$(_c2, "CTAHeading");
$RefreshReg$(_c3, "CTADescription");
$RefreshReg$(_c4, "CTAButton");
$RefreshReg$(_c5, "CallToAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L0Fib3V0LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhbGwuanN4Il0sIm5hbWVzIjpbIkFib3V0IiwiX3MiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJSZWFjdCIsInVzZVN0YXRlIiwiYWRkQ3Vyc29yQm9yZGVyIiwicmVtb3ZlQ3Vyc29yQm9yZGVyIiwidXNlQ3Vyc29yU3R5bGUiLCJoYW5kbGVNb3VzZUVudGVyIiwidXNlQ2FsbGJhY2siLCJjdXJyIiwiaGFuZGxlTW91c2VMZWF2ZSIsIl9qc3hERVYiLCJBbmltYXRlT25TY3JlZW4iLCJjaGlsZHJlbiIsIkNvbnRlbnRTZWN0aW9uIiwiVGV4dFdyYXBwZXIiLCJzdHlsZSIsImZvbnRTaXplIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiU2VydmljZXNXcmFwcGVyIiwiaXRlbXMiLCJtYXAiLCJfcmVmIiwiaXRlbUluZGV4IiwiaXRlbSIsInNlcnZpY2VzIiwiRnJhZ21lbnQiLCJBY2NvcmRpb25Ub2dnbGUiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiQWNjb3JkaW9uQ29udGVudCIsImFuaW1hdGUiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic2VydmljZSIsInNlcnZpY2VJbmRleCIsIkNhbGwiLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiLCJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIkNUQUhlYWRpbmciLCJoMiIsIkNUQURlc2NyaXB0aW9uIiwicCIsIl9jMyIsIkNUQUJ1dHRvbiIsImEiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsIl9yZWYyIiwiZGFya1JlZCIsIl9jNCIsIkNhbGxUb0Fj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ZTk0ZmM5NzNkMzFiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGl0ZW1zIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cy9zZXJ2aWNlcy1pdGVtcyc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IENhbGwgZnJvbSAnLi8uLi8uLi9NaXNjL0NhbGwnXHJcbmltcG9ydCB7XHJcbiAgQ29udGVudFNlY3Rpb24sXHJcbiAgVGV4dFdyYXBwZXIsXHJcbiAgU2VydmljZXNXcmFwcGVyLFxyXG4gIEFjY29yZGlvblRvZ2dsZSxcclxuICBBY2NvcmRpb25Db250ZW50LFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBjdXJyID0+IHtcclxuICAgICAgaWYgKGN1cnIgPT09IHNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgW3NlbGVjdGVkSXRlbSwgYWRkQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBjdXJyID0+IHtcclxuICAgICAgaWYgKGN1cnIgPT09IHNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgW3NlbGVjdGVkSXRlbSwgcmVtb3ZlQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiAnOTlweCd9fT5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICBPdXIgbWlzc2lvbiBpcyB0byByZXZvbHV0aW9uaXplIHZpc3VhbCBleHBlcmllbmNlcywgXHJcbiAgICAgICAgICBicmlkZ2luZyB0aGUgZ2FwIGJldHdlZW4gdGhlIHBoeXNpY2FsIGFuZCBkaWdpdGFsIHdvcmxkcy5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgIFdlIHNwZWNpYWxpemUgaW4gYSByYW5nZSBvZiBjdXR0aW5nLWVkZ2UgZGlnaXRhbCBzb2x1dGlvbnMuIFxyXG4gICAgICAgICAgT3VyIHNlcnZpY2VzIGluY2x1ZGUgYWR2YW5jZWQgQXVnbWVudGVkIFJlYWxpdHkgc29mdHdhcmUgdGhhdCB0cmFuc2Zvcm1zIHlvdXIgXHJcbiAgICAgICAgICBkaWdpdGFsIGludGVyYWN0aW9ucywgY29tcHJlaGVuc2l2ZSBXZWIgRGV2ZWxvcG1lbnQgdG8gY3JlYXRlIHVzZXIgZnJpZW5kbHkgb25saW5lIFxyXG4gICAgICAgICAgcGxhdGZvcm1zLCA8c3Ryb25nPmlubm92YXRpdmUgSW1hZ2UgVHJhY2tpbmcgQW5kIE9iamVjdCBkZXRlY3Rpb248L3N0cm9uZz4gc3lzdGVtIGRlc2lnbmVkIHRvIHN0cmVhbWxpbmUgXHJcbiAgICAgICAgICBwcm9jZXNzZXMgdGhyb3VnaCBzbWFydCByZWNvZ25pdGlvbi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L1RleHRXcmFwcGVyPlxyXG4gICAgICAgIDxTZXJ2aWNlc1dyYXBwZXI+XHJcbiAgICAgICAgICA8aDM+U2VydmljZXM8L2gzPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoW2l0ZW0sIHNlcnZpY2VzXSwgaXRlbUluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Ub2dnbGVcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2l0ZW1JbmRleCA9PT0gc2VsZWN0ZWRJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJdGVtKGl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZU1vdXNlRW50ZXIoaXRlbUluZGV4KX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTW91c2VMZWF2ZShpdGVtSW5kZXgpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IGhlaWdodDogaXRlbUluZGV4ID09PSBzZWxlY3RlZEl0ZW0gPyAnMTAwJScgOiAnMCcgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNywgZWFzZTogWzAsIDAuNywgMC4yOSwgMC45N10gfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlLCBzZXJ2aWNlSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtgJHtpdGVtSW5kZXh9XyR7c2VydmljZUluZGV4fWB9PntzZXJ2aWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VydmljZXNXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8Q2FsbC8+XHJcbiAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBYm91dCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBDVEFTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMDBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IENUQUhlYWRpbmcgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IENUQURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgQ1RBQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya1JlZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q1RBU2VjdGlvbiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fT5cclxuICAgICAgPENUQUhlYWRpbmc+VW5sb2NrIHRoZSBwb3RlbnRpYWwgb2YgQVIgYW5kIEFJIGluIHlvdXIgYnVzaW5lc3M8L0NUQUhlYWRpbmc+XHJcbiAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICBDbGljayB0byBleHBsb3JlIG91ciB0cmFuc2Zvcm1hdGl2ZSBzb2x1dGlvbnMgaW4gYXVnbWVudGVkIHJlYWxpdHksIHdlYiBkZXZlbG9wbWVudCwgYW5kIHNtYXJ0IGRldGVjdGlvbiB0ZWNobm9sb2dpZXMuIFxyXG4gICAgICAgIFN0YXJ0IHlvdXIgZGlnaXRhbCByZXZvbHV0aW9uIG5vdyFcclxuICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgPENUQUJ1dHRvbiBocmVmPVwiL2V4cGxvcmVcIj5FeHBsb3JlIFNvbHV0aW9uczwvQ1RBQnV0dG9uPlxyXG4gICAgPC9DVEFTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
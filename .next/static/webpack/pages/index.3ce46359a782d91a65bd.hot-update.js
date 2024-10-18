webpackHotUpdate_N_E("pages/index",{

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
  text-align: center;
  margin-bottom: 100px;
  background-color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.red;
}};
`;
_c = CTASection;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: black;
`;
_c2 = CTAHeading;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: black;
`;
_c3 = CTADescription;
const CTAButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  padding: 15px 30px;
  font-size: 1rem;
  color: white;
  background-color: black;;
  border: none;
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
      children: "Unlock the potential of nexAR and AI in your business"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
      children: "Click to explore our transformative solutions in augmented reality, web development, and smart detection technologies. Start your digital revolution now!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAButton, {
      href: "tel:8660449970",
      children: "Call to Action"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhbGwuanN4Il0sIm5hbWVzIjpbIkNUQVNlY3Rpb24iLCJzdHlsZWQiLCJtb3Rpb24iLCJzZWN0aW9uIiwiY29udGFpbmVyU3R5bGVzIiwiX3JlZiIsInRoZW1lIiwiY29sb3JzIiwicmVkIiwiX2MiLCJDVEFIZWFkaW5nIiwiaDIiLCJfYzIiLCJDVEFEZXNjcmlwdGlvbiIsInAiLCJfYzMiLCJDVEFCdXR0b24iLCJhIiwiX3JlZjIiLCJkYXJrUmVkIiwiX2M0IiwiQ2FsbFRvQWN0aW9uIiwiX2pzeERFViIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaHJlZiIsIl9jNSIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ0E7QUFDcUI7QUFBQTtBQUU1RCxNQUFNQSxVQUFVLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUN6QyxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0JDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUNyRCxDQUFDO0FBQUNDLEVBQUEsR0FUSVQsVUFBVTtBQVdoQixNQUFNVSxVQUFVLEdBQUdULHlEQUFNLENBQUNVLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FMSUYsVUFBVTtBQU9oQixNQUFNRyxjQUFjLEdBQUdaLHlEQUFNLENBQUNhLENBQUM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0MsR0FBQSxHQU5JRixjQUFjO0FBUXBCLE1BQU1HLFNBQVMsR0FBR2YseURBQU0sQ0FBQ2dCLENBQUM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCQyxLQUFBO0VBQUEsSUFBQztJQUFFWjtFQUFNLENBQUMsR0FBQVksS0FBQTtFQUFBLE9BQUtaLEtBQUssQ0FBQ0MsTUFBTSxDQUFDWSxPQUFPO0FBQUE7QUFDM0Q7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FaSUosU0FBUztBQWNmLE1BQU1LLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0VBQ3pCLG9CQUNFQyxvRUFBQSxDQUFDdEIsVUFBVTtJQUFDdUIsT0FBTyxFQUFFO01BQUVDLE9BQU8sRUFBRTtJQUFFLENBQUU7SUFBQ0MsT0FBTyxFQUFFO01BQUVELE9BQU8sRUFBRTtJQUFFLENBQUU7SUFBQ0UsVUFBVSxFQUFFO01BQUVDLFFBQVEsRUFBRTtJQUFJLENBQUU7SUFBQUMsUUFBQSxnQkFDMUZOLG9FQUFBLENBQUNaLFVBQVU7TUFBQWtCLFFBQUEsRUFBQztJQUFxRDtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBWSxDQUFDLGVBQzlFVixvRUFBQSxDQUFDVCxjQUFjO01BQUFlLFFBQUEsRUFBQztJQUdoQjtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBZ0IsQ0FBQyxlQUNqQlYsb0VBQUEsQ0FBQ04sU0FBUztNQUFDaUIsSUFBSSxFQUFDLGdCQUFnQjtNQUFBTCxRQUFBLEVBQUM7SUFBYztNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBVyxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ2pELENBQUM7QUFFakIsQ0FBQztBQUFDRSxHQUFBLEdBWEliLFlBQVk7QUFhSEEsMkVBQVksRUFBQztBQUFBLElBQUFaLEVBQUEsRUFBQUcsR0FBQSxFQUFBRyxHQUFBLEVBQUFLLEdBQUEsRUFBQWMsR0FBQTtBQUFBQyxZQUFBLENBQUExQixFQUFBO0FBQUEwQixZQUFBLENBQUF2QixHQUFBO0FBQUF1QixZQUFBLENBQUFwQixHQUFBO0FBQUFvQixZQUFBLENBQUFmLEdBQUE7QUFBQWUsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjZTQ2MzU5YTc4MmQ5MWE2NWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5cclxuY29uc3QgQ1RBU2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG5gO1xyXG5cclxuY29uc3QgQ1RBSGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IENUQURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IENUQUJ1dHRvbiA9IHN0eWxlZC5hYFxyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrUmVkfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICA8Q1RBSGVhZGluZz5VbmxvY2sgdGhlIHBvdGVudGlhbCBvZiBuZXhBUiBhbmQgQUkgaW4geW91ciBidXNpbmVzczwvQ1RBSGVhZGluZz5cclxuICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIENsaWNrIHRvIGV4cGxvcmUgb3VyIHRyYW5zZm9ybWF0aXZlIHNvbHV0aW9ucyBpbiBhdWdtZW50ZWQgcmVhbGl0eSwgd2ViIGRldmVsb3BtZW50LCBhbmQgc21hcnQgZGV0ZWN0aW9uIHRlY2hub2xvZ2llcy4gXHJcbiAgICAgICAgU3RhcnQgeW91ciBkaWdpdGFsIHJldm9sdXRpb24gbm93IVxyXG4gICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICA8Q1RBQnV0dG9uIGhyZWY9XCJ0ZWw6ODY2MDQ0OTk3MFwiPkNhbGwgdG8gQWN0aW9uPC9DVEFCdXR0b24+XHJcbiAgICA8L0NUQVNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
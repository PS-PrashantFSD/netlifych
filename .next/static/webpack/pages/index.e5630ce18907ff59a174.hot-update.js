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
  padding: 100px 0px 100px 0px;
`;
_c = CTASection;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2`
width:80%;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: black;
`;
_c2 = CTAHeading;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  width:80%;
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: black;
`;
_c3 = CTADescription;
const CTAButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
  padding: 15px 30px;
  font-size: 1rem;
  color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.colors.red;
}};
  background-color: black;;
  border: none;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${_ref3 => {
  let {
    theme
  } = _ref3;
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
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
      children: "Click to explore our transformative solutions in augmented reality, web development, and smart detection technologies. Start your digital revolution now!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAButton, {
      href: "tel:8660449970",
      children: "Call to Action"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhbGwuanN4Il0sIm5hbWVzIjpbIkNUQVNlY3Rpb24iLCJzdHlsZWQiLCJtb3Rpb24iLCJzZWN0aW9uIiwiY29udGFpbmVyU3R5bGVzIiwiX3JlZiIsInRoZW1lIiwiY29sb3JzIiwicmVkIiwiX2MiLCJDVEFIZWFkaW5nIiwiaDIiLCJfYzIiLCJDVEFEZXNjcmlwdGlvbiIsInAiLCJfYzMiLCJDVEFCdXR0b24iLCJhIiwiX3JlZjIiLCJfcmVmMyIsImRhcmtSZWQiLCJfYzQiLCJDYWxsVG9BY3Rpb24iLCJfanN4REVWIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJocmVmIiwiX2M1IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDQTtBQUNxQjtBQUFBO0FBRTVELE1BQU1BLFVBQVUsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3pDLElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQkMsSUFBQTtFQUFBLElBQUM7SUFBRUM7RUFBTSxDQUFDLEdBQUFELElBQUE7RUFBQSxPQUFLQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRztBQUFBO0FBQ3JEO0FBQ0EsQ0FBQztBQUFDQyxFQUFBLEdBVklULFVBQVU7QUFZaEIsTUFBTVUsVUFBVSxHQUFHVCx5REFBTSxDQUFDVSxFQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FOSUYsVUFBVTtBQVFoQixNQUFNRyxjQUFjLEdBQUdaLHlEQUFNLENBQUNhLENBQUM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0MsR0FBQSxHQU5JRixjQUFjO0FBUXBCLE1BQU1HLFNBQVMsR0FBR2YseURBQU0sQ0FBQ2dCLENBQUM7QUFDMUI7QUFDQTtBQUNBLFdBQVdDLEtBQUE7RUFBQSxJQUFDO0lBQUVaO0VBQU0sQ0FBQyxHQUFBWSxLQUFBO0VBQUEsT0FBS1osS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0JXLEtBQUE7RUFBQSxJQUFDO0lBQUViO0VBQU0sQ0FBQyxHQUFBYSxLQUFBO0VBQUEsT0FBS2IsS0FBSyxDQUFDQyxNQUFNLENBQUNhLE9BQU87QUFBQTtBQUMzRDtBQUNBLENBQUM7QUFBQ0MsR0FBQSxHQVpJTCxTQUFTO0FBY2YsTUFBTU0sWUFBWSxHQUFHQSxDQUFBLEtBQU07RUFDekIsb0JBQ0VDLG9FQUFBLENBQUN2QixVQUFVO0lBQUN3QixPQUFPLEVBQUU7TUFBRUMsT0FBTyxFQUFFO0lBQUUsQ0FBRTtJQUFDQyxPQUFPLEVBQUU7TUFBRUQsT0FBTyxFQUFFO0lBQUUsQ0FBRTtJQUFDRSxVQUFVLEVBQUU7TUFBRUMsUUFBUSxFQUFFO0lBQUksQ0FBRTtJQUFBQyxRQUFBLGdCQUMxRk4sb0VBQUEsQ0FBQ2IsVUFBVTtNQUFBbUIsUUFBQSxFQUFDO0lBQXFEO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFZLENBQUMsZUFDOUVWLG9FQUFBLENBQUNWLGNBQWM7TUFBQWdCLFFBQUEsRUFBQztJQUdoQjtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBZ0IsQ0FBQyxlQUNqQlYsb0VBQUEsQ0FBQ1AsU0FBUztNQUFDa0IsSUFBSSxFQUFDLGdCQUFnQjtNQUFBTCxRQUFBLEVBQUM7SUFBYztNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBVyxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ2pELENBQUM7QUFFakIsQ0FBQztBQUFDRSxHQUFBLEdBWEliLFlBQVk7QUFhSEEsMkVBQVksRUFBQztBQUFBLElBQUFiLEVBQUEsRUFBQUcsR0FBQSxFQUFBRyxHQUFBLEVBQUFNLEdBQUEsRUFBQWMsR0FBQTtBQUFBQyxZQUFBLENBQUEzQixFQUFBO0FBQUEyQixZQUFBLENBQUF4QixHQUFBO0FBQUF3QixZQUFBLENBQUFyQixHQUFBO0FBQUFxQixZQUFBLENBQUFmLEdBQUE7QUFBQWUsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1NjMwY2UxODkwN2ZmNTlhMTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5cclxuY29uc3QgQ1RBU2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gIHBhZGRpbmc6IDEwMHB4IDBweCAxMDBweCAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG53aWR0aDo4MCU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOjgwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IENUQUJ1dHRvbiA9IHN0eWxlZC5hYFxyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtSZWR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENUQVNlY3Rpb24gaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX0+XHJcbiAgICAgIDxDVEFIZWFkaW5nPlVubG9jayB0aGUgcG90ZW50aWFsIG9mIG5leEFSIGFuZCBBSSBpbiB5b3VyIGJ1c2luZXNzPC9DVEFIZWFkaW5nPlxyXG4gICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgQ2xpY2sgdG8gZXhwbG9yZSBvdXIgdHJhbnNmb3JtYXRpdmUgc29sdXRpb25zIGluIGF1Z21lbnRlZCByZWFsaXR5LCB3ZWIgZGV2ZWxvcG1lbnQsIGFuZCBzbWFydCBkZXRlY3Rpb24gdGVjaG5vbG9naWVzLiBcclxuICAgICAgICBTdGFydCB5b3VyIGRpZ2l0YWwgcmV2b2x1dGlvbiBub3chXHJcbiAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgIDxDVEFCdXR0b24gaHJlZj1cInRlbDo4NjYwNDQ5OTcwXCI+Q2FsbCB0byBBY3Rpb248L0NUQUJ1dHRvbj5cclxuICAgIDwvQ1RBU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFRvQWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
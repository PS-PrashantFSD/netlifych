webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Misc/Nexar.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Nexar.jsx ***!
  \***********************************/
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Nexar.jsx";





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
  padding: 100px 0;
`;
_c = CTASection;
const SectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-around; /* Space sections evenly */
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically on mobile */
    align-items: center; /* Center align items in mobile view */
  }
`;
_c2 = SectionsContainer;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  flex: 1; /* Make each section take equal space */
  margin: 0 20px; /* Add some margin between sections */
  max-width: 300px; /* Set a max-width for better responsiveness */
  text-align: center; /* Center text in sections */

  @media (max-width: 768px) {
    margin: 20px 0; /* Add vertical margin for mobile */
    max-width: 100%; /* Allow full width on mobile */
  }
`;
_c3 = Section;
const GIFIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  width: 100px; /* Adjust size as needed */
  height: auto;
  cursor: pointer; /* Change cursor to pointer for interactivity */
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); /* Slightly scale on hover */
  }
`;
_c4 = GIFIcon;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 20px 0; /* Adjust margin to create spacing */
  color: black;
`;
_c5 = CTAHeading;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: black;
`;
_c6 = CTADescription;
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SectionsContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "path/to/your/gif1.gif",
          alt: "GIF Icon 1",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "Section 1 Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "Description for section 1. Explain your first point here."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "path/to/your/gif2.gif",
          alt: "GIF Icon 2",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "Section 2 Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "Description for section 2. Highlight another key feature here."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "path/to/your/gif3.gif",
          alt: "GIF Icon 3",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "Section 3 Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "Description for section 3. Summarize your final point here."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, undefined);
};
_c7 = CallToAction;
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);
````````````````````;
var _c, _c2, _c3, _c4, _c5, _c6, _c7;
$RefreshReg$(_c, "CTASection");
$RefreshReg$(_c2, "SectionsContainer");
$RefreshReg$(_c3, "Section");
$RefreshReg$(_c4, "GIFIcon");
$RefreshReg$(_c5, "CTAHeading");
$RefreshReg$(_c6, "CTADescription");
$RefreshReg$(_c7, "CallToAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiR0lGSWNvbiIsImltZyIsIl9jNCIsIkNUQUhlYWRpbmciLCJoMiIsIl9jNSIsIkNUQURlc2NyaXB0aW9uIiwicCIsIl9jNiIsIkNhbGxUb0FjdGlvbiIsIl9qc3hERVYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjaGlsZHJlbiIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYzciLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNBO0FBQ3FCO0FBQUE7QUFFNUQsTUFBTUEsVUFBVSxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDekMsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCQyxJQUFBO0VBQUEsSUFBQztJQUFFQztFQUFNLENBQUMsR0FBQUQsSUFBQTtFQUFBLE9BQUtDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHO0FBQUE7QUFDckQ7QUFDQSxDQUFDO0FBQUNDLEVBQUEsR0FWSVQsVUFBVTtBQVloQixNQUFNVSxpQkFBaUIsR0FBR1QseURBQU0sQ0FBQ1UsR0FBRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FB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L3dlYnBhY2svcGFnZXMvaW5kZXguMTgzMTZhYmUxNWZiMmRhOTc0MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBDVEFTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAvKiBTcGFjZSBzZWN0aW9ucyBldmVubHkgKi9cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBzZWN0aW9ucyB2ZXJ0aWNhbGx5IG9uIG1vYmlsZSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGFsaWduIGl0ZW1zIGluIG1vYmlsZSB2aWV3ICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTsgLyogTWFrZSBlYWNoIHNlY3Rpb24gdGFrZSBlcXVhbCBzcGFjZSAqL1xyXG4gIG1hcmdpbjogMCAyMHB4OyAvKiBBZGQgc29tZSBtYXJnaW4gYmV0d2VlbiBzZWN0aW9ucyAqL1xyXG4gIG1heC13aWR0aDogMzAwcHg7IC8qIFNldCBhIG1heC13aWR0aCBmb3IgYmV0dGVyIHJlc3BvbnNpdmVuZXNzICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGV4dCBpbiBzZWN0aW9ucyAqL1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogMjBweCAwOyAvKiBBZGQgdmVydGljYWwgbWFyZ2luIGZvciBtb2JpbGUgKi9cclxuICAgIG1heC13aWR0aDogMTAwJTsgLyogQWxsb3cgZnVsbCB3aWR0aCBvbiBtb2JpbGUgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHSUZJY29uID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwcHg7IC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xyXG4gIGhlaWdodDogYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIENoYW5nZSBjdXJzb3IgdG8gcG9pbnRlciBmb3IgaW50ZXJhY3Rpdml0eSAqL1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2xpZ2h0bHkgc2NhbGUgb24gaG92ZXIgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDVEFIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMjBweCAwOyAvKiBBZGp1c3QgbWFyZ2luIHRvIGNyZWF0ZSBzcGFjaW5nICovXHJcbiAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuY29uc3QgQ1RBRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENUQVNlY3Rpb24gaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX0+XHJcbiAgICAgIDxTZWN0aW9uc0NvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxHSUZJY29uIHNyYz1cInBhdGgvdG8veW91ci9naWYxLmdpZlwiIGFsdD1cIkdJRiBJY29uIDFcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0gLz5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPlNlY3Rpb24gMSBUaXRsZTwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgRGVzY3JpcHRpb24gZm9yIHNlY3Rpb24gMS4gRXhwbGFpbiB5b3VyIGZpcnN0IHBvaW50IGhlcmUuXHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxHSUZJY29uIHNyYz1cInBhdGgvdG8veW91ci9naWYyLmdpZlwiIGFsdD1cIkdJRiBJY29uIDJcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0gLz5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPlNlY3Rpb24gMiBUaXRsZTwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgRGVzY3JpcHRpb24gZm9yIHNlY3Rpb24gMi4gSGlnaGxpZ2h0IGFub3RoZXIga2V5IGZlYXR1cmUgaGVyZS5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPEdJRkljb24gc3JjPVwicGF0aC90by95b3VyL2dpZjMuZ2lmXCIgYWx0PVwiR0lGIEljb24gM1wiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ0ZWw6ODY2MDQ0OTk3MFwifSAvPlxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+U2VjdGlvbiAzIFRpdGxlPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiBmb3Igc2VjdGlvbiAzLiBTdW1tYXJpemUgeW91ciBmaW5hbCBwb2ludCBoZXJlLlxyXG4gICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvU2VjdGlvbnNDb250YWluZXI+XHJcbiAgICA8L0NUQVNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuYGBgYGBgYGBgYGBgYGBgYGBgYGAiXSwic291cmNlUm9vdCI6IiJ9
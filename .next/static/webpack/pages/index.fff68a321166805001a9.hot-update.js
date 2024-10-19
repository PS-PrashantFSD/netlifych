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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiR0lGSWNvbiIsImltZyIsIl9jNCIsIkNUQUhlYWRpbmciLCJoMiIsIl9jNSIsIkNUQURlc2NyaXB0aW9uIiwicCIsIl9jNiIsIkNhbGxUb0FjdGlvbiIsIl9qc3hERVYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjaGlsZHJlbiIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYzciLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNBO0FBQ3FCO0FBQUE7QUFFNUQsTUFBTUEsVUFBVSxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDekMsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCQyxJQUFBO0VBQUEsSUFBQztJQUFFQztFQUFNLENBQUMsR0FBQUQsSUFBQTtFQUFBLE9BQUtDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHO0FBQUE7QUFDckQ7QUFDQSxDQUFDO0FBQUNDLEVBQUEsR0FWSVQsVUFBVTtBQVloQixNQUFNVSxpQkFBaUIsR0FBR1QseURBQU0sQ0FBQ1UsR0FBRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FB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QVk7VUFBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU1DLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7UUFBaUI7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUUsQ0FBQyxlQUNoSGhCLG9FQUFBLENBQUNQLFVBQVU7VUFBQWEsUUFBQSxFQUFDO1FBQWU7VUFBQU8sUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQVksQ0FBQyxlQUN4Q2hCLG9FQUFBLENBQUNKLGNBQWM7VUFBQVUsUUFBQSxFQUFDO1FBRWhCO1VBQUFPLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFnQixDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ1YsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNPO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ1YsQ0FBQztBQUVqQixDQUFDO0FBQUNDLEdBQUEsR0E5QklsQixZQUFZO0FBZ0NIQSwyRUFBWSxFQUFDO0FBQUEsSUFBQWYsRUFBQSxFQUFBRyxHQUFBLEVBQUFFLEdBQUEsRUFBQUcsR0FBQSxFQUFBRyxHQUFBLEVBQUFHLEdBQUEsRUFBQW1CLEdBQUE7QUFBQUMsWUFBQSxDQUFBbEMsRUFBQTtBQUFBa0MsWUFBQSxDQUFBL0IsR0FBQTtBQUFBK0IsWUFBQSxDQUFBN0IsR0FBQTtBQUFBNkIsWUFBQSxDQUFBMUIsR0FBQTtBQUFBMEIsWUFBQSxDQUFBdkIsR0FBQTtBQUFBdUIsWUFBQSxDQUFBcEIsR0FBQTtBQUFBb0IsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmZjY4YTMyMTE2NjgwNTAwMWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5cclxuY29uc3QgQ1RBU2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgLyogU3BhY2Ugc2VjdGlvbnMgZXZlbmx5ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgc2VjdGlvbnMgdmVydGljYWxseSBvbiBtb2JpbGUgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciBhbGlnbiBpdGVtcyBpbiBtb2JpbGUgdmlldyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7IC8qIE1ha2UgZWFjaCBzZWN0aW9uIHRha2UgZXF1YWwgc3BhY2UgKi9cclxuICBtYXJnaW46IDAgMjBweDsgLyogQWRkIHNvbWUgbWFyZ2luIGJldHdlZW4gc2VjdGlvbnMgKi9cclxuICBtYXgtd2lkdGg6IDMwMHB4OyAvKiBTZXQgYSBtYXgtd2lkdGggZm9yIGJldHRlciByZXNwb25zaXZlbmVzcyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRleHQgaW4gc2VjdGlvbnMgKi9cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDIwcHggMDsgLyogQWRkIHZlcnRpY2FsIG1hcmdpbiBmb3IgbW9iaWxlICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIEFsbG93IGZ1bGwgd2lkdGggb24gbW9iaWxlICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgR0lGSWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMHB4OyAvKiBBZGp1c3Qgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBDaGFuZ2UgY3Vyc29yIHRvIHBvaW50ZXIgZm9yIGludGVyYWN0aXZpdHkgKi9cclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodGx5IHNjYWxlIG9uIGhvdmVyICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ1RBSGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDIwcHggMDsgLyogQWRqdXN0IG1hcmdpbiB0byBjcmVhdGUgc3BhY2luZyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IENUQURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICA8U2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICA8R0lGSWNvbiBzcmM9XCJwYXRoL3RvL3lvdXIvZ2lmMS5naWZcIiBhbHQ9XCJHSUYgSWNvbiAxXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRlbDo4NjYwNDQ5OTcwXCJ9IC8+XHJcbiAgICAgICAgICA8Q1RBSGVhZGluZz5TZWN0aW9uIDEgVGl0bGU8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uIGZvciBzZWN0aW9uIDEuIEV4cGxhaW4geW91ciBmaXJzdCBwb2ludCBoZXJlLlxyXG4gICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICA8R0lGSWNvbiBzcmM9XCJwYXRoL3RvL3lvdXIvZ2lmMi5naWZcIiBhbHQ9XCJHSUYgSWNvbiAyXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRlbDo4NjYwNDQ5OTcwXCJ9IC8+XHJcbiAgICAgICAgICA8Q1RBSGVhZGluZz5TZWN0aW9uIDIgVGl0bGU8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uIGZvciBzZWN0aW9uIDIuIEhpZ2hsaWdodCBhbm90aGVyIGtleSBmZWF0dXJlIGhlcmUuXHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxHSUZJY29uIHNyYz1cInBhdGgvdG8veW91ci9naWYzLmdpZlwiIGFsdD1cIkdJRiBJY29uIDNcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0gLz5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPlNlY3Rpb24gMyBUaXRsZTwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgRGVzY3JpcHRpb24gZm9yIHNlY3Rpb24gMy4gU3VtbWFyaXplIHlvdXIgZmluYWwgcG9pbnQgaGVyZS5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L1NlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgPC9DVEFTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
  border-radius: 33px;
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
  font-size: 6rem;
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
          src: "wht.png",
          alt: "PNG Icon 1",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "What"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "nexar.png",
          alt: "PNG Icon 2",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "nexAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "no.png",
          alt: "PNG Icon 3",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "No"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          children: "Differentiate yourself from competition and go viral!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiR0lGSWNvbiIsImltZyIsIl9jNCIsIkNUQUhlYWRpbmciLCJoMiIsIl9jNSIsIkNUQURlc2NyaXB0aW9uIiwicCIsIl9jNiIsIkNhbGxUb0FjdGlvbiIsIl9qc3hERVYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjaGlsZHJlbiIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYzciLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNBO0FBQ3FCO0FBQUE7QUFFNUQsTUFBTUEsVUFBVSxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDekMsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCQyxJQUFBO0VBQUEsSUFBQztJQUFFQztFQUFNLENBQUMsR0FBQUQsSUFBQTtFQUFBLE9BQUtDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHO0FBQUE7QUFDckQ7QUFDQTtBQUNBLENBQUM7QUFBQ0MsRUFBQSxHQVhJVCxVQUFVO0FBYWhCLE1BQU1VLGlCQUFpQixHQUFHVCx5REFBTSxDQUFDVSxHQUFHO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQUFvQixZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTY4NzNmMjIzODJiODRmNzBkYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBDVEFTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxuICBib3JkZXItcmFkaXVzOiAzM3B4O1xyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IC8qIFNwYWNlIHNlY3Rpb25zIGV2ZW5seSAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIHNlY3Rpb25zIHZlcnRpY2FsbHkgb24gbW9iaWxlICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgYWxpZ24gaXRlbXMgaW4gbW9iaWxlIHZpZXcgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxOyAvKiBNYWtlIGVhY2ggc2VjdGlvbiB0YWtlIGVxdWFsIHNwYWNlICovXHJcbiAgbWFyZ2luOiAwIDIwcHg7IC8qIEFkZCBzb21lIG1hcmdpbiBiZXR3ZWVuIHNlY3Rpb25zICovXHJcbiAgbWF4LXdpZHRoOiAzMDBweDsgLyogU2V0IGEgbWF4LXdpZHRoIGZvciBiZXR0ZXIgcmVzcG9uc2l2ZW5lc3MgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0ZXh0IGluIHNlY3Rpb25zICovXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7IC8qIEFkZCB2ZXJ0aWNhbCBtYXJnaW4gZm9yIG1vYmlsZSAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiBBbGxvdyBmdWxsIHdpZHRoIG9uIG1vYmlsZSAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdJRkljb24gPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDBweDsgLyogQWRqdXN0IHNpemUgYXMgbmVlZGVkICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQ2hhbmdlIGN1cnNvciB0byBwb2ludGVyIGZvciBpbnRlcmFjdGl2aXR5ICovXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTbGlnaHRseSBzY2FsZSBvbiBob3ZlciAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENUQUhlYWRpbmcgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiA2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDA7IC8qIEFkanVzdCBtYXJnaW4gdG8gY3JlYXRlIHNwYWNpbmcgKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q1RBU2VjdGlvbiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fT5cclxuICAgICAgPFNlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPEdJRkljb24gc3JjPVwid2h0LnBuZ1wiIGFsdD1cIlBORyBJY29uIDFcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0gLz5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPldoYXQ8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIEx1bWluZXhhIFRlY2hub2xvZ2llcyBkZXZlbG9wZWQgaW1hZ2UgdHJhY2tpbmcgdmlydHVhbCBzb2Z0d2FyZSBiYXNlZCBvbiBBdWdtZW50ZWQgUmVhbGl0eSBhbmQgTWl4ZWQgUmVhbGl0eSwgbmFtZWQgaXQgbmV4QVIuXHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxHSUZJY29uIHNyYz1cIm5leGFyLnBuZ1wiIGFsdD1cIlBORyBJY29uIDJcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0gLz5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPm5leEFSPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICBuZXhBUiBpcyBhIFdlYkFSIHNvbHV0aW9uIHRoYXQgZGlzcGxheXMgY29udGVudCBsaWtlIDNEIG1vZGVscywgaG9sb2dyYXBoaWMgYXZhdGFycywgdmlkZW9zLCBpbWFnZXMsIGF1ZGlvLCBhbmQgbGlua3Mgd2hlbiB0aGUgbmV4QVIgY2FtZXJhIGlzIHBvaW50ZWQgYXQgYSAyRCBzdXJmYWNlLlxyXG4gICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICA8R0lGSWNvbiBzcmM9XCJuby5wbmdcIiBhbHQ9XCJQTkcgSWNvbiAzXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRlbDo4NjYwNDQ5OTcwXCJ9IC8+XHJcbiAgICAgICAgICA8Q1RBSGVhZGluZz5ObzwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgbmV4QVIgcmVxdWlyZXMgbm8gYWRkaXRpb25hbCBhcHAgaW5zdGFsbGF0aW9ucyBhbmQgd29ya3Mgc2VhbWxlc3NseSBvbiBhbGwgc21hcnRwaG9uZXMsIHdoZXRoZXIgQW5kcm9pZCBvciBpT1MuXHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPHA+RGlmZmVyZW50aWF0ZSB5b3Vyc2VsZiBmcm9tIGNvbXBldGl0aW9uIGFuZCBnbyB2aXJhbCE8L3A+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L1NlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgPC9DVEFTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
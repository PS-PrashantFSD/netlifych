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
  background-image: url('/path/to/your/abstract-pattern.png'); /* Use your abstract design image */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the background */
  padding: 100px 0;
  border-radius: 66px;
  position: relative; /* Enable positioning for pseudo-elements */
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2); /* Optional overlay for better text contrast */
    border-radius: 66px; /* Match border-radius with section */
    z-index: 0; /* Place it behind the content */
  }

  h2, p {
    position: relative; /* Bring text above the background */
    z-index: 1; /* Ensure text is on top */
  }
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
    max-width: 80%; /* Allow full width on mobile */
  }
`;
_c3 = Section;
const GIFIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  width: 50px; /* Adjust size as needed */
  height: auto;
  cursor: pointer; 
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SectionsContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "What"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "wht.png",
          alt: "PNG Icon 1",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "nexAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "info.png",
          alt: "PNG Icon 2",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "No"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "wrong.png",
          alt: "PNG Icon 3",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
      children: "Differentiate yourself from competition and go viral!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiR0lGSWNvbiIsImltZyIsIl9jNCIsIkNUQUhlYWRpbmciLCJoMiIsIl9jNSIsIkNUQURlc2NyaXB0aW9uIiwicCIsIl9jNiIsIkNhbGxUb0FjdGlvbiIsIl9qc3hERVYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJfYzciLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNBO0FBQ3FCO0FBQUE7QUFFNUQsTUFBTUEsVUFBVSxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDekMsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCQyxJQUFBO0VBQUEsSUFBQztJQUFFQztFQUFNLENBQUMsR0FBQUQsSUFBQTtFQUFBLE9BQUtDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHO0FBQUE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFB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QS9CLEdBQUE7QUFBQStCLFlBQUEsQ0FBQTdCLEdBQUE7QUFBQTZCLFlBQUEsQ0FBQTFCLEdBQUE7QUFBQTBCLFlBQUEsQ0FBQXZCLEdBQUE7QUFBQXVCLFlBQUEsQ0FBQXBCLEdBQUE7QUFBQW9CLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOTg0NjAzZDRmMDhmMjBmNDFiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuXHJcbmNvbnN0IENUQVNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9wYXRoL3RvL3lvdXIvYWJzdHJhY3QtcGF0dGVybi5wbmcnKTsgLyogVXNlIHlvdXIgYWJzdHJhY3QgZGVzaWduIGltYWdlICovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogQ292ZXIgdGhlIGVudGlyZSBzZWN0aW9uICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGJhY2tncm91bmQgKi9cclxuICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDY2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFbmFibGUgcG9zaXRpb25pbmcgZm9yIHBzZXVkby1lbGVtZW50cyAqL1xyXG4gIFxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAvKiBPcHRpb25hbCBvdmVybGF5IGZvciBiZXR0ZXIgdGV4dCBjb250cmFzdCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjZweDsgLyogTWF0Y2ggYm9yZGVyLXJhZGl1cyB3aXRoIHNlY3Rpb24gKi9cclxuICAgIHotaW5kZXg6IDA7IC8qIFBsYWNlIGl0IGJlaGluZCB0aGUgY29udGVudCAqL1xyXG4gIH1cclxuXHJcbiAgaDIsIHAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBCcmluZyB0ZXh0IGFib3ZlIHRoZSBiYWNrZ3JvdW5kICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBFbnN1cmUgdGV4dCBpcyBvbiB0b3AgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgLyogU3BhY2Ugc2VjdGlvbnMgZXZlbmx5ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgc2VjdGlvbnMgdmVydGljYWxseSBvbiBtb2JpbGUgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciBhbGlnbiBpdGVtcyBpbiBtb2JpbGUgdmlldyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7IC8qIE1ha2UgZWFjaCBzZWN0aW9uIHRha2UgZXF1YWwgc3BhY2UgKi9cclxuICBtYXJnaW46IDAgMjBweDsgLyogQWRkIHNvbWUgbWFyZ2luIGJldHdlZW4gc2VjdGlvbnMgKi9cclxuICBtYXgtd2lkdGg6IDMwMHB4OyAvKiBTZXQgYSBtYXgtd2lkdGggZm9yIGJldHRlciByZXNwb25zaXZlbmVzcyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRleHQgaW4gc2VjdGlvbnMgKi9cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDIwcHggMDsgLyogQWRkIHZlcnRpY2FsIG1hcmdpbiBmb3IgbW9iaWxlICovXHJcbiAgICBtYXgtd2lkdGg6IDgwJTsgLyogQWxsb3cgZnVsbCB3aWR0aCBvbiBtb2JpbGUgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHSUZJY29uID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogNTBweDsgLyogQWRqdXN0IHNpemUgYXMgbmVlZGVkICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTbGlnaHRseSBzY2FsZSBvbiBob3ZlciAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENUQUhlYWRpbmcgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiA2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDA7IC8qIEFkanVzdCBtYXJnaW4gdG8gY3JlYXRlIHNwYWNpbmcgKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q1RBU2VjdGlvbiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fT5cclxuICAgICAgPFNlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+V2hhdDwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxHSUZJY29uIHNyYz1cIndodC5wbmdcIiBhbHQ9XCJQTkcgSWNvbiAxXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRlbDo4NjYwNDQ5OTcwXCJ9IC8+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIEx1bWluZXhhIFRlY2hub2xvZ2llcyBkZXZlbG9wZWQgaW1hZ2UgdHJhY2tpbmcgdmlydHVhbCBzb2Z0d2FyZSBiYXNlZCBvbiBBdWdtZW50ZWQgUmVhbGl0eSBhbmQgTWl4ZWQgUmVhbGl0eSwgbmFtZWQgaXQgbmV4QVIuXHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPm5leEFSPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPEdJRkljb24gc3JjPVwiaW5mby5wbmdcIiBhbHQ9XCJQTkcgSWNvbiAyXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRlbDo4NjYwNDQ5OTcwXCJ9IC8+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIG5leEFSIGlzIGEgV2ViQVIgc29sdXRpb24gdGhhdCBkaXNwbGF5cyBjb250ZW50IGxpa2UgM0QgbW9kZWxzLCBob2xvZ3JhcGhpYyBhdmF0YXJzLCB2aWRlb3MsIGltYWdlcywgYXVkaW8sIGFuZCBsaW5rcyB3aGVuIHRoZSBuZXhBUiBjYW1lcmEgaXMgcG9pbnRlZCBhdCBhIDJEIHN1cmZhY2UuXHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPk5vPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPEdJRkljb24gc3JjPVwid3JvbmcucG5nXCIgYWx0PVwiUE5HIEljb24gM1wiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ0ZWw6ODY2MDQ0OTk3MFwifSAvPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICBuZXhBUiByZXF1aXJlcyBubyBhZGRpdGlvbmFsIGFwcCBpbnN0YWxsYXRpb25zIGFuZCB3b3JrcyBzZWFtbGVzc2x5IG9uIGFsbCBzbWFydHBob25lcywgd2hldGhlciBBbmRyb2lkIG9yIGlPUy5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L1NlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICA8cD5EaWZmZXJlbnRpYXRlIHlvdXJzZWxmIGZyb20gY29tcGV0aXRpb24gYW5kIGdvIHZpcmFsITwvcD5cclxuICAgIDwvQ1RBU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFRvQWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
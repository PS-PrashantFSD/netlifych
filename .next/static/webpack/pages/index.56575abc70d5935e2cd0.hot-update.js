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
  background-color: #454545;
  background-image: url('bg.png'); /* Use your abstract design image */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiR0lGSWNvbiIsImltZyIsIl9jNCIsIkNUQUhlYWRpbmciLCJoMiIsIl9jNSIsIkNUQURlc2NyaXB0aW9uIiwicCIsIl9jNiIsIkNhbGxUb0FjdGlvbiIsIl9qc3hERVYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJfYzciLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNBO0FBQ3FCO0FBQUE7QUFFNUQsTUFBTUEsVUFBVSxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDekMsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxFQUFBLEdBaENJTCxVQUFVO0FBa0NoQixNQUFNTSxpQkFBaUIsR0FBR0wseURBQU0sQ0FBQ00sR0FBRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFB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QSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NjU3NWFiYzcwZDU5MzVlMmNkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuXHJcbmNvbnN0IENUQVNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDU0NTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2JnLnBuZycpOyAvKiBVc2UgeW91ciBhYnN0cmFjdCBkZXNpZ24gaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBDb3ZlciB0aGUgZW50aXJlIHNlY3Rpb24gKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgYmFja2dyb3VuZCAqL1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNjZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEVuYWJsZSBwb3NpdGlvbmluZyBmb3IgcHNldWRvLWVsZW1lbnRzICovXHJcbiAgXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IC8qIE9wdGlvbmFsIG92ZXJsYXkgZm9yIGJldHRlciB0ZXh0IGNvbnRyYXN0ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2NnB4OyAvKiBNYXRjaCBib3JkZXItcmFkaXVzIHdpdGggc2VjdGlvbiAqL1xyXG4gICAgei1pbmRleDogMDsgLyogUGxhY2UgaXQgYmVoaW5kIHRoZSBjb250ZW50ICovXHJcbiAgfVxyXG5cclxuICBoMiwgcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEJyaW5nIHRleHQgYWJvdmUgdGhlIGJhY2tncm91bmQgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIEVuc3VyZSB0ZXh0IGlzIG9uIHRvcCAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAvKiBTcGFjZSBzZWN0aW9ucyBldmVubHkgKi9cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBzZWN0aW9ucyB2ZXJ0aWNhbGx5IG9uIG1vYmlsZSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGFsaWduIGl0ZW1zIGluIG1vYmlsZSB2aWV3ICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTsgLyogTWFrZSBlYWNoIHNlY3Rpb24gdGFrZSBlcXVhbCBzcGFjZSAqL1xyXG4gIG1hcmdpbjogMCAyMHB4OyAvKiBBZGQgc29tZSBtYXJnaW4gYmV0d2VlbiBzZWN0aW9ucyAqL1xyXG4gIG1heC13aWR0aDogMzAwcHg7IC8qIFNldCBhIG1heC13aWR0aCBmb3IgYmV0dGVyIHJlc3BvbnNpdmVuZXNzICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGV4dCBpbiBzZWN0aW9ucyAqL1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogMjBweCAwOyAvKiBBZGQgdmVydGljYWwgbWFyZ2luIGZvciBtb2JpbGUgKi9cclxuICAgIG1heC13aWR0aDogODAlOyAvKiBBbGxvdyBmdWxsIHdpZHRoIG9uIG1vYmlsZSAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdJRkljb24gPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiA1MHB4OyAvKiBBZGp1c3Qgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodGx5IHNjYWxlIG9uIGhvdmVyICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ1RBSGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6IDZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDIwcHggMDsgLyogQWRqdXN0IG1hcmdpbiB0byBjcmVhdGUgc3BhY2luZyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IENUQURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICA8U2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICA8Q1RBSGVhZGluZz5XaGF0PC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPEdJRkljb24gc3JjPVwid2h0LnBuZ1wiIGFsdD1cIlBORyBJY29uIDFcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0gLz5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgTHVtaW5leGEgVGVjaG5vbG9naWVzIGRldmVsb3BlZCBpbWFnZSB0cmFja2luZyB2aXJ0dWFsIHNvZnR3YXJlIGJhc2VkIG9uIEF1Z21lbnRlZCBSZWFsaXR5IGFuZCBNaXhlZCBSZWFsaXR5LCBuYW1lZCBpdCBuZXhBUi5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+bmV4QVI8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8R0lGSWNvbiBzcmM9XCJpbmZvLnBuZ1wiIGFsdD1cIlBORyBJY29uIDJcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0gLz5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgbmV4QVIgaXMgYSBXZWJBUiBzb2x1dGlvbiB0aGF0IGRpc3BsYXlzIGNvbnRlbnQgbGlrZSAzRCBtb2RlbHMsIGhvbG9ncmFwaGljIGF2YXRhcnMsIHZpZGVvcywgaW1hZ2VzLCBhdWRpbywgYW5kIGxpbmtzIHdoZW4gdGhlIG5leEFSIGNhbWVyYSBpcyBwb2ludGVkIGF0IGEgMkQgc3VyZmFjZS5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+Tm88L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8R0lGSWNvbiBzcmM9XCJ3cm9uZy5wbmdcIiBhbHQ9XCJQTkcgSWNvbiAzXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRlbDo4NjYwNDQ5OTcwXCJ9IC8+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIG5leEFSIHJlcXVpcmVzIG5vIGFkZGl0aW9uYWwgYXBwIGluc3RhbGxhdGlvbnMgYW5kIHdvcmtzIHNlYW1sZXNzbHkgb24gYWxsIHNtYXJ0cGhvbmVzLCB3aGV0aGVyIEFuZHJvaWQgb3IgaU9TLlxyXG4gICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvU2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgIDxwPkRpZmZlcmVudGlhdGUgeW91cnNlbGYgZnJvbSBjb21wZXRpdGlvbiBhbmQgZ28gdmlyYWwhPC9wPlxyXG4gICAgPC9DVEFTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
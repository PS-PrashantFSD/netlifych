webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Misc/Scard.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Scard.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Scard.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-icon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          style: {
            fontSize: '69px'
          },
          children: "nexAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "card-body",
        children: "Elevate user experience with our Augmented Reality software, blending real and virtual worlds for innovative engagement in marketing, education, and media."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-icon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          style: {
            fontSize: '69px'
          },
          children: "nexNet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "card-body",
        children: "Enhance your online presence with our custom web and software development. We deliver responsive, SEO-optimized websites and tailored software solutions that effectively communicate your brand."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-icon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          style: {
            fontSize: '69px'
          },
          children: "nexAi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "card-body",
        children: "Improve efficiency with our AI-powered Object Detection systems, ideal for retail, security, and automation, enabling smart inventory, surveillance, and process automation."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
_c = Card;
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjusts spacing between cards */
  
  
  .card {
    width: 300px;
    height: 300px;
    background: #e4e3e3da;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 1em 1.5em;
    transition: all 0.5s ease;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    margin: 2.5em 0; /* Adds margin to the top and bottom */

    &:hover {
      background: #f1f1f1;
    }
  }

  .card-icon svg {
    height: 4rem;
    width: 4rem;
  }

  .card-body {
    text-align: start; /* Change to start for better alignment */
  }
  @media (max-width: 600px) {
    .card {
      width: 100%; /* Make cards full-width on small screens */
      height: auto; /* Allow height to adjust based on content */
    }

    display: block; /* Stack cards vertically */
  }
`;
_c2 = StyledWrapper;
/* harmony default export */ __webpack_exports__["default"] = (Card);
var _c, _c2;
$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "StyledWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL1NjYXJkLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiX2pzeERFViIsIlN0eWxlZFdyYXBwZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZm9udFNpemUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsInN0eWxlZCIsImRpdiIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUFBO0FBRXZDLE1BQU1BLElBQUksR0FBR0EsQ0FBQSxLQUFNO0VBQ2pCLG9CQUNFQyxvRUFBQSxDQUFDQyxhQUFhO0lBQUFDLFFBQUEsZ0JBQ1pGLG9FQUFBO01BQUtHLFNBQVMsRUFBQyxNQUFNO01BQUFELFFBQUEsZ0JBQ25CRixvRUFBQTtRQUFLRyxTQUFTLEVBQUMsV0FBVztRQUFBRCxRQUFBLGVBQ3hCRixvRUFBQTtVQUFJSSxLQUFLLEVBQUU7WUFBQ0MsUUFBUSxFQUFFO1VBQU0sQ0FBRTtVQUFBSCxRQUFBLEVBQUM7UUFBSztVQUFBSSxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBSTtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUN0QyxDQUFDLGVBQ05ULG9FQUFBO1FBQU1HLFNBQVMsRUFBQyxXQUFXO1FBQUFELFFBQUEsRUFBQztNQUU1QjtRQUFBSSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBTSxDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0osQ0FBQyxlQUNOVCxvRUFBQTtNQUFLRyxTQUFTLEVBQUMsTUFBTTtNQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7UUFBS0csU0FBUyxFQUFDLFdBQVc7UUFBQUQsUUFBQSxlQUMxQkYsb0VBQUE7VUFBSUksS0FBSyxFQUFFO1lBQUNDLFFBQVEsRUFBRTtVQUFNLENBQUU7VUFBQUgsUUFBQSxFQUFDO1FBQU07VUFBQUksUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUk7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDckMsQ0FBQyxlQUNOVCxvRUFBQTtRQUFNRyxTQUFTLEVBQUMsV0FBVztRQUFBRCxRQUFBLEVBQUM7TUFFNUI7UUFBQUksUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQU0sQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNKLENBQUMsZUFDTlQsb0VBQUE7TUFBS0csU0FBUyxFQUFDLE1BQU07TUFBQUQsUUFBQSxnQkFDbkJGLG9FQUFBO1FBQUtHLFNBQVMsRUFBQyxXQUFXO1FBQUFELFFBQUEsZUFDMUJGLG9FQUFBO1VBQUlJLEtBQUssRUFBRTtZQUFDQyxRQUFRLEVBQUU7VUFBTSxDQUFFO1VBQUFILFFBQUEsRUFBQztRQUFLO1VBQUFJLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFJO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ3BDLENBQUMsZUFDTlQsb0VBQUE7UUFBTUcsU0FBUyxFQUFDLFdBQVc7UUFBQUQsUUFBQSxFQUFDO01BRTVCO1FBQUFJLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFNLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSixDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ08sQ0FBQztBQUVwQixDQUFDO0FBQUNDLEVBQUEsR0E3QklYLElBQUk7QUErQlYsTUFBTUUsYUFBYSxHQUFHVSx5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBekNJWixhQUFhO0FBMkNKRixtRUFBSSxFQUFDO0FBQUEsSUFBQVcsRUFBQSxFQUFBRyxHQUFBO0FBQUFDLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuZWEzZTEzZTViODFkMWJiZmQ0ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXcmFwcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaWNvblwiPlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICc2OXB4J319Pm5leEFSPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIEVsZXZhdGUgdXNlciBleHBlcmllbmNlIHdpdGggb3VyIEF1Z21lbnRlZCBSZWFsaXR5IHNvZnR3YXJlLCBibGVuZGluZyByZWFsIGFuZCB2aXJ0dWFsIHdvcmxkcyBmb3IgaW5ub3ZhdGl2ZSBlbmdhZ2VtZW50IGluIG1hcmtldGluZywgZWR1Y2F0aW9uLCBhbmQgbWVkaWEuXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWljb25cIj5cclxuICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogJzY5cHgnfX0+bmV4TmV0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIEVuaGFuY2UgeW91ciBvbmxpbmUgcHJlc2VuY2Ugd2l0aCBvdXIgY3VzdG9tIHdlYiBhbmQgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIFdlIGRlbGl2ZXIgcmVzcG9uc2l2ZSwgU0VPLW9wdGltaXplZCB3ZWJzaXRlcyBhbmQgdGFpbG9yZWQgc29mdHdhcmUgc29sdXRpb25zIHRoYXQgZWZmZWN0aXZlbHkgY29tbXVuaWNhdGUgeW91ciBicmFuZC5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaWNvblwiPlxyXG4gICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiAnNjlweCd9fT5uZXhBaTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICBJbXByb3ZlIGVmZmljaWVuY3kgd2l0aCBvdXIgQUktcG93ZXJlZCBPYmplY3QgRGV0ZWN0aW9uIHN5c3RlbXMsIGlkZWFsIGZvciByZXRhaWwsIHNlY3VyaXR5LCBhbmQgYXV0b21hdGlvbiwgZW5hYmxpbmcgc21hcnQgaW52ZW50b3J5LCBzdXJ2ZWlsbGFuY2UsIGFuZCBwcm9jZXNzIGF1dG9tYXRpb24uXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBBZGp1c3RzIHNwYWNpbmcgYmV0d2VlbiBjYXJkcyAqL1xyXG4gIFxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlM2UzZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1hcmdpbjogMi41ZW0gMDsgLyogQWRkcyBtYXJnaW4gdG8gdGhlIHRvcCBhbmQgYm90dG9tICovXHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pY29uIHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7IC8qIENoYW5nZSB0byBzdGFydCBmb3IgYmV0dGVyIGFsaWdubWVudCAqL1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7IC8qIE1ha2UgY2FyZHMgZnVsbC13aWR0aCBvbiBzbWFsbCBzY3JlZW5zICovXHJcbiAgICAgIGhlaWdodDogYXV0bzsgLyogQWxsb3cgaGVpZ2h0IHRvIGFkanVzdCBiYXNlZCBvbiBjb250ZW50ICovXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIFN0YWNrIGNhcmRzIHZlcnRpY2FsbHkgKi9cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
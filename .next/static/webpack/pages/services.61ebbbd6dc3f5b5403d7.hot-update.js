webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Misc/Button.jsx":
/*!************************************!*\
  !*** ./components/Misc/Button.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Button.jsx";



const Button = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Crush!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
_c = Button;
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  button {
  border: none;
  width: 140px;
  height: 50px;
  color: #fff;
  z-index: 1;
  display: flex;
  background: #000;
  position: relative;
  cursor: pointer;
  margin: 20px 0px 20px 0px
}

button p {
  margin: 0 auto;
  align-self: center;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
}

button::after {
  position: absolute;
  content: "";
  width: 100%;
  z-index: -1;
  height: 10%;
  bottom: 0;
  clip-path: polygon(
    0% 74%,
    4% 75%,
    8% 76%,
    11% 77%,
    15% 78%,
    20% 78%,
    25% 77%,
    32% 77%,
    37% 75%,
    40% 74%,
    43% 74%,
    46% 73%,
    52% 72%,
    57% 72%,
    65% 74%,
    66% 75%,
    71% 78%,
    75% 82%,
    81% 86%,
    83% 88%,
    88% 91%,
    90% 94%,
    94% 96%,
    98% 98%,
    100% 100%,
    82% 100%,
    0 100%
  );
  background: #8792eb;
  transition: 0.2s ease;
}

button::before {
  position: absolute;
  content: "";
  /*   bottom: 80%; */
  transform: rotate(180deg);
  width: 100%;
  height: 10%;
  transition: 0.2s ease;
  /*   bottom:; */
  z-index: -1;
  clip-path: polygon(
    0% 74%,
    4% 75%,
    8% 76%,
    11% 77%,
    15% 78%,
    20% 78%,
    25% 77%,
    32% 77%,
    37% 75%,
    40% 74%,
    43% 74%,
    46% 73%,
    52% 72%,
    57% 72%,
    65% 74%,
    66% 75%,
    71% 78%,
    75% 82%,
    81% 86%,
    83% 88%,
    88% 91%,
    90% 94%,
    94% 96%,
    98% 98%,
    100% 100%,
    82% 100%,
    0 100%
  );
  background: #8792eb;
}

button:hover::after {
  clip-path: polygon(
    0 30%,
    9% 34%,
    7% 39%,
    11% 43%,
    13% 33%,
    17% 30%,
    24% 34%,
    25% 35%,
    30% 31%,
    30% 38%,
    39% 33%,
    35% 43%,
    43% 45%,
    55% 46%,
    65% 74%,
    67% 66%,
    81% 57%,
    75% 82%,
    81% 86%,
    83% 88%,
    88% 91%,
    90% 94%,
    94% 96%,
    98% 98%,
    100% 100%,
    82% 100%,
    0 100%
  );
  height: 80%;
}

button:hover::before {
  clip-path: polygon(
    0 30%,
    9% 34%,
    7% 39%,
    11% 43%,
    13% 33%,
    17% 30%,
    24% 34%,
    25% 35%,
    30% 31%,
    30% 38%,
    39% 33%,
    35% 43%,
    43% 45%,
    55% 46%,
    65% 74%,
    67% 66%,
    81% 57%,
    75% 82%,
    81% 86%,
    83% 88%,
    88% 91%,
    90% 94%,
    94% 96%,
    98% 98%,
    100% 100%,
    82% 100%,
    0 100%
  );
  height: 80%;
}

`;
_c2 = StyledWrapper;
/* harmony default export */ __webpack_exports__["default"] = (Button);
var _c, _c2;
$RefreshReg$(_c, "Button");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0J1dHRvbi5qc3giXSwibmFtZXMiOlsiQnV0dG9uIiwiX2pzeERFViIsIlN0eWxlZFdyYXBwZXIiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwic3R5bGVkIiwiZGl2IiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsTUFBTSxHQUFHQSxDQUFBLEtBQU07RUFDbkIsb0JBQ0VDLG9FQUFBLENBQUNDLGFBQWE7SUFBQUMsUUFBQSxlQUNaRixvRUFBQTtNQUFBRSxRQUFBLGVBQ0VGLG9FQUFBO1FBQUFFLFFBQUEsRUFBRztNQUFNO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFHO0lBQUM7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ1A7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDSSxDQUFDO0FBRXBCLENBQUM7QUFBQ0MsRUFBQSxHQVJJUixNQUFNO0FBVVosTUFBTUUsYUFBYSxHQUFHTyx5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBMUtJVCxhQUFhO0FBNEtKRixxRUFBTSxFQUFDO0FBQUEsSUFBQVEsRUFBQSxFQUFBRyxHQUFBO0FBQUFDLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuNjFlYmJiZDZkYzNmNWI1NDAzZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDxidXR0b24+XHJcbiAgICAgICAgPHA+Q3J1c2ghPC9wPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHhcclxufVxyXG5cclxuYnV0dG9uIHAge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b246OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBib3R0b206IDA7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMCUgNzQlLFxyXG4gICAgNCUgNzUlLFxyXG4gICAgOCUgNzYlLFxyXG4gICAgMTElIDc3JSxcclxuICAgIDE1JSA3OCUsXHJcbiAgICAyMCUgNzglLFxyXG4gICAgMjUlIDc3JSxcclxuICAgIDMyJSA3NyUsXHJcbiAgICAzNyUgNzUlLFxyXG4gICAgNDAlIDc0JSxcclxuICAgIDQzJSA3NCUsXHJcbiAgICA0NiUgNzMlLFxyXG4gICAgNTIlIDcyJSxcclxuICAgIDU3JSA3MiUsXHJcbiAgICA2NSUgNzQlLFxyXG4gICAgNjYlIDc1JSxcclxuICAgIDcxJSA3OCUsXHJcbiAgICA3NSUgODIlLFxyXG4gICAgODElIDg2JSxcclxuICAgIDgzJSA4OCUsXHJcbiAgICA4OCUgOTElLFxyXG4gICAgOTAlIDk0JSxcclxuICAgIDk0JSA5NiUsXHJcbiAgICA5OCUgOTglLFxyXG4gICAgMTAwJSAxMDAlLFxyXG4gICAgODIlIDEwMCUsXHJcbiAgICAwIDEwMCVcclxuICApO1xyXG4gIGJhY2tncm91bmQ6ICM4NzkyZWI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG5idXR0b246OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLyogICBib3R0b206IDgwJTsgKi9cclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAvKiAgIGJvdHRvbTo7ICovXHJcbiAgei1pbmRleDogLTE7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMCUgNzQlLFxyXG4gICAgNCUgNzUlLFxyXG4gICAgOCUgNzYlLFxyXG4gICAgMTElIDc3JSxcclxuICAgIDE1JSA3OCUsXHJcbiAgICAyMCUgNzglLFxyXG4gICAgMjUlIDc3JSxcclxuICAgIDMyJSA3NyUsXHJcbiAgICAzNyUgNzUlLFxyXG4gICAgNDAlIDc0JSxcclxuICAgIDQzJSA3NCUsXHJcbiAgICA0NiUgNzMlLFxyXG4gICAgNTIlIDcyJSxcclxuICAgIDU3JSA3MiUsXHJcbiAgICA2NSUgNzQlLFxyXG4gICAgNjYlIDc1JSxcclxuICAgIDcxJSA3OCUsXHJcbiAgICA3NSUgODIlLFxyXG4gICAgODElIDg2JSxcclxuICAgIDgzJSA4OCUsXHJcbiAgICA4OCUgOTElLFxyXG4gICAgOTAlIDk0JSxcclxuICAgIDk0JSA5NiUsXHJcbiAgICA5OCUgOTglLFxyXG4gICAgMTAwJSAxMDAlLFxyXG4gICAgODIlIDEwMCUsXHJcbiAgICAwIDEwMCVcclxuICApO1xyXG4gIGJhY2tncm91bmQ6ICM4NzkyZWI7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbihcclxuICAgIDAgMzAlLFxyXG4gICAgOSUgMzQlLFxyXG4gICAgNyUgMzklLFxyXG4gICAgMTElIDQzJSxcclxuICAgIDEzJSAzMyUsXHJcbiAgICAxNyUgMzAlLFxyXG4gICAgMjQlIDM0JSxcclxuICAgIDI1JSAzNSUsXHJcbiAgICAzMCUgMzElLFxyXG4gICAgMzAlIDM4JSxcclxuICAgIDM5JSAzMyUsXHJcbiAgICAzNSUgNDMlLFxyXG4gICAgNDMlIDQ1JSxcclxuICAgIDU1JSA0NiUsXHJcbiAgICA2NSUgNzQlLFxyXG4gICAgNjclIDY2JSxcclxuICAgIDgxJSA1NyUsXHJcbiAgICA3NSUgODIlLFxyXG4gICAgODElIDg2JSxcclxuICAgIDgzJSA4OCUsXHJcbiAgICA4OCUgOTElLFxyXG4gICAgOTAlIDk0JSxcclxuICAgIDk0JSA5NiUsXHJcbiAgICA5OCUgOTglLFxyXG4gICAgMTAwJSAxMDAlLFxyXG4gICAgODIlIDEwMCUsXHJcbiAgICAwIDEwMCVcclxuICApO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXI6OmJlZm9yZSB7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMCAzMCUsXHJcbiAgICA5JSAzNCUsXHJcbiAgICA3JSAzOSUsXHJcbiAgICAxMSUgNDMlLFxyXG4gICAgMTMlIDMzJSxcclxuICAgIDE3JSAzMCUsXHJcbiAgICAyNCUgMzQlLFxyXG4gICAgMjUlIDM1JSxcclxuICAgIDMwJSAzMSUsXHJcbiAgICAzMCUgMzglLFxyXG4gICAgMzklIDMzJSxcclxuICAgIDM1JSA0MyUsXHJcbiAgICA0MyUgNDUlLFxyXG4gICAgNTUlIDQ2JSxcclxuICAgIDY1JSA3NCUsXHJcbiAgICA2NyUgNjYlLFxyXG4gICAgODElIDU3JSxcclxuICAgIDc1JSA4MiUsXHJcbiAgICA4MSUgODYlLFxyXG4gICAgODMlIDg4JSxcclxuICAgIDg4JSA5MSUsXHJcbiAgICA5MCUgOTQlLFxyXG4gICAgOTQlIDk2JSxcclxuICAgIDk4JSA5OCUsXHJcbiAgICAxMDAlIDEwMCUsXHJcbiAgICA4MiUgMTAwJSxcclxuICAgIDAgMTAwJVxyXG4gICk7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
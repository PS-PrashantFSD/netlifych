webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Misc/Nexcard.jsx":
/*!*************************************!*\
  !*** ./components/Misc/Nexcard.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Nexcard.jsx";



const CardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-around; /* Distribute space around the cards */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  margin: 20px 0; /* Add some margin around the container */
`;
_c = CardsContainer;
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  /*works janky on mobile :<*/
  position: relative;
  width: 500px; /* Width of each card */
  height: 254px;
  transition: 200ms;
  margin: 10px; /* Add space between cards */

  &:active {
    height: 245px; /* Slightly change height on active state */
  }
`;
_c2 = CardWrapper;
const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 700ms;
  background: #302f2f;

  #prompt {
    bottom: 8px;
    left: 12px;
    z-index: 20;
    font-size: 50px;
    font-weight: bold;
    transition: 300ms ease-in-out-out;
    max-width: 1000px;
    color: rgb(255, 255, 255);
  }

  .title {
    opacity: 0;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out-out;
    transition-delay: 100ms;
    position: absolute;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    color: black;
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }
`;
_c3 = StyledCard;
const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CardsContainer, {
    children: [...Array(3)].map((_, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CardWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledCard, {
        id: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          id: "prompt",
          children: ["nexAR ", index + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "title",
          children: "We understand the importance of a strong brand identity, that's why our team is dedicated to helping you create and maintain a cohesive identity that appeals to your target audience and helps you stand out from the competition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, undefined), Array.from({
        length: 25
      }, (_, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: `tracker tr-${i + 1}`
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, undefined))]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, undefined);
};
_c4 = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "CardsContainer");
$RefreshReg$(_c2, "CardWrapper");
$RefreshReg$(_c3, "StyledCard");
$RefreshReg$(_c4, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGNhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmRzQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiX2MiLCJDYXJkV3JhcHBlciIsIl9jMiIsIlN0eWxlZENhcmQiLCJfYzMiLCJDYXJkIiwiX2pzeERFViIsImNoaWxkcmVuIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJpZCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsImZyb20iLCJsZW5ndGgiLCJpIiwiX2M0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxFQUFBLEdBTElILGNBQWM7QUFPcEIsTUFBTUksV0FBVyxHQUFHSCx5REFBTSxDQUFDQyxHQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDRyxHQUFBLEdBWElELFdBQVc7QUFhakIsTUFBTUUsVUFBVSxHQUFHTCx5REFBTSxDQUFDQyxHQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0ssR0FBQSxHQTFESUQsVUFBVTtBQTREaEIsTUFBTUUsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VDLG9FQUFBLENBQUNULGNBQWM7SUFBQVUsUUFBQSxFQUNaLENBQUMsR0FBR0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLEtBQUssa0JBQzFCTCxvRUFBQSxDQUFDTCxXQUFXO01BQUFNLFFBQUEsZ0JBQ1ZELG9FQUFBLENBQUNILFVBQVU7UUFBQ1MsRUFBRSxFQUFDLE1BQU07UUFBQUwsUUFBQSxnQkFDbkJELG9FQUFBO1VBQUdNLEVBQUUsRUFBQyxRQUFRO1VBQUFMLFFBQUEsR0FBQyxRQUFNLEVBQUNJLEtBQUssR0FBRyxDQUFDO1FBQUE7VUFBQUUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUksQ0FBQyxlQUNwQ1Ysb0VBQUE7VUFBS1csU0FBUyxFQUFDLE9BQU87VUFBQVYsUUFBQSxFQUFDO1FBS3ZCO1VBQUFNLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFLLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSSxDQUFDLEVBQ1pSLEtBQUssQ0FBQ1UsSUFBSSxDQUFDO1FBQUVDLE1BQU0sRUFBRTtNQUFHLENBQUMsRUFBRSxDQUFDVCxDQUFDLEVBQUVVLENBQUMsa0JBQy9CZCxvRUFBQTtRQUFLVyxTQUFTLEVBQUUsY0FBY0csQ0FBQyxHQUFHLENBQUM7TUFBRyxHQUFNQSxDQUFDO1FBQUFQLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFHLENBQ2pELENBQUM7SUFBQSxHQVpjTCxLQUFLO01BQUFFLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQWFWLENBQ2Q7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDWSxDQUFDO0FBRXJCLENBQUM7QUFBQ0ssR0FBQSxHQXJCSWhCLElBQUk7QUF1QktBLG1FQUFJLEVBQUM7QUFBQSxJQUFBTCxFQUFBLEVBQUFFLEdBQUEsRUFBQUUsR0FBQSxFQUFBaUIsR0FBQTtBQUFBQyxZQUFBLENBQUF0QixFQUFBO0FBQUFzQixZQUFBLENBQUFwQixHQUFBO0FBQUFvQixZQUFBLENBQUFsQixHQUFBO0FBQUFrQixZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDhkZWY2OWFjMDRlZTQ0ZDY5MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ2FyZHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IC8qIERpc3RyaWJ1dGUgc3BhY2UgYXJvdW5kIHRoZSBjYXJkcyAqL1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3cgd3JhcHBpbmcgb24gc21hbGxlciBzY3JlZW5zICovXHJcbiAgbWFyZ2luOiAyMHB4IDA7IC8qIEFkZCBzb21lIG1hcmdpbiBhcm91bmQgdGhlIGNvbnRhaW5lciAqL1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8qd29ya3MgamFua3kgb24gbW9iaWxlIDo8Ki9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDUwMHB4OyAvKiBXaWR0aCBvZiBlYWNoIGNhcmQgKi9cclxuICBoZWlnaHQ6IDI1NHB4O1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gIG1hcmdpbjogMTBweDsgLyogQWRkIHNwYWNlIGJldHdlZW4gY2FyZHMgKi9cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgaGVpZ2h0OiAyNDVweDsgLyogU2xpZ2h0bHkgY2hhbmdlIGhlaWdodCBvbiBhY3RpdmUgc3RhdGUgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRDYXJkID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgei1pbmRleDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0cmFuc2l0aW9uOiA3MDBtcztcclxuICBiYWNrZ3JvdW5kOiAjMzAyZjJmO1xyXG5cclxuICAjcHJvbXB0IHtcclxuICAgIGJvdHRvbTogOHB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dC1vdXQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0LW91dDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAudHJhY2tlcjpob3ZlciB+ICNjYXJkIC50aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLnRyYWNrZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudHJhY2tlcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudHJhY2tlcjpob3ZlciB+ICNjYXJkICNwcm9tcHQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIC50cmFja2VyOmhvdmVyIH4gI2NhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZHNDb250YWluZXI+XHJcbiAgICAgIHtbLi4uQXJyYXkoMyldLm1hcCgoXywgaW5kZXgpID0+IChcclxuICAgICAgICA8Q2FyZFdyYXBwZXIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8U3R5bGVkQ2FyZCBpZD1cImNhcmRcIj5cclxuICAgICAgICAgICAgPHAgaWQ9XCJwcm9tcHRcIj5uZXhBUiB7aW5kZXggKyAxfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIFdlIHVuZGVyc3RhbmQgdGhlIGltcG9ydGFuY2Ugb2YgYSBzdHJvbmcgYnJhbmQgaWRlbnRpdHksIHRoYXQncyB3aHkgb3VyXHJcbiAgICAgICAgICAgICAgdGVhbSBpcyBkZWRpY2F0ZWQgdG8gaGVscGluZyB5b3UgY3JlYXRlIGFuZCBtYWludGFpbiBhIGNvaGVzaXZlIGlkZW50aXR5XHJcbiAgICAgICAgICAgICAgdGhhdCBhcHBlYWxzIHRvIHlvdXIgdGFyZ2V0IGF1ZGllbmNlIGFuZCBoZWxwcyB5b3Ugc3RhbmQgb3V0IGZyb20gdGhlXHJcbiAgICAgICAgICAgICAgY29tcGV0aXRpb24uXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TdHlsZWRDYXJkPlxyXG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDI1IH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdHJhY2tlciB0ci0ke2kgKyAxfWB9IGtleT17aX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgICAgICkpfVxyXG4gICAgPC9DYXJkc0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
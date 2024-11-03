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
  position: relative;
  width: 500px; /* Width of each card */
  height: 254px;
  transition: 200ms;
  margin: 10px; /* Add space between cards */
  overflow: hidden; /* Prevent overflow during hover effects */

  &:active {
    height: 245px; /* Slightly change height on active state */
  }

  &:hover #card {
    filter: brightness(1.1); /* Brighten card on hover */
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
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    position: absolute;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    color: black;
    transform: translateY(20px); /* Slightly translate up for smooth appearance */
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
    transform: translateY(0); /* Bring into view */
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
          lineNumber: 89,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "title",
          children: "We understand the importance of a strong brand identity, that's why our team is dedicated to helping you create and maintain a cohesive identity that appeals to your target audience and helps you stand out from the competition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, undefined), Array.from({
        length: 25
      }, (_, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: `tracker tr-${i + 1}`
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, undefined))]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGNhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmRzQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiX2MiLCJDYXJkV3JhcHBlciIsIl9jMiIsIlN0eWxlZENhcmQiLCJfYzMiLCJDYXJkIiwiX2pzeERFViIsImNoaWxkcmVuIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJpZCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsImZyb20iLCJsZW5ndGgiLCJpIiwiX2M0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxFQUFBLEdBTElILGNBQWM7QUFPcEIsTUFBTUksV0FBVyxHQUFHSCx5REFBTSxDQUFDQyxHQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNHLEdBQUEsR0FmSUQsV0FBVztBQWlCakIsTUFBTUUsVUFBVSxHQUFHTCx5REFBTSxDQUFDQyxHQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDSyxHQUFBLEdBckRJRCxVQUFVO0FBdURoQixNQUFNRSxJQUFJLEdBQUdBLENBQUEsS0FBTTtFQUNqQixvQkFDRUMsb0VBQUEsQ0FBQ1QsY0FBYztJQUFBVSxRQUFBLEVBQ1osQ0FBQyxHQUFHQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLENBQUMsRUFBRUMsS0FBSyxrQkFDMUJMLG9FQUFBLENBQUNMLFdBQVc7TUFBQU0sUUFBQSxnQkFDVkQsb0VBQUEsQ0FBQ0gsVUFBVTtRQUFDUyxFQUFFLEVBQUMsTUFBTTtRQUFBTCxRQUFBLGdCQUNuQkQsb0VBQUE7VUFBR00sRUFBRSxFQUFDLFFBQVE7VUFBQUwsUUFBQSxHQUFDLFFBQU0sRUFBQ0ksS0FBSyxHQUFHLENBQUM7UUFBQTtVQUFBRSxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBSSxDQUFDLGVBQ3BDVixvRUFBQTtVQUFLVyxTQUFTLEVBQUMsT0FBTztVQUFBVixRQUFBLEVBQUM7UUFLdkI7VUFBQU0sUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUssQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNJLENBQUMsRUFDWlIsS0FBSyxDQUFDVSxJQUFJLENBQUM7UUFBRUMsTUFBTSxFQUFFO01BQUcsQ0FBQyxFQUFFLENBQUNULENBQUMsRUFBRVUsQ0FBQyxrQkFDL0JkLG9FQUFBO1FBQUtXLFNBQVMsRUFBRSxjQUFjRyxDQUFDLEdBQUcsQ0FBQztNQUFHLEdBQU1BLENBQUM7UUFBQVAsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUcsQ0FDakQsQ0FBQztJQUFBLEdBWmNMLEtBQUs7TUFBQUUsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBYVYsQ0FDZDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNZLENBQUM7QUFFckIsQ0FBQztBQUFDSyxHQUFBLEdBckJJaEIsSUFBSTtBQXVCS0EsbUVBQUksRUFBQztBQUFBLElBQUFMLEVBQUEsRUFBQUUsR0FBQSxFQUFBRSxHQUFBLEVBQUFpQixHQUFBO0FBQUFDLFlBQUEsQ0FBQXRCLEVBQUE7QUFBQXNCLFlBQUEsQ0FBQXBCLEdBQUE7QUFBQW9CLFlBQUEsQ0FBQWxCLEdBQUE7QUFBQWtCLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZjFlZTc3YTg2MmU2OWI1ZmM2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDYXJkc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgLyogRGlzdHJpYnV0ZSBzcGFjZSBhcm91bmQgdGhlIGNhcmRzICovXHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBBbGxvdyB3cmFwcGluZyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cclxuICBtYXJnaW46IDIwcHggMDsgLyogQWRkIHNvbWUgbWFyZ2luIGFyb3VuZCB0aGUgY29udGFpbmVyICovXHJcbmA7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA1MDBweDsgLyogV2lkdGggb2YgZWFjaCBjYXJkICovXHJcbiAgaGVpZ2h0OiAyNTRweDtcclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICBtYXJnaW46IDEwcHg7IC8qIEFkZCBzcGFjZSBiZXR3ZWVuIGNhcmRzICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCBvdmVyZmxvdyBkdXJpbmcgaG92ZXIgZWZmZWN0cyAqL1xyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBoZWlnaHQ6IDI0NXB4OyAvKiBTbGlnaHRseSBjaGFuZ2UgaGVpZ2h0IG9uIGFjdGl2ZSBzdGF0ZSAqL1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAjY2FyZCB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTsgLyogQnJpZ2h0ZW4gY2FyZCBvbiBob3ZlciAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICB6LWluZGV4OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IDcwMG1zO1xyXG4gIGJhY2tncm91bmQ6ICMzMDJmMmY7XHJcblxyXG4gICNwcm9tcHQge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0LW91dDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IC8qIFNsaWdodGx5IHRyYW5zbGF0ZSB1cCBmb3Igc21vb3RoIGFwcGVhcmFuY2UgKi9cclxuICB9XHJcblxyXG4gIC50cmFja2VyOmhvdmVyIH4gI2NhcmQgLnRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IC8qIEJyaW5nIGludG8gdmlldyAqL1xyXG4gIH1cclxuXHJcbiAgLnRyYWNrZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudHJhY2tlcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudHJhY2tlcjpob3ZlciB+ICNjYXJkICNwcm9tcHQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZHNDb250YWluZXI+XHJcbiAgICAgIHtbLi4uQXJyYXkoMyldLm1hcCgoXywgaW5kZXgpID0+IChcclxuICAgICAgICA8Q2FyZFdyYXBwZXIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8U3R5bGVkQ2FyZCBpZD1cImNhcmRcIj5cclxuICAgICAgICAgICAgPHAgaWQ9XCJwcm9tcHRcIj5uZXhBUiB7aW5kZXggKyAxfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIFdlIHVuZGVyc3RhbmQgdGhlIGltcG9ydGFuY2Ugb2YgYSBzdHJvbmcgYnJhbmQgaWRlbnRpdHksIHRoYXQncyB3aHkgb3VyXHJcbiAgICAgICAgICAgICAgdGVhbSBpcyBkZWRpY2F0ZWQgdG8gaGVscGluZyB5b3UgY3JlYXRlIGFuZCBtYWludGFpbiBhIGNvaGVzaXZlIGlkZW50aXR5XHJcbiAgICAgICAgICAgICAgdGhhdCBhcHBlYWxzIHRvIHlvdXIgdGFyZ2V0IGF1ZGllbmNlIGFuZCBoZWxwcyB5b3Ugc3RhbmQgb3V0IGZyb20gdGhlXHJcbiAgICAgICAgICAgICAgY29tcGV0aXRpb24uXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TdHlsZWRDYXJkPlxyXG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDI1IH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdHJhY2tlciB0ci0ke2kgKyAxfWB9IGtleT17aX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgICAgICkpfVxyXG4gICAgPC9DYXJkc0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
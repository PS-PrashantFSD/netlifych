webpackHotUpdate_N_E("pages/nexar",{

/***/ "./components/Misc/Carde.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Carde.jsx ***!
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Carde.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "parent",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "content-box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "card-title",
            children: "AR Card"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "card-content",
            children: "AR Business Card, Wedding Card, Sticker and Thanks Card"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "see-more",
            children: "Book Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "date-box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "month",
            children: "nex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "date",
            children: "AR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
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
_c = Card;
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  .parent {
    width: 300px;
    padding: 20px;
    perspective: 1000px;
  }

  .card {
    padding-top: 50px;
    border: 3px solid rgb(255, 255, 255);
    transform-style: preserve-3d;
    background-color: transparent; /* Set background to transparent */
    width: 100%;
    box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: rotate3d(0.5, 1, 0, 30deg);
  }

  .content-box {
    background: rgba(255, 0, 0, 0.732); /* Change background to red */
    transition: all 0.5s ease-in-out;
    padding: 60px 25px 25px 25px;
    transform-style: preserve-3d;
  }

  .content-box .card-title {
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
  }

  .content-box .card-title:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .card-content {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #f2f2f2;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 30px);
  }

  .content-box .card-content:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .see-more {
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    font-weight: 900;
    font-size: 9px;
    text-transform: uppercase;
    color: rgb(7, 185, 255);
    background: white;
    padding: 0.5rem 0.7rem;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
  }

  .content-box .see-more:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .date-box {
    position: absolute;
    top: 30px;
    right: 30px;
    height: 60px;
    width: 60px;
    background: white;
    border: 1px solid rgb(7, 185, 255);
    padding: 10px;
    transform: translate3d(0px, 0px, 80px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
  }

  .date-box span {
    display: block;
    text-align: center;
  }

  .date-box .month {
    color: rgb(4, 193, 250);
    font-size: 9px;
    font-weight: 700;
  }

  .date-box .date {
    font-size: 20px;
    font-weight: 900;
    color: rgb(4, 193, 250);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmRlLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiX2pzeERFViIsIlN0eWxlZFdyYXBwZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwic3R5bGVkIiwiZGl2IiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VDLG9FQUFBLENBQUNDLGFBQWE7SUFBQUMsUUFBQSxlQUNaRixvRUFBQTtNQUFLRyxTQUFTLEVBQUMsUUFBUTtNQUFBRCxRQUFBLGVBQ3JCRixvRUFBQTtRQUFLRyxTQUFTLEVBQUMsTUFBTTtRQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7VUFBS0csU0FBUyxFQUFDLGFBQWE7VUFBQUQsUUFBQSxnQkFDMUJGLG9FQUFBO1lBQU1HLFNBQVMsRUFBQyxZQUFZO1lBQUFELFFBQUEsRUFBQztVQUFPO1lBQUFFLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFNLENBQUMsZUFDM0NQLG9FQUFBO1lBQUdHLFNBQVMsRUFBQyxjQUFjO1lBQUFELFFBQUEsRUFBQztVQUU1QjtZQUFBRSxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRyxDQUFDLGVBQ0pQLG9FQUFBO1lBQU1HLFNBQVMsRUFBQyxVQUFVO1lBQUFELFFBQUEsRUFBQztVQUFRO1lBQUFFLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFNLENBQUM7UUFBQTtVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDdkMsQ0FBQyxlQUNOUCxvRUFBQTtVQUFLRyxTQUFTLEVBQUMsVUFBVTtVQUFBRCxRQUFBLGdCQUN2QkYsb0VBQUE7WUFBTUcsU0FBUyxFQUFDLE9BQU87WUFBQUQsUUFBQSxFQUFDO1VBQUc7WUFBQUUsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQU0sQ0FBQyxlQUNsQ1Asb0VBQUE7WUFBTUcsU0FBUyxFQUFDLE1BQU07WUFBQUQsUUFBQSxFQUFDO1VBQUU7WUFBQUUsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQU0sQ0FBQztRQUFBO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUM3QixDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0g7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNPLENBQUM7QUFFcEIsQ0FBQztBQUFDQyxFQUFBLEdBcEJJVCxJQUFJO0FBc0JWLE1BQU1FLGFBQWEsR0FBR1EseURBQU0sQ0FBQ0MsR0FBRztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0MsR0FBQSxHQXJHSVYsYUFBYTtBQXVHSkYsbUVBQUksRUFBQztBQUFBLElBQUFTLEVBQUEsRUFBQUcsR0FBQTtBQUFBQyxZQUFBLENBQUFKLEVBQUE7QUFBQUksWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25leGFyLjMyNTQ2YTBmZDRhNDk5MDFkYTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkV3JhcHBlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkFSIENhcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIEFSIEJ1c2luZXNzIENhcmQsIFdlZGRpbmcgQ2FyZCwgU3RpY2tlciBhbmQgVGhhbmtzIENhcmRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWUtbW9yZVwiPkJvb2sgTm93PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vbnRoXCI+bmV4PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+QVI8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5wYXJlbnQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogU2V0IGJhY2tncm91bmQgdG8gdHJhbnNwYXJlbnQgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjMpIDBweCAzMHB4IDMwcHggLTEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMC41LCAxLCAwLCAzMGRlZyk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNzMyKTsgLyogQ2hhbmdlIGJhY2tncm91bmQgdG8gcmVkICovXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHBhZGRpbmc6IDYwcHggMjVweCAyNXB4IDI1cHg7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IC5jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDUwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IC5jYXJkLXRpdGxlOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IC5jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMzBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ib3ggLmNhcmQtY29udGVudDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA2MHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWJveCAuc2VlLW1vcmUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiKDcsIDE4NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMjBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ib3ggLnNlZS1tb3JlOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3LCAxODUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgODBweCk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDE3cHggMTBweCAtMTBweDtcclxuICB9XHJcblxyXG4gIC5kYXRlLWJveCBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtYm94IC5tb250aCB7XHJcbiAgICBjb2xvcjogcmdiKDQsIDE5MywgMjUwKTtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5kYXRlLWJveCAuZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHJnYig0LCAxOTMsIDI1MCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
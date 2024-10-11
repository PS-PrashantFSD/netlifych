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
    background: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.red;
}};; /* Change background to red */
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
    color: black; /* Change color to black */
    font-size: 9px;
    font-weight: 700;
  }

  .date-box .date {
    font-size: 20px;
    font-weight: 900;
    color: black; /* Change color to black */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmRlLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiX2pzeERFViIsIlN0eWxlZFdyYXBwZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwic3R5bGVkIiwiZGl2IiwiX3JlZiIsInRoZW1lIiwiY29sb3JzIiwicmVkIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VDLG9FQUFBLENBQUNDLGFBQWE7SUFBQUMsUUFBQSxlQUNaRixvRUFBQTtNQUFLRyxTQUFTLEVBQUMsUUFBUTtNQUFBRCxRQUFBLGVBQ3JCRixvRUFBQTtRQUFLRyxTQUFTLEVBQUMsTUFBTTtRQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7VUFBS0csU0FBUyxFQUFDLGFBQWE7VUFBQUQsUUFBQSxnQkFDMUJGLG9FQUFBO1lBQU1HLFNBQVMsRUFBQyxZQUFZO1lBQUFELFFBQUEsRUFBQztVQUFPO1lBQUFFLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFNLENBQUMsZUFDM0NQLG9FQUFBO1lBQUdHLFNBQVMsRUFBQyxjQUFjO1lBQUFELFFBQUEsRUFBQztVQUU1QjtZQUFBRSxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRyxDQUFDLGVBQ0pQLG9FQUFBO1lBQU1HLFNBQVMsRUFBQyxVQUFVO1lBQUFELFFBQUEsRUFBQztVQUFRO1lBQUFFLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFNLENBQUM7UUFBQTtVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDdkMsQ0FBQyxlQUNOUCxvRUFBQTtVQUFLRyxTQUFTLEVBQUMsVUFBVTtVQUFBRCxRQUFBLGdCQUN2QkYsb0VBQUE7WUFBTUcsU0FBUyxFQUFDLE9BQU87WUFBQUQsUUFBQSxFQUFDO1VBQUc7WUFBQUUsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQU0sQ0FBQyxlQUNsQ1Asb0VBQUE7WUFBTUcsU0FBUyxFQUFDLE1BQU07WUFBQUQsUUFBQSxFQUFDO1VBQUU7WUFBQUUsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQU0sQ0FBQztRQUFBO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUM3QixDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0g7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNPLENBQUM7QUFFcEIsQ0FBQztBQUFDQyxFQUFBLEdBcEJJVCxJQUFJO0FBc0JWLE1BQU1FLGFBQWEsR0FBR1EseURBQU0sQ0FBQ0MsR0FBRztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0JDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FyR0lkLGFBQWE7QUF1R0pGLG1FQUFJLEVBQUM7QUFBQSxJQUFBUyxFQUFBLEVBQUFPLEdBQUE7QUFBQUMsWUFBQSxDQUFBUixFQUFBO0FBQUFRLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXhhci5iM2MxMzM0NDNjZWMxYjUxYzg5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5BUiBDYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICBBUiBCdXNpbmVzcyBDYXJkLCBXZWRkaW5nIENhcmQsIFN0aWNrZXIgYW5kIFRoYW5rcyBDYXJkXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VlLW1vcmVcIj5Cb29rIE5vdzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWJveFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb250aFwiPm5leDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPkFSPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAucGFyZW50IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIFNldCBiYWNrZ3JvdW5kIHRvIHRyYW5zcGFyZW50ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4zKSAwcHggMzBweCAzMHB4IC0xMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAuNSwgMSwgMCwgMzBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07OyAvKiBDaGFuZ2UgYmFja2dyb3VuZCB0byByZWQgKi9cclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgcGFkZGluZzogNjBweCAyNXB4IDI1cHggMjVweDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ib3ggLmNhcmQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgNTBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ib3ggLmNhcmQtdGl0bGU6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgNjBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ib3ggLmNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAzMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWJveCAuY2FyZC1jb250ZW50OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IC5zZWUtbW9yZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiByZ2IoNywgMTg1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAyMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWJveCAuc2VlLW1vcmU6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgNjBweCk7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcsIDE4NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA4MHB4KTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggMTdweCAxMHB4IC0xMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtYm94IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS1ib3ggLm1vbnRoIHtcclxuICAgIGNvbG9yOiBibGFjazsgLyogQ2hhbmdlIGNvbG9yIHRvIGJsYWNrICovXHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS1ib3ggLmRhdGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiBibGFjazsgLyogQ2hhbmdlIGNvbG9yIHRvIGJsYWNrICovXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
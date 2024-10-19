webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Misc/Card.jsx":
/*!**********************************!*\
  !*** ./components/Misc/Card.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Card.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card__image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card__content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "title",
          children: "Title card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit vitae orci quis dignissim."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
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
  .card {
  width: 300px;
  height: 350px;
  background: #ffd166;
  color: #073b4c;
  font-weight: 600;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
  transition: all .5s ease;
}

.card::before {
  content: "32,99$";
  position: absolute;
  width: 75px;
  height: 75px;
  top: 35%;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ef476f;
  color: aliceblue;
  font-weight: 800;
  transition: all .5s ease;
}

.card__image {
  width: initial;
  height: 150px;
  background: rgb(6,214,160);
  background: linear-gradient(163deg, #06d6a0 18%, rgba(17,138,178,1) 79%);
  transition: all .5s ease;
}

.title {
  font-weight: 800;
  font-size: 1.4em;
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 10px;
}

.card:hover {
  border-top-left-radius: 35px;
  box-shadow: 5px 5px 0px 0px #06d6a0, 10px 10px 0px 0px #118ab2, 15px 15px 0px 0px #06d6a0, 5px 5px 15px 5px rgba(0,0,0,0);
}

.card:hover .card__image {
  border-top-left-radius: 25px;
}

.card:hover::before {
  transform: scale(1.3) rotate(-30deg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmQiLCJfanN4REVWIiwiU3R5bGVkV3JhcHBlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCJzdHlsZWQiLCJkaXYiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFBQTtBQUV2QyxNQUFNQSxJQUFJLEdBQUdBLENBQUEsS0FBTTtFQUNqQixvQkFDRUMsb0VBQUEsQ0FBQ0MsYUFBYTtJQUFBQyxRQUFBLGVBQ1pGLG9FQUFBO01BQUtHLFNBQVMsRUFBQyxNQUFNO01BQUFELFFBQUEsZ0JBQ25CRixvRUFBQTtRQUFLRyxTQUFTLEVBQUM7TUFBYTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBRSxDQUFDLGVBQy9CUCxvRUFBQTtRQUFLRyxTQUFTLEVBQUMsZUFBZTtRQUFBRCxRQUFBLGdCQUM1QkYsb0VBQUE7VUFBTUcsU0FBUyxFQUFDLE9BQU87VUFBQUQsUUFBQSxFQUFDO1FBQVU7VUFBQUUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQU0sQ0FBQyxlQUN6Q1Asb0VBQUE7VUFBQUUsUUFBQSxFQUFHO1FBR0g7VUFBQUUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUcsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNELENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNPLENBQUM7QUFFcEIsQ0FBQztBQUFDQyxFQUFBLEdBZklULElBQUk7QUFpQlYsTUFBTUUsYUFBYSxHQUFHUSx5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBakVJVixhQUFhO0FBbUVKRixtRUFBSSxFQUFDO0FBQUEsSUFBQVMsRUFBQSxFQUFBRyxHQUFBO0FBQUFDLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuMDQyZTVmYmZiZjVkZDkxMGRjMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXcmFwcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VGl0bGUgY2FyZDwvc3Bhbj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtXHJcbiAgICAgICAgICAgIGJsYW5kaXQgdml0YWUgb3JjaSBxdWlzIGRpZ25pc3NpbS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZkMTY2O1xyXG4gIGNvbG9yOiAjMDczYjRjO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxufVxyXG5cclxuLmNhcmQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIzMiw5OSRcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIHRvcDogMzUlO1xyXG4gIHJpZ2h0OiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NzZmO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkX19pbWFnZSB7XHJcbiAgd2lkdGg6IGluaXRpYWw7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNiwyMTQsMTYwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjMDZkNmEwIDE4JSwgcmdiYSgxNywxMzgsMTc4LDEpIDc5JSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxufVxyXG5cclxuLmNhcmRfX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweDtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggIzA2ZDZhMCwgMTBweCAxMHB4IDBweCAwcHggIzExOGFiMiwgMTVweCAxNXB4IDBweCAwcHggIzA2ZDZhMCwgNXB4IDVweCAxNXB4IDVweCByZ2JhKDAsMCwwLDApO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuY2FyZF9faW1hZ2Uge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoLTMwZGVnKTtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/nexar",{

/***/ "./components/Misc/Cards.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Cards.jsx ***!
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Cards.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-int",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "hello",
          children: [". . .", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "hidden",
            children: "nexAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "camera",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "int"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "speaker"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
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
  width: 210px;
  height: 400px;
  background: black;
  border-radius: 35px;
  border: 2px solid rgb(40, 40, 40);
  padding: 7px;
  position: relative;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.486);
}

.card-int {
  background-image: linear-gradient(to right bottom, #ff0000, #ff0045, #ff0078, #ea00aa, #b81cd7, #8a3ad6, #5746cf, #004ac2, #003d94, #002e66, #001d3a, #020812);
  background-size: 200% 200%;
  background-position: 0% 0%;
  height: 100%;
  border-radius: 25px;
  transition: all 0.6s ease-out;
  overflow: hidden;
}

.card:hover .card-int {
  background-position: 100% 100%;
}

.top {
  position: absolute;
  top: 0px;
  right: 50%;
  transform: translate(50%, 0%);
  width: 35%;
  height: 18px;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.speaker {
  position: absolute;
  top: 2px;
  right: 50%;
  transform: translate(50%, 0%);
  width: 40%;
  height: 2px;
  border-radius: 2px;
  background-color: rgb(20, 20, 20);
}

.camera {
  position: absolute;
  top: 6px;
  right: 84%;
  transform: translate(50%, 0%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.048);
}

.int {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: rgba(0, 0, 255, 0.212);
}

.btn1, .btn2, .btn3, .btn4 {
  position: absolute;
  width: 2px;
}

.btn1, .btn2, .btn3 {
  height: 45px;
  top: 30%;
  right: -4px;
  background-image: linear-gradient(to right, #111111, #222222, #333333, #464646, #595959);
}

.btn2, .btn3 {
  transform: scale(-1);
  left: -4px;
}

.btn2, .btn3 {
  transform: scale(-1);
  height: 30px;
}

.btn2 {
  top: 26%
}

.btn3 {
  top: 36%
}

.hello {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 35px;
  height: 100%;
  transition: 0.5s ease-in-out;
}

.hidden {
  display: block;
  opacity: 0;
  transition: all 0.3s ease-in;
}

.card:hover .hidden {
  opacity: 1;
}

.card:hover .hello {
  transform: translateY(-20px);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmRzLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiX2pzeERFViIsIlN0eWxlZFdyYXBwZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwic3R5bGVkIiwiZGl2IiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VDLG9FQUFBLENBQUNDLGFBQWE7SUFBQUMsUUFBQSxlQUNaRixvRUFBQTtNQUFLRyxTQUFTLEVBQUMsTUFBTTtNQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7UUFBS0csU0FBUyxFQUFDO01BQU07UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlAsb0VBQUE7UUFBS0csU0FBUyxFQUFDO01BQU07UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlAsb0VBQUE7UUFBS0csU0FBUyxFQUFDO01BQU07UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlAsb0VBQUE7UUFBS0csU0FBUyxFQUFDO01BQU07UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlAsb0VBQUE7UUFBS0csU0FBUyxFQUFDLFVBQVU7UUFBQUQsUUFBQSxlQUN2QkYsb0VBQUE7VUFBS0csU0FBUyxFQUFDLE9BQU87VUFBQUQsUUFBQSxHQUFDLE9BRXJCLGVBQUFGLG9FQUFBO1lBQU1HLFNBQVMsRUFBQyxRQUFRO1lBQUFELFFBQUEsRUFBQztVQUFLO1lBQUFFLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFNLENBQUM7UUFBQTtVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDbEM7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSCxDQUFDLGVBQ05QLG9FQUFBO1FBQUtHLFNBQVMsRUFBQyxLQUFLO1FBQUFELFFBQUEsZ0JBQ2xCRixvRUFBQTtVQUFLRyxTQUFTLEVBQUMsUUFBUTtVQUFBRCxRQUFBLGVBQ3JCRixvRUFBQTtZQUFLRyxTQUFTLEVBQUM7VUFBSztZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRTtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNwQixDQUFDLGVBQ05QLG9FQUFBO1VBQUtHLFNBQVMsRUFBQztRQUFTO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDeEIsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNIO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ08sQ0FBQztBQUVwQixDQUFDO0FBQUNDLEVBQUEsR0F2QklULElBQUk7QUF5QlYsTUFBTUUsYUFBYSxHQUFHUSx5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBbklJVixhQUFhO0FBcUlKRixtRUFBSSxFQUFDO0FBQUEsSUFBQVMsRUFBQSxFQUFBRyxHQUFBO0FBQUFDLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV4YXIuMmMwN2VmMDI4M2NiMjhlZjk0MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXcmFwcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bjFcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuMlwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4zXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bjRcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG9cIj5cclxuICAgICAgICAgICAgLiAuIC5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+bmV4QVI8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1lcmFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcmQge1xyXG4gIHdpZHRoOiAyMTBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDQwLCA0MCwgNDApO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40ODYpO1xyXG59XHJcblxyXG4uY2FyZC1pbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmZjAwMDAsICNmZjAwNDUsICNmZjAwNzgsICNlYTAwYWEsICNiODFjZDcsICM4YTNhZDYsICM1NzQ2Y2YsICMwMDRhYzIsICMwMDNkOTQsICMwMDJlNjYsICMwMDFkM2EsICMwMjA4MTIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2Utb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkLWludCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4udG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDAlKTtcclxuICB3aWR0aDogMzUlO1xyXG4gIGhlaWdodDogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc3BlYWtlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwJSk7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG59XHJcblxyXG4uY2FtZXJhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2cHg7XHJcbiAgcmlnaHQ6IDg0JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDAlKTtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQ4KTtcclxufVxyXG5cclxuLmludCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yMTIpO1xyXG59XHJcblxyXG4uYnRuMSwgLmJ0bjIsIC5idG4zLCAuYnRuNCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi5idG4xLCAuYnRuMiwgLmJ0bjMge1xyXG4gIGhlaWdodDogNDVweDtcclxuICB0b3A6IDMwJTtcclxuICByaWdodDogLTRweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMTExMTEsICMyMjIyMjIsICMzMzMzMzMsICM0NjQ2NDYsICM1OTU5NTkpO1xyXG59XHJcblxyXG4uYnRuMiwgLmJ0bjMge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEpO1xyXG4gIGxlZnQ6IC00cHg7XHJcbn1cclxuXHJcbi5idG4yLCAuYnRuMyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSk7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYnRuMiB7XHJcbiAgdG9wOiAyNiVcclxufVxyXG5cclxuLmJ0bjMge1xyXG4gIHRvcDogMzYlXHJcbn1cclxuXHJcbi5oZWxsbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5oZWxsbyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxufVxyXG5cclxuXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
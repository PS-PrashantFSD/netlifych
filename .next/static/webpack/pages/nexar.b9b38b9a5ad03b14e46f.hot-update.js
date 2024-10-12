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
          children: [".  . .", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
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
    transition: transform 0.3s ease; /* Smooth transform */
    
    @media (max-width: 480px) {
      animation: bounce 0.6s ease-in-out; /* Mobile animation */
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
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
    top: 26%;
  }

  .btn3 {
    top: 36%;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmRzLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiX2pzeERFViIsIlN0eWxlZFdyYXBwZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwic3R5bGVkIiwiZGl2IiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VDLG9FQUFBLENBQUNDLGFBQWE7SUFBQUMsUUFBQSxlQUNaRixvRUFBQTtNQUFLRyxTQUFTLEVBQUMsTUFBTTtNQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7UUFBS0csU0FBUyxFQUFDO01BQU07UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlAsb0VBQUE7UUFBS0csU0FBUyxFQUFDO01BQU07UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlAsb0VBQUE7UUFBS0csU0FBUyxFQUFDO01BQU07UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlAsb0VBQUE7UUFBS0csU0FBUyxFQUFDO01BQU07UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlAsb0VBQUE7UUFBS0csU0FBUyxFQUFDLFVBQVU7UUFBQUQsUUFBQSxlQUN2QkYsb0VBQUE7VUFBS0csU0FBUyxFQUFDLE9BQU87VUFBQUQsUUFBQSxHQUFDLFFBRXJCLGVBQUFGLG9FQUFBO1lBQU1HLFNBQVMsRUFBQyxRQUFRO1lBQUFELFFBQUEsRUFBQztVQUFLO1lBQUFFLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFNLENBQUM7UUFBQTtVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDbEM7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSCxDQUFDLGVBQ05QLG9FQUFBO1FBQUtHLFNBQVMsRUFBQyxLQUFLO1FBQUFELFFBQUEsZ0JBQ2xCRixvRUFBQTtVQUFLRyxTQUFTLEVBQUMsUUFBUTtVQUFBRCxRQUFBLGVBQ3JCRixvRUFBQTtZQUFLRyxTQUFTLEVBQUM7VUFBSztZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRTtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNwQixDQUFDLGVBQ05QLG9FQUFBO1VBQUtHLFNBQVMsRUFBQztRQUFTO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFFLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDeEIsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNIO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ08sQ0FBQztBQUVwQixDQUFDO0FBQUNDLEVBQUEsR0F2QklULElBQUk7QUF5QlYsTUFBTUUsYUFBYSxHQUFHUSx5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0MsR0FBQSxHQWpKSVYsYUFBYTtBQW1KSkYsbUVBQUksRUFBQztBQUFBLElBQUFTLEVBQUEsRUFBQUcsR0FBQTtBQUFBQyxZQUFBLENBQUFKLEVBQUE7QUFBQUksWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25leGFyLmI5YjM4YjlhNWFkMDNiMTRlNDZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkV3JhcHBlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4xXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bjJcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuM1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG40XCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvXCI+XHJcbiAgICAgICAgICAgIC4gIC4gLlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5uZXhBUjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbWVyYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlclwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQwLCA0MCwgNDApO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40ODYpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zZm9ybSAqL1xyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMC42cyBlYXNlLWluLW91dDsgLyogTW9iaWxlIGFuaW1hdGlvbiAqL1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtaW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmZjAwMDAsICNmZjAwNDUsICNmZjAwNzgsICNlYTAwYWEsICNiODFjZDcsICM4YTNhZDYsICM1NzQ2Y2YsICMwMDRhYzIsICMwMDNkOTQsICMwMDJlNjYsICMwMDFkM2EsICMwMjA4MTIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLW91dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuY2FyZDpob3ZlciAuY2FyZC1pbnQge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDAlKTtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5zcGVha2VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCUpO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG4gIH1cclxuXHJcbiAgLmNhbWVyYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIHJpZ2h0OiA4NCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDAlKTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNDgpO1xyXG4gIH1cclxuXHJcbiAgLmludCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMjEyKTtcclxuICB9XHJcblxyXG4gIC5idG4xLCAuYnRuMiwgLmJ0bjMsIC5idG40IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgfVxyXG5cclxuICAuYnRuMSwgLmJ0bjIsIC5idG4zIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMTExMTEsICMyMjIyMjIsICMzMzMzMzMsICM0NjQ2NDYsICM1OTU5NTkpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bjIsIC5idG4zIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEpO1xyXG4gICAgbGVmdDogLTRweDtcclxuICB9XHJcblxyXG4gIC5idG4yLCAuYnRuMyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xKTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIC5idG4yIHtcclxuICAgIHRvcDogMjYlO1xyXG4gIH1cclxuXHJcbiAgLmJ0bjMge1xyXG4gICAgdG9wOiAzNiU7XHJcbiAgfVxyXG5cclxuICAuaGVsbG8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAuY2FyZDpob3ZlciAuaGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpob3ZlciAuaGVsbG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
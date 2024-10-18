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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card__body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "card__icon",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
            height: "32",
            width: "32",
            stroke: "currentColor",
            strokeWidth: 1.5,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
              d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
              strokeLinejoin: "round",
              strokeLinecap: "round"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "card__title",
          children: "Abstract Design"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "card__paragraph",
          children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis eaque dolore repellat numquam. Dolores."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card__ribbon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          className: "card__ribbon-label",
          children: "01"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
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
  width: min(300px, 100%);
  margin: auto;
  background-color: #f4f5f2;
  text-align: center;
  border-top-left-radius: 4rem;
  border: 2px solid #fff;
  position: relative;
}

.card::before {
  content: "";
  position: absolute;
  height: 30px;
  width: 120px;
  background-color: #393e7f;
  top: 32px;
  right: -2.5px;
  -webkit-clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
}

.card__body {
  padding: 2rem 1.5rem;
  max-width: 25ch;
  margin: auto;
}

.card__title {
  font-weight: 800;
  color: #121513;
  font-size: 1.25rem;
  margin-block: 1.5rem 0.75rem;
}

.card__paragraph {
  color: #303830;
  font-size: 0.875rem;
}

.card__ribbon {
  margin-top: 1.5rem;
  display: grid;
  place-items: center;
  height: 50px;
  background-color: #393e7f;
  position: relative;
  width: 110%;
  left: -5%;
  top: 10px;
  position: relative;
  border-radius: 0 0 2rem 2rem;
}

.card__ribbon::after,
.card__ribbon::before {
  content: "";
  position: absolute;
  width: 20px;
  aspect-ratio: 1/1;
  bottom: 100%;
  z-index: -2;
  background-color: #191c39;
}

.card__ribbon::before {
  left: 0;
  transform-origin: left bottom;
  transform: rotate(45deg);
}

.card__ribbon::after {
  right: 0;
  transform-origin: right bottom;
  transform: rotate(-45deg);
}

.card__ribbon-label {
  display: block;
  width: 84px;
  aspect-ratio: 1/1;
  background-color: #fff;
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  border: 8px solid #393e7f;
  display: grid;
  place-items: center;
  font-weight: 900;
  line-height: 1;
  font-size: 1.5rem;
}

.card__ribbon-label::before,
.card__ribbon-label::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 50%;
}

.card__ribbon-label::before {
  right: calc(100% + 4px);
  border-bottom-right-radius: 20px;
  box-shadow: 5px 5px 0 #393e7f;
}

.card__ribbon-label::after {
  left: calc(100% + 4px);
  border-bottom-left-radius: 20px;
  box-shadow: -5px 5px 0 #393e7f;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL1NjYXJkLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiX2pzeERFViIsIlN0eWxlZFdyYXBwZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImhlaWdodCIsIndpZHRoIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwiZCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlTGluZWNhcCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwic3R5bGVkIiwiZGl2IiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VDLG9FQUFBLENBQUNDLGFBQWE7SUFBQUMsUUFBQSxlQUNaRixvRUFBQTtNQUFLRyxTQUFTLEVBQUMsTUFBTTtNQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7UUFBS0csU0FBUyxFQUFDLFlBQVk7UUFBQUQsUUFBQSxnQkFDekJGLG9FQUFBO1VBQUtHLFNBQVMsRUFBQyxZQUFZO1VBQUFELFFBQUEsZUFDekJGLG9FQUFBO1lBQ0VJLE1BQU0sRUFBQyxJQUFJO1lBQ1hDLEtBQUssRUFBQyxJQUFJO1lBQ1ZDLE1BQU0sRUFBQyxjQUFjO1lBQ3JCQyxXQUFXLEVBQUUsR0FBSTtZQUNqQkMsT0FBTyxFQUFDLFdBQVc7WUFDbkJDLElBQUksRUFBQyxNQUFNO1lBQ1hDLEtBQUssRUFBQyw0QkFBNEI7WUFBQVIsUUFBQSxlQUVsQ0Ysb0VBQUE7Y0FDRVcsQ0FBQyxFQUFDLGlRQUFpUTtjQUNuUUMsY0FBYyxFQUFDLE9BQU87Y0FDdEJDLGFBQWEsRUFBQztZQUFPO2NBQUFDLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxZQUN0QjtVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNDO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ0gsQ0FBQyxlQUVOakIsb0VBQUE7VUFBR0csU0FBUyxFQUFDLGFBQWE7VUFBQUQsUUFBQSxFQUFDO1FBQWU7VUFBQVksUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUcsQ0FBQyxlQUM5Q2pCLG9FQUFBO1VBQUdHLFNBQVMsRUFBQyxpQkFBaUI7VUFBQUQsUUFBQSxFQUFDO1FBRy9CO1VBQUFZLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFHLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDRCxDQUFDLGVBRU5qQixvRUFBQTtRQUFLRyxTQUFTLEVBQUMsY0FBYztRQUFBRCxRQUFBLGVBQzNCRixvRUFBQTtVQUFPRyxTQUFTLEVBQUMsb0JBQW9CO1VBQUFELFFBQUEsRUFBQztRQUFFO1VBQUFZLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFPO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQzdDLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNPLENBQUM7QUFFcEIsQ0FBQztBQUFDQyxFQUFBLEdBcENJbkIsSUFBSTtBQXNDVixNQUFNRSxhQUFhLEdBQUdrQix5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0MsR0FBQSxHQW5ISXBCLGFBQWE7QUFxSEpGLG1FQUFJLEVBQUM7QUFBQSxJQUFBbUIsRUFBQSxFQUFBRyxHQUFBO0FBQUFDLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuOGMyYWVlZTc4MWE3NWE3MjI5ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXcmFwcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faWNvblwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzJcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk05IDE3LjI1djEuMDA3YTMgMyAwIDAxLS44NzkgMi4xMjJMNy41IDIxaDlsLS42MjEtLjYyMUEzIDMgMCAwMTE1IDE4LjI1N1YxNy4yNW02LTEyVjE1YTIuMjUgMi4yNSAwIDAxLTIuMjUgMi4yNUg1LjI1QTIuMjUgMi4yNSAwIDAxMyAxNVY1LjI1bTE4IDBBMi4yNSAyLjI1IDAgMDAxOC43NSAzSDUuMjVBMi4yNSAyLjI1IDAgMDAzIDUuMjVtMTggMFYxMmEyLjI1IDIuMjUgMCAwMS0yLjI1IDIuMjVINS4yNUEyLjI1IDIuMjUgMCAwMTMgMTJWNS4yNVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkX190aXRsZVwiPkFic3RyYWN0IERlc2lnbjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRfX3BhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gRHVjaW11c1xyXG4gICAgICAgICAgICBwZXJmZXJlbmRpcyBlYXF1ZSBkb2xvcmUgcmVwZWxsYXQgbnVtcXVhbS4gRG9sb3Jlcy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19yaWJib25cIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjYXJkX19yaWJib24tbGFiZWxcIj4wMTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAuY2FyZCB7XHJcbiAgd2lkdGg6IG1pbigzMDBweCwgMTAwJSk7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U3ZjtcclxuICB0b3A6IDMycHg7XHJcbiAgcmlnaHQ6IC0yLjVweDtcclxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigxMCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxufVxyXG5cclxuLmNhcmRfX2JvZHkge1xyXG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xyXG4gIG1heC13aWR0aDogMjVjaDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkX190aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzEyMTUxMztcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbWFyZ2luLWJsb2NrOiAxLjVyZW0gMC43NXJlbTtcclxufVxyXG5cclxuLmNhcmRfX3BhcmFncmFwaCB7XHJcbiAgY29sb3I6ICMzMDM4MzA7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmNhcmRfX3JpYmJvbiB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U3ZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDExMCU7XHJcbiAgbGVmdDogLTUlO1xyXG4gIHRvcDogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDJyZW0gMnJlbTtcclxufVxyXG5cclxuLmNhcmRfX3JpYmJvbjo6YWZ0ZXIsXHJcbi5jYXJkX19yaWJib246OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIHotaW5kZXg6IC0yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTFjMzk7XHJcbn1cclxuXHJcbi5jYXJkX19yaWJib246OmJlZm9yZSB7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5jYXJkX19yaWJib246OmFmdGVyIHtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmNhcmRfX3JpYmJvbi1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDg0cHg7XHJcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDhweCBzb2xpZCAjMzkzZTdmO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZF9fcmliYm9uLWxhYmVsOjpiZWZvcmUsXHJcbi5jYXJkX19yaWJib24tbGFiZWw6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYm90dG9tOiA1MCU7XHJcbn1cclxuXHJcbi5jYXJkX19yaWJib24tbGFiZWw6OmJlZm9yZSB7XHJcbiAgcmlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwICMzOTNlN2Y7XHJcbn1cclxuXHJcbi5jYXJkX19yaWJib24tbGFiZWw6OmFmdGVyIHtcclxuICBsZWZ0OiBjYWxjKDEwMCUgKyA0cHgpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogLTVweCA1cHggMCAjMzkzZTdmO1xyXG59XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
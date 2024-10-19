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
        "data-position": "top",
        className: "carousel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "carousel__text",
          children: "&bullet; card component &bullet; card component &bullet; card component &bullet; card component &bullet; card component &bullet; card component"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "image",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
            d: "M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "title",
        children: "Highlight Curation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "paragraph",
        children: "Works autonomously through artificial intelligent and hundred of micro-services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        "data-direction": "right",
        "data-position": "bottom",
        className: "carousel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "carousel__text",
          children: "&bullet; card component &bullet; card component &bullet; card component &bullet; card component &bullet; card component &bullet; card component"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
  --lime-500: #bdd910;
  --violet-700: #8a07b8;

  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  padding: 1rem;
  width: 26rem;
  height: auto;
  min-height: 16rem;
  background-color: var(--lime-500);

  border-radius: 0.5rem;
}

.card::before {
  content: "";
  position: absolute;
  top: 7rem;
  right: 2rem;

  width: 1.25rem;
  aspect-ratio: 1 / 1;
  background-color: var(--violet-700);

  border-radius: 9999px;
}

.card::after {
  content: "";
  position: absolute;
  top: 8.75rem;
  right: -0.5rem;

  width: 3rem;
  aspect-ratio: 1 / 1;
  background-color: var(--violet-700);

  border-radius: 9999px;
}

.card .carousel {
  position: absolute;
  left: 0;

  animation: carousel 10s linear var(--carousel_direction, normal) infinite;
}

.card .carousel[data-direction="right"] {
  --carousel_direction: reverse;
}
.card .carousel[data-position="top"] {
  top: 0.75rem;
}
.card .carousel[data-position="bottom"] {
  bottom: 0.75rem;
}

.card .carousel .carousel__text {
  font-size: 0.75rem;
  color: black;
  text-wrap: nowrap;
}

@keyframes carousel {
  to {
    transform: translate(-50%);
  }
}

.card .image {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem;
  margin-bottom: 0.5rem;
  width: fit-content;
  aspect-ratio: 1 / 1;
  background-color: black;

  border-radius: 0.25rem;
}

.card .image svg {
  width: 1.5rem;
  fill: white;
}

.card .title {
  position: relative;
  z-index: 10;

  font-size: 1rem;
  color: black;
  font-weight: bold;
}

.card .paragraph {
  position: relative;
  z-index: 10;

  padding-right: 0.25rem;

  font-size: 0.75rem;
  color: black;
}

@media (max-width: 600px) {
  .card {
    width: 100%; /* Full width on mobile */
    padding: 0.5rem; /* Adjust padding */
  }

  .card .carousel .carousel__text {
    font-size: 0.65rem; /* Smaller text size on mobile */
  }

  .card .title {
    font-size: 0.9rem; /* Smaller title size on mobile */
  }

  .card .paragraph {
    font-size: 0.65rem; /* Smaller paragraph size on mobile */
  }
  
  .card .image {
    width: 80%; /* Adjust image width */
  }

  .card::before {
    top: 5rem; /* Adjust positioning of pseudo-elements */
    right: 1rem;
  }

  .card::after {
    top: 6.5rem; /* Adjust positioning of pseudo-elements */
    right: -0.25rem;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmQiLCJfanN4REVWIiwiU3R5bGVkV3JhcHBlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidmlld0JveCIsInhtbG5zIiwiZCIsIl9jIiwic3R5bGVkIiwiZGl2IiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VDLG9FQUFBLENBQUNDLGFBQWE7SUFBQUMsUUFBQSxlQUNaRixvRUFBQTtNQUFLRyxTQUFTLEVBQUMsTUFBTTtNQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7UUFBSyxpQkFBYyxLQUFLO1FBQUNHLFNBQVMsRUFBQyxVQUFVO1FBQUFELFFBQUEsZUFDM0NGLG9FQUFBO1VBQU1HLFNBQVMsRUFBQyxnQkFBZ0I7VUFBQUQsUUFBQSxFQUFDO1FBSWpDO1VBQUFFLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFNO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0osQ0FBQyxlQUNOUCxvRUFBQTtRQUFLRyxTQUFTLEVBQUMsT0FBTztRQUFBRCxRQUFBLGVBQ3BCRixvRUFBQTtVQUFLUSxPQUFPLEVBQUMsV0FBVztVQUFDQyxLQUFLLEVBQUMsNEJBQTRCO1VBQUFQLFFBQUEsZUFDekRGLG9FQUFBO1lBQU1VLENBQUMsRUFBQztVQUF5VztZQUFBTixRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRTtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNqWDtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNILENBQUMsZUFDTlAsb0VBQUE7UUFBTUcsU0FBUyxFQUFDLE9BQU87UUFBQUQsUUFBQSxFQUFDO01BQWtCO1FBQUFFLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFNLENBQUMsZUFDakRQLG9FQUFBO1FBQUdHLFNBQVMsRUFBQyxXQUFXO1FBQUFELFFBQUEsRUFBQztNQUd6QjtRQUFBRSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBRyxDQUFDLGVBQ0pQLG9FQUFBO1FBQUssa0JBQWUsT0FBTztRQUFDLGlCQUFjLFFBQVE7UUFBQ0csU0FBUyxFQUFDLFVBQVU7UUFBQUQsUUFBQSxlQUNyRUYsb0VBQUE7VUFBTUcsU0FBUyxFQUFDLGdCQUFnQjtVQUFBRCxRQUFBLEVBQUM7UUFJakM7VUFBQUUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQU07TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSixDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0g7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTyxDQUFDO0FBRXBCLENBQUM7QUFBQ0ksRUFBQSxHQS9CSVosSUFBSTtBQWlDVixNQUFNRSxhQUFhLEdBQUdXLHlEQUFNLENBQUNDLEdBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBcEpJYixhQUFhO0FBc0pKRixtRUFBSSxFQUFDO0FBQUEsSUFBQVksRUFBQSxFQUFBRyxHQUFBO0FBQUFDLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuNWUwMTdjYzE4YjdmYWUxZWJlNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXcmFwcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGRhdGEtcG9zaXRpb249XCJ0b3BcIiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWxfX3RleHRcIj5cclxuICAgICAgICAgICAgJmJ1bGxldDsgY2FyZCBjb21wb25lbnQgJmJ1bGxldDsgY2FyZCBjb21wb25lbnQgJmJ1bGxldDsgY2FyZFxyXG4gICAgICAgICAgICBjb21wb25lbnQgJmJ1bGxldDsgY2FyZCBjb21wb25lbnQgJmJ1bGxldDsgY2FyZCBjb21wb25lbnQgJmJ1bGxldDtcclxuICAgICAgICAgICAgY2FyZCBjb21wb25lbnRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgNUg0VjE5TDEzLjI5MjMgOS43MDY0OUMxMy42ODI4IDkuMzE1OTUgMTQuMzE1OSA5LjMxNTkxIDE0LjcwNjUgOS43MDY0MUwyMCAxNS4wMTA0VjVaTTIgMy45OTM0QzIgMy40NDQ3NiAyLjQ1NTMxIDMgMi45OTE4IDNIMjEuMDA4MkMyMS41NTYgMyAyMiAzLjQ0NDk1IDIyIDMuOTkzNFYyMC4wMDY2QzIyIDIwLjU1NTIgMjEuNTQ0NyAyMSAyMS4wMDgyIDIxSDIuOTkxOEMyLjQ0NDA1IDIxIDIgMjAuNTU1MSAyIDIwLjAwNjZWMy45OTM0Wk04IDExQzYuODk1NDMgMTEgNiAxMC4xMDQ2IDYgOUM2IDcuODk1NDMgNi44OTU0MyA3IDggN0M5LjEwNDU3IDcgMTAgNy44OTU0MyAxMCA5QzEwIDEwLjEwNDYgOS4xMDQ1NyAxMSA4IDExWlwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkhpZ2hsaWdodCBDdXJhdGlvbjwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj5cclxuICAgICAgICAgIFdvcmtzIGF1dG9ub21vdXNseSB0aHJvdWdoIGFydGlmaWNpYWwgaW50ZWxsaWdlbnQgYW5kIGh1bmRyZWQgb2ZcclxuICAgICAgICAgIG1pY3JvLXNlcnZpY2VzXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgZGF0YS1kaXJlY3Rpb249XCJyaWdodFwiIGRhdGEtcG9zaXRpb249XCJib3R0b21cIiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWxfX3RleHRcIj5cclxuICAgICAgICAgICAgJmJ1bGxldDsgY2FyZCBjb21wb25lbnQgJmJ1bGxldDsgY2FyZCBjb21wb25lbnQgJmJ1bGxldDsgY2FyZFxyXG4gICAgICAgICAgICBjb21wb25lbnQgJmJ1bGxldDsgY2FyZCBjb21wb25lbnQgJmJ1bGxldDsgY2FyZCBjb21wb25lbnQgJmJ1bGxldDtcclxuICAgICAgICAgICAgY2FyZCBjb21wb25lbnRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5jYXJkIHtcclxuICAtLWxpbWUtNTAwOiAjYmRkOTEwO1xyXG4gIC0tdmlvbGV0LTcwMDogIzhhMDdiODtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuXHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogMjZyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDE2cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNTAwKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uY2FyZDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDdyZW07XHJcbiAgcmlnaHQ6IDJyZW07XHJcblxyXG4gIHdpZHRoOiAxLjI1cmVtO1xyXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlvbGV0LTcwMCk7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxufVxyXG5cclxuLmNhcmQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDguNzVyZW07XHJcbiAgcmlnaHQ6IC0wLjVyZW07XHJcblxyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlvbGV0LTcwMCk7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcm91c2VsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgYW5pbWF0aW9uOiBjYXJvdXNlbCAxMHMgbGluZWFyIHZhcigtLWNhcm91c2VsX2RpcmVjdGlvbiwgbm9ybWFsKSBpbmZpbml0ZTtcclxufVxyXG5cclxuLmNhcmQgLmNhcm91c2VsW2RhdGEtZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xyXG4gIC0tY2Fyb3VzZWxfZGlyZWN0aW9uOiByZXZlcnNlO1xyXG59XHJcbi5jYXJkIC5jYXJvdXNlbFtkYXRhLXBvc2l0aW9uPVwidG9wXCJdIHtcclxuICB0b3A6IDAuNzVyZW07XHJcbn1cclxuLmNhcmQgLmNhcm91c2VsW2RhdGEtcG9zaXRpb249XCJib3R0b21cIl0ge1xyXG4gIGJvdHRvbTogMC43NXJlbTtcclxufVxyXG5cclxuLmNhcmQgLmNhcm91c2VsIC5jYXJvdXNlbF9fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjYXJvdXNlbCB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCAuaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuaW1hZ2Ugc3ZnIHtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCAudGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhcmQgLnBhcmFncmFwaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5cclxuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xyXG5cclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBvbiBtb2JpbGUgKi9cclxuICAgIHBhZGRpbmc6IDAuNXJlbTsgLyogQWRqdXN0IHBhZGRpbmcgKi9cclxuICB9XHJcblxyXG4gIC5jYXJkIC5jYXJvdXNlbCAuY2Fyb3VzZWxfX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjY1cmVtOyAvKiBTbWFsbGVyIHRleHQgc2l6ZSBvbiBtb2JpbGUgKi9cclxuICB9XHJcblxyXG4gIC5jYXJkIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTsgLyogU21hbGxlciB0aXRsZSBzaXplIG9uIG1vYmlsZSAqL1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgLnBhcmFncmFwaCB7XHJcbiAgICBmb250LXNpemU6IDAuNjVyZW07IC8qIFNtYWxsZXIgcGFyYWdyYXBoIHNpemUgb24gbW9iaWxlICovXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogODAlOyAvKiBBZGp1c3QgaW1hZ2Ugd2lkdGggKi9cclxuICB9XHJcblxyXG4gIC5jYXJkOjpiZWZvcmUge1xyXG4gICAgdG9wOiA1cmVtOyAvKiBBZGp1c3QgcG9zaXRpb25pbmcgb2YgcHNldWRvLWVsZW1lbnRzICovXHJcbiAgICByaWdodDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkOjphZnRlciB7XHJcbiAgICB0b3A6IDYuNXJlbTsgLyogQWRqdXN0IHBvc2l0aW9uaW5nIG9mIHBzZXVkby1lbGVtZW50cyAqL1xyXG4gICAgcmlnaHQ6IC0wLjI1cmVtO1xyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
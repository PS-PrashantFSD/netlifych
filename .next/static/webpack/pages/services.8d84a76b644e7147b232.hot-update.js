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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmQiLCJfanN4REVWIiwiU3R5bGVkV3JhcHBlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidmlld0JveCIsInhtbG5zIiwiZCIsIl9jIiwic3R5bGVkIiwiZGl2IiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQUE7QUFFdkMsTUFBTUEsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VDLG9FQUFBLENBQUNDLGFBQWE7SUFBQUMsUUFBQSxlQUNaRixvRUFBQTtNQUFLRyxTQUFTLEVBQUMsTUFBTTtNQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7UUFBSyxpQkFBYyxLQUFLO1FBQUNHLFNBQVMsRUFBQyxVQUFVO1FBQUFELFFBQUEsZUFDM0NGLG9FQUFBO1VBQU1HLFNBQVMsRUFBQyxnQkFBZ0I7VUFBQUQsUUFBQSxFQUFDO1FBSWpDO1VBQUFFLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFNO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0osQ0FBQyxlQUNOUCxvRUFBQTtRQUFLRyxTQUFTLEVBQUMsT0FBTztRQUFBRCxRQUFBLGVBQ3BCRixvRUFBQTtVQUFLUSxPQUFPLEVBQUMsV0FBVztVQUFDQyxLQUFLLEVBQUMsNEJBQTRCO1VBQUFQLFFBQUEsZUFDekRGLG9FQUFBO1lBQU1VLENBQUMsRUFBQztVQUF5VztZQUFBTixRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRTtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNqWDtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNILENBQUMsZUFDTlAsb0VBQUE7UUFBTUcsU0FBUyxFQUFDLE9BQU87UUFBQUQsUUFBQSxFQUFDO01BQWtCO1FBQUFFLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFNLENBQUMsZUFDakRQLG9FQUFBO1FBQUdHLFNBQVMsRUFBQyxXQUFXO1FBQUFELFFBQUEsRUFBQztNQUd6QjtRQUFBRSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBRyxDQUFDLGVBQ0pQLG9FQUFBO1FBQUssa0JBQWUsT0FBTztRQUFDLGlCQUFjLFFBQVE7UUFBQ0csU0FBUyxFQUFDLFVBQVU7UUFBQUQsUUFBQSxlQUNyRUYsb0VBQUE7VUFBTUcsU0FBUyxFQUFDLGdCQUFnQjtVQUFBRCxRQUFBLEVBQUM7UUFJakM7VUFBQUUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQU07TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSixDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0g7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTyxDQUFDO0FBRXBCLENBQUM7QUFBQ0ksRUFBQSxHQS9CSVosSUFBSTtBQWlDVixNQUFNRSxhQUFhLEdBQUdXLHlEQUFNLENBQUNDLEdBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FwSEliLGFBQWE7QUFzSEpGLG1FQUFJLEVBQUM7QUFBQSxJQUFBWSxFQUFBLEVBQUFHLEdBQUE7QUFBQUMsWUFBQSxDQUFBSixFQUFBO0FBQUFJLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy44ZDg0YTc2YjY0NGU3MTQ3YjIzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgZGF0YS1wb3NpdGlvbj1cInRvcFwiIGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAmYnVsbGV0OyBjYXJkIGNvbXBvbmVudCAmYnVsbGV0OyBjYXJkIGNvbXBvbmVudCAmYnVsbGV0OyBjYXJkXHJcbiAgICAgICAgICAgIGNvbXBvbmVudCAmYnVsbGV0OyBjYXJkIGNvbXBvbmVudCAmYnVsbGV0OyBjYXJkIGNvbXBvbmVudCAmYnVsbGV0O1xyXG4gICAgICAgICAgICBjYXJkIGNvbXBvbmVudFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0yMCA1SDRWMTlMMTMuMjkyMyA5LjcwNjQ5QzEzLjY4MjggOS4zMTU5NSAxNC4zMTU5IDkuMzE1OTEgMTQuNzA2NSA5LjcwNjQxTDIwIDE1LjAxMDRWNVpNMiAzLjk5MzRDMiAzLjQ0NDc2IDIuNDU1MzEgMyAyLjk5MTggM0gyMS4wMDgyQzIxLjU1NiAzIDIyIDMuNDQ0OTUgMjIgMy45OTM0VjIwLjAwNjZDMjIgMjAuNTU1MiAyMS41NDQ3IDIxIDIxLjAwODIgMjFIMi45OTE4QzIuNDQ0MDUgMjEgMiAyMC41NTUxIDIgMjAuMDA2NlYzLjk5MzRaTTggMTFDNi44OTU0MyAxMSA2IDEwLjEwNDYgNiA5QzYgNy44OTU0MyA2Ljg5NTQzIDcgOCA3QzkuMTA0NTcgNyAxMCA3Ljg5NTQzIDEwIDlDMTAgMTAuMTA0NiA5LjEwNDU3IDExIDggMTFaXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+SGlnaGxpZ2h0IEN1cmF0aW9uPC9zcGFuPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgV29ya3MgYXV0b25vbW91c2x5IHRocm91Z2ggYXJ0aWZpY2lhbCBpbnRlbGxpZ2VudCBhbmQgaHVuZHJlZCBvZlxyXG4gICAgICAgICAgbWljcm8tc2VydmljZXNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBkYXRhLWRpcmVjdGlvbj1cInJpZ2h0XCIgZGF0YS1wb3NpdGlvbj1cImJvdHRvbVwiIGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAmYnVsbGV0OyBjYXJkIGNvbXBvbmVudCAmYnVsbGV0OyBjYXJkIGNvbXBvbmVudCAmYnVsbGV0OyBjYXJkXHJcbiAgICAgICAgICAgIGNvbXBvbmVudCAmYnVsbGV0OyBjYXJkIGNvbXBvbmVudCAmYnVsbGV0OyBjYXJkIGNvbXBvbmVudCAmYnVsbGV0O1xyXG4gICAgICAgICAgICBjYXJkIGNvbXBvbmVudFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcmQge1xyXG4gIC0tbGltZS01MDA6ICNiZGQ5MTA7XHJcbiAgLS12aW9sZXQtNzAwOiAjOGEwN2I4O1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG5cclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHdpZHRoOiAyNnJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTZyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZS01MDApO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3JlbTtcclxuICByaWdodDogMnJlbTtcclxuXHJcbiAgd2lkdGg6IDEuMjVyZW07XHJcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXQtNzAwKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG59XHJcblxyXG4uY2FyZDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOC43NXJlbTtcclxuICByaWdodDogLTAuNXJlbTtcclxuXHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXQtNzAwKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG59XHJcblxyXG4uY2FyZCAuY2Fyb3VzZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG5cclxuICBhbmltYXRpb246IGNhcm91c2VsIDEwcyBsaW5lYXIgdmFyKC0tY2Fyb3VzZWxfZGlyZWN0aW9uLCBub3JtYWwpIGluZmluaXRlO1xyXG59XHJcblxyXG4uY2FyZCAuY2Fyb3VzZWxbZGF0YS1kaXJlY3Rpb249XCJyaWdodFwiXSB7XHJcbiAgLS1jYXJvdXNlbF9kaXJlY3Rpb246IHJldmVyc2U7XHJcbn1cclxuLmNhcmQgLmNhcm91c2VsW2RhdGEtcG9zaXRpb249XCJ0b3BcIl0ge1xyXG4gIHRvcDogMC43NXJlbTtcclxufVxyXG4uY2FyZCAuY2Fyb3VzZWxbZGF0YS1wb3NpdGlvbj1cImJvdHRvbVwiXSB7XHJcbiAgYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2Fyb3VzZWwgLmNhcm91c2VsX190ZXh0IHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcm91c2VsIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIC5pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5jYXJkIC5pbWFnZSBzdmcge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkIC50aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5cclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZCAucGFyYWdyYXBoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcblxyXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XHJcblxyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
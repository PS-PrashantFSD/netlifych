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
          children: "&bullet; Are you looking &bullet; innovative &bullet; marketing solution &bullet; we help you &bullet; card component &bullet; card component"
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
          viewBox: "0 0 100 30",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
            x: "0",
            y: "20",
            "font-family": "Arial",
            "font-size": "40",
            fill: "white",
            children: "nexAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "title",
        children: "Highlight Curation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "paragraph",
        children: "Works autonomously through artificial intelligence and hundreds of micro-services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        "data-direction": "right",
        "data-position": "bottom",
        className: "carousel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "carousel__text",
          children: "&bullet;  In the relam of AR; the only limit is our imagination &bullet; In the relam of AR; the only limit is our imagination &bullet; In the relam of AR; the only limit is our imagination"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
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
    width: 3rem; /* Increased size */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL0NhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmQiLCJfanN4REVWIiwiU3R5bGVkV3JhcHBlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidmlld0JveCIsInhtbG5zIiwieCIsInkiLCJmaWxsIiwiX2MiLCJzdHlsZWQiLCJkaXYiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFBQTtBQUV2QyxNQUFNQSxJQUFJLEdBQUdBLENBQUEsS0FBTTtFQUNqQixvQkFDRUMsb0VBQUEsQ0FBQ0MsYUFBYTtJQUFBQyxRQUFBLGVBQ1pGLG9FQUFBO01BQUtHLFNBQVMsRUFBQyxNQUFNO01BQUFELFFBQUEsZ0JBQ25CRixvRUFBQTtRQUFLLGlCQUFjLEtBQUs7UUFBQ0csU0FBUyxFQUFDLFVBQVU7UUFBQUQsUUFBQSxlQUMzQ0Ysb0VBQUE7VUFBTUcsU0FBUyxFQUFDLGdCQUFnQjtVQUFBRCxRQUFBLEVBQUM7UUFHakM7VUFBQUUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQU07TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSixDQUFDLGVBQ05QLG9FQUFBO1FBQUtHLFNBQVMsRUFBQyxPQUFPO1FBQUFELFFBQUEsZUFDcEJGLG9FQUFBO1VBQUtRLE9BQU8sRUFBQyxZQUFZO1VBQUNDLEtBQUssRUFBQyw0QkFBNEI7VUFBQVAsUUFBQSxlQUMxREYsb0VBQUE7WUFBTVUsQ0FBQyxFQUFDLEdBQUc7WUFBQ0MsQ0FBQyxFQUFDLElBQUk7WUFBQyxlQUFZLE9BQU87WUFBQyxhQUFVLElBQUk7WUFBQ0MsSUFBSSxFQUFDLE9BQU87WUFBQVYsUUFBQSxFQUFDO1VBQUs7WUFBQUUsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQU07UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDNUU7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSCxDQUFDLGVBQ05QLG9FQUFBO1FBQU1HLFNBQVMsRUFBQyxPQUFPO1FBQUFELFFBQUEsRUFBQztNQUFrQjtRQUFBRSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBTSxDQUFDLGVBQ2pEUCxvRUFBQTtRQUFHRyxTQUFTLEVBQUMsV0FBVztRQUFBRCxRQUFBLEVBQUM7TUFHekI7UUFBQUUsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUcsQ0FBQyxlQUNKUCxvRUFBQTtRQUFLLGtCQUFlLE9BQU87UUFBQyxpQkFBYyxRQUFRO1FBQUNHLFNBQVMsRUFBQyxVQUFVO1FBQUFELFFBQUEsZUFDckVGLG9FQUFBO1VBQU1HLFNBQVMsRUFBQyxnQkFBZ0I7VUFBQUQsUUFBQSxFQUFDO1FBSWpDO1VBQUFFLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFNO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0osQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNIO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ08sQ0FBQztBQUVwQixDQUFDO0FBQUNNLEVBQUEsR0E5QklkLElBQUk7QUFnQ1YsTUFBTUUsYUFBYSxHQUFHYSx5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FuSklmLGFBQWE7QUFxSkpGLG1FQUFJLEVBQUM7QUFBQSxJQUFBYyxFQUFBLEVBQUFHLEdBQUE7QUFBQUMsWUFBQSxDQUFBSixFQUFBO0FBQUFJLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy5hM2U3MjY3NjI2NDU2ZmYzOThmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgZGF0YS1wb3NpdGlvbj1cInRvcFwiIGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAmYnVsbGV0OyBBcmUgeW91IGxvb2tpbmcgJmJ1bGxldDsgaW5ub3ZhdGl2ZSAmYnVsbGV0OyBtYXJrZXRpbmcgc29sdXRpb24gJmJ1bGxldDsgd2UgaGVscCB5b3UgJmJ1bGxldDsgXHJcbiAgICAgICAgICAgIGNhcmQgY29tcG9uZW50ICZidWxsZXQ7IGNhcmQgY29tcG9uZW50XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCAzMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHRleHQgeD1cIjBcIiB5PVwiMjBcIiBmb250LWZhbWlseT1cIkFyaWFsXCIgZm9udC1zaXplPVwiNDBcIiBmaWxsPVwid2hpdGVcIj5uZXhBUjwvdGV4dD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+SGlnaGxpZ2h0IEN1cmF0aW9uPC9zcGFuPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgV29ya3MgYXV0b25vbW91c2x5IHRocm91Z2ggYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgYW5kIGh1bmRyZWRzIG9mXHJcbiAgICAgICAgICBtaWNyby1zZXJ2aWNlc1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGRhdGEtZGlyZWN0aW9uPVwicmlnaHRcIiBkYXRhLXBvc2l0aW9uPVwiYm90dG9tXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsX190ZXh0XCI+XHJcbiAgICAgICAgICAgICZidWxsZXQ7ICBJbiB0aGUgcmVsYW0gb2YgQVI7IHRoZSBvbmx5IGxpbWl0IGlzIG91ciBpbWFnaW5hdGlvbiAmYnVsbGV0OyAgXHJcbiAgICAgICAgICAgIEluIHRoZSByZWxhbSBvZiBBUjsgdGhlIG9ubHkgbGltaXQgaXMgb3VyIGltYWdpbmF0aW9uICZidWxsZXQ7ICBcclxuICAgICAgICAgICAgSW4gdGhlIHJlbGFtIG9mIEFSOyB0aGUgb25seSBsaW1pdCBpcyBvdXIgaW1hZ2luYXRpb24gXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAuY2FyZCB7XHJcbiAgICAtLWxpbWUtNTAwOiAjYmRkOTEwO1xyXG4gICAgLS12aW9sZXQtNzAwOiAjOGEwN2I4O1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG5cclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMjZyZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxNnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUtNTAwKTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdyZW07XHJcbiAgICByaWdodDogMnJlbTtcclxuXHJcbiAgICB3aWR0aDogMS4yNXJlbTtcclxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXQtNzAwKTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOC43NXJlbTtcclxuICAgIHJpZ2h0OiAtMC41cmVtO1xyXG5cclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpb2xldC03MDApO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIC5jYXJvdXNlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGFuaW1hdGlvbjogY2Fyb3VzZWwgMTBzIGxpbmVhciB2YXIoLS1jYXJvdXNlbF9kaXJlY3Rpb24sIG5vcm1hbCkgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuY2Fyb3VzZWxbZGF0YS1kaXJlY3Rpb249XCJyaWdodFwiXSB7XHJcbiAgICAtLWNhcm91c2VsX2RpcmVjdGlvbjogcmV2ZXJzZTtcclxuICB9XHJcbiAgLmNhcmQgLmNhcm91c2VsW2RhdGEtcG9zaXRpb249XCJ0b3BcIl0ge1xyXG4gICAgdG9wOiAwLjc1cmVtO1xyXG4gIH1cclxuICAuY2FyZCAuY2Fyb3VzZWxbZGF0YS1wb3NpdGlvbj1cImJvdHRvbVwiXSB7XHJcbiAgICBib3R0b206IDAuNzVyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuY2Fyb3VzZWwgLmNhcm91c2VsX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtd3JhcDogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBjYXJvdXNlbCB7XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQgLmltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuaW1hZ2Ugc3ZnIHtcclxuICAgIHdpZHRoOiAzcmVtOyAvKiBJbmNyZWFzZWQgc2l6ZSAqL1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgLnRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgLnBhcmFncmFwaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBvbiBtb2JpbGUgKi9cclxuICAgICAgcGFkZGluZzogMC41cmVtOyAvKiBBZGp1c3QgcGFkZGluZyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC5jYXJvdXNlbCAuY2Fyb3VzZWxfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDAuNjVyZW07IC8qIFNtYWxsZXIgdGV4dCBzaXplIG9uIG1vYmlsZSAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtOyAvKiBTbWFsbGVyIHRpdGxlIHNpemUgb24gbW9iaWxlICovXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQgLnBhcmFncmFwaCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTsgLyogU21hbGxlciBwYXJhZ3JhcGggc2l6ZSBvbiBtb2JpbGUgKi9cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCAuaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogODAlOyAvKiBBZGp1c3QgaW1hZ2Ugd2lkdGggKi9cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDo6YmVmb3JlIHtcclxuICAgICAgdG9wOiA1cmVtOyAvKiBBZGp1c3QgcG9zaXRpb25pbmcgb2YgcHNldWRvLWVsZW1lbnRzICovXHJcbiAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkOjphZnRlciB7XHJcbiAgICAgIHRvcDogNi41cmVtOyAvKiBBZGp1c3QgcG9zaXRpb25pbmcgb2YgcHNldWRvLWVsZW1lbnRzICovXHJcbiAgICAgIHJpZ2h0OiAtMC4yNXJlbTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-icon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          style: {
            fontSize: '69px'
          },
          children: "nexAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "card-body",
        children: "Elevate user experience with our Augmented Reality software, blending real and virtual worlds for innovative engagement in marketing, education, and media."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-icon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          style: {
            fontSize: '69px'
          },
          children: "nexNet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "card-body",
        children: "Enhance your online presence with our custom web and software development. We deliver responsive, SEO-optimized websites and tailored software solutions that effectively communicate your brand."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-icon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          style: {
            fontSize: '69px'
          },
          children: "nexAi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "card-body",
        children: "Improve efficiency with our AI-powered Object Detection systems, ideal for retail, security, and automation, enabling smart inventory, surveillance, and process automation."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
_c = Card;
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjusts spacing between cards */
  
  
  .card {
    width: 300px;
    height: 300px;
    background: #e4e3e3da;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 1em 1.5em;
    transition: all 0.5s ease;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    margin: 2.5em 0; /* Adds margin to the top and bottom */

    &:hover {
      background: #f1f1f1;
      color: red;
    }
  }

  .card-icon svg {
    height: 4rem;
    width: 4rem;
  }

  .card-body {
    text-align: start; /* Change to start for better alignment */
  }
  @media (max-width: 600px) {
    .card {
      width: 100%; /* Make cards full-width on small screens */
      height: auto; /* Allow height to adjust based on content */
    }

    display: block; /* Stack cards vertically */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL1NjYXJkLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiX2pzeERFViIsIlN0eWxlZFdyYXBwZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZm9udFNpemUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsInN0eWxlZCIsImRpdiIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUFBO0FBRXZDLE1BQU1BLElBQUksR0FBR0EsQ0FBQSxLQUFNO0VBQ2pCLG9CQUNFQyxvRUFBQSxDQUFDQyxhQUFhO0lBQUFDLFFBQUEsZ0JBQ1pGLG9FQUFBO01BQUtHLFNBQVMsRUFBQyxNQUFNO01BQUFELFFBQUEsZ0JBQ25CRixvRUFBQTtRQUFLRyxTQUFTLEVBQUMsV0FBVztRQUFBRCxRQUFBLGVBQ3hCRixvRUFBQTtVQUFJSSxLQUFLLEVBQUU7WUFBQ0MsUUFBUSxFQUFFO1VBQU0sQ0FBRTtVQUFBSCxRQUFBLEVBQUM7UUFBSztVQUFBSSxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBSTtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUN0QyxDQUFDLGVBQ05ULG9FQUFBO1FBQU1HLFNBQVMsRUFBQyxXQUFXO1FBQUFELFFBQUEsRUFBQztNQUU1QjtRQUFBSSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBTSxDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0osQ0FBQyxlQUNOVCxvRUFBQTtNQUFLRyxTQUFTLEVBQUMsTUFBTTtNQUFBRCxRQUFBLGdCQUNuQkYsb0VBQUE7UUFBS0csU0FBUyxFQUFDLFdBQVc7UUFBQUQsUUFBQSxlQUMxQkYsb0VBQUE7VUFBSUksS0FBSyxFQUFFO1lBQUNDLFFBQVEsRUFBRTtVQUFNLENBQUU7VUFBQUgsUUFBQSxFQUFDO1FBQU07VUFBQUksUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUk7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDckMsQ0FBQyxlQUNOVCxvRUFBQTtRQUFNRyxTQUFTLEVBQUMsV0FBVztRQUFBRCxRQUFBLEVBQUM7TUFFNUI7UUFBQUksUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQU0sQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNKLENBQUMsZUFDTlQsb0VBQUE7TUFBS0csU0FBUyxFQUFDLE1BQU07TUFBQUQsUUFBQSxnQkFDbkJGLG9FQUFBO1FBQUtHLFNBQVMsRUFBQyxXQUFXO1FBQUFELFFBQUEsZUFDMUJGLG9FQUFBO1VBQUlJLEtBQUssRUFBRTtZQUFDQyxRQUFRLEVBQUU7VUFBTSxDQUFFO1VBQUFILFFBQUEsRUFBQztRQUFLO1VBQUFJLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFJO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ3BDLENBQUMsZUFDTlQsb0VBQUE7UUFBTUcsU0FBUyxFQUFDLFdBQVc7UUFBQUQsUUFBQSxFQUFDO01BRTVCO1FBQUFJLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFNLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSixDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ08sQ0FBQztBQUVwQixDQUFDO0FBQUNDLEVBQUEsR0E3QklYLElBQUk7QUErQlYsTUFBTUUsYUFBYSxHQUFHVSx5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0ExQ0laLGFBQWE7QUE0Q0pGLG1FQUFJLEVBQUM7QUFBQSxJQUFBVyxFQUFBLEVBQUFHLEdBQUE7QUFBQUMsWUFBQSxDQUFBSixFQUFBO0FBQUFJLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy43MjM0YzdlMzUzZmZjY2ZlMWI0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pY29uXCI+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogJzY5cHgnfX0+bmV4QVI8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgRWxldmF0ZSB1c2VyIGV4cGVyaWVuY2Ugd2l0aCBvdXIgQXVnbWVudGVkIFJlYWxpdHkgc29mdHdhcmUsIGJsZW5kaW5nIHJlYWwgYW5kIHZpcnR1YWwgd29ybGRzIGZvciBpbm5vdmF0aXZlIGVuZ2FnZW1lbnQgaW4gbWFya2V0aW5nLCBlZHVjYXRpb24sIGFuZCBtZWRpYS5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaWNvblwiPlxyXG4gICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiAnNjlweCd9fT5uZXhOZXQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgRW5oYW5jZSB5b3VyIG9ubGluZSBwcmVzZW5jZSB3aXRoIG91ciBjdXN0b20gd2ViIGFuZCBzb2Z0d2FyZSBkZXZlbG9wbWVudC4gV2UgZGVsaXZlciByZXNwb25zaXZlLCBTRU8tb3B0aW1pemVkIHdlYnNpdGVzIGFuZCB0YWlsb3JlZCBzb2Z0d2FyZSBzb2x1dGlvbnMgdGhhdCBlZmZlY3RpdmVseSBjb21tdW5pY2F0ZSB5b3VyIGJyYW5kLlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pY29uXCI+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICc2OXB4J319Pm5leEFpPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIEltcHJvdmUgZWZmaWNpZW5jeSB3aXRoIG91ciBBSS1wb3dlcmVkIE9iamVjdCBEZXRlY3Rpb24gc3lzdGVtcywgaWRlYWwgZm9yIHJldGFpbCwgc2VjdXJpdHksIGFuZCBhdXRvbWF0aW9uLCBlbmFibGluZyBzbWFydCBpbnZlbnRvcnksIHN1cnZlaWxsYW5jZSwgYW5kIHByb2Nlc3MgYXV0b21hdGlvbi5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIEFkanVzdHMgc3BhY2luZyBiZXR3ZWVuIGNhcmRzICovXHJcbiAgXHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlNGUzZTNkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWFyZ2luOiAyLjVlbSAwOyAvKiBBZGRzIG1hcmdpbiB0byB0aGUgdG9wIGFuZCBib3R0b20gKi9cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWljb24gc3ZnIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDsgLyogQ2hhbmdlIHRvIHN0YXJ0IGZvciBiZXR0ZXIgYWxpZ25tZW50ICovXHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICB3aWR0aDogMTAwJTsgLyogTWFrZSBjYXJkcyBmdWxsLXdpZHRoIG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuICAgICAgaGVpZ2h0OiBhdXRvOyAvKiBBbGxvdyBoZWlnaHQgdG8gYWRqdXN0IGJhc2VkIG9uIGNvbnRlbnQgKi9cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogU3RhY2sgY2FyZHMgdmVydGljYWxseSAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Misc/Nexcard.jsx":
/*!*************************************!*\
  !*** ./components/Misc/Nexcard.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Nexcard.jsx";



const Card = () => {
  const cardsData = [{
    id: 1,
    title: 'Card One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae justo vel lorem tincidunt ultrices at non nunc.',
    imageUrl: 'https://via.placeholder.com/40' // Replace with your image URL
  }, {
    id: 2,
    title: 'Card Two',
    description: 'Donec in sapien viverra, tincidunt augue id, efficitur massa. Suspendisse ac lorem non erat luctus commodo.',
    imageUrl: 'https://via.placeholder.com/40' // Replace with your image URL
  }, {
    id: 3,
    title: 'Card Three',
    description: 'Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Pellentesque in ipsum id orci porta dapibus.',
    imageUrl: 'https://via.placeholder.com/40' // Replace with your image URL
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: cardsData.map(card => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: card.imageUrl,
        alt: `${card.title} icon`,
        className: "card__icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card__content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "card__title",
          children: card.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "card__description",
          children: card.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined)]
    }, card.id, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};
_c = Card;
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  gap: 20px;

  section.card {
    position: relative;
    width: 350px;
    height: 200px;
    background-color: #474dc3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__icon {
    width: 40px;
    height: 40px;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 3px;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #000000;
    background-color: #474dc3;
    color: #ffffff;
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #474dc3;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    padding-left: 5px;
    font-size: 24px;
    color: var(--white);
    font-weight: 700;
  }

  .card:hover .card__icon {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #ffffff;
    line-height: 1.4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGNhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkc0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsIl9qc3hERVYiLCJTdHlsZWRXcmFwcGVyIiwiY2hpbGRyZW4iLCJtYXAiLCJjYXJkIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCJzdHlsZWQiLCJkaXYiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFBQTtBQUV2QyxNQUFNQSxJQUFJLEdBQUdBLENBQUEsS0FBTTtFQUNqQixNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7SUFDRUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsS0FBSyxFQUFFLFVBQVU7SUFDakJDLFdBQVcsRUFBRSx1SEFBdUg7SUFDcElDLFFBQVEsRUFBRSxnQ0FBZ0MsQ0FBRTtFQUM5QyxDQUFDLEVBQ0Q7SUFDRUgsRUFBRSxFQUFFLENBQUM7SUFDTEMsS0FBSyxFQUFFLFVBQVU7SUFDakJDLFdBQVcsRUFBRSw2R0FBNkc7SUFDMUhDLFFBQVEsRUFBRSxnQ0FBZ0MsQ0FBRTtFQUM5QyxDQUFDLEVBQ0Q7SUFDRUgsRUFBRSxFQUFFLENBQUM7SUFDTEMsS0FBSyxFQUFFLFlBQVk7SUFDbkJDLFdBQVcsRUFBRSxvSEFBb0g7SUFDaklDLFFBQVEsRUFBRSxnQ0FBZ0MsQ0FBRTtFQUM5QyxDQUFDLENBQ0Y7RUFFRCxvQkFDRUMsb0VBQUEsQ0FBQ0MsYUFBYTtJQUFBQyxRQUFBLEVBQ1hQLFNBQVMsQ0FBQ1EsR0FBRyxDQUFFQyxJQUFJLGlCQUNsQkosb0VBQUE7TUFBdUJLLFNBQVMsRUFBQyxNQUFNO01BQUFILFFBQUEsZ0JBQ3JDRixvRUFBQTtRQUFLTSxHQUFHLEVBQUVGLElBQUksQ0FBQ0wsUUFBUztRQUFDUSxHQUFHLEVBQUUsR0FBR0gsSUFBSSxDQUFDUCxLQUFLLE9BQVE7UUFBQ1EsU0FBUyxFQUFDO01BQVk7UUFBQUcsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUM3RVgsb0VBQUE7UUFBS0ssU0FBUyxFQUFDLGVBQWU7UUFBQUgsUUFBQSxnQkFDNUJGLG9FQUFBO1VBQUdLLFNBQVMsRUFBQyxhQUFhO1VBQUFILFFBQUEsRUFBRUUsSUFBSSxDQUFDUDtRQUFLO1VBQUFXLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFJLENBQUMsZUFDM0NYLG9FQUFBO1VBQUdLLFNBQVMsRUFBQyxtQkFBbUI7VUFBQUgsUUFBQSxFQUFFRSxJQUFJLENBQUNOO1FBQVc7VUFBQVUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUksQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNwRCxDQUFDO0lBQUEsR0FMTVAsSUFBSSxDQUFDUixFQUFFO01BQUFZLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQU1aLENBQ1Y7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDVyxDQUFDO0FBRXBCLENBQUM7QUFBQUMsRUFBQSxHQW5DS2xCLElBQUk7QUFxQ1YsTUFBTU8sYUFBYSxHQUFHWSx5REFBTSxDQUFDQyxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBcEVJZCxhQUFhO0FBc0VKUCxtRUFBSSxFQUFDO0FBQUEsSUFBQWtCLEVBQUEsRUFBQUcsR0FBQTtBQUFBQyxZQUFBLENBQUFKLEVBQUE7QUFBQUksWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFmYTEyMTZmMmUzZjQ3MGViMTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FyZHNEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgdGl0bGU6ICdDYXJkIE9uZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGFtIHZpdGFlIGp1c3RvIHZlbCBsb3JlbSB0aW5jaWR1bnQgdWx0cmljZXMgYXQgbm9uIG51bmMuJyxcclxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAnLCAvLyBSZXBsYWNlIHdpdGggeW91ciBpbWFnZSBVUkxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB0aXRsZTogJ0NhcmQgVHdvJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdEb25lYyBpbiBzYXBpZW4gdml2ZXJyYSwgdGluY2lkdW50IGF1Z3VlIGlkLCBlZmZpY2l0dXIgbWFzc2EuIFN1c3BlbmRpc3NlIGFjIGxvcmVtIG5vbiBlcmF0IGx1Y3R1cyBjb21tb2RvLicsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwJywgLy8gUmVwbGFjZSB3aXRoIHlvdXIgaW1hZ2UgVVJMXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgdGl0bGU6ICdDYXJkIFRocmVlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdQcm9pbiBncmF2aWRhIGRvbG9yIHNpdCBhbWV0IGxhY3VzIGFjY3Vtc2FuIGV0IHZpdmVycmEganVzdG8gY29tbW9kby4gUGVsbGVudGVzcXVlIGluIGlwc3VtIGlkIG9yY2kgcG9ydGEgZGFwaWJ1cy4nLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MCcsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGltYWdlIFVSTFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIHtjYXJkc0RhdGEubWFwKChjYXJkKSA9PiAoXHJcbiAgICAgICAgPHNlY3Rpb24ga2V5PXtjYXJkLmlkfSBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17Y2FyZC5pbWFnZVVybH0gYWx0PXtgJHtjYXJkLnRpdGxlfSBpY29uYH0gY2xhc3NOYW1lPVwiY2FyZF9faWNvblwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj57Y2FyZC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRfX2Rlc2NyaXB0aW9uXCI+e2NhcmQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuXHJcbiAgc2VjdGlvbi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZGMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICB9XHJcblxyXG4gIC5jYXJkX19pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzRkYzM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5jYXJkX19jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGRjMztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6aG92ZXIgLmNhcmRfX2NvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmRfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpob3ZlciAuY2FyZF9faWNvbiB7XHJcbiAgICBzY2FsZTogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkX19kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
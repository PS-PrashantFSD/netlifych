webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/About/styles.js":
/*!*****************************************!*\
  !*** ./components/Home/About/styles.js ***!
  \*****************************************/
/*! exports provided: ContentSection, TextWrapper, ServicesWrapper, AccordionToggle, AccordionContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesWrapper", function() { return ServicesWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionToggle", function() { return AccordionToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContent", function() { return AccordionContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");




const ContentSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  display: flex;
  flex-direction: row; /* Default to row */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  margin-bottom: 200px;

  ${_ref => {
  let {
    theme
  } = _ref;
  return theme.breakpoints.small`
    flex-direction: column; /* Stack on small screens */
  `;
}};

  ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.breakpoints.tablet`
    margin-bottom: 86px;
  `;
}};
`;
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 58.333%;
  text-align: center; /* Center the text */

  & h2 {
    margin: 0;
    margin-bottom: 44px;
    max-width: 600px;
    font-size: 2.625rem;
    line-height: 1;
    font-weight: 500;
  }

  & p {
    max-width: 448px;
    margin: 6.9px 0;
    line-height: 1.2777777778;
  }

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.small`
    margin-left: 0;
    width: 100%;
  `;
}};

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.tablet`
    & h2 {
      font-size: 1.5rem;
      margin-bottom: 34px;
    }
  `;
}};
`;
const ServicesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-left: 8.333%;
  width: 25%;
  padding-top: 15px;
  padding-left: 30px;

  & h3 {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
  }

  ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.breakpoints.small`
    margin-left: 0;
    padding-left: 0;
    width: 100%;
    text-align: center; /* Center services text on small screens */
  `;
}};
`;
const AccordionToggle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
  font-size: 0.875rem;
  position: relative;
  display: block;
  padding: 27px 0 0 35px;
  line-height: 15px;
  color: ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.colors.red;
}};

  &:hover:not([aria-expanded='true']) {
    color: ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.text;
}};

    &::before,
    &::after {
      width: 11px;
      transform: rotate(0deg);
    }

    &::before {
      left: 2px;
    }

    &::after {
      left: 13px;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    width: 18px;
    height: 4px;
    margin-top: 11.5px;
    background: ${_ref8 => {
  let {
    theme
  } = _ref8;
  return theme.colors.red;
}};
    transition: all 0.1s ease-in-out;
  }

  &::before {
    left: 0;
    transform: rotate(45deg);
  }

  &::after {
    left: 10px;
    transform: rotate(-45deg);
  }

  &[aria-expanded='true'] {
    &::before,
    &::after {
      width: 11px;
      transform: rotate(0deg);
    }

    &::before {
      left: 2px;
    }

    &::after {
      left: 13px;
    }
  }
`;
const AccordionContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  padding-left: 35px;
  font-size: 0.875rem;
  line-height: 1.0714285714;
  letter-spacing: 0.5px;
  overflow: hidden;
  color: ${_ref9 => {
  let {
    theme
  } = _ref9;
  return theme.colors.red;
}};

  & p {
    margin: 6.1px 0 0;
  }
`;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtYWxsIiwiX3JlZjIiLCJ0YWJsZXQiLCJUZXh0V3JhcHBlciIsImRpdiIsIl9yZWYzIiwiX3JlZjQiLCJTZXJ2aWNlc1dyYXBwZXIiLCJzZWNvbmRhcnlGb250U3R5bGUiLCJfcmVmNSIsIkFjY29yZGlvblRvZ2dsZSIsImJ1dHRvbiIsIl9yZWY2IiwiY29sb3JzIiwicmVkIiwiX3JlZjciLCJ0ZXh0IiwiX3JlZjgiLCJBY2NvcmRpb25Db250ZW50IiwiX3JlZjkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNBO0FBQ3dCO0FBQ0U7QUFFMUQsTUFBTUEsY0FBYyxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDcEQsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsSUFBQTtFQUFBLElBQUM7SUFBRUM7RUFBTSxDQUFDLEdBQUFELElBQUE7RUFBQSxPQUFLQyxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSztBQUMxQztBQUNBLEdBQUc7QUFBQTtBQUNIO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRUg7RUFBTSxDQUFDLEdBQUFHLEtBQUE7RUFBQSxPQUFLSCxLQUFLLENBQUNDLFdBQVcsQ0FBQ0csTUFBTTtBQUMzQztBQUNBLEdBQUc7QUFBQTtBQUNILENBQUM7QUFFTSxNQUFNQyxXQUFXLEdBQUdWLHlEQUFNLENBQUNXLEdBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRVA7RUFBTSxDQUFDLEdBQUFPLEtBQUE7RUFBQSxPQUFLUCxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJTSxLQUFBO0VBQUEsSUFBQztJQUFFUjtFQUFNLENBQUMsR0FBQVEsS0FBQTtFQUFBLE9BQUtSLEtBQUssQ0FBQ0MsV0FBVyxDQUFDRyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQztBQUVNLE1BQU1LLGVBQWUsR0FBR2QseURBQU0sQ0FBQ1csR0FBRztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNSSxzRUFBa0I7QUFDeEI7QUFDQTtBQUNBLElBQUlDLEtBQUE7RUFBQSxJQUFDO0lBQUVYO0VBQU0sQ0FBQyxHQUFBVyxLQUFBO0VBQUEsT0FBS1gsS0FBSyxDQUFDQyxXQUFXLENBQUNDLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDO0FBRU0sTUFBTVUsZUFBZSxHQUFHakIseURBQU0sQ0FBQ2tCLE1BQU07QUFDNUMsSUFBSUgsc0VBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXSSxLQUFBO0VBQUEsSUFBQztJQUFFZDtFQUFNLENBQUMsR0FBQWMsS0FBQTtFQUFBLE9BQUtkLEtBQUssQ0FBQ2UsTUFBTSxDQUFDQyxHQUFHO0FBQUE7QUFDMUM7QUFDQTtBQUNBLGFBQWFDLEtBQUE7RUFBQSxJQUFDO0lBQUVqQjtFQUFNLENBQUMsR0FBQWlCLEtBQUE7RUFBQSxPQUFLakIsS0FBSyxDQUFDa0IsSUFBSTtBQUFBO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCQyxLQUFBO0VBQUEsSUFBQztJQUFFbkI7RUFBTSxDQUFDLEdBQUFtQixLQUFBO0VBQUEsT0FBS25CLEtBQUssQ0FBQ2UsTUFBTSxDQUFDQyxHQUFHO0FBQUE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRU0sTUFBTUksZ0JBQWdCLEdBQUd6QixpRUFBTSxDQUFDQyxvREFBTSxDQUFDVSxHQUFHLENBQUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVdlLEtBQUE7RUFBQSxJQUFDO0lBQUVyQjtFQUFNLENBQUMsR0FBQXFCLEtBQUE7RUFBQSxPQUFLckIsS0FBSyxDQUFDZSxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTM5ZDAyZDZmODliNWI0MGQyYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogRGVmYXVsdCB0byByb3cgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW1zIHZlcnRpY2FsbHkgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBpdGVtcyBob3Jpem9udGFsbHkgKi9cbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBvbiBzbWFsbCBzY3JlZW5zICovXG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi1ib3R0b206IDg2cHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDU4LjMzMyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSB0ZXh0ICovXG5cbiAgJiBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBmb250LXNpemU6IDIuNjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAmIHAge1xuICAgIG1heC13aWR0aDogNDQ4cHg7XG4gICAgbWFyZ2luOiA2LjlweCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICAmIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMyU7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cbiAgJiBoMyB7XG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgc2VydmljZXMgdGV4dCBvbiBzbWFsbCBzY3JlZW5zICovXG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvblRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4gICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjdweCAwIDAgMzVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICY6aG92ZXI6bm90KFthcmlhLWV4cGFuZGVkPSd0cnVlJ10pIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICB3aWR0aDogMTFweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAycHg7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgbGVmdDogMTNweDtcbiAgICB9XG4gIH1cblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLXRvcDogMTEuNXB4O1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gICZbYXJpYS1leHBhbmRlZD0ndHJ1ZSddIHtcbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDExcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbGVmdDogMnB4O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IDEzcHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uQ29udGVudCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4wNzE0Mjg1NzE0O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICYgcCB7XG4gICAgbWFyZ2luOiA2LjFweCAwIDA7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9
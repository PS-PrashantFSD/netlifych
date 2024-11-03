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
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 200px;

  ${_ref => {
  let {
    theme
  } = _ref;
  return theme.breakpoints.small`
    flex-direction: column;
    align-items: center; /* Center-align content on small screens */
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
  width: 50.333%;

  & h2 {
    margin: 0;
    margin-bottom: 44px;
    max-width: 600px;
    font-size: 2.625rem;
    line-height: 1;
    font-weight: 500;
    color: gray;
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
    text-align: center; /* Center-align text on small screens */
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
  width: 45%;
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
    text-align: center; /* Center-align text on small screens */
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
  color: white;

  &:hover:not([aria-expanded='true']) {
    color: white;

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
    background: white;
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
  color: gray;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtYWxsIiwiX3JlZjIiLCJ0YWJsZXQiLCJUZXh0V3JhcHBlciIsImRpdiIsIl9yZWYzIiwiX3JlZjQiLCJTZXJ2aWNlc1dyYXBwZXIiLCJzZWNvbmRhcnlGb250U3R5bGUiLCJfcmVmNSIsIkFjY29yZGlvblRvZ2dsZSIsImJ1dHRvbiIsIkFjY29yZGlvbkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNBO0FBQ3dCO0FBQ0U7QUFFMUQsTUFBTUEsY0FBYyxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDcEQsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLEtBQUs7QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNIO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRUg7RUFBTSxDQUFDLEdBQUFHLEtBQUE7RUFBQSxPQUFLSCxLQUFLLENBQUNDLFdBQVcsQ0FBQ0csTUFBTTtBQUMzQztBQUNBLEdBQUc7QUFBQTtBQUNILENBQUM7QUFFTSxNQUFNQyxXQUFXLEdBQUdWLHlEQUFNLENBQUNXLEdBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRVA7RUFBTSxDQUFDLEdBQUFPLEtBQUE7RUFBQSxPQUFLUCxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUlNLEtBQUE7RUFBQSxJQUFDO0lBQUVSO0VBQU0sQ0FBQyxHQUFBUSxLQUFBO0VBQUEsT0FBS1IsS0FBSyxDQUFDQyxXQUFXLENBQUNHLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDO0FBRU0sTUFBTUssZUFBZSxHQUFHZCx5REFBTSxDQUFDVyxHQUFHO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1JLHNFQUFrQjtBQUN4QjtBQUNBO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRVg7RUFBTSxDQUFDLEdBQUFXLEtBQUE7RUFBQSxPQUFLWCxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUM7QUFFTSxNQUFNVSxlQUFlLEdBQUdqQix5REFBTSxDQUFDa0IsTUFBTTtBQUM1QyxJQUFJSCxzRUFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVNLE1BQU1JLGdCQUFnQixHQUFHbkIsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ1UsR0FBRyxDQUFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOTIyNzcxNjI5ZDQ5ODQzYTZjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyLWFsaWduIGNvbnRlbnQgb24gc21hbGwgc2NyZWVucyAqL1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBtYXJnaW4tYm90dG9tOiA4NnB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MC4zMzMlO1xuXG4gICYgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgZm9udC1zaXplOiAyLjYyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5cbiAgJiBwIHtcbiAgICBtYXgtd2lkdGg6IDQ0OHB4O1xuICAgIG1hcmdpbjogNi45cHggMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlci1hbGlnbiB0ZXh0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJiBoMiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogOC4zMzMlO1xuICB3aWR0aDogNDUlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuXG4gICYgaDMge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyLWFsaWduIHRleHQgb24gc21hbGwgc2NyZWVucyAqL1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25Ub2dnbGUgPSBzdHlsZWQuYnV0dG9uYFxuICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDI3cHggMCAwIDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3Zlcjpub3QoW2FyaWEtZXhwYW5kZWQ9J3RydWUnXSkge1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICB3aWR0aDogMTFweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAycHg7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgbGVmdDogMTNweDtcbiAgICB9XG4gIH1cblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLXRvcDogMTEuNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cblxuICAmW2FyaWEtZXhwYW5kZWQ9J3RydWUnXSB7XG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAxMXB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBsZWZ0OiAxM3B4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkNvbnRlbnQgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMDcxNDI4NTcxNDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogZ3JheTtcblxuICAmIHAge1xuICAgIG1hcmdpbjogNi4xcHggMCAwO1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
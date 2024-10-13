webpackHotUpdate_N_E("pages/terms",{

/***/ "./components/SocialMedia/styles.js":
/*!******************************************!*\
  !*** ./components/SocialMedia/styles.js ***!
  \******************************************/
/*! exports provided: Container, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shared/text */ "./styles/shared/text.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-end;

  ${_ref => {
  let {
    theme
  } = _ref;
  return theme.breakpoints.small`
  `;
}};
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_1__["secondaryFontStyle"]};
  padding: 0 10px;
  display: inline-block;
  vertical-align: middle;
  width: 41px;
  height: 21px;
  line-height: 24px;

  &:nth-of-type(2) {
    width: 31px;
    height: 24px;
  }

  &:hover svg path {
    fill: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}};
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9zdHlsZXMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiX3JlZiIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbWFsbCIsIkxpbmsiLCJhIiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiX3JlZjIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUN1QjtBQUV2RCxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQUc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQyxJQUFBO0VBQUEsSUFBQztJQUFFQztFQUFNLENBQUMsR0FBQUQsSUFBQTtFQUFBLE9BQUtDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxLQUFLO0FBQzFDLEdBQUc7QUFBQTtBQUNILENBQUM7QUFFTSxNQUFNQyxJQUFJLEdBQUdOLHlEQUFNLENBQUNPLENBQUM7QUFDNUIsSUFBSUMsc0VBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWUMsS0FBQTtFQUFBLElBQUM7SUFBRU47RUFBTSxDQUFDLEdBQUFNLEtBQUE7RUFBQSxPQUFLTixLQUFLLENBQUNPLElBQUk7QUFBQTtBQUNyQztBQUNBLENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVybXMuODc4OTg5M2QyMTBhMWZjNjA1MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICB3aWR0aDogMzFweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAmOmhvdmVyIHN2ZyBwYXRoIHtcbiAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
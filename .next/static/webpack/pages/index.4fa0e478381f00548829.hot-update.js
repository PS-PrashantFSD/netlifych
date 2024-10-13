webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/Contact/styles.js":
/*!*******************************************!*\
  !*** ./components/Home/Contact/styles.js ***!
  \*******************************************/
/*! exports provided: FooterContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContainer", function() { return FooterContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");



const FooterContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].footer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align items to the start vertically
  padding: 40px 0;
  background-color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.background;
}};
  color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.colors.red;
}};

  & .logo {
    margin-bottom: 20px;
    align-self: center; // Center logo
  }

  & .description {
    text-align: center; // Center description
    margin-bottom: 40px;
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_2__["secondaryFontStyle"]};
  }

  & .contact-info {
    display: flex;
    flex-wrap: wrap; // Allow wrapping on smaller screens
    justify-content: flex-start; // Align items to the start
    width: 100%;
    max-width: 800px; // Limit the width for better readability
    margin-bottom: 20px;

    & .column {
      flex: 1;
      text-align: center; // Center text in columns
      ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_2__["secondaryFontStyle"]}; // Include secondary font style
      margin-bottom: 10px; // Add spacing between rows on smaller screens
    }
  }

  & .footer-links {
    text-align: center; // Center footer links
    margin-bottom: 20px;

    & a {
      color: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.colors.red;
}}; // Link color
      text-decoration: none; // Remove underline
      margin: 0 10px; // Spacing between links

      &:hover {
        text-decoration: underline; // Underline on hover
      }
    }
  }

  & .social-media {
    margin-bottom: 20px;
    align-self: center; // Center social media
  }

  & .footer-note {
    font-size: 14px;
    align-self: center; // Center footer note
  }

  // Media queries for responsive design
  @media (max-width: 600px) {
    padding: 20px 10px;

    & .contact-info {
      flex-direction: column; // Stack columns on smaller screens
    }

    & .column {
      margin-bottom: 15px; // Adjust spacing for smaller screens
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkZvb3RlckNvbnRhaW5lciIsInN0eWxlZCIsIm1vdGlvbiIsImZvb3RlciIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJfcmVmMiIsInJlZCIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNBO0FBQzBCO0FBRTFELE1BQU1BLGVBQWUsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsTUFBTSxDQUFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCQyxJQUFBO0VBQUEsSUFBQztJQUFFQztFQUFNLENBQUMsR0FBQUQsSUFBQTtFQUFBLE9BQUtDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVO0FBQUE7QUFDNUQsV0FBV0MsS0FBQTtFQUFBLElBQUM7SUFBRUg7RUFBTSxDQUFDLEdBQUFHLEtBQUE7RUFBQSxPQUFLSCxLQUFLLENBQUNDLE1BQU0sQ0FBQ0csR0FBRztBQUFBO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLHNFQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVFBLHNFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlQyxLQUFBO0VBQUEsSUFBQztJQUFFTjtFQUFNLENBQUMsR0FBQU0sS0FBQTtFQUFBLE9BQUtOLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRyxHQUFHO0FBQUE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRmYTBlNDc4MzgxZjAwNTQ4ODI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcblxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uZm9vdGVyKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8vIEFsaWduIGl0ZW1zIHRvIHRoZSBzdGFydCB2ZXJ0aWNhbGx5XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICYgLmxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyAvLyBDZW50ZXIgbG9nb1xuICB9XG5cbiAgJiAuZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy8gQ2VudGVyIGRlc2NyaXB0aW9uXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIH1cblxuICAmIC5jb250YWN0LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwOyAvLyBBbGxvdyB3cmFwcGluZyBvbiBzbWFsbGVyIHNjcmVlbnNcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8vIEFsaWduIGl0ZW1zIHRvIHRoZSBzdGFydFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogODAwcHg7IC8vIExpbWl0IHRoZSB3aWR0aCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICYgLmNvbHVtbiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvLyBDZW50ZXIgdGV4dCBpbiBjb2x1bW5zXG4gICAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07IC8vIEluY2x1ZGUgc2Vjb25kYXJ5IGZvbnQgc3R5bGVcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8vIEFkZCBzcGFjaW5nIGJldHdlZW4gcm93cyBvbiBzbWFsbGVyIHNjcmVlbnNcbiAgICB9XG4gIH1cblxuICAmIC5mb290ZXItbGlua3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy8gQ2VudGVyIGZvb3RlciBsaW5rc1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAmIGEge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07IC8vIExpbmsgY29sb3JcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLy8gUmVtb3ZlIHVuZGVybGluZVxuICAgICAgbWFyZ2luOiAwIDEwcHg7IC8vIFNwYWNpbmcgYmV0d2VlbiBsaW5rc1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8vIFVuZGVybGluZSBvbiBob3ZlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgLnNvY2lhbC1tZWRpYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IC8vIENlbnRlciBzb2NpYWwgbWVkaWFcbiAgfVxuXG4gICYgLmZvb3Rlci1ub3RlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyAvLyBDZW50ZXIgZm9vdGVyIG5vdGVcbiAgfVxuXG4gIC8vIE1lZGlhIHF1ZXJpZXMgZm9yIHJlc3BvbnNpdmUgZGVzaWduXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcblxuICAgICYgLmNvbnRhY3QtaW5mbyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvLyBTdGFjayBjb2x1bW5zIG9uIHNtYWxsZXIgc2NyZWVuc1xuICAgIH1cblxuICAgICYgLmNvbHVtbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvLyBBZGp1c3Qgc3BhY2luZyBmb3Igc21hbGxlciBzY3JlZW5zXG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
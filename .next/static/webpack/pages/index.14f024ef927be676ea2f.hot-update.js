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
  align-items: center; // Center items horizontally
  margin-left: 3.33%;
  padding: 40px 0px;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkZvb3RlckNvbnRhaW5lciIsInN0eWxlZCIsIm1vdGlvbiIsImZvb3RlciIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJfcmVmMiIsInJlZCIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNBO0FBQzBCO0FBRTFELE1BQU1BLGVBQWUsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsTUFBTSxDQUFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0JDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFVBQVU7QUFBQTtBQUM1RCxXQUFXQyxLQUFBO0VBQUEsSUFBQztJQUFFSDtFQUFNLENBQUMsR0FBQUcsS0FBQTtFQUFBLE9BQUtILEtBQUssQ0FBQ0MsTUFBTSxDQUFDRyxHQUFHO0FBQUE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsc0VBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUUEsc0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWVDLEtBQUE7RUFBQSxJQUFDO0lBQUVOO0VBQU0sQ0FBQyxHQUFBTSxLQUFBO0VBQUEsT0FBS04sS0FBSyxDQUFDQyxNQUFNLENBQUNHLEdBQUc7QUFBQTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTRmMDI0ZWY5MjdiZTY3NmVhMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5mb290ZXIpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvLyBDZW50ZXIgaXRlbXMgaG9yaXpvbnRhbGx5XG4gIG1hcmdpbi1sZWZ0OiAzLjMzJTtcbiAgcGFkZGluZzogNDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcblxuICAmIC5sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgLy8gQ2VudGVyIGxvZ29cbiAgfVxuXG4gICYgLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vIENlbnRlciBkZXNjcmlwdGlvblxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICB9XG5cbiAgJiAuY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDsgLy8gQWxsb3cgd3JhcHBpbmcgb24gc21hbGxlciBzY3JlZW5zXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvLyBBbGlnbiBpdGVtcyB0byB0aGUgc3RhcnRcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4OyAvLyBMaW1pdCB0aGUgd2lkdGggZm9yIGJldHRlciByZWFkYWJpbGl0eVxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAmIC5jb2x1bW4ge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy8gQ2VudGVyIHRleHQgaW4gY29sdW1uc1xuICAgICAgJHtzZWNvbmRhcnlGb250U3R5bGV9OyAvLyBJbmNsdWRlIHNlY29uZGFyeSBmb250IHN0eWxlXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvLyBBZGQgc3BhY2luZyBiZXR3ZWVuIHJvd3Mgb24gc21hbGxlciBzY3JlZW5zXG4gICAgfVxuICB9XG5cbiAgJiAuZm9vdGVyLWxpbmtzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vIENlbnRlciBmb290ZXIgbGlua3NcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgJiBhIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9OyAvLyBMaW5rIGNvbG9yXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8vIFJlbW92ZSB1bmRlcmxpbmVcbiAgICAgIG1hcmdpbjogMCAxMHB4OyAvLyBTcGFjaW5nIGJldHdlZW4gbGlua3NcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvLyBVbmRlcmxpbmUgb24gaG92ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmIC5zb2NpYWwtbWVkaWEge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyAvLyBDZW50ZXIgc29jaWFsIG1lZGlhXG4gIH1cblxuICAmIC5mb290ZXItbm90ZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgLy8gQ2VudGVyIGZvb3RlciBub3RlXG4gIH1cblxuICAvLyBNZWRpYSBxdWVyaWVzIGZvciByZXNwb25zaXZlIGRlc2lnblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG5cbiAgICAmIC5jb250YWN0LWluZm8ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLy8gU3RhY2sgY29sdW1ucyBvbiBzbWFsbGVyIHNjcmVlbnNcbiAgICB9XG5cbiAgICAmIC5jb2x1bW4ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsgLy8gQWRqdXN0IHNwYWNpbmcgZm9yIHNtYWxsZXIgc2NyZWVuc1xuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
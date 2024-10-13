webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/Contact/styles.js":
/*!*******************************************!*\
  !*** ./components/Home/Contact/styles.js ***!
  \*******************************************/
/*! exports provided: ContactSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSection", function() { return ContactSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");




const ContactSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  display: flex;
  align-items: center; /* Align to the top */
  justify-content: center; /* Space between columns */
  margin-bottom: 200px; /* Bottom margin */
  margin-right: 13.33%
  width: 100%; /* Full width */
  color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.red;
}};

  & .column {
    width: 33.333%; /* Default width for larger screens */
    
    
    &:last-child {
      justify-content: flex-center; /* Align last column to start */
    }

    & a {
      ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
      line-height: 28px; /* Maintain consistent line height */
      display: inline-block;
      color: inherit; /* Inherit color */
      
      &:hover {
        color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}}; /* Change color on hover */
      }
    }
  }

  & address {
    padding: 0 8px; /* Padding for address */
  }

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.medium`
    width: 80%; /* Adjust width for medium screens */

    & .column {
      width: 41.666%; /* Adjust column widths */
    }
  `;
}};

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.small`
    flex-direction: column; /* Stack columns on small screens */
    align-items: flex-start; /* Align items to start */
    width: 100%; /* Full width */

    & .column {
      width: 100%; /* Full width for each column */
      margin-bottom: 20px; /* Spacing between stacked columns */

      &:last-child {
        margin-bottom: 0; /* Remove margin for last column */
      }
    }

    & address {
      padding: 0; /* Remove padding for small screens */
    }
  `;
}};

  ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.breakpoints.tablet`
    padding: 0 0 60px; /* Adjust padding for tablet screens */

    & .column {
      padding: 0 10px; /* Add padding for columns on tablet */
    }
  `;
}};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYyIiwidGV4dCIsIl9yZWYzIiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJfcmVmNCIsInNtYWxsIiwiX3JlZjUiLCJ0YWJsZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUN3QjtBQUNFO0FBRTFELE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3BELElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVdDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVFDLHNFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCQyxLQUFBO0VBQUEsSUFBQztJQUFFSjtFQUFNLENBQUMsR0FBQUksS0FBQTtFQUFBLE9BQUtKLEtBQUssQ0FBQ0ssSUFBSTtBQUFBO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQyxLQUFBO0VBQUEsSUFBQztJQUFFTjtFQUFNLENBQUMsR0FBQU0sS0FBQTtFQUFBLE9BQUtOLEtBQUssQ0FBQ08sV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUlDLEtBQUE7RUFBQSxJQUFDO0lBQUVUO0VBQU0sQ0FBQyxHQUFBUyxLQUFBO0VBQUEsT0FBS1QsS0FBSyxDQUFDTyxXQUFXLENBQUNHLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUlDLEtBQUE7RUFBQSxJQUFDO0lBQUVYO0VBQU0sQ0FBQyxHQUFBVyxLQUFBO0VBQUEsT0FBS1gsS0FBSyxDQUFDTyxXQUFXLENBQUNLLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ3ZjZjNjYwNjZlNTU4ZTljOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQWxpZ24gdG8gdGhlIHRvcCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogU3BhY2UgYmV0d2VlbiBjb2x1bW5zICovXG4gIG1hcmdpbi1ib3R0b206IDIwMHB4OyAvKiBCb3R0b20gbWFyZ2luICovXG4gIG1hcmdpbi1yaWdodDogMTMuMzMlXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICYgLmNvbHVtbiB7XG4gICAgd2lkdGg6IDMzLjMzMyU7IC8qIERlZmF1bHQgd2lkdGggZm9yIGxhcmdlciBzY3JlZW5zICovXG4gICAgXG4gICAgXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1jZW50ZXI7IC8qIEFsaWduIGxhc3QgY29sdW1uIHRvIHN0YXJ0ICovXG4gICAgfVxuXG4gICAgJiBhIHtcbiAgICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4OyAvKiBNYWludGFpbiBjb25zaXN0ZW50IGxpbmUgaGVpZ2h0ICovXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjb2xvcjogaW5oZXJpdDsgLyogSW5oZXJpdCBjb2xvciAqL1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07IC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgYWRkcmVzcyB7XG4gICAgcGFkZGluZzogMCA4cHg7IC8qIFBhZGRpbmcgZm9yIGFkZHJlc3MgKi9cbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubWVkaXVtYFxuICAgIHdpZHRoOiA4MCU7IC8qIEFkanVzdCB3aWR0aCBmb3IgbWVkaXVtIHNjcmVlbnMgKi9cblxuICAgICYgLmNvbHVtbiB7XG4gICAgICB3aWR0aDogNDEuNjY2JTsgLyogQWRqdXN0IGNvbHVtbiB3aWR0aHMgKi9cbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgY29sdW1ucyBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHN0YXJ0ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cblxuICAgICYgLmNvbHVtbiB7XG4gICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgZWFjaCBjb2x1bW4gKi9cbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIFNwYWNpbmcgYmV0d2VlbiBzdGFja2VkIGNvbHVtbnMgKi9cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgLyogUmVtb3ZlIG1hcmdpbiBmb3IgbGFzdCBjb2x1bW4gKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIGFkZHJlc3Mge1xuICAgICAgcGFkZGluZzogMDsgLyogUmVtb3ZlIHBhZGRpbmcgZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHBhZGRpbmc6IDAgMCA2MHB4OyAvKiBBZGp1c3QgcGFkZGluZyBmb3IgdGFibGV0IHNjcmVlbnMgKi9cblxuICAgICYgLmNvbHVtbiB7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBjb2x1bW5zIG9uIHRhYmxldCAqL1xuICAgIH1cbiAgYH07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
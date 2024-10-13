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
  margin-left: 23.33%
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
      justify-content: flex-start; /* Align last column to start */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYyIiwidGV4dCIsIl9yZWYzIiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJfcmVmNCIsInNtYWxsIiwiX3JlZjUiLCJ0YWJsZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUN3QjtBQUNFO0FBRTFELE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3BELElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVdDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRQyxzRUFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQkMsS0FBQTtFQUFBLElBQUM7SUFBRUo7RUFBTSxDQUFDLEdBQUFJLEtBQUE7RUFBQSxPQUFLSixLQUFLLENBQUNLLElBQUk7QUFBQTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRU47RUFBTSxDQUFDLEdBQUFNLEtBQUE7RUFBQSxPQUFLTixLQUFLLENBQUNPLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJQyxLQUFBO0VBQUEsSUFBQztJQUFFVDtFQUFNLENBQUMsR0FBQVMsS0FBQTtFQUFBLE9BQUtULEtBQUssQ0FBQ08sV0FBVyxDQUFDRyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJQyxLQUFBO0VBQUEsSUFBQztJQUFFWDtFQUFNLENBQUMsR0FBQVcsS0FBQTtFQUFBLE9BQUtYLEtBQUssQ0FBQ08sV0FBVyxDQUFDSyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwNzU5MjRiNWU3NGJhOTNmODRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFjdFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICAke2NvbnRhaW5lclN0eWxlc307XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEFsaWduIHRvIHRoZSB0b3AgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIFNwYWNlIGJldHdlZW4gY29sdW1ucyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDsgLyogQm90dG9tIG1hcmdpbiAqL1xuICBtYXJnaW4tbGVmdDogMjMuMzMlXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICYgLmNvbHVtbiB7XG4gICAgd2lkdGg6IDMzLjMzMyU7IC8qIERlZmF1bHQgd2lkdGggZm9yIGxhcmdlciBzY3JlZW5zICovXG4gICAgXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgLyogQWxpZ24gbGFzdCBjb2x1bW4gdG8gc3RhcnQgKi9cbiAgICB9XG5cbiAgICAmIGEge1xuICAgICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7IC8qIE1haW50YWluIGNvbnNpc3RlbnQgbGluZSBoZWlnaHQgKi9cbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGNvbG9yOiBpbmhlcml0OyAvKiBJbmhlcml0IGNvbG9yICovXG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTsgLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiBhZGRyZXNzIHtcbiAgICBwYWRkaW5nOiAwIDhweDsgLyogUGFkZGluZyBmb3IgYWRkcmVzcyAqL1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tZWRpdW1gXG4gICAgd2lkdGg6IDgwJTsgLyogQWRqdXN0IHdpZHRoIGZvciBtZWRpdW0gc2NyZWVucyAqL1xuXG4gICAgJiAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiA0MS42NjYlOyAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBjb2x1bW5zIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gaXRlbXMgdG8gc3RhcnQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuXG4gICAgJiAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBlYWNoIGNvbHVtbiAqL1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2luZyBiZXR3ZWVuIHN0YWNrZWQgY29sdW1ucyAqL1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyAvKiBSZW1vdmUgbWFyZ2luIGZvciBsYXN0IGNvbHVtbiAqL1xuICAgICAgfVxuICAgIH1cblxuICAgICYgYWRkcmVzcyB7XG4gICAgICBwYWRkaW5nOiAwOyAvKiBSZW1vdmUgcGFkZGluZyBmb3Igc21hbGwgc2NyZWVucyAqL1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgcGFkZGluZzogMCAwIDYwcHg7IC8qIEFkanVzdCBwYWRkaW5nIGZvciB0YWJsZXQgc2NyZWVucyAqL1xuXG4gICAgJiAuY29sdW1uIHtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDsgLyogQWRkIHBhZGRpbmcgZm9yIGNvbHVtbnMgb24gdGFibGV0ICovXG4gICAgfVxuICBgfTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9
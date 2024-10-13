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
  flex-direction: row; /* Align items in a row */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  margin-bottom: 200px; /* Bottom margin */
  width: 100%; /* Full width */
  color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.red;
}};

  & .column {
    display: flex; /* Ensure column contents can be centered */
    flex-direction: column; /* Stack content vertically */
    align-items: center; /* Center items within the column */
    width: 33.333%; /* Each column takes a third of the width */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYyIiwidGV4dCIsIl9yZWYzIiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJfcmVmNCIsInNtYWxsIiwiX3JlZjUiLCJ0YWJsZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUN3QjtBQUNFO0FBRTFELE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3BELElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVdDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUUMsc0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUJDLEtBQUE7RUFBQSxJQUFDO0lBQUVKO0VBQU0sQ0FBQyxHQUFBSSxLQUFBO0VBQUEsT0FBS0osS0FBSyxDQUFDSyxJQUFJO0FBQUE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLEtBQUE7RUFBQSxJQUFDO0lBQUVOO0VBQU0sQ0FBQyxHQUFBTSxLQUFBO0VBQUEsT0FBS04sS0FBSyxDQUFDTyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUlDLEtBQUE7RUFBQSxJQUFDO0lBQUVUO0VBQU0sQ0FBQyxHQUFBUyxLQUFBO0VBQUEsT0FBS1QsS0FBSyxDQUFDTyxXQUFXLENBQUNHLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUlDLEtBQUE7RUFBQSxJQUFDO0lBQUVYO0VBQU0sQ0FBQyxHQUFBVyxLQUFBO0VBQUEsT0FBS1gsS0FBSyxDQUFDTyxXQUFXLENBQUNLLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhM2Q3N2YzMjJlYzFhMGJkYmM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFjdFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICAke2NvbnRhaW5lclN0eWxlc307XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIEFsaWduIGl0ZW1zIGluIGEgcm93ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciBpdGVtcyB2ZXJ0aWNhbGx5ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgaG9yaXpvbnRhbGx5ICovXG4gIG1hcmdpbi1ib3R0b206IDIwMHB4OyAvKiBCb3R0b20gbWFyZ2luICovXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICYgLmNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDsgLyogRW5zdXJlIGNvbHVtbiBjb250ZW50cyBjYW4gYmUgY2VudGVyZWQgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBjb250ZW50IHZlcnRpY2FsbHkgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgd2l0aGluIHRoZSBjb2x1bW4gKi9cbiAgICB3aWR0aDogMzMuMzMzJTsgLyogRWFjaCBjb2x1bW4gdGFrZXMgYSB0aGlyZCBvZiB0aGUgd2lkdGggKi9cblxuICAgICYgYSB7XG4gICAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gICAgICBsaW5lLWhlaWdodDogMjhweDsgLyogTWFpbnRhaW4gY29uc2lzdGVudCBsaW5lIGhlaWdodCAqL1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY29sb3I6IGluaGVyaXQ7IC8qIEluaGVyaXQgY29sb3IgKi9cbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9OyAvKiBDaGFuZ2UgY29sb3Igb24gaG92ZXIgKi9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmIGFkZHJlc3Mge1xuICAgIHBhZGRpbmc6IDAgOHB4OyAvKiBQYWRkaW5nIGZvciBhZGRyZXNzICovXG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcbiAgICB3aWR0aDogODAlOyAvKiBBZGp1c3Qgd2lkdGggZm9yIG1lZGl1bSBzY3JlZW5zICovXG4gICAgJiAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiA0MS42NjYlOyAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBjb2x1bW5zIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gaXRlbXMgdG8gc3RhcnQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuXG4gICAgJiAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBlYWNoIGNvbHVtbiAqL1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2luZyBiZXR3ZWVuIHN0YWNrZWQgY29sdW1ucyAqL1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyAvKiBSZW1vdmUgbWFyZ2luIGZvciBsYXN0IGNvbHVtbiAqL1xuICAgICAgfVxuICAgIH1cblxuICAgICYgYWRkcmVzcyB7XG4gICAgICBwYWRkaW5nOiAwOyAvKiBSZW1vdmUgcGFkZGluZyBmb3Igc21hbGwgc2NyZWVucyAqL1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgcGFkZGluZzogMCAwIDYwcHg7IC8qIEFkanVzdCBwYWRkaW5nIGZvciB0YWJsZXQgc2NyZWVucyAqL1xuICAgICYgLmNvbHVtbiB7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBjb2x1bW5zIG9uIHRhYmxldCAqL1xuICAgIH1cbiAgYH07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
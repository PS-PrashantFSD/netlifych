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
  align-items: flex-start; /* Align text to the top */
  justify-content: flex-start; /* Align columns to start */
  margin-bottom: 200px; /* Adjust for spacing */
  color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.red;
}};
  width: 100%; /* Full width for better responsiveness */
  transform: translate3d(0, 60px, 0);

  & .column {
    width: 33.333%; /* Initial width for larger screens */
    
    &:last-child {
      justify-content: flex-start; /* Align last column to the start */
    }
  }

  & .contact-text {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
    line-height: 28px;
    display: inline-block;
  }

  & address {
    padding: 0 8px;
  }

  ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.breakpoints.medium`
    width: 80%; /* Adjust width for medium screens */

    & .column {
      width: 41.666%; /* Adjust column widths */
    }
  `;
}};

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.small`
    flex-direction: column; /* Stack columns on small screens */
    align-items: flex-start; /* Align items to start */
    width: 100%; /* Full width */

    & .column {
      width: 100%; /* Full width for each column */
      margin-bottom: 20px; /* Add spacing between stacked columns */

      &:last-child {
        margin-bottom: 0; /* Remove margin for last column */
      }
    }

    & address {
      padding: 0; /* Remove padding for small screens */
    }
  `;
}};

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.tablet`
    padding: 0 0 60px; /* Adjust padding for tablet screens */

    & address {
      padding: 17px 0 42px; /* Adjust address padding */
    }

    & .contact-text {
      font-size: 1.125rem; /* Adjust font size */
      line-height: 21px; /* Adjust line height */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsInJlZCIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYyIiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJfcmVmMyIsInNtYWxsIiwiX3JlZjQiLCJ0YWJsZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUN3QjtBQUNFO0FBRTFELE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3BELElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBV0MsSUFBQTtFQUFBLElBQUM7SUFBRUM7RUFBTSxDQUFDLEdBQUFELElBQUE7RUFBQSxPQUFLQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRztBQUFBO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLHNFQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRUo7RUFBTSxDQUFDLEdBQUFJLEtBQUE7RUFBQSxPQUFLSixLQUFLLENBQUNLLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJQyxLQUFBO0VBQUEsSUFBQztJQUFFUDtFQUFNLENBQUMsR0FBQU8sS0FBQTtFQUFBLE9BQUtQLEtBQUssQ0FBQ0ssV0FBVyxDQUFDRyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJQyxLQUFBO0VBQUEsSUFBQztJQUFFVDtFQUFNLENBQUMsR0FBQVMsS0FBQTtFQUFBLE9BQUtULEtBQUssQ0FBQ0ssV0FBVyxDQUFDSyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NzI5NGYyOGNmNDM4ODRlMjhiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcblxuZXhwb3J0IGNvbnN0IENvbnRhY3RTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gdGV4dCB0byB0aGUgdG9wICovXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgLyogQWxpZ24gY29sdW1ucyB0byBzdGFydCAqL1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDsgLyogQWRqdXN0IGZvciBzcGFjaW5nICovXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgYmV0dGVyIHJlc3BvbnNpdmVuZXNzICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XG5cbiAgJiAuY29sdW1uIHtcbiAgICB3aWR0aDogMzMuMzMzJTsgLyogSW5pdGlhbCB3aWR0aCBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cbiAgICBcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBsYXN0IGNvbHVtbiB0byB0aGUgc3RhcnQgKi9cbiAgICB9XG4gIH1cblxuICAmIC5jb250YWN0LXRleHQge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAmIGFkZHJlc3Mge1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tZWRpdW1gXG4gICAgd2lkdGg6IDgwJTsgLyogQWRqdXN0IHdpZHRoIGZvciBtZWRpdW0gc2NyZWVucyAqL1xuXG4gICAgJiAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiA0MS42NjYlOyAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBjb2x1bW5zIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gaXRlbXMgdG8gc3RhcnQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuXG4gICAgJiAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBlYWNoIGNvbHVtbiAqL1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRkIHNwYWNpbmcgYmV0d2VlbiBzdGFja2VkIGNvbHVtbnMgKi9cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgLyogUmVtb3ZlIG1hcmdpbiBmb3IgbGFzdCBjb2x1bW4gKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIGFkZHJlc3Mge1xuICAgICAgcGFkZGluZzogMDsgLyogUmVtb3ZlIHBhZGRpbmcgZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHBhZGRpbmc6IDAgMCA2MHB4OyAvKiBBZGp1c3QgcGFkZGluZyBmb3IgdGFibGV0IHNjcmVlbnMgKi9cblxuICAgICYgYWRkcmVzcyB7XG4gICAgICBwYWRkaW5nOiAxN3B4IDAgNDJweDsgLyogQWRqdXN0IGFkZHJlc3MgcGFkZGluZyAqL1xuICAgIH1cblxuICAgICYgLmNvbnRhY3QtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtOyAvKiBBZGp1c3QgZm9udCBzaXplICovXG4gICAgICBsaW5lLWhlaWdodDogMjFweDsgLyogQWRqdXN0IGxpbmUgaGVpZ2h0ICovXG4gICAgfVxuICBgfTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9
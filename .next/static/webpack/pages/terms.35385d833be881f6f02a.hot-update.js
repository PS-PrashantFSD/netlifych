webpackHotUpdate_N_E("pages/terms",{

/***/ "./components/Home/Contacts/styles.js":
/*!********************************************!*\
  !*** ./components/Home/Contacts/styles.js ***!
  \********************************************/
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
  align-items: center;
  justify-content: space-between;
  padding: 0 0px 200px;
  color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.red;
}};
  /* opacity: 1; */
  transform: translate3d(0, 60px, 0);
  /* transition: opacity 1s ease, transform 1s cubic-bezier(0, 0.7, 0.29, 0.97);
  transition-delay: 0.3s; */
  /* will-change: opacity, transform; */
  width: 100%;

  & .column {
    width: 33.333%;

    &:last-child {
      justify-content: flex-end;
    }

    & a:hover {
      color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}};
    }
  }

  & .contact-text {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
    line-height: 28px;
    display: inline-block;
    display:block
    align-item: flex-start;
  }

  & address {
    padding: 0 8px;
  }

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.medium`
    & .column {
      width: 41.666%;

      &:last-child {
        width: 16.666%;
      }
    }
  `;
}};

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    & .column {
      width: 100%;

      &:last-child {
        width: 100%;
        justify-content: flex-start;
        padding: 1px 0;
      }
    }

    & address {
      padding: 0;
    }
  `;
}};

  ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.breakpoints.tablet`
    padding: 0 0px 60px;

    & address {
      padding: 17px 0 42px;
    }

    & .contact-text {
      font-size: 1.125rem;
      line-height: 21px;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250YWN0U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJjb2xvcnMiLCJyZWQiLCJfcmVmMiIsInRleHQiLCJzZWNvbmRhcnlGb250U3R5bGUiLCJfcmVmMyIsImJyZWFrcG9pbnRzIiwibWVkaXVtIiwiX3JlZjQiLCJzbWFsbCIsIl9yZWY1IiwidGFibGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0E7QUFDd0I7QUFDRTtBQUUxRCxNQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUNwRCxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVdDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlQyxLQUFBO0VBQUEsSUFBQztJQUFFSDtFQUFNLENBQUMsR0FBQUcsS0FBQTtFQUFBLE9BQUtILEtBQUssQ0FBQ0ksSUFBSTtBQUFBO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsc0VBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRU47RUFBTSxDQUFDLEdBQUFNLEtBQUE7RUFBQSxPQUFLTixLQUFLLENBQUNPLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNIO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRVQ7RUFBTSxDQUFDLEdBQUFTLEtBQUE7RUFBQSxPQUFLVCxLQUFLLENBQUNPLFdBQVcsQ0FBQ0csS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUlDLEtBQUE7RUFBQSxJQUFDO0lBQUVYO0VBQU0sQ0FBQyxHQUFBVyxLQUFBO0VBQUEsT0FBS1gsS0FBSyxDQUFDTyxXQUFXLENBQUNLLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlcm1zLjM1Mzg1ZDgzM2JlODgxZjZmMDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhY3RTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDBweCAyMDBweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuICAvKiBvcGFjaXR5OiAxOyAqL1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XHJcbiAgLyogdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAuNywgMC4yOSwgMC45Nyk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zczsgKi9cclxuICAvKiB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDMzLjMzMyU7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAmIGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmNvbnRhY3QtdGV4dCB7XHJcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGRpc3BsYXk6YmxvY2tcclxuICAgIGFsaWduLWl0ZW06IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAmIGFkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiA0MS42NjYlO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJiAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgYWRkcmVzcyB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgcGFkZGluZzogMCAwcHggNjBweDtcclxuXHJcbiAgICAmIGFkZHJlc3Mge1xyXG4gICAgICBwYWRkaW5nOiAxN3B4IDAgNDJweDtcclxuICAgIH1cclxuXHJcbiAgICAmIC5jb250YWN0LXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
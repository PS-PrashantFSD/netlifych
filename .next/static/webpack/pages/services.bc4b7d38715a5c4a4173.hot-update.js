webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Home/Services/styles.js":
/*!********************************************!*\
  !*** ./components/Home/Services/styles.js ***!
  \********************************************/
/*! exports provided: ContentSection, ProjectAnchor, ProjectInfo, ProjectTitle, AboutDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAnchor", function() { return ProjectAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfo", function() { return ProjectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTitle", function() { return ProjectTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDescription", function() { return AboutDescription; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../styles/shared/text */ "./styles/shared/text.js");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MenuButton */ "./components/MenuButton/index.js");





const ContentSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  position: relative;
  display: block;
  margin-top: 200px;

  ${_ref => {
  let {
    theme
  } = _ref;
  return theme.breakpoints.tablet`
    margin-top: 100px;
    flex-direction: row; /* Change to row on larger screens */
  `;
}};
`;
const ProjectAnchor = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].a)`
  display: block;
  width: 100%;
  height: 480px;
  margin: 0 0 50px; /* Adjusted margin-bottom for less gap */

  ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.breakpoints.tablet`
    height: 190px;
    margin-bottom: 20px; /* Adjusted margin-bottom for tablet view */
  `;
}};
`;
const ProjectInfo = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  margin-left: 8.333%;
  width: 83.333%;
  position: relative;

  & h3,
  & .project-info {
    position: absolute;
    top: 75px;
    z-index: 1;
    padding-left: 20px;
  }

  & h3 {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
  }

  & .project-info {
    right: 0;

    & h4 {
      ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
      display: inline-block;
      font-size: 0.875rem;
      line-height: 23px;
      margin-left: 32px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.small`
    margin-left: 0;
    width: 83.333%;

    & .project-info {
      display: none;
    }
  `;
}};

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.tablet`
    & h3 {
      font-size: 1.125rem;
      line-height: 1.2777777778;
      top: 17px;
    }
  `;
}};
`;
const ProjectTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].h1)`
  position: absolute;
  top: 300px; /* Adjusted margin to match your request */
  left: -3px;
  z-index: 1;

  & .arrow {
    display: block;
    overflow: hidden;
    margin: 25px 0 0 3px;
    height: 57px;
    width: 101px;

    & svg path {
      fill: ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.text;
}};
    }
  }

  ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.breakpoints.tablet`
    top: 130px; /* Adjusted for tablet view */
    left: 0;
    font-size: 3.75rem;
    line-height: 0.7166666667;

    & .arrow {
      margin: 10px 0 0 2px;
      width: 76.19px;
      height: 43px;
    }
  `;
}};
`;
const AboutDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex: 1; /* Take up available space */
  padding-top: 120px; /* Reduced padding to decrease space */
  margin-bottom: 100px;
  font-size: 1.8rem; /* Increase font size */
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  text-align: left; /* Align text to the left */

  & h2 {
    margin: 0; /* Remove default margin */
  }

  ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.breakpoints.tablet`
    font-size: 1rem; /* Adjust font size for smaller screens */
  `;
}};
`;

// Other styled components remain unchanged

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJicmVha3BvaW50cyIsInRhYmxldCIsIlByb2plY3RBbmNob3IiLCJhIiwiX3JlZjIiLCJQcm9qZWN0SW5mbyIsImRpdiIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYzIiwic21hbGwiLCJfcmVmNCIsIlByb2plY3RUaXRsZSIsImgxIiwiX3JlZjUiLCJ0ZXh0IiwiX3JlZjYiLCJBYm91dERlc2NyaXB0aW9uIiwiX3JlZjciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0E7QUFDd0I7QUFDSTtBQUNsQjtBQUUxQyxNQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUNwRCxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUM7QUFFTSxNQUFNQyxhQUFhLEdBQUdSLGlFQUFNLENBQUNDLG9EQUFNLENBQUNRLENBQUMsQ0FBQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRUw7RUFBTSxDQUFDLEdBQUFLLEtBQUE7RUFBQSxPQUFLTCxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQztBQUVNLE1BQU1JLFdBQVcsR0FBR1gsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ1csR0FBRyxDQUFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsc0VBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVFBLHNFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsS0FBQTtFQUFBLElBQUM7SUFBRVQ7RUFBTSxDQUFDLEdBQUFTLEtBQUE7RUFBQSxPQUFLVCxLQUFLLENBQUNDLFdBQVcsQ0FBQ1MsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUlDLEtBQUE7RUFBQSxJQUFDO0lBQUVYO0VBQU0sQ0FBQyxHQUFBVyxLQUFBO0VBQUEsT0FBS1gsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUM7QUFFTSxNQUFNVSxZQUFZLEdBQUdqQixpRUFBTSxDQUFDQyxvREFBTSxDQUFDaUIsRUFBRSxDQUFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBY0MsS0FBQTtFQUFBLElBQUM7SUFBRWQ7RUFBTSxDQUFDLEdBQUFjLEtBQUE7RUFBQSxPQUFLZCxLQUFLLENBQUNlLElBQUk7QUFBQTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJQyxLQUFBO0VBQUEsSUFBQztJQUFFaEI7RUFBTSxDQUFDLEdBQUFnQixLQUFBO0VBQUEsT0FBS2hCLEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQztBQUVNLE1BQU1lLGdCQUFnQixHQUFHdEIseURBQU0sQ0FBQ1ksR0FBRztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlXLEtBQUE7RUFBQSxJQUFDO0lBQUVsQjtFQUFNLENBQUMsR0FBQWtCLEtBQUE7RUFBQSxPQUFLbEIsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZpY2VzLmJjNGI3ZDM4NzE1YTVjNGE0MTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XHJcbmltcG9ydCBEZWZhdWx0TWVudUJ1dHRvbiBmcm9tICcuLi8uLi9NZW51QnV0dG9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIENoYW5nZSB0byByb3cgb24gbGFyZ2VyIHNjcmVlbnMgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0QW5jaG9yID0gc3R5bGVkKG1vdGlvbi5hKWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIG1hcmdpbjogMCAwIDUwcHg7IC8qIEFkanVzdGVkIG1hcmdpbi1ib3R0b20gZm9yIGxlc3MgZ2FwICovXHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFkanVzdGVkIG1hcmdpbi1ib3R0b20gZm9yIHRhYmxldCB2aWV3ICovXHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdEluZm8gPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgbWFyZ2luLWxlZnQ6IDguMzMzJTtcclxuICB3aWR0aDogODMuMzMzJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYgaDMsXHJcbiAgJiAucHJvamVjdC1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmIGgzIHtcclxuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcclxuICB9XHJcblxyXG4gICYgLnByb2plY3QtaW5mbyB7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICAmIGg0IHtcclxuICAgICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogODMuMzMzJTtcclxuXHJcbiAgICAmIC5wcm9qZWN0LWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgICYgaDMge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xyXG4gICAgICB0b3A6IDE3cHg7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFRpdGxlID0gc3R5bGVkKG1vdGlvbi5oMSlgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAwcHg7IC8qIEFkanVzdGVkIG1hcmdpbiB0byBtYXRjaCB5b3VyIHJlcXVlc3QgKi9cclxuICBsZWZ0OiAtM3B4O1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gICYgLmFycm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMjVweCAwIDAgM3B4O1xyXG4gICAgaGVpZ2h0OiA1N3B4O1xyXG4gICAgd2lkdGg6IDEwMXB4O1xyXG5cclxuICAgICYgc3ZnIHBhdGgge1xyXG4gICAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICB0b3A6IDEzMHB4OyAvKiBBZGp1c3RlZCBmb3IgdGFibGV0IHZpZXcgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmb250LXNpemU6IDMuNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMC43MTY2NjY2NjY3O1xyXG5cclxuICAgICYgLmFycm93IHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDAgMCAycHg7XHJcbiAgICAgIHdpZHRoOiA3Ni4xOXB4O1xyXG4gICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXREZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTsgLyogVGFrZSB1cCBhdmFpbGFibGUgc3BhY2UgKi9cclxuICBwYWRkaW5nLXRvcDogMTIwcHg7IC8qIFJlZHVjZWQgcGFkZGluZyB0byBkZWNyZWFzZSBzcGFjZSAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtOyAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cclxuICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBBbGlnbiB0ZXh0IHRvIHRoZSBsZWZ0ICovXHJcblxyXG4gICYgaDIge1xyXG4gICAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgZm9udC1zaXplOiAxcmVtOyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbi8vIE90aGVyIHN0eWxlZCBjb21wb25lbnRzIHJlbWFpbiB1bmNoYW5nZWRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
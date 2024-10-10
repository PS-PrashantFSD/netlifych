webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Home/Services/styles.js":
/*!********************************************!*\
  !*** ./components/Home/Services/styles.js ***!
  \********************************************/
/*! exports provided: ContentSection, ProjectAnchor, ProjectInfo, ProjectTitle, ImagePreview, AboutDescription, VideoPreview, MenuContainer, MenuButton, TextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAnchor", function() { return ProjectAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfo", function() { return ProjectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTitle", function() { return ProjectTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return ImagePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDescription", function() { return AboutDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPreview", function() { return VideoPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MenuButton */ "./components/MenuButton/index.js");





const ContentSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  position: relative;
  display : block;
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
  width: 0%;
  height: 350px;
  margin: 0; /* Adjusted margin-bottom for less gap */

  ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.breakpoints.tablet`
    height: 190px;
    
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
  top: 30px;
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
    top: 30px;
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
const ImagePreview = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 480px; /* Adjust as needed */

  & img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
  }

  ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.breakpoints.tablet`
    height: 190px; /* Adjust for tablet view */
  `;
}};
`;
const AboutDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex: 1; /* Take up available space */
  padding: 120px 60px 160px 360px; /* Reduced padding to decrease space */
  margin-bottom: 40px;
  font-size: 1.8rem; /* Increase font size */
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  text-align: left; /* Align text to the left */

  & h2 {
    margin: 0; /* Remove default margin */
  }

  ${_ref8 => {
  let {
    theme
  } = _ref8;
  return theme.breakpoints.tablet`
    font-size: 1rem; /* Adjust font size for smaller screens */
    padding: 50px;
  `;
}};
`;
const VideoPreview = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 480px;
  margin: 0;

  & video {
    width: 100%;
  }

  ${_ref9 => {
  let {
    theme
  } = _ref9;
  return theme.breakpoints.small`
    width: calc(100% + 64px);
    margin-left: -32px;
  `;
}};

  ${_ref10 => {
  let {
    theme
  } = _ref10;
  return theme.breakpoints.tablet`
    height: 190px;
  `;
}};
`;
const MenuContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${_ref11 => {
  let {
    theme
  } = _ref11;
  return theme.breakpoints.tablet`
    justify-content: flex-start;
  `;
}};
`;
const MenuButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_MenuButton__WEBPACK_IMPORTED_MODULE_4__["default"])`
  width: calc(25% - 30px);
  background-color: ${_ref12 => {
  let {
    theme
  } = _ref12;
  return theme.colors.red;
}};

  &::before,
  &::after {
    background: ${_ref13 => {
  let {
    theme
  } = _ref13;
  return theme.background;
}};
  }

  & span {
    position: relative;
    opacity: 1;
    right: 0;
    color: ${_ref14 => {
  let {
    theme
  } = _ref14;
  return theme.background;
}};
  }

  ${_ref15 => {
  let {
    theme
  } = _ref15;
  return theme.breakpoints.medium`
    width: calc(33.333% - 30px);
  `;
}};

  ${_ref16 => {
  let {
    theme
  } = _ref16;
  return theme.breakpoints.small`
    width: 100%;
    max-width: 235px;

    & span {
      display: inline;
    }
  `;
}};

  ${_ref17 => {
  let {
    theme
  } = _ref17;
  return theme.breakpoints.tablet`
    height: 47px;
    max-width: 215px;
    padding: 12px 20px;

    & span {
      font-size: 1.125rem;
      line-height: 1.2777777778;
    }
  `;
}};
`;
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center; /* Center the items vertically */
  justify-content: space-between; /* Space out the text and card */
  width: 100%;
  gap: 33px; /* Space between text and card */
  margin-bottom : 90px;

  & h2 {
    margin: 0;
    margin-bottom: 44px;
    max-width: 600px;
    font-size: 2.625rem;
    line-height: 1;
    font-weight: 500;
  }

  & p {
    max-width: 448px;
    margin: 6.9px 0;
    line-height: 1.2777777778;
  }

  ${_ref18 => {
  let {
    theme
  } = _ref18;
  return theme.breakpoints.small`
    flex-direction: column; /* Stack vertically on small screens */
    align-items: flex-start; /* Align items to the start on small screens */
    width: 100%;

    & h2 {
      margin-bottom: 20px; /* Adjust margin for smaller screens */
    }
  `;
}};

  ${_ref19 => {
  let {
    theme
  } = _ref19;
  return theme.breakpoints.tablet`
    & h2 {
      font-size: 1.5rem;
      margin-bottom: 34px;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJicmVha3BvaW50cyIsInRhYmxldCIsIlByb2plY3RBbmNob3IiLCJhIiwiX3JlZjIiLCJQcm9qZWN0SW5mbyIsImRpdiIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYzIiwic21hbGwiLCJfcmVmNCIsIlByb2plY3RUaXRsZSIsImgxIiwiX3JlZjUiLCJ0ZXh0IiwiX3JlZjYiLCJJbWFnZVByZXZpZXciLCJfcmVmNyIsIkFib3V0RGVzY3JpcHRpb24iLCJfcmVmOCIsIlZpZGVvUHJldmlldyIsIl9yZWY5IiwiX3JlZjEwIiwiTWVudUNvbnRhaW5lciIsIl9yZWYxMSIsIk1lbnVCdXR0b24iLCJEZWZhdWx0TWVudUJ1dHRvbiIsIl9yZWYxMiIsImNvbG9ycyIsInJlZCIsIl9yZWYxMyIsImJhY2tncm91bmQiLCJfcmVmMTQiLCJfcmVmMTUiLCJtZWRpdW0iLCJfcmVmMTYiLCJfcmVmMTciLCJUZXh0V3JhcHBlciIsIl9yZWYxOCIsIl9yZWYxOSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0E7QUFDd0I7QUFDRTtBQUNoQjtBQUUxQyxNQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUNwRCxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsSUFBQTtFQUFBLElBQUM7SUFBRUM7RUFBTSxDQUFDLEdBQUFELElBQUE7RUFBQSxPQUFLQyxLQUFLLENBQUNDLFdBQVcs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QUE7QUFDSDtBQUNBLElBQUlDLE1BQUE7RUFBQSxJQUFDO0lBQUVwQztFQUFNLENBQUMsR0FBQW9DLE1BQUE7RUFBQSxPQUFLcEMsS0FBSyxDQUFDQyxXQUFXLENBQUNTLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJMkIsTUFBQTtFQUFBLElBQUM7SUFBRXJDO0VBQU0sQ0FBQyxHQUFBcUMsTUFBQTtFQUFBLE9BQUtyQyxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQztBQUVNLE1BQU1vQyxXQUFXLEdBQUczQyx5REFBTSxDQUFDWSxHQUFHO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSWdDLE1BQUE7RUFBQSxJQUFDO0lBQUV2QztFQUFNLENBQUMsR0FBQXVDLE1BQUE7RUFBQSxPQUFLdkMsS0FBSyxDQUFDQyxXQUFXLENBQUNTLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUk4QixNQUFBO0VBQUEsSUFBQztJQUFFeEM7RUFBTSxDQUFDLEdBQUF3QyxNQUFBO0VBQUEsT0FBS3hDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy4xZWIzZDlhZmVmZDAxM2U2ZTY2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcbmltcG9ydCBEZWZhdWx0TWVudUJ1dHRvbiBmcm9tICcuLi8uLi9NZW51QnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXkgOiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIFxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIENoYW5nZSB0byByb3cgb24gbGFyZ2VyIHNjcmVlbnMgKi9cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdEFuY2hvciA9IHN0eWxlZChtb3Rpb24uYSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMzUwcHg7XG4gIG1hcmdpbjogMDsgLyogQWRqdXN0ZWQgbWFyZ2luLWJvdHRvbSBmb3IgbGVzcyBnYXAgKi9cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICAgIFxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SW5mbyA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgbWFyZ2luLWxlZnQ6IDguMzMzJTtcbiAgd2lkdGg6IDgzLjMzMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmIGgzLFxuICAmIC5wcm9qZWN0LWluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAmIGgzIHtcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIH1cblxuICAmIC5wcm9qZWN0LWluZm8ge1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgJiBoNCB7XG4gICAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDgzLjMzMyU7XG5cbiAgICAmIC5wcm9qZWN0LWluZm8ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgICYgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XG4gICAgICB0b3A6IDE3cHg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0VGl0bGUgPSBzdHlsZWQobW90aW9uLmgxKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IC0zcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgJiAuYXJyb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAyNXB4IDAgMCAzcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIHdpZHRoOiAxMDFweDtcblxuICAgICYgc3ZnIHBhdGgge1xuICAgICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICB9XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDMuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuNzE2NjY2NjY2NztcblxuICAgICYgLmFycm93IHtcbiAgICAgIG1hcmdpbjogMTBweCAwIDAgMnB4O1xuICAgICAgd2lkdGg6IDc2LjE5cHg7XG4gICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbWFnZVByZXZpZXcgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0ODBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuXG4gICYgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgaGVpZ2h0OiAxOTBweDsgLyogQWRqdXN0IGZvciB0YWJsZXQgdmlldyAqL1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBBYm91dERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTsgLyogVGFrZSB1cCBhdmFpbGFibGUgc3BhY2UgKi9cbiAgcGFkZGluZzogMTIwcHggNjBweCAxNjBweCAzNjBweDsgLyogUmVkdWNlZCBwYWRkaW5nIHRvIGRlY3JlYXNlIHNwYWNlICovXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZvbnQtc2l6ZTogMS44cmVtOyAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cbiAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gdGV4dCB0byB0aGUgbGVmdCAqL1xuXG4gICYgaDIge1xuICAgIG1hcmdpbjogMDsgLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBmb250LXNpemU6IDFyZW07IC8qIEFkanVzdCBmb250IHNpemUgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFZpZGVvUHJldmlldyA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBtYXJnaW46IDA7XG5cbiAgJiB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2NHB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGhlaWdodDogMTkwcHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZChEZWZhdWx0TWVudUJ1dHRvbilgXG4gIHdpZHRoOiBjYWxjKDI1JSAtIDMwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cblxuICAmIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tZWRpdW1gXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzJSAtIDMwcHgpO1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjM1cHg7XG5cbiAgICAmIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIG1heC13aWR0aDogMjE1cHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuXG4gICAgJiBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGl0ZW1zIHZlcnRpY2FsbHkgKi9cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBTcGFjZSBvdXQgdGhlIHRleHQgYW5kIGNhcmQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMzNweDsgLyogU3BhY2UgYmV0d2VlbiB0ZXh0IGFuZCBjYXJkICovXG4gIG1hcmdpbi1ib3R0b20gOiA5MHB4O1xuXG4gICYgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgZm9udC1zaXplOiAyLjYyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgJiBwIHtcbiAgICBtYXgtd2lkdGg6IDQ0OHB4O1xuICAgIG1hcmdpbjogNi45cHggMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayB2ZXJ0aWNhbGx5IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gaXRlbXMgdG8gdGhlIHN0YXJ0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYgaDIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRqdXN0IG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gICAgfVxuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICAmIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICB9XG4gIGB9O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
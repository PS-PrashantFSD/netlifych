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
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../styles/shared/text */ "./styles/shared/text.js");
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
  padding-top: 0px; /* Reduced padding to decrease space */
  margin-bottom: 100px;
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
  gap: 20px; /* Space between text and card */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJicmVha3BvaW50cyIsInRhYmxldCIsIlByb2plY3RBbmNob3IiLCJhIiwiX3JlZjIiLCJQcm9qZWN0SW5mbyIsImRpdiIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYzIiwic21hbGwiLCJfcmVmNCIsIlByb2plY3RUaXRsZSIsImgxIiwiX3JlZjUiLCJ0ZXh0IiwiX3JlZjYiLCJJbWFnZVByZXZpZXciLCJfcmVmNyIsIkFib3V0RGVzY3JpcHRpb24iLCJfcmVmOCIsIlZpZGVvUHJldmlldyIsIl9yZWY5IiwiX3JlZjEwIiwiTWVudUNvbnRhaW5lciIsIl9yZWYxMSIsIk1lbnVCdXR0b24iLCJEZWZhdWx0TWVudUJ1dHRvbiIsIl9yZWYxMiIsImNvbG9ycyIsInJlZCIsIl9yZWYxMyIsImJhY2tncm91bmQiLCJfcmVmMTQiLCJfcmVmMTUiLCJtZWRpdW0iLCJfcmVmMTYiLCJfcmVmMTciLCJUZXh0V3JhcHBlciIsIl9yZWYxOCIsIl9yZWYxOSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0E7QUFDd0I7QUFDSTtBQUNsQjtBQUUxQyxNQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUNwRCxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsSUFBQTtFQUFBLElBQUM7SUFBRUM7RUFBTSxDQUFDLEdBQUFELElBQUE7RUFBQSxPQUFLQyxLQUFLLENBQUNDLFdBQVcs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Q0g7QUFDQSxJQUFJQyxNQUFBO0VBQUEsSUFBQztJQUFFcEM7RUFBTSxDQUFDLEdBQUFvQyxNQUFBO0VBQUEsT0FBS3BDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDUyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNIO0FBQ0EsSUFBSTJCLE1BQUE7RUFBQSxJQUFDO0lBQUVyQztFQUFNLENBQUMsR0FBQXFDLE1BQUE7RUFBQSxPQUFLckMsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUM7QUFHTSxNQUFNb0MsV0FBVyxHQUFHM0MseURBQU0sQ0FBQ1ksR0FBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlnQyxNQUFBO0VBQUEsSUFBQztJQUFFdkM7RUFBTSxDQUFDLEdBQUF1QyxNQUFBO0VBQUEsT0FBS3ZDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDUyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJOEIsTUFBQTtFQUFBLElBQUM7SUFBRXhDO0VBQU0sQ0FBQyxHQUFBd0MsTUFBQTtFQUFBLE9BQUt4QyxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuMThhMjE2YzY2ZDVhYWU1MTg4ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4vLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcclxuaW1wb3J0IERlZmF1bHRNZW51QnV0dG9uIGZyb20gJy4uLy4uL01lbnVCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXkgOiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIENoYW5nZSB0byByb3cgb24gbGFyZ2VyIHNjcmVlbnMgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0QW5jaG9yID0gc3R5bGVkKG1vdGlvbi5hKWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBtYXJnaW46IDA7IC8qIEFkanVzdGVkIG1hcmdpbi1ib3R0b20gZm9yIGxlc3MgZ2FwICovXHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIFxyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RJbmZvID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMyU7XHJcbiAgd2lkdGg6IDgzLjMzMyU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmIGgzLFxyXG4gICYgLnByb2plY3QtaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJiBoMyB7XHJcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XHJcbiAgfVxyXG5cclxuICAmIC5wcm9qZWN0LWluZm8ge1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgJiBoNCB7XHJcbiAgICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDgzLjMzMyU7XHJcblxyXG4gICAgJiAucHJvamVjdC1pbmZvIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICAmIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcclxuICAgICAgdG9wOiAxN3B4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RUaXRsZSA9IHN0eWxlZChtb3Rpb24uaDEpYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogLTNweDtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAmIC5hcnJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDI1cHggMCAwIDNweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIHdpZHRoOiAxMDFweDtcclxuXHJcbiAgICAmIHN2ZyBwYXRoIHtcclxuICAgICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjcxNjY2NjY2Njc7XHJcblxyXG4gICAgJiAuYXJyb3cge1xyXG4gICAgICBtYXJnaW46IDEwcHggMCAwIDJweDtcclxuICAgICAgd2lkdGg6IDc2LjE5cHg7XHJcbiAgICAgIGhlaWdodDogNDNweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVByZXZpZXcgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDgwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuXHJcbiAgJiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBoZWlnaHQ6IDE5MHB4OyAvKiBBZGp1c3QgZm9yIHRhYmxldCB2aWV3ICovXHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXREZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTsgLyogVGFrZSB1cCBhdmFpbGFibGUgc3BhY2UgKi9cclxuICBwYWRkaW5nLXRvcDogMHB4OyAvKiBSZWR1Y2VkIHBhZGRpbmcgdG8gZGVjcmVhc2Ugc3BhY2UgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBmb250LXNpemU6IDEuOHJlbTsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaG9yaXpvbnRhbGx5ICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gdGV4dCB0byB0aGUgbGVmdCAqL1xyXG5cclxuICAmIGgyIHtcclxuICAgIG1hcmdpbjogMDsgLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVmlkZW9QcmV2aWV3ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgJiB2aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNjRweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZChEZWZhdWx0TWVudUJ1dHRvbilgXHJcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMzBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuXHJcbiAgJjo6YmVmb3JlLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgfVxyXG5cclxuICAmIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMyUgLSAzMHB4KTtcclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyMzVweDtcclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWF4LXdpZHRoOiAyMTVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGl0ZW1zIHZlcnRpY2FsbHkgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIG91dCB0aGUgdGV4dCBhbmQgY2FyZCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdhcDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiB0ZXh0IGFuZCBjYXJkICovXHJcbiAgbWFyZ2luLWJvdHRvbSA6IDkwcHg7XHJcblxyXG4gICYgaDIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDRweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBmb250LXNpemU6IDIuNjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgJiBwIHtcclxuICAgIG1heC13aWR0aDogNDQ4cHg7XHJcbiAgICBtYXJnaW46IDYuOXB4IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIHZlcnRpY2FsbHkgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSBzdGFydCBvbiBzbWFsbCBzY3JlZW5zICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmIGgyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRqdXN0IG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgJiBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
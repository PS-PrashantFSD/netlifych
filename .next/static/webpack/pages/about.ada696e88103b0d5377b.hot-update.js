webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Home/AboutUs/styles.js":
/*!*******************************************!*\
  !*** ./components/Home/AboutUs/styles.js ***!
  \*******************************************/
/*! exports provided: ContentSection, ProjectAnchor, ProjectInfo, ProjectTitle, ImagePreview, AboutDescription, VideoPreview, MenuContainer, MenuButton, Wrap */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrap", function() { return Wrap; });
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
  top: 347px;
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
    top: 166px;
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
const Wrap = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px; /* Adjust the gap between the items */
  margin-top: 40px;

  & h1 {
    grid-column: span 2; /* Span two columns */
    font-size: 6rem; /* Adjust as needed */
    text-align: left; /* Align text to the left */
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05); /* Slightly enlarge on hover */
    }
  }

  & h2 {
    grid-column: span 2; 
    font-size: 1.5rem; 
    text-align: left; 
    transition: color 0.3s;

    &:hover {
      color: white; 
    }
  }

  ${_ref18 => {
  let {
    theme
  } = _ref18;
  return theme.breakpoints.tablet`
    grid-template-columns: repeat(2, 1fr); /* Two columns on tablet */

    & h1{
      font-size : 4rem;
    }
  `;
}};

  ${_ref19 => {
  let {
    theme
  } = _ref19;
  return theme.breakpoints.small`
    grid-template-columns: 1fr; /* One column on small screens */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0VXMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkNvbnRlbnRTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9yZWYiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiUHJvamVjdEFuY2hvciIsImEiLCJfcmVmMiIsIlByb2plY3RJbmZvIiwiZGl2Iiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiX3JlZjMiLCJzbWFsbCIsIl9yZWY0IiwiUHJvamVjdFRpdGxlIiwiaDEiLCJfcmVmNSIsInRleHQiLCJfcmVmNiIsIkltYWdlUHJldmlldyIsIl9yZWY3IiwiQWJvdXREZXNjcmlwdGlvbiIsIl9yZWY4IiwiVmlkZW9QcmV2aWV3IiwiX3JlZjkiLCJfcmVmMTAiLCJNZW51Q29udGFpbmVyIiwiX3JlZjExIiwiTWVudUJ1dHRvbiIsIkRlZmF1bHRNZW51QnV0dG9uIiwiX3JlZjEyIiwiY29sb3JzIiwicmVkIiwiX3JlZjEzIiwiYmFja2dyb3VuZCIsIl9yZWYxNCIsIl9yZWYxNSIsIm1lZGl1bSIsIl9yZWYxNiIsIl9yZWYxNyIsIldyYXAiLCJfcmVmMTgiLCJfcmVmMTkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNBO0FBQ3dCO0FBQ0k7QUFDbEI7QUFFMUMsTUFBTUEsY0FBYyxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDcEQsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1B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SUFBSUMsTUFBQTtFQUFBLElBQUM7SUFBRXBDO0VBQU0sQ0FBQyxHQUFBb0MsTUFBQTtFQUFBLE9BQUtwQyxLQUFLLENBQUNDLFdBQVcsQ0FBQ1MsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUkyQixNQUFBO0VBQUEsSUFBQztJQUFFckM7RUFBTSxDQUFDLEdBQUFxQyxNQUFBO0VBQUEsT0FBS3JDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDO0FBRU0sTUFBTW9DLElBQUksR0FBRzNDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNXLEdBQUcsQ0FBQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJZ0MsTUFBQTtFQUFBLElBQUM7SUFBRXZDO0VBQU0sQ0FBQyxHQUFBdUMsTUFBQTtFQUFBLE9BQUt2QyxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJc0MsTUFBQTtFQUFBLElBQUM7SUFBRXhDO0VBQU0sQ0FBQyxHQUFBd0MsTUFBQTtFQUFBLE9BQUt4QyxLQUFLLENBQUNDLFdBQVcsQ0FBQ1MsS0FBSztBQUMxQztBQUNBLEdBQUc7QUFBQTtBQUNILENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYWRhNjk2ZTg4MTAzYjBkNTM3N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4vLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcclxuaW1wb3J0IERlZmF1bHRNZW51QnV0dG9uIGZyb20gJy4uLy4uL01lbnVCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXkgOiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIENoYW5nZSB0byByb3cgb24gbGFyZ2VyIHNjcmVlbnMgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0QW5jaG9yID0gc3R5bGVkKG1vdGlvbi5hKWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIG1hcmdpbjogMCAwIDUwcHg7IC8qIEFkanVzdGVkIG1hcmdpbi1ib3R0b20gZm9yIGxlc3MgZ2FwICovXHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFkanVzdGVkIG1hcmdpbi1ib3R0b20gZm9yIHRhYmxldCB2aWV3ICovXHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdEluZm8gPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgbWFyZ2luLWxlZnQ6IDguMzMzJTtcclxuICB3aWR0aDogODMuMzMzJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYgaDMsXHJcbiAgJiAucHJvamVjdC1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmIGgzIHtcclxuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcclxuICB9XHJcblxyXG4gICYgLnByb2plY3QtaW5mbyB7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICAmIGg0IHtcclxuICAgICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogODMuMzMzJTtcclxuXHJcbiAgICAmIC5wcm9qZWN0LWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgICYgaDMge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xyXG4gICAgICB0b3A6IDE3cHg7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFRpdGxlID0gc3R5bGVkKG1vdGlvbi5oMSlgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzQ3cHg7XHJcbiAgbGVmdDogLTNweDtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAmIC5hcnJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDI1cHggMCAwIDNweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIHdpZHRoOiAxMDFweDtcclxuXHJcbiAgICAmIHN2ZyBwYXRoIHtcclxuICAgICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgdG9wOiAxNjZweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmb250LXNpemU6IDMuNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMC43MTY2NjY2NjY3O1xyXG5cclxuICAgICYgLmFycm93IHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDAgMCAycHg7XHJcbiAgICAgIHdpZHRoOiA3Ni4xOXB4O1xyXG4gICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VQcmV2aWV3ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcblxyXG4gICYgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gKi9cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiAxOTBweDsgLyogQWRqdXN0IGZvciB0YWJsZXQgdmlldyAqL1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0RGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7IC8qIFRha2UgdXAgYXZhaWxhYmxlIHNwYWNlICovXHJcbiAgcGFkZGluZy10b3A6IDEyMHB4OyAvKiBSZWR1Y2VkIHBhZGRpbmcgdG8gZGVjcmVhc2Ugc3BhY2UgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBmb250LXNpemU6IDEuOHJlbTsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaG9yaXpvbnRhbGx5ICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gdGV4dCB0byB0aGUgbGVmdCAqL1xyXG5cclxuICAmIGgyIHtcclxuICAgIG1hcmdpbjogMDsgLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVmlkZW9QcmV2aWV3ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgJiB2aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNjRweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZChEZWZhdWx0TWVudUJ1dHRvbilgXHJcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMzBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuXHJcbiAgJjo6YmVmb3JlLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgfVxyXG5cclxuICAmIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMyUgLSAzMHB4KTtcclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyMzVweDtcclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWF4LXdpZHRoOiAyMTVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXAgPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogNDBweDsgLyogQWRqdXN0IHRoZSBnYXAgYmV0d2VlbiB0aGUgaXRlbXMgKi9cclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxuICAmIGgxIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7IC8qIFNwYW4gdHdvIGNvbHVtbnMgKi9cclxuICAgIGZvbnQtc2l6ZTogNnJlbTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gdGV4dCB0byB0aGUgbGVmdCAqL1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIFNsaWdodGx5IGVubGFyZ2Ugb24gaG92ZXIgKi9cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgaDIge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjsgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IC8qIFR3byBjb2x1bW5zIG9uIHRhYmxldCAqL1xyXG5cclxuICAgICYgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZSA6IDRyZW07XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogT25lIGNvbHVtbiBvbiBzbWFsbCBzY3JlZW5zICovXHJcbiAgYH07XHJcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==
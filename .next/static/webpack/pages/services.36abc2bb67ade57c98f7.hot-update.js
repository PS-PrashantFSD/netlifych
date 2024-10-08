webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Home/Services/styles.js":
/*!********************************************!*\
  !*** ./components/Home/Services/styles.js ***!
  \********************************************/
/*! exports provided: ContentSection, ProjectAnchor, ProjectInfo, ProjectTitle, ImagePreview, AboutDescription, VideoPreview, MenuContainer, MenuButton */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJicmVha3BvaW50cyIsInRhYmxldCIsIlByb2plY3RBbmNob3IiLCJhIiwiX3JlZjIiLCJQcm9qZWN0SW5mbyIsImRpdiIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYzIiwic21hbGwiLCJfcmVmNCIsIlByb2plY3RUaXRsZSIsImgxIiwiX3JlZjUiLCJ0ZXh0IiwiX3JlZjYiLCJJbWFnZVByZXZpZXciLCJfcmVmNyIsIkFib3V0RGVzY3JpcHRpb24iLCJfcmVmOCIsIlZpZGVvUHJldmlldyIsIl9yZWY5IiwiX3JlZjEwIiwiTWVudUNvbnRhaW5lciIsIl9yZWYxMSIsIk1lbnVCdXR0b24iLCJEZWZhdWx0TWVudUJ1dHRvbiIsIl9yZWYxMiIsImNvbG9ycyIsInJlZCIsIl9yZWYxMyIsImJhY2tncm91bmQiLCJfcmVmMTQiLCJfcmVmMTUiLCJtZWRpdW0iLCJfcmVmMTYiLCJfcmVmMTciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUN3QjtBQUNJO0FBQ2xCO0FBRTFDLE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3BELElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQyxJQUFBO0VBQUEsSUFBQztJQUFFQztFQUFNLENBQUMsR0FBQUQsSUFBQTtFQUFBLE9BQUtDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQSxHQUFHO0FBQUE7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QUFNLENBQUMsR0FBQW9DLE1BQUE7RUFBQSxPQUFLcEMsS0FBSyxDQUFDQyxXQUFXLENBQUNTLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0g7QUFDQSxJQUFJMkIsTUFBQTtFQUFBLElBQUM7SUFBRXJDO0VBQU0sQ0FBQyxHQUFBcUMsTUFBQTtFQUFBLE9BQUtyQyxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy4zNmFiYzJiYjY3YWRlNTdjOThmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xyXG5pbXBvcnQgRGVmYXVsdE1lbnVCdXR0b24gZnJvbSAnLi4vLi4vTWVudUJ1dHRvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheSA6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIFxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQ2hhbmdlIHRvIHJvdyBvbiBsYXJnZXIgc2NyZWVucyAqL1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RBbmNob3IgPSBzdHlsZWQobW90aW9uLmEpYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbiAgbWFyZ2luOiAwIDAgNTBweDsgLyogQWRqdXN0ZWQgbWFyZ2luLWJvdHRvbSBmb3IgbGVzcyBnYXAgKi9cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRqdXN0ZWQgbWFyZ2luLWJvdHRvbSBmb3IgdGFibGV0IHZpZXcgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0SW5mbyA9IHN0eWxlZChtb3Rpb24uZGl2KWBcclxuICBtYXJnaW4tbGVmdDogOC4zMzMlO1xyXG4gIHdpZHRoOiA4My4zMzMlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJiBoMyxcclxuICAmIC5wcm9qZWN0LWluZm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3NXB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gICYgaDMge1xyXG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xyXG4gIH1cclxuXHJcbiAgJiAucHJvamVjdC1pbmZvIHtcclxuICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgICYgaDQge1xyXG4gICAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiA4My4zMzMlO1xyXG5cclxuICAgICYgLnByb2plY3QtaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgJiBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XHJcbiAgICAgIHRvcDogMTdweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0VGl0bGUgPSBzdHlsZWQobW90aW9uLmgxKWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IC0zcHg7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgJiAuYXJyb3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAyNXB4IDAgMCAzcHg7XHJcbiAgICBoZWlnaHQ6IDU3cHg7XHJcbiAgICB3aWR0aDogMTAxcHg7XHJcblxyXG4gICAgJiBzdmcgcGF0aCB7XHJcbiAgICAgIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIHRvcDogMTY2cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNzE2NjY2NjY2NztcclxuXHJcbiAgICAmIC5hcnJvdyB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwIDAgMnB4O1xyXG4gICAgICB3aWR0aDogNzYuMTlweDtcclxuICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlUHJldmlldyA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0ODBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG5cclxuICAmIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGhlaWdodDogMTkwcHg7IC8qIEFkanVzdCBmb3IgdGFibGV0IHZpZXcgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxOyAvKiBUYWtlIHVwIGF2YWlsYWJsZSBzcGFjZSAqL1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7IC8qIFJlZHVjZWQgcGFkZGluZyB0byBkZWNyZWFzZSBzcGFjZSAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtOyAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cclxuICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBBbGlnbiB0ZXh0IHRvIHRoZSBsZWZ0ICovXHJcblxyXG4gICYgaDIge1xyXG4gICAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgZm9udC1zaXplOiAxcmVtOyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBWaWRlb1ByZXZpZXcgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAmIHZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2NHB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gc3R5bGVkKERlZmF1bHRNZW51QnV0dG9uKWBcclxuICB3aWR0aDogY2FsYygyNSUgLSAzMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG5cclxuICAmOjpiZWZvcmUsXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcclxuICB9XHJcblxyXG4gICYgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubWVkaXVtYFxyXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzJSAtIDMwcHgpO1xyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIzNXB4O1xyXG5cclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXgtd2lkdGg6IDIxNXB4O1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG5cclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
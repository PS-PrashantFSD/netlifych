webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Home/Services/styles.js":
/*!********************************************!*\
  !*** ./components/Home/Services/styles.js ***!
  \********************************************/
/*! exports provided: ContentSection, ProjectAnchor, Text, ProjectInfo, ProjectTitle, ImagePreview, AboutDescription, VideoPreview, MenuContainer, MenuButton, TextWrapper, Text1, Text2, Text3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAnchor", function() { return ProjectAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfo", function() { return ProjectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTitle", function() { return ProjectTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return ImagePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDescription", function() { return AboutDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPreview", function() { return VideoPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text1", function() { return Text1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text2", function() { return Text2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text3", function() { return Text3; });
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
  margin 
  
  

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

  height: 350px;
  

  ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.breakpoints.tablet`
    height: 190px;
    
  `;
}};
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
  margin: 0;
  font-size: 2rem;
  line-height: 1;
  font-weight: 500;
  max-width: 640px;

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.tablet`
    font-size: 1.5rem;
    line-height: 1;

    & br {
      display: none;
    }
  `;
}};
`;
const ProjectInfo = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  
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

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.small`
    margin-left: 0;
    width: 83.333%;

    & .project-info {
      display: none;
    }
  `;
}};

  ${_ref5 => {
  let {
    theme
  } = _ref5;
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
      fill: ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.text;
}};
    }
  }

  ${_ref7 => {
  let {
    theme
  } = _ref7;
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

  ${_ref8 => {
  let {
    theme
  } = _ref8;
  return theme.breakpoints.tablet`
    height: 190px; /* Adjust for tablet view */
  `;
}};
`;
const AboutDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex: 1; /* Take up available space */
  padding: 120px 60px 160px 60px; /* Reduced padding to decrease space */
  margin-bottom: 40px;
  font-size: 1rem; /* Increase font size */
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  text-align: left; /* Align text to the left */

  & h2 {
    margin: 0; /* Remove default margin */
  }

  ${_ref9 => {
  let {
    theme
  } = _ref9;
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

  ${_ref10 => {
  let {
    theme
  } = _ref10;
  return theme.breakpoints.small`
    width: calc(100% + 64px);
    margin-left: -32px;
  `;
}};

  ${_ref11 => {
  let {
    theme
  } = _ref11;
  return theme.breakpoints.tablet`
    height: 190px;
  `;
}};
`;
const MenuContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${_ref12 => {
  let {
    theme
  } = _ref12;
  return theme.breakpoints.tablet`
    justify-content: flex-start;
  `;
}};
`;
const MenuButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_MenuButton__WEBPACK_IMPORTED_MODULE_4__["default"])`
  width: calc(25% - 30px);
  background-color: ${_ref13 => {
  let {
    theme
  } = _ref13;
  return theme.colors.red;
}};

  &::before,
  &::after {
    background: ${_ref14 => {
  let {
    theme
  } = _ref14;
  return theme.background;
}};
  }

  & span {
    position: relative;
    opacity: 1;
    right: 0;
    color: ${_ref15 => {
  let {
    theme
  } = _ref15;
  return theme.background;
}};
  }

  ${_ref16 => {
  let {
    theme
  } = _ref16;
  return theme.breakpoints.medium`
    width: calc(33.333% - 30px);
  `;
}};

  ${_ref17 => {
  let {
    theme
  } = _ref17;
  return theme.breakpoints.small`
    width: 100%;
    max-width: 235px;

    & span {
      display: inline;
    }
  `;
}};

  ${_ref18 => {
  let {
    theme
  } = _ref18;
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
  margin-bottom : 180px;

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

  ${_ref19 => {
  let {
    theme
  } = _ref19;
  return theme.breakpoints.small`
    flex-direction: column; /* Stack vertically on small screens */
    align-items: flex-start; /* Align items to the start on small screens */
    width: 100%;

    & h2 {
      margin-bottom: 20px; /* Adjust margin for smaller screens */
    }
  `;
}};

  ${_ref20 => {
  let {
    theme
  } = _ref20;
  return theme.breakpoints.tablet`
    & h2 {
      font-size: 1.5rem;
      margin-bottom: 34px;
    }
  `;
}};
`;
const Text1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};

  margin-bottom: 210px;

  ${_ref21 => {
  let {
    theme
  } = _ref21;
  return theme.breakpoints.tablet`
    margin-bottom: 107px;
  `;
}};
`;
const Text2 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-left: 8.333%;
  width: calc(58.333% - 32px);

  ${_ref22 => {
  let {
    theme
  } = _ref22;
  return theme.breakpoints.small`
    width: 100%;
    margin-left: 0;
  `;
}};
`;
const Text3 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
  margin: 0;
  font-size: 2.625rem;
  line-height: 1;
  font-weight: 500;
  max-width: 640px;

  ${_ref23 => {
  let {
    theme
  } = _ref23;
  return theme.breakpoints.tablet`
    font-size: 1.5rem;
    line-height: 1;

    & br {
      display: none;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJicmVha3BvaW50cyIsInRhYmxldCIsIlByb2plY3RBbmNob3IiLCJhIiwiX3JlZjIiLCJUZXh0IiwiaDIiLCJfcmVmMyIsIlByb2plY3RJbmZvIiwiZGl2Iiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiX3JlZjQiLCJzbWFsbCIsIl9yZWY1IiwiUHJvamVjdFRpdGxlIiwiaDEiLCJfcmVmNiIsInRleHQiLCJfcmVmNyIsIkltYWdlUHJldmlldyIsIl9yZWY4IiwiQWJvdXREZXNjcmlwdGlvbiIsIl9yZWY5IiwiVmlkZW9QcmV2aWV3IiwiX3JlZjEwIiwiX3JlZjExIiwiTWVudUNvbnRhaW5lciIsIl9yZWYxMiIsIk1lbnVCdXR0b24iLCJEZWZhdWx0TWVudUJ1dHRvbiIsIl9yZWYxMyIsImNvbG9ycyIsInJlZCIsIl9yZWYxNCIsImJhY2tncm91bmQiLCJfcmVmMTUiLCJfcmVmMTYiLCJtZWRpdW0iLCJfcmVmMTciLCJfcmVmMTgiLCJUZXh0V3JhcHBlciIsIl9yZWYxOSIsIl9yZWYyMCIsIlRleHQxIiwiX3JlZjIxIiwiVGV4dDIiLCJfcmVmMjIiLCJUZXh0MyIsIl9yZWYyMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUN3QjtBQUNFO0FBQ2hCO0FBRTFDLE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3BELElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSDtBQUNBLElBQUk4QixNQUFBO0VBQUEsSUFBQztJQUFFM0M7RUFBTSxDQUFDLEdBQUEyQyxNQUFBO0VBQUEsT0FBSzNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQztBQUdNLE1BQU0wQyxLQUFLLEdBQUdqRCxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDM0MsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSStDLE1BQUE7RUFBQSxJQUFDO0lBQUU3QztFQUFNLENBQUMsR0FBQTZDLE1BQUE7RUFBQSxPQUFLN0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDO0FBRU0sTUFBTTRDLEtBQUssR0FBR25ELHlEQUFNLENBQUNlLEdBQUc7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsSUFBSXFDLE1BQUE7RUFBQSxJQUFDO0lBQUUvQztFQUFNLENBQUMsR0FBQStDLE1BQUE7RUFBQSxPQUFLL0MsS0FBSyxDQUFDQyxXQUFXLENBQUNZLEtBQUs7QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUM7QUFFTSxNQUFNbUMsS0FBSyxHQUFHckQseURBQU0sQ0FBQ1ksRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJMEMsTUFBQTtFQUFBLElBQUM7SUFBRWpEO0VBQU0sQ0FBQyxHQUFBaUQsTUFBQTtFQUFBLE9BQUtqRCxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZpY2VzLjFjOGI4NzI2ZTVlY2RjMDlhOGE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuaW1wb3J0IERlZmF1bHRNZW51QnV0dG9uIGZyb20gJy4uLy4uL01lbnVCdXR0b24nO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICAke2NvbnRhaW5lclN0eWxlc307XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheSA6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgbWFyZ2luIFxuICBcbiAgXG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQ2hhbmdlIHRvIHJvdyBvbiBsYXJnZXIgc2NyZWVucyAqL1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0QW5jaG9yID0gc3R5bGVkKG1vdGlvbi5hKWBcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaGVpZ2h0OiAzNTBweDtcbiAgXG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgICBcbiAgYH07XG5gO1xuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQuaDJgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWF4LXdpZHRoOiA2NDBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICYgYnIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RJbmZvID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBcbiAgd2lkdGg6IDgzLjMzMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmIGgzLFxuICAmIC5wcm9qZWN0LWluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAmIGgzIHtcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIH1cblxuICAmIC5wcm9qZWN0LWluZm8ge1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgJiBoNCB7XG4gICAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDgzLjMzMyU7XG5cbiAgICAmIC5wcm9qZWN0LWluZm8ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgICYgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XG4gICAgICB0b3A6IDE3cHg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0VGl0bGUgPSBzdHlsZWQobW90aW9uLmgxKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IC0zcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgJiAuYXJyb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAyNXB4IDAgMCAzcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIHdpZHRoOiAxMDFweDtcblxuICAgICYgc3ZnIHBhdGgge1xuICAgICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICB9XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDMuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuNzE2NjY2NjY2NztcblxuICAgICYgLmFycm93IHtcbiAgICAgIG1hcmdpbjogMTBweCAwIDAgMnB4O1xuICAgICAgd2lkdGg6IDc2LjE5cHg7XG4gICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbWFnZVByZXZpZXcgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0ODBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuXG4gICYgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgaGVpZ2h0OiAxOTBweDsgLyogQWRqdXN0IGZvciB0YWJsZXQgdmlldyAqL1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBBYm91dERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTsgLyogVGFrZSB1cCBhdmFpbGFibGUgc3BhY2UgKi9cbiAgcGFkZGluZzogMTIwcHggNjBweCAxNjBweCA2MHB4OyAvKiBSZWR1Y2VkIHBhZGRpbmcgdG8gZGVjcmVhc2Ugc3BhY2UgKi9cbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZm9udC1zaXplOiAxcmVtOyAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cbiAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gdGV4dCB0byB0aGUgbGVmdCAqL1xuXG4gICYgaDIge1xuICAgIG1hcmdpbjogMDsgLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBmb250LXNpemU6IDFyZW07IC8qIEFkanVzdCBmb250IHNpemUgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFZpZGVvUHJldmlldyA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBtYXJnaW46IDA7XG5cbiAgJiB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2NHB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGhlaWdodDogMTkwcHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZChEZWZhdWx0TWVudUJ1dHRvbilgXG4gIHdpZHRoOiBjYWxjKDI1JSAtIDMwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cblxuICAmIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tZWRpdW1gXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzJSAtIDMwcHgpO1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjM1cHg7XG5cbiAgICAmIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIG1heC13aWR0aDogMjE1cHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuXG4gICAgJiBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGl0ZW1zIHZlcnRpY2FsbHkgKi9cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBTcGFjZSBvdXQgdGhlIHRleHQgYW5kIGNhcmQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMzNweDsgLyogU3BhY2UgYmV0d2VlbiB0ZXh0IGFuZCBjYXJkICovXG4gIG1hcmdpbi1ib3R0b20gOiAxODBweDtcblxuICAmIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGZvbnQtc2l6ZTogMi42MjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gICYgcCB7XG4gICAgbWF4LXdpZHRoOiA0NDhweDtcbiAgICBtYXJnaW46IDYuOXB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgdmVydGljYWxseSBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSBzdGFydCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmIGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFkanVzdCBtYXJnaW4gZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJiBoMiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gICAgfVxuICBgfTtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IFRleHQxID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuXG4gIG1hcmdpbi1ib3R0b206IDIxMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi1ib3R0b206IDEwN3B4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0MiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMyU7XG4gIHdpZHRoOiBjYWxjKDU4LjMzMyUgLSAzMnB4KTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0MyA9IHN0eWxlZC5oMmBcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIuNjI1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWF4LXdpZHRoOiA2NDBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICYgYnIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGB9O1xuYDsiXSwic291cmNlUm9vdCI6IiJ9
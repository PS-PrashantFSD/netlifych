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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJfcmVmIiwidGhlbWUiLCJicmVha3BvaW50cyIsInRhYmxldCIsIlByb2plY3RBbmNob3IiLCJhIiwiX3JlZjIiLCJUZXh0IiwiaDIiLCJfcmVmMyIsIlByb2plY3RJbmZvIiwiZGl2Iiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiX3JlZjQiLCJzbWFsbCIsIl9yZWY1IiwiUHJvamVjdFRpdGxlIiwiaDEiLCJfcmVmNiIsInRleHQiLCJfcmVmNyIsIkltYWdlUHJldmlldyIsIl9yZWY4IiwiQWJvdXREZXNjcmlwdGlvbiIsIl9yZWY5IiwiVmlkZW9QcmV2aWV3IiwiX3JlZjEwIiwiX3JlZjExIiwiTWVudUNvbnRhaW5lciIsIl9yZWYxMiIsIk1lbnVCdXR0b24iLCJEZWZhdWx0TWVudUJ1dHRvbiIsIl9yZWYxMyIsImNvbG9ycyIsInJlZCIsIl9yZWYxNCIsImJhY2tncm91bmQiLCJfcmVmMTUiLCJfcmVmMTYiLCJtZWRpdW0iLCJfcmVmMTciLCJfcmVmMTgiLCJUZXh0V3JhcHBlciIsIl9yZWYxOSIsIl9yZWYyMCIsIlRleHQxIiwiX3JlZjIxIiwiVGV4dDIiLCJfcmVmMjIiLCJUZXh0MyIsIl9yZWYyMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUN3QjtBQUNFO0FBQ2hCO0FBRTFDLE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3BELElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNIO0FBQ0EsSUFBSThCLE1BQUE7RUFBQSxJQUFDO0lBQUUzQztFQUFNLENBQUMsR0FBQTJDLE1BQUE7RUFBQSxPQUFLM0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDO0FBR00sTUFBTTBDLEtBQUssR0FBR2pELGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUMzQyxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxJQUFJK0MsTUFBQTtFQUFBLElBQUM7SUFBRTdDO0VBQU0sQ0FBQyxHQUFBNkMsTUFBQTtFQUFBLE9BQUs3QyxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBLEdBQUc7QUFBQTtBQUNILENBQUM7QUFFTSxNQUFNNEMsS0FBSyxHQUFHbkQseURBQU0sQ0FBQ2UsR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxJQUFJcUMsTUFBQTtFQUFBLElBQUM7SUFBRS9DO0VBQU0sQ0FBQyxHQUFBK0MsTUFBQTtFQUFBLE9BQUsvQyxLQUFLLENBQUNDLFdBQVcsQ0FBQ1ksS0FBSztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQztBQUVNLE1BQU1tQyxLQUFLLEdBQUdyRCx5REFBTSxDQUFDWSxFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkwQyxNQUFBO0VBQUEsSUFBQztJQUFFakQ7RUFBTSxDQUFDLEdBQUFpRCxNQUFBO0VBQUEsT0FBS2pELEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuNGI5ZjNjOTljN2Q0ZjBmNWIyMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5pbXBvcnQgRGVmYXVsdE1lbnVCdXR0b24gZnJvbSAnLi4vLi4vTWVudUJ1dHRvbic7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5IDogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICBcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAvKiBDaGFuZ2UgdG8gcm93IG9uIGxhcmdlciBzY3JlZW5zICovXG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RBbmNob3IgPSBzdHlsZWQobW90aW9uLmEpYFxuICBkaXNwbGF5OiBibG9jaztcblxuICBoZWlnaHQ6IDM1MHB4O1xuICBcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICAgIFxuICBgfTtcbmA7XG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5oMmBcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgJiBiciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdEluZm8gPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIFxuICB3aWR0aDogODMuMzMzJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYgaDMsXG4gICYgLnByb2plY3QtaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuXG4gICYgaDMge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgfVxuXG4gICYgLnByb2plY3QtaW5mbyB7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICAmIGg0IHtcbiAgICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB3aWR0aDogODMuMzMzJTtcblxuICAgICYgLnByb2plY3QtaW5mbyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJiBoMyB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcbiAgICAgIHRvcDogMTdweDtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RUaXRsZSA9IHN0eWxlZChtb3Rpb24uaDEpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogLTNweDtcbiAgei1pbmRleDogMTtcblxuICAmIC5hcnJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDI1cHggMCAwIDNweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgd2lkdGg6IDEwMXB4O1xuXG4gICAgJiBzdmcgcGF0aCB7XG4gICAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIH1cbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMC43MTY2NjY2NjY3O1xuXG4gICAgJiAuYXJyb3cge1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMCAycHg7XG4gICAgICB3aWR0aDogNzYuMTlweDtcbiAgICAgIGhlaWdodDogNDNweDtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEltYWdlUHJldmlldyA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG5cbiAgJiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDE5MHB4OyAvKiBBZGp1c3QgZm9yIHRhYmxldCB2aWV3ICovXG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFib3V0RGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxOyAvKiBUYWtlIHVwIGF2YWlsYWJsZSBzcGFjZSAqL1xuICBwYWRkaW5nOiAxMjBweCA2MHB4IDE2MHB4IDYwcHg7IC8qIFJlZHVjZWQgcGFkZGluZyB0byBkZWNyZWFzZSBzcGFjZSAqL1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBmb250LXNpemU6IDFyZW07IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBBbGlnbiB0ZXh0IHRvIHRoZSBsZWZ0ICovXG5cbiAgJiBoMiB7XG4gICAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gICAgcGFkZGluZzogNTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVmlkZW9QcmV2aWV3ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDgwcHg7XG4gIG1hcmdpbjogMDtcblxuICAmIHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDY0cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gc3R5bGVkKERlZmF1bHRNZW51QnV0dG9uKWBcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMzBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG5cbiAgJjo6YmVmb3JlLFxuICAmOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gICYgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcbiAgICB3aWR0aDogY2FsYygzMy4zMzMlIC0gMzBweCk7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAyMzVweDtcblxuICAgICYgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgbWF4LXdpZHRoOiAyMTVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG5cbiAgICAmIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaXRlbXMgdmVydGljYWxseSAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIG91dCB0aGUgdGV4dCBhbmQgY2FyZCAqL1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAzM3B4OyAvKiBTcGFjZSBiZXR3ZWVuIHRleHQgYW5kIGNhcmQgKi9cbiAgbWFyZ2luLWJvdHRvbSA6IDE4MHB4O1xuXG4gICYgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgZm9udC1zaXplOiAyLjYyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgJiBwIHtcbiAgICBtYXgtd2lkdGg6IDQ0OHB4O1xuICAgIG1hcmdpbjogNi45cHggMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayB2ZXJ0aWNhbGx5IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gaXRlbXMgdG8gdGhlIHN0YXJ0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYgaDIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRqdXN0IG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gICAgfVxuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICAmIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICB9XG4gIGB9O1xuYDtcblxuXG5leHBvcnQgY29uc3QgVGV4dDEgPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICAke2NvbnRhaW5lclN0eWxlc307XG5cbiAgbWFyZ2luLWJvdHRvbTogMjEwcHg7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgbWFyZ2luLWJvdHRvbTogMTA3cHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDguMzMzJTtcbiAgd2lkdGg6IGNhbGMoNTguMzMzJSAtIDMycHgpO1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQzID0gc3R5bGVkLmgyYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMi42MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgJiBiciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=
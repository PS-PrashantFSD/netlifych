webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Menu/styles.js":
/*!***********************************!*\
  !*** ./components/Menu/styles.js ***!
  \***********************************/
/*! exports provided: Backdrop, Container, Header, Footer, FooterText, SocialMedia, Navigation, List, Link, ArrowContainer, VideoContainer, VideoReveal, Video, Address, CloseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backdrop", function() { return Backdrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterText", function() { return FooterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMedia", function() { return SocialMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowContainer", function() { return ArrowContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoContainer", function() { return VideoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoReveal", function() { return VideoReveal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return CloseButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/shared/text */ "./styles/shared/text.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Backdrop */ "./components/Backdrop/index.js");
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SocialMedia */ "./components/SocialMedia/index.js");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MenuButton */ "./components/MenuButton/index.js");







const Backdrop = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Backdrop__WEBPACK_IMPORTED_MODULE_4__["default"])`
  background:#302f2f;
  color: white;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  padding: 54px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Header = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Row)`
  & h3 {
    margin: -20px;
    margin-left: 0;
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
  }

  ${_ref => {
  let {
    theme
  } = _ref;
  return theme.breakpoints.tablet`
    padding: 29px 0;

    & h3 {
      font-size: 1.125rem;
      line-height: 1.2777777778;
    }
  `;
}};
`;
const Footer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Row)`
  justify-content: flex-start;

  ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.breakpoints.small`
    position: relative;
    flex-direction: column;
    align-items: flex-start;
  `;
}};

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.tablet`
    padding: 32px 0;
  `;
}};
`;
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
  line-height: 24px;
  margin: 0;
  flex-shrink: 0;

  &.link {
    display: inline-block;
    margin-right: 64px;

    &:hover {
      color: ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.text;
}};
    }
  }

  &.copyright {
    font-size: 0.875rem;
    line-height: 1.0714285714;
  }

  ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.breakpoints.small`
    font-size: 0.875rem;
    line-height: 1.0714285714;

    &.copyright {
      position: absolute;
      right: 0;
      bottom: 54px;
      font-size: 0.6875rem;
      line-height: 1.1818181818;
    }
  `;
}};

  ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.breakpoints.tablet`
    &.copyright {
      bottom: 32px;
    }
  `;
}};
`;
const SocialMedia = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_SocialMedia__WEBPACK_IMPORTED_MODULE_5__["default"])`
  justify-content: flex-end;
  width: 100%;

  & a svg path {
    fill: ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.background;
}};
  }

  ${_ref8 => {
  let {
    theme
  } = _ref8;
  return theme.breakpoints.small`
    width: unset;
    justify-content: flex-start;
  `;
}};
`;
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav`
  height: 462px;

  ${_ref9 => {
  let {
    theme
  } = _ref9;
  return theme.breakpoints.small`
    position: absolute;
    top: 94px;
  `;
}};
`;
const List = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].ul)`
  display: inline-block;

  & li {
    display: block;
    overflow: hidden;
    float: left;
    clear: left;
  }
`;
const Link = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].a)`
  display: flex;
  align-items: center;
  font-size: 57px;
  font-size: 3.5625rem;
  line-height: 1.5964912281;
  font-weight: 900;
  text-transform: uppercase;
  will-change: transform;

  ${_ref10 => {
  let {
    theme
  } = _ref10;
  return theme.breakpoints.tablet`
    font-size: 1.75rem;
    line-height: 1.7857142857;
  `;
}};
`;
const ArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  display: block;
  overflow: hidden;
  width: 68px;
  height: 57px;
  padding-right: 6px;
  margin-right: 6px;

  & svg {
    float: right;
    width: 101px;
    height: 57px;
  }

  ${_ref11 => {
  let {
    theme
  } = _ref11;
  return theme.breakpoints.small`
    display: none;
  `;
}};
`;
const VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  ${_ref12 => {
  let {
    theme
  } = _ref12;
  return theme.breakpoints.small`
    display: none;
  `;
}};
`;
const VideoReveal = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  will-change: width;
  transform: translateZ(0);
  background: ${_ref13 => {
  let {
    theme
  } = _ref13;
  return theme.colors.red;
}};
`;
const Video = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].video)`
  position: absolute;
  height: 100%;
  margin: 0;
  will-change: opacity;
  transform: translateZ(0);
  z-index: -1;
`;
const Address = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].address`
  margin-top: 17px;
  margin-bottom: 23px;
`;
const CloseButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_MenuButton__WEBPACK_IMPORTED_MODULE_6__["default"])`
  margin: -20px;

  & span {
    color: ${_ref14 => {
  let {
    theme
  } = _ref14;
  return theme.background;
}};
  }

  &::before,
  &::after {
    margin-top: 0;
    background: ${_ref15 => {
  let {
    theme
  } = _ref15;
  return theme.background;
}};
  }

  &::before {
    transform: translateY(-50%) rotate(-45deg);
  }

  &::after {
    transform: translateY(-50%) rotate(45deg);
  }

  ${_ref16 => {
  let {
    theme
  } = _ref16;
  return theme.breakpoints.tablet`
    &::before {
      margin-top: 0;
    }

    &::after {
      margin-top: 0;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJCYWNrZHJvcCIsInN0eWxlZCIsIkRlZmF1bHRCYWNrZHJvcCIsIkNvbnRhaW5lciIsImRpdiIsImNvbnRhaW5lclN0eWxlcyIsIlJvdyIsIkhlYWRlciIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiRm9vdGVyIiwiX3JlZjIiLCJzbWFsbCIsIl9yZWYzIiwiRm9vdGVyVGV4dCIsInAiLCJfcmVmNCIsInRleHQiLCJfcmVmNSIsIl9yZWY2IiwiU29jaWFsTWVkaWEiLCJEZWZhdWx0U29jaWFsTWVkaWEiLCJfcmVmNyIsImJhY2tncm91bmQiLCJfcmVmOCIsIk5hdmlnYXRpb24iLCJuYXYiLCJfcmVmOSIsIkxpc3QiLCJtb3Rpb24iLCJ1bCIsIkxpbmsiLCJhIiwiX3JlZjEwIiwiQXJyb3dDb250YWluZXIiLCJzcGFuIiwiX3JlZjExIiwiVmlkZW9Db250YWluZXIiLCJfcmVmMTIiLCJWaWRlb1JldmVhbCIsIl9yZWYxMyIsImNvbG9ycyIsInJlZCIsIlZpZGVvIiwidmlkZW8iLCJBZGRyZXNzIiwiYWRkcmVzcyIsIkNsb3NlQnV0dG9uIiwiTWVudUJ1dHRvbiIsIl9yZWYxNCIsIl9yZWYxNSIsIl9yZWYxNiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUNxQjtBQUNFO0FBQ3BCO0FBQ007QUFDVDtBQUVoQyxNQUFNQSxRQUFRLEdBQUdDLGlFQUFNLENBQUNDLGlEQUFlLENBQUM7QUFDL0M7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENB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K0Isb0RBQU0sQ0FBQ2UsS0FBSyxDQUFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNQyxPQUFPLEdBQUcvQyx5REFBTSxDQUFDZ0QsT0FBTztBQUNyQztBQUNBO0FBQ0EsQ0FBQztBQUVNLE1BQU1DLFdBQVcsR0FBR2pELGlFQUFNLENBQUNrRCxtREFBVSxDQUFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGFBQWFDLE1BQUE7RUFBQSxJQUFDO0lBQUUxQztFQUFNLENBQUMsR0FBQTBDLE1BQUE7RUFBQSxPQUFLMUMsS0FBSyxDQUFDZ0IsVUFBVTtBQUFBO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IyQixNQUFBO0VBQUEsSUFBQztJQUFFM0M7RUFBTSxDQUFDLEdBQUEyQyxNQUFBO0VBQUEsT0FBSzNDLEtBQUssQ0FBQ2dCLFVBQVU7QUFBQTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk0QixNQUFBO0VBQUEsSUFBQztJQUFFNUM7RUFBTSxDQUFDLEdBQUE0QyxNQUFBO0VBQUEsT0FBSzVDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAzYzY4OTcwMjVjMGY2NzgwNTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuaW1wb3J0IERlZmF1bHRCYWNrZHJvcCBmcm9tICcuLi9CYWNrZHJvcCc7XG5pbXBvcnQgRGVmYXVsdFNvY2lhbE1lZGlhIGZyb20gJy4uL1NvY2lhbE1lZGlhJztcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gJy4uL01lbnVCdXR0b24nO1xuXG5leHBvcnQgY29uc3QgQmFja2Ryb3AgPSBzdHlsZWQoRGVmYXVsdEJhY2tkcm9wKWBcbiAgYmFja2dyb3VuZDojMzAyZjJmO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNTRweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKFJvdylgXG4gICYgaDMge1xuICAgIG1hcmdpbjogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgcGFkZGluZzogMjlweCAwO1xuXG4gICAgJiBoMyB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZChSb3cpYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgcGFkZGluZzogMzJweCAwO1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJUZXh0ID0gc3R5bGVkLnBgXG4gICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJi5saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA2NHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICB9XG4gIH1cblxuICAmLmNvcHlyaWdodCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4wNzE0Mjg1NzE0O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjA3MTQyODU3MTQ7XG5cbiAgICAmLmNvcHlyaWdodCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogNTRweDtcbiAgICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTgxODE4MTgxODtcbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgICYuY29weXJpZ2h0IHtcbiAgICAgIGJvdHRvbTogMzJweDtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNvY2lhbE1lZGlhID0gc3R5bGVkKERlZmF1bHRTb2NpYWxNZWRpYSlgXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICYgYSBzdmcgcGF0aCB7XG4gICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXG4gIGhlaWdodDogNDYycHg7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5NHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkKG1vdGlvbi51bClgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBsZWZ0O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZChtb3Rpb24uYSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTdweDtcbiAgZm9udC1zaXplOiAzLjU2MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU5NjQ5MTIyODE7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc4NTcxNDI4NTc7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFycm93Q29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNjhweDtcbiAgaGVpZ2h0OiA1N3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuXG4gICYgc3ZnIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMXB4O1xuICAgIGhlaWdodDogNTdweDtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgZGlzcGxheTogbm9uZTtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVmlkZW9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBkaXNwbGF5OiBub25lO1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBWaWRlb1JldmVhbCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lsbC1jaGFuZ2U6IHdpZHRoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG5gO1xuXG5leHBvcnQgY29uc3QgVmlkZW8gPSBzdHlsZWQobW90aW9uLnZpZGVvKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgei1pbmRleDogLTE7XG5gO1xuXG5leHBvcnQgY29uc3QgQWRkcmVzcyA9IHN0eWxlZC5hZGRyZXNzYFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkKE1lbnVCdXR0b24pYFxuICBtYXJnaW46IC0yMHB4O1xuXG4gICYgc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICBgfTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9
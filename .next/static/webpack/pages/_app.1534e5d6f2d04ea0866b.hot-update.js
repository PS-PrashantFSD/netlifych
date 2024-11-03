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
    background: #302f2f;
  }

  &::before {
    transform: translateY(-50%) rotate(-45deg);
  }

  &::after {
    transform: translateY(-50%) rotate(45deg);
  }

  ${_ref15 => {
  let {
    theme
  } = _ref15;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJCYWNrZHJvcCIsInN0eWxlZCIsIkRlZmF1bHRCYWNrZHJvcCIsIkNvbnRhaW5lciIsImRpdiIsImNvbnRhaW5lclN0eWxlcyIsIlJvdyIsIkhlYWRlciIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiRm9vdGVyIiwiX3JlZjIiLCJzbWFsbCIsIl9yZWYzIiwiRm9vdGVyVGV4dCIsInAiLCJfcmVmNCIsInRleHQiLCJfcmVmNSIsIl9yZWY2IiwiU29jaWFsTWVkaWEiLCJEZWZhdWx0U29jaWFsTWVkaWEiLCJfcmVmNyIsImJhY2tncm91bmQiLCJfcmVmOCIsIk5hdmlnYXRpb24iLCJuYXYiLCJfcmVmOSIsIkxpc3QiLCJtb3Rpb24iLCJ1bCIsIkxpbmsiLCJhIiwiX3JlZjEwIiwiQXJyb3dDb250YWluZXIiLCJzcGFuIiwiX3JlZjExIiwiVmlkZW9Db250YWluZXIiLCJfcmVmMTIiLCJWaWRlb1JldmVhbCIsIl9yZWYxMyIsImNvbG9ycyIsInJlZCIsIlZpZGVvIiwidmlkZW8iLCJBZGRyZXNzIiwiYWRkcmVzcyIsIkNsb3NlQnV0dG9uIiwiTWVudUJ1dHRvbiIsIl9yZWYxNCIsIl9yZWYxNSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUNxQjtBQUNFO0FBQ3BCO0FBQ007QUFDVDtBQUVoQyxNQUFNQSxRQUFRLEdBQUdDLGlFQUFNLENBQUNDLGlEQUFlLENBQUM7QUFDL0M7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEdBQUc7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Q0FBQ2UsS0FBSyxDQUFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNQyxPQUFPLEdBQUcvQyx5REFBTSxDQUFDZ0QsT0FBTztBQUNyQztBQUNBO0FBQ0EsQ0FBQztBQUVNLE1BQU1DLFdBQVcsR0FBR2pELGlFQUFNLENBQUNrRCxtREFBVSxDQUFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGFBQWFDLE1BQUE7RUFBQSxJQUFDO0lBQUUxQztFQUFNLENBQUMsR0FBQTBDLE1BQUE7RUFBQSxPQUFLMUMsS0FBSyxDQUFDZ0IsVUFBVTtBQUFBO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTJCLE1BQUE7RUFBQSxJQUFDO0lBQUUzQztFQUFNLENBQUMsR0FBQTJDLE1BQUE7RUFBQSxPQUFLM0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTUzNGU1ZDZmMmQwNGVhMDg2NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5pbXBvcnQgRGVmYXVsdEJhY2tkcm9wIGZyb20gJy4uL0JhY2tkcm9wJztcbmltcG9ydCBEZWZhdWx0U29jaWFsTWVkaWEgZnJvbSAnLi4vU29jaWFsTWVkaWEnO1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi4vTWVudUJ1dHRvbic7XG5cbmV4cG9ydCBjb25zdCBCYWNrZHJvcCA9IHN0eWxlZChEZWZhdWx0QmFja2Ryb3ApYFxuICBiYWNrZ3JvdW5kOiMzMDJmMmY7XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke2NvbnRhaW5lclN0eWxlc307XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1NHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoUm93KWBcbiAgJiBoMyB7XG4gICAgbWFyZ2luOiAtMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBwYWRkaW5nOiAyOXB4IDA7XG5cbiAgICAmIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkKFJvdylgXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBwYWRkaW5nOiAzMnB4IDA7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlclRleHQgPSBzdHlsZWQucGBcbiAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBmbGV4LXNocmluazogMDtcblxuICAmLmxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIH1cbiAgfVxuXG4gICYuY29weXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjA3MTQyODU3MTQ7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMDcxNDI4NTcxNDtcblxuICAgICYuY29weXJpZ2h0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiA1NHB4O1xuICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4xODE4MTgxODE4O1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJi5jb3B5cmlnaHQge1xuICAgICAgYm90dG9tOiAzMnB4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgU29jaWFsTWVkaWEgPSBzdHlsZWQoRGVmYXVsdFNvY2lhbE1lZGlhKWBcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJiBhIHN2ZyBwYXRoIHtcbiAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICB3aWR0aDogdW5zZXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gc3R5bGVkLm5hdmBcbiAgaGVpZ2h0OiA0NjJweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDk0cHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQobW90aW9uLnVsKWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICYgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGxlZnQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkKG1vdGlvbi5hKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1N3B4O1xuICBmb250LXNpemU6IDMuNTYyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTk2NDkxMjI4MTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzg1NzE0Mjg1NztcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgQXJyb3dDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDU3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG5cbiAgJiBzdmcge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMTAxcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBkaXNwbGF5OiBub25lO1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBWaWRlb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFZpZGVvUmV2ZWFsID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWxsLWNoYW5nZTogd2lkdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBWaWRlbyA9IHN0eWxlZChtb3Rpb24udmlkZW8pYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBBZGRyZXNzID0gc3R5bGVkLmFkZHJlc3NgXG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQoTWVudUJ1dHRvbilgXG4gIG1hcmdpbjogLTIwcHg7XG5cbiAgJiBzcGFuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYmFja2dyb3VuZDogIzMwMmYyZjtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIGB9O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
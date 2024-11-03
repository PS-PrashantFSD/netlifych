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
  background: #302f2f;
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
    color: white;
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

  ${_ref13 => {
  let {
    theme
  } = _ref13;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJCYWNrZHJvcCIsInN0eWxlZCIsIkRlZmF1bHRCYWNrZHJvcCIsIkNvbnRhaW5lciIsImRpdiIsImNvbnRhaW5lclN0eWxlcyIsIlJvdyIsIkhlYWRlciIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiRm9vdGVyIiwiX3JlZjIiLCJzbWFsbCIsIl9yZWYzIiwiRm9vdGVyVGV4dCIsInAiLCJfcmVmNCIsInRleHQiLCJfcmVmNSIsIl9yZWY2IiwiU29jaWFsTWVkaWEiLCJEZWZhdWx0U29jaWFsTWVkaWEiLCJfcmVmNyIsImJhY2tncm91bmQiLCJfcmVmOCIsIk5hdmlnYXRpb24iLCJuYXYiLCJfcmVmOSIsIkxpc3QiLCJtb3Rpb24iLCJ1bCIsIkxpbmsiLCJhIiwiX3JlZjEwIiwiQXJyb3dDb250YWluZXIiLCJzcGFuIiwiX3JlZjExIiwiVmlkZW9Db250YWluZXIiLCJfcmVmMTIiLCJWaWRlb1JldmVhbCIsIlZpZGVvIiwidmlkZW8iLCJBZGRyZXNzIiwiYWRkcmVzcyIsIkNsb3NlQnV0dG9uIiwiTWVudUJ1dHRvbiIsIl9yZWYxMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUNxQjtBQUNFO0FBQ3BCO0FBQ007QUFDVDtBQUVoQyxNQUFNQSxRQUFRLEdBQUdDLGlFQUFNLENBQUNDLGlEQUFlLENBQUM7QUFDL0M7QUFDQTtBQUNBLENBQUM7QUFFTSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEdBQUc7QUFDbkMsSUFBSUMsZ0VBQWU7QUFDbkI7QUFDQTtBQUNB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QUFXLEdBQUc5QyxpRUFBTSxDQUFDK0MsbURBQVUsQ0FBQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsTUFBQTtFQUFBLElBQUM7SUFBRXZDO0VBQU0sQ0FBQyxHQUFBdUMsTUFBQTtFQUFBLE9BQUt2QyxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ZTE4ZGI1NWJmYjI4NTcyZGFmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcbmltcG9ydCBEZWZhdWx0QmFja2Ryb3AgZnJvbSAnLi4vQmFja2Ryb3AnO1xuaW1wb3J0IERlZmF1bHRTb2NpYWxNZWRpYSBmcm9tICcuLi9Tb2NpYWxNZWRpYSc7XG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tICcuLi9NZW51QnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IEJhY2tkcm9wID0gc3R5bGVkKERlZmF1bHRCYWNrZHJvcClgXG4gIGJhY2tncm91bmQ6IzMwMmYyZjtcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDU0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZChSb3cpYFxuICAmIGgzIHtcbiAgICBtYXJnaW46IC0yMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHBhZGRpbmc6IDI5cHggMDtcblxuICAgICYgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQoUm93KWBcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHBhZGRpbmc6IDMycHggMDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyVGV4dCA9IHN0eWxlZC5wYFxuICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYubGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNjRweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgfVxuICB9XG5cbiAgJi5jb3B5cmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMDcxNDI4NTcxNDtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4wNzE0Mjg1NzE0O1xuXG4gICAgJi5jb3B5cmlnaHQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDU0cHg7XG4gICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4MTgxODE4MTg7XG4gICAgfVxuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICAmLmNvcHlyaWdodCB7XG4gICAgICBib3R0b206IDMycHg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTb2NpYWxNZWRpYSA9IHN0eWxlZChEZWZhdWx0U29jaWFsTWVkaWEpYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcblxuICAmIGEgc3ZnIHBhdGgge1xuICAgIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHdpZHRoOiB1bnNldDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb24gPSBzdHlsZWQubmF2YFxuICBoZWlnaHQ6IDQ2MnB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTRweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZChtb3Rpb24udWwpYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJiBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogbGVmdDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpbmsgPSBzdHlsZWQobW90aW9uLmEpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDU3cHg7XG4gIGZvbnQtc2l6ZTogMy41NjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS41OTY0OTEyMjgxO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43ODU3MTQyODU3O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcnJvd0NvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNTdweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcblxuICAmIHN2ZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDFweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFZpZGVvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgZGlzcGxheTogbm9uZTtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVmlkZW9SZXZlYWwgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpbGwtY2hhbmdlOiB3aWR0aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBiYWNrZ3JvdW5kOiAjMzAyZjJmO1xuYDtcblxuZXhwb3J0IGNvbnN0IFZpZGVvID0gc3R5bGVkKG1vdGlvbi52aWRlbylgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHotaW5kZXg6IC0xO1xuYDtcblxuZXhwb3J0IGNvbnN0IEFkZHJlc3MgPSBzdHlsZWQuYWRkcmVzc2BcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZChNZW51QnV0dG9uKWBcbiAgbWFyZ2luOiAtMjBweDtcblxuICAmIHNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYmFja2dyb3VuZDogIzMwMmYyZjtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIGB9O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/Contact/styles.js":
/*!*******************************************!*\
  !*** ./components/Home/Contact/styles.js ***!
  \*******************************************/
/*! exports provided: FooterContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContainer", function() { return FooterContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");



const FooterContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].footer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0;
  background-color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.background;
}};
  color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.colors.red;
}};

  & .logo {
    margin-bottom: 20px;
    align-self: center; // Center logo
  }

  & .description {
    text-align: center;
    margin-bottom: 40px;
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_2__["secondaryFontStyle"]};
  }

  & .contact-info {
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start;
    width: 100%;
    max-width: 800px; 
    margin-bottom: 20px;

    & .column {
      flex: 1;
      text-align: center; 
      ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_2__["secondaryFontStyle"]}; 
      margin-bottom: 10px; 
    }
  }

  & .footer-links {
    text-align: center; 
    margin-bottom: 20px;

    & a {
      color: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.colors.red;
}}; 
      text-decoration: none; 
      margin: 0 10px; 

      &:hover {
        text-decoration: underline; 
      }
    }
  }

  & .social-media {
    margin-bottom: 20px;
    align-self: center; 
  }

  & .footer-note {
    font-size: 14px;
    align-self: center; 
  }

  // Media queries for responsive design
  @media (max-width: 600px) {
    padding: 20px 10px;

    & .contact-info {
      flex-direction: column; // Stack columns on smaller screens
      align-items: center; // Center align items in the column
    }

    & .column {
      width: 100%; // Make columns take full width
      margin: 50px; // Adjust spacing for smaller screens
      text-align: center; // Ensure text is centered
    }

    & .footer-links,
    & .social-media,
    & .footer-note {
      width: 100%; // Ensure links and notes take full width
      text-align: center; // Center align text
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkZvb3RlckNvbnRhaW5lciIsInN0eWxlZCIsIm1vdGlvbiIsImZvb3RlciIsIl9yZWYiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJfcmVmMiIsInJlZCIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNBO0FBQzBCO0FBRTFELE1BQU1BLGVBQWUsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsTUFBTSxDQUFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0JDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFVBQVU7QUFBQTtBQUM1RCxXQUFXQyxLQUFBO0VBQUEsSUFBQztJQUFFSDtFQUFNLENBQUMsR0FBQUcsS0FBQTtFQUFBLE9BQUtILEtBQUssQ0FBQ0MsTUFBTSxDQUFDRyxHQUFHO0FBQUE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsc0VBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUUEsc0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWVDLEtBQUE7RUFBQSxJQUFDO0lBQUVOO0VBQU0sQ0FBQyxHQUFBTSxLQUFBO0VBQUEsT0FBS04sS0FBSyxDQUFDQyxNQUFNLENBQUNHLEdBQUc7QUFBQTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40N2RiZmNhNmZjMjM1N2RlNmNlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmZvb3RlcilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgcGFkZGluZzogNDBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG5cbiAgJiAubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IC8vIENlbnRlciBsb2dvXG4gIH1cblxuICAmIC5kZXNjcmlwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICB9XG5cbiAgJiAuY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDsgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogODAwcHg7IFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAmIC5jb2x1bW4ge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07IFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXG4gICAgfVxuICB9XG5cbiAgJiAuZm9vdGVyLWxpbmtzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAmIGEge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07IFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcbiAgICAgIG1hcmdpbjogMCAxMHB4OyBcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmIC5zb2NpYWwtbWVkaWEge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyBcbiAgfVxuXG4gICYgLmZvb3Rlci1ub3RlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyBcbiAgfVxuXG4gIC8vIE1lZGlhIHF1ZXJpZXMgZm9yIHJlc3BvbnNpdmUgZGVzaWduXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcblxuICAgICYgLmNvbnRhY3QtaW5mbyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvLyBTdGFjayBjb2x1bW5zIG9uIHNtYWxsZXIgc2NyZWVuc1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLy8gQ2VudGVyIGFsaWduIGl0ZW1zIGluIHRoZSBjb2x1bW5cbiAgICB9XG5cbiAgICAmIC5jb2x1bW4ge1xuICAgICAgd2lkdGg6IDEwMCU7IC8vIE1ha2UgY29sdW1ucyB0YWtlIGZ1bGwgd2lkdGhcbiAgICAgIG1hcmdpbjogNTBweDsgLy8gQWRqdXN0IHNwYWNpbmcgZm9yIHNtYWxsZXIgc2NyZWVuc1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvLyBFbnN1cmUgdGV4dCBpcyBjZW50ZXJlZFxuICAgIH1cblxuICAgICYgLmZvb3Rlci1saW5rcyxcbiAgICAmIC5zb2NpYWwtbWVkaWEsXG4gICAgJiAuZm9vdGVyLW5vdGUge1xuICAgICAgd2lkdGg6IDEwMCU7IC8vIEVuc3VyZSBsaW5rcyBhbmQgbm90ZXMgdGFrZSBmdWxsIHdpZHRoXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vIENlbnRlciBhbGlnbiB0ZXh0XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
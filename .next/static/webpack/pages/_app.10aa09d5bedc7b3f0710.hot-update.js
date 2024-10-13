webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/SocialMedia/SocialMedia.jsx":
/*!************************************************!*\
  !*** ./components/SocialMedia/SocialMedia.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons */ "./components/Icons/index.js");
/* harmony import */ var _StickyCursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StickyCursor */ "./components/StickyCursor/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/SocialMedia/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\SocialMedia\\SocialMedia.jsx",
  _s = $RefreshSig$();
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






const medias = [{
  component: _Icons__WEBPACK_IMPORTED_MODULE_3__["Instagram"],
  url: 'instagram.com/_luminexa/'
}, {
  component: _Icons__WEBPACK_IMPORTED_MODULE_3__["Facebook"],
  url: 'https://www.facebook.com/arluminexa/'
}, {
  component: _Icons__WEBPACK_IMPORTED_MODULE_3__["Youtube"],
  url: 'https://youtube.com'
}, {
  component: _Icons__WEBPACK_IMPORTED_MODULE_3__["Twitter"],
  url: 'https://twitter.com/_luminexa'
}, {
  component: _Icons__WEBPACK_IMPORTED_MODULE_3__["Linkedin"],
  url: 'https://linkedin.com/company/luminexa-technology'
}];
const SocialMedia = props => {
  _s();
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], _objectSpread(_objectSpread({}, props), {}, {
    children: medias.map(_ref => {
      let {
        component: Component,
        url
      } = _ref;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_StickyCursor__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          target: "_blank",
          href: url,
          onMouseEnter: addCursorBorder,
          onMouseLeave: removeCursorBorder,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, url, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};
_s(SocialMedia, "VQIa5kJow1cnDAoufpk1S1anIIc=", false, function () {
  return [_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c = SocialMedia;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(SocialMedia));
var _c, _c2;
$RefreshReg$(_c, "SocialMedia");
$RefreshReg$(_c2, "%default%");

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

/***/ }),

/***/ "./components/SocialMedia/styles.js":
/*!******************************************!*\
  !*** ./components/SocialMedia/styles.js ***!
  \******************************************/
/*! exports provided: Container, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shared/text */ "./styles/shared/text.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end; /* Changed from flex-start to flex-end */
  margin-right: -10px;

  ${_ref => {
  let {
    theme
  } = _ref;
  return theme.breakpoints.small`
    margin-left: -10px;
  `;
}};
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_1__["secondaryFontStyle"]};
  padding: 0 10px;
  display: inline-block;
  vertical-align: middle;
  width: 41px;
  height: 21px;
  line-height: 24px;

  &:nth-of-type(2) {
    width: 31px;
    height: 24px;
  }

  &:hover svg path {
    fill: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}};
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU29jaWFsTWVkaWEvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIm1lZGlhcyIsImNvbXBvbmVudCIsIkluc3RhZ3JhbSIsInVybCIsIkZhY2Vib29rIiwiWW91dHViZSIsIlR3aXR0ZXIiLCJMaW5rZWRpbiIsIlNvY2lhbE1lZGlhIiwicHJvcHMiLCJfcyIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiX2pzeERFViIsIkNvbnRhaW5lciIsIl9vYmplY3RTcHJlYWQiLCJjaGlsZHJlbiIsIm1hcCIsIl9yZWYiLCJDb21wb25lbnQiLCJTdGlja3lDdXJzb3IiLCJMaW5rIiwidGFyZ2V0IiwiaHJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwiX2MyIiwiUmVhY3QiLCJtZW1vIiwiJFJlZnJlc2hSZWckIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtYWxsIiwiYSIsInNlY29uZGFyeUZvbnRTdHlsZSIsIl9yZWYyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUM4QjtBQUNtQjtBQUNoQztBQUNBO0FBQUE7QUFFM0MsTUFBTUEsTUFBTSxHQUFHLENBQ2I7RUFBRUMsU0FBUyxFQUFFQyxnREFBUztFQUFFQyxHQUFHLEVBQUU7QUFBMkIsQ0FBQyxFQUN6RDtFQUFFRixTQUFTLEVBQUVHLCtDQUFRO0VBQUVELEdBQUcsRUFBRTtBQUF1QyxDQUFDLEVBQ3BFO0VBQUVGLFNBQVMsRUFBRUksOENBQU87RUFBRUYsR0FBRyxFQUFFO0FBQXNCLENBQUMsRUFDbEQ7RUFBRUYsU0FBUyxFQUFFSyw4Q0FBTztFQUFFSCxHQUFHLEVBQUU7QUFBZ0MsQ0FBQyxFQUM1RDtFQUFFRixTQUFTLEVBQUVNLCtDQUFRO0VBQUVKLEdBQUcsRUFBRTtBQUFtRCxDQUFDLENBQ2pGO0FBRUQsTUFBTUssV0FBVyxHQUFHQyxLQUFLLElBQUk7RUFBQUMsRUFBQTtFQUMzQixNQUFNO0lBQUVDLGVBQWU7SUFBRUM7RUFBbUIsQ0FBQyxHQUFHQyxxRUFBYyxDQUFDLENBQUM7RUFFaEUsb0JBQ0VDLG9FQUFBLENBQUNDLGlEQUFTLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUFLUCxLQUFLO0lBQUFRLFFBQUEsRUFDakJqQixNQUFNLENBQUNrQixHQUFHLENBQUNDLElBQUE7TUFBQSxJQUFDO1FBQUVsQixTQUFTLEVBQUVtQixTQUFTO1FBQUVqQjtNQUFJLENBQUMsR0FBQWdCLElBQUE7TUFBQSxvQkFDeENMLG9FQUFBLENBQUNPLHFEQUFZO1FBQUFKLFFBQUEsZUFDWEgsb0VBQUEsQ0FBQ1EsNENBQUk7VUFDSEMsTUFBTSxFQUFDLFFBQVE7VUFDZkMsSUFBSSxFQUFFckIsR0FBSTtVQUNWc0IsWUFBWSxFQUFFZCxlQUFnQjtVQUM5QmUsWUFBWSxFQUFFZCxrQkFBbUI7VUFBQUssUUFBQSxlQUVqQ0gsb0VBQUEsQ0FBQ00sU0FBUztZQUFBTyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRTtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNUO01BQUMsR0FSVTNCLEdBQUc7UUFBQXdCLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQVNSLENBQUM7SUFBQSxDQUNoQjtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNPLENBQUM7QUFFaEIsQ0FBQztBQUFDcEIsRUFBQSxDQW5CSUYsV0FBVztFQUFBLFFBQ2lDSyw2REFBYztBQUFBO0FBQUFrQixFQUFBLEdBRDFEdkIsV0FBVztBQXFCakJ3QixrRUFBQSxnQkFBZUMsNENBQUssQ0FBQ0MsSUFBSSxDQUFDMUIsV0FBVyxDQUFDLEVBQUM7QUFBQSxJQUFBdUIsRUFBQSxFQUFBQyxHQUFBO0FBQUFHLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFILEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUN1QjtBQUV2RCxNQUFNakIsU0FBUyxHQUFHcUIseURBQU0sQ0FBQ0MsR0FBRztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSWxCLElBQUE7RUFBQSxJQUFDO0lBQUVtQjtFQUFNLENBQUMsR0FBQW5CLElBQUE7RUFBQSxPQUFLbUIsS0FBSyxDQUFDQyxXQUFXLENBQUNDLEtBQUs7QUFDMUM7QUFDQSxHQUFHO0FBQUE7QUFDSCxDQUFDO0FBRU0sTUFBTWxCLElBQUksR0FBR2MseURBQU0sQ0FBQ0ssQ0FBQztBQUM1QixJQUFJQyxzRUFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZQyxLQUFBO0VBQUEsSUFBQztJQUFFTDtFQUFNLENBQUMsR0FBQUssS0FBQTtFQUFBLE9BQUtMLEtBQUssQ0FBQ00sSUFBSTtBQUFBO0FBQ3JDO0FBQ0EsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjEwYWEwOWQ1YmVkYzdiM2YwNzEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHsgSW5zdGFncmFtLCBGYWNlYm9vaywgWW91dHViZSwgVHdpdHRlciwgTGlua2VkaW4gfSBmcm9tICcuLi9JY29ucyc7XHJcbmltcG9ydCBTdGlja3lDdXJzb3IgZnJvbSAnLi4vU3RpY2t5Q3Vyc29yJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgbWVkaWFzID0gW1xyXG4gIHsgY29tcG9uZW50OiBJbnN0YWdyYW0sIHVybDogJ2luc3RhZ3JhbS5jb20vX2x1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogRmFjZWJvb2ssIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hcmx1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogWW91dHViZSwgdXJsOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScgfSxcclxuICB7IGNvbXBvbmVudDogVHdpdHRlciwgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9fbHVtaW5leGEnIH0sXHJcbiAgeyBjb21wb25lbnQ6IExpbmtlZGluLCB1cmw6ICdodHRwczovL2xpbmtlZGluLmNvbS9jb21wYW55L2x1bWluZXhhLXRlY2hub2xvZ3knIH0sXHJcbl07XHJcblxyXG5jb25zdCBTb2NpYWxNZWRpYSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB7Li4ucHJvcHN9PlxyXG4gICAgICB7bWVkaWFzLm1hcCgoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgdXJsIH0pID0+IChcclxuICAgICAgICA8U3RpY2t5Q3Vyc29yIGtleT17dXJsfT5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9TdGlja3lDdXJzb3I+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU29jaWFsTWVkaWEpO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgLyogQ2hhbmdlZCBmcm9tIGZsZXgtc3RhcnQgdG8gZmxleC1lbmQgKi9cbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICB3aWR0aDogMzFweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAmOmhvdmVyIHN2ZyBwYXRoIHtcbiAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
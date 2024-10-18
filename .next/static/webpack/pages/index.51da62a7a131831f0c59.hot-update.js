webpackHotUpdate_N_E("pages/index",{

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
  component: _Icons__WEBPACK_IMPORTED_MODULE_3__["Twitter"],
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giXSwibmFtZXMiOlsibWVkaWFzIiwiY29tcG9uZW50IiwiSW5zdGFncmFtIiwidXJsIiwiVHdpdHRlciIsIllvdXR1YmUiLCJMaW5rZWRpbiIsIlNvY2lhbE1lZGlhIiwicHJvcHMiLCJfcyIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiX2pzeERFViIsIkNvbnRhaW5lciIsIl9vYmplY3RTcHJlYWQiLCJjaGlsZHJlbiIsIm1hcCIsIl9yZWYiLCJDb21wb25lbnQiLCJTdGlja3lDdXJzb3IiLCJMaW5rIiwidGFyZ2V0IiwiaHJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwiX2MyIiwiUmVhY3QiLCJtZW1vIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQzhCO0FBQ21CO0FBQ2hDO0FBQ0E7QUFBQTtBQUUzQyxNQUFNQSxNQUFNLEdBQUcsQ0FDYjtFQUFFQyxTQUFTLEVBQUVDLGdEQUFTO0VBQUVDLEdBQUcsRUFBRTtBQUEyQixDQUFDLEVBQ3pEO0VBQUVGLFNBQVMsRUFBRUcsOENBQU87RUFBRUQsR0FBRyxFQUFFO0FBQXVDLENBQUMsRUFDbkU7RUFBRUYsU0FBUyxFQUFFSSw4Q0FBTztFQUFFRixHQUFHLEVBQUU7QUFBc0IsQ0FBQyxFQUNsRDtFQUFFRixTQUFTLEVBQUVHLDhDQUFPO0VBQUVELEdBQUcsRUFBRTtBQUFnQyxDQUFDLEVBQzVEO0VBQUVGLFNBQVMsRUFBRUssK0NBQVE7RUFBRUgsR0FBRyxFQUFFO0FBQW1ELENBQUMsQ0FDakY7QUFFRCxNQUFNSSxXQUFXLEdBQUdDLEtBQUssSUFBSTtFQUFBQyxFQUFBO0VBQzNCLE1BQU07SUFBRUMsZUFBZTtJQUFFQztFQUFtQixDQUFDLEdBQUdDLHFFQUFjLENBQUMsQ0FBQztFQUVoRSxvQkFDRUMsb0VBQUEsQ0FBQ0MsaURBQVMsRUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQUtQLEtBQUs7SUFBQVEsUUFBQSxFQUNqQmhCLE1BQU0sQ0FBQ2lCLEdBQUcsQ0FBQ0MsSUFBQTtNQUFBLElBQUM7UUFBRWpCLFNBQVMsRUFBRWtCLFNBQVM7UUFBRWhCO01BQUksQ0FBQyxHQUFBZSxJQUFBO01BQUEsb0JBQ3hDTCxvRUFBQSxDQUFDTyxxREFBWTtRQUFBSixRQUFBLGVBQ1hILG9FQUFBLENBQUNRLDRDQUFJO1VBQ0hDLE1BQU0sRUFBQyxRQUFRO1VBQ2ZDLElBQUksRUFBRXBCLEdBQUk7VUFDVnFCLFlBQVksRUFBRWQsZUFBZ0I7VUFDOUJlLFlBQVksRUFBRWQsa0JBQW1CO1VBQUFLLFFBQUEsZUFFakNILG9FQUFBLENBQUNNLFNBQVM7WUFBQU8sUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQUU7UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDVDtNQUFDLEdBUlUxQixHQUFHO1FBQUF1QixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFTUixDQUFDO0lBQUEsQ0FDaEI7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTyxDQUFDO0FBRWhCLENBQUM7QUFBQ3BCLEVBQUEsQ0FuQklGLFdBQVc7RUFBQSxRQUNpQ0ssNkRBQWM7QUFBQTtBQUFBa0IsRUFBQSxHQUQxRHZCLFdBQVc7QUFxQmpCd0Isa0VBQUEsZ0JBQWVDLDRDQUFLLENBQUNDLElBQUksQ0FBQzFCLFdBQVcsQ0FBQyxFQUFDO0FBQUEsSUFBQXVCLEVBQUEsRUFBQUMsR0FBQTtBQUFBRyxZQUFBLENBQUFKLEVBQUE7QUFBQUksWUFBQSxDQUFBSCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxZGE2MmE3YTEzMTgzMWYwYzU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHsgSW5zdGFncmFtLCBGYWNlYm9vaywgWW91dHViZSwgVHdpdHRlciwgTGlua2VkaW4gfSBmcm9tICcuLi9JY29ucyc7XHJcbmltcG9ydCBTdGlja3lDdXJzb3IgZnJvbSAnLi4vU3RpY2t5Q3Vyc29yJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgbWVkaWFzID0gW1xyXG4gIHsgY29tcG9uZW50OiBJbnN0YWdyYW0sIHVybDogJ2luc3RhZ3JhbS5jb20vX2x1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogVHdpdHRlciwgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FybHVtaW5leGEvJyB9LFxyXG4gIHsgY29tcG9uZW50OiBZb3V0dWJlLCB1cmw6ICdodHRwczovL3lvdXR1YmUuY29tJyB9LFxyXG4gIHsgY29tcG9uZW50OiBUd2l0dGVyLCB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL19sdW1pbmV4YScgfSxcclxuICB7IGNvbXBvbmVudDogTGlua2VkaW4sIHVybDogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2NvbXBhbnkvbHVtaW5leGEtdGVjaG5vbG9neScgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNvY2lhbE1lZGlhID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHsuLi5wcm9wc30+XHJcbiAgICAgIHttZWRpYXMubWFwKCh7IGNvbXBvbmVudDogQ29tcG9uZW50LCB1cmwgfSkgPT4gKFxyXG4gICAgICAgIDxTdGlja3lDdXJzb3Iga2V5PXt1cmx9PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1N0aWNreUN1cnNvcj5cclxuICAgICAgKSl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTb2NpYWxNZWRpYSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/AppBar/AppBar.jsx":
/*!**************************************!*\
  !*** ./components/AppBar/AppBar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/AppBar/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\AppBar\\AppBar.jsx",
  _s = $RefreshSig$();
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




const getStyles = function () {
  let direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (direction === 'down') return {
    top: 0
  };
  if (direction === 'up') return {
    bottom: 0
  };
  return {};
};
const variants = {
  hidden: {
    y: -131
  },
  show: {
    y: 0
  }
};
const AppBar = props => {
  _s();
  const {
      direction = 'down',
      style: styleProp = {},
      children // Allow children to be passed in for footer content
    } = props,
    rootProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["direction", "style", "children"]);
  const [hidden, setHidden] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    const handleScroll = () => {
      let shouldHide = false;
      let intersection = 105; // Default offset

      let currentYPosition = direction === 'down' ? window.scrollY : document.documentElement.scrollTop + window.innerHeight;
      if (direction === 'up') {
        intersection = document.documentElement.scrollHeight - 105;
      }
      shouldHide = currentYPosition > intersection;
      if (shouldHide !== hidden) {
        setHidden(shouldHide);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [hidden, direction]);
  const styles = getStyles(direction);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Slider"], _objectSpread(_objectSpread({
    variants: variants,
    initial: "hidden",
    animate: hidden ? 'hidden' : 'show',
    transition: {
      duration: 1,
      ease: [0.666, 0, 0.237, 1]
    },
    style: _objectSpread(_objectSpread({}, styles), styleProp)
  }, rootProps), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: [children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined);
};
_s(AppBar, "Qg+2Lxp070QybjAQuZLHz/3Dw1k=");
_c = AppBar;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(AppBar));
var _c, _c2;
$RefreshReg$(_c, "AppBar");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBCYXIvQXBwQmFyLmpzeCJdLCJuYW1lcyI6WyJnZXRTdHlsZXMiLCJkaXJlY3Rpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0b3AiLCJib3R0b20iLCJ2YXJpYW50cyIsImhpZGRlbiIsInkiLCJzaG93IiwiQXBwQmFyIiwicHJvcHMiLCJfcyIsInN0eWxlIiwic3R5bGVQcm9wIiwiY2hpbGRyZW4iLCJyb290UHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJzZXRIaWRkZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwic2hvdWxkSGlkZSIsImludGVyc2VjdGlvbiIsImN1cnJlbnRZUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX2pzeERFViIsIlNsaWRlciIsIl9vYmplY3RTcHJlYWQiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJDb250YWluZXIiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDNEI7QUFBQTtBQUV6RCxNQUFNQSxTQUFTLEdBQUcsU0FBQUEsQ0FBQSxFQUFvQjtFQUFBLElBQW5CQyxTQUFTLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7RUFDL0IsSUFBSUQsU0FBUyxLQUFLLE1BQU0sRUFBRSxPQUFPO0lBQUVJLEdBQUcsRUFBRTtFQUFFLENBQUM7RUFDM0MsSUFBSUosU0FBUyxLQUFLLElBQUksRUFBRSxPQUFPO0lBQUVLLE1BQU0sRUFBRTtFQUFFLENBQUM7RUFFNUMsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsTUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLE1BQU0sRUFBRTtJQUFFQyxDQUFDLEVBQUUsQ0FBQztFQUFJLENBQUM7RUFDbkJDLElBQUksRUFBRTtJQUFFRCxDQUFDLEVBQUU7RUFBRTtBQUNmLENBQUM7QUFFRCxNQUFNRSxNQUFNLEdBQUlDLEtBQUssSUFBSztFQUFBQyxFQUFBO0VBQ3hCLE1BQU07TUFDSlosU0FBUyxHQUFHLE1BQU07TUFDbEJhLEtBQUssRUFBRUMsU0FBUyxHQUFHLENBQUMsQ0FBQztNQUNyQkMsUUFBUSxDQUFFO0lBRVosQ0FBQyxHQUFHSixLQUFLO0lBREpLLFNBQVMsR0FBQUMsa0dBQUEsQ0FDVk4sS0FBSztFQUNULE1BQU0sQ0FBQ0osTUFBTSxFQUFFVyxTQUFTLENBQUMsR0FBR0MsNENBQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztFQUVqREQsNENBQUssQ0FBQ0UsU0FBUyxDQUFDLE1BQU07SUFDcEIsTUFBTUMsWUFBWSxHQUFHQSxDQUFBLEtBQU07TUFDekIsSUFBSUMsVUFBVSxHQUFHLEtBQUs7TUFDdEIsSUFBSUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDOztNQUV4QixJQUFJQyxnQkFBZ0IsR0FBR3pCLFNBQVMsS0FBSyxNQUFNLEdBQUcwQixNQUFNLENBQUNDLE9BQU8sR0FDMURDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0ssV0FBVztNQUV6RCxJQUFJL0IsU0FBUyxLQUFLLElBQUksRUFBRTtRQUN0QndCLFlBQVksR0FBR0ksUUFBUSxDQUFDQyxlQUFlLENBQUNHLFlBQVksR0FBRyxHQUFHO01BQzVEO01BRUFULFVBQVUsR0FBR0UsZ0JBQWdCLEdBQUdELFlBQVk7TUFDNUMsSUFBSUQsVUFBVSxLQUFLaEIsTUFBTSxFQUFFO1FBQ3pCVyxTQUFTLENBQUNLLFVBQVUsQ0FBQztNQUN2QjtJQUNGLENBQUM7SUFFREQsWUFBWSxDQUFDLENBQUM7SUFFZEksTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVYLFlBQVksRUFBRSxLQUFLLENBQUM7SUFFdEQsT0FBTyxNQUFNO01BQ1hJLE1BQU0sQ0FBQ1EsbUJBQW1CLENBQUMsUUFBUSxFQUFFWixZQUFZLEVBQUUsS0FBSyxDQUFDO0lBQzNELENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ2YsTUFBTSxFQUFFUCxTQUFTLENBQUMsQ0FBQztFQUV2QixNQUFNbUMsTUFBTSxHQUFHcEMsU0FBUyxDQUFDQyxTQUFTLENBQUM7RUFFbkMsb0JBQ0VvQyxvRUFBQSxDQUFDQyw4Q0FBTSxFQUFBQyxhQUFBLENBQUFBLGFBQUE7SUFDTGhDLFFBQVEsRUFBRUEsUUFBUztJQUNuQmlDLE9BQU8sRUFBQyxRQUFRO0lBQ2hCQyxPQUFPLEVBQUVqQyxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU87SUFDcENrQyxVQUFVLEVBQUU7TUFDVkMsUUFBUSxFQUFFLENBQUM7TUFDWEMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFFO0lBQ0Y5QixLQUFLLEVBQUF5QixhQUFBLENBQUFBLGFBQUEsS0FDQUgsTUFBTSxHQUNOckIsU0FBUztFQUNaLEdBQ0VFLFNBQVM7SUFBQUQsUUFBQSxlQUVicUIsb0VBQUEsQ0FBQ1EsaURBQVM7TUFBQTdCLFFBQUEsR0FFUEEsUUFBUSxFQUFDLEdBQUM7SUFBQTtNQUFBOEIsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0Y7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTixDQUFDO0FBRWIsQ0FBQztBQUFDcEMsRUFBQSxDQTNESUYsTUFBTTtBQUFBdUMsRUFBQSxHQUFOdkMsTUFBTTtBQTZEWndDLGtFQUFBLGdCQUFlL0IsNENBQUssQ0FBQ2dDLElBQUksQ0FBQ3pDLE1BQU0sQ0FBQyxFQUFDO0FBQUEsSUFBQXVDLEVBQUEsRUFBQUMsR0FBQTtBQUFBRSxZQUFBLENBQUFILEVBQUE7QUFBQUcsWUFBQSxDQUFBRixHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDk0YTRjZDkxODU5ODg0ZDAxMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFNsaWRlciwgQ29udGFpbmVyLCBTdHlsZWRMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgZ2V0U3R5bGVzID0gKGRpcmVjdGlvbiA9ICcnKSA9PiB7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSByZXR1cm4geyB0b3A6IDAgfTtcclxuICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSByZXR1cm4geyBib3R0b206IDAgfTtcclxuXHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaGlkZGVuOiB7IHk6IC0xMzEgfSxcclxuICBzaG93OiB7IHk6IDAgfSxcclxufTtcclxuXHJcbmNvbnN0IEFwcEJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGRpcmVjdGlvbiA9ICdkb3duJyxcclxuICAgIHN0eWxlOiBzdHlsZVByb3AgPSB7fSxcclxuICAgIGNoaWxkcmVuLCAvLyBBbGxvdyBjaGlsZHJlbiB0byBiZSBwYXNzZWQgaW4gZm9yIGZvb3RlciBjb250ZW50XHJcbiAgICAuLi5yb290UHJvcHNcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgbGV0IHNob3VsZEhpZGUgPSBmYWxzZTtcclxuICAgICAgbGV0IGludGVyc2VjdGlvbiA9IDEwNTsgLy8gRGVmYXVsdCBvZmZzZXRcclxuXHJcbiAgICAgIGxldCBjdXJyZW50WVBvc2l0aW9uID0gZGlyZWN0aW9uID09PSAnZG93bicgPyB3aW5kb3cuc2Nyb2xsWSA6IFxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XHJcbiAgICAgICAgaW50ZXJzZWN0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDEwNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2hvdWxkSGlkZSA9IGN1cnJlbnRZUG9zaXRpb24gPiBpbnRlcnNlY3Rpb247XHJcbiAgICAgIGlmIChzaG91bGRIaWRlICE9PSBoaWRkZW4pIHtcclxuICAgICAgICBzZXRIaWRkZW4oc2hvdWxkSGlkZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlU2Nyb2xsKCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2hpZGRlbiwgZGlyZWN0aW9uXSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyhkaXJlY3Rpb24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlclxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICBhbmltYXRlPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdzaG93J31cclxuICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IFswLjY2NiwgMCwgMC4yMzcsIDFdLFxyXG4gICAgICB9fVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlcyxcclxuICAgICAgICAuLi5zdHlsZVByb3AsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yb290UHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgey8qIFJlbW92ZWQgTG9nbyAqL31cclxuICAgICAgICB7Y2hpbGRyZW59IHsvKiBSZW5kZXIgZm9vdGVyIGNvbnRlbnQgaGVyZSAqL31cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1NsaWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBcHBCYXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
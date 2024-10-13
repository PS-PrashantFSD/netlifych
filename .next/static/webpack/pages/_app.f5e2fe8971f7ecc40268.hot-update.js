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
/* harmony import */ var _Icons_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Logo */ "./components/Icons/Logo.jsx");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MenuButton */ "./components/MenuButton/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/AppBar/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


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
      offset = 105,
      logoProps = {},
      style: styleProp = {}
    } = props,
    rootProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["direction", "offset", "logoProps", "style"]);
  const [hidden, setHidden] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    const handleScroll = () => {
      let shouldHide = false;
      let intersection = offset;
      let currentYPosition = 0;
      if (direction === 'down') {
        currentYPosition = window.scrollY;
      } else if (direction === 'up') {
        currentYPosition = document.documentElement.scrollTop + window.innerHeight;
        intersection = document.documentElement.scrollHeight - offset;
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
  }, [hidden, direction, offset]);
  const styles = getStyles(direction);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Slider"], _objectSpread(_objectSpread({
    variants: variants,
    initial: "hidden",
    animate: hidden ? 'hidden' : 'show',
    transition: {
      duration: 1,
      ease: [0.666, 0, 0.237, 1]
    },
    style: _objectSpread(_objectSpread({}, styles), styleProp)
  }, rootProps), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledLink"], {
          title: "nexar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Icons_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, logoProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["MenuWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_MenuButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBCYXIvQXBwQmFyLmpzeCJdLCJuYW1lcyI6WyJnZXRTdHlsZXMiLCJkaXJlY3Rpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0b3AiLCJib3R0b20iLCJ2YXJpYW50cyIsImhpZGRlbiIsInkiLCJzaG93IiwiQXBwQmFyIiwicHJvcHMiLCJfcyIsIm9mZnNldCIsImxvZ29Qcm9wcyIsInN0eWxlIiwic3R5bGVQcm9wIiwicm9vdFByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic2V0SGlkZGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInNob3VsZEhpZGUiLCJpbnRlcnNlY3Rpb24iLCJjdXJyZW50WVBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsIl9qc3hERVYiLCJTbGlkZXIiLCJfb2JqZWN0U3ByZWFkIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiY2hpbGRyZW4iLCJDb250YWluZXIiLCJMaW5rIiwiaHJlZiIsInBhc3NIcmVmIiwiU3R5bGVkTGluayIsInRpdGxlIiwiTG9nbyIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIk1lbnVXcmFwcGVyIiwiTWVudUJ1dHRvbiIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ0k7QUFDTTtBQUMrQjtBQUFBO0FBRXRFLE1BQU1BLFNBQVMsR0FB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YnBhY2svcGFnZXMvX2FwcC5mNWUyZmU4OTcxZjdlY2M0MDI2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vSWNvbnMvTG9nbyc7XHJcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gJy4uL01lbnVCdXR0b24nO1xyXG5pbXBvcnQgeyBTbGlkZXIsIENvbnRhaW5lciwgU3R5bGVkTGluaywgTWVudVdyYXBwZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBnZXRTdHlsZXMgPSAoZGlyZWN0aW9uID0gJycpID0+IHtcclxuICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHJldHVybiB7IHRvcDogMCB9O1xyXG4gIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHJldHVybiB7IGJvdHRvbTogMCB9O1xyXG5cclxuICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgeTogLTEzMSB9LFxyXG4gIHNob3c6IHsgeTogMCB9LFxyXG59O1xyXG5cclxuY29uc3QgQXBwQmFyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGRpcmVjdGlvbiA9ICdkb3duJyxcclxuICAgIG9mZnNldCA9IDEwNSxcclxuICAgIGxvZ29Qcm9wcyA9IHt9LFxyXG4gICAgc3R5bGU6IHN0eWxlUHJvcCA9IHt9LFxyXG4gICAgLi4ucm9vdFByb3BzXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzaG91bGRIaWRlID0gZmFsc2U7XHJcbiAgICAgIGxldCBpbnRlcnNlY3Rpb24gPSBvZmZzZXQ7XHJcbiAgICAgIGxldCBjdXJyZW50WVBvc2l0aW9uID0gMDtcclxuXHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xyXG4gICAgICAgIGN1cnJlbnRZUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcclxuICAgICAgICBjdXJyZW50WVBvc2l0aW9uID1cclxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgaW50ZXJzZWN0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIG9mZnNldDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2hvdWxkSGlkZSA9IGN1cnJlbnRZUG9zaXRpb24gPiBpbnRlcnNlY3Rpb247XHJcbiAgICAgIGlmIChzaG91bGRIaWRlICE9PSBoaWRkZW4pIHtcclxuICAgICAgICBzZXRIaWRkZW4oc2hvdWxkSGlkZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlU2Nyb2xsKCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2hpZGRlbiwgZGlyZWN0aW9uLCBvZmZzZXRdKTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKGRpcmVjdGlvbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGVyXHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIGFuaW1hdGU9e2hpZGRlbiA/ICdoaWRkZW4nIDogJ3Nob3cnfVxyXG4gICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgZWFzZTogWzAuNjY2LCAwLCAwLjIzNywgMV0sXHJcbiAgICAgIH19XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGVzLFxyXG4gICAgICAgIC4uLnN0eWxlUHJvcCxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJvb3RQcm9wc31cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgPFN0eWxlZExpbmsgdGl0bGU9XCJuZXhhclwiPlxyXG4gICAgICAgICAgICA8TG9nbyB7Li4ubG9nb1Byb3BzfSAvPlxyXG4gICAgICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TWVudVdyYXBwZXI+XHJcbiAgICAgICAgICA8TWVudUJ1dHRvbiB0aXRsZT1cIlByb2plY3RzXCIgLz5cclxuICAgICAgICA8L01lbnVXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvU2xpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFwcEJhcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
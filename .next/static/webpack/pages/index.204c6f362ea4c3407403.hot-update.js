webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/AppBar/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


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
      logoProps = {},
      style: styleProp = {},
      children // Allow children to be passed in for footer content
    } = props,
    rootProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["direction", "logoProps", "style", "children"]);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Slider"], _objectSpread(_objectSpread({
    variants: variants,
    initial: "hidden",
    animate: hidden ? 'hidden' : 'show',
    transition: {
      duration: 1,
      ease: [0.666, 0, 0.237, 1]
    },
    style: _objectSpread(_objectSpread({}, styles), styleProp)
  }, rootProps), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["StyledLink"], {
          title: "nexar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Icons_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, logoProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), children, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBCYXIvQXBwQmFyLmpzeCJdLCJuYW1lcyI6WyJnZXRTdHlsZXMiLCJkaXJlY3Rpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0b3AiLCJib3R0b20iLCJ2YXJpYW50cyIsImhpZGRlbiIsInkiLCJzaG93IiwiQXBwQmFyIiwicHJvcHMiLCJfcyIsImxvZ29Qcm9wcyIsInN0eWxlIiwic3R5bGVQcm9wIiwiY2hpbGRyZW4iLCJyb290UHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJzZXRIaWRkZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwic2hvdWxkSGlkZSIsImludGVyc2VjdGlvbiIsImN1cnJlbnRZUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX2pzeERFViIsIlNsaWRlciIsIl9vYmplY3RTcHJlYWQiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJDb250YWluZXIiLCJMaW5rIiwiaHJlZiIsInBhc3NIcmVmIiwiU3R5bGVkTGluayIsInRpdGxlIiwiTG9nbyIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDSTtBQUN3QjtBQUFBO0FBRXpELE1BQU1BLFNBQVMsR0FBRyxTQUFBQSxDQUFBLEVBQW9CO0VBQUEsSUFBbkJDLFNBQVMsR0FBQUMs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WSxrREFBVTtVQUFDQyxLQUFLLEVBQUMsT0FBTztVQUFBbEMsUUFBQSxlQUN2QnFCLG9FQUFBLENBQUNjLG1EQUFJLEVBQUFaLGFBQUEsS0FBSzFCLFNBQVM7WUFBQXVDLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFHO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ2I7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDVCxDQUFDLEVBRU52QyxRQUFRLEVBQUMsR0FBQztJQUFBO01BQUFvQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDRjtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNOLENBQUM7QUFFYixDQUFDO0FBQUMzQyxFQUFBLENBakVJRixNQUFNO0FBQUE4QyxFQUFBLEdBQU45QyxNQUFNO0FBbUVaK0Msa0VBQUEsZ0JBQWVyQyw0Q0FBSyxDQUFDc0MsSUFBSSxDQUFDaEQsTUFBTSxDQUFDLEVBQUM7QUFBQSxJQUFBOEMsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLFlBQUEsQ0FBQUgsRUFBQTtBQUFBRyxZQUFBLENBQUFGLEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjA0YzZmMzYyZWE0YzM0MDc0MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0ljb25zL0xvZ28nO1xyXG5pbXBvcnQgeyBTbGlkZXIsIENvbnRhaW5lciwgU3R5bGVkTGluayB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IGdldFN0eWxlcyA9IChkaXJlY3Rpb24gPSAnJykgPT4ge1xyXG4gIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykgcmV0dXJuIHsgdG9wOiAwIH07XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykgcmV0dXJuIHsgYm90dG9tOiAwIH07XHJcblxyXG4gIHJldHVybiB7fTtcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyB5OiAtMTMxIH0sXHJcbiAgc2hvdzogeyB5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBBcHBCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBkaXJlY3Rpb24gPSAnZG93bicsXHJcbiAgICBsb2dvUHJvcHMgPSB7fSxcclxuICAgIHN0eWxlOiBzdHlsZVByb3AgPSB7fSxcclxuICAgIGNoaWxkcmVuLCAvLyBBbGxvdyBjaGlsZHJlbiB0byBiZSBwYXNzZWQgaW4gZm9yIGZvb3RlciBjb250ZW50XHJcbiAgICAuLi5yb290UHJvcHNcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgbGV0IHNob3VsZEhpZGUgPSBmYWxzZTtcclxuICAgICAgbGV0IGludGVyc2VjdGlvbiA9IDEwNTsgLy8gRGVmYXVsdCBvZmZzZXRcclxuXHJcbiAgICAgIGxldCBjdXJyZW50WVBvc2l0aW9uID0gZGlyZWN0aW9uID09PSAnZG93bicgPyB3aW5kb3cuc2Nyb2xsWSA6IFxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XHJcbiAgICAgICAgaW50ZXJzZWN0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDEwNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2hvdWxkSGlkZSA9IGN1cnJlbnRZUG9zaXRpb24gPiBpbnRlcnNlY3Rpb247XHJcbiAgICAgIGlmIChzaG91bGRIaWRlICE9PSBoaWRkZW4pIHtcclxuICAgICAgICBzZXRIaWRkZW4oc2hvdWxkSGlkZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlU2Nyb2xsKCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2hpZGRlbiwgZGlyZWN0aW9uXSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyhkaXJlY3Rpb24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlclxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICBhbmltYXRlPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdzaG93J31cclxuICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IFswLjY2NiwgMCwgMC4yMzcsIDFdLFxyXG4gICAgICB9fVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlcyxcclxuICAgICAgICAuLi5zdHlsZVByb3AsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yb290UHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rIHRpdGxlPVwibmV4YXJcIj5cclxuICAgICAgICAgICAgPExvZ28gey4uLmxvZ29Qcm9wc30gLz5cclxuICAgICAgICAgIDwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgey8qIE1lbnVCdXR0b24gaXMgcmVtb3ZlZCB0byBhdm9pZCBzaG93aW5nIHRoZSBtZW51ICovfVxyXG4gICAgICAgIHtjaGlsZHJlbn0gey8qIFJlbmRlciBmb290ZXIgY29udGVudCBoZXJlICovfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvU2xpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFwcEJhcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
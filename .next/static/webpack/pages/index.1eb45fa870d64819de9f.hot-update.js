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


 // Keep the logo for the header


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
      showLogo = false,
      // New prop to control logo visibility
      style: styleProp = {},
      children // Allow children to be passed in for footer content
    } = props,
    rootProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["direction", "showLogo", "style", "children"]);
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
      children: [showLogo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["StyledLink"], {
          title: "nexar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Icons_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBCYXIvQXBwQmFyLmpzeCJdLCJuYW1lcyI6WyJnZXRTdHlsZXMiLCJkaXJlY3Rpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0b3AiLCJib3R0b20iLCJ2YXJpYW50cyIsImhpZGRlbiIsInkiLCJzaG93IiwiQXBwQmFyIiwicHJvcHMiLCJfcyIsInNob3dMb2dvIiwic3R5bGUiLCJzdHlsZVByb3AiLCJjaGlsZHJlbiIsInJvb3RQcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNldEhpZGRlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJzaG91bGRIaWRlIiwiaW50ZXJzZWN0aW9uIiwiY3VycmVudFlQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJfanN4REVWIiwiU2xpZGVyIiwiX29iamVjdFNwcmVhZCIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIkNvbnRhaW5lciIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJTdHlsZWRMaW5rIiwidGl0bGUiLCJMb2dvIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCJfYzIiLCJtZW1vIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNJLENBQUM7QUFDdUI7QUFBQTtBQUV6RCxNQUFNQSxTQUFTLEdBQUcsU0FBQUEsQ0FBQSxFQUFvQjtFQUFBLElBQW5CQyxTQUFTLEdB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Q3JCcUIsb0VBQUEsQ0FBQ1ksa0RBQVU7VUFBQ0MsS0FBSyxFQUFDLE9BQU87VUFBQWxDLFFBQUEsZUFDdkJxQixvRUFBQSxDQUFDYyxtREFBSTtZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRTtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNFO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ1QsQ0FDUCxFQUNBdkMsUUFBUSxFQUFDLEdBQUM7SUFBQTtNQUFBb0MsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0Y7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTixDQUFDO0FBRWIsQ0FBQztBQUFDM0MsRUFBQSxDQWxFSUYsTUFBTTtBQUFBOEMsRUFBQSxHQUFOOUMsTUFBTTtBQW9FWitDLGtFQUFBLGdCQUFlckMsNENBQUssQ0FBQ3NDLElBQUksQ0FBQ2hELE1BQU0sQ0FBQyxFQUFDO0FBQUEsSUFBQThDLEVBQUEsRUFBQUMsR0FBQTtBQUFBRSxZQUFBLENBQUFILEVBQUE7QUFBQUcsWUFBQSxDQUFBRixHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFlYjQ1ZmE4NzBkNjQ4MTlkZTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9JY29ucy9Mb2dvJzsgLy8gS2VlcCB0aGUgbG9nbyBmb3IgdGhlIGhlYWRlclxyXG5pbXBvcnQgeyBTbGlkZXIsIENvbnRhaW5lciwgU3R5bGVkTGluayB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IGdldFN0eWxlcyA9IChkaXJlY3Rpb24gPSAnJykgPT4ge1xyXG4gIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykgcmV0dXJuIHsgdG9wOiAwIH07XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykgcmV0dXJuIHsgYm90dG9tOiAwIH07XHJcblxyXG4gIHJldHVybiB7fTtcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyB5OiAtMTMxIH0sXHJcbiAgc2hvdzogeyB5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBBcHBCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBkaXJlY3Rpb24gPSAnZG93bicsXHJcbiAgICBzaG93TG9nbyA9IGZhbHNlLCAvLyBOZXcgcHJvcCB0byBjb250cm9sIGxvZ28gdmlzaWJpbGl0eVxyXG4gICAgc3R5bGU6IHN0eWxlUHJvcCA9IHt9LFxyXG4gICAgY2hpbGRyZW4sIC8vIEFsbG93IGNoaWxkcmVuIHRvIGJlIHBhc3NlZCBpbiBmb3IgZm9vdGVyIGNvbnRlbnRcclxuICAgIC4uLnJvb3RQcm9wc1xyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgc2hvdWxkSGlkZSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaW50ZXJzZWN0aW9uID0gMTA1OyAvLyBEZWZhdWx0IG9mZnNldFxyXG5cclxuICAgICAgbGV0IGN1cnJlbnRZUG9zaXRpb24gPSBkaXJlY3Rpb24gPT09ICdkb3duJyA/IHdpbmRvdy5zY3JvbGxZIDogXHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcclxuICAgICAgICBpbnRlcnNlY3Rpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMTA1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzaG91bGRIaWRlID0gY3VycmVudFlQb3NpdGlvbiA+IGludGVyc2VjdGlvbjtcclxuICAgICAgaWYgKHNob3VsZEhpZGUgIT09IGhpZGRlbikge1xyXG4gICAgICAgIHNldEhpZGRlbihzaG91bGRIaWRlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTY3JvbGwoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCBmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbaGlkZGVuLCBkaXJlY3Rpb25dKTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKGRpcmVjdGlvbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGVyXHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIGFuaW1hdGU9e2hpZGRlbiA/ICdoaWRkZW4nIDogJ3Nob3cnfVxyXG4gICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgZWFzZTogWzAuNjY2LCAwLCAwLjIzNywgMV0sXHJcbiAgICAgIH19XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGVzLFxyXG4gICAgICAgIC4uLnN0eWxlUHJvcCxcclxuICAgICAgfX1cclxuICAgICAgey4uLnJvb3RQcm9wc31cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICB7c2hvd0xvZ28gJiYgKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPFN0eWxlZExpbmsgdGl0bGU9XCJuZXhhclwiPlxyXG4gICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjaGlsZHJlbn0gey8qIFJlbmRlciBmb290ZXIgY29udGVudCBoZXJlICovfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvU2xpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFwcEJhcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
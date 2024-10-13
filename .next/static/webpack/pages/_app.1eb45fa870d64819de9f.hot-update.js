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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBCYXIvQXBwQmFyLmpzeCJdLCJuYW1lcyI6WyJnZXRTdHlsZXMiLCJkaXJlY3Rpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0b3AiLCJib3R0b20iLCJ2YXJpYW50cyIsImhpZGRlbiIsInkiLCJzaG93IiwiQXBwQmFyIiwicHJvcHMiLCJfcyIsInNob3dMb2dvIiwic3R5bGUiLCJzdHlsZVByb3AiLCJjaGlsZHJlbiIsInJvb3RQcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNldEhpZGRlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJzaG91bGRIaWRlIiwiaW50ZXJzZWN0aW9uIiwiY3VycmVudFlQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJfanN4REVWIiwiU2xpZGVyIiwiX29iamVjdFNwcmVhZCIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIkNvbnRhaW5lciIsIkxpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJTdHlsZWRMaW5rIiwidGl0bGUiLCJMb2dvIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCJfYzIiLCJtZW1vIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNJLENBQUM7QUFDdUI7QUFBQTtBQUV6RCxNQUFNQSxTQUFTLEdBQUcsU0FBQUEsQ0FBQSxFQUFvQjtFQUFBLElBQW5CQyxTQUFTLEdB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Q3JCcUIsb0VBQUEsQ0FBQ1ksa0RBQVU7VUFBQ0MsS0FBSyxFQUFDLE9BQU87VUFBQWxDLFFBQUEsZUFDdkJxQixvRUFBQSxDQUFDYyxtREFBSTtZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBRTtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNFO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ1QsQ0FDUCxFQUNBdkMsUUFBUSxFQUFDLEdBQUM7SUFBQTtNQUFBb0MsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0Y7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTixDQUFDO0FBRWIsQ0FBQztBQUFDM0MsRUFBQSxDQWxFSUYsTUFBTTtBQUFBOEMsRUFBQSxHQUFOOUMsTUFBTTtBQW9FWitDLGtFQUFBLGdCQUFlckMsNENBQUssQ0FBQ3NDLElBQUksQ0FBQ2hELE1BQU0sQ0FBQyxFQUFDO0FBQUEsSUFBQThDLEVBQUEsRUFBQUMsR0FBQTtBQUFBRSxZQUFBLENBQUFILEVBQUE7QUFBQUcsWUFBQSxDQUFBRixHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWViNDVmYTg3MGQ2NDgxOWRlOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0ljb25zL0xvZ28nOyAvLyBLZWVwIHRoZSBsb2dvIGZvciB0aGUgaGVhZGVyXHJcbmltcG9ydCB7IFNsaWRlciwgQ29udGFpbmVyLCBTdHlsZWRMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgZ2V0U3R5bGVzID0gKGRpcmVjdGlvbiA9ICcnKSA9PiB7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSByZXR1cm4geyB0b3A6IDAgfTtcclxuICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSByZXR1cm4geyBib3R0b206IDAgfTtcclxuXHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaGlkZGVuOiB7IHk6IC0xMzEgfSxcclxuICBzaG93OiB7IHk6IDAgfSxcclxufTtcclxuXHJcbmNvbnN0IEFwcEJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGRpcmVjdGlvbiA9ICdkb3duJyxcclxuICAgIHNob3dMb2dvID0gZmFsc2UsIC8vIE5ldyBwcm9wIHRvIGNvbnRyb2wgbG9nbyB2aXNpYmlsaXR5XHJcbiAgICBzdHlsZTogc3R5bGVQcm9wID0ge30sXHJcbiAgICBjaGlsZHJlbiwgLy8gQWxsb3cgY2hpbGRyZW4gdG8gYmUgcGFzc2VkIGluIGZvciBmb290ZXIgY29udGVudFxyXG4gICAgLi4ucm9vdFByb3BzXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzaG91bGRIaWRlID0gZmFsc2U7XHJcbiAgICAgIGxldCBpbnRlcnNlY3Rpb24gPSAxMDU7IC8vIERlZmF1bHQgb2Zmc2V0XHJcblxyXG4gICAgICBsZXQgY3VycmVudFlQb3NpdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gd2luZG93LnNjcm9sbFkgOiBcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgICAgIGludGVyc2VjdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAxMDU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNob3VsZEhpZGUgPSBjdXJyZW50WVBvc2l0aW9uID4gaW50ZXJzZWN0aW9uO1xyXG4gICAgICBpZiAoc2hvdWxkSGlkZSAhPT0gaGlkZGVuKSB7XHJcbiAgICAgICAgc2V0SGlkZGVuKHNob3VsZEhpZGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNjcm9sbCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtoaWRkZW4sIGRpcmVjdGlvbl0pO1xyXG5cclxuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoZGlyZWN0aW9uKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZXJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgYW5pbWF0ZT17aGlkZGVuID8gJ2hpZGRlbicgOiAnc2hvdyd9XHJcbiAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICBlYXNlOiBbMC42NjYsIDAsIDAuMjM3LCAxXSxcclxuICAgICAgfX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZXMsXHJcbiAgICAgICAgLi4uc3R5bGVQcm9wLFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucm9vdFByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIHtzaG93TG9nbyAmJiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8U3R5bGVkTGluayB0aXRsZT1cIm5leGFyXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NoaWxkcmVufSB7LyogUmVuZGVyIGZvb3RlciBjb250ZW50IGhlcmUgKi99XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQXBwQmFyKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/Footer.jsx":
/*!************************************!*\
  !*** ./components/Home/Footer.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ "./hooks/useMediaQuery.js");
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AppBar */ "./components/AppBar/index.js");
/* harmony import */ var _components_SocialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SocialMedia */ "./components/SocialMedia/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Footer.jsx",
  _s = $RefreshSig$();



 // Import your social media component

const variants = {
  hidden: isTabletView => ({
    y: isTabletView ? -81 : -131
  }),
  show: {
    y: 0
  }
};
const Footer = () => {
  _s();
  const isTabletView = Object(_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref => {
    let {
      breakpoints
    } = _ref;
    return `(max-width:${breakpoints.sizes.tablet}px)`;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "up",
    showLogo: false // Set to false to hide the logo in footer
    ,
    variants: variants,
    initial: false,
    custom: isTabletView,
    transition: {
      duration: 0.7,
      ease: [0.666, 0, 0.237, 1]
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        padding: '20px',
        textAlign: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
        children: "Your Footer Title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: "Your go-to source for innovative solutions."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "contact-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          children: "Phone: +91.866.044.9970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          children: "Email: info@luminexa.in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: "@luminexa 2024"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, isTabletView, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};
_s(Footer, "kvvo0lrRNZqJFt32GVh+2sGPoVM=", false, function () {
  return [_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"]];
});
_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));
var _c, _c2;
$RefreshReg$(_c, "Footer");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Zvb3Rlci5qc3giXSwibmFtZXMiOlsidmFyaWFudHMiLCJoaWRkZW4iLCJpc1RhYmxldFZpZXciLCJ5Iiwic2hvdyIsIkZvb3RlciIsIl9zIiwidXNlTWVkaWFRdWVyeSIsIl9yZWYiLCJicmVha3BvaW50cyIsInNpemVzIiwidGFibGV0IiwiX2pzeERFViIsIkFwcEJhciIsImRpcmVjdGlvbiIsInNob3dMb2dvIiwiaW5pdGlhbCIsImN1c3RvbSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJjaGlsZHJlbiIsInN0eWxlIiwicGFkZGluZyIsInRleHRBbGlnbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsIlNvY2lhbE1lZGlhIiwiX2MiLCJfYzIiLCJSZWFjdCIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRCO0FBQ1Q7QUFDVSxDQUFDO0FBQUE7QUFFeEQsTUFBTUEsUUFBUSxHQUFHO0VBQ2ZDLE1BQU0sRUFBR0MsWUFBWSxLQUFNO0lBQUVDLENBQUMsRUFBRUQsWUFBWSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7RUFBSSxDQUFDLENBQUM7RUFDNURFLElBQUksRUFBRTtJQUFFRCxDQUFDLEVBQUU7RUFBRTtBQUNmLENBQUM7QUFFRCxNQUFNRSxNQUFNLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQ25CLE1BQU1KLFlBQVksR0FBR0ssb0VBQWEsQ0FDaENDLElBQUE7SUFBQSxJQUFDO01BQUVDO0lBQVksQ0FBQyxHQUFBRCxJQUFBO0lBQUEsT0FBSyxjQUFjQyxXQUFXLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxLQUFLO0VBQUEsQ0FDbEUsQ0FBQztFQUVELG9CQUNFQyxvRUFBQSxDQUFDQywwREFBTTtJQUVMQyxTQUFTLEVBQUMsSUFBSTtJQUNkQyxRQUFRLEVBQUUsS0FBTSxDQUFDO0lBQUE7SUFDakJmLFFBQVEsRUFBRUEsUUFBUztJQUNuQmdCLE9BQU8sRUFBRSxLQUFNO0lBQ2ZDLE1BQU0sRUFBRWYsWUFBYTtJQUNyQmdCLFVBQVUsRUFBRTtNQUNWQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUU7SUFBQUMsUUFBQSxlQUVGVCxvRUFBQTtNQUFLVSxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE1BQU07UUFBRUMsU0FBUyxFQUFFO01BQVMsQ0FBRTtNQUFBSCxRQUFBLGdCQUNuRFQsb0VBQUE7UUFBQVMsUUFBQSxFQUFJO01BQWlCO1FBQUFJLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFJLENBQUMsZUFDMUJoQixvRUFBQTtRQUFBUyxRQUFBLEVBQUc7TUFBMkM7UUFBQUksUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUcsQ0FBQyxlQUNsRGhCLG9FQUFBO1FBQUtpQixTQUFTLEVBQUMsY0FBYztRQUFBUixRQUFBLGdCQUMzQlQsb0VBQUE7VUFBQVMsUUFBQSxFQUFHO1FBQXVCO1VBQUFJLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFHLENBQUMsZUFDOUJoQixvRUFBQTtVQUFBUyxRQUFBLEVBQUc7UUFBdUI7VUFBQUksUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUcsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUMzQixDQUFDLGVBQ05oQixvRUFBQSxDQUFDa0IsK0RBQVc7UUFBQUwsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxLQUFDLGVBQ2hCaEIsb0VBQUE7UUFBQVMsUUFBQSxFQUFHO01BQWM7UUFBQUksUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUcsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNsQjtFQUFDLEdBcEJEMUIsWUFBWTtJQUFBdUIsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBcUJYLENBQUM7QUFFYixDQUFDO0FBQUN0QixFQUFBLENBOUJJRCxNQUFNO0VBQUEsUUFDV0UsNERBQWE7QUFBQTtBQUFBd0IsRUFBQSxHQUQ5QjFCLE1BQU07QUFnQ1oyQixrRUFBQSxnQkFBZUMsNENBQUssQ0FBQ0MsSUFBSSxDQUFDN0IsTUFBTSxDQUFDLEVBQUM7QUFBQSxJQUFBMEIsRUFBQSxFQUFBQyxHQUFBO0FBQUFHLFlBQUEsQ0FBQUosRUFBQTtBQUFBSSxZQUFBLENBQUFILEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODNkZWI4ZmNiNzA5OWM3MDk0NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwQmFyJztcclxuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU29jaWFsTWVkaWEnOyAvLyBJbXBvcnQgeW91ciBzb2NpYWwgbWVkaWEgY29tcG9uZW50XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBoaWRkZW46IChpc1RhYmxldFZpZXcpID0+ICh7IHk6IGlzVGFibGV0VmlldyA/IC04MSA6IC0xMzEgfSksXHJcbiAgc2hvdzogeyB5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXNUYWJsZXRWaWV3ID0gdXNlTWVkaWFRdWVyeShcclxuICAgICh7IGJyZWFrcG9pbnRzIH0pID0+IGAobWF4LXdpZHRoOiR7YnJlYWtwb2ludHMuc2l6ZXMudGFibGV0fXB4KWBcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhclxyXG4gICAgICBrZXk9e2lzVGFibGV0Vmlld31cclxuICAgICAgZGlyZWN0aW9uPVwidXBcIlxyXG4gICAgICBzaG93TG9nbz17ZmFsc2V9IC8vIFNldCB0byBmYWxzZSB0byBoaWRlIHRoZSBsb2dvIGluIGZvb3RlclxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICBjdXN0b209e2lzVGFibGV0Vmlld31cclxuICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLjcsXHJcbiAgICAgICAgZWFzZTogWzAuNjY2LCAwLCAwLjIzNywgMV0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgIDxoMz5Zb3VyIEZvb3RlciBUaXRsZTwvaDM+XHJcbiAgICAgICAgPHA+WW91ciBnby10byBzb3VyY2UgZm9yIGlubm92YXRpdmUgc29sdXRpb25zLjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxyXG4gICAgICAgICAgPHA+UGhvbmU6ICs5MS44NjYuMDQ0Ljk5NzA8L3A+XHJcbiAgICAgICAgICA8cD5FbWFpbDogaW5mb0BsdW1pbmV4YS5pbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U29jaWFsTWVkaWEgLz4gey8qIFJlbmRlciB5b3VyIHNvY2lhbCBtZWRpYSBsaW5rcyAqL31cclxuICAgICAgICA8cD5AbHVtaW5leGEgMjAyNDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FwcEJhcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
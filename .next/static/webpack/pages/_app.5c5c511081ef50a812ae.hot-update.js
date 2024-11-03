webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Menu/Menu.jsx":
/*!**********************************!*\
  !*** ./components/Menu/Menu.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/menu */ "./context/menu.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStyledTheme */ "./hooks/useStyledTheme.js");
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ "./hooks/useMediaQuery.js");
/* harmony import */ var _utils_constants_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants/routes */ "./utils/constants/routes.js");
/* harmony import */ var _Icons_Arrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/Arrow */ "./components/Icons/Arrow.jsx");
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./variants */ "./components/Menu/variants.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./components/Menu/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Menu\\Menu.jsx",
  _s = $RefreshSig$();












const Menu = () => {
  _s();
  const containerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const videoContainerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const [revealVideo, setRevealVideo] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [isHovering, setIsHovering] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const theme = Object(_hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [{
    isMenuOpen,
    dispatch
  }] = Object(_context_menu__WEBPACK_IMPORTED_MODULE_3__["useMenuContext"])();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const isMobile = Object(_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref => {
    let {
      breakpoints
    } = _ref;
    return `(max-width:${breakpoints.sizes.small}px)`;
  });
  const handleAnimationComplete = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    addCursorColor(theme.text);
  }, [addCursorColor, theme.text]);
  const handleExitComplete = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    resetCursorColor();
  }, [resetCursorColor]);
  const handleHoverStart = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(event => {
    addCursorBorder();
    setRevealVideo(event.target.name);
  }, [addCursorBorder]);
  const handleHoverEnd = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    removeCursorBorder();
    setRevealVideo(null);
  }, [removeCursorBorder]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen && containerRef.current && videoContainerRef.current) {
        const offset = 256;
        const {
          width
        } = containerRef.current.getBoundingClientRect();
        const left = (window.innerWidth - width) / 2 + offset;
        videoContainerRef.current.style.left = `${left}px`;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    onExitComplete: handleExitComplete,
    children: isMenuOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Backdrop"], {
      onAnimationComplete: handleAnimationComplete,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        ref: containerRef,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Header"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h3", {
            children: "Menu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["CloseButton"], {
            title: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Navigation"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["List"], {
            variants: _variants__WEBPACK_IMPORTED_MODULE_9__["listVariants"],
            initial: "hidden",
            animate: "show",
            onHoverStart: () => setIsHovering(true),
            onHoverEnd: () => setIsHovering(false),
            children: _utils_constants_routes__WEBPACK_IMPORTED_MODULE_7__["default"].map(route => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].li, {
              variants: _variants__WEBPACK_IMPORTED_MODULE_9__["listItemsVariants"],
              transition: {
                duration: 0.9,
                ease: _variants__WEBPACK_IMPORTED_MODULE_9__["transition"].ease
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: route.path,
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Link"], {
                  name: route.id,
                  onClick: () => {
                    dispatch({
                      type: 'CLOSE_MENU'
                    }); // Dispatch close action
                  },
                  onHoverStart: handleHoverStart,
                  onHoverEnd: handleHoverEnd,
                  custom: {
                    isMobile,
                    color: theme.text
                  },
                  initial: "initial",
                  whileHover: "hover",
                  variants: _variants__WEBPACK_IMPORTED_MODULE_9__["linkVariants"],
                  transition: _variants__WEBPACK_IMPORTED_MODULE_9__["transition"],
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["ArrowContainer"], {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      fillColor: white
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 25
                  }, undefined), route.title]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 21
              }, undefined)
            }, route.id, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Footer"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["FooterText"], {
            className: "link",
            as: "a",
            href: "mailto:info@furrow.studio",
            onMouseEnter: addCursorBorder,
            onMouseLeave: removeCursorBorder,
            children: "info@luminexa.in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["FooterText"], {
            className: "link",
            as: "a",
            href: "tel:+91.82.417.0634",
            onMouseEnter: addCursorBorder,
            onMouseLeave: removeCursorBorder,
            children: "+91.866.044.9970"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["FooterText"], {
            className: "copyright",
            children: "\xA9 luminexa 2024"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, undefined), isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Address"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["FooterText"], {
              children: ["14 1st Stage Bhanashankari", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 47
              }, undefined), " Bangalore, KA IN"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["SocialMedia"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, undefined), !isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["VideoContainer"], {
        ref: videoContainerRef,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["VideoReveal"], {
          variants: _variants__WEBPACK_IMPORTED_MODULE_9__["videoRevealVariants"],
          transition: _variants__WEBPACK_IMPORTED_MODULE_9__["transition"],
          initial: "show",
          animate: isHovering ? 'hidden' : 'show'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }, undefined), _utils_constants_routes__WEBPACK_IMPORTED_MODULE_7__["default"].map(route => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Video"], {
          src: `/videos/${route.video}`,
          variants: _variants__WEBPACK_IMPORTED_MODULE_9__["videoVariants"],
          initial: "hidden",
          animate: route.id === revealVideo ? 'show' : 'hidden',
          transition: _variants__WEBPACK_IMPORTED_MODULE_9__["transition"],
          loop: true,
          autoPlay: true
        }, route.id, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, undefined);
};
_s(Menu, "m2CvY0Qd06gMRlZuQ9HjTgh9fOI=", false, function () {
  return [_hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_5__["default"], _context_menu__WEBPACK_IMPORTED_MODULE_3__["useMenuContext"], _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"]];
});
_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Menu));
var _c, _c2;
$RefreshReg$(_c, "Menu");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L01lbnUuanN4Il0sIm5hbWVzIjpbIk1lbnUiLCJfcyIsImNvbnRhaW5lclJlZiIsIlJlYWN0IiwidXNlUmVmIiwidmlkZW9Db250YWluZXJSZWYiLCJyZXZlYWxWaWRlbyIsInNldFJldmVhbFZpZGVvIiwidXNlU3RhdGUiLCJpc0hvdmVyaW5nIiwic2V0SXNIb3ZlcmluZyIsInRoZW1lIiwidXNlU3R5bGVkVGhlbWUiLCJpc01lbnVPcGVuIiwiZGlzcGF0Y2giLCJ1c2VNZW51Q29udGV4dCIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsImFkZEN1cnNvckNvbG9yIiwicmVzZXRDdXJzb3JDb2xvciIsInVzZUN1cnNvclN0eWxlIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiX3JlZiIsImJyZWFrcG9pbnRzIiwic2l6ZXMiLCJzbWFsbCIsImhhbmRsZUFuaW1hdGlvbkNvbXBsZXRlIiwidXNlQ2FsbGJhY2siLCJ0ZXh0IiwiaGFuZGxlRXhpdENvbXBsZXRlIiwiaGFuZGxlSG92ZXJTdGFydCIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsImhhbmRsZUhvdmVyRW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiY3VycmVudCIsIm9mZnNldCIsIndpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2pzeERFViIsIkFuaW1hdGVQcmVzZW5jZSIsIm9uRXhpdENvbXBsZXRlIiwiY2hpbGRyZW4iLCJCYWNrZHJvcCIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJDb250YWluZXIiLCJyZWYiLCJIZWFkZXIiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDbG9zZUJ1dHRvbiIsInRpdGxlIiwiTmF2aWdhdGlvbiIsIkxpc3QiLCJ2YXJpYW50cyIsImxpc3RWYXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsInJvdXRlcyIsIm1hcCIsInJvdXRlIiwibW90aW9uIiwibGkiLCJsaXN0SXRlbXNWYXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJOZXh0TGluayIsImhyZWYiLCJwYXRoIiwicGFzc0hyZWYiLCJMaW5rIiwiaWQiLCJvbkNsaWNrIiwidHlwZSIsImN1c3RvbSIsImNvbG9yIiwid2hpbGVIb3ZlciIsImxpbmtWYXJpYW50cyIsIkFycm93Q29udGFpbmVyIiwiQXJyb3ciLCJmaWxsQ29sb3IiLCJ3aGl0ZSIsIkZvb3RlciIsIkZvb3RlclRleHQiLCJjbGFzc05hbWUiLCJhcyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIkFkZHJlc3MiLCJTb2NpYWxNZWRpYSIsIlZpZGVvQ29udGFpbmVyIiwiVmlkZW9SZXZlYWwiLCJ2aWRlb1JldmVhbFZhcmlhbnRzIiwiVmlkZW8iLCJzcmMiLCJ2aWRlbyIsInZpZGVvVmFyaWFudHMiLCJsb29wIiwiYXV0b1BsYXkiLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUN1QjtBQUNKO0FBQ0k7QUFDQTtBQUNGO0FBQ0o7QUFDZjtBQVFmO0FBaUJGO0FBQUE7QUFFbEIsTUFBTUEsSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFBQUMsRUFBQTtFQUNqQixNQUFNQyxZQUFZLEdBQUdDLDRDQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDdkMsTUFBTUMsaUJBQWlCLEdBQUdGLDRDQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDNUMsTUFBTSxDQUFDRSxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHSiw0Q0FBSyxDQUFDSyxR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QUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNZLENBQ2pCO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ087RUFDWDtJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDYyxDQUFDO0FBRXRCLENBQUM7QUFBQzNELEVBQUEsQ0FuS0lELElBQUk7RUFBQSxRQUtNWSw2REFBYyxFQUNPRyw0REFBYyxFQU03Q0ssNkRBQWMsRUFDREUsNERBQWE7QUFBQTtBQUFBMkYsRUFBQSxHQWIxQmpILElBQUk7QUFxS1ZrSCxrRUFBQSxnQkFBZS9HLDRDQUFLLENBQUNnSCxJQUFJLENBQUNuSCxJQUFJLENBQUMsRUFBQztBQUFBLElBQUFpSCxFQUFBLEVBQUFDLEdBQUE7QUFBQUUsWUFBQSxDQUFBSCxFQUFBO0FBQUFHLFlBQUEsQ0FBQUYsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVjNWM1MTEwODFlZjUwYTgxMmFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgdXNlTWVudUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L21lbnUnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgdXNlU3R5bGVkVGhlbWUgZnJvbSAnLi4vLi4vaG9va3MvdXNlU3R5bGVkVGhlbWUnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICcuLi8uLi9ob29rcy91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMvcm91dGVzJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uL0ljb25zL0Fycm93JztcclxuaW1wb3J0IHtcclxuICBsaXN0VmFyaWFudHMsXHJcbiAgbGlzdEl0ZW1zVmFyaWFudHMsXHJcbiAgbGlua1ZhcmlhbnRzLFxyXG4gIHZpZGVvUmV2ZWFsVmFyaWFudHMsXHJcbiAgdmlkZW9WYXJpYW50cyxcclxuICB0cmFuc2l0aW9uLFxyXG59IGZyb20gJy4vdmFyaWFudHMnO1xyXG5pbXBvcnQge1xyXG4gIEJhY2tkcm9wLFxyXG4gIENvbnRhaW5lcixcclxuICBDbG9zZUJ1dHRvbixcclxuICBIZWFkZXIsXHJcbiAgTmF2aWdhdGlvbixcclxuICBMaXN0LFxyXG4gIExpbmssXHJcbiAgQXJyb3dDb250YWluZXIsXHJcbiAgRm9vdGVyLFxyXG4gIEZvb3RlclRleHQsXHJcbiAgVmlkZW9Db250YWluZXIsXHJcbiAgVmlkZW9SZXZlYWwsXHJcbiAgVmlkZW8sXHJcbiAgQWRkcmVzcyxcclxuICBTb2NpYWxNZWRpYSxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCB2aWRlb0NvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBbcmV2ZWFsVmlkZW8sIHNldFJldmVhbFZpZGVvXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0hvdmVyaW5nLCBzZXRJc0hvdmVyaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVN0eWxlZFRoZW1lKCk7XHJcbiAgY29uc3QgW3sgaXNNZW51T3BlbiwgZGlzcGF0Y2ggfV0gPSB1c2VNZW51Q29udGV4dCgpO1xyXG4gIGNvbnN0IHtcclxuICAgIGFkZEN1cnNvckJvcmRlcixcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcixcclxuICAgIGFkZEN1cnNvckNvbG9yLFxyXG4gICAgcmVzZXRDdXJzb3JDb2xvcixcclxuICB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgICAoeyBicmVha3BvaW50cyB9KSA9PiBgKG1heC13aWR0aDoke2JyZWFrcG9pbnRzLnNpemVzLnNtYWxsfXB4KWAsXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5pbWF0aW9uQ29tcGxldGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JDb2xvcih0aGVtZS50ZXh0KTtcclxuICB9LCBbYWRkQ3Vyc29yQ29sb3IsIHRoZW1lLnRleHRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRXhpdENvbXBsZXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgcmVzZXRDdXJzb3JDb2xvcigpO1xyXG4gIH0sIFtyZXNldEN1cnNvckNvbG9yXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhvdmVyU3RhcnQgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIGV2ZW50ID0+IHtcclxuICAgICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICAgIHNldFJldmVhbFZpZGVvKGV2ZW50LnRhcmdldC5uYW1lKTtcclxuICAgIH0sXHJcbiAgICBbYWRkQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVIb3ZlckVuZCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgc2V0UmV2ZWFsVmlkZW8obnVsbCk7XHJcbiAgfSwgW3JlbW92ZUN1cnNvckJvcmRlcl0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaXNNZW51T3BlbiAmJiBjb250YWluZXJSZWYuY3VycmVudCAmJiB2aWRlb0NvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMjU2O1xyXG4gICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSAod2luZG93LmlubmVyV2lkdGggLSB3aWR0aCkgLyAyICsgb2Zmc2V0O1xyXG5cclxuICAgICAgICB2aWRlb0NvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbaXNNZW51T3Blbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVQcmVzZW5jZSBvbkV4aXRDb21wbGV0ZT17aGFuZGxlRXhpdENvbXBsZXRlfT5cclxuICAgICAge2lzTWVudU9wZW4gJiYgKFxyXG4gICAgICAgIDxCYWNrZHJvcCBvbkFuaW1hdGlvbkNvbXBsZXRlPXtoYW5kbGVBbmltYXRpb25Db21wbGV0ZX0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIHJlZj17Y29udGFpbmVyUmVmfT5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDM+TWVudTwvaDM+XHJcbiAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIHRpdGxlPVwiQ2xvc2VcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24+XHJcbiAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsaXN0VmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgIG9uSG92ZXJTdGFydD17KCkgPT4gc2V0SXNIb3ZlcmluZyh0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uSG92ZXJFbmQ9eygpID0+IHNldElzSG92ZXJpbmcoZmFsc2UpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtyb3V0ZXMubWFwKHJvdXRlID0+IChcclxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5saVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cm91dGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2xpc3RJdGVtc1ZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjksXHJcbiAgICAgICAgICAgICAgICAgICAgICBlYXNlOiB0cmFuc2l0aW9uLmVhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXtyb3V0ZS5wYXRofSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3JvdXRlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0xPU0VfTUVOVScgfSk7IC8vIERpc3BhdGNoIGNsb3NlIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9e2hhbmRsZUhvdmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSG92ZXJFbmQ9e2hhbmRsZUhvdmVyRW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b209e3sgaXNNb2JpbGUsIGNvbG9yOiB0aGVtZS50ZXh0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2xpbmtWYXJpYW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvdyBmaWxsQ29sb3I9e3doaXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Fycm93Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cm91dGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cclxuICAgICAgICAgICAgPEZvb3Rlcj5cclxuICAgICAgICAgICAgICA8Rm9vdGVyVGV4dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzppbmZvQGZ1cnJvdy5zdHVkaW9cIlxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3JlbW92ZUN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBpbmZvQGx1bWluZXhhLmluXHJcbiAgICAgICAgICAgICAgPC9Gb290ZXJUZXh0PlxyXG4gICAgICAgICAgICAgIDxGb290ZXJUZXh0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwidGVsOis5MS44Mi40MTcuMDYzNFwiXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICs5MS44NjYuMDQ0Ljk5NzBcclxuICAgICAgICAgICAgICA8L0Zvb3RlclRleHQ+XHJcbiAgICAgICAgICAgICAgPEZvb3RlclRleHQgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+wqkgbHVtaW5leGEgMjAyNDwvRm9vdGVyVGV4dD5cclxuICAgICAgICAgICAgICB7aXNNb2JpbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDE0IDFzdCBTdGFnZSBCaGFuYXNoYW5rYXJpPGJyIC8+IEJhbmdhbG9yZSwgS0EgSU5cclxuICAgICAgICAgICAgICAgICAgPC9Gb290ZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9BZGRyZXNzPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPFNvY2lhbE1lZGlhIC8+XHJcbiAgICAgICAgICAgIDwvRm9vdGVyPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICB7IWlzTW9iaWxlICYmIChcclxuICAgICAgICAgICAgPFZpZGVvQ29udGFpbmVyIHJlZj17dmlkZW9Db250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICAgIDxWaWRlb1JldmVhbFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZpZGVvUmV2ZWFsVmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17aXNIb3ZlcmluZyA/ICdoaWRkZW4nIDogJ3Nob3cnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlcy5tYXAocm91dGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFZpZGVvXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cm91dGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YC92aWRlb3MvJHtyb3V0ZS52aWRlb31gfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50cz17dmlkZW9WYXJpYW50c31cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3JvdXRlLmlkID09PSByZXZlYWxWaWRlbyA/ICdzaG93JyA6ICdoaWRkZW4nfVxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgICAgICA+PC9WaWRlbz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9WaWRlb0NvbnRhaW5lcj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9CYWNrZHJvcD5cclxuICAgICAgKX1cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1lbnUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
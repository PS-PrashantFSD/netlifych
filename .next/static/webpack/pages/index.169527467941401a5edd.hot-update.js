webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/About/About.jsx":
/*!*****************************************!*\
  !*** ./components/Home/About/About.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants_services_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/constants/services-items */ "./utils/constants/services-items.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/About/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\About\\About.jsx",
  _s = $RefreshSig$();






const About = () => {
  _s();
  const [selectedItem, setSelectedItem] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const handleMouseEnter = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(curr => {
    if (curr === selectedItem) return;
    addCursorBorder();
  }, [selectedItem, addCursorBorder]);
  const handleMouseLeave = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(curr => {
    if (curr === selectedItem) return;
    removeCursorBorder();
  }, [selectedItem, removeCursorBorder]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["TextWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        style: {
          fontSize: '99px'
        },
        children: "About Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
        children: "Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: ["We specialize in a range of cutting-edge digital solutions. Our services include advanced Augmented Reality software that transforms your digital interactions, comprehensive Web Development to create user friendly online platforms, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
          children: "innovative Image Tracking And Object detection"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 22
        }, undefined), " system designed to streamline processes through smart recognition."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["ServicesWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
        children: "Services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, undefined), _utils_constants_services_items__WEBPACK_IMPORTED_MODULE_1__["default"].map((_ref, itemIndex) => {
        let [item, services] = _ref;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["AccordionToggle"], {
            "aria-expanded": itemIndex === selectedItem,
            onClick: () => setSelectedItem(itemIndex),
            onMouseEnter: () => handleMouseEnter(itemIndex),
            onMouseLeave: () => handleMouseLeave(itemIndex),
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["AccordionContent"], {
            animate: {
              height: itemIndex === selectedItem ? '100%' : '0'
            },
            transition: {
              duration: 0.7,
              ease: [0, 0.7, 0.29, 0.97]
            },
            children: services.map((service, serviceIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: service
            }, `${itemIndex}_${serviceIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, undefined)]
        }, item, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, undefined);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }, undefined);
};
_s(About, "6zB8vWuTWR2rDHHwYujoKKyPE1Q=", false, function () {
  return [_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c = About;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(About));
var _c, _c2;
$RefreshReg$(_c, "About");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L0Fib3V0LmpzeCJdLCJuYW1lcyI6WyJBYm91dCIsIl9zIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaGFuZGxlTW91c2VFbnRlciIsInVzZUNhbGxiYWNrIiwiY3VyciIsImhhbmRsZU1vdXNlTGVhdmUiLCJfanN4REVWIiwiQ29udGVudFNlY3Rpb24iLCJjaGlsZHJlbiIsIlRleHRXcmFwcGVyIiwic3R5bGUiLCJmb250U2l6ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlNlcnZpY2VzV3JhcHBlciIsIml0ZW1zIiwibWFwIiwiX3JlZiIsIml0ZW1JbmRleCIsIml0ZW0iLCJzZXJ2aWNlcyIsIkZyYWdtZW50IiwiQWNjb3JkaW9uVG9nZ2xlIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIkFjY29yZGlvbkNvbnRlbnQiLCJhbmltYXRlIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInNlcnZpY2UiLCJzZXJ2aWNlSW5kZXgiLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQztBQUNEO0FBQ1A7QUFPbEM7QUFBQTtBQUVsQixNQUFNQSxLQUFLLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQ2xCLE1BQU0sQ0FBQ0MsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR0MsNENBQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztFQUN6RCxNQUFNO0lBQUVDLGVBQWU7SUFBRUM7RUFBbUIsQ0FBQyxHQUFHQyxxRUFBYyxDQUFDLENB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QVMsSUFBSWUsWUFBWSxFQUFFO2NBQUF2QixRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFBYyxDQUNyRDtVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNjLENBQUM7UUFBQSxHQWhCQU0sSUFBSTtVQUFBVCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFpQlQsQ0FBQztNQUFBLENBQ2xCLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDYSxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0osQ0FBQztBQUd2QixDQUFDO0FBQUNyQixFQUFBLENBakVJRCxLQUFLO0VBQUEsUUFFdUNRLDZEQUFjO0FBQUE7QUFBQW1DLEVBQUEsR0FGMUQzQyxLQUFLO0FBbUVYNEMsa0VBQUEsZ0JBQWV4Qyw0Q0FBSyxDQUFDeUMsSUFBSSxDQUFDN0MsS0FBSyxDQUFDLEVBQUM7QUFBQSxJQUFBMkMsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLFlBQUEsQ0FBQUgsRUFBQTtBQUFBRyxZQUFBLENBQUFGLEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTY5NTI3NDY3OTQxNDAxYTVlZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpdGVtcyBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMvc2VydmljZXMtaXRlbXMnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCB7XHJcbiAgQ29udGVudFNlY3Rpb24sXHJcbiAgVGV4dFdyYXBwZXIsXHJcbiAgU2VydmljZXNXcmFwcGVyLFxyXG4gIEFjY29yZGlvblRvZ2dsZSxcclxuICBBY2NvcmRpb25Db250ZW50LFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBjdXJyID0+IHtcclxuICAgICAgaWYgKGN1cnIgPT09IHNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgW3NlbGVjdGVkSXRlbSwgYWRkQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBjdXJyID0+IHtcclxuICAgICAgaWYgKGN1cnIgPT09IHNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgW3NlbGVjdGVkSXRlbSwgcmVtb3ZlQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICA8VGV4dFdyYXBwZXI+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogJzk5cHgnfX0+QWJvdXQgVXM8L2gxPlxyXG4gICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgT3VyIG1pc3Npb24gaXMgdG8gcmV2b2x1dGlvbml6ZSB2aXN1YWwgZXhwZXJpZW5jZXMsIFxyXG4gICAgICAgICAgYnJpZGdpbmcgdGhlIGdhcCBiZXR3ZWVuIHRoZSBwaHlzaWNhbCBhbmQgZGlnaXRhbCB3b3JsZHMuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICBXZSBzcGVjaWFsaXplIGluIGEgcmFuZ2Ugb2YgY3V0dGluZy1lZGdlIGRpZ2l0YWwgc29sdXRpb25zLiBcclxuICAgICAgICAgIE91ciBzZXJ2aWNlcyBpbmNsdWRlIGFkdmFuY2VkIEF1Z21lbnRlZCBSZWFsaXR5IHNvZnR3YXJlIHRoYXQgdHJhbnNmb3JtcyB5b3VyIFxyXG4gICAgICAgICAgZGlnaXRhbCBpbnRlcmFjdGlvbnMsIGNvbXByZWhlbnNpdmUgV2ViIERldmVsb3BtZW50IHRvIGNyZWF0ZSB1c2VyIGZyaWVuZGx5IG9ubGluZSBcclxuICAgICAgICAgIHBsYXRmb3JtcywgPHN0cm9uZz5pbm5vdmF0aXZlIEltYWdlIFRyYWNraW5nIEFuZCBPYmplY3QgZGV0ZWN0aW9uPC9zdHJvbmc+IHN5c3RlbSBkZXNpZ25lZCB0byBzdHJlYW1saW5lIFxyXG4gICAgICAgICAgcHJvY2Vzc2VzIHRocm91Z2ggc21hcnQgcmVjb2duaXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9UZXh0V3JhcHBlcj5cclxuICAgICAgICA8U2VydmljZXNXcmFwcGVyPlxyXG4gICAgICAgICAgPGgzPlNlcnZpY2VzPC9oMz5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKFtpdGVtLCBzZXJ2aWNlc10sIGl0ZW1JbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtpdGVtSW5kZXggPT09IHNlbGVjdGVkSXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSXRlbShpdGVtSW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVNb3VzZUVudGVyKGl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZU1vdXNlTGVhdmUoaXRlbUluZGV4KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvblRvZ2dsZT5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQ29udGVudFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBoZWlnaHQ6IGl0ZW1JbmRleCA9PT0gc2VsZWN0ZWRJdGVtID8gJzEwMCUnIDogJzAnIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjcsIGVhc2U6IFswLCAwLjcsIDAuMjksIDAuOTddIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSwgc2VydmljZUluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGtleT17YCR7aXRlbUluZGV4fV8ke3NlcnZpY2VJbmRleH1gfT57c2VydmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlcnZpY2VzV3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50U2VjdGlvbj5cclxuICBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBYm91dCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
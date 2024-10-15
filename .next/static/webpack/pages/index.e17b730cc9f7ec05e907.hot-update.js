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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["ContentSection"], {
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
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L0Fib3V0LmpzeCJdLCJuYW1lcyI6WyJBYm91dCIsIl9zIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaGFuZGxlTW91c2VFbnRlciIsInVzZUNhbGxiYWNrIiwiY3VyciIsImhhbmRsZU1vdXNlTGVhdmUiLCJfanN4REVWIiwiQW5pbWF0ZU9uU2NyZWVuIiwiY2hpbGRyZW4iLCJDb250ZW50U2VjdGlvbiIsIlRleHRXcmFwcGVyIiwic3R5bGUiLCJmb250U2l6ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlNlcnZpY2VzV3JhcHBlciIsIml0ZW1zIiwibWFwIiwiX3JlZiIsIml0ZW1JbmRleCIsIml0ZW0iLCJzZXJ2aWNlcyIsIkZyYWdtZW50IiwiQWNjb3JkaW9uVG9nZ2xlIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIkFjY29yZGlvbkNvbnRlbnQiLCJhbmltYXRlIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInNlcnZpY2UiLCJzZXJ2aWNlSW5kZXgiLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQztBQUNEO0FBQ1A7QUFPbEM7QUFBQTtBQUVsQixNQUFNQSxLQUFLLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQ2xCLE1BQU0sQ0FBQ0MsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR0MsNENBQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztFQUN6RCxNQUFNO0lBQUVDLGVBQWU7SUFBRUM7RUFBbUIsQ0FBQyxH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WUFBWSxrQkFDbEM5QixvRUFBQTtnQkFBQUUsUUFBQSxFQUF5QzJCO2NBQU8sR0FBeEMsR0FBR2QsU0FBUyxJQUFJZSxZQUFZLEVBQUU7Z0JBQUF2QixRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUFjLENBQ3JEO1lBQUM7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQ2MsQ0FBQztVQUFBLEdBaEJBTSxJQUFJO1lBQUFULFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQWlCVCxDQUFDO1FBQUEsQ0FDbEIsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNhLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSjtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNGLENBQUM7QUFFdEIsQ0FBQztBQUFDdEIsRUFBQSxDQWpFSUQsS0FBSztFQUFBLFFBRXVDUSw2REFBYztBQUFBO0FBQUFvQyxFQUFBLEdBRjFENUMsS0FBSztBQW1FWDZDLGtFQUFBLGdCQUFlekMsNENBQUssQ0FBQzBDLElBQUksQ0FBQzlDLEtBQUssQ0FBQyxFQUFDO0FBQUEsSUFBQTRDLEVBQUEsRUFBQUMsR0FBQTtBQUFBRSxZQUFBLENBQUFILEVBQUE7QUFBQUcsWUFBQSxDQUFBRixHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxN2I3MzBjYzlmN2VjMDVlOTA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaXRlbXMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzL3NlcnZpY2VzLWl0ZW1zJztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQge1xyXG4gIENvbnRlbnRTZWN0aW9uLFxyXG4gIFRleHRXcmFwcGVyLFxyXG4gIFNlcnZpY2VzV3JhcHBlcixcclxuICBBY2NvcmRpb25Ub2dnbGUsXHJcbiAgQWNjb3JkaW9uQ29udGVudCxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgY3VyciA9PiB7XHJcbiAgICAgIGlmIChjdXJyID09PSBzZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgIGFkZEN1cnNvckJvcmRlcigpO1xyXG4gICAgfSxcclxuICAgIFtzZWxlY3RlZEl0ZW0sIGFkZEN1cnNvckJvcmRlcl0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgY3VyciA9PiB7XHJcbiAgICAgIGlmIChjdXJyID09PSBzZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgfSxcclxuICAgIFtzZWxlY3RlZEl0ZW0sIHJlbW92ZUN1cnNvckJvcmRlcl0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICA8VGV4dFdyYXBwZXI+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogJzk5cHgnfX0+QWJvdXQgVXM8L2gxPlxyXG4gICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgT3VyIG1pc3Npb24gaXMgdG8gcmV2b2x1dGlvbml6ZSB2aXN1YWwgZXhwZXJpZW5jZXMsIFxyXG4gICAgICAgICAgYnJpZGdpbmcgdGhlIGdhcCBiZXR3ZWVuIHRoZSBwaHlzaWNhbCBhbmQgZGlnaXRhbCB3b3JsZHMuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICBXZSBzcGVjaWFsaXplIGluIGEgcmFuZ2Ugb2YgY3V0dGluZy1lZGdlIGRpZ2l0YWwgc29sdXRpb25zLiBcclxuICAgICAgICAgIE91ciBzZXJ2aWNlcyBpbmNsdWRlIGFkdmFuY2VkIEF1Z21lbnRlZCBSZWFsaXR5IHNvZnR3YXJlIHRoYXQgdHJhbnNmb3JtcyB5b3VyIFxyXG4gICAgICAgICAgZGlnaXRhbCBpbnRlcmFjdGlvbnMsIGNvbXByZWhlbnNpdmUgV2ViIERldmVsb3BtZW50IHRvIGNyZWF0ZSB1c2VyIGZyaWVuZGx5IG9ubGluZSBcclxuICAgICAgICAgIHBsYXRmb3JtcywgPHN0cm9uZz5pbm5vdmF0aXZlIEltYWdlIFRyYWNraW5nIEFuZCBPYmplY3QgZGV0ZWN0aW9uPC9zdHJvbmc+IHN5c3RlbSBkZXNpZ25lZCB0byBzdHJlYW1saW5lIFxyXG4gICAgICAgICAgcHJvY2Vzc2VzIHRocm91Z2ggc21hcnQgcmVjb2duaXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9UZXh0V3JhcHBlcj5cclxuICAgICAgICA8U2VydmljZXNXcmFwcGVyPlxyXG4gICAgICAgICAgPGgzPlNlcnZpY2VzPC9oMz5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKFtpdGVtLCBzZXJ2aWNlc10sIGl0ZW1JbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtpdGVtSW5kZXggPT09IHNlbGVjdGVkSXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSXRlbShpdGVtSW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVNb3VzZUVudGVyKGl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZU1vdXNlTGVhdmUoaXRlbUluZGV4KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvblRvZ2dsZT5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQ29udGVudFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBoZWlnaHQ6IGl0ZW1JbmRleCA9PT0gc2VsZWN0ZWRJdGVtID8gJzEwMCUnIDogJzAnIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjcsIGVhc2U6IFswLCAwLjcsIDAuMjksIDAuOTddIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSwgc2VydmljZUluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGtleT17YCR7aXRlbUluZGV4fV8ke3NlcnZpY2VJbmRleH1gfT57c2VydmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlcnZpY2VzV3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50U2VjdGlvbj5cclxuICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFib3V0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
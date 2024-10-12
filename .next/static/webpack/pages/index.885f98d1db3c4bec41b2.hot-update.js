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
          children: "At our company, we specialize in a range of cutting-edge digital solutions. Our services include advanced Augmented Reality software that transforms your digital interactions, comprehensive Web Development to create user friendly online platforms, innovative Image Tracking And Object detection system designed to streamline processes through smart recognition."
        }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L0Fib3V0LmpzeCJdLCJuYW1lcyI6WyJBYm91dCIsIl9zIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaGFuZGxlTW91c2VFbnRlciIsInVzZUNhbGxiYWNrIiwiY3VyciIsImhhbmRsZU1vdXNlTGVhdmUiLCJfanN4REVWIiwiQW5pbWF0ZU9uU2NyZWVuIiwiY2hpbGRyZW4iLCJDb250ZW50U2VjdGlvbiIsIlRleHRXcmFwcGVyIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiU2VydmljZXNXcmFwcGVyIiwiaXRlbXMiLCJtYXAiLCJfcmVmIiwiaXRlbUluZGV4IiwiaXRlbSIsInNlcnZpY2VzIiwiRnJhZ21lbnQiLCJBY2NvcmRpb25Ub2dnbGUiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiQWNjb3JkaW9uQ29udGVudCIsImFuaW1hdGUiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic2VydmljZSIsInNlcnZpY2VJbmRleCIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tDO0FBQ0Q7QUFDUDtBQU9sQztBQUFBO0FBRWxCLE1BQU1BLEtBQUssR0FBR0EsQ0FBQSxLQUFNO0VBQUFDLEVBQUE7RUFDbEIsTUFBTSxDQUFDQyxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHQyw0Q0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQ3pELE1BQU07SUFBRUMsZUFBZTtJQUFFQztFQUFtQixDQUFDLEdBQUdDLHFFQUFjLENBQUMsQ0FB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Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFDYyxDQUFDO1VBQUEsR0FoQkFNLElBQUk7WUFBQVQsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBaUJULENBQUM7UUFBQSxDQUNsQixDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ2EsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNKO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0YsQ0FBQztBQUV0QixDQUFDO0FBQUNwQixFQUFBLENBakVJRCxLQUFLO0VBQUEsUUFFdUNRLDZEQUFjO0FBQUE7QUFBQWtDLEVBQUEsR0FGMUQxQyxLQUFLO0FBbUVYMkMsa0VBQUEsZ0JBQWV2Qyw0Q0FBSyxDQUFDd0MsSUFBSSxDQUFDNUMsS0FBSyxDQUFDLEVBQUM7QUFBQSxJQUFBMEMsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLFlBQUEsQ0FBQUgsRUFBQTtBQUFBRyxZQUFBLENBQUFGLEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg1Zjk4ZDFkYjNjNGJlYzQxYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpdGVtcyBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMvc2VydmljZXMtaXRlbXMnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCB7XHJcbiAgQ29udGVudFNlY3Rpb24sXHJcbiAgVGV4dFdyYXBwZXIsXHJcbiAgU2VydmljZXNXcmFwcGVyLFxyXG4gIEFjY29yZGlvblRvZ2dsZSxcclxuICBBY2NvcmRpb25Db250ZW50LFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBjdXJyID0+IHtcclxuICAgICAgaWYgKGN1cnIgPT09IHNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgW3NlbGVjdGVkSXRlbSwgYWRkQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBjdXJyID0+IHtcclxuICAgICAgaWYgKGN1cnIgPT09IHNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgW3NlbGVjdGVkSXRlbSwgcmVtb3ZlQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgICAgIDxoMT5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICBPdXIgbWlzc2lvbiBpcyB0byByZXZvbHV0aW9uaXplIHZpc3VhbCBleHBlcmllbmNlcywgXHJcbiAgICAgICAgICBicmlkZ2luZyB0aGUgZ2FwIGJldHdlZW4gdGhlIHBoeXNpY2FsIGFuZCBkaWdpdGFsIHdvcmxkcy5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgIEF0IG91ciBjb21wYW55LCB3ZSBzcGVjaWFsaXplIGluIGEgcmFuZ2Ugb2YgY3V0dGluZy1lZGdlIGRpZ2l0YWwgc29sdXRpb25zLiBcclxuICAgICAgICAgIE91ciBzZXJ2aWNlcyBpbmNsdWRlIGFkdmFuY2VkIEF1Z21lbnRlZCBSZWFsaXR5IHNvZnR3YXJlIHRoYXQgdHJhbnNmb3JtcyB5b3VyIFxyXG4gICAgICAgICAgZGlnaXRhbCBpbnRlcmFjdGlvbnMsIGNvbXByZWhlbnNpdmUgV2ViIERldmVsb3BtZW50IHRvIGNyZWF0ZSB1c2VyIGZyaWVuZGx5IG9ubGluZSBcclxuICAgICAgICAgIHBsYXRmb3JtcywgaW5ub3ZhdGl2ZSBJbWFnZSBUcmFja2luZyBBbmQgT2JqZWN0IGRldGVjdGlvbiBzeXN0ZW0gZGVzaWduZWQgdG8gc3RyZWFtbGluZSBcclxuICAgICAgICAgIHByb2Nlc3NlcyB0aHJvdWdoIHNtYXJ0IHJlY29nbml0aW9uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvVGV4dFdyYXBwZXI+XHJcbiAgICAgICAgPFNlcnZpY2VzV3JhcHBlcj5cclxuICAgICAgICAgIDxoMz5TZXJ2aWNlczwvaDM+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChbaXRlbSwgc2VydmljZXNdLCBpdGVtSW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvblRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXRlbUluZGV4ID09PSBzZWxlY3RlZEl0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEl0ZW0oaXRlbUluZGV4KX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlTW91c2VFbnRlcihpdGVtSW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgaGVpZ2h0OiBpdGVtSW5kZXggPT09IHNlbGVjdGVkSXRlbSA/ICcxMDAlJyA6ICcwJyB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC43LCBlYXNlOiBbMCwgMC43LCAwLjI5LCAwLjk3XSB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIHNlcnZpY2VJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8cCBrZXk9e2Ake2l0ZW1JbmRleH1fJHtzZXJ2aWNlSW5kZXh9YH0+e3NlcnZpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZXJ2aWNlc1dyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBYm91dCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
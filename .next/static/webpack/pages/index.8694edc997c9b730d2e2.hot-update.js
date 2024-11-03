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
/* harmony import */ var _Misc_Call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Misc/Call */ "./components/Misc/Call.jsx");
/* harmony import */ var _Misc_Nexar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Misc/Nexar */ "./components/Misc/Nexar.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/Home/About/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Misc_Nexar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ContentSection"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["TextWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          style: {
            fontSize: '99px'
          },
          children: "Luminexa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          children: "Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          children: ["We specialize in a range of cutting-edge digital solutions. Our services include advanced Augmented Reality software that transforms your digital interactions, comprehensive Web Development to create user friendly online platforms, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: "innovative Image Tracking And Object detection"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 22
          }, undefined), " system designed to streamline processes through smart recognition."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ServicesWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          children: "Services"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), _utils_constants_services_items__WEBPACK_IMPORTED_MODULE_1__["default"].map((_ref, itemIndex) => {
          let [item, services] = _ref;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["AccordionToggle"], {
              "aria-expanded": itemIndex === selectedItem,
              onClick: () => setSelectedItem(itemIndex),
              onMouseEnter: () => handleMouseEnter(itemIndex),
              onMouseLeave: () => handleMouseLeave(itemIndex),
              children: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["AccordionContent"], {
              animate: {
                height: itemIndex === selectedItem ? '100%' : '0'
              },
              transition: {
                duration: 0.7,
                ease: [0, 0.7, 0.29, 0.97]
              },
              children: services.map((service, serviceIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                children: service
              }, `${itemIndex}_${serviceIndex}`, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Misc_Call__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L0Fib3V0LmpzeCJdLCJuYW1lcyI6WyJBYm91dCIsIl9zIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaGFuZGxlTW91c2VFbnRlciIsInVzZUNhbGxiYWNrIiwiY3VyciIsImhhbmRsZU1vdXNlTGVhdmUiLCJfanN4REVWIiwiQW5pbWF0ZU9uU2NyZWVuIiwiY2hpbGRyZW4iLCJOZXhhciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNvbnRlbnRTZWN0aW9uIiwiVGV4dFdyYXBwZXIiLCJzdHlsZSIsImZvbnRTaXplIiwiU2VydmljZXNXcmFwcGVyIiwiaXRlbXMiLCJtYXAiLCJfcmVmIiwiaXRlbUluZGV4IiwiaXRlbSIsInNlcnZpY2VzIiwiRnJhZ21lbnQiLCJBY2NvcmRpb25Ub2dnbGUiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiQWNjb3JkaW9uQ29udGVudCIsImFuaW1hdGUiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic2VydmljZSIsInNlcnZpY2VJbmRleCIsIkNhbGwiLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tDO0FBQ0Q7QUFDUDtBQUNoQjtBQUNFO0FBT3BCO0FBQUE7QUFFbEIsTUFBTUEsS0FBSyxHQUFHQSxDQUFBLEtBQU07RUFBQUMsRUFBQTtFQUNsQixNQUFNLENBQUNDLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUdDLDRDQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7RUFDekQsTUFBTTtJ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RixHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2OTRlZGM5OTdjOWI3MzBkMmUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaXRlbXMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzL3NlcnZpY2VzLWl0ZW1zJztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgQ2FsbCBmcm9tICcuLy4uLy4uL01pc2MvQ2FsbCdcclxuaW1wb3J0IE5leGFyIGZyb20gJy4vLi4vLi4vTWlzYy9OZXhhcidcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBUZXh0V3JhcHBlcixcclxuICBTZXJ2aWNlc1dyYXBwZXIsXHJcbiAgQWNjb3JkaW9uVG9nZ2xlLFxyXG4gIEFjY29yZGlvbkNvbnRlbnQsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIGN1cnIgPT4ge1xyXG4gICAgICBpZiAoY3VyciA9PT0gc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIH0sXHJcbiAgICBbc2VsZWN0ZWRJdGVtLCBhZGRDdXJzb3JCb3JkZXJdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIGN1cnIgPT4ge1xyXG4gICAgICBpZiAoY3VyciA9PT0gc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICByZW1vdmVDdXJzb3JCb3JkZXIoKTtcclxuICAgIH0sXHJcbiAgICBbc2VsZWN0ZWRJdGVtLCByZW1vdmVDdXJzb3JCb3JkZXJdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICA8TmV4YXIvPlxyXG4gICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICc5OXB4J319Pkx1bWluZXhhPC9oMT5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgIE91ciBtaXNzaW9uIGlzIHRvIHJldm9sdXRpb25pemUgdmlzdWFsIGV4cGVyaWVuY2VzLCBcclxuICAgICAgICAgIGJyaWRnaW5nIHRoZSBnYXAgYmV0d2VlbiB0aGUgcGh5c2ljYWwgYW5kIGRpZ2l0YWwgd29ybGRzLlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgV2Ugc3BlY2lhbGl6ZSBpbiBhIHJhbmdlIG9mIGN1dHRpbmctZWRnZSBkaWdpdGFsIHNvbHV0aW9ucy4gXHJcbiAgICAgICAgICBPdXIgc2VydmljZXMgaW5jbHVkZSBhZHZhbmNlZCBBdWdtZW50ZWQgUmVhbGl0eSBzb2Z0d2FyZSB0aGF0IHRyYW5zZm9ybXMgeW91ciBcclxuICAgICAgICAgIGRpZ2l0YWwgaW50ZXJhY3Rpb25zLCBjb21wcmVoZW5zaXZlIFdlYiBEZXZlbG9wbWVudCB0byBjcmVhdGUgdXNlciBmcmllbmRseSBvbmxpbmUgXHJcbiAgICAgICAgICBwbGF0Zm9ybXMsIDxzdHJvbmc+aW5ub3ZhdGl2ZSBJbWFnZSBUcmFja2luZyBBbmQgT2JqZWN0IGRldGVjdGlvbjwvc3Ryb25nPiBzeXN0ZW0gZGVzaWduZWQgdG8gc3RyZWFtbGluZSBcclxuICAgICAgICAgIHByb2Nlc3NlcyB0aHJvdWdoIHNtYXJ0IHJlY29nbml0aW9uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvVGV4dFdyYXBwZXI+XHJcbiAgICAgICAgPFNlcnZpY2VzV3JhcHBlcj5cclxuICAgICAgICAgIDxoMz5TZXJ2aWNlczwvaDM+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChbaXRlbSwgc2VydmljZXNdLCBpdGVtSW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvblRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXRlbUluZGV4ID09PSBzZWxlY3RlZEl0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEl0ZW0oaXRlbUluZGV4KX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlTW91c2VFbnRlcihpdGVtSW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgaGVpZ2h0OiBpdGVtSW5kZXggPT09IHNlbGVjdGVkSXRlbSA/ICcxMDAlJyA6ICcwJyB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC43LCBlYXNlOiBbMCwgMC43LCAwLjI5LCAwLjk3XSB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIHNlcnZpY2VJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8cCBrZXk9e2Ake2l0ZW1JbmRleH1fJHtzZXJ2aWNlSW5kZXh9YH0+e3NlcnZpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZXJ2aWNlc1dyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxDYWxsLz5cclxuICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFib3V0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
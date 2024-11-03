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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ContentSection"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["TextWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          style: {
            fontSize: '69px',
            marginBottom: '9px'
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ServicesWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          style: {
            fontSize: '69px',
            marginBottom: '9px'
          },
          children: " Innovative Digital Solutions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          children: ["We specialize in a range of cutting-edge digital solutions. Our services include advanced Augmented Reality software that transforms your digital interactions, comprehensive Web Development to create user friendly online platforms, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: "innovative Image Tracking And Object detection"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 22
          }, undefined), " system designed to streamline processes through smart recognition."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Misc_Call__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L0Fib3V0LmpzeCJdLCJuYW1lcyI6WyJBYm91dCIsIl9zIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaGFuZGxlTW91c2VFbnRlciIsInVzZUNhbGxiYWNrIiwiY3VyciIsImhhbmRsZU1vdXNlTGVhdmUiLCJfanN4REVWIiwiQW5pbWF0ZU9uU2NyZWVuIiwiY2hpbGRyZW4iLCJDb250ZW50U2VjdGlvbiIsIlRleHRXcmFwcGVyIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlNlcnZpY2VzV3JhcHBlciIsIkNhbGwiLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tDO0FBQ0Q7QUFDUDtBQUNoQjtBQUNFO0FBT3BCO0FBQUE7QUFFbEIsTUFBTUEsS0FBSyxHQUFHQSxDQUFBLEtBQU07RUFBQUMsRUFBQTtFQUNsQixNQUFNLENBQUNDLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUdDLDRDQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7RUFDekQsTUFBTTtJQUFFQyxlQUFlO0lBQUVDO0VBQW1CLENBQUMsR0FBR0MscUVBQWMsQ0FBQyxDQUFDO0VBRWhFLE1BQU1DLGdCQUFnQixHQUFHTCw0Q0FBSyxDQUFDTSxXQUFXLENBQ3hDQyxJQUFJLElBQUk7SUFDTixJQUFJQSxJQUFJLEtBQUtULFlBQVksRUFBRTtJQUUzQkksZUFBZSxDQUFDLENBQUM7RUFDbkIsQ0FBQyxFQUNELENBQUNKLFlBQVksRUFBRUksZUFBZSxDQUNoQyxDQUFDO0VBRUQsTUFBTU0sZ0JBQWdCLEdBQUdSLDRDQUFLLENBQUNNLFdBQVcsQ0FDeENDLElBQUksSUFBSTtJQUNOLElBQUlBLElBQUksS0FBS1QsWUFBWSxFQUFFO0lBRTNCSyxrQkFBa0IsQ0FBQyxDQUFDO0VBQ3RCLENBQUMsRUFDRCxDQUFDTCxZQUFZLEVBQUVLLGtCQUFrQixDQUNuQyxDQUFDO0VBRUQsb0JBQ0VNLG9FQUFBLENBQUNDLHdEQUFlO0lBQUFDLFFBQUEsZ0JBRWRGLG9FQUFBLENBQUNHLHNEQUFjO01BQUFELFFBQUEsZ0JBQ2JGLG9FQUFBLENBQUNJLG1EQUFXO1FBQUFGLFFBQUEsZ0JBQ1ZGLG9FQUFBO1VBQUlLLEtBQUssRUFBRTtZQUFDQyxRQUFRLEVBQUUsTUFBTTtZQUFFQyxZQUFZLEVBQUM7VUFBSyxDQUFFO1VBQUFMLFFBQUEsRUFBQztRQUFRO1VBQUFNLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFJLENBQUMsZUFDaEVYLG9FQUFBO1VBQUFFLFFBQUEsRUFBSTtRQUdKO1VBQUFNLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFJLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDTSxDQUFDLGVBQ2RYLG9FQUFBLENBQUNZLHVEQUFlO1FBQUFWLFFBQUEsZ0JBQ2RGLG9FQUFBO1VBQUlLLEtBQUssRUFBRTtZQUFDQyxRQUFRLEVBQUUsTUFBTTtZQUFFQyxZQUFZLEVBQUM7VUFBSyxDQUFFO1VBQUFMLFFBQUEsRUFBQztRQUE2QjtVQUFBTSxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBSSxDQUFDLGVBQ3JGWCxvRUFBQTtVQUFBRSxRQUFBLEdBQUcsME9BSVEsZUFBQUYsb0VBQUE7WUFBQUUsUUFBQSxFQUFRO1VBQThDO1lBQUFNLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFRLENBQUMsdUVBRTFFO1FBQUE7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUcsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNXLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSixDQUFDLGVBQ2pCWCxvRUFBQSxDQUFDYSxrREFBSTtNQUFBTCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBQyxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ1EsQ0FBQztBQUV0QixDQUFDO0FBQUN2QixFQUFBLENBL0NJRCxLQUFLO0VBQUEsUUFFdUNRLDZEQUFjO0FBQUE7QUFBQW1CLEVBQUEsR0FGMUQzQixLQUFLO0FBaURYNEIsa0VBQUEsZ0JBQWV4Qiw0Q0FBSyxDQUFDeUIsSUFBSSxDQUFDN0IsS0FBSyxDQUFDLEVBQUM7QUFBQSxJQUFBMkIsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLFlBQUEsQ0FBQUgsRUFBQTtBQUFBRyxZQUFBLENBQUFGLEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzdmMGE2NzE3Y2I0MjMwMzBkNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpdGVtcyBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMvc2VydmljZXMtaXRlbXMnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCBDYWxsIGZyb20gJy4vLi4vLi4vTWlzYy9DYWxsJ1xyXG5pbXBvcnQgTmV4YXIgZnJvbSAnLi8uLi8uLi9NaXNjL05leGFyJ1xyXG5pbXBvcnQge1xyXG4gIENvbnRlbnRTZWN0aW9uLFxyXG4gIFRleHRXcmFwcGVyLFxyXG4gIFNlcnZpY2VzV3JhcHBlcixcclxuICBBY2NvcmRpb25Ub2dnbGUsXHJcbiAgQWNjb3JkaW9uQ29udGVudCxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgY3VyciA9PiB7XHJcbiAgICAgIGlmIChjdXJyID09PSBzZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgIGFkZEN1cnNvckJvcmRlcigpO1xyXG4gICAgfSxcclxuICAgIFtzZWxlY3RlZEl0ZW0sIGFkZEN1cnNvckJvcmRlcl0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgY3VyciA9PiB7XHJcbiAgICAgIGlmIChjdXJyID09PSBzZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgfSxcclxuICAgIFtzZWxlY3RlZEl0ZW0sIHJlbW92ZUN1cnNvckJvcmRlcl0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIFxyXG4gICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICc2OXB4JywgbWFyZ2luQm90dG9tOic5cHgnfX0+THVtaW5leGE8L2gxPlxyXG4gICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgT3VyIG1pc3Npb24gaXMgdG8gcmV2b2x1dGlvbml6ZSB2aXN1YWwgZXhwZXJpZW5jZXMsIFxyXG4gICAgICAgICAgYnJpZGdpbmcgdGhlIGdhcCBiZXR3ZWVuIHRoZSBwaHlzaWNhbCBhbmQgZGlnaXRhbCB3b3JsZHMuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvVGV4dFdyYXBwZXI+XHJcbiAgICAgICAgPFNlcnZpY2VzV3JhcHBlcj5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiAnNjlweCcsIG1hcmdpbkJvdHRvbTonOXB4J319PiBJbm5vdmF0aXZlIERpZ2l0YWwgU29sdXRpb25zPC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgV2Ugc3BlY2lhbGl6ZSBpbiBhIHJhbmdlIG9mIGN1dHRpbmctZWRnZSBkaWdpdGFsIHNvbHV0aW9ucy4gXHJcbiAgICAgICAgICBPdXIgc2VydmljZXMgaW5jbHVkZSBhZHZhbmNlZCBBdWdtZW50ZWQgUmVhbGl0eSBzb2Z0d2FyZSB0aGF0IHRyYW5zZm9ybXMgeW91ciBcclxuICAgICAgICAgIGRpZ2l0YWwgaW50ZXJhY3Rpb25zLCBjb21wcmVoZW5zaXZlIFdlYiBEZXZlbG9wbWVudCB0byBjcmVhdGUgdXNlciBmcmllbmRseSBvbmxpbmUgXHJcbiAgICAgICAgICBwbGF0Zm9ybXMsIDxzdHJvbmc+aW5ub3ZhdGl2ZSBJbWFnZSBUcmFja2luZyBBbmQgT2JqZWN0IGRldGVjdGlvbjwvc3Ryb25nPiBzeXN0ZW0gZGVzaWduZWQgdG8gc3RyZWFtbGluZSBcclxuICAgICAgICAgIHByb2Nlc3NlcyB0aHJvdWdoIHNtYXJ0IHJlY29nbml0aW9uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvU2VydmljZXNXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8Q2FsbC8+XHJcbiAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBYm91dCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
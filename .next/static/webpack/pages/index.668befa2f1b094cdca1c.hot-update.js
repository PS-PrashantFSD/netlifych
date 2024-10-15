webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/Form/Form.jsx":
/*!***************************************!*\
  !*** ./components/Home/Form/Form.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Form\\Form.jsx";






const ContactSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_3__["default"]};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 200px;
  width: 100%;

  ${_ref => {
  let {
    theme
  } = _ref;
  return theme.breakpoints.medium`
    width: 80%;
  `;
}};

  ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  `;
}};
`;
_c = ContactSection;
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 58.333%;

  & h1 {
    font-size: 90px;
    color: white;
  }

  & p {
    color: white;
    line-height: 1.5;
    margin: 10px 0 0 0;
  }

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.small`
    width: 100%;
  `;
}};
`;
_c2 = TextWrapper;
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 33.333%;
  margin-top: 20px; /* Add margin to create space between text and form */

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.small`
    width: 100%;
    margin-top: 15px; /* Adjust for smaller screens */
  `;
}};
`;
_c3 = FormWrapper;
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
_c4 = Form;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.colors.gray;
}};
  border-radius: 0px;
  font-size: 1rem;

  &:focus {
    border-color: ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.colors.red;
}};
    outline: none;
  }
`;
_c5 = Input;
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.colors.gray;
}};
  border-radius: 0px;
  font-size: 1rem;
  resize: none;

  &:focus {
    border-color: ${_ref8 => {
  let {
    theme
  } = _ref8;
  return theme.colors.red;
}};
    outline: none;
  }
`;
_c6 = TextArea;
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  padding: 10px 15px;
  border: none;
  border-radius: 0px;
  background-color: ${_ref9 => {
  let {
    theme
  } = _ref9;
  return theme.colors.red;
}};
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${_ref10 => {
  let {
    theme
  } = _ref10;
  return theme.colors.darkRed;
}};
  }
`;
_c7 = SubmitButton;
const ContactForm = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ContactSection, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TextWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        children: "Contact Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: "nexAR - Augmented Reality finds diverse applications across marketing and advertising, retail and e-commerce."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
          children: "\xA9 Luminexa Technologies."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined), " Pioneering in web and augmented reality solutions, we are dedicated to transforming digital experiences. Connect with us for innovative, custom-tailored technology services that drive your business forward."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(FormWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        style: {
          marginBottom: '10px'
        },
        children: ["We'd love to hear ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
          children: "from you!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Form, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
          type: "text",
          placeholder: "Your Name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
          type: "email",
          placeholder: "Your Email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TextArea, {
          rows: "5",
          placeholder: "Your Message",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SubmitButton, {
          type: "submit",
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};
_c8 = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
$RefreshReg$(_c, "ContactSection");
$RefreshReg$(_c2, "TextWrapper");
$RefreshReg$(_c3, "FormWrapper");
$RefreshReg$(_c4, "Form");
$RefreshReg$(_c5, "Input");
$RefreshReg$(_c6, "TextArea");
$RefreshReg$(_c7, "SubmitButton");
$RefreshReg$(_c8, "ContactForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Zvcm0vRm9ybS5qc3giXSwibmFtZXMiOlsiQ29udGFjdFNlY3Rpb24iLCJzdHlsZWQiLCJtb3Rpb24iLCJzZWN0aW9uIiwiY29udGFpbmVyU3R5bGVzIiwiX3JlZiIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJfcmVmMiIsInNtYWxsIiwiX2MiLCJUZXh0V3JhcHBlciIsImRpdiIsIl9yZWYzIiwiX2MyIiwiRm9ybVdyYXBwZXIiLCJfcmVmNCIsIl9jMyIsIkZvcm0iLCJmb3JtIiwiX2M0IiwiSW5wdXQiLCJpbnB1dCIsIl9yZWY1IiwiY29sb3JzIiwiZ3JheSIsIl9yZWY2IiwicmVkIiwiX2M1IiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIl9yZWY3IiwiX3JlZjgiLCJfYzYiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJfcmVmOSIsIl9yZWYxMCIsImRhcmtSZWQiLCJfYzciLCJDb250YWN0Rm9ybSIsIl9qc3hERVYiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJyb3dzIiwiX2M4IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ0E7QUFDd0I7QUFDRTtBQUFBO0FBRWpFLE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQzdDLElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQSxHQUFHO0FB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QWUsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2OGJlZmEyZjFiMDk0Y2RjYTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xyXG5cclxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tZWRpdW1gXHJcbiAgICB3aWR0aDogODAlO1xyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDU4LjMzMyU7XHJcblxyXG4gICYgaDEge1xyXG4gICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDsgLyogQWRkIG1hcmdpbiB0byBjcmVhdGUgc3BhY2UgYmV0d2VlbiB0ZXh0IGFuZCBmb3JtICovXHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7IC8qIEFkanVzdCBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyYXl9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JheX07XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICByZXNpemU6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya1JlZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWN0U2VjdGlvbj5cclxuICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIG5leEFSIC0gQXVnbWVudGVkIFJlYWxpdHkgZmluZHMgZGl2ZXJzZSBhcHBsaWNhdGlvbnMgYWNyb3NzIG1hcmtldGluZyBhbmQgYWR2ZXJ0aXNpbmcsXHJcbiAgICAgICAgICByZXRhaWwgYW5kIGUtY29tbWVyY2UuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz7CqSBMdW1pbmV4YSBUZWNobm9sb2dpZXMuPC9zdHJvbmc+IFBpb25lZXJpbmcgaW4gd2ViIGFuZCBhdWdtZW50ZWQgcmVhbGl0eSBzb2x1dGlvbnMsXHJcbiAgICAgICAgICB3ZSBhcmUgZGVkaWNhdGVkIHRvIHRyYW5zZm9ybWluZyBkaWdpdGFsIGV4cGVyaWVuY2VzLiBDb25uZWN0IHdpdGggdXMgZm9yIGlubm92YXRpdmUsXHJcbiAgICAgICAgICBjdXN0b20tdGFpbG9yZWQgdGVjaG5vbG9neSBzZXJ2aWNlcyB0aGF0IGRyaXZlIHlvdXIgYnVzaW5lc3MgZm9yd2FyZC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvVGV4dFdyYXBwZXI+XHJcbiAgICAgIDxGb3JtV3JhcHBlcj5cclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgIFdlJ2QgbG92ZSB0byBoZWFyIDxzdHJvbmc+ZnJvbSB5b3UhPC9zdHJvbmc+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIE1lc3NhZ2U8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgICA8L0NvbnRhY3RTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
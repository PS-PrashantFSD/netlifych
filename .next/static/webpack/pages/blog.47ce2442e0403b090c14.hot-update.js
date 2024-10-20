webpackHotUpdate_N_E("pages/blog",{

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
  margin-bottom: 60px;
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
  width: 50%;

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.small`
    width: 100%;
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
  color: black;
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ContactSection, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TextWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "Contact Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: "nexAR - Augmented Reality finds diverse applications across marketing and advertising, retail and e-commerce."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
          children: "\xA9 Luminexa Technologies."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, undefined), " Pioneering in web and augmented reality solutions, we are dedicated to transforming digital experiences. Connect with us for innovative, custom-tailored technology services that drive your business forward."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FormWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Form, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Input, {
          type: "text",
          placeholder: "Your Name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Input, {
          type: "email",
          placeholder: "Your Email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TextArea, {
          rows: "5",
          placeholder: "Your Message",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SubmitButton, {
          type: "submit",
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        style: {
          marginTop: '10px'
        },
        children: ["We'd love to hear ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
          children: "from you!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Zvcm0vRm9ybS5qc3giXSwibmFtZXMiOlsiQ29udGFjdFNlY3Rpb24iLCJzdHlsZWQiLCJtb3Rpb24iLCJzZWN0aW9uIiwiY29udGFpbmVyU3R5bGVzIiwiX3JlZiIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJfcmVmMiIsInNtYWxsIiwiX2MiLCJUZXh0V3JhcHBlciIsImRpdiIsIl9yZWYzIiwiX2MyIiwiRm9ybVdyYXBwZXIiLCJfcmVmNCIsIl9jMyIsIkZvcm0iLCJmb3JtIiwiX2M0IiwiSW5wdXQiLCJpbnB1dCIsIl9yZWY1IiwiY29sb3JzIiwiZ3JheSIsIl9yZWY2IiwicmVkIiwiX2M1IiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIl9yZWY3IiwiX3JlZjgiLCJfYzYiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJfcmVmOSIsIl9yZWYxMCIsImRhcmtSZWQiLCJfYzciLCJDb250YWN0Rm9ybSIsIl9qc3hERVYiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicm93cyIsInN0eWxlIiwibWFyZ2luVG9wIiwiX2M4IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDQTtBQUN3QjtBQUFBO0FBRS9ELE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQzdDLElBQUlDLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBLEdBQUc7QUFBQTtB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QUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy40N2NlMjQ0MmUwNDAzYjA5MGMxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuXHJcbmNvbnN0IENvbnRhY3RTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubWVkaXVtYFxyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgXHJcbiAgd2lkdGg6IDU4LjMzMyU7XHJcblxyXG4gICYgaDEge1xyXG4gICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUwJTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmF5fTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGV4dEFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyYXl9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcmVzaXplOiBub25lO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtSZWR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFjdFNlY3Rpb24+XHJcbiAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgICA8aDE+Q29udGFjdCBVczwvaDE+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBuZXhBUiAtIEF1Z21lbnRlZCBSZWFsaXR5IGZpbmRzIGRpdmVyc2UgYXBwbGljYXRpb25zIGFjcm9zcyBtYXJrZXRpbmcgYW5kIGFkdmVydGlzaW5nLFxyXG4gICAgICAgICAgcmV0YWlsIGFuZCBlLWNvbW1lcmNlLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+wqkgTHVtaW5leGEgVGVjaG5vbG9naWVzLjwvc3Ryb25nPiBQaW9uZWVyaW5nIGluIHdlYiBhbmQgYXVnbWVudGVkIHJlYWxpdHkgc29sdXRpb25zLFxyXG4gICAgICAgICAgd2UgYXJlIGRlZGljYXRlZCB0byB0cmFuc2Zvcm1pbmcgZGlnaXRhbCBleHBlcmllbmNlcy4gQ29ubmVjdCB3aXRoIHVzIGZvciBpbm5vdmF0aXZlLFxyXG4gICAgICAgICAgY3VzdG9tLXRhaWxvcmVkIHRlY2hub2xvZ3kgc2VydmljZXMgdGhhdCBkcml2ZSB5b3VyIGJ1c2luZXNzIGZvcndhcmQuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L1RleHRXcmFwcGVyPlxyXG4gICAgICA8Rm9ybVdyYXBwZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgTWVzc2FnZTwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICBXZSdkIGxvdmUgdG8gaGVhciA8c3Ryb25nPmZyb20geW91ITwvc3Ryb25nPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9Gb3JtV3JhcHBlcj5cclxuICAgIDwvQ29udGFjdFNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
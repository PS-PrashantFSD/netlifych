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
  align-items: center;
  justify-content: space-between;
  padding: 0 0px 200px;
  color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.colors.red;
}};
  transform: translate3d(0, 60px, 0);
  width: 90%;

  & .column {
    width: 33.333%;

    &:last-child {
      justify-content: flex-end;
    }

    & a:hover {
      color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.text;
}};
    }
  }

  & .contact-text {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_4__["secondaryFontStyle"]};
    line-height: 28px;
    display: inline-block;
  }

  & address {
    padding: 0 8px;
  }

  ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.breakpoints.medium`
    & .column {
      width: 41.666%;

      &:last-child {
        width: 16.666%;
      }
    }
  `;
}};

  ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & .column {
      width: 100%;

      &:last-child {
        width: 100%;
        justify-content: flex-start;
        padding: 1px 0;
      }
    }

    & address {
      padding: 0;
    }
  `;
}};

  ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.breakpoints.tablet`
    padding: 0 0px 60px;

    & address {
      padding: 17px 0 42px;
    }

    & .contact-text {
      font-size: 1.125rem;
      line-height: 21px;
    }
  `;
}};
`;
_c = ContactSection;
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
_c2 = Form;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.colors.gray;
}};
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    border-color: ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.colors.red;
}};
    outline: none;
  }
`;
_c3 = Input;
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${_ref8 => {
  let {
    theme
  } = _ref8;
  return theme.colors.gray;
}};
  border-radius: 5px;
  font-size: 1rem;
  resize: none;

  &:focus {
    border-color: ${_ref9 => {
  let {
    theme
  } = _ref9;
  return theme.colors.red;
}};
    outline: none;
  }
`;
_c4 = TextArea;
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${_ref10 => {
  let {
    theme
  } = _ref10;
  return theme.colors.red;
}};
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${_ref11 => {
  let {
    theme
  } = _ref11;
  return theme.colors.darkRed;
}};
  }
`;
_c5 = SubmitButton;
const ContactForm = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ContactSection, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "column",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("address", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
          style: {
            fontSize: '130px'
          },
          children: "Contact Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          style: {
            color: 'white'
          },
          children: "nexAR - Augmented Reality finds diverse applicatons across marketing and advertising, retail and e-commerce"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
            children: "\xA9 Luminexa Technologies. Pioneering in web and augmented reality solutions,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 14
          }, undefined), "we are dedicated to transforming digital experiences. Connect with us for innovative, custom-tailored technology services that drive your business forward."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        style: {
          marginBottom: '10px'
        },
        children: ["We'd love to hear ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
          children: "from you!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 61
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Form, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
          type: "text",
          placeholder: "Your Name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
          type: "email",
          placeholder: "Your Email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TextArea, {
          rows: "5",
          placeholder: "Your Message",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SubmitButton, {
          type: "submit",
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 5
  }, undefined);
};
_c6 = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "ContactSection");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "Input");
$RefreshReg$(_c4, "TextArea");
$RefreshReg$(_c5, "SubmitButton");
$RefreshReg$(_c6, "ContactForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Zvcm0vRm9ybS5qc3giXSwibmFtZXMiOlsiQ29udGFjdFNlY3Rpb24iLCJzdHlsZWQiLCJtb3Rpb24iLCJzZWN0aW9uIiwiY29udGFpbmVyU3R5bGVzIiwiX3JlZiIsInRoZW1lIiwiY29sb3JzIiwicmVkIiwiX3JlZjIiLCJ0ZXh0Iiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiX3JlZjMiLCJicmVha3BvaW50cyIsIm1lZGl1bSIsIl9yZWY0Iiwic21hbGwiLCJfcmVmNSIsInRhYmxldCIsIl9jIiwiRm9ybSIsImZvcm0iLCJfYzIiLCJJbnB1dCIsImlucHV0IiwiX3JlZjYiLCJncmF5IiwiX3JlZjciLCJfYzMiLCJUZXh0QXJlYSIsInRleHRhcmVhIiwiX3JlZjgiLCJfcmVmOSIsIl9jNCIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsIl9yZWYxMCIsIl9yZWYxMSIsImRhcmtSZWQiLCJfYzUiLCJDb250YWN0Rm9ybSIsIl9qc3hERVYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZm9udFNpemUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicm93cyIsIl9jNiIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNBO0FBQ3dCO0FBQ0U7QUFBQTtBQUVqRSxNQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUM3QyxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVdDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdB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QTtFQUFBLFlBRVEsQ0FBQztBQUVyQixDQUFDO0FBQUNPLEdBQUEsR0EzQkloQixXQUFXO0FBNkJGQSwwRUFBVyxFQUFDO0FBQUEsSUFBQXJCLEVBQUEsRUFBQUcsR0FBQSxFQUFBTSxHQUFBLEVBQUFLLEdBQUEsRUFBQU0sR0FBQSxFQUFBaUIsR0FBQTtBQUFBQyxZQUFBLENBQUF0QyxFQUFBO0FBQUFzQyxZQUFBLENBQUFuQyxHQUFBO0FBQUFtQyxZQUFBLENBQUE3QixHQUFBO0FBQUE2QixZQUFBLENBQUF4QixHQUFBO0FBQUF3QixZQUFBLENBQUFsQixHQUFBO0FBQUFrQixZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjUzODk3NWU1Y2M2MGQ0NmM0OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XHJcblxyXG5jb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAwcHggMjAwcHg7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcclxuICB3aWR0aDogOTAlO1xyXG5cclxuICAmIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDMzLjMzMyU7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAmIGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmNvbnRhY3QtdGV4dCB7XHJcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gICYgYWRkcmVzcyB7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubWVkaXVtYFxyXG4gICAgJiAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDQxLjY2NiU7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjYlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgJiAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgYWRkcmVzcyB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgcGFkZGluZzogMCAwcHggNjBweDtcclxuXHJcbiAgICAmIGFkZHJlc3Mge1xyXG4gICAgICBwYWRkaW5nOiAxN3B4IDAgNDJweDtcclxuICAgIH1cclxuXHJcbiAgICAmIC5jb250YWN0LXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JheX07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRleHRBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmF5fTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrUmVkfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhY3RTZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGFkZHJlc3M+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICcxMzBweCd9fT5Db250YWN0IFVzPC9oMT5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOid3aGl0ZSd9fT5uZXhBUiAtIEF1Z21lbnRlZCBSZWFsaXR5IGZpbmRzIGRpdmVyc2UgYXBwbGljYXRvbnMgYWNyb3NzIG1hcmtldGluZyBhbmQgYWR2ZXJ0aXNpbmcsIFxyXG4gICAgICAgICAgICAgIHJldGFpbCBhbmQgZS1jb21tZXJjZTwvcD5cclxuICAgICAgICAgIDxwPjxzdHJvbmc+wqkgTHVtaW5leGEgVGVjaG5vbG9naWVzLiBQaW9uZWVyaW5nIGluIHdlYiBhbmQgYXVnbWVudGVkIHJlYWxpdHkgc29sdXRpb25zLDwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICB3ZSBhcmUgZGVkaWNhdGVkIHRvIHRyYW5zZm9ybWluZyBkaWdpdGFsIGV4cGVyaWVuY2VzLiBDb25uZWN0IHdpdGggdXMgZm9yIGlubm92YXRpdmUsIFxyXG4gICAgICAgICAgICAgIGN1c3RvbS10YWlsb3JlZCB0ZWNobm9sb2d5IHNlcnZpY2VzIHRoYXQgZHJpdmUgeW91ciBidXNpbmVzcyBmb3J3YXJkLjwvcD5cclxuICAgICAgICA8L2FkZHJlc3M+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICBcclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206JzEwcHgnfX0+V2UnZCBsb3ZlIHRvIGhlYXIgPHN0cm9uZz5mcm9tIHlvdSE8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgTWVzc2FnZTwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9Db250YWN0U2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
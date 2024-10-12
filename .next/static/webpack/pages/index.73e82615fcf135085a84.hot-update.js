webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/Form/form.jsx":
/*!***************************************!*\
  !*** ./components/Home/Form/form.jsx ***!
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Form\\form.jsx";






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
  width: 70%;

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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: "123 Main St"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: "City, State, ZIP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: "Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds. With cutting-edge solutions like image tracking, 3D image tracking and avatar creation. we empower businesses and creators to redefine how we interact with the visual world."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
        children: "Contact Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        className: "contact-text",
        children: "We'd love to hear from you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Form, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
          type: "text",
          placeholder: "Your Name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
          type: "email",
          placeholder: "Your Email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TextArea, {
          rows: "5",
          placeholder: "Your Message",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SubmitButton, {
          type: "submit",
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Zvcm0vZm9ybS5qc3giXSwibmFtZXMiOlsiQ29udGFjdFNlY3Rpb24iLCJzdHlsZWQiLCJtb3Rpb24iLCJzZWN0aW9uIiwiY29udGFpbmVyU3R5bGVzIiwiX3JlZiIsInRoZW1lIiwiY29sb3JzIiwicmVkIiwiX3JlZjIiLCJ0ZXh0Iiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiX3JlZjMiLCJicmVha3BvaW50cyIsIm1lZGl1bSIsIl9yZWY0Iiwic21hbGwiLCJfcmVmNSIsInRhYmxldCIsIl9jIiwiRm9ybSIsImZvcm0iLCJfYzIiLCJJbnB1dCIsImlucHV0IiwiX3JlZjYiLCJncmF5IiwiX3JlZjciLCJfYzMiLCJUZXh0QXJlYSIsInRleHRhcmVhIiwiX3JlZjgiLCJfcmVmOSIsIl9jNCIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsIl9yZWYxMCIsIl9yZWYxMSIsImRhcmtSZWQiLCJfYzUiLCJDb250YWN0Rm9ybSIsIl9qc3hERVYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicm93cyIsIl9jNiIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNBO0FBQ3dCO0FBQ0U7QUFBQTtBQUVqRSxNQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUM3QyxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVdDLElBQUE7RUFBQSxJQUFDO0lBQUVDO0VBQU0sQ0FBQyxHQUFBRCxJQUFBO0VBQUEsT0FBS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUc7QUFBQTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LENBQUFkLEdBQUE7QUFBQWMsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjczZTgyNjE1ZmNmMTM1MDg1YTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xyXG5cclxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMHB4IDIwMHB4O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XHJcbiAgd2lkdGg6IDcwJTtcclxuXHJcbiAgJiAuY29sdW1uIHtcclxuICAgIHdpZHRoOiAzMy4zMzMlO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiBhOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5jb250YWN0LXRleHQge1xyXG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmIGFkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiA0MS42NjYlO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmIGFkZHJlc3Mge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIHBhZGRpbmc6IDAgMHB4IDYwcHg7XHJcblxyXG4gICAgJiBhZGRyZXNzIHtcclxuICAgICAgcGFkZGluZzogMTdweCAwIDQycHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiAuY29udGFjdC10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyYXl9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JheX07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICByZXNpemU6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya1JlZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWN0U2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxhZGRyZXNzPlxyXG4gICAgICAgICAgPHA+MTIzIE1haW4gU3Q8L3A+XHJcbiAgICAgICAgICA8cD5DaXR5LCBTdGF0ZSwgWklQPC9wPlxyXG4gICAgICAgICAgPHA+T3VyIG1pc3Npb24gaXMgdG8gcmV2b2x1dGlvbml6ZSB2aXN1YWwgZXhwZXJpZW5jZXMsIGJyaWRnaW5nIHRoZSBnYXAgYmV0d2VlbiB0aGUgXHJcbiAgICAgICAgICAgICAgcGh5c2ljYWwgYW5kIGRpZ2l0YWwgd29ybGRzLiBXaXRoIGN1dHRpbmctZWRnZSBzb2x1dGlvbnMgbGlrZSBpbWFnZSB0cmFja2luZywgM0QgaW1hZ2UgXHJcbiAgICAgICAgICAgICAgdHJhY2tpbmcgYW5kIGF2YXRhciBjcmVhdGlvbi4gd2UgZW1wb3dlciBidXNpbmVzc2VzIGFuZCBjcmVhdG9ycyB0byByZWRlZmluZSBob3cgd2UgaW50ZXJhY3QgXHJcbiAgICAgICAgICAgICAgd2l0aCB0aGUgdmlzdWFsIHdvcmxkLjwvcD5cclxuICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgIDxoMj5Db250YWN0IFVzPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250YWN0LXRleHRcIj5XZSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdSE8L3A+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgTWVzc2FnZTwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9Db250YWN0U2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
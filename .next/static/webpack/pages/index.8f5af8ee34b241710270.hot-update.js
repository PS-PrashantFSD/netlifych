webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Misc/Whatsapp.jsx":
/*!**************************************!*\
  !*** ./components/Misc/Whatsapp.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Whatsapp.jsx",
  _s = $RefreshSig$();
// WhatsAppButton.js




const WhatsAppButton = () => {
  _s();
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleChange = e => {
    setMessage(e.target.value);
  };
  const handleClick = () => {
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledWhatsAppButton, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      onClick: () => setIsOpen(!isOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaWhatsapp"], {
        size: 24
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), !isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Tooltip, {
        children: "Chat on WhatsApp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(MessageContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Type your message...",
        value: message,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(SendButton, {
        onClick: handleClick,
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};
_s(WhatsAppButton, "bP1P0S5O6iaT5WI2CZxYMRcSzbk=");
_c = WhatsAppButton;
const slideIn = styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const StyledWhatsAppButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    background-color: #25d366;
    color: white;
    border: none;
    padding: 0.5em;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
_c2 = StyledWhatsAppButton;
const Tooltip = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  background-color: #25d366;
  color: white;
  padding: 0.3em 0.6em;
  border-radius: 5px;
  font-size: 0.8em;
  position: absolute;
  bottom: 100%;
  right: 0;
  transform: translateY(-5px);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;

  button:hover & {
    opacity: 1;
  }
`;
_c3 = Tooltip;
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${slideIn} 0.3s ease forwards;
  margin-top: 0.5em;

  input {
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid #ddd;
    margin-bottom: 0.5em;
    width: 180px;
    outline: none;
  }
`;
_c4 = MessageContainer;
const SendButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  background: linear-gradient(45deg, #25d366, #1ebc5a);
  color: white;
  border: none;
  padding: 0.5em 1.5em;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
  transition: all 0.3s ease;
  align-self: flex-end;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(45deg, #1ebc5a, #25d366);
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
_c5 = SendButton;
/* harmony default export */ __webpack_exports__["default"] = (WhatsAppButton);
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "WhatsAppButton");
$RefreshReg$(_c2, "StyledWhatsAppButton");
$RefreshReg$(_c3, "Tooltip");
$RefreshReg$(_c4, "MessageContainer");
$RefreshReg$(_c5, "SendButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL1doYXRzYXBwLmpzeCJdLCJuYW1lcyI6WyJXaGF0c0FwcEJ1dHRvbiIsIl9zIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwidXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2luZG93Iiwib3BlbiIsIl9qc3hERVYiLCJTdHlsZWRXaGF0c0FwcEJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsIkZhV2hhdHNhcHAiLCJzaXplIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiVG9vbHRpcCIsIk1lc3NhZ2VDb250YWluZXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIlNlbmRCdXR0b24iLCJfYyIsInNsaWRlSW4iLCJrZXlmcmFtZXMiLCJzdHlsZWQiLCJkaXYiLCJfYzIiLCJzcGFuIiwiX2MzIiwiX2M0IiwiYnV0dG9uIiwiX2M1IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0M7QUFDYztBQUNWO0FBQUE7QUFFNUMsTUFBTUEsY0FBYyxHQUFHQSxDQUFBLEtBQU07RUFBQUMsRUFBQTtFQUMzQixNQUFNO0lBQUEsR0FBQ0MsT0FBTztJQUFBLEdBQUVDO0VBQVUsSUFBSUMsc0RBQVEsQ0FBQyxFQUFFLENBQUM7RUFDMUMsTUFBTTtJQUFBLEdBQUNDLE1BQU07SUFBQSxHQUFFQztFQUFTLElBQUlGLHNEQUFRLENBQUMsS0FBSyxDQUFDO0VBRTNDLE1BQU1HLFlBQVksR0FBSUMsQ0FBQyxJQUFLO0lBQzFCTCxVQUFVLENBQUNLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDNUIsQ0FBQztFQUVELE1BQU1DLFdB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBdkJJWCxVQUFVO0FBeUJEL0IsNkVBQWMsRUFBQztBQUFBLElBQUFnQyxFQUFBLEVBQUFLLEdBQUEsRUFBQUUsR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEdBQUE7QUFBQUMsWUFBQSxDQUFBWCxFQUFBO0FBQUFXLFlBQUEsQ0FBQU4sR0FBQTtBQUFBTSxZQUFBLENBQUFKLEdBQUE7QUFBQUksWUFBQSxDQUFBSCxHQUFBO0FBQUFHLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZjVhZjhlZTM0YjI0MTcxMDI3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2hhdHNBcHBCdXR0b24uanNcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFXaGF0c2FwcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmNvbnN0IFdoYXRzQXBwQnV0dG9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93YS5tZS8xMjM0NTY3ODkwP3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQobWVzc2FnZSl9YDtcclxuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkV2hhdHNBcHBCdXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cclxuICAgICAgICA8RmFXaGF0c2FwcCBzaXplPXsyNH0gLz5cclxuICAgICAgICB7IWlzT3BlbiAmJiA8VG9vbHRpcD5DaGF0IG9uIFdoYXRzQXBwPC9Ub29sdGlwPn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDxNZXNzYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTZW5kQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5TZW5kPC9TZW5kQnV0dG9uPlxyXG4gICAgICAgIDwvTWVzc2FnZUNvbnRhaW5lcj5cclxuICAgICAgKX1cclxuICAgIDwvU3R5bGVkV2hhdHNBcHBCdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlSW4gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFdoYXRzQXBwQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVkMzY2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRvb2x0aXAgPSBzdHlsZWQuc3BhbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVkMzY2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjNlbSAwLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XHJcblxyXG4gIGJ1dHRvbjpob3ZlciAmIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGFuaW1hdGlvbjogJHtzbGlkZUlufSAwLjNzIGVhc2UgZm9yd2FyZHM7XHJcbiAgbWFyZ2luLXRvcDogMC41ZW07XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzI1ZDM2NiwgIzFlYmM1YSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxZWJjNWEsICMyNWQzNjYpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hhdHNBcHBCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
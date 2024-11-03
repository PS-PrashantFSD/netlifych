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
  background-color: #25d366;
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  align-self: flex-end;

  &:hover {
    background-color: #1ebc5a;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL1doYXRzYXBwLmpzeCJdLCJuYW1lcyI6WyJXaGF0c0FwcEJ1dHRvbiIsIl9zIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwidXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2luZG93Iiwib3BlbiIsIl9qc3hERVYiLCJTdHlsZWRXaGF0c0FwcEJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsIkZhV2hhdHNhcHAiLCJzaXplIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiVG9vbHRpcCIsIk1lc3NhZ2VDb250YWluZXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIlNlbmRCdXR0b24iLCJfYyIsInNsaWRlSW4iLCJrZXlmcmFtZXMiLCJzdHlsZWQiLCJkaXYiLCJfYzIiLCJzcGFuIiwiX2MzIiwiX2M0IiwiYnV0dG9uIiwiX2M1IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0M7QUFDYztBQUNWO0FBQUE7QUFFNUMsTUFBTUEsY0FBYyxHQUFHQSxDQUFBLEtBQU07RUFBQUMsRUFBQTtFQUMzQixNQUFNO0lBQUEsR0FBQ0MsT0FBTztJQUFBLEdBQUVDO0VBQVUsSUFBSUMsc0RBQVEsQ0FBQyxFQUFFLENBQUM7RUFDMUMsTUFBTTtJQUFBLEdBQUNDLE1BQU07SUFBQSxHQUFFQztFQUFTLElBQUlGLHNEQUFRLENBQUMsS0FBSyxDQUFDO0VBRTNDLE1BQU1HLFlBQVksR0FBSUMsQ0FBQyxJQUFLO0lBQzFCTCxVQUFVLENBQUNLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDNUIsQ0FBQztFQUVELE1BQU1DLFdB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QUFDQyxHQUFBLEdBZElYLFVBQVU7QUFnQkQvQiw2RUFBYyxFQUFDO0FBQUEsSUFBQWdDLEVBQUEsRUFBQUssR0FBQSxFQUFBRSxHQUFBLEVBQUFDLEdBQUEsRUFBQUUsR0FBQTtBQUFBQyxZQUFBLENBQUFYLEVBQUE7QUFBQVcsWUFBQSxDQUFBTixHQUFBO0FBQUFNLFlBQUEsQ0FBQUosR0FBQTtBQUFBSSxZQUFBLENBQUFILEdBQUE7QUFBQUcsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmMTUwNGQyMGJkYjVlMjNlZGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXaGF0c0FwcEJ1dHRvbi5qc1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGYVdoYXRzYXBwIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgV2hhdHNBcHBCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3dhLm1lLzEyMzQ1Njc4OTA/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKX1gO1xyXG4gICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXaGF0c0FwcEJ1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxyXG4gICAgICAgIDxGYVdoYXRzYXBwIHNpemU9ezI0fSAvPlxyXG4gICAgICAgIHshaXNPcGVuICYmIDxUb29sdGlwPkNoYXQgb24gV2hhdHNBcHA8L1Rvb2x0aXA+fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPE1lc3NhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNlbmRCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlNlbmQ8L1NlbmRCdXR0b24+XHJcbiAgICAgICAgPC9NZXNzYWdlQ29udGFpbmVyPlxyXG4gICAgICApfVxyXG4gICAgPC9TdHlsZWRXaGF0c0FwcEJ1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3Qgc2xpZGVJbiA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkV2hhdHNBcHBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNWQzNjY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVG9vbHRpcCA9IHN0eWxlZC5zcGFuYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWQzNjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuM2VtIDAuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwMCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcclxuXHJcbiAgYnV0dG9uOmhvdmVyICYge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZXNzYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYW5pbWF0aW9uOiAke3NsaWRlSW59IDAuM3MgZWFzZSBmb3J3YXJkcztcclxuICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1ZDM2NjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlYmM1YTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaGF0c0FwcEJ1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
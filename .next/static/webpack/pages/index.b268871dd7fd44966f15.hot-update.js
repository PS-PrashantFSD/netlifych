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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaWhatsapp"], {
        size: 24
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(MessageContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(TextInputContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Type your message...",
          value: message,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(SendIcon, {
          onClick: handleClick,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPaperPlane"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${slideIn} 0.3s ease forwards;
  margin-top: 0.5em;
`;
_c3 = MessageContainer;
const TextInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  width: 200px;

  input {
    width: 100%;
    padding: 0.5em 2em 0.5em 0.5em; /* Padding for space for the icon */
    border-radius: 0.5em;
    border: 1px solid #ddd;
    outline: none;
  }
`;
_c4 = TextInputContainer;
const SendIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #25d366;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1ebc5a;
  }
`;
_c5 = SendIcon;
/* harmony default export */ __webpack_exports__["default"] = (WhatsAppButton);
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "WhatsAppButton");
$RefreshReg$(_c2, "StyledWhatsAppButton");
$RefreshReg$(_c3, "MessageContainer");
$RefreshReg$(_c4, "TextInputContainer");
$RefreshReg$(_c5, "SendIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL1doYXRzYXBwLmpzeCJdLCJuYW1lcyI6WyJXaGF0c0FwcEJ1dHRvbiIsIl9zIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwidXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2luZG93Iiwib3BlbiIsIl9qc3hERVYiLCJTdHlsZWRXaGF0c0FwcEJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsIkZhV2hhdHNhcHAiLCJzaXplIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiTWVzc2FnZUNvbnRhaW5lciIsIlRleHRJbnB1dENvbnRhaW5lciIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiU2VuZEljb24iLCJGYVBhcGVyUGxhbmUiLCJfYyIsInNsaWRlSW4iLCJrZXlmcmFtZXMiLCJzdHlsZWQiLCJkaXYiLCJfYzIiLCJfYzMiLCJfYzQiLCJfYzUiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN3QztBQUNjO0FBQ0k7QUFBQTtBQUUxRCxNQUFNQSxjQUFjLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQzNCLE1BQU07SUFBQSxHQUFDQyxPQUFPO0lBQUEsR0FBRUM7RUFBVSxJQUFJQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztFQUMxQyxNQUFNO0lBQUEsR0FBQ0MsTUFBTTtJQUFBLEdBQUVDO0VBQVMsSUFBSUYsc0RBQVEsQ0FBQyxLQUFLLENBQUM7RUFFM0MsTUFBTUcsWUFBWSxHQUFJQyxDQUFDLElBQUs7SUFDMUJMLFVBQVUsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUM1QixDQUFDO0VBRUQs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RUFBQztBQUFBLElBQUFpQyxFQUFBLEVBQUFLLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUE7QUFBQUMsWUFBQSxDQUFBVCxFQUFBO0FBQUFTLFlBQUEsQ0FBQUosR0FBQTtBQUFBSSxZQUFBLENBQUFILEdBQUE7QUFBQUcsWUFBQSxDQUFBRixHQUFBO0FBQUFFLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMjY4ODcxZGQ3ZmQ0NDk2NmYxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV2hhdHNBcHBCdXR0b24uanNcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFXaGF0c2FwcCwgRmFQYXBlclBsYW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgV2hhdHNBcHBCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3dhLm1lLzEyMzQ1Njc4OTA/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKX1gO1xyXG4gICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRXaGF0c0FwcEJ1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxyXG4gICAgICAgIDxGYVdoYXRzYXBwIHNpemU9ezI0fSAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPE1lc3NhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8VGV4dElucHV0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbmRJY29uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICA8RmFQYXBlclBsYW5lIC8+XHJcbiAgICAgICAgICAgIDwvU2VuZEljb24+XHJcbiAgICAgICAgICA8L1RleHRJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICA8L01lc3NhZ2VDb250YWluZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L1N0eWxlZFdoYXRzQXBwQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBzbGlkZUluID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRXaGF0c0FwcEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1ZDM2NjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZXNzYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYW5pbWF0aW9uOiAke3NsaWRlSW59IDAuM3MgZWFzZSBmb3J3YXJkcztcclxuICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuYDtcclxuXHJcbmNvbnN0IFRleHRJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAyZW0gMC41ZW0gMC41ZW07IC8qIFBhZGRpbmcgZm9yIHNwYWNlIGZvciB0aGUgaWNvbiAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZW5kSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjb2xvcjogIzI1ZDM2NjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzFlYmM1YTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaGF0c0FwcEJ1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
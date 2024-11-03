webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Misc/Nexar.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Nexar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-react */ "./node_modules/lottie-react/build/index.umd.js");
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Lottie/work.json */ "./components/Lottie/work.json");
var _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Lottie/work.json */ "./components/Lottie/work.json", 1);
/* harmony import */ var _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Lottie/nexar.json */ "./components/Lottie/nexar.json");
var _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Lottie/nexar.json */ "./components/Lottie/nexar.json", 1);
/* harmony import */ var _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Lottie/works.json */ "./components/Lottie/works.json");
var _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Lottie/works.json */ "./components/Lottie/works.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Nexar.jsx";









const CTASection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].section)`
${_styles_shared_container__WEBPACK_IMPORTED_MODULE_4__["default"]};
  position: relative; /* Required for the overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 80px;
  padding: 60px 0;
  border-radius: 66px;
  color: white; /* Text color for visibility on dark background */

  background-image: url('rbg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
    border-radius: 66px; /* Match the border-radius */
    z-index: 1;
  }

  /* Ensures text appears above the overlay */
  * {
    position: relative;
    z-index: 2;
  }
`;
_c = CTASection;
const SectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allows wrapping for smaller screens */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

  }
`;
_c2 = SectionsContainer;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  flex: 1;
  margin: 0 20px;
  max-width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 8px 0;
    max-width: 80%;
  }
`;
_c3 = Section;
const LottieContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 160px;
  height: 160px; /* Fixed height for uniformity */
  margin: 0 auto; /* Center the animation */
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
_c4 = LottieContainer;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2`
  font-size: 4.75rem;
  font-weight: 700;
  margin: 20px 0;
  color: white;
`;
_c5 = CTAHeading;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: gray;
`;
_c6 = CTADescription;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  padding: 20px 50px;
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 36px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;
_c7 = Button;
const CallToAction = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTASection, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.5
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
      style: {
        fontSize: '69px',
        marginBottom: '8px'
      },
      children: "What's New"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(SectionsContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "nexAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "How"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
      style: {
        color: 'white ',
        margin: '19px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
        children: "Differentiate "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 54
      }, undefined), " yourself from competition"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
      style: {
        color: 'white',
        fontSize: '80px'
      },
      children: "Spark a Trend!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
      style: {
        color: 'gray',
        margin: '19px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
        children: "#nexAR #AugmentedReality #webAR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 52
      }, undefined), " Innovative Solution"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
        children: "Book Demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }, undefined);
};
_c8 = CallToAction;
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
$RefreshReg$(_c, "CTASection");
$RefreshReg$(_c2, "SectionsContainer");
$RefreshReg$(_c3, "Section");
$RefreshReg$(_c4, "LottieContainer");
$RefreshReg$(_c5, "CTAHeading");
$RefreshReg$(_c6, "CTADescription");
$RefreshReg$(_c7, "Button");
$RefreshReg$(_c8, "CallToAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiTG90dGllQ29udGFpbmVyIiwiX2M0IiwiQ1RBSGVhZGluZyIsImgyIiwiX2M1IiwiQ1RBRGVzY3JpcHRpb24iLCJwIiwiX2M2IiwiQnV0dG9uIiwiYnV0dG9uIiwiX2M3IiwiQ2FsbFRvQWN0aW9uIiwiX2pzeERFViIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoaWxkcmVuIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkxvdHRpZSIsImFuaW1hdGlvbkRhdGEiLCJhbmltYXRpb24yIiwibG9vcCIsImFuaW1hdGlvbjEiLCJhbmltYXRpb24zIiwiY29sb3IiLCJtYXJnaW4iLCJfYzgiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ0E7QUFDTDtBQUMwQjtBQUNiO0FBQ0M7QUFDQTtBQUFBO0FBRWhELE1BQU1BLFVBQVUsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsT0FBTyxDQUFDO0FBQ3pDLEVBQUVDLGdFQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxFQUFBLEdBcENJTCxVQUFVO0FBc0NoQixNQUFNTSxpQkFBaUIsR0FBR0wseURBQU0sQ0FBQ00sR0FBRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FWSUYsaUJBQWlCO0FBWXZCLE1BQU1HLE9BQU8sR0FBR1IseURBQU0sQ0FBQ00sR0FBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNHLEdBQUEsR0FWSUQsT0FBTztBQVliLE1BQU1FLGVBQWUsR0FBR1YseURBQU0sQ0FBQ00sR0FBRztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNLLEdBQUEsR0FWSUQsZUFBZTtBQVlyQixNQUFNRSxVQUFVLEdBQUdaLHlEQUFNLENBQUNhLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FMSUYsVUFBVTtBQU9oQixNQUFNRyxjQUFjLEdBQUdmLHlEQUFNLENBQUNnQixDQUFDO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBTElGLGNBQWM7QUFPcEIsTUFBTUcsTUFBTSxHQUFHbEIseURBQU0sQ0FBQ21CLE1BQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxHQUFBLEdBYklGLE1BQU07QUFlWixNQUFNRyxZQUFZLEdBQUdBLENBQUEsS0FBTTtFQUN6QixvQkFDRUMsb0VBQUEsQ0FBQ3ZCLFVBQVU7SUFBQ3dCLE9BQU8sRUFBRTtNQUFFQyxPQUFPLEVBQUU7SUFBRSxDQUFFO0lBQUNDLE9BQU8sRUFBRTtNQUFFRCxPQUFPLEVBQUU7SUFBRSxDQUFFO0lBQUNFLFVBQVUsRUFBRTtNQUFFQyxRQUFRLEVBQUU7SUFBSSxDQUFFO0lBQUFDLFFBQUEsZ0JBQzFGTixvRUFBQTtNQUFJTyxLQUFLLEVBQUU7UUFBQ0MsUUFBUSxFQUFFLE1BQU07UUFBRUMsWUFBWSxFQUFDO01BQUssQ0FBRTtNQUFBSCxRQUFBLEVBQUM7SUFBVTtNQUFBSSxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBSSxDQUFDLGVBQ2xFYixvRUFBQSxDQUFDakIsaUJBQWlCO01BQUF1QixRQUFBLGdCQUNoQk4sb0VBQUEsQ0FBQ2QsT0FBTztRQUFBb0IsUUFBQSxnQkFDTk4sb0VBQUEsQ0FBQ1YsVUFBVTtVQUFBZ0IsUUFBQSxFQUFDO1FBQUs7VUFBQUksUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQVksQ0FBQyxlQUM5QmIsb0VBQUEsQ0FBQ1osZUFBZTtVQUFBa0IsUUFBQSxlQUNkTixvRUFBQSxDQUFDYyxtREFBTTtZQUFDQyxhQUFhLEVBQUVDLCtDQUFXO1lBQUNDLElBQUksRUFBRTtVQUFLO1lBQUFQLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFFO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ2xDLENBQUMsZUFDbEJiLG9FQUFBLENBQUNQLGNBQWM7VUFBQWEsUUFBQSxlQUNiTixvRUFBQTtZQUFBTSxRQUFBLEVBQVE7VUFBNkg7WUFBQUksUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQVE7UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDaEksQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNWLENBQUMsZUFFVmIsb0VBQUEsQ0FBQ2QsT0FBTztRQUFBb0IsUUFBQSxnQkFDTk4sb0VBQUEsQ0FBQ1YsVUFBVTtVQUFBZ0IsUUFBQSxFQUFDO1FBQUc7VUFBQUksUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQVksQ0FBQyxlQUM1QmIsb0VBQUEsQ0FBQ1osZUFBZTtVQUFBa0IsUUFBQSxlQUNkTixvRUFBQSxDQUFDYyxtREFBTTtZQUFDQyxhQUFhLEVBQUVHLDhDQUFXO1lBQUNELElBQUksRUFBRTtVQUFLO1lBQUFQLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFFO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ2xDLENBQUMsZUFDbEJiLG9FQUFBLENBQUNQLGNBQWM7VUFBQWEsUUFBQSxlQUNiTixvRUFBQTtZQUFBTSxRQUFBLEVBQVE7VUFBdUs7WUFBQUksUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQVE7UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDMUssQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNWLENBQUMsZUFFVmIsb0VBQUEsQ0FBQ2QsT0FBTztRQUFBb0IsUUFBQSxnQkFDTk4sb0VBQUEsQ0FBQ1YsVUFBVTtVQUFBZ0IsUUFBQSxFQUFDO1FBQUs7VUFBQUksUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQVksQ0FBQyxlQUM5QmIsb0VBQUEsQ0FBQ1osZUFBZTtVQUFBa0IsUUFBQSxlQUNkTixvRUFBQSxDQUFDYyxtREFBTTtZQUFDQyxhQUFhLEVBQUVJLCtDQUFXO1lBQUNGLElBQUksRUFBRTtVQUFLO1lBQUFQLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFFO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ2xDLENBQUMsZUFDbEJiLG9FQUFBLENBQUNQLGNBQWM7VUFBQWEsUUFBQSxlQUNiTixvRUFBQTtZQUFBTSxRQUFBLEVBQVE7VUFBK0c7WUFBQUksUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQVE7UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDbEgsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNWLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDTyxDQUFDLGVBQ3BCYixvRUFBQTtNQUFHTyxLQUFLLEVBQUU7UUFBRWEsS0FBSyxFQUFFLFFBQVE7UUFBRUMsTUFBTSxFQUFFO01BQU8sQ0FBRTtNQUFBZixRQUFBLGdCQUFDTixvRUFBQTtRQUFBTSxRQUFBLEVBQVE7TUFBYztRQUFBSSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBUSxDQUFDLDhCQUEwQjtJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFHLENBQUMsZUFDNUdiLG9FQUFBO01BQUlPLEtBQUssRUFBRTtRQUFFYSxLQUFLLEVBQUUsT0FBTztRQUFFWixRQUFRLEVBQUU7TUFBTyxDQUFFO01BQUFGLFFBQUEsRUFBQztJQUFjO01BQUFJLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFJLENBQUMsZUFDcEViLG9FQUFBO01BQUdPLEtBQUssRUFBRTtRQUFFYSxLQUFLLEVBQUUsTUFBTTtRQUFFQyxNQUFNLEVBQUU7TUFBTyxDQUFFO01BQUFmLFFBQUEsZ0JBQUNOLG9FQUFBO1FBQUFNLFFBQUEsRUFBUTtNQUErQjtRQUFBSSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBUSxDQUFDLHdCQUFvQjtJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFHLENBQUMsZUFDckhiLG9FQUFBLENBQUNKLE1BQU07TUFBQVUsUUFBQSxlQUFDTixvRUFBQTtRQUFBTSxRQUFBLEVBQVE7TUFBUztRQUFBSSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBUTtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFRLENBQUM7RUFBQTtJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDakMsQ0FBQztBQUVqQixDQUFDO0FBQUNTLEdBQUEsR0F6Q0l2QixZQUFZO0FBMkNIQSwyRUFBWSxFQUFDO0FBQUEsSUFBQWpCLEVBQUEsRUFBQUcsR0FBQSxFQUFBRSxHQUFBLEVBQUFFLEdBQUEsRUFBQUcsR0FBQSxFQUFBRyxHQUFBLEVBQUFHLEdBQUEsRUFBQXdCLEdBQUE7QUFBQUMsWUFBQSxDQUFBekMsRUFBQTtBQUFBeUMsWUFBQSxDQUFBdEMsR0FBQTtBQUFBc0MsWUFBQSxDQUFBcEMsR0FBQTtBQUFBb0MsWUFBQSxDQUFBbEMsR0FBQTtBQUFBa0MsWUFBQSxDQUFBL0IsR0FBQTtBQUFBK0IsWUFBQSxDQUFBNUIsR0FBQTtBQUFBNEIsWUFBQSxDQUFBekIsR0FBQTtBQUFBeUIsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIzNWJkNjg4NzczODViMTBjOGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBMb3R0aWUgZnJvbSAnbG90dGllLXJlYWN0JztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCBhbmltYXRpb24xIGZyb20gJy4vLi4vTG90dGllL3dvcmsuanNvbic7IFxyXG5pbXBvcnQgYW5pbWF0aW9uMiBmcm9tICcuLy4uL0xvdHRpZS9uZXhhci5qc29uJztcclxuaW1wb3J0IGFuaW1hdGlvbjMgZnJvbSAnLi8uLi9Mb3R0aWUvd29ya3MuanNvbic7XHJcblxyXG5jb25zdCBDVEFTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogUmVxdWlyZWQgZm9yIHRoZSBvdmVybGF5ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDY2cHg7XHJcbiAgY29sb3I6IHdoaXRlOyAvKiBUZXh0IGNvbG9yIGZvciB2aXNpYmlsaXR5IG9uIGRhcmsgYmFja2dyb3VuZCAqL1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3JiZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAvKiBPdmVybGF5ICovXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBBZGp1c3QgdGhlIG9wYWNpdHkgYXMgbmVlZGVkICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2NnB4OyAvKiBNYXRjaCB0aGUgYm9yZGVyLXJhZGl1cyAqL1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGFib3ZlIHRoZSBvdmVybGF5ICovXHJcbiAgKiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3dzIHdyYXBwaW5nIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG90dGllQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxNjBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciB1bmlmb3JtaXR5ICovXHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgYW5pbWF0aW9uICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDVEFIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogNC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IENUQURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcGFkZGluZzogMjBweCA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMzsgLyogRGFya2VyIHNoYWRlIG9uIGhvdmVyICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q1RBU2VjdGlvbiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fT5cclxuICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICc2OXB4JywgbWFyZ2luQm90dG9tOic4cHgnfX0+V2hhdCdzIE5ldzwvaDE+XHJcbiAgICAgIDxTZWN0aW9uc0NvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPm5leEFSPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPExvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24yfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgPC9Mb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+THVtaW5leGEgVGVjaG5vbG9naWVzIGRldmVsb3BlZCBpbWFnZSB0cmFja2luZyB2aXJ0dWFsIHNvZnR3YXJlIGJhc2VkIG9uIEF1Z21lbnRlZCBSZWFsaXR5IGFuZCBNaXhlZCBSZWFsaXR5LCBuYW1lZCBpdCBuZXhBUi48L3N0cm9uZz5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+SG93PC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPExvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24xfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgPC9Mb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+bmV4QVIgaXMgYSBXZWJBUiBzb2x1dGlvbiB0aGF0IGRpc3BsYXlzIGNvbnRlbnQgbGlrZSAzRCBtb2RlbHMsIGhvbG9ncmFwaGljIGF2YXRhcnMsIHZpZGVvcywgaW1hZ2VzLCBhdWRpbywgYW5kIGxpbmtzIHdoZW4gdGhlIG5leEFSIGNhbWVyYSBpcyBwb2ludGVkIGF0IGEgMkQgc3VyZmFjZS48L3N0cm9uZz5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+V29ya3M8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8TG90dGllQ29udGFpbmVyID5cclxuICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24zfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgPC9Mb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+bmV4QVIgcmVxdWlyZXMgbm8gYWRkaXRpb25hbCBhcHAgaW5zdGFsbGF0aW9ucyBhbmQgd29ya3Mgc2VhbWxlc3NseSBvbiBhbGwgc21hcnRwaG9uZXMsIHdoZXRoZXIgQW5kcm9pZCBvciBpT1MuPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC9TZWN0aW9uc0NvbnRhaW5lcj5cclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZSAnLCBtYXJnaW46ICcxOXB4JyB9fT48c3Ryb25nPkRpZmZlcmVudGlhdGUgPC9zdHJvbmc+IHlvdXJzZWxmIGZyb20gY29tcGV0aXRpb248L3A+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICc4MHB4JyB9fT5TcGFyayBhIFRyZW5kITwvaDE+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScsIG1hcmdpbjogJzE5cHgnIH19PjxzdHJvbmc+I25leEFSICNBdWdtZW50ZWRSZWFsaXR5ICN3ZWJBUjwvc3Ryb25nPiBJbm5vdmF0aXZlIFNvbHV0aW9uPC9wPlxyXG4gICAgICA8QnV0dG9uPjxzdHJvbmc+Qm9vayBEZW1vPC9zdHJvbmc+PC9CdXR0b24+IFxyXG4gICAgPC9DVEFTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
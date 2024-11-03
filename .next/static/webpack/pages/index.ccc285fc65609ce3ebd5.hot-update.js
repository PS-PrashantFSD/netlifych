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
        marginBottom: '20px',
        fontStyle: 'italic'
      },
      children: "What's New"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
      style: {
        width: '80%'
      },
      children: "Augmented Reality (AR) integrates digital information with the real world, enhancing user experiences. It overlays images, videos, or 3D models onto the physical environment in real-time. AR is utilized in smartphones, tablets, and smart glasses, offering applications in gaming, navigation, education, and retail. It relies on sensors, cameras, and computer vision to track objects and provide interactive content. Challenges include hardware limitations and content creation complexities. AR's ongoing evolution holds promise for diverse industries"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(SectionsContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "nexAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "How"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
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
        lineNumber: 154,
        columnNumber: 54
      }, undefined), " yourself from competition"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
      style: {
        color: 'white',
        fontSize: '80px'
      },
      children: "Spark a Trend!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
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
        lineNumber: 156,
        columnNumber: 52
      }, undefined), " Innovative Solution"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
        children: "Book Demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiTG90dGllQ29udGFpbmVyIiwiX2M0IiwiQ1RBSGVhZGluZyIsImgyIiwiX2M1IiwiQ1RBRGVzY3JpcHRpb24iLCJwIiwiX2M2IiwiQnV0dG9uIiwiYnV0dG9uIiwiX2M3IiwiQ2FsbFRvQWN0aW9uIiwiX2pzeERFViIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoaWxkcmVuIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIndpZHRoIiwiTG90dGllIiwiYW5pbWF0aW9uRGF0YSIsImFuaW1hdGlvbjIiLCJsb29wIiwiYW5pbWF0aW9uMSIsImFuaW1hdGlvbjMiLCJjb2xvciIsIm1hcmdpbiIsIl9jOCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDQTtBQUNMO0FBQzBCO0FBQ2I7QUFDQztBQUNBO0FBQUE7QUFFaEQsTUFBTUEsVUFBVSxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxPQUFPLENBQUM7QUFDekMsRUFBRUMsZ0VBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Mjg1ZmM2NTYwOWNlM2ViZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IExvdHRpZSBmcm9tICdsb3R0aWUtcmVhY3QnO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuaW1wb3J0IGFuaW1hdGlvbjEgZnJvbSAnLi8uLi9Mb3R0aWUvd29yay5qc29uJzsgXHJcbmltcG9ydCBhbmltYXRpb24yIGZyb20gJy4vLi4vTG90dGllL25leGFyLmpzb24nO1xyXG5pbXBvcnQgYW5pbWF0aW9uMyBmcm9tICcuLy4uL0xvdHRpZS93b3Jrcy5qc29uJztcclxuXHJcbmNvbnN0IENUQVNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4ke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBSZXF1aXJlZCBmb3IgdGhlIG92ZXJsYXkgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNjZweDtcclxuICBjb2xvcjogd2hpdGU7IC8qIFRleHQgY29sb3IgZm9yIHZpc2liaWxpdHkgb24gZGFyayBiYWNrZ3JvdW5kICovXHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgncmJnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIC8qIE92ZXJsYXkgKi9cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkanVzdCB0aGUgb3BhY2l0eSBhcyBuZWVkZWQgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDY2cHg7IC8qIE1hdGNoIHRoZSBib3JkZXItcmFkaXVzICovXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgYWJvdmUgdGhlIG92ZXJsYXkgKi9cclxuICAqIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBBbGxvd3Mgd3JhcHBpbmcgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb3R0aWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4OyAvKiBGaXhlZCBoZWlnaHQgZm9yIHVuaWZvcm1pdHkgKi9cclxuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBhbmltYXRpb24gKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENUQUhlYWRpbmcgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiA0Ljc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgQ1RBRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgb24gaG92ZXIgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogJzY5cHgnLCBtYXJnaW5Cb3R0b206JzIwcHgnLCBmb250U3R5bGU6J2l0YWxpYyd9fT5XaGF0J3MgTmV3PC9oMT5cclxuICAgICAgPHAgc3R5bGU9e3t3aWR0aDonODAlJ319PkF1Z21lbnRlZCBSZWFsaXR5IChBUikgaW50ZWdyYXRlcyBkaWdpdGFsIGluZm9ybWF0aW9uIHdpdGggdGhlIHJlYWwgd29ybGQsIGVuaGFuY2luZyB1c2VyIGV4cGVyaWVuY2VzLlxyXG4gICAgICAgICBJdCBvdmVybGF5cyBpbWFnZXMsIHZpZGVvcywgb3IgM0QgbW9kZWxzIG9udG8gdGhlIHBoeXNpY2FsIGVudmlyb25tZW50IGluIHJlYWwtdGltZS4gQVIgaXMgdXRpbGl6ZWQgaW4gXHJcbiAgICAgICAgIHNtYXJ0cGhvbmVzLCB0YWJsZXRzLCBhbmQgc21hcnQgZ2xhc3Nlcywgb2ZmZXJpbmcgYXBwbGljYXRpb25zIGluIGdhbWluZywgbmF2aWdhdGlvbiwgZWR1Y2F0aW9uLCBcclxuICAgICAgICAgYW5kIHJldGFpbC4gSXQgcmVsaWVzIG9uIHNlbnNvcnMsIGNhbWVyYXMsIGFuZCBjb21wdXRlciB2aXNpb24gdG8gdHJhY2sgb2JqZWN0cyBhbmQgcHJvdmlkZSBpbnRlcmFjdGl2ZSBcclxuICAgICAgICAgY29udGVudC4gQ2hhbGxlbmdlcyBpbmNsdWRlIGhhcmR3YXJlIGxpbWl0YXRpb25zIGFuZCBjb250ZW50IGNyZWF0aW9uIGNvbXBsZXhpdGllcy4gXHJcbiAgICAgICAgIEFSJ3Mgb25nb2luZyBldm9sdXRpb24gaG9sZHMgcHJvbWlzZSBmb3IgZGl2ZXJzZSBpbmR1c3RyaWVzPC9wPlxyXG4gICAgICA8U2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICA8Q1RBSGVhZGluZz5uZXhBUjwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxMb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uMn0gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgIDwvTG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkx1bWluZXhhIFRlY2hub2xvZ2llcyBkZXZlbG9wZWQgaW1hZ2UgdHJhY2tpbmcgdmlydHVhbCBzb2Z0d2FyZSBiYXNlZCBvbiBBdWdtZW50ZWQgUmVhbGl0eSBhbmQgTWl4ZWQgUmVhbGl0eSwgbmFtZWQgaXQgbmV4QVIuPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPkhvdzwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxMb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uMX0gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgIDwvTG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8c3Ryb25nPm5leEFSIGlzIGEgV2ViQVIgc29sdXRpb24gdGhhdCBkaXNwbGF5cyBjb250ZW50IGxpa2UgM0QgbW9kZWxzLCBob2xvZ3JhcGhpYyBhdmF0YXJzLCB2aWRlb3MsIGltYWdlcywgYXVkaW8sIGFuZCBsaW5rcyB3aGVuIHRoZSBuZXhBUiBjYW1lcmEgaXMgcG9pbnRlZCBhdCBhIDJEIHN1cmZhY2UuPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPldvcmtzPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPExvdHRpZUNvbnRhaW5lciA+XHJcbiAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uM30gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgIDwvTG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8c3Ryb25nPm5leEFSIHJlcXVpcmVzIG5vIGFkZGl0aW9uYWwgYXBwIGluc3RhbGxhdGlvbnMgYW5kIHdvcmtzIHNlYW1sZXNzbHkgb24gYWxsIHNtYXJ0cGhvbmVzLCB3aGV0aGVyIEFuZHJvaWQgb3IgaU9TLjwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvU2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUgJywgbWFyZ2luOiAnMTlweCcgfX0+PHN0cm9uZz5EaWZmZXJlbnRpYXRlIDwvc3Ryb25nPiB5b3Vyc2VsZiBmcm9tIGNvbXBldGl0aW9uPC9wPlxyXG4gICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnODBweCcgfX0+U3BhcmsgYSBUcmVuZCE8L2gxPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyYXknLCBtYXJnaW46ICcxOXB4JyB9fT48c3Ryb25nPiNuZXhBUiAjQXVnbWVudGVkUmVhbGl0eSAjd2ViQVI8L3N0cm9uZz4gSW5ub3ZhdGl2ZSBTb2x1dGlvbjwvcD5cclxuICAgICAgPEJ1dHRvbj48c3Ryb25nPkJvb2sgRGVtbzwvc3Ryb25nPjwvQnV0dG9uPiBcclxuICAgIDwvQ1RBU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFRvQWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
        marginBottom: '60px',
        fontStyle: 'italic'
      },
      children: "What's New"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
      style: {
        width: '80%',
        marginBottom: '20px'
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
          lineNumber: 126,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "How"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
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
        lineNumber: 155,
        columnNumber: 54
      }, undefined), " yourself from competition"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
      style: {
        color: 'white',
        fontSize: '80px'
      },
      children: "Spark a Trend!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
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
        lineNumber: 157,
        columnNumber: 52
      }, undefined), " Innovative Solution"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
      onClick: openModal,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
        children: "Book Demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 35
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }, undefined), isModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(ModalOverlay, {
      onClick: closeModal,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(ModalContent, {
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CloseButton, {
          onClick: closeModal,
          children: "\xD7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
          children: "Book a Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "text",
              name: "name",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Mobile Number:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "tel",
              name: "mobile",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Email ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "email",
              name: "email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Message:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(TextArea, {
              name: "message",
              rows: "4",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
            type: "submit",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiTG90dGllQ29udGFpbmVyIiwiX2M0IiwiQ1RBSGVhZGluZyIsImgyIiwiX2M1IiwiQ1RBRGVzY3JpcHRpb24iLCJwIiwiX2M2IiwiQnV0dG9uIiwiYnV0dG9uIiwiX2M3IiwiQ2FsbFRvQWN0aW9uIiwiX2pzeERFViIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoaWxkcmVuIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIndpZHRoIiwiTG90dGllIiwiYW5pbWF0aW9uRGF0YSIsImFuaW1hdGlvbjIiLCJsb29wIiwiYW5pbWF0aW9uMSIsImFuaW1hdGlvbjMiLCJjb2xvciIsIm1hcmdpbiIsIm9uQ2xpY2siLCJvcGVuTW9kYWwiLCJpc01vZGFsT3BlbiIsIk1vZGFsT3ZlcmxheSIsImNsb3NlTW9kYWwiLCJNb2RhbENvbnRlbnQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiQ2xvc2VCdXR0b24iLCJGb3JtRmllbGQiLCJJbnB1dCIsInR5cGUiLCJuYW1lIiwicmVxdWlyZWQiLCJUZXh0QXJlYSIsInJvd3MiLCJfYzgiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ0E7QUFDTDtBQUMwQjtBQUNiO0FBQ0M7QUFDQTtBQUFBO0FBRWhELE1BQU1BLFVBQVUsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RB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UUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0gsQ0FDZjtFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNTLENBQUM7QUFFakIsQ0FBQztBQUFDMEIsR0FBQSxHQTVFSXpDLFlBQVk7QUE4RUhBLDJFQUFZLEVBQUM7QUFBQSxJQUFBakIsRUFBQSxFQUFBRyxHQUFBLEVBQUFFLEdBQUEsRUFBQUUsR0FBQSxFQUFBRyxHQUFBLEVBQUFHLEdBQUEsRUFBQUcsR0FBQSxFQUFBMEMsR0FBQTtBQUFBQyxZQUFBLENBQUEzRCxFQUFBO0FBQUEyRCxZQUFBLENBQUF4RCxHQUFBO0FBQUF3RCxZQUFBLENBQUF0RCxHQUFBO0FBQUFzRCxZQUFBLENBQUFwRCxHQUFBO0FBQUFvRCxZQUFBLENBQUFqRCxHQUFBO0FBQUFpRCxZQUFBLENBQUE5QyxHQUFBO0FBQUE4QyxZQUFBLENBQUEzQyxHQUFBO0FBQUEyQyxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQ1NGNlY2I2MTI3NDQzNmQ5MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IExvdHRpZSBmcm9tICdsb3R0aWUtcmVhY3QnO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuaW1wb3J0IGFuaW1hdGlvbjEgZnJvbSAnLi8uLi9Mb3R0aWUvd29yay5qc29uJzsgXHJcbmltcG9ydCBhbmltYXRpb24yIGZyb20gJy4vLi4vTG90dGllL25leGFyLmpzb24nO1xyXG5pbXBvcnQgYW5pbWF0aW9uMyBmcm9tICcuLy4uL0xvdHRpZS93b3Jrcy5qc29uJztcclxuXHJcbmNvbnN0IENUQVNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4ke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBSZXF1aXJlZCBmb3IgdGhlIG92ZXJsYXkgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNjZweDtcclxuICBjb2xvcjogd2hpdGU7IC8qIFRleHQgY29sb3IgZm9yIHZpc2liaWxpdHkgb24gZGFyayBiYWNrZ3JvdW5kICovXHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgncmJnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIC8qIE92ZXJsYXkgKi9cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkanVzdCB0aGUgb3BhY2l0eSBhcyBuZWVkZWQgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDY2cHg7IC8qIE1hdGNoIHRoZSBib3JkZXItcmFkaXVzICovXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgYWJvdmUgdGhlIG92ZXJsYXkgKi9cclxuICAqIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBBbGxvd3Mgd3JhcHBpbmcgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb3R0aWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4OyAvKiBGaXhlZCBoZWlnaHQgZm9yIHVuaWZvcm1pdHkgKi9cclxuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBhbmltYXRpb24gKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENUQUhlYWRpbmcgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiA0Ljc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgQ1RBRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgb24gaG92ZXIgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogJzY5cHgnLCBtYXJnaW5Cb3R0b206JzYwcHgnLCBmb250U3R5bGU6J2l0YWxpYyd9fT5XaGF0J3MgTmV3PC9oMT5cclxuICAgICAgPHAgc3R5bGU9e3t3aWR0aDonODAlJywgbWFyZ2luQm90dG9tOicyMHB4J319PkF1Z21lbnRlZCBSZWFsaXR5IChBUikgaW50ZWdyYXRlcyBkaWdpdGFsIGluZm9ybWF0aW9uIHdpdGggdGhlIHJlYWwgd29ybGQsIGVuaGFuY2luZyB1c2VyIGV4cGVyaWVuY2VzLlxyXG4gICAgICAgICBJdCBvdmVybGF5cyBpbWFnZXMsIHZpZGVvcywgb3IgM0QgbW9kZWxzIG9udG8gdGhlIHBoeXNpY2FsIGVudmlyb25tZW50IGluIHJlYWwtdGltZS4gQVIgaXMgdXRpbGl6ZWQgaW4gXHJcbiAgICAgICAgIHNtYXJ0cGhvbmVzLCB0YWJsZXRzLCBhbmQgc21hcnQgZ2xhc3Nlcywgb2ZmZXJpbmcgYXBwbGljYXRpb25zIGluIGdhbWluZywgbmF2aWdhdGlvbiwgZWR1Y2F0aW9uLCBcclxuICAgICAgICAgYW5kIHJldGFpbC4gSXQgcmVsaWVzIG9uIHNlbnNvcnMsIGNhbWVyYXMsIGFuZCBjb21wdXRlciB2aXNpb24gdG8gdHJhY2sgb2JqZWN0cyBhbmQgcHJvdmlkZSBpbnRlcmFjdGl2ZSBcclxuICAgICAgICAgY29udGVudC4gQ2hhbGxlbmdlcyBpbmNsdWRlIGhhcmR3YXJlIGxpbWl0YXRpb25zIGFuZCBjb250ZW50IGNyZWF0aW9uIGNvbXBsZXhpdGllcy4gXHJcbiAgICAgICAgIEFSJ3Mgb25nb2luZyBldm9sdXRpb24gaG9sZHMgcHJvbWlzZSBmb3IgZGl2ZXJzZSBpbmR1c3RyaWVzPC9wPlxyXG5cclxuICAgICAgPFNlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+bmV4QVI8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8TG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjJ9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPHN0cm9uZz5MdW1pbmV4YSBUZWNobm9sb2dpZXMgZGV2ZWxvcGVkIGltYWdlIHRyYWNraW5nIHZpcnR1YWwgc29mdHdhcmUgYmFzZWQgb24gQXVnbWVudGVkIFJlYWxpdHkgYW5kIE1peGVkIFJlYWxpdHksIG5hbWVkIGl0IG5leEFSLjwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICA8Q1RBSGVhZGluZz5Ib3c8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8TG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjF9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPHN0cm9uZz5uZXhBUiBpcyBhIFdlYkFSIHNvbHV0aW9uIHRoYXQgZGlzcGxheXMgY29udGVudCBsaWtlIDNEIG1vZGVscywgaG9sb2dyYXBoaWMgYXZhdGFycywgdmlkZW9zLCBpbWFnZXMsIGF1ZGlvLCBhbmQgbGlua3Mgd2hlbiB0aGUgbmV4QVIgY2FtZXJhIGlzIHBvaW50ZWQgYXQgYSAyRCBzdXJmYWNlLjwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICA8Q1RBSGVhZGluZz5Xb3JrczwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxMb3R0aWVDb250YWluZXIgPlxyXG4gICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjN9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPHN0cm9uZz5uZXhBUiByZXF1aXJlcyBubyBhZGRpdGlvbmFsIGFwcCBpbnN0YWxsYXRpb25zIGFuZCB3b3JrcyBzZWFtbGVzc2x5IG9uIGFsbCBzbWFydHBob25lcywgd2hldGhlciBBbmRyb2lkIG9yIGlPUy48L3N0cm9uZz5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L1NlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlICcsIG1hcmdpbjogJzE5cHgnIH19PjxzdHJvbmc+RGlmZmVyZW50aWF0ZSA8L3N0cm9uZz4geW91cnNlbGYgZnJvbSBjb21wZXRpdGlvbjwvcD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzgwcHgnIH19PlNwYXJrIGEgVHJlbmQhPC9oMT5cclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmF5JywgbWFyZ2luOiAnMTlweCcgfX0+PHN0cm9uZz4jbmV4QVIgI0F1Z21lbnRlZFJlYWxpdHkgI3dlYkFSPC9zdHJvbmc+IElubm92YXRpdmUgU29sdXRpb248L3A+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b3Blbk1vZGFsfT48c3Ryb25nPkJvb2sgRGVtbzwvc3Ryb25nPjwvQnV0dG9uPiBcclxuXHJcbiAgICAgIHtpc01vZGFsT3BlbiAmJiAoXHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSBvbkNsaWNrPXtjbG9zZU1vZGFsfT5cclxuICAgICAgICAgIDxNb2RhbENvbnRlbnQgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PiZ0aW1lczs8L0Nsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICA8aDI+Qm9vayBhIERlbW88L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk1vYmlsZSBOdW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cIm1vYmlsZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbCBJRDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5NZXNzYWdlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiNFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgIDwvTW9kYWxPdmVybGF5PlxyXG4gICAgICApfVxyXG4gICAgPC9DVEFTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
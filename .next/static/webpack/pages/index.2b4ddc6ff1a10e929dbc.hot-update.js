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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Nexar.jsx",
  _s = $RefreshSig$();









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
const ModalOverlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
_c8 = ModalOverlay;
const ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative; /* Relative for close button positioning */
`;
_c9 = ModalContent;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
_c10 = CloseButton;
const FormField = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-bottom: 20px;
`;
_c11 = FormField;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`;
_c12 = Input;
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`;
_c13 = TextArea;
const CallToAction = () => {
  _s();
  const {
    0: isModalOpen,
    1: setModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTASection, {
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
        lineNumber: 174,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
        style: {
          width: '80%',
          marginBottom: '20px'
        },
        children: "Augmented Reality (AR) integrates digital information with the real world, enhancing user experiences. It overlays images, videos, or 3D models onto the physical environment in real-time. AR is utilized in smartphones, tablets, and smart glasses, offering applications in gaming, navigation, education, and retail. It relies on sensors, cameras, and computer vision to track objects and provide interactive content. Challenges include hardware limitations and content creation complexities. AR's ongoing evolution holds promise for diverse industries"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(SectionsContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "nexAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "How"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "Works"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
        style: {
          color: 'white',
          margin: '19px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
          children: "Differentiate "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 55
        }, undefined), " yourself from competition"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
        style: {
          color: 'white',
          fontSize: '80px'
        },
        children: "Spark a Trend!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
        style: {
          color: 'gray',
          margin: '19px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
          children: "#nexAR #AugmentedReality #webAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 54
        }, undefined), " Innovative Solution"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
        onClick: openModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
          children: "Book Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 37
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
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
          lineNumber: 224,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
          children: "Book a Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "text",
              name: "name",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Mobile Number:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "tel",
              name: "mobile",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Email ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "email",
              name: "email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Message:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(TextArea, {
              name: "message",
              rows: "4",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
            type: "submit",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};
_s(CallToAction, "o+ymuZc6VVdUpCAroHabBGZ51VI=");
_c14 = CallToAction;
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
$RefreshReg$(_c, "CTASection");
$RefreshReg$(_c2, "SectionsContainer");
$RefreshReg$(_c3, "Section");
$RefreshReg$(_c4, "LottieContainer");
$RefreshReg$(_c5, "CTAHeading");
$RefreshReg$(_c6, "CTADescription");
$RefreshReg$(_c7, "Button");
$RefreshReg$(_c8, "ModalOverlay");
$RefreshReg$(_c9, "ModalContent");
$RefreshReg$(_c10, "CloseButton");
$RefreshReg$(_c11, "FormField");
$RefreshReg$(_c12, "Input");
$RefreshReg$(_c13, "TextArea");
$RefreshReg$(_c14, "CallToAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiTG90dGllQ29udGFpbmVyIiwiX2M0IiwiQ1RBSGVhZGluZyIsImgyIiwiX2M1IiwiQ1RBRGVzY3JpcHRpb24iLCJwIiwiX2M2IiwiQnV0dG9uIiwiYnV0dG9uIiwiX2M3IiwiTW9kYWxPdmVybGF5IiwiX2M4IiwiTW9kYWxDb250ZW50IiwiX2M5IiwiQ2xvc2VCdXR0b24iLCJfYzEwIiwiRm9ybUZpZWxkIiwiX2MxMSIsIklucHV0IiwiaW5wdXQiLCJfYzEyIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIl9jMTMiLCJDYWxsVG9BY3Rpb24iLCJfcyIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidXNlU3RhdGUiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiX2pzeERFViIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIndpZHRoIiwiTG90dGllIiwiYW5pbWF0aW9uRGF0YSIsImFuaW1hdGlvbjIiLCJsb29wIiwiYW5pbWF0aW9uMSIsImFuaW1hdGlvbjMiLCJjb2xvciIsIm1hcmdpbiIsIm9uQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsInJvd3MiLCJfYzE0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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LFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNqQyxDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0s7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSCxDQUNmO0VBQUEsZUFDRCxDQUFDO0FBRVAsQ0FBQztBQUFDckIsRUFBQSxDQXJGSUQsWUFBWTtBQUFBdUMsSUFBQSxHQUFadkMsWUFBWTtBQXVGSEEsMkVBQVksRUFBQztBQUFBLElBQUEvQixFQUFBLEVBQUFHLEdBQUEsRUFBQUUsR0FBQSxFQUFBRSxHQUFBLEVBQUFHLEdBQUEsRUFBQUcsR0FBQSxFQUFBRyxHQUFBLEVBQUFFLEdBQUEsRUFBQUUsR0FBQSxFQUFBRSxJQUFBLEVBQUFFLElBQUEsRUFBQUcsSUFBQSxFQUFBRyxJQUFBLEVBQUF3QyxJQUFBO0FBQUFDLFlBQUEsQ0FBQXZFLEVBQUE7QUFBQXVFLFlBQUEsQ0FBQXBFLEdBQUE7QUFBQW9FLFlBQUEsQ0FBQWxFLEdBQUE7QUFBQWtFLFlBQUEsQ0FBQWhFLEdBQUE7QUFBQWdFLFlBQUEsQ0FBQTdELEdBQUE7QUFBQTZELFlBQUEsQ0FBQTFELEdBQUE7QUFBQTBELFlBQUEsQ0FBQXZELEdBQUE7QUFBQXVELFlBQUEsQ0FBQXJELEdBQUE7QUFBQXFELFlBQUEsQ0FBQW5ELEdBQUE7QUFBQW1ELFlBQUEsQ0FBQWpELElBQUE7QUFBQWlELFlBQUEsQ0FBQS9DLElBQUE7QUFBQStDLFlBQUEsQ0FBQTVDLElBQUE7QUFBQTRDLFlBQUEsQ0FBQXpDLElBQUE7QUFBQXlDLFlBQUEsQ0FBQUQsSUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYjRkZGM2ZmYxYTEwZTkyOWRiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBMb3R0aWUgZnJvbSAnbG90dGllLXJlYWN0JztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCBhbmltYXRpb24xIGZyb20gJy4vLi4vTG90dGllL3dvcmsuanNvbic7IFxyXG5pbXBvcnQgYW5pbWF0aW9uMiBmcm9tICcuLy4uL0xvdHRpZS9uZXhhci5qc29uJztcclxuaW1wb3J0IGFuaW1hdGlvbjMgZnJvbSAnLi8uLi9Mb3R0aWUvd29ya3MuanNvbic7XHJcblxyXG5jb25zdCBDVEFTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBSZXF1aXJlZCBmb3IgdGhlIG92ZXJsYXkgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNjZweDtcclxuICBjb2xvcjogd2hpdGU7IC8qIFRleHQgY29sb3IgZm9yIHZpc2liaWxpdHkgb24gZGFyayBiYWNrZ3JvdW5kICovXHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgncmJnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIC8qIE92ZXJsYXkgKi9cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkanVzdCB0aGUgb3BhY2l0eSBhcyBuZWVkZWQgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDY2cHg7IC8qIE1hdGNoIHRoZSBib3JkZXItcmFkaXVzICovXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgYWJvdmUgdGhlIG92ZXJsYXkgKi9cclxuICAqIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBBbGxvd3Mgd3JhcHBpbmcgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvdHRpZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgdW5pZm9ybWl0eSAqL1xyXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXIgdGhlIGFuaW1hdGlvbiAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ1RBSGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6IDQuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IGdyYXk7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIERhcmtlciBzaGFkZSBvbiBob3ZlciAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5gO1xyXG5cclxuY29uc3QgTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogUmVsYXRpdmUgZm9yIGNsb3NlIGJ1dHRvbiBwb3NpdGlvbmluZyAqL1xyXG5gO1xyXG5cclxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUZpZWxkID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHNldE1vZGFsT3Blbih0cnVlKTtcclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogJzY5cHgnLCBtYXJnaW5Cb3R0b206ICc2MHB4JywgZm9udFN0eWxlOiAnaXRhbGljJyB9fT5XaGF0J3MgTmV3PC9oMT5cclxuICAgICAgICA8cCBzdHlsZT17eyB3aWR0aDogJzgwJScsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgQXVnbWVudGVkIFJlYWxpdHkgKEFSKSBpbnRlZ3JhdGVzIGRpZ2l0YWwgaW5mb3JtYXRpb24gd2l0aCB0aGUgcmVhbCB3b3JsZCwgZW5oYW5jaW5nIHVzZXIgZXhwZXJpZW5jZXMuXHJcbiAgICAgICAgICBJdCBvdmVybGF5cyBpbWFnZXMsIHZpZGVvcywgb3IgM0QgbW9kZWxzIG9udG8gdGhlIHBoeXNpY2FsIGVudmlyb25tZW50IGluIHJlYWwtdGltZS4gQVIgaXMgdXRpbGl6ZWQgaW4gXHJcbiAgICAgICAgICBzbWFydHBob25lcywgdGFibGV0cywgYW5kIHNtYXJ0IGdsYXNzZXMsIG9mZmVyaW5nIGFwcGxpY2F0aW9ucyBpbiBnYW1pbmcsIG5hdmlnYXRpb24sIGVkdWNhdGlvbiwgXHJcbiAgICAgICAgICBhbmQgcmV0YWlsLiBJdCByZWxpZXMgb24gc2Vuc29ycywgY2FtZXJhcywgYW5kIGNvbXB1dGVyIHZpc2lvbiB0byB0cmFjayBvYmplY3RzIGFuZCBwcm92aWRlIGludGVyYWN0aXZlIFxyXG4gICAgICAgICAgY29udGVudC4gQ2hhbGxlbmdlcyBpbmNsdWRlIGhhcmR3YXJlIGxpbWl0YXRpb25zIGFuZCBjb250ZW50IGNyZWF0aW9uIGNvbXBsZXhpdGllcy4gXHJcbiAgICAgICAgICBBUidzIG9uZ29pbmcgZXZvbHV0aW9uIGhvbGRzIHByb21pc2UgZm9yIGRpdmVyc2UgaW5kdXN0cmllc1xyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPFNlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxDVEFIZWFkaW5nPm5leEFSPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgICA8TG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uMn0gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9Mb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkx1bWluZXhhIFRlY2hub2xvZ2llcyBkZXZlbG9wZWQgaW1hZ2UgdHJhY2tpbmcgdmlydHVhbCBzb2Z0d2FyZSBiYXNlZCBvbiBBdWdtZW50ZWQgUmVhbGl0eSBhbmQgTWl4ZWQgUmVhbGl0eSwgbmFtZWQgaXQgbmV4QVIuPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8Q1RBSGVhZGluZz5Ib3c8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICAgIDxMb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24xfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+bmV4QVIgaXMgYSBXZWJBUiBzb2x1dGlvbiB0aGF0IGRpc3BsYXlzIGNvbnRlbnQgbGlrZSAzRCBtb2RlbHMsIGhvbG9ncmFwaGljIGF2YXRhcnMsIHZpZGVvcywgaW1hZ2VzLCBhdWRpbywgYW5kIGxpbmtzIHdoZW4gdGhlIG5leEFSIGNhbWVyYSBpcyBwb2ludGVkIGF0IGEgMkQgc3VyZmFjZS48L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxDVEFIZWFkaW5nPldvcmtzPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgICA8TG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uM30gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9Mb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPm5leEFSIHJlcXVpcmVzIG5vIGFkZGl0aW9uYWwgYXBwIGluc3RhbGxhdGlvbnMgYW5kIHdvcmtzIHNlYW1sZXNzbHkgb24gYWxsIHNtYXJ0cGhvbmVzLCB3aGV0aGVyIEFuZHJvaWQgb3IgaU9TLjwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG1hcmdpbjogJzE5cHgnIH19PjxzdHJvbmc+RGlmZmVyZW50aWF0ZSA8L3N0cm9uZz4geW91cnNlbGYgZnJvbSBjb21wZXRpdGlvbjwvcD5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnODBweCcgfX0+U3BhcmsgYSBUcmVuZCE8L2gxPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScsIG1hcmdpbjogJzE5cHgnIH19PjxzdHJvbmc+I25leEFSICNBdWdtZW50ZWRSZWFsaXR5ICN3ZWJBUjwvc3Ryb25nPiBJbm5vdmF0aXZlIFNvbHV0aW9uPC9wPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b3Blbk1vZGFsfT48c3Ryb25nPkJvb2sgRGVtbzwvc3Ryb25nPjwvQnV0dG9uPiBcclxuICAgICAgPC9DVEFTZWN0aW9uPlxyXG5cclxuICAgICAge2lzTW9kYWxPcGVuICYmIChcclxuICAgICAgICA8TW9kYWxPdmVybGF5IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgPE1vZGFsQ29udGVudCBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0+JnRpbWVzOzwvQ2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgIDxoMj5Cb29rIGEgRGVtbzwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlIE51bWJlcjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwibW9iaWxlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIElEOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk1lc3NhZ2U6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYSBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCI0XCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgPC9Nb2RhbE92ZXJsYXk+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFRvQWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
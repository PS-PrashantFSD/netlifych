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
  color: black;
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
        lineNumber: 175,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
        style: {
          width: '80%',
          marginBottom: '20px'
        },
        children: "Augmented Reality (AR) integrates digital information with the real world, enhancing user experiences. It overlays images, videos, or 3D models onto the physical environment in real-time. AR is utilized in smartphones, tablets, and smart glasses, offering applications in gaming, navigation, education, and retail. It relies on sensors, cameras, and computer vision to track objects and provide interactive content. Challenges include hardware limitations and content creation complexities. AR's ongoing evolution holds promise for diverse industries"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(SectionsContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "nexAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "How"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "Works"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
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
          lineNumber: 216,
          columnNumber: 55
        }, undefined), " yourself from competition"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
        style: {
          color: 'white',
          fontSize: '80px'
        },
        children: "Spark a Trend!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
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
          lineNumber: 218,
          columnNumber: 54
        }, undefined), " Innovative Solution"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
        onClick: openModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
          children: "Book Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 37
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
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
          lineNumber: 225,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
          children: "Book a Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "text",
              name: "name",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Mobile Number:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "tel",
              name: "mobile",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Email ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "email",
              name: "email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Message:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(TextArea, {
              name: "message",
              rows: "4",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
            type: "submit",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiTG90dGllQ29udGFpbmVyIiwiX2M0IiwiQ1RBSGVhZGluZyIsImgyIiwiX2M1IiwiQ1RBRGVzY3JpcHRpb24iLCJwIiwiX2M2IiwiQnV0dG9uIiwiYnV0dG9uIiwiX2M3IiwiTW9kYWxPdmVybGF5IiwiX2M4IiwiTW9kYWxDb250ZW50IiwiX2M5IiwiQ2xvc2VCdXR0b24iLCJfYzEwIiwiRm9ybUZpZWxkIiwiX2MxMSIsIklucHV0IiwiaW5wdXQiLCJfYzEyIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIl9jMTMiLCJDYWxsVG9BY3Rpb24iLCJfcyIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidXNlU3RhdGUiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiX2pzeERFViIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIndpZHRoIiwiTG90dGllIiwiYW5pbWF0aW9uRGF0YSIsImFuaW1hdGlvbjIiLCJsb29wIiwiYW5pbWF0aW9uMSIsImFuaW1hdGlvbjMiLCJjb2xvciIsIm1hcmdpbiIsIm9uQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsInJvd3MiLCJfYzE0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ2pDLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDSztJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNILENBQ2Y7RUFBQSxlQUNELENBQUM7QUFFUCxDQUFDO0FBQUNyQixFQUFBLENBckZJRCxZQUFZO0FBQUF1QyxJQUFBLEdBQVp2QyxZQUFZO0FBdUZIQSwyRUFBWSxFQUFDO0FBQUEsSUFBQS9CLEVBQUEsRUFBQUcsR0FBQSxFQUFBRSxHQUFBLEVBQUFFLEdBQUEsRUFBQUcsR0FBQSxFQUFBRyxHQUFBLEVBQUFHLEdBQUEsRUFBQUUsR0FBQSxFQUFBRSxHQUFBLEVBQUFFLElBQUEsRUFBQUUsSUFBQSxFQUFBRyxJQUFBLEVBQUFHLElBQUEsRUFBQXdDLElBQUE7QUFBQUMsWUFBQSxDQUFBdkUsRUFBQTtBQUFBdUUsWUFBQSxDQUFBcEUsR0FBQTtBQUFBb0UsWUFBQSxDQUFBbEUsR0FBQTtBQUFBa0UsWUFBQSxDQUFBaEUsR0FBQTtBQUFBZ0UsWUFBQSxDQUFBN0QsR0FBQTtBQUFBNkQsWUFBQSxDQUFBMUQsR0FBQTtBQUFBMEQsWUFBQSxDQUFBdkQsR0FBQTtBQUFBdUQsWUFBQSxDQUFBckQsR0FBQTtBQUFBcUQsWUFBQSxDQUFBbkQsR0FBQTtBQUFBbUQsWUFBQSxDQUFBakQsSUFBQTtBQUFBaUQsWUFBQSxDQUFBL0MsSUFBQTtBQUFBK0MsWUFBQSxDQUFBNUMsSUFBQTtBQUFBNEMsWUFBQSxDQUFBekMsSUFBQTtBQUFBeUMsWUFBQSxDQUFBRCxJQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhZDg0MTcwNmU1ZTFlODhjN2JmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IExvdHRpZSBmcm9tICdsb3R0aWUtcmVhY3QnO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuaW1wb3J0IGFuaW1hdGlvbjEgZnJvbSAnLi8uLi9Mb3R0aWUvd29yay5qc29uJzsgXHJcbmltcG9ydCBhbmltYXRpb24yIGZyb20gJy4vLi4vTG90dGllL25leGFyLmpzb24nO1xyXG5pbXBvcnQgYW5pbWF0aW9uMyBmcm9tICcuLy4uL0xvdHRpZS93b3Jrcy5qc29uJztcclxuXHJcbmNvbnN0IENUQVNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFJlcXVpcmVkIGZvciB0aGUgb3ZlcmxheSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxuICBib3JkZXItcmFkaXVzOiA2NnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgLyogVGV4dCBjb2xvciBmb3IgdmlzaWJpbGl0eSBvbiBkYXJrIGJhY2tncm91bmQgKi9cclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdyYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgLyogT3ZlcmxheSAqL1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQWRqdXN0IHRoZSBvcGFjaXR5IGFzIG5lZWRlZCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjZweDsgLyogTWF0Y2ggdGhlIGJvcmRlci1yYWRpdXMgKi9cclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAvKiBFbnN1cmVzIHRleHQgYXBwZWFycyBhYm92ZSB0aGUgb3ZlcmxheSAqL1xyXG4gICoge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7IC8qIEFsbG93cyB3cmFwcGluZyBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG90dGllQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxNjBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciB1bmlmb3JtaXR5ICovXHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgYW5pbWF0aW9uICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDVEFIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogNC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IENUQURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcGFkZGluZzogMjBweCA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMzsgLyogRGFya2VyIHNoYWRlIG9uIGhvdmVyICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTW9kYWxPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5gO1xyXG5cclxuY29uc3QgTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogUmVsYXRpdmUgZm9yIGNsb3NlIGJ1dHRvbiBwb3NpdGlvbmluZyAqL1xyXG5gO1xyXG5cclxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUZpZWxkID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHNldE1vZGFsT3Blbih0cnVlKTtcclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogJzY5cHgnLCBtYXJnaW5Cb3R0b206ICc2MHB4JywgZm9udFN0eWxlOiAnaXRhbGljJyB9fT5XaGF0J3MgTmV3PC9oMT5cclxuICAgICAgICA8cCBzdHlsZT17eyB3aWR0aDogJzgwJScsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgQXVnbWVudGVkIFJlYWxpdHkgKEFSKSBpbnRlZ3JhdGVzIGRpZ2l0YWwgaW5mb3JtYXRpb24gd2l0aCB0aGUgcmVhbCB3b3JsZCwgZW5oYW5jaW5nIHVzZXIgZXhwZXJpZW5jZXMuXHJcbiAgICAgICAgICBJdCBvdmVybGF5cyBpbWFnZXMsIHZpZGVvcywgb3IgM0QgbW9kZWxzIG9udG8gdGhlIHBoeXNpY2FsIGVudmlyb25tZW50IGluIHJlYWwtdGltZS4gQVIgaXMgdXRpbGl6ZWQgaW4gXHJcbiAgICAgICAgICBzbWFydHBob25lcywgdGFibGV0cywgYW5kIHNtYXJ0IGdsYXNzZXMsIG9mZmVyaW5nIGFwcGxpY2F0aW9ucyBpbiBnYW1pbmcsIG5hdmlnYXRpb24sIGVkdWNhdGlvbiwgXHJcbiAgICAgICAgICBhbmQgcmV0YWlsLiBJdCByZWxpZXMgb24gc2Vuc29ycywgY2FtZXJhcywgYW5kIGNvbXB1dGVyIHZpc2lvbiB0byB0cmFjayBvYmplY3RzIGFuZCBwcm92aWRlIGludGVyYWN0aXZlIFxyXG4gICAgICAgICAgY29udGVudC4gQ2hhbGxlbmdlcyBpbmNsdWRlIGhhcmR3YXJlIGxpbWl0YXRpb25zIGFuZCBjb250ZW50IGNyZWF0aW9uIGNvbXBsZXhpdGllcy4gXHJcbiAgICAgICAgICBBUidzIG9uZ29pbmcgZXZvbHV0aW9uIGhvbGRzIHByb21pc2UgZm9yIGRpdmVyc2UgaW5kdXN0cmllc1xyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPFNlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxDVEFIZWFkaW5nPm5leEFSPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgICA8TG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uMn0gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9Mb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkx1bWluZXhhIFRlY2hub2xvZ2llcyBkZXZlbG9wZWQgaW1hZ2UgdHJhY2tpbmcgdmlydHVhbCBzb2Z0d2FyZSBiYXNlZCBvbiBBdWdtZW50ZWQgUmVhbGl0eSBhbmQgTWl4ZWQgUmVhbGl0eSwgbmFtZWQgaXQgbmV4QVIuPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8Q1RBSGVhZGluZz5Ib3c8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICAgIDxMb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24xfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+bmV4QVIgaXMgYSBXZWJBUiBzb2x1dGlvbiB0aGF0IGRpc3BsYXlzIGNvbnRlbnQgbGlrZSAzRCBtb2RlbHMsIGhvbG9ncmFwaGljIGF2YXRhcnMsIHZpZGVvcywgaW1hZ2VzLCBhdWRpbywgYW5kIGxpbmtzIHdoZW4gdGhlIG5leEFSIGNhbWVyYSBpcyBwb2ludGVkIGF0IGEgMkQgc3VyZmFjZS48L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxDVEFIZWFkaW5nPldvcmtzPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgICA8TG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uM30gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9Mb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPm5leEFSIHJlcXVpcmVzIG5vIGFkZGl0aW9uYWwgYXBwIGluc3RhbGxhdGlvbnMgYW5kIHdvcmtzIHNlYW1sZXNzbHkgb24gYWxsIHNtYXJ0cGhvbmVzLCB3aGV0aGVyIEFuZHJvaWQgb3IgaU9TLjwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG1hcmdpbjogJzE5cHgnIH19PjxzdHJvbmc+RGlmZmVyZW50aWF0ZSA8L3N0cm9uZz4geW91cnNlbGYgZnJvbSBjb21wZXRpdGlvbjwvcD5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnODBweCcgfX0+U3BhcmsgYSBUcmVuZCE8L2gxPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScsIG1hcmdpbjogJzE5cHgnIH19PjxzdHJvbmc+I25leEFSICNBdWdtZW50ZWRSZWFsaXR5ICN3ZWJBUjwvc3Ryb25nPiBJbm5vdmF0aXZlIFNvbHV0aW9uPC9wPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b3Blbk1vZGFsfT48c3Ryb25nPkJvb2sgRGVtbzwvc3Ryb25nPjwvQnV0dG9uPiBcclxuICAgICAgPC9DVEFTZWN0aW9uPlxyXG5cclxuICAgICAge2lzTW9kYWxPcGVuICYmIChcclxuICAgICAgICA8TW9kYWxPdmVybGF5IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgPE1vZGFsQ29udGVudCBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0+JnRpbWVzOzwvQ2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgIDxoMj5Cb29rIGEgRGVtbzwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlIE51bWJlcjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwibW9iaWxlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIElEOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk1lc3NhZ2U6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYSBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCI0XCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgPC9Nb2RhbE92ZXJsYXk+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFRvQWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
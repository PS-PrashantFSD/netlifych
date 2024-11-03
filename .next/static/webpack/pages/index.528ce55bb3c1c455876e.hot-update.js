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
  background-color: #302f2f;
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
              required: true,
              placeholder: "John Wick"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiTG90dGllQ29udGFpbmVyIiwiX2M0IiwiQ1RBSGVhZGluZyIsImgyIiwiX2M1IiwiQ1RBRGVzY3JpcHRpb24iLCJwIiwiX2M2IiwiQnV0dG9uIiwiYnV0dG9uIiwiX2M3IiwiTW9kYWxPdmVybGF5IiwiX2M4IiwiTW9kYWxDb250ZW50IiwiX2M5IiwiQ2xvc2VCdXR0b24iLCJfYzEwIiwiRm9ybUZpZWxkIiwiX2MxMSIsIklucHV0IiwiaW5wdXQiLCJfYzEyIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIl9jMTMiLCJDYWxsVG9BY3Rpb24iLCJfcyIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidXNlU3RhdGUiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiX2pzeERFViIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIndpZHRoIiwiTG90dGllIiwiYW5pbWF0aW9uRGF0YSIsImFuaW1hdGlvbjIiLCJsb29wIiwiYW5pbWF0aW9uMSIsImFuaW1hdGlvbjMiLCJjb2xvciIsIm1hcmdpbiIsIm9uQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwicm93cyIsIl9jMTQiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUNBO0FBQ0w7QUFDMEI7QUFDYjtBQUNDO0FBQ0E7QUFBQTtBQUVoRCxNQUFNQSxVQUFVLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQU8sQ0FBQztBQUN6QyxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0MsRUFBQSxHQXBDSUwsVUFBVTtBQXNDaEIsTUFBTU0saUJBQWlCLEdBQUdMLHlEQUFNLENBQUNNLEdBQUc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0MsR0FBQSxHQVRJRixpQkFBaUI7QUFXdkIsTUFBTUcsT0FBTyxHQUFHUix5REFBTSxDQUFDTSxHQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0csR0FBQSxHQVZJRCxPQUFPO0FBWWIsTUFBTUUsZUFBZSxHQUFHVix5REFBTSxDQUFDTSxHQUFHO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0ssR0FBQSxHQVZJRCxlQUFlO0FBWXJCLE1BQU1FLFVBQVUsR0FBR1oseURBQU0sQ0FBQ2EsRUFBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ0MsR0FBQSxHQUxJRixVQUFVO0FBT2hCLE1BQU1HLGNBQWMsR0FBR2YseURBQU0sQ0FBQ2dCLENBQUM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FMSUYsY0FBYztBQU9wQixNQUFNRyxNQUFNLEdBQUdsQix5REFBTSxDQUFDbUIsTUFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNDLEdBQUEsR0FiSUYsTUFBTTtBQWVaLE1BQU1HLFlBQVksR0FBR3JCLHlEQUFNLENBQUNNLEdBQUc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUNnQixHQUFBLEdBWElELFlBQVk7QUFhbEIsTUFBTUUsWUFBWSxHQUFHdkIseURBQU0sQ0FBQ00sR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ2tCLEdBQUEsR0FSSUQsWUFBWTtBQVVsQixNQUFNRSxXQUFXLEdBQUd6Qix5REFBTSxDQUFDbUIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQ08sSUFBQSxHQVJJRCxXQUFXO0FBVWpCLE1BQU1FLFNBQVMsR0FBRzNCLHlEQUFNLENBQUNNLEdBQUc7QUFDNUI7QUFDQSxDQUFDO0FBQUNzQixJQUFBLEdBRklELFNBQVM7QUFJZixNQUFNRSxLQUFLLEdBQUc3Qix5REFBTSxDQUFDOEIsS0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxJQUFBLEdBTklGLEtBQUs7QUFRWCxNQUFNRyxRQUFRLEdBQUdoQyx5REFBTSxDQUFDaUMsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDQyxJQUFBLEdBTklGLFFBQVE7QUFRZCxNQUFNRyxZQUFZLEdBQUdBLENBQUEsS0FBTTtFQUFBQyxFQUFBO0VBQ3pCLE1BQU07SUFBQSxHQUFDQyxXQUFXO0lBQUEsR0FBRUM7RUFBWSxJQUFJQyxzREFBUSxDQUFDLEtBQUssQ0FBQztFQUVuRCxNQUFNQyxTQUFTLEdBQUdBLENBQUEsS0FBTUYsWUFBWSxDQUFDLElBQUksQ0FBQztFQUMxQyxNQUFNRyxVQUFVLEdBQUdBLENBQUEsS0FBTUgsWUFBWSxDQUFDLEtBQUssQ0FBQztFQUU1QyxvQkFDRUksb0VBQUEsQ0FBQUMsOERBQUE7SUFBQUMsUUFBQSxnQkFDRUYsb0VBQUEsQ0FBQzNDLFVBQVU7TUFBQzhDLE9BQU8sRUFBRTtRQUFFQyxPQUFPLEVBQUU7TUFBRSxDQUFFO01BQUNDLE9BQU8sRUFBRTtRQUFFRCxPQUFPLEVBQUU7TUFBRSxDQUFFO01BQUNFLFVBQVUsRUFBRTtRQUFFQyxRQUFRLEVBQUU7TUFBSSxDQUFFO01BQUFMLFFBQUEsZ0JBQzFGRixvRUFBQTtRQUFJUSxLQUFLLEVBQUU7VUFBRUMsUUFBUSxFQUFFLE1BQU07VUFBRUMsWUFBWSxFQUFFLE1BQU07VUFBRUMsU0FBUyxFQUFFO1FBQVMsQ0FBRTtRQUFBVCxRQUFBLEVBQUM7TUFBVTtRQUFBVSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBSSxDQUFDLGVBQzNGZixvRUFBQTtRQUFHUSxLQUFLLEVBQUU7VUFBRVEsS0FBSyxFQUFFLEtBQUs7VUFBRU4sWUFBWSxFQUFFO1FBQU8sQ0FBRTtRQUFBUixRQUFBLEVBQUM7TUFPbEQ7UUFBQVUsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUcsQ0FBQyxlQUVKZixvRUFBQSxDQUFDckMsaUJBQWlCO1FBQUF1QyxRQUFBLGdCQUNoQkYsb0VBQUEsQ0FBQ2xDLE9BQU87VUFBQW9DLFFBQUEsZ0JBQ05GLG9FQUFBLENBQUM5QixVQUFVO1lBQUFnQyxRQUFBLEVBQUM7VUFBSztZQUFBVSxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBWSxDQUFDLGVBQzlCZixvRUFBQSxDQUFDaEMsZUFBZTtZQUFBa0MsUUFBQSxlQUNkRixvRUFBQSxDQUFDaUIsbURBQU07Y0FBQ0MsYUFBYSxFQUFFQywrQ0FBVztjQUFDQyxJQUFJLEVBQUU7WUFBSztjQUFBUixRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFBRTtVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNsQyxDQUFDLGVBQ2xCZixvRUFBQSxDQUFDM0IsY0FBYztZQUFBNkIsUUFBQSxlQUNiRixvRUFBQTtjQUFBRSxRQUFBLEVBQVE7WUFBNkg7Y0FBQVUsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQVE7VUFBQztZQUFBSCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFDaEksQ0FBQztRQUFBO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNWLENBQUMsZUFFVmYsb0VBQUEsQ0FBQ2xDLE9BQU87VUFBQW9DLFFBQUEsZ0JBQ05GLG9FQUFBLENBQUM5QixVQUFVO1lBQUFnQyxRQUFBLEVBQUM7VUFBRztZQUFBVSxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBWSxDQUFDLGVBQzVCZixvRUFBQSxDQUFDaEMsZUFBZTtZQUFBa0MsUUFBQSxlQUNkRixvRUFBQSxDQUFDaUIsbURBQU07Y0FBQ0MsYUFBYSxFQUFFRyw4Q0FBVztjQUFDRCxJQUFJLEVBQUU7WUFBSztjQUFBUixRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFBRTtVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNsQyxDQUFDLGVBQ2xCZixvRUFBQSxDQUFDM0IsY0FBYztZQUFBNkIsUUFBQSxlQUNiRixvRUFBQTtjQUFBRSxRQUFBLEVBQVE7WUFBdUs7Y0FBQVUsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQVE7VUFBQztZQUFBSCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFDMUssQ0FBQztRQUFBO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNWLENBQUMsZUFFVmYsb0VBQUEsQ0FBQ2xDLE9BQU87VUFBQW9DLFFBQUEsZ0JBQ05GLG9FQUFBLENBQUM5QixVQUFVO1lBQUFnQyxRQUFBLEVBQUM7VUFBSztZQUFBVSxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBWSxDQUFDLGVBQzlCZixvRUFBQSxDQUFDaEMsZUFBZTtZQUFBa0MsUUFBQSxlQUNkRixvRUFBQSxDQUFDaUIsbURBQU07Y0FBQ0MsYUFBYSxFQUFFSSwrQ0FBVztjQUFDRixJQUFJLEVBQUU7WUFBSztjQUFBUixRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFBRTtVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNsQyxDQUFDLGVBQ2xCZixvRUFBQSxDQUFDM0IsY0FBYztZQUFBNkIsUUFBQSxlQUNiRixvRUFBQTtjQUFBRSxRQUFBLEVBQVE7WUFBK0c7Y0FBQVUsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQVE7VUFBQztZQUFBSCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFDbEgsQ0FBQztRQUFBO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNWLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDTyxDQUFDLGVBQ3BCZixvRUFBQTtRQUFHUSxLQUFLLEVBQUU7VUFBRWUsS0FBSyxFQUFFLE9BQU87VUFBRUMsTUFBTSxFQUFFO1FBQU8sQ0FBRTtRQUFBdEIsUUFBQSxnQkFBQ0Ysb0VBQUE7VUFBQUUsUUFBQSxFQUFRO1FBQWM7VUFBQVUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQVEsQ0FBQyw4QkFBMEI7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBRyxDQUFDLGVBQzNHZixvRUFBQTtRQUFJUSxLQUFLLEVBQUU7VUFBRWUsS0FBSyxFQUFFLE9BQU87VUFBRWQsUUFBUSxFQUFFO1FBQU8sQ0FBRTtRQUFBUCxRQUFBLEVBQUM7TUFBYztRQUFBVSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBSSxDQUFDLGVBQ3BFZixvRUFBQTtRQUFHUSxLQUFLLEVBQUU7VUFBRWUsS0FBSyxFQUFFLE1BQU07VUFBRUMsTUFBTSxFQUFFO1FBQU8sQ0FBRTtRQUFBdEIsUUFBQSxnQkFBQ0Ysb0VBQUE7VUFBQUUsUUFBQSxFQUFRO1FBQStCO1VBQUFVLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFRLENBQUMsd0JBQW9CO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUcsQ0FBQyxlQUNySGYsb0VBQUEsQ0FBQ3hCLE1BQU07UUFBQ2lELE9BQU8sRUFBRTNCLFNBQVU7UUFBQUksUUFBQSxlQUFDRixvRUFBQTtVQUFBRSxRQUFBLEVBQVE7UUFBUztVQUFBVSxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBUTtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFRLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDckQsQ0FBQyxFQUVacEIsV0FBVyxpQkFDVkssb0VBQUEsQ0FBQ3JCLFlBQVk7TUFBQzhDLE9BQU8sRUFBRTFCLFVBQVc7TUFBQUcsUUFBQSxlQUNoQ0Ysb0VBQUEsQ0FBQ25CLFlBQVk7UUFBQzRDLE9BQU8sRUFBRUMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGVBQWUsQ0FBQyxDQUFFO1FBQUF6QixRQUFBLGdCQUM5Q0Ysb0VBQUEsQ0FBQ2pCLFdBQVc7VUFBQzBDLE9BQU8sRUFBRTFCLFVBQVc7VUFBQUcsUUFBQSxFQUFDO1FBQU87VUFBQVUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQWEsQ0FBQyxlQUN2RGYsb0VBQUE7VUFBQUUsUUFBQSxFQUFJO1FBQVc7VUFBQVUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUksQ0FBQyxlQUNwQmYsb0VBQUE7VUFBQUUsUUFBQSxnQkFDRUYsb0VBQUEsQ0FBQ2YsU0FBUztZQUFBaUIsUUFBQSxnQkFDUkYsb0VBQUE7Y0FBQUUsUUFBQSxFQUFPO1lBQUs7Y0FBQVUsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQU8sQ0FBQyxlQUNwQmYsb0VBQUEsQ0FBQ2IsS0FBSztjQUFDeUMsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsUUFBUTtjQUFDQyxXQUFXLEVBQUM7WUFBVztjQUFBbkIsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQUUsQ0FBQztVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUN6RCxDQUFDLGVBQ1pmLG9FQUFBLENBQUNmLFNBQVM7WUFBQWlCLFFBQUEsZ0JBQ1JGLG9FQUFBO2NBQUFFLFFBQUEsRUFBTztZQUFjO2NBQUFVLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxZQUFPLENBQUMsZUFDN0JmLG9FQUFBLENBQUNiLEtBQUs7Y0FBQ3lDLElBQUksRUFBQyxLQUFLO2NBQUNDLElBQUksRUFBQyxRQUFRO2NBQUNDLFFBQVE7WUFBQTtjQUFBbEIsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQUUsQ0FBQztVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNsQyxDQUFDLGVBQ1pmLG9FQUFBLENBQUNmLFNBQVM7WUFBQWlCLFFBQUEsZ0JBQ1JGLG9FQUFBO2NBQUFFLFFBQUEsRUFBTztZQUFTO2NBQUFVLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxZQUFPLENBQUMsZUFDeEJmLG9FQUFBLENBQUNiLEtBQUs7Y0FBQ3lDLElBQUksRUFBQyxPQUFPO2NBQUNDLElBQUksRUFBQyxPQUFPO2NBQUNDLFFBQVE7WUFBQTtjQUFBbEIsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQUUsQ0FBQztVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNuQyxDQUFDLGVBQ1pmLG9FQUFBLENBQUNmLFNBQVM7WUFBQWlCLFFBQUEsZ0JBQ1JGLG9FQUFBO2NBQUFFLFFBQUEsRUFBTztZQUFRO2NBQUFVLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxZQUFPLENBQUMsZUFDdkJmLG9FQUFBLENBQUNWLFFBQVE7Y0FBQ3VDLElBQUksRUFBQyxTQUFTO2NBQUNHLElBQUksRUFBQyxHQUFHO2NBQUNGLFFBQVE7WUFBQTtjQUFBbEIsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQUUsQ0FBQztVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNwQyxDQUFDLGVBQ1pmLG9FQUFBLENBQUN4QixNQUFNO1lBQUNvRCxJQUFJLEVBQUMsUUFBUTtZQUFBMUIsUUFBQSxFQUFDO1VBQU07WUFBQVUsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQVEsQ0FBQztRQUFBO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNqQyxDQUFDO01BQUE7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0s7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDSCxDQUNmO0VBQUEsZUFDRCxDQUFDO0FBRVAsQ0FBQztBQUFDckIsRUFBQSxDQXJGSUQsWUFBWTtBQUFBd0MsSUFBQSxHQUFaeEMsWUFBWTtBQXVGSEEsMkVBQVksRUFBQztBQUFBLElBQUEvQixFQUFBLEVBQUFHLEdBQUEsRUFBQUUsR0FBQSxFQUFBRSxHQUFBLEVBQUFHLEdBQUEsRUFBQUcsR0FBQSxFQUFBRyxHQUFBLEVBQUFFLEdBQUEsRUFBQUUsR0FBQSxFQUFBRSxJQUFBLEVBQUFFLElBQUEsRUFBQUcsSUFBQSxFQUFBRyxJQUFBLEVBQUF5QyxJQUFBO0FBQUFDLFlBQUEsQ0FBQXhFLEVBQUE7QUFBQXdFLFlBQUEsQ0FBQXJFLEdBQUE7QUFBQXFFLFlBQUEsQ0FBQW5FLEdBQUE7QUFBQW1FLFlBQUEsQ0FBQWpFLEdBQUE7QUFBQWlFLFlBQUEsQ0FBQTlELEdBQUE7QUFBQThELFlBQUEsQ0FBQTNELEdBQUE7QUFBQTJELFlBQUEsQ0FBQXhELEdBQUE7QUFBQXdELFlBQUEsQ0FBQXRELEdBQUE7QUFBQXNELFlBQUEsQ0FBQXBELEdBQUE7QUFBQW9ELFlBQUEsQ0FBQWxELElBQUE7QUFBQWtELFlBQUEsQ0FBQWhELElBQUE7QUFBQWdELFlBQUEsQ0FBQTdDLElBQUE7QUFBQTZDLFlBQUEsQ0FBQTFDLElBQUE7QUFBQTBDLFlBQUEsQ0FBQUQsSUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MjhjZTU1YmIzYzFjNDU1ODc2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBMb3R0aWUgZnJvbSAnbG90dGllLXJlYWN0JztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCBhbmltYXRpb24xIGZyb20gJy4vLi4vTG90dGllL3dvcmsuanNvbic7IFxyXG5pbXBvcnQgYW5pbWF0aW9uMiBmcm9tICcuLy4uL0xvdHRpZS9uZXhhci5qc29uJztcclxuaW1wb3J0IGFuaW1hdGlvbjMgZnJvbSAnLi8uLi9Mb3R0aWUvd29ya3MuanNvbic7XHJcblxyXG5jb25zdCBDVEFTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBSZXF1aXJlZCBmb3IgdGhlIG92ZXJsYXkgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNjZweDtcclxuICBjb2xvcjogd2hpdGU7IC8qIFRleHQgY29sb3IgZm9yIHZpc2liaWxpdHkgb24gZGFyayBiYWNrZ3JvdW5kICovXHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgncmJnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIC8qIE92ZXJsYXkgKi9cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEFkanVzdCB0aGUgb3BhY2l0eSBhcyBuZWVkZWQgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDY2cHg7IC8qIE1hdGNoIHRoZSBib3JkZXItcmFkaXVzICovXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgYWJvdmUgdGhlIG92ZXJsYXkgKi9cclxuICAqIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBBbGxvd3Mgd3JhcHBpbmcgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvdHRpZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgdW5pZm9ybWl0eSAqL1xyXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXIgdGhlIGFuaW1hdGlvbiAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ1RBSGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6IDQuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IGdyYXk7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIERhcmtlciBzaGFkZSBvbiBob3ZlciAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5gO1xyXG5cclxuY29uc3QgTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAyZjJmO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBSZWxhdGl2ZSBmb3IgY2xvc2UgYnV0dG9uIHBvc2l0aW9uaW5nICovXHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtRmllbGQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFRleHRBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKHRydWUpO1xyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENUQVNlY3Rpb24gaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX0+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiAnNjlweCcsIG1hcmdpbkJvdHRvbTogJzYwcHgnLCBmb250U3R5bGU6ICdpdGFsaWMnIH19PldoYXQncyBOZXc8L2gxPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiAnODAlJywgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICBBdWdtZW50ZWQgUmVhbGl0eSAoQVIpIGludGVncmF0ZXMgZGlnaXRhbCBpbmZvcm1hdGlvbiB3aXRoIHRoZSByZWFsIHdvcmxkLCBlbmhhbmNpbmcgdXNlciBleHBlcmllbmNlcy5cclxuICAgICAgICAgIEl0IG92ZXJsYXlzIGltYWdlcywgdmlkZW9zLCBvciAzRCBtb2RlbHMgb250byB0aGUgcGh5c2ljYWwgZW52aXJvbm1lbnQgaW4gcmVhbC10aW1lLiBBUiBpcyB1dGlsaXplZCBpbiBcclxuICAgICAgICAgIHNtYXJ0cGhvbmVzLCB0YWJsZXRzLCBhbmQgc21hcnQgZ2xhc3Nlcywgb2ZmZXJpbmcgYXBwbGljYXRpb25zIGluIGdhbWluZywgbmF2aWdhdGlvbiwgZWR1Y2F0aW9uLCBcclxuICAgICAgICAgIGFuZCByZXRhaWwuIEl0IHJlbGllcyBvbiBzZW5zb3JzLCBjYW1lcmFzLCBhbmQgY29tcHV0ZXIgdmlzaW9uIHRvIHRyYWNrIG9iamVjdHMgYW5kIHByb3ZpZGUgaW50ZXJhY3RpdmUgXHJcbiAgICAgICAgICBjb250ZW50LiBDaGFsbGVuZ2VzIGluY2x1ZGUgaGFyZHdhcmUgbGltaXRhdGlvbnMgYW5kIGNvbnRlbnQgY3JlYXRpb24gY29tcGxleGl0aWVzLiBcclxuICAgICAgICAgIEFSJ3Mgb25nb2luZyBldm9sdXRpb24gaG9sZHMgcHJvbWlzZSBmb3IgZGl2ZXJzZSBpbmR1c3RyaWVzXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8U2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPENUQUhlYWRpbmc+bmV4QVI8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICAgIDxMb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24yfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+THVtaW5leGEgVGVjaG5vbG9naWVzIGRldmVsb3BlZCBpbWFnZSB0cmFja2luZyB2aXJ0dWFsIHNvZnR3YXJlIGJhc2VkIG9uIEF1Z21lbnRlZCBSZWFsaXR5IGFuZCBNaXhlZCBSZWFsaXR5LCBuYW1lZCBpdCBuZXhBUi48L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxDVEFIZWFkaW5nPkhvdzwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgICAgPExvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjF9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvTG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5uZXhBUiBpcyBhIFdlYkFSIHNvbHV0aW9uIHRoYXQgZGlzcGxheXMgY29udGVudCBsaWtlIDNEIG1vZGVscywgaG9sb2dyYXBoaWMgYXZhdGFycywgdmlkZW9zLCBpbWFnZXMsIGF1ZGlvLCBhbmQgbGlua3Mgd2hlbiB0aGUgbmV4QVIgY2FtZXJhIGlzIHBvaW50ZWQgYXQgYSAyRCBzdXJmYWNlLjwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPENUQUhlYWRpbmc+V29ya3M8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICAgIDxMb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24zfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+bmV4QVIgcmVxdWlyZXMgbm8gYWRkaXRpb25hbCBhcHAgaW5zdGFsbGF0aW9ucyBhbmQgd29ya3Mgc2VhbWxlc3NseSBvbiBhbGwgc21hcnRwaG9uZXMsIHdoZXRoZXIgQW5kcm9pZCBvciBpT1MuPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uc0NvbnRhaW5lcj5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luOiAnMTlweCcgfX0+PHN0cm9uZz5EaWZmZXJlbnRpYXRlIDwvc3Ryb25nPiB5b3Vyc2VsZiBmcm9tIGNvbXBldGl0aW9uPC9wPlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICc4MHB4JyB9fT5TcGFyayBhIFRyZW5kITwvaDE+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmF5JywgbWFyZ2luOiAnMTlweCcgfX0+PHN0cm9uZz4jbmV4QVIgI0F1Z21lbnRlZFJlYWxpdHkgI3dlYkFSPC9zdHJvbmc+IElubm92YXRpdmUgU29sdXRpb248L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PjxzdHJvbmc+Qm9vayBEZW1vPC9zdHJvbmc+PC9CdXR0b24+IFxyXG4gICAgICA8L0NUQVNlY3Rpb24+XHJcblxyXG4gICAgICB7aXNNb2RhbE9wZW4gJiYgKFxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgb25DbGljaz17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICA8TW9kYWxDb250ZW50IG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfT4mdGltZXM7PC9DbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPGgyPkJvb2sgYSBEZW1vPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiSm9obiBXaWNrXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk1vYmlsZSBOdW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cIm1vYmlsZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbCBJRDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5NZXNzYWdlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiNFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgIDwvTW9kYWxPdmVybGF5PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
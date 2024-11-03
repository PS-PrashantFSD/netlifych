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
  border-radius: 36px;
  max-width: 400px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative; /* Relative for close button positioning */
`;
_c9 = ModalContent;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;
_c10 = CloseButton;
const FormField = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-bottom: 10px;
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
const FormButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  padding: 15px 30px; /* Adjust padding as needed */
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 36px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px; /* Adjust margin to reduce gap */
  width: 100%; /* Full width for better alignment */

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;
_c14 = FormButton;
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
        lineNumber: 191,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
        style: {
          width: '80%',
          marginBottom: '20px'
        },
        children: "Augmented Reality (AR) integrates digital information with the real world, enhancing user experiences. It overlays images, videos, or 3D models onto the physical environment in real-time. AR is utilized in smartphones, tablets, and smart glasses, offering applications in gaming, navigation, education, and retail. It relies on sensors, cameras, and computer vision to track objects and provide interactive content. Challenges include hardware limitations and content creation complexities. AR's ongoing evolution holds promise for diverse industries"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(SectionsContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "nexAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "How"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
            children: "Works"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
              animationData: _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__,
              loop: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
              children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
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
          lineNumber: 232,
          columnNumber: 55
        }, undefined), " yourself from competition"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
        style: {
          color: 'white',
          fontSize: '80px'
        },
        children: "Spark a Trend!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
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
          lineNumber: 234,
          columnNumber: 54
        }, undefined), " Innovative Solution"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Button, {
        onClick: openModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
          children: "Book Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 37
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
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
          lineNumber: 241,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
          style: {
            fontSize: '30px',
            marginBottom: '20px'
          },
          children: "Book a Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "text",
              name: "name",
              required: true,
              placeholder: "John Wick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Mobile Number:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "tel",
              name: "mobile",
              required: true,
              placeholder: "08660449970"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Email ID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Input, {
              type: "email",
              name: "email",
              required: true,
              placeholder: "info@luminexa.in"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
              children: "Message:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(TextArea, {
              name: "message",
              rows: "4",
              required: true,
              placeholder: "I would like to request a demo session for the nexAR product."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormButton, {
            type: "submit",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};
_s(CallToAction, "o+ymuZc6VVdUpCAroHabBGZ51VI=");
_c15 = CallToAction;
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
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
$RefreshReg$(_c14, "FormButton");
$RefreshReg$(_c15, "CallToAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiTG90dGllQ29udGFpbmVyIiwiX2M0IiwiQ1RBSGVhZGluZyIsImgyIiwiX2M1IiwiQ1RBRGVzY3JpcHRpb24iLCJwIiwiX2M2IiwiQnV0dG9uIiwiYnV0dG9uIiwiX2M3IiwiTW9kYWxPdmVybGF5IiwiX2M4IiwiTW9kYWxDb250ZW50IiwiX2M5IiwiQ2xvc2VCdXR0b24iLCJfYzEwIiwiRm9ybUZpZWxkIiwiX2MxMSIsIklucHV0IiwiaW5wdXQiLCJfYzEyIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIl9jMTMiLCJGb3JtQnV0dG9uIiwiX2MxNCIsIkNhbGxUb0FjdGlvbiIsIl9zIiwiaXNNb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJ1c2VTdGF0ZSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJfanN4REVWIiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzdHlsZSIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZm9udFN0eWxlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwid2lkdGgiLCJMb3R0aWUiLCJhbmltYXRpb25EYXRhIiwiYW5pbWF0aW9uMiIsImxvb3AiLCJhbmltYXRpb24xIiwiYW5pbWF0aW9uMyIsImNvbG9yIiwibWFyZ2luIiwib25DbGljayIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0eXBlIiwibmFtZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwiX2MxNSIsIiRS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QUFBLENBQUExRCxHQUFBO0FBQUEwRCxZQUFBLENBQUF4RCxHQUFBO0FBQUF3RCxZQUFBLENBQUF0RCxHQUFBO0FBQUFzRCxZQUFBLENBQUFwRCxJQUFBO0FBQUFvRCxZQUFBLENBQUFsRCxJQUFBO0FBQUFrRCxZQUFBLENBQUEvQyxJQUFBO0FBQUErQyxZQUFBLENBQUE1QyxJQUFBO0FBQUE0QyxZQUFBLENBQUExQyxJQUFBO0FBQUEwQyxZQUFBLENBQUFELElBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzEwMTQ4MmQwYTFkZTU4Mjc4YzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgTG90dGllIGZyb20gJ2xvdHRpZS1yZWFjdCc7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5pbXBvcnQgYW5pbWF0aW9uMSBmcm9tICcuLy4uL0xvdHRpZS93b3JrLmpzb24nOyBcclxuaW1wb3J0IGFuaW1hdGlvbjIgZnJvbSAnLi8uLi9Mb3R0aWUvbmV4YXIuanNvbic7XHJcbmltcG9ydCBhbmltYXRpb24zIGZyb20gJy4vLi4vTG90dGllL3dvcmtzLmpzb24nO1xyXG5cclxuY29uc3QgQ1RBU2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogUmVxdWlyZWQgZm9yIHRoZSBvdmVybGF5ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDY2cHg7XHJcbiAgY29sb3I6IHdoaXRlOyAvKiBUZXh0IGNvbG9yIGZvciB2aXNpYmlsaXR5IG9uIGRhcmsgYmFja2dyb3VuZCAqL1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3JiZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAvKiBPdmVybGF5ICovXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBBZGp1c3QgdGhlIG9wYWNpdHkgYXMgbmVlZGVkICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2NnB4OyAvKiBNYXRjaCB0aGUgYm9yZGVyLXJhZGl1cyAqL1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGFib3ZlIHRoZSBvdmVybGF5ICovXHJcbiAgKiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3dzIHdyYXBwaW5nIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb3R0aWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4OyAvKiBGaXhlZCBoZWlnaHQgZm9yIHVuaWZvcm1pdHkgKi9cclxuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBhbmltYXRpb24gKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENUQUhlYWRpbmcgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiA0Ljc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgQ1RBRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgb24gaG92ZXIgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNb2RhbE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDtcclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmYyZjtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBSZWxhdGl2ZSBmb3IgY2xvc2UgYnV0dG9uIHBvc2l0aW9uaW5nICovXHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUZpZWxkID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBhZGRpbmc6IDE1cHggMzBweDsgLyogQWRqdXN0IHBhZGRpbmcgYXMgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMTBweDsgLyogQWRqdXN0IG1hcmdpbiB0byByZWR1Y2UgZ2FwICovXHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggZm9yIGJldHRlciBhbGlnbm1lbnQgKi9cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgb24gaG92ZXIgKi9cclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKHRydWUpO1xyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENUQVNlY3Rpb24gaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX0+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiAnNjlweCcsIG1hcmdpbkJvdHRvbTogJzYwcHgnLCBmb250U3R5bGU6ICdpdGFsaWMnIH19PldoYXQncyBOZXc8L2gxPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiAnODAlJywgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICBBdWdtZW50ZWQgUmVhbGl0eSAoQVIpIGludGVncmF0ZXMgZGlnaXRhbCBpbmZvcm1hdGlvbiB3aXRoIHRoZSByZWFsIHdvcmxkLCBlbmhhbmNpbmcgdXNlciBleHBlcmllbmNlcy5cclxuICAgICAgICAgIEl0IG92ZXJsYXlzIGltYWdlcywgdmlkZW9zLCBvciAzRCBtb2RlbHMgb250byB0aGUgcGh5c2ljYWwgZW52aXJvbm1lbnQgaW4gcmVhbC10aW1lLiBBUiBpcyB1dGlsaXplZCBpbiBcclxuICAgICAgICAgIHNtYXJ0cGhvbmVzLCB0YWJsZXRzLCBhbmQgc21hcnQgZ2xhc3Nlcywgb2ZmZXJpbmcgYXBwbGljYXRpb25zIGluIGdhbWluZywgbmF2aWdhdGlvbiwgZWR1Y2F0aW9uLCBcclxuICAgICAgICAgIGFuZCByZXRhaWwuIEl0IHJlbGllcyBvbiBzZW5zb3JzLCBjYW1lcmFzLCBhbmQgY29tcHV0ZXIgdmlzaW9uIHRvIHRyYWNrIG9iamVjdHMgYW5kIHByb3ZpZGUgaW50ZXJhY3RpdmUgXHJcbiAgICAgICAgICBjb250ZW50LiBDaGFsbGVuZ2VzIGluY2x1ZGUgaGFyZHdhcmUgbGltaXRhdGlvbnMgYW5kIGNvbnRlbnQgY3JlYXRpb24gY29tcGxleGl0aWVzLiBcclxuICAgICAgICAgIEFSJ3Mgb25nb2luZyBldm9sdXRpb24gaG9sZHMgcHJvbWlzZSBmb3IgZGl2ZXJzZSBpbmR1c3RyaWVzXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8U2VjdGlvbnNDb250YWluZXI+XHJcbiAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPENUQUhlYWRpbmc+bmV4QVI8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICAgIDxMb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24yfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+THVtaW5leGEgVGVjaG5vbG9naWVzIGRldmVsb3BlZCBpbWFnZSB0cmFja2luZyB2aXJ0dWFsIHNvZnR3YXJlIGJhc2VkIG9uIEF1Z21lbnRlZCBSZWFsaXR5IGFuZCBNaXhlZCBSZWFsaXR5LCBuYW1lZCBpdCBuZXhBUi48L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxDVEFIZWFkaW5nPkhvdzwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgICAgPExvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjF9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvTG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5uZXhBUiBpcyBhIFdlYkFSIHNvbHV0aW9uIHRoYXQgZGlzcGxheXMgY29udGVudCBsaWtlIDNEIG1vZGVscywgaG9sb2dyYXBoaWMgYXZhdGFycywgdmlkZW9zLCBpbWFnZXMsIGF1ZGlvLCBhbmQgbGlua3Mgd2hlbiB0aGUgbmV4QVIgY2FtZXJhIGlzIHBvaW50ZWQgYXQgYSAyRCBzdXJmYWNlLjwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPENUQUhlYWRpbmc+V29ya3M8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICAgIDxMb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXthbmltYXRpb24zfSBsb29wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+bmV4QVIgcmVxdWlyZXMgbm8gYWRkaXRpb25hbCBhcHAgaW5zdGFsbGF0aW9ucyBhbmQgd29ya3Mgc2VhbWxlc3NseSBvbiBhbGwgc21hcnRwaG9uZXMsIHdoZXRoZXIgQW5kcm9pZCBvciBpT1MuPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uc0NvbnRhaW5lcj5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luOiAnMTlweCcgfX0+PHN0cm9uZz5EaWZmZXJlbnRpYXRlIDwvc3Ryb25nPiB5b3Vyc2VsZiBmcm9tIGNvbXBldGl0aW9uPC9wPlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICc4MHB4JyB9fT5TcGFyayBhIFRyZW5kITwvaDE+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmF5JywgbWFyZ2luOiAnMTlweCcgfX0+PHN0cm9uZz4jbmV4QVIgI0F1Z21lbnRlZFJlYWxpdHkgI3dlYkFSPC9zdHJvbmc+IElubm92YXRpdmUgU29sdXRpb248L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PjxzdHJvbmc+Qm9vayBEZW1vPC9zdHJvbmc+PC9CdXR0b24+IFxyXG4gICAgICA8L0NUQVNlY3Rpb24+XHJcblxyXG4gICAgICB7aXNNb2RhbE9wZW4gJiYgKFxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgb25DbGljaz17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICA8TW9kYWxDb250ZW50IG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfT4mdGltZXM7PC9DbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICczMHB4JywgbWFyZ2luQm90dG9tOiAnMjBweCd9fT5Cb29rIGEgRGVtbzwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkpvaG4gV2lja1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Nb2JpbGUgTnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJtb2JpbGVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIjA4NjYwNDQ5OTcwXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWwgSUQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cImluZm9AbHVtaW5leGEuaW5cIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5NZXNzYWdlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiNFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiSSB3b3VsZCBsaWtlIHRvIHJlcXVlc3QgYSBkZW1vIHNlc3Npb24gZm9yIHRoZSBuZXhBUiBwcm9kdWN0LlwiLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L01vZGFsQ29udGVudD5cclxuICAgICAgICA8L01vZGFsT3ZlcmxheT5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
  background-color: Black;
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
          style: {
            fontSize: '30px'
          },
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
              required: true,
              placeholder: "08660449970"
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
              required: true,
              placeholder: "info@luminexa.in"
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
              required: true,
              placeholder: "I would like to request a demo session for the nexAR product."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaXNjL05leGFyLmpzeCJdLCJuYW1lcyI6WyJDVEFTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsIl9jIiwiU2VjdGlvbnNDb250YWluZXIiLCJkaXYiLCJfYzIiLCJTZWN0aW9uIiwiX2MzIiwiTG90dGllQ29udGFpbmVyIiwiX2M0IiwiQ1RBSGVhZGluZyIsImgyIiwiX2M1IiwiQ1RBRGVzY3JpcHRpb24iLCJwIiwiX2M2IiwiQnV0dG9uIiwiYnV0dG9uIiwiX2M3IiwiTW9kYWxPdmVybGF5IiwiX2M4IiwiTW9kYWxDb250ZW50IiwiX2M5IiwiQ2xvc2VCdXR0b24iLCJfYzEwIiwiRm9ybUZpZWxkIiwiX2MxMSIsIklucHV0IiwiaW5wdXQiLCJfYzEyIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIl9jMTMiLCJDYWxsVG9BY3Rpb24iLCJfcyIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidXNlU3RhdGUiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiX2pzeERFViIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIndpZHRoIiwiTG90dGllIiwiYW5pbWF0aW9uRGF0YSIsImFuaW1hdGlvbjIiLCJsb29wIiwiYW5pbWF0aW9uMSIsImFuaW1hdGlvbjMiLCJjb2xvciIsIm1hcmdpbiIsIm9uQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwicm93cyIsIl9jMTQiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGlu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Yy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE4ZWZmODliNDZjMmVmZGMwOGY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IExvdHRpZSBmcm9tICdsb3R0aWUtcmVhY3QnO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuaW1wb3J0IGFuaW1hdGlvbjEgZnJvbSAnLi8uLi9Mb3R0aWUvd29yay5qc29uJzsgXHJcbmltcG9ydCBhbmltYXRpb24yIGZyb20gJy4vLi4vTG90dGllL25leGFyLmpzb24nO1xyXG5pbXBvcnQgYW5pbWF0aW9uMyBmcm9tICcuLy4uL0xvdHRpZS93b3Jrcy5qc29uJztcclxuXHJcbmNvbnN0IENUQVNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFJlcXVpcmVkIGZvciB0aGUgb3ZlcmxheSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxuICBib3JkZXItcmFkaXVzOiA2NnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgLyogVGV4dCBjb2xvciBmb3IgdmlzaWJpbGl0eSBvbiBkYXJrIGJhY2tncm91bmQgKi9cclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdyYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgLyogT3ZlcmxheSAqL1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQWRqdXN0IHRoZSBvcGFjaXR5IGFzIG5lZWRlZCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjZweDsgLyogTWF0Y2ggdGhlIGJvcmRlci1yYWRpdXMgKi9cclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAvKiBFbnN1cmVzIHRleHQgYXBwZWFycyBhYm92ZSB0aGUgb3ZlcmxheSAqL1xyXG4gICoge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7IC8qIEFsbG93cyB3cmFwcGluZyBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG90dGllQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxNjBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciB1bmlmb3JtaXR5ICovXHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgYW5pbWF0aW9uICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDVEFIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogNC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IENUQURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcGFkZGluZzogMjBweCA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMzsgLyogRGFya2VyIHNoYWRlIG9uIGhvdmVyICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTW9kYWxPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbmA7XHJcblxyXG5jb25zdCBNb2RhbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IEJsYWNrO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFJlbGF0aXZlIGZvciBjbG9zZSBidXR0b24gcG9zaXRpb25pbmcgKi9cclxuYDtcclxuXHJcbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1GaWVsZCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dEFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbmA7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbihmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q1RBU2VjdGlvbiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fT5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICc2OXB4JywgbWFyZ2luQm90dG9tOiAnNjBweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+V2hhdCdzIE5ldzwvaDE+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cclxuICAgICAgICAgIEF1Z21lbnRlZCBSZWFsaXR5IChBUikgaW50ZWdyYXRlcyBkaWdpdGFsIGluZm9ybWF0aW9uIHdpdGggdGhlIHJlYWwgd29ybGQsIGVuaGFuY2luZyB1c2VyIGV4cGVyaWVuY2VzLlxyXG4gICAgICAgICAgSXQgb3ZlcmxheXMgaW1hZ2VzLCB2aWRlb3MsIG9yIDNEIG1vZGVscyBvbnRvIHRoZSBwaHlzaWNhbCBlbnZpcm9ubWVudCBpbiByZWFsLXRpbWUuIEFSIGlzIHV0aWxpemVkIGluIFxyXG4gICAgICAgICAgc21hcnRwaG9uZXMsIHRhYmxldHMsIGFuZCBzbWFydCBnbGFzc2VzLCBvZmZlcmluZyBhcHBsaWNhdGlvbnMgaW4gZ2FtaW5nLCBuYXZpZ2F0aW9uLCBlZHVjYXRpb24sIFxyXG4gICAgICAgICAgYW5kIHJldGFpbC4gSXQgcmVsaWVzIG9uIHNlbnNvcnMsIGNhbWVyYXMsIGFuZCBjb21wdXRlciB2aXNpb24gdG8gdHJhY2sgb2JqZWN0cyBhbmQgcHJvdmlkZSBpbnRlcmFjdGl2ZSBcclxuICAgICAgICAgIGNvbnRlbnQuIENoYWxsZW5nZXMgaW5jbHVkZSBoYXJkd2FyZSBsaW1pdGF0aW9ucyBhbmQgY29udGVudCBjcmVhdGlvbiBjb21wbGV4aXRpZXMuIFxyXG4gICAgICAgICAgQVIncyBvbmdvaW5nIGV2b2x1dGlvbiBob2xkcyBwcm9taXNlIGZvciBkaXZlcnNlIGluZHVzdHJpZXNcclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxTZWN0aW9uc0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8Q1RBSGVhZGluZz5uZXhBUjwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgICAgPExvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjJ9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvTG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5MdW1pbmV4YSBUZWNobm9sb2dpZXMgZGV2ZWxvcGVkIGltYWdlIHRyYWNraW5nIHZpcnR1YWwgc29mdHdhcmUgYmFzZWQgb24gQXVnbWVudGVkIFJlYWxpdHkgYW5kIE1peGVkIFJlYWxpdHksIG5hbWVkIGl0IG5leEFSLjwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPENUQUhlYWRpbmc+SG93PC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgICA8TG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uMX0gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9Mb3R0aWVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPm5leEFSIGlzIGEgV2ViQVIgc29sdXRpb24gdGhhdCBkaXNwbGF5cyBjb250ZW50IGxpa2UgM0QgbW9kZWxzLCBob2xvZ3JhcGhpYyBhdmF0YXJzLCB2aWRlb3MsIGltYWdlcywgYXVkaW8sIGFuZCBsaW5rcyB3aGVuIHRoZSBuZXhBUiBjYW1lcmEgaXMgcG9pbnRlZCBhdCBhIDJEIHN1cmZhY2UuPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8Q1RBSGVhZGluZz5Xb3JrczwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgICAgPExvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjN9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvTG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5uZXhBUiByZXF1aXJlcyBubyBhZGRpdGlvbmFsIGFwcCBpbnN0YWxsYXRpb25zIGFuZCB3b3JrcyBzZWFtbGVzc2x5IG9uIGFsbCBzbWFydHBob25lcywgd2hldGhlciBBbmRyb2lkIG9yIGlPUy48L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW46ICcxOXB4JyB9fT48c3Ryb25nPkRpZmZlcmVudGlhdGUgPC9zdHJvbmc+IHlvdXJzZWxmIGZyb20gY29tcGV0aXRpb248L3A+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzgwcHgnIH19PlNwYXJrIGEgVHJlbmQhPC9oMT5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyYXknLCBtYXJnaW46ICcxOXB4JyB9fT48c3Ryb25nPiNuZXhBUiAjQXVnbWVudGVkUmVhbGl0eSAjd2ViQVI8L3N0cm9uZz4gSW5ub3ZhdGl2ZSBTb2x1dGlvbjwvcD5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbH0+PHN0cm9uZz5Cb29rIERlbW88L3N0cm9uZz48L0J1dHRvbj4gXHJcbiAgICAgIDwvQ1RBU2VjdGlvbj5cclxuXHJcbiAgICAgIHtpc01vZGFsT3BlbiAmJiAoXHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSBvbkNsaWNrPXtjbG9zZU1vZGFsfT5cclxuICAgICAgICAgIDxNb2RhbENvbnRlbnQgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PiZ0aW1lczs8L0Nsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogJzMwcHgnfX0+Qm9vayBhIERlbW88L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJKb2huIFdpY2tcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlIE51bWJlcjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwibW9iaWxlXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCIwODY2MDQ0OTk3MFwiLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIElEOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJpbmZvQGx1bWluZXhhLmluXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TWVzc2FnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhIG5hbWU9XCJtZXNzYWdlXCIgcm93cz1cIjRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkkgd291bGQgbGlrZSB0byByZXF1ZXN0IGEgZGVtbyBzZXNzaW9uIGZvciB0aGUgbmV4QVIgcHJvZHVjdC5cIi8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgIDwvTW9kYWxPdmVybGF5PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
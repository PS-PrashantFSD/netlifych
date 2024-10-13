module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/terms.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AnimateOnScreen/AnimateOnScreen.jsx":
/*!********************************************************!*\
  !*** ./components/AnimateOnScreen/AnimateOnScreen.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);



const transition = {
  delay: 0.3,
  translateY: {
    duration: 1,
    ease: [0, 0.7, 0.29, 0.97]
  },
  opacity: {
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};
const variants = {
  show: {
    translateY: 0,
    opacity: 1
  },
  hidden: {
    translateY: 60,
    opacity: 0
  }
};
const AnimateOnScreen = ({
  children: childrenProp
}) => {
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])();
  const [inViewRef, inView] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"])({
    triggerOnce: true
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [animation, inView, inViewRef]);
  const children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child)) {
      return null;
    }
    const handleRef = node => {
      // Keep your own reference
      inViewRef(node);

      // Call the original ref, if any
      const {
        ref
      } = child;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== null) {
        ref.current = node;
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      variants,
      transition,
      animate: animation,
      initial: 'hidden',
      ref: handleRef
    });
  });
  return children;
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AnimateOnScreen));

/***/ }),

/***/ "./components/AnimateOnScreen/index.js":
/*!*********************************************!*\
  !*** ./components/AnimateOnScreen/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimateOnScreen */ "./components/AnimateOnScreen/AnimateOnScreen.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Contacts/Contacts.jsx":
/*!***********************************************!*\
  !*** ./components/Home/Contacts/Contacts.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SocialMedia */ "./components/SocialMedia/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/Contacts/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Contacts\\Contacts.jsx";






const Contact = () => {
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["ContactSection"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          className: "contact-text",
          href: "tel:+1.902.417.0634",
          onMouseEnter: addCursorBorder,
          onMouseLeave: removeCursorBorder,
          children: "+91.866.044.9970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          className: "contact-text",
          href: "mailto:info@furrow.studio",
          onMouseEnter: addCursorBorder,
          onMouseLeave: removeCursorBorder,
          children: "info@luminexa.in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("address", {
        className: "column contact-text",
        children: ["14 1st Stage Bhanashankari", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 37
        }, undefined), " Bangalore, KA IN"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_SocialMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "column"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Contact));

/***/ }),

/***/ "./components/Home/Contacts/index.js":
/*!*******************************************!*\
  !*** ./components/Home/Contacts/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contacts */ "./components/Home/Contacts/Contacts.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Contacts__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Contacts/styles.js":
/*!********************************************!*\
  !*** ./components/Home/Contacts/styles.js ***!
  \********************************************/
/*! exports provided: ContactSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSection", function() { return ContactSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");




const ContactSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px 200px;
  color: ${({
  theme
}) => theme.colors.red};
  /* opacity: 1; */
  transform: translate3d(0, 60px, 0);
  /* transition: opacity 1s ease, transform 1s cubic-bezier(0, 0.7, 0.29, 0.97);
  transition-delay: 0.3s; */
  /* will-change: opacity, transform; */
  width: 100%;

  & .column {
    width: 33.333%;

    &:last-child {
      justify-content: flex-end;
    }

    & a:hover {
      color: ${({
  theme
}) => theme.text};
    }
  }

  & .contact-text {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
    line-height: 28px;
    display: inline-block;
  }

  & address {
    padding: 0 8px;
  }

  ${({
  theme
}) => theme.breakpoints.medium`
    & .column {
      width: 41.666%;

      &:last-child {
        width: 16.666%;
      }
    }
  `};

  ${({
  theme
}) => theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    & .column {
      width: 100%;

      &:last-child {
        width: 100%;
        justify-content: flex-start;
        padding: 1px 0;
      }
    }

    & address {
      padding: 0;
    }
  `};

  ${({
  theme
}) => theme.breakpoints.tablet`
    padding: 0 0px 60px;

    & address {
      padding: 17px 0 42px;
    }

    & .contact-text {
      font-size: 1.125rem;
      line-height: 21px;
    }
  `};
`;

/***/ }),

/***/ "./components/Home/Terms/Terms.jsx":
/*!*****************************************!*\
  !*** ./components/Home/Terms/Terms.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Home/Terms/styles.js");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Contacts */ "./components/Home/Contacts/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Terms\\Terms.jsx";






const TermsAndConditions = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Wrap"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
          children: "Terms and Conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
          children: "General Terms"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "By accessing and using this website, you agree to comply with the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "If you do not agree to these terms, please do not use our site. We reserve the right to modify these terms at any time, and your continued use of the website following any changes will constitute your acceptance of those changes."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
          children: "Use of the Site"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "The content of the pages of this website is for your general information and use only. It is subject to change without notice. We do not guarantee the accuracy, completeness, or usefulness of this information. You rely on such information at your own risk."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
          children: "Privacy Policy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "Our Privacy Policy sets out how we collect, use, and protect your information when you use our website. We are committed to safeguarding your privacy and ensuring that your personal information is handled responsibly."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "We may collect personal information from you when you use our website, including but not limited to your name, email address, and other contact details. This information will only be used for the purposes outlined in our Privacy Policy."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
          children: "Disclaimer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "The information contained in this website is for general information purposes only. We endeavor to keep the information up to date and correct; however, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
          children: "Governing Law"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
          children: "These terms and conditions are governed by and construed in accordance with the laws of [Your Country], and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [Your Country]."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Contacts__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TermsAndConditions));

/***/ }),

/***/ "./components/Home/Terms/index.js":
/*!****************************************!*\
  !*** ./components/Home/Terms/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Terms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Terms */ "./components/Home/Terms/Terms.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Terms__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Terms/styles.js":
/*!*****************************************!*\
  !*** ./components/Home/Terms/styles.js ***!
  \*****************************************/
/*! exports provided: ContentSection, Wrap, Title, Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrap", function() { return Wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../styles/shared/text */ "./styles/shared/text.js");




const ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  position: relative;
  display: block;
  margin-top: 200px;

  

  ${({
  theme
}) => theme.breakpoints.tablet`
    margin-top: 100px;
  `};
`;
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  margin: 40px 0;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${({
  theme
}) => theme.colors.red};

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }

  ${({
  theme
}) => theme.breakpoints.tablet`
    font-size: 2.5rem;
  `};
`;
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: white;

  ${({
  theme
}) => theme.breakpoints.tablet`
    font-size: 1.2rem;
  `};
`;

/***/ }),

/***/ "./components/Icons/Arrow.jsx":
/*!************************************!*\
  !*** ./components/Icons/Arrow.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/colors */ "./styles/colors.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Arrow.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }



const Arrow = _ref => {
  let {
      fillColor = _styles_colors__WEBPACK_IMPORTED_MODULE_1__["default"].white
    } = _ref,
    props = _objectWithoutProperties(_ref, ["fillColor"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].svg, _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 101 57"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
      d: "M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z",
      fill: fillColor,
      fillRule: "evenodd"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./components/Icons/Facebook.jsx":
/*!***************************************!*\
  !*** ./components/Icons/Facebook.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Facebook.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const Facebook = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 11 24"
}, props), {}, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M3.625 1.236C4.544.346 5.85.044 7.085.006 8.387-.004 9.691.003 10.995.004c.005 1.4.006 2.802 0 4.203-.843-.001-1.687.002-2.53-.001-.534-.034-1.083.378-1.18.918-.013.937-.004 1.875-.004 2.813 1.236.005 2.472-.002 3.708.003a53.297 53.297 0 01-.45 4.05c-1.091.011-2.183 0-3.275.007-.01 4 .005 8-.008 12-1.622.006-3.244-.004-4.866.004-.03-4 .002-8.003-.017-12.004-.791-.008-1.583.006-2.374-.007.003-1.344.001-2.689.001-4.033.791-.01 1.582.002 2.373-.006.024-1.307-.024-2.616.025-3.922.08-1.035.466-2.077 1.226-2.792z",
    fillRule: "nonzero",
    fill: "#EA281E"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 3
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (Facebook);

/***/ }),

/***/ "./components/Icons/Instagram.jsx":
/*!****************************************!*\
  !*** ./components/Icons/Instagram.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Instagram.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const Instagram = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 21 21"
}, props), {}, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
    fill: "#EA281E",
    fillRule: "evenodd",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M10.5 0C7.648 0 7.29.012 6.17.063 5.054.114 4.29.292 3.623.551a5.146 5.146 0 00-1.86 1.211 5.147 5.147 0 00-1.21 1.86C.291 4.29.113 5.053.062 6.171.012 7.29 0 7.648 0 10.5c0 2.852.012 3.21.063 4.33.051 1.117.229 1.88.488 2.548.269.69.628 1.276 1.211 1.86.584.583 1.17.942 1.86 1.21.668.26 1.431.438 2.549.489 1.12.05 1.477.063 4.329.063 2.852 0 3.21-.012 4.33-.063 1.117-.051 1.88-.229 2.548-.488a5.146 5.146 0 001.86-1.211 5.147 5.147 0 001.21-1.86c.26-.668.438-1.431.489-2.549.051-1.12.063-1.477.063-4.329 0-2.852-.012-3.21-.063-4.33-.051-1.117-.229-1.88-.488-2.548a5.147 5.147 0 00-1.211-1.86 5.146 5.146 0 00-1.86-1.21c-.668-.26-1.431-.438-2.549-.489C13.71.012 13.352 0 10.5 0m0 1.892c2.804 0 3.136.01 4.243.061 1.024.047 1.58.218 1.95.362.49.19.84.418 1.207.785.367.368.595.717.785 1.207.144.37.315.926.362 1.95.05 1.107.061 1.44.061 4.243 0 2.804-.01 3.136-.061 4.243-.047 1.024-.218 1.58-.362 1.95-.19.49-.418.84-.785 1.207a3.252 3.252 0 01-1.207.785c-.37.144-.926.315-1.95.362-1.107.05-1.44.061-4.243.061-2.804 0-3.136-.01-4.243-.061-1.024-.047-1.58-.218-1.95-.362-.49-.19-.84-.418-1.207-.785a3.254 3.254 0 01-.785-1.207c-.144-.37-.315-.926-.362-1.95-.05-1.107-.061-1.44-.061-4.243 0-2.804.01-3.136.061-4.243.047-1.024.218-1.58.362-1.95.19-.49.418-.84.785-1.207a3.253 3.253 0 011.207-.785c.37-.144.926-.315 1.95-.362 1.107-.05 1.44-.061 4.243-.061"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M10.5 14.07a3.57 3.57 0 110-7.14 3.57 3.57 0 010 7.14m0-9.07a5.5 5.5 0 100 11 5.5 5.5 0 000-11"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M17 5a1 1 0 11-2 0 1 1 0 012 0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 3
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (Instagram);

/***/ }),

/***/ "./components/Icons/Linkedin.jsx":
/*!***************************************!*\
  !*** ./components/Icons/Linkedin.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Linkedin.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const LinkedIn = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, props), {}, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M20.452 20.452h-3.548v-5.568c0-1.327-.027-3.034-1.844-3.034-1.843 0-2.126 1.43-2.126 2.908v5.694h-3.548V9h3.404v1.451h.049c.475-.897 1.637-1.839 3.357-1.839 3.596 0 4.252 2.37 4.252 5.444v6.397zm-15.944-12.59c-1.157 0-2.09.934-2.09 2.09s.934 2.09 2.09 2.09 2.09-.934 2.09-2.09-.934-2.09-2.09-2.09zm1.774 12.59H2.678V9h3.548v11.452zm17.768-21.452H1.678C.75 0 0 .75 0 1.678v20.644C0 23.25.75 24 1.678 24h20.644C23.25 24 24 23.25 24 22.322V1.678C24 .75 23.25 0 22.322 0z",
    fill: "#EA281E"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 7
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (LinkedIn);

/***/ }),

/***/ "./components/Icons/Logo.jsx":
/*!***********************************!*\
  !*** ./components/Icons/Logo.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Logo.jsx";



const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative; /* Ensure positioning context */
        /* Adjust as needed */
  right: 28px;
  bottom: 17px;  /* Adjust as needed */
`;
const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  cursor: pointer;
  width: 250px;
  height: auto;
  margin: 0;

  @media (max-width: 768px) {
    width: 150px;
    margin: 10px;
  }
`;
const Logo = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(LogoContainer, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledLogo, {
      src: "/logo.png" // Reference directly from the public folder
      ,
      alt: "Luminexa Logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Icons/Twitter.jsx":
/*!**************************************!*\
  !*** ./components/Icons/Twitter.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Twitter.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const Twitter = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, props), {}, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M23.633 4.999c-.885.392-1.83.655-2.826.775a4.935 4.935 0 002.163-2.724 9.863 9.863 0 01-3.127 1.2 4.926 4.926 0 00-8.38 4.482A13.96 13.96 0 011.67 3.149a4.923 4.923 0 001.523 6.565 4.904 4.904 0 01-2.228-.615v.061a4.933 4.933 0 003.946 4.84 4.927 4.927 0 01-2.215.084 4.935 4.935 0 004.604 3.417A9.867 9.867 0 010 20.253a13.935 13.935 0 007.548 2.212c9.058 0 14.003-7.507 14.003-13.985 0-.213-.005-.426-.014-.637A10.032 10.032 0 0024 4.583a9.965 9.965 0 01-2.367.649 4.913 4.913 0 002.157-2.724z",
    fill: "#EA281E" // Changed to red
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 7
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ }),

/***/ "./components/Icons/Youtube.jsx":
/*!**************************************!*\
  !*** ./components/Icons/Youtube.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Youtube.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const YouTube = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, props), {}, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M23.498 6.186c-.273-1.075-1.075-1.922-2.13-2.086-1.995-.197-4.358-.197-6.878-.197s-4.883 0-6.878.197c-1.055.164-1.857 1.011-2.13 2.086C5.001 8.354 5 12 5 12s0 3.646.362 5.814c.273 1.075 1.075 1.922 2.13 2.086 1.995.197 4.358.197 6.878.197s4.883 0 6.878-.197c1.055-.164 1.857-1.011 2.13-2.086C23 15.646 23 12 23 12s0-3.646-.502-5.814zM9.545 15.162V8.838l6.236 3.162-6.236 3.162z",
    fill: "#EA281E" // YouTube red
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 7
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (YouTube);

/***/ }),

/***/ "./components/Icons/index.js":
/*!***********************************!*\
  !*** ./components/Icons/index.js ***!
  \***********************************/
/*! exports provided: Arrow, Facebook, Instagram, Logo, Youtube, Twitter, Linkedin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Arrow */ "./components/Icons/Arrow.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Facebook */ "./components/Icons/Facebook.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return _Facebook__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instagram */ "./components/Icons/Instagram.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return _Instagram__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ "./components/Icons/Logo.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Youtube */ "./components/Icons/Youtube.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return _Youtube__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Twitter */ "./components/Icons/Twitter.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return _Twitter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Linkedin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Linkedin */ "./components/Icons/Linkedin.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return _Linkedin__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./components/SocialMedia/SocialMedia.jsx":
/*!************************************************!*\
  !*** ./components/SocialMedia/SocialMedia.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./components/Icons/index.js");
/* harmony import */ var _StickyCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StickyCursor */ "./components/StickyCursor/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/SocialMedia/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\SocialMedia\\SocialMedia.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






const medias = [{
  component: _Icons__WEBPACK_IMPORTED_MODULE_2__["Instagram"],
  url: 'instagram.com/_luminexa/'
}, {
  component: _Icons__WEBPACK_IMPORTED_MODULE_2__["Facebook"],
  url: 'https://www.facebook.com/arluminexa/'
}, {
  component: _Icons__WEBPACK_IMPORTED_MODULE_2__["Youtube"],
  url: 'https://youtube.com'
}, {
  component: _Icons__WEBPACK_IMPORTED_MODULE_2__["Twitter"],
  url: 'https://twitter.com/_luminexa'
}, {
  component: _Icons__WEBPACK_IMPORTED_MODULE_2__["Linkedin"],
  url: 'https://linkedin.com/company/luminexa-technology'
}];
const SocialMedia = props => {
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], _objectSpread(_objectSpread({}, props), {}, {
    children: medias.map(({
      component: Component,
      url
    }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_StickyCursor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        target: "_blank",
        href: url,
        onMouseEnter: addCursorBorder,
        onMouseLeave: removeCursorBorder,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined)
    }, url, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined))
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SocialMedia));

/***/ }),

/***/ "./components/SocialMedia/index.js":
/*!*****************************************!*\
  !*** ./components/SocialMedia/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialMedia */ "./components/SocialMedia/SocialMedia.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SocialMedia__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/SocialMedia/styles.js":
/*!******************************************!*\
  !*** ./components/SocialMedia/styles.js ***!
  \******************************************/
/*! exports provided: Container, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shared/text */ "./styles/shared/text.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end; /* Changed from flex-start to flex-end */
  margin-right: -10px;

  ${({
  theme
}) => theme.breakpoints.small`
    margin-left: -10px;
  `};
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_1__["secondaryFontStyle"]};
  padding: 0 10px;
  display: inline-block;
  vertical-align: middle;
  width: 41px;
  height: 21px;
  line-height: 24px;

  &:nth-of-type(2) {
    width: 31px;
    height: 24px;
  }

  &:hover svg path {
    fill: ${({
  theme
}) => theme.text};
  }
`;

/***/ }),

/***/ "./components/StickyCursor/StickyCursor.jsx":
/*!**************************************************!*\
  !*** ./components/StickyCursor/StickyCursor.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");


const StickyCursor = ({
  children: childrenProp,
  sticky = true
}) => {
  const childRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const {
    lockCursorPosition
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child)) {
      return null;
    }
    const {
      onMouseEnter,
      onMouseLeave
    } = child.props;
    const handleMouseEnter = event => {
      if (!childRef.current) return;
      const position = childRef.current.getBoundingClientRect();
      const x = position.width / 2 + position.left;
      const y = position.height / 2 + position.top;
      lockCursorPosition({
        x,
        y
      });
      if (onMouseEnter) {
        onMouseEnter(event);
      }
    };
    const handleMouseLeave = event => {
      if (!childRef.current) return;
      lockCursorPosition(null);
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    };
    const handleRef = node => {
      // Keep your own reference
      childRef.current = node;

      // Call the original ref, if any
      const {
        ref
      } = child;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== null) {
        ref.current = node;
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ref: handleRef
    });
  });
  return sticky ? children : childrenProp;
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(StickyCursor));

/***/ }),

/***/ "./components/StickyCursor/index.js":
/*!******************************************!*\
  !*** ./components/StickyCursor/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StickyCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StickyCursor */ "./components/StickyCursor/StickyCursor.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StickyCursor__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./context/cursor.js":
/*!***************************!*\
  !*** ./context/cursor.js ***!
  \***************************/
/*! exports provided: CursorContext, CursorContextProvider, useCursorContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorContext", function() { return CursorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorContextProvider", function() { return CursorContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCursorContext", function() { return useCursorContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/colors */ "./styles/colors.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\context\\cursor.js";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable react/jsx-filename-extension */



const INITIAL_STATE = {
  cursorStyle: {
    bordered: false,
    color: _styles_colors__WEBPACK_IMPORTED_MODULE_1__["default"].red
  },
  position: null
};
const rootReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CURSOR_STYLE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cursorStyle: _objectSpread(_objectSpread({}, state.cursorStyle), action.payload)
        });
      }
    case 'ADD_CURSOR_BORDER':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cursorStyle: _objectSpread(_objectSpread({}, state.cursorStyle), {}, {
            bordered: true
          })
        });
      }
    case 'REMOVE_CURSOR_BORDER':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cursorStyle: _objectSpread(_objectSpread({}, state.cursorStyle), {}, {
            bordered: false
          })
        });
      }
    case 'ADD_CURSOR_COLOR':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cursorStyle: _objectSpread(_objectSpread({}, state.cursorStyle), {}, {
            color: action.payload
          })
        });
      }
    case 'RESET_CURSOR_COLOR':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cursorStyle: _objectSpread(_objectSpread({}, state.cursorStyle), {}, {
            color: INITIAL_STATE.cursorStyle.color
          })
        });
      }
    case 'LOCK_CURSOR_POSITION':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          position: action.payload
        });
      }
    default:
      {
        return state;
      }
  }
};
const CursorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function CursorContextProvider({
  children
}) {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(rootReducer, INITIAL_STATE);
  const store = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => ({
    state,
    dispatch
  }), [state]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CursorContext.Provider, {
    value: store,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
const useCursorContext = () => {
  const {
    state,
    dispatch
  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(CursorContext);
  return [state, dispatch];
};

/***/ }),

/***/ "./hooks/useCursorStyle.js":
/*!*********************************!*\
  !*** ./hooks/useCursorStyle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cursor */ "./context/cursor.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


const useCursorStyle = () => {
  const [state, dispatch] = Object(_context_cursor__WEBPACK_IMPORTED_MODULE_1__["useCursorContext"])();
  const addCursorBorder = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'ADD_CURSOR_BORDER'
    });
  }, [dispatch]);
  const removeCursorBorder = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'REMOVE_CURSOR_BORDER'
    });
  }, [dispatch]);
  const addCursorColor = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(color => {
    dispatch({
      type: 'ADD_CURSOR_COLOR',
      payload: color
    });
  }, [dispatch]);
  const resetCursorColor = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'RESET_CURSOR_COLOR'
    });
  }, [dispatch]);
  const lockCursorPosition = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(coordinates => {
    dispatch({
      type: 'LOCK_CURSOR_POSITION',
      payload: coordinates
    });
  }, [dispatch]);
  return _objectSpread(_objectSpread({}, state), {}, {
    addCursorColor,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder,
    lockCursorPosition
  });
};
/* harmony default export */ __webpack_exports__["default"] = (useCursorStyle);

/***/ }),

/***/ "./pages/terms.js":
/*!************************!*\
  !*** ./pages/terms.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Terms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Terms */ "./components/Home/Terms/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\pages\\terms.js";

 // Adjust the path as necessary

const Terms = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Home_Terms__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};
/* harmony default export */ __webpack_exports__["default"] = (Terms);

/***/ }),

/***/ "./styles/colors.js":
/*!**************************!*\
  !*** ./styles/colors.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  white: '#fff',
  black: '#000',
  red: '#EA281E'
});

/***/ }),

/***/ "./styles/shared/container.js":
/*!************************************!*\
  !*** ./styles/shared/container.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
  max-width: 1234px;
  padding: 0 32px;
  margin: 0 auto;
`);

/***/ }),

/***/ "./styles/shared/text.js":
/*!*******************************!*\
  !*** ./styles/shared/text.js ***!
  \*******************************/
/*! exports provided: secondaryFontStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryFontStyle", function() { return secondaryFontStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const secondaryFontStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
  font-family: presicav, sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.15;
`;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vQW5pbWF0ZU9uU2NyZWVuLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FuaW1hdGVPblNjcmVlbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdHMvQ29udGFjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250YWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdHMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9UZXJtcy9UZXJtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL1Rlcm1zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9UZXJtcy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9GYWNlYm9vay5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9JbnN0YWdyYW0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvTGlua2VkaW4uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvTG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9Ud2l0dGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL1lvdXR1YmUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0aWNreUN1cnNvci9TdGlja3lDdXJzb3IuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RpY2t5Q3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUN1cnNvclN0eWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Rlcm1zLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3NoYXJlZC9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3NoYXJlZC90ZXh0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsImR1cmF0aW9uIiwiZWFzZSIsIm9wYWNpdHkiLCJ2YXJpYW50cyIsInNob3ciLCJoaWRkZW4iLCJBbmltYXRlT25TY3JlZW4iLCJjaGlsZHJlbiIsImNoaWxkcmVuUHJvcCIsImFuaW1hdGlvbiIsInVzZUFuaW1hdGlvbiIsImluVmlld1JlZiIsImluVmlldyIsInVzZUluVmlldyIsInRyaWdnZXJPbmNlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdGFydCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImhhbmRsZVJlZiIsIm5vZGUiLCJyZWYiLCJjdXJyZW50IiwiY2xvbmVFbGVtZW50IiwiYW5pbWF0ZSIsImluaXRpYWwiLCJtZW1vIiwiQ29udGFjdCIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiX2pzeERFViIsIkNvbnRhY3RTZWN0aW9uIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlNvY2lhbE1lZGlhIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsInRoZW1lIiwiY29sb3JzIiwicmVkIiwidGV4dCIsInNlY29uZGFyeUZvbnRTdHlsZSIsImJyZWFrcG9pbnRzIiwibWVkaXVtIiwic21hbGwiLCJ0YWJsZXQiLCJUZXJtc0FuZENvbmRpdGlvbnMiLCJDb250ZW50U2VjdGlvbiIsIldyYXAiLCJUaXRsZSIsIlBhcmFncmFwaCIsImRpdiIsImgxIiwicCIsIkFycm93IiwiX3JlZiIsImZpbGxDb2xvciIsIndoaXRlIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJzdmciLCJfb2JqZWN0U3ByZWFkIiwieG1sbnMiLCJ2aWV3Qm94IiwiZCIsImZpbGwiLCJmaWxsUnVsZSIsIkZhY2Vib29rIiwiSW5zdGFncmFtIiwiTGlua2VkSW4iLCJMb2dvQ29udGFpbmVyIiwiU3R5bGVkTG9nbyIsImltZyIsIkxvZ28iLCJzcmMiLCJhbHQiLCJUd2l0dGVyIiwiWW91VHViZSIsIm1lZGlhcyIsImNvbXBvbmVudCIsInVybCIsIllvdXR1YmUiLCJMaW5rZWRpbiIsIkNvbnRhaW5lciIsIkNvbXBvbmVudCIsIlN0aWNreUN1cnNvciIsIkxpbmsiLCJ0YXJnZXQiLCJhIiwic3RpY2t5IiwiY2hpbGRSZWYiLCJ1c2VSZWYiLCJsb2NrQ3Vyc29yUG9zaXRpb24iLCJoYW5kbGVNb3VzZUVudGVyIiwiZXZlbnQiLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJ3aWR0aCIsImxlZnQiLCJ5IiwiaGVpZ2h0IiwidG9wIiwiaGFuZGxlTW91c2VMZWF2ZSIsIklOSVRJQUxfU1RBVEUiLCJjdXJzb3JTdHlsZSIsImJvcmRlcmVkIiwiY29sb3IiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJDdXJzb3JDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkN1cnNvckNvbnRleHRQcm92aWRlciIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInN0b3JlIiwidXNlTWVtbyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDdXJzb3JDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwiYWRkQ3Vyc29yQ29sb3IiLCJyZXNldEN1cnNvckNvbG9yIiwiY29vcmRpbmF0ZXMiLCJUZXJtcyIsIl9GcmFnbWVudCIsIlRlcm1zcyIsImJsYWNrIiwiY3NzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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LFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFDO0VBQUMsZ0JBQ1QsQ0FBQztBQUVQLENBQUM7QUFFY2lHLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQ1hwQjtBQUFlO0VBQ2J2RSxLQUFLLEVBQUUsTUFBTTtFQUNiMEUsS0FBSyxFQUFFLE1BQU07RUFDYjVGLEdBQUcsRUFBRTtBQUNQLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0FBQXdDO0FBRXpCNkYsb0hBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUVqQyxNQUFNM0Ysa0JBQWtCLEdBQUcyRixxREFBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQzs7Ozs7Ozs7Ozs7QUNQRCwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy90ZXJtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdGVybXMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZGVsYXk6IDAuMyxcclxuICB0cmFuc2xhdGVZOiB7XHJcbiAgICBkdXJhdGlvbjogMSxcclxuICAgIGVhc2U6IFswLCAwLjcsIDAuMjksIDAuOTddLFxyXG4gIH0sXHJcbiAgb3BhY2l0eToge1xyXG4gICAgZHVyYXRpb246IDEsXHJcbiAgICBlYXNlOiBbMC4yNSwgMC4xLCAwLjI1LCAxLjBdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBzaG93OiB7IHRyYW5zbGF0ZVk6IDAsIG9wYWNpdHk6IDEgfSxcclxuICBoaWRkZW46IHsgdHJhbnNsYXRlWTogNjAsIG9wYWNpdHk6IDAgfSxcclxufTtcclxuXHJcbmNvbnN0IEFuaW1hdGVPblNjcmVlbiA9ICh7IGNoaWxkcmVuOiBjaGlsZHJlblByb3AgfSkgPT4ge1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IFtpblZpZXdSZWYsIGluVmlld10gPSB1c2VJblZpZXcoeyB0cmlnZ2VyT25jZTogdHJ1ZSB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpblZpZXcpIHtcclxuICAgICAgYW5pbWF0aW9uLnN0YXJ0KCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfSwgW2FuaW1hdGlvbiwgaW5WaWV3LCBpblZpZXdSZWZdKTtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW5Qcm9wLCBjaGlsZCA9PiB7XHJcbiAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWYgPSBub2RlID0+IHtcclxuICAgICAgLy8gS2VlcCB5b3VyIG93biByZWZlcmVuY2VcclxuICAgICAgaW5WaWV3UmVmKG5vZGUpO1xyXG5cclxuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgcmVmLCBpZiBhbnlcclxuICAgICAgY29uc3QgeyByZWYgfSA9IGNoaWxkO1xyXG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlZihub2RlKTtcclxuICAgICAgfSBlbHNlIGlmIChyZWYgIT09IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICB2YXJpYW50cyxcclxuICAgICAgdHJhbnNpdGlvbixcclxuICAgICAgYW5pbWF0ZTogYW5pbWF0aW9uLFxyXG4gICAgICBpbml0aWFsOiAnaGlkZGVuJyxcclxuICAgICAgcmVmOiBoYW5kbGVSZWYsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBbmltYXRlT25TY3JlZW4pO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BbmltYXRlT25TY3JlZW4nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi4vLi4vU29jaWFsTWVkaWEnO1xyXG5pbXBvcnQgeyBDb250YWN0U2VjdGlvbiB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxDb250YWN0U2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC10ZXh0XCJcclxuICAgICAgICAgICAgaHJlZj1cInRlbDorMS45MDIuNDE3LjA2MzRcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICs5MS44NjYuMDQ0Ljk5NzBcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC10ZXh0XCJcclxuICAgICAgICAgICAgaHJlZj1cIm1haWx0bzppbmZvQGZ1cnJvdy5zdHVkaW9cIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGluZm9AbHVtaW5leGEuaW5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YWRkcmVzcyBjbGFzc05hbWU9XCJjb2x1bW4gY29udGFjdC10ZXh0XCI+XHJcbiAgICAgICAgICAxNCAxc3QgU3RhZ2UgQmhhbmFzaGFua2FyaTxiciAvPiBCYW5nYWxvcmUsIEtBIElOXHJcbiAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgIDxTb2NpYWxNZWRpYSBjbGFzc05hbWU9XCJjb2x1bW5cIiAvPlxyXG4gICAgICA8L0NvbnRhY3RTZWN0aW9uPlxyXG4gICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29udGFjdCk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvbnRhY3RzJztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAwcHggMjAwcHg7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgLyogb3BhY2l0eTogMTsgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xyXG4gIC8qIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLjcsIDAuMjksIDAuOTcpO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7ICovXHJcbiAgLyogd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJiAuY29sdW1uIHtcclxuICAgIHdpZHRoOiAzMy4zMzMlO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiBhOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5jb250YWN0LXRleHQge1xyXG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmIGFkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiA0MS42NjYlO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJiAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgYWRkcmVzcyB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgcGFkZGluZzogMCAwcHggNjBweDtcclxuXHJcbiAgICAmIGFkZHJlc3Mge1xyXG4gICAgICBwYWRkaW5nOiAxN3B4IDAgNDJweDtcclxuICAgIH1cclxuXHJcbiAgICAmIC5jb250YWN0LXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBXcmFwLFxyXG4gIFRpdGxlLFxyXG4gIFBhcmFncmFwaFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vQ29udGFjdHMnO1xyXG5cclxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPFdyYXA+XHJcbiAgICAgICAgICA8VGl0bGU+VGVybXMgYW5kIENvbmRpdGlvbnM8L1RpdGxlPlxyXG5cclxuICAgICAgICAgIDxUaXRsZT5HZW5lcmFsIFRlcm1zPC9UaXRsZT5cclxuICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIEJ5IGFjY2Vzc2luZyBhbmQgdXNpbmcgdGhpcyB3ZWJzaXRlLCB5b3UgYWdyZWUgdG8gY29tcGx5IHdpdGggdGhlIGZvbGxvd2luZyB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIFxyXG4gICAgICAgICAgICB3aGljaCB0b2dldGhlciB3aXRoIG91ciBwcml2YWN5IHBvbGljeSBnb3Zlcm4gb3VyIHJlbGF0aW9uc2hpcCB3aXRoIHlvdSBpbiByZWxhdGlvbiB0byB0aGlzIHdlYnNpdGUuXHJcbiAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGhlc2UgdGVybXMsIHBsZWFzZSBkbyBub3QgdXNlIG91ciBzaXRlLiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBtb2RpZnkgdGhlc2UgdGVybXMgXHJcbiAgICAgICAgICAgIGF0IGFueSB0aW1lLCBhbmQgeW91ciBjb250aW51ZWQgdXNlIG9mIHRoZSB3ZWJzaXRlIGZvbGxvd2luZyBhbnkgY2hhbmdlcyB3aWxsIGNvbnN0aXR1dGUgeW91ciBhY2NlcHRhbmNlIG9mIFxyXG4gICAgICAgICAgICB0aG9zZSBjaGFuZ2VzLlxyXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcblxyXG4gICAgICAgICAgPFRpdGxlPlVzZSBvZiB0aGUgU2l0ZTwvVGl0bGU+XHJcbiAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBUaGUgY29udGVudCBvZiB0aGUgcGFnZXMgb2YgdGhpcyB3ZWJzaXRlIGlzIGZvciB5b3VyIGdlbmVyYWwgaW5mb3JtYXRpb24gYW5kIHVzZSBvbmx5LiBJdCBpcyBzdWJqZWN0IHRvIFxyXG4gICAgICAgICAgICBjaGFuZ2Ugd2l0aG91dCBub3RpY2UuIFdlIGRvIG5vdCBndWFyYW50ZWUgdGhlIGFjY3VyYWN5LCBjb21wbGV0ZW5lc3MsIG9yIHVzZWZ1bG5lc3Mgb2YgdGhpcyBpbmZvcm1hdGlvbi4gXHJcbiAgICAgICAgICAgIFlvdSByZWx5IG9uIHN1Y2ggaW5mb3JtYXRpb24gYXQgeW91ciBvd24gcmlzay5cclxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgVW5hdXRob3JpemVkIHVzZSBvZiB0aGlzIHdlYnNpdGUgbWF5IGdpdmUgcmlzZSB0byBhIGNsYWltIGZvciBkYW1hZ2VzIGFuZC9vciBiZSBhIGNyaW1pbmFsIG9mZmVuc2UuXHJcbiAgICAgICAgICA8L1BhcmFncmFwaD5cclxuXHJcbiAgICAgICAgICA8VGl0bGU+UHJpdmFjeSBQb2xpY3k8L1RpdGxlPlxyXG4gICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgT3VyIFByaXZhY3kgUG9saWN5IHNldHMgb3V0IGhvdyB3ZSBjb2xsZWN0LCB1c2UsIGFuZCBwcm90ZWN0IHlvdXIgaW5mb3JtYXRpb24gd2hlbiB5b3UgdXNlIG91ciB3ZWJzaXRlLiBcclxuICAgICAgICAgICAgV2UgYXJlIGNvbW1pdHRlZCB0byBzYWZlZ3VhcmRpbmcgeW91ciBwcml2YWN5IGFuZCBlbnN1cmluZyB0aGF0IHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgaGFuZGxlZCBcclxuICAgICAgICAgICAgcmVzcG9uc2libHkuXHJcbiAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIFdlIG1heSBjb2xsZWN0IHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20geW91IHdoZW4geW91IHVzZSBvdXIgd2Vic2l0ZSwgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBcclxuICAgICAgICAgICAgeW91ciBuYW1lLCBlbWFpbCBhZGRyZXNzLCBhbmQgb3RoZXIgY29udGFjdCBkZXRhaWxzLiBUaGlzIGluZm9ybWF0aW9uIHdpbGwgb25seSBiZSB1c2VkIGZvciB0aGUgcHVycG9zZXMgXHJcbiAgICAgICAgICAgIG91dGxpbmVkIGluIG91ciBQcml2YWN5IFBvbGljeS5cclxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG5cclxuICAgICAgICAgIDxUaXRsZT5EaXNjbGFpbWVyPC9UaXRsZT5cclxuICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIFRoZSBpbmZvcm1hdGlvbiBjb250YWluZWQgaW4gdGhpcyB3ZWJzaXRlIGlzIGZvciBnZW5lcmFsIGluZm9ybWF0aW9uIHB1cnBvc2VzIG9ubHkuIFdlIGVuZGVhdm9yIHRvIGtlZXAgXHJcbiAgICAgICAgICAgIHRoZSBpbmZvcm1hdGlvbiB1cCB0byBkYXRlIGFuZCBjb3JyZWN0OyBob3dldmVyLCB3ZSBtYWtlIG5vIHJlcHJlc2VudGF0aW9ucyBvciB3YXJyYW50aWVzIG9mIGFueSBraW5kLCBcclxuICAgICAgICAgICAgZXhwcmVzcyBvciBpbXBsaWVkLCBhYm91dCB0aGUgY29tcGxldGVuZXNzLCBhY2N1cmFjeSwgcmVsaWFiaWxpdHksIHN1aXRhYmlsaXR5LCBvciBhdmFpbGFiaWxpdHkgd2l0aCBcclxuICAgICAgICAgICAgcmVzcGVjdCB0byB0aGUgd2Vic2l0ZSBvciB0aGUgaW5mb3JtYXRpb24sIHByb2R1Y3RzLCBzZXJ2aWNlcywgb3IgcmVsYXRlZCBncmFwaGljcyBjb250YWluZWQgb24gdGhlIFxyXG4gICAgICAgICAgICB3ZWJzaXRlIGZvciBhbnkgcHVycG9zZS5cclxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgQW55IHJlbGlhbmNlIHlvdSBwbGFjZSBvbiBzdWNoIGluZm9ybWF0aW9uIGlzIHRoZXJlZm9yZSBzdHJpY3RseSBhdCB5b3VyIG93biByaXNrLiBJbiBubyBldmVudCB3aWxsIHdlIFxyXG4gICAgICAgICAgICBiZSBsaWFibGUgZm9yIGFueSBsb3NzIG9yIGRhbWFnZSBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBpbmRpcmVjdCBvciBjb25zZXF1ZW50aWFsIGxvc3Mgb3IgZGFtYWdlLCBcclxuICAgICAgICAgICAgb3IgYW55IGxvc3Mgb3IgZGFtYWdlIHdoYXRzb2V2ZXIgYXJpc2luZyBmcm9tIGxvc3Mgb2YgZGF0YSBvciBwcm9maXRzIGFyaXNpbmcgb3V0IG9mLCBvciBpbiBjb25uZWN0aW9uIFxyXG4gICAgICAgICAgICB3aXRoLCB0aGUgdXNlIG9mIHRoaXMgd2Vic2l0ZS5cclxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG5cclxuICAgICAgICAgIDxUaXRsZT5Hb3Zlcm5pbmcgTGF3PC9UaXRsZT5cclxuICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIFRoZXNlIHRlcm1zIGFuZCBjb25kaXRpb25zIGFyZSBnb3Zlcm5lZCBieSBhbmQgY29uc3RydWVkIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgbGF3cyBvZiBbWW91ciBDb3VudHJ5XSwgXHJcbiAgICAgICAgICAgIGFuZCBhbnkgZGlzcHV0ZXMgcmVsYXRpbmcgdG8gdGhlc2UgdGVybXMgYW5kIGNvbmRpdGlvbnMgd2lsbCBiZSBzdWJqZWN0IHRvIHRoZSBleGNsdXNpdmUganVyaXNkaWN0aW9uIFxyXG4gICAgICAgICAgICBvZiB0aGUgY291cnRzIG9mIFtZb3VyIENvdW50cnldLlxyXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgPC9XcmFwPlxyXG4gICAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICAgICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgICAgIDxDb250YWN0Lz5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUZXJtc0FuZENvbmRpdGlvbnMpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UZXJtcyc7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4vLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuXHJcbiAgXHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcclxuICBtYXJnaW46IDQwcHggMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYH07XHJcbmA7XHJcblxyXG4iLCJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFycm93ID0gKHsgZmlsbENvbG9yID0gY29sb3JzLndoaXRlLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPG1vdGlvbi5zdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAxMDEgNTdcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMzMgMzRIMFYyNGg4MS40MjlMNjYgNy44ODQgNzMuNTQ4IDBsMTkuODc3IDIwLjc2My4wMjctLjAyOUwxMDEgMjguNjE4IDczLjgyOSA1N2wtNy41NDgtNy44ODRMODAuNzUzIDM0SDMzelwiXHJcbiAgICAgIGZpbGw9e2ZpbGxDb2xvcn1cclxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgID48L3BhdGg+XHJcbiAgPC9tb3Rpb24uc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XHJcbiIsImNvbnN0IEZhY2Vib29rID0gcHJvcHMgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTEgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0zLjYyNSAxLjIzNkM0LjU0NC4zNDYgNS44NS4wNDQgNy4wODUuMDA2IDguMzg3LS4wMDQgOS42OTEuMDAzIDEwLjk5NS4wMDRjLjAwNSAxLjQuMDA2IDIuODAyIDAgNC4yMDMtLjg0My0uMDAxLTEuNjg3LjAwMi0yLjUzLS4wMDEtLjUzNC0uMDM0LTEuMDgzLjM3OC0xLjE4LjkxOC0uMDEzLjkzNy0uMDA0IDEuODc1LS4wMDQgMi44MTMgMS4yMzYuMDA1IDIuNDcyLS4wMDIgMy43MDguMDAzYTUzLjI5NyA1My4yOTcgMCAwMS0uNDUgNC4wNWMtMS4wOTEuMDExLTIuMTgzIDAtMy4yNzUuMDA3LS4wMSA0IC4wMDUgOC0uMDA4IDEyLTEuNjIyLjAwNi0zLjI0NC0uMDA0LTQuODY2LjAwNC0uMDMtNCAuMDAyLTguMDAzLS4wMTctMTIuMDA0LS43OTEtLjAwOC0xLjU4My4wMDYtMi4zNzQtLjAwNy4wMDMtMS4zNDQuMDAxLTIuNjg5LjAwMS00LjAzMy43OTEtLjAxIDEuNTgyLjAwMiAyLjM3My0uMDA2LjAyNC0xLjMwNy0uMDI0LTIuNjE2LjAyNS0zLjkyMi4wOC0xLjAzNS40NjYtMi4wNzcgMS4yMjYtMi43OTJ6XCJcclxuICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuICAgICAgZmlsbD1cIiNFQTI4MUVcIlxyXG4gICAgPjwvcGF0aD5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rO1xyXG4iLCJjb25zdCBJbnN0YWdyYW0gPSBwcm9wcyA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIHsuLi5wcm9wc30+XHJcbiAgICA8ZyBmaWxsPVwiI0VBMjgxRVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEwLjUgMEM3LjY0OCAwIDcuMjkuMDEyIDYuMTcuMDYzIDUuMDU0LjExNCA0LjI5LjI5MiAzLjYyMy41NTFhNS4xNDYgNS4xNDYgMCAwMC0xLjg2IDEuMjExIDUuMTQ3IDUuMTQ3IDAgMDAtMS4yMSAxLjg2Qy4yOTEgNC4yOS4xMTMgNS4wNTMuMDYyIDYuMTcxLjAxMiA3LjI5IDAgNy42NDggMCAxMC41YzAgMi44NTIuMDEyIDMuMjEuMDYzIDQuMzMuMDUxIDEuMTE3LjIyOSAxLjg4LjQ4OCAyLjU0OC4yNjkuNjkuNjI4IDEuMjc2IDEuMjExIDEuODYuNTg0LjU4MyAxLjE3Ljk0MiAxLjg2IDEuMjEuNjY4LjI2IDEuNDMxLjQzOCAyLjU0OS40ODkgMS4xMi4wNSAxLjQ3Ny4wNjMgNC4zMjkuMDYzIDIuODUyIDAgMy4yMS0uMDEyIDQuMzMtLjA2MyAxLjExNy0uMDUxIDEuODgtLjIyOSAyLjU0OC0uNDg4YTUuMTQ2IDUuMTQ2IDAgMDAxLjg2LTEuMjExIDUuMTQ3IDUuMTQ3IDAgMDAxLjIxLTEuODZjLjI2LS42NjguNDM4LTEuNDMxLjQ4OS0yLjU0OS4wNTEtMS4xMi4wNjMtMS40NzcuMDYzLTQuMzI5IDAtMi44NTItLjAxMi0zLjIxLS4wNjMtNC4zMy0uMDUxLTEuMTE3LS4yMjktMS44OC0uNDg4LTIuNTQ4YTUuMTQ3IDUuMTQ3IDAgMDAtMS4yMTEtMS44NiA1LjE0NiA1LjE0NiAwIDAwLTEuODYtMS4yMWMtLjY2OC0uMjYtMS40MzEtLjQzOC0yLjU0OS0uNDg5QzEzLjcxLjAxMiAxMy4zNTIgMCAxMC41IDBtMCAxLjg5MmMyLjgwNCAwIDMuMTM2LjAxIDQuMjQzLjA2MSAxLjAyNC4wNDcgMS41OC4yMTggMS45NS4zNjIuNDkuMTkuODQuNDE4IDEuMjA3Ljc4NS4zNjcuMzY4LjU5NS43MTcuNzg1IDEuMjA3LjE0NC4zNy4zMTUuOTI2LjM2MiAxLjk1LjA1IDEuMTA3LjA2MSAxLjQ0LjA2MSA0LjI0MyAwIDIuODA0LS4wMSAzLjEzNi0uMDYxIDQuMjQzLS4wNDcgMS4wMjQtLjIxOCAxLjU4LS4zNjIgMS45NS0uMTkuNDktLjQxOC44NC0uNzg1IDEuMjA3YTMuMjUyIDMuMjUyIDAgMDEtMS4yMDcuNzg1Yy0uMzcuMTQ0LS45MjYuMzE1LTEuOTUuMzYyLTEuMTA3LjA1LTEuNDQuMDYxLTQuMjQzLjA2MS0yLjgwNCAwLTMuMTM2LS4wMS00LjI0My0uMDYxLTEuMDI0LS4wNDctMS41OC0uMjE4LTEuOTUtLjM2Mi0uNDktLjE5LS44NC0uNDE4LTEuMjA3LS43ODVhMy4yNTQgMy4yNTQgMCAwMS0uNzg1LTEuMjA3Yy0uMTQ0LS4zNy0uMzE1LS45MjYtLjM2Mi0xLjk1LS4wNS0xLjEwNy0uMDYxLTEuNDQtLjA2MS00LjI0MyAwLTIuODA0LjAxLTMuMTM2LjA2MS00LjI0My4wNDctMS4wMjQuMjE4LTEuNTguMzYyLTEuOTUuMTktLjQ5LjQxOC0uODQuNzg1LTEuMjA3YTMuMjUzIDMuMjUzIDAgMDExLjIwNy0uNzg1Yy4zNy0uMTQ0LjkyNi0uMzE1IDEuOTUtLjM2MiAxLjEwNy0uMDUgMS40NC0uMDYxIDQuMjQzLS4wNjFcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTAuNSAxNC4wN2EzLjU3IDMuNTcgMCAxMTAtNy4xNCAzLjU3IDMuNTcgMCAwMTAgNy4xNG0wLTkuMDdhNS41IDUuNSAwIDEwMCAxMSA1LjUgNS41IDAgMDAwLTExXCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCBkPVwiTTE3IDVhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwXCI+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zdGFncmFtO1xyXG4iLCJjb25zdCBMaW5rZWRJbiA9IHByb3BzID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjAuNDUyIDIwLjQ1MmgtMy41NDh2LTUuNTY4YzAtMS4zMjctLjAyNy0zLjAzNC0xLjg0NC0zLjAzNC0xLjg0MyAwLTIuMTI2IDEuNDMtMi4xMjYgMi45MDh2NS42OTRoLTMuNTQ4VjloMy40MDR2MS40NTFoLjA0OWMuNDc1LS44OTcgMS42MzctMS44MzkgMy4zNTctMS44MzkgMy41OTYgMCA0LjI1MiAyLjM3IDQuMjUyIDUuNDQ0djYuMzk3em0tMTUuOTQ0LTEyLjU5Yy0xLjE1NyAwLTIuMDkuOTM0LTIuMDkgMi4wOXMuOTM0IDIuMDkgMi4wOSAyLjA5IDIuMDktLjkzNCAyLjA5LTIuMDktLjkzNC0yLjA5LTIuMDktMi4wOXptMS43NzQgMTIuNTlIMi42NzhWOWgzLjU0OHYxMS40NTJ6bTE3Ljc2OC0yMS40NTJIMS42NzhDLjc1IDAgMCAuNzUgMCAxLjY3OHYyMC42NDRDMCAyMy4yNS43NSAyNCAxLjY3OCAyNGgyMC42NDRDMjMuMjUgMjQgMjQgMjMuMjUgMjQgMjIuMzIyVjEuNjc4QzI0IC43NSAyMy4yNSAwIDIyLjMyMiAwelwiXHJcbiAgICAgICAgZmlsbD1cIiNFQTI4MUVcIiBcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGlua2VkSW47XHJcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBMb2dvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEVuc3VyZSBwb3NpdGlvbmluZyBjb250ZXh0ICovXHJcbiAgICAgICAgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gIHJpZ2h0OiAyOHB4O1xyXG4gIGJvdHRvbTogMTdweDsgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZExvZ28gPSBzdHlsZWQuaW1nYFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExvZ29Db250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRMb2dvXHJcbiAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCIgLy8gUmVmZXJlbmNlIGRpcmVjdGx5IGZyb20gdGhlIHB1YmxpYyBmb2xkZXJcclxuICAgICAgICBhbHQ9XCJMdW1pbmV4YSBMb2dvXCJcclxuICAgICAgLz5cclxuICAgIDwvTG9nb0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiY29uc3QgVHdpdHRlciA9IHByb3BzID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjMuNjMzIDQuOTk5Yy0uODg1LjM5Mi0xLjgzLjY1NS0yLjgyNi43NzVhNC45MzUgNC45MzUgMCAwMDIuMTYzLTIuNzI0IDkuODYzIDkuODYzIDAgMDEtMy4xMjcgMS4yIDQuOTI2IDQuOTI2IDAgMDAtOC4zOCA0LjQ4MkExMy45NiAxMy45NiAwIDAxMS42NyAzLjE0OWE0LjkyMyA0LjkyMyAwIDAwMS41MjMgNi41NjUgNC45MDQgNC45MDQgMCAwMS0yLjIyOC0uNjE1di4wNjFhNC45MzMgNC45MzMgMCAwMDMuOTQ2IDQuODQgNC45MjcgNC45MjcgMCAwMS0yLjIxNS4wODQgNC45MzUgNC45MzUgMCAwMDQuNjA0IDMuNDE3QTkuODY3IDkuODY3IDAgMDEwIDIwLjI1M2ExMy45MzUgMTMuOTM1IDAgMDA3LjU0OCAyLjIxMmM5LjA1OCAwIDE0LjAwMy03LjUwNyAxNC4wMDMtMTMuOTg1IDAtLjIxMy0uMDA1LS40MjYtLjAxNC0uNjM3QTEwLjAzMiAxMC4wMzIgMCAwMDI0IDQuNTgzYTkuOTY1IDkuOTY1IDAgMDEtMi4zNjcuNjQ5IDQuOTEzIDQuOTEzIDAgMDAyLjE1Ny0yLjcyNHpcIlxyXG4gICAgICAgIGZpbGw9XCIjRUEyODFFXCIgLy8gQ2hhbmdlZCB0byByZWRcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgVHdpdHRlcjtcclxuICAiLCJjb25zdCBZb3VUdWJlID0gcHJvcHMgPT4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yMy40OTggNi4xODZjLS4yNzMtMS4wNzUtMS4wNzUtMS45MjItMi4xMy0yLjA4Ni0xLjk5NS0uMTk3LTQuMzU4LS4xOTctNi44NzgtLjE5N3MtNC44ODMgMC02Ljg3OC4xOTdjLTEuMDU1LjE2NC0xLjg1NyAxLjAxMS0yLjEzIDIuMDg2QzUuMDAxIDguMzU0IDUgMTIgNSAxMnMwIDMuNjQ2LjM2MiA1LjgxNGMuMjczIDEuMDc1IDEuMDc1IDEuOTIyIDIuMTMgMi4wODYgMS45OTUuMTk3IDQuMzU4LjE5NyA2Ljg3OC4xOTdzNC44ODMgMCA2Ljg3OC0uMTk3YzEuMDU1LS4xNjQgMS44NTctMS4wMTEgMi4xMy0yLjA4NkMyMyAxNS42NDYgMjMgMTIgMjMgMTJzMC0zLjY0Ni0uNTAyLTUuODE0ek05LjU0NSAxNS4xNjJWOC44MzhsNi4yMzYgMy4xNjItNi4yMzYgMy4xNjJ6XCJcclxuICAgICAgICBmaWxsPVwiI0VBMjgxRVwiIC8vIFlvdVR1YmUgcmVkXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFlvdVR1YmU7XHJcbiAgIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvdyB9IGZyb20gJy4vQXJyb3cnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rIH0gZnJvbSAnLi9GYWNlYm9vayc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5zdGFncmFtIH0gZnJvbSAnLi9JbnN0YWdyYW0nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFlvdXR1YmUgfSBmcm9tICcuL1lvdXR1YmUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXIgfSBmcm9tICcuL1R3aXR0ZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtlZGluIH0gZnJvbSAnLi9MaW5rZWRpbic7XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgeyBJbnN0YWdyYW0sIEZhY2Vib29rLCBZb3V0dWJlLCBUd2l0dGVyLCBMaW5rZWRpbiB9IGZyb20gJy4uL0ljb25zJztcclxuaW1wb3J0IFN0aWNreUN1cnNvciBmcm9tICcuLi9TdGlja3lDdXJzb3InO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIExpbmsgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBtZWRpYXMgPSBbXHJcbiAgeyBjb21wb25lbnQ6IEluc3RhZ3JhbSwgdXJsOiAnaW5zdGFncmFtLmNvbS9fbHVtaW5leGEvJyB9LFxyXG4gIHsgY29tcG9uZW50OiBGYWNlYm9vaywgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FybHVtaW5leGEvJyB9LFxyXG4gIHsgY29tcG9uZW50OiBZb3V0dWJlLCB1cmw6ICdodHRwczovL3lvdXR1YmUuY29tJyB9LFxyXG4gIHsgY29tcG9uZW50OiBUd2l0dGVyLCB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL19sdW1pbmV4YScgfSxcclxuICB7IGNvbXBvbmVudDogTGlua2VkaW4sIHVybDogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2NvbXBhbnkvbHVtaW5leGEtdGVjaG5vbG9neScgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNvY2lhbE1lZGlhID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHsuLi5wcm9wc30+XHJcbiAgICAgIHttZWRpYXMubWFwKCh7IGNvbXBvbmVudDogQ29tcG9uZW50LCB1cmwgfSkgPT4gKFxyXG4gICAgICAgIDxTdGlja3lDdXJzb3Iga2V5PXt1cmx9PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1N0aWNreUN1cnNvcj5cclxuICAgICAgKSl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTb2NpYWxNZWRpYSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NvY2lhbE1lZGlhJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBDaGFuZ2VkIGZyb20gZmxleC1zdGFydCB0byBmbGV4LWVuZCAqL1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA0MXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gICY6bnRoLW9mLXR5cGUoMikge1xuICAgIHdpZHRoOiAzMXB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuXG4gICY6aG92ZXIgc3ZnIHBhdGgge1xuICAgIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5cclxuY29uc3QgU3RpY2t5Q3Vyc29yID0gKHsgY2hpbGRyZW46IGNoaWxkcmVuUHJvcCwgc3RpY2t5ID0gdHJ1ZSB9KSA9PiB7XHJcbiAgY29uc3QgY2hpbGRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgeyBsb2NrQ3Vyc29yUG9zaXRpb24gfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgY2hpbGQgPT4ge1xyXG4gICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSB9ID0gY2hpbGQucHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IGV2ZW50ID0+IHtcclxuICAgICAgaWYgKCFjaGlsZFJlZi5jdXJyZW50KSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNoaWxkUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICBjb25zdCB4ID0gcG9zaXRpb24ud2lkdGggLyAyICsgcG9zaXRpb24ubGVmdDtcclxuICAgICAgY29uc3QgeSA9IHBvc2l0aW9uLmhlaWdodCAvIDIgKyBwb3NpdGlvbi50b3A7XHJcbiAgICAgIGxvY2tDdXJzb3JQb3NpdGlvbih7IHgsIHkgfSk7XHJcblxyXG4gICAgICBpZiAob25Nb3VzZUVudGVyKSB7XHJcbiAgICAgICAgb25Nb3VzZUVudGVyKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoIWNoaWxkUmVmLmN1cnJlbnQpIHJldHVybjtcclxuXHJcbiAgICAgIGxvY2tDdXJzb3JQb3NpdGlvbihudWxsKTtcclxuXHJcbiAgICAgIGlmIChvbk1vdXNlTGVhdmUpIHtcclxuICAgICAgICBvbk1vdXNlTGVhdmUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZiA9IG5vZGUgPT4ge1xyXG4gICAgICAvLyBLZWVwIHlvdXIgb3duIHJlZmVyZW5jZVxyXG4gICAgICBjaGlsZFJlZi5jdXJyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIHJlZiwgaWYgYW55XHJcbiAgICAgIGNvbnN0IHsgcmVmIH0gPSBjaGlsZDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVmKG5vZGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgIG9uTW91c2VFbnRlcjogaGFuZGxlTW91c2VFbnRlcixcclxuICAgICAgb25Nb3VzZUxlYXZlOiBoYW5kbGVNb3VzZUxlYXZlLFxyXG4gICAgICByZWY6IGhhbmRsZVJlZixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc3RpY2t5ID8gY2hpbGRyZW4gOiBjaGlsZHJlblByb3A7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFN0aWNreUN1cnNvcik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N0aWNreUN1cnNvcic7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGN1cnNvclN0eWxlOiB7XHJcbiAgICBib3JkZXJlZDogZmFsc2UsXHJcbiAgICBjb2xvcjogY29sb3JzLnJlZCxcclxuICB9LFxyXG4gIHBvc2l0aW9uOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1VQREFURV9DVVJTT1JfU1RZTEUnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0FERF9DVVJTT1JfQk9SREVSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGJvcmRlcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdSRU1PVkVfQ1VSU09SX0JPUkRFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBib3JkZXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0FERF9DVVJTT1JfQ09MT1InOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgY29sb3I6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdSRVNFVF9DVVJTT1JfQ09MT1InOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgY29sb3I6IElOSVRJQUxfU1RBVEUuY3Vyc29yU3R5bGUuY29sb3IsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPQ0tfQ1VSU09SX1BPU0lUSU9OJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJzb3JDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEN1cnNvckNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIElOSVRJQUxfU1RBVEUpO1xyXG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBzdGF0ZSwgZGlzcGF0Y2ggfSksIFtzdGF0ZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q3Vyc29yQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L0N1cnNvckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUN1cnNvckNvbnRleHQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IFJlYWN0LnVzZUNvbnRleHQoQ3Vyc29yQ29udGV4dCk7XHJcbiAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDdXJzb3JDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jdXJzb3InO1xyXG5cclxuY29uc3QgdXNlQ3Vyc29yU3R5bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDdXJzb3JDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IGFkZEN1cnNvckJvcmRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9DVVJTT1JfQk9SREVSJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlQ3Vyc29yQm9yZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX0NVUlNPUl9CT1JERVInIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBhZGRDdXJzb3JDb2xvciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGNvbG9yKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9DVVJTT1JfQ09MT1InLCBwYXlsb2FkOiBjb2xvciB9KTtcclxuICAgIH0sXHJcbiAgICBbZGlzcGF0Y2hdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlc2V0Q3Vyc29yQ29sb3IgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVNFVF9DVVJTT1JfQ09MT1InIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBsb2NrQ3Vyc29yUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdMT0NLX0NVUlNPUl9QT1NJVElPTicsIHBheWxvYWQ6IGNvb3JkaW5hdGVzIH0pO1xyXG4gICAgfSxcclxuICAgIFtkaXNwYXRjaF0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgYWRkQ3Vyc29yQ29sb3IsXHJcbiAgICByZXNldEN1cnNvckNvbG9yLFxyXG4gICAgYWRkQ3Vyc29yQm9yZGVyLFxyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyLFxyXG4gICAgbG9ja0N1cnNvclBvc2l0aW9uLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDdXJzb3JTdHlsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRlcm1zcyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvVGVybXMnOyAvLyBBZGp1c3QgdGhlIHBhdGggYXMgbmVjZXNzYXJ5XHJcblxyXG5jb25zdCBUZXJtcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRlcm1zcy8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVybXM7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgd2hpdGU6ICcjZmZmJyxcbiAgYmxhY2s6ICcjMDAwJyxcbiAgcmVkOiAnI0VBMjgxRScsXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4gIG1heC13aWR0aDogMTIzNHB4O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUZvbnRTdHlsZSA9IGNzc2BcbiAgZm9udC1mYW1pbHk6IHByZXNpY2F2LCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuYDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9
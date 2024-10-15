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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["ContentSection"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Wrap"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
            children: "Terms and Conditions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
            children: "General Terms"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "By accessing and using this website, you agree to comply with the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "If you do not agree to these terms, please do not use our site. We reserve the right to modify these terms at any time, and your continued use of the website following any changes will constitute your acceptance of those changes."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
            children: "Use of the Site"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "The content of the pages of this website is for your general information and use only. It is subject to change without notice. We do not guarantee the accuracy, completeness, or usefulness of this information. You rely on such information at your own risk."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "Our Privacy Policy sets out how we collect, use, and protect your information when you use our website. We are committed to safeguarding your privacy and ensuring that your personal information is handled responsibly."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "We may collect personal information from you when you use our website, including but not limited to your name, email address, and other contact details. This information will only be used for the purposes outlined in our Privacy Policy."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
            children: "Disclaimer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "The information contained in this website is for general information purposes only. We endeavor to keep the information up to date and correct; however, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
            children: "Governing Law"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
            children: "These terms and conditions are governed by and construed in accordance with the laws of [Your Country], and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [Your Country]."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Contacts__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Contacts__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 6
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vQW5pbWF0ZU9uU2NyZWVuLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FuaW1hdGVPblNjcmVlbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdHMvQ29udGFjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250YWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdHMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9UZXJtcy9UZXJtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL1Rlcm1zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9UZXJtcy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9BcnJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9GYWNlYm9vay5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9JbnN0YWdyYW0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvTGlua2VkaW4uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvTG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9Ud2l0dGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL1lvdXR1YmUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0aWNreUN1cnNvci9TdGlja3lDdXJzb3IuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RpY2t5Q3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUN1cnNvclN0eWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Rlcm1zLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3NoYXJlZC9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3NoYXJlZC90ZXh0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsImR1cmF0aW9uIiwiZWFzZSIsIm9wYWNpdHkiLCJ2YXJpYW50cyIsInNob3ciLCJoaWRkZW4iLCJBbmltYXRlT25TY3JlZW4iLCJjaGlsZHJlbiIsImNoaWxkcmVuUHJvcCIsImFuaW1hdGlvbiIsInVzZUFuaW1hdGlvbiIsImluVmlld1JlZiIsImluVmlldyIsInVzZUluVmlldyIsInRyaWdnZXJPbmNlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdGFydCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImhhbmRsZVJlZiIsIm5vZGUiLCJyZWYiLCJjdXJyZW50IiwiY2xvbmVFbGVtZW50IiwiYW5pbWF0ZSIsImluaXRpYWwiLCJtZW1vIiwiQ29udGFjdCIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiX2pzeERFViIsIkNvbnRhY3RTZWN0aW9uIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlNvY2lhbE1lZGlhIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsImNvbnRhaW5lclN0eWxlcyIsInRoZW1lIiwiY29sb3JzIiwicmVkIiwidGV4dCIsInNlY29uZGFyeUZvbnRTdHlsZSIsImJyZWFrcG9pbnRzIiwibWVkaXVtIiwic21hbGwiLCJ0YWJsZXQiLCJUZXJtc0FuZENvbmRpdGlvbnMiLCJDb250ZW50U2VjdGlvbiIsIldyYXAiLCJUaXRsZSIsIlBhcmFncmFwaCIsImRpdiIsImgxIiwicCIsIkFycm93IiwiX3JlZiIsImZpbGxDb2xvciIsIndoaXRlIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJzdmciLCJfb2JqZWN0U3ByZWFkIiwieG1sbnMiLCJ2aWV3Qm94IiwiZCIsImZpbGwiLCJmaWxsUnVsZSIsIkZhY2Vib29rIiwiSW5zdGFncmFtIiwiTGlua2VkSW4iLCJMb2dvQ29udGFpbmVyIiwiU3R5bGVkTG9nbyIsImltZyIsIkxvZ28iLCJzcmMiLCJhbHQiLCJUd2l0dGVyIiwiWW91VHViZSIsIm1lZGlhcyIsImNvbXBvbmVudCIsInVybCIsIllvdXR1YmUiLCJMaW5rZWRpbiIsIkNvbnRhaW5lciIsIkNvbXBvbmVudCIsIlN0aWNreUN1cnNvciIsIkxpbmsiLCJ0YXJnZXQiLCJhIiwic3RpY2t5IiwiY2hpbGRSZWYiLCJ1c2VSZWYiLCJsb2NrQ3Vyc29yUG9zaXRpb24iLCJoYW5kbGVNb3VzZUVudGVyIiwiZXZlbnQiLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJ3aWR0aCIsImxlZnQiLCJ5IiwiaGVpZ2h0IiwidG9wIiwiaGFuZGxlTW91c2VMZWF2ZSIsIklOSVRJQUxfU1RBVEUiLCJjdXJzb3JTdHlsZSIsImJvcmRlcmVkIiwiY29sb3IiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJDdXJzb3JDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkN1cnNvckNvbnRleHRQcm92aWRlciIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInN0b3JlIiwidXNlTWVtbyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDdXJzb3JDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwiYWRkQ3Vyc29yQ29sb3IiLCJyZXNldEN1cnNvckNvbG9yIiwiY29vcmRpbmF0ZXMiLCJUZXJtcyIsIl9GcmFnbWVudCIsIlRlcm1zcyIsImJsYWNrIiwiY3NzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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YUFBQSxDQUFBQSxhQUFBLEtBQ0tnRCxLQUFLO0lBQ1JnQixjQUFjO0lBQ2RDLGdCQUFnQjtJQUNoQjNHLGVBQWU7SUFDZkMsa0JBQWtCO0lBQ2xCd0U7RUFBa0I7QUFFdEIsQ0FBQztBQUVjdkUsNkVBQWMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDSDtBQUNvQixDQUFDO0FBQUE7QUFFL0MsTUFBTTJHLEtBQUssR0FBR0EsQ0FBQSxLQUFNO0VBQ2xCLG9CQUNFMUcsb0VBQUEsQ0FBQTJHLDhEQUFBO0lBQUF0SSxRQUFBLGVBQ0UyQixvRUFBQSxDQUFDNEcsOERBQU07TUFBQXRHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFDO0VBQUMsZ0JBQ1QsQ0FBQztBQUVQLENBQUM7QUFFY2lHLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQ1hwQjtBQUFlO0VBQ2J2RSxLQUFLLEVBQUUsTUFBTTtFQUNiMEUsS0FBSyxFQUFFLE1BQU07RUFDYjVGLEdBQUcsRUFBRTtBQUNQLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0FBQXdDO0FBRXpCNkYsb0hBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUVqQyxNQUFNM0Ysa0JBQWtCLEdBQUcyRixxREFBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQzs7Ozs7Ozs7Ozs7QUNQRCwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy90ZXJtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdGVybXMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZGVsYXk6IDAuMyxcclxuICB0cmFuc2xhdGVZOiB7XHJcbiAgICBkdXJhdGlvbjogMSxcclxuICAgIGVhc2U6IFswLCAwLjcsIDAuMjksIDAuOTddLFxyXG4gIH0sXHJcbiAgb3BhY2l0eToge1xyXG4gICAgZHVyYXRpb246IDEsXHJcbiAgICBlYXNlOiBbMC4yNSwgMC4xLCAwLjI1LCAxLjBdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBzaG93OiB7IHRyYW5zbGF0ZVk6IDAsIG9wYWNpdHk6IDEgfSxcclxuICBoaWRkZW46IHsgdHJhbnNsYXRlWTogNjAsIG9wYWNpdHk6IDAgfSxcclxufTtcclxuXHJcbmNvbnN0IEFuaW1hdGVPblNjcmVlbiA9ICh7IGNoaWxkcmVuOiBjaGlsZHJlblByb3AgfSkgPT4ge1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IFtpblZpZXdSZWYsIGluVmlld10gPSB1c2VJblZpZXcoeyB0cmlnZ2VyT25jZTogdHJ1ZSB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpblZpZXcpIHtcclxuICAgICAgYW5pbWF0aW9uLnN0YXJ0KCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfSwgW2FuaW1hdGlvbiwgaW5WaWV3LCBpblZpZXdSZWZdKTtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW5Qcm9wLCBjaGlsZCA9PiB7XHJcbiAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWYgPSBub2RlID0+IHtcclxuICAgICAgLy8gS2VlcCB5b3VyIG93biByZWZlcmVuY2VcclxuICAgICAgaW5WaWV3UmVmKG5vZGUpO1xyXG5cclxuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgcmVmLCBpZiBhbnlcclxuICAgICAgY29uc3QgeyByZWYgfSA9IGNoaWxkO1xyXG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlZihub2RlKTtcclxuICAgICAgfSBlbHNlIGlmIChyZWYgIT09IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICB2YXJpYW50cyxcclxuICAgICAgdHJhbnNpdGlvbixcclxuICAgICAgYW5pbWF0ZTogYW5pbWF0aW9uLFxyXG4gICAgICBpbml0aWFsOiAnaGlkZGVuJyxcclxuICAgICAgcmVmOiBoYW5kbGVSZWYsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBbmltYXRlT25TY3JlZW4pO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BbmltYXRlT25TY3JlZW4nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi4vLi4vU29jaWFsTWVkaWEnO1xyXG5pbXBvcnQgeyBDb250YWN0U2VjdGlvbiB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxDb250YWN0U2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC10ZXh0XCJcclxuICAgICAgICAgICAgaHJlZj1cInRlbDorMS45MDIuNDE3LjA2MzRcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICs5MS44NjYuMDQ0Ljk5NzBcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC10ZXh0XCJcclxuICAgICAgICAgICAgaHJlZj1cIm1haWx0bzppbmZvQGZ1cnJvdy5zdHVkaW9cIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGluZm9AbHVtaW5leGEuaW5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YWRkcmVzcyBjbGFzc05hbWU9XCJjb2x1bW4gY29udGFjdC10ZXh0XCI+XHJcbiAgICAgICAgICAxNCAxc3QgU3RhZ2UgQmhhbmFzaGFua2FyaTxiciAvPiBCYW5nYWxvcmUsIEtBIElOXHJcbiAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgIDxTb2NpYWxNZWRpYSBjbGFzc05hbWU9XCJjb2x1bW5cIiAvPlxyXG4gICAgICA8L0NvbnRhY3RTZWN0aW9uPlxyXG4gICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29udGFjdCk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvbnRhY3RzJztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAwcHggMjAwcHg7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgLyogb3BhY2l0eTogMTsgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xyXG4gIC8qIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLjcsIDAuMjksIDAuOTcpO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7ICovXHJcbiAgLyogd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJiAuY29sdW1uIHtcclxuICAgIHdpZHRoOiAzMy4zMzMlO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiBhOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5jb250YWN0LXRleHQge1xyXG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmIGFkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiA0MS42NjYlO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJiAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgYWRkcmVzcyB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgcGFkZGluZzogMCAwcHggNjBweDtcclxuXHJcbiAgICAmIGFkZHJlc3Mge1xyXG4gICAgICBwYWRkaW5nOiAxN3B4IDAgNDJweDtcclxuICAgIH1cclxuXHJcbiAgICAmIC5jb250YWN0LXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBXcmFwLFxyXG4gIFRpdGxlLFxyXG4gIFBhcmFncmFwaFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vQ29udGFjdHMnO1xyXG5cclxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxXcmFwPlxyXG4gICAgICAgICAgPFRpdGxlPlRlcm1zIGFuZCBDb25kaXRpb25zPC9UaXRsZT5cclxuXHJcbiAgICAgICAgICA8VGl0bGU+R2VuZXJhbCBUZXJtczwvVGl0bGU+XHJcbiAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBCeSBhY2Nlc3NpbmcgYW5kIHVzaW5nIHRoaXMgd2Vic2l0ZSwgeW91IGFncmVlIHRvIGNvbXBseSB3aXRoIHRoZSBmb2xsb3dpbmcgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBcclxuICAgICAgICAgICAgd2hpY2ggdG9nZXRoZXIgd2l0aCBvdXIgcHJpdmFjeSBwb2xpY3kgZ292ZXJuIG91ciByZWxhdGlvbnNoaXAgd2l0aCB5b3UgaW4gcmVsYXRpb24gdG8gdGhpcyB3ZWJzaXRlLlxyXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHRvIHRoZXNlIHRlcm1zLCBwbGVhc2UgZG8gbm90IHVzZSBvdXIgc2l0ZS4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gbW9kaWZ5IHRoZXNlIHRlcm1zIFxyXG4gICAgICAgICAgICBhdCBhbnkgdGltZSwgYW5kIHlvdXIgY29udGludWVkIHVzZSBvZiB0aGUgd2Vic2l0ZSBmb2xsb3dpbmcgYW55IGNoYW5nZXMgd2lsbCBjb25zdGl0dXRlIHlvdXIgYWNjZXB0YW5jZSBvZiBcclxuICAgICAgICAgICAgdGhvc2UgY2hhbmdlcy5cclxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG5cclxuICAgICAgICAgIDxUaXRsZT5Vc2Ugb2YgdGhlIFNpdGU8L1RpdGxlPlxyXG4gICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgVGhlIGNvbnRlbnQgb2YgdGhlIHBhZ2VzIG9mIHRoaXMgd2Vic2l0ZSBpcyBmb3IgeW91ciBnZW5lcmFsIGluZm9ybWF0aW9uIGFuZCB1c2Ugb25seS4gSXQgaXMgc3ViamVjdCB0byBcclxuICAgICAgICAgICAgY2hhbmdlIHdpdGhvdXQgbm90aWNlLiBXZSBkbyBub3QgZ3VhcmFudGVlIHRoZSBhY2N1cmFjeSwgY29tcGxldGVuZXNzLCBvciB1c2VmdWxuZXNzIG9mIHRoaXMgaW5mb3JtYXRpb24uIFxyXG4gICAgICAgICAgICBZb3UgcmVseSBvbiBzdWNoIGluZm9ybWF0aW9uIGF0IHlvdXIgb3duIHJpc2suXHJcbiAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIFVuYXV0aG9yaXplZCB1c2Ugb2YgdGhpcyB3ZWJzaXRlIG1heSBnaXZlIHJpc2UgdG8gYSBjbGFpbSBmb3IgZGFtYWdlcyBhbmQvb3IgYmUgYSBjcmltaW5hbCBvZmZlbnNlLlxyXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcblxyXG4gICAgICAgICAgPFRpdGxlPlByaXZhY3kgUG9saWN5PC9UaXRsZT5cclxuICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBzZXRzIG91dCBob3cgd2UgY29sbGVjdCwgdXNlLCBhbmQgcHJvdGVjdCB5b3VyIGluZm9ybWF0aW9uIHdoZW4geW91IHVzZSBvdXIgd2Vic2l0ZS4gXHJcbiAgICAgICAgICAgIFdlIGFyZSBjb21taXR0ZWQgdG8gc2FmZWd1YXJkaW5nIHlvdXIgcHJpdmFjeSBhbmQgZW5zdXJpbmcgdGhhdCB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIGhhbmRsZWQgXHJcbiAgICAgICAgICAgIHJlc3BvbnNpYmx5LlxyXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBXZSBtYXkgY29sbGVjdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIHlvdSB3aGVuIHlvdSB1c2Ugb3VyIHdlYnNpdGUsIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gXHJcbiAgICAgICAgICAgIHlvdXIgbmFtZSwgZW1haWwgYWRkcmVzcywgYW5kIG90aGVyIGNvbnRhY3QgZGV0YWlscy4gVGhpcyBpbmZvcm1hdGlvbiB3aWxsIG9ubHkgYmUgdXNlZCBmb3IgdGhlIHB1cnBvc2VzIFxyXG4gICAgICAgICAgICBvdXRsaW5lZCBpbiBvdXIgUHJpdmFjeSBQb2xpY3kuXHJcbiAgICAgICAgICA8L1BhcmFncmFwaD5cclxuXHJcbiAgICAgICAgICA8VGl0bGU+RGlzY2xhaW1lcjwvVGl0bGU+XHJcbiAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBUaGUgaW5mb3JtYXRpb24gY29udGFpbmVkIGluIHRoaXMgd2Vic2l0ZSBpcyBmb3IgZ2VuZXJhbCBpbmZvcm1hdGlvbiBwdXJwb3NlcyBvbmx5LiBXZSBlbmRlYXZvciB0byBrZWVwIFxyXG4gICAgICAgICAgICB0aGUgaW5mb3JtYXRpb24gdXAgdG8gZGF0ZSBhbmQgY29ycmVjdDsgaG93ZXZlciwgd2UgbWFrZSBubyByZXByZXNlbnRhdGlvbnMgb3Igd2FycmFudGllcyBvZiBhbnkga2luZCwgXHJcbiAgICAgICAgICAgIGV4cHJlc3Mgb3IgaW1wbGllZCwgYWJvdXQgdGhlIGNvbXBsZXRlbmVzcywgYWNjdXJhY3ksIHJlbGlhYmlsaXR5LCBzdWl0YWJpbGl0eSwgb3IgYXZhaWxhYmlsaXR5IHdpdGggXHJcbiAgICAgICAgICAgIHJlc3BlY3QgdG8gdGhlIHdlYnNpdGUgb3IgdGhlIGluZm9ybWF0aW9uLCBwcm9kdWN0cywgc2VydmljZXMsIG9yIHJlbGF0ZWQgZ3JhcGhpY3MgY29udGFpbmVkIG9uIHRoZSBcclxuICAgICAgICAgICAgd2Vic2l0ZSBmb3IgYW55IHB1cnBvc2UuXHJcbiAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIEFueSByZWxpYW5jZSB5b3UgcGxhY2Ugb24gc3VjaCBpbmZvcm1hdGlvbiBpcyB0aGVyZWZvcmUgc3RyaWN0bHkgYXQgeW91ciBvd24gcmlzay4gSW4gbm8gZXZlbnQgd2lsbCB3ZSBcclxuICAgICAgICAgICAgYmUgbGlhYmxlIGZvciBhbnkgbG9zcyBvciBkYW1hZ2UgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgaW5kaXJlY3Qgb3IgY29uc2VxdWVudGlhbCBsb3NzIG9yIGRhbWFnZSwgXHJcbiAgICAgICAgICAgIG9yIGFueSBsb3NzIG9yIGRhbWFnZSB3aGF0c29ldmVyIGFyaXNpbmcgZnJvbSBsb3NzIG9mIGRhdGEgb3IgcHJvZml0cyBhcmlzaW5nIG91dCBvZiwgb3IgaW4gY29ubmVjdGlvbiBcclxuICAgICAgICAgICAgd2l0aCwgdGhlIHVzZSBvZiB0aGlzIHdlYnNpdGUuXHJcbiAgICAgICAgICA8L1BhcmFncmFwaD5cclxuXHJcbiAgICAgICAgICA8VGl0bGU+R292ZXJuaW5nIExhdzwvVGl0bGU+XHJcbiAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBUaGVzZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhcmUgZ292ZXJuZWQgYnkgYW5kIGNvbnN0cnVlZCBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIGxhd3Mgb2YgW1lvdXIgQ291bnRyeV0sIFxyXG4gICAgICAgICAgICBhbmQgYW55IGRpc3B1dGVzIHJlbGF0aW5nIHRvIHRoZXNlIHRlcm1zIGFuZCBjb25kaXRpb25zIHdpbGwgYmUgc3ViamVjdCB0byB0aGUgZXhjbHVzaXZlIGp1cmlzZGljdGlvbiBcclxuICAgICAgICAgICAgb2YgdGhlIGNvdXJ0cyBvZiBbWW91ciBDb3VudHJ5XS5cclxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgIDwvV3JhcD5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgICA8Q29udGFjdC8+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgPC9Db250ZW50U2VjdGlvbj5cclxuICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgIDxDb250YWN0IC8+XHJcbiAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVGVybXNBbmRDb25kaXRpb25zKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGVybXMnO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcblxyXG4gIFxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXAgPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuIiwiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBBcnJvdyA9ICh7IGZpbGxDb2xvciA9IGNvbG9ycy53aGl0ZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxtb3Rpb24uc3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMTAxIDU3XCJcclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTMzIDM0SDBWMjRoODEuNDI5TDY2IDcuODg0IDczLjU0OCAwbDE5Ljg3NyAyMC43NjMuMDI3LS4wMjlMMTAxIDI4LjYxOCA3My44MjkgNTdsLTcuNTQ4LTcuODg0TDgwLjc1MyAzNEgzM3pcIlxyXG4gICAgICBmaWxsPXtmaWxsQ29sb3J9XHJcbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICA+PC9wYXRoPlxyXG4gIDwvbW90aW9uLnN2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFycm93O1xyXG4iLCJjb25zdCBGYWNlYm9vayA9IHByb3BzID0+IChcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDExIDI0XCIgey4uLnByb3BzfT5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMy42MjUgMS4yMzZDNC41NDQuMzQ2IDUuODUuMDQ0IDcuMDg1LjAwNiA4LjM4Ny0uMDA0IDkuNjkxLjAwMyAxMC45OTUuMDA0Yy4wMDUgMS40LjAwNiAyLjgwMiAwIDQuMjAzLS44NDMtLjAwMS0xLjY4Ny4wMDItMi41My0uMDAxLS41MzQtLjAzNC0xLjA4My4zNzgtMS4xOC45MTgtLjAxMy45MzctLjAwNCAxLjg3NS0uMDA0IDIuODEzIDEuMjM2LjAwNSAyLjQ3Mi0uMDAyIDMuNzA4LjAwM2E1My4yOTcgNTMuMjk3IDAgMDEtLjQ1IDQuMDVjLTEuMDkxLjAxMS0yLjE4MyAwLTMuMjc1LjAwNy0uMDEgNCAuMDA1IDgtLjAwOCAxMi0xLjYyMi4wMDYtMy4yNDQtLjAwNC00Ljg2Ni4wMDQtLjAzLTQgLjAwMi04LjAwMy0uMDE3LTEyLjAwNC0uNzkxLS4wMDgtMS41ODMuMDA2LTIuMzc0LS4wMDcuMDAzLTEuMzQ0LjAwMS0yLjY4OS4wMDEtNC4wMzMuNzkxLS4wMSAxLjU4Mi4wMDIgMi4zNzMtLjAwNi4wMjQtMS4zMDctLjAyNC0yLjYxNi4wMjUtMy45MjIuMDgtMS4wMzUuNDY2LTIuMDc3IDEuMjI2LTIuNzkyelwiXHJcbiAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXHJcbiAgICAgIGZpbGw9XCIjRUEyODFFXCJcclxuICAgID48L3BhdGg+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9vaztcclxuIiwiY29uc3QgSW5zdGFncmFtID0gcHJvcHMgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjEgMjFcIiB7Li4ucHJvcHN9PlxyXG4gICAgPGcgZmlsbD1cIiNFQTI4MUVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMC41IDBDNy42NDggMCA3LjI5LjAxMiA2LjE3LjA2MyA1LjA1NC4xMTQgNC4yOS4yOTIgMy42MjMuNTUxYTUuMTQ2IDUuMTQ2IDAgMDAtMS44NiAxLjIxMSA1LjE0NyA1LjE0NyAwIDAwLTEuMjEgMS44NkMuMjkxIDQuMjkuMTEzIDUuMDUzLjA2MiA2LjE3MS4wMTIgNy4yOSAwIDcuNjQ4IDAgMTAuNWMwIDIuODUyLjAxMiAzLjIxLjA2MyA0LjMzLjA1MSAxLjExNy4yMjkgMS44OC40ODggMi41NDguMjY5LjY5LjYyOCAxLjI3NiAxLjIxMSAxLjg2LjU4NC41ODMgMS4xNy45NDIgMS44NiAxLjIxLjY2OC4yNiAxLjQzMS40MzggMi41NDkuNDg5IDEuMTIuMDUgMS40NzcuMDYzIDQuMzI5LjA2MyAyLjg1MiAwIDMuMjEtLjAxMiA0LjMzLS4wNjMgMS4xMTctLjA1MSAxLjg4LS4yMjkgMi41NDgtLjQ4OGE1LjE0NiA1LjE0NiAwIDAwMS44Ni0xLjIxMSA1LjE0NyA1LjE0NyAwIDAwMS4yMS0xLjg2Yy4yNi0uNjY4LjQzOC0xLjQzMS40ODktMi41NDkuMDUxLTEuMTIuMDYzLTEuNDc3LjA2My00LjMyOSAwLTIuODUyLS4wMTItMy4yMS0uMDYzLTQuMzMtLjA1MS0xLjExNy0uMjI5LTEuODgtLjQ4OC0yLjU0OGE1LjE0NyA1LjE0NyAwIDAwLTEuMjExLTEuODYgNS4xNDYgNS4xNDYgMCAwMC0xLjg2LTEuMjFjLS42NjgtLjI2LTEuNDMxLS40MzgtMi41NDktLjQ4OUMxMy43MS4wMTIgMTMuMzUyIDAgMTAuNSAwbTAgMS44OTJjMi44MDQgMCAzLjEzNi4wMSA0LjI0My4wNjEgMS4wMjQuMDQ3IDEuNTguMjE4IDEuOTUuMzYyLjQ5LjE5Ljg0LjQxOCAxLjIwNy43ODUuMzY3LjM2OC41OTUuNzE3Ljc4NSAxLjIwNy4xNDQuMzcuMzE1LjkyNi4zNjIgMS45NS4wNSAxLjEwNy4wNjEgMS40NC4wNjEgNC4yNDMgMCAyLjgwNC0uMDEgMy4xMzYtLjA2MSA0LjI0My0uMDQ3IDEuMDI0LS4yMTggMS41OC0uMzYyIDEuOTUtLjE5LjQ5LS40MTguODQtLjc4NSAxLjIwN2EzLjI1MiAzLjI1MiAwIDAxLTEuMjA3Ljc4NWMtLjM3LjE0NC0uOTI2LjMxNS0xLjk1LjM2Mi0xLjEwNy4wNS0xLjQ0LjA2MS00LjI0My4wNjEtMi44MDQgMC0zLjEzNi0uMDEtNC4yNDMtLjA2MS0xLjAyNC0uMDQ3LTEuNTgtLjIxOC0xLjk1LS4zNjItLjQ5LS4xOS0uODQtLjQxOC0xLjIwNy0uNzg1YTMuMjU0IDMuMjU0IDAgMDEtLjc4NS0xLjIwN2MtLjE0NC0uMzctLjMxNS0uOTI2LS4zNjItMS45NS0uMDUtMS4xMDctLjA2MS0xLjQ0LS4wNjEtNC4yNDMgMC0yLjgwNC4wMS0zLjEzNi4wNjEtNC4yNDMuMDQ3LTEuMDI0LjIxOC0xLjU4LjM2Mi0xLjk1LjE5LS40OS40MTgtLjg0Ljc4NS0xLjIwN2EzLjI1MyAzLjI1MyAwIDAxMS4yMDctLjc4NWMuMzctLjE0NC45MjYtLjMxNSAxLjk1LS4zNjIgMS4xMDctLjA1IDEuNDQtLjA2MSA0LjI0My0uMDYxXCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCBkPVwiTTEwLjUgMTQuMDdhMy41NyAzLjU3IDAgMTEwLTcuMTQgMy41NyAzLjU3IDAgMDEwIDcuMTRtMC05LjA3YTUuNSA1LjUgMCAxMDAgMTEgNS41IDUuNSAwIDAwMC0xMVwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggZD1cIk0xNyA1YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMFwiPjwvcGF0aD5cclxuICAgIDwvZz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc3RhZ3JhbTtcclxuIiwiY29uc3QgTGlua2VkSW4gPSBwcm9wcyA9PiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLnByb3BzfT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTIwLjQ1MiAyMC40NTJoLTMuNTQ4di01LjU2OGMwLTEuMzI3LS4wMjctMy4wMzQtMS44NDQtMy4wMzQtMS44NDMgMC0yLjEyNiAxLjQzLTIuMTI2IDIuOTA4djUuNjk0aC0zLjU0OFY5aDMuNDA0djEuNDUxaC4wNDljLjQ3NS0uODk3IDEuNjM3LTEuODM5IDMuMzU3LTEuODM5IDMuNTk2IDAgNC4yNTIgMi4zNyA0LjI1MiA1LjQ0NHY2LjM5N3ptLTE1Ljk0NC0xMi41OWMtMS4xNTcgMC0yLjA5LjkzNC0yLjA5IDIuMDlzLjkzNCAyLjA5IDIuMDkgMi4wOSAyLjA5LS45MzQgMi4wOS0yLjA5LS45MzQtMi4wOS0yLjA5LTIuMDl6bTEuNzc0IDEyLjU5SDIuNjc4VjloMy41NDh2MTEuNDUyem0xNy43NjgtMjEuNDUySDEuNjc4Qy43NSAwIDAgLjc1IDAgMS42Nzh2MjAuNjQ0QzAgMjMuMjUuNzUgMjQgMS42NzggMjRoMjAuNjQ0QzIzLjI1IDI0IDI0IDIzLjI1IDI0IDIyLjMyMlYxLjY3OEMyNCAuNzUgMjMuMjUgMCAyMi4zMjIgMHpcIlxyXG4gICAgICAgIGZpbGw9XCIjRUEyODFFXCIgXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExpbmtlZEluO1xyXG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTG9nb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFbnN1cmUgcG9zaXRpb25pbmcgY29udGV4dCAqL1xyXG4gICAgICAgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICByaWdodDogMjhweDtcclxuICBib3R0b206IDE3cHg7ICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmltZ2BcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2dvQ29udGFpbmVyPlxyXG4gICAgICA8U3R5bGVkTG9nb1xyXG4gICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiIC8vIFJlZmVyZW5jZSBkaXJlY3RseSBmcm9tIHRoZSBwdWJsaWMgZm9sZGVyXHJcbiAgICAgICAgYWx0PVwiTHVtaW5leGEgTG9nb1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L0xvZ29Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImNvbnN0IFR3aXR0ZXIgPSBwcm9wcyA9PiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLnByb3BzfT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTIzLjYzMyA0Ljk5OWMtLjg4NS4zOTItMS44My42NTUtMi44MjYuNzc1YTQuOTM1IDQuOTM1IDAgMDAyLjE2My0yLjcyNCA5Ljg2MyA5Ljg2MyAwIDAxLTMuMTI3IDEuMiA0LjkyNiA0LjkyNiAwIDAwLTguMzggNC40ODJBMTMuOTYgMTMuOTYgMCAwMTEuNjcgMy4xNDlhNC45MjMgNC45MjMgMCAwMDEuNTIzIDYuNTY1IDQuOTA0IDQuOTA0IDAgMDEtMi4yMjgtLjYxNXYuMDYxYTQuOTMzIDQuOTMzIDAgMDAzLjk0NiA0Ljg0IDQuOTI3IDQuOTI3IDAgMDEtMi4yMTUuMDg0IDQuOTM1IDQuOTM1IDAgMDA0LjYwNCAzLjQxN0E5Ljg2NyA5Ljg2NyAwIDAxMCAyMC4yNTNhMTMuOTM1IDEzLjkzNSAwIDAwNy41NDggMi4yMTJjOS4wNTggMCAxNC4wMDMtNy41MDcgMTQuMDAzLTEzLjk4NSAwLS4yMTMtLjAwNS0uNDI2LS4wMTQtLjYzN0ExMC4wMzIgMTAuMDMyIDAgMDAyNCA0LjU4M2E5Ljk2NSA5Ljk2NSAwIDAxLTIuMzY3LjY0OSA0LjkxMyA0LjkxMyAwIDAwMi4xNTctMi43MjR6XCJcclxuICAgICAgICBmaWxsPVwiI0VBMjgxRVwiIC8vIENoYW5nZWQgdG8gcmVkXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFR3aXR0ZXI7XHJcbiAgIiwiY29uc3QgWW91VHViZSA9IHByb3BzID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjMuNDk4IDYuMTg2Yy0uMjczLTEuMDc1LTEuMDc1LTEuOTIyLTIuMTMtMi4wODYtMS45OTUtLjE5Ny00LjM1OC0uMTk3LTYuODc4LS4xOTdzLTQuODgzIDAtNi44NzguMTk3Yy0xLjA1NS4xNjQtMS44NTcgMS4wMTEtMi4xMyAyLjA4NkM1LjAwMSA4LjM1NCA1IDEyIDUgMTJzMCAzLjY0Ni4zNjIgNS44MTRjLjI3MyAxLjA3NSAxLjA3NSAxLjkyMiAyLjEzIDIuMDg2IDEuOTk1LjE5NyA0LjM1OC4xOTcgNi44NzguMTk3czQuODgzIDAgNi44NzgtLjE5N2MxLjA1NS0uMTY0IDEuODU3LTEuMDExIDIuMTMtMi4wODZDMjMgMTUuNjQ2IDIzIDEyIDIzIDEyczAtMy42NDYtLjUwMi01LjgxNHpNOS41NDUgMTUuMTYyVjguODM4bDYuMjM2IDMuMTYyLTYuMjM2IDMuMTYyelwiXHJcbiAgICAgICAgZmlsbD1cIiNFQTI4MUVcIiAvLyBZb3VUdWJlIHJlZFxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBZb3VUdWJlO1xyXG4gICIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3cgfSBmcm9tICcuL0Fycm93JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEluc3RhZ3JhbSB9IGZyb20gJy4vSW5zdGFncmFtJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvIH0gZnJvbSAnLi9Mb2dvJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBZb3V0dWJlIH0gZnJvbSAnLi9Zb3V0dWJlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRpbiB9IGZyb20gJy4vTGlua2VkaW4nO1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHsgSW5zdGFncmFtLCBGYWNlYm9vaywgWW91dHViZSwgVHdpdHRlciwgTGlua2VkaW4gfSBmcm9tICcuLi9JY29ucyc7XHJcbmltcG9ydCBTdGlja3lDdXJzb3IgZnJvbSAnLi4vU3RpY2t5Q3Vyc29yJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgbWVkaWFzID0gW1xyXG4gIHsgY29tcG9uZW50OiBJbnN0YWdyYW0sIHVybDogJ2luc3RhZ3JhbS5jb20vX2x1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogRmFjZWJvb2ssIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hcmx1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogWW91dHViZSwgdXJsOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScgfSxcclxuICB7IGNvbXBvbmVudDogVHdpdHRlciwgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9fbHVtaW5leGEnIH0sXHJcbiAgeyBjb21wb25lbnQ6IExpbmtlZGluLCB1cmw6ICdodHRwczovL2xpbmtlZGluLmNvbS9jb21wYW55L2x1bWluZXhhLXRlY2hub2xvZ3knIH0sXHJcbl07XHJcblxyXG5jb25zdCBTb2NpYWxNZWRpYSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB7Li4ucHJvcHN9PlxyXG4gICAgICB7bWVkaWFzLm1hcCgoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgdXJsIH0pID0+IChcclxuICAgICAgICA8U3RpY2t5Q3Vyc29yIGtleT17dXJsfT5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9TdGlja3lDdXJzb3I+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU29jaWFsTWVkaWEpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Tb2NpYWxNZWRpYSc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgLyogQ2hhbmdlZCBmcm9tIGZsZXgtc3RhcnQgdG8gZmxleC1lbmQgKi9cbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICB3aWR0aDogMzFweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAmOmhvdmVyIHN2ZyBwYXRoIHtcbiAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuXHJcbmNvbnN0IFN0aWNreUN1cnNvciA9ICh7IGNoaWxkcmVuOiBjaGlsZHJlblByb3AsIHN0aWNreSA9IHRydWUgfSkgPT4ge1xyXG4gIGNvbnN0IGNoaWxkUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHsgbG9ja0N1cnNvclBvc2l0aW9uIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlblByb3AsIGNoaWxkID0+IHtcclxuICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUgfSA9IGNoaWxkLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSBldmVudCA9PiB7XHJcbiAgICAgIGlmICghY2hpbGRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBjaGlsZFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgY29uc3QgeCA9IHBvc2l0aW9uLndpZHRoIC8gMiArIHBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBwb3NpdGlvbi5oZWlnaHQgLyAyICsgcG9zaXRpb24udG9wO1xyXG4gICAgICBsb2NrQ3Vyc29yUG9zaXRpb24oeyB4LCB5IH0pO1xyXG5cclxuICAgICAgaWYgKG9uTW91c2VFbnRlcikge1xyXG4gICAgICAgIG9uTW91c2VFbnRlcihldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IGV2ZW50ID0+IHtcclxuICAgICAgaWYgKCFjaGlsZFJlZi5jdXJyZW50KSByZXR1cm47XHJcblxyXG4gICAgICBsb2NrQ3Vyc29yUG9zaXRpb24obnVsbCk7XHJcblxyXG4gICAgICBpZiAob25Nb3VzZUxlYXZlKSB7XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWYgPSBub2RlID0+IHtcclxuICAgICAgLy8gS2VlcCB5b3VyIG93biByZWZlcmVuY2VcclxuICAgICAgY2hpbGRSZWYuY3VycmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCByZWYsIGlmIGFueVxyXG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGQ7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlZihub2RlKTtcclxuICAgICAgfSBlbHNlIGlmIChyZWYgIT09IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICBvbk1vdXNlRW50ZXI6IGhhbmRsZU1vdXNlRW50ZXIsXHJcbiAgICAgIG9uTW91c2VMZWF2ZTogaGFuZGxlTW91c2VMZWF2ZSxcclxuICAgICAgcmVmOiBoYW5kbGVSZWYsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHN0aWNreSA/IGNoaWxkcmVuIDogY2hpbGRyZW5Qcm9wO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTdGlja3lDdXJzb3IpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TdGlja3lDdXJzb3InO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBjdXJzb3JTdHlsZToge1xyXG4gICAgYm9yZGVyZWQ6IGZhbHNlLFxyXG4gICAgY29sb3I6IGNvbG9ycy5yZWQsXHJcbiAgfSxcclxuICBwb3NpdGlvbjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdVUERBVEVfQ1VSU09SX1NUWUxFJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdBRERfQ1VSU09SX0JPUkRFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBib3JkZXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnUkVNT1ZFX0NVUlNPUl9CT1JERVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgYm9yZGVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdBRERfQ1VSU09SX0NPTE9SJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGNvbG9yOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnUkVTRVRfQ1VSU09SX0NPTE9SJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGNvbG9yOiBJTklUSUFMX1NUQVRFLmN1cnNvclN0eWxlLmNvbG9yLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdMT0NLX0NVUlNPUl9QT1NJVElPTic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwb3NpdGlvbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ3Vyc29yQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDdXJzb3JDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBJTklUSUFMX1NUQVRFKTtcclxuICBjb25zdCBzdG9yZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHsgc3RhdGUsIGRpc3BhdGNoIH0pLCBbc3RhdGVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEN1cnNvckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9DdXJzb3JDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDdXJzb3JDb250ZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KEN1cnNvckNvbnRleHQpO1xyXG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ3Vyc29yQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY3Vyc29yJztcclxuXHJcbmNvbnN0IHVzZUN1cnNvclN0eWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ3Vyc29yQ29udGV4dCgpO1xyXG5cclxuICBjb25zdCBhZGRDdXJzb3JCb3JkZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ1VSU09SX0JPUkRFUicgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUN1cnNvckJvcmRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFTU9WRV9DVVJTT1JfQk9SREVSJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgYWRkQ3Vyc29yQ29sb3IgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChjb2xvcikgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ1VSU09SX0NPTE9SJywgcGF5bG9hZDogY29sb3IgfSk7XHJcbiAgICB9LFxyXG4gICAgW2Rpc3BhdGNoXSxcclxuICApO1xyXG5cclxuICBjb25zdCByZXNldEN1cnNvckNvbG9yID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVTRVRfQ1VSU09SX0NPTE9SJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgbG9ja0N1cnNvclBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9DS19DVVJTT1JfUE9TSVRJT04nLCBwYXlsb2FkOiBjb29yZGluYXRlcyB9KTtcclxuICAgIH0sXHJcbiAgICBbZGlzcGF0Y2hdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGFkZEN1cnNvckNvbG9yLFxyXG4gICAgcmVzZXRDdXJzb3JDb2xvcixcclxuICAgIGFkZEN1cnNvckJvcmRlcixcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcixcclxuICAgIGxvY2tDdXJzb3JQb3NpdGlvbixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ3Vyc29yU3R5bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUZXJtc3MgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL1Rlcm1zJzsgLy8gQWRqdXN0IHRoZSBwYXRoIGFzIG5lY2Vzc2FyeVxyXG5cclxuY29uc3QgVGVybXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUZXJtc3MvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlcm1zO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHdoaXRlOiAnI2ZmZicsXG4gIGJsYWNrOiAnIzAwMCcsXG4gIHJlZDogJyNFQTI4MUUnLFxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuICBtYXgtd2lkdGg6IDEyMzRweDtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbmA7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlGb250U3R5bGUgPSBjc3NgXG4gIGZvbnQtZmFtaWx5OiBwcmVzaWNhdiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbmA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
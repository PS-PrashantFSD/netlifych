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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/nexar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Home/Contacts/styles.js");
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SocialMedia */ "./components/SocialMedia/index.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _Home_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Home/Form */ "./components/Home/Form/index.js");
/* harmony import */ var browserslist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! browserslist */ "browserslist");
/* harmony import */ var browserslist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(browserslist__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Contacts\\Contacts.jsx";







const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["FooterContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "footer-columns",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "logo",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              src: "logo.png",
              alt: "Luminexa Company Logo",
              style: {
                width: '160px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              color: 'white'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              children: "Luminexa Technologies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 41
            }, undefined), ", NB's Group of Company"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
            style: {
              color: 'red'
            },
            children: "nex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Your go-to source for innovative solutions. We're here to help you achieve your goals."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "social-media",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_SocialMedia__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
            style: {
              color: 'white'
            },
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Mobile: +91.866.044.9970"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Mobile: +91.948.161.5582"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Email: info@luminexa.in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Address: 14 1st Stage Bhanashankari, Bangalore, KA IN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
            style: {
              color: 'white'
            },
            children: "Legal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/privacy",
              children: "Privacy Policy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/terms",
              children: "Terms and Conditions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/disclaimer",
              children: "Disclaimer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
            style: {
              color: 'white'
            },
            children: "Other"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/blog",
              children: "Blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/careers",
              children: "Career"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/services",
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "footer-note",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
          style: {
            color: 'Gray'
          },
          children: ["\xA9 Copyright ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
            children: "Luminexa Technologies"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 57
          }, undefined), " 2024. All Right Reserved"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

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
/*! exports provided: FooterContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContainer", function() { return FooterContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);


const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].footer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: ${({
  theme
}) => theme.colors.background};
  color: #878787;
  border-top: 0.5px solid gray;

  & .footer-columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px; // Adjust max-width as needed
    gap: 20px; // Equal gap between columns

    & .column {
      flex: 1;
      min-width: 200px; 
      text-align: left; 
      color: gray;

      & h3 {
        margin-bottom: 10px;
      }

      & a {
        margin-bottom:3px;
        color: gray;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  & .footer-note {
    font-size: 14px;
    align-self: center;
    margin-top: 20px;
  }

  .social-media{
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    & .footer-columns {
      flex-direction: column; // Stack columns on smaller screens
      align-items: center;
      gap: 10px; // Adjust gap for mobile view if needed
    }

    & .column {
      width: 90%; // Make columns full width on mobile
      margin-left: 20px;
      margin-right: 20px
    }
  }
`;

/***/ }),

/***/ "./components/Home/Form/Form.jsx":
/*!***************************************!*\
  !*** ./components/Home/Form/Form.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Form\\Form.jsx";






const ContactSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_3__["default"]};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 200px;
  width: 100%;

  ${({
  theme
}) => theme.breakpoints.medium`
  margin-bottom: 60px;
    width: 80%;
  `};

  ${({
  theme
}) => theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  `};
`;
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  
  width: 58.333%;

  & h1 {
    font-size: 90px;
    color: white;
  }

  & p {
    color: white;
    line-height: 1.5;
    margin: 10px 0 0 0;
  }

  ${({
  theme
}) => theme.breakpoints.small`
    width: 100%;
  `};
`;
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 50%;

  ${({
  theme
}) => theme.breakpoints.small`
    width: 100%;
  `};
`;
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({
  theme
}) => theme.colors.gray};
  border-radius: 0px;
  font-size: 1rem;

  &:focus {
    border-color: ${({
  theme
}) => theme.colors.red};
    outline: none;
  }
`;
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({
  theme
}) => theme.colors.gray};
  border-radius: 0px;
  font-size: 1rem;
  resize: none;

  &:focus {
    border-color: ${({
  theme
}) => theme.colors.red};
    outline: none;
  }
`;
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  padding: 10px 15px;
  border: none;
  border-radius: 0px;
  background-color: ${({
  theme
}) => theme.colors.red};
  color: black;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({
  theme
}) => theme.colors.darkRed};
  }
`;
const ContactForm = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ContactSection, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TextWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        children: "Contact Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: "nexAR - Augmented Reality finds diverse applications across marketing and advertising, retail and e-commerce."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
          children: "\xA9 Luminexa Technologies."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined), " Pioneering in web and augmented reality solutions, we are dedicated to transforming digital experiences. Connect with us for innovative, custom-tailored technology services that drive your business forward."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(FormWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Form, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
          type: "text",
          placeholder: "Your Name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
          type: "email",
          placeholder: "Your Email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TextArea, {
          rows: "5",
          placeholder: "Your Message",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SubmitButton, {
          type: "submit",
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        style: {
          marginTop: '10px'
        },
        children: ["We'd love to hear ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
          children: "from you!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/Home/Form/index.js":
/*!***************************************!*\
  !*** ./components/Home/Form/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./components/Home/Form/Form.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Nexar/Nexar.jsx":
/*!*****************************************!*\
  !*** ./components/Home/Nexar/Nexar.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _Misc_Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Misc/Cards */ "./components/Misc/Cards.jsx");
/* harmony import */ var _Icons_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons/Arrow */ "./components/Icons/Arrow.jsx");
/* harmony import */ var _Home_Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Home/Contacts */ "./components/Home/Contacts/index.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./components/Home/Nexar/styles.js");
/* harmony import */ var _Misc_Scard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Misc/Scard */ "./components/Misc/Scard.jsx");
/* harmony import */ var _Misc_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Misc/Button */ "./components/Misc/Button.jsx");
/* harmony import */ var _Misc_Carde__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Misc/Carde */ "./components/Misc/Carde.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Nexar\\Nexar.jsx";












const Nexar = () => {
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const handleAnchorHoverStart = () => {
    addCursorBorder();
  };
  const handleAnchorHoverEnd = () => {
    removeCursorBorder();
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["ContentSection"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/nexar",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["ProjectAnchor"], {
          onMouseEnter: handleAnchorHoverStart,
          onMouseLeave: handleAnchorHoverEnd,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["ProjectInfo"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["ProjectTitle"], {
              children: ["nexAR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                className: "arrow",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["Text1"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["Text2"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["Text3"], {
            children: ["Luminexa providing, Image tracking and virtual software\u2019s (nexAR) based on AR & XR. They aim to revolutionize digital content experiences by integrating it seamlessly with the real world, offering unique, interactive experiences that captivate audiences", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Misc_Carde__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["TextWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
            src: "nexars.png",
            alt: "Description of the image",
            style: {
              width: '300px',
              height: 'auto',
              marginBottom: '20PX'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
            children: "Our target is to revolutionize visual experiences, bridging the gap between the physical and digital worlds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
            children: "Our company specializes in cutting-edge digital solutions, including advanced Augmented Reality software, user-friendly Web Development, and innovative AI-based object detection systems for smart recognition."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Misc_Cards__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
        style: {
          fontSize: '80px'
        },
        children: "Explore~"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Misc_Scard__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
        style: {
          fontSize: '60px',
          marginBottom: '20px'
        },
        children: "Featured Product - nexAR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Misc_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
        style: {
          marginBottom: '90px'
        },
        children: " In today's competitive market, in every businesses (Small scale business to large scale business) seeks for innovative solutions to engage their audience more effectively. Traditional methods often fail to capture attention and provide interactive experiences. Luminexa addresses this gap by leveraging Augmented Reality (AR) & Mixed Realty (XR) to enhance user engagement and interaction."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Home_Contacts__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Nexar));

/***/ }),

/***/ "./components/Home/Nexar/index.js":
/*!****************************************!*\
  !*** ./components/Home/Nexar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nexar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nexar */ "./components/Home/Nexar/Nexar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Nexar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Nexar/styles.js":
/*!*****************************************!*\
  !*** ./components/Home/Nexar/styles.js ***!
  \*****************************************/
/*! exports provided: ContentSection, ProjectAnchor, Text, ProjectInfo, ProjectTitle, ImagePreview, AboutDescription, VideoPreview, MenuContainer, MenuButton, TextWrapper, Text1, Text2, Text3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAnchor", function() { return ProjectAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfo", function() { return ProjectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTitle", function() { return ProjectTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return ImagePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDescription", function() { return AboutDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPreview", function() { return VideoPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text1", function() { return Text1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text2", function() { return Text2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text3", function() { return Text3; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MenuButton */ "./components/MenuButton/index.js");





const ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  position: relative;
  display: block;
  margin-top: 200px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    margin-top: 100px;
    flex-direction: row; /* Change to row on larger screens */
  `};
`;
const ProjectAnchor = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].a)`
  display: block;
  width: 0%;
  height: 350px;
  margin: 0; /* Adjusted margin-bottom for less gap */

  ${({
  theme
}) => theme.breakpoints.tablet`
    height: 190px; 
  `};
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2`
  margin: 0;
  font-size: 2rem;
  line-height: 1;
  font-weight: 500;
  max-width: 640px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    font-size: 1.5rem;
    line-height: 1;

    & br {
      display: none;
    }
  `};
`;
const ProjectInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  margin-left: 8.333%;
  width: 83.333%;
  position: relative;

  & h3,
  & .project-info {
    position: absolute;
    top: 75px;
    z-index: 1;
    padding-left: 20px;
  }

  & h3 {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
  }

  & .project-info {
    right: 0;

    & h4 {
      ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
      display: inline-block;
      font-size: 0.875rem;
      line-height: 23px;
      margin-left: 32px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  ${({
  theme
}) => theme.breakpoints.small`
    margin-left: 0;
    width: 83.333%;

    & .project-info {
      display: none;
    }
  `};

  ${({
  theme
}) => theme.breakpoints.tablet`
    & h3 {
      font-size: 1.125rem;
      line-height: 1.2777777778;
      top: 17px;
    }
  `};
`;
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].h1)`
  position: absolute;
  top: 30px;
  left: -3px;
  z-index: 1;

  & .arrow {
    display: block;
    overflow: hidden;
    margin: 25px 0 0 3px;
    height: 57px;
    width: 101px;

    & svg path {
      fill: ${({
  theme
}) => theme.text};
    }
  }

  ${({
  theme
}) => theme.breakpoints.tablet`
    top: 30px;
    left: 0;
    font-size: 3.75rem;
    line-height: 0.7166666667;

    & .arrow {
      margin: 10px 0 0 2px;
      width: 76.19px;
      height: 43px;
    }
  `};
`;
const ImagePreview = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 480px; /* Adjust as needed */

  & img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
  }

  ${({
  theme
}) => theme.breakpoints.tablet`
    height: 190px; /* Adjust for tablet view */
  `};
`;
const AboutDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  flex: 1; /* Take up available space */
  padding: 120px 60px 160px 60px; /* Reduced padding to decrease space */
  margin-bottom: 40px;
  font-size: 1rem; /* Increase font size */
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  text-align: left; /* Align text to the left */

  & h2 {
    margin: 0; /* Remove default margin */
  }

  ${({
  theme
}) => theme.breakpoints.tablet`
    font-size: 1rem; /* Adjust font size for smaller screens */
    padding: 50px;
  `};
`;
const VideoPreview = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 480px;
  margin: 0;

  & video {
    width: 100%;
  }

  ${({
  theme
}) => theme.breakpoints.small`
    width: calc(100% + 64px);
    margin-left: -32px;
  `};

  ${({
  theme
}) => theme.breakpoints.tablet`
    height: 190px;
  `};
`;
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${({
  theme
}) => theme.breakpoints.tablet`
    justify-content: flex-start;
  `};
`;
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_MenuButton__WEBPACK_IMPORTED_MODULE_4__["default"])`
  width: calc(25% - 30px);
  background-color: ${({
  theme
}) => theme.colors.red};

  &::before,
  &::after {
    background: ${({
  theme
}) => theme.background};
  }

  & span {
    position: relative;
    opacity: 1;
    right: 0;
    color: ${({
  theme
}) => theme.background};
  }

  ${({
  theme
}) => theme.breakpoints.medium`
    width: calc(33.333% - 30px);
  `};

  ${({
  theme
}) => theme.breakpoints.small`
    width: 100%;
    max-width: 235px;

    & span {
      display: inline;
    }
  `};

  ${({
  theme
}) => theme.breakpoints.tablet`
    height: 47px;
    max-width: 215px;
    padding: 12px 20px;

    & span {
      font-size: 1.125rem;
      line-height: 1.2777777778;
    }
  `};
`;
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center; /* Center the items vertically */
  justify-content: space-between; /* Space out the text and card */
  width: 100%;
  gap: 33px; /* Space between text and card */
  margin-bottom: 180px;

  & h2 {
    margin: 0;
    margin-bottom: 44px;
    max-width: 600px;
    font-size: 2.625rem;
    line-height: 1;
    font-weight: 500;
  }

  & p {
    max-width: 448px;
    margin: 6.9px 0;
    line-height: 1.2777777778;
  }

  ${({
  theme
}) => theme.breakpoints.small`
    flex-direction: column; /* Stack vertically on small screens */
    align-items: flex-start; /* Align items to the start on small screens */
    width: 100%;

    & h2 {
      margin-bottom: 20px; /* Adjust margin for smaller screens */
    }
  `};

  ${({
  theme
}) => theme.breakpoints.tablet`
    & h2 {
      font-size: 1.5rem;
      margin-bottom: 34px;
    }
  `};
`;
const Text1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};

  margin-bottom: 210px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    margin-bottom: 107px;
  `};
`;
const Text2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-left: 0;
  width: 100%;

  ${({
  theme
}) => theme.breakpoints.small`
    width: 100%;
    
  `};
`;
const Text3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex; /* Make it a flex container */
  align-items: center; /* Center items vertically */
  gap: 30px; /* Add some space between text and card */
  margin: 0;
  font-size: 2.625rem;
  line-height: 1;
  font-weight: 500;
  max-width: 100%;

  ${({
  theme
}) => theme.breakpoints.tablet`
    font-size: 1.5rem;
    line-height: 1;
    display: block;

    & br {
      display: none;
    }
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Facebook.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// icon:facebook | Bootstrap https://icons.getbootstrap.com/ | Bootstrap


function IconFacebook(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    fill: "white",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (IconFacebook);

/***/ }),

/***/ "./components/Icons/Instagram.jsx":
/*!****************************************!*\
  !*** ./components/Icons/Instagram.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Instagram.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


function IconInstagram(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 1024 1024",
    fill: "white",
    height: "1em",
    width: "1em"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (IconInstagram);

/***/ }),

/***/ "./components/Icons/Linkedin.jsx":
/*!***************************************!*\
  !*** ./components/Icons/Linkedin.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Linkedin.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// icon:linkedin-circled | Entypo http://entypo.com/ | Daniel Bruce


function IconLinkedinCircled(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 960 1000",
    fill: "white",
    height: "1em",
    width: "1em"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (IconLinkedinCircled);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Twitter.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


function IconTwitterCircle(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 1024 1024",
    fill: "white",
    height: "1em",
    width: "1em"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (IconTwitterCircle);

/***/ }),

/***/ "./components/Icons/Youtube.jsx":
/*!**************************************!*\
  !*** ./components/Icons/Youtube.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Icons\\Youtube.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// icon:youtube | Ant Design Icons https://ant.design/components/icon/ | Ant Design


function IconYoutube(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 1024 1024",
    fill: "white",
    height: "1em",
    width: "1em"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (IconYoutube);

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

/***/ "./components/MenuButton/MenuButton.jsx":
/*!**********************************************!*\
  !*** ./components/MenuButton/MenuButton.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/menu */ "./context/menu.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _StickyCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StickyCursor */ "./components/StickyCursor/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/MenuButton/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\MenuButton\\MenuButton.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }






const MenuButton = (_ref, ref) => {
  let {
      sticky = true,
      title = ''
    } = _ref,
    props = _objectWithoutProperties(_ref, ["sticky", "title"]);
  const [, dispatch] = Object(_context_menu__WEBPACK_IMPORTED_MODULE_1__["useMenuContext"])();
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const handleOnToggle = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE_MENU'
    });
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_StickyCursor__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sticky: sticky,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Button"], _objectSpread(_objectSpread({
      onMouseEnter: addCursorBorder,
      onMouseLeave: removeCursorBorder,
      onClick: handleOnToggle,
      ref: ref
    }, props), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(MenuButton)));

/***/ }),

/***/ "./components/MenuButton/index.js":
/*!****************************************!*\
  !*** ./components/MenuButton/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuButton */ "./components/MenuButton/MenuButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/MenuButton/styles.js":
/*!*****************************************!*\
  !*** ./components/MenuButton/styles.js ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shared/text */ "./styles/shared/text.js");


const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  position: relative;
  display: block;
  text-align: left;
  width: 75px;
  height: 63px;
  padding: 20px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    width: 35px;
    height: 7px;
    display: block;
    transform: translateY(-50%);
    background: ${({
  theme
}) => theme.text};
  }

  &::before {
    margin-top: -8px;
  }

  &::after {
    margin-top: 8px;
  }

  & span {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_1__["secondaryFontStyle"]};
    position: absolute;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity;
    pointer-events: none;
    color: ${({
  theme
}) => theme.text};
  }

  &:hover span {
    opacity: 1;
  }

  ${({
  theme
}) => theme.breakpoints.small`
    & span {
      display: none;
    }
  `};

  ${({
  theme
}) => theme.breakpoints.tablet`
    width: 66px;

    &::before,
    &::after {
      width: 26px;
      height: 5px;
    }

    &::before {
      margin-top: -6px;
    }

    &::after {
      margin-top: 6px;
    }
  `};
`;

/***/ }),

/***/ "./components/Misc/Button.jsx":
/*!************************************!*\
  !*** ./components/Misc/Button.jsx ***!
  \************************************/
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Button.jsx";



const Button = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "View More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  button {
  border: none;
  width: 140px;
  height: 50px;
  color: #fff;
  z-index: 1;
  display: flex;
  background: #000;
  position: relative;
  cursor: pointer;
  margin: 20px 0px 20px 0px
}

button p {
  margin: 0 auto;
  align-self: center;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
}

button::after {
  position: absolute;
  content: "";
  width: 100%;
  z-index: -1;
  height: 10%;
  bottom: 0;
  clip-path: polygon(
    0% 74%,
    4% 75%,
    8% 76%,
    11% 77%,
    15% 78%,
    20% 78%,
    25% 77%,
    32% 77%,
    37% 75%,
    40% 74%,
    43% 74%,
    46% 73%,
    52% 72%,
    57% 72%,
    65% 74%,
    66% 75%,
    71% 78%,
    75% 82%,
    81% 86%,
    83% 88%,
    88% 91%,
    90% 94%,
    94% 96%,
    98% 98%,
    100% 100%,
    82% 100%,
    0 100%
  );
  background: ${({
  theme
}) => theme.colors.red};;
  transition: 0.2s ease;
}

button::before {
  position: absolute;
  content: "";
  /*   bottom: 80%; */
  transform: rotate(180deg);
  width: 100%;
  height: 10%;
  transition: 0.2s ease;
  /*   bottom:; */
  z-index: -1;
  clip-path: polygon(
    0% 74%,
    4% 75%,
    8% 76%,
    11% 77%,
    15% 78%,
    20% 78%,
    25% 77%,
    32% 77%,
    37% 75%,
    40% 74%,
    43% 74%,
    46% 73%,
    52% 72%,
    57% 72%,
    65% 74%,
    66% 75%,
    71% 78%,
    75% 82%,
    81% 86%,
    83% 88%,
    88% 91%,
    90% 94%,
    94% 96%,
    98% 98%,
    100% 100%,
    82% 100%,
    0 100%
  );
  background: ${({
  theme
}) => theme.colors.red};;
}

button:hover::after {
  clip-path: polygon(
    0 30%,
    9% 34%,
    7% 39%,
    11% 43%,
    13% 33%,
    17% 30%,
    24% 34%,
    25% 35%,
    30% 31%,
    30% 38%,
    39% 33%,
    35% 43%,
    43% 45%,
    55% 46%,
    65% 74%,
    67% 66%,
    81% 57%,
    75% 82%,
    81% 86%,
    83% 88%,
    88% 91%,
    90% 94%,
    94% 96%,
    98% 98%,
    100% 100%,
    82% 100%,
    0 100%
  );
  height: 80%;
}

button:hover::before {
  clip-path: polygon(
    0 30%,
    9% 34%,
    7% 39%,
    11% 43%,
    13% 33%,
    17% 30%,
    24% 34%,
    25% 35%,
    30% 31%,
    30% 38%,
    39% 33%,
    35% 43%,
    43% 45%,
    55% 46%,
    65% 74%,
    67% 66%,
    81% 57%,
    75% 82%,
    81% 86%,
    83% 88%,
    88% 91%,
    90% 94%,
    94% 96%,
    98% 98%,
    100% 100%,
    82% 100%,
    0 100%
  );
  height: 80%;
}

`;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Misc/Carde.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Carde.jsx ***!
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Carde.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "parent",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "content-box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "card-title",
            children: "AR Card"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "card-content",
            children: "AR Business Card, Wedding Card, Sticker and Thanks Card"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "see-more",
            children: "Book Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "date-box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "month",
            children: "nex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "date",
            children: "AR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  .parent {
    width: 300px;
    padding: 20px;
    perspective: 1000px;
  }

  .card {
    padding-top: 50px;
    border: 3px solid Black;
    transform-style: preserve-3d;
    background-color: transparent; /* Set background to transparent */
    width: 100%;
    box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: rotate3d(0.5, 1, 0, 30deg);
  }

  .content-box {
    background: ${({
  theme
}) => theme.colors.red};; /* Change background to red */
    transition: all 0.5s ease-in-out;
    padding: 60px 25px 25px 25px;
    transform-style: preserve-3d;
  }

  .content-box .card-title {
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
  }

  .content-box .card-title:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .card-content {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #f2f2f2;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 30px);
  }

  .content-box .card-content:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .see-more {
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
    color: black;
    background: white;
    padding: 1rem 2rem;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
  }

  .content-box .see-more:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .date-box {
    position: absolute;
    top: 30px;
    right: 30px;
    height: 60px;
    width: 60px;
    background: white;
    border: 1px solid white;
    padding: 10px;
    transform: translate3d(0px, 0px, 80px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
  }

  .date-box span {
    display: block;
    text-align: center;
  }

  .date-box .month {
    color: black; /* Change color to black */
    font-size: 9px;
    font-weight: 700;
  }

  .date-box .date {
    font-size: 20px;
    font-weight: 900;
    color: black; /* Change color to black */
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Misc/Cards.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Cards.jsx ***!
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Cards.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card-int",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "hello",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "hidden",
            children: "nexAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "camera",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "int"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "speaker"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  .card {
    width: 210px;
    height: 400px;
    background: black;
    border-radius: 35px;
    border: 2px solid rgb(40, 40, 40);
    padding: 7px;
    position: relative;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.486);
    transition: transform 0.3s ease; /* Smooth transform */
    
    @media (max-width: 480px) {
      animation: bounce 0.6s ease-in-out; /* Mobile animation */
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  .card-int {
    background-image: linear-gradient(to right bottom, #ff0000, #ff0045, #ff0078, #ea00aa, #b81cd7, #8a3ad6, #5746cf, #004ac2, #003d94, #002e66, #001d3a, #020812);
    background-size: 200% 200%;
    background-position: 0% 0%;
    height: 100%;
    border-radius: 25px;
    transition: all 0.6s ease-out;
    overflow: hidden;
  }

  .card:hover .card-int {
    background-position: 100% 100%;
  }

  .top {
    position: absolute;
    top: 0px;
    right: 50%;
    transform: translate(50%, 0%);
    width: 35%;
    height: 18px;
    background-color: black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .speaker {
    position: absolute;
    top: 2px;
    right: 50%;
    transform: translate(50%, 0%);
    width: 40%;
    height: 2px;
    border-radius: 2px;
    background-color: rgb(20, 20, 20);
  }

  .camera {
    position: absolute;
    top: 6px;
    right: 84%;
    transform: translate(50%, 0%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.048);
  }

  .int {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background-color: rgba(0, 0, 255, 0.212);
  }

  .btn1, .btn2, .btn3, .btn4 {
    position: absolute;
    width: 2px;
  }

  .btn1, .btn2, .btn3 {
    height: 45px;
    top: 30%;
    right: -4px;
    background-image: linear-gradient(to right, #111111, #222222, #333333, #464646, #595959);
  }

  .btn2, .btn3 {
    transform: scale(-1);
    left: -4px;
  }

  .btn2, .btn3 {
    transform: scale(-1);
    height: 30px;
  }

  .btn2 {
    top: 26%;
  }

  .btn3 {
    top: 36%;
  }

  .hello {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    line-height: 35px;
    height: 100%;
    transition: 0.5s ease-in-out;
  }

  .hidden {
    display: block;
    opacity: 0;
    transition: all 0.3s ease-in;
  }

  .card:hover .hidden {
    opacity: 1;
  }

  .card:hover .hello {
    transform: translateY(-20px);
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Misc/Scard.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Scard.jsx ***!
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Scard.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "front",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            className: "title",
            children: "nexAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "subtitle",
            children: "AR and XR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "back",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "description",
            children: "Elevate user experience with our Augmented Reality software, blending real and virtual worlds for innovative engagement in marketing, education, and media."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "front",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            className: "title",
            children: "nexNET"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "subtitle",
            children: "Web and Custom Software"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "back",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "description",
            children: "Enhance your online presence with our custom web and software development. We deliver responsive, SEO-optimized websites and tailored software solutions that effectively communicate your brand."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "front",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            className: "title",
            children: "NexAi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "subtitle",
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "back",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "description",
            children: "Improve efficiency with our AI-powered Object Detection systems, ideal for retail, security, and automation, enabling smart inventory, surveillance, and process automation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-between; /* Distribute space evenly */
  gap: 2rem; /* Equal gap between cards */
  margin: 50px 0px 50px 0px;
  
  .card {
    width: 18rem; /* Increased card width */
    height: 12rem; /* Increased card height */
    cursor: pointer;
  }

  .content {
    text-align: center;
    position: relative;
    transition: all 2.25s;
    background-color: #3e3e3e;
    padding: 2em; /* Adjust padding if needed */
    transform-style: preserve-3d;
    height: 100%; /* Ensure content takes full height */
  }

  .card:hover .content {
    transform: rotateY(0.5turn);
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 2em;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .title {
    transform: translateZ(5rem);
    font-size: 2rem;
  }

  .subtitle {
    transform: translateZ(2rem);
  }

  .back {
    transform: rotateY(0.5turn);
    background-color: ${({
  theme
}) => theme.colors.red};
  }

  .description {
    transform: translateZ(3rem);
  }

  @media (max-width: 768px) {
    display: flex; /* Ensure flexbox is used */
    flex-direction: column; /* Stack cards vertically */
    align-items: center; /* Center align cards */
    margin: 40px 0px 40px; /* Adjust margins for mobile */

    .card {
      width: 80%; /* Full width for mobile */
      height: 250px; /* Fixed height for mobile */
      margin-bottom: 2rem; /* Space between cards */
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Card);

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

 

  &:hover svg path {
    fill: red;
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

/***/ "./context/menu.js":
/*!*************************!*\
  !*** ./context/menu.js ***!
  \*************************/
/*! exports provided: INITIAL_STATE, MenuContext, MenuContextProvider, useMenuContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContext", function() { return MenuContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContextProvider", function() { return MenuContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenuContext", function() { return useMenuContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\context\\menu.js";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable react/jsx-filename-extension */


const INITIAL_STATE = {
  isMenuOpen: false
};
const rootReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isMenuOpen: !state.isMenuOpen
        });
      }
    default:
      {
        return state;
      }
  }
};
const MenuContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function MenuContextProvider({
  children
}) {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(rootReducer, INITIAL_STATE);
  const store = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => ({
    state,
    dispatch
  }), [state]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MenuContext.Provider, {
    value: store,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
const useMenuContext = () => {
  const {
    state,
    dispatch
  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MenuContext);
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];
      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childRef = child && typeof child === 'object' && child.ref;
  const cleanup = _react.default.useRef();
  const setRef = _react.default.useCallback(el => {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }
    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, () => {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }
    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (false) {}
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;
      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?
          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }
      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }
      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };
      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    if (false) {}
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, typeof options.locale !== 'undefined' ? options.locale : this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {}; // clone query so we don't modify the original
  query = Object.assign({}, query);
  delete query.__nextLocale;
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/nexar.js":
/*!************************!*\
  !*** ./pages/nexar.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Nexar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Nexar */ "./components/Home/Nexar/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\pages\\nexar.js";

 // Adjust the path as necessary

const Nexar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Home_Nexar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};
/* harmony default export */ __webpack_exports__["default"] = (Nexar);

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

/***/ "browserslist":
/*!*******************************!*\
  !*** external "browserslist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("browserslist");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5pbWF0ZU9uU2NyZWVuL0FuaW1hdGVPblNjcmVlbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RzL0NvbnRhY3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9ybS9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvTmV4YXIvTmV4YXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9OZXhhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvTmV4YXIvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvQXJyb3cuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvRmFjZWJvb2suanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvSW5zdGFncmFtLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0xpbmtlZGluLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0xvZ28uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvVHdpdHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9Zb3V0dWJlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudUJ1dHRvbi9NZW51QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnVCdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51QnV0dG9uL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01pc2MvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01pc2MvQ2FyZGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWlzYy9DYXJkcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NaXNjL1NjYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL1NvY2lhbE1lZGlhLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsTWVkaWEvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RpY2t5Q3Vyc29yL1N0aWNreUN1cnNvci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdGlja3lDdXJzb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9tZW51LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUN1cnNvclN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL25leGFyLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3NoYXJlZC9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3NoYXJlZC90ZXh0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJyb3dzZXJzbGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsImR1cmF0aW9uIiwiZWFzZSIsIm9wYWNpdHkiLCJ2YXJpYW50cyIsInNob3ciLCJoaWRkZW4iLCJBbmltYXRlT25TY3JlZW4iLCJjaGlsZHJlbiIsImNoaWxkcmVuUHJvcCIsImFuaW1hdGlvbiIsInVzZUFuaW1hdGlvbiIsImluVmlld1JlZiIsImluVmlldyIsInVzZUluVmlldyIsInRyaWdnZXJPbmNlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdGFydCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImhhbmRsZVJlZiIsIm5vZGUiLCJyZWYiLCJjdXJyZW50IiwiY2xvbmVFbGVtZW50IiwiYW5pbWF0ZSIsImluaXRpYWwiLCJtZW1vIiwiRm9vdGVyIiwiX2pzeERFViIsIkFuaW1hdGlvbm9uU2NyZWVuIiwiRm9vdGVyQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNvbG9yIiwiU29jaWFsTWVkaWEiLCJocmVmIiwic3R5bGVkIiwibW90aW9uIiwiZm9vdGVyIiwidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwiQ29udGFjdFNlY3Rpb24iLCJzZWN0aW9uIiwiY29udGFpbmVyU3R5bGVzIiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJzbWFsbCIsIlRleHRXcmFwcGVyIiwiZGl2IiwiRm9ybVdyYXBwZXIiLCJGb3JtIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJncmF5IiwicmVkIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsImRhcmtSZWQiLCJDb250YWN0Rm9ybSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicm93cyIsIm1hcmdpblRvcCIsIk5leGFyIiwiYWRkQ3Vyc29yQm9yZGVyIiwicmVtb3ZlQ3Vyc29yQm9yZGVyIiwidXNlQ3Vyc29yU3R5bGUiLCJoYW5kbGVBbmNob3JIb3ZlclN0YXJ0IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJDb250ZW50U2VjdGlvbiIsIkxpbmsiLCJwYXNzSHJlZiIsIlByb2plY3RBbmNob3IiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJQcm9qZWN0SW5mbyIsIlByb2plY3RUaXRsZSIsIkFycm93IiwiVGV4dDEiLCJUZXh0MiIsIlRleHQzIiwiQ2FyZGUiLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJDYXJkcyIsImZvbnRTaXplIiwiU2NhcmQiLCJCdXR0b24iLCJDb250YWN0IiwidGFibGV0IiwiYSIsIlRleHQiLCJoMiIsInNlY29uZGFyeUZvbnRTdHlsZSIsImgxIiwidGV4dCIsIkltYWdlUHJldmlldyIsIkFib3V0RGVzY3JpcHRpb24iLCJWaWRlb1ByZXZpZXciLCJNZW51Q29udGFpbmVyIiwiTWVudUJ1dHRvbiIsIkRlZmF1bHRNZW51QnV0dG9uIiwiX3JlZiIsImZpbGxDb2xvciIsIndoaXRlIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJzdmciLCJfb2JqZWN0U3ByZWFkIiwieG1sbnMiLCJ2aWV3Qm94IiwiZCIsImZpbGwiLCJmaWxsUnVsZSIsIkljb25GYWNlYm9vayIsIkljb25JbnN0YWdyYW0iLCJJY29uTGlua2VkaW5DaXJjbGVkIiwiTG9nb0NvbnRhaW5lciIsIlN0eWxlZExvZ28iLCJpbWciLCJMb2dvIiwiSWNvblR3aXR0ZXJDaXJjbGUiLCJJY29uWW91dHViZSIsInN0aWNreSIsInRpdGxlIiwiZGlzcGF0Y2giLCJ1c2VNZW51Q29udGV4dCIsImhhbmRsZU9uVG9nZ2xlIiwidXNlQ2FsbGJhY2siLCJTdGlja3lDdXJzb3IiLCJvbkNsaWNrIiwiZm9yd2FyZFJlZiIsIlN0eWxlZFdyYXBwZXIiLCJDYXJkIiwibWVkaWFzIiwiY29tcG9uZW50IiwiSW5zdGFncmFtIiwidXJsIiwiRmFjZWJvb2siLCJZb3V0dWJlIiwiVHdpdHRlciIsIkxpbmtlZGluIiwiQ29udGFpbmVyIiwiQ29tcG9uZW50IiwidGFyZ2V0IiwiY2hpbGRSZWYiLCJ1c2VSZWYiLCJsb2NrQ3Vyc29yUG9zaXRpb24iLCJoYW5kbGVNb3VzZUVudGVyIiwiZXZlbnQiLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJsZWZ0IiwieSIsInRvcCIsImhhbmRsZU1vdXNlTGVhdmUiLCJJTklUSUFMX1NUQVRFIiwiY3Vyc29yU3R5bGUiLCJib3JkZXJlZCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiQ3Vyc29yQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDdXJzb3JDb250ZXh0UHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwic3RvcmUiLCJ1c2VNZW1vIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUN1cnNvckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiaXNNZW51T3BlbiIsIk1lbnVDb250ZXh0IiwiTWVudUNvbnRleHRQcm92aWRlciIsImFkZEN1cnNvckNvbG9yIiwicmVzZXRDdXJzb3JDb2xvciIsImNvb3JkaW5hdGVzIiwiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImFzIiwib3B0aW9ucyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJsb2NhbGUiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ3YXJuIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsIm9ubHkiLCJjbGVhbnVwIiwic2V0UmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJkZWZhdWx0UHJldmVudGVkIiwicHJpb3JpdHkiLCJkZWZhdWx0TG9jYWxlIiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsIlJvdXRlciIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlUm91dGVyIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQXJyYXkiLCJpc0FycmF5Iiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImxlbmd0aCIsImlzTG9jYWxVUkwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiaW50ZXJwb2xhdGVBcyIsInJvdXRlIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJzc2c0MDQiLCJtb2QiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJfZ2V0U3RhdGljRGF0YSIsImdldERhdGFIcmVmIiwiX2VyciIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsInJlcXVpcmUiLCJfZ2V0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsInNvbWUiLCJyZSIsInRlc3QiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY2FjaGVLZXkiLCJjdHgiLCJBcHBUcmVlIiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwiZm9ybWF0VXJsIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiaXNEeW5hbWljUm91dGUiLCJEVU1NWV9CQVNFIiwicGFyc2VSZWxhdGl2ZVVybCIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwcmVwYXJlRGVzdGluYXRpb24iLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyc2VkRGVzdGluYXRpb24iLCJfX25leHRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwiY29tcGlsZSIsInZhbGlkYXRlIiwibmV3VXJsIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwiZ2V0Um91dGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJ1c2VkIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXRVUkwiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiU1AiLCJtZWFzdXJlIiwiX0ZyYWdtZW50IiwiTmV4YXJhIiwiYmxhY2siLCJjc3MiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztB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QUdyRyx3REFBTSxDQUFDYSxHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixDQUFDO0VBQUVWO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ2dCLEdBQUc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLENBQUM7RUFBRWpCO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ2dCLEdBQUc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0lBQUEsWUFBRTtFQUFDLGdCQUNWLENBQUM7QUFFUCxDQUFDO0FBRWNvQyxvRUFBSyxFOzs7Ozs7Ozs7Ozs7QUNYcEI7QUFBZTtFQUNieUMsS0FBSyxFQUFFLE1BQU07RUFDYjJlLEtBQUssRUFBRSxNQUFNO0VBQ2JoaUIsR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7QUFBd0M7QUFFekJpaUIsb0hBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUVqQyxNQUFNdmYsa0JBQWtCLEdBQUd1ZixxREFBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQzs7Ozs7Ozs7Ozs7QUNQRCx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9uZXhhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbmV4YXIuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICBkZWxheTogMC4zLFxyXG4gIHRyYW5zbGF0ZVk6IHtcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgZWFzZTogWzAsIDAuNywgMC4yOSwgMC45N10sXHJcbiAgfSxcclxuICBvcGFjaXR5OiB7XHJcbiAgICBkdXJhdGlvbjogMSxcclxuICAgIGVhc2U6IFswLjI1LCAwLjEsIDAuMjUsIDEuMF0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIHNob3c6IHsgdHJhbnNsYXRlWTogMCwgb3BhY2l0eTogMSB9LFxyXG4gIGhpZGRlbjogeyB0cmFuc2xhdGVZOiA2MCwgb3BhY2l0eTogMCB9LFxyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0ZU9uU2NyZWVuID0gKHsgY2hpbGRyZW46IGNoaWxkcmVuUHJvcCB9KSA9PiB7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgW2luVmlld1JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7IHRyaWdnZXJPbmNlOiB0cnVlIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluVmlldykge1xyXG4gICAgICBhbmltYXRpb24uc3RhcnQoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9LCBbYW5pbWF0aW9uLCBpblZpZXcsIGluVmlld1JlZl0pO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlblByb3AsIGNoaWxkID0+IHtcclxuICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZiA9IG5vZGUgPT4ge1xyXG4gICAgICAvLyBLZWVwIHlvdXIgb3duIHJlZmVyZW5jZVxyXG4gICAgICBpblZpZXdSZWYobm9kZSk7XHJcblxyXG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCByZWYsIGlmIGFueVxyXG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGQ7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVmKG5vZGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgIHZhcmlhbnRzLFxyXG4gICAgICB0cmFuc2l0aW9uLFxyXG4gICAgICBhbmltYXRlOiBhbmltYXRpb24sXHJcbiAgICAgIGluaXRpYWw6ICdoaWRkZW4nLFxyXG4gICAgICByZWY6IGhhbmRsZVJlZixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFuaW1hdGVPblNjcmVlbik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FuaW1hdGVPblNjcmVlbic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuLi8uLi9Tb2NpYWxNZWRpYSc7XHJcbmltcG9ydCBBbmltYXRpb25vblNjcmVlbiBmcm9tICcuLy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vLi4vSG9tZS9Gb3JtJ1xyXG5pbXBvcnQgYnJvd3NlcnNsaXN0IGZyb20gJ2Jyb3dzZXJzbGlzdCc7XHJcblxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0aW9ub25TY3JlZW4+XHJcbiAgICBcclxuICAgICAgPEZvb3RlckNvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb2x1bW5zXCI+XHJcbiAgICAgICAgICB7LyogRmlyc3QgQ29sdW1uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJsb2dvLnBuZ1wiIGFsdD1cIkx1bWluZXhhIENvbXBhbnkgTG9nb1wiIHN0eWxlPXt7IHdpZHRoOiAnMTYwcHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+PHN0cm9uZz5MdW1pbmV4YSBUZWNobm9sb2dpZXM8L3N0cm9uZz4sIE5CJ3MgR3JvdXAgb2YgQ29tcGFueTwvcD5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+bmV4PC9oMT5cclxuICAgICAgICAgICAgPHAgPllvdXIgZ28tdG8gc291cmNlIGZvciBpbm5vdmF0aXZlIHNvbHV0aW9ucy4gV2UncmUgaGVyZSB0byBoZWxwIHlvdSBhY2hpZXZlIHlvdXIgZ29hbHMuPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWFcIj5cclxuICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBTZWNvbmQgQ29sdW1uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5Db250YWN0PC9oMz5cclxuICAgICAgICAgICAgPHA+TW9iaWxlOiArOTEuODY2LjA0NC45OTcwPC9wPlxyXG4gICAgICAgICAgICA8cD5Nb2JpbGU6ICs5MS45NDguMTYxLjU1ODI8L3A+XHJcbiAgICAgICAgICAgIDxwPkVtYWlsOiBpbmZvQGx1bWluZXhhLmluPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgQWRkcmVzczogMTQgMXN0IFN0YWdlIEJoYW5hc2hhbmthcmksIEJhbmdhbG9yZSwgS0EgSU5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIFRoaXJkIENvbHVtbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+TGVnYWw8L2gzPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL3ByaXZhY3lcIj5Qcml2YWN5IFBvbGljeTwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvdGVybXNcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvZGlzY2xhaW1lclwiPkRpc2NsYWltZXI8L2E+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEZvdXJ0aCBDb2x1bW4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319Pk90aGVyPC9oMz5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9ibG9nXCI+QmxvZzwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvY2FyZWVyc1wiPkNhcmVlcjwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvc2VydmljZXNcIj5TZXJ2aWNlczwvYT48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbm90ZVwiPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdHcmF5JyB9fT4mY29weTsgQ29weXJpZ2h0IDxzdHJvbmc+THVtaW5leGEgVGVjaG5vbG9naWVzPC9zdHJvbmc+IDIwMjQuIEFsbCBSaWdodCBSZXNlcnZlZDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb290ZXJDb250YWluZXI+XHJcbiAgICA8L0FuaW1hdGlvbm9uU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3Rlcik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvbnRhY3RzJztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmZvb3RlcilgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xyXG4gIGNvbG9yOiAjODc4Nzg3O1xyXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGdyYXk7XHJcblxyXG4gICYgLmZvb3Rlci1jb2x1bW5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4OyAvLyBBZGp1c3QgbWF4LXdpZHRoIGFzIG5lZWRlZFxyXG4gICAgZ2FwOiAyMHB4OyAvLyBFcXVhbCBnYXAgYmV0d2VlbiBjb2x1bW5zXHJcblxyXG4gICAgJiAuY29sdW1uIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbWluLXdpZHRoOiAyMDBweDsgXHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICAgICBjb2xvcjogZ3JheTtcclxuXHJcbiAgICAgICYgaDMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgYSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTozcHg7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAuZm9vdGVyLW5vdGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtbWVkaWF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAmIC5mb290ZXItY29sdW1ucyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8vIFN0YWNrIGNvbHVtbnMgb24gc21hbGxlciBzY3JlZW5zXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTBweDsgLy8gQWRqdXN0IGdhcCBmb3IgbW9iaWxlIHZpZXcgaWYgbmVlZGVkXHJcbiAgICB9XHJcblxyXG4gICAgJiAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDkwJTsgLy8gTWFrZSBjb2x1bW5zIGZ1bGwgd2lkdGggb24gbW9iaWxlXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XHJcblxyXG5jb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIFxyXG4gIHdpZHRoOiA1OC4zMzMlO1xyXG5cclxuICAmIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBgfTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JheX07XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRleHRBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmF5fTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrUmVkfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhY3RTZWN0aW9uPlxyXG4gICAgICA8VGV4dFdyYXBwZXI+XHJcbiAgICAgICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgbmV4QVIgLSBBdWdtZW50ZWQgUmVhbGl0eSBmaW5kcyBkaXZlcnNlIGFwcGxpY2F0aW9ucyBhY3Jvc3MgbWFya2V0aW5nIGFuZCBhZHZlcnRpc2luZyxcclxuICAgICAgICAgIHJldGFpbCBhbmQgZS1jb21tZXJjZS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPsKpIEx1bWluZXhhIFRlY2hub2xvZ2llcy48L3N0cm9uZz4gUGlvbmVlcmluZyBpbiB3ZWIgYW5kIGF1Z21lbnRlZCByZWFsaXR5IHNvbHV0aW9ucyxcclxuICAgICAgICAgIHdlIGFyZSBkZWRpY2F0ZWQgdG8gdHJhbnNmb3JtaW5nIGRpZ2l0YWwgZXhwZXJpZW5jZXMuIENvbm5lY3Qgd2l0aCB1cyBmb3IgaW5ub3ZhdGl2ZSxcclxuICAgICAgICAgIGN1c3RvbS10YWlsb3JlZCB0ZWNobm9sb2d5IHNlcnZpY2VzIHRoYXQgZHJpdmUgeW91ciBidXNpbmVzcyBmb3J3YXJkLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9UZXh0V3JhcHBlcj5cclxuICAgICAgPEZvcm1XcmFwcGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIE1lc3NhZ2U8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgV2UnZCBsb3ZlIHRvIGhlYXIgPHN0cm9uZz5mcm9tIHlvdSE8L3N0cm9uZz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgICA8L0NvbnRhY3RTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRm9ybSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCBDYXJkcyBmcm9tICcuLy4uLy4uL01pc2MvQ2FyZHMnO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vSWNvbnMvQXJyb3cnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLy4uLy4uL0hvbWUvQ29udGFjdHMnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4vLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJ1xyXG5pbXBvcnQge1xyXG4gIENvbnRlbnRTZWN0aW9uLFxyXG4gIFRleHRXcmFwcGVyLFxyXG4gIFByb2plY3RBbmNob3IsXHJcbiAgUHJvamVjdEluZm8sXHJcbiAgUHJvamVjdFRpdGxlLFxyXG4gIFRleHQyLFxyXG4gIFRleHQzLFxyXG4gIFRleHQxXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgU2NhcmQgZnJvbSAnLi4vLi4vTWlzYy9TY2FyZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vTWlzYy9CdXR0b24nXHJcbmltcG9ydCBDYXJkZSBmcm9tICcuLi8uLi9NaXNjL0NhcmRlJ1xyXG5cclxuY29uc3QgTmV4YXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJTdGFydCA9ICgpID0+IHtcclxuICAgIGFkZEN1cnNvckJvcmRlcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyRW5kID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvbmV4YXJcIiBwYXNzSHJlZj5cclxuICAgICAgICA8UHJvamVjdEFuY2hvclxyXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVBbmNob3JIb3ZlclN0YXJ0fVxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVBbmNob3JIb3ZlckVuZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgbmV4QVJcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEFycm93IC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L1Byb2plY3RUaXRsZT5cclxuICAgICAgICAgIDwvUHJvamVjdEluZm8+XHJcbiAgICAgICAgPC9Qcm9qZWN0QW5jaG9yPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICB7LyogQWJvdXQgRGVzY3JpcHRpb24gKi99XHJcbiAgICAgIDxUZXh0MT5cclxuICAgICAgICA8VGV4dDI+XHJcbiAgICAgICAgICA8VGV4dDM+XHJcbiAgICAgICAgICAgICAgICBMdW1pbmV4YSBwcm92aWRpbmcsIEltYWdlIHRyYWNraW5nIGFuZCB2aXJ0dWFsIHNvZnR3YXJl4oCZcyAobmV4QVIpIGJhc2VkIG9uIEFSICYgWFIuIFRoZXkgYWltIHRvIHJldm9sdXRpb25pemUgIFxyXG4gICAgICAgICAgICAgICAgZGlnaXRhbCBjb250ZW50IGV4cGVyaWVuY2VzIGJ5IGludGVncmF0aW5nIGl0IHNlYW1sZXNzbHkgd2l0aCB0aGUgcmVhbCB3b3JsZCwgb2ZmZXJpbmcgdW5pcXVlLCBpbnRlcmFjdGl2ZSBleHBlcmllbmNlcyAgXHJcbiAgICAgICAgICAgICAgICB0aGF0IGNhcHRpdmF0ZSBhdWRpZW5jZXNcclxuICAgICAgICAgICAgICAgIDxDYXJkZS8+XHJcbiAgICAgICAgICA8L1RleHQzPlxyXG4gICAgICAgIDwvVGV4dDI+XHJcbiAgICAgIDwvVGV4dDE+XHJcbiAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz1cIm5leGFycy5wbmdcIiBhbHQ9XCJEZXNjcmlwdGlvbiBvZiB0aGUgaW1hZ2VcIiAgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcsIGhlaWdodDogJ2F1dG8nICwgbWFyZ2luQm90dG9tOiAnMjBQWCd9fS8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICBPdXIgdGFyZ2V0IGlzIHRvIHJldm9sdXRpb25pemUgdmlzdWFsIGV4cGVyaWVuY2VzLCBcclxuICAgICAgICAgIGJyaWRnaW5nIHRoZSBnYXAgYmV0d2VlbiB0aGUgcGh5c2ljYWwgYW5kIGRpZ2l0YWwgd29ybGRzXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICBPdXIgY29tcGFueSBzcGVjaWFsaXplcyBpbiBjdXR0aW5nLWVkZ2UgZGlnaXRhbCBzb2x1dGlvbnMsIGluY2x1ZGluZyBhZHZhbmNlZCBBdWdtZW50ZWQgXHJcbiAgICAgICAgICBSZWFsaXR5IHNvZnR3YXJlLCB1c2VyLWZyaWVuZGx5IFdlYiBEZXZlbG9wbWVudCwgYW5kIGlubm92YXRpdmUgQUktYmFzZWQgb2JqZWN0IGRldGVjdGlvbiBcclxuICAgICAgICAgIHN5c3RlbXMgZm9yIHNtYXJ0IHJlY29nbml0aW9uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkcyAvPlxyXG4gICAgICAgIFxyXG4gICAgICA8L1RleHRXcmFwcGVyPlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogJzgwcHgnIH19PlxyXG4gICAgICAgICAgRXhwbG9yZX5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8U2NhcmQvPlxyXG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICc2MHB4JywgbWFyZ2luQm90dG9tOicyMHB4JyB9fT5cclxuICAgICAgICAgRmVhdHVyZWQgUHJvZHVjdCAtIG5leEFSXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8QnV0dG9uLz5cclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc5MHB4JyB9fT4gSW4gdG9kYXkncyBjb21wZXRpdGl2ZSBtYXJrZXQsIGluIGV2ZXJ5IGJ1c2luZXNzZXMgKFNtYWxsIHNjYWxlIGJ1c2luZXNzIHRvIGxhcmdlIHNjYWxlIGJ1c2luZXNzKSBzZWVrcyBmb3IgaW5ub3ZhdGl2ZVxyXG5zb2x1dGlvbnMgdG8gZW5nYWdlIHRoZWlyIGF1ZGllbmNlIG1vcmUgZWZmZWN0aXZlbHkuIFRyYWRpdGlvbmFsIG1ldGhvZHMgb2Z0ZW4gZmFpbCB0byBjYXB0dXJlIGF0dGVudGlvbiBhbmQgcHJvdmlkZVxyXG5pbnRlcmFjdGl2ZSBleHBlcmllbmNlcy4gTHVtaW5leGEgYWRkcmVzc2VzIHRoaXMgZ2FwIGJ5IGxldmVyYWdpbmcgQXVnbWVudGVkIFJlYWxpdHkgKEFSKSAmIE1peGVkIFJlYWx0eSAoWFIpIHRvXHJcbmVuaGFuY2UgdXNlciBlbmdhZ2VtZW50IGFuZCBpbnRlcmFjdGlvbi48L3A+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICA8Q29udGFjdCAvPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhOZXhhcik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL05leGFyJztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcclxuaW1wb3J0IERlZmF1bHRNZW51QnV0dG9uIGZyb20gJy4uLy4uL01lbnVCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQ2hhbmdlIHRvIHJvdyBvbiBsYXJnZXIgc2NyZWVucyAqL1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RBbmNob3IgPSBzdHlsZWQobW90aW9uLmEpYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAwJTtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIG1hcmdpbjogMDsgLyogQWRqdXN0ZWQgbWFyZ2luLWJvdHRvbSBmb3IgbGVzcyBnYXAgKi9cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBoZWlnaHQ6IDE5MHB4OyBcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgyYFxyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcblxyXG4gICAgJiBiciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdEluZm8gPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgbWFyZ2luLWxlZnQ6IDguMzMzJTtcclxuICB3aWR0aDogODMuMzMzJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYgaDMsXHJcbiAgJiAucHJvamVjdC1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmIGgzIHtcclxuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcclxuICB9XHJcblxyXG4gICYgLnByb2plY3QtaW5mbyB7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICAmIGg0IHtcclxuICAgICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogODMuMzMzJTtcclxuXHJcbiAgICAmIC5wcm9qZWN0LWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgICYgaDMge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xyXG4gICAgICB0b3A6IDE3cHg7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFRpdGxlID0gc3R5bGVkKG1vdGlvbi5oMSlgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAtM3B4O1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gICYgLmFycm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMjVweCAwIDAgM3B4O1xyXG4gICAgaGVpZ2h0OiA1N3B4O1xyXG4gICAgd2lkdGg6IDEwMXB4O1xyXG5cclxuICAgICYgc3ZnIHBhdGgge1xyXG4gICAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNzE2NjY2NjY2NztcclxuXHJcbiAgICAmIC5hcnJvdyB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwIDAgMnB4O1xyXG4gICAgICB3aWR0aDogNzYuMTlweDtcclxuICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlUHJldmlldyA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0ODBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG5cclxuICAmIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGhlaWdodDogMTkwcHg7IC8qIEFkanVzdCBmb3IgdGFibGV0IHZpZXcgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxOyAvKiBUYWtlIHVwIGF2YWlsYWJsZSBzcGFjZSAqL1xyXG4gIHBhZGRpbmc6IDEyMHB4IDYwcHggMTYwcHggNjBweDsgLyogUmVkdWNlZCBwYWRkaW5nIHRvIGRlY3JlYXNlIHNwYWNlICovXHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBmb250LXNpemU6IDFyZW07IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IC8qIEFsaWduIHRleHQgdG8gdGhlIGxlZnQgKi9cclxuXHJcbiAgJiBoMiB7XHJcbiAgICBtYXJnaW46IDA7IC8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBmb250LXNpemU6IDFyZW07IC8qIEFkanVzdCBmb250IHNpemUgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBWaWRlb1ByZXZpZXcgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAmIHZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2NHB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gc3R5bGVkKERlZmF1bHRNZW51QnV0dG9uKWBcclxuICB3aWR0aDogY2FsYygyNSUgLSAzMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG5cclxuICAmOjpiZWZvcmUsXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcclxuICB9XHJcblxyXG4gICYgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubWVkaXVtYFxyXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzJSAtIDMwcHgpO1xyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIzNXB4O1xyXG5cclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXgtd2lkdGg6IDIxNXB4O1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG5cclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XHJcbiAgICB9XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpdGVtcyB2ZXJ0aWNhbGx5ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBTcGFjZSBvdXQgdGhlIHRleHQgYW5kIGNhcmQgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBnYXA6IDMzcHg7IC8qIFNwYWNlIGJldHdlZW4gdGV4dCBhbmQgY2FyZCAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE4MHB4O1xyXG5cclxuICAmIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjYyNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gICYgcCB7XHJcbiAgICBtYXgtd2lkdGg6IDQ0OHB4O1xyXG4gICAgbWFyZ2luOiA2LjlweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayB2ZXJ0aWNhbGx5IG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBpdGVtcyB0byB0aGUgc3RhcnQgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJiBoMiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFkanVzdCBtYXJnaW4gZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG4gICAgfVxyXG4gIGB9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgICYgaDIge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0MSA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAyMTBweDtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDdweDtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0MiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4OyAvKiBNYWtlIGl0IGEgZmxleCBjb250YWluZXIgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgdmVydGljYWxseSAqL1xyXG4gIGdhcDogMzBweDsgLyogQWRkIHNvbWUgc3BhY2UgYmV0d2VlbiB0ZXh0IGFuZCBjYXJkICovXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMi42MjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICYgYnIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFycm93ID0gKHsgZmlsbENvbG9yID0gY29sb3JzLndoaXRlLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPG1vdGlvbi5zdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAxMDEgNTdcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMzMgMzRIMFYyNGg4MS40MjlMNjYgNy44ODQgNzMuNTQ4IDBsMTkuODc3IDIwLjc2My4wMjctLjAyOUwxMDEgMjguNjE4IDczLjgyOSA1N2wtNy41NDgtNy44ODRMODAuNzUzIDM0SDMzelwiXHJcbiAgICAgIGZpbGw9e2ZpbGxDb2xvcn1cclxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgID48L3BhdGg+XHJcbiAgPC9tb3Rpb24uc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XHJcbiIsIi8vIGljb246ZmFjZWJvb2sgfCBCb290c3RyYXAgaHR0cHM6Ly9pY29ucy5nZXRib290c3RyYXAuY29tLyB8IEJvb3RzdHJhcFxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb25GYWNlYm9vayhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0xNiA4LjA0OWMwLTQuNDQ2LTMuNTgyLTguMDUtOC04LjA1QzMuNTggMC0uMDAyIDMuNjAzLS4wMDIgOC4wNWMwIDQuMDE3IDIuOTI2IDcuMzQ3IDYuNzUgNy45NTF2LTUuNjI1aC0yLjAzVjguMDVINi43NVY2LjI3NWMwLTIuMDE3IDEuMTk1LTMuMTMxIDMuMDIyLTMuMTMxLjg3NiAwIDEuNzkxLjE1NyAxLjc5MS4xNTd2MS45OGgtMS4wMDljLS45OTMgMC0xLjMwMy42MjEtMS4zMDMgMS4yNTh2MS41MWgyLjIxOGwtLjM1NCAyLjMyNkg5LjI1VjE2YzMuODI0LS42MDQgNi43NS0zLjkzNCA2Ljc1LTcuOTUxelwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uRmFjZWJvb2s7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uSW5zdGFncmFtKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk01MTIgMzc4LjdjLTczLjQgMC0xMzMuMyA1OS45LTEzMy4zIDEzMy4zUzQzOC42IDY0NS4zIDUxMiA2NDUuMyA2NDUuMyA1ODUuNCA2NDUuMyA1MTIgNTg1LjQgMzc4LjcgNTEyIDM3OC43ek05MTEuOCA1MTJjMC01NS4yLjUtMTA5LjktMi42LTE2NS0zLjEtNjQtMTcuNy0xMjAuOC02NC41LTE2Ny42LTQ2LjktNDYuOS0xMDMuNi02MS40LTE2Ny42LTY0LjUtNTUuMi0zLjEtMTA5LjktMi42LTE2NS0yLjYtNTUuMiAwLTEwOS45LS41LTE2NSAyLjYtNjQgMy4xLTEyMC44IDE3LjctMTY3LjYgNjQuNUMxMzIuNiAyMjYuMyAxMTguMSAyODMgMTE1IDM0N2MtMy4xIDU1LjItMi42IDEwOS45LTIuNiAxNjVzLS41IDEwOS45IDIuNiAxNjVjMy4xIDY0IDE3LjcgMTIwLjggNjQuNSAxNjcuNiA0Ni45IDQ2LjkgMTAzLjYgNjEuNCAxNjcuNiA2NC41IDU1LjIgMy4xIDEwOS45IDIuNiAxNjUgMi42IDU1LjIgMCAxMDkuOS41IDE2NS0yLjYgNjQtMy4xIDEyMC44LTE3LjcgMTY3LjYtNjQuNSA0Ni45LTQ2LjkgNjEuNC0xMDMuNiA2NC41LTE2Ny42IDMuMi01NS4xIDIuNi0xMDkuOCAyLjYtMTY1ek01MTIgNzE3LjFjLTExMy41IDAtMjA1LjEtOTEuNi0yMDUuMS0yMDUuMVMzOTguNSAzMDYuOSA1MTIgMzA2LjkgNzE3LjEgMzk4LjUgNzE3LjEgNTEyIDYyNS41IDcxNy4xIDUxMiA3MTcuMXptMjEzLjUtMzcwLjdjLTI2LjUgMC00Ny45LTIxLjQtNDcuOS00Ny45czIxLjQtNDcuOSA0Ny45LTQ3LjkgNDcuOSAyMS40IDQ3LjkgNDcuOWE0Ny44NCA0Ny44NCAwIDAxLTQ3LjkgNDcuOXpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkluc3RhZ3JhbTtcclxuIiwiLy8gaWNvbjpsaW5rZWRpbi1jaXJjbGVkIHwgRW50eXBvIGh0dHA6Ly9lbnR5cG8uY29tLyB8IERhbmllbCBCcnVjZVxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb25MaW5rZWRpbkNpcmNsZWQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDk2MCAxMDAwXCJcclxuICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDIwYzEzMy4zMzMgMCAyNDYuNjY3IDQ2LjY2NyAzNDAgMTQwczE0MCAyMDYuNjY3IDE0MCAzNDBjMCAxMzItNDYuNjY3IDI0NS0xNDAgMzM5UzYxMy4zMzMgOTgwIDQ4MCA5ODBjLTEzMiAwLTI0NS00Ny0zMzktMTQxUzAgNjMyIDAgNTAwYzAtMTMzLjMzMyA0Ny0yNDYuNjY3IDE0MS0zNDBTMzQ4IDIwIDQ4MCAyME0zNjIgNjk4VjM4NmgtOTZ2MzEyaDk2bS00OC0zNTJjMzQuNjY3IDAgNTItMTYgNTItNDhzLTE3LjMzMy00OC01Mi00OGMtMTQuNjY3IDAtMjcgNC42NjctMzcgMTRzLTE1IDIwLjY2Ny0xNSAzNGMwIDMyIDE3LjMzMyA0OCA1MiA0OG00MDQgMzUyVjUxNGMwLTQ0LTEwLjMzMy03Ny42NjctMzEtMTAxcy00Ny42NjctMzUtODEtMzVjLTQ0IDAtNzYgMTYuNjY3LTk2IDUwaC0ybC02LTQyaC04NGMxLjMzMyAxOC42NjcgMiA1MiAyIDEwMHYyMTJoOThWNTE4YzAtMTIgMS4zMzMtMjAgNC0yNCA4LTI1LjMzMyAyNC42NjctMzggNTAtMzggMzIgMCA0OCAyMi42NjcgNDggNjh2MTc0aDk4XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25MaW5rZWRpbkNpcmNsZWQ7XHJcblxyXG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTG9nb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFbnN1cmUgcG9zaXRpb25pbmcgY29udGV4dCAqL1xyXG4gICAgICAgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICByaWdodDogMjhweDtcclxuICBib3R0b206IDE3cHg7ICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmltZ2BcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2dvQ29udGFpbmVyPlxyXG4gICAgICA8U3R5bGVkTG9nb1xyXG4gICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiIC8vIFJlZmVyZW5jZSBkaXJlY3RseSBmcm9tIHRoZSBwdWJsaWMgZm9sZGVyXHJcbiAgICAgICAgYWx0PVwiTHVtaW5leGEgTG9nb1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L0xvZ29Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvblR3aXR0ZXJDaXJjbGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0yMTUuMyAzMzcuN2MuMyA0LjcuMyA5LjYuMyAxNC40IDAgMTQ2LjgtMTExLjggMzE1LjktMzE2LjEgMzE1LjktNjMgMC0xMjEuNC0xOC4zLTE3MC42LTQ5LjggOSAxIDE3LjYgMS40IDI2LjggMS40IDUyIDAgOTkuOC0xNy42IDEzNy45LTQ3LjQtNDguOC0xLTg5LjgtMzMtMTAzLjgtNzcgMTcuMSAyLjUgMzIuNSAyLjUgNTAuMS0yYTExMSAxMTEgMCAwMS04OC45LTEwOXYtMS40YzE0LjcgOC4zIDMyIDEzLjQgNTAuMSAxNC4xYTExMS4xMyAxMTEuMTMgMCAwMS00OS41LTkyLjRjMC0yMC43IDUuNC0zOS42IDE1LjEtNTZhMzE1LjI4IDMxNS4yOCAwIDAwMjI5IDExNi4xQzQ5MiAzNTMuMSA1NDguNCAyOTIgNjE2LjIgMjkyYzMyIDAgNjAuOCAxMy40IDgxLjEgMzUgMjUuMS00LjcgNDkuMS0xNC4xIDcwLjUtMjYuNy04LjMgMjUuNy0yNS43IDQ3LjQtNDguOCA2MS4xIDIyLjQtMi40IDQ0LTguNiA2NC0xNy4zLTE1LjEgMjIuMi0zNCA0MS45LTU1LjcgNTcuNnpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblR3aXR0ZXJDaXJjbGU7XHJcblxyXG4gICIsIi8vIGljb246eW91dHViZSB8IEFudCBEZXNpZ24gSWNvbnMgaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi8gfCBBbnQgRGVzaWduXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbllvdXR1YmUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTk0MS4zIDI5Ni4xYTExMi4zIDExMi4zIDAgMDAtNzkuMi03OS4zQzc5Mi4yIDE5OCA1MTIgMTk4IDUxMiAxOThzLTI4MC4yIDAtMzUwLjEgMTguN0ExMTIuMTIgMTEyLjEyIDAgMDA4Mi43IDI5NkM2NCAzNjYgNjQgNTEyIDY0IDUxMnMwIDE0NiAxOC43IDIxNS45YzEwLjMgMzguNiA0MC43IDY5IDc5LjIgNzkuM0MyMzEuOCA4MjYgNTEyIDgyNiA1MTIgODI2czI4MC4yIDAgMzUwLjEtMTguOGMzOC42LTEwLjMgNjguOS00MC43IDc5LjItNzkuM0M5NjAgNjU4IDk2MCA1MTIgOTYwIDUxMnMwLTE0Ni0xOC43LTIxNS45ek00MjMgNjQ2VjM3OGwyMzIgMTMzLTIzMiAxMzV6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25Zb3V0dWJlOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3cgfSBmcm9tICcuL0Fycm93JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEluc3RhZ3JhbSB9IGZyb20gJy4vSW5zdGFncmFtJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvIH0gZnJvbSAnLi9Mb2dvJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBZb3V0dWJlIH0gZnJvbSAnLi9Zb3V0dWJlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRpbiB9IGZyb20gJy4vTGlua2VkaW4nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VNZW51Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbWVudSc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCBTdGlja3lDdXJzb3IgZnJvbSAnLi4vU3RpY2t5Q3Vyc29yJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgTWVudUJ1dHRvbiA9ICh7IHN0aWNreSA9IHRydWUsIHRpdGxlID0gJycsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xyXG4gIGNvbnN0IFssIGRpc3BhdGNoXSA9IHVzZU1lbnVDb250ZXh0KCk7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25Ub2dnbGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdUT0dHTEVfTUVOVScgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RpY2t5Q3Vyc29yIHN0aWNreT17c3RpY2t5fT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17YWRkQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uVG9nZ2xlfVxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9TdGlja3lDdXJzb3I+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUmVhY3QuZm9yd2FyZFJlZihNZW51QnV0dG9uKSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01lbnVCdXR0b24nO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNjNweDtcbiAgcGFkZGluZzogMjBweDtcblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgJiBzcGFuIHtcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiA4MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB9XG5cbiAgJjpob3ZlciBzcGFuIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICAmIHNwYW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHdpZHRoOiA2NnB4O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbiAgYH07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkV3JhcHBlcj5cclxuICAgICAgPGJ1dHRvbj5cclxuICAgICAgICA8cD5WaWV3IE1vcmU8L3A+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweFxyXG59XHJcblxyXG5idXR0b24gcCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oXHJcbiAgICAwJSA3NCUsXHJcbiAgICA0JSA3NSUsXHJcbiAgICA4JSA3NiUsXHJcbiAgICAxMSUgNzclLFxyXG4gICAgMTUlIDc4JSxcclxuICAgIDIwJSA3OCUsXHJcbiAgICAyNSUgNzclLFxyXG4gICAgMzIlIDc3JSxcclxuICAgIDM3JSA3NSUsXHJcbiAgICA0MCUgNzQlLFxyXG4gICAgNDMlIDc0JSxcclxuICAgIDQ2JSA3MyUsXHJcbiAgICA1MiUgNzIlLFxyXG4gICAgNTclIDcyJSxcclxuICAgIDY1JSA3NCUsXHJcbiAgICA2NiUgNzUlLFxyXG4gICAgNzElIDc4JSxcclxuICAgIDc1JSA4MiUsXHJcbiAgICA4MSUgODYlLFxyXG4gICAgODMlIDg4JSxcclxuICAgIDg4JSA5MSUsXHJcbiAgICA5MCUgOTQlLFxyXG4gICAgOTQlIDk2JSxcclxuICAgIDk4JSA5OCUsXHJcbiAgICAxMDAlIDEwMCUsXHJcbiAgICA4MiUgMTAwJSxcclxuICAgIDAgMTAwJVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTs7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG5idXR0b246OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLyogICBib3R0b206IDgwJTsgKi9cclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAvKiAgIGJvdHRvbTo7ICovXHJcbiAgei1pbmRleDogLTE7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMCUgNzQlLFxyXG4gICAgNCUgNzUlLFxyXG4gICAgOCUgNzYlLFxyXG4gICAgMTElIDc3JSxcclxuICAgIDE1JSA3OCUsXHJcbiAgICAyMCUgNzglLFxyXG4gICAgMjUlIDc3JSxcclxuICAgIDMyJSA3NyUsXHJcbiAgICAzNyUgNzUlLFxyXG4gICAgNDAlIDc0JSxcclxuICAgIDQzJSA3NCUsXHJcbiAgICA0NiUgNzMlLFxyXG4gICAgNTIlIDcyJSxcclxuICAgIDU3JSA3MiUsXHJcbiAgICA2NSUgNzQlLFxyXG4gICAgNjYlIDc1JSxcclxuICAgIDcxJSA3OCUsXHJcbiAgICA3NSUgODIlLFxyXG4gICAgODElIDg2JSxcclxuICAgIDgzJSA4OCUsXHJcbiAgICA4OCUgOTElLFxyXG4gICAgOTAlIDk0JSxcclxuICAgIDk0JSA5NiUsXHJcbiAgICA5OCUgOTglLFxyXG4gICAgMTAwJSAxMDAlLFxyXG4gICAgODIlIDEwMCUsXHJcbiAgICAwIDEwMCVcclxuICApO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07O1xyXG59XHJcblxyXG5idXR0b246aG92ZXI6OmFmdGVyIHtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oXHJcbiAgICAwIDMwJSxcclxuICAgIDklIDM0JSxcclxuICAgIDclIDM5JSxcclxuICAgIDExJSA0MyUsXHJcbiAgICAxMyUgMzMlLFxyXG4gICAgMTclIDMwJSxcclxuICAgIDI0JSAzNCUsXHJcbiAgICAyNSUgMzUlLFxyXG4gICAgMzAlIDMxJSxcclxuICAgIDMwJSAzOCUsXHJcbiAgICAzOSUgMzMlLFxyXG4gICAgMzUlIDQzJSxcclxuICAgIDQzJSA0NSUsXHJcbiAgICA1NSUgNDYlLFxyXG4gICAgNjUlIDc0JSxcclxuICAgIDY3JSA2NiUsXHJcbiAgICA4MSUgNTclLFxyXG4gICAgNzUlIDgyJSxcclxuICAgIDgxJSA4NiUsXHJcbiAgICA4MyUgODglLFxyXG4gICAgODglIDkxJSxcclxuICAgIDkwJSA5NCUsXHJcbiAgICA5NCUgOTYlLFxyXG4gICAgOTglIDk4JSxcclxuICAgIDEwMCUgMTAwJSxcclxuICAgIDgyJSAxMDAlLFxyXG4gICAgMCAxMDAlXHJcbiAgKTtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbihcclxuICAgIDAgMzAlLFxyXG4gICAgOSUgMzQlLFxyXG4gICAgNyUgMzklLFxyXG4gICAgMTElIDQzJSxcclxuICAgIDEzJSAzMyUsXHJcbiAgICAxNyUgMzAlLFxyXG4gICAgMjQlIDM0JSxcclxuICAgIDI1JSAzNSUsXHJcbiAgICAzMCUgMzElLFxyXG4gICAgMzAlIDM4JSxcclxuICAgIDM5JSAzMyUsXHJcbiAgICAzNSUgNDMlLFxyXG4gICAgNDMlIDQ1JSxcclxuICAgIDU1JSA0NiUsXHJcbiAgICA2NSUgNzQlLFxyXG4gICAgNjclIDY2JSxcclxuICAgIDgxJSA1NyUsXHJcbiAgICA3NSUgODIlLFxyXG4gICAgODElIDg2JSxcclxuICAgIDgzJSA4OCUsXHJcbiAgICA4OCUgOTElLFxyXG4gICAgOTAlIDk0JSxcclxuICAgIDk0JSA5NiUsXHJcbiAgICA5OCUgOTglLFxyXG4gICAgMTAwJSAxMDAlLFxyXG4gICAgODIlIDEwMCUsXHJcbiAgICAwIDEwMCVcclxuICApO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkV3JhcHBlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkFSIENhcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIEFSIEJ1c2luZXNzIENhcmQsIFdlZGRpbmcgQ2FyZCwgU3RpY2tlciBhbmQgVGhhbmtzIENhcmRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWUtbW9yZVwiPkJvb2sgTm93PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vbnRoXCI+bmV4PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+QVI8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5wYXJlbnQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIEJsYWNrO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBTZXQgYmFja2dyb3VuZCB0byB0cmFuc3BhcmVudCAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMykgMHB4IDMwcHggMzBweCAtMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLjUsIDEsIDAsIDMwZGVnKTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9OzsgLyogQ2hhbmdlIGJhY2tncm91bmQgdG8gcmVkICovXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHBhZGRpbmc6IDYwcHggMjVweCAyNXB4IDI1cHg7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IC5jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDUwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IC5jYXJkLXRpdGxlOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDYwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IC5jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMzBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ib3ggLmNhcmQtY29udGVudDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA2MHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWJveCAuc2VlLW1vcmUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDIwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IC5zZWUtbW9yZTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA2MHB4KTtcclxuICB9XHJcblxyXG4gIC5kYXRlLWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA4MHB4KTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggMTdweCAxMHB4IC0xMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtYm94IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS1ib3ggLm1vbnRoIHtcclxuICAgIGNvbG9yOiBibGFjazsgLyogQ2hhbmdlIGNvbG9yIHRvIGJsYWNrICovXHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS1ib3ggLmRhdGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiBibGFjazsgLyogQ2hhbmdlIGNvbG9yIHRvIGJsYWNrICovXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuMVwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4yXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bjNcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuNFwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWludFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsb1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+bmV4QVI8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1lcmFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0MCwgNDAsIDQwKTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2Zvcm0gKi9cclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgIGFuaW1hdGlvbjogYm91bmNlIDAuNnMgZWFzZS1pbi1vdXQ7IC8qIE1vYmlsZSBhbmltYXRpb24gKi9cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgYm91bmNlIHtcclxuICAgIDAlLCAyMCUsIDUwJSwgODAlLCAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWludCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjZmYwMDAwLCAjZmYwMDQ1LCAjZmYwMDc4LCAjZWEwMGFhLCAjYjgxY2Q3LCAjOGEzYWQ2LCAjNTc0NmNmLCAjMDA0YWMyLCAjMDAzZDk0LCAjMDAyZTY2LCAjMDAxZDNhLCAjMDIwODEyKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1vdXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6aG92ZXIgLmNhcmQtaW50IHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICB9XHJcblxyXG4gIC50b3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwJSk7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc3BlYWtlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDAlKTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcclxuICB9XHJcblxyXG4gIC5jYW1lcmEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICByaWdodDogODQlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwJSk7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQ4KTtcclxuICB9XHJcblxyXG4gIC5pbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIxMik7XHJcbiAgfVxyXG5cclxuICAuYnRuMSwgLmJ0bjIsIC5idG4zLCAuYnRuNCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bjEsIC5idG4yLCAuYnRuMyB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTExMTExLCAjMjIyMjIyLCAjMzMzMzMzLCAjNDY0NjQ2LCAjNTk1OTU5KTtcclxuICB9XHJcblxyXG4gIC5idG4yLCAuYnRuMyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xKTtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgfVxyXG5cclxuICAuYnRuMiwgLmJ0bjMge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSk7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuMiB7XHJcbiAgICB0b3A6IDI2JTtcclxuICB9XHJcblxyXG4gIC5idG4zIHtcclxuICAgIHRvcDogMzYlO1xyXG4gIH1cclxuXHJcbiAgLmhlbGxvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6aG92ZXIgLmhpZGRlbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6aG92ZXIgLmhlbGxvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5uZXhBUjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+QVIgYW5kIFhSPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgRWxldmF0ZSB1c2VyIGV4cGVyaWVuY2Ugd2l0aCBvdXIgQXVnbWVudGVkIFJlYWxpdHkgc29mdHdhcmUsXHJcbiAgICAgICAgICAgICAgYmxlbmRpbmcgcmVhbCBhbmQgdmlydHVhbCB3b3JsZHMgZm9yIGlubm92YXRpdmUgZW5nYWdlbWVudCBpblxyXG4gICAgICAgICAgICAgIG1hcmtldGluZywgZWR1Y2F0aW9uLCBhbmQgbWVkaWEuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPm5leE5FVDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+V2ViIGFuZCBDdXN0b20gU29mdHdhcmU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICBFbmhhbmNlIHlvdXIgb25saW5lIHByZXNlbmNlIHdpdGggb3VyIGN1c3RvbSB3ZWIgYW5kIHNvZnR3YXJlXHJcbiAgICAgICAgICAgICAgZGV2ZWxvcG1lbnQuIFdlIGRlbGl2ZXIgcmVzcG9uc2l2ZSwgU0VPLW9wdGltaXplZCB3ZWJzaXRlcyBhbmRcclxuICAgICAgICAgICAgICB0YWlsb3JlZCBzb2Z0d2FyZSBzb2x1dGlvbnMgdGhhdCBlZmZlY3RpdmVseSBjb21tdW5pY2F0ZSB5b3VyXHJcbiAgICAgICAgICAgICAgYnJhbmQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPk5leEFpPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIj4tPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgSW1wcm92ZSBlZmZpY2llbmN5IHdpdGggb3VyIEFJLXBvd2VyZWQgT2JqZWN0IERldGVjdGlvbiBzeXN0ZW1zLFxyXG4gICAgICAgICAgICAgIGlkZWFsIGZvciByZXRhaWwsIHNlY3VyaXR5LCBhbmQgYXV0b21hdGlvbiwgZW5hYmxpbmcgc21hcnRcclxuICAgICAgICAgICAgICBpbnZlbnRvcnksIHN1cnZlaWxsYW5jZSwgYW5kIHByb2Nlc3MgYXV0b21hdGlvbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogRGlzdHJpYnV0ZSBzcGFjZSBldmVubHkgKi9cclxuICBnYXA6IDJyZW07IC8qIEVxdWFsIGdhcCBiZXR3ZWVuIGNhcmRzICovXHJcbiAgbWFyZ2luOiA1MHB4IDBweCA1MHB4IDBweDtcclxuICBcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMThyZW07IC8qIEluY3JlYXNlZCBjYXJkIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEycmVtOyAvKiBJbmNyZWFzZWQgY2FyZCBoZWlnaHQgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyLjI1cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTNlM2U7XHJcbiAgICBwYWRkaW5nOiAyZW07IC8qIEFkanVzdCBwYWRkaW5nIGlmIG5lZWRlZCAqL1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIGhlaWdodDogMTAwJTsgLyogRW5zdXJlIGNvbnRlbnQgdGFrZXMgZnVsbCBoZWlnaHQgKi9cclxuICB9XHJcblxyXG4gIC5jYXJkOmhvdmVyIC5jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwLjV0dXJuKTtcclxuICB9XHJcblxyXG4gIC5mcm9udCxcclxuICAuYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig1cmVtKTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnJlbSk7XHJcbiAgfVxyXG5cclxuICAuYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMC41dHVybik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigzcmVtKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZGlzcGxheTogZmxleDsgLyogRW5zdXJlIGZsZXhib3ggaXMgdXNlZCAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgY2FyZHMgdmVydGljYWxseSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGFsaWduIGNhcmRzICovXHJcbiAgICBtYXJnaW46IDQwcHggMHB4IDQwcHg7IC8qIEFkanVzdCBtYXJnaW5zIGZvciBtb2JpbGUgKi9cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIHdpZHRoOiA4MCU7IC8qIEZ1bGwgd2lkdGggZm9yIG1vYmlsZSAqL1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4OyAvKiBGaXhlZCBoZWlnaHQgZm9yIG1vYmlsZSAqL1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtOyAvKiBTcGFjZSBiZXR3ZWVuIGNhcmRzICovXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCB7IEluc3RhZ3JhbSwgRmFjZWJvb2ssIFlvdXR1YmUsIFR3aXR0ZXIsIExpbmtlZGluIH0gZnJvbSAnLi4vSWNvbnMnO1xyXG5pbXBvcnQgU3RpY2t5Q3Vyc29yIGZyb20gJy4uL1N0aWNreUN1cnNvcic7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgTGluayB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IG1lZGlhcyA9IFtcclxuICB7IGNvbXBvbmVudDogSW5zdGFncmFtLCB1cmw6ICdpbnN0YWdyYW0uY29tL19sdW1pbmV4YS8nIH0sXHJcbiAgeyBjb21wb25lbnQ6IEZhY2Vib29rLCB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYXJsdW1pbmV4YS8nIH0sXHJcbiAgeyBjb21wb25lbnQ6IFlvdXR1YmUsIHVybDogJ2h0dHBzOi8veW91dHViZS5jb20nIH0sXHJcbiAgeyBjb21wb25lbnQ6IFR3aXR0ZXIsIHVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vX2x1bWluZXhhJyB9LFxyXG4gIHsgY29tcG9uZW50OiBMaW5rZWRpbiwgdXJsOiAnaHR0cHM6Ly9saW5rZWRpbi5jb20vY29tcGFueS9sdW1pbmV4YS10ZWNobm9sb2d5JyB9LFxyXG5dO1xyXG5cclxuY29uc3QgU29jaWFsTWVkaWEgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgey4uLnByb3BzfT5cclxuICAgICAge21lZGlhcy5tYXAoKHsgY29tcG9uZW50OiBDb21wb25lbnQsIHVybCB9KSA9PiAoXHJcbiAgICAgICAgPFN0aWNreUN1cnNvciBrZXk9e3VybH0+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17YWRkQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3JlbW92ZUN1cnNvckJvcmRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvU3RpY2t5Q3Vyc29yPlxyXG4gICAgICApKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNvY2lhbE1lZGlhKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU29jaWFsTWVkaWEnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IC8qIENoYW5nZWQgZnJvbSBmbGV4LXN0YXJ0IHRvIGZsZXgtZW5kICovXG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbiAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDQxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiBcblxuICAmOmhvdmVyIHN2ZyBwYXRoIHtcbiAgICBmaWxsOiByZWQ7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5cclxuY29uc3QgU3RpY2t5Q3Vyc29yID0gKHsgY2hpbGRyZW46IGNoaWxkcmVuUHJvcCwgc3RpY2t5ID0gdHJ1ZSB9KSA9PiB7XHJcbiAgY29uc3QgY2hpbGRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgeyBsb2NrQ3Vyc29yUG9zaXRpb24gfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgY2hpbGQgPT4ge1xyXG4gICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSB9ID0gY2hpbGQucHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IGV2ZW50ID0+IHtcclxuICAgICAgaWYgKCFjaGlsZFJlZi5jdXJyZW50KSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNoaWxkUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICBjb25zdCB4ID0gcG9zaXRpb24ud2lkdGggLyAyICsgcG9zaXRpb24ubGVmdDtcclxuICAgICAgY29uc3QgeSA9IHBvc2l0aW9uLmhlaWdodCAvIDIgKyBwb3NpdGlvbi50b3A7XHJcbiAgICAgIGxvY2tDdXJzb3JQb3NpdGlvbih7IHgsIHkgfSk7XHJcblxyXG4gICAgICBpZiAob25Nb3VzZUVudGVyKSB7XHJcbiAgICAgICAgb25Nb3VzZUVudGVyKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoIWNoaWxkUmVmLmN1cnJlbnQpIHJldHVybjtcclxuXHJcbiAgICAgIGxvY2tDdXJzb3JQb3NpdGlvbihudWxsKTtcclxuXHJcbiAgICAgIGlmIChvbk1vdXNlTGVhdmUpIHtcclxuICAgICAgICBvbk1vdXNlTGVhdmUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZiA9IG5vZGUgPT4ge1xyXG4gICAgICAvLyBLZWVwIHlvdXIgb3duIHJlZmVyZW5jZVxyXG4gICAgICBjaGlsZFJlZi5jdXJyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIHJlZiwgaWYgYW55XHJcbiAgICAgIGNvbnN0IHsgcmVmIH0gPSBjaGlsZDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVmKG5vZGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgIG9uTW91c2VFbnRlcjogaGFuZGxlTW91c2VFbnRlcixcclxuICAgICAgb25Nb3VzZUxlYXZlOiBoYW5kbGVNb3VzZUxlYXZlLFxyXG4gICAgICByZWY6IGhhbmRsZVJlZixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc3RpY2t5ID8gY2hpbGRyZW4gOiBjaGlsZHJlblByb3A7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFN0aWNreUN1cnNvcik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N0aWNreUN1cnNvcic7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGN1cnNvclN0eWxlOiB7XHJcbiAgICBib3JkZXJlZDogZmFsc2UsXHJcbiAgICBjb2xvcjogY29sb3JzLnJlZCxcclxuICB9LFxyXG4gIHBvc2l0aW9uOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1VQREFURV9DVVJTT1JfU1RZTEUnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0FERF9DVVJTT1JfQk9SREVSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGJvcmRlcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdSRU1PVkVfQ1VSU09SX0JPUkRFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBib3JkZXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0FERF9DVVJTT1JfQ09MT1InOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgY29sb3I6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdSRVNFVF9DVVJTT1JfQ09MT1InOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgY29sb3I6IElOSVRJQUxfU1RBVEUuY3Vyc29yU3R5bGUuY29sb3IsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPQ0tfQ1VSU09SX1BPU0lUSU9OJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJzb3JDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEN1cnNvckNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIElOSVRJQUxfU1RBVEUpO1xyXG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBzdGF0ZSwgZGlzcGF0Y2ggfSksIFtzdGF0ZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q3Vyc29yQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L0N1cnNvckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUN1cnNvckNvbnRleHQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IFJlYWN0LnVzZUNvbnRleHQoQ3Vyc29yQ29udGV4dCk7XHJcbiAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdO1xyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBpc01lbnVPcGVuOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdUT0dHTEVfTUVOVSc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc01lbnVPcGVuOiAhc3RhdGUuaXNNZW51T3BlbixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNZW51Q29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyb290UmVkdWNlciwgSU5JVElBTF9TVEFURSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IHN0YXRlLCBkaXNwYXRjaCB9KSwgW3N0YXRlXSk7XHJcbiAgcmV0dXJuIDxNZW51Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L01lbnVDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1lbnVDb250ZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KE1lbnVDb250ZXh0KTtcclxuICByZXR1cm4gW3N0YXRlLCBkaXNwYXRjaF07XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUN1cnNvckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2N1cnNvcic7XHJcblxyXG5jb25zdCB1c2VDdXJzb3JTdHlsZSA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUN1cnNvckNvbnRleHQoKTtcclxuXHJcbiAgY29uc3QgYWRkQ3Vyc29yQm9yZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NVUlNPUl9CT1JERVInIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCByZW1vdmVDdXJzb3JCb3JkZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfQ1VSU09SX0JPUkRFUicgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGFkZEN1cnNvckNvbG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoY29sb3IpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NVUlNPUl9DT0xPUicsIHBheWxvYWQ6IGNvbG9yIH0pO1xyXG4gICAgfSxcclxuICAgIFtkaXNwYXRjaF0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcmVzZXRDdXJzb3JDb2xvciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFU0VUX0NVUlNPUl9DT0xPUicgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGxvY2tDdXJzb3JQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQ0tfQ1VSU09SX1BPU0lUSU9OJywgcGF5bG9hZDogY29vcmRpbmF0ZXMgfSk7XHJcbiAgICB9LFxyXG4gICAgW2Rpc3BhdGNoXSxcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBhZGRDdXJzb3JDb2xvcixcclxuICAgIHJlc2V0Q3Vyc29yQ29sb3IsXHJcbiAgICBhZGRDdXJzb3JCb3JkZXIsXHJcbiAgICByZW1vdmVDdXJzb3JCb3JkZXIsXHJcbiAgICBsb2NrQ3Vyc29yUG9zaXRpb24sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUN1cnNvclN0eWxlO1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBjbGVhbnVwID0gUmVhY3QudXNlUmVmPCgpID0+IHZvaWQ+KClcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICAvLyBjbGVhbnVwIHByZXZpb3VzIGV2ZW50IGhhbmRsZXJzXG4gICAgICBpZiAoY2xlYW51cC5jdXJyZW50KSB7XG4gICAgICAgIGNsZWFudXAuY3VycmVudCgpXG4gICAgICAgIGNsZWFudXAuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAocCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBlbCAmJiBlbC50YWdOYW1lICYmIGlzTG9jYWxVUkwoaHJlZikpIHtcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgIGxvY2FsZTpcbiAgICAgICAgICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBsb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtwLCBjaGlsZFJlZiwgaHJlZiwgYXMsIHJvdXRlciwgbG9jYWxlXVxuICApXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IgPSAnU1NHIERhdGEgTk9UX0ZPVU5EJ1xuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSByZWxvYWRpbmcgaW4gZGV2ZWxvcG1lbnQgZnJvbSBmYWxsYmFjayByZXR1cm5pbmcgMjAwXG4gICAgICAgIC8vIHRvIG9uLWRlbWFuZC1lbnRyeS1oYW5kbGVyIGNhdXNpbmcgaXQgdG8gcmVsb2FkIHBlcmlvZGljYWxseVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgICAgIH0gPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcblxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoYXMsIHRoaXMubG9jYWxlcylcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHVybCA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uLCBvcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNzZzQwNCA9IGVyci5tZXNzYWdlID09PSBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1JcblxuICAgICAgaWYgKHNzZzQwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBtb2Q6IGFueVxuICAgICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzLCBtb2QgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgICAnLzQwNCdcbiAgICAgICAgICApKVxuXG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHRvbGVyYXRlIHRoZXNlIHByb3BzIG1pc3NpbmcgYW5kIHN0aWxsIHJlbmRlciB0aGVcbiAgICAgICAgICAvLyBwYWdlIGluc3RlYWQgb2YgZmFsbGluZyBiYWNrIHRvIF9lcnJvcj9cbiAgICAgICAgICBpZiAobW9kICYmIG1vZC5fX05fU1NHKSB7XG4gICAgICAgICAgICBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZignLzQwNCcsICcvNDA0JywgdHJ1ZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgLy8gbm9uLWZhdGFsIGZhbGxiYWNrIHRvIF9lcnJvclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgICBlcnJvcjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG4gICAgICAgIC5ub3JtYWxpemVMb2NhbGVQYXRoIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykubm9ybWFsaXplTG9jYWxlUGF0aFxuXG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCBvcHRpb25zLmxvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICAvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG4gIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpXG4gIGRlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGVcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4YXJhIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9OZXhhcic7IC8vIEFkanVzdCB0aGUgcGF0aCBhcyBuZWNlc3NhcnlcclxuXHJcbmNvbnN0IE5leGFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4YXJhIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4YXI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgd2hpdGU6ICcjZmZmJyxcbiAgYmxhY2s6ICcjMDAwJyxcbiAgcmVkOiAnI0VBMjgxRScsXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4gIG1heC13aWR0aDogMTIzNHB4O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUZvbnRTdHlsZSA9IGNzc2BcbiAgZm9udC1mYW1pbHk6IHByZXNpY2F2LCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuYDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJyb3dzZXJzbGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
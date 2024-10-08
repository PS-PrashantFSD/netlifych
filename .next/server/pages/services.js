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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/services.js");
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

/***/ "./components/Home/Contact/Contact.jsx":
/*!*********************************************!*\
  !*** ./components/Home/Contact/Contact.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SocialMedia */ "./components/SocialMedia/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/Contact/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Contact\\Contact.jsx";






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

/***/ "./components/Home/Contact/index.js":
/*!******************************************!*\
  !*** ./components/Home/Contact/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ "./components/Home/Contact/Contact.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Contact__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Contact/styles.js":
/*!*******************************************!*\
  !*** ./components/Home/Contact/styles.js ***!
  \*******************************************/
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
  padding: 0 32px 285px;
  color: ${({
  theme
}) => theme.colors.red};
  /* opacity: 1; */
  transform: translate3d(0, 60px, 0);
  /* transition: opacity 1s ease, transform 1s cubic-bezier(0, 0.7, 0.29, 0.97);
  transition-delay: 0.3s; */
  /* will-change: opacity, transform; */

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
    padding: 0 32px 156px;

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

/***/ "./components/Home/Services/Services.jsx":
/*!***********************************************!*\
  !*** ./components/Home/Services/Services.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _Misc_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Misc/Card */ "./components/Misc/Card.jsx");
/* harmony import */ var _Icons_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons/Arrow */ "./components/Icons/Arrow.jsx");
/* harmony import */ var _Home_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Home/Contact */ "./components/Home/Contact/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/Home/Services/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Services\\Services.jsx";








const Services = () => {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/services",
      passHref: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProjectAnchor"], {
        onMouseEnter: handleAnchorHoverStart,
        onMouseLeave: handleAnchorHoverEnd,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProjectInfo"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProjectTitle"], {
            children: ["OUR ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 19
            }, undefined), " SERVICES", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              className: "arrow",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["AboutDescription"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
        children: "We offer a range of services tailored to meet the unique needs of our clients, including web development, augmented reality solutions, and innovative design services. Our team is dedicated to delivering exceptional results that drive success and engagement."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["TextWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          children: "Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          children: "At our company, we specialize in a range of cutting-edge digital solutions. Our services include advanced Augmented Reality software that transforms your digital interactions, comprehensive Web Development to create user-friendly online platforms, innovative Image Tracking and Object Detection systems designed to streamline processes through smart recognition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Misc_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Home_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Services));

/***/ }),

/***/ "./components/Home/Services/styles.js":
/*!********************************************!*\
  !*** ./components/Home/Services/styles.js ***!
  \********************************************/
/*! exports provided: ContentSection, ProjectAnchor, ProjectInfo, ProjectTitle, ImagePreview, AboutDescription, VideoPreview, MenuContainer, MenuButton, TextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAnchor", function() { return ProjectAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfo", function() { return ProjectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTitle", function() { return ProjectTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return ImagePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDescription", function() { return AboutDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPreview", function() { return VideoPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../styles/shared/text */ "./styles/shared/text.js");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MenuButton */ "./components/MenuButton/index.js");





const ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  position: relative;
  display : block;
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
  padding-top: 0px; /* Reduced padding to decrease space */
  margin-bottom: 100px;
  font-size: 1.8rem; /* Increase font size */
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
  gap: 20px; /* Space between text and card */
  margin-bottom : 90px;

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

/***/ "./components/Misc/Card.jsx":
/*!**********************************!*\
  !*** ./components/Misc/Card.jsx ***!
  \**********************************/
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
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Card.jsx";



const Card = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "parent",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "logo",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "circle circle1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "circle circle2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "circle circle3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "circle circle4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "circle circle5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 100 40",
              className: "svg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
                x: "10",
                y: "30",
                fontFamily: "Arial",
                fontSize: "50",
                fill: "white",
                children: "nex"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)
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
          className: "glass"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "title",
            children: "nexAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "text",
            children: "Augmented Reality - Innovate, Eliminate and Dominate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "bottom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "social-buttons-container"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "view-more",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              className: "view-more-button",
              children: "View more"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
              className: "svg",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("path", {
                d: "m6 9 6 6 6-6"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
    width: 290px;
    height: 300px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, rgb(50, 50, 50) 0%, rgb(30, 30, 30) 100%);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(0, 0, 0, 0.5) 40px 50px 25px -40px, rgba(0, 0, 0, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #e0e0e0;
    font-weight: 900;
    font-size: 20px;
    margin-top: 50px;
  }

  .content .text {
    display: block;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
    color: ${({
  theme
}) => theme.colors.red};;
    font-weight: bolder;
    font-size: 12px;
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: ${({
  theme
}) => theme.colors.red};;
    stroke-width: 3px;
    max-height: 15px;
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
    width: 30px;
    aspect-ratio: 1;
    padding: 5px;
    background: rgb(50, 50, 50);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 5px -5px;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: #333;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.8), rgba(150, 0, 0, 0.6));
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    background: linear-gradient(135deg, rgba(255, 50, 50, 0.7), rgba(180, 0, 0, 0.6));
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    background: linear-gradient(135deg, rgba(255, 100, 100, 0.6), rgba(210, 0, 0, 0.6));
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    background: linear-gradient(135deg, rgba(255, 150, 150, 0.5), rgba(220, 0, 0, 0.6));
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    background: linear-gradient(135deg, rgba(255, 200, 200, 0.4), rgba(230, 0, 0, 0.6));
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(0, 0, 0, 0.5) 30px 50px 25px -40px, rgba(0, 0, 0, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
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
          lineNumber: 28,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined)
    }, url, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined))
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
  justify-content: flex-start;
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

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/Home/Services/Services */ "./components/Home/Services/Services.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\pages\\services.js";



const Service = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};
/* harmony default export */ __webpack_exports__["default"] = (Service);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5pbWF0ZU9uU2NyZWVuL0FuaW1hdGVPblNjcmVlbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvQ29udGFjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9TZXJ2aWNlcy9TZXJ2aWNlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0Fycm93LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0ZhY2Vib29rLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9MaW5rZWRpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9Mb2dvLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL1R3aXR0ZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvWW91dHViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnVCdXR0b24vTWVudUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51QnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudUJ1dHRvbi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NaXNjL0NhcmQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsTWVkaWEvU29jaWFsTWVkaWEuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsTWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdGlja3lDdXJzb3IvU3RpY2t5Q3Vyc29yLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0aWNreUN1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQ3Vyc29yU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2hhcmVkL3RleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ0cmFuc2xhdGVZIiwiZHVyYXRpb24iLCJlYXNlIiwib3BhY2l0eSIsInZhcmlhbnRzIiwic2hvdyIsImhpZGRlbiIsIkFuaW1hdGVPblNjcmVlbiIsImNoaWxkcmVuIiwiY2hpbGRyZW5Qcm9wIiwiYW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uIiwiaW5WaWV3UmVmIiwiaW5WaWV3IiwidXNlSW5WaWV3IiwidHJpZ2dlck9uY2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInN0YXJ0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiaGFuZGxlUmVmIiwibm9kZSIsInJlZiIsImN1cnJlbnQiLCJjbG9uZUVsZW1lbnQiLCJhbmltYXRlIiwiaW5pdGlhbCIsIm1lbW8iLCJDb250YWN0IiwiYWRkQ3Vyc29yQm9yZGVyIiwicmVtb3ZlQ3Vyc29yQm9yZGVyIiwidXNlQ3Vyc29yU3R5bGUiLCJfanN4REVWIiwiQ29udGFjdFNlY3Rpb24iLCJjbGFzc05hbWUiLCJocmVmIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiU29jaWFsTWVkaWEiLCJzdHlsZWQiLCJtb3Rpb24iLCJzZWN0aW9uIiwiY29udGFpbmVyU3R5bGVzIiwidGhlbWUiLCJjb2xvcnMiLCJyZWQiLCJ0ZXh0Iiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJzbWFsbCIsInRhYmxldCIsIlNlcnZpY2VzIiwiaGFuZGxlQW5jaG9ySG92ZXJTdGFydCIsImhhbmRsZUFuY2hvckhvdmVyRW5kIiwiQ29udGVudFNlY3Rpb24iLCJMaW5rIiwicGFzc0hyZWYiLCJQcm9qZWN0QW5jaG9yIiwiUHJvamVjdEluZm8iLCJQcm9qZWN0VGl0bGUiLCJBcnJvdyIsIkFib3V0RGVzY3JpcHRpb24iLCJUZXh0V3JhcHBlciIsIkNhcmQiLCJhIiwiZGl2IiwiaDEiLCJJbWFnZVByZXZpZXciLCJWaWRlb1ByZXZpZXciLCJNZW51Q29udGFpbmVyIiwiTWVudUJ1dHRvbiIsIkRlZmF1bHRNZW51QnV0dG9uIiwiYmFja2dyb3VuZCIsIl9yZWYiLCJmaWxsQ29sb3IiLCJ3aGl0ZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic3ZnIiwiX29iamVjdFNwcmVhZCIsInhtbG5zIiwidmlld0JveCIsImQiLCJmaWxsIiwiZmlsbFJ1bGUiLCJGYWNlYm9vayIsIkluc3RhZ3JhbSIsIkxpbmtlZEluIiwiTG9nb0NvbnRhaW5lciIsIlN0eWxlZExvZ28iLCJpbWciLCJMb2dvIiwic3JjIiwiYWx0IiwiVHdpdHRlciIsIllvdVR1YmUiLCJzdGlja3kiLCJ0aXRsZSIsImRpc3BhdGNoIiwidXNlTWVudUNvbnRleHQiLCJoYW5kbGVPblRvZ2dsZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlN0aWNreUN1cnNvciIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJmb3J3YXJkUmVmIiwiYnV0dG9uIiwiU3R5bGVkV3JhcHBlciIsIngiLCJ5IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwibWVkaWFzIiwiY29tcG9uZW50IiwidXJsIiwiWW91dHViZSIsIkxpbmtlZGluIiwiQ29udGFpbmVyIiwiQ29tcG9uZW50IiwidGFyZ2V0IiwiY2hpbGRSZWYiLCJ1c2VSZWYiLCJsb2NrQ3Vyc29yUG9zaXRpb24iLCJoYW5kbGVNb3VzZUVudGVyIiwiZXZlbnQiLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwibGVmdCIsImhlaWdodCIsInRvcCIsImhhbmRsZU1vdXNlTGVhdmUiLCJJTklUSUFMX1NUQVRFIiwiY3Vyc29yU3R5bGUiLCJib3JkZXJlZCIsImNvbG9yIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJDdXJzb3JDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkN1cnNvckNvbnRleHRQcm92aWRlciIsInVzZVJlZHVjZXIiLCJzdG9yZSIsInVzZU1lbW8iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ3Vyc29yQ29udGV4dCIsInVzZUNvbnRleHQiLCJpc01lbnVPcGVuIiwiTWVudUNvbnRleHQiLCJNZW51Q29udGV4dFByb3ZpZGVyIiwiYWRkQ3Vyc29yQ29sb3IiLCJyZXNldEN1cnNvckNvbG9yIiwiY29vcmRpbmF0ZXMiLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInByZWZldGNoIiwicm91dGVyIiwiYXMiLCJvcHRpb25zIiwiY2F0Y2giLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsImxvY2FsZSIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIndhcm4iLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwib25seSIsImNsZWFudXAiLCJzZXRSZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwcmlvcml0eSIsImRlZmF1bHRMb2NhbGUiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiUm91dGVyIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VSb3V0ZXIiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwibGVuZ3RoIiwiaXNMb2NhbFVSTCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUhyZWYiLCJjdXJyZW50UGF0aCIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwibWFya0xvYWRpbmdFcnJvciIsInByZXBhcmVVcmxBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwibG9jYWxlcyIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiZmlsdGVyIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsInNzZzQwNCIsIm1vZCIsInBhZ2UiLCJmZXRjaENvbXBvbmVudCIsIl9nZXRTdGF0aWNEYXRhIiwiZ2V0RGF0YUhyZWYiLCJfZXJyIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsIl9nZXREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJkYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwic29tZSIsInJlIiwidGVzdCIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsIl9fbmV4dExvY2FsZSIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsInNob3VsZEFkZEJhc2VQYXRoIiwibWF0Y2giLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXNvbHZlUmV3cml0ZXMiLCJyZXdyaXRlIiwic291cmNlIiwiZGVzdFJlcyIsImdldFJvdXRlTWF0Y2hlciIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJTZXJ2aWNlIiwiX0ZyYWdtZW50IiwiYmxhY2siLCJjc3MiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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QUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUFFO1lBQUM7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQ3RCLENBQUM7VUFBQTtZQUFBSCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFDSCxDQUFDO1FBQUE7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ0gsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNIO0lBQUM7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0g7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTyxDQUFDO0FBRXBCLENBQUM7QUFFRCxNQUFNd0UsYUFBYSxHQUFHdEUsd0RBQU0sQ0FBQzJCLEdBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLENBQUM7RUFBRXZCO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRztB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WHRCO0FBQWU7RUFDYmpmLEtBQUssRUFBRSxNQUFNO0VBQ2JtZixLQUFLLEVBQUUsTUFBTTtFQUNibGhCLEdBQUcsRUFBRTtBQUNQLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0FBQXdDO0FBRXpCbWhCLG9IQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFFakMsTUFBTWpoQixrQkFBa0IsR0FBR2loQixxREFBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQzs7Ozs7Ozs7Ozs7QUNQRCwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2VydmljZXMuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICBkZWxheTogMC4zLFxyXG4gIHRyYW5zbGF0ZVk6IHtcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgZWFzZTogWzAsIDAuNywgMC4yOSwgMC45N10sXHJcbiAgfSxcclxuICBvcGFjaXR5OiB7XHJcbiAgICBkdXJhdGlvbjogMSxcclxuICAgIGVhc2U6IFswLjI1LCAwLjEsIDAuMjUsIDEuMF0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIHNob3c6IHsgdHJhbnNsYXRlWTogMCwgb3BhY2l0eTogMSB9LFxyXG4gIGhpZGRlbjogeyB0cmFuc2xhdGVZOiA2MCwgb3BhY2l0eTogMCB9LFxyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0ZU9uU2NyZWVuID0gKHsgY2hpbGRyZW46IGNoaWxkcmVuUHJvcCB9KSA9PiB7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgW2luVmlld1JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7IHRyaWdnZXJPbmNlOiB0cnVlIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluVmlldykge1xyXG4gICAgICBhbmltYXRpb24uc3RhcnQoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9LCBbYW5pbWF0aW9uLCBpblZpZXcsIGluVmlld1JlZl0pO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlblByb3AsIGNoaWxkID0+IHtcclxuICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZiA9IG5vZGUgPT4ge1xyXG4gICAgICAvLyBLZWVwIHlvdXIgb3duIHJlZmVyZW5jZVxyXG4gICAgICBpblZpZXdSZWYobm9kZSk7XHJcblxyXG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCByZWYsIGlmIGFueVxyXG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGQ7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVmKG5vZGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgIHZhcmlhbnRzLFxyXG4gICAgICB0cmFuc2l0aW9uLFxyXG4gICAgICBhbmltYXRlOiBhbmltYXRpb24sXHJcbiAgICAgIGluaXRpYWw6ICdoaWRkZW4nLFxyXG4gICAgICByZWY6IGhhbmRsZVJlZixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFuaW1hdGVPblNjcmVlbik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FuaW1hdGVPblNjcmVlbic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuLi8uLi9Tb2NpYWxNZWRpYSc7XHJcbmltcG9ydCB7IENvbnRhY3RTZWN0aW9uIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgPENvbnRhY3RTZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0LXRleHRcIlxyXG4gICAgICAgICAgICBocmVmPVwidGVsOisxLjkwMi40MTcuMDYzNFwiXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17YWRkQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3JlbW92ZUN1cnNvckJvcmRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgKzkxLjg2Ni4wNDQuOTk3MFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0LXRleHRcIlxyXG4gICAgICAgICAgICBocmVmPVwibWFpbHRvOmluZm9AZnVycm93LnN0dWRpb1wiXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17YWRkQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3JlbW92ZUN1cnNvckJvcmRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgaW5mb0BsdW1pbmV4YS5pblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhZGRyZXNzIGNsYXNzTmFtZT1cImNvbHVtbiBjb250YWN0LXRleHRcIj5cclxuICAgICAgICAgIDE0IDFzdCBTdGFnZSBCaGFuYXNoYW5rYXJpPGJyIC8+IEJhbmdhbG9yZSwgS0EgSU5cclxuICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgPFNvY2lhbE1lZGlhIGNsYXNzTmFtZT1cImNvbHVtblwiIC8+XHJcbiAgICAgIDwvQ29udGFjdFNlY3Rpb24+XHJcbiAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDb250YWN0KTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGFjdCc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFjdFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICAke2NvbnRhaW5lclN0eWxlc307XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAzMnB4IDI4NXB4O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcbiAgLyogb3BhY2l0eTogMTsgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgLyogdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAuNywgMC4yOSwgMC45Nyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7ICovXG4gIC8qIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07ICovXG5cbiAgJiAuY29sdW1uIHtcbiAgICB3aWR0aDogMzMuMzMzJTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgICYgYTpob3ZlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICB9XG4gIH1cblxuICAmIC5jb250YWN0LXRleHQge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAmIGFkZHJlc3Mge1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tZWRpdW1gXG4gICAgJiAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiA0MS42NjYlO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMTYuNjY2JTtcbiAgICAgIH1cbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAmIC5jb2x1bW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmc6IDFweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYgYWRkcmVzcyB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgcGFkZGluZzogMCAzMnB4IDE1NnB4O1xuXG4gICAgJiBhZGRyZXNzIHtcbiAgICAgIHBhZGRpbmc6IDE3cHggMCA0MnB4O1xuICAgIH1cblxuICAgICYgLmNvbnRhY3QtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgfVxuICBgfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLy4uLy4uL01pc2MvQ2FyZCc7XHJcbmltcG9ydCBBcnJvdyBmcm9tICcuLi8uLi9JY29ucy9BcnJvdyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vLi4vLi4vSG9tZS9Db250YWN0JztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBUZXh0V3JhcHBlcixcclxuICBQcm9qZWN0QW5jaG9yLFxyXG4gIFByb2plY3RJbmZvLFxyXG4gIFByb2plY3RUaXRsZSxcclxuICBBYm91dERlc2NyaXB0aW9uLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlckVuZCA9ICgpID0+IHtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIiBwYXNzSHJlZj5cclxuICAgICAgICA8UHJvamVjdEFuY2hvclxyXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVBbmNob3JIb3ZlclN0YXJ0fVxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVBbmNob3JIb3ZlckVuZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgT1VSIDxiciAvPiBTRVJWSUNFU1xyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3cgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgPC9Qcm9qZWN0SW5mbz5cclxuICAgICAgICA8L1Byb2plY3RBbmNob3I+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIHsvKiBBYm91dCBEZXNjcmlwdGlvbiAqL31cclxuICAgICAgPEFib3V0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgV2Ugb2ZmZXIgYSByYW5nZSBvZiBzZXJ2aWNlcyB0YWlsb3JlZCB0byBtZWV0IHRoZSB1bmlxdWUgbmVlZHMgb2Ygb3VyIGNsaWVudHMsIFxyXG4gICAgICAgICAgaW5jbHVkaW5nIHdlYiBkZXZlbG9wbWVudCwgYXVnbWVudGVkIHJlYWxpdHkgc29sdXRpb25zLCBhbmQgaW5ub3ZhdGl2ZSBkZXNpZ24gc2VydmljZXMuIFxyXG4gICAgICAgICAgT3VyIHRlYW0gaXMgZGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgZXhjZXB0aW9uYWwgcmVzdWx0cyB0aGF0IGRyaXZlIHN1Y2Nlc3MgYW5kIGVuZ2FnZW1lbnQuXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9BYm91dERlc2NyaXB0aW9uPlxyXG5cclxuICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIE91ciBtaXNzaW9uIGlzIHRvIHJldm9sdXRpb25pemUgdmlzdWFsIGV4cGVyaWVuY2VzLCBcclxuICAgICAgICAgICAgYnJpZGdpbmcgdGhlIGdhcCBiZXR3ZWVuIHRoZSBwaHlzaWNhbCBhbmQgZGlnaXRhbCB3b3JsZHMuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEF0IG91ciBjb21wYW55LCB3ZSBzcGVjaWFsaXplIGluIGEgcmFuZ2Ugb2YgY3V0dGluZy1lZGdlIGRpZ2l0YWwgc29sdXRpb25zLiBcclxuICAgICAgICAgICAgT3VyIHNlcnZpY2VzIGluY2x1ZGUgYWR2YW5jZWQgQXVnbWVudGVkIFJlYWxpdHkgc29mdHdhcmUgdGhhdCB0cmFuc2Zvcm1zIHlvdXIgXHJcbiAgICAgICAgICAgIGRpZ2l0YWwgaW50ZXJhY3Rpb25zLCBjb21wcmVoZW5zaXZlIFdlYiBEZXZlbG9wbWVudCB0byBjcmVhdGUgdXNlci1mcmllbmRseSBvbmxpbmUgXHJcbiAgICAgICAgICAgIHBsYXRmb3JtcywgaW5ub3ZhdGl2ZSBJbWFnZSBUcmFja2luZyBhbmQgT2JqZWN0IERldGVjdGlvbiBzeXN0ZW1zIGRlc2lnbmVkIHRvIHN0cmVhbWxpbmUgXHJcbiAgICAgICAgICAgIHByb2Nlc3NlcyB0aHJvdWdoIHNtYXJ0IHJlY29nbml0aW9uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkIC8+XHJcbiAgICAgIDwvVGV4dFdyYXBwZXI+XHJcblxyXG4gICAgICA8Q29udGFjdCAvPlxyXG4gICAgPC9Db250ZW50U2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZXJ2aWNlcyk7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4vLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcclxuaW1wb3J0IERlZmF1bHRNZW51QnV0dG9uIGZyb20gJy4uLy4uL01lbnVCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXkgOiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIENoYW5nZSB0byByb3cgb24gbGFyZ2VyIHNjcmVlbnMgKi9cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0QW5jaG9yID0gc3R5bGVkKG1vdGlvbi5hKWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBtYXJnaW46IDA7IC8qIEFkanVzdGVkIG1hcmdpbi1ib3R0b20gZm9yIGxlc3MgZ2FwICovXHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIFxyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RJbmZvID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMyU7XHJcbiAgd2lkdGg6IDgzLjMzMyU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmIGgzLFxyXG4gICYgLnByb2plY3QtaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJiBoMyB7XHJcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XHJcbiAgfVxyXG5cclxuICAmIC5wcm9qZWN0LWluZm8ge1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgJiBoNCB7XHJcbiAgICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDgzLjMzMyU7XHJcblxyXG4gICAgJiAucHJvamVjdC1pbmZvIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICAmIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcclxuICAgICAgdG9wOiAxN3B4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RUaXRsZSA9IHN0eWxlZChtb3Rpb24uaDEpYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogLTNweDtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAmIC5hcnJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDI1cHggMCAwIDNweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIHdpZHRoOiAxMDFweDtcclxuXHJcbiAgICAmIHN2ZyBwYXRoIHtcclxuICAgICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjcxNjY2NjY2Njc7XHJcblxyXG4gICAgJiAuYXJyb3cge1xyXG4gICAgICBtYXJnaW46IDEwcHggMCAwIDJweDtcclxuICAgICAgd2lkdGg6IDc2LjE5cHg7XHJcbiAgICAgIGhlaWdodDogNDNweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVByZXZpZXcgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDgwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuXHJcbiAgJiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBoZWlnaHQ6IDE5MHB4OyAvKiBBZGp1c3QgZm9yIHRhYmxldCB2aWV3ICovXHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXREZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTsgLyogVGFrZSB1cCBhdmFpbGFibGUgc3BhY2UgKi9cclxuICBwYWRkaW5nLXRvcDogMHB4OyAvKiBSZWR1Y2VkIHBhZGRpbmcgdG8gZGVjcmVhc2Ugc3BhY2UgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBmb250LXNpemU6IDEuOHJlbTsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaG9yaXpvbnRhbGx5ICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gdGV4dCB0byB0aGUgbGVmdCAqL1xyXG5cclxuICAmIGgyIHtcclxuICAgIG1hcmdpbjogMDsgLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVmlkZW9QcmV2aWV3ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgJiB2aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNjRweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZChEZWZhdWx0TWVudUJ1dHRvbilgXHJcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMzBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuXHJcbiAgJjo6YmVmb3JlLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgfVxyXG5cclxuICAmIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMyUgLSAzMHB4KTtcclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyMzVweDtcclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWF4LXdpZHRoOiAyMTVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGl0ZW1zIHZlcnRpY2FsbHkgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIG91dCB0aGUgdGV4dCBhbmQgY2FyZCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdhcDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiB0ZXh0IGFuZCBjYXJkICovXHJcbiAgbWFyZ2luLWJvdHRvbSA6IDkwcHg7XHJcblxyXG4gICYgaDIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDRweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBmb250LXNpemU6IDIuNjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgJiBwIHtcclxuICAgIG1heC13aWR0aDogNDQ4cHg7XHJcbiAgICBtYXJnaW46IDYuOXB4IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIHZlcnRpY2FsbHkgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSBzdGFydCBvbiBzbWFsbCBzY3JlZW5zICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmIGgyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRqdXN0IG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgICB9XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgJiBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xyXG4gICAgfVxyXG4gIGB9O1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFycm93ID0gKHsgZmlsbENvbG9yID0gY29sb3JzLndoaXRlLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPG1vdGlvbi5zdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAxMDEgNTdcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMzMgMzRIMFYyNGg4MS40MjlMNjYgNy44ODQgNzMuNTQ4IDBsMTkuODc3IDIwLjc2My4wMjctLjAyOUwxMDEgMjguNjE4IDczLjgyOSA1N2wtNy41NDgtNy44ODRMODAuNzUzIDM0SDMzelwiXHJcbiAgICAgIGZpbGw9e2ZpbGxDb2xvcn1cclxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgID48L3BhdGg+XHJcbiAgPC9tb3Rpb24uc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XHJcbiIsImNvbnN0IEZhY2Vib29rID0gcHJvcHMgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTEgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0zLjYyNSAxLjIzNkM0LjU0NC4zNDYgNS44NS4wNDQgNy4wODUuMDA2IDguMzg3LS4wMDQgOS42OTEuMDAzIDEwLjk5NS4wMDRjLjAwNSAxLjQuMDA2IDIuODAyIDAgNC4yMDMtLjg0My0uMDAxLTEuNjg3LjAwMi0yLjUzLS4wMDEtLjUzNC0uMDM0LTEuMDgzLjM3OC0xLjE4LjkxOC0uMDEzLjkzNy0uMDA0IDEuODc1LS4wMDQgMi44MTMgMS4yMzYuMDA1IDIuNDcyLS4wMDIgMy43MDguMDAzYTUzLjI5NyA1My4yOTcgMCAwMS0uNDUgNC4wNWMtMS4wOTEuMDExLTIuMTgzIDAtMy4yNzUuMDA3LS4wMSA0IC4wMDUgOC0uMDA4IDEyLTEuNjIyLjAwNi0zLjI0NC0uMDA0LTQuODY2LjAwNC0uMDMtNCAuMDAyLTguMDAzLS4wMTctMTIuMDA0LS43OTEtLjAwOC0xLjU4My4wMDYtMi4zNzQtLjAwNy4wMDMtMS4zNDQuMDAxLTIuNjg5LjAwMS00LjAzMy43OTEtLjAxIDEuNTgyLjAwMiAyLjM3My0uMDA2LjAyNC0xLjMwNy0uMDI0LTIuNjE2LjAyNS0zLjkyMi4wOC0xLjAzNS40NjYtMi4wNzcgMS4yMjYtMi43OTJ6XCJcclxuICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuICAgICAgZmlsbD1cIiNFQTI4MUVcIlxyXG4gICAgPjwvcGF0aD5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rO1xyXG4iLCJjb25zdCBJbnN0YWdyYW0gPSBwcm9wcyA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIHsuLi5wcm9wc30+XHJcbiAgICA8ZyBmaWxsPVwiI0VBMjgxRVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEwLjUgMEM3LjY0OCAwIDcuMjkuMDEyIDYuMTcuMDYzIDUuMDU0LjExNCA0LjI5LjI5MiAzLjYyMy41NTFhNS4xNDYgNS4xNDYgMCAwMC0xLjg2IDEuMjExIDUuMTQ3IDUuMTQ3IDAgMDAtMS4yMSAxLjg2Qy4yOTEgNC4yOS4xMTMgNS4wNTMuMDYyIDYuMTcxLjAxMiA3LjI5IDAgNy42NDggMCAxMC41YzAgMi44NTIuMDEyIDMuMjEuMDYzIDQuMzMuMDUxIDEuMTE3LjIyOSAxLjg4LjQ4OCAyLjU0OC4yNjkuNjkuNjI4IDEuMjc2IDEuMjExIDEuODYuNTg0LjU4MyAxLjE3Ljk0MiAxLjg2IDEuMjEuNjY4LjI2IDEuNDMxLjQzOCAyLjU0OS40ODkgMS4xMi4wNSAxLjQ3Ny4wNjMgNC4zMjkuMDYzIDIuODUyIDAgMy4yMS0uMDEyIDQuMzMtLjA2MyAxLjExNy0uMDUxIDEuODgtLjIyOSAyLjU0OC0uNDg4YTUuMTQ2IDUuMTQ2IDAgMDAxLjg2LTEuMjExIDUuMTQ3IDUuMTQ3IDAgMDAxLjIxLTEuODZjLjI2LS42NjguNDM4LTEuNDMxLjQ4OS0yLjU0OS4wNTEtMS4xMi4wNjMtMS40NzcuMDYzLTQuMzI5IDAtMi44NTItLjAxMi0zLjIxLS4wNjMtNC4zMy0uMDUxLTEuMTE3LS4yMjktMS44OC0uNDg4LTIuNTQ4YTUuMTQ3IDUuMTQ3IDAgMDAtMS4yMTEtMS44NiA1LjE0NiA1LjE0NiAwIDAwLTEuODYtMS4yMWMtLjY2OC0uMjYtMS40MzEtLjQzOC0yLjU0OS0uNDg5QzEzLjcxLjAxMiAxMy4zNTIgMCAxMC41IDBtMCAxLjg5MmMyLjgwNCAwIDMuMTM2LjAxIDQuMjQzLjA2MSAxLjAyNC4wNDcgMS41OC4yMTggMS45NS4zNjIuNDkuMTkuODQuNDE4IDEuMjA3Ljc4NS4zNjcuMzY4LjU5NS43MTcuNzg1IDEuMjA3LjE0NC4zNy4zMTUuOTI2LjM2MiAxLjk1LjA1IDEuMTA3LjA2MSAxLjQ0LjA2MSA0LjI0MyAwIDIuODA0LS4wMSAzLjEzNi0uMDYxIDQuMjQzLS4wNDcgMS4wMjQtLjIxOCAxLjU4LS4zNjIgMS45NS0uMTkuNDktLjQxOC44NC0uNzg1IDEuMjA3YTMuMjUyIDMuMjUyIDAgMDEtMS4yMDcuNzg1Yy0uMzcuMTQ0LS45MjYuMzE1LTEuOTUuMzYyLTEuMTA3LjA1LTEuNDQuMDYxLTQuMjQzLjA2MS0yLjgwNCAwLTMuMTM2LS4wMS00LjI0My0uMDYxLTEuMDI0LS4wNDctMS41OC0uMjE4LTEuOTUtLjM2Mi0uNDktLjE5LS44NC0uNDE4LTEuMjA3LS43ODVhMy4yNTQgMy4yNTQgMCAwMS0uNzg1LTEuMjA3Yy0uMTQ0LS4zNy0uMzE1LS45MjYtLjM2Mi0xLjk1LS4wNS0xLjEwNy0uMDYxLTEuNDQtLjA2MS00LjI0MyAwLTIuODA0LjAxLTMuMTM2LjA2MS00LjI0My4wNDctMS4wMjQuMjE4LTEuNTguMzYyLTEuOTUuMTktLjQ5LjQxOC0uODQuNzg1LTEuMjA3YTMuMjUzIDMuMjUzIDAgMDExLjIwNy0uNzg1Yy4zNy0uMTQ0LjkyNi0uMzE1IDEuOTUtLjM2MiAxLjEwNy0uMDUgMS40NC0uMDYxIDQuMjQzLS4wNjFcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTAuNSAxNC4wN2EzLjU3IDMuNTcgMCAxMTAtNy4xNCAzLjU3IDMuNTcgMCAwMTAgNy4xNG0wLTkuMDdhNS41IDUuNSAwIDEwMCAxMSA1LjUgNS41IDAgMDAwLTExXCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCBkPVwiTTE3IDVhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwXCI+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zdGFncmFtO1xyXG4iLCJjb25zdCBMaW5rZWRJbiA9IHByb3BzID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjAuNDUyIDIwLjQ1MmgtMy41NDh2LTUuNTY4YzAtMS4zMjctLjAyNy0zLjAzNC0xLjg0NC0zLjAzNC0xLjg0MyAwLTIuMTI2IDEuNDMtMi4xMjYgMi45MDh2NS42OTRoLTMuNTQ4VjloMy40MDR2MS40NTFoLjA0OWMuNDc1LS44OTcgMS42MzctMS44MzkgMy4zNTctMS44MzkgMy41OTYgMCA0LjI1MiAyLjM3IDQuMjUyIDUuNDQ0djYuMzk3em0tMTUuOTQ0LTEyLjU5Yy0xLjE1NyAwLTIuMDkuOTM0LTIuMDkgMi4wOXMuOTM0IDIuMDkgMi4wOSAyLjA5IDIuMDktLjkzNCAyLjA5LTIuMDktLjkzNC0yLjA5LTIuMDktMi4wOXptMS43NzQgMTIuNTlIMi42NzhWOWgzLjU0OHYxMS40NTJ6bTE3Ljc2OC0yMS40NTJIMS42NzhDLjc1IDAgMCAuNzUgMCAxLjY3OHYyMC42NDRDMCAyMy4yNS43NSAyNCAxLjY3OCAyNGgyMC42NDRDMjMuMjUgMjQgMjQgMjMuMjUgMjQgMjIuMzIyVjEuNjc4QzI0IC43NSAyMy4yNSAwIDIyLjMyMiAwelwiXHJcbiAgICAgICAgZmlsbD1cIiNFQTI4MUVcIiBcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGlua2VkSW47XHJcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBMb2dvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEVuc3VyZSBwb3NpdGlvbmluZyBjb250ZXh0ICovXHJcbiAgICAgICAgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gIHJpZ2h0OiAyOHB4O1xyXG4gIGJvdHRvbTogMTdweDsgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZExvZ28gPSBzdHlsZWQuaW1nYFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExvZ29Db250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRMb2dvXHJcbiAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCIgLy8gUmVmZXJlbmNlIGRpcmVjdGx5IGZyb20gdGhlIHB1YmxpYyBmb2xkZXJcclxuICAgICAgICBhbHQ9XCJMdW1pbmV4YSBMb2dvXCJcclxuICAgICAgLz5cclxuICAgIDwvTG9nb0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiY29uc3QgVHdpdHRlciA9IHByb3BzID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjMuNjMzIDQuOTk5Yy0uODg1LjM5Mi0xLjgzLjY1NS0yLjgyNi43NzVhNC45MzUgNC45MzUgMCAwMDIuMTYzLTIuNzI0IDkuODYzIDkuODYzIDAgMDEtMy4xMjcgMS4yIDQuOTI2IDQuOTI2IDAgMDAtOC4zOCA0LjQ4MkExMy45NiAxMy45NiAwIDAxMS42NyAzLjE0OWE0LjkyMyA0LjkyMyAwIDAwMS41MjMgNi41NjUgNC45MDQgNC45MDQgMCAwMS0yLjIyOC0uNjE1di4wNjFhNC45MzMgNC45MzMgMCAwMDMuOTQ2IDQuODQgNC45MjcgNC45MjcgMCAwMS0yLjIxNS4wODQgNC45MzUgNC45MzUgMCAwMDQuNjA0IDMuNDE3QTkuODY3IDkuODY3IDAgMDEwIDIwLjI1M2ExMy45MzUgMTMuOTM1IDAgMDA3LjU0OCAyLjIxMmM5LjA1OCAwIDE0LjAwMy03LjUwNyAxNC4wMDMtMTMuOTg1IDAtLjIxMy0uMDA1LS40MjYtLjAxNC0uNjM3QTEwLjAzMiAxMC4wMzIgMCAwMDI0IDQuNTgzYTkuOTY1IDkuOTY1IDAgMDEtMi4zNjcuNjQ5IDQuOTEzIDQuOTEzIDAgMDAyLjE1Ny0yLjcyNHpcIlxyXG4gICAgICAgIGZpbGw9XCIjRUEyODFFXCIgLy8gQ2hhbmdlZCB0byByZWRcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgVHdpdHRlcjtcclxuICAiLCJjb25zdCBZb3VUdWJlID0gcHJvcHMgPT4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yMy40OTggNi4xODZjLS4yNzMtMS4wNzUtMS4wNzUtMS45MjItMi4xMy0yLjA4Ni0xLjk5NS0uMTk3LTQuMzU4LS4xOTctNi44NzgtLjE5N3MtNC44ODMgMC02Ljg3OC4xOTdjLTEuMDU1LjE2NC0xLjg1NyAxLjAxMS0yLjEzIDIuMDg2QzUuMDAxIDguMzU0IDUgMTIgNSAxMnMwIDMuNjQ2LjM2MiA1LjgxNGMuMjczIDEuMDc1IDEuMDc1IDEuOTIyIDIuMTMgMi4wODYgMS45OTUuMTk3IDQuMzU4LjE5NyA2Ljg3OC4xOTdzNC44ODMgMCA2Ljg3OC0uMTk3YzEuMDU1LS4xNjQgMS44NTctMS4wMTEgMi4xMy0yLjA4NkMyMyAxNS42NDYgMjMgMTIgMjMgMTJzMC0zLjY0Ni0uNTAyLTUuODE0ek05LjU0NSAxNS4xNjJWOC44MzhsNi4yMzYgMy4xNjItNi4yMzYgMy4xNjJ6XCJcclxuICAgICAgICBmaWxsPVwiI0VBMjgxRVwiIC8vIFlvdVR1YmUgcmVkXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFlvdVR1YmU7XHJcbiAgIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvdyB9IGZyb20gJy4vQXJyb3cnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rIH0gZnJvbSAnLi9GYWNlYm9vayc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5zdGFncmFtIH0gZnJvbSAnLi9JbnN0YWdyYW0nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFlvdXR1YmUgfSBmcm9tICcuL1lvdXR1YmUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXIgfSBmcm9tICcuL1R3aXR0ZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtlZGluIH0gZnJvbSAnLi9MaW5rZWRpbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU1lbnVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tZW51JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IFN0aWNreUN1cnNvciBmcm9tICcuLi9TdGlja3lDdXJzb3InO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBNZW51QnV0dG9uID0gKHsgc3RpY2t5ID0gdHJ1ZSwgdGl0bGUgPSAnJywgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XHJcbiAgY29uc3QgWywgZGlzcGF0Y2hdID0gdXNlTWVudUNvbnRleHQoKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPblRvZ2dsZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9NRU5VJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGlja3lDdXJzb3Igc3RpY2t5PXtzdGlja3l9PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT25Ub2dnbGV9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1N0aWNreUN1cnNvcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhSZWFjdC5mb3J3YXJkUmVmKE1lbnVCdXR0b24pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWVudUJ1dHRvbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA2M3B4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cblxuICAmIHNwYW4ge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIH1cblxuICAmOmhvdmVyIHNwYW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgICYgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgd2lkdGg6IDY2cHg7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICBgfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkV3JhcHBlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgY2lyY2xlMVwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZSBjaXJjbGUyXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZTNcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgY2lyY2xlNFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZSBjaXJjbGU1XCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCA0MFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICAgIHg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgIHk9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJBcmlhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBuZXhcclxuICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPm5leEFSPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgQXVnbWVudGVkIFJlYWxpdHkgLSBJbm5vdmF0ZSwgRWxpbWluYXRlIGFuZCBEb21pbmF0ZVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbnMtY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1tb3JlXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aWV3LW1vcmUtYnV0dG9uXCI+VmlldyBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIm02IDkgNiA2IDYtNlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAucGFyZW50IHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig1MCwgNTAsIDUwKSAwJSwgcmdiKDMwLCAzMCwgMzApIDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDQwcHggNTBweCAyNXB4IC00MHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDI1cHggMjVweCAtNXB4O1xyXG4gIH1cclxuXHJcbiAgLmdsYXNzIHtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMjVweCk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDYwcHggMHB4IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDI2cHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMjZweCk7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tIC52aWV3LW1vcmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbSAudmlldy1tb3JlOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMTBweCk7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tIC52aWV3LW1vcmUgLnZpZXctbW9yZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9OztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tIC52aWV3LW1vcmUgLnN2ZyB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9OztcclxuICAgIHN0cm9rZS13aWR0aDogM3B4O1xyXG4gICAgbWF4LWhlaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20gLnNvY2lhbC1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20gLnNvY2lhbC1idXR0b25zLWNvbnRhaW5lciAuc29jaWFsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGFzcGVjdC1yYXRpbzogMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1MCwgNTAsIDUwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDdweCA1cHggLTVweDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20gLnNvY2lhbC1idXR0b25zLWNvbnRhaW5lciAuc29jaWFsLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbSAuc29jaWFsLWJ1dHRvbnMtY29udGFpbmVyIC5zb2NpYWwtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMzQsIDApO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28gLmNpcmNsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGFzcGVjdC1yYXRpbzogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIC0xMHB4IDEwcHggMjBweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5sb2dvIC5jaXJjbGUxIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LCAwLCAwLCAwLjgpLCByZ2JhKDE1MCwgMCwgMCwgMC42KSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDIwcHgpO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28gLmNpcmNsZTIge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDUwLCA1MCwgMC43KSwgcmdiYSgxODAsIDAsIDAsIDAuNikpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCA0MHB4KTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcblxyXG4gIC5sb2dvIC5jaXJjbGUzIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LCAxMDAsIDEwMCwgMC42KSwgcmdiYSgyMTAsIDAsIDAsIDAuNikpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCA2MHB4KTtcclxuICAgIHRvcDogMTdweDtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcblxyXG4gIC5sb2dvIC5jaXJjbGU0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDE1MCwgMTUwLCAwLjUpLCByZ2JhKDIyMCwgMCwgMCwgMC42KSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDgwcHgpO1xyXG4gICAgdG9wOiAyM3B4O1xyXG4gICAgcmlnaHQ6IDIzcHg7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28gLmNpcmNsZTUge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMjAwLCAyMDAsIDAuNCksIHJnYmEoMjMwLCAwLCAwLCAwLjYpKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMTAwcHgpO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMS42cztcclxuICB9XHJcblxyXG4gIC5sb2dvIC5jaXJjbGU1IC5zdmcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5wYXJlbnQ6aG92ZXIgLmNhcmQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCAzMGRlZyk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMzBweCA1MHB4IDI1cHggLTQwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMjVweCAzMHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5wYXJlbnQ6aG92ZXIgLmNhcmQgLmJvdHRvbSAuc29jaWFsLWJ1dHRvbnMtY29udGFpbmVyIC5zb2NpYWwtYnV0dG9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgNTBweCk7XHJcbiAgfVxyXG5cclxuICAucGFyZW50OmhvdmVyIC5jYXJkIC5sb2dvIC5jaXJjbGUyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgNjBweCk7XHJcbiAgfVxyXG5cclxuICAucGFyZW50OmhvdmVyIC5jYXJkIC5sb2dvIC5jaXJjbGUzIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgODBweCk7XHJcbiAgfVxyXG5cclxuICAucGFyZW50OmhvdmVyIC5jYXJkIC5sb2dvIC5jaXJjbGU0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMTAwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnBhcmVudDpob3ZlciAuY2FyZCAubG9nbyAuY2lyY2xlNSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDEyMHB4KTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHsgSW5zdGFncmFtLCBGYWNlYm9vaywgWW91dHViZSwgVHdpdHRlciwgTGlua2VkaW4gfSBmcm9tICcuLi9JY29ucyc7XHJcbmltcG9ydCBTdGlja3lDdXJzb3IgZnJvbSAnLi4vU3RpY2t5Q3Vyc29yJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgbWVkaWFzID0gW1xyXG4gIHsgY29tcG9uZW50OiBJbnN0YWdyYW0sIHVybDogJ2luc3RhZ3JhbS5jb20vX2x1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogRmFjZWJvb2ssIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hcmx1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogWW91dHViZSwgdXJsOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScgfSxcclxuICB7IGNvbXBvbmVudDogVHdpdHRlciwgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9fbHVtaW5leGEnfSxcclxuICB7IGNvbXBvbmVudDogTGlua2VkaW4sIHVybDogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2NvbXBhbnkvbHVtaW5leGEtdGVjaG5vbG9neSd9LFxyXG5dO1xyXG5cclxuY29uc3QgU29jaWFsTWVkaWEgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgey4uLnByb3BzfT5cclxuICAgICAge21lZGlhcy5tYXAoKHsgY29tcG9uZW50OiBDb21wb25lbnQsIHVybCB9KSA9PiAoXHJcbiAgICAgICAgPFN0aWNreUN1cnNvciBrZXk9e3VybH0+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17YWRkQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3JlbW92ZUN1cnNvckJvcmRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvU3RpY2t5Q3Vyc29yPlxyXG4gICAgICApKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNvY2lhbE1lZGlhKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU29jaWFsTWVkaWEnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICB3aWR0aDogMzFweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAmOmhvdmVyIHN2ZyBwYXRoIHtcbiAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuXHJcbmNvbnN0IFN0aWNreUN1cnNvciA9ICh7IGNoaWxkcmVuOiBjaGlsZHJlblByb3AsIHN0aWNreSA9IHRydWUgfSkgPT4ge1xyXG4gIGNvbnN0IGNoaWxkUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHsgbG9ja0N1cnNvclBvc2l0aW9uIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlblByb3AsIGNoaWxkID0+IHtcclxuICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUgfSA9IGNoaWxkLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSBldmVudCA9PiB7XHJcbiAgICAgIGlmICghY2hpbGRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBjaGlsZFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgY29uc3QgeCA9IHBvc2l0aW9uLndpZHRoIC8gMiArIHBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBwb3NpdGlvbi5oZWlnaHQgLyAyICsgcG9zaXRpb24udG9wO1xyXG4gICAgICBsb2NrQ3Vyc29yUG9zaXRpb24oeyB4LCB5IH0pO1xyXG5cclxuICAgICAgaWYgKG9uTW91c2VFbnRlcikge1xyXG4gICAgICAgIG9uTW91c2VFbnRlcihldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IGV2ZW50ID0+IHtcclxuICAgICAgaWYgKCFjaGlsZFJlZi5jdXJyZW50KSByZXR1cm47XHJcblxyXG4gICAgICBsb2NrQ3Vyc29yUG9zaXRpb24obnVsbCk7XHJcblxyXG4gICAgICBpZiAob25Nb3VzZUxlYXZlKSB7XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWYgPSBub2RlID0+IHtcclxuICAgICAgLy8gS2VlcCB5b3VyIG93biByZWZlcmVuY2VcclxuICAgICAgY2hpbGRSZWYuY3VycmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCByZWYsIGlmIGFueVxyXG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGQ7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlZihub2RlKTtcclxuICAgICAgfSBlbHNlIGlmIChyZWYgIT09IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICBvbk1vdXNlRW50ZXI6IGhhbmRsZU1vdXNlRW50ZXIsXHJcbiAgICAgIG9uTW91c2VMZWF2ZTogaGFuZGxlTW91c2VMZWF2ZSxcclxuICAgICAgcmVmOiBoYW5kbGVSZWYsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHN0aWNreSA/IGNoaWxkcmVuIDogY2hpbGRyZW5Qcm9wO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTdGlja3lDdXJzb3IpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TdGlja3lDdXJzb3InO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBjdXJzb3JTdHlsZToge1xyXG4gICAgYm9yZGVyZWQ6IGZhbHNlLFxyXG4gICAgY29sb3I6IGNvbG9ycy5yZWQsXHJcbiAgfSxcclxuICBwb3NpdGlvbjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdVUERBVEVfQ1VSU09SX1NUWUxFJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdBRERfQ1VSU09SX0JPUkRFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBib3JkZXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnUkVNT1ZFX0NVUlNPUl9CT1JERVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgYm9yZGVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdBRERfQ1VSU09SX0NPTE9SJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGNvbG9yOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnUkVTRVRfQ1VSU09SX0NPTE9SJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGNvbG9yOiBJTklUSUFMX1NUQVRFLmN1cnNvclN0eWxlLmNvbG9yLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdMT0NLX0NVUlNPUl9QT1NJVElPTic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwb3NpdGlvbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ3Vyc29yQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDdXJzb3JDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBJTklUSUFMX1NUQVRFKTtcclxuICBjb25zdCBzdG9yZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHsgc3RhdGUsIGRpc3BhdGNoIH0pLCBbc3RhdGVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEN1cnNvckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9DdXJzb3JDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDdXJzb3JDb250ZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KEN1cnNvckNvbnRleHQpO1xyXG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXTtcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgaXNNZW51T3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVE9HR0xFX01FTlUnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNNZW51T3BlbjogIXN0YXRlLmlzTWVudU9wZW4sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVudUNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIElOSVRJQUxfU1RBVEUpO1xyXG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBzdGF0ZSwgZGlzcGF0Y2ggfSksIFtzdGF0ZV0pO1xyXG4gIHJldHVybiA8TWVudUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9NZW51Q29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNZW51Q29udGV4dCA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gUmVhY3QudXNlQ29udGV4dChNZW51Q29udGV4dCk7XHJcbiAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDdXJzb3JDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jdXJzb3InO1xyXG5cclxuY29uc3QgdXNlQ3Vyc29yU3R5bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDdXJzb3JDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IGFkZEN1cnNvckJvcmRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9DVVJTT1JfQk9SREVSJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlQ3Vyc29yQm9yZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX0NVUlNPUl9CT1JERVInIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBhZGRDdXJzb3JDb2xvciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGNvbG9yKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9DVVJTT1JfQ09MT1InLCBwYXlsb2FkOiBjb2xvciB9KTtcclxuICAgIH0sXHJcbiAgICBbZGlzcGF0Y2hdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlc2V0Q3Vyc29yQ29sb3IgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVNFVF9DVVJTT1JfQ09MT1InIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBsb2NrQ3Vyc29yUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdMT0NLX0NVUlNPUl9QT1NJVElPTicsIHBheWxvYWQ6IGNvb3JkaW5hdGVzIH0pO1xyXG4gICAgfSxcclxuICAgIFtkaXNwYXRjaF0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgYWRkQ3Vyc29yQ29sb3IsXHJcbiAgICByZXNldEN1cnNvckNvbG9yLFxyXG4gICAgYWRkQ3Vyc29yQm9yZGVyLFxyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyLFxyXG4gICAgbG9ja0N1cnNvclBvc2l0aW9uLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDdXJzb3JTdHlsZTtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgY2xlYW51cCA9IFJlYWN0LnVzZVJlZjwoKSA9PiB2b2lkPigpXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgLy8gY2xlYW51cCBwcmV2aW91cyBldmVudCBoYW5kbGVyc1xuICAgICAgaWYgKGNsZWFudXAuY3VycmVudCkge1xuICAgICAgICBjbGVhbnVwLmN1cnJlbnQoKVxuICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgZWwgJiYgZWwudGFnTmFtZSAmJiBpc0xvY2FsVVJMKGhyZWYpKSB7XG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgIGNsZWFudXAuY3VycmVudCA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhlbCwgKCkgPT4ge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICBsb2NhbGU6XG4gICAgICAgICAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gbG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbcCwgY2hpbGRSZWYsIGhyZWYsIGFzLCByb3V0ZXIsIGxvY2FsZV1cbiAgKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgsXG4gICAgICB9ID0gcmVxdWlyZSgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG5cbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKGFzLCB0aGlzLmxvY2FsZXMpXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbiwgb3B0aW9ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZSgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuICAgICAgICAubm9ybWFsaXplTG9jYWxlUGF0aCBhcyB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpLm5vcm1hbGl6ZUxvY2FsZVBhdGhcblxuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBkZWxldGUgcXVlcnkuX19uZXh0TG9jYWxlXG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4vLi4vY29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL1NlcnZpY2VzJ1xyXG5cclxuY29uc3QgU2VydmljZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlcnZpY2VzIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB3aGl0ZTogJyNmZmYnLFxuICBibGFjazogJyMwMDAnLFxuICByZWQ6ICcjRUEyODFFJyxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcbiAgbWF4LXdpZHRoOiAxMjM0cHg7XG4gIHBhZGRpbmc6IDAgMzJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5Rm9udFN0eWxlID0gY3NzYFxuICBmb250LWZhbWlseTogcHJlc2ljYXYsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG5gO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog.js");
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

/***/ "./components/Home/Blog/Blog.jsx":
/*!***************************************!*\
  !*** ./components/Home/Blog/Blog.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Home/Blog/styles.js");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Contacts */ "./components/Home/Contacts/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Blog\\Blog.jsx";





const BlogPage = () => {
  const blogPosts = [{
    title: "Luminexa Shines at Maverick 2024: Bridging Innovation and Investment",
    date: "June 19, 2024",
    content: "A one of a kind stellar drawing together investors and innovators in one mega stage. RNSIT-Official presents Maverick 2024 where entrepreneurial enthusiasts present their ideas to industry experts. Among our esteemed panel of investors and industrial experts is, Mr. Rahul Nagarajan - Executive Director, Velicham Finance Mr. Ramnath Shenoy - Director of Product, SpotDraft Mr. Udit Khiraiya - Product Manager - FlipkartMs. Narita Rai - Program Management Leader for Research and Insights, Salesforce CA Unnikrishnan Menon - Partner, Vasan and Sampath, Angel Invest, Start-up Mentor, Transaction Advisor.Currently we are seeking for investment to expand our business so for raising investment we are attended here and we presented to them our plans. And we received lot of positive",
    image: "blog.jpg"
  }
  // Add more blog posts as needed
  ];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["ContentSection"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrap"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
            children: "Media"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), blogPosts.map((post, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["BlogPost"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["BlogImage"], {
              src: post.image,
              alt: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["BlogContent"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
                children: post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["BlogDate"], {
                children: post.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
                children: post.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Contacts__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BlogPage));

/***/ }),

/***/ "./components/Home/Blog/index.js":
/*!***************************************!*\
  !*** ./components/Home/Blog/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog */ "./components/Home/Blog/Blog.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Blog__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Blog/styles.js":
/*!****************************************!*\
  !*** ./components/Home/Blog/styles.js ***!
  \****************************************/
/*! exports provided: ContentSection, Wrap, Title, Paragraph, BlogPost, BlogImage, BlogContent, BlogDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrap", function() { return Wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return BlogPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogImage", function() { return BlogImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogContent", function() { return BlogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDate", function() { return BlogDate; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");



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
  color: white;

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
  color: #FFFFF7;

  ${({
  theme
}) => theme.breakpoints.tablet`
    font-size: 1.2rem;
  `};
`;
const BlogPost = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    flex-direction: column;
  `};
`;
const BlogImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;
const BlogContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-direction: column;
`;
const BlogDate = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-size: 1rem;
  color: #CCCCCC;
  margin-bottom: 10px;
`;

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
  border-radius: 9px;
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
  border-radius: 9px;
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
  border-radius: 9px;
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ContactSection, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TextWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "Contact Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: "nexAR - Augmented Reality finds diverse applications across marketing and advertising, retail and e-commerce."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
          children: "\xA9 Luminexa Technologies."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, undefined), " Pioneering in web and augmented reality solutions, we are dedicated to transforming digital experiences. Connect with us for innovative, custom-tailored technology services that drive your business forward."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FormWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Form, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Input, {
          type: "text",
          placeholder: "Your Name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Input, {
          type: "email",
          placeholder: "Your Email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TextArea, {
          rows: "5",
          placeholder: "Your Message",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SubmitButton, {
          type: "submit",
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        style: {
          marginTop: '10px'
        },
        children: ["We'd love to hear ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
          children: "from you!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
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

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Blog */ "./components/Home/Blog/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\pages\\blog.js";

 // Adjust the path as necessary

const Blog = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Home_Blog__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};
/* harmony default export */ __webpack_exports__["default"] = (Blog);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vQW5pbWF0ZU9uU2NyZWVuLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FuaW1hdGVPblNjcmVlbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQmxvZy9CbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQmxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQmxvZy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RzL0NvbnRhY3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3RzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9ybS9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0Fycm93LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0ZhY2Vib29rLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9MaW5rZWRpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9Mb2dvLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL1R3aXR0ZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvWW91dHViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL1NvY2lhbE1lZGlhLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsTWVkaWEvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RpY2t5Q3Vyc29yL1N0aWNreUN1cnNvci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdGlja3lDdXJzb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQ3Vyc29yU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zaGFyZWQvdGV4dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicm93c2Vyc2xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInRyYW5zaXRpb24iLCJkZWxheSIsInRyYW5zbGF0ZVkiLCJkdXJhdGlvbiIsImVhc2UiLCJvcGFjaXR5IiwidmFyaWFudHMiLCJzaG93IiwiaGlkZGVuIiwiQW5pbWF0ZU9uU2NyZWVuIiwiY2hpbGRyZW4iLCJjaGlsZHJlblByb3AiLCJhbmltYXRpb24iLCJ1c2VBbmltYXRpb24iLCJpblZpZXdSZWYiLCJpblZpZXciLCJ1c2VJblZpZXciLCJ0cmlnZ2VyT25jZSIsIlJlYWN0IiwidXNlRWZmZWN0Iiwic3RhcnQiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJoYW5kbGVSZWYiLCJub2RlIiwicmVmIiwiY3VycmVudCIsImNsb25lRWxlbWVudCIsImFuaW1hdGUiLCJpbml0aWFsIiwibWVtbyIsIkJsb2dQYWdlIiwiYmxvZ1Bvc3RzIiwidGl0bGUiLCJkYXRlIiwiY29udGVudCIsImltYWdlIiwiX2pzeERFViIsIkNvbnRlbnRTZWN0aW9uIiwiV3JhcCIsIlRpdGxlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicG9zdCIsImluZGV4IiwiQmxvZ1Bvc3QiLCJCbG9nSW1hZ2UiLCJzcmMiLCJhbHQiLCJCbG9nQ29udGVudCIsIkJsb2dEYXRlIiwiUGFyYWdyYXBoIiwiQ29udGFjdCIsInN0eWxlZCIsIm1vdGlvbiIsInNlY3Rpb24iLCJjb250YWluZXJTdHlsZXMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiZGl2IiwiaDEiLCJwIiwiaW1nIiwic3BhbiIsIkZvb3RlciIsIkFuaW1hdGlvbm9uU2NyZWVuIiwiRm9vdGVyQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImNvbG9yIiwiU29jaWFsTWVkaWEiLCJocmVmIiwiZm9vdGVyIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsIkNvbnRhY3RTZWN0aW9uIiwibWVkaXVtIiwic21hbGwiLCJUZXh0V3JhcHBlciIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsImZvcm0iLCJJbnB1dCIsImlucHV0IiwiZ3JheSIsInJlZCIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJkYXJrUmVkIiwiQ29udGFjdEZvcm0iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInJvd3MiLCJtYXJnaW5Ub3AiLCJBcnJvdyIsIl9yZWYiLCJmaWxsQ29sb3IiLCJ3aGl0ZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic3ZnIiwiX29iamVjdFNwcmVhZCIsInhtbG5zIiwidmlld0JveCIsImQiLCJmaWxsIiwiZmlsbFJ1bGUiLCJJY29uRmFjZWJvb2siLCJoZWlnaHQiLCJJY29uSW5zdGFncmFtIiwiSWNvbkxpbmtlZGluQ2lyY2xlZCIsIkxvZ29Db250YWluZXIiLCJTdHlsZWRMb2dvIiwiTG9nbyIsIkljb25Ud2l0dGVyQ2lyY2xlIiwiSWNvbllvdXR1YmUiLCJtZWRpYXMiLCJjb21wb25lbnQiLCJJbnN0YWdyYW0iLCJ1cmwiLCJGYWNlYm9vayIsIllvdXR1YmUiLCJUd2l0dGVyIiwiTGlua2VkaW4iLCJhZGRDdXJzb3JCb3JkZXIiLCJyZW1vdmVDdXJzb3JCb3JkZXIiLCJ1c2VDdXJzb3JTdHlsZSIsIkNvbnRhaW5lciIsIkNvbXBvbmVudCIsIlN0aWNreUN1cnNvciIsIkxpbmsiLCJ0YXJnZXQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhIiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwic3RpY2t5IiwiY2hpbGRSZWYiLCJ1c2VSZWYiLCJsb2NrQ3Vyc29yUG9zaXRpb24iLCJoYW5kbGVNb3VzZUVudGVyIiwiZXZlbnQiLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJsZWZ0IiwieSIsInRvcCIsImhhbmRsZU1vdXNlTGVhdmUiLCJJTklUSUFMX1NUQVRFIiwiY3Vyc29yU3R5bGUiLCJib3JkZXJlZCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiQ3Vyc29yQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDdXJzb3JDb250ZXh0UHJvdmlkZXIiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJzdG9yZSIsInVzZU1lbW8iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ3Vyc29yQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsImFkZEN1cnNvckNvbG9yIiwicmVzZXRDdXJzb3JDb2xvciIsImNvb3JkaW5hdGVzIiwiQmxvZyIsIl9GcmFnbWVudCIsIkJsb2dzIiwiYmxhY2siLCJjc3MiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDbUI7QUFDVztBQUV4RCxNQUFNQSxVQUFVLEdBQUc7RUFDakJDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLFVBQVUsRUFBRTtJQUNWQyxRQUFRLEVBQUUsQ0FBQztJQUNYQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJO0VBQzNCLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ1BGLFFBQVEsRUFBRSxDQUFDO0lBQ1hDLElBQUksRUFBRSxDQUFDLElBQUksRUFB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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ibG9nLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIGRlbGF5OiAwLjMsXHJcbiAgdHJhbnNsYXRlWToge1xyXG4gICAgZHVyYXRpb246IDEsXHJcbiAgICBlYXNlOiBbMCwgMC43LCAwLjI5LCAwLjk3XSxcclxuICB9LFxyXG4gIG9wYWNpdHk6IHtcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgZWFzZTogWzAuMjUsIDAuMSwgMC4yNSwgMS4wXSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgc2hvdzogeyB0cmFuc2xhdGVZOiAwLCBvcGFjaXR5OiAxIH0sXHJcbiAgaGlkZGVuOiB7IHRyYW5zbGF0ZVk6IDYwLCBvcGFjaXR5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRlT25TY3JlZW4gPSAoeyBjaGlsZHJlbjogY2hpbGRyZW5Qcm9wIH0pID0+IHtcclxuICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBbaW5WaWV3UmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHsgdHJpZ2dlck9uY2U6IHRydWUgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5WaWV3KSB7XHJcbiAgICAgIGFuaW1hdGlvbi5zdGFydCgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH0sIFthbmltYXRpb24sIGluVmlldywgaW5WaWV3UmVmXSk7XHJcblxyXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgY2hpbGQgPT4ge1xyXG4gICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVmID0gbm9kZSA9PiB7XHJcbiAgICAgIC8vIEtlZXAgeW91ciBvd24gcmVmZXJlbmNlXHJcbiAgICAgIGluVmlld1JlZihub2RlKTtcclxuXHJcbiAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIHJlZiwgaWYgYW55XHJcbiAgICAgIGNvbnN0IHsgcmVmIH0gPSBjaGlsZDtcclxuICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZWYobm9kZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgdmFyaWFudHMsXHJcbiAgICAgIHRyYW5zaXRpb24sXHJcbiAgICAgIGFuaW1hdGU6IGFuaW1hdGlvbixcclxuICAgICAgaW5pdGlhbDogJ2hpZGRlbicsXHJcbiAgICAgIHJlZjogaGFuZGxlUmVmLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQW5pbWF0ZU9uU2NyZWVuKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQW5pbWF0ZU9uU2NyZWVuJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBXcmFwLFxyXG4gIFRpdGxlLFxyXG4gIFBhcmFncmFwaCxcclxuICBCbG9nUG9zdCxcclxuICBCbG9nSW1hZ2UsXHJcbiAgQmxvZ0NvbnRlbnQsXHJcbiAgQmxvZ0RhdGVcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL0NvbnRhY3RzJztcclxuXHJcbmNvbnN0IEJsb2dQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJsb2dQb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTHVtaW5leGEgU2hpbmVzIGF0IE1hdmVyaWNrIDIwMjQ6IEJyaWRnaW5nIElubm92YXRpb24gYW5kIEludmVzdG1lbnRcIixcclxuICAgICAgZGF0ZTogXCJKdW5lIDE5LCAyMDI0XCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwiQSBvbmUgb2YgYSBraW5kIHN0ZWxsYXIgZHJhd2luZyB0b2dldGhlciBpbnZlc3RvcnMgYW5kIGlubm92YXRvcnMgaW4gb25lIG1lZ2Egc3RhZ2UuIFJOU0lULU9mZmljaWFsIHByZXNlbnRzIE1hdmVyaWNrIDIwMjQgd2hlcmUgZW50cmVwcmVuZXVyaWFsIGVudGh1c2lhc3RzIHByZXNlbnQgdGhlaXIgaWRlYXMgdG8gaW5kdXN0cnkgZXhwZXJ0cy4gQW1vbmcgb3VyIGVzdGVlbWVkIHBhbmVsIG9mIGludmVzdG9ycyBhbmQgaW5kdXN0cmlhbCBleHBlcnRzIGlzLCBNci4gUmFodWwgTmFnYXJhamFuIC0gRXhlY3V0aXZlIERpcmVjdG9yLCBWZWxpY2hhbSBGaW5hbmNlIE1yLiBSYW1uYXRoIFNoZW5veSAtIERpcmVjdG9yIG9mIFByb2R1Y3QsIFNwb3REcmFmdCBNci4gVWRpdCBLaGlyYWl5YSAtIFByb2R1Y3QgTWFuYWdlciAtIEZsaXBrYXJ0TXMuIE5hcml0YSBSYWkgLSBQcm9ncmFtIE1hbmFnZW1lbnQgTGVhZGVyIGZvciBSZXNlYXJjaCBhbmQgSW5zaWdodHMsIFNhbGVzZm9yY2UgQ0EgVW5uaWtyaXNobmFuIE1lbm9uIC0gUGFydG5lciwgVmFzYW4gYW5kIFNhbXBhdGgsIEFuZ2VsIEludmVzdCwgU3RhcnQtdXAgTWVudG9yLCBUcmFuc2FjdGlvbiBBZHZpc29yLkN1cnJlbnRseSB3ZSBhcmUgc2Vla2luZyBmb3IgaW52ZXN0bWVudCB0byBleHBhbmQgb3VyIGJ1c2luZXNzIHNvIGZvciByYWlzaW5nIGludmVzdG1lbnQgd2UgYXJlIGF0dGVuZGVkIGhlcmUgYW5kIHdlIHByZXNlbnRlZCB0byB0aGVtIG91ciBwbGFucy4gQW5kIHdlIHJlY2VpdmVkIGxvdCBvZiBwb3NpdGl2ZVwiLFxyXG4gICAgICBpbWFnZTogXCJibG9nLmpwZ1wiLFxyXG4gICAgfVxyXG4gICAgLy8gQWRkIG1vcmUgYmxvZyBwb3N0cyBhcyBuZWVkZWRcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgICA8V3JhcD5cclxuICAgICAgICAgICAgPFRpdGxlPk1lZGlhPC9UaXRsZT5cclxuICAgICAgICAgICAge2Jsb2dQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJsb2dQb3N0IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPEJsb2dJbWFnZSBzcmM9e3Bvc3QuaW1hZ2V9IGFsdD17cG9zdC50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxCbG9nRGF0ZT57cG9zdC5kYXRlfTwvQmxvZ0RhdGU+XHJcbiAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGg+e3Bvc3QuY29udGVudH08L1BhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgIDwvQmxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9CbG9nUG9zdD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1dyYXA+XHJcbiAgICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxDb250YWN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCbG9nUGFnZSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Jsb2cnO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcclxuICAke2NvbnRhaW5lclN0eWxlc307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXAgPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjRkZGRkY3O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dQb3N0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ0RhdGUgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi4vLi4vU29jaWFsTWVkaWEnO1xyXG5pbXBvcnQgQW5pbWF0aW9ub25TY3JlZW4gZnJvbSAnLi8uLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLy4uLy4uL0hvbWUvRm9ybSdcclxuaW1wb3J0IGJyb3dzZXJzbGlzdCBmcm9tICdicm93c2Vyc2xpc3QnO1xyXG5cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGlvbm9uU2NyZWVuPlxyXG4gICAgXHJcbiAgICAgIDxGb290ZXJDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29sdW1uc1wiPlxyXG4gICAgICAgICAgey8qIEZpcnN0IENvbHVtbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwibG9nby5wbmdcIiBhbHQ9XCJMdW1pbmV4YSBDb21wYW55IExvZ29cIiBzdHlsZT17eyB3aWR0aDogJzE2MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PjxzdHJvbmc+THVtaW5leGEgVGVjaG5vbG9naWVzPC9zdHJvbmc+LCBOQidzIEdyb3VwIG9mIENvbXBhbnk8L3A+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e2NvbG9yOiAncmVkJ319Pm5leDwvaDE+XHJcbiAgICAgICAgICAgIDxwID5Zb3VyIGdvLXRvIHNvdXJjZSBmb3IgaW5ub3ZhdGl2ZSBzb2x1dGlvbnMuIFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgYWNoaWV2ZSB5b3VyIGdvYWxzLjwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgPFNvY2lhbE1lZGlhIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogU2Vjb25kIENvbHVtbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+Q29udGFjdDwvaDM+XHJcbiAgICAgICAgICAgIDxwPk1vYmlsZTogKzkxLjg2Ni4wNDQuOTk3MDwvcD5cclxuICAgICAgICAgICAgPHA+TW9iaWxlOiArOTEuOTQ4LjE2MS41NTgyPC9wPlxyXG4gICAgICAgICAgICA8cD5FbWFpbDogaW5mb0BsdW1pbmV4YS5pbjwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEFkZHJlc3M6IDE0IDFzdCBTdGFnZSBCaGFuYXNoYW5rYXJpLCBCYW5nYWxvcmUsIEtBIElOXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBUaGlyZCBDb2x1bW4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PkxlZ2FsPC9oMz5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9wcml2YWN5XCI+UHJpdmFjeSBQb2xpY3k8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL3Rlcm1zXCI+VGVybXMgYW5kIENvbmRpdGlvbnM8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL2Rpc2NsYWltZXJcIj5EaXNjbGFpbWVyPC9hPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBGb3VydGggQ29sdW1uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5PdGhlcjwvaDM+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvYmxvZ1wiPkJsb2c8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL2NhcmVlcnNcIj5DYXJlZXI8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL3NlcnZpY2VzXCI+U2VydmljZXM8L2E+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW5vdGVcIj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnR3JheScgfX0+JmNvcHk7IENvcHlyaWdodCA8c3Ryb25nPkx1bWluZXhhIFRlY2hub2xvZ2llczwvc3Ryb25nPiAyMDI0LiBBbGwgUmlnaHQgUmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxyXG4gICAgPC9BbmltYXRpb25vblNjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250YWN0cyc7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5mb290ZXIpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcclxuICBjb2xvcjogIzg3ODc4NztcclxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCBncmF5O1xyXG5cclxuICAmIC5mb290ZXItY29sdW1ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDsgLy8gQWRqdXN0IG1heC13aWR0aCBhcyBuZWVkZWRcclxuICAgIGdhcDogMjBweDsgLy8gRXF1YWwgZ2FwIGJldHdlZW4gY29sdW1uc1xyXG5cclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7IFxyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICAgICAgY29sb3I6IGdyYXk7XHJcblxyXG4gICAgICAmIGgzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmIGEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206M3B4O1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmZvb3Rlci1ub3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLW1lZGlhe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgJiAuZm9vdGVyLWNvbHVtbnMge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvLyBTdGFjayBjb2x1bW5zIG9uIHNtYWxsZXIgc2NyZWVuc1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDEwcHg7IC8vIEFkanVzdCBnYXAgZm9yIG1vYmlsZSB2aWV3IGlmIG5lZWRlZFxyXG4gICAgfVxyXG5cclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7IC8vIE1ha2UgY29sdW1ucyBmdWxsIHdpZHRoIG9uIG1vYmlsZVxyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5cclxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tZWRpdW1gXHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBgfTtcclxuYDtcclxuXHJcbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBcclxuICB3aWR0aDogNTguMzMzJTtcclxuXHJcbiAgJiBoMSB7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBgfTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyYXl9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JheX07XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICByZXNpemU6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya1JlZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWN0U2VjdGlvbj5cclxuICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIG5leEFSIC0gQXVnbWVudGVkIFJlYWxpdHkgZmluZHMgZGl2ZXJzZSBhcHBsaWNhdGlvbnMgYWNyb3NzIG1hcmtldGluZyBhbmQgYWR2ZXJ0aXNpbmcsXHJcbiAgICAgICAgICByZXRhaWwgYW5kIGUtY29tbWVyY2UuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz7CqSBMdW1pbmV4YSBUZWNobm9sb2dpZXMuPC9zdHJvbmc+IFBpb25lZXJpbmcgaW4gd2ViIGFuZCBhdWdtZW50ZWQgcmVhbGl0eSBzb2x1dGlvbnMsXHJcbiAgICAgICAgICB3ZSBhcmUgZGVkaWNhdGVkIHRvIHRyYW5zZm9ybWluZyBkaWdpdGFsIGV4cGVyaWVuY2VzLiBDb25uZWN0IHdpdGggdXMgZm9yIGlubm92YXRpdmUsXHJcbiAgICAgICAgICBjdXN0b20tdGFpbG9yZWQgdGVjaG5vbG9neSBzZXJ2aWNlcyB0aGF0IGRyaXZlIHlvdXIgYnVzaW5lc3MgZm9yd2FyZC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvVGV4dFdyYXBwZXI+XHJcbiAgICAgIDxGb3JtV3JhcHBlcj5cclxuICAgICAgICBcclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgPFRleHRBcmVhIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCBNZXNzYWdlPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgIFdlJ2QgbG92ZSB0byBoZWFyIDxzdHJvbmc+ZnJvbSB5b3UhPC9zdHJvbmc+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICAgPC9Db250YWN0U2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm0nO1xyXG4iLCJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFycm93ID0gKHsgZmlsbENvbG9yID0gY29sb3JzLndoaXRlLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPG1vdGlvbi5zdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAxMDEgNTdcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMzMgMzRIMFYyNGg4MS40MjlMNjYgNy44ODQgNzMuNTQ4IDBsMTkuODc3IDIwLjc2My4wMjctLjAyOUwxMDEgMjguNjE4IDczLjgyOSA1N2wtNy41NDgtNy44ODRMODAuNzUzIDM0SDMzelwiXHJcbiAgICAgIGZpbGw9e2ZpbGxDb2xvcn1cclxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgID48L3BhdGg+XHJcbiAgPC9tb3Rpb24uc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XHJcbiIsIi8vIGljb246ZmFjZWJvb2sgfCBCb290c3RyYXAgaHR0cHM6Ly9pY29ucy5nZXRib290c3RyYXAuY29tLyB8IEJvb3RzdHJhcFxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb25GYWNlYm9vayhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0xNiA4LjA0OWMwLTQuNDQ2LTMuNTgyLTguMDUtOC04LjA1QzMuNTggMC0uMDAyIDMuNjAzLS4wMDIgOC4wNWMwIDQuMDE3IDIuOTI2IDcuMzQ3IDYuNzUgNy45NTF2LTUuNjI1aC0yLjAzVjguMDVINi43NVY2LjI3NWMwLTIuMDE3IDEuMTk1LTMuMTMxIDMuMDIyLTMuMTMxLjg3NiAwIDEuNzkxLjE1NyAxLjc5MS4xNTd2MS45OGgtMS4wMDljLS45OTMgMC0xLjMwMy42MjEtMS4zMDMgMS4yNTh2MS41MWgyLjIxOGwtLjM1NCAyLjMyNkg5LjI1VjE2YzMuODI0LS42MDQgNi43NS0zLjkzNCA2Ljc1LTcuOTUxelwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uRmFjZWJvb2s7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uSW5zdGFncmFtKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk01MTIgMzc4LjdjLTczLjQgMC0xMzMuMyA1OS45LTEzMy4zIDEzMy4zUzQzOC42IDY0NS4zIDUxMiA2NDUuMyA2NDUuMyA1ODUuNCA2NDUuMyA1MTIgNTg1LjQgMzc4LjcgNTEyIDM3OC43ek05MTEuOCA1MTJjMC01NS4yLjUtMTA5LjktMi42LTE2NS0zLjEtNjQtMTcuNy0xMjAuOC02NC41LTE2Ny42LTQ2LjktNDYuOS0xMDMuNi02MS40LTE2Ny42LTY0LjUtNTUuMi0zLjEtMTA5LjktMi42LTE2NS0yLjYtNTUuMiAwLTEwOS45LS41LTE2NSAyLjYtNjQgMy4xLTEyMC44IDE3LjctMTY3LjYgNjQuNUMxMzIuNiAyMjYuMyAxMTguMSAyODMgMTE1IDM0N2MtMy4xIDU1LjItMi42IDEwOS45LTIuNiAxNjVzLS41IDEwOS45IDIuNiAxNjVjMy4xIDY0IDE3LjcgMTIwLjggNjQuNSAxNjcuNiA0Ni45IDQ2LjkgMTAzLjYgNjEuNCAxNjcuNiA2NC41IDU1LjIgMy4xIDEwOS45IDIuNiAxNjUgMi42IDU1LjIgMCAxMDkuOS41IDE2NS0yLjYgNjQtMy4xIDEyMC44LTE3LjcgMTY3LjYtNjQuNSA0Ni45LTQ2LjkgNjEuNC0xMDMuNiA2NC41LTE2Ny42IDMuMi01NS4xIDIuNi0xMDkuOCAyLjYtMTY1ek01MTIgNzE3LjFjLTExMy41IDAtMjA1LjEtOTEuNi0yMDUuMS0yMDUuMVMzOTguNSAzMDYuOSA1MTIgMzA2LjkgNzE3LjEgMzk4LjUgNzE3LjEgNTEyIDYyNS41IDcxNy4xIDUxMiA3MTcuMXptMjEzLjUtMzcwLjdjLTI2LjUgMC00Ny45LTIxLjQtNDcuOS00Ny45czIxLjQtNDcuOSA0Ny45LTQ3LjkgNDcuOSAyMS40IDQ3LjkgNDcuOWE0Ny44NCA0Ny44NCAwIDAxLTQ3LjkgNDcuOXpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkluc3RhZ3JhbTtcclxuIiwiLy8gaWNvbjpsaW5rZWRpbi1jaXJjbGVkIHwgRW50eXBvIGh0dHA6Ly9lbnR5cG8uY29tLyB8IERhbmllbCBCcnVjZVxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb25MaW5rZWRpbkNpcmNsZWQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDk2MCAxMDAwXCJcclxuICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDIwYzEzMy4zMzMgMCAyNDYuNjY3IDQ2LjY2NyAzNDAgMTQwczE0MCAyMDYuNjY3IDE0MCAzNDBjMCAxMzItNDYuNjY3IDI0NS0xNDAgMzM5UzYxMy4zMzMgOTgwIDQ4MCA5ODBjLTEzMiAwLTI0NS00Ny0zMzktMTQxUzAgNjMyIDAgNTAwYzAtMTMzLjMzMyA0Ny0yNDYuNjY3IDE0MS0zNDBTMzQ4IDIwIDQ4MCAyME0zNjIgNjk4VjM4NmgtOTZ2MzEyaDk2bS00OC0zNTJjMzQuNjY3IDAgNTItMTYgNTItNDhzLTE3LjMzMy00OC01Mi00OGMtMTQuNjY3IDAtMjcgNC42NjctMzcgMTRzLTE1IDIwLjY2Ny0xNSAzNGMwIDMyIDE3LjMzMyA0OCA1MiA0OG00MDQgMzUyVjUxNGMwLTQ0LTEwLjMzMy03Ny42NjctMzEtMTAxcy00Ny42NjctMzUtODEtMzVjLTQ0IDAtNzYgMTYuNjY3LTk2IDUwaC0ybC02LTQyaC04NGMxLjMzMyAxOC42NjcgMiA1MiAyIDEwMHYyMTJoOThWNTE4YzAtMTIgMS4zMzMtMjAgNC0yNCA4LTI1LjMzMyAyNC42NjctMzggNTAtMzggMzIgMCA0OCAyMi42NjcgNDggNjh2MTc0aDk4XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25MaW5rZWRpbkNpcmNsZWQ7XHJcblxyXG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTG9nb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFbnN1cmUgcG9zaXRpb25pbmcgY29udGV4dCAqL1xyXG4gICAgICAgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICByaWdodDogMjhweDtcclxuICBib3R0b206IDE3cHg7ICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmltZ2BcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2dvQ29udGFpbmVyPlxyXG4gICAgICA8U3R5bGVkTG9nb1xyXG4gICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiIC8vIFJlZmVyZW5jZSBkaXJlY3RseSBmcm9tIHRoZSBwdWJsaWMgZm9sZGVyXHJcbiAgICAgICAgYWx0PVwiTHVtaW5leGEgTG9nb1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L0xvZ29Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvblR3aXR0ZXJDaXJjbGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0yMTUuMyAzMzcuN2MuMyA0LjcuMyA5LjYuMyAxNC40IDAgMTQ2LjgtMTExLjggMzE1LjktMzE2LjEgMzE1LjktNjMgMC0xMjEuNC0xOC4zLTE3MC42LTQ5LjggOSAxIDE3LjYgMS40IDI2LjggMS40IDUyIDAgOTkuOC0xNy42IDEzNy45LTQ3LjQtNDguOC0xLTg5LjgtMzMtMTAzLjgtNzcgMTcuMSAyLjUgMzIuNSAyLjUgNTAuMS0yYTExMSAxMTEgMCAwMS04OC45LTEwOXYtMS40YzE0LjcgOC4zIDMyIDEzLjQgNTAuMSAxNC4xYTExMS4xMyAxMTEuMTMgMCAwMS00OS41LTkyLjRjMC0yMC43IDUuNC0zOS42IDE1LjEtNTZhMzE1LjI4IDMxNS4yOCAwIDAwMjI5IDExNi4xQzQ5MiAzNTMuMSA1NDguNCAyOTIgNjE2LjIgMjkyYzMyIDAgNjAuOCAxMy40IDgxLjEgMzUgMjUuMS00LjcgNDkuMS0xNC4xIDcwLjUtMjYuNy04LjMgMjUuNy0yNS43IDQ3LjQtNDguOCA2MS4xIDIyLjQtMi40IDQ0LTguNiA2NC0xNy4zLTE1LjEgMjIuMi0zNCA0MS45LTU1LjcgNTcuNnpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblR3aXR0ZXJDaXJjbGU7XHJcblxyXG4gICIsIi8vIGljb246eW91dHViZSB8IEFudCBEZXNpZ24gSWNvbnMgaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi8gfCBBbnQgRGVzaWduXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbllvdXR1YmUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTk0MS4zIDI5Ni4xYTExMi4zIDExMi4zIDAgMDAtNzkuMi03OS4zQzc5Mi4yIDE5OCA1MTIgMTk4IDUxMiAxOThzLTI4MC4yIDAtMzUwLjEgMTguN0ExMTIuMTIgMTEyLjEyIDAgMDA4Mi43IDI5NkM2NCAzNjYgNjQgNTEyIDY0IDUxMnMwIDE0NiAxOC43IDIxNS45YzEwLjMgMzguNiA0MC43IDY5IDc5LjIgNzkuM0MyMzEuOCA4MjYgNTEyIDgyNiA1MTIgODI2czI4MC4yIDAgMzUwLjEtMTguOGMzOC42LTEwLjMgNjguOS00MC43IDc5LjItNzkuM0M5NjAgNjU4IDk2MCA1MTIgOTYwIDUxMnMwLTE0Ni0xOC43LTIxNS45ek00MjMgNjQ2VjM3OGwyMzIgMTMzLTIzMiAxMzV6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25Zb3V0dWJlOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3cgfSBmcm9tICcuL0Fycm93JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEluc3RhZ3JhbSB9IGZyb20gJy4vSW5zdGFncmFtJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvIH0gZnJvbSAnLi9Mb2dvJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBZb3V0dWJlIH0gZnJvbSAnLi9Zb3V0dWJlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRpbiB9IGZyb20gJy4vTGlua2VkaW4nO1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHsgSW5zdGFncmFtLCBGYWNlYm9vaywgWW91dHViZSwgVHdpdHRlciwgTGlua2VkaW4gfSBmcm9tICcuLi9JY29ucyc7XHJcbmltcG9ydCBTdGlja3lDdXJzb3IgZnJvbSAnLi4vU3RpY2t5Q3Vyc29yJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgbWVkaWFzID0gW1xyXG4gIHsgY29tcG9uZW50OiBJbnN0YWdyYW0sIHVybDogJ2luc3RhZ3JhbS5jb20vX2x1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogRmFjZWJvb2ssIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hcmx1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogWW91dHViZSwgdXJsOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScgfSxcclxuICB7IGNvbXBvbmVudDogVHdpdHRlciwgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9fbHVtaW5leGEnIH0sXHJcbiAgeyBjb21wb25lbnQ6IExpbmtlZGluLCB1cmw6ICdodHRwczovL2xpbmtlZGluLmNvbS9jb21wYW55L2x1bWluZXhhLXRlY2hub2xvZ3knIH0sXHJcbl07XHJcblxyXG5jb25zdCBTb2NpYWxNZWRpYSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB7Li4ucHJvcHN9PlxyXG4gICAgICB7bWVkaWFzLm1hcCgoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgdXJsIH0pID0+IChcclxuICAgICAgICA8U3RpY2t5Q3Vyc29yIGtleT17dXJsfT5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9TdGlja3lDdXJzb3I+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU29jaWFsTWVkaWEpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Tb2NpYWxNZWRpYSc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgLyogQ2hhbmdlZCBmcm9tIGZsZXgtc3RhcnQgdG8gZmxleC1lbmQgKi9cbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuIFxuXG4gICY6aG92ZXIgc3ZnIHBhdGgge1xuICAgIGZpbGw6IHJlZDtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcblxyXG5jb25zdCBTdGlja3lDdXJzb3IgPSAoeyBjaGlsZHJlbjogY2hpbGRyZW5Qcm9wLCBzdGlja3kgPSB0cnVlIH0pID0+IHtcclxuICBjb25zdCBjaGlsZFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCB7IGxvY2tDdXJzb3JQb3NpdGlvbiB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW5Qcm9wLCBjaGlsZCA9PiB7XHJcbiAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IG9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlIH0gPSBjaGlsZC5wcm9wcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoIWNoaWxkUmVmLmN1cnJlbnQpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2hpbGRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIGNvbnN0IHggPSBwb3NpdGlvbi53aWR0aCAvIDIgKyBwb3NpdGlvbi5sZWZ0O1xyXG4gICAgICBjb25zdCB5ID0gcG9zaXRpb24uaGVpZ2h0IC8gMiArIHBvc2l0aW9uLnRvcDtcclxuICAgICAgbG9ja0N1cnNvclBvc2l0aW9uKHsgeCwgeSB9KTtcclxuXHJcbiAgICAgIGlmIChvbk1vdXNlRW50ZXIpIHtcclxuICAgICAgICBvbk1vdXNlRW50ZXIoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSBldmVudCA9PiB7XHJcbiAgICAgIGlmICghY2hpbGRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgbG9ja0N1cnNvclBvc2l0aW9uKG51bGwpO1xyXG5cclxuICAgICAgaWYgKG9uTW91c2VMZWF2ZSkge1xyXG4gICAgICAgIG9uTW91c2VMZWF2ZShldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVmID0gbm9kZSA9PiB7XHJcbiAgICAgIC8vIEtlZXAgeW91ciBvd24gcmVmZXJlbmNlXHJcbiAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBub2RlO1xyXG5cclxuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgcmVmLCBpZiBhbnlcclxuICAgICAgY29uc3QgeyByZWYgfSA9IGNoaWxkO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZWYobm9kZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgb25Nb3VzZUVudGVyOiBoYW5kbGVNb3VzZUVudGVyLFxyXG4gICAgICBvbk1vdXNlTGVhdmU6IGhhbmRsZU1vdXNlTGVhdmUsXHJcbiAgICAgIHJlZjogaGFuZGxlUmVmLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzdGlja3kgPyBjaGlsZHJlbiA6IGNoaWxkcmVuUHJvcDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU3RpY2t5Q3Vyc29yKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3RpY2t5Q3Vyc29yJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgY3Vyc29yU3R5bGU6IHtcclxuICAgIGJvcmRlcmVkOiBmYWxzZSxcclxuICAgIGNvbG9yOiBjb2xvcnMucmVkLFxyXG4gIH0sXHJcbiAgcG9zaXRpb246IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVVBEQVRFX0NVUlNPUl9TVFlMRSc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnQUREX0NVUlNPUl9CT1JERVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgYm9yZGVyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ1JFTU9WRV9DVVJTT1JfQk9SREVSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGJvcmRlcmVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnQUREX0NVUlNPUl9DT0xPUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBjb2xvcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ1JFU0VUX0NVUlNPUl9DT0xPUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBjb2xvcjogSU5JVElBTF9TVEFURS5jdXJzb3JTdHlsZS5jb2xvcixcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9DS19DVVJTT1JfUE9TSVRJT04nOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9zaXRpb246IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1cnNvckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3Vyc29yQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyb290UmVkdWNlciwgSU5JVElBTF9TVEFURSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IHN0YXRlLCBkaXNwYXRjaCB9KSwgW3N0YXRlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDdXJzb3JDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdG9yZX0+e2NoaWxkcmVufTwvQ3Vyc29yQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ3Vyc29yQ29udGV4dCA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gUmVhY3QudXNlQ29udGV4dChDdXJzb3JDb250ZXh0KTtcclxuICByZXR1cm4gW3N0YXRlLCBkaXNwYXRjaF07XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUN1cnNvckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2N1cnNvcic7XHJcblxyXG5jb25zdCB1c2VDdXJzb3JTdHlsZSA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUN1cnNvckNvbnRleHQoKTtcclxuXHJcbiAgY29uc3QgYWRkQ3Vyc29yQm9yZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NVUlNPUl9CT1JERVInIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCByZW1vdmVDdXJzb3JCb3JkZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfQ1VSU09SX0JPUkRFUicgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGFkZEN1cnNvckNvbG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoY29sb3IpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NVUlNPUl9DT0xPUicsIHBheWxvYWQ6IGNvbG9yIH0pO1xyXG4gICAgfSxcclxuICAgIFtkaXNwYXRjaF0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcmVzZXRDdXJzb3JDb2xvciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFU0VUX0NVUlNPUl9DT0xPUicgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGxvY2tDdXJzb3JQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQ0tfQ1VSU09SX1BPU0lUSU9OJywgcGF5bG9hZDogY29vcmRpbmF0ZXMgfSk7XHJcbiAgICB9LFxyXG4gICAgW2Rpc3BhdGNoXSxcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBhZGRDdXJzb3JDb2xvcixcclxuICAgIHJlc2V0Q3Vyc29yQ29sb3IsXHJcbiAgICBhZGRDdXJzb3JCb3JkZXIsXHJcbiAgICByZW1vdmVDdXJzb3JCb3JkZXIsXHJcbiAgICBsb2NrQ3Vyc29yUG9zaXRpb24sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUN1cnNvclN0eWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmxvZ3MgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0Jsb2cnOyAvLyBBZGp1c3QgdGhlIHBhdGggYXMgbmVjZXNzYXJ5XHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QmxvZ3MgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHdoaXRlOiAnI2ZmZicsXG4gIGJsYWNrOiAnIzAwMCcsXG4gIHJlZDogJyNFQTI4MUUnLFxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuICBtYXgtd2lkdGg6IDEyMzRweDtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbmA7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlGb250U3R5bGUgPSBjc3NgXG4gIGZvbnQtZmFtaWx5OiBwcmVzaWNhdiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbmA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicm93c2Vyc2xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
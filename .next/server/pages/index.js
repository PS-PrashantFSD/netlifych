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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./components/AppBar/AppBar.jsx":
/*!**************************************!*\
  !*** ./components/AppBar/AppBar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/Logo */ "./components/Icons/Logo.jsx");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuButton */ "./components/MenuButton/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/AppBar/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\AppBar\\AppBar.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }






const getStyles = (direction = '') => {
  if (direction === 'down') return {
    top: 0
  };
  if (direction === 'up') return {
    bottom: 0
  };
  return {};
};
const variants = {
  hidden: {
    y: -131
  },
  show: {
    y: 0
  }
};
const AppBar = props => {
  const {
      direction = 'down',
      offset = 105,
      logoProps = {},
      style: styleProp = {}
    } = props,
    rootProps = _objectWithoutProperties(props, ["direction", "offset", "logoProps", "style"]);
  const [hidden, setHidden] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const handleScroll = () => {
      let shouldHide = false;
      let intersection = offset;
      let currentYPosition = 0;
      if (direction === 'down') {
        currentYPosition = window.scrollY;
      } else if (direction === 'up') {
        currentYPosition = document.documentElement.scrollTop + window.innerHeight;
        intersection = document.documentElement.scrollHeight - offset;
      }
      shouldHide = currentYPosition > intersection;
      if (shouldHide !== hidden) {
        setHidden(shouldHide);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [hidden, direction, offset]);
  const styles = getStyles(direction);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Slider"], _objectSpread(_objectSpread({
    variants: variants,
    initial: "hidden",
    animate: hidden ? 'hidden' : 'show',
    transition: {
      duration: 1,
      ease: [0.666, 0, 0.237, 1]
    },
    style: _objectSpread(_objectSpread({}, styles), styleProp)
  }, rootProps), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["StyledLink"], {
          title: "nexar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Icons_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, logoProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["MenuWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AppBar));

/***/ }),

/***/ "./components/AppBar/index.js":
/*!************************************!*\
  !*** ./components/AppBar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "./components/AppBar/AppBar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AppBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/AppBar/styles.js":
/*!*************************************!*\
  !*** ./components/AppBar/styles.js ***!
  \*************************************/
/*! exports provided: Slider, Container, StyledLink, MenuWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\AppBar\\styles.js";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




const Slider = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_ref => {
  let {
      renderAs
    } = _ref,
    props = _objectWithoutProperties(_ref, ["renderAs"]);
  const Component = framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"][renderAs] || 'div';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
})`
  position: fixed;
  right: 0;
  left: 0;
  will-change: transform;
  z-index: ${({
  theme
}) => theme.zIndex.slider};
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  position: relative;
`;
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  display: block;
  position: absolute;
  top: 54px;
  left: auto;
  width: 131px;
  height: 23px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    width: 99px;
    height: 17px;
    top: 32px;
  `};
`;
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: absolute;
  top: 54px;
  right: 32px;
  margin: -20px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    top: 29px;
  `};
`;

/***/ }),

/***/ "./components/CanvasEraser/CanvasEraser.jsx":
/*!**************************************************!*\
  !*** ./components/CanvasEraser/CanvasEraser.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useForkRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useForkRef */ "./hooks/useForkRef.js");
/* harmony import */ var _CanvasEraserFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasEraserFactory */ "./components/CanvasEraser/CanvasEraserFactory.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\CanvasEraser\\CanvasEraser.jsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




const CanvasEraser = (props, ref) => {
  const {
      completeRatio = 1,
      enabled = true,
      onComplete = null,
      onProgress = null,
      size = 40,
      background = '#000',
      width,
      height
    } = props,
    other = _objectWithoutProperties(props, ["completeRatio", "enabled", "onComplete", "onProgress", "size", "background", "width", "height"]);
  const [canvasEraser, setCanvasEraser] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const componentRef = Object(_hooks_useForkRef__WEBPACK_IMPORTED_MODULE_1__["default"])(canvasRef, ref);
  const options = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => ({
    background,
    completeRatio,
    enabled,
    onComplete,
    onProgress,
    size,
    width,
    height
  }), [background, completeRatio, enabled, onComplete, onProgress, size, width, height]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const canvas = Object(_CanvasEraserFactory__WEBPACK_IMPORTED_MODULE_2__["default"])();
    setCanvasEraser(canvas);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (canvasEraser) {
      canvasEraser.init(canvasRef.current, options);
    }
  }, [canvasEraser, options]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("canvas", _objectSpread({
    ref: componentRef
  }, other), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 10
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(CanvasEraser));

/***/ }),

/***/ "./components/CanvasEraser/CanvasEraserFactory.js":
/*!********************************************************!*\
  !*** ./components/CanvasEraser/CanvasEraserFactory.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const DEFAULT_OPTIONS = {
  background: '#000',
  completeRatio: 1,
  enabled: true,
  onComplete: null,
  onProgress: null,
  size: 40
};
const getElementComputedStyled = (element, prop) => parseFloat(getComputedStyle(element, null)[prop].replace('px', ''));
const factory = () => {
  let _canvas = null;
  let _context = null;
  let _data = {};
  const _handleEraserProgress = (currentX, currentY) => {
    const {
      colParts,
      numParts,
      completeRatio,
      enabled,
      size,
      onComplete,
      onProgress
    } = _data;
    if (!enabled) return;
    let p = Math.floor(currentX / size) + Math.floor(currentY / size) * colParts;
    if (p >= 0 && p < numParts) {
      _data.ratio += _data.parts[p];
      _data.parts[p] = 0;
      if (!_data.complete) {
        p = _data.ratio / _data.numParts;
        if (p >= completeRatio) {
          _data.complete = true;
          if (onComplete) {
            onComplete();
          }
          return;
        }
        if (onProgress) {
          onProgress(p);
        }
      }
    }
  };
  const _onMouseMove = event => {
    event.preventDefault();
    const {
      enabled,
      posX,
      posY,
      scaleRatio,
      touchX,
      touchY
    } = _data;
    const currentX = (event.pageX - posX) * scaleRatio;
    const currentY = (event.pageY - posY) * scaleRatio;
    if (enabled) {
      _handleEraserProgress(currentX, currentY);
      _context.beginPath();
      _context.moveTo(touchX, touchY);
      _context.lineTo(currentX, currentY);
      _context.stroke();
    }
    _data.touchX = currentX;
    _data.touchY = currentY;
  };
  const _onMouseDown = event => {
    event.preventDefault();
    const {
      enabled,
      posX,
      posY,
      scaleRatio
    } = _data;
    const currentX = (event.pageX - posX) * scaleRatio;
    const currentY = (event.pageY - posY) * scaleRatio;
    _data.touchDown = true;
    _data.touchX = currentX;
    _data.touchY = currentY;
    if (enabled) {
      _handleEraserProgress(currentX, currentY);
      _context.beginPath();
      _context.moveTo(currentX - 1, currentY);
      _context.lineTo(currentX, currentY);
      _context.stroke();
    }
    _canvas.addEventListener('mousemove', _onMouseMove);
  };
  const _onMouseClick = event => {
    event.preventDefault();
    const {
      enabled,
      posX,
      posY,
      scaleRatio
    } = _data;
    const currentX = (event.pageX - posX) * scaleRatio;
    const currentY = (event.pageY - posY) * scaleRatio;
    _data.touchDown = true;
    _data.touchX = currentX;
    _data.touchY = currentY;
    if (enabled) {
      _handleEraserProgress(currentX, currentY);
      _context.beginPath();
      _context.moveTo(currentX - 1, currentY);
      _context.lineTo(currentX, currentY);
      _context.stroke();
    }
    _canvas.addEventListener('mousemove', _onMouseMove);
  };
  const init = (source, options = {}) => {
    if (!source) {
      throw new Error('No source element provided. It must be an HTML canvas element.');
    }
    const currentOptions = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
    const {
      size,
      background
    } = currentOptions;
    _canvas = source;
    _context = _canvas.getContext('2d');
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio = _context.webkitBackingStorePixelRatio || _context.mozBackingStorePixelRatio || _context.msBackingStorePixelRatio || _context.oBackingStorePixelRatio || _context.backingStorePixelRatio || 1;
    const scaleRatio = devicePixelRatio / backingStoreRatio;
    const realWidth = getElementComputedStyled(_canvas, 'width');
    const realHeight = getElementComputedStyled(_canvas, 'height');
    const width = realWidth * scaleRatio;
    const height = realHeight * scaleRatio;
    if (devicePixelRatio !== backingStoreRatio) {
      _canvas.width = width;
      _canvas.height = height;
      _canvas.style.width = `${realWidth}px`;
      _canvas.style.height = `${realHeight}px`;
    } else {
      _canvas.width = realWidth;
      _canvas.height = realHeight;
      _canvas.style.width = '';
      _canvas.style.height = '';
    }

    // _context.scale(scaleRatio, scaleRatio);
    _context.fillStyle = background;
    _context.fillRect(0, 0, width, height);
    _context.drawImage(_canvas, 0, 0, width, height);

    // prepare context for drawing operations
    _context.globalCompositeOperation = 'destination-out';
    _context.lineWidth = size;
    _context.lineCap = 'round';

    // bind events
    _canvas.addEventListener('mouseenter', _onMouseDown);
    _canvas.addEventListener('click', _onMouseClick);
    // _canvas.addEventListener('touchstart', _onTouchStart);
    // _canvas.addEventListener('touchmove', _onTouchMove);
    // _canvas.addEventListener('touchend', _onTouchEnd);

    // reset parts
    const parts = [];
    const colParts = Math.floor(width / size);
    const numParts = colParts * Math.floor(height / size);
    for (let i = 0; i < numParts; i++) {
      parts.push(1);
    }
    _data = _objectSpread({
      posX: _canvas.offsetLeft,
      posY: _canvas.offsetTop,
      touchDown: false,
      touchID: -999,
      touchX: 0,
      touchY: 0,
      ptouchX: 0,
      ptouchY: 0,
      w: width,
      h: height,
      scaleRatio,
      ratio: 0,
      complete: false,
      currentOptions
    }, currentOptions);
  };
  const clear = () => {
    const {
      w,
      h,
      numParts,
      onComplete
    } = _data;
    if (_data) {
      _context.clearRect(0, 0, w, h);
      for (let i = 0; i < numParts; i++) {
        _data.parts[i] = 0;
      }
      _data.ratio = numParts;
      _data.complete = true;
      if (onComplete) {
        onComplete();
      }
    }
  };
  const reset = () => {
    const {
      w,
      h,
      numParts
    } = _data;
    _context.globalCompositeOperation = 'source-over';
    _context.drawImage(_canvas, 0, 0, w, h);
    _context.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < numParts; i++) {
      _data.parts[i] = 1;
    }
    _data.ratio = 0;
    _data.complete = false;
    _data.touchDown = false;
  };
  return {
    init,
    clear,
    reset
  };
};
/* harmony default export */ __webpack_exports__["default"] = (factory);

/***/ }),

/***/ "./components/CanvasEraser/index.js":
/*!******************************************!*\
  !*** ./components/CanvasEraser/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasEraser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasEraser */ "./components/CanvasEraser/CanvasEraser.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CanvasEraser__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/About/About.jsx":
/*!*****************************************!*\
  !*** ./components/Home/About/About.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants_services_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/constants/services-items */ "./utils/constants/services-items.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _Misc_Call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Misc/Call */ "./components/Misc/Call.jsx");
/* harmony import */ var _Misc_Nexar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Misc/Nexar */ "./components/Misc/Nexar.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/Home/About/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\About\\About.jsx";








const About = () => {
  const [selectedItem, setSelectedItem] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const handleMouseEnter = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(curr => {
    if (curr === selectedItem) return;
    addCursorBorder();
  }, [selectedItem, addCursorBorder]);
  const handleMouseLeave = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(curr => {
    if (curr === selectedItem) return;
    removeCursorBorder();
  }, [selectedItem, removeCursorBorder]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Misc_Nexar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ContentSection"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["TextWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          style: {
            fontSize: '99px'
          },
          children: "About Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          children: "Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          children: ["We specialize in a range of cutting-edge digital solutions. Our services include advanced Augmented Reality software that transforms your digital interactions, comprehensive Web Development to create user friendly online platforms, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: "innovative Image Tracking And Object detection"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 22
          }, undefined), " system designed to streamline processes through smart recognition."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ServicesWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          children: "Services"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), _utils_constants_services_items__WEBPACK_IMPORTED_MODULE_1__["default"].map(([item, services], itemIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["AccordionToggle"], {
            "aria-expanded": itemIndex === selectedItem,
            onClick: () => setSelectedItem(itemIndex),
            onMouseEnter: () => handleMouseEnter(itemIndex),
            onMouseLeave: () => handleMouseLeave(itemIndex),
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["AccordionContent"], {
            animate: {
              height: itemIndex === selectedItem ? '100%' : '0'
            },
            transition: {
              duration: 0.7,
              ease: [0, 0.7, 0.29, 0.97]
            },
            children: services.map((service, serviceIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              children: service
            }, `${itemIndex}_${serviceIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, undefined)]
        }, item, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Misc_Call__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(About));

/***/ }),

/***/ "./components/Home/About/index.js":
/*!****************************************!*\
  !*** ./components/Home/About/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./components/Home/About/About.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _About__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/About/styles.js":
/*!*****************************************!*\
  !*** ./components/Home/About/styles.js ***!
  \*****************************************/
/*! exports provided: ContentSection, TextWrapper, ServicesWrapper, AccordionToggle, AccordionContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesWrapper", function() { return ServicesWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionToggle", function() { return AccordionToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContent", function() { return AccordionContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _styles_shared_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/shared/text */ "./styles/shared/text.js");




const ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 200px;

  ${({
  theme
}) => theme.breakpoints.small`
    flex-direction: column;
  `};

  ${({
  theme
}) => theme.breakpoints.tablet`
    margin-bottom: 86px;
  `};
`;
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  
  width: 58.333%;

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
    margin-left: 0;
    width: 100%;
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
const ServicesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-left: 8.333%;
  width: 25%;
  padding-top: 15px;
  padding-left: 30px;

  & h3 {
    ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
  }

  ${({
  theme
}) => theme.breakpoints.small`
    margin-left: 0;
    padding-left: 0;
    width: 100%;
  `};
`;
const AccordionToggle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  ${_styles_shared_text__WEBPACK_IMPORTED_MODULE_3__["secondaryFontStyle"]};
  font-size: 0.875rem;
  position: relative;
  display: block;
  padding: 27px 0 0 35px;
  line-height: 15px;
  color: ${({
  theme
}) => theme.colors.red};

  &:hover:not([aria-expanded='true']) {
    color: ${({
  theme
}) => theme.text};

    &::before,
    &::after {
      width: 11px;
      transform: rotate(0deg);
    }

    &::before {
      left: 2px;
    }

    &::after {
      left: 13px;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    width: 18px;
    height: 4px;
    margin-top: 11.5px;
    background: ${({
  theme
}) => theme.colors.red};
    transition: all 0.1s ease-in-out;
  }

  &::before {
    left: 0;
    transform: rotate(45deg);
  }

  &::after {
    left: 10px;
    transform: rotate(-45deg);
  }

  &[aria-expanded='true'] {
    &::before,
    &::after {
      width: 11px;
      transform: rotate(0deg);
    }

    &::before {
      left: 2px;
    }

    &::after {
      left: 13px;
    }
  }
`;
const AccordionContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  padding-left: 35px;
  font-size: 0.875rem;
  line-height: 1.0714285714;
  letter-spacing: 0.5px;
  overflow: hidden;
  color: ${({
  theme
}) => theme.colors.red};

  & p {
    margin: 6.1px 0 0;
  }
`;

/***/ }),

/***/ "./components/Home/Banner/Banner.jsx":
/*!*******************************************!*\
  !*** ./components/Home/Banner/Banner.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useStyledTheme */ "./hooks/useStyledTheme.js");
/* harmony import */ var _CanvasEraser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CanvasEraser */ "./components/CanvasEraser/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/Home/Banner/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Banner\\Banner.jsx";








const titleAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemTitleAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  // Start with opacity 0 and scale down
  animate: {
    opacity: 1,
    // Fade in
    scale: 1,
    // Scale up to full size
    transition: {
      duration: 0.3,
      // Duration of the animation
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
const texts = ['AR', 'Net', 'Ai'];
const Banner = () => {
  const canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const windowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const theme = Object(_hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const isMobile = windowSize.width < 768; // Adjust breakpoint as needed

  const {
    0: currentText,
    1: setCurrentText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(texts[0]);
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 500); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCurrentText(texts[index]);
  }, [index]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["BannerSection"], {
    style: {
      height: windowSize.height
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["VideoContainer"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("video", {
        src: "/videos/banner.mp4",
        height: "100%",
        width: "100%",
        loop: true,
        autoPlay: true,
        muted: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), !isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_CanvasEraser__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: canvasRef,
      width: windowSize.width,
      height: windowSize.height,
      size: 120,
      background: theme.background,
      onMouseEnter: addCursorBorder,
      onMouseLeave: removeCursorBorder
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["BannerTitle"], {
      variants: titleAnimation,
      initial: "initial",
      animate: "animate",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: itemTitleAnimation,
        children: "nex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: itemTitleAnimation,
        children: currentText
      }, currentText, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Banner));

/***/ }),

/***/ "./components/Home/Banner/index.js":
/*!*****************************************!*\
  !*** ./components/Home/Banner/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner */ "./components/Home/Banner/Banner.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Banner__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Banner/styles.js":
/*!******************************************!*\
  !*** ./components/Home/Banner/styles.js ***!
  \******************************************/
/*! exports provided: BannerSection, VideoContainer, BannerTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerSection", function() { return BannerSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoContainer", function() { return VideoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerTitle", function() { return BannerTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);


const BannerSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
  position: relative;
  height: 100vh;
  width: 100%;
  margin-bottom: 305px;
  background: ${({
  theme
}) => theme.background};

  & canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  ${({
  theme
}) => theme.breakpoints.tablet`
    margin-bottom: 90px;
  `};
`;
const VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 100%;
  width: 100%;

  & video {
    object-fit: cover;
  }
`;
const BannerTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].h1)`
  position: absolute;
  bottom: -93px;
  left: -20px;
  font-size: 420px;
  font-size: 26.25rem;
  pointer-events: none;
  line-height: 0.6714285714;

  & span {
    display: block;
    will-change: transform;
  }

  ${({
  theme
}) => theme.breakpoints.small`
    left: -10px;
    bottom: -63px;
    font-size: 280px;
    font-size: 17.5rem;
    line-height: .6821428571;
  `};

  ${({
  theme
}) => theme.breakpoints.tablet`
    left: -6px;
    bottom: -36px;
    max-width: calc(100% + 6px);
    font-size: 160px;
    font-size: 10rem;
    line-height: .68125;
    overflow: hidden;
  `};
`;

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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Home/Contact/styles.js");
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SocialMedia */ "./components/SocialMedia/index.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _Home_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Home/Form */ "./components/Home/Form/index.js");
/* harmony import */ var browserslist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! browserslist */ "browserslist");
/* harmony import */ var browserslist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(browserslist__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Contact\\Contact.jsx";







const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Home_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["FooterContainer"], {
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
              lineNumber: 20,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            style: {
              color: 'white'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("strong", {
              children: "Luminexa Technologies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 41
            }, undefined), ", NB's Group of Company"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
            style: {
              color: 'red'
            },
            children: "nex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Your go-to source for innovative solutions. We're here to help you achieve your goals."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "social-media",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_SocialMedia__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
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
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Mobile: +91.866.044.9970"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Mobile: +91.948.161.5582"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Email: info@luminexa.in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "Address: 14 1st Stage Bhanashankari, Bangalore, KA IN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
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
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/privacy",
              children: "Privacy Policy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/terms",
              children: "Terms and Conditions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/disclaimer",
              children: "Disclaimer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/blog",
              children: "Blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/careers",
              children: "Career"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
              href: "/services",
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
            lineNumber: 59,
            columnNumber: 57
          }, undefined), " 2024. All Right Reserved"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

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

/***/ "./components/Home/Content/Content.jsx":
/*!*********************************************!*\
  !*** ./components/Home/Content/Content.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Home/Content/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Content\\Content.jsx";




const Content = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["ContentSection"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["TextWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: ["Innovation doesn\u2019t simply emerge -", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), "it\u2019s cultivated. We sift through the layers of the ordinary to unearth extraordinary ideas, embracing the grit and grind along the way."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/Home/Content/index.js":
/*!******************************************!*\
  !*** ./components/Home/Content/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./components/Home/Content/Content.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Content__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/Content/styles.js":
/*!*******************************************!*\
  !*** ./components/Home/Content/styles.js ***!
  \*******************************************/
/*! exports provided: ContentSection, TextWrapper, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/shared/container */ "./styles/shared/container.js");



const ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_2__["default"]};

  margin-bottom: 210px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    margin-bottom: 107px;
  `};
`;
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin-left: 8.333%;
  width: calc(58.333% - 32px);

  ${({
  theme
}) => theme.breakpoints.small`
    width: 100%;
    margin-left: 0;
  `};
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2`
  margin: 0;
  font-size: 2.625rem;
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

/***/ }),

/***/ "./components/Home/FeaturedProject/FeaturedProject.jsx":
/*!*************************************************************!*\
  !*** ./components/Home/FeaturedProject/FeaturedProject.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/menu */ "./context/menu.js");
/* harmony import */ var _hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useCursorStyle */ "./hooks/useCursorStyle.js");
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useMediaQuery */ "./hooks/useMediaQuery.js");
/* harmony import */ var _hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useStyledTheme */ "./hooks/useStyledTheme.js");
/* harmony import */ var _AnimateOnScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../AnimateOnScreen */ "./components/AnimateOnScreen/index.js");
/* harmony import */ var _Icons_Arrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Icons/Arrow */ "./components/Icons/Arrow.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./components/Home/FeaturedProject/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\FeaturedProject\\FeaturedProject.jsx";











const transition = {
  duration: 1,
  ease: [0.4, 0, 0.2, 1]
};
const words = ["nexAR", "nexNet", "nexAi"];
const FeaturedProject = () => {
  const {
    0: currentWord,
    1: setCurrentWord
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: wordIndex,
    1: setWordIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isTyping,
    1: setIsTyping
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const controlsInfo = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();
  const controlsArrow = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();
  const theme = Object(_hooks_useStyledTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const [{
    isMenuOpen
  }] = Object(_context_menu__WEBPACK_IMPORTED_MODULE_3__["useMenuContext"])();
  const {
    addCursorColor,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder
  } = Object(_hooks_useCursorStyle__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const isTabletView = Object(_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(({
    breakpoints
  }) => `(max-width:${breakpoints.sizes.tablet}px)`);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const typingEffect = () => {
      if (isTyping) {
        setCurrentWord(prev => {
          const nextCharIndex = prev.length < words[wordIndex].length ? prev.length + 1 : prev.length;
          return words[wordIndex].slice(0, nextCharIndex);
        });
      } else {
        setCurrentWord(prev => prev.slice(0, -1));
      }
    };
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentWord.length === words[wordIndex].length) {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 1000); // Wait before starting to clear
        }
      } else {
        if (currentWord.length === 0) {
          setWordIndex(prev => (prev + 1) % words.length);
          setIsTyping(true);
        }
      }
      typingEffect();
    }, isTyping ? 150 : 100);
    return () => clearTimeout(timeout);
  }, [currentWord, isTyping, wordIndex]);
  const handleMouseEnter = () => {
    addCursorBorder();
    addCursorColor(theme.text);
  };
  const handleMouseLeave = () => {
    if (isMenuOpen) return;
    removeCursorBorder();
    resetCursorColor();
  };
  const handleAnchorHoverStart = () => {
    addCursorBorder();
    controlsInfo.start({
      opacity: 1
    });
    controlsArrow.start({
      x: 0
    });
  };
  const handleAnchorHoverEnd = () => {
    removeCursorBorder();
    controlsInfo.start({
      opacity: 0
    });
    controlsArrow.start({
      x: isTabletView ? -25.19 : -33
    });
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    controlsArrow.start({
      x: isTabletView ? -25.19 : -33
    });
  }, [controlsArrow, isTabletView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ContentSection"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/projects/not-humble",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectAnchor"], {
            onHoverStart: handleAnchorHoverStart,
            onHoverEnd: handleAnchorHoverEnd,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectInfo"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectTitle"], {
                children: ["GET ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 23
                }, undefined), " STARTED", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["VideoPreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("video", {
                loop: true,
                autoPlay: true,
                muted: true,
                src: "videos/vidm.mp4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["MenuContainer"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/services",
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["MenuButton"], {
            sticky: false,
            title: "Services",
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (FeaturedProject);

/***/ }),

/***/ "./components/Home/FeaturedProject/index.js":
/*!**************************************************!*\
  !*** ./components/Home/FeaturedProject/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeaturedProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturedProject */ "./components/Home/FeaturedProject/FeaturedProject.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FeaturedProject__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Home/FeaturedProject/styles.js":
/*!***************************************************!*\
  !*** ./components/Home/FeaturedProject/styles.js ***!
  \***************************************************/
/*! exports provided: ContentSection, ProjectAnchor, ProjectInfo, ProjectTitle, VideoPreview, MenuContainer, MenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAnchor", function() { return ProjectAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfo", function() { return ProjectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTitle", function() { return ProjectTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPreview", function() { return VideoPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
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
  margin-bottom: 200px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    margin-bottom: 100px;
  `};
`;
const ProjectAnchor = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].a)`
  display: block;
  width: 100%;
  height: 480px;
  margin: 0 0 215px;

  ${({
  theme
}) => theme.breakpoints.tablet`
    height: 190px;
    margin-bottom: 208px;
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
  top: 347px;
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
    top: 166px;
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

/***/ }),

/***/ "./components/Home/Footer.jsx":
/*!************************************!*\
  !*** ./components/Home/Footer.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ "./hooks/useMediaQuery.js");
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AppBar */ "./components/AppBar/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Home\\Footer.jsx";




const variants = {
  hidden: isTabletView => ({
    y: isTabletView ? -81 : -131
  }),
  show: {
    y: 0
  }
};
const Footer = () => {
  const isTabletView = Object(_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(({
    breakpoints
  }) => `(max-width:${breakpoints.sizes.tablet}px)`);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

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

/***/ "./components/Misc/Call.jsx":
/*!**********************************!*\
  !*** ./components/Misc/Call.jsx ***!
  \**********************************/
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
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Call.jsx";





const CTASection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_3__["default"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
  background-color: ${({
  theme
}) => theme.colors.red};
  padding: 100px 0px 100px 0px;
  border-radius: 66px;
`;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
    width:80%;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: black;
`;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  width:82%;
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: black;
`;
const CTAButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  padding: 15px 30px;
  font-size: 1rem;
  color: ${({
  theme
}) => theme.colors.red};
  background-color: black;;
  border: none;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({
  theme
}) => theme.colors.darkRed};
  }
`;
const CallToAction = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTASection, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.5
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
      children: "Unlock the potential of nexAR and AI in your business"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
      children: "Click to explore our transformative solutions in augmented reality, web development, and smart detection technologies. Start your digital revolution now!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAButton, {
      href: "tel:8660449970",
      children: "Call to Action"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./components/Misc/Nexar.jsx":
/*!***********************************!*\
  !*** ./components/Misc/Nexar.jsx ***!
  \***********************************/
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
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Nexar.jsx";





const CTASection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_3__["default"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
  background-color: white;
  padding: 100px 0;
  border-radius: 66px;
`;
const SectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-around; /* Space sections evenly */
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically on mobile */
    align-items: center; /* Center align items in mobile view */
  }
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  flex: 1; /* Make each section take equal space */
  margin: 0 20px; /* Add some margin between sections */
  max-width: 300px; /* Set a max-width for better responsiveness */
  text-align: center; /* Center text in sections */

  @media (max-width: 768px) {
    margin: 20px 0; /* Add vertical margin for mobile */
    max-width: 80%; /* Allow full width on mobile */
  }
`;
const GIFIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  width: 160px; /* Adjust size as needed */
  height: auto;
  cursor: pointer; 
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); /* Slightly scale on hover */
  }
`;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
  font-size: 6rem;
  font-weight: 700;
  margin: 20px 0; /* Adjust margin to create spacing */
  color: red;
`;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: black;
`;
const CallToAction = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTASection, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.5
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SectionsContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "nexAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "invent.png",
          alt: "PNG Icon 1",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
            children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "How"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "howit.png",
          alt: "PNG Icon 2",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
            children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAHeading, {
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GIFIcon, {
          src: "worked.png",
          alt: "PNG Icon 3",
          onClick: () => window.location.href = "tel:8660449970"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
            children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
      style: {
        color: 'black',
        margin: '19px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
        children: "\"Differentiate yourself from competition and go viral!\""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 49
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

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

/***/ "./hooks/useForkRef.js":
/*!*****************************!*\
  !*** ./hooks/useForkRef.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const setRef = (ref, value) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};
const useForkRef = (refA, refB) =>
/**
 * This will create a new function if the ref props change and are defined.
 * This means react will call the old forkRef with `null` and the new forkRef
 * with the ref. Cleanup naturally emerges from this behavior.
 */
react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
  if (refA == null && refB == null) {
    return null;
  }
  return refValue => {
    setRef(refA, refValue);
    setRef(refB, refValue);
  };
}, [refA, refB]);
/* harmony default export */ __webpack_exports__["default"] = (useForkRef);

/***/ }),

/***/ "./hooks/useMediaQuery.js":
/*!********************************!*\
  !*** ./hooks/useMediaQuery.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const useMediaQuery = queryInput => {
  const theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, '');
  const isClientSide = false;
  const defaultMatches = false;
  const matchMedia = isClientSide ? window.matchMedia : null;
  const [match, setMatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(() => {
    if (isClientSide) {
      return matchMedia(query).matches;
    }

    // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.
    return defaultMatches;
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!isClientSide) {
      return undefined;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      setMatch(queryList.matches);
    };
    updateMatch();
    queryList.addEventListener('change', updateMatch);
    return () => {
      queryList.removeEventListener('change', updateMatch);
    };
  }, [query, matchMedia, isClientSide]);
  return match;
};
/* harmony default export */ __webpack_exports__["default"] = (useMediaQuery);

/***/ }),

/***/ "./hooks/useStyledTheme.js":
/*!*********************************!*\
  !*** ./hooks/useStyledTheme.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const useStyledTheme = () => {
  const theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  return theme || {};
};
/* harmony default export */ __webpack_exports__["default"] = (useStyledTheme);

/***/ }),

/***/ "./hooks/useWindowSize.js":
/*!********************************!*\
  !*** ./hooks/useWindowSize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    width: undefined,
    height: undefined
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    // return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Banner */ "./components/Home/Banner/index.js");
/* harmony import */ var _components_Home_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Content */ "./components/Home/Content/index.js");
/* harmony import */ var _components_Home_FeaturedProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/FeaturedProject */ "./components/Home/FeaturedProject/index.js");
/* harmony import */ var _components_Home_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/About */ "./components/Home/About/index.js");
/* harmony import */ var _components_Home_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/Contact */ "./components/Home/Contact/index.js");
/* harmony import */ var _components_Home_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/Footer */ "./components/Home/Footer.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\pages\\index.js";








function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_Content__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_FeaturedProject__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_About__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Home_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Home));

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

/***/ "./utils/constants/services-items.js":
/*!*******************************************!*\
  !*** ./utils/constants/services-items.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([['Innovative Products', ['AR Cards', 'AR Business Cards', 'AR Wedding Cards', 'AR Stickers', 'AR T-Shirts', 'Custome AR Build with Dashboard']], ['nexAR - AR & XR', ['Image Tracking AR', 'Multi Image Tracking', 'Multi Image Target', 'Tap to Place AR / XR based', 'Location Based AR']], ['nexNet - Custome WebD', ['Single Page Website', 'Static Websites', 'Dynamic Websites', 'Responsive Design -ReactJs', 'Mobile App Development', 'Custome Apllication Build']], ['nextAi - Object Detection', ['..']]]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5pbWF0ZU9uU2NyZWVuL0FuaW1hdGVPblNjcmVlbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBCYXIvQXBwQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcEJhci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYW52YXNFcmFzZXIvQ2FudmFzRXJhc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbnZhc0VyYXNlci9DYW52YXNFcmFzZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FudmFzRXJhc2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9BYm91dC9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9BYm91dC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9CYW5uZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9CYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvQ29udGFjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L0NvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWRQcm9qZWN0L0ZlYXR1cmVkUHJvamVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ZlYXR1cmVkUHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWRQcm9qZWN0L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9ybS9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0Fycm93LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0ZhY2Vib29rLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9MaW5rZWRpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9Mb2dvLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL1R3aXR0ZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvWW91dHViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnVCdXR0b24vTWVudUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51QnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudUJ1dHRvbi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NaXNjL0NhbGwuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWlzYy9OZXhhci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0aWNreUN1cnNvci9TdGlja3lDdXJzb3IuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RpY2t5Q3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VDdXJzb3JTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VGb3JrUmVmLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZU1lZGlhUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlU3R5bGVkVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zaGFyZWQvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMvc2VydmljZXMtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlcnNsaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ0cmFuc2xhdGVZIiwiZHVyYXRpb24iLCJlYXNlIiwib3BhY2l0eSIsInZhcmlhbnRzIiwic2hvdyIsImhpZGRlbiIsIkFuaW1hdGVPblNjcmVlbiIsImNoaWxkcmVuIiwiY2hpbGRyZW5Qcm9wIiwiYW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uIiwiaW5WaWV3UmVmIiwiaW5WaWV3IiwidXNlSW5WaWV3IiwidHJpZ2dlck9uY2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInN0YXJ0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiaGFuZGxlUmVmIiwibm9kZSIsInJlZiIsImN1cnJlbnQiLCJjbG9uZUVsZW1lbnQiLCJhbmltYXRlIiwiaW5pdGlhbCIsIm1lbW8iLCJnZXRTdHlsZXMiLCJkaXJlY3Rpb24iLCJ0b3AiLCJib3R0b20iLCJ5IiwiQXBwQmFyIiwicHJvcHMiLCJvZmZzZXQiLCJsb2dvUHJvcHMiLCJzdHlsZSIsInN0eWxlUHJvcCIsInJvb3RQcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNldEhpZGRlbiIsInVzZVN0YXRlIiwiaGFuZGxlU2Nyb2xsIiwic2hvdWxkSGlkZSIsImludGVyc2VjdGlvbiIsImN1cnJlbnRZUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX2pzeERFViIsIlNsaWRlciIsIl9vYmplY3RTcHJlYWQiLCJDb250YWluZXIiLCJMaW5rIiwiaHJlZiIsInBhc3NIcmVmIiwiU3R5bGVkTGluayIsInRpdGxlIiwiTG9nbyIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIk1lbnVXcmFwcGVyIiwiTWVudUJ1dHRvbiIsInN0eWxlZCIsIl9yZWYiLCJyZW5kZXJBcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsInRoZW1lIiwiekluZGV4Iiwic2xpZGVyIiwiZGl2IiwiY29udGFpbmVyU3R5bGVzIiwiYSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiQ2FudmFzRXJhc2VyIiwiY29tcGxldGVSYXRpbyIsImVuYWJsZWQiLCJvbkNvbXBsZXRlIiwib25Qcm9ncmVzcyIsInNpemUiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJvdGhlciIsImNhbnZhc0VyYXNlciIsInNldENhbnZhc0VyYXNlciIsImNhbnZhc1JlZiIsInVzZVJlZiIsImNvbXBvbmVudFJlZiIsInVzZUZvcmtSZWYiLCJvcHRpb25zIiwidXNlTWVtbyIsImNhbnZhcyIsImNhbnZhc0VyYXNlckZhY3RvcnkiLCJpbml0IiwiZm9yd2FyZFJlZiIsIkRFRkFVTFRfT1BUSU9OUyIsImdldEVsZW1lbnRDb21wdXRlZFN0eWxlZCIsImVsZW1lbnQiLCJwcm9wIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJyZXBsYWNlIiwiZmFjdG9yeSIsIl9jYW52YXMiLCJfY29udGV4dCIsIl9kYXRhIiwiX2hhbmRsZUVyYXNlclByb2dyZXNzIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImNvbFBhcnRzIiwibnVtUGFydHMiLCJwIiwiTWF0aCIsImZsb29yIiwicmF0aW8iLCJwYXJ0cyIsImNvbXBsZXRlIiwiX29uTW91c2VNb3ZlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc1giLCJwb3NZIiwic2NhbGVSYXRpbyIsInRvdWNoWCIsInRvdWNoWSIsInBhZ2VYIiwicGFnZVkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJfb25Nb3VzZURvd24iLCJ0b3VjaERvd24iLCJfb25Nb3VzZUNsaWNrIiwic291cmNlIiwiRXJyb3IiLCJjdXJyZW50T3B0aW9ucyIsImdldENvbnRleHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiYmFja2luZ1N0b3JlUmF0aW8iLCJ3ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwibW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwiYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJpIiwicHVzaCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ0b3VjaElEIiwicHRvdWNoWCIsInB0b3VjaFkiLCJ3IiwiaCIsImNsZWFyIiwiY2xlYXJSZWN0IiwicmVzZXQiLCJBYm91dCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaGFuZGxlTW91c2VFbnRlciIsInVzZUNhbGxiYWNrIiwiY3VyciIsImhhbmRsZU1vdXNlTGVhdmUiLCJOZXhhciIsIkNvbnRlbnRTZWN0aW9uIiwiVGV4dFdyYXBwZXIiLCJmb250U2l6ZSIsIlNlcnZpY2VzV3JhcHBlciIsIml0ZW1zIiwiaXRlbSIsInNlcnZpY2VzIiwiaXRlbUluZGV4IiwiRnJhZ21lbnQiLCJBY2NvcmRpb25Ub2dnbGUiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiQWNjb3JkaW9uQ29udGVudCIsInNlcnZpY2UiLCJzZXJ2aWNlSW5kZXgiLCJDYWxsIiwic2VjdGlvbiIsInNtYWxsIiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiYnV0dG9uIiwiY29sb3JzIiwicmVkIiwidGV4dCIsInRpdGxlQW5pbWF0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiaXRlbVRpdGxlQW5pbWF0aW9uIiwic2NhbGUiLCJ0ZXh0cyIsIkJhbm5lciIsIndpbmRvd1NpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU3R5bGVkVGhlbWUiLCJpc01vYmlsZSIsImN1cnJlbnRUZXh0Iiwic2V0Q3VycmVudFRleHQiLCJpbmRleCIsInNldEluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJCYW5uZXJTZWN0aW9uIiwiVmlkZW9Db250YWluZXIiLCJzcmMiLCJsb29wIiwiYXV0b1BsYXkiLCJtdXRlZCIsIkJhbm5lclRpdGxlIiwic3BhbiIsImgxIiwiRm9vdGVyIiwiQW5pbWF0aW9ub25TY3JlZW4iLCJGb3JtIiwiRm9vdGVyQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiYWx0IiwiY29sb3IiLCJTb2NpYWxNZWRpYSIsImZvb3RlciIsIkNvbnRlbnQiLCJUZXh0IiwiaDIiLCJ3b3JkcyIsIkZlYXR1cmVkUHJvamVjdCIsImN1cnJlbnRXb3JkIiwic2V0Q3VycmVudFdvcmQiLCJ3b3JkSW5kZXgiLCJzZXRXb3JkSW5kZXgiLCJpc1R5cGluZyIsInNldElzVHlwaW5nIiwiY29udHJvbHNJbmZvIiwiY29udHJvbHNBcnJvdyIsImlzTWVudU9wZW4iLCJ1c2VNZW51Q29udGV4dCIsImFkZEN1cnNvckNvbG9yIiwicmVzZXRDdXJzb3JDb2xvciIsImlzVGFibGV0VmlldyIsInVzZU1lZGlhUXVlcnkiLCJzaXplcyIsInR5cGluZ0VmZmVjdCIsInByZXYiLCJuZXh0Q2hhckluZGV4Iiwic2xpY2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiUHJvamVjdFRpdGxlIiwiQXJyb3ciLCJWaWRlb1ByZXZpZXciLCJNZW51Q29udGFpbmVyIiwic3RpY2t5IiwiRGVmYXVsdE1lbnVCdXR0b24iLCJtZWRpdW0iLCJDb250YWN0U2VjdGlvbiIsIkZvcm1XcmFwcGVyIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJncmF5IiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlN1Ym1pdEJ1dHRvbiIsImRhcmtSZWQiLCJDb250YWN0Rm9ybSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicm93cyIsIm1hcmdpblRvcCIsImZpbGxDb2xvciIsIndoaXRlIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZCIsImZpbGwiLCJmaWxsUnVsZSIsIkljb25GYWNlYm9vayIsIkljb25JbnN0YWdyYW0iLCJJY29uTGlua2VkaW5DaXJjbGVkIiwiTG9nb0NvbnRhaW5lciIsIlN0eWxlZExvZ28iLCJpbWciLCJJY29uVHdpdHRlckNpcmNsZSIsIkljb25Zb3V0dWJlIiwiZGlzcGF0Y2giLCJoYW5kbGVPblRvZ2dsZSIsIlN0aWNreUN1cnNvciIsIkJ1dHRvbiIsIkNUQVNlY3Rpb24iLCJDVEFIZWFkaW5nIiwiQ1RBRGVzY3JpcHRpb24iLCJDVEFCdXR0b24iLCJDYWxsVG9BY3Rpb24iLCJTZWN0aW9uc0NvbnRhaW5lciIsIlNlY3Rpb24iLCJHSUZJY29uIiwibG9jYXRpb24iLCJtYXJnaW4iLCJtZWRpYXMiLCJjb21wb25lbnQiLCJJbnN0YWdyYW0iLCJ1cmwiLCJGYWNlYm9vayIsIllvdXR1YmUiLCJUd2l0dGVyIiwiTGlua2VkaW4iLCJ0YXJnZXQiLCJjaGlsZFJlZiIsImxvY2tDdXJzb3JQb3NpdGlvbiIsInBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIklOSVRJQUxfU1RBVEUiLCJjdXJzb3JTdHlsZSIsImJvcmRlcmVkIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJDdXJzb3JDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkN1cnNvckNvbnRleHRQcm92aWRlciIsInVzZVJlZHVjZXIiLCJzdG9yZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDdXJzb3JDb250ZXh0IiwidXNlQ29udGV4dCIsIk1lbnVDb250ZXh0IiwiTWVudUNvbnRleHRQcm92aWRlciIsImNvb3JkaW5hdGVzIiwic2V0UmVmIiwicmVmQSIsInJlZkIiLCJyZWZWYWx1ZSIsInF1ZXJ5SW5wdXQiLCJUaGVtZUNvbnRleHQiLCJxdWVyeSIsImlzQ2xpZW50U2lkZSIsImRlZmF1bHRNYXRjaGVzIiwibWF0Y2hNZWRpYSIsIm1hdGNoIiwic2V0TWF0Y2giLCJtYXRjaGVzIiwidW5kZWZpbmVkIiwicXVlcnlMaXN0IiwidXBkYXRlTWF0Y2giLCJzZXRXaW5kb3dTaXplIiwiaGFuZGxlUmVzaXplIiwiaW5uZXJXaWR0aCIsImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJhcyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwic2hhbGxvdyIsInNjcm9sbCIsImxvY2FsZSIsIm5vZGVOYW1lIiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJib2R5IiwiZm9jdXMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIndhcm4iLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJvbmx5IiwiY2xlYW51cCIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwiZGVmYXVsdFByZXZlbnRlZCIsInByaW9yaXR5IiwiZGVmYXVsdExvY2FsZSIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiUm91dGVyIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VSb3V0ZXIiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJhZGRMb2NhbGUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpc0xvY2FsVVJMIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImludGVycG9sYXRlQXMiLCJyb3V0ZSIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUhyZWYiLCJjdXJyZW50UGF0aCIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwibWFya0xvYWRpbmdFcnJvciIsInByZXBhcmVVcmxBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwibG9jYWxlcyIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJzc2c0MDQiLCJtb2QiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJfZ2V0U3RhdGljRGF0YSIsImdldERhdGFIcmVmIiwiX2VyciIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsInJlcXVpcmUiLCJfZ2V0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsInNvbWUiLCJyZSIsInRlc3QiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY2FjaGVLZXkiLCJjdHgiLCJBcHBUcmVlIiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwiZm9ybWF0VXJsIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiaXNEeW5hbWljUm91dGUiLCJEVU1NWV9CQVNFIiwicGFyc2VSZWxhdGl2ZVVybCIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwcmVwYXJlRGVzdGluYXRpb24iLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyc2VkRGVzdGluYXRpb24iLCJfX25leHRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwiY29tcGlsZSIsInZhbGlkYXRlIiwibmV3VXJsIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwiZ2V0Um91dGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJIb21lIiwiX0ZyYWdtZW50IiwiRmVhdHVyZWRT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IiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIGRlbGF5OiAwLjMsXHJcbiAgdHJhbnNsYXRlWToge1xyXG4gICAgZHVyYXRpb246IDEsXHJcbiAgICBlYXNlOiBbMCwgMC43LCAwLjI5LCAwLjk3XSxcclxuICB9LFxyXG4gIG9wYWNpdHk6IHtcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgZWFzZTogWzAuMjUsIDAuMSwgMC4yNSwgMS4wXSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgc2hvdzogeyB0cmFuc2xhdGVZOiAwLCBvcGFjaXR5OiAxIH0sXHJcbiAgaGlkZGVuOiB7IHRyYW5zbGF0ZVk6IDYwLCBvcGFjaXR5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRlT25TY3JlZW4gPSAoeyBjaGlsZHJlbjogY2hpbGRyZW5Qcm9wIH0pID0+IHtcclxuICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBbaW5WaWV3UmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHsgdHJpZ2dlck9uY2U6IHRydWUgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5WaWV3KSB7XHJcbiAgICAgIGFuaW1hdGlvbi5zdGFydCgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH0sIFthbmltYXRpb24sIGluVmlldywgaW5WaWV3UmVmXSk7XHJcblxyXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgY2hpbGQgPT4ge1xyXG4gICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVmID0gbm9kZSA9PiB7XHJcbiAgICAgIC8vIEtlZXAgeW91ciBvd24gcmVmZXJlbmNlXHJcbiAgICAgIGluVmlld1JlZihub2RlKTtcclxuXHJcbiAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIHJlZiwgaWYgYW55XHJcbiAgICAgIGNvbnN0IHsgcmVmIH0gPSBjaGlsZDtcclxuICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZWYobm9kZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgdmFyaWFudHMsXHJcbiAgICAgIHRyYW5zaXRpb24sXHJcbiAgICAgIGFuaW1hdGU6IGFuaW1hdGlvbixcclxuICAgICAgaW5pdGlhbDogJ2hpZGRlbicsXHJcbiAgICAgIHJlZjogaGFuZGxlUmVmLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQW5pbWF0ZU9uU2NyZWVuKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQW5pbWF0ZU9uU2NyZWVuJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0ljb25zL0xvZ28nO1xyXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tICcuLi9NZW51QnV0dG9uJztcclxuaW1wb3J0IHsgU2xpZGVyLCBDb250YWluZXIsIFN0eWxlZExpbmssIE1lbnVXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgZ2V0U3R5bGVzID0gKGRpcmVjdGlvbiA9ICcnKSA9PiB7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSByZXR1cm4geyB0b3A6IDAgfTtcclxuICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSByZXR1cm4geyBib3R0b206IDAgfTtcclxuXHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaGlkZGVuOiB7IHk6IC0xMzEgfSxcclxuICBzaG93OiB7IHk6IDAgfSxcclxufTtcclxuXHJcbmNvbnN0IEFwcEJhciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBkaXJlY3Rpb24gPSAnZG93bicsXHJcbiAgICBvZmZzZXQgPSAxMDUsXHJcbiAgICBsb2dvUHJvcHMgPSB7fSxcclxuICAgIHN0eWxlOiBzdHlsZVByb3AgPSB7fSxcclxuICAgIC4uLnJvb3RQcm9wc1xyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgc2hvdWxkSGlkZSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaW50ZXJzZWN0aW9uID0gb2Zmc2V0O1xyXG4gICAgICBsZXQgY3VycmVudFlQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcclxuICAgICAgICBjdXJyZW50WVBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XHJcbiAgICAgICAgY3VycmVudFlQb3NpdGlvbiA9XHJcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGludGVyc2VjdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBvZmZzZXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNob3VsZEhpZGUgPSBjdXJyZW50WVBvc2l0aW9uID4gaW50ZXJzZWN0aW9uO1xyXG4gICAgICBpZiAoc2hvdWxkSGlkZSAhPT0gaGlkZGVuKSB7XHJcbiAgICAgICAgc2V0SGlkZGVuKHNob3VsZEhpZGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNjcm9sbCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtoaWRkZW4sIGRpcmVjdGlvbiwgb2Zmc2V0XSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyhkaXJlY3Rpb24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlclxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICBhbmltYXRlPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdzaG93J31cclxuICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IFswLjY2NiwgMCwgMC4yMzcsIDFdLFxyXG4gICAgICB9fVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlcyxcclxuICAgICAgICAuLi5zdHlsZVByb3AsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yb290UHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rIHRpdGxlPVwibmV4YXJcIj5cclxuICAgICAgICAgICAgPExvZ28gey4uLmxvZ29Qcm9wc30gLz5cclxuICAgICAgICAgIDwvU3R5bGVkTGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPE1lbnVXcmFwcGVyPlxyXG4gICAgICAgICAgPE1lbnVCdXR0b24gdGl0bGU9XCJQcm9qZWN0c1wiIC8+XHJcbiAgICAgICAgPC9NZW51V3JhcHBlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1NsaWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBcHBCYXIpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BcHBCYXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xuXG5leHBvcnQgY29uc3QgU2xpZGVyID0gc3R5bGVkKCh7IHJlbmRlckFzLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IENvbXBvbmVudCA9IG1vdGlvbltyZW5kZXJBc10gfHwgJ2Rpdic7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG59KWBcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgei1pbmRleDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS56SW5kZXguc2xpZGVyfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke2NvbnRhaW5lclN0eWxlc307XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTRweDtcbiAgbGVmdDogYXV0bztcbiAgd2lkdGg6IDEzMXB4O1xuICBoZWlnaHQ6IDIzcHg7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgd2lkdGg6IDk5cHg7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIHRvcDogMzJweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTRweDtcbiAgcmlnaHQ6IDMycHg7XG4gIG1hcmdpbjogLTIwcHg7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgdG9wOiAyOXB4O1xuICBgfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi8uLi9ob29rcy91c2VGb3JrUmVmJztcclxuaW1wb3J0IGNhbnZhc0VyYXNlckZhY3RvcnkgZnJvbSAnLi9DYW52YXNFcmFzZXJGYWN0b3J5JztcclxuXHJcbmNvbnN0IENhbnZhc0VyYXNlciA9IChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY29tcGxldGVSYXRpbyA9IDEsXHJcbiAgICBlbmFibGVkID0gdHJ1ZSxcclxuICAgIG9uQ29tcGxldGUgPSBudWxsLFxyXG4gICAgb25Qcm9ncmVzcyA9IG51bGwsXHJcbiAgICBzaXplID0gNDAsXHJcbiAgICBiYWNrZ3JvdW5kID0gJyMwMDAnLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHQsXHJcbiAgICAuLi5vdGhlclxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2NhbnZhc0VyYXNlciwgc2V0Q2FudmFzRXJhc2VyXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBjb21wb25lbnRSZWYgPSB1c2VGb3JrUmVmKGNhbnZhc1JlZiwgcmVmKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICBjb21wbGV0ZVJhdGlvLFxyXG4gICAgICBlbmFibGVkLFxyXG4gICAgICBvbkNvbXBsZXRlLFxyXG4gICAgICBvblByb2dyZXNzLFxyXG4gICAgICBzaXplLFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgfSksXHJcbiAgICBbXHJcbiAgICAgIGJhY2tncm91bmQsXHJcbiAgICAgIGNvbXBsZXRlUmF0aW8sXHJcbiAgICAgIGVuYWJsZWQsXHJcbiAgICAgIG9uQ29tcGxldGUsXHJcbiAgICAgIG9uUHJvZ3Jlc3MsXHJcbiAgICAgIHNpemUsXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHQsXHJcbiAgICBdLFxyXG4gICk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNFcmFzZXJGYWN0b3J5KCk7XHJcbiAgICBzZXRDYW52YXNFcmFzZXIoY2FudmFzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FudmFzRXJhc2VyKSB7XHJcbiAgICAgIGNhbnZhc0VyYXNlci5pbml0KGNhbnZhc1JlZi5jdXJyZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9LCBbY2FudmFzRXJhc2VyLCBvcHRpb25zXSk7XHJcblxyXG4gIHJldHVybiA8Y2FudmFzIHJlZj17Y29tcG9uZW50UmVmfSB7Li4ub3RoZXJ9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZihDYW52YXNFcmFzZXIpO1xyXG4iLCJjb25zdCBERUZBVUxUX09QVElPTlMgPSB7XHJcbiAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gIGNvbXBsZXRlUmF0aW86IDEsXHJcbiAgZW5hYmxlZDogdHJ1ZSxcclxuICBvbkNvbXBsZXRlOiBudWxsLFxyXG4gIG9uUHJvZ3Jlc3M6IG51bGwsXHJcbiAgc2l6ZTogNDAsXHJcbn07XHJcblxyXG5jb25zdCBnZXRFbGVtZW50Q29tcHV0ZWRTdHlsZWQgPSAoZWxlbWVudCwgcHJvcCkgPT4gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW3Byb3BdLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuXHJcbmNvbnN0IGZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgbGV0IF9jYW52YXMgPSBudWxsO1xyXG4gIGxldCBfY29udGV4dCA9IG51bGw7XHJcbiAgbGV0IF9kYXRhID0ge307XHJcblxyXG4gIGNvbnN0IF9oYW5kbGVFcmFzZXJQcm9ncmVzcyA9IChjdXJyZW50WCwgY3VycmVudFkpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29sUGFydHMsXHJcbiAgICAgIG51bVBhcnRzLFxyXG4gICAgICBjb21wbGV0ZVJhdGlvLFxyXG4gICAgICBlbmFibGVkLFxyXG4gICAgICBzaXplLFxyXG4gICAgICBvbkNvbXBsZXRlLFxyXG4gICAgICBvblByb2dyZXNzLFxyXG4gICAgfSA9IF9kYXRhO1xyXG5cclxuICAgIGlmICghZW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwID0gTWF0aC5mbG9vcihjdXJyZW50WCAvIHNpemUpICsgTWF0aC5mbG9vcihjdXJyZW50WSAvIHNpemUpICogY29sUGFydHM7XHJcblxyXG4gICAgaWYgKHAgPj0gMCAmJiBwIDwgbnVtUGFydHMpIHtcclxuICAgICAgX2RhdGEucmF0aW8gKz0gX2RhdGEucGFydHNbcF07XHJcbiAgICAgIF9kYXRhLnBhcnRzW3BdID0gMDtcclxuXHJcbiAgICAgIGlmICghX2RhdGEuY29tcGxldGUpIHtcclxuICAgICAgICBwID0gX2RhdGEucmF0aW8gLyBfZGF0YS5udW1QYXJ0cztcclxuXHJcbiAgICAgICAgaWYgKHAgPj0gY29tcGxldGVSYXRpbykge1xyXG4gICAgICAgICAgX2RhdGEuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgIG9uUHJvZ3Jlc3MocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgX29uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgZW5hYmxlZCwgcG9zWCwgcG9zWSwgc2NhbGVSYXRpbywgdG91Y2hYLCB0b3VjaFksXHJcbiAgICB9ID0gX2RhdGE7XHJcbiAgICBjb25zdCBjdXJyZW50WCA9IChldmVudC5wYWdlWCAtIHBvc1gpICogc2NhbGVSYXRpbztcclxuICAgIGNvbnN0IGN1cnJlbnRZID0gKGV2ZW50LnBhZ2VZIC0gcG9zWSkgKiBzY2FsZVJhdGlvO1xyXG5cclxuICAgIGlmIChlbmFibGVkKSB7XHJcbiAgICAgIF9oYW5kbGVFcmFzZXJQcm9ncmVzcyhjdXJyZW50WCwgY3VycmVudFkpO1xyXG4gICAgICBfY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgX2NvbnRleHQubW92ZVRvKHRvdWNoWCwgdG91Y2hZKTtcclxuICAgICAgX2NvbnRleHQubGluZVRvKGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcbiAgICAgIF9jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kYXRhLnRvdWNoWCA9IGN1cnJlbnRYO1xyXG4gICAgX2RhdGEudG91Y2hZID0gY3VycmVudFk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgX29uTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgZW5hYmxlZCwgcG9zWCwgcG9zWSwgc2NhbGVSYXRpbyxcclxuICAgIH0gPSBfZGF0YTtcclxuICAgIGNvbnN0IGN1cnJlbnRYID0gKGV2ZW50LnBhZ2VYIC0gcG9zWCkgKiBzY2FsZVJhdGlvO1xyXG4gICAgY29uc3QgY3VycmVudFkgPSAoZXZlbnQucGFnZVkgLSBwb3NZKSAqIHNjYWxlUmF0aW87XHJcblxyXG4gICAgX2RhdGEudG91Y2hEb3duID0gdHJ1ZTtcclxuICAgIF9kYXRhLnRvdWNoWCA9IGN1cnJlbnRYO1xyXG4gICAgX2RhdGEudG91Y2hZID0gY3VycmVudFk7XHJcblxyXG4gICAgaWYgKGVuYWJsZWQpIHtcclxuICAgICAgX2hhbmRsZUVyYXNlclByb2dyZXNzKGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcblxyXG4gICAgICBfY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgX2NvbnRleHQubW92ZVRvKGN1cnJlbnRYIC0gMSwgY3VycmVudFkpO1xyXG4gICAgICBfY29udGV4dC5saW5lVG8oY3VycmVudFgsIGN1cnJlbnRZKTtcclxuICAgICAgX2NvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfb25Nb3VzZU1vdmUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9vbk1vdXNlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBlbmFibGVkLCBwb3NYLCBwb3NZLCBzY2FsZVJhdGlvLFxyXG4gICAgfSA9IF9kYXRhO1xyXG4gICAgY29uc3QgY3VycmVudFggPSAoZXZlbnQucGFnZVggLSBwb3NYKSAqIHNjYWxlUmF0aW87XHJcbiAgICBjb25zdCBjdXJyZW50WSA9IChldmVudC5wYWdlWSAtIHBvc1kpICogc2NhbGVSYXRpbztcclxuXHJcbiAgICBfZGF0YS50b3VjaERvd24gPSB0cnVlO1xyXG4gICAgX2RhdGEudG91Y2hYID0gY3VycmVudFg7XHJcbiAgICBfZGF0YS50b3VjaFkgPSBjdXJyZW50WTtcclxuXHJcbiAgICBpZiAoZW5hYmxlZCkge1xyXG4gICAgICBfaGFuZGxlRXJhc2VyUHJvZ3Jlc3MoY3VycmVudFgsIGN1cnJlbnRZKTtcclxuXHJcbiAgICAgIF9jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICBfY29udGV4dC5tb3ZlVG8oY3VycmVudFggLSAxLCBjdXJyZW50WSk7XHJcbiAgICAgIF9jb250ZXh0LmxpbmVUbyhjdXJyZW50WCwgY3VycmVudFkpO1xyXG4gICAgICBfY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF9vbk1vdXNlTW92ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdCA9IChzb3VyY2UsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgaWYgKCFzb3VyY2UpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdObyBzb3VyY2UgZWxlbWVudCBwcm92aWRlZC4gSXQgbXVzdCBiZSBhbiBIVE1MIGNhbnZhcyBlbGVtZW50LicsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudE9wdGlvbnMgPSB7IC4uLkRFRkFVTFRfT1BUSU9OUywgLi4ub3B0aW9ucyB9O1xyXG4gICAgY29uc3QgeyBzaXplLCBiYWNrZ3JvdW5kIH0gPSBjdXJyZW50T3B0aW9ucztcclxuXHJcbiAgICBfY2FudmFzID0gc291cmNlO1xyXG4gICAgX2NvbnRleHQgPSBfY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb25zdCBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcclxuICAgIGNvbnN0IGJhY2tpbmdTdG9yZVJhdGlvID0gX2NvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xyXG4gICAgICB8fCBfY29udGV4dC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvXHJcbiAgICAgIHx8IF9jb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xyXG4gICAgICB8fCBfY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xyXG4gICAgICB8fCBfY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvXHJcbiAgICAgIHx8IDE7XHJcbiAgICBjb25zdCBzY2FsZVJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xyXG5cclxuICAgIGNvbnN0IHJlYWxXaWR0aCA9IGdldEVsZW1lbnRDb21wdXRlZFN0eWxlZChfY2FudmFzLCAnd2lkdGgnKTtcclxuICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBnZXRFbGVtZW50Q29tcHV0ZWRTdHlsZWQoX2NhbnZhcywgJ2hlaWdodCcpO1xyXG4gICAgY29uc3Qgd2lkdGggPSByZWFsV2lkdGggKiBzY2FsZVJhdGlvO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gcmVhbEhlaWdodCAqIHNjYWxlUmF0aW87XHJcblxyXG4gICAgaWYgKGRldmljZVBpeGVsUmF0aW8gIT09IGJhY2tpbmdTdG9yZVJhdGlvKSB7XHJcbiAgICAgIF9jYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgX2NhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIF9jYW52YXMuc3R5bGUud2lkdGggPSBgJHtyZWFsV2lkdGh9cHhgO1xyXG4gICAgICBfY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke3JlYWxIZWlnaHR9cHhgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX2NhbnZhcy53aWR0aCA9IHJlYWxXaWR0aDtcclxuICAgICAgX2NhbnZhcy5oZWlnaHQgPSByZWFsSGVpZ2h0O1xyXG4gICAgICBfY2FudmFzLnN0eWxlLndpZHRoID0gJyc7XHJcbiAgICAgIF9jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gX2NvbnRleHQuc2NhbGUoc2NhbGVSYXRpbywgc2NhbGVSYXRpbyk7XHJcbiAgICBfY29udGV4dC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kO1xyXG4gICAgX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBfY29udGV4dC5kcmF3SW1hZ2UoX2NhbnZhcywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBjb250ZXh0IGZvciBkcmF3aW5nIG9wZXJhdGlvbnNcclxuICAgIF9jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xyXG4gICAgX2NvbnRleHQubGluZVdpZHRoID0gc2l6ZTtcclxuICAgIF9jb250ZXh0LmxpbmVDYXAgPSAncm91bmQnO1xyXG5cclxuICAgIC8vIGJpbmQgZXZlbnRzXHJcbiAgICBfY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfb25Nb3VzZURvd24pO1xyXG4gICAgX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9vbk1vdXNlQ2xpY2spO1xyXG4gICAgLy8gX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgX29uVG91Y2hTdGFydCk7XHJcbiAgICAvLyBfY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIF9vblRvdWNoTW92ZSk7XHJcbiAgICAvLyBfY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgX29uVG91Y2hFbmQpO1xyXG5cclxuICAgIC8vIHJlc2V0IHBhcnRzXHJcbiAgICBjb25zdCBwYXJ0cyA9IFtdO1xyXG4gICAgY29uc3QgY29sUGFydHMgPSBNYXRoLmZsb29yKHdpZHRoIC8gc2l6ZSk7XHJcbiAgICBjb25zdCBudW1QYXJ0cyA9IGNvbFBhcnRzICogTWF0aC5mbG9vcihoZWlnaHQgLyBzaXplKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUGFydHM7IGkrKykge1xyXG4gICAgICBwYXJ0cy5wdXNoKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kYXRhID0ge1xyXG4gICAgICBwb3NYOiBfY2FudmFzLm9mZnNldExlZnQsXHJcbiAgICAgIHBvc1k6IF9jYW52YXMub2Zmc2V0VG9wLFxyXG4gICAgICB0b3VjaERvd246IGZhbHNlLFxyXG4gICAgICB0b3VjaElEOiAtOTk5LFxyXG4gICAgICB0b3VjaFg6IDAsXHJcbiAgICAgIHRvdWNoWTogMCxcclxuICAgICAgcHRvdWNoWDogMCxcclxuICAgICAgcHRvdWNoWTogMCxcclxuICAgICAgdzogd2lkdGgsXHJcbiAgICAgIGg6IGhlaWdodCxcclxuICAgICAgc2NhbGVSYXRpbyxcclxuICAgICAgcmF0aW86IDAsXHJcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgY3VycmVudE9wdGlvbnMsXHJcbiAgICAgIC4uLmN1cnJlbnRPcHRpb25zLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdywgaCwgbnVtUGFydHMsIG9uQ29tcGxldGUsXHJcbiAgICB9ID0gX2RhdGE7XHJcblxyXG4gICAgaWYgKF9kYXRhKSB7XHJcbiAgICAgIF9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUGFydHM7IGkrKykge1xyXG4gICAgICAgIF9kYXRhLnBhcnRzW2ldID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgX2RhdGEucmF0aW8gPSBudW1QYXJ0cztcclxuICAgICAgX2RhdGEuY29tcGxldGUgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKG9uQ29tcGxldGUpIHtcclxuICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdywgaCwgbnVtUGFydHMgfSA9IF9kYXRhO1xyXG5cclxuICAgIF9jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XHJcbiAgICBfY29udGV4dC5kcmF3SW1hZ2UoX2NhbnZhcywgMCwgMCwgdywgaCk7XHJcbiAgICBfY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBhcnRzOyBpKyspIHtcclxuICAgICAgX2RhdGEucGFydHNbaV0gPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIF9kYXRhLnJhdGlvID0gMDtcclxuICAgIF9kYXRhLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBfZGF0YS50b3VjaERvd24gPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdCxcclxuICAgIGNsZWFyLFxyXG4gICAgcmVzZXQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhbnZhc0VyYXNlcic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaXRlbXMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzL3NlcnZpY2VzLWl0ZW1zJztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgQ2FsbCBmcm9tICcuLy4uLy4uL01pc2MvQ2FsbCdcclxuaW1wb3J0IE5leGFyIGZyb20gJy4vLi4vLi4vTWlzYy9OZXhhcidcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBUZXh0V3JhcHBlcixcclxuICBTZXJ2aWNlc1dyYXBwZXIsXHJcbiAgQWNjb3JkaW9uVG9nZ2xlLFxyXG4gIEFjY29yZGlvbkNvbnRlbnQsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIGN1cnIgPT4ge1xyXG4gICAgICBpZiAoY3VyciA9PT0gc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIH0sXHJcbiAgICBbc2VsZWN0ZWRJdGVtLCBhZGRDdXJzb3JCb3JkZXJdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIGN1cnIgPT4ge1xyXG4gICAgICBpZiAoY3VyciA9PT0gc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICByZW1vdmVDdXJzb3JCb3JkZXIoKTtcclxuICAgIH0sXHJcbiAgICBbc2VsZWN0ZWRJdGVtLCByZW1vdmVDdXJzb3JCb3JkZXJdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICA8TmV4YXIvPlxyXG4gICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICc5OXB4J319PkFib3V0IFVzPC9oMT5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgIE91ciBtaXNzaW9uIGlzIHRvIHJldm9sdXRpb25pemUgdmlzdWFsIGV4cGVyaWVuY2VzLCBcclxuICAgICAgICAgIGJyaWRnaW5nIHRoZSBnYXAgYmV0d2VlbiB0aGUgcGh5c2ljYWwgYW5kIGRpZ2l0YWwgd29ybGRzLlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgV2Ugc3BlY2lhbGl6ZSBpbiBhIHJhbmdlIG9mIGN1dHRpbmctZWRnZSBkaWdpdGFsIHNvbHV0aW9ucy4gXHJcbiAgICAgICAgICBPdXIgc2VydmljZXMgaW5jbHVkZSBhZHZhbmNlZCBBdWdtZW50ZWQgUmVhbGl0eSBzb2Z0d2FyZSB0aGF0IHRyYW5zZm9ybXMgeW91ciBcclxuICAgICAgICAgIGRpZ2l0YWwgaW50ZXJhY3Rpb25zLCBjb21wcmVoZW5zaXZlIFdlYiBEZXZlbG9wbWVudCB0byBjcmVhdGUgdXNlciBmcmllbmRseSBvbmxpbmUgXHJcbiAgICAgICAgICBwbGF0Zm9ybXMsIDxzdHJvbmc+aW5ub3ZhdGl2ZSBJbWFnZSBUcmFja2luZyBBbmQgT2JqZWN0IGRldGVjdGlvbjwvc3Ryb25nPiBzeXN0ZW0gZGVzaWduZWQgdG8gc3RyZWFtbGluZSBcclxuICAgICAgICAgIHByb2Nlc3NlcyB0aHJvdWdoIHNtYXJ0IHJlY29nbml0aW9uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvVGV4dFdyYXBwZXI+XHJcbiAgICAgICAgPFNlcnZpY2VzV3JhcHBlcj5cclxuICAgICAgICAgIDxoMz5TZXJ2aWNlczwvaDM+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChbaXRlbSwgc2VydmljZXNdLCBpdGVtSW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvblRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXRlbUluZGV4ID09PSBzZWxlY3RlZEl0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEl0ZW0oaXRlbUluZGV4KX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlTW91c2VFbnRlcihpdGVtSW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgaGVpZ2h0OiBpdGVtSW5kZXggPT09IHNlbGVjdGVkSXRlbSA/ICcxMDAlJyA6ICcwJyB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC43LCBlYXNlOiBbMCwgMC43LCAwLjI5LCAwLjk3XSB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIHNlcnZpY2VJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8cCBrZXk9e2Ake2l0ZW1JbmRleH1fJHtzZXJ2aWNlSW5kZXh9YH0+e3NlcnZpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZXJ2aWNlc1dyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxDYWxsLz5cclxuICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFib3V0KTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQWJvdXQnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi1ib3R0b206IDg2cHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgXG4gIHdpZHRoOiA1OC4zMzMlO1xuXG4gICYgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgZm9udC1zaXplOiAyLjYyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgJiBwIHtcbiAgICBtYXgtd2lkdGg6IDQ0OHB4O1xuICAgIG1hcmdpbjogNi45cHggMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJiBoMiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gICAgfVxuICBgfTtcbiAgXG5gO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDguMzMzJTtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcblxuICAmIGgzIHtcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uVG9nZ2xlID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyN3B4IDAgMCAzNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG5cbiAgJjpob3Zlcjpub3QoW2FyaWEtZXhwYW5kZWQ9J3RydWUnXSkge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAxMXB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBsZWZ0OiAxM3B4O1xuICAgIH1cbiAgfVxuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBtYXJnaW4tdG9wOiAxMS41cHg7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgbGVmdDogMTBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgJlthcmlhLWV4cGFuZGVkPSd0cnVlJ10ge1xuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICB3aWR0aDogMTFweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAycHg7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgbGVmdDogMTNweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25Db250ZW50ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjA3MTQyODU3MTQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG5cbiAgJiBwIHtcbiAgICBtYXJnaW46IDYuMXB4IDAgMDtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XHJcbmltcG9ydCB1c2VTdHlsZWRUaGVtZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VTdHlsZWRUaGVtZSc7XHJcbmltcG9ydCBDYW52YXNFcmFzZXIgZnJvbSAnLi4vLi4vQ2FudmFzRXJhc2VyJztcclxuaW1wb3J0IHsgQmFubmVyU2VjdGlvbiwgQmFubmVyVGl0bGUsIFZpZGVvQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgdGl0bGVBbmltYXRpb24gPSB7XHJcbiAgYW5pbWF0ZToge1xyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMTUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBpdGVtVGl0bGVBbmltYXRpb24gPSB7XHJcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH0sIC8vIFN0YXJ0IHdpdGggb3BhY2l0eSAwIGFuZCBzY2FsZSBkb3duXHJcbiAgYW5pbWF0ZToge1xyXG4gICAgb3BhY2l0eTogMSwgLy8gRmFkZSBpblxyXG4gICAgc2NhbGU6IDEsICAgLy8gU2NhbGUgdXAgdG8gZnVsbCBzaXplXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAwLjMsIC8vIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHRleHRzID0gWydBUicsICdOZXQnLCAnQWknXTtcclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuICBjb25zdCBjYW52YXNSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgd2luZG93U2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVN0eWxlZFRoZW1lKCk7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3dTaXplLndpZHRoIDwgNzY4OyAvLyBBZGp1c3QgYnJlYWtwb2ludCBhcyBuZWVkZWRcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRUZXh0LCBzZXRDdXJyZW50VGV4dF0gPSB1c2VTdGF0ZSh0ZXh0c1swXSk7XHJcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSB0ZXh0cy5sZW5ndGgpO1xyXG4gICAgfSwgNTAwKTsgLy8gQ2hhbmdlIHRleHQgZXZlcnkgMiBzZWNvbmRzXHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEN1cnJlbnRUZXh0KHRleHRzW2luZGV4XSk7XHJcbiAgfSwgW2luZGV4XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFubmVyU2VjdGlvbiBzdHlsZT17eyBoZWlnaHQ6IHdpbmRvd1NpemUuaGVpZ2h0IH19PlxyXG4gICAgICA8VmlkZW9Db250YWluZXI+XHJcbiAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICBzcmM9XCIvdmlkZW9zL2Jhbm5lci5tcDRcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9WaWRlb0NvbnRhaW5lcj5cclxuICAgICAgeyFpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPENhbnZhc0VyYXNlclxyXG4gICAgICAgICAgcmVmPXtjYW52YXNSZWZ9XHJcbiAgICAgICAgICB3aWR0aD17d2luZG93U2l6ZS53aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17d2luZG93U2l6ZS5oZWlnaHR9XHJcbiAgICAgICAgICBzaXplPXsxMjB9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kPXt0aGVtZS5iYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3JlbW92ZUN1cnNvckJvcmRlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8QmFubmVyVGl0bGVcclxuICAgICAgICB2YXJpYW50cz17dGl0bGVBbmltYXRpb259XHJcbiAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxtb3Rpb24uc3BhbiB2YXJpYW50cz17aXRlbVRpdGxlQW5pbWF0aW9ufT5uZXg8L21vdGlvbi5zcGFuPlxyXG4gICAgICAgIDxtb3Rpb24uc3BhbiB2YXJpYW50cz17aXRlbVRpdGxlQW5pbWF0aW9ufSBrZXk9e2N1cnJlbnRUZXh0fT5cclxuICAgICAgICAgIHtjdXJyZW50VGV4dH1cclxuICAgICAgICA8L21vdGlvbi5zcGFuPlxyXG4gICAgICA8L0Jhbm5lclRpdGxlPlxyXG4gICAgPC9CYW5uZXJTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJhbm5lcik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Jhbm5lcic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5leHBvcnQgY29uc3QgQmFubmVyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMDVweDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcblxuICAmIGNhbnZhcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFZpZGVvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAmIHZpZGVvIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJhbm5lclRpdGxlID0gc3R5bGVkKG1vdGlvbi5oMSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtOTNweDtcbiAgbGVmdDogLTIwcHg7XG4gIGZvbnQtc2l6ZTogNDIwcHg7XG4gIGZvbnQtc2l6ZTogMjYuMjVyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBsaW5lLWhlaWdodDogMC42NzE0Mjg1NzE0O1xuXG4gICYgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbGVmdDogLTEwcHg7XG4gICAgYm90dG9tOiAtNjNweDtcbiAgICBmb250LXNpemU6IDI4MHB4O1xuICAgIGZvbnQtc2l6ZTogMTcuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogLjY4MjE0Mjg1NzE7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGxlZnQ6IC02cHg7XG4gICAgYm90dG9tOiAtMzZweDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSArIDZweCk7XG4gICAgZm9udC1zaXplOiAxNjBweDtcbiAgICBmb250LXNpemU6IDEwcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAuNjgxMjU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYH07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi4vLi4vU29jaWFsTWVkaWEnO1xyXG5pbXBvcnQgQW5pbWF0aW9ub25TY3JlZW4gZnJvbSAnLi8uLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLy4uLy4uL0hvbWUvRm9ybSdcclxuaW1wb3J0IGJyb3dzZXJzbGlzdCBmcm9tICdicm93c2Vyc2xpc3QnO1xyXG5cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGlvbm9uU2NyZWVuPlxyXG4gICAgICA8QW5pbWF0aW9ub25TY3JlZW4+XHJcbiAgICAgICAgPEZvcm0vPlxyXG4gICAgICA8L0FuaW1hdGlvbm9uU2NyZWVuPlxyXG4gICAgICA8Rm9vdGVyQ29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbHVtbnNcIj5cclxuICAgICAgICAgIHsvKiBGaXJzdCBDb2x1bW4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImxvZ28ucG5nXCIgYWx0PVwiTHVtaW5leGEgQ29tcGFueSBMb2dvXCIgc3R5bGU9e3sgd2lkdGg6ICcxNjBweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT48c3Ryb25nPkx1bWluZXhhIFRlY2hub2xvZ2llczwvc3Ryb25nPiwgTkIncyBHcm91cCBvZiBDb21wYW55PC9wPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjogJ3JlZCd9fT5uZXg8L2gxPlxyXG4gICAgICAgICAgICA8cCA+WW91ciBnby10byBzb3VyY2UgZm9yIGlubm92YXRpdmUgc29sdXRpb25zLiBXZSdyZSBoZXJlIHRvIGhlbHAgeW91IGFjaGlldmUgeW91ciBnb2Fscy48L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgIDxTb2NpYWxNZWRpYSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIFNlY29uZCBDb2x1bW4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PkNvbnRhY3Q8L2gzPlxyXG4gICAgICAgICAgICA8cD5Nb2JpbGU6ICs5MS44NjYuMDQ0Ljk5NzA8L3A+XHJcbiAgICAgICAgICAgIDxwPk1vYmlsZTogKzkxLjk0OC4xNjEuNTU4MjwvcD5cclxuICAgICAgICAgICAgPHA+RW1haWw6IGluZm9AbHVtaW5leGEuaW48L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBBZGRyZXNzOiAxNCAxc3QgU3RhZ2UgQmhhbmFzaGFua2FyaSwgQmFuZ2Fsb3JlLCBLQSBJTlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogVGhpcmQgQ29sdW1uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5MZWdhbDwvaDM+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvcHJpdmFjeVwiPlByaXZhY3kgUG9saWN5PC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi90ZXJtc1wiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9kaXNjbGFpbWVyXCI+RGlzY2xhaW1lcjwvYT48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogRm91cnRoIENvbHVtbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+T3RoZXI8L2gzPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL2Jsb2dcIj5CbG9nPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9jYXJlZXJzXCI+Q2FyZWVyPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9zZXJ2aWNlc1wiPlNlcnZpY2VzPC9hPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ub3RlXCI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ0dyYXknIH19PiZjb3B5OyBDb3B5cmlnaHQgPHN0cm9uZz5MdW1pbmV4YSBUZWNobm9sb2dpZXM8L3N0cm9uZz4gMjAyNC4gQWxsIFJpZ2h0IFJlc2VydmVkPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvb3RlckNvbnRhaW5lcj5cclxuICAgIDwvQW5pbWF0aW9ub25TY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRm9vdGVyKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGFjdCc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uZm9vdGVyKWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XHJcbiAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgZ3JheTtcclxuXHJcbiAgJiAuZm9vdGVyLWNvbHVtbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7IC8vIEFkanVzdCBtYXgtd2lkdGggYXMgbmVlZGVkXHJcbiAgICBnYXA6IDIwcHg7IC8vIEVxdWFsIGdhcCBiZXR3ZWVuIGNvbHVtbnNcclxuXHJcbiAgICAmIC5jb2x1bW4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtaW4td2lkdGg6IDIwMHB4OyBcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG5cclxuICAgICAgJiBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiBhIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjNweDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5mb290ZXItbm90ZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbC1tZWRpYXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICYgLmZvb3Rlci1jb2x1bW5zIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLy8gU3RhY2sgY29sdW1ucyBvbiBzbWFsbGVyIHNjcmVlbnNcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4OyAvLyBBZGp1c3QgZ2FwIGZvciBtb2JpbGUgdmlldyBpZiBuZWVkZWRcclxuICAgIH1cclxuXHJcbiAgICAmIC5jb2x1bW4ge1xyXG4gICAgICB3aWR0aDogOTAlOyAvLyBNYWtlIGNvbHVtbnMgZnVsbCB3aWR0aCBvbiBtb2JpbGVcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFuaW1hdGVPblNjcmVlbiBmcm9tICcuLi8uLi9BbmltYXRlT25TY3JlZW4nO1xyXG5pbXBvcnQgeyBDb250ZW50U2VjdGlvbiwgVGV4dFdyYXBwZXIsIFRleHQgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICBJbm5vdmF0aW9uIGRvZXNu4oCZdCBzaW1wbHkgXHJcbiAgICAgICAgICBlbWVyZ2UgLVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgIGl04oCZcyBjdWx0aXZhdGVkLiBXZSBzaWZ0IHRocm91Z2ggdGhlIGxheWVycyBvZiB0aGUgb3JkaW5hcnkgdG8gdW5lYXJ0aCBcclxuICAgICAgICAgICAgZXh0cmFvcmRpbmFyeSBpZGVhcywgZW1icmFjaW5nIHRoZSBncml0IGFuZCBncmluZCBhbG9uZyB0aGUgd2F5LlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvVGV4dFdyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGVudCc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcblxuICBtYXJnaW4tYm90dG9tOiAyMTBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDdweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogOC4zMzMlO1xuICB3aWR0aDogY2FsYyg1OC4zMzMlIC0gMzJweCk7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5oMmBcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIuNjI1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWF4LXdpZHRoOiA2NDBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICYgYnIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGB9O1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VNZW51Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvbWVudSc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgdXNlU3R5bGVkVGhlbWUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlU3R5bGVkVGhlbWUnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCBBcnJvdyBmcm9tICcuLi8uLi9JY29ucy9BcnJvdyc7XHJcbmltcG9ydCB7XHJcbiAgQ29udGVudFNlY3Rpb24sXHJcbiAgUHJvamVjdEFuY2hvcixcclxuICBQcm9qZWN0SW5mbyxcclxuICBQcm9qZWN0VGl0bGUsXHJcbiAgVmlkZW9QcmV2aWV3LFxyXG4gIE1lbnVDb250YWluZXIsXHJcbiAgTWVudUJ1dHRvbixcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIGR1cmF0aW9uOiAxLFxyXG4gIGVhc2U6IFswLjQsIDAsIDAuMiwgMV0sXHJcbn07XHJcblxyXG5jb25zdCB3b3JkcyA9IFtcIm5leEFSXCIsIFwibmV4TmV0XCIsIFwibmV4QWlcIl07XHJcblxyXG5jb25zdCBGZWF0dXJlZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbd29yZEluZGV4LCBzZXRXb3JkSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzVHlwaW5nLCBzZXRJc1R5cGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBjb250cm9sc0luZm8gPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBjb250cm9sc0Fycm93ID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VTdHlsZWRUaGVtZSgpO1xyXG4gIGNvbnN0IFt7IGlzTWVudU9wZW4gfV0gPSB1c2VNZW51Q29udGV4dCgpO1xyXG4gIGNvbnN0IHtcclxuICAgIGFkZEN1cnNvckNvbG9yLFxyXG4gICAgcmVzZXRDdXJzb3JDb2xvcixcclxuICAgIGFkZEN1cnNvckJvcmRlcixcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcixcclxuICB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuICBjb25zdCBpc1RhYmxldFZpZXcgPSB1c2VNZWRpYVF1ZXJ5KFxyXG4gICAgKHsgYnJlYWtwb2ludHMgfSkgPT4gYChtYXgtd2lkdGg6JHticmVha3BvaW50cy5zaXplcy50YWJsZXR9cHgpYCxcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdHlwaW5nRWZmZWN0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUeXBpbmcpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCgocHJldikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV4dENoYXJJbmRleCA9IHByZXYubGVuZ3RoIDwgd29yZHNbd29yZEluZGV4XS5sZW5ndGggXHJcbiAgICAgICAgICAgID8gcHJldi5sZW5ndGggKyAxIFxyXG4gICAgICAgICAgICA6IHByZXYubGVuZ3RoO1xyXG4gICAgICAgICAgcmV0dXJuIHdvcmRzW3dvcmRJbmRleF0uc2xpY2UoMCwgbmV4dENoYXJJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQoKHByZXYpID0+IHByZXYuc2xpY2UoMCwgLTEpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIGlmIChjdXJyZW50V29yZC5sZW5ndGggPT09IHdvcmRzW3dvcmRJbmRleF0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzZXRJc1R5cGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzVHlwaW5nKHRydWUpLCAxMDAwKTsgLy8gV2FpdCBiZWZvcmUgc3RhcnRpbmcgdG8gY2xlYXJcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0V29yZEluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgd29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgIHNldElzVHlwaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0eXBpbmdFZmZlY3QoKTtcclxuICAgIH0sIGlzVHlwaW5nID8gMTUwIDogMTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gIH0sIFtjdXJyZW50V29yZCwgaXNUeXBpbmcsIHdvcmRJbmRleF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBhZGRDdXJzb3JDb2xvcih0aGVtZS50ZXh0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzTWVudU9wZW4pIHJldHVybjtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgcmVzZXRDdXJzb3JDb2xvcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGNvbnRyb2xzSW5mby5zdGFydCh7IG9wYWNpdHk6IDEgfSk7XHJcbiAgICBjb250cm9sc0Fycm93LnN0YXJ0KHsgeDogMCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBbmNob3JIb3ZlckVuZCA9ICgpID0+IHtcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMCB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiBpc1RhYmxldFZpZXcgPyAtMjUuMTkgOiAtMzMgfSk7XHJcbiAgfSwgW2NvbnRyb2xzQXJyb3csIGlzVGFibGV0Vmlld10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9ub3QtaHVtYmxlXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0QW5jaG9yXHJcbiAgICAgICAgICAgICAgb25Ib3ZlclN0YXJ0PXtoYW5kbGVBbmNob3JIb3ZlclN0YXJ0fVxyXG4gICAgICAgICAgICAgIG9uSG92ZXJFbmQ9e2hhbmRsZUFuY2hvckhvdmVyRW5kfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgR0VUIDxiciAvPiBTVEFSVEVEXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycm93IGFuaW1hdGU9e2NvbnRyb2xzQXJyb3d9IHRyYW5zaXRpb249e3RyYW5zaXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvUHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgPFZpZGVvUHJldmlldz5cclxuICAgICAgICAgICAgICAgIDx2aWRlbyBsb29wIGF1dG9QbGF5IG11dGVkIHNyYz1cInZpZGVvcy92aWRtLm1wNFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9WaWRlb1ByZXZpZXc+XHJcbiAgICAgICAgICAgIDwvUHJvamVjdEFuY2hvcj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICAgIDxNZW51Q29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8TWVudUJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0aWNreT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTZXJ2aWNlc1wiXHJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnVDb250YWluZXI+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgPC9Db250ZW50U2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRQcm9qZWN0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9GZWF0dXJlZFByb2plY3QnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcbmltcG9ydCBEZWZhdWx0TWVudUJ1dHRvbiBmcm9tICcuLi8uLi9NZW51QnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0QW5jaG9yID0gc3R5bGVkKG1vdGlvbi5hKWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBtYXJnaW46IDAgMCAyMTVweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwOHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SW5mbyA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgbWFyZ2luLWxlZnQ6IDguMzMzJTtcbiAgd2lkdGg6IDgzLjMzMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmIGgzLFxuICAmIC5wcm9qZWN0LWluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gICYgaDMge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgfVxuXG4gICYgLnByb2plY3QtaW5mbyB7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICAmIGg0IHtcbiAgICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB3aWR0aDogODMuMzMzJTtcblxuICAgICYgLnByb2plY3QtaW5mbyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJiBoMyB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcbiAgICAgIHRvcDogMTdweDtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RUaXRsZSA9IHN0eWxlZChtb3Rpb24uaDEpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzQ3cHg7XG4gIGxlZnQ6IC0zcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgJiAuYXJyb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAyNXB4IDAgMCAzcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIHdpZHRoOiAxMDFweDtcblxuICAgICYgc3ZnIHBhdGgge1xuICAgICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICB9XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICB0b3A6IDE2NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjcxNjY2NjY2Njc7XG5cbiAgICAmIC5hcnJvdyB7XG4gICAgICBtYXJnaW46IDEwcHggMCAwIDJweDtcbiAgICAgIHdpZHRoOiA3Ni4xOXB4O1xuICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVmlkZW9QcmV2aWV3ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDgwcHg7XG4gIG1hcmdpbjogMDtcblxuICAmIHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDY0cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gc3R5bGVkKERlZmF1bHRNZW51QnV0dG9uKWBcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMzBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG5cbiAgJjo6YmVmb3JlLFxuICAmOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gICYgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcbiAgICB3aWR0aDogY2FsYygzMy4zMzMlIC0gMzBweCk7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAyMzVweDtcblxuICAgICYgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgbWF4LXdpZHRoOiAyMTVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG5cbiAgICAmIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XG4gICAgfVxuICBgfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICcuLi8uLi9ob29rcy91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcEJhcic7XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBoaWRkZW46IGlzVGFibGV0VmlldyA9PiAoeyB5OiBpc1RhYmxldFZpZXcgPyAtODEgOiAtMTMxIH0pLFxyXG4gIHNob3c6IHsgeTogMCB9LFxyXG59O1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlzVGFibGV0VmlldyA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgICAoeyBicmVha3BvaW50cyB9KSA9PiBgKG1heC13aWR0aDoke2JyZWFrcG9pbnRzLnNpemVzLnRhYmxldH1weClgLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQmFyXHJcbiAgICAgIFxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xyXG5cclxuY29uc3QgQ29udGFjdFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tZWRpdW1gXHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBgfTtcclxuYDtcclxuXHJcbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBcclxuICB3aWR0aDogNTguMzMzJTtcclxuXHJcbiAgJiBoMSB7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBgfTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyYXl9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JheX07XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICByZXNpemU6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya1JlZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWN0U2VjdGlvbj5cclxuICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIG5leEFSIC0gQXVnbWVudGVkIFJlYWxpdHkgZmluZHMgZGl2ZXJzZSBhcHBsaWNhdGlvbnMgYWNyb3NzIG1hcmtldGluZyBhbmQgYWR2ZXJ0aXNpbmcsXHJcbiAgICAgICAgICByZXRhaWwgYW5kIGUtY29tbWVyY2UuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz7CqSBMdW1pbmV4YSBUZWNobm9sb2dpZXMuPC9zdHJvbmc+IFBpb25lZXJpbmcgaW4gd2ViIGFuZCBhdWdtZW50ZWQgcmVhbGl0eSBzb2x1dGlvbnMsXHJcbiAgICAgICAgICB3ZSBhcmUgZGVkaWNhdGVkIHRvIHRyYW5zZm9ybWluZyBkaWdpdGFsIGV4cGVyaWVuY2VzLiBDb25uZWN0IHdpdGggdXMgZm9yIGlubm92YXRpdmUsXHJcbiAgICAgICAgICBjdXN0b20tdGFpbG9yZWQgdGVjaG5vbG9neSBzZXJ2aWNlcyB0aGF0IGRyaXZlIHlvdXIgYnVzaW5lc3MgZm9yd2FyZC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvVGV4dFdyYXBwZXI+XHJcbiAgICAgIDxGb3JtV3JhcHBlcj5cclxuICAgICAgICBcclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgPFRleHRBcmVhIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCBNZXNzYWdlPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgIFdlJ2QgbG92ZSB0byBoZWFyIDxzdHJvbmc+ZnJvbSB5b3UhPC9zdHJvbmc+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICAgPC9Db250YWN0U2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm0nO1xyXG4iLCJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFycm93ID0gKHsgZmlsbENvbG9yID0gY29sb3JzLndoaXRlLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPG1vdGlvbi5zdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAxMDEgNTdcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMzMgMzRIMFYyNGg4MS40MjlMNjYgNy44ODQgNzMuNTQ4IDBsMTkuODc3IDIwLjc2My4wMjctLjAyOUwxMDEgMjguNjE4IDczLjgyOSA1N2wtNy41NDgtNy44ODRMODAuNzUzIDM0SDMzelwiXHJcbiAgICAgIGZpbGw9e2ZpbGxDb2xvcn1cclxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgID48L3BhdGg+XHJcbiAgPC9tb3Rpb24uc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XHJcbiIsIi8vIGljb246ZmFjZWJvb2sgfCBCb290c3RyYXAgaHR0cHM6Ly9pY29ucy5nZXRib290c3RyYXAuY29tLyB8IEJvb3RzdHJhcFxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb25GYWNlYm9vayhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0xNiA4LjA0OWMwLTQuNDQ2LTMuNTgyLTguMDUtOC04LjA1QzMuNTggMC0uMDAyIDMuNjAzLS4wMDIgOC4wNWMwIDQuMDE3IDIuOTI2IDcuMzQ3IDYuNzUgNy45NTF2LTUuNjI1aC0yLjAzVjguMDVINi43NVY2LjI3NWMwLTIuMDE3IDEuMTk1LTMuMTMxIDMuMDIyLTMuMTMxLjg3NiAwIDEuNzkxLjE1NyAxLjc5MS4xNTd2MS45OGgtMS4wMDljLS45OTMgMC0xLjMwMy42MjEtMS4zMDMgMS4yNTh2MS41MWgyLjIxOGwtLjM1NCAyLjMyNkg5LjI1VjE2YzMuODI0LS42MDQgNi43NS0zLjkzNCA2Ljc1LTcuOTUxelwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uRmFjZWJvb2s7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uSW5zdGFncmFtKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk01MTIgMzc4LjdjLTczLjQgMC0xMzMuMyA1OS45LTEzMy4zIDEzMy4zUzQzOC42IDY0NS4zIDUxMiA2NDUuMyA2NDUuMyA1ODUuNCA2NDUuMyA1MTIgNTg1LjQgMzc4LjcgNTEyIDM3OC43ek05MTEuOCA1MTJjMC01NS4yLjUtMTA5LjktMi42LTE2NS0zLjEtNjQtMTcuNy0xMjAuOC02NC41LTE2Ny42LTQ2LjktNDYuOS0xMDMuNi02MS40LTE2Ny42LTY0LjUtNTUuMi0zLjEtMTA5LjktMi42LTE2NS0yLjYtNTUuMiAwLTEwOS45LS41LTE2NSAyLjYtNjQgMy4xLTEyMC44IDE3LjctMTY3LjYgNjQuNUMxMzIuNiAyMjYuMyAxMTguMSAyODMgMTE1IDM0N2MtMy4xIDU1LjItMi42IDEwOS45LTIuNiAxNjVzLS41IDEwOS45IDIuNiAxNjVjMy4xIDY0IDE3LjcgMTIwLjggNjQuNSAxNjcuNiA0Ni45IDQ2LjkgMTAzLjYgNjEuNCAxNjcuNiA2NC41IDU1LjIgMy4xIDEwOS45IDIuNiAxNjUgMi42IDU1LjIgMCAxMDkuOS41IDE2NS0yLjYgNjQtMy4xIDEyMC44LTE3LjcgMTY3LjYtNjQuNSA0Ni45LTQ2LjkgNjEuNC0xMDMuNiA2NC41LTE2Ny42IDMuMi01NS4xIDIuNi0xMDkuOCAyLjYtMTY1ek01MTIgNzE3LjFjLTExMy41IDAtMjA1LjEtOTEuNi0yMDUuMS0yMDUuMVMzOTguNSAzMDYuOSA1MTIgMzA2LjkgNzE3LjEgMzk4LjUgNzE3LjEgNTEyIDYyNS41IDcxNy4xIDUxMiA3MTcuMXptMjEzLjUtMzcwLjdjLTI2LjUgMC00Ny45LTIxLjQtNDcuOS00Ny45czIxLjQtNDcuOSA0Ny45LTQ3LjkgNDcuOSAyMS40IDQ3LjkgNDcuOWE0Ny44NCA0Ny44NCAwIDAxLTQ3LjkgNDcuOXpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkluc3RhZ3JhbTtcclxuIiwiLy8gaWNvbjpsaW5rZWRpbi1jaXJjbGVkIHwgRW50eXBvIGh0dHA6Ly9lbnR5cG8uY29tLyB8IERhbmllbCBCcnVjZVxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb25MaW5rZWRpbkNpcmNsZWQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDk2MCAxMDAwXCJcclxuICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDIwYzEzMy4zMzMgMCAyNDYuNjY3IDQ2LjY2NyAzNDAgMTQwczE0MCAyMDYuNjY3IDE0MCAzNDBjMCAxMzItNDYuNjY3IDI0NS0xNDAgMzM5UzYxMy4zMzMgOTgwIDQ4MCA5ODBjLTEzMiAwLTI0NS00Ny0zMzktMTQxUzAgNjMyIDAgNTAwYzAtMTMzLjMzMyA0Ny0yNDYuNjY3IDE0MS0zNDBTMzQ4IDIwIDQ4MCAyME0zNjIgNjk4VjM4NmgtOTZ2MzEyaDk2bS00OC0zNTJjMzQuNjY3IDAgNTItMTYgNTItNDhzLTE3LjMzMy00OC01Mi00OGMtMTQuNjY3IDAtMjcgNC42NjctMzcgMTRzLTE1IDIwLjY2Ny0xNSAzNGMwIDMyIDE3LjMzMyA0OCA1MiA0OG00MDQgMzUyVjUxNGMwLTQ0LTEwLjMzMy03Ny42NjctMzEtMTAxcy00Ny42NjctMzUtODEtMzVjLTQ0IDAtNzYgMTYuNjY3LTk2IDUwaC0ybC02LTQyaC04NGMxLjMzMyAxOC42NjcgMiA1MiAyIDEwMHYyMTJoOThWNTE4YzAtMTIgMS4zMzMtMjAgNC0yNCA4LTI1LjMzMyAyNC42NjctMzggNTAtMzggMzIgMCA0OCAyMi42NjcgNDggNjh2MTc0aDk4XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25MaW5rZWRpbkNpcmNsZWQ7XHJcblxyXG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTG9nb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFbnN1cmUgcG9zaXRpb25pbmcgY29udGV4dCAqL1xyXG4gICAgICAgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICByaWdodDogMjhweDtcclxuICBib3R0b206IDE3cHg7ICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmltZ2BcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2dvQ29udGFpbmVyPlxyXG4gICAgICA8U3R5bGVkTG9nb1xyXG4gICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiIC8vIFJlZmVyZW5jZSBkaXJlY3RseSBmcm9tIHRoZSBwdWJsaWMgZm9sZGVyXHJcbiAgICAgICAgYWx0PVwiTHVtaW5leGEgTG9nb1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L0xvZ29Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvblR3aXR0ZXJDaXJjbGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0yMTUuMyAzMzcuN2MuMyA0LjcuMyA5LjYuMyAxNC40IDAgMTQ2LjgtMTExLjggMzE1LjktMzE2LjEgMzE1LjktNjMgMC0xMjEuNC0xOC4zLTE3MC42LTQ5LjggOSAxIDE3LjYgMS40IDI2LjggMS40IDUyIDAgOTkuOC0xNy42IDEzNy45LTQ3LjQtNDguOC0xLTg5LjgtMzMtMTAzLjgtNzcgMTcuMSAyLjUgMzIuNSAyLjUgNTAuMS0yYTExMSAxMTEgMCAwMS04OC45LTEwOXYtMS40YzE0LjcgOC4zIDMyIDEzLjQgNTAuMSAxNC4xYTExMS4xMyAxMTEuMTMgMCAwMS00OS41LTkyLjRjMC0yMC43IDUuNC0zOS42IDE1LjEtNTZhMzE1LjI4IDMxNS4yOCAwIDAwMjI5IDExNi4xQzQ5MiAzNTMuMSA1NDguNCAyOTIgNjE2LjIgMjkyYzMyIDAgNjAuOCAxMy40IDgxLjEgMzUgMjUuMS00LjcgNDkuMS0xNC4xIDcwLjUtMjYuNy04LjMgMjUuNy0yNS43IDQ3LjQtNDguOCA2MS4xIDIyLjQtMi40IDQ0LTguNiA2NC0xNy4zLTE1LjEgMjIuMi0zNCA0MS45LTU1LjcgNTcuNnpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblR3aXR0ZXJDaXJjbGU7XHJcblxyXG4gICIsIi8vIGljb246eW91dHViZSB8IEFudCBEZXNpZ24gSWNvbnMgaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi8gfCBBbnQgRGVzaWduXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbllvdXR1YmUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTk0MS4zIDI5Ni4xYTExMi4zIDExMi4zIDAgMDAtNzkuMi03OS4zQzc5Mi4yIDE5OCA1MTIgMTk4IDUxMiAxOThzLTI4MC4yIDAtMzUwLjEgMTguN0ExMTIuMTIgMTEyLjEyIDAgMDA4Mi43IDI5NkM2NCAzNjYgNjQgNTEyIDY0IDUxMnMwIDE0NiAxOC43IDIxNS45YzEwLjMgMzguNiA0MC43IDY5IDc5LjIgNzkuM0MyMzEuOCA4MjYgNTEyIDgyNiA1MTIgODI2czI4MC4yIDAgMzUwLjEtMTguOGMzOC42LTEwLjMgNjguOS00MC43IDc5LjItNzkuM0M5NjAgNjU4IDk2MCA1MTIgOTYwIDUxMnMwLTE0Ni0xOC43LTIxNS45ek00MjMgNjQ2VjM3OGwyMzIgMTMzLTIzMiAxMzV6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25Zb3V0dWJlOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3cgfSBmcm9tICcuL0Fycm93JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEluc3RhZ3JhbSB9IGZyb20gJy4vSW5zdGFncmFtJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvIH0gZnJvbSAnLi9Mb2dvJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBZb3V0dWJlIH0gZnJvbSAnLi9Zb3V0dWJlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRpbiB9IGZyb20gJy4vTGlua2VkaW4nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VNZW51Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbWVudSc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCBTdGlja3lDdXJzb3IgZnJvbSAnLi4vU3RpY2t5Q3Vyc29yJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgTWVudUJ1dHRvbiA9ICh7IHN0aWNreSA9IHRydWUsIHRpdGxlID0gJycsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xyXG4gIGNvbnN0IFssIGRpc3BhdGNoXSA9IHVzZU1lbnVDb250ZXh0KCk7XHJcbiAgY29uc3QgeyBhZGRDdXJzb3JCb3JkZXIsIHJlbW92ZUN1cnNvckJvcmRlciB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25Ub2dnbGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdUT0dHTEVfTUVOVScgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RpY2t5Q3Vyc29yIHN0aWNreT17c3RpY2t5fT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17YWRkQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uVG9nZ2xlfVxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9TdGlja3lDdXJzb3I+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUmVhY3QuZm9yd2FyZFJlZihNZW51QnV0dG9uKSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01lbnVCdXR0b24nO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNjNweDtcbiAgcGFkZGluZzogMjBweDtcblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgJiBzcGFuIHtcbiAgICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiA4MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB9XG5cbiAgJjpob3ZlciBzcGFuIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICAmIHNwYW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHdpZHRoOiA2NnB4O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbiAgYH07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuXHJcbmNvbnN0IENUQVNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucmVkfTtcclxuICBwYWRkaW5nOiAxMDBweCAwcHggMTAwcHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDY2cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG4gICAgd2lkdGg6ODAlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuY29uc3QgQ1RBRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICB3aWR0aDo4MiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFCdXR0b24gPSBzdHlsZWQuYWBcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrUmVkfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICA8Q1RBSGVhZGluZz5VbmxvY2sgdGhlIHBvdGVudGlhbCBvZiBuZXhBUiBhbmQgQUkgaW4geW91ciBidXNpbmVzczwvQ1RBSGVhZGluZz5cclxuICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIENsaWNrIHRvIGV4cGxvcmUgb3VyIHRyYW5zZm9ybWF0aXZlIHNvbHV0aW9ucyBpbiBhdWdtZW50ZWQgcmVhbGl0eSwgd2ViIGRldmVsb3BtZW50LCBhbmQgc21hcnQgZGV0ZWN0aW9uIHRlY2hub2xvZ2llcy4gXHJcbiAgICAgICAgU3RhcnQgeW91ciBkaWdpdGFsIHJldm9sdXRpb24gbm93IVxyXG4gICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICA8Q1RBQnV0dG9uIGhyZWY9XCJ0ZWw6ODY2MDQ0OTk3MFwiPkNhbGwgdG8gQWN0aW9uPC9DVEFCdXR0b24+XHJcbiAgICA8L0NUQVNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcclxuXHJcbmNvbnN0IENUQVNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxyXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxuICBib3JkZXItcmFkaXVzOiA2NnB4O1xyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IC8qIFNwYWNlIHNlY3Rpb25zIGV2ZW5seSAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIHNlY3Rpb25zIHZlcnRpY2FsbHkgb24gbW9iaWxlICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgYWxpZ24gaXRlbXMgaW4gbW9iaWxlIHZpZXcgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxOyAvKiBNYWtlIGVhY2ggc2VjdGlvbiB0YWtlIGVxdWFsIHNwYWNlICovXHJcbiAgbWFyZ2luOiAwIDIwcHg7IC8qIEFkZCBzb21lIG1hcmdpbiBiZXR3ZWVuIHNlY3Rpb25zICovXHJcbiAgbWF4LXdpZHRoOiAzMDBweDsgLyogU2V0IGEgbWF4LXdpZHRoIGZvciBiZXR0ZXIgcmVzcG9uc2l2ZW5lc3MgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0ZXh0IGluIHNlY3Rpb25zICovXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7IC8qIEFkZCB2ZXJ0aWNhbCBtYXJnaW4gZm9yIG1vYmlsZSAqL1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7IC8qIEFsbG93IGZ1bGwgd2lkdGggb24gbW9iaWxlICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgR0lGSWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDE2MHB4OyAvKiBBZGp1c3Qgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodGx5IHNjYWxlIG9uIGhvdmVyICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ1RBSGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6IDZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDIwcHggMDsgLyogQWRqdXN0IG1hcmdpbiB0byBjcmVhdGUgc3BhY2luZyAqL1xyXG4gIGNvbG9yOiByZWQ7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q1RBU2VjdGlvbiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fT5cclxuICAgICAgPFNlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+bmV4QVI8L0NUQUhlYWRpbmc+XHJcbiAgICAgICAgICA8R0lGSWNvbiBzcmM9XCJpbnZlbnQucG5nXCIgYWx0PVwiUE5HIEljb24gMVwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ0ZWw6ODY2MDQ0OTk3MFwifSAvPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkx1bWluZXhhIFRlY2hub2xvZ2llcyBkZXZlbG9wZWQgaW1hZ2UgdHJhY2tpbmcgdmlydHVhbCBzb2Z0d2FyZSBiYXNlZCBvbiBBdWdtZW50ZWQgUmVhbGl0eSBhbmQgTWl4ZWQgUmVhbGl0eSwgbmFtZWQgaXQgbmV4QVIuPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPENUQUhlYWRpbmc+SG93PC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPEdJRkljb24gc3JjPVwiaG93aXQucG5nXCIgYWx0PVwiUE5HIEljb24gMlwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ0ZWw6ODY2MDQ0OTk3MFwifSAvPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8c3Ryb25nPm5leEFSIGlzIGEgV2ViQVIgc29sdXRpb24gdGhhdCBkaXNwbGF5cyBjb250ZW50IGxpa2UgM0QgbW9kZWxzLCBob2xvZ3JhcGhpYyBhdmF0YXJzLCB2aWRlb3MsIGltYWdlcywgYXVkaW8sIGFuZCBsaW5rcyB3aGVuIHRoZSBuZXhBUiBjYW1lcmEgaXMgcG9pbnRlZCBhdCBhIDJEIHN1cmZhY2UuPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPldvcmtzPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPEdJRkljb24gc3JjPVwid29ya2VkLnBuZ1wiIGFsdD1cIlBORyBJY29uIDNcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0gLz5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPHN0cm9uZz5uZXhBUiByZXF1aXJlcyBubyBhZGRpdGlvbmFsIGFwcCBpbnN0YWxsYXRpb25zIGFuZCB3b3JrcyBzZWFtbGVzc2x5IG9uIGFsbCBzbWFydHBob25lcywgd2hldGhlciBBbmRyb2lkIG9yIGlPUy48L3N0cm9uZz5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L1NlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICA8cCBzdHlsZT17e2NvbG9yOidibGFjaycsIG1hcmdpbjonMTlweCd9fT48c3Ryb25nPlwiRGlmZmVyZW50aWF0ZSB5b3Vyc2VsZiBmcm9tIGNvbXBldGl0aW9uIGFuZCBnbyB2aXJhbCFcIjwvc3Ryb25nPjwvcD5cclxuICAgIDwvQ1RBU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFRvQWN0aW9uO1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHsgSW5zdGFncmFtLCBGYWNlYm9vaywgWW91dHViZSwgVHdpdHRlciwgTGlua2VkaW4gfSBmcm9tICcuLi9JY29ucyc7XHJcbmltcG9ydCBTdGlja3lDdXJzb3IgZnJvbSAnLi4vU3RpY2t5Q3Vyc29yJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgbWVkaWFzID0gW1xyXG4gIHsgY29tcG9uZW50OiBJbnN0YWdyYW0sIHVybDogJ2luc3RhZ3JhbS5jb20vX2x1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogRmFjZWJvb2ssIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hcmx1bWluZXhhLycgfSxcclxuICB7IGNvbXBvbmVudDogWW91dHViZSwgdXJsOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScgfSxcclxuICB7IGNvbXBvbmVudDogVHdpdHRlciwgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9fbHVtaW5leGEnIH0sXHJcbiAgeyBjb21wb25lbnQ6IExpbmtlZGluLCB1cmw6ICdodHRwczovL2xpbmtlZGluLmNvbS9jb21wYW55L2x1bWluZXhhLXRlY2hub2xvZ3knIH0sXHJcbl07XHJcblxyXG5jb25zdCBTb2NpYWxNZWRpYSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB7Li4ucHJvcHN9PlxyXG4gICAgICB7bWVkaWFzLm1hcCgoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgdXJsIH0pID0+IChcclxuICAgICAgICA8U3RpY2t5Q3Vyc29yIGtleT17dXJsfT5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9TdGlja3lDdXJzb3I+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU29jaWFsTWVkaWEpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Tb2NpYWxNZWRpYSc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgLyogQ2hhbmdlZCBmcm9tIGZsZXgtc3RhcnQgdG8gZmxleC1lbmQgKi9cbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICAke3NlY29uZGFyeUZvbnRTdHlsZX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuIFxuXG4gICY6aG92ZXIgc3ZnIHBhdGgge1xuICAgIGZpbGw6IHJlZDtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcblxyXG5jb25zdCBTdGlja3lDdXJzb3IgPSAoeyBjaGlsZHJlbjogY2hpbGRyZW5Qcm9wLCBzdGlja3kgPSB0cnVlIH0pID0+IHtcclxuICBjb25zdCBjaGlsZFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCB7IGxvY2tDdXJzb3JQb3NpdGlvbiB9ID0gdXNlQ3Vyc29yU3R5bGUoKTtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW5Qcm9wLCBjaGlsZCA9PiB7XHJcbiAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IG9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlIH0gPSBjaGlsZC5wcm9wcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoIWNoaWxkUmVmLmN1cnJlbnQpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2hpbGRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIGNvbnN0IHggPSBwb3NpdGlvbi53aWR0aCAvIDIgKyBwb3NpdGlvbi5sZWZ0O1xyXG4gICAgICBjb25zdCB5ID0gcG9zaXRpb24uaGVpZ2h0IC8gMiArIHBvc2l0aW9uLnRvcDtcclxuICAgICAgbG9ja0N1cnNvclBvc2l0aW9uKHsgeCwgeSB9KTtcclxuXHJcbiAgICAgIGlmIChvbk1vdXNlRW50ZXIpIHtcclxuICAgICAgICBvbk1vdXNlRW50ZXIoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSBldmVudCA9PiB7XHJcbiAgICAgIGlmICghY2hpbGRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgbG9ja0N1cnNvclBvc2l0aW9uKG51bGwpO1xyXG5cclxuICAgICAgaWYgKG9uTW91c2VMZWF2ZSkge1xyXG4gICAgICAgIG9uTW91c2VMZWF2ZShldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVmID0gbm9kZSA9PiB7XHJcbiAgICAgIC8vIEtlZXAgeW91ciBvd24gcmVmZXJlbmNlXHJcbiAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBub2RlO1xyXG5cclxuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgcmVmLCBpZiBhbnlcclxuICAgICAgY29uc3QgeyByZWYgfSA9IGNoaWxkO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZWYobm9kZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgb25Nb3VzZUVudGVyOiBoYW5kbGVNb3VzZUVudGVyLFxyXG4gICAgICBvbk1vdXNlTGVhdmU6IGhhbmRsZU1vdXNlTGVhdmUsXHJcbiAgICAgIHJlZjogaGFuZGxlUmVmLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzdGlja3kgPyBjaGlsZHJlbiA6IGNoaWxkcmVuUHJvcDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU3RpY2t5Q3Vyc29yKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3RpY2t5Q3Vyc29yJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgY3Vyc29yU3R5bGU6IHtcclxuICAgIGJvcmRlcmVkOiBmYWxzZSxcclxuICAgIGNvbG9yOiBjb2xvcnMucmVkLFxyXG4gIH0sXHJcbiAgcG9zaXRpb246IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVVBEQVRFX0NVUlNPUl9TVFlMRSc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnQUREX0NVUlNPUl9CT1JERVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgYm9yZGVyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ1JFTU9WRV9DVVJTT1JfQk9SREVSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGJvcmRlcmVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnQUREX0NVUlNPUl9DT0xPUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBjb2xvcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ1JFU0VUX0NVUlNPUl9DT0xPUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBjb2xvcjogSU5JVElBTF9TVEFURS5jdXJzb3JTdHlsZS5jb2xvcixcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9DS19DVVJTT1JfUE9TSVRJT04nOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9zaXRpb246IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1cnNvckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3Vyc29yQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyb290UmVkdWNlciwgSU5JVElBTF9TVEFURSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IHN0YXRlLCBkaXNwYXRjaCB9KSwgW3N0YXRlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDdXJzb3JDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdG9yZX0+e2NoaWxkcmVufTwvQ3Vyc29yQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ3Vyc29yQ29udGV4dCA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gUmVhY3QudXNlQ29udGV4dChDdXJzb3JDb250ZXh0KTtcclxuICByZXR1cm4gW3N0YXRlLCBkaXNwYXRjaF07XHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGlzTWVudU9wZW46IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1RPR0dMRV9NRU5VJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTWVudU9wZW46ICFzdGF0ZS5pc01lbnVPcGVuLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBJTklUSUFMX1NUQVRFKTtcclxuICBjb25zdCBzdG9yZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHsgc3RhdGUsIGRpc3BhdGNoIH0pLCBbc3RhdGVdKTtcclxuICByZXR1cm4gPE1lbnVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdG9yZX0+e2NoaWxkcmVufTwvTWVudUNvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWVudUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IFJlYWN0LnVzZUNvbnRleHQoTWVudUNvbnRleHQpO1xyXG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ3Vyc29yQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY3Vyc29yJztcclxuXHJcbmNvbnN0IHVzZUN1cnNvclN0eWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ3Vyc29yQ29udGV4dCgpO1xyXG5cclxuICBjb25zdCBhZGRDdXJzb3JCb3JkZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ1VSU09SX0JPUkRFUicgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUN1cnNvckJvcmRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFTU9WRV9DVVJTT1JfQk9SREVSJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgYWRkQ3Vyc29yQ29sb3IgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChjb2xvcikgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ1VSU09SX0NPTE9SJywgcGF5bG9hZDogY29sb3IgfSk7XHJcbiAgICB9LFxyXG4gICAgW2Rpc3BhdGNoXSxcclxuICApO1xyXG5cclxuICBjb25zdCByZXNldEN1cnNvckNvbG9yID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVTRVRfQ1VSU09SX0NPTE9SJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgbG9ja0N1cnNvclBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9DS19DVVJTT1JfUE9TSVRJT04nLCBwYXlsb2FkOiBjb29yZGluYXRlcyB9KTtcclxuICAgIH0sXHJcbiAgICBbZGlzcGF0Y2hdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGFkZEN1cnNvckNvbG9yLFxyXG4gICAgcmVzZXRDdXJzb3JDb2xvcixcclxuICAgIGFkZEN1cnNvckJvcmRlcixcclxuICAgIHJlbW92ZUN1cnNvckJvcmRlcixcclxuICAgIGxvY2tDdXJzb3JQb3NpdGlvbixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ3Vyc29yU3R5bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBzZXRSZWYgPSAocmVmLCB2YWx1ZSkgPT4ge1xyXG4gIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZWYodmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAocmVmKSB7XHJcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHVzZUZvcmtSZWYgPSAocmVmQSwgcmVmQikgPT5cclxuICAvKipcclxuICAgKiBUaGlzIHdpbGwgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIHRoZSByZWYgcHJvcHMgY2hhbmdlIGFuZCBhcmUgZGVmaW5lZC5cclxuICAgKiBUaGlzIG1lYW5zIHJlYWN0IHdpbGwgY2FsbCB0aGUgb2xkIGZvcmtSZWYgd2l0aCBgbnVsbGAgYW5kIHRoZSBuZXcgZm9ya1JlZlxyXG4gICAqIHdpdGggdGhlIHJlZi4gQ2xlYW51cCBuYXR1cmFsbHkgZW1lcmdlcyBmcm9tIHRoaXMgYmVoYXZpb3IuXHJcbiAgICovXHJcbiAgUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVmQSA9PSBudWxsICYmIHJlZkIgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiAocmVmVmFsdWUpID0+IHtcclxuICAgICAgc2V0UmVmKHJlZkEsIHJlZlZhbHVlKTtcclxuICAgICAgc2V0UmVmKHJlZkIsIHJlZlZhbHVlKTtcclxuICAgIH07XHJcbiAgfSwgW3JlZkEsIHJlZkJdKTtcclxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ya1JlZjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgdXNlTWVkaWFRdWVyeSA9IChxdWVyeUlucHV0KSA9PiB7XHJcbiAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgbGV0IHF1ZXJ5ID0gdHlwZW9mIHF1ZXJ5SW5wdXQgPT09ICdmdW5jdGlvbicgPyBxdWVyeUlucHV0KHRoZW1lKSA6IHF1ZXJ5SW5wdXQ7XHJcbiAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9eQG1lZGlhKCA/KS9tLCAnJyk7XHJcblxyXG4gIGNvbnN0IGlzQ2xpZW50U2lkZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG4gIGNvbnN0IGRlZmF1bHRNYXRjaGVzID0gZmFsc2U7XHJcbiAgY29uc3QgbWF0Y2hNZWRpYSA9IGlzQ2xpZW50U2lkZSA/IHdpbmRvdy5tYXRjaE1lZGlhIDogbnVsbDtcclxuXHJcbiAgY29uc3QgW21hdGNoLCBzZXRNYXRjaF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBpZiAoaXNDbGllbnRTaWRlKSB7XHJcbiAgICAgIHJldHVybiBtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uY2UgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLCB3ZSByZWx5IG9uIHRoZVxyXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzIHRvIHJldHVybiB0aGUgY29ycmVjdCBtYXRjaGVzIHZhbHVlLlxyXG4gICAgcmV0dXJuIGRlZmF1bHRNYXRjaGVzO1xyXG4gIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0NsaWVudFNpZGUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBxdWVyeUxpc3QgPSBtYXRjaE1lZGlhKHF1ZXJ5KTtcclxuICAgIGNvbnN0IHVwZGF0ZU1hdGNoID0gKCkgPT4ge1xyXG4gICAgICBzZXRNYXRjaChxdWVyeUxpc3QubWF0Y2hlcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZU1hdGNoKCk7XHJcbiAgICBxdWVyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlTWF0Y2gpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHF1ZXJ5TGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVNYXRjaCk7XHJcbiAgICB9O1xyXG4gIH0sIFtxdWVyeSwgbWF0Y2hNZWRpYSwgaXNDbGllbnRTaWRlXSk7XHJcblxyXG4gIHJldHVybiBtYXRjaDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZU1lZGlhUXVlcnk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IHVzZVN0eWxlZFRoZW1lID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIHRoZW1lIHx8IHt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVkVGhlbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICAvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXG4gIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gb25seSBleGVjdXRlIGFsbCB0aGUgY29kZSBiZWxvdyBpbiBjbGllbnQgc2lkZVxuICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcbiAgICAgIHNldFdpbmRvd1NpemUoe1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcbiAgICAvLyByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxuICByZXR1cm4gd2luZG93U2l6ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpbmRvd1NpemU7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBjbGVhbnVwID0gUmVhY3QudXNlUmVmPCgpID0+IHZvaWQ+KClcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICAvLyBjbGVhbnVwIHByZXZpb3VzIGV2ZW50IGhhbmRsZXJzXG4gICAgICBpZiAoY2xlYW51cC5jdXJyZW50KSB7XG4gICAgICAgIGNsZWFudXAuY3VycmVudCgpXG4gICAgICAgIGNsZWFudXAuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAocCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBlbCAmJiBlbC50YWdOYW1lICYmIGlzTG9jYWxVUkwoaHJlZikpIHtcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgIGxvY2FsZTpcbiAgICAgICAgICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBsb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtwLCBjaGlsZFJlZiwgaHJlZiwgYXMsIHJvdXRlciwgbG9jYWxlXVxuICApXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IgPSAnU1NHIERhdGEgTk9UX0ZPVU5EJ1xuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSByZWxvYWRpbmcgaW4gZGV2ZWxvcG1lbnQgZnJvbSBmYWxsYmFjayByZXR1cm5pbmcgMjAwXG4gICAgICAgIC8vIHRvIG9uLWRlbWFuZC1lbnRyeS1oYW5kbGVyIGNhdXNpbmcgaXQgdG8gcmVsb2FkIHBlcmlvZGljYWxseVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgICAgIH0gPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcblxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoYXMsIHRoaXMubG9jYWxlcylcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHVybCA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uLCBvcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNzZzQwNCA9IGVyci5tZXNzYWdlID09PSBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1JcblxuICAgICAgaWYgKHNzZzQwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBtb2Q6IGFueVxuICAgICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzLCBtb2QgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgICAnLzQwNCdcbiAgICAgICAgICApKVxuXG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHRvbGVyYXRlIHRoZXNlIHByb3BzIG1pc3NpbmcgYW5kIHN0aWxsIHJlbmRlciB0aGVcbiAgICAgICAgICAvLyBwYWdlIGluc3RlYWQgb2YgZmFsbGluZyBiYWNrIHRvIF9lcnJvcj9cbiAgICAgICAgICBpZiAobW9kICYmIG1vZC5fX05fU1NHKSB7XG4gICAgICAgICAgICBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZignLzQwNCcsICcvNDA0JywgdHJ1ZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgLy8gbm9uLWZhdGFsIGZhbGxiYWNrIHRvIF9lcnJvclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgICBlcnJvcjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG4gICAgICAgIC5ub3JtYWxpemVMb2NhbGVQYXRoIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykubm9ybWFsaXplTG9jYWxlUGF0aFxuXG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCBvcHRpb25zLmxvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICAvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG4gIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpXG4gIGRlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGVcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFubmVyU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQmFubmVyJztcclxuaW1wb3J0IENvbnRlbnRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50JztcclxuaW1wb3J0IEZlYXR1cmVkU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWRQcm9qZWN0JztcclxuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9Gb290ZXInO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJhbm5lclNlY3Rpb24gLz5cclxuICAgICAgPENvbnRlbnRTZWN0aW9uIC8+XHJcbiAgICAgIDxGZWF0dXJlZFNlY3Rpb24gLz5cclxuICAgICAgPEFib3V0U2VjdGlvbiAvPlxyXG4gICAgICA8Q29udGFjdFNlY3Rpb24gLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIb21lKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB3aGl0ZTogJyNmZmYnLFxuICBibGFjazogJyMwMDAnLFxuICByZWQ6ICcjRUEyODFFJyxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcbiAgbWF4LXdpZHRoOiAxMjM0cHg7XG4gIHBhZGRpbmc6IDAgMzJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5Rm9udFN0eWxlID0gY3NzYFxuICBmb250LWZhbWlseTogcHJlc2ljYXYsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG5gO1xuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIFtcclxuICAgICdJbm5vdmF0aXZlIFByb2R1Y3RzJyxcclxuICAgIFtcclxuICAgICAgJ0FSIENhcmRzJyxcclxuICAgICAgJ0FSIEJ1c2luZXNzIENhcmRzJyxcclxuICAgICAgJ0FSIFdlZGRpbmcgQ2FyZHMnLFxyXG4gICAgICAnQVIgU3RpY2tlcnMnLFxyXG4gICAgICAnQVIgVC1TaGlydHMnLFxyXG4gICAgICAnQ3VzdG9tZSBBUiBCdWlsZCB3aXRoIERhc2hib2FyZCcsXHJcbiAgICBdLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgJ25leEFSIC0gQVIgJiBYUicsXHJcbiAgICBbXHJcbiAgICAgICdJbWFnZSBUcmFja2luZyBBUicsXHJcbiAgICAgICdNdWx0aSBJbWFnZSBUcmFja2luZycsXHJcbiAgICAgICdNdWx0aSBJbWFnZSBUYXJnZXQnLFxyXG4gICAgICAnVGFwIHRvIFBsYWNlIEFSIC8gWFIgYmFzZWQnLFxyXG4gICAgICAnTG9jYXRpb24gQmFzZWQgQVInLFxyXG4gICAgXSxcclxuICBdLFxyXG4gIFtcclxuICAgICduZXhOZXQgLSBDdXN0b21lIFdlYkQnLFxyXG4gICAgW1xyXG4gICAgICAnU2luZ2xlIFBhZ2UgV2Vic2l0ZScsXHJcbiAgICAgICdTdGF0aWMgV2Vic2l0ZXMnLFxyXG4gICAgICAnRHluYW1pYyBXZWJzaXRlcycsXHJcbiAgICAgICdSZXNwb25zaXZlIERlc2lnbiAtUmVhY3RKcycsXHJcbiAgICAgICdNb2JpbGUgQXBwIERldmVsb3BtZW50JyxcclxuICAgICAgJ0N1c3RvbWUgQXBsbGljYXRpb24gQnVpbGQnLFxyXG5cclxuICAgIF0sXHJcbiAgXSxcclxuICBbXHJcbiAgICAnbmV4dEFpIC0gT2JqZWN0IERldGVjdGlvbicsXHJcbiAgICBbXHJcbiAgICAgICcuLicsXHJcblxyXG4gICAgXSxcclxuICBdLFxyXG5dO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicm93c2Vyc2xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
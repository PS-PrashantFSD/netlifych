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
    color: Gray;
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
  color: White;

  &:hover:not([aria-expanded='true']) {
    color: white;

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
    background: white;
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
  color: Gray;

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
              color: '#302f2f'
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
  background-color: white;
  border-radius: 9px;

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
  background-color: #302f2f;
  color: white;
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

/***/ "./components/Lottie/nexar.json":
/*!**************************************!*\
  !*** ./components/Lottie/nexar.json ***!
  \**************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.7.1\",\"fr\":25,\"ip\":0,\"op\":200,\"w\":1000,\"h\":1000,\"nm\":\"Comp 5\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"men\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[492,72,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[1569.5,1214.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[51,51,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-18.958,-13.4],[-0.166,-10.581],[14.99,-0.235],[0.166,10.581]],\"o\":[[18.542,-15.186],[0.166,10.581],[-14.99,0.235],[-0.166,-10.581]],\"v\":[[4.055,-14.791],[31.05,-1.862],[4.209,17.722],[-23.233,-1.011]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.980392158031,0.980392158031,0.980392158031,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[13.91,0],[0,0],[2.3,13.23],[0,0],[-17.61,0],[0,0],[2.91,-16.74],[0,0]],\"o\":[[0,0],[-13.91,0],[0,0],[-2.91,-16.74],[0,0],[17.61,0],[0,0],[-2.3,13.23]],\"v\":[[172.63,147.195],[-172.63,147.195],[-200.72,124.285],[-242.35,-115.215],[-214.26,-147.195],[214.26,-147.195],[242.35,-115.215],[200.72,124.285]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.792156875134,0.792156875134,0.792156875134,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 3\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[13.91,0],[0,0],[2.3,13.72],[0,0],[-17.61,0],[0,0],[2.91,-17.37],[0,0]],\"o\":[[0,0],[-13.91,0],[0,0],[-2.91,-17.37],[0,0],[17.61,0],[0,0],[-2.3,13.72]],\"v\":[[172.63,147.195],[-172.63,147.195],[-200.72,123.425],[-242.35,-125.035],[-214.26,-158.215],[214.26,-158.215],[242.35,-125.035],[200.72,123.425]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.631372570992,0.631372570992,0.631372570992,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 2\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2050.029,2250.388],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = content('man 1').content('laptop').transform.position;\"},\"a\":{\"a\":0,\"k\":[-3.571,132.143],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"t\":0,\"s\":[100,100]},{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"t\":5,\"s\":[100,95]},{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"t\":9,\"s\":[100,100]},{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"t\":13,\"s\":[100,95]},{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"t\":17,\"s\":[100,100]},{\"t\":20,\"s\":[100,100]}],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut();\"},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":3,\"s\":[3]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":8,\"s\":[3]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":14,\"s\":[-3]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":17,\"s\":[-3]},{\"t\":20,\"s\":[0]}],\"ix\":6,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut();\"},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = content('man 1').content('laptop').transform.skew;\"},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"laptop\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[49.31,-40.74],[-38.6,8.93]],\"o\":[[-2.07,-0.36],[-49.32,40.73],[38.59,-8.92]],\"v\":[[-161.88,-5.455],[-434.18,-20.365],[-230.49,12.135]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-62.18,-6.43],[53.61,-16.8],[25.73,2.14]],\"o\":[[0,0],[62.18,6.43],[-53.6,16.81],[-25.73,-2.14]],\"v\":[[-112.57,4.455],[-3.22,-24.655],[58.96,12.135],[-76.12,28.945]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.05481857225,0.055687706143,0.141625393138,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2261.08,2368.785],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"feet\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-15.77,-15.12],[-20.38,2.19],[-17.08,-3.29],[-6.57,-17.09],[26.322,23.806],[20.523,0.028],[0.93,-3.095],[-2.666,32.383],[-1.97,32.87],[26.29,14.45],[11.18,-0.66],[29.28,-7.56],[-6.57,-21.03],[-2.762,-24.271],[-1.383,-8.101],[-70.213,-2.098],[5.875,1.053],[9.338,-7.806],[3.955,9.667]],\"o\":[[0,0],[20.37,-2.19],[17.09,3.29],[3.069,7.984],[-8.168,-7.387],[-2.492,-0.003],[-2.37,7.9],[4.725,-57.386],[1.97,-32.86],[-26.29,-14.46],[-11.17,0.65],[-29.29,7.57],[4.595,14.708],[1.187,10.432],[4.6,26.95],[10.528,0.315],[-10.227,-1.833],[-32.458,27.132],[-8.54,-20.9]],\"v\":[[-48.235,-40.11],[20.125,-39.02],[53.635,-67.06],[74.015,-4.62],[38.987,80.327],[-0.195,70.01],[2.264,117.68],[80.85,71.789],[97.675,-65.75],[58.895,-134.75],[-31.805,-153.81],[-79.075,-132.13],[-108.695,-67.06],[-95.616,1.493],[-85.749,63.598],[2.434,119.5],[-1.142,72.317],[-29.58,77.95],[-77.155,13.25]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[58.49,-17.75],[1.738,-29.556],[-38.837,13.488],[-21.828,16.418],[-31.96,-12.167],[1.336,12.981]],\"o\":[[-20.846,6.321],[-2.987,50.82],[-33.909,-33.931],[-17.23,-12.474],[22.128,8.424],[-4.6,-44.69]],\"v\":[[-27.855,-158.41],[-76.13,-96.955],[9.37,-8.309],[63.524,-11.575],[75.725,-31.411],[99.452,-100.483]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.03113230537,0.048407266654,0.244306571811,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 2\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-62.07],[48.2,0],[0,62.07],[-48.2,0]],\"o\":[[0,62.07],[-48.2,0],[0,-62.07],[48.2,0]],\"v\":[[87.275,0],[-0.005,112.38],[-87.275,0],[-0.005,-112.38]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[-9.65,-15.49],[7.36,-7.6],[9.65,15.49],[-7.36,7.6]],\"o\":[[9.64,15.5],[-7.36,7.61],[-9.64,-15.49],[7.36,-7.6]],\"v\":[[-87.245,-17.12],[-83.115,24.69],[-113.905,10.41],[-118.035,-31.4]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[8.34,-17.02],[8.37,5.38],[-8.34,17.02],[-8.37,-5.38]],\"o\":[[-8.34,17.03],[-8.36,-5.38],[8.34,-17.03],[8.37,5.38]],\"v\":[[109.095,1.09],[78.845,22.18],[78.795,-18.38],[109.045,-39.47]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.965632479799,0.528734932694,0.216422092213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2050.735,1733.971],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,122.321],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.28],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.28],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":9,\"s\":[-4.928]},{\"i\":{\"x\":[0.28],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":15,\"s\":[-4.928]},{\"i\":{\"x\":[0.28],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":26,\"s\":[5.005]},{\"i\":{\"x\":[0.28],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":32,\"s\":[5.005]},{\"i\":{\"x\":[0.28],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":40,\"s\":[0]},{\"t\":50,\"s\":[0]}],\"ix\":6,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut();\"},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"face\",\"np\":7,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[27.91,0],[0,-27.91],[0,0],[-42.61,33.01],[0,0]],\"o\":[[-27.91,0],[0,0],[29.92,25],[0,0],[0,-27.91]],\"v\":[[0,-107.71],[-50.75,-56.96],[-50.75,82.71],[50.75,61.6],[50.75,-56.96]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.912428253772,0.419901200837,0.109323823218,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[27.91,0],[0,27.91],[0,0],[-27.91,0],[0,-27.91],[0,0]],\"o\":[[-27.91,0],[0,0],[0,-27.91],[27.91,0],[0,0],[0,27.91]],\"v\":[[0,164.6],[-50.75,113.85],[-50.75,-56.96],[0,-107.71],[50.75,-56.96],[50.75,113.85]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.965632479799,0.528734932694,0.216422092213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 2\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2048.45,1662.8],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"nake\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.154,-19.769],[87.175,-16.072]],\"o\":[[0.26,33.281],[-241.629,44.546]],\"v\":[[306.77,87.135],[70.731,165.581]],\"c\":false},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.266666680574,0.384313762188,0.760784387589,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":102,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2368.497,2075.259],\"ix\":2},\"a\":{\"a\":0,\"k\":[306.027,87.054],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[17]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":3,\"s\":[-1]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":6,\"s\":[17]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":10,\"s\":[17]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":14,\"s\":[-5]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":16,\"s\":[17]},{\"t\":20,\"s\":[17]}],\"ix\":6,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut();\"},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"hand 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.161,-19.769],[-91.072,-16.072]],\"o\":[[-0.271,33.281],[252.429,44.546]],\"v\":[[-344.917,92.492],[-98.327,170.938]],\"c\":false},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.265528619289,0.384543567896,0.760784327984,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":102,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[1716.934,2081.062],\"ix\":2},\"a\":{\"a\":0,\"k\":[-345.536,92.857],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[-19]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":6,\"s\":[-19]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[-2]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":14,\"s\":[-7.667]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":16,\"s\":[1.667]},{\"t\":20,\"s\":[-19]}],\"ix\":6,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut();\"},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"hand 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[2.59,-38.59],[-116.93,-40.74],[0,0],[40.74,64.32],[0,0]],\"o\":[[-13.59,2.14],[-2.59,38.59],[116.92,40.74],[0,0],[-40.74,-64.33],[0,0]],\"v\":[[-51.18,-283.025],[-278.57,-150.155],[-103.78,242.285],[143.94,242.285],[240.42,-160.805],[15.29,-283.025]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.361707031727,0.483058959246,0.878431379795,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2062.47,1988.205],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"body\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.161,-19.769]],\"o\":[[0,0],[-0.271,33.281]],\"v\":[[-234.042,-123.705],[-344.917,92.492]],\"c\":false},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.154,-19.769]],\"o\":[[0,0],[0.26,33.281]],\"v\":[[200.638,-129.063],[306.77,87.135]],\"c\":false},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.314986526966,0.43349608779,0.819607853889,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":102,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2062.47,1988.205],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"hand\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[144.94,-137.23],[-262.8,34.62],[-32.4,0.77],[158.1,113.33],[75.04,-40.74]],\"o\":[[0,0],[-115.73,109.57],[184.98,-24.36],[241.11,-18.47],[-215.37,-154.38],[-75.05,40.73]],\"v\":[[-32.97,53.8],[-520.55,-46.96],[-168.05,156.72],[70.3,166.98],[478.18,-36.96],[42.08,13.07]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.066772431018,0.064827518837,0.202581891827,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2087.14,2210.99],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"leg\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[-489.286,124],\"to\":[0,0],\"ti\":[0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":25,\"s\":[-489.286,165],\"to\":[0,0],\"ti\":[0,0]},{\"t\":50,\"s\":[-489.286,124]}],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut();\"},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = content('man 1').transform.scale;\"},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"man 1\",\"np\":9,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[58.19,0],[116.77,9.96],[120.35,0],[50.3,-3.61],[60.88,0],[-436.631,22.68],[-310.57,0],[-8.3,-0.02],[443.02,-28]],\"o\":[[-140.26,0],[-116.78,-9.97],[-46.89,0],[-61.24,4.41],[-298.972,0],[511,-26.53],[8.85,0],[347.3,0.87],[-65.53,4.14]],\"v\":[[452.18,68.28],[73.38,48.35],[-275.519,28.41],[-420.919,33.54],[-606.62,39.86],[-702.16,-28.87],[765.75,-68.28],[791.49,-68.25],[637.271,62.42]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.697577834129,0.80613809824,0.941176474094,1],\"ix\":4},\"o\":{\"a\":0,\"k\":50,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[1556.274,2610.72],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":0,\"s\":[60,100]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"t\":25,\"s\":[57,100]},{\"t\":50,\"s\":[60,100]}],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut();\"},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[49.343]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":25,\"s\":[100]},{\"t\":50,\"s\":[49.343]}],\"ix\":7,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut();\"},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"bg\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":200,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[480,552,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[91,91.91,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[-194.546,54.872],[46,-283],[202.136,0],[53.627,210.319]],\"o\":[[234,-66],[-34.823,214.236],[-202.136,0],[-64,-251]],\"v\":[[-58,-395],[382,-4],[-28,403],[-382,2]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[{\"i\":[[-201.9,9.769],[46,-283],[198.441,-38.473],[-30.055,214.957]],\"o\":[[248,-12],[-34.823,214.236],[-196,38],[46,-329]],\"v\":[[-86,-411],[416,26],[-28,369],[-384,26]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":99,\"s\":[{\"i\":[[-189.571,70.156],[-42,-269],[198.441,-38.473],[0,217.048]],\"o\":[[254,-94],[50.213,321.602],[-196,38],[0,-265]],\"v\":[[-86,-411],[416,26],[-74,309],[-430,-32]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":150,\"s\":[{\"i\":[[-263.72,24.16],[16.66,-322.3],[194.54,24.06],[76.48,256.34]],\"o\":[[263.72,-24.16],[-16.66,322.3],[-198.486,-24.548],[-76.48,-256.34]],\"v\":[[-47.72,-384.84],[380.66,62.7],[-56.54,346.94],[-379.52,15.34]],\"c\":true}]},{\"t\":199,\"s\":[{\"i\":[[-194.546,54.872],[46,-283],[202.136,0],[53.627,210.319]],\"o\":[[234,-66],[-34.823,214.236],[-202.136,0],[-64,-251]],\"v\":[[-58,-395],[382,-4],[-28,403],[-382,2]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2,-19],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 3\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gf\",\"o\":{\"a\":0,\"k\":20,\"ix\":10},\"r\":1,\"bm\":0,\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0,0.324,0.557,0.984,0.499,0.593,0.629,0.978,0.998,0.861,0.702,0.973],\"ix\":9}},\"s\":{\"a\":0,\"k\":[-294,54],\"ix\":5},\"e\":{\"a\":0,\"k\":[276,-48],\"ix\":6},\"t\":1,\"nm\":\"Gradient Fill 2\",\"mn\":\"ADBE Vector Graphic - G-Fill\",\"hd\":false}],\"ip\":0,\"op\":200,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[480,552,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[91,91.91,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[-194.546,54.872],[46,-283],[202.136,0],[53.627,210.319]],\"o\":[[234,-66],[-34.823,214.236],[-202.136,0],[-64,-251]],\"v\":[[-58,-395],[382,-4],[-28,403],[-382,2]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[{\"i\":[[-201.9,9.769],[46,-283],[198.441,-38.473],[-30.055,214.957]],\"o\":[[248,-12],[-34.823,214.236],[-196,38],[46,-329]],\"v\":[[-86,-411],[416,26],[-28,369],[-384,26]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":99,\"s\":[{\"i\":[[-189.571,70.156],[-42,-269],[198.441,-38.473],[0,217.048]],\"o\":[[254,-94],[50.213,321.602],[-196,38],[0,-265]],\"v\":[[-86,-411],[416,26],[-74,309],[-430,-32]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":150,\"s\":[{\"i\":[[-263.72,24.16],[16.66,-322.3],[194.54,24.06],[76.48,256.34]],\"o\":[[263.72,-24.16],[-16.66,322.3],[-198.486,-24.548],[-76.48,-256.34]],\"v\":[[-47.72,-384.84],[380.66,62.7],[-56.54,346.94],[-379.52,15.34]],\"c\":true}]},{\"t\":199,\"s\":[{\"i\":[[-194.546,54.872],[46,-283],[202.136,0],[53.627,210.319]],\"o\":[[234,-66],[-34.823,214.236],[-202.136,0],[-64,-251]],\"v\":[[-58,-395],[382,-4],[-28,403],[-382,2]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2,-75],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[112,112],\"ix\":3},\"r\":{\"a\":0,\"k\":-174,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 2\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gf\",\"o\":{\"a\":0,\"k\":20,\"ix\":10},\"r\":1,\"bm\":0,\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0,0.545,0.95,0.965,0.5,0.455,0.885,0.925,1,0.365,0.819,0.886],\"ix\":9}},\"s\":{\"a\":0,\"k\":[-294,54],\"ix\":5},\"e\":{\"a\":0,\"k\":[276,-48],\"ix\":6},\"t\":1,\"nm\":\"Gradient Fill 1\",\"mn\":\"ADBE Vector Graphic - G-Fill\",\"hd\":false}],\"ip\":0,\"op\":200,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./components/Lottie/work.json":
/*!*************************************!*\
  !*** ./components/Lottie/work.json ***!
  \*************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, __complete, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.10\",\"fr\":30,\"ip\":0,\"op\":181,\"w\":1000,\"h\":1000,\"nm\":\"Mobile Marketing\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Heart Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[426.199,113.577,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[23.642,20.648,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":100,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":110,\"s\":[125,125,100]},{\"t\":115,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[21.594,-13.284999999999998],[2.164,-18.25],[-1.726,-12.198],[-2.069,-12.419],[-15.581000000000001,-14.889],[-21.771,4.378],[2.351,19.305],[6.471,19.892],[19.623,0.424]],\"o\":[[9.762,-20.398999999999997],[-1.505,-12.542],[-1.726,-12.198],[-7.776,-16.088],[-23.392000000000003,-3.505],[-15.908,8.148],[4.139,20.398],[7.644,18.156],[23.392000000000003,-5.439]],\"v\":[[15.577,-16.903],[-1.505,-12.542],[-1.726,-12.198],[-2.069,-12.419],[-19.42,-9.295],[-15.908,8.148],[2.351,19.305],[7.644,18.156],[19.623,0.424]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[23.642,20.649],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":100,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Heart Bubble Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[436.218,158.677,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[51.171,86.844,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":90,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":100,\"s\":[125,125,100]},{\"t\":105,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[15.78,-9.295],[2.809,9.295],[-15.78,-3.676]],\"o\":[[15.78,-9.295],[2.809,9.295],[-15.78,-3.676]],\"v\":[[15.78,-9.295],[2.809,9.295],[-15.78,-3.676]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[49.124,80.144],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[40.902,27.415],[-24.224,41.573],[-27.415,40.903],[-41.572,-24.224],[-40.902,-27.416],[24.224,-41.572],[27.416,-40.903],[41.572,24.224]],\"o\":[[39.296,27.764],[-25.830000000000002,41.922],[-27.765,39.297],[-41.921,-25.830000000000002],[-39.296,-27.765],[25.830000000000002,-41.922000000000004],[27.765,-39.297],[41.921,25.830000000000002]],\"v\":[[39.296,27.764],[-24.224,41.573],[-27.765,39.297],[-41.572,-24.224],[-39.296,-27.765],[24.224,-41.572],[27.765,-39.297],[41.572,24.224]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[42.171,42.172],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":90,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Speaker Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[196.749,654.678,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[98.348,257.135,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":65,\"s\":[125,125,100]},{\"t\":70,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-38.338,-20.232],[-38.051,-19.774],[-28.189,-11.369],[-24.275000000000002,-10.218],[5.441,37.085],[6.499,38.845],[8.389,41.983],[11.802,44.345000000000006],[35.973,29.805],[38.338,26.392],[34.318,19.715],[30.822,17.404000000000003],[19.773,5.795],[-0.14600000000000035,-27.316],[1.292,-40.124],[2.446,-43.015]],\"o\":[[-38.174,-20.022],[-37.84,-19.593],[-26.627,-10.042],[-22.914,-11.751],[5.441,37.085],[6.499,38.845],[9.460999999999999,43.766999999999996],[13.581,43.276],[37.751,28.733],[37.268,24.612],[33.248999999999995,17.932],[29.124,18.42],[11.736999999999998,-7.563],[-4.065,-33.836],[2.327,-41.336000000000006],[1.749,-44.344]],\"v\":[[-38.338,-20.232],[-37.84,-19.593],[-28.189,-11.369],[-22.914,-11.751],[5.441,37.085],[6.499,38.845],[8.389,41.983],[13.581,43.276],[35.973,29.805],[37.268,24.612],[34.318,19.715],[29.124,18.42],[16.217,-0.122],[-4.065,-33.836],[1.292,-40.124],[1.749,-44.344]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[88.668,221.675],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-27.992000000000004,-12.652000000000005],[-44.291,75.849],[59.67700000000001,51.296],[-1.122,-75.849]],\"o\":[[-76.539,22.246],[9.723000000000006,48.768],[76.539,53.247],[-7.26,-59.221000000000004]],\"v\":[[-76.539,22.246],[-44.291,75.849],[76.539,53.247],[-1.122,-75.849]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[138.707,91.306],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-10.046,-27.427],[-20.788,-5.119000000000001],[-10.495,11.983],[9.142,27.427]],\"o\":[[-18.68,-18.82],[-14.24,5.761],[-3.951999999999999,22.864],[20.788,23.829]],\"v\":[[-10.046,-27.427],[-14.24,5.761],[-10.495,11.983],[20.788,23.829]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[21.037,173.568],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[44.902,17.272],[-0.578,44.629],[-8.831,45.612],[-42.753,-10.778],[-43.738,-19.026],[-1.176,-44.631],[7.072,-45.614]],\"o\":[[44.902,17.272],[-4.149,46.778],[-10.977,42.042],[-44.902,-14.350000000000001],[-40.166,-21.173],[2.3950000000000005,-46.778],[9.221,-42.043]],\"v\":[[44.902,17.272],[-0.578,44.629],[-10.977,42.042],[-42.753,-10.778],[-40.166,-21.173],[-1.176,-44.631],[9.221,-42.043]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[52.946,155.589],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 4\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[47.46,63.447],[48.275999999999996,70.32199999999999],[42.476,73.809],[35.604,74.627],[-47.459,-63.444],[-48.277,-70.31700000000001],[-42.476,-73.806],[-35.601,-74.62299999999999]],\"o\":[[49.244,66.418],[45.299,72.109],[39.501999999999995,75.595],[33.815,71.655],[-49.244,-66.416],[-45.304,-72.108],[-39.504999999999995,-75.595],[-33.814,-71.651]],\"v\":[[47.46,63.447],[45.299,72.109],[42.476,73.809],[33.815,71.655],[-47.459,-63.444],[-45.304,-72.108],[-42.476,-73.806],[-33.814,-71.651]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[183.201,75.845],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 5\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.934,-7.261],[5.934,2.865],[2.825,7.261]],\"o\":[[-5.934,-7.261],[5.934,2.865],[2.825,7.261]],\"v\":[[-5.934,-7.261],[5.934,2.865],[2.825,7.261]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.69,0.69,0.69,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[90.538,195.099],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":55,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Sound Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[261.325,500.683,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[3.195,116.841,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":65,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":75,\"s\":[125,125,100]},{\"t\":80,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[21.059,1.244],[-18.675,5.012],[-22.025000000000002,3.879],[-22.193,2.102],[-21.058999999999997,-1.247],[18.676,-5.013],[22.025000000000002,-3.879]],\"o\":[[19.285,1.412],[-20.45,5.180999999999999],[-22.193,2.104],[-22.361,0.32799999999999985],[-19.284,-1.415],[20.450999999999997,-5.181],[22.361,-0.33000000000000007]],\"v\":[[19.285,1.412],[-18.675,5.012],[-22.193,2.104],[-22.193,2.102],[-19.284,-1.415],[18.676,-5.013],[22.193,-2.104]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[98.147,101.57],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[20.775000000000002,-3.661],[-17.007,9.199],[-20.53,8.871],[-21.104,7.182],[-20.775000000000002,3.661],[17.008,-9.199],[20.529999999999998,-8.871]],\"o\":[[19.088,-3.087],[-18.695,9.773],[-21.103,7.183],[-21.678,5.495],[-19.088,3.087],[18.695999999999998,-9.774],[21.678,-5.495]],\"v\":[[19.088,-3.087],[-17.007,9.199],[-21.103,7.183],[-21.104,7.182],[-19.088,3.087],[17.008,-9.199],[21.104,-7.182]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[89.923,71.667],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.991,-12.504],[-11.155,15.794],[-14.456000000000001,17.064],[-16.991,12.505],[11.154,-15.794],[14.456000000000001,-17.064],[15.72,-15.806]],\"o\":[[15.733,-11.24],[-12.413,17.058],[-16.984,14.549],[-15.733,11.24],[12.411,-17.059],[15.72,-15.807],[16.984,-14.549]],\"v\":[[15.733,-11.24],[-11.155,15.794],[-15.72,15.806],[-15.733,11.24],[11.154,-15.794],[15.72,-15.807],[15.72,-15.806]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.368,43.715],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[10.816,-18.112],[-4.16,18.883],[-6.712,21.333000000000002],[-10.816,18.113],[4.16,-18.882],[6.712999999999999,-21.333000000000002]],\"o\":[[10.147,-16.459],[-4.829000000000001,20.535999999999998],[-10.017999999999999,19.995],[-10.146,16.46],[4.829000000000001,-20.535],[10.019,-19.994]],\"v\":[[10.147,-16.459],[-4.16,18.883],[-8.366,20.664],[-10.146,16.46],[4.16,-18.882],[8.366,-20.663]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[46.325,21.583],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 4\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[21.813000000000002,-21.278],[21.279,21.812],[-21.812,21.278],[-21.278,-21.813000000000002]],\"o\":[[29.626,7.129999999999999],[-7.130000000000001,29.625],[-29.625,-7.131],[7.132,-29.626]],\"v\":[[25.719,-7.073],[7.074,25.718],[-25.718,7.074],[-7.074,-25.719]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[29.875,90.16],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 5\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":65,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Bubble  3 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[726.299,298.791,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[7.196,7.196,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":95,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":105,\"s\":[125,125,100]},{\"t\":110,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[6.947,-3.836],[3.836,6.946],[-6.947,3.836],[-3.837,-6.946]],\"o\":[[6.947,3.836],[-3.837,6.946],[-6.947,-3.836],[3.836,-6.946]],\"v\":[[6.947,0],[0,6.946],[-6.947,0],[0,-6.946]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[7.197,7.196],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":95,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Bubble  2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[691.67,298.791,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[7.197,7.196,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":90,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":100,\"s\":[125,125,100]},{\"t\":105,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[6.947,-3.836],[3.836,6.946],[-6.947,3.836],[-3.837,-6.946]],\"o\":[[6.947,3.836],[-3.837,6.946],[-6.947,-3.836],[3.836,-6.946]],\"v\":[[6.947,0],[0,6.946],[-6.947,0],[0,-6.946]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[7.197,7.196],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":90,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Bubble 1 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[657.041,298.791,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[7.197,7.196,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":85,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":95,\"s\":[125,125,100]},{\"t\":100,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[6.947,-3.836],[3.836,6.946],[-6.947,3.836],[-3.837,-6.946]],\"o\":[[6.947,3.836],[-3.837,6.946],[-6.947,-3.836],[3.836,-6.946]],\"v\":[[6.947,0],[0,6.946],[-6.947,0],[0,-6.946]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[7.197,7.196],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":85,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Speech Bubble Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[648.082,369.106,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[42.327,110.428,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":75,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":85,\"s\":[125,125,100]},{\"t\":90,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-86.077,-46.063],[-86.077,3.253],[-75.962,25.846],[-45.556,25.846],[-45.556,56.178],[-12.401,25.846],[45.066,25.846],[86.077,7.483999999999998],[86.077,-15.167],[67.71600000000001,-56.178],[-63.484,-56.178]],\"o\":[[-86.077,-33.585],[-86.077,15.73],[-63.484,25.846],[-45.556,25.846],[-45.556,56.178],[-12.401,25.846],[67.71600000000001,25.846],[86.077,-15.166],[86.077,-37.816],[45.066,-56.178],[-75.962,-56.178]],\"v\":[[-86.077,-33.585],[-86.077,3.253],[-63.484,25.846],[-45.556,25.846],[-45.556,56.178],[-12.401,25.846],[45.066,25.846],[86.077,-15.166],[86.077,-15.167],[45.066,-56.178],[-63.484,-56.178]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[86.327,56.428],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":75,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Gear  6 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":120,\"s\":[0]},{\"t\":200,\"s\":[-360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[202.091,293.233,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[58.736,57.648,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":120,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":130,\"s\":[125,125,100]},{\"t\":135,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-27.966,-10.636],[10.651,-27.972],[27.975,10.700999999999999],[-10.652,28.023]],\"o\":[[-5.878,-29.299],[29.341,-5.809000000000001],[5.888999999999999,29.397999999999996],[-29.378,5.906999999999998]],\"v\":[[-16.91,-19.97],[20.023,-16.884],[16.91,20.022],[-19.99,16.976]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-58.485,-1.5309999999999997],[-58.254000000000005,5.254],[-46.436,9.567],[-42.719,20.587],[-50.594,29.279],[-45.615,36.846],[-31.943,35.058],[-22.449,41.778],[-23.708,53.456],[-15.556000000000001,56.556000000000004],[-5.548,47.091],[6.089,47.037],[11.872,57.27],[20.663,54.899],[23.215,41.354],[32.59,34.456],[43.273,39.309],[48.943,32.300000000000004],[43.098,19.784],[46.609,8.701],[58.104,6.337],[58.485,1.6789999999999998],[58.261,-5.051],[46.467,-9.338],[42.788,-20.369],[50.715,-29.04],[45.739000000000004,-36.648],[32.047,-34.903],[22.572,-41.65],[23.881,-53.33],[15.48,-56.541000000000004],[5.368,-47.066],[-6.268,-46.963],[-12.072,-57.182],[-20.854,-54.768],[-23.37,-41.22],[-32.714,-34.283],[-43.41,-39.105],[-49.074,-32.065999999999995],[-43.163,-19.587],[-46.633,-8.47],[-58.139,-6.087]],\"o\":[[-58.428,3.0290000000000004],[-57.968,7.433],[-46.436,9.567],[-42.719,20.587],[-48.329,33.214],[-42.531,40.126],[-31.943,35.058],[-22.449,41.778],[-19.752,55.213],[-11.193,57.398],[-5.548,47.091],[6.089,47.037],[16.362000000000002,56.336000000000006],[24.71,53.004],[23.215,41.354],[32.59,34.456],[46.294000000000004,35.980999999999995],[51.137,28.318],[43.098,19.784],[46.609,8.701],[58.353,4.034],[58.417,-2.9050000000000002],[58.005,-7.17],[46.467,-9.338],[42.788,-20.369],[48.442,-32.976],[42.654,-39.938],[32.047,-34.903],[22.572,-41.65],[19.797,-55.149],[10.982,-57.398],[5.368,-47.066],[-6.268,-46.963],[-16.558,-56.227000000000004],[-24.898,-52.864],[-23.37,-41.22],[-32.714,-34.283],[-46.431,-35.753],[-51.251,-28.089],[-43.163,-19.587],[-46.633,-8.47],[-58.366,-3.824]],\"v\":[[-58.449,0.781],[-57.968,7.433],[-46.436,9.567],[-42.719,20.587],[-50.594,29.279],[-42.531,40.126],[-31.943,35.058],[-22.449,41.778],[-23.708,53.456],[-11.193,57.398],[-5.548,47.091],[6.089,47.037],[11.872,57.27],[24.71,53.004],[23.215,41.354],[32.59,34.456],[43.273,39.309],[51.137,28.318],[43.098,19.784],[46.609,8.701],[58.104,6.337],[58.457,-0.717],[58.005,-7.17],[46.467,-9.338],[42.788,-20.369],[50.715,-29.04],[42.654,-39.938],[32.047,-34.903],[22.572,-41.65],[23.881,-53.33],[10.982,-57.398],[5.368,-47.066],[-6.268,-46.963],[-12.072,-57.182],[-24.898,-52.864],[-23.37,-41.22],[-32.714,-34.283],[-43.41,-39.105],[-51.251,-28.089],[-43.163,-19.587],[-46.633,-8.47],[-58.139,-6.087]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[58.735,57.648],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":120,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"Gear  5 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":130,\"s\":[0]},{\"t\":210,\"s\":[360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[338.94,908.395,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[17.257,16.965,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":130,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":140,\"s\":[125,125,100]},{\"t\":145,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-8.065,-3.2780000000000005],[3.271,-8.081],[8.071,3.2720000000000002],[-3.2689999999999997,8.071]],\"o\":[[-1.5259999999999998,-8.569],[8.57,-1.521],[1.5330000000000004,8.573],[-8.578,1.524]],\"v\":[[-4.792,-5.924],[5.928,-4.798],[4.796,5.915],[-5.917,4.801]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-16.996,-0.8190000000000001],[-16.971,1.156],[-13.56,2.483],[-12.548,5.711],[-14.892,8.189],[-13.49,10.421000000000001],[-9.504,9.984],[-6.784,11.998],[-7.223,15.387],[-4.871,16.338],[-1.902,13.646],[1.482,13.704],[3.1,16.715],[5.671,16.080000000000002],[6.497,12.157],[9.267,10.209],[12.344,11.686],[14.035,9.681000000000001],[12.413,6.008],[13.501,2.805],[16.859,2.189],[16.999,0.838],[16.976,-1.1219999999999999],[13.573,-2.441],[12.57,-5.671],[14.928,-8.145],[13.529,-10.388],[9.536,-9.964],[6.824,-11.986],[7.276,-15.374],[4.852,-16.36],[1.854,-13.667],[-1.531,-13.708],[-3.155,-16.715],[-5.7250000000000005,-16.069],[-6.539,-12.145],[-9.299,-10.184],[-12.38,-11.654],[-14.07,-9.64],[-12.43,-5.975],[-13.507,-2.764],[-16.867,-2.143]],\"o\":[[-17.007,0.508],[-16.901,1.791],[-13.56,2.483],[-12.548,5.711],[-14.257,9.347],[-12.613,11.393],[-9.504,9.984],[-6.784,11.998],[-6.084,15.922],[-3.607,16.61],[-1.902,13.646],[1.482,13.704],[4.411,16.471],[6.859,15.554],[6.497,12.157],[9.267,10.209],[13.241999999999999,10.737],[14.698,8.538],[12.413,6.008],[13.501,2.805],[16.945,1.521],[17.006999999999998,-0.496],[16.915,-1.74],[13.573,-2.441],[12.57,-5.671],[14.291,-9.304],[12.652,-11.363],[9.536,-9.964],[6.824,-11.986],[6.1,-15.928],[3.549,-16.637],[1.854,-13.667],[-1.531,-13.708],[-4.465999999999999,-16.465],[-6.913,-15.54],[-6.539,-12.145],[-9.299,-10.184],[-13.279,-10.697],[-14.728,-8.497],[-12.43,-5.975],[-13.507,-2.764],[-16.947,-1.4859999999999998]],\"v\":[[-17,-0.146],[-16.901,1.791],[-13.56,2.483],[-12.548,5.711],[-14.892,8.189],[-12.613,11.393],[-9.504,9.984],[-6.784,11.998],[-7.223,15.387],[-3.607,16.61],[-1.902,13.646],[1.482,13.704],[3.1,16.715],[6.859,15.554],[6.497,12.157],[9.267,10.209],[12.344,11.686],[14.698,8.538],[12.413,6.008],[13.501,2.805],[16.859,2.189],[17.005,0.14],[16.915,-1.74],[13.573,-2.441],[12.57,-5.671],[14.928,-8.145],[12.652,-11.363],[9.536,-9.964],[6.824,-11.986],[7.276,-15.374],[3.549,-16.637],[1.854,-13.667],[-1.531,-13.708],[-3.155,-16.715],[-6.913,-15.54],[-6.539,-12.145],[-9.299,-10.184],[-12.38,-11.654],[-14.728,-8.497],[-12.43,-5.975],[-13.507,-2.764],[-16.867,-2.143]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[17.257,16.966],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":130,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"Gear 4 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":140,\"s\":[0]},{\"t\":220,\"s\":[360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[687.497,156.33,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[17.257,16.965,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":140,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":150,\"s\":[125,125,100]},{\"t\":155,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-8.064,-3.2780000000000005],[3.272,-8.081],[8.07,3.272],[-3.2690000000000006,8.072]],\"o\":[[-1.5259999999999998,-8.569],[8.57,-1.5210000000000004],[1.532,8.573],[-8.578,1.5249999999999995]],\"v\":[[-4.792,-5.924],[5.93,-4.799],[4.795,5.914],[-5.916,4.802]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-16.997,-0.8190000000000001],[-16.972,1.1560000000000001],[-13.562,2.484],[-12.549,5.711],[-14.893,8.19],[-13.491000000000001,10.42],[-9.504,9.986],[-6.784,11.999],[-7.223,15.387],[-4.871,16.338],[-1.903,13.648],[1.482,13.703],[3.1,16.716],[5.671,16.080000000000002],[6.496,12.158],[9.266,10.21],[12.344,11.687],[14.035,9.683],[12.412,6.008],[13.501,2.805],[16.859,2.19],[16.999,0.838],[16.976000000000003,-1.121],[13.573,-2.44],[12.57,-5.672],[14.93,-8.143],[13.529,-10.386],[9.536,-9.964],[6.823,-11.984],[7.276,-15.373],[4.853,-16.358],[1.854,-13.665],[-1.531,-13.708],[-3.156,-16.716],[-5.723999999999999,-16.068],[-6.539,-12.143],[-9.299,-10.183],[-12.38,-11.652],[-14.071,-9.64],[-12.43,-5.974],[-13.507,-2.763],[-16.867,-2.141]],\"o\":[[-17.008,0.507],[-16.901,1.792],[-13.562,2.484],[-12.549,5.711],[-14.258000000000001,9.347999999999999],[-12.614,11.393],[-9.504,9.986],[-6.784,11.999],[-6.083,15.922],[-3.607,16.609],[-1.903,13.648],[1.482,13.703],[4.411,16.472],[6.859,15.554],[6.496,12.158],[9.266,10.21],[13.241999999999999,10.738],[14.698,8.539],[12.412,6.008],[13.501,2.805],[16.945,1.5219999999999998],[17.006999999999998,-0.495],[16.914,-1.738],[13.573,-2.44],[12.57,-5.672],[14.293,-9.302000000000001],[12.652,-11.362],[9.536,-9.964],[6.823,-11.984],[6.1,-15.926],[3.55,-16.635],[1.854,-13.665],[-1.531,-13.708],[-4.4670000000000005,-16.466],[-6.911,-15.539],[-6.539,-12.143],[-9.299,-10.183],[-13.279,-10.694999999999999],[-14.729,-8.497],[-12.43,-5.974],[-13.507,-2.763],[-16.947,-1.484]],\"v\":[[-17,-0.146],[-16.901,1.792],[-13.562,2.484],[-12.549,5.711],[-14.893,8.19],[-12.614,11.393],[-9.504,9.986],[-6.784,11.999],[-7.223,15.387],[-3.607,16.609],[-1.903,13.648],[1.482,13.703],[3.1,16.716],[6.859,15.554],[6.496,12.158],[9.266,10.21],[12.344,11.687],[14.698,8.539],[12.412,6.008],[13.501,2.805],[16.859,2.19],[17.005,0.141],[16.914,-1.738],[13.573,-2.44],[12.57,-5.672],[14.93,-8.143],[12.652,-11.362],[9.536,-9.964],[6.823,-11.984],[7.276,-15.373],[3.55,-16.635],[1.854,-13.665],[-1.531,-13.708],[-3.156,-16.716],[-6.911,-15.539],[-6.539,-12.143],[-9.299,-10.183],[-12.38,-11.652],[-14.729,-8.497],[-12.43,-5.974],[-13.507,-2.763],[-16.867,-2.141]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[17.257,16.966],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":140,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"Gear 3 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":150,\"s\":[0]},{\"t\":230,\"s\":[360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[244.338,214.534,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[25.104,24.676,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":150,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":160,\"s\":[125,125,100]},{\"t\":165,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-11.785,-4.79],[4.781000000000001,-11.809],[11.793,4.7829999999999995],[-4.776999999999999,11.795]],\"o\":[[-2.231,-12.522],[12.523,-2.2219999999999995],[2.239,12.529],[-12.535,2.2279999999999998]],\"v\":[[-7.003,-8.657],[8.663,-7.012],[7.007,8.644],[-8.645,7.016]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-24.836,-1.196],[-24.8,1.69],[-19.816,3.629],[-18.337,8.345],[-21.762,11.968],[-19.712999999999997,15.227999999999998],[-13.887,14.592],[-9.915,17.533],[-10.555,22.485],[-7.119,23.875],[-2.779,19.944],[2.165,20.025],[4.531,24.426],[8.289,23.499],[9.494,17.764],[13.54,14.918],[18.037,17.077],[20.509,14.15],[18.139,8.779],[19.73,4.1],[24.637,3.199],[24.841,1.224],[24.806,-1.638],[19.833,-3.566],[18.369,-8.288],[21.816,-11.9],[19.77,-15.179],[13.936,-14.561],[9.971,-17.512],[10.632,-22.465],[7.092,-23.905],[2.708,-19.97],[-2.238,-20.032],[-4.611,-24.426],[-8.363999999999999,-23.48],[-9.557,-17.744],[-13.59,-14.882],[-18.092,-17.027],[-20.562,-14.087],[-18.163,-8.73],[-19.738,-4.038],[-24.648,-3.129]],\"o\":[[-24.852999999999998,0.743],[-24.699,2.618],[-19.816,3.629],[-18.337,8.345],[-20.835,13.66],[-18.432,16.65],[-13.887,14.592],[-9.915,17.533],[-8.889,23.267],[-5.273,24.272],[-2.779,19.944],[2.165,20.025],[6.446999999999999,24.069999999999997],[10.025,22.73],[9.494,17.764],[13.54,14.918],[19.349999999999998,15.690000000000001],[21.477,12.478],[18.139,8.779],[19.73,4.1],[24.763,2.223],[24.853,-0.7240000000000001],[24.716,-2.541],[19.833,-3.566],[18.369,-8.288],[20.886,-13.593],[18.489,-16.605],[13.936,-14.561],[9.971,-17.512],[8.914,-23.275],[5.188,-24.309],[2.708,-19.97],[-2.238,-20.032],[-6.526999999999999,-24.06],[-10.1,-22.707],[-9.557,-17.744],[-13.59,-14.882],[-19.406,-15.63],[-21.523,-12.416],[-18.163,-8.73],[-19.738,-4.038],[-24.765,-2.169]],\"v\":[[-24.842,-0.213],[-24.699,2.618],[-19.816,3.629],[-18.337,8.345],[-21.762,11.968],[-18.432,16.65],[-13.887,14.592],[-9.915,17.533],[-10.555,22.485],[-5.273,24.272],[-2.779,19.944],[2.165,20.025],[4.531,24.426],[10.025,22.73],[9.494,17.764],[13.54,14.918],[18.037,17.077],[21.477,12.478],[18.139,8.779],[19.73,4.1],[24.637,3.199],[24.85,0.206],[24.716,-2.541],[19.833,-3.566],[18.369,-8.288],[21.816,-11.9],[18.489,-16.605],[13.936,-14.561],[9.971,-17.512],[10.632,-22.465],[5.188,-24.309],[2.708,-19.97],[-2.238,-20.032],[-4.611,-24.426],[-10.1,-22.707],[-9.557,-17.744],[-13.59,-14.882],[-18.092,-17.027],[-21.523,-12.416],[-18.163,-8.73],[-19.738,-4.038],[-24.648,-3.129]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[25.104,24.677],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":150,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"Gear 2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":110,\"s\":[0]},{\"t\":190,\"s\":[-360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[636.526,136.881,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[33.95,33.37,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":110,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":120,\"s\":[125,125,100]},{\"t\":125,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-15.979,-6.494999999999999],[6.484000000000001,-16.011],[15.992,6.485],[-6.475,15.992999999999999]],\"o\":[[-3.023999999999999,-16.979],[16.983,-3.0109999999999992],[3.0380000000000003,16.988],[-16.995,3.0199999999999996]],\"v\":[[-9.495,-11.738],[11.749,-9.507],[9.503,11.72],[-11.721,9.514]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-33.678,-1.621],[-33.626,2.291],[-26.869,4.921],[-24.863,11.316],[-29.507,16.228],[-26.729,20.649],[-18.83,19.785],[-13.441,23.774],[-14.31,30.488],[-9.652000000000001,32.374],[-3.768,27.042],[2.936,27.154],[6.144,33.121],[11.238,31.862],[12.874,24.089],[18.361,20.228],[24.457,23.155],[27.810000000000002,19.185],[24.595,11.904],[26.754,5.56],[33.407,4.339],[33.684,1.6589999999999998],[33.636,-2.221],[26.894,-4.837],[24.908,-11.238],[29.581,-16.137],[26.809,-20.581],[18.897,-19.742],[13.521,-23.746],[14.417,-30.46],[9.616,-32.414],[3.673,-27.077],[-3.033,-27.16],[-6.252,-33.121],[-11.342,-31.837000000000003],[-12.957,-24.061],[-18.427,-20.177],[-24.53,-23.088],[-27.88,-19.102],[-24.626,-11.838],[-26.763,-5.475],[-33.421,-4.243]],\"o\":[[-33.699999999999996,1.0070000000000001],[-33.488,3.55],[-26.869,4.921],[-24.863,11.316],[-28.25,18.523000000000003],[-24.993,22.577],[-18.83,19.785],[-13.441,23.774],[-12.052,31.549],[-7.147,32.912],[-3.768,27.042],[2.936,27.154],[8.742,32.638000000000005],[13.594,30.819],[12.874,24.089],[18.361,20.228],[26.237000000000002,21.274],[29.123,16.918],[24.595,11.904],[26.754,5.56],[33.57899999999999,3.0150000000000006],[33.699999999999996,-0.9819999999999999],[33.514,-3.445],[26.894,-4.837],[24.908,-11.238],[28.32,-18.433],[25.071,-22.514],[18.897,-19.742],[13.521,-23.746],[12.086,-31.558],[7.034,-32.962],[3.673,-27.077],[-3.033,-27.16],[-8.849,-32.626000000000005],[-13.695,-30.789],[-12.957,-24.061],[-18.427,-20.177],[-26.312,-21.193],[-29.182,-16.837],[-24.626,-11.838],[-26.763,-5.475],[-33.579,-2.942]],\"v\":[[-33.684,-0.289],[-33.488,3.55],[-26.869,4.921],[-24.863,11.316],[-29.507,16.228],[-24.993,22.577],[-18.83,19.785],[-13.441,23.774],[-14.31,30.488],[-7.147,32.912],[-3.768,27.042],[2.936,27.154],[6.144,33.121],[13.594,30.819],[12.874,24.089],[18.361,20.228],[24.457,23.155],[29.123,16.918],[24.595,11.904],[26.754,5.56],[33.407,4.339],[33.696,0.279],[33.514,-3.445],[26.894,-4.837],[24.908,-11.238],[29.581,-16.137],[25.071,-22.514],[18.897,-19.742],[13.521,-23.746],[14.417,-30.46],[7.034,-32.962],[3.673,-27.077],[-3.033,-27.16],[-6.252,-33.121],[-13.695,-30.789],[-12.957,-24.061],[-18.427,-20.177],[-24.53,-23.088],[-29.182,-16.837],[-24.626,-11.838],[-26.763,-5.475],[-33.421,-4.243]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[33.949,33.37],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":110,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":14,\"ty\":4,\"nm\":\"Gear 1 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":100,\"s\":[0]},{\"t\":180,\"s\":[-360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[836.074,860.072,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[30.37,30.51,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":100,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":110,\"s\":[125,125,100]},{\"t\":115,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-15.268,-2.5840000000000005],[2.580000000000001,-15.277000000000001],[15.27,2.5999999999999996],[-2.5820000000000007,15.286999999999999]],\"o\":[[-5.943,-14.282],[14.298000000000002,-5.915000000000001],[5.95,14.315999999999999],[-14.316,5.952999999999999]],\"v\":[[-10.6,-8.435],[8.454,-10.595],[10.596,8.446],[-8.435,10.623]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-29.836,5.115],[-29.035,8.535],[-22.602,9.531],[-19.605,14.748],[-22.724,19.953],[-19.434,23.290999999999997],[-12.676,21.003],[-7.181,23.456],[-6.642,29.509],[-2.194,30.26],[1.93,24.448],[7.83,23.247],[11.797,27.856],[16.019,25.766000000000002],[15.947,18.635],[20.009,14.189],[25.92,15.574],[28.089,11.446000000000002],[23.861,5.684],[24.524,-0.294],[30.12,-2.654],[29.843,-5.055],[29.05,-8.448],[22.633,-9.433],[19.653,-14.66],[22.8,-19.859],[19.508999999999997,-23.218000000000004],[12.737,-20.951],[7.249,-23.419],[6.734,-29.478],[2.148,-30.26],[-2.029,-24.432],[-7.922,-23.206],[-11.898,-27.806],[-16.111,-25.695999999999998],[-16.021,-18.567],[-20.063,-14.104],[-25.977,-15.472],[-28.14,-11.329999999999998],[-23.882,-5.593],[-24.522,0.399],[-30.12,2.768]],\"o\":[[-29.347,7.423],[-28.67,9.612],[-22.602,9.531],[-19.605,14.748],[-21.178,21.721],[-17.538,24.644],[-12.676,21.003],[-7.181,23.456],[-4.457000000000001,30.002],[0.106,30.248],[1.93,24.448],[7.83,23.247],[13.981000000000002,26.929000000000002],[17.88,24.396],[15.947,18.635],[20.009,14.189],[27.117,13.581],[28.801,9.204],[23.861,5.684],[24.524,-0.294],[30.013,-3.847],[29.346,-7.374],[28.707,-9.497],[22.633,-9.433],[19.653,-14.66],[21.251,-21.627000000000002],[17.612,-24.577],[12.737,-20.951],[7.249,-23.419],[4.478,-29.990000000000002],[-0.221,-30.242],[-2.029,-24.432],[-7.922,-23.206],[-14.079,-26.87],[-17.971,-24.322],[-16.021,-18.567],[-20.063,-14.104],[-27.172,-13.466999999999999],[-28.844,-9.091],[-23.882,-5.593],[-24.522,0.399],[-30.006,3.939]],\"v\":[[-29.584,6.285],[-28.67,9.612],[-22.602,9.531],[-19.605,14.748],[-22.724,19.953],[-17.538,24.644],[-12.676,21.003],[-7.181,23.456],[-6.642,29.509],[0.106,30.248],[1.93,24.448],[7.83,23.247],[11.797,27.856],[17.88,24.396],[15.947,18.635],[20.009,14.189],[25.92,15.574],[28.801,9.204],[23.861,5.684],[24.524,-0.294],[30.12,-2.654],[29.588,-6.268],[28.707,-9.497],[22.633,-9.433],[19.653,-14.66],[22.8,-19.859],[17.612,-24.577],[12.737,-20.951],[7.249,-23.419],[6.734,-29.478],[-0.221,-30.242],[-2.029,-24.432],[-7.922,-23.206],[-11.898,-27.806],[-17.971,-24.322],[-16.021,-18.567],[-20.063,-14.104],[-25.977,-15.472],[-28.844,-9.091],[-23.882,-5.593],[-24.522,0.399],[-30.12,2.768]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[30.37,30.51],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":100,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":15,\"ty\":4,\"nm\":\"Profile Line 4 Outlines\",\"parent\":21,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[158.046,121.163,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[55.68,12.15,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-52.4,8.87],[52.4,-8.87]],\"o\":[[-52.4,8.87],[52.4,-8.87]],\"v\":[[-52.4,8.87],[52.4,-8.87]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6.56,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[55.68,12.15],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":65,\"s\":[0]},{\"t\":75,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false,\"_render\":true}],\"ip\":30,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":16,\"ty\":4,\"nm\":\"Profile Line 3 Outlines\",\"parent\":21,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[155.678,107.212,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[55.679,12.15,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-52.399,8.87],[52.399,-8.87]],\"o\":[[-52.399,8.87],[52.399,-8.87]],\"v\":[[-52.399,8.87],[52.399,-8.87]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6.56,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[55.679,12.15],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":60,\"s\":[0]},{\"t\":70,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false,\"_render\":true}],\"ip\":30,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":17,\"ty\":4,\"nm\":\"Profile Line 2 Outlines\",\"parent\":21,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[153.301,93.207,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[55.68,12.15,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-52.399,8.87],[52.399,-8.87]],\"o\":[[-52.399,8.87],[52.399,-8.87]],\"v\":[[-52.399,8.87],[52.399,-8.87]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6.56,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[55.679,12.15],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":55,\"s\":[0]},{\"t\":65,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false,\"_render\":true}],\"ip\":30,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":18,\"ty\":4,\"nm\":\"Profile Line 1 Outlines\",\"parent\":21,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[150.943,79.314,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[55.68,12.15,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-52.399,8.87],[52.399,-8.87]],\"o\":[[-52.399,8.87],[52.399,-8.87]],\"v\":[[-52.399,8.87],[52.399,-8.87]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6.56,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[55.679,12.151],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":50,\"s\":[0]},{\"t\":60,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false,\"_render\":true}],\"ip\":30,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":19,\"ty\":4,\"nm\":\"Profile Icon Outlines\",\"parent\":21,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[59.054,115.465,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[9.154,12.765,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":45,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":55,\"s\":[125,125,100]},{\"t\":60,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[4.531,-3.0229999999999997],[2.807,-6.271],[-0.5859999999999999,-12.514999999999999],[-8.064,-8.911999999999999],[-6.2170000000000005,-3.195],[-8.904,2.3890000000000002],[-7.186,12.515],[8.904,9.785],[7.741,2.931]],\"o\":[[2.286,-4.797],[2.0669999999999997,-10.632],[-6.181,-11.565999999999999],[-7.307,-4.454],[-7.4190000000000005,-0.7479999999999998],[-8.349,5.663],[-7.186,12.515],[8.904,9.785],[7.161,-0.4849999999999999]],\"v\":[[1.328,-3.679],[2.542,-7.835],[-3.383,-12.04],[-7.589,-6.116],[-4.825,-2.481],[-8.349,5.663],[-7.186,12.515],[8.904,9.785],[7.741,2.931]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[9.154,12.765],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":45,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":20,\"ty\":4,\"nm\":\"Profile Circle Outlines\",\"parent\":21,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[58.809,118.054,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[31.508,31.509,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":40,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":50,\"s\":[125,125,100]},{\"t\":55,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[25.900000000000002,-20.635],[20.634999999999998,25.900000000000002],[-25.9,20.634],[-20.635,-25.900000000000002]],\"o\":[[31.258,10.931999999999999],[-10.934000000000001,31.258],[-31.258,-10.934000000000001],[10.933,-31.258]],\"v\":[[28.579,-4.851],[4.85,28.579],[-28.58,4.85],[-4.851,-28.579]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[31.508,31.509],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":40,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":21,\"ty\":4,\"nm\":\"Profile Header Outlines\",\"parent\":34,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[136.653,514.282,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0.275,36.291,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":30,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":40,\"s\":[125,125,100]},{\"t\":45,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.601,-2.072],[2.072,2.5999999999999996],[-2.6,2.072],[-2.0709999999999997,-2.6]],\"o\":[[3.1390000000000002,1.097],[-1.097,3.138],[-3.1380000000000003,-1.0979999999999999],[1.098,-3.138]],\"v\":[[2.87,-0.487],[0.488,2.868],[-2.869,0.487],[-0.486,-2.87]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[44.078,47.297],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.6,-2.072],[2.0709999999999997,2.6],[-2.6,2.072],[-2.072,-2.6]],\"o\":[[3.1390000000000002,1.097],[-1.098,3.1380000000000003],[-3.1380000000000003,-1.0979999999999999],[1.097,-3.138]],\"v\":[[2.869,-0.487],[0.486,2.869],[-2.869,0.487],[-0.488,-2.87]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[33.175,49.147],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.6,-2.072],[2.072,2.5999999999999996],[-2.601,2.072],[-2.072,-2.6]],\"o\":[[3.1380000000000003,1.097],[-1.0979999999999999,3.138],[-3.138,-1.0979999999999999],[1.0979999999999999,-3.138]],\"v\":[[2.869,-0.488],[0.487,2.868],[-2.87,0.487],[-0.487,-2.87]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[22.271,50.998],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[105.364,-35.042],[111.024,-1.685],[-105.362,35.042],[-111.024,1.686]],\"o\":[[105.364,-35.042],[111.024,-1.685],[-105.362,35.042],[-111.024,1.686]],\"v\":[[105.364,-35.042],[111.024,-1.685],[-105.362,35.042],[-111.024,1.686]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[111.275,35.291],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":30,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":24,\"ty\":4,\"nm\":\"Text Line 4 Outlines\",\"parent\":28,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[134.132,125.672,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[31.28,8.02,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-28,4.739],[28,-4.739]],\"o\":[[-28,4.739],[28,-4.739]],\"v\":[[-28,4.739],[28,-4.739]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6.56,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[31.28,8.02],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":65,\"s\":[0]},{\"t\":75,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false,\"_render\":true}],\"ip\":20,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":25,\"ty\":4,\"nm\":\"Text Line 3 Outlines\",\"parent\":28,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[145.135,109.371,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[44.397,10.241,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-41.117,6.961],[41.117,-6.961]],\"o\":[[-41.117,6.961],[41.117,-6.961]],\"v\":[[-41.117,6.961],[41.117,-6.961]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6.56,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[44.397,10.241],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":60,\"s\":[0]},{\"t\":70,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false,\"_render\":true}],\"ip\":20,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":26,\"ty\":4,\"nm\":\"Text Line 2 Outlines\",\"parent\":28,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[153.798,93.54,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[55.68,12.15,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-52.4,8.87],[52.4,-8.87]],\"o\":[[-52.4,8.87],[52.4,-8.87]],\"v\":[[-52.4,8.87],[52.4,-8.87]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6.56,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[55.68,12.15],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":55,\"s\":[0]},{\"t\":65,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false,\"_render\":true}],\"ip\":20,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":27,\"ty\":4,\"nm\":\"Text Line 1 Outlines\",\"parent\":28,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[151.573,79.542,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[55.68,12.15,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-52.399,8.87],[52.399,-8.87]],\"o\":[[-52.399,8.87],[52.399,-8.87]],\"v\":[[-52.399,8.87],[52.399,-8.87]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6.56,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[55.679,12.15],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":40,\"s\":[0]},{\"t\":50,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false,\"_render\":true}],\"ip\":20,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":28,\"ty\":4,\"nm\":\"Text Tab Header Outlines\",\"parent\":34,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[112.243,335.293,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[6.057,49.742,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":20,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":30,\"s\":[125,125,100]},{\"t\":35,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.968,-2.362],[2.3609999999999998,2.968],[-2.967,2.361],[-2.3609999999999998,-2.967]],\"o\":[[3.579,1.254],[-1.253,3.579],[-3.579,-1.254],[1.254,-3.5780000000000003]],\"v\":[[3.274,-0.554],[0.554,3.273],[-3.273,0.553],[-0.554,-3.273]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[47.286,46.915],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.967,-2.361],[2.36,2.968],[-2.968,2.361],[-2.3609999999999998,-2.967]],\"o\":[[3.579,1.255],[-1.255,3.5780000000000003],[-3.579,-1.254],[1.253,-3.5780000000000003]],\"v\":[[3.273,-0.553],[0.553,3.273],[-3.273,0.553],[-0.554,-3.273]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[34.85,49.017],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.967,-2.361],[2.361,2.968],[-2.968,2.361],[-2.362,-2.967]],\"o\":[[3.579,1.255],[-1.254,3.5780000000000003],[-3.579,-1.254],[1.253,-3.5780000000000003]],\"v\":[[3.273,-0.553],[0.553,3.273],[-3.273,0.553],[-0.554,-3.273]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[22.414,51.12],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[105.748,-35.092],[111.407,-1.618],[-105.747,35.092],[-111.407,1.617]],\"o\":[[105.748,-35.092],[111.407,-1.618],[-105.747,35.092],[-111.407,1.617]],\"v\":[[105.748,-35.092],[111.407,-1.618],[-105.747,35.092],[-111.407,1.617]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[111.657,35.342],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":20,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":29,\"ty\":4,\"nm\":\"Photo Icon Outlines\",\"parent\":28,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[61.281,116.754,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[33.446,30.182,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":30,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":40,\"s\":[125,125,100]},{\"t\":45,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[33.196,20.14],[-24.731,29.932],[-33.196,-20.139],[24.73,-29.932]],\"o\":[[33.196,20.14],[-24.731,29.932],[-33.196,-20.139],[24.73,-29.932]],\"v\":[[33.196,20.14],[-24.731,29.932],[-33.196,-20.139],[24.73,-29.932]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[33.445,30.182],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":20,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":30,\"ty\":4,\"nm\":\"Text Area 1 Outlines\",\"parent\":28,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[121.757,95.09,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[121.757,95.09,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[95.648,-94.84],[121.506,58.131],[-95.646,94.84],[-121.506,-58.131]],\"o\":[[95.648,-94.84],[121.506,58.131],[-95.646,94.84],[-121.506,-58.131]],\"v\":[[95.648,-94.84],[121.506,58.131],[-95.646,94.84],[-121.506,-58.131]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[121.757,95.09],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":20,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":31,\"ty\":4,\"nm\":\"Video Icon Outlines\",\"parent\":32,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[101.702,95.245,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[16.388,18.218,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":20,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":30,\"s\":[125,125,100]},{\"t\":35,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.138,-4.66],[-16.138,-17.968],[-10.448,17.968]],\"o\":[[16.138,-4.66],[-16.138,-17.968],[-10.448,17.968]],\"v\":[[16.138,-4.66],[-16.138,-17.968],[-10.448,17.968]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[16.387,18.218],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":10,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":32,\"ty\":4,\"nm\":\"Video Tab Header Outlines\",\"parent\":34,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[69.249,121.374,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0.849,33.223,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":10,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":20,\"s\":[125,125,100]},{\"t\":25,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.6,-2.071],[2.0709999999999997,2.6],[-2.601,2.0709999999999997],[-2.0709999999999997,-2.601]],\"o\":[[3.1380000000000003,1.0979999999999999],[-1.098,3.1380000000000003],[-3.138,-1.098],[1.098,-3.1380000000000003]],\"v\":[[2.869,-0.487],[0.486,2.869],[-2.87,0.486],[-0.486,-2.869]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[44.091,47.351],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.6,-2.071],[2.0709999999999997,2.6],[-2.601,2.0709999999999997],[-2.071,-2.601]],\"o\":[[3.1380000000000003,1.0979999999999999],[-1.098,3.1380000000000003],[-3.138,-1.098],[1.0979999999999999,-3.1380000000000003]],\"v\":[[2.869,-0.487],[0.486,2.869],[-2.87,0.486],[-0.487,-2.869]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[33.187,49.2],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.601,-2.072],[2.0709999999999997,2.6],[-2.6,2.0709999999999997],[-2.0709999999999997,-2.601]],\"o\":[[3.1390000000000002,1.097],[-1.099,3.1370000000000005],[-3.1380000000000003,-1.099],[1.099,-3.138]],\"v\":[[2.87,-0.487],[0.486,2.869],[-2.869,0.486],[-0.486,-2.87]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[22.283,51.049],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[108.847,-34.573],[114.199,-1.165],[-108.847,34.573],[-114.199,1.164]],\"o\":[[108.847,-34.573],[114.199,-1.165],[-108.847,34.573],[-114.199,1.164]],\"v\":[[108.847,-34.573],[114.199,-1.165],[-108.847,34.573],[-114.199,1.164]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[114.449,34.823],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":10,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":33,\"ty\":4,\"nm\":\"video Area Outlines\",\"parent\":32,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[124.807,97.371,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[123.912,96.946,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[123.663,61.502],[-98.613,96.696],[-123.663,-61.502],[98.614,-96.696]],\"o\":[[123.663,61.502],[-98.613,96.696],[-123.663,-61.502],[98.614,-96.696]],\"v\":[[123.663,61.502],[-98.613,96.696],[-123.663,-61.502],[98.614,-96.696]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[123.913,96.946],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":10,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":34,\"ty\":4,\"nm\":\"Mobile Phone Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[523.725,918.888,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[223.717,729.808,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":0,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":10,\"s\":[125,125,100]},{\"t\":15,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[50.441,3.5580000000000003],[-33.037,17.82],[-56.467999999999996,11.793000000000001],[56.469,-19.872]],\"o\":[[38.42,5.612],[-45.059,19.873],[-58.522,-0.228],[58.522,-7.850999999999999]],\"v\":[[38.42,5.612],[-33.037,17.82],[-58.522,-0.228],[56.469,-19.872]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[167.057,38.988],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.9750000000000001,18.037000000000003],[7.747,16.547],[1.839,-18.038],[-5.6,-16.768],[-7.747,-15.33],[-2.413,15.89]],\"o\":[[0.309,17.818],[7.747,16.547],[1.839,-18.038],[-6.882999999999999,-16.549],[-7.527,-14.046],[-2.194,17.174]],\"v\":[[0.309,17.818],[7.747,16.547],[1.839,-18.038],[-5.6,-16.768],[-7.527,-14.046],[-2.413,15.89]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[28.537,240.988],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.9750000000000001,18.038],[7.747,16.548],[1.839,-18.038],[-5.6,-16.767],[-7.747,-15.329],[-2.414,15.891]],\"o\":[[0.309,17.819],[7.747,16.548],[1.839,-18.038],[-6.882999999999999,-16.548],[-7.527,-14.045],[-2.194,17.175]],\"v\":[[0.309,17.819],[7.747,16.548],[1.839,-18.038],[-5.6,-16.767],[-7.527,-14.045],[-2.414,15.891]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[21.411,199.27],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 3\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[6.792999999999999,34.125],[1.4,35.046],[-10.417,-34.126],[0.09399999999999986,-31.422],[9.495,23.616]],\"o\":[[1.4,35.046],[1.4,35.046],[-5.0249999999999995,-35.047],[1.015,-26.03],[10.415999999999999,29.008]],\"v\":[[1.4,35.046],[1.4,35.046],[-10.417,-34.126],[1.015,-26.03],[9.495,23.616]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[366.46,158.508],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 4\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.202,-5.986999999999998],[-3.771,-20.086000000000002],[4.068,23.095],[-2.267,11.142]],\"o\":[[-3.6710000000000003,-17.439999999999998],[-3.823,-23.094],[0.34099999999999975,16.223999999999997],[-4.474,4.54]],\"v\":[[-3.555,-15.213],[-3.823,-23.094],[4.068,23.095],[-2.903,9.225]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[417.361,484.044],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 5\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[108.729,-323.848],[209.655,266.956],[210.28199999999998,272.17699999999996],[210.075,277.144],[209.55,280.646],[207.74,287.58299999999997],[204.185,294.223],[200.905,298.615],[198.134,301.46599999999995],[196.876,302.605],[195.357,303.9],[193.963,304.886],[191.17700000000002,306.75],[189.176,307.797],[186.85299999999998,308.897],[180.73499999999999,310.97700000000003],[-62.166,352.471],[-67.648,353.122],[-72.244,352.894],[-77.26299999999999,352.123],[-81.25500000000001,350.932],[-82.97300000000001,350.28],[-83.567,350.029],[-85.136,349.34999999999997],[-91.44,345.693],[-95.68799999999999,341.971],[-99.004,338.288],[-102.58200000000001,332.932],[-103.806,330.279],[-106.07799999999999,324.194],[-206.709,-264.876],[-196.14499999999998,-305.762],[65.113,-350.392],[96.50699999999999,-345.51700000000005]],\"o\":[[109.574,-318.906],[210.097,269.54400000000004],[210.17999999999998,275.959],[209.902,278.451],[208.943,284.052],[205.163,292.603],[202.10999999999999,297.154],[198.909,300.717],[197.238,302.28],[196.129,303.261],[194.536,304.503],[192.611,305.86600000000004],[189.68,307.534],[187.97899999999998,308.39700000000005],[183.28,310.278],[178.147,311.42],[-64.884,352.936],[-71.309,352.95500000000004],[-75.21100000000001,352.543],[-80.27499999999999,351.25],[-82.598,350.414],[-83.305,350.138],[-84.3,349.736],[-88.854,347.431],[-94.821,342.792],[-97.806,339.757],[-101.407,334.912],[-103.558,330.832],[-105.128,327.312],[-106.627,320.985],[-210.28300000000002,-285.799],[-175.2,-309.34],[81.095,-353.122],[106.955,-328.43300000000005]],\"v\":[[109.574,-318.906],[209.655,266.956],[210.2,274.789],[209.902,278.451],[209.55,280.646],[206.006,290.962],[203.1,295.73],[199.545,300.058],[197.238,302.28],[196.876,302.605],[194.536,304.503],[193.963,304.886],[189.68,307.534],[189.176,307.797],[185.742,309.351],[178.147,311.42],[-62.166,352.471],[-70.378,352.994],[-73.144,352.784],[-79.3,351.546],[-82.105,350.594],[-83.305,350.138],[-83.567,350.029],[-86.173,348.823],[-93.839,343.637],[-96.49,341.139],[-100.048,336.815],[-103.558,330.832],[-103.806,330.279],[-106.627,320.985],[-206.709,-264.876],[-175.2,-309.34],[65.113,-350.392],[104.484,-332.458]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.9387,0.92,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[222.241,365.933],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 6\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[116.107,-346.73199999999997],[220.774,265.979],[221.568,272.69100000000003],[221.274,279.214],[220.81199999999998,282.441],[218.24200000000002,292.524],[213.751,300.91],[209.50400000000002,306.589],[205.644,310.55100000000004],[204.439,311.616],[202.01,313.63800000000003],[200.694,314.568],[196.676,317.213],[194.508,318.31],[191.59799999999998,319.711],[183.755,322.39300000000003],[-59.915,364.019],[-66.999,364.832],[-71.592,364.62699999999995],[-73.448,364.46000000000004],[-79.307,363.544],[-84.33900000000001,362.049],[-86.669,361.16900000000004],[-89.552,359.9],[-97.495,355.29],[-102.83000000000001,350.609],[-107.092,345.899],[-111.96000000000001,338.539],[-113.285,335.552],[-116.184,327.856],[-216.982,-262.198],[-203.496,-314.593],[63.708,-360.239]],\"o\":[[120.693,-319.883],[221.348,269.337],[221.418,277.604],[220.938,281.627],[219.822,287.983],[214.988,298.87],[211.01899999999998,304.768],[206.799,309.45],[204.461,311.612],[203.25199999999998,312.656],[200.715,314.564],[198.75099999999998,315.95599999999996],[194.529,318.307],[193.07000000000002,319.04],[186.992,321.48900000000003],[180.397,322.966],[-63.467,364.625],[-71.039,364.642],[-72.798,364.525],[-76.729,364.074],[-83.10300000000001,362.453],[-86.105,361.382],[-88.399,360.451],[-94.20700000000001,357.525],[-101.67699999999999,351.689],[-105.56800000000001,347.72999999999996],[-110.36099999999999,341.326],[-113.281,335.573],[-114.955,331.83000000000004],[-116.901,323.662],[-221.568,-289.048],[-176.604,-319.187],[90.59899999999999,-364.83299999999997]],\"v\":[[120.693,-319.883],[220.774,265.979],[221.467,275.966],[221.063,280.813],[220.683,283.234],[216.079,296.746],[212.385,302.839],[207.883,308.319],[204.461,311.612],[204.439,311.616],[200.715,314.564],[200.694,314.568],[194.529,318.307],[194.508,318.31],[190.07,320.302],[180.397,322.966],[-59.915,364.019],[-70.461,364.675],[-72.173,364.573],[-74.077,364.391],[-81.828,362.83],[-85.54,361.594],[-87.217,360.932],[-90.685,359.323],[-100.488,352.719],[-103.93,349.453],[-108.484,343.935],[-113.281,335.573],[-113.285,335.552],[-116.901,323.662],[-216.982,-262.198],[-176.604,-319.187],[63.708,-360.239]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[221.819,365.083],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 7\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":35,\"ty\":4,\"nm\":\"Mobile Shadow Outlines\",\"parent\":34,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":60,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[283.322,703.04,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[209.507,44.708,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[206.833,-49.781000000000006],[120.42,11.419],[-206.833,49.781000000000006],[-120.41900000000001,-11.419]],\"o\":[[212.071,-16.845000000000002],[-110.935,48.215],[-212.071,16.845000000000002],[110.934,-48.215]],\"v\":[[209.452,-33.313],[4.742,29.818],[-209.452,33.313],[-4.742,-29.817]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[209.507,44.708],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":36,\"ty\":4,\"nm\":\"Leave 6 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[543.99,870.212,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[327.088,167.534,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":10,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":20,\"s\":[125,125,100]},{\"t\":25,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-158.824,71.214],[-124.332,57.618],[-119.041,53.068000000000005],[-111.153,32.806999999999995],[-89.647,35.757999999999996],[-98.844,25.55],[-100.11200000000001,-6.500000000000001],[-73.708,-11.850999999999999],[-56.186,6.436],[-58.81399999999999,-10.7],[-78.68,-44.464],[-68.98400000000001,-83.845],[-35.314,-69.711],[-18.794,-11.155999999999999],[-8.711,-36.999],[7.296,-64.367],[20.658,-66.152],[28.533,-52.720000000000006],[27.185000000000002,-5.18],[27.421,-2.157],[35.955,-29.370999999999995],[61.72599999999999,-43.951],[71.67800000000001,-24.673],[59.474,9.881000000000002],[70.976,-0.883],[96.283,-11.735999999999999],[111.042,10.101999999999999],[87.691,33.795],[118.263,24.912],[164.467,61.45099999999999],[6.875,82.33200000000001],[-133.25600000000003,83.845]],\"o\":[[-146.616,56.650999999999996],[-112.657,60.327],[-117.822,38.693000000000005],[-96.777,31.61],[-92.207,33.876999999999995],[-103.494,5.603],[-83.188,-14.539000000000001],[-60.51499999999999,-1.1449999999999996],[-52.043,1.0120000000000005],[-71.929,-32.735],[-78.656,-70.106],[-43.445,-82.827],[-22.506,-35.324],[-16.950000000000003,-12.436],[5.567,-61.625],[14.594000000000001,-68.34],[27.348,-58.096000000000004],[31.753999999999998,-26.762000000000004],[23.923000000000002,7.1979999999999995],[33.112,-19.950000000000003],[49.53,-42.20399999999999],[71.838,-31.862000000000002],[67.44000000000001,-3.7209999999999983],[58.406,8.328000000000001],[90.146,-9.702],[111.88400000000001,-5.3629999999999995],[97.88,27.793999999999997],[95.668,29.33],[153.345,41.291],[84.45600000000002,81.49499999999999],[-101.96799999999999,83.508],[-164.467,82.064]],\"v\":[[-158.824,71.214],[-105.46,59.848],[-118.431,45.88],[-103.965,32.208],[-85.759,41.833],[-101.169,15.576],[-90.861,-10.893],[-67.112,-6.499],[-52.009,13.833],[-65.371,-21.718],[-78.668,-57.285],[-56.173,-83.335],[-30.867,-57.773],[-20.033,12.768],[4.025,-58.966],[9.996,-65.837],[24.003,-62.124],[29.177,-47.523],[16.417,12.758],[30.267,-11.054],[42.742,-35.788],[67.719,-36.786],[70.406,-18.38],[48.138,19.638],[84.853,-7.267],[101.677,-9.533],[104.461,18.947],[82.504,43.525],[135.804,33.102],[162.038,80.657],[-70.707,83.17],[-164.467,82.064]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[164.717,84.095],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":10,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":37,\"ty\":4,\"nm\":\"Leave 5 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[353.562,870.28,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[200.79,153.338,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":20,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":30,\"s\":[125,125,100]},{\"t\":35,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[100.27,76.544],[74.194,36.405],[6.524999999999999,14.457],[-63.855000000000004,-2.149000000000001],[-96.682,-33.131],[-95.81099999999999,-65.435],[-55.63,-62.753],[15.615000000000002,3.5060000000000002]],\"o\":[[94.29299999999999,53.504],[30.465999999999998,17.586],[-40.1,4.8389999999999995],[-89.84700000000001,-24.399],[-100.27,-53.643],[-71.324,-76.54400000000001],[-16.385,-21.686],[50.496,23.743]],\"v\":[[100.27,76.544],[52.33,26.996],[-16.788,9.648],[-81.938,-17.628],[-98.476,-43.387],[-86.33,-69.736],[-44.246,-50.841],[50.496,23.743]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[100.52,76.794],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":20,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":38,\"ty\":4,\"nm\":\"Leave 4 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[560.076,810.685,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0.25,165.236,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":15,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":25,\"s\":[125,125,100]},{\"t\":30,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-156.642,70.236],[-122.624,56.828],[-117.405,52.339],[-109.625,32.356],[-88.416,35.267],[-97.487,25.198999999999998],[-98.736,-6.409000000000001],[-72.695,-11.687999999999999],[-55.414,6.348],[-58.006,-10.552],[-77.599,-43.852000000000004],[-68.037,-82.693],[-34.829,-68.752],[-18.537000000000003,-11.001999999999999],[-8.592,-36.491],[7.195,-63.482],[20.372999999999998,-65.24300000000001],[28.139,-51.995],[26.810000000000002,-5.109],[27.044,-2.1259999999999994],[35.461,-28.964999999999996],[60.878,-43.346000000000004],[70.69399999999999,-24.331000000000003],[58.657,9.746],[70.001,-0.8689999999999998],[94.96000000000001,-11.575],[109.515,9.963999999999999],[86.484,33.332],[116.63799999999999,24.57],[162.207,60.607000000000006],[-69.736,82.028],[-131.42499999999998,82.69300000000001]],\"o\":[[-144.601,55.874],[-111.11,59.499],[-116.203,38.163],[-95.44800000000001,31.176],[-90.94200000000001,33.413000000000004],[-102.07300000000001,5.526999999999999],[-82.044,-14.337],[-59.68299999999999,-1.1289999999999996],[-51.329,0.9990000000000006],[-70.941,-32.285],[-77.57600000000001,-69.142],[-42.848,-81.689],[-22.197,-34.839],[-16.717000000000002,-12.265],[5.489,-60.778999999999996],[14.393,-67.401],[26.97,-57.297000000000004],[31.316,-26.394],[23.593,7.099],[32.657000000000004,-19.674999999999997],[48.849000000000004,-41.622],[70.85,-31.423000000000002],[66.514,-3.6670000000000016],[57.603,8.215],[88.908,-9.568],[110.346,-5.289],[96.53500000000001,27.412999999999997],[94.352,28.928000000000004],[151.239,40.724],[159.811,79.549],[-100.56700000000001,82.361],[-162.207,80.936]],\"v\":[[-156.642,70.236],[-104.012,59.026],[-116.803,45.251],[-102.537,31.766],[-84.581,41.258],[-99.78,15.363],[-89.613,-10.743],[-66.189,-6.409],[-51.295,13.644],[-64.473,-21.418],[-77.587,-56.496],[-55.401,-82.189],[-30.444,-56.979],[-19.757,12.593],[3.968,-58.156],[9.858,-64.932],[23.671,-61.27],[28.775,-46.87],[16.19,12.583],[29.85,-10.901],[42.155,-35.294],[66.788,-36.28],[69.439,-18.126],[47.476,19.369],[83.687,-7.165],[100.28,-9.401],[103.025,18.688],[81.369,42.926],[133.939,32.647],[159.811,79.549],[-69.736,82.028],[-162.207,80.936]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[162.457,82.942],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":15,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":40,\"ty\":4,\"nm\":\"Leave 2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[710.754,777.579,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0.25,141.614,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":25,\"s\":[0,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":35,\"s\":[125,125,100]},{\"t\":40,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-92.591,70.682],[-68.512,33.618],[-6.025,13.350000000000001],[58.965999999999994,-1.9839999999999982],[89.27799999999999,-30.593],[88.47399999999999,-60.424],[51.37,-57.948],[-14.418999999999997,3.2379999999999995]],\"o\":[[-87.071,49.407000000000004],[-28.133000000000003,16.240000000000002],[37.029,4.469],[82.967,-22.531],[92.591,-49.535],[65.862,-70.682],[15.131,-20.025000000000002],[-46.628,21.925]],\"v\":[[-92.591,70.682],[-48.322,24.928],[15.502,8.91],[75.663,-16.278],[90.934,-40.064],[79.719,-64.396],[40.857,-46.947],[-46.628,21.925]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[92.841,70.932],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":25,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":42,\"ty\":4,\"nm\":\"Thumb up Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[763.896,431.815,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[35.284,38.939,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.54,-20.319],[9.956,-17.303],[13.049999999999999,-14.995000000000001],[5.85,17.224],[3.542,20.319],[-9.954,17.302],[-13.05,14.994],[-5.849,-17.224]],\"o\":[[-1.641,-19.895],[11.855,-16.878],[12.626,-13.095],[5.425,19.123],[1.642,19.894],[-11.854000000000001,16.878],[-12.625,13.094],[-5.424,-19.124]],\"v\":[[-1.641,-19.895],[9.956,-17.303],[12.626,-13.095],[5.85,17.224],[1.642,19.894],[-9.954,17.302],[-12.625,13.094],[-5.849,-17.224]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[57.268,57.309],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-19.716,4.856999999999999],[-17.108,-0.9750000000000001],[-17.541999999999998,-4.873],[-13.402000000000001,-11.92],[-9.506,-11.049],[3.696,-7.789],[3.5310000000000006,-20.208],[17.604,-33.314],[15.093,-16.54],[23.045,-0.688],[23.843,3.173],[17.64,30.926],[15.86,33.314],[-17.743,25.804],[-18.323999999999998,25.674],[-23.843,22.125],[-18.966,16.502],[-22.557,15.261000000000001],[-18.774,8.032]],\"o\":[[-18.759999999999998,0.5790000000000002],[-16.709,-2.763],[-16.39,-10.024000000000001],[-10.087,-11.179],[-9.506,-11.049],[3.696,-7.789],[8.427,-32.424],[14.736,-19.095999999999997],[21.825,-4.285000000000001],[23.833000000000002,2.175],[23.627,4.138],[17.313,32.391],[14.394,32.987],[-17.743,25.804],[-21.639,24.933],[-22.186,16.762999999999998],[-18.966,16.502],[-21.019,8.382000000000001],[-18.883,6.967]],\"v\":[[-19.238,2.718],[-15.116,-1.469],[-17.063,-7.011],[-10.39,-11.247],[-9.506,-11.049],[3.696,-7.789],[5.98,-26.316],[16.169,-26.205],[19.163,-9.13],[23.571,1.221],[23.627,4.138],[17.64,30.926],[14.394,32.987],[-17.743,25.804],[-18.627,25.607],[-22.932,19.176],[-18.966,16.502],[-21.761,11.698],[-17.291,8.26]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29,0.29,0.29,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.093,33.564],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":450,\"st\":0,\"bm\":0,\"completed\":true}],\"markers\":[],\"__complete\":true}");

/***/ }),

/***/ "./components/Lottie/works.json":
/*!**************************************!*\
  !*** ./components/Lottie/works.json ***!
  \**************************************/
/*! exports provided: v, meta, fr, ip, op, w, h, nm, ddd, assets, layers, markers, __complete, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"4.8.0\",\"meta\":{\"g\":\"LottieFiles AE 1.0.0\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":29.9700012207031,\"ip\":0,\"op\":181.000007372281,\"w\":300,\"h\":300,\"nm\":\"Magellan_Update\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"update circle/Magellan_phone01 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":181,\"s\":[360]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":449,\"s\":[180]},{\"t\":899.000036617021,\"s\":[180]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[150,150,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[150.5,150.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[25.352,25.352,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[142.95,9.6],[137.75,23.400000000000002],[78.55,3.8],[71.14999999999999,0.5],[70.05,-9],[82.45,-21.6],[34.75,-51.9],[-109.45,0],[-109.05,71.89999999999999],[-109.25,82.3],[-116.25,87],[-137.05,82.8],[-143.75,78.89999999999999],[-144.55,68.2],[-144.55,63],[-76.95,-87],[80.95,-71.3],[116.05,-54.9],[121.65,-58.1],[129.95,-53.900000000000006]],\"o\":[[144.54999999999998,18.3],[129.25,21.1],[73.55,2.8],[69.14999999999999,-5.7],[72.35,-11.3],[62.25,-40.1],[-57.55,-51.9],[-109.45,67.1],[-108.14999999999999,79.6],[-113.25,86.10000000000001],[-118.95,86.5],[-140.95000000000002,82.1],[-144.45000000000002,72.1],[-144.55,63.3],[-144.55,-19.400000000000006],[44.45,-87],[107.45,-46.5],[118.35,-57.199999999999996],[127.85000000000001,-56.300000000000004],[130.85,-50.800000000000004]],\"v\":[[143.35,11.4],[132.95,21.8],[76.75,3.5],[70.05,-2.5],[72.35,-11.3],[82.45,-21.6],[5.35,-51.9],[-109.45,62.9],[-108.55,76.8],[-111.35,84.2],[-118.95,86.5],[-137.05,82.8],[-144.05,75.1],[-144.55,63.3],[-144.55,63],[5.45,-87],[107.45,-46.5],[116.05,-54.9],[124.65,-57.2],[130.85,-50.7]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.6863,0.0784,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[144.8,87.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[144.2,-67.3],[144.2,-62.9],[76.60000000000001,87.1],[-81.4,71.4],[-116.4,55],[-121.3,58.199999999999996],[-130.39999999999998,53.800000000000004],[-143.29999999999998,-9.7],[-143.29999999999998,-17.5],[-136.5,-22.4],[-78.89999999999999,-3.9],[-71.5,-0.6000000000000001],[-70.4,8.899999999999999],[-82.8,21.3],[-35.1,51.8],[109.1,-0.10000000000000142],[108.7,-71.80000000000001],[108.9,-82.5],[115.89999999999999,-87.1],[136.7,-82.9],[143.39999999999998,-79]],\"o\":[[144.2,-63.4],[144.2,19.500000000000007],[-45,87.1],[-108,46.6],[-118.30000000000001,57.1],[-128.2,56.4],[-131.89999999999998,46.9],[-144.2,-14.3],[-139.29999999999998,-21.5],[-133.5,-21.9],[-73.89999999999999,-2.9000000000000004],[-69.5,5.6],[-72.7,11.2],[-62.599999999999994,39.900000000000006],[57.199999999999996,51.8],[109.1,-66.9],[107.8,-79.7],[112.9,-86.4],[118.6,-86.6],[140.6,-82.2],[144,-71.2]],\"v\":[[144.2,-63.4],[144.2,-62.9],[-5.8,87.1],[-108,46.6],[-116.4,55],[-125,57.3],[-131.2,50.6],[-143.7,-11.5],[-141.2,-19.4],[-133.5,-21.9],[-77.1,-3.6],[-70.4,2.4],[-72.7,11.2],[-82.8,21.3],[-5.7,51.8],[109.1,-63],[108.2,-76.9],[111,-84.5],[118.6,-86.6],[136.7,-82.9],[143.7,-75.2]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.6863,0.0784,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[156.05,213.05],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":181.000007372281,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"gear 01/Magellan_phone01 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":31,\"s\":[60]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":34,\"s\":[55]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":63,\"s\":[120]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":66,\"s\":[115]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":92,\"s\":[180]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":95,\"s\":[175]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":120,\"s\":[240]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":123,\"s\":[235]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":148,\"s\":[300]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":151,\"s\":[295]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":177,\"s\":[360]},{\"t\":180.00000733155,\"s\":[355]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[226.5,52,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[149,148,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[25.352,25.352,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[41.300000000000004,22.2],[17.8,46.8],[-3.5,46.7],[-47,24.1],[-26,-46.8],[46.9,-25.8],[44.9,15.5]],\"o\":[[33.300000000000004,36.9],[-1.8,46.8],[-28.8,43.9],[-47,-25.8],[25.9,-46.8],[46.9,8],[41.4,22.1]],\"v\":[[41.2,22.3],[0,46.8],[-5.3,46.5],[-47,0],[0,-46.8],[46.9,0],[41.4,22]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[40.3,-73],[-73,-40.3],[-42.2,71],[-1.2,73],[71.30000000000001,42],[73,1]],\"o\":[[-40.3,-73],[-73,39.1],[-2.4000000000000004,73],[39.3,73],[72.9,2.1],[73,-40.3]],\"v\":[[0,-73],[-73,0],[-3.6,72.9],[0,73],[72.9,3.1],[73,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9208,0.5745,0.3592,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.25,147.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[30.5,55.2],[-55.3,30.5],[-30.5,-55],[55.3,-30.299999999999997]],\"o\":[[-30.5,55.2],[-55.3,-30.299999999999997],[30.5,-55],[55.3,30.5]],\"v\":[[0,55.2],[-55.3,0.1],[0,-55],[55.3,0.1]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[148.3,28.3],[148.3,-21.6],[142.9,-33.6],[119.8,-33.6],[113.39999999999999,-52],[120.2,-71.9],[124.9,-84.2],[89.4,-119.5],[77.2,-124.2],[60.8,-107.8],[43.3,-116.2],[33.9,-135.3],[28.5,-147.3],[-21.7,-147.3],[-33.7,-141.9],[-33.7,-118.9],[-52.2,-112.5],[-72.4,-119.4],[-84.6,-124.10000000000001],[-120.1,-88.8],[-124.8,-76.5],[-108.6,-60.3],[-117.1,-43],[-136.3,-33.5],[-148.3,-28.1],[-148.3,21.7],[-142.9,33.7],[-119.8,33.7],[-113.3,52.1],[-120.2,72],[-124.9,84.3],[-89.4,119.6],[-77.2,124.3],[-60.8,107.9],[-43.3,116.4],[-33.8,135.3],[-28.4,147.3],[21.8,147.3],[33.8,141.9],[33.8,119],[52.300000000000004,112.60000000000001],[72.4,119.6],[84.6,124.3],[120.1,89],[124.8,76.6],[108.5,60.5],[117,43.2],[136.2,33.7]],\"o\":[[148.3,21.6],[148.3,-28.200000000000003],[136.3,-33.6],[117.1,-43],[108.6,-60.4],[124.9,-76.60000000000001],[120.2,-88.9],[84.7,-124.2],[72.5,-119.5],[52.4,-112.5],[33.9,-118.9],[33.9,-141.9],[21.9,-147.3],[-28.299999999999997,-147.3],[-33.7,-135.3],[-43.2,-116.2],[-60.7,-107.8],[-77.10000000000001,-124.10000000000001],[-89.3,-119.4],[-124.8,-84.1],[-120.1,-71.8],[-113.3,-51.9],[-119.8,-33.5],[-142.9,-33.5],[-148.3,-21.5],[-148.3,28.299999999999997],[-136.3,33.7],[-117.1,43.1],[-108.6,60.5],[-124.9,76.7],[-120.2,89],[-84.7,124.3],[-72.5,119.6],[-52.4,112.60000000000001],[-33.8,119],[-33.8,141.9],[-21.8,147.3],[28.4,147.3],[33.8,135.3],[43.3,116.3],[60.7,107.9],[77.10000000000001,124.3],[89.3,119.6],[124.8,84.3],[120.1,72],[113.2,52.1],[119.7,33.7],[142.89999999999998,33.6]],\"v\":[[148.3,21.6],[148.3,-21.6],[136.3,-33.6],[119.8,-33.6],[108.6,-60.4],[120.2,-71.9],[120.2,-88.9],[89.4,-119.5],[72.5,-119.5],[60.8,-107.8],[33.9,-118.9],[33.9,-135.3],[21.9,-147.3],[-21.7,-147.3],[-33.7,-135.3],[-33.7,-118.9],[-60.7,-107.8],[-72.4,-119.4],[-89.3,-119.4],[-120.1,-88.8],[-120.1,-71.8],[-108.6,-60.3],[-119.8,-33.5],[-136.3,-33.5],[-148.3,-21.5],[-148.3,21.7],[-136.3,33.7],[-119.8,33.7],[-108.6,60.5],[-120.2,72],[-120.2,89],[-89.4,119.6],[-72.5,119.6],[-60.8,107.9],[-33.8,119],[-33.8,135.3],[-21.8,147.3],[21.8,147.3],[33.8,135.3],[33.8,119],[60.7,107.9],[72.4,119.6],[89.3,119.6],[120.1,89],[120.1,72],[108.5,60.5],[119.7,33.7],[136.2,33.7]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5883,0.3191,0.1517,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.55,147.55],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":181.000007372281,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"gear 03/Magellan_phone01 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":31,\"s\":[-60]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":34,\"s\":[-55]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":63,\"s\":[-120]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":66,\"s\":[-115]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":92,\"s\":[-180]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":95,\"s\":[-175]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":120,\"s\":[-240]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":123,\"s\":[-235]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":148,\"s\":[-300]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":151,\"s\":[-295]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":177,\"s\":[-360]},{\"t\":180.00000733155,\"s\":[-355]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[269.5,98,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[86.5,86,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[25.352,25.352,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[23.95,12.9],[10.350000000000001,27.2],[-1.9500000000000002,27.1],[-27.15,14],[-14.95,-27.2],[27.25,-15],[26.05,9]],\"o\":[[19.35,21.5],[-0.95,27.2],[-16.55,25.5],[-27.15,-15],[15.05,-27.2],[27.25,4.6],[24.05,12.8]],\"v\":[[23.95,13],[0.05,27.2],[-2.95,27],[-27.15,0],[0.05,-27.2],[27.25,0],[24.05,12.8]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[23.45,-42.4],[-42.35,-23.4],[-24.55,41.199999999999996],[-0.6499999999999999,42.4],[41.45,24.4],[42.35,0.1]],\"o\":[[-23.349999999999998,-42.4],[-42.35,22.7],[-1.3499999999999999,42.3],[22.85,42.4],[42.35,1.9],[42.35,-23.4]],\"v\":[[0.05,-42.4],[-42.35,0],[-2.05,42.3],[0.05,42.4],[42.35,1.9],[42.35,0.1]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5883,0.3191,0.1517,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[86.1,85.55],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[17.75,32.05],[-32.05,17.75],[-17.65,-31.95],[32.15,-17.65]],\"o\":[[-17.65,32.05],[-32.05,-17.65],[17.75,-31.95],[32.05,17.75]],\"v\":[[0.05,32.05],[-32.05,0.05],[0.05,-31.95],[32.15,0.05]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[86.05,16.45],[86.05,-12.45],[82.95,-19.45],[69.45,-19.45],[65.75,-30.150000000000002],[69.65,-41.65],[72.35000000000001,-48.849999999999994],[51.75,-69.25],[44.650000000000006,-71.95],[35.15,-62.45],[25.05,-67.35],[19.55,-78.45],[16.45,-85.45],[-12.75,-85.45],[-19.75,-82.35000000000001],[-19.75,-68.95],[-30.450000000000003,-65.25],[-42.15,-69.35],[-49.25,-72.05],[-69.85,-51.65],[-72.55,-44.45],[-63.15,-35.05],[-68.05000000000001,-24.950000000000003],[-79.05,-19.55],[-86.05,-16.45],[-86.05,12.45],[-82.95,19.45],[-69.45,19.45],[-65.75,30.150000000000002],[-69.65,41.65],[-72.35000000000001,48.849999999999994],[-51.75,69.25],[-44.650000000000006,71.95],[-35.15,62.45],[-25.05,67.35000000000001],[-19.55,78.45],[-16.45,85.45],[12.75,85.45],[19.75,82.35000000000001],[19.75,68.95],[30.450000000000003,65.25],[42.15,69.25],[49.25,71.95],[69.85,51.55],[72.55,44.35],[63.15,34.95],[68.05000000000001,24.85],[79.25,19.45]],\"o\":[[86.05,12.55],[86.05,-16.25],[79.05,-19.45],[67.85000000000001,-24.95],[62.95,-34.95],[72.35000000000001,-44.35],[69.65,-51.55],[49.05,-71.95],[41.95,-69.25],[30.25,-65.15],[19.55,-68.85],[19.55,-82.25],[12.55,-85.45],[-16.55,-85.45],[-19.75,-78.45],[-25.25,-67.45],[-35.35,-62.55],[-44.85,-72.05],[-51.95,-69.35],[-72.55,-48.949999999999996],[-69.85,-41.75],[-65.85,-30.15],[-69.65,-19.55],[-82.85,-19.55],[-86.05,-12.55],[-86.05,16.25],[-79.05,19.45],[-67.85000000000001,24.95],[-62.95,34.95],[-72.35000000000001,44.35],[-69.65,51.55],[-49.05,71.95],[-41.95,69.25],[-30.25,65.15],[-19.55,68.95],[-19.55,82.25],[-12.55,85.45],[16.55,85.45],[19.75,78.45],[25.25,67.35000000000001],[35.35,62.45],[44.85,71.95],[51.95,69.25],[72.55,48.849999999999994],[69.85,41.65],[65.85,30.050000000000004],[69.65,19.45],[82.95,19.55]],\"v\":[[86.05,12.55],[86.05,-12.45],[79.05,-19.45],[69.45,-19.45],[62.95,-34.95],[69.65,-41.65],[69.65,-51.55],[51.75,-69.25],[41.95,-69.25],[35.15,-62.45],[19.55,-68.85],[19.55,-78.45],[12.55,-85.45],[-12.75,-85.45],[-19.75,-78.45],[-19.75,-68.95],[-35.35,-62.55],[-42.15,-69.35],[-51.95,-69.35],[-69.85,-51.65],[-69.85,-41.75],[-63.15,-35.05],[-69.65,-19.55],[-79.05,-19.55],[-86.05,-12.55],[-86.05,12.45],[-79.05,19.45],[-69.45,19.45],[-62.95,34.95],[-69.65,41.65],[-69.65,51.55],[-51.75,69.25],[-41.95,69.25],[-35.15,62.45],[-19.55,68.95],[-19.55,78.45],[-12.55,85.45],[12.75,85.45],[19.75,78.45],[19.75,68.95],[35.35,62.45],[42.15,69.25],[51.95,69.25],[69.85,51.55],[69.85,41.65],[63.15,34.95],[69.65,19.45],[79.25,19.45]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9208,0.5745,0.3592,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[86.3,85.7],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":181.000007372281,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"gear 04/Magellan_phone01 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":31,\"s\":[60]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":34,\"s\":[55]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":63,\"s\":[120]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":66,\"s\":[115]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":92,\"s\":[180]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":95,\"s\":[175]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":120,\"s\":[240]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":123,\"s\":[235]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":148,\"s\":[300]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":151,\"s\":[295]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":177,\"s\":[360]},{\"t\":180.00000733155,\"s\":[355]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[226,114.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[86.5,86,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[25.352,25.352,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[23.95,12.9],[10.350000000000001,27.2],[-1.9500000000000002,27.1],[-27.15,14],[-14.95,-27.2],[27.25,-15],[26.05,9]],\"o\":[[19.35,21.5],[-0.95,27.2],[-16.55,25.5],[-27.15,-15],[15.05,-27.2],[27.25,4.6],[24.05,12.8]],\"v\":[[23.95,13],[0.05,27.2],[-2.95,27],[-27.15,0],[0.05,-27.2],[27.25,0],[24.05,12.8]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[23.45,-42.4],[-42.35,-23.4],[-24.55,41.199999999999996],[-0.6499999999999999,42.4],[41.45,24.4],[42.35,0.1]],\"o\":[[-23.349999999999998,-42.4],[-42.35,22.7],[-1.3499999999999999,42.3],[22.85,42.4],[42.35,1.9],[42.35,-23.4]],\"v\":[[0.05,-42.4],[-42.35,0],[-2.05,42.3],[0.05,42.4],[42.35,1.9],[42.35,0.1]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5883,0.3191,0.1517,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[86.1,85.55],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[17.75,32.05],[-32.05,17.75],[-17.65,-31.95],[32.15,-17.65]],\"o\":[[-17.65,32.05],[-32.05,-17.65],[17.75,-31.95],[32.05,17.75]],\"v\":[[0.05,32.05],[-32.05,0.05],[0.05,-31.95],[32.15,0.05]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[86.05,16.45],[86.05,-12.45],[82.95,-19.45],[69.45,-19.45],[65.75,-30.150000000000002],[69.65,-41.65],[72.35000000000001,-48.849999999999994],[51.75,-69.25],[44.650000000000006,-71.95],[35.15,-62.45],[25.05,-67.35],[19.55,-78.45],[16.45,-85.45],[-12.75,-85.45],[-19.75,-82.35000000000001],[-19.75,-68.95],[-30.450000000000003,-65.25],[-42.15,-69.35],[-49.25,-72.05],[-69.85,-51.65],[-72.55,-44.45],[-63.15,-35.05],[-68.05000000000001,-24.950000000000003],[-79.05,-19.55],[-86.05,-16.45],[-86.05,12.45],[-82.95,19.45],[-69.45,19.45],[-65.75,30.150000000000002],[-69.65,41.65],[-72.35000000000001,48.849999999999994],[-51.75,69.25],[-44.650000000000006,71.95],[-35.15,62.45],[-25.05,67.35000000000001],[-19.55,78.45],[-16.45,85.45],[12.75,85.45],[19.75,82.35000000000001],[19.75,68.95],[30.450000000000003,65.25],[42.15,69.25],[49.25,71.95],[69.85,51.55],[72.55,44.35],[63.15,34.95],[68.05000000000001,24.85],[79.25,19.45]],\"o\":[[86.05,12.55],[86.05,-16.25],[79.05,-19.45],[67.85000000000001,-24.95],[62.95,-34.95],[72.35000000000001,-44.35],[69.65,-51.55],[49.05,-71.95],[41.95,-69.25],[30.25,-65.15],[19.55,-68.85],[19.55,-82.25],[12.55,-85.45],[-16.55,-85.45],[-19.75,-78.45],[-25.25,-67.45],[-35.35,-62.55],[-44.85,-72.05],[-51.95,-69.35],[-72.55,-48.949999999999996],[-69.85,-41.75],[-65.85,-30.15],[-69.65,-19.55],[-82.85,-19.55],[-86.05,-12.55],[-86.05,16.25],[-79.05,19.45],[-67.85000000000001,24.95],[-62.95,34.95],[-72.35000000000001,44.35],[-69.65,51.55],[-49.05,71.95],[-41.95,69.25],[-30.25,65.15],[-19.55,68.95],[-19.55,82.25],[-12.55,85.45],[16.55,85.45],[19.75,78.45],[25.25,67.35000000000001],[35.35,62.45],[44.85,71.95],[51.95,69.25],[72.55,48.849999999999994],[69.85,41.65],[65.85,30.050000000000004],[69.65,19.45],[82.95,19.55]],\"v\":[[86.05,12.55],[86.05,-12.45],[79.05,-19.45],[69.45,-19.45],[62.95,-34.95],[69.65,-41.65],[69.65,-51.55],[51.75,-69.25],[41.95,-69.25],[35.15,-62.45],[19.55,-68.85],[19.55,-78.45],[12.55,-85.45],[-12.75,-85.45],[-19.75,-78.45],[-19.75,-68.95],[-35.35,-62.55],[-42.15,-69.35],[-51.95,-69.35],[-69.85,-51.65],[-69.85,-41.75],[-63.15,-35.05],[-69.65,-19.55],[-79.05,-19.55],[-86.05,-12.55],[-86.05,12.45],[-79.05,19.45],[-69.45,19.45],[-62.95,34.95],[-69.65,41.65],[-69.65,51.55],[-51.75,69.25],[-41.95,69.25],[-35.15,62.45],[-19.55,68.95],[-19.55,78.45],[-12.55,85.45],[12.75,85.45],[19.75,78.45],[19.75,68.95],[35.35,62.45],[42.15,69.25],[51.95,69.25],[69.85,51.55],[69.85,41.65],[63.15,34.95],[69.65,19.45],[79.25,19.45]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9208,0.5745,0.3592,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[86.3,85.7],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":181.000007372281,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"gear 02/Magellan_phone01 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1.096]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":31,\"s\":[-60]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0.071]},\"t\":34,\"s\":[-55]},{\"i\":{\"x\":[0.667],\"y\":[1.115]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":63,\"s\":[-120]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0.077]},\"t\":66,\"s\":[-115]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":92,\"s\":[-180]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":95,\"s\":[-175]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":120,\"s\":[-240]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":123,\"s\":[-235]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":148,\"s\":[-300]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":151,\"s\":[-295]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":177,\"s\":[-360]},{\"t\":180.00000733155,\"s\":[-355]}],\"ix\":10,\"x\":\"var $bm_rt;\\n$bm_rt = transform.rotation;\"},\"p\":{\"a\":0,\"k\":[57.5,180,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[108.5,108,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[25.352,25.352,100],\"ix\":6,\"x\":\"var $bm_rt;\\n$bm_rt = transform.scale;\"}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[30.15,16.2],[13.05,34],[-2.55,33.9],[-34.15,17.4],[-18.85,-34.2],[34.35,-18.900000000000002],[32.85,11.2]],\"o\":[[24.349999999999998,26.799999999999997],[-1.25,34],[-20.85,31.9],[-34.15,-19],[19.15,-34.2],[34.35,5.7],[30.25,16.1]],\"v\":[[30.15,16.2],[0.05,34],[-3.75,33.8],[-34.15,-0.1],[0.15,-34.2],[34.35,-0.1],[30.35,16]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[29.45,-53.3],[-53.25,-29.5],[-30.849999999999998,51.800000000000004],[-0.9500000000000001,53.3],[51.949999999999996,30.7],[53.15,0]],\"o\":[[-29.349999999999998,-53.3],[-53.25,28.5],[-1.75,53.2],[28.55,53.3],[53.15,2.3],[53.25,-29.5]],\"v\":[[0.05,-53.3],[-53.25,0],[-2.65,53.2],[-0.05,53.3],[53.15,2.3],[53.15,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5883,0.3191,0.1517,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[108.2,107.55],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[22.3,40.2],[-40.3,22.2],[-22.2,-40.2],[40.3,-22.2]],\"o\":[[-22.3,40.2],[-40.3,-22.2],[22.3,-40.2],[40.3,22.2]],\"v\":[[0,40.2],[-40.3,0],[0,-40.2],[40.3,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[108.2,20.6],[108.2,-15.8],[104.30000000000001,-24.6],[87.3,-24.6],[82.6,-38],[87.6,-52.5],[91,-61.50000000000001],[65.1,-87.2],[56.199999999999996,-90.60000000000001],[44.2,-78.7],[31.5,-84.89999999999999],[24.5,-98.7],[20.6,-107.5],[-16.1,-107.5],[-24.9,-103.60000000000001],[-24.9,-86.8],[-38.4,-82.10000000000001],[-53.2,-87.2],[-62.099999999999994,-90.60000000000001],[-88.1,-64.9],[-91.5,-55.9],[-79.6,-44.1],[-85.8,-31.400000000000002],[-99.4,-24.6],[-108.2,-20.700000000000003],[-108.2,15.7],[-104.30000000000001,24.5],[-87.3,24.5],[-82.6,37.9],[-87.6,52.4],[-91,61.4],[-65.2,87.2],[-56.3,90.60000000000001],[-44.2,78.7],[-31.5,84.89999999999999],[-24.5,98.7],[-20.6,107.5],[16.1,107.5],[24.9,103.60000000000001],[24.9,86.8],[38.4,82.10000000000001],[53.2,87.2],[62.1,90.60000000000001],[88,64.9],[91.4,55.9],[79.5,44.1],[85.7,31.400000000000002],[99.8,24.6]],\"o\":[[108.2,15.7],[108.2,-20.6],[99.4,-24.6],[85.39999999999999,-31.5],[79.1,-44.1],[91,-55.9],[87.6,-64.9],[61.699999999999996,-90.60000000000001],[52.8,-87.2],[38.1,-82.10000000000001],[24.5,-86.8],[24.5,-103.5],[15.7,-107.5],[-20.900000000000002,-107.5],[-24.9,-98.7],[-31.799999999999997,-84.89999999999999],[-44.6,-78.7],[-56.6,-90.60000000000001],[-65.6,-87.2],[-91.5,-61.50000000000001],[-88.1,-52.5],[-83.1,-38],[-87.8,-24.6],[-104.2,-24.6],[-108.2,-15.8],[-108.2,20.5],[-99.4,24.5],[-85.3,31.4],[-79.1,44],[-91,55.8],[-87.6,64.8],[-61.800000000000004,90.60000000000001],[-52.8,87.2],[-38,82.10000000000001],[-24.5,86.8],[-24.5,103.5],[-15.7,107.5],[20.900000000000002,107.5],[24.9,98.7],[31.799999999999997,84.8],[44.6,78.7],[56.6,90.60000000000001],[65.5,87.2],[91.4,61.50000000000001],[88,52.5],[83,38],[87.7,24.6],[104.3,24.5]],\"v\":[[108.2,15.7],[108.2,-15.8],[99.4,-24.6],[87.3,-24.6],[79.1,-44.1],[87.6,-52.5],[87.6,-64.9],[65.1,-87.2],[52.8,-87.2],[44.2,-78.7],[24.5,-86.8],[24.5,-98.7],[15.7,-107.5],[-16.1,-107.5],[-24.9,-98.7],[-24.9,-86.8],[-44.6,-78.7],[-53.2,-87.2],[-65.6,-87.2],[-88.1,-64.9],[-88.1,-52.5],[-79.6,-44.1],[-87.8,-24.6],[-99.4,-24.6],[-108.2,-15.8],[-108.2,15.7],[-99.4,24.5],[-87.3,24.5],[-79.1,44],[-87.6,52.4],[-87.6,64.8],[-65.2,87.2],[-52.8,87.2],[-44.2,78.7],[-24.5,86.8],[-24.5,98.7],[-15.7,107.5],[16.1,107.5],[24.9,98.7],[24.9,86.8],[44.6,78.7],[53.2,87.2],[65.5,87.2],[88,64.9],[88,52.5],[79.5,44.1],[87.7,24.6],[99.8,24.6]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9208,0.5745,0.3592,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[108.45,107.75],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":181.000007372281,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"gear 05/Magellan_phone01 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.653],\"y\":[1.239]},\"o\":{\"x\":[0.318],\"y\":[0]},\"t\":31,\"s\":[60]},{\"i\":{\"x\":[0.695],\"y\":[1.199]},\"o\":{\"x\":[0.321],\"y\":[0.165]},\"t\":34,\"s\":[55]},{\"i\":{\"x\":[0.682],\"y\":[0.819]},\"o\":{\"x\":[0.35],\"y\":[0.308]},\"t\":63,\"s\":[120]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.402],\"y\":[-0.153]},\"t\":66,\"s\":[115]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":92,\"s\":[180]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":95,\"s\":[175]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":120,\"s\":[240]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":123,\"s\":[235]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":148,\"s\":[300]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":151,\"s\":[295]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":177,\"s\":[360]},{\"t\":180.00000733155,\"s\":[355]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[74,244.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[149,147.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[25.352,25.352,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[41.300000000000004,22.2],[17.8,46.8],[-3.5,46.7],[-47,24.1],[-26,-46.8],[46.9,-25.8],[44.9,15.5]],\"o\":[[33.300000000000004,36.9],[-1.8,46.8],[-28.8,43.9],[-47,-25.8],[25.9,-46.8],[46.9,8],[41.4,22.1]],\"v\":[[41.2,22.3],[0,46.8],[-5.3,46.5],[-47,0],[0,-46.8],[46.9,0],[41.4,22]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[40.3,-73],[-73,-40.3],[-42.2,71],[-1.2,73],[71.30000000000001,42],[73,1]],\"o\":[[-40.3,-73],[-73,39.1],[-2.4000000000000004,73],[39.3,73],[72.9,2.1],[73,-40.3]],\"v\":[[0,-73],[-73,0],[-3.6,72.9],[0,73],[72.9,3.1],[73,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9208,0.5745,0.3592,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.25,147.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[30.5,55.25],[-55.3,30.549999999999997],[-30.5,-54.95],[55.3,-30.25]],\"o\":[[-30.5,55.25],[-55.3,-30.25],[30.5,-54.95],[55.3,30.549999999999997]],\"v\":[[0,55.25],[-55.3,0.15],[0,-54.95],[55.3,0.15]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[148.3,28.349999999999998],[148.3,-21.55],[142.9,-33.55],[119.8,-33.55],[113.39999999999999,-51.95],[120.2,-71.85],[124.9,-84.14999999999999],[89.4,-119.45],[77.2,-124.15],[60.8,-107.75],[43.3,-116.14999999999999],[33.9,-135.25],[28.5,-147.25],[-21.7,-147.25],[-33.7,-141.85],[-33.7,-118.85],[-52.2,-112.45],[-72.4,-119.45],[-84.6,-124.15],[-120.1,-88.85],[-124.8,-76.55],[-108.5,-60.35],[-117,-43.05],[-136.3,-33.55],[-148.3,-28.15],[-148.3,21.65],[-142.9,33.65],[-119.8,33.65],[-113.3,52.050000000000004],[-120.2,71.95],[-124.9,84.25],[-89.4,119.55],[-77.2,124.25],[-60.8,107.85],[-43.3,116.25],[-33.8,135.25],[-28.4,147.25],[21.8,147.25],[33.8,141.85],[33.8,118.95],[52.300000000000004,112.55],[72.4,119.55],[84.6,124.25],[120.1,88.95],[124.8,76.65],[108.5,60.45],[117,43.15],[136.2,33.65]],\"o\":[[148.3,21.65],[148.3,-28.15],[136.3,-33.55],[117.1,-42.949999999999996],[108.6,-60.35],[124.9,-76.55],[120.2,-88.85],[84.7,-124.15],[72.5,-119.45],[52.4,-112.45],[33.9,-118.85],[33.9,-141.85],[21.9,-147.25],[-28.299999999999997,-147.25],[-33.7,-135.25],[-43.2,-116.14999999999999],[-60.7,-107.75],[-77.10000000000001,-124.15],[-89.3,-119.45],[-124.8,-84.14999999999999],[-120.1,-71.85],[-113.2,-51.95],[-119.7,-33.55],[-142.9,-33.55],[-148.3,-21.55],[-148.3,28.25],[-136.3,33.65],[-117.1,43.05],[-108.6,60.45],[-124.9,76.65],[-120.2,88.95],[-84.7,124.25],[-72.5,119.55],[-52.4,112.55],[-33.8,118.95],[-33.8,141.85],[-21.8,147.25],[28.4,147.25],[33.8,135.25],[43.3,116.25],[60.7,107.85],[77.10000000000001,124.25],[89.3,119.55],[124.8,84.25],[120.1,71.95],[113.2,52.050000000000004],[119.7,33.65],[142.89999999999998,33.65]],\"v\":[[148.3,21.65],[148.3,-21.55],[136.3,-33.55],[119.8,-33.55],[108.6,-60.35],[120.2,-71.85],[120.2,-88.85],[89.4,-119.45],[72.5,-119.45],[60.8,-107.75],[33.9,-118.85],[33.9,-135.25],[21.9,-147.25],[-21.7,-147.25],[-33.7,-135.25],[-33.7,-118.85],[-60.7,-107.75],[-72.4,-119.45],[-89.3,-119.45],[-120.1,-88.85],[-120.1,-71.85],[-108.5,-60.35],[-119.7,-33.55],[-136.3,-33.55],[-148.3,-21.55],[-148.3,21.65],[-136.3,33.65],[-119.8,33.65],[-108.6,60.45],[-120.2,71.95],[-120.2,88.95],[-89.4,119.55],[-72.5,119.55],[-60.8,107.85],[-33.8,118.95],[-33.8,135.25],[-21.8,147.25],[21.8,147.25],[33.8,135.25],[33.8,118.95],[60.7,107.85],[72.4,119.55],[89.3,119.55],[120.1,88.95],[120.1,71.95],[108.5,60.45],[119.7,33.65],[136.2,33.65]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5883,0.3191,0.1517,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.55,147.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":181.000007372281,\"st\":0,\"bm\":0,\"completed\":true},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"device/Magellan_phone01 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[150,150,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[297,579.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[25.352,25.352,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.8,13.65],[5.3,12.75],[11.4,7.65],[13.6,-0.04999999999999982],[11.200000000000001,-7.65],[5,-12.65],[-3,-13.35],[-10,-9.45],[-13.6,-2.25],[-13.2,3.85],[-10.799999999999999,8.55],[-6.9,11.950000000000001]],\"o\":[[2.7,13.55],[9.7,9.75],[13.4,2.6500000000000004],[12.6,-5.25],[7.4,-11.450000000000001],[-0.30000000000000027,-13.65],[-7.9,-11.15],[-12.8,-4.95],[-13.5,2.05],[-11.8,7.050000000000001],[-8.4,10.95],[-3.5,13.350000000000001]],\"v\":[[0,13.55],[7.5,11.25],[12.4,5.15],[13.1,-2.65],[9.3,-9.55],[2.3,-13.15],[-5.5,-12.25],[-11.4,-7.15],[-13.5,0.35],[-12.5,5.45],[-9.6,9.75],[-5.2,12.55]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[376.45,58.9],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[48.8,12.5],[-45.8,13.1],[-51.5,10.8],[-56.4,3],[-55.4,-6],[-48.8,-12.4],[45.8,-13.1],[51.5,-10.8],[56.4,-3],[55.4,6]],\"o\":[[45.8,13.1],[-48.8,12.5],[-55.3,6],[-56.4,-3.1],[-51.5,-10.8],[-45.8,-13.1],[48.8,-12.5],[55.3,-6],[56.4,3.1],[51.5,10.8]],\"v\":[[45.8,13.1],[-45.8,13.1],[-53.4,8.4],[-56.4,0],[-53.4,-8.4],[-45.8,-13.1],[45.8,-13.1],[53.4,-8.4],[56.4,0],[53.4,8.4]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.2627,0.102,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[269.35,59.35],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-296.5,-465.85],[296.5,-465.85],[296.5,465.85],[-296.5,465.85]],\"o\":[[-296.5,-465.85],[296.5,-465.85],[296.5,465.85],[-296.5,465.85]],\"v\":[[-296.5,-465.85],[296.5,-465.85],[296.5,465.85],[-296.5,465.85]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0.25,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.95,0.95,0.95,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[296.85,579.1],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[264.6,578.85],[-225,578.85],[-296.6,543.55],[-296.6,-500.05],[-264.5,-578.85],[225,-578.85],[296.6,-543.55],[296.6,500.05]],\"o\":[[225,578.85],[-264.6,578.85],[-296.6,500.05],[-296.6,-543.55],[-225,-578.85],[264.6,-578.85],[296.6,-500.05],[296.6,543.55]],\"v\":[[225,578.85],[-225,578.85],[-296.6,500.05],[-296.6,-500.05],[-225,-578.85],[225,-578.85],[296.6,-500.05],[296.6,500.05]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false,\"_render\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.2353,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"_render\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[296.85,579.1],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\",\"_render\":true}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"_render\":true}],\"ip\":0,\"op\":181.000007372281,\"st\":0,\"bm\":0,\"completed\":true}],\"markers\":[{\"tm\":180.00000733155,\"cm\":\"1\",\"dr\":0}],\"__complete\":true}");

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
  background-color: #302f2f;
  padding: 100px 0px 100px 0px;
  border-radius: 66px;
`;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
    width:80%;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: White;
`;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  width:82%;
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: gray;
`;
const CTAButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  padding: 15px 30px;
  font-size: 1rem;
  color: white;
  background-color: green;
  border: 1px solid green;
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 18px;

  &:hover {
    background-color: ${({
  theme
}) => theme.colors.darkRed};
  }
`;
const ButtonIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  width: 20px; /* Adjust the size of the GIF icon */
  height: 20px; /* Adjust the size of the GIF icon */
  margin-right: 10px; /* Space between the icon and text */
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
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTADescription, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
        children: "Click to explore our transformative solutions in augmented reality, web development, and smart detection technologies. Start your digital revolution now!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CTAButton, {
      href: "tel:8660449970",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ButtonIcon, {
        src: "gif.gif",
        alt: "GIF Icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), "Call to Action"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-react */ "lottie-react");
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_shared_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/shared/container */ "./styles/shared/container.js");
/* harmony import */ var _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Lottie/work.json */ "./components/Lottie/work.json");
var _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Lottie/work.json */ "./components/Lottie/work.json", 1);
/* harmony import */ var _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Lottie/nexar.json */ "./components/Lottie/nexar.json");
var _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Lottie/nexar.json */ "./components/Lottie/nexar.json", 1);
/* harmony import */ var _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Lottie/works.json */ "./components/Lottie/works.json");
var _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../Lottie/works.json */ "./components/Lottie/works.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Projects\\netlifych\\components\\Misc\\Nexar.jsx";









const CTASection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].section)`
  ${_styles_shared_container__WEBPACK_IMPORTED_MODULE_4__["default"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
  background-color: #302f2f;
  padding: 100px 0;
  border-radius: 66px;
`;
const SectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allows wrapping for smaller screens */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  flex: 1;
  margin: 0 20px;
  max-width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 20px 0;
    max-width: 80%;
  }
`;
const LottieContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 160px;
  height: 160px; /* Fixed height for uniformity */
  margin: 0 auto; /* Center the animation */
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
const CTAHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
  font-size: 6rem;
  font-weight: 700;
  margin: 20px 0;
  color: white;
`;
const CTADescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  color: gray;
`;
const CallToAction = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTASection, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.5
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(SectionsContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "nexAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          onClick: () => window.location.href = "tel:8660449970",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_nexar_json__WEBPACK_IMPORTED_MODULE_6__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "Luminexa Technologies developed image tracking virtual software based on Augmented Reality and Mixed Reality, named it nexAR."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "How"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          onClick: () => window.location.href = "tel:8660449970",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_work_json__WEBPACK_IMPORTED_MODULE_5__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "nexAR is a WebAR solution that displays content like 3D models, holographic avatars, videos, images, audio, and links when the nexAR camera is pointed at a 2D surface."
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
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Section, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAHeading, {
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(LottieContainer, {
          onClick: () => window.location.href = "tel:8660449970",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(lottie_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
            animationData: _Lottie_works_json__WEBPACK_IMPORTED_MODULE_7__,
            loop: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTADescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
            children: "nexAR requires no additional app installations and works seamlessly on all smartphones, whether Android or iOS."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
      style: {
        color: '#e6e3e3 ',
        margin: '19px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
        children: "\"Differentiate yourself from competition\""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 56
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
      style: {
        color: 'gray',
        fontSize: '80px'
      },
      children: "go viral!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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

/***/ "lottie-react":
/*!*******************************!*\
  !*** external "lottie-react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lottie-react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5pbWF0ZU9uU2NyZWVuL0FuaW1hdGVPblNjcmVlbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBCYXIvQXBwQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcEJhci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYW52YXNFcmFzZXIvQ2FudmFzRXJhc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbnZhc0VyYXNlci9DYW52YXNFcmFzZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FudmFzRXJhc2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9BYm91dC9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9BYm91dC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9CYW5uZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9CYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvQ29udGFjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L0NvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWRQcm9qZWN0L0ZlYXR1cmVkUHJvamVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ZlYXR1cmVkUHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWRQcm9qZWN0L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9ybS9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0Fycm93LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0ZhY2Vib29rLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9MaW5rZWRpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9Mb2dvLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL1R3aXR0ZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvWW91dHViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnVCdXR0b24vTWVudUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51QnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudUJ1dHRvbi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NaXNjL0NhbGwuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWlzYy9OZXhhci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0aWNreUN1cnNvci9TdGlja3lDdXJzb3IuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RpY2t5Q3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VDdXJzb3JTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VGb3JrUmVmLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZU1lZGlhUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlU3R5bGVkVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zaGFyZWQvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMvc2VydmljZXMtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlcnNsaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvdHRpZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ0cmFuc2xhdGVZIiwiZHVyYXRpb24iLCJlYXNlIiwib3BhY2l0eSIsInZhcmlhbnRzIiwic2hvdyIsImhpZGRlbiIsIkFuaW1hdGVPblNjcmVlbiIsImNoaWxkcmVuIiwiY2hpbGRyZW5Qcm9wIiwiYW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uIiwiaW5WaWV3UmVmIiwiaW5WaWV3IiwidXNlSW5WaWV3IiwidHJpZ2dlck9uY2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInN0YXJ0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiaGFuZGxlUmVmIiwibm9kZSIsInJlZiIsImN1cnJlbnQiLCJjbG9uZUVsZW1lbnQiLCJhbmltYXRlIiwiaW5pdGlhbCIsIm1lbW8iLCJnZXRTdHlsZXMiLCJkaXJlY3Rpb24iLCJ0b3AiLCJib3R0b20iLCJ5IiwiQXBwQmFyIiwicHJvcHMiLCJvZmZzZXQiLCJsb2dvUHJvcHMiLCJzdHlsZSIsInN0eWxlUHJvcCIsInJvb3RQcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNldEhpZGRlbiIsInVzZVN0YXRlIiwiaGFuZGxlU2Nyb2xsIiwic2hvdWxkSGlkZSIsImludGVyc2VjdGlvbiIsImN1cnJlbnRZUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX2pzeERFViIsIlNsaWRlciIsIl9vYmplY3RTcHJlYWQiLCJDb250YWluZXIiLCJMaW5rIiwiaHJlZiIsInBhc3NIcmVmIiwiU3R5bGVkTGluayIsInRpdGxlIiwiTG9nbyIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIk1lbnVXcmFwcGVyIiwiTWVudUJ1dHRvbiIsInN0eWxlZCIsIl9yZWYiLCJyZW5kZXJBcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsInRoZW1lIiwiekluZGV4Iiwic2xpZGVyIiwiZGl2IiwiY29udGFpbmVyU3R5bGVzIiwiYSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiQ2FudmFzRXJhc2VyIiwiY29tcGxldGVSYXRpbyIsImVuYWJsZWQiLCJvbkNvbXBsZXRlIiwib25Qcm9ncmVzcyIsInNpemUiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJvdGhlciIsImNhbnZhc0VyYXNlciIsInNldENhbnZhc0VyYXNlciIsImNhbnZhc1JlZiIsInVzZVJlZiIsImNvbXBvbmVudFJlZiIsInVzZUZvcmtSZWYiLCJvcHRpb25zIiwidXNlTWVtbyIsImNhbnZhcyIsImNhbnZhc0VyYXNlckZhY3RvcnkiLCJpbml0IiwiZm9yd2FyZFJlZiIsIkRFRkFVTFRfT1BUSU9OUyIsImdldEVsZW1lbnRDb21wdXRlZFN0eWxlZCIsImVsZW1lbnQiLCJwcm9wIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJyZXBsYWNlIiwiZmFjdG9yeSIsIl9jYW52YXMiLCJfY29udGV4dCIsIl9kYXRhIiwiX2hhbmRsZUVyYXNlclByb2dyZXNzIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImNvbFBhcnRzIiwibnVtUGFydHMiLCJwIiwiTWF0aCIsImZsb29yIiwicmF0aW8iLCJwYXJ0cyIsImNvbXBsZXRlIiwiX29uTW91c2VNb3ZlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc1giLCJwb3NZIiwic2NhbGVSYXRpbyIsInRvdWNoWCIsInRvdWNoWSIsInBhZ2VYIiwicGFnZVkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJfb25Nb3VzZURvd24iLCJ0b3VjaERvd24iLCJfb25Nb3VzZUNsaWNrIiwic291cmNlIiwiRXJyb3IiLCJjdXJyZW50T3B0aW9ucyIsImdldENvbnRleHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiYmFja2luZ1N0b3JlUmF0aW8iLCJ3ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwibW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwiYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJpIiwicHVzaCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ0b3VjaElEIiwicHRvdWNoWCIsInB0b3VjaFkiLCJ3IiwiaCIsImNsZWFyIiwiY2xlYXJSZWN0IiwicmVzZXQiLCJBYm91dCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaGFuZGxlTW91c2VFbnRlciIsInVzZUNhbGxiYWNrIiwiY3VyciIsImhhbmRsZU1vdXNlTGVhdmUiLCJOZXhhciIsIkNvbnRlbnRTZWN0aW9uIiwiVGV4dFdyYXBwZXIiLCJmb250U2l6ZSIsIlNlcnZpY2VzV3JhcHBlciIsIml0ZW1zIiwiaXRlbSIsInNlcnZpY2VzIiwiaXRlbUluZGV4IiwiRnJhZ21lbnQiLCJBY2NvcmRpb25Ub2dnbGUiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiQWNjb3JkaW9uQ29udGVudCIsInNlcnZpY2UiLCJzZXJ2aWNlSW5kZXgiLCJDYWxsIiwic2VjdGlvbiIsInNtYWxsIiwic2Vjb25kYXJ5Rm9udFN0eWxlIiwiYnV0dG9uIiwidGl0bGVBbmltYXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJpdGVtVGl0bGVBbmltYXRpb24iLCJzY2FsZSIsInRleHRzIiwiQmFubmVyIiwid2luZG93U2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdHlsZWRUaGVtZSIsImlzTW9iaWxlIiwiY3VycmVudFRleHQiLCJzZXRDdXJyZW50VGV4dCIsImluZGV4Iiwic2V0SW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldkluZGV4IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsIkJhbm5lclNlY3Rpb24iLCJWaWRlb0NvbnRhaW5lciIsInNyYyIsImxvb3AiLCJhdXRvUGxheSIsIm11dGVkIiwiQmFubmVyVGl0bGUiLCJzcGFuIiwiaDEiLCJGb290ZXIiLCJBbmltYXRpb25vblNjcmVlbiIsIkZvcm0iLCJGb290ZXJDb250YWluZXIiLCJjbGFzc05hbWUiLCJhbHQiLCJjb2xvciIsIlNvY2lhbE1lZGlhIiwiZm9vdGVyIiwiY29sb3JzIiwiQ29udGVudCIsIlRleHQiLCJoMiIsIndvcmRzIiwiRmVhdHVyZWRQcm9qZWN0IiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsIndvcmRJbmRleCIsInNldFdvcmRJbmRleCIsImlzVHlwaW5nIiwic2V0SXNUeXBpbmciLCJjb250cm9sc0luZm8iLCJjb250cm9sc0Fycm93IiwiaXNNZW51T3BlbiIsInVzZU1lbnVDb250ZXh0IiwiYWRkQ3Vyc29yQ29sb3IiLCJyZXNldEN1cnNvckNvbG9yIiwiaXNUYWJsZXRWaWV3IiwidXNlTWVkaWFRdWVyeSIsInNpemVzIiwidHlwaW5nRWZmZWN0IiwicHJldiIsIm5leHRDaGFySW5kZXgiLCJzbGljZSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwidGV4dCIsImhhbmRsZUFuY2hvckhvdmVyU3RhcnQiLCJ4IiwiaGFuZGxlQW5jaG9ySG92ZXJFbmQiLCJQcm9qZWN0QW5jaG9yIiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCIsIlByb2plY3RJbmZvIiwiUHJvamVjdFRpdGxlIiwiQXJyb3ciLCJWaWRlb1ByZXZpZXciLCJNZW51Q29udGFpbmVyIiwic3RpY2t5IiwiRGVmYXVsdE1lbnVCdXR0b24iLCJtZWRpdW0iLCJDb250YWN0U2VjdGlvbiIsIkZvcm1XcmFwcGVyIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJncmF5IiwicmVkIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlN1Ym1pdEJ1dHRvbiIsImRhcmtSZWQiLCJDb250YWN0Rm9ybSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicm93cyIsIm1hcmdpblRvcCIsImZpbGxDb2xvciIsIndoaXRlIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZCIsImZpbGwiLCJmaWxsUnVsZSIsIkljb25GYWNlYm9vayIsIkljb25JbnN0YWdyYW0iLCJJY29uTGlua2VkaW5DaXJjbGVkIiwiTG9nb0NvbnRhaW5lciIsIlN0eWxlZExvZ28iLCJpbWciLCJJY29uVHdpdHRlckNpcmNsZSIsIkljb25Zb3V0dWJlIiwiZGlzcGF0Y2giLCJoYW5kbGVPblRvZ2dsZSIsIlN0aWNreUN1cnNvciIsIkJ1dHRvbiIsIkNUQVNlY3Rpb24iLCJDVEFIZWFkaW5nIiwiQ1RBRGVzY3JpcHRpb24iLCJDVEFCdXR0b24iLCJCdXR0b25JY29uIiwiQ2FsbFRvQWN0aW9uIiwiU2VjdGlvbnNDb250YWluZXIiLCJTZWN0aW9uIiwiTG90dGllQ29udGFpbmVyIiwibG9jYXRpb24iLCJMb3R0aWUiLCJhbmltYXRpb25EYXRhIiwiYW5pbWF0aW9uMiIsImFuaW1hdGlvbjEiLCJhbmltYXRpb24zIiwibWFyZ2luIiwibWVkaWFzIiwiY29tcG9uZW50IiwiSW5zdGFncmFtIiwidXJsIiwiRmFjZWJvb2siLCJZb3V0dWJlIiwiVHdpdHRlciIsIkxpbmtlZGluIiwidGFyZ2V0IiwiY2hpbGRSZWYiLCJsb2NrQ3Vyc29yUG9zaXRpb24iLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJJTklUSUFMX1NUQVRFIiwiY3Vyc29yU3R5bGUiLCJib3JkZXJlZCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiQ3Vyc29yQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDdXJzb3JDb250ZXh0UHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwic3RvcmUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ3Vyc29yQ29udGV4dCIsInVzZUNvbnRleHQiLCJNZW51Q29udGV4dCIsIk1lbnVDb250ZXh0UHJvdmlkZXIiLCJjb29yZGluYXRlcyIsInNldFJlZiIsInJlZkEiLCJyZWZCIiwicmVmVmFsdWUiLCJxdWVyeUlucHV0IiwiVGhlbWVDb250ZXh0IiwicXVlcnkiLCJpc0NsaWVudFNpZGUiLCJkZWZhdWx0TWF0Y2hlcyIsIm1hdGNoTWVkaWEiLCJtYXRjaCIsInNldE1hdGNoIiwibWF0Y2hlcyIsInVuZGVmaW5lZCIsInF1ZXJ5TGlzdCIsInVwZGF0ZU1hdGNoIiwic2V0V2luZG93U2l6ZSIsImhhbmRsZVJlc2l6ZSIsImlubmVyV2lkdGgiLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInByZWZldGNoIiwicm91dGVyIiwiYXMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJsb2NhbGUiLCJub2RlTmFtZSIsImluZGV4T2YiLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiYm9keSIsImZvY3VzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ3YXJuIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwib25seSIsImNsZWFudXAiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwcmlvcml0eSIsImRlZmF1bHRMb2NhbGUiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsIlJvdXRlciIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlUm91dGVyIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQXJyYXkiLCJpc0FycmF5Iiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaXNMb2NhbFVSTCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwic3NnNDA0IiwibW9kIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiX2dldFN0YXRpY0RhdGEiLCJnZXREYXRhSHJlZiIsIl9lcnIiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiX2dldERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiX19uZXh0TG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJ1c2VkIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXRVUkwiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiU1AiLCJtZWFzdXJlIiwiSG9tZSIsIl9GcmFnbWVudCIsIkZlYXR1cmVkU2VjdGlvbiIsIkFib3V0U2VjdGlvbiIsImJsYWNrIiwiY3NzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ21CO0FBQ1c7QUFFeEQsTUFBTUEsVUFBVSxHQUFHO0VBQ2pCQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxVQUFVLEVBQUU7SUFDVkMsUUFBUSxFQUFFLENBQUM7SUFDWEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVB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RUFDYixDQUNFLHFCQUFxQixFQUNyQixDQUNFLFVBQVUsRUFDVixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsaUNBQWlDLENBQ2xDLENBQ0YsRUFDRCxDQUNFLGlCQUFpQixFQUNqQixDQUNFLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLDRCQUE0QixFQUM1QixtQkFBbUIsQ0FDcEIsQ0FDRixFQUNELENBQ0UsdUJBQXVCLEVBQ3ZCLENBQ0UscUJBQXFCLEVBQ3JCLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsNEJBQTRCLEVBQzVCLHdCQUF3QixFQUN4QiwyQkFBMkIsQ0FFNUIsQ0FDRixFQUNELENBQ0UsMkJBQTJCLEVBQzNCLENBQ0UsSUFBSSxDQUVMLENBQ0YsQ0FDRixFOzs7Ozs7Ozs7OztBQ3pDRCx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICBkZWxheTogMC4zLFxyXG4gIHRyYW5zbGF0ZVk6IHtcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgZWFzZTogWzAsIDAuNywgMC4yOSwgMC45N10sXHJcbiAgfSxcclxuICBvcGFjaXR5OiB7XHJcbiAgICBkdXJhdGlvbjogMSxcclxuICAgIGVhc2U6IFswLjI1LCAwLjEsIDAuMjUsIDEuMF0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIHNob3c6IHsgdHJhbnNsYXRlWTogMCwgb3BhY2l0eTogMSB9LFxyXG4gIGhpZGRlbjogeyB0cmFuc2xhdGVZOiA2MCwgb3BhY2l0eTogMCB9LFxyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0ZU9uU2NyZWVuID0gKHsgY2hpbGRyZW46IGNoaWxkcmVuUHJvcCB9KSA9PiB7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgW2luVmlld1JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7IHRyaWdnZXJPbmNlOiB0cnVlIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluVmlldykge1xyXG4gICAgICBhbmltYXRpb24uc3RhcnQoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9LCBbYW5pbWF0aW9uLCBpblZpZXcsIGluVmlld1JlZl0pO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlblByb3AsIGNoaWxkID0+IHtcclxuICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZiA9IG5vZGUgPT4ge1xyXG4gICAgICAvLyBLZWVwIHlvdXIgb3duIHJlZmVyZW5jZVxyXG4gICAgICBpblZpZXdSZWYobm9kZSk7XHJcblxyXG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCByZWYsIGlmIGFueVxyXG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGQ7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVmKG5vZGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgIHZhcmlhbnRzLFxyXG4gICAgICB0cmFuc2l0aW9uLFxyXG4gICAgICBhbmltYXRlOiBhbmltYXRpb24sXHJcbiAgICAgIGluaXRpYWw6ICdoaWRkZW4nLFxyXG4gICAgICByZWY6IGhhbmRsZVJlZixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFuaW1hdGVPblNjcmVlbik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FuaW1hdGVPblNjcmVlbic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9JY29ucy9Mb2dvJztcclxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi4vTWVudUJ1dHRvbic7XHJcbmltcG9ydCB7IFNsaWRlciwgQ29udGFpbmVyLCBTdHlsZWRMaW5rLCBNZW51V3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IGdldFN0eWxlcyA9IChkaXJlY3Rpb24gPSAnJykgPT4ge1xyXG4gIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykgcmV0dXJuIHsgdG9wOiAwIH07XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykgcmV0dXJuIHsgYm90dG9tOiAwIH07XHJcblxyXG4gIHJldHVybiB7fTtcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyB5OiAtMTMxIH0sXHJcbiAgc2hvdzogeyB5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBBcHBCYXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGlyZWN0aW9uID0gJ2Rvd24nLFxyXG4gICAgb2Zmc2V0ID0gMTA1LFxyXG4gICAgbG9nb1Byb3BzID0ge30sXHJcbiAgICBzdHlsZTogc3R5bGVQcm9wID0ge30sXHJcbiAgICAuLi5yb290UHJvcHNcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgbGV0IHNob3VsZEhpZGUgPSBmYWxzZTtcclxuICAgICAgbGV0IGludGVyc2VjdGlvbiA9IG9mZnNldDtcclxuICAgICAgbGV0IGN1cnJlbnRZUG9zaXRpb24gPSAwO1xyXG5cclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XHJcbiAgICAgICAgY3VycmVudFlQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgICAgIGN1cnJlbnRZUG9zaXRpb24gPVxyXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBpbnRlcnNlY3Rpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzaG91bGRIaWRlID0gY3VycmVudFlQb3NpdGlvbiA+IGludGVyc2VjdGlvbjtcclxuICAgICAgaWYgKHNob3VsZEhpZGUgIT09IGhpZGRlbikge1xyXG4gICAgICAgIHNldEhpZGRlbihzaG91bGRIaWRlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTY3JvbGwoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCBmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbaGlkZGVuLCBkaXJlY3Rpb24sIG9mZnNldF0pO1xyXG5cclxuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoZGlyZWN0aW9uKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZXJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgYW5pbWF0ZT17aGlkZGVuID8gJ2hpZGRlbicgOiAnc2hvdyd9XHJcbiAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICBlYXNlOiBbMC42NjYsIDAsIDAuMjM3LCAxXSxcclxuICAgICAgfX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZXMsXHJcbiAgICAgICAgLi4uc3R5bGVQcm9wLFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucm9vdFByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICA8U3R5bGVkTGluayB0aXRsZT1cIm5leGFyXCI+XHJcbiAgICAgICAgICAgIDxMb2dvIHsuLi5sb2dvUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxNZW51V3JhcHBlcj5cclxuICAgICAgICAgIDxNZW51QnV0dG9uIHRpdGxlPVwiUHJvamVjdHNcIiAvPlxyXG4gICAgICAgIDwvTWVudVdyYXBwZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQXBwQmFyKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQXBwQmFyJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IFNsaWRlciA9IHN0eWxlZCgoeyByZW5kZXJBcywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBDb21wb25lbnQgPSBtb3Rpb25bcmVuZGVyQXNdIHx8ICdkaXYnO1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufSlgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHotaW5kZXg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuekluZGV4LnNsaWRlcn07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU0cHg7XG4gIGxlZnQ6IGF1dG87XG4gIHdpZHRoOiAxMzFweDtcbiAgaGVpZ2h0OiAyM3B4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHdpZHRoOiA5OXB4O1xuICAgIGhlaWdodDogMTdweDtcbiAgICB0b3A6IDMycHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU0cHg7XG4gIHJpZ2h0OiAzMnB4O1xuICBtYXJnaW46IC0yMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHRvcDogMjlweDtcbiAgYH07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vLi4vaG9va3MvdXNlRm9ya1JlZic7XHJcbmltcG9ydCBjYW52YXNFcmFzZXJGYWN0b3J5IGZyb20gJy4vQ2FudmFzRXJhc2VyRmFjdG9yeSc7XHJcblxyXG5jb25zdCBDYW52YXNFcmFzZXIgPSAocHJvcHMsIHJlZikgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbXBsZXRlUmF0aW8gPSAxLFxyXG4gICAgZW5hYmxlZCA9IHRydWUsXHJcbiAgICBvbkNvbXBsZXRlID0gbnVsbCxcclxuICAgIG9uUHJvZ3Jlc3MgPSBudWxsLFxyXG4gICAgc2l6ZSA9IDQwLFxyXG4gICAgYmFja2dyb3VuZCA9ICcjMDAwJyxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0LFxyXG4gICAgLi4ub3RoZXJcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtjYW52YXNFcmFzZXIsIHNldENhbnZhc0VyYXNlcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjYW52YXNSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlRm9ya1JlZihjYW52YXNSZWYsIHJlZik7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgY29tcGxldGVSYXRpbyxcclxuICAgICAgZW5hYmxlZCxcclxuICAgICAgb25Db21wbGV0ZSxcclxuICAgICAgb25Qcm9ncmVzcyxcclxuICAgICAgc2l6ZSxcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodCxcclxuICAgIH0pLFxyXG4gICAgW1xyXG4gICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICBjb21wbGV0ZVJhdGlvLFxyXG4gICAgICBlbmFibGVkLFxyXG4gICAgICBvbkNvbXBsZXRlLFxyXG4gICAgICBvblByb2dyZXNzLFxyXG4gICAgICBzaXplLFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgXSxcclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzRXJhc2VyRmFjdG9yeSgpO1xyXG4gICAgc2V0Q2FudmFzRXJhc2VyKGNhbnZhcyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNhbnZhc0VyYXNlcikge1xyXG4gICAgICBjYW52YXNFcmFzZXIuaW5pdChjYW52YXNSZWYuY3VycmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfSwgW2NhbnZhc0VyYXNlciwgb3B0aW9uc10pO1xyXG5cclxuICByZXR1cm4gPGNhbnZhcyByZWY9e2NvbXBvbmVudFJlZn0gey4uLm90aGVyfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoQ2FudmFzRXJhc2VyKTtcclxuIiwiY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xyXG4gIGJhY2tncm91bmQ6ICcjMDAwJyxcclxuICBjb21wbGV0ZVJhdGlvOiAxLFxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbiAgb25Db21wbGV0ZTogbnVsbCxcclxuICBvblByb2dyZXNzOiBudWxsLFxyXG4gIHNpemU6IDQwLFxyXG59O1xyXG5cclxuY29uc3QgZ2V0RWxlbWVudENvbXB1dGVkU3R5bGVkID0gKGVsZW1lbnQsIHByb3ApID0+IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtwcm9wXS5yZXBsYWNlKCdweCcsICcnKSk7XHJcblxyXG5jb25zdCBmYWN0b3J5ID0gKCkgPT4ge1xyXG4gIGxldCBfY2FudmFzID0gbnVsbDtcclxuICBsZXQgX2NvbnRleHQgPSBudWxsO1xyXG4gIGxldCBfZGF0YSA9IHt9O1xyXG5cclxuICBjb25zdCBfaGFuZGxlRXJhc2VyUHJvZ3Jlc3MgPSAoY3VycmVudFgsIGN1cnJlbnRZKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbFBhcnRzLFxyXG4gICAgICBudW1QYXJ0cyxcclxuICAgICAgY29tcGxldGVSYXRpbyxcclxuICAgICAgZW5hYmxlZCxcclxuICAgICAgc2l6ZSxcclxuICAgICAgb25Db21wbGV0ZSxcclxuICAgICAgb25Qcm9ncmVzcyxcclxuICAgIH0gPSBfZGF0YTtcclxuXHJcbiAgICBpZiAoIWVuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgcCA9IE1hdGguZmxvb3IoY3VycmVudFggLyBzaXplKSArIE1hdGguZmxvb3IoY3VycmVudFkgLyBzaXplKSAqIGNvbFBhcnRzO1xyXG5cclxuICAgIGlmIChwID49IDAgJiYgcCA8IG51bVBhcnRzKSB7XHJcbiAgICAgIF9kYXRhLnJhdGlvICs9IF9kYXRhLnBhcnRzW3BdO1xyXG4gICAgICBfZGF0YS5wYXJ0c1twXSA9IDA7XHJcblxyXG4gICAgICBpZiAoIV9kYXRhLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgcCA9IF9kYXRhLnJhdGlvIC8gX2RhdGEubnVtUGFydHM7XHJcblxyXG4gICAgICAgIGlmIChwID49IGNvbXBsZXRlUmF0aW8pIHtcclxuICAgICAgICAgIF9kYXRhLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvblByb2dyZXNzKSB7XHJcbiAgICAgICAgICBvblByb2dyZXNzKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGVuYWJsZWQsIHBvc1gsIHBvc1ksIHNjYWxlUmF0aW8sIHRvdWNoWCwgdG91Y2hZLFxyXG4gICAgfSA9IF9kYXRhO1xyXG4gICAgY29uc3QgY3VycmVudFggPSAoZXZlbnQucGFnZVggLSBwb3NYKSAqIHNjYWxlUmF0aW87XHJcbiAgICBjb25zdCBjdXJyZW50WSA9IChldmVudC5wYWdlWSAtIHBvc1kpICogc2NhbGVSYXRpbztcclxuXHJcbiAgICBpZiAoZW5hYmxlZCkge1xyXG4gICAgICBfaGFuZGxlRXJhc2VyUHJvZ3Jlc3MoY3VycmVudFgsIGN1cnJlbnRZKTtcclxuICAgICAgX2NvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgIF9jb250ZXh0Lm1vdmVUbyh0b3VjaFgsIHRvdWNoWSk7XHJcbiAgICAgIF9jb250ZXh0LmxpbmVUbyhjdXJyZW50WCwgY3VycmVudFkpO1xyXG4gICAgICBfY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGF0YS50b3VjaFggPSBjdXJyZW50WDtcclxuICAgIF9kYXRhLnRvdWNoWSA9IGN1cnJlbnRZO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9vbk1vdXNlRG93biA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGVuYWJsZWQsIHBvc1gsIHBvc1ksIHNjYWxlUmF0aW8sXHJcbiAgICB9ID0gX2RhdGE7XHJcbiAgICBjb25zdCBjdXJyZW50WCA9IChldmVudC5wYWdlWCAtIHBvc1gpICogc2NhbGVSYXRpbztcclxuICAgIGNvbnN0IGN1cnJlbnRZID0gKGV2ZW50LnBhZ2VZIC0gcG9zWSkgKiBzY2FsZVJhdGlvO1xyXG5cclxuICAgIF9kYXRhLnRvdWNoRG93biA9IHRydWU7XHJcbiAgICBfZGF0YS50b3VjaFggPSBjdXJyZW50WDtcclxuICAgIF9kYXRhLnRvdWNoWSA9IGN1cnJlbnRZO1xyXG5cclxuICAgIGlmIChlbmFibGVkKSB7XHJcbiAgICAgIF9oYW5kbGVFcmFzZXJQcm9ncmVzcyhjdXJyZW50WCwgY3VycmVudFkpO1xyXG5cclxuICAgICAgX2NvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgIF9jb250ZXh0Lm1vdmVUbyhjdXJyZW50WCAtIDEsIGN1cnJlbnRZKTtcclxuICAgICAgX2NvbnRleHQubGluZVRvKGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcbiAgICAgIF9jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX29uTW91c2VNb3ZlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBfb25Nb3VzZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgZW5hYmxlZCwgcG9zWCwgcG9zWSwgc2NhbGVSYXRpbyxcclxuICAgIH0gPSBfZGF0YTtcclxuICAgIGNvbnN0IGN1cnJlbnRYID0gKGV2ZW50LnBhZ2VYIC0gcG9zWCkgKiBzY2FsZVJhdGlvO1xyXG4gICAgY29uc3QgY3VycmVudFkgPSAoZXZlbnQucGFnZVkgLSBwb3NZKSAqIHNjYWxlUmF0aW87XHJcblxyXG4gICAgX2RhdGEudG91Y2hEb3duID0gdHJ1ZTtcclxuICAgIF9kYXRhLnRvdWNoWCA9IGN1cnJlbnRYO1xyXG4gICAgX2RhdGEudG91Y2hZID0gY3VycmVudFk7XHJcblxyXG4gICAgaWYgKGVuYWJsZWQpIHtcclxuICAgICAgX2hhbmRsZUVyYXNlclByb2dyZXNzKGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcblxyXG4gICAgICBfY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgX2NvbnRleHQubW92ZVRvKGN1cnJlbnRYIC0gMSwgY3VycmVudFkpO1xyXG4gICAgICBfY29udGV4dC5saW5lVG8oY3VycmVudFgsIGN1cnJlbnRZKTtcclxuICAgICAgX2NvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfb25Nb3VzZU1vdmUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoc291cmNlLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgIGlmICghc291cmNlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnTm8gc291cmNlIGVsZW1lbnQgcHJvdmlkZWQuIEl0IG11c3QgYmUgYW4gSFRNTCBjYW52YXMgZWxlbWVudC4nLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRPcHRpb25zID0geyAuLi5ERUZBVUxUX09QVElPTlMsIC4uLm9wdGlvbnMgfTtcclxuICAgIGNvbnN0IHsgc2l6ZSwgYmFja2dyb3VuZCB9ID0gY3VycmVudE9wdGlvbnM7XHJcblxyXG4gICAgX2NhbnZhcyA9IHNvdXJjZTtcclxuICAgIF9jb250ZXh0ID0gX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29uc3QgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XHJcbiAgICBjb25zdCBiYWNraW5nU3RvcmVSYXRpbyA9IF9jb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW9cclxuICAgICAgfHwgX2NvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xyXG4gICAgICB8fCBfY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW9cclxuICAgICAgfHwgX2NvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW9cclxuICAgICAgfHwgX2NvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xyXG4gICAgICB8fCAxO1xyXG4gICAgY29uc3Qgc2NhbGVSYXRpbyA9IGRldmljZVBpeGVsUmF0aW8gLyBiYWNraW5nU3RvcmVSYXRpbztcclxuXHJcbiAgICBjb25zdCByZWFsV2lkdGggPSBnZXRFbGVtZW50Q29tcHV0ZWRTdHlsZWQoX2NhbnZhcywgJ3dpZHRoJyk7XHJcbiAgICBjb25zdCByZWFsSGVpZ2h0ID0gZ2V0RWxlbWVudENvbXB1dGVkU3R5bGVkKF9jYW52YXMsICdoZWlnaHQnKTtcclxuICAgIGNvbnN0IHdpZHRoID0gcmVhbFdpZHRoICogc2NhbGVSYXRpbztcclxuICAgIGNvbnN0IGhlaWdodCA9IHJlYWxIZWlnaHQgKiBzY2FsZVJhdGlvO1xyXG5cclxuICAgIGlmIChkZXZpY2VQaXhlbFJhdGlvICE9PSBiYWNraW5nU3RvcmVSYXRpbykge1xyXG4gICAgICBfY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIF9jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICBfY2FudmFzLnN0eWxlLndpZHRoID0gYCR7cmVhbFdpZHRofXB4YDtcclxuICAgICAgX2NhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtyZWFsSGVpZ2h0fXB4YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9jYW52YXMud2lkdGggPSByZWFsV2lkdGg7XHJcbiAgICAgIF9jYW52YXMuaGVpZ2h0ID0gcmVhbEhlaWdodDtcclxuICAgICAgX2NhbnZhcy5zdHlsZS53aWR0aCA9ICcnO1xyXG4gICAgICBfY2FudmFzLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIF9jb250ZXh0LnNjYWxlKHNjYWxlUmF0aW8sIHNjYWxlUmF0aW8pO1xyXG4gICAgX2NvbnRleHQuZmlsbFN0eWxlID0gYmFja2dyb3VuZDtcclxuICAgIF9jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgX2NvbnRleHQuZHJhd0ltYWdlKF9jYW52YXMsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIC8vIHByZXBhcmUgY29udGV4dCBmb3IgZHJhd2luZyBvcGVyYXRpb25zXHJcbiAgICBfY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuICAgIF9jb250ZXh0LmxpbmVXaWR0aCA9IHNpemU7XHJcbiAgICBfY29udGV4dC5saW5lQ2FwID0gJ3JvdW5kJztcclxuXHJcbiAgICAvLyBiaW5kIGV2ZW50c1xyXG4gICAgX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX29uTW91c2VEb3duKTtcclxuICAgIF9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfb25Nb3VzZUNsaWNrKTtcclxuICAgIC8vIF9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIF9vblRvdWNoU3RhcnQpO1xyXG4gICAgLy8gX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBfb25Ub3VjaE1vdmUpO1xyXG4gICAgLy8gX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIF9vblRvdWNoRW5kKTtcclxuXHJcbiAgICAvLyByZXNldCBwYXJ0c1xyXG4gICAgY29uc3QgcGFydHMgPSBbXTtcclxuICAgIGNvbnN0IGNvbFBhcnRzID0gTWF0aC5mbG9vcih3aWR0aCAvIHNpemUpO1xyXG4gICAgY29uc3QgbnVtUGFydHMgPSBjb2xQYXJ0cyAqIE1hdGguZmxvb3IoaGVpZ2h0IC8gc2l6ZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBhcnRzOyBpKyspIHtcclxuICAgICAgcGFydHMucHVzaCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGF0YSA9IHtcclxuICAgICAgcG9zWDogX2NhbnZhcy5vZmZzZXRMZWZ0LFxyXG4gICAgICBwb3NZOiBfY2FudmFzLm9mZnNldFRvcCxcclxuICAgICAgdG91Y2hEb3duOiBmYWxzZSxcclxuICAgICAgdG91Y2hJRDogLTk5OSxcclxuICAgICAgdG91Y2hYOiAwLFxyXG4gICAgICB0b3VjaFk6IDAsXHJcbiAgICAgIHB0b3VjaFg6IDAsXHJcbiAgICAgIHB0b3VjaFk6IDAsXHJcbiAgICAgIHc6IHdpZHRoLFxyXG4gICAgICBoOiBoZWlnaHQsXHJcbiAgICAgIHNjYWxlUmF0aW8sXHJcbiAgICAgIHJhdGlvOiAwLFxyXG4gICAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgICAgIGN1cnJlbnRPcHRpb25zLFxyXG4gICAgICAuLi5jdXJyZW50T3B0aW9ucyxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHcsIGgsIG51bVBhcnRzLCBvbkNvbXBsZXRlLFxyXG4gICAgfSA9IF9kYXRhO1xyXG5cclxuICAgIGlmIChfZGF0YSkge1xyXG4gICAgICBfY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBhcnRzOyBpKyspIHtcclxuICAgICAgICBfZGF0YS5wYXJ0c1tpXSA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIF9kYXRhLnJhdGlvID0gbnVtUGFydHM7XHJcbiAgICAgIF9kYXRhLmNvbXBsZXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgb25Db21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHcsIGgsIG51bVBhcnRzIH0gPSBfZGF0YTtcclxuXHJcbiAgICBfY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xyXG4gICAgX2NvbnRleHQuZHJhd0ltYWdlKF9jYW52YXMsIDAsIDAsIHcsIGgpO1xyXG4gICAgX2NvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QYXJ0czsgaSsrKSB7XHJcbiAgICAgIF9kYXRhLnBhcnRzW2ldID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBfZGF0YS5yYXRpbyA9IDA7XHJcbiAgICBfZGF0YS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgX2RhdGEudG91Y2hEb3duID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQsXHJcbiAgICBjbGVhcixcclxuICAgIHJlc2V0LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYW52YXNFcmFzZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGl0ZW1zIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cy9zZXJ2aWNlcy1pdGVtcyc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IENhbGwgZnJvbSAnLi8uLi8uLi9NaXNjL0NhbGwnXHJcbmltcG9ydCBOZXhhciBmcm9tICcuLy4uLy4uL01pc2MvTmV4YXInXHJcbmltcG9ydCB7XHJcbiAgQ29udGVudFNlY3Rpb24sXHJcbiAgVGV4dFdyYXBwZXIsXHJcbiAgU2VydmljZXNXcmFwcGVyLFxyXG4gIEFjY29yZGlvblRvZ2dsZSxcclxuICBBY2NvcmRpb25Db250ZW50LFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBjdXJyID0+IHtcclxuICAgICAgaWYgKGN1cnIgPT09IHNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgYWRkQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgW3NlbGVjdGVkSXRlbSwgYWRkQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBjdXJyID0+IHtcclxuICAgICAgaWYgKGN1cnIgPT09IHNlbGVjdGVkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgW3NlbGVjdGVkSXRlbSwgcmVtb3ZlQ3Vyc29yQm9yZGVyXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVPblNjcmVlbj5cclxuICAgICAgPE5leGFyLz5cclxuICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiAnOTlweCd9fT5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICBPdXIgbWlzc2lvbiBpcyB0byByZXZvbHV0aW9uaXplIHZpc3VhbCBleHBlcmllbmNlcywgXHJcbiAgICAgICAgICBicmlkZ2luZyB0aGUgZ2FwIGJldHdlZW4gdGhlIHBoeXNpY2FsIGFuZCBkaWdpdGFsIHdvcmxkcy5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgIFdlIHNwZWNpYWxpemUgaW4gYSByYW5nZSBvZiBjdXR0aW5nLWVkZ2UgZGlnaXRhbCBzb2x1dGlvbnMuIFxyXG4gICAgICAgICAgT3VyIHNlcnZpY2VzIGluY2x1ZGUgYWR2YW5jZWQgQXVnbWVudGVkIFJlYWxpdHkgc29mdHdhcmUgdGhhdCB0cmFuc2Zvcm1zIHlvdXIgXHJcbiAgICAgICAgICBkaWdpdGFsIGludGVyYWN0aW9ucywgY29tcHJlaGVuc2l2ZSBXZWIgRGV2ZWxvcG1lbnQgdG8gY3JlYXRlIHVzZXIgZnJpZW5kbHkgb25saW5lIFxyXG4gICAgICAgICAgcGxhdGZvcm1zLCA8c3Ryb25nPmlubm92YXRpdmUgSW1hZ2UgVHJhY2tpbmcgQW5kIE9iamVjdCBkZXRlY3Rpb248L3N0cm9uZz4gc3lzdGVtIGRlc2lnbmVkIHRvIHN0cmVhbWxpbmUgXHJcbiAgICAgICAgICBwcm9jZXNzZXMgdGhyb3VnaCBzbWFydCByZWNvZ25pdGlvbi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L1RleHRXcmFwcGVyPlxyXG4gICAgICAgIDxTZXJ2aWNlc1dyYXBwZXI+XHJcbiAgICAgICAgICA8aDM+U2VydmljZXM8L2gzPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoW2l0ZW0sIHNlcnZpY2VzXSwgaXRlbUluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Ub2dnbGVcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2l0ZW1JbmRleCA9PT0gc2VsZWN0ZWRJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJdGVtKGl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZU1vdXNlRW50ZXIoaXRlbUluZGV4KX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTW91c2VMZWF2ZShpdGVtSW5kZXgpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IGhlaWdodDogaXRlbUluZGV4ID09PSBzZWxlY3RlZEl0ZW0gPyAnMTAwJScgOiAnMCcgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNywgZWFzZTogWzAsIDAuNywgMC4yOSwgMC45N10gfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlLCBzZXJ2aWNlSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtgJHtpdGVtSW5kZXh9XyR7c2VydmljZUluZGV4fWB9PntzZXJ2aWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VydmljZXNXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICA8Q2FsbC8+XHJcbiAgICA8L0FuaW1hdGVPblNjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBYm91dCk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Fib3V0JztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBtYXJnaW4tYm90dG9tOiA4NnB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIFxuICB3aWR0aDogNTguMzMzJTtcblxuICAmIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGZvbnQtc2l6ZTogMi42MjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogR3JheTtcbiAgfVxuXG4gICYgcCB7XG4gICAgbWF4LXdpZHRoOiA0NDhweDtcbiAgICBtYXJnaW46IDYuOXB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgICYgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xuICAgIH1cbiAgYH07XG4gIFxuYDtcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMyU7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cbiAgJiBoMyB7XG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvblRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4gICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjdweCAwIDAgMzVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiBXaGl0ZTtcblxuICAmOmhvdmVyOm5vdChbYXJpYS1leHBhbmRlZD0ndHJ1ZSddKSB7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAxMXB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBsZWZ0OiAxM3B4O1xuICAgIH1cbiAgfVxuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBtYXJnaW4tdG9wOiAxMS41cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gICZbYXJpYS1leHBhbmRlZD0ndHJ1ZSddIHtcbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDExcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbGVmdDogMnB4O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IDEzcHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uQ29udGVudCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4wNzE0Mjg1NzE0O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiBHcmF5O1xuXG4gICYgcCB7XG4gICAgbWFyZ2luOiA2LjFweCAwIDA7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xyXG5pbXBvcnQgdXNlU3R5bGVkVGhlbWUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlU3R5bGVkVGhlbWUnO1xyXG5pbXBvcnQgQ2FudmFzRXJhc2VyIGZyb20gJy4uLy4uL0NhbnZhc0VyYXNlcic7XHJcbmltcG9ydCB7IEJhbm5lclNlY3Rpb24sIEJhbm5lclRpdGxlLCBWaWRlb0NvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRpdGxlQW5pbWF0aW9uID0ge1xyXG4gIGFuaW1hdGU6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjE1LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaXRlbVRpdGxlQW5pbWF0aW9uID0ge1xyXG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9LCAvLyBTdGFydCB3aXRoIG9wYWNpdHkgMCBhbmQgc2NhbGUgZG93blxyXG4gIGFuaW1hdGU6IHtcclxuICAgIG9wYWNpdHk6IDEsIC8vIEZhZGUgaW5cclxuICAgIHNjYWxlOiAxLCAgIC8vIFNjYWxlIHVwIHRvIGZ1bGwgc2l6ZVxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMC4zLCAvLyBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgIGVhc2U6IFswLjQsIDAsIDAuMiwgMV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB0ZXh0cyA9IFsnQVInLCAnTmV0JywgJ0FpJ107XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VTdHlsZWRUaGVtZSgpO1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGlzTW9iaWxlID0gd2luZG93U2l6ZS53aWR0aCA8IDc2ODsgLy8gQWRqdXN0IGJyZWFrcG9pbnQgYXMgbmVlZGVkXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50VGV4dCwgc2V0Q3VycmVudFRleHRdID0gdXNlU3RhdGUodGV4dHNbMF0pO1xyXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgdGV4dHMubGVuZ3RoKTtcclxuICAgIH0sIDUwMCk7IC8vIENoYW5nZSB0ZXh0IGV2ZXJ5IDIgc2Vjb25kc1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50VGV4dCh0ZXh0c1tpbmRleF0pO1xyXG4gIH0sIFtpbmRleF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhbm5lclNlY3Rpb24gc3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3dTaXplLmhlaWdodCB9fT5cclxuICAgICAgPFZpZGVvQ29udGFpbmVyPlxyXG4gICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgc3JjPVwiL3ZpZGVvcy9iYW5uZXIubXA0XCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgIGxvb3BcclxuICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICBtdXRlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvVmlkZW9Db250YWluZXI+XHJcbiAgICAgIHshaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxDYW52YXNFcmFzZXJcclxuICAgICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgICAgd2lkdGg9e3dpbmRvd1NpemUud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3dpbmRvd1NpemUuaGVpZ2h0fVxyXG4gICAgICAgICAgc2l6ZT17MTIwfVxyXG4gICAgICAgICAgYmFja2dyb3VuZD17dGhlbWUuYmFja2dyb3VuZH1cclxuICAgICAgICAgIG9uTW91c2VFbnRlcj17YWRkQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPEJhbm5lclRpdGxlXHJcbiAgICAgICAgdmFyaWFudHM9e3RpdGxlQW5pbWF0aW9ufVxyXG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8bW90aW9uLnNwYW4gdmFyaWFudHM9e2l0ZW1UaXRsZUFuaW1hdGlvbn0+bmV4PC9tb3Rpb24uc3Bhbj5cclxuICAgICAgICA8bW90aW9uLnNwYW4gdmFyaWFudHM9e2l0ZW1UaXRsZUFuaW1hdGlvbn0ga2V5PXtjdXJyZW50VGV4dH0+XHJcbiAgICAgICAgICB7Y3VycmVudFRleHR9XHJcbiAgICAgICAgPC9tb3Rpb24uc3Bhbj5cclxuICAgICAgPC9CYW5uZXJUaXRsZT5cclxuICAgIDwvQmFubmVyU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCYW5uZXIpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9CYW5uZXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEJhbm5lclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzA1cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG5cbiAgJiBjYW52YXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBWaWRlb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJiB2aWRlbyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCYW5uZXJUaXRsZSA9IHN0eWxlZChtb3Rpb24uaDEpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTkzcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBmb250LXNpemU6IDQyMHB4O1xuICBmb250LXNpemU6IDI2LjI1cmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDAuNjcxNDI4NTcxNDtcblxuICAmIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIGxlZnQ6IC0xMHB4O1xuICAgIGJvdHRvbTogLTYzcHg7XG4gICAgZm9udC1zaXplOiAyODBweDtcbiAgICBmb250LXNpemU6IDE3LjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IC42ODIxNDI4NTcxO1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBsZWZ0OiAtNnB4O1xuICAgIGJvdHRvbTogLTM2cHg7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgKyA2cHgpO1xuICAgIGZvbnQtc2l6ZTogMTYwcHg7XG4gICAgZm9udC1zaXplOiAxMHJlbTtcbiAgICBsaW5lLWhlaWdodDogLjY4MTI1O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIGB9O1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gJy4uLy4uL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IEFuaW1hdGlvbm9uU2NyZWVuIGZyb20gJy4vLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi8uLi8uLi9Ib21lL0Zvcm0nXHJcbmltcG9ydCBicm93c2Vyc2xpc3QgZnJvbSAnYnJvd3NlcnNsaXN0JztcclxuXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRpb25vblNjcmVlbj5cclxuICAgICAgPEFuaW1hdGlvbm9uU2NyZWVuPlxyXG4gICAgICAgIDxGb3JtLz5cclxuICAgICAgPC9BbmltYXRpb25vblNjcmVlbj5cclxuICAgICAgPEZvb3RlckNvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb2x1bW5zXCI+XHJcbiAgICAgICAgICB7LyogRmlyc3QgQ29sdW1uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJsb2dvLnBuZ1wiIGFsdD1cIkx1bWluZXhhIENvbXBhbnkgTG9nb1wiIHN0eWxlPXt7IHdpZHRoOiAnMTYwcHgnIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+PHN0cm9uZz5MdW1pbmV4YSBUZWNobm9sb2dpZXM8L3N0cm9uZz4sIE5CJ3MgR3JvdXAgb2YgQ29tcGFueTwvcD5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6ICcjMzAyZjJmJ319Pm5leDwvaDE+XHJcbiAgICAgICAgICAgIDxwID5Zb3VyIGdvLXRvIHNvdXJjZSBmb3IgaW5ub3ZhdGl2ZSBzb2x1dGlvbnMuIFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgYWNoaWV2ZSB5b3VyIGdvYWxzLjwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgPFNvY2lhbE1lZGlhIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogU2Vjb25kIENvbHVtbiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+Q29udGFjdDwvaDM+XHJcbiAgICAgICAgICAgIDxwPk1vYmlsZTogKzkxLjg2Ni4wNDQuOTk3MDwvcD5cclxuICAgICAgICAgICAgPHA+TW9iaWxlOiArOTEuOTQ4LjE2MS41NTgyPC9wPlxyXG4gICAgICAgICAgICA8cD5FbWFpbDogaW5mb0BsdW1pbmV4YS5pbjwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEFkZHJlc3M6IDE0IDFzdCBTdGFnZSBCaGFuYXNoYW5rYXJpLCBCYW5nYWxvcmUsIEtBIElOXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBUaGlyZCBDb2x1bW4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PkxlZ2FsPC9oMz5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9wcml2YWN5XCI+UHJpdmFjeSBQb2xpY3k8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL3Rlcm1zXCI+VGVybXMgYW5kIENvbmRpdGlvbnM8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL2Rpc2NsYWltZXJcIj5EaXNjbGFpbWVyPC9hPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBGb3VydGggQ29sdW1uICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5PdGhlcjwvaDM+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvYmxvZ1wiPkJsb2c8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL2NhcmVlcnNcIj5DYXJlZXI8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiL3NlcnZpY2VzXCI+U2VydmljZXM8L2E+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW5vdGVcIj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnR3JheScgfX0+JmNvcHk7IENvcHlyaWdodCA8c3Ryb25nPkx1bWluZXhhIFRlY2hub2xvZ2llczwvc3Ryb25nPiAyMDI0LiBBbGwgUmlnaHQgUmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxyXG4gICAgPC9BbmltYXRpb25vblNjcmVlbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250YWN0JztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5mb290ZXIpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcclxuICBjb2xvcjogIzg3ODc4NztcclxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCBncmF5O1xyXG5cclxuICAmIC5mb290ZXItY29sdW1ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDsgLy8gQWRqdXN0IG1heC13aWR0aCBhcyBuZWVkZWRcclxuICAgIGdhcDogMjBweDsgLy8gRXF1YWwgZ2FwIGJldHdlZW4gY29sdW1uc1xyXG5cclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7IFxyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICAgICAgY29sb3I6IGdyYXk7XHJcblxyXG4gICAgICAmIGgzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmIGEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206M3B4O1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmZvb3Rlci1ub3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLW1lZGlhe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgJiAuZm9vdGVyLWNvbHVtbnMge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvLyBTdGFjayBjb2x1bW5zIG9uIHNtYWxsZXIgc2NyZWVuc1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDEwcHg7IC8vIEFkanVzdCBnYXAgZm9yIG1vYmlsZSB2aWV3IGlmIG5lZWRlZFxyXG4gICAgfVxyXG5cclxuICAgICYgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7IC8vIE1ha2UgY29sdW1ucyBmdWxsIHdpZHRoIG9uIG1vYmlsZVxyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCB7IENvbnRlbnRTZWN0aW9uLCBUZXh0V3JhcHBlciwgVGV4dCB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICA8VGV4dFdyYXBwZXI+XHJcbiAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgIElubm92YXRpb24gZG9lc27igJl0IHNpbXBseSBcclxuICAgICAgICAgIGVtZXJnZSAtXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgaXTigJlzIGN1bHRpdmF0ZWQuIFdlIHNpZnQgdGhyb3VnaCB0aGUgbGF5ZXJzIG9mIHRoZSBvcmRpbmFyeSB0byB1bmVhcnRoIFxyXG4gICAgICAgICAgICBleHRyYW9yZGluYXJ5IGlkZWFzLCBlbWJyYWNpbmcgdGhlIGdyaXQgYW5kIGdyaW5kIGFsb25nIHRoZSB3YXkuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9UZXh0V3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50U2VjdGlvbj5cclxuICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250ZW50JztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuXG4gIG1hcmdpbi1ib3R0b206IDIxMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi1ib3R0b206IDEwN3B4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMyU7XG4gIHdpZHRoOiBjYWxjKDU4LjMzMyUgLSAzMnB4KTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgyYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMi42MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgJiBiciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZU1lbnVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9tZW51JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB1c2VTdHlsZWRUaGVtZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VTdHlsZWRUaGVtZSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uLy4uL0ljb25zL0Fycm93JztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBQcm9qZWN0QW5jaG9yLFxyXG4gIFByb2plY3RJbmZvLFxyXG4gIFByb2plY3RUaXRsZSxcclxuICBWaWRlb1ByZXZpZXcsXHJcbiAgTWVudUNvbnRhaW5lcixcclxuICBNZW51QnV0dG9uLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZHVyYXRpb246IDEsXHJcbiAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxufTtcclxuXHJcbmNvbnN0IHdvcmRzID0gW1wibmV4QVJcIiwgXCJuZXhOZXRcIiwgXCJuZXhBaVwiXTtcclxuXHJcbmNvbnN0IEZlYXR1cmVkUHJvamVjdCA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3b3JkSW5kZXgsIHNldFdvcmRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGNvbnRyb2xzSW5mbyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IGNvbnRyb2xzQXJyb3cgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVN0eWxlZFRoZW1lKCk7XHJcbiAgY29uc3QgW3sgaXNNZW51T3BlbiB9XSA9IHVzZU1lbnVDb250ZXh0KCk7XHJcbiAgY29uc3Qge1xyXG4gICAgYWRkQ3Vyc29yQ29sb3IsXHJcbiAgICByZXNldEN1cnNvckNvbG9yLFxyXG4gICAgYWRkQ3Vyc29yQm9yZGVyLFxyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyLFxyXG4gIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG4gIGNvbnN0IGlzVGFibGV0VmlldyA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgICAoeyBicmVha3BvaW50cyB9KSA9PiBgKG1heC13aWR0aDoke2JyZWFrcG9pbnRzLnNpemVzLnRhYmxldH1weClgLFxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eXBpbmdFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKChwcmV2KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0Q2hhckluZGV4ID0gcHJldi5sZW5ndGggPCB3b3Jkc1t3b3JkSW5kZXhdLmxlbmd0aCBcclxuICAgICAgICAgICAgPyBwcmV2Lmxlbmd0aCArIDEgXHJcbiAgICAgICAgICAgIDogcHJldi5sZW5ndGg7XHJcbiAgICAgICAgICByZXR1cm4gd29yZHNbd29yZEluZGV4XS5zbGljZSgwLCBuZXh0Q2hhckluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCgocHJldikgPT4gcHJldi5zbGljZSgwLCAtMSkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA9PT0gd29yZHNbd29yZEluZGV4XS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNldElzVHlwaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNUeXBpbmcodHJ1ZSksIDEwMDApOyAvLyBXYWl0IGJlZm9yZSBzdGFydGluZyB0byBjbGVhclxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudFdvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRXb3JkSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSB3b3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHR5cGluZ0VmZmVjdCgpO1xyXG4gICAgfSwgaXNUeXBpbmcgPyAxNTAgOiAxMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgfSwgW2N1cnJlbnRXb3JkLCBpc1R5cGluZywgd29yZEluZGV4XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGFkZEN1cnNvckNvbG9yKHRoZW1lLnRleHQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNNZW51T3BlbikgcmV0dXJuO1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICByZXNldEN1cnNvckNvbG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJTdGFydCA9ICgpID0+IHtcclxuICAgIGFkZEN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMSB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiAwIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyRW5kID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBjb250cm9sc0luZm8uc3RhcnQoeyBvcGFjaXR5OiAwIH0pO1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9LCBbY29udHJvbHNBcnJvdywgaXNUYWJsZXRWaWV3XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPG1vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL25vdC1odW1ibGVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPFByb2plY3RBbmNob3JcclxuICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9e2hhbmRsZUFuY2hvckhvdmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgb25Ib3ZlckVuZD17aGFuZGxlQW5jaG9ySG92ZXJFbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICBHRVQgPGJyIC8+IFNUQVJURURcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyb3cgYW5pbWF0ZT17Y29udHJvbHNBcnJvd30gdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9Qcm9qZWN0SW5mbz5cclxuICAgICAgICAgICAgICA8VmlkZW9QcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvIGxvb3AgYXV0b1BsYXkgbXV0ZWQgc3JjPVwidmlkZW9zL3ZpZG0ubXA0XCIgLz5cclxuICAgICAgICAgICAgICA8L1ZpZGVvUHJldmlldz5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0QW5jaG9yPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPE1lbnVDb250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxNZW51QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3RpY2t5PXtmYWxzZX1cclxuICAgICAgICAgICAgICB0aXRsZT1cIlNlcnZpY2VzXCJcclxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudUNvbnRhaW5lcj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZFByb2plY3Q7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ZlYXR1cmVkUHJvamVjdCc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuaW1wb3J0IERlZmF1bHRNZW51QnV0dG9uIGZyb20gJy4uLy4uL01lbnVCdXR0b24nO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICAke2NvbnRhaW5lclN0eWxlc307XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RBbmNob3IgPSBzdHlsZWQobW90aW9uLmEpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDgwcHg7XG4gIG1hcmdpbjogMCAwIDIxNXB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGhlaWdodDogMTkwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjA4cHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RJbmZvID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBtYXJnaW4tbGVmdDogOC4zMzMlO1xuICB3aWR0aDogODMuMzMzJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYgaDMsXG4gICYgLnByb2plY3QtaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzVweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgJiBoMyB7XG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICB9XG5cbiAgJiAucHJvamVjdC1pbmZvIHtcbiAgICByaWdodDogMDtcblxuICAgICYgaDQge1xuICAgICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiA4My4zMzMlO1xuXG4gICAgJiAucHJvamVjdC1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICAmIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yNzc3Nzc3Nzc4O1xuICAgICAgdG9wOiAxN3B4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdFRpdGxlID0gc3R5bGVkKG1vdGlvbi5oMSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNDdweDtcbiAgbGVmdDogLTNweDtcbiAgei1pbmRleDogMTtcblxuICAmIC5hcnJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDI1cHggMCAwIDNweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgd2lkdGg6IDEwMXB4O1xuXG4gICAgJiBzdmcgcGF0aCB7XG4gICAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIH1cbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHRvcDogMTY2cHg7XG4gICAgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDMuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuNzE2NjY2NjY2NztcblxuICAgICYgLmFycm93IHtcbiAgICAgIG1hcmdpbjogMTBweCAwIDAgMnB4O1xuICAgICAgd2lkdGg6IDc2LjE5cHg7XG4gICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBWaWRlb1ByZXZpZXcgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgbWFyZ2luOiAwO1xuXG4gICYgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNjRweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMnB4O1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQoRGVmYXVsdE1lbnVCdXR0b24pYFxuICB3aWR0aDogY2FsYygyNSUgLSAzMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICB9XG5cbiAgJiBzcGFuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubWVkaXVtYFxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMyUgLSAzMHB4KTtcbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDIzNXB4O1xuXG4gICAgJiBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGhlaWdodDogNDdweDtcbiAgICBtYXgtd2lkdGg6IDIxNXB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcblxuICAgICYgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcbiAgICB9XG4gIGB9O1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwQmFyJztcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogaXNUYWJsZXRWaWV3ID0+ICh7IHk6IGlzVGFibGV0VmlldyA/IC04MSA6IC0xMzEgfSksXHJcbiAgc2hvdzogeyB5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXNUYWJsZXRWaWV3ID0gdXNlTWVkaWFRdWVyeShcclxuICAgICh7IGJyZWFrcG9pbnRzIH0pID0+IGAobWF4LXdpZHRoOiR7YnJlYWtwb2ludHMuc2l6ZXMudGFibGV0fXB4KWAsXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBCYXJcclxuICAgICAgXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3Rlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICBgfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIFxyXG4gIHdpZHRoOiA1OC4zMzMlO1xyXG5cclxuICAmIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBgfTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JheX07XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRleHRBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmF5fTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmYyZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrUmVkfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhY3RTZWN0aW9uPlxyXG4gICAgICA8VGV4dFdyYXBwZXI+XHJcbiAgICAgICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgbmV4QVIgLSBBdWdtZW50ZWQgUmVhbGl0eSBmaW5kcyBkaXZlcnNlIGFwcGxpY2F0aW9ucyBhY3Jvc3MgbWFya2V0aW5nIGFuZCBhZHZlcnRpc2luZyxcclxuICAgICAgICAgIHJldGFpbCBhbmQgZS1jb21tZXJjZS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPsKpIEx1bWluZXhhIFRlY2hub2xvZ2llcy48L3N0cm9uZz4gUGlvbmVlcmluZyBpbiB3ZWIgYW5kIGF1Z21lbnRlZCByZWFsaXR5IHNvbHV0aW9ucyxcclxuICAgICAgICAgIHdlIGFyZSBkZWRpY2F0ZWQgdG8gdHJhbnNmb3JtaW5nIGRpZ2l0YWwgZXhwZXJpZW5jZXMuIENvbm5lY3Qgd2l0aCB1cyBmb3IgaW5ub3ZhdGl2ZSxcclxuICAgICAgICAgIGN1c3RvbS10YWlsb3JlZCB0ZWNobm9sb2d5IHNlcnZpY2VzIHRoYXQgZHJpdmUgeW91ciBidXNpbmVzcyBmb3J3YXJkLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9UZXh0V3JhcHBlcj5cclxuICAgICAgPEZvcm1XcmFwcGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIE1lc3NhZ2U8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgV2UnZCBsb3ZlIHRvIGhlYXIgPHN0cm9uZz5mcm9tIHlvdSE8L3N0cm9uZz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgICA8L0NvbnRhY3RTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRm9ybSc7XHJcbiIsImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgQXJyb3cgPSAoeyBmaWxsQ29sb3IgPSBjb2xvcnMud2hpdGUsIC4uLnByb3BzIH0pID0+IChcclxuICA8bW90aW9uLnN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDEwMSA1N1wiXHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0zMyAzNEgwVjI0aDgxLjQyOUw2NiA3Ljg4NCA3My41NDggMGwxOS44NzcgMjAuNzYzLjAyNy0uMDI5TDEwMSAyOC42MTggNzMuODI5IDU3bC03LjU0OC03Ljg4NEw4MC43NTMgMzRIMzN6XCJcclxuICAgICAgZmlsbD17ZmlsbENvbG9yfVxyXG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgPjwvcGF0aD5cclxuICA8L21vdGlvbi5zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJvdztcclxuIiwiLy8gaWNvbjpmYWNlYm9vayB8IEJvb3RzdHJhcCBodHRwczovL2ljb25zLmdldGJvb3RzdHJhcC5jb20vIHwgQm9vdHN0cmFwXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbkZhY2Vib29rKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTE2IDguMDQ5YzAtNC40NDYtMy41ODItOC4wNS04LTguMDVDMy41OCAwLS4wMDIgMy42MDMtLjAwMiA4LjA1YzAgNC4wMTcgMi45MjYgNy4zNDcgNi43NSA3Ljk1MXYtNS42MjVoLTIuMDNWOC4wNUg2Ljc1VjYuMjc1YzAtMi4wMTcgMS4xOTUtMy4xMzEgMy4wMjItMy4xMzEuODc2IDAgMS43OTEuMTU3IDEuNzkxLjE1N3YxLjk4aC0xLjAwOWMtLjk5MyAwLTEuMzAzLjYyMS0xLjMwMyAxLjI1OHYxLjUxaDIuMjE4bC0uMzU0IDIuMzI2SDkuMjVWMTZjMy44MjQtLjYwNCA2Ljc1LTMuOTM0IDYuNzUtNy45NTF6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25GYWNlYm9vazsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb25JbnN0YWdyYW0ocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTUxMiAzNzguN2MtNzMuNCAwLTEzMy4zIDU5LjktMTMzLjMgMTMzLjNTNDM4LjYgNjQ1LjMgNTEyIDY0NS4zIDY0NS4zIDU4NS40IDY0NS4zIDUxMiA1ODUuNCAzNzguNyA1MTIgMzc4Ljd6TTkxMS44IDUxMmMwLTU1LjIuNS0xMDkuOS0yLjYtMTY1LTMuMS02NC0xNy43LTEyMC44LTY0LjUtMTY3LjYtNDYuOS00Ni45LTEwMy42LTYxLjQtMTY3LjYtNjQuNS01NS4yLTMuMS0xMDkuOS0yLjYtMTY1LTIuNi01NS4yIDAtMTA5LjktLjUtMTY1IDIuNi02NCAzLjEtMTIwLjggMTcuNy0xNjcuNiA2NC41QzEzMi42IDIyNi4zIDExOC4xIDI4MyAxMTUgMzQ3Yy0zLjEgNTUuMi0yLjYgMTA5LjktMi42IDE2NXMtLjUgMTA5LjkgMi42IDE2NWMzLjEgNjQgMTcuNyAxMjAuOCA2NC41IDE2Ny42IDQ2LjkgNDYuOSAxMDMuNiA2MS40IDE2Ny42IDY0LjUgNTUuMiAzLjEgMTA5LjkgMi42IDE2NSAyLjYgNTUuMiAwIDEwOS45LjUgMTY1LTIuNiA2NC0zLjEgMTIwLjgtMTcuNyAxNjcuNi02NC41IDQ2LjktNDYuOSA2MS40LTEwMy42IDY0LjUtMTY3LjYgMy4yLTU1LjEgMi42LTEwOS44IDIuNi0xNjV6TTUxMiA3MTcuMWMtMTEzLjUgMC0yMDUuMS05MS42LTIwNS4xLTIwNS4xUzM5OC41IDMwNi45IDUxMiAzMDYuOSA3MTcuMSAzOTguNSA3MTcuMSA1MTIgNjI1LjUgNzE3LjEgNTEyIDcxNy4xem0yMTMuNS0zNzAuN2MtMjYuNSAwLTQ3LjktMjEuNC00Ny45LTQ3LjlzMjEuNC00Ny45IDQ3LjktNDcuOSA0Ny45IDIxLjQgNDcuOSA0Ny45YTQ3Ljg0IDQ3Ljg0IDAgMDEtNDcuOSA0Ny45elwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uSW5zdGFncmFtO1xyXG4iLCIvLyBpY29uOmxpbmtlZGluLWNpcmNsZWQgfCBFbnR5cG8gaHR0cDovL2VudHlwby5jb20vIHwgRGFuaWVsIEJydWNlXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbkxpbmtlZGluQ2lyY2xlZChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgOTYwIDEwMDBcIlxyXG4gICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk00ODAgMjBjMTMzLjMzMyAwIDI0Ni42NjcgNDYuNjY3IDM0MCAxNDBzMTQwIDIwNi42NjcgMTQwIDM0MGMwIDEzMi00Ni42NjcgMjQ1LTE0MCAzMzlTNjEzLjMzMyA5ODAgNDgwIDk4MGMtMTMyIDAtMjQ1LTQ3LTMzOS0xNDFTMCA2MzIgMCA1MDBjMC0xMzMuMzMzIDQ3LTI0Ni42NjcgMTQxLTM0MFMzNDggMjAgNDgwIDIwTTM2MiA2OThWMzg2aC05NnYzMTJoOTZtLTQ4LTM1MmMzNC42NjcgMCA1Mi0xNiA1Mi00OHMtMTcuMzMzLTQ4LTUyLTQ4Yy0xNC42NjcgMC0yNyA0LjY2Ny0zNyAxNHMtMTUgMjAuNjY3LTE1IDM0YzAgMzIgMTcuMzMzIDQ4IDUyIDQ4bTQwNCAzNTJWNTE0YzAtNDQtMTAuMzMzLTc3LjY2Ny0zMS0xMDFzLTQ3LjY2Ny0zNS04MS0zNWMtNDQgMC03NiAxNi42NjctOTYgNTBoLTJsLTYtNDJoLTg0YzEuMzMzIDE4LjY2NyAyIDUyIDIgMTAwdjIxMmg5OFY1MThjMC0xMiAxLjMzMy0yMCA0LTI0IDgtMjUuMzMzIDI0LjY2Ny0zOCA1MC0zOCAzMiAwIDQ4IDIyLjY2NyA0OCA2OHYxNzRoOThcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkxpbmtlZGluQ2lyY2xlZDtcclxuXHJcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBMb2dvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEVuc3VyZSBwb3NpdGlvbmluZyBjb250ZXh0ICovXHJcbiAgICAgICAgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gIHJpZ2h0OiAyOHB4O1xyXG4gIGJvdHRvbTogMTdweDsgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZExvZ28gPSBzdHlsZWQuaW1nYFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExvZ29Db250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRMb2dvXHJcbiAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCIgLy8gUmVmZXJlbmNlIGRpcmVjdGx5IGZyb20gdGhlIHB1YmxpYyBmb2xkZXJcclxuICAgICAgICBhbHQ9XCJMdW1pbmV4YSBMb2dvXCJcclxuICAgICAgLz5cclxuICAgIDwvTG9nb0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uVHdpdHRlckNpcmNsZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTIxNS4zIDMzNy43Yy4zIDQuNy4zIDkuNi4zIDE0LjQgMCAxNDYuOC0xMTEuOCAzMTUuOS0zMTYuMSAzMTUuOS02MyAwLTEyMS40LTE4LjMtMTcwLjYtNDkuOCA5IDEgMTcuNiAxLjQgMjYuOCAxLjQgNTIgMCA5OS44LTE3LjYgMTM3LjktNDcuNC00OC44LTEtODkuOC0zMy0xMDMuOC03NyAxNy4xIDIuNSAzMi41IDIuNSA1MC4xLTJhMTExIDExMSAwIDAxLTg4LjktMTA5di0xLjRjMTQuNyA4LjMgMzIgMTMuNCA1MC4xIDE0LjFhMTExLjEzIDExMS4xMyAwIDAxLTQ5LjUtOTIuNGMwLTIwLjcgNS40LTM5LjYgMTUuMS01NmEzMTUuMjggMzE1LjI4IDAgMDAyMjkgMTE2LjFDNDkyIDM1My4xIDU0OC40IDI5MiA2MTYuMiAyOTJjMzIgMCA2MC44IDEzLjQgODEuMSAzNSAyNS4xLTQuNyA0OS4xLTE0LjEgNzAuNS0yNi43LTguMyAyNS43LTI1LjcgNDcuNC00OC44IDYxLjEgMjIuNC0yLjQgNDQtOC42IDY0LTE3LjMtMTUuMSAyMi4yLTM0IDQxLjktNTUuNyA1Ny42elwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uVHdpdHRlckNpcmNsZTtcclxuXHJcbiAgIiwiLy8gaWNvbjp5b3V0dWJlIHwgQW50IERlc2lnbiBJY29ucyBodHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9pY29uLyB8IEFudCBEZXNpZ25cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uWW91dHViZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOTQxLjMgMjk2LjFhMTEyLjMgMTEyLjMgMCAwMC03OS4yLTc5LjNDNzkyLjIgMTk4IDUxMiAxOTggNTEyIDE5OHMtMjgwLjIgMC0zNTAuMSAxOC43QTExMi4xMiAxMTIuMTIgMCAwMDgyLjcgMjk2QzY0IDM2NiA2NCA1MTIgNjQgNTEyczAgMTQ2IDE4LjcgMjE1LjljMTAuMyAzOC42IDQwLjcgNjkgNzkuMiA3OS4zQzIzMS44IDgyNiA1MTIgODI2IDUxMiA4MjZzMjgwLjIgMCAzNTAuMS0xOC44YzM4LjYtMTAuMyA2OC45LTQwLjcgNzkuMi03OS4zQzk2MCA2NTggOTYwIDUxMiA5NjAgNTEyczAtMTQ2LTE4LjctMjE1Ljl6TTQyMyA2NDZWMzc4bDIzMiAxMzMtMjMyIDEzNXpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbllvdXR1YmU7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvdyB9IGZyb20gJy4vQXJyb3cnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rIH0gZnJvbSAnLi9GYWNlYm9vayc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5zdGFncmFtIH0gZnJvbSAnLi9JbnN0YWdyYW0nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFlvdXR1YmUgfSBmcm9tICcuL1lvdXR1YmUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXIgfSBmcm9tICcuL1R3aXR0ZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtlZGluIH0gZnJvbSAnLi9MaW5rZWRpbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU1lbnVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tZW51JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IFN0aWNreUN1cnNvciBmcm9tICcuLi9TdGlja3lDdXJzb3InO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBNZW51QnV0dG9uID0gKHsgc3RpY2t5ID0gdHJ1ZSwgdGl0bGUgPSAnJywgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XHJcbiAgY29uc3QgWywgZGlzcGF0Y2hdID0gdXNlTWVudUNvbnRleHQoKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPblRvZ2dsZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9NRU5VJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGlja3lDdXJzb3Igc3RpY2t5PXtzdGlja3l9PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT25Ub2dnbGV9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1N0aWNreUN1cnNvcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhSZWFjdC5mb3J3YXJkUmVmKE1lbnVCdXR0b24pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWVudUJ1dHRvbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA2M3B4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cblxuICAmIHNwYW4ge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIH1cblxuICAmOmhvdmVyIHNwYW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgICYgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgd2lkdGg6IDY2cHg7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICBgfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5cclxuY29uc3QgQ1RBU2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAyZjJmO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDBweCAxMDBweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNjZweDtcclxuYDtcclxuXHJcbmNvbnN0IENUQUhlYWRpbmcgPSBzdHlsZWQuaDJgXHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogV2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBDVEFEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOjgyJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG5gO1xyXG5cclxuY29uc3QgQ1RBQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtSZWR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkljb24gPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAyMHB4OyAvKiBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIEdJRiBpY29uICovXHJcbiAgaGVpZ2h0OiAyMHB4OyAvKiBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIEdJRiBpY29uICovXHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIHRoZSBpY29uIGFuZCB0ZXh0ICovXHJcbmA7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDVEFTZWN0aW9uIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19PlxyXG4gICAgICA8Q1RBSGVhZGluZz5VbmxvY2sgdGhlIHBvdGVudGlhbCBvZiBuZXhBUiBhbmQgQUkgaW4geW91ciBidXNpbmVzczwvQ1RBSGVhZGluZz5cclxuICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDxzdHJvbmc+Q2xpY2sgdG8gZXhwbG9yZSBvdXIgdHJhbnNmb3JtYXRpdmUgc29sdXRpb25zIGluIGF1Z21lbnRlZCByZWFsaXR5LCB3ZWIgZGV2ZWxvcG1lbnQsIGFuZCBzbWFydCBkZXRlY3Rpb24gdGVjaG5vbG9naWVzLiBcclxuICAgICAgICBTdGFydCB5b3VyIGRpZ2l0YWwgcmV2b2x1dGlvbiBub3chPC9zdHJvbmc+XHJcbiAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgIDxDVEFCdXR0b24gaHJlZj1cInRlbDo4NjYwNDQ5OTcwXCI+XHJcbiAgICAgICAgPEJ1dHRvbkljb24gc3JjPVwiZ2lmLmdpZlwiIGFsdD1cIkdJRiBJY29uXCIgLz4gXHJcbiAgICAgICAgQ2FsbCB0byBBY3Rpb25cclxuICAgICAgPC9DVEFCdXR0b24+XHJcbiAgICA8L0NUQVNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgTG90dGllIGZyb20gJ2xvdHRpZS1yZWFjdCc7XHJcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xyXG5pbXBvcnQgYW5pbWF0aW9uMSBmcm9tICcuLy4uL0xvdHRpZS93b3JrLmpzb24nOyBcclxuaW1wb3J0IGFuaW1hdGlvbjIgZnJvbSAnLi8uLi9Mb3R0aWUvbmV4YXIuanNvbic7XHJcbmltcG9ydCBhbmltYXRpb24zIGZyb20gJy4vLi4vTG90dGllL3dvcmtzLmpzb24nO1xyXG5cclxuY29uc3QgQ1RBU2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXHJcbiAgJHtjb250YWluZXJTdHlsZXN9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAyZjJmO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNjZweDtcclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3dzIHdyYXBwaW5nIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG90dGllQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxNjBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciB1bmlmb3JtaXR5ICovXHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgYW5pbWF0aW9uICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDVEFIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IENUQURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuYDtcclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENUQVNlY3Rpb24gaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX0+XHJcbiAgICAgIDxTZWN0aW9uc0NvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPm5leEFSPC9DVEFIZWFkaW5nPlxyXG4gICAgICAgICAgPExvdHRpZUNvbnRhaW5lciBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGVsOjg2NjA0NDk5NzBcIn0+XHJcbiAgICAgICAgICAgIDxMb3R0aWUgYW5pbWF0aW9uRGF0YT17YW5pbWF0aW9uMn0gbG9vcD17dHJ1ZX0gLz5cclxuICAgICAgICAgIDwvTG90dGllQ29udGFpbmVyPlxyXG4gICAgICAgICAgPENUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkx1bWluZXhhIFRlY2hub2xvZ2llcyBkZXZlbG9wZWQgaW1hZ2UgdHJhY2tpbmcgdmlydHVhbCBzb2Z0d2FyZSBiYXNlZCBvbiBBdWdtZW50ZWQgUmVhbGl0eSBhbmQgTWl4ZWQgUmVhbGl0eSwgbmFtZWQgaXQgbmV4QVIuPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0NUQURlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIDxDVEFIZWFkaW5nPkhvdzwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxMb3R0aWVDb250YWluZXIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRlbDo4NjYwNDQ5OTcwXCJ9PlxyXG4gICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjF9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPHN0cm9uZz5uZXhBUiBpcyBhIFdlYkFSIHNvbHV0aW9uIHRoYXQgZGlzcGxheXMgY29udGVudCBsaWtlIDNEIG1vZGVscywgaG9sb2dyYXBoaWMgYXZhdGFycywgdmlkZW9zLCBpbWFnZXMsIGF1ZGlvLCBhbmQgbGlua3Mgd2hlbiB0aGUgbmV4QVIgY2FtZXJhIGlzIHBvaW50ZWQgYXQgYSAyRCBzdXJmYWNlLjwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9DVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICA8Q1RBSGVhZGluZz5Xb3JrczwvQ1RBSGVhZGluZz5cclxuICAgICAgICAgIDxMb3R0aWVDb250YWluZXIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRlbDo4NjYwNDQ5OTcwXCJ9PlxyXG4gICAgICAgICAgICA8TG90dGllIGFuaW1hdGlvbkRhdGE9e2FuaW1hdGlvbjN9IGxvb3A9e3RydWV9IC8+XHJcbiAgICAgICAgICA8L0xvdHRpZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDVEFEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPHN0cm9uZz5uZXhBUiByZXF1aXJlcyBubyBhZGRpdGlvbmFsIGFwcCBpbnN0YWxsYXRpb25zIGFuZCB3b3JrcyBzZWFtbGVzc2x5IG9uIGFsbCBzbWFydHBob25lcywgd2hldGhlciBBbmRyb2lkIG9yIGlPUy48L3N0cm9uZz5cclxuICAgICAgICAgIDwvQ1RBRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L1NlY3Rpb25zQ29udGFpbmVyPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyNlNmUzZTMgJywgbWFyZ2luOiAnMTlweCcgfX0+PHN0cm9uZz5cIkRpZmZlcmVudGlhdGUgeW91cnNlbGYgZnJvbSBjb21wZXRpdGlvblwiPC9zdHJvbmc+PC9wPlxyXG4gICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICdncmF5JywgZm9udFNpemU6ICc4MHB4JyB9fT5nbyB2aXJhbCE8L2gxPlxyXG4gICAgPC9DVEFTZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgeyBJbnN0YWdyYW0sIEZhY2Vib29rLCBZb3V0dWJlLCBUd2l0dGVyLCBMaW5rZWRpbiB9IGZyb20gJy4uL0ljb25zJztcclxuaW1wb3J0IFN0aWNreUN1cnNvciBmcm9tICcuLi9TdGlja3lDdXJzb3InO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIExpbmsgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBtZWRpYXMgPSBbXHJcbiAgeyBjb21wb25lbnQ6IEluc3RhZ3JhbSwgdXJsOiAnaW5zdGFncmFtLmNvbS9fbHVtaW5leGEvJyB9LFxyXG4gIHsgY29tcG9uZW50OiBGYWNlYm9vaywgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FybHVtaW5leGEvJyB9LFxyXG4gIHsgY29tcG9uZW50OiBZb3V0dWJlLCB1cmw6ICdodHRwczovL3lvdXR1YmUuY29tJyB9LFxyXG4gIHsgY29tcG9uZW50OiBUd2l0dGVyLCB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL19sdW1pbmV4YScgfSxcclxuICB7IGNvbXBvbmVudDogTGlua2VkaW4sIHVybDogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2NvbXBhbnkvbHVtaW5leGEtdGVjaG5vbG9neScgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNvY2lhbE1lZGlhID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHsuLi5wcm9wc30+XHJcbiAgICAgIHttZWRpYXMubWFwKCh7IGNvbXBvbmVudDogQ29tcG9uZW50LCB1cmwgfSkgPT4gKFxyXG4gICAgICAgIDxTdGlja3lDdXJzb3Iga2V5PXt1cmx9PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2FkZEN1cnNvckJvcmRlcn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1N0aWNreUN1cnNvcj5cclxuICAgICAgKSl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTb2NpYWxNZWRpYSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NvY2lhbE1lZGlhJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBDaGFuZ2VkIGZyb20gZmxleC1zdGFydCB0byBmbGV4LWVuZCAqL1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA0MXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gXG5cbiAgJjpob3ZlciBzdmcgcGF0aCB7XG4gICAgZmlsbDogcmVkO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuXHJcbmNvbnN0IFN0aWNreUN1cnNvciA9ICh7IGNoaWxkcmVuOiBjaGlsZHJlblByb3AsIHN0aWNreSA9IHRydWUgfSkgPT4ge1xyXG4gIGNvbnN0IGNoaWxkUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHsgbG9ja0N1cnNvclBvc2l0aW9uIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlblByb3AsIGNoaWxkID0+IHtcclxuICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUgfSA9IGNoaWxkLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSBldmVudCA9PiB7XHJcbiAgICAgIGlmICghY2hpbGRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBjaGlsZFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgY29uc3QgeCA9IHBvc2l0aW9uLndpZHRoIC8gMiArIHBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBwb3NpdGlvbi5oZWlnaHQgLyAyICsgcG9zaXRpb24udG9wO1xyXG4gICAgICBsb2NrQ3Vyc29yUG9zaXRpb24oeyB4LCB5IH0pO1xyXG5cclxuICAgICAgaWYgKG9uTW91c2VFbnRlcikge1xyXG4gICAgICAgIG9uTW91c2VFbnRlcihldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IGV2ZW50ID0+IHtcclxuICAgICAgaWYgKCFjaGlsZFJlZi5jdXJyZW50KSByZXR1cm47XHJcblxyXG4gICAgICBsb2NrQ3Vyc29yUG9zaXRpb24obnVsbCk7XHJcblxyXG4gICAgICBpZiAob25Nb3VzZUxlYXZlKSB7XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWYgPSBub2RlID0+IHtcclxuICAgICAgLy8gS2VlcCB5b3VyIG93biByZWZlcmVuY2VcclxuICAgICAgY2hpbGRSZWYuY3VycmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCByZWYsIGlmIGFueVxyXG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGQ7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlZihub2RlKTtcclxuICAgICAgfSBlbHNlIGlmIChyZWYgIT09IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICBvbk1vdXNlRW50ZXI6IGhhbmRsZU1vdXNlRW50ZXIsXHJcbiAgICAgIG9uTW91c2VMZWF2ZTogaGFuZGxlTW91c2VMZWF2ZSxcclxuICAgICAgcmVmOiBoYW5kbGVSZWYsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHN0aWNreSA/IGNoaWxkcmVuIDogY2hpbGRyZW5Qcm9wO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTdGlja3lDdXJzb3IpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TdGlja3lDdXJzb3InO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3N0eWxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBjdXJzb3JTdHlsZToge1xyXG4gICAgYm9yZGVyZWQ6IGZhbHNlLFxyXG4gICAgY29sb3I6IGNvbG9ycy5yZWQsXHJcbiAgfSxcclxuICBwb3NpdGlvbjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdVUERBVEVfQ1VSU09SX1NUWUxFJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdBRERfQ1VSU09SX0JPUkRFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBib3JkZXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnUkVNT1ZFX0NVUlNPUl9CT1JERVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgYm9yZGVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdBRERfQ1VSU09SX0NPTE9SJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGNvbG9yOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnUkVTRVRfQ1VSU09SX0NPTE9SJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGNvbG9yOiBJTklUSUFMX1NUQVRFLmN1cnNvclN0eWxlLmNvbG9yLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdMT0NLX0NVUlNPUl9QT1NJVElPTic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwb3NpdGlvbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ3Vyc29yQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDdXJzb3JDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBJTklUSUFMX1NUQVRFKTtcclxuICBjb25zdCBzdG9yZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHsgc3RhdGUsIGRpc3BhdGNoIH0pLCBbc3RhdGVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEN1cnNvckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9DdXJzb3JDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDdXJzb3JDb250ZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KEN1cnNvckNvbnRleHQpO1xyXG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXTtcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgaXNNZW51T3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVE9HR0xFX01FTlUnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNNZW51T3BlbjogIXN0YXRlLmlzTWVudU9wZW4sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVudUNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIElOSVRJQUxfU1RBVEUpO1xyXG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBzdGF0ZSwgZGlzcGF0Y2ggfSksIFtzdGF0ZV0pO1xyXG4gIHJldHVybiA8TWVudUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9NZW51Q29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNZW51Q29udGV4dCA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gUmVhY3QudXNlQ29udGV4dChNZW51Q29udGV4dCk7XHJcbiAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDdXJzb3JDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jdXJzb3InO1xyXG5cclxuY29uc3QgdXNlQ3Vyc29yU3R5bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDdXJzb3JDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IGFkZEN1cnNvckJvcmRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9DVVJTT1JfQk9SREVSJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlQ3Vyc29yQm9yZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX0NVUlNPUl9CT1JERVInIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBhZGRDdXJzb3JDb2xvciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGNvbG9yKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9DVVJTT1JfQ09MT1InLCBwYXlsb2FkOiBjb2xvciB9KTtcclxuICAgIH0sXHJcbiAgICBbZGlzcGF0Y2hdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlc2V0Q3Vyc29yQ29sb3IgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVNFVF9DVVJTT1JfQ09MT1InIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBsb2NrQ3Vyc29yUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdMT0NLX0NVUlNPUl9QT1NJVElPTicsIHBheWxvYWQ6IGNvb3JkaW5hdGVzIH0pO1xyXG4gICAgfSxcclxuICAgIFtkaXNwYXRjaF0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgYWRkQ3Vyc29yQ29sb3IsXHJcbiAgICByZXNldEN1cnNvckNvbG9yLFxyXG4gICAgYWRkQ3Vyc29yQm9yZGVyLFxyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyLFxyXG4gICAgbG9ja0N1cnNvclBvc2l0aW9uLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDdXJzb3JTdHlsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHNldFJlZiA9IChyZWYsIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJlZih2YWx1ZSk7XHJcbiAgfSBlbHNlIGlmIChyZWYpIHtcclxuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdXNlRm9ya1JlZiA9IChyZWZBLCByZWZCKSA9PlxyXG4gIC8qKlxyXG4gICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgdGhlIHJlZiBwcm9wcyBjaGFuZ2UgYW5kIGFyZSBkZWZpbmVkLlxyXG4gICAqIFRoaXMgbWVhbnMgcmVhY3Qgd2lsbCBjYWxsIHRoZSBvbGQgZm9ya1JlZiB3aXRoIGBudWxsYCBhbmQgdGhlIG5ldyBmb3JrUmVmXHJcbiAgICogd2l0aCB0aGUgcmVmLiBDbGVhbnVwIG5hdHVyYWxseSBlbWVyZ2VzIGZyb20gdGhpcyBiZWhhdmlvci5cclxuICAgKi9cclxuICBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChyZWZBID09IG51bGwgJiYgcmVmQiA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChyZWZWYWx1ZSkgPT4ge1xyXG4gICAgICBzZXRSZWYocmVmQSwgcmVmVmFsdWUpO1xyXG4gICAgICBzZXRSZWYocmVmQiwgcmVmVmFsdWUpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmQSwgcmVmQl0pO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VGb3JrUmVmO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCB1c2VNZWRpYVF1ZXJ5ID0gKHF1ZXJ5SW5wdXQpID0+IHtcclxuICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICBsZXQgcXVlcnkgPSB0eXBlb2YgcXVlcnlJbnB1dCA9PT0gJ2Z1bmN0aW9uJyA/IHF1ZXJ5SW5wdXQodGhlbWUpIDogcXVlcnlJbnB1dDtcclxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL15AbWVkaWEoID8pL20sICcnKTtcclxuXHJcbiAgY29uc3QgaXNDbGllbnRTaWRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgY29uc3QgZGVmYXVsdE1hdGNoZXMgPSBmYWxzZTtcclxuICBjb25zdCBtYXRjaE1lZGlhID0gaXNDbGllbnRTaWRlID8gd2luZG93Lm1hdGNoTWVkaWEgOiBudWxsO1xyXG5cclxuICBjb25zdCBbbWF0Y2gsIHNldE1hdGNoXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcclxuICAgIGlmIChpc0NsaWVudFNpZGUpIHtcclxuICAgICAgcmV0dXJuIG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25jZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQsIHdlIHJlbHkgb24gdGhlXHJcbiAgICAvLyBldmVudCBsaXN0ZW5lcnMgdG8gcmV0dXJuIHRoZSBjb3JyZWN0IG1hdGNoZXMgdmFsdWUuXHJcbiAgICByZXR1cm4gZGVmYXVsdE1hdGNoZXM7XHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzQ2xpZW50U2lkZSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IG1hdGNoTWVkaWEocXVlcnkpO1xyXG4gICAgY29uc3QgdXBkYXRlTWF0Y2ggPSAoKSA9PiB7XHJcbiAgICAgIHNldE1hdGNoKHF1ZXJ5TGlzdC5tYXRjaGVzKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlTWF0Y2goKTtcclxuICAgIHF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVNYXRjaCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcXVlcnlMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZU1hdGNoKTtcclxuICAgIH07XHJcbiAgfSwgW3F1ZXJ5LCBtYXRjaE1lZGlhLCBpc0NsaWVudFNpZGVdKTtcclxuXHJcbiAgcmV0dXJuIG1hdGNoO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTWVkaWFRdWVyeTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgdXNlU3R5bGVkVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gdGhlbWUgfHwge307XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZWRUaGVtZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVdpbmRvd1NpemUgPSAoKSA9PiB7XG4gIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcbiAgLy8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2pvc2h3Y29tZWF1LmNvbS9yZWFjdC90aGUtcGVyaWxzLW9mLXJlaHlkcmF0aW9uL1xuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgfSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBvbmx5IGV4ZWN1dGUgYWxsIHRoZSBjb2RlIGJlbG93IGluIGNsaWVudCBzaWRlXG4gICAgLy8gSGFuZGxlciB0byBjYWxsIG9uIHdpbmRvdyByZXNpemVcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxuICAgICAgc2V0V2luZG93U2l6ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXG4gICAgaGFuZGxlUmVzaXplKCk7XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxuICAgIC8vIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XG4gIHJldHVybiB3aW5kb3dTaXplO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93U2l6ZTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IGNsZWFudXAgPSBSZWFjdC51c2VSZWY8KCkgPT4gdm9pZD4oKVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIC8vIGNsZWFudXAgcHJldmlvdXMgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYW51cC5jdXJyZW50KClcbiAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGVsICYmIGVsLnRhZ05hbWUgJiYgaXNMb2NhbFVSTChocmVmKSkge1xuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IGxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3AsIGNoaWxkUmVmLCBocmVmLCBhcywgcm91dGVyLCBsb2NhbGVdXG4gIClcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcbiAgICAgICAgLm5vcm1hbGl6ZUxvY2FsZVBhdGggYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKS5ub3JtYWxpemVMb2NhbGVQYXRoXG5cbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IG9wdGlvbnMubG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYW5uZXJTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9CYW5uZXInO1xyXG5pbXBvcnQgQ29udGVudFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0NvbnRlbnQnO1xyXG5pbXBvcnQgRmVhdHVyZWRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9GZWF0dXJlZFByb2plY3QnO1xyXG5pbXBvcnQgQWJvdXRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9BYm91dCc7XHJcbmltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQ29udGFjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0Zvb3Rlcic7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QmFubmVyU2VjdGlvbiAvPlxyXG4gICAgICA8Q29udGVudFNlY3Rpb24gLz5cclxuICAgICAgPEZlYXR1cmVkU2VjdGlvbiAvPlxyXG4gICAgICA8QWJvdXRTZWN0aW9uIC8+XHJcbiAgICAgIDxDb250YWN0U2VjdGlvbiAvPlxyXG4gICAgICA8Rm9vdGVyLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSG9tZSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgd2hpdGU6ICcjZmZmJyxcbiAgYmxhY2s6ICcjMDAwJyxcbiAgcmVkOiAnI0VBMjgxRScsXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4gIG1heC13aWR0aDogMTIzNHB4O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUZvbnRTdHlsZSA9IGNzc2BcbiAgZm9udC1mYW1pbHk6IHByZXNpY2F2LCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuYDtcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICBbXHJcbiAgICAnSW5ub3ZhdGl2ZSBQcm9kdWN0cycsXHJcbiAgICBbXHJcbiAgICAgICdBUiBDYXJkcycsXHJcbiAgICAgICdBUiBCdXNpbmVzcyBDYXJkcycsXHJcbiAgICAgICdBUiBXZWRkaW5nIENhcmRzJyxcclxuICAgICAgJ0FSIFN0aWNrZXJzJyxcclxuICAgICAgJ0FSIFQtU2hpcnRzJyxcclxuICAgICAgJ0N1c3RvbWUgQVIgQnVpbGQgd2l0aCBEYXNoYm9hcmQnLFxyXG4gICAgXSxcclxuICBdLFxyXG4gIFtcclxuICAgICduZXhBUiAtIEFSICYgWFInLFxyXG4gICAgW1xyXG4gICAgICAnSW1hZ2UgVHJhY2tpbmcgQVInLFxyXG4gICAgICAnTXVsdGkgSW1hZ2UgVHJhY2tpbmcnLFxyXG4gICAgICAnTXVsdGkgSW1hZ2UgVGFyZ2V0JyxcclxuICAgICAgJ1RhcCB0byBQbGFjZSBBUiAvIFhSIGJhc2VkJyxcclxuICAgICAgJ0xvY2F0aW9uIEJhc2VkIEFSJyxcclxuICAgIF0sXHJcbiAgXSxcclxuICBbXHJcbiAgICAnbmV4TmV0IC0gQ3VzdG9tZSBXZWJEJyxcclxuICAgIFtcclxuICAgICAgJ1NpbmdsZSBQYWdlIFdlYnNpdGUnLFxyXG4gICAgICAnU3RhdGljIFdlYnNpdGVzJyxcclxuICAgICAgJ0R5bmFtaWMgV2Vic2l0ZXMnLFxyXG4gICAgICAnUmVzcG9uc2l2ZSBEZXNpZ24gLVJlYWN0SnMnLFxyXG4gICAgICAnTW9iaWxlIEFwcCBEZXZlbG9wbWVudCcsXHJcbiAgICAgICdDdXN0b21lIEFwbGxpY2F0aW9uIEJ1aWxkJyxcclxuXHJcbiAgICBdLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgJ25leHRBaSAtIE9iamVjdCBEZXRlY3Rpb24nLFxyXG4gICAgW1xyXG4gICAgICAnLi4nLFxyXG5cclxuICAgIF0sXHJcbiAgXSxcclxuXTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnJvd3NlcnNsaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG90dGllLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
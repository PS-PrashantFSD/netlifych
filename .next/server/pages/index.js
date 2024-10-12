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
          title: "Furrow",
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/About/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_AnimateOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["ContentSection"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["TextWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
          children: "Our mission is to revolutionize visual experiences, bridging the gap between the physical and digital worlds."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: "At our company, we specialize in a range of cutting-edge digital solutions. Our services include advanced Augmented Reality software that transforms your digital interactions, comprehensive Web Development to create user friendly online platforms, innovative Image Tracking And Object detection system designed to streamline processes through smart recognition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["ServicesWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
          children: "Services"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), _utils_constants_services_items__WEBPACK_IMPORTED_MODULE_1__["default"].map(([item, services], itemIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["AccordionToggle"], {
            "aria-expanded": itemIndex === selectedItem,
            onClick: () => setSelectedItem(itemIndex),
            onMouseEnter: () => handleMouseEnter(itemIndex),
            onMouseLeave: () => handleMouseLeave(itemIndex),
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["AccordionContent"], {
            animate: {
              height: itemIndex === selectedItem ? '100%' : '0'
            },
            transition: {
              duration: 0.7,
              ease: [0, 0.7, 0.29, 0.97]
            },
            children: services.map((service, serviceIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: service
            }, `${itemIndex}_${serviceIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, undefined)]
        }, item, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
  margin-left: 8.333%;
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h3", {
                children: currentWord
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
                initial: {
                  opacity: 0
                },
                animate: controlsInfo,
                transition: transition,
                className: "project-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
                  children: "Join Us on a Journey"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
                  children: "003"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ProjectTitle"], {
                children: ["GET ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 23
                }, undefined), " STARTED", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
                  className: "arrow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Icons_Arrow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    animate: controlsArrow,
                    transition: transition
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["VideoPreview"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("video", {
                loop: true,
                autoPlay: true,
                muted: true,
                src: "videos/featured-video.mp4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
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
            title: "View More",
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "up",
    renderAs: "footer",
    variants: variants,
    initial: false,
    custom: isTabletView,
    transition: {
      duration: 0.7,
      ease: [0.666, 0, 0.237, 1]
    }
  }, isTabletView, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5pbWF0ZU9uU2NyZWVuL0FuaW1hdGVPblNjcmVlbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBCYXIvQXBwQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcEJhci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYW52YXNFcmFzZXIvQ2FudmFzRXJhc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbnZhc0VyYXNlci9DYW52YXNFcmFzZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FudmFzRXJhc2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9BYm91dC9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9BYm91dC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9CYW5uZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9CYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0Jhbm5lci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvQ29udGFjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0NvbnRhY3Qvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L0NvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Db250ZW50L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWRQcm9qZWN0L0ZlYXR1cmVkUHJvamVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lL0ZlYXR1cmVkUHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWRQcm9qZWN0L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0Fycm93LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0ZhY2Vib29rLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9MaW5rZWRpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9Mb2dvLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb25zL1R3aXR0ZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMvWW91dHViZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnVCdXR0b24vTWVudUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51QnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudUJ1dHRvbi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0aWNreUN1cnNvci9TdGlja3lDdXJzb3IuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RpY2t5Q3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VDdXJzb3JTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VGb3JrUmVmLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZU1lZGlhUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlU3R5bGVkVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zaGFyZWQvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMvc2VydmljZXMtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ0cmFuc2xhdGVZIiwiZHVyYXRpb24iLCJlYXNlIiwib3BhY2l0eSIsInZhcmlhbnRzIiwic2hvdyIsImhpZGRlbiIsIkFuaW1hdGVPblNjcmVlbiIsImNoaWxkcmVuIiwiY2hpbGRyZW5Qcm9wIiwiYW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uIiwiaW5WaWV3UmVmIiwiaW5WaWV3IiwidXNlSW5WaWV3IiwidHJpZ2dlck9uY2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInN0YXJ0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiaGFuZGxlUmVmIiwibm9kZSIsInJlZiIsImN1cnJlbnQiLCJjbG9uZUVsZW1lbnQiLCJhbmltYXRlIiwiaW5pdGlhbCIsIm1lbW8iLCJnZXRTdHlsZXMiLCJkaXJlY3Rpb24iLCJ0b3AiLCJib3R0b20iLCJ5IiwiQXBwQmFyIiwicHJvcHMiLCJvZmZzZXQiLCJsb2dvUHJvcHMiLCJzdHlsZSIsInN0eWxlUHJvcCIsInJvb3RQcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNldEhpZGRlbiIsInVzZVN0YXRlIiwiaGFuZGxlU2Nyb2xsIiwic2hvdWxkSGlkZSIsImludGVyc2VjdGlvbiIsImN1cnJlbnRZUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX2pzeERFViIsIlNsaWRlciIsIl9vYmplY3RTcHJlYWQiLCJDb250YWluZXIiLCJMaW5rIiwiaHJlZiIsInBhc3NIcmVmIiwiU3R5bGVkTGluayIsInRpdGxlIiwiTG9nbyIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIk1lbnVXcmFwcGVyIiwiTWVudUJ1dHRvbiIsInN0eWxlZCIsIl9yZWYiLCJyZW5kZXJBcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsInRoZW1lIiwiekluZGV4Iiwic2xpZGVyIiwiZGl2IiwiY29udGFpbmVyU3R5bGVzIiwiYSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiQ2FudmFzRXJhc2VyIiwiY29tcGxldGVSYXRpbyIsImVuYWJsZWQiLCJvbkNvbXBsZXRlIiwib25Qcm9ncmVzcyIsInNpemUiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJvdGhlciIsImNhbnZhc0VyYXNlciIsInNldENhbnZhc0VyYXNlciIsImNhbnZhc1JlZiIsInVzZVJlZiIsImNvbXBvbmVudFJlZiIsInVzZUZvcmtSZWYiLCJvcHRpb25zIiwidXNlTWVtbyIsImNhbnZhcyIsImNhbnZhc0VyYXNlckZhY3RvcnkiLCJpbml0IiwiZm9yd2FyZFJlZiIsIkRFRkFVTFRfT1BUSU9OUyIsImdldEVsZW1lbnRDb21wdXRlZFN0eWxlZCIsImVsZW1lbnQiLCJwcm9wIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJyZXBsYWNlIiwiZmFjdG9yeSIsIl9jYW52YXMiLCJfY29udGV4dCIsIl9kYXRhIiwiX2hhbmRsZUVyYXNlclByb2dyZXNzIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImNvbFBhcnRzIiwibnVtUGFydHMiLCJwIiwiTWF0aCIsImZsb29yIiwicmF0aW8iLCJwYXJ0cyIsImNvbXBsZXRlIiwiX29uTW91c2VNb3ZlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc1giLCJwb3NZIiwic2NhbGVSYXRpbyIsInRvdWNoWCIsInRvdWNoWSIsInBhZ2VYIiwicGFnZVkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJfb25Nb3VzZURvd24iLCJ0b3VjaERvd24iLCJfb25Nb3VzZUNsaWNrIiwic291cmNlIiwiRXJyb3IiLCJjdXJyZW50T3B0aW9ucyIsImdldENvbnRleHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiYmFja2luZ1N0b3JlUmF0aW8iLCJ3ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwibW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwiYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJpIiwicHVzaCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ0b3VjaElEIiwicHRvdWNoWCIsInB0b3VjaFkiLCJ3IiwiaCIsImNsZWFyIiwiY2xlYXJSZWN0IiwicmVzZXQiLCJBYm91dCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsImFkZEN1cnNvckJvcmRlciIsInJlbW92ZUN1cnNvckJvcmRlciIsInVzZUN1cnNvclN0eWxlIiwiaGFuZGxlTW91c2VFbnRlciIsInVzZUNhbGxiYWNrIiwiY3VyciIsImhhbmRsZU1vdXNlTGVhdmUiLCJDb250ZW50U2VjdGlvbiIsIlRleHRXcmFwcGVyIiwiU2VydmljZXNXcmFwcGVyIiwiaXRlbXMiLCJpdGVtIiwic2VydmljZXMiLCJpdGVtSW5kZXgiLCJGcmFnbWVudCIsIkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJBY2NvcmRpb25Db250ZW50Iiwic2VydmljZSIsInNlcnZpY2VJbmRleCIsInNlY3Rpb24iLCJzbWFsbCIsInNlY29uZGFyeUZvbnRTdHlsZSIsImJ1dHRvbiIsImNvbG9ycyIsInJlZCIsInRleHQiLCJ0aXRsZUFuaW1hdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsIml0ZW1UaXRsZUFuaW1hdGlvbiIsInNjYWxlIiwidGV4dHMiLCJCYW5uZXIiLCJ3aW5kb3dTaXplIiwidXNlV2luZG93U2l6ZSIsInVzZVN0eWxlZFRoZW1lIiwiaXNNb2JpbGUiLCJjdXJyZW50VGV4dCIsInNldEN1cnJlbnRUZXh0IiwiaW5kZXgiLCJzZXRJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiQmFubmVyU2VjdGlvbiIsIlZpZGVvQ29udGFpbmVyIiwic3JjIiwibG9vcCIsImF1dG9QbGF5IiwibXV0ZWQiLCJCYW5uZXJUaXRsZSIsInNwYW4iLCJoMSIsIkNvbnRhY3QiLCJDb250YWN0U2VjdGlvbiIsImNsYXNzTmFtZSIsIlNvY2lhbE1lZGlhIiwibWVkaXVtIiwiQ29udGVudCIsIlRleHQiLCJoMiIsIndvcmRzIiwiRmVhdHVyZWRQcm9qZWN0IiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsIndvcmRJbmRleCIsInNldFdvcmRJbmRleCIsImlzVHlwaW5nIiwic2V0SXNUeXBpbmciLCJjb250cm9sc0luZm8iLCJjb250cm9sc0Fycm93IiwiaXNNZW51T3BlbiIsInVzZU1lbnVDb250ZXh0IiwiYWRkQ3Vyc29yQ29sb3IiLCJyZXNldEN1cnNvckNvbG9yIiwiaXNUYWJsZXRWaWV3IiwidXNlTWVkaWFRdWVyeSIsInNpemVzIiwidHlwaW5nRWZmZWN0IiwicHJldiIsIm5leHRDaGFySW5kZXgiLCJzbGljZSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQW5jaG9ySG92ZXJTdGFydCIsIngiLCJoYW5kbGVBbmNob3JIb3ZlckVuZCIsIlByb2plY3RBbmNob3IiLCJvbkhvdmVyU3RhcnQiLCJvbkhvdmVyRW5kIiwiUHJvamVjdEluZm8iLCJQcm9qZWN0VGl0bGUiLCJBcnJvdyIsIlZpZGVvUHJldmlldyIsIk1lbnVDb250YWluZXIiLCJzdGlja3kiLCJEZWZhdWx0TWVudUJ1dHRvbiIsIkZvb3RlciIsImN1c3RvbSIsImZpbGxDb2xvciIsIndoaXRlIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZCIsImZpbGwiLCJmaWxsUnVsZSIsIkZhY2Vib29rIiwiSW5zdGFncmFtIiwiTGlua2VkSW4iLCJMb2dvQ29udGFpbmVyIiwiU3R5bGVkTG9nbyIsImltZyIsImFsdCIsIlR3aXR0ZXIiLCJZb3VUdWJlIiwiZGlzcGF0Y2giLCJoYW5kbGVPblRvZ2dsZSIsInR5cGUiLCJTdGlja3lDdXJzb3IiLCJCdXR0b24iLCJtZWRpYXMiLCJjb21wb25lbnQiLCJ1cmwiLCJZb3V0dWJlIiwiTGlua2VkaW4iLCJ0YXJnZXQiLCJjaGlsZFJlZiIsImxvY2tDdXJzb3JQb3NpdGlvbiIsInBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIklOSVRJQUxfU1RBVEUiLCJjdXJzb3JTdHlsZSIsImJvcmRlcmVkIiwiY29sb3IiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsIkN1cnNvckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ3Vyc29yQ29udGV4dFByb3ZpZGVyIiwidXNlUmVkdWNlciIsInN0b3JlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUN1cnNvckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTWVudUNvbnRleHQiLCJNZW51Q29udGV4dFByb3ZpZGVyIiwiY29vcmRpbmF0ZXMiLCJzZXRSZWYiLCJyZWZBIiwicmVmQiIsInJlZlZhbHVlIiwicXVlcnlJbnB1dCIsIlRoZW1lQ29udGV4dCIsInF1ZXJ5IiwiaXNDbGllbnRTaWRlIiwiZGVmYXVsdE1hdGNoZXMiLCJtYXRjaE1lZGlhIiwibWF0Y2giLCJzZXRNYXRjaCIsIm1hdGNoZXMiLCJ1bmRlZmluZWQiLCJxdWVyeUxpc3QiLCJ1cGRhdGVNYXRjaCIsInNldFdpbmRvd1NpemUiLCJoYW5kbGVSZXNpemUiLCJpbm5lcldpZHRoIiwiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImFzIiwiY2F0Y2giLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJzaGFsbG93Iiwic2Nyb2xsIiwibG9jYWxlIiwibm9kZU5hbWUiLCJpbmRleE9mIiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImJvZHkiLCJmb2N1cyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwid2FybiIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsIm9ubHkiLCJjbGVhbnVwIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJkZWZhdWx0UHJldmVudGVkIiwicHJpb3JpdHkiLCJkZWZhdWx0TG9jYWxlIiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImlzTG9jYWxVUkwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiaW50ZXJwb2xhdGVBcyIsInJvdXRlIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsInNlYXJjaFBhcmFtcyIsImhhc2giLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJsb2NhbGVzIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImNoYW5nZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInJlbG9hZCIsImxvY2F0aW9uIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwic3NnNDA0IiwibW9kIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiX2dldFN0YXRpY0RhdGEiLCJnZXREYXRhSHJlZiIsIl9lcnIiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiX2dldERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiX19uZXh0TG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJ1c2VkIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXRVUkwiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiU1AiLCJtZWFzdXJlIiwiSG9tZSIsIl9GcmFnbWVudCIsIkZlYXR1cmVkU2VjdGlvbiIsIkFib3V0U2VjdGlvbiIsImJsYWNrIiwiY3NzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ21CO0FBQ1c7QUFFeEQsTUFBTUEsVUFBVSxHQUFHO0VBQ2pCQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxVQUFVLEVBQUU7SUFDVkMsUUFBUSxFQUFFLENBQUM7SUFDWEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTtFQUMzQixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNQRixRQUFRLEVBQUUsQ0FBQztJQUNYQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHO0VBQzdCO0FBQ0YsQ0FBQztBQUVELE1BQU1FLFFBQVEsR0FBRztFQUNmQyxJQUFJLEVBQUU7SUFBRUwsVUFBVSxFQUFFLENBQUM7SUFBRUcsT0FBTyxFQUFFO0VBQUUsQ0FBQztFQUNuQ0csTUFBTSxFQUFFO0lBQUVOLFVBQVUsRUFBRSxFQUFFO0lBQUVHLE9BQU8sRUFBRTtFQUFFO0FBQ3ZDLENBQUM7QUFFRCxNQUFNSSxlQUFlLEdBQUdBLENBQUM7RUFBRUMsUUFBUSxFQUFFQztBQUFhLENBQUMsS0FBSztFQUN0RCxNQUFNQyxTQUFTLEdBQUdDLGtFQUFZLENBQUMsQ0FBQztFQUNoQyxNQUFNLENBQUNDLFNBQVMsRUFBRUMsTUFBTSxDQUFDLEdBQUdDLDZFQUFTLENBQUM7SUFBRUMsV0FBVyxFQUFFO0VBQUssQ0FBQyxDQUFDO0VBRTVEQyw0Q0FBSyxDQUFDQyxTQUFTLENBQUMsTUFBTTtJQUNwQixJQUFJSixNQUFNLEVBQUU7TUFDVkgsU0FBUyxDQUFDUSxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3pCO0VBQ0YsQ0FBQyxFQUFFLENBQUNSLFNBQVMsRUFBRUcsTUFBTSxFQUFFRCxTQUFTLENBQUMsQ0FBQztFQUVsQyxNQUFNSixRQUFRLEdBQUdRLDRDQUFLLENBQUNHLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDWCxZQUFZLEVBQUVZLEtBQUssSUFBSTtJQUN6RCxJQUFJLGVBQUNMLDRDQUFLLENBQUNNLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDLEVBQUU7TUFDaEMsT0FBTyxJQUFJO0lBQ2I7SUFFQSxNQUFNRSxTQUFTLEdBQUdDLElBQUksSUFBSTtNQUN4QjtNQUNBWixTQUFTLENBQUNZLElBQUksQ0FBQzs7TUFFZjtNQUNBLE1BQU07UUFBRUM7TUFBSSxDQUFDLEdBQUdKLEtBQUs7TUFDckIsSUFBSSxPQUFPSSxHQUFHLEtBQUssVUFBVSxFQUFFO1FBQzdCQSxHQUFHLENBQUNELElBQUksQ0FBQztNQUNYLENBQUMsTUFBTSxJQUFJQyxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ3ZCQSxHQUFHLENBQUNDLE9BQU8sR0FBR0YsSUFBSTtNQUNwQjtJQUNGLENBQUM7SUFFRCxvQkFBT1IsNENBQUssQ0FBQ1csWUFBWSxDQUFDTixLQUFLLEVBQUU7TUFDL0JqQixRQUFRO01BQ1JOLFVBQVU7TUFDVjhCLE9BQU8sRUFBRWxCLFNBQVM7TUFDbEJtQixPQUFPLEVBQUUsUUFBUTtNQUNqQkosR0FBRyxFQUFFRjtJQUNQLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUVGLE9BQU9mLFFBQVE7QUFDakIsQ0FBQztBQUVjUSx3SEFBSyxDQUFDYyxJQUFJLENBQUN2QixlQUFlLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDN0QxQztBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNHO0FBQ0k7QUFDTTtBQUMrQjtBQUFBO0FBRXRFLE1BQU13QixTQUFTLEdBQUdBLENBQUNDLFNBQVMsR0FBRyxFQUFFLEtBQUs7RUFDcEMsSUFBSUEsU0FBUyxLQUFLLE1BQU0sRUFBRSxPQUFPO0lBQUVDLEdBQUcsRUFBRTtFQUFFLENBQUM7RUFDM0MsSUFBSUQsU0FBUyxLQUFLLElBQUksRUFBRSxPQUFPO0lBQUVFLE1BQU0sRUFBRTtFQUFFLENBQUM7RUFFNUMsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsTUFBTTlCLFFBQVEsR0FBRztFQUNmRSxNQUFNLEVBQUU7SUFBRTZCLENBQUMsRUFBRSxDQUFDO0VBQUksQ0FBQztFQUNuQjlCLElBQUksRUFBRTtJQUFFOEIsQ0FBQyxFQUFFO0VBQUU7QUFDZixDQUFDO0FBRUQsTUFBTUMsTUFBTSxHQUFHQyxLQUFLLElBQUk7RUFDdEIsTUFBTTtNQUNKTCxTQUFTLEdBQUcsTUFBTTtNQUNsQk0sTUFBTSxHQUFHLEdBQUc7TUFDWkMsU0FBUyxHQUFHLENBQUMsQ0FBQztNQUNkQyxLQUFLLEVBQUVDLFNBQVMsR0FBRyxDQUFDO0lBRXRCLENBQUMsR0FBR0osS0FBSztJQURKSyxTQUFTLEdBQUFDLHdCQUFBLENBQ1ZOLEtBQUs7RUFDVCxNQUFNLENBQUMvQixNQUFNLEVBQUVzQyxTQUFTLENBQUMsR0FBRzVCLDRDQUFLLENBQUM2QixRQUFRLENBQUMsS0FBSyxDQUFDO0VBRWpEN0IsNENBQUssQ0FBQ0MsU0FBUyxDQUFDLE1BQU07SUFDcEIsTUFBTTZCLFlBQVksR0FBR0EsQ0FBQSxLQUFNO01BQ3pCLElBQUlDLFVBQVUsR0FBRyxLQUFLO01BQ3RCLElBQUlDLFlBQVksR0FBR1YsTUFBTTtNQUN6QixJQUFJVyxnQkFBZ0IsR0FBRyxDQUFDO01BRXhCLElBQUlqQixTQUFTLEtBQUssTUFBTSxFQUFFO1FBQ3hCaUIsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBTztNQUNuQyxDQUFDLE1BQU0sSUFBSW5CLFNBQVMsS0FBSyxJQUFJLEVBQUU7UUFDN0JpQixnQkFBZ0IsR0FDZEcsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFNBQVMsR0FBR0osTUFBTSxDQUFDSyxXQUFXO1FBQ3pEUCxZQUFZLEdBQUdJLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDRyxZQUFZLEdBQUdsQixNQUFNO01BQy9EO01BRUFTLFVBQVUsR0FBR0UsZ0JBQWdCLEdBQUdELFlBQVk7TUFDNUMsSUFBSUQsVUFBVSxLQUFLekMsTUFBTSxFQUFFO1FBQ3pCc0MsU0FBUyxDQUFDRyxVQUFVLENBQUM7TUFDdkI7SUFDRixDQUFDO0lBRURELFlBQVksQ0FBQyxDQUFDO0lBRWRJLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsUUFBUSxFQUFFWCxZQUFZLEVBQUUsS0FBSyxDQUFDO0lBRXRELE9BQU8sTUFBTTtNQUNYSSxNQUFNLENBQUNRLG1CQUFtQixDQUFDLFFBQVEsRUFBRVosWUFBWSxFQUFFLEtBQUssQ0FBQztJQUMzRCxDQUFDO0VBQ0gsQ0FBQyxFQUFFLENBQUN4QyxNQUFNLEVBQUUwQixTQUFTLEVBQUVNLE1BQU0sQ0FBQyxDQUFDO0VBRS9CLE1BQU1xQixNQUFNLEdBQUc1QixTQUFTLENBQUNDLFNBQVMsQ0FBQztFQUVuQyxvQkFDRTRCLG9FQUFBLENBQUNDLDhDQUFNLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQTtJQUNMMUQsUUFBUSxFQUFFQSxRQUFTO0lBQ25CeUIsT0FBTyxFQUFDLFFBQVE7SUFDaEJELE9BQU8sRUFBRXRCLE1BQU0sR0FBRyxRQUFRLEdBQUcsTUFBTztJQUNwQ1IsVUFBVSxFQUFFO01BQ1ZHLFFBQVEsRUFBRSxDQUFDO01BQ1hDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBRTtJQUNGc0MsS0FBSyxFQUFBc0IsYUFBQSxDQUFBQSxhQUFBLEtBQ0FILE1BQU0sR0FDTmxCLFNBQVM7RUFDWixHQUNFQyxTQUFTO0lBQUFsQyxRQUFBLGVBRWJvRCxvRUFBQSxDQUFDRyxpREFBUztNQUFBdkQsUUFBQSxnQkFDUm9ELG9FQUFBLENBQUNJLGdEQUFJO1FBQUNDLElBQUksRUFBQyxHQUFHO1FBQUNDLFFBQVE7UUFBQTFELFFBQUEsZUFDckJvRCxvRUFBQSxDQUFDTyxrREFBVTtVQUFDQyxLQUFLLEVBQUMsUUFBUTtVQUFBNUQsUUFBQSxlQUN4Qm9ELG9FQUFBLENBQUNTLG1EQUFJLEVBQUFQLGFBQUEsS0FBS3ZCLFNBQVM7WUFBQStCLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFHO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ2I7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDVCxDQUFDLGVBQ1BiLG9FQUFBLENBQUNjLG1EQUFXO1FBQUFsRSxRQUFBLGVBQ1ZvRCxvRUFBQSxDQUFDZSxtREFBVTtVQUFDUCxLQUFLLEVBQUM7UUFBVTtVQUFBRSxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBRTtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNwQixDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0w7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTixDQUFDO0FBRWIsQ0FBQztBQUVjekQsd0hBQUssQ0FBQ2MsSUFBSSxDQUFDTSxNQUFNLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDeEZqQztBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ0E7QUFDcUI7QUFBQTtBQUVyRCxNQUFNeUIsTUFBTSxHQUFHZSx3REFBTSxDQUFDQyxJQUFBLElBQTRCO0VBQUEsSUFBM0I7TUFBRUM7SUFBbUIsQ0FBQyxHQUFBRCxJQUFBO0lBQVB4QyxLQUFLLEdBQUFNLHdCQUFBLENBQUFrQyxJQUFBO0VBQ2hELE1BQU1FLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQ0YsUUFBUSxDQUFDLElBQUksS0FBSztFQUMzQyxvQkFBT2xCLG9FQUFBLENBQUNtQixTQUFTLEVBQUFqQixhQUFBLEtBQUt6QixLQUFLO0lBQUFpQyxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFBRyxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxDQUFDO0VBQUVRO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTTtBQUMvQyxDQUFDO0FBRU0sTUFBTXBCLFNBQVMsR0FBR2Esd0RBQU0sQ0FBQ1EsR0FBRztBQUNuQyxJQUFJQyxnRUFBZTtBQUNuQjtBQUNBLENBQUM7QUFFTSxNQUFNbEIsVUFBVSxHQUFHUyx3REFBTSxDQUFDVSxDQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0VBQUVMO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUVNLE1BQU1kLFdBQVcsR0FBR0Usd0RBQU0sQ0FBQ1EsR0FBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0VBQUVIO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBLEdBQUc7QUFDSCxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDeUI7QUFDc0I7QUFDUTtBQUFBO0FBRXhELE1BQU1DLFlBQVksR0FBR0EsQ0FBQ3BELEtBQUssRUFBRVosR0FBRyxLQUFLO0VBQ25DLE1BQU07TUFDSmlFLGFBQWEsR0FBRyxDQUFDO01BQ2pCQyxPQUFPLEdBQUcsSUFBSTtNQUNkQyxVQUFVLEdBQUcsSUFBSTtNQUNqQkMsVUFBVSxHQUFHLElBQUk7TUFDakJDLElBQUksR0FBRyxFQUFFO01BQ1RDLFVBQVUsR0FBRyxNQUFNO01BQ25CQyxLQUFLO01BQ0xDO0lBRUYsQ0FBQyxHQUFHNUQsS0FBSztJQURKNkQsS0FBSyxHQUFBdkQsd0JBQUEsQ0FDTk4sS0FBSztFQUVULE1BQU0sQ0FBQzhELFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUdwRiw0Q0FBSyxDQUFDNkIsUUFBUSxDQUFDLElBQUksQ0FBQztFQUM1RCxNQUFNd0QsU0FBUyxHQUFHckYsNENBQUssQ0FBQ3NGLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDcEMsTUFBTUMsWUFBWSxHQUFHQyxpRUFBVSxDQUFDSCxTQUFTLEVBQUU1RSxHQUFHLENBQUM7RUFFL0MsTUFBTWdGLE9BQU8sR0FBR3pGLDRDQUFLLENBQUMwRixPQUFPLENBQzNCLE9BQU87SUFDTFgsVUFBVTtJQUNWTCxhQUFhO0lBQ2JDLE9BQU87SUFDUEMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLElBQUk7SUFDSkUsS0FBSztJQUNMQztFQUNGLENBQUMsQ0FBQyxFQUNGLENBQ0VGLFVBQVUsRUFDVkwsYUFBYSxFQUNiQyxPQUFPLEVBQ1BDLFVBQVUsRUFDVkMsVUFBVSxFQUNWQyxJQUFJLEVBQ0pFLEtBQUssRUFDTEMsTUFBTSxDQUVWLENBQUM7RUFFRGpGLDRDQUFLLENBQUNDLFNBQVMsQ0FBQyxNQUFNO0lBQ3BCLE1BQU0wRixNQUFNLEdBQUdDLG9FQUFtQixDQUFDLENBQUM7SUFDcENSLGVBQWUsQ0FBQ08sTUFBTSxDQUFDO0VBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTjNGLDRDQUFLLENBQUNDLFNBQVMsQ0FBQyxNQUFNO0lBQ3BCLElBQUlrRixZQUFZLEVBQUU7TUFDaEJBLFlBQVksQ0FBQ1UsSUFBSSxDQUFDUixTQUFTLENBQUMzRSxPQUFPLEVBQUUrRSxPQUFPLENBQUM7SUFDL0M7RUFDRixDQUFDLEVBQUUsQ0FBQ04sWUFBWSxFQUFFTSxPQUFPLENBQUMsQ0FBQztFQUUzQixvQkFBTzdDLG9FQUFBLFdBQUFFLGFBQUE7SUFBUXJDLEdBQUcsRUFBRThFO0VBQWEsR0FBS0wsS0FBSztJQUFBNUIsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQUcsQ0FBQztBQUNqRCxDQUFDO0FBRWN6RCx3SEFBSyxDQUFDOEYsVUFBVSxDQUFDckIsWUFBWSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEN0MsTUFBTXNCLGVBQWUsR0FBRztFQUN0QmhCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCTCxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsT0FBTyxFQUFFLElBQUk7RUFDYkMsVUFBVSxFQUFFLElBQUk7RUFDaEJDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxJQUFJLEVBQUU7QUFDUixDQUFDO0FBRUQsTUFBTWtCLHdCQUF3QixHQUFHQSxDQUFDQyxPQUFPLEVBQUVDLElBQUksS0FBS0MsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0csT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV2SCxNQUFNQyxPQUFPLEdBQUdBLENBQUEsS0FBTTtFQUNwQixJQUFJQyxPQUFPLEdBQUcsSUFBSTtFQUNsQixJQUFJQyxRQUFRLEdBQUcsSUFBSTtFQUNuQixJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBRWQsTUFBTUMscUJBQXFCLEdBQUdBLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxLQUFLO0lBQ3BELE1BQU07TUFDSkMsUUFBUTtNQUNSQyxRQUFRO01BQ1JwQyxhQUFhO01BQ2JDLE9BQU87TUFDUEcsSUFBSTtNQUNKRixVQUFVO01BQ1ZDO0lBQ0YsQ0FBQyxHQUFHNEIsS0FBSztJQUVULElBQUksQ0FBQzlCLE9BQU8sRUFBRTtJQUVkLElBQUlvQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixRQUFRLEdBQUc3QixJQUFJLENBQUMsR0FBR2tDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxRQUFRLEdBQUc5QixJQUFJLENBQUMsR0FBRytCLFFBQVE7SUFFNUUsSUFBSUUsQ0FBQyxJQUFJLENBQUMsSUFBSUEsQ0FBQyxHQUFHRCxRQUFRLEVBQUU7TUFDMUJMLEtBQUssQ0FBQ1MsS0FBSyxJQUFJVCxLQUFLLENBQUNVLEtBQUssQ0FBQ0osQ0FBQyxDQUFDO01BQzdCTixLQUFLLENBQUNVLEtBQUssQ0FBQ0osQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUVsQixJQUFJLENBQUNOLEtBQUssQ0FBQ1csUUFBUSxFQUFFO1FBQ25CTCxDQUFDLEdBQUdOLEtBQUssQ0FBQ1MsS0FBSyxHQUFHVCxLQUFLLENBQUNLLFFBQVE7UUFFaEMsSUFBSUMsQ0FBQyxJQUFJckMsYUFBYSxFQUFFO1VBQ3RCK0IsS0FBSyxDQUFDVyxRQUFRLEdBQUcsSUFBSTtVQUNyQixJQUFJeEMsVUFBVSxFQUFFO1lBQ2RBLFVBQVUsQ0FBQyxDQUFDO1VBQ2Q7VUFDQTtRQUNGO1FBRUEsSUFBSUMsVUFBVSxFQUFFO1VBQ2RBLFVBQVUsQ0FBQ2tDLENBQUMsQ0FBQztRQUNmO01BQ0Y7SUFDRjtFQUNGLENBQUM7RUFFRCxNQUFNTSxZQUFZLEdBQUlDLEtBQUssSUFBSztJQUM5QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUV0QixNQUFNO01BQ0o1QyxPQUFPO01BQUU2QyxJQUFJO01BQUVDLElBQUk7TUFBRUMsVUFBVTtNQUFFQyxNQUFNO01BQUVDO0lBQzNDLENBQUMsR0FBR25CLEtBQUs7SUFDVCxNQUFNRSxRQUFRLEdBQUcsQ0FBQ1csS0FBSyxDQUFDTyxLQUFLLEdBQUdMLElBQUksSUFBSUUsVUFBVTtJQUNsRCxNQUFNZCxRQUFRLEdBQUcsQ0FBQ1UsS0FBSyxDQUFDUSxLQUFLLEdBQUdMLElBQUksSUFBSUMsVUFBVTtJQUVsRCxJQUFJL0MsT0FBTyxFQUFFO01BQ1grQixxQkFBcUIsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRLENBQUM7TUFDekNKLFFBQVEsQ0FBQ3VCLFNBQVMsQ0FBQyxDQUFDO01BQ3BCdkIsUUFBUSxDQUFDd0IsTUFBTSxDQUFDTCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztNQUMvQnBCLFFBQVEsQ0FBQ3lCLE1BQU0sQ0FBQ3RCLFFBQVEsRUFBRUMsUUFBUSxDQUFDO01BQ25DSixRQUFRLENBQUMwQixNQUFNLENBQUMsQ0FBQztJQUNuQjtJQUVBekIsS0FBSyxDQUFDa0IsTUFBTSxHQUFHaEIsUUFBUTtJQUN2QkYsS0FBSyxDQUFDbUIsTUFBTSxHQUFHaEIsUUFBUTtFQUN6QixDQUFDO0VBRUQsTUFBTXVCLFlBQVksR0FBSWIsS0FBSyxJQUFLO0lBQzlCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXRCLE1BQU07TUFDSjVDLE9BQU87TUFBRTZDLElBQUk7TUFBRUMsSUFBSTtNQUFFQztJQUN2QixDQUFDLEdBQUdqQixLQUFLO0lBQ1QsTUFBTUUsUUFBUSxHQUFHLENBQUNXLEtBQUssQ0FBQ08sS0FBSyxHQUFHTCxJQUFJLElBQUlFLFVBQVU7SUFDbEQsTUFBTWQsUUFBUSxHQUFHLENBQUNVLEtBQUssQ0FBQ1EsS0FBSyxHQUFHTCxJQUFJLElBQUlDLFVBQVU7SUFFbERqQixLQUFLLENBQUMyQixTQUFTLEdBQUcsSUFBSTtJQUN0QjNCLEtBQUssQ0FBQ2tCLE1BQU0sR0FBR2hCLFFBQVE7SUFDdkJGLEtBQUssQ0FBQ21CLE1BQU0sR0FBR2hCLFFBQVE7SUFFdkIsSUFBSWpDLE9BQU8sRUFBRTtNQUNYK0IscUJBQXFCLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxDQUFDO01BRXpDSixRQUFRLENBQUN1QixTQUFTLENBQUMsQ0FBQztNQUNwQnZCLFFBQVEsQ0FBQ3dCLE1BQU0sQ0FBQ3JCLFFBQVEsR0FBRyxDQUFDLEVBQUVDLFFBQVEsQ0FBQztNQUN2Q0osUUFBUSxDQUFDeUIsTUFBTSxDQUFDdEIsUUFBUSxFQUFFQyxRQUFRLENBQUM7TUFDbkNKLFFBQVEsQ0FBQzBCLE1BQU0sQ0FBQyxDQUFDO0lBQ25CO0lBRUEzQixPQUFPLENBQUM5RCxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU0RSxZQUFZLENBQUM7RUFDckQsQ0FBQztFQUVELE1BQU1nQixhQUFhLEdBQUlmLEtBQUssSUFBSztJQUMvQkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUV0QixNQUFNO01BQ0o1QyxPQUFPO01BQUU2QyxJQUFJO01BQUVDLElBQUk7TUFBRUM7SUFDdkIsQ0FBQyxHQUFHakIsS0FBSztJQUNULE1BQU1FLFFBQVEsR0FBRyxDQUFDVyxLQUFLLENBQUNPLEtBQUssR0FBR0wsSUFBSSxJQUFJRSxVQUFVO0lBQ2xELE1BQU1kLFFBQVEsR0FBRyxDQUFDVSxLQUFLLENBQUNRLEtBQUssR0FBR0wsSUFBSSxJQUFJQyxVQUFVO0lBRWxEakIsS0FBSyxDQUFDMkIsU0FBUyxHQUFHLElBQUk7SUFDdEIzQixLQUFLLENBQUNrQixNQUFNLEdBQUdoQixRQUFRO0lBQ3ZCRixLQUFLLENBQUNtQixNQUFNLEdBQUdoQixRQUFRO0lBRXZCLElBQUlqQyxPQUFPLEVBQUU7TUFDWCtCLHFCQUFxQixDQUFDQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQztNQUV6Q0osUUFBUSxDQUFDdUIsU0FBUyxDQUFDLENBQUM7TUFDcEJ2QixRQUFRLENBQUN3QixNQUFNLENBQUNyQixRQUFRLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLENBQUM7TUFDdkNKLFFBQVEsQ0FBQ3lCLE1BQU0sQ0FBQ3RCLFFBQVEsRUFBRUMsUUFBUSxDQUFDO01BQ25DSixRQUFRLENBQUMwQixNQUFNLENBQUMsQ0FBQztJQUNuQjtJQUVBM0IsT0FBTyxDQUFDOUQsZ0JBQWdCLENBQUMsV0FBVyxFQUFFNEUsWUFBWSxDQUFDO0VBQ3JELENBQUM7RUFFRCxNQUFNeEIsSUFBSSxHQUFHQSxDQUFDeUMsTUFBTSxFQUFFN0MsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLO0lBQ3JDLElBQUksQ0FBQzZDLE1BQU0sRUFBRTtNQUNYLE1BQU0sSUFBSUMsS0FBSyxDQUNiLGdFQUNGLENBQUM7SUFDSDtJQUVBLE1BQU1DLGNBQWMsR0FBQTFGLGFBQUEsQ0FBQUEsYUFBQSxLQUFRaUQsZUFBZSxHQUFLTixPQUFPLENBQUU7SUFDekQsTUFBTTtNQUFFWCxJQUFJO01BQUVDO0lBQVcsQ0FBQyxHQUFHeUQsY0FBYztJQUUzQ2pDLE9BQU8sR0FBRytCLE1BQU07SUFDaEI5QixRQUFRLEdBQUdELE9BQU8sQ0FBQ2tDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkMsTUFBTUMsZ0JBQWdCLEdBQUd4RyxNQUFNLENBQUN3RyxnQkFBZ0IsSUFBSSxDQUFDO0lBQ3JELE1BQU1DLGlCQUFpQixHQUFHbkMsUUFBUSxDQUFDb0MsNEJBQTRCLElBQzFEcEMsUUFBUSxDQUFDcUMseUJBQXlCLElBQ2xDckMsUUFBUSxDQUFDc0Msd0JBQXdCLElBQ2pDdEMsUUFBUSxDQUFDdUMsdUJBQXVCLElBQ2hDdkMsUUFBUSxDQUFDd0Msc0JBQXNCLElBQy9CLENBQUM7SUFDTixNQUFNdEIsVUFBVSxHQUFHZ0IsZ0JBQWdCLEdBQUdDLGlCQUFpQjtJQUV2RCxNQUFNTSxTQUFTLEdBQUdqRCx3QkFBd0IsQ0FBQ08sT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUM1RCxNQUFNMkMsVUFBVSxHQUFHbEQsd0JBQXdCLENBQUNPLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDOUQsTUFBTXZCLEtBQUssR0FBR2lFLFNBQVMsR0FBR3ZCLFVBQVU7SUFDcEMsTUFBTXpDLE1BQU0sR0FBR2lFLFVBQVUsR0FBR3hCLFVBQVU7SUFFdEMsSUFBSWdCLGdCQUFnQixLQUFLQyxpQkFBaUIsRUFBRTtNQUMxQ3BDLE9BQU8sQ0FBQ3ZCLEtBQUssR0FBR0EsS0FBSztNQUNyQnVCLE9BQU8sQ0FBQ3RCLE1BQU0sR0FBR0EsTUFBTTtNQUN2QnNCLE9BQU8sQ0FBQy9FLEtBQUssQ0FBQ3dELEtBQUssR0FBRyxHQUFHaUUsU0FBUyxJQUFJO01BQ3RDMUMsT0FBTyxDQUFDL0UsS0FBSyxDQUFDeUQsTUFBTSxHQUFHLEdBQUdpRSxVQUFVLElBQUk7SUFDMUMsQ0FBQyxNQUFNO01BQ0wzQyxPQUFPLENBQUN2QixLQUFLLEdBQUdpRSxTQUFTO01BQ3pCMUMsT0FBTyxDQUFDdEIsTUFBTSxHQUFHaUUsVUFBVTtNQUMzQjNDLE9BQU8sQ0FBQy9FLEtBQUssQ0FBQ3dELEtBQUssR0FBRyxFQUFFO01BQ3hCdUIsT0FBTyxDQUFDL0UsS0FBSyxDQUFDeUQsTUFBTSxHQUFHLEVBQUU7SUFDM0I7O0lBRUE7SUFDQXVCLFFBQVEsQ0FBQzJDLFNBQVMsR0FBR3BFLFVBQVU7SUFDL0J5QixRQUFRLENBQUM0QyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXBFLEtBQUssRUFBRUMsTUFBTSxDQUFDO0lBQ3RDdUIsUUFBUSxDQUFDNkMsU0FBUyxDQUFDOUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUV2QixLQUFLLEVBQUVDLE1BQU0sQ0FBQzs7SUFFaEQ7SUFDQXVCLFFBQVEsQ0FBQzhDLHdCQUF3QixHQUFHLGlCQUFpQjtJQUNyRDlDLFFBQVEsQ0FBQytDLFNBQVMsR0FBR3pFLElBQUk7SUFDekIwQixRQUFRLENBQUNnRCxPQUFPLEdBQUcsT0FBTzs7SUFFMUI7SUFDQWpELE9BQU8sQ0FBQzlELGdCQUFnQixDQUFDLFlBQVksRUFBRTBGLFlBQVksQ0FBQztJQUNwRDVCLE9BQU8sQ0FBQzlELGdCQUFnQixDQUFDLE9BQU8sRUFBRTRGLGFBQWEsQ0FBQztJQUNoRDtJQUNBO0lBQ0E7O0lBRUE7SUFDQSxNQUFNbEIsS0FBSyxHQUFHLEVBQUU7SUFDaEIsTUFBTU4sUUFBUSxHQUFHRyxJQUFJLENBQUNDLEtBQUssQ0FBQ2pDLEtBQUssR0FBR0YsSUFBSSxDQUFDO0lBQ3pDLE1BQU1nQyxRQUFRLEdBQUdELFFBQVEsR0FBR0csSUFBSSxDQUFDQyxLQUFLLENBQUNoQyxNQUFNLEdBQUdILElBQUksQ0FBQztJQUNyRCxLQUFLLElBQUkyRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUczQyxRQUFRLEVBQUUyQyxDQUFDLEVBQUUsRUFBRTtNQUNqQ3RDLEtBQUssQ0FBQ3VDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDZjtJQUVBakQsS0FBSyxHQUFBM0QsYUFBQTtNQUNIMEUsSUFBSSxFQUFFakIsT0FBTyxDQUFDb0QsVUFBVTtNQUN4QmxDLElBQUksRUFBRWxCLE9BQU8sQ0FBQ3FELFNBQVM7TUFDdkJ4QixTQUFTLEVBQUUsS0FBSztNQUNoQnlCLE9BQU8sRUFBRSxDQUFDLEdBQUc7TUFDYmxDLE1BQU0sRUFBRSxDQUFDO01BQ1RDLE1BQU0sRUFBRSxDQUFDO01BQ1RrQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxDQUFDLEVBQUVoRixLQUFLO01BQ1JpRixDQUFDLEVBQUVoRixNQUFNO01BQ1R5QyxVQUFVO01BQ1ZSLEtBQUssRUFBRSxDQUFDO01BQ1JFLFFBQVEsRUFBRSxLQUFLO01BQ2ZvQjtJQUFjLEdBQ1hBLGNBQWMsQ0FDbEI7RUFDSCxDQUFDO0VBRUQsTUFBTTBCLEtBQUssR0FBR0EsQ0FBQSxLQUFNO0lBQ2xCLE1BQU07TUFDSkYsQ0FBQztNQUFFQyxDQUFDO01BQUVuRCxRQUFRO01BQUVsQztJQUNsQixDQUFDLEdBQUc2QixLQUFLO0lBRVQsSUFBSUEsS0FBSyxFQUFFO01BQ1RELFFBQVEsQ0FBQzJELFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFSCxDQUFDLEVBQUVDLENBQUMsQ0FBQztNQUU5QixLQUFLLElBQUlSLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzNDLFFBQVEsRUFBRTJDLENBQUMsRUFBRSxFQUFFO1FBQ2pDaEQsS0FBSyxDQUFDVSxLQUFLLENBQUNzQyxDQUFDLENBQUMsR0FBRyxDQUFDO01BQ3BCO01BRUFoRCxLQUFLLENBQUNTLEtBQUssR0FBR0osUUFBUTtNQUN0QkwsS0FBSyxDQUFDVyxRQUFRLEdBQUcsSUFBSTtNQUVyQixJQUFJeEMsVUFBVSxFQUFFO1FBQ2RBLFVBQVUsQ0FBQyxDQUFDO01BQ2Q7SUFDRjtFQUNGLENBQUM7RUFFRCxNQUFNd0YsS0FBSyxHQUFHQSxDQUFBLEtBQU07SUFDbEIsTUFBTTtNQUFFSixDQUFDO01BQUVDLENBQUM7TUFBRW5EO0lBQVMsQ0FBQyxHQUFHTCxLQUFLO0lBRWhDRCxRQUFRLENBQUM4Qyx3QkFBd0IsR0FBRyxhQUFhO0lBQ2pEOUMsUUFBUSxDQUFDNkMsU0FBUyxDQUFDOUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUV5RCxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUN2Q3pELFFBQVEsQ0FBQzhDLHdCQUF3QixHQUFHLGlCQUFpQjtJQUVyRCxLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzNDLFFBQVEsRUFBRTJDLENBQUMsRUFBRSxFQUFFO01BQ2pDaEQsS0FBSyxDQUFDVSxLQUFLLENBQUNzQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3BCO0lBRUFoRCxLQUFLLENBQUNTLEtBQUssR0FBRyxDQUFDO0lBQ2ZULEtBQUssQ0FBQ1csUUFBUSxHQUFHLEtBQUs7SUFDdEJYLEtBQUssQ0FBQzJCLFNBQVMsR0FBRyxLQUFLO0VBQ3pCLENBQUM7RUFFRCxPQUFPO0lBQ0x2QyxJQUFJO0lBQ0pxRSxLQUFLO0lBQ0xFO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFYzlELHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQzFQdEI7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ2tDO0FBQ0Q7QUFDUDtBQU9sQztBQUFBO0FBRWxCLE1BQU0rRCxLQUFLLEdBQUdBLENBQUEsS0FBTTtFQUNsQixNQUFNLENBQUNDLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUd2Syw0Q0FBSyxDQUFDNkIsUUFBUSxDQUFDLENBQUMsQ0FBQztFQUN6RCxNQUFNO0lBQUUySSxlQUFlO0lBQUVDO0VBQW1CLENBQUMsR0FBR0MscUVBQWMsQ0FBQyxDQUFDO0VBRWhFLE1BQU1DLGdCQUFnQixHQUFHM0ssNENBQUssQ0FBQzRLLFdBQVcsQ0FDeENDLElBQUksSUFBSTtJQUNOLElBQUlBLElBQUksS0FBS1AsWUFBWSxFQUFFO0lBRTNCRSxlQUFlLENBQUMsQ0FBQztFQUNuQixDQUFDLEVBQ0QsQ0FBQ0YsWUFBWSxFQUFFRSxlQUFlLENBQ2hDLENBQUM7RUFFRCxNQUFNTSxnQkFBZ0IsR0FBRzlLLDRDQUFLLENBQUM0SyxXQUFXLENBQ3hDQyxJQUFJLElBQUk7SUFDTixJQUFJQSxJQUFJLEtBQUtQLFlBQVksRUFBRTtJQUUzQkcsa0JBQWtCLENBQUMsQ0FBQztFQUN0QixDQUFDLEVBQ0QsQ0FBQ0gsWUFBWSxFQUFFRyxrQkFBa0IsQ0FDbkMsQ0FBQztFQUVELG9CQUNFN0gsb0VBQUEsQ0FBQ3JELHdEQUFlO0lBQUFDLFFBQUEsZUFDZG9ELG9FQUFBLENBQUNtSSxzREFBYztNQUFBdkwsUUFBQSxnQkFDYm9ELG9FQUFBLENBQUNvSSxtREFBVztRQUFBeEwsUUFBQSxnQkFDVm9ELG9FQUFBO1VBQUFwRCxRQUFBLEVBQUk7UUFHSjtVQUFBOEQsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUksQ0FBQyxlQUNMYixvRUFBQTtVQUFBcEQsUUFBQSxFQUFHO1FBTUg7VUFBQThELFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFHLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDTyxDQUFDLGVBQ2RiLG9FQUFBLENBQUNxSSx1REFBZTtRQUFBekwsUUFBQSxnQkFDZG9ELG9FQUFBO1VBQUFwRCxRQUFBLEVBQUk7UUFBUTtVQUFBOEQsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUksQ0FBQyxFQUNoQnlILHVFQUFLLENBQUM5SyxHQUFHLENBQUMsQ0FBQyxDQUFDK0ssSUFBSSxFQUFFQyxRQUFRLENBQUMsRUFBRUMsU0FBUyxrQkFDckN6SSxvRUFBQSxDQUFDNUMsNENBQUssQ0FBQ3NMLFFBQVE7VUFBQTlMLFFBQUEsZ0JBQ2JvRCxvRUFBQSxDQUFDMkksdURBQWU7WUFDZCxpQkFBZUYsU0FBUyxLQUFLZixZQUFhO1lBQzFDa0IsT0FBTyxFQUFFQSxDQUFBLEtBQU1qQixlQUFlLENBQUNjLFNBQVMsQ0FBRTtZQUMxQ0ksWUFBWSxFQUFFQSxDQUFBLEtBQU1kLGdCQUFnQixDQUFDVSxTQUFTLENBQUU7WUFDaERLLFlBQVksRUFBRUEsQ0FBQSxLQUFNWixnQkFBZ0IsQ0FBQ08sU0FBUyxDQUFFO1lBQUE3TCxRQUFBLEVBRS9DMkw7VUFBSTtZQUFBN0gsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQ1UsQ0FBQyxlQUNsQmIsb0VBQUEsQ0FBQytJLHdEQUFnQjtZQUNmL0ssT0FBTyxFQUFFO2NBQUVxRSxNQUFNLEVBQUVvRyxTQUFTLEtBQUtmLFlBQVksR0FBRyxNQUFNLEdBQUc7WUFBSSxDQUFFO1lBQy9EeEwsVUFBVSxFQUFFO2NBQUVHLFFBQVEsRUFBRSxHQUFHO2NBQUVDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFBRSxDQUFFO1lBQUFNLFFBQUEsRUFFekQ0TCxRQUFRLENBQUNoTCxHQUFHLENBQUMsQ0FBQ3dMLE9BQU8sRUFBRUMsWUFBWSxrQkFDbENqSixvRUFBQTtjQUFBcEQsUUFBQSxFQUF5Q29NO1lBQU8sR0FBeEMsR0FBR1AsU0FBUyxJQUFJUSxZQUFZLEVBQUU7Y0FBQXZJLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxZQUFjLENBQ3JEO1VBQUM7WUFBQUgsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQ2MsQ0FBQztRQUFBLEdBaEJBMEgsSUFBSTtVQUFBN0gsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBaUJULENBQ2pCLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDYSxDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0o7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDRixDQUFDO0FBRXRCLENBQUM7QUFFY3pELHdIQUFLLENBQUNjLElBQUksQ0FBQ3VKLEtBQUssQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUM5RWhDO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0E7QUFDd0I7QUFDRTtBQUUxRCxNQUFNVSxjQUFjLEdBQUduSCx3REFBTSxDQUFDSSxvREFBTSxDQUFDOEgsT0FBTyxDQUFDO0FBQ3BELElBQUl6SCxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0VBQUVKO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ3dILEtBQUs7QUFDMUM7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLENBQUM7RUFBRTlIO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBLEdBQUc7QUFDSCxDQUFDO0FBRU0sTUFBTXdHLFdBQVcsR0FBR3BILHdEQUFNLENBQUNRLEdBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0VBQUVIO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ3dILEtBQUs7QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUksQ0FBQztFQUFFOUg7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUVNLE1BQU15RyxlQUFlLEdBQUdySCx3REFBTSxDQUFDUSxHQUFHO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU00SCxzRUFBa0I7QUFDeEI7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFL0g7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDd0gsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUVNLE1BQU1SLGVBQWUsR0FBRzNILHdEQUFNLENBQUNxSSxNQUFNO0FBQzVDLElBQUlELHNFQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxDQUFDO0VBQUUvSDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDaUksTUFBTSxDQUFDQyxHQUFHO0FBQzFDO0FBQ0E7QUFDQSxhQUFhLENBQUM7RUFBRWxJO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNtSSxJQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLENBQUM7RUFBRW5JO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNpSSxNQUFNLENBQUNDLEdBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRU0sTUFBTVIsZ0JBQWdCLEdBQUcvSCx3REFBTSxDQUFDSSxvREFBTSxDQUFDSSxHQUFHLENBQUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsQ0FBQztFQUFFSDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDaUksTUFBTSxDQUFDQyxHQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckprRDtBQUNaO0FBQ29CO0FBQ0Y7QUFDRTtBQUNiO0FBQ3dCO0FBQUE7QUFFdEUsTUFBTUUsY0FBYyxHQUFHO0VBQ3JCekwsT0FBTyxFQUFFO0lBQ1A5QixVQUFVLEVBQUU7TUFDVndOLGVBQWUsRUFBRTtJQUNuQjtFQUNGO0FBQ0YsQ0FBQztBQUVELE1BQU1DLGtCQUFrQixHQUFHO0VBQ3pCMUwsT0FBTyxFQUFFO0lBQUUxQixPQUFPLEVBQUUsQ0FBQztJQUFFcU4sS0FBSyxFQUFFO0VBQUksQ0FBQztFQUFFO0VBQ3JDNUwsT0FBTyxFQUFFO0lBQ1B6QixPQUFPLEVBQUUsQ0FBQztJQUFFO0lBQ1pxTixLQUFLLEVBQUUsQ0FBQztJQUFJO0lBQ1oxTixVQUFVLEVBQUU7TUFDVkcsUUFBUSxFQUFFLEdBQUc7TUFBRTtNQUNmQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCO0VBQ0Y7QUFDRixDQUFDO0FBRUQsTUFBTXVOLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0FBRWpDLE1BQU1DLE1BQU0sR0FBR0EsQ0FBQSxLQUFNO0VBQ25CLE1BQU1ySCxTQUFTLEdBQUdyRiw0Q0FBSyxDQUFDc0YsTUFBTSxDQUFDLElBQUksQ0FBQztFQUNwQyxNQUFNcUgsVUFBVSxHQUFHQyxvRUFBYSxDQUFDLENBQUM7RUFDbEMsTUFBTTNJLEtBQUssR0FBRzRJLHFFQUFjLENBQUMsQ0FBQztFQUM5QixNQUFNO0lBQUVyQyxlQUFlO0lBQUVDO0VBQW1CLENBQUMsR0FBR0MscUVBQWMsQ0FBQyxDQUFDO0VBRWhFLE1BQU1vQyxRQUFRLEdBQUdILFVBQVUsQ0FBQzNILEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQzs7RUFFekMsTUFBTTtJQUFBLEdBQUMrSCxXQUFXO0lBQUEsR0FBRUM7RUFBYyxJQUFJbkwsc0RBQVEsQ0FBQzRLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN4RCxNQUFNO0lBQUEsR0FBQ1EsS0FBSztJQUFBLEdBQUVDO0VBQVEsSUFBSXJMLHNEQUFRLENBQUMsQ0FBQyxDQUFDO0VBRXJDNUIsdURBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTWtOLFFBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQU07TUFDakNGLFFBQVEsQ0FBRUcsU0FBUyxJQUFLLENBQUNBLFNBQVMsR0FBRyxDQUFDLElBQUlaLEtBQUssQ0FBQ2EsTUFBTSxDQUFDO0lBQ3pELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUVULE9BQU8sTUFBTUMsYUFBYSxDQUFDSixRQUFRLENBQUM7RUFDdEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVObE4sdURBQVMsQ0FBQyxNQUFNO0lBQ2QrTSxjQUFjLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxDQUFDLENBQUM7RUFDOUIsQ0FBQyxFQUFFLENBQUNBLEtBQUssQ0FBQyxDQUFDO0VBRVgsb0JBQ0VySyxvRUFBQSxDQUFDNEsscURBQWE7SUFBQ2hNLEtBQUssRUFBRTtNQUFFeUQsTUFBTSxFQUFFMEgsVUFBVSxDQUFDMUg7SUFBTyxDQUFFO0lBQUF6RixRQUFBLGdCQUNsRG9ELG9FQUFBLENBQUM2SyxzREFBYztNQUFBak8sUUFBQSxlQUNib0Qsb0VBQUE7UUFDRThLLEdBQUcsRUFBQyxvQkFBb0I7UUFDeEJ6SSxNQUFNLEVBQUMsTUFBTTtRQUNiRCxLQUFLLEVBQUMsTUFBTTtRQUNaMkksSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLEtBQUs7TUFBQTtRQUFBdkssUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ047SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDWSxDQUFDLEVBQ2hCLENBQUNxSixRQUFRLGlCQUNSbEssb0VBQUEsQ0FBQzZCLHFEQUFZO01BQ1hoRSxHQUFHLEVBQUU0RSxTQUFVO01BQ2ZMLEtBQUssRUFBRTJILFVBQVUsQ0FBQzNILEtBQU07TUFDeEJDLE1BQU0sRUFBRTBILFVBQVUsQ0FBQzFILE1BQU87TUFDMUJILElBQUksRUFBRSxHQUFJO01BQ1ZDLFVBQVUsRUFBRWQsS0FBSyxDQUFDYyxVQUFXO01BQzdCMEcsWUFBWSxFQUFFakIsZUFBZ0I7TUFDOUJrQixZQUFZLEVBQUVqQjtJQUFtQjtNQUFBbkgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ2xDLENBQ0YsZUFDRGIsb0VBQUEsQ0FBQ2tMLG1EQUFXO01BQ1YxTyxRQUFRLEVBQUVpTixjQUFlO01BQ3pCeEwsT0FBTyxFQUFDLFNBQVM7TUFDakJELE9BQU8sRUFBQyxTQUFTO01BQUFwQixRQUFBLGdCQUVqQm9ELG9FQUFBLENBQUNvQixvREFBTSxDQUFDK0osSUFBSTtRQUFDM08sUUFBUSxFQUFFbU4sa0JBQW1CO1FBQUEvTSxRQUFBLEVBQUM7TUFBRztRQUFBOEQsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQWEsQ0FBQyxlQUM1RGIsb0VBQUEsQ0FBQ29CLG9EQUFNLENBQUMrSixJQUFJO1FBQUMzTyxRQUFRLEVBQUVtTixrQkFBbUI7UUFBQS9NLFFBQUEsRUFDdkN1TjtNQUFXLEdBRGtDQSxXQUFXO1FBQUF6SixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFFOUMsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNILENBQUM7RUFBQTtJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDRCxDQUFDO0FBRXBCLENBQUM7QUFFY3pELHdIQUFLLENBQUNjLElBQUksQ0FBQzRMLE1BQU0sQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUMxRmpDO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNBO0FBRWhDLE1BQU1jLGFBQWEsR0FBRzVKLHdEQUFNLENBQUNrSSxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLENBQUM7RUFBRTdIO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNjLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLENBQUM7RUFBRWQ7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0EsR0FBRztBQUNILENBQUM7QUFFTSxNQUFNaUosY0FBYyxHQUFHN0osd0RBQU0sQ0FBQ1EsR0FBRztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRU0sTUFBTTBKLFdBQVcsR0FBR2xLLHdEQUFNLENBQUNJLG9EQUFNLENBQUNnSyxFQUFFLENBQUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLENBQUM7RUFBRS9KO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ3dILEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUksQ0FBQztFQUFFOUg7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFeUI7QUFDaUM7QUFDUDtBQUNSO0FBQ0Y7QUFBQTtBQUUxQyxNQUFNeUosT0FBTyxHQUFHQSxDQUFBLEtBQU07RUFDcEIsTUFBTTtJQUFFekQsZUFBZTtJQUFFQztFQUFtQixDQUFDLEdBQUdDLHFFQUFjLENBQUMsQ0FBQztFQUVoRSxvQkFDRTlILG9FQUFBLENBQUNyRCx3REFBZTtJQUFBQyxRQUFBLGVBQ2RvRCxvRUFBQSxDQUFDc0wsc0RBQWM7TUFBQTFPLFFBQUEsZ0JBQ2JvRCxvRUFBQTtRQUFLdUwsU0FBUyxFQUFDLFFBQVE7UUFBQTNPLFFBQUEsZ0JBQ3JCb0Qsb0VBQUE7VUFDRXVMLFNBQVMsRUFBQyxjQUFjO1VBQ3hCbEwsSUFBSSxFQUFDLHFCQUFxQjtVQUMxQndJLFlBQVksRUFBRWpCLGVBQWdCO1VBQzlCa0IsWUFBWSxFQUFFakIsa0JBQW1CO1VBQUFqTCxRQUFBLEVBQ2xDO1FBRUQ7VUFBQThELFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUFHLENBQUMsZUFDSmIsb0VBQUE7VUFBQVUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUssQ0FBQyxlQUNOYixvRUFBQTtVQUNFdUwsU0FBUyxFQUFDLGNBQWM7VUFDeEJsTCxJQUFJLEVBQUMsMkJBQTJCO1VBQ2hDd0ksWUFBWSxFQUFFakIsZUFBZ0I7VUFDOUJrQixZQUFZLEVBQUVqQixrQkFBbUI7VUFBQWpMLFFBQUEsRUFDbEM7UUFFRDtVQUFBOEQsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUcsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNELENBQUMsZUFDTmIsb0VBQUE7UUFBU3VMLFNBQVMsRUFBQyxxQkFBcUI7UUFBQTNPLFFBQUEsR0FBQyw0QkFDYixlQUFBb0Qsb0VBQUE7VUFBQVUsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUssQ0FBQyxxQkFDbEM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBUyxDQUFDLGVBQ1ZiLG9FQUFBLENBQUN3TCxvREFBVztRQUFDRCxTQUFTLEVBQUM7TUFBUTtRQUFBN0ssUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNwQjtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNGLENBQUM7QUFFdEIsQ0FBQztBQUVjekQsd0hBQUssQ0FBQ2MsSUFBSSxDQUFDbU4sT0FBTyxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3hDbEM7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0E7QUFDd0I7QUFDRTtBQUUxRCxNQUFNQyxjQUFjLEdBQUd0Syx3REFBTSxDQUFDSSxvREFBTSxDQUFDOEgsT0FBTyxDQUFDO0FBQ3BELElBQUl6SCxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsQ0FBQztFQUFFSjtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDaUksTUFBTSxDQUFDQyxHQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsQ0FBQztFQUFFbEk7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ21JLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNSixzRUFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFL0g7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDOEosTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUksQ0FBQztFQUFFcEs7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDd0gsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSxDQUFDO0VBQUU5SDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDTSxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GeUI7QUFDMEI7QUFDUztBQUFBO0FBRTdELE1BQU04SixPQUFPLEdBQUdBLENBQUEsS0FBTTtFQUNwQixvQkFDRTFMLG9FQUFBLENBQUNyRCx3REFBZTtJQUFBQyxRQUFBLGVBQ2RvRCxvRUFBQSxDQUFDbUksc0RBQWM7TUFBQXZMLFFBQUEsZUFDYm9ELG9FQUFBLENBQUNvSSxtREFBVztRQUFBeEwsUUFBQSxlQUNWb0Qsb0VBQUEsQ0FBQzJMLDRDQUFJO1VBQUEvTyxRQUFBLEdBQUMseUNBR0osZUFBQW9ELG9FQUFBO1lBQUFVLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUFLLENBQUMsZ0pBR1I7UUFBQTtVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFBTTtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNJO0lBQUM7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0E7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDRixDQUFDO0FBRXRCLENBQUM7QUFFYzZLLHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQ3RCdEI7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDQTtBQUN3QjtBQUV4RCxNQUFNdkQsY0FBYyxHQUFHbkgsd0RBQU0sQ0FBQ0ksb0RBQU0sQ0FBQzhILE9BQU8sQ0FBQztBQUNwRCxJQUFJekgsZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0VBQUVKO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBLEdBQUc7QUFDSCxDQUFDO0FBRU0sTUFBTXdHLFdBQVcsR0FBR3BILHdEQUFNLENBQUNRLEdBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0VBQUVIO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ3dILEtBQUs7QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBRU0sTUFBTXdDLElBQUksR0FBRzNLLHdEQUFNLENBQUM0SyxFQUFFO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFdks7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNrRDtBQUN0QjtBQUN3QjtBQUNFO0FBQ0k7QUFDRjtBQUNFO0FBQ1A7QUFDZDtBQVNwQjtBQUFBO0FBRWxCLE1BQU0xRixVQUFVLEdBQUc7RUFDakJHLFFBQVEsRUFBRSxDQUFDO0VBQ1hDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQUVELE1BQU11UCxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztBQUUxQyxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTTtFQUM1QixNQUFNO0lBQUEsR0FBQ0MsV0FBVztJQUFBLEdBQUVDO0VBQWMsSUFBSS9NLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2xELE1BQU07SUFBQSxHQUFDZ04sU0FBUztJQUFBLEdBQUVDO0VBQVksSUFBSWpOLHNEQUFRLENBQUMsQ0FBQyxDQUFDO0VBQzdDLE1BQU07SUFBQSxHQUFDa04sUUFBUTtJQUFBLEdBQUVDO0VBQVcsSUFBSW5OLHNEQUFRLENBQUMsSUFBSSxDQUFDO0VBQzlDLE1BQU1vTixZQUFZLEdBQUd0UCxrRUFBWSxDQUFDLENBQUM7RUFDbkMsTUFBTXVQLGFBQWEsR0FBR3ZQLGtFQUFZLENBQUMsQ0FBQztFQUNwQyxNQUFNc0UsS0FBSyxHQUFHNEkscUVBQWMsQ0FBQyxDQUFDO0VBQzlCLE1BQU0sQ0FBQztJQUFFc0M7RUFBVyxDQUFDLENBQUMsR0FBR0Msb0VBQWMsQ0FBQyxDQUFDO0VBQ3pDLE1BQU07SUFDSkMsY0FBYztJQUNkQyxnQkFBZ0I7SUFDaEI5RSxlQUFlO0lBQ2ZDO0VBQ0YsQ0FBQyxHQUFHQyxxRUFBYyxDQUFDLENBQUM7RUFDcEIsTUFBTTZFLFlBQVksR0FBR0Msb0VBQWEsQ0FDaEMsQ0FBQztJQUFFakw7RUFBWSxDQUFDLEtBQUssY0FBY0EsV0FBVyxDQUFDa0wsS0FBSyxDQUFDakwsTUFBTSxLQUM3RCxDQUFDO0VBRUR2RSx1REFBUyxDQUFDLE1BQU07SUFDZCxNQUFNeVAsWUFBWSxHQUFHQSxDQUFBLEtBQU07TUFDekIsSUFBSVgsUUFBUSxFQUFFO1FBQ1pILGNBQWMsQ0FBRWUsSUFBSSxJQUFLO1VBQ3ZCLE1BQU1DLGFBQWEsR0FBR0QsSUFBSSxDQUFDckMsTUFBTSxHQUFHbUIsS0FBSyxDQUFDSSxTQUFTLENBQUMsQ0FBQ3ZCLE1BQU0sR0FDdkRxQyxJQUFJLENBQUNyQyxNQUFNLEdBQUcsQ0FBQyxHQUNmcUMsSUFBSSxDQUFDckMsTUFBTTtVQUNmLE9BQU9tQixLQUFLLENBQUNJLFNBQVMsQ0FBQyxDQUFDZ0IsS0FBSyxDQUFDLENBQUMsRUFBRUQsYUFBYSxDQUFDO1FBQ2pELENBQUMsQ0FBQztNQUNKLENBQUMsTUFBTTtRQUNMaEIsY0FBYyxDQUFFZSxJQUFJLElBQUtBLElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzdDO0lBQ0YsQ0FBQztJQUVELE1BQU1DLE9BQU8sR0FBR0MsVUFBVSxDQUFDLE1BQU07TUFDL0IsSUFBSWhCLFFBQVEsRUFBRTtRQUNaLElBQUlKLFdBQVcsQ0FBQ3JCLE1BQU0sS0FBS21CLEtBQUssQ0FBQ0ksU0FBUyxDQUFDLENBQUN2QixNQUFNLEVBQUU7VUFDbEQwQixXQUFXLENBQUMsS0FBSyxDQUFDO1VBQ2xCZSxVQUFVLENBQUMsTUFBTWYsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0M7TUFDRixDQUFDLE1BQU07UUFDTCxJQUFJTCxXQUFXLENBQUNyQixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzVCd0IsWUFBWSxDQUFFYSxJQUFJLElBQUssQ0FBQ0EsSUFBSSxHQUFHLENBQUMsSUFBSWxCLEtBQUssQ0FBQ25CLE1BQU0sQ0FBQztVQUNqRDBCLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbkI7TUFDRjtNQUNBVSxZQUFZLENBQUMsQ0FBQztJQUNoQixDQUFDLEVBQUVYLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBRXhCLE9BQU8sTUFBTWlCLFlBQVksQ0FBQ0YsT0FBTyxDQUFDO0VBQ3BDLENBQUMsRUFBRSxDQUFDbkIsV0FBVyxFQUFFSSxRQUFRLEVBQUVGLFNBQVMsQ0FBQyxDQUFDO0VBRXRDLE1BQU1sRSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNO0lBQzdCSCxlQUFlLENBQUMsQ0FBQztJQUNqQjZFLGNBQWMsQ0FBQ3BMLEtBQUssQ0FBQ21JLElBQUksQ0FBQztFQUM1QixDQUFDO0VBRUQsTUFBTXRCLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0IsSUFBSXFFLFVBQVUsRUFBRTtJQUNoQjFFLGtCQUFrQixDQUFDLENBQUM7SUFDcEI2RSxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxNQUFNVyxzQkFBc0IsR0FBR0EsQ0FBQSxLQUFNO0lBQ25DekYsZUFBZSxDQUFDLENBQUM7SUFDakJ5RSxZQUFZLENBQUMvTyxLQUFLLENBQUM7TUFBRWYsT0FBTyxFQUFFO0lBQUUsQ0FBQyxDQUFDO0lBQ2xDK1AsYUFBYSxDQUFDaFAsS0FBSyxDQUFDO01BQUVnUSxDQUFDLEVBQUU7SUFBRSxDQUFDLENBQUM7RUFDL0IsQ0FBQztFQUVELE1BQU1DLG9CQUFvQixHQUFHQSxDQUFBLEtBQU07SUFDakMxRixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BCd0UsWUFBWSxDQUFDL08sS0FBSyxDQUFDO01BQUVmLE9BQU8sRUFBRTtJQUFFLENBQUMsQ0FBQztJQUNsQytQLGFBQWEsQ0FBQ2hQLEtBQUssQ0FBQztNQUFFZ1EsQ0FBQyxFQUFFWCxZQUFZLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUFHLENBQUMsQ0FBQztFQUN6RCxDQUFDO0VBRUR0UCx1REFBUyxDQUFDLE1BQU07SUFDZGlQLGFBQWEsQ0FBQ2hQLEtBQUssQ0FBQztNQUFFZ1EsQ0FBQyxFQUFFWCxZQUFZLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUFHLENBQUMsQ0FBQztFQUN6RCxDQUFDLEVBQUUsQ0FBQ0wsYUFBYSxFQUFFSyxZQUFZLENBQUMsQ0FBQztFQUVqQyxvQkFDRTNNLHFFQUFBLENBQUNtSSxzREFBYztJQUFBdkwsUUFBQSxnQkFDYm9ELHFFQUFBLENBQUNyRCx3REFBZTtNQUFBQyxRQUFBLGVBQ2RvRCxxRUFBQSxDQUFDb0Isb0RBQU0sQ0FBQ0ksR0FBRztRQUFBNUUsUUFBQSxlQUNUb0QscUVBQUEsQ0FBQ0ksZ0RBQUk7VUFBQ0MsSUFBSSxFQUFDLHNCQUFzQjtVQUFDQyxRQUFRO1VBQUExRCxRQUFBLGVBQ3hDb0QscUVBQUEsQ0FBQ3dOLHFEQUFhO1lBQ1pDLFlBQVksRUFBRUosc0JBQXVCO1lBQ3JDSyxVQUFVLEVBQUVILG9CQUFxQjtZQUFBM1EsUUFBQSxnQkFFakNvRCxxRUFBQSxDQUFDMk4sbURBQVc7Y0FBQS9RLFFBQUEsZ0JBQ1ZvRCxxRUFBQTtnQkFBQXBELFFBQUEsRUFBS21QO2NBQVc7Z0JBQUFyTCxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUFLLENBQUMsZUFDdEJiLHFFQUFBLENBQUNvQixvREFBTSxDQUFDSSxHQUFHO2dCQUNUdkQsT0FBTyxFQUFFO2tCQUFFMUIsT0FBTyxFQUFFO2dCQUFFLENBQUU7Z0JBQ3hCeUIsT0FBTyxFQUFFcU8sWUFBYTtnQkFDdEJuUSxVQUFVLEVBQUVBLFVBQVc7Z0JBQ3ZCcVAsU0FBUyxFQUFDLGNBQWM7Z0JBQUEzTyxRQUFBLGdCQUV4Qm9ELHFFQUFBO2tCQUFBcEQsUUFBQSxFQUFJO2dCQUFvQjtrQkFBQThELFFBQUEsRUFBQUMsWUFBQTtrQkFBQUMsVUFBQTtrQkFBQUMsWUFBQTtnQkFBQSxZQUFJLENBQUMsZUFDN0JiLHFFQUFBO2tCQUFBcEQsUUFBQSxFQUFJO2dCQUFHO2tCQUFBOEQsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLFlBQUksQ0FBQztjQUFBO2dCQUFBSCxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUNGLENBQUMsZUFDYmIscUVBQUEsQ0FBQzROLG9EQUFZO2dCQUFBaFIsUUFBQSxHQUFDLE1BQ1IsZUFBQW9ELHFFQUFBO2tCQUFBVSxRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsWUFBSyxDQUFDLFlBQ1YsZUFBQWIscUVBQUE7a0JBQU11TCxTQUFTLEVBQUMsT0FBTztrQkFBQTNPLFFBQUEsZUFDckJvRCxxRUFBQSxDQUFDNk4sb0RBQUs7b0JBQUM3UCxPQUFPLEVBQUVzTyxhQUFjO29CQUFDcFEsVUFBVSxFQUFFQTtrQkFBVztvQkFBQXdFLFFBQUEsRUFBQUMsWUFBQTtvQkFBQUMsVUFBQTtvQkFBQUMsWUFBQTtrQkFBQSxZQUFFO2dCQUFDO2tCQUFBSCxRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsWUFDckQsQ0FBQztjQUFBO2dCQUFBSCxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUNLLENBQUM7WUFBQTtjQUFBSCxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFDSixDQUFDLGVBQ2RiLHFFQUFBLENBQUM4TixvREFBWTtjQUFBbFIsUUFBQSxlQUNYb0QscUVBQUE7Z0JBQU8rSyxJQUFJO2dCQUFDQyxRQUFRO2dCQUFDQyxLQUFLO2dCQUFDSCxHQUFHLEVBQUM7Y0FBMkI7Z0JBQUFwSyxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUFFO1lBQUM7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQ2pELENBQUM7VUFBQTtZQUFBSCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFDRjtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNaO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQ0c7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDRSxDQUFDLGVBQ2xCYixxRUFBQSxDQUFDckQsd0RBQWU7TUFBQUMsUUFBQSxlQUNkb0QscUVBQUEsQ0FBQytOLHFEQUFhO1FBQUFuUixRQUFBLGVBQ1pvRCxxRUFBQSxDQUFDSSxnREFBSTtVQUFDQyxJQUFJLEVBQUMsV0FBVztVQUFDQyxRQUFRO1VBQUExRCxRQUFBLGVBQzdCb0QscUVBQUEsQ0FBQ2Usa0RBQVU7WUFDVGlOLE1BQU0sRUFBRSxLQUFNO1lBQ2R4TixLQUFLLEVBQUMsV0FBVztZQUNqQnFJLFlBQVksRUFBRWQsZ0JBQWlCO1lBQy9CZSxZQUFZLEVBQUVaO1VBQWlCO1lBQUF4SCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFDaEM7UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsWUFDRTtNQUFDO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNNO0lBQUM7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0QsQ0FBQztFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNKLENBQUM7QUFFckIsQ0FBQztBQUVjaUwsOEVBQWUsRTs7Ozs7Ozs7Ozs7O0FDeko5QjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNBO0FBQ3dCO0FBQ0U7QUFDaEI7QUFFMUMsTUFBTTNELGNBQWMsR0FBR25ILHdEQUFNLENBQUNJLG9EQUFNLENBQUM4SCxPQUFPLENBQUM7QUFDcEQsSUFBSXpILGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFSjtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDTSxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUVNLE1BQU00TCxhQUFhLEdBQUd4TSx3REFBTSxDQUFDSSxvREFBTSxDQUFDTSxDQUFDLENBQUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFTDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDTSxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBRU0sTUFBTStMLFdBQVcsR0FBRzNNLHdEQUFNLENBQUNJLG9EQUFNLENBQUNJLEdBQUcsQ0FBQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNNEgsc0VBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVFBLHNFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0VBQUUvSDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDTSxXQUFXLENBQUN3SCxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUksQ0FBQztFQUFFOUg7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUVNLE1BQU1nTSxZQUFZLEdBQUc1TSx3REFBTSxDQUFDSSxvREFBTSxDQUFDZ0ssRUFBRSxDQUFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxDQUFDO0VBQUUvSjtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDbUksSUFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJLENBQUM7RUFBRW5JO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBRU0sTUFBTWtNLFlBQVksR0FBRzlNLHdEQUFNLENBQUNRLEdBQUc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFSDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDTSxXQUFXLENBQUN3SCxLQUFLO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLENBQUM7RUFBRTlIO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBLEdBQUc7QUFDSCxDQUFDO0FBRU0sTUFBTW1NLGFBQWEsR0FBRy9NLHdEQUFNLENBQUNJLG9EQUFNLENBQUNJLEdBQUcsQ0FBQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFSDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDTSxXQUFXLENBQUNDLE1BQU07QUFDM0M7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUVNLE1BQU1iLFVBQVUsR0FBR0Msd0RBQU0sQ0FBQ2lOLG1EQUFpQixDQUFDO0FBQ25EO0FBQ0Esc0JBQXNCLENBQUM7RUFBRTVNO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNpSSxNQUFNLENBQUNDLEdBQUc7QUFDckQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLENBQUM7RUFBRWxJO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNjLFVBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxDQUFDO0VBQUVkO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNjLFVBQVU7QUFDNUM7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFZDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDTSxXQUFXLENBQUM4SixNQUFNO0FBQzNDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSxDQUFDO0VBQUVwSztBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDTSxXQUFXLENBQUN3SCxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUksQ0FBQztFQUFFOUg7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMeUI7QUFDNEI7QUFDVDtBQUFBO0FBRTdDLE1BQU1wRixRQUFRLEdBQUc7RUFDZkUsTUFBTSxFQUFFaVEsWUFBWSxLQUFLO0lBQUVwTyxDQUFDLEVBQUVvTyxZQUFZLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUFJLENBQUMsQ0FBQztFQUMxRGxRLElBQUksRUFBRTtJQUFFOEIsQ0FBQyxFQUFFO0VBQUU7QUFDZixDQUFDO0FBRUQsTUFBTTJQLE1BQU0sR0FBR0EsQ0FBQSxLQUFNO0VBQ25CLE1BQU12QixZQUFZLEdBQUdDLG9FQUFhLENBQ2hDLENBQUM7SUFBRWpMO0VBQVksQ0FBQyxLQUFLLGNBQWNBLFdBQVcsQ0FBQ2tMLEtBQUssQ0FBQ2pMLE1BQU0sS0FDN0QsQ0FBQztFQUVELG9CQUNFNUIsb0VBQUEsQ0FBQ3hCLDBEQUFNO0lBRUxKLFNBQVMsRUFBQyxJQUFJO0lBQ2Q4QyxRQUFRLEVBQUMsUUFBUTtJQUNqQjFFLFFBQVEsRUFBRUEsUUFBUztJQUNuQnlCLE9BQU8sRUFBRSxLQUFNO0lBQ2ZrUSxNQUFNLEVBQUV4QixZQUFhO0lBQ3JCelEsVUFBVSxFQUFFO01BQ1ZHLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDM0I7RUFBRSxHQVRHcVEsWUFBWTtJQUFBak0sUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBVWxCLENBQUM7QUFFTixDQUFDO0FBRWN6RCx3SEFBSyxDQUFDYyxJQUFJLENBQUNnUSxNQUFNLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qk07QUFDRTtBQUFBO0FBRXpDLE1BQU1MLEtBQUssR0FBRzVNLElBQUE7RUFBQSxJQUFDO01BQUVtTixTQUFTLEdBQUc5RSxzREFBTSxDQUFDK0U7SUFBZ0IsQ0FBQyxHQUFBcE4sSUFBQTtJQUFQeEMsS0FBSyxHQUFBTSx3QkFBQSxDQUFBa0MsSUFBQTtFQUFBLG9CQUNqRGpCLG9FQUFBLENBQUNvQixvREFBTSxDQUFDa04sR0FBRyxFQUFBcE8sYUFBQSxDQUFBQSxhQUFBO0lBQ1RxTyxLQUFLLEVBQUMsNEJBQTRCO0lBQ2xDQyxPQUFPLEVBQUM7RUFBWSxHQUNoQi9QLEtBQUs7SUFBQTdCLFFBQUEsZUFFVG9ELG9FQUFBO01BQ0V5TyxDQUFDLEVBQUMsNkdBQTZHO01BQy9HQyxJQUFJLEVBQUVOLFNBQVU7TUFDaEJPLFFBQVEsRUFBQztJQUFTO01BQUFqTyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDYjtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNFLENBQUM7QUFBQSxDQUNkO0FBRWNnTixvRUFBSyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJwQixNQUFNZSxRQUFRLEdBQUduUSxLQUFLLGlCQUNwQnVCLG9FQUFBLFFBQUFFLGFBQUEsQ0FBQUEsYUFBQTtFQUFLcU8sS0FBSyxFQUFDLDRCQUE0QjtFQUFDQyxPQUFPLEVBQUM7QUFBVyxHQUFLL1AsS0FBSztFQUFBN0IsUUFBQSxlQUNuRW9ELG9FQUFBO0lBQ0V5TyxDQUFDLEVBQUMsa2dCQUFrZ0I7SUFDcGdCRSxRQUFRLEVBQUMsU0FBUztJQUNsQkQsSUFBSSxFQUFDO0VBQVM7SUFBQWhPLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNUO0FBQUM7RUFBQUgsUUFBQSxFQUFBQyxZQUFBO0VBQUFDLFVBQUE7RUFBQUMsWUFBQTtBQUFBLFlBQ0wsQ0FDTjtBQUVjK04sdUVBQVEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QixNQUFNQyxTQUFTLEdBQUdwUSxLQUFLLGlCQUNyQnVCLG9FQUFBLFFBQUFFLGFBQUEsQ0FBQUEsYUFBQTtFQUFLcU8sS0FBSyxFQUFDLDRCQUE0QjtFQUFDQyxPQUFPLEVBQUM7QUFBVyxHQUFLL1AsS0FBSztFQUFBN0IsUUFBQSxlQUNuRW9ELG9FQUFBO0lBQUcwTyxJQUFJLEVBQUMsU0FBUztJQUFDQyxRQUFRLEVBQUMsU0FBUztJQUFBL1IsUUFBQSxnQkFDbENvRCxvRUFBQTtNQUFNeU8sQ0FBQyxFQUFDO0lBQTYwQztNQUFBL04sUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQU8sQ0FBQyxlQUM3MUNiLG9FQUFBO01BQU15TyxDQUFDLEVBQUM7SUFBZ0c7TUFBQS9OLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFPLENBQUMsZUFDaEhiLG9FQUFBO01BQU15TyxDQUFDLEVBQUM7SUFBZ0M7TUFBQS9OLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFPLENBQUM7RUFBQTtJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDL0M7QUFBQztFQUFBSCxRQUFBLEVBQUFDLFlBQUE7RUFBQUMsVUFBQTtFQUFBQyxZQUFBO0FBQUEsWUFDRCxDQUNOO0FBRWNnTyx3RUFBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnhCLE1BQU1DLFFBQVEsR0FBR3JRLEtBQUssaUJBQ2xCdUIsb0VBQUEsUUFBQUUsYUFBQSxDQUFBQSxhQUFBO0VBQUtxTyxLQUFLLEVBQUMsNEJBQTRCO0VBQUNDLE9BQU8sRUFBQztBQUFXLEdBQUsvUCxLQUFLO0VBQUE3QixRQUFBLGVBQ25Fb0Qsb0VBQUE7SUFDRXlPLENBQUMsRUFBQyxxZEFBcWQ7SUFDdmRDLElBQUksRUFBQztFQUFTO0lBQUFoTyxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDZjtBQUFDO0VBQUFILFFBQUEsRUFBQUMsWUFBQTtFQUFBQyxVQUFBO0VBQUFDLFlBQUE7QUFBQSxZQUNDLENBQ047QUFFY2lPLHVFQUFRLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEM7QUFDYTtBQUFBO0FBRXZDLE1BQU1DLGFBQWEsR0FBRy9OLHdEQUFNLENBQUNRLEdBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTXdOLFVBQVUsR0FBR2hPLHdEQUFNLENBQUNpTyxHQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFRCxNQUFNeE8sSUFBSSxHQUFHQSxDQUFBLEtBQU07RUFDakIsb0JBQ0VULG9FQUFBLENBQUMrTyxhQUFhO0lBQUFuUyxRQUFBLGVBQ1pvRCxvRUFBQSxDQUFDZ1AsVUFBVTtNQUNUbEUsR0FBRyxFQUFDLFdBQVcsQ0FBQztNQUFBO01BQ2hCb0UsR0FBRyxFQUFDO0lBQWU7TUFBQXhPLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNwQjtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNXLENBQUM7QUFFcEIsQ0FBQztBQUVjSixtRUFBSSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNuQixNQUFNME8sT0FBTyxHQUFHMVEsS0FBSyxpQkFDakJ1QixvRUFBQSxRQUFBRSxhQUFBLENBQUFBLGFBQUE7RUFBS3FPLEtBQUssRUFBQyw0QkFBNEI7RUFBQ0MsT0FBTyxFQUFDO0FBQVcsR0FBSy9QLEtBQUs7RUFBQTdCLFFBQUEsZUFDbkVvRCxvRUFBQTtJQUNFeU8sQ0FBQyxFQUFDLGlmQUFpZjtJQUNuZkMsSUFBSSxFQUFDLFNBQVMsQ0FBQztFQUFBO0lBQUFoTyxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDaEI7QUFBQztFQUFBSCxRQUFBLEVBQUFDLFlBQUE7RUFBQUMsVUFBQTtFQUFBQyxZQUFBO0FBQUEsWUFDQyxDQUNOO0FBRWNzTyxzRUFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHhCLE1BQU1DLE9BQU8sR0FBRzNRLEtBQUssaUJBQ2pCdUIsb0VBQUEsUUFBQUUsYUFBQSxDQUFBQSxhQUFBO0VBQUtxTyxLQUFLLEVBQUMsNEJBQTRCO0VBQUNDLE9BQU8sRUFBQztBQUFXLEdBQUsvUCxLQUFLO0VBQUE3QixRQUFBLGVBQ25Fb0Qsb0VBQUE7SUFDRXlPLENBQUMsRUFBQywyWEFBMlg7SUFDN1hDLElBQUksRUFBQyxTQUFTLENBQUM7RUFBQTtJQUFBaE8sUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ2hCO0FBQUM7RUFBQUgsUUFBQSxFQUFBQyxZQUFBO0VBQUFDLFVBQUE7RUFBQUMsWUFBQTtBQUFBLFlBQ0MsQ0FDTjtBQUVjdU8sc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDVHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ007QUFDRTtBQUNWO0FBQ007QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCO0FBQzBCO0FBQ0k7QUFDYjtBQUNUO0FBQUE7QUFFbEMsTUFBTXJPLFVBQVUsR0FBR0EsQ0FBQUUsSUFBQSxFQUEwQ3BELEdBQUcsS0FBSztFQUFBLElBQWpEO01BQUVtUSxNQUFNLEdBQUcsSUFBSTtNQUFFeE4sS0FBSyxHQUFHO0lBQWEsQ0FBQyxHQUFBUyxJQUFBO0lBQVB4QyxLQUFLLEdBQUFNLHdCQUFBLENBQUFrQyxJQUFBO0VBQ3ZELE1BQU0sR0FBR29PLFFBQVEsQ0FBQyxHQUFHN0Msb0VBQWMsQ0FBQyxDQUFDO0VBQ3JDLE1BQU07SUFBRTVFLGVBQWU7SUFBRUM7RUFBbUIsQ0FBQyxHQUFHQyxxRUFBYyxDQUFDLENBQUM7RUFFaEUsTUFBTXdILGNBQWMsR0FBR2xTLDRDQUFLLENBQUM0SyxXQUFXLENBQUMsTUFBTTtJQUM3Q3FILFFBQVEsQ0FBQztNQUFFRSxJQUFJLEVBQUU7SUFBYyxDQUFDLENBQUM7RUFDbkMsQ0FBQyxFQUFFLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0VBRWQsb0JBQ0VyUCxvRUFBQSxDQUFDd1AscURBQVk7SUFBQ3hCLE1BQU0sRUFBRUEsTUFBTztJQUFBcFIsUUFBQSxlQUMzQm9ELG9FQUFBLENBQUN5UCw4Q0FBTSxFQUFBdlAsYUFBQSxDQUFBQSxhQUFBO01BQ0wySSxZQUFZLEVBQUVqQixlQUFnQjtNQUM5QmtCLFlBQVksRUFBRWpCLGtCQUFtQjtNQUNqQ2UsT0FBTyxFQUFFMEcsY0FBZTtNQUN4QnpSLEdBQUcsRUFBRUE7SUFBSSxHQUNMWSxLQUFLO01BQUE3QixRQUFBLGVBRVRvRCxvRUFBQTtRQUFBcEQsUUFBQSxFQUFPNEQ7TUFBSztRQUFBRSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBTztJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNkO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0csQ0FBQztBQUVuQixDQUFDO0FBRWN6RCx3SEFBSyxDQUFDYyxJQUFJLGNBQUNkLDRDQUFLLENBQUM4RixVQUFVLENBQUNuQyxVQUFVLENBQUMsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUM3QnZEO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUN1QjtBQUV2RCxNQUFNME8sTUFBTSxHQUFHek8sd0RBQU0sQ0FBQ3FJLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixDQUFDO0VBQUVoSTtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDbUksSUFBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUosc0VBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLENBQUM7RUFBRS9IO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNtSSxJQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztFQUFFbkk7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDd0gsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLENBQUM7RUFBRTlIO0FBQU0sQ0FBQyxLQUFLQSxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RXlCO0FBQzhCO0FBQ21CO0FBQ2hDO0FBQ0E7QUFBQTtBQUUzQyxNQUFNOE4sTUFBTSxHQUFHLENBQ2I7RUFBRUMsU0FBUyxFQUFFZCxnREFBUztFQUFFZSxHQUFHLEVBQUU7QUFBMkIsQ0FBQyxFQUN6RDtFQUFFRCxTQUFTLEVBQUVmLCtDQUFRO0VBQUVnQixHQUFHLEVBQUU7QUFBdUMsQ0FBQyxFQUNwRTtFQUFFRCxTQUFTLEVBQUVFLDhDQUFPO0VBQUVELEdBQUcsRUFBRTtBQUFzQixDQUFDLEVBQ2xEO0VBQUVELFNBQVMsRUFBRVIsOENBQU87RUFBRVMsR0FBRyxFQUFFO0FBQStCLENBQUMsRUFDM0Q7RUFBRUQsU0FBUyxFQUFFRywrQ0FBUTtFQUFFRixHQUFHLEVBQUU7QUFBa0QsQ0FBQyxDQUNoRjtBQUVELE1BQU1wRSxXQUFXLEdBQUcvTSxLQUFLLElBQUk7RUFDM0IsTUFBTTtJQUFFbUosZUFBZTtJQUFFQztFQUFtQixDQUFDLEdBQUdDLHFFQUFjLENBQUMsQ0FBQztFQUVoRSxvQkFDRTlILG9FQUFBLENBQUNHLGlEQUFTLEVBQUFELGFBQUEsQ0FBQUEsYUFBQSxLQUFLekIsS0FBSztJQUFBN0IsUUFBQSxFQUNqQjhTLE1BQU0sQ0FBQ2xTLEdBQUcsQ0FBQyxDQUFDO01BQUVtUyxTQUFTLEVBQUV4TyxTQUFTO01BQUV5TztJQUFJLENBQUMsa0JBQ3hDNVAsb0VBQUEsQ0FBQ3dQLHFEQUFZO01BQUE1UyxRQUFBLGVBQ1hvRCxvRUFBQSxDQUFDSSw0Q0FBSTtRQUNIMlAsTUFBTSxFQUFDLFFBQVE7UUFDZjFQLElBQUksRUFBRXVQLEdBQUk7UUFDVi9HLFlBQVksRUFBRWpCLGVBQWdCO1FBQzlCa0IsWUFBWSxFQUFFakIsa0JBQW1CO1FBQUFqTCxRQUFBLGVBRWpDb0Qsb0VBQUEsQ0FBQ21CLFNBQVM7VUFBQVQsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQUU7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDVDtJQUFDLEdBUlUrTyxHQUFHO01BQUFsUCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFTUixDQUNmO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ08sQ0FBQztBQUVoQixDQUFDO0FBRWN6RCx3SEFBSyxDQUFDYyxJQUFJLENBQUNzTixXQUFXLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDbkN0QztBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUN1QjtBQUV2RCxNQUFNckwsU0FBUyxHQUFHYSx3REFBTSxDQUFDUSxHQUFHO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLENBQUM7RUFBRUg7QUFBTSxDQUFDLEtBQUtBLEtBQUssQ0FBQ00sV0FBVyxDQUFDd0gsS0FBSztBQUMxQztBQUNBLEdBQUc7QUFDSCxDQUFDO0FBRU0sTUFBTS9JLElBQUksR0FBR1ksd0RBQU0sQ0FBQ1UsQ0FBQztBQUM1QixJQUFJMEgsc0VBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxDQUFDO0VBQUUvSDtBQUFNLENBQUMsS0FBS0EsS0FBSyxDQUFDbUksSUFBSTtBQUNyQztBQUNBLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDL0JEO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzhCO0FBRXhELE1BQU1nRyxZQUFZLEdBQUdBLENBQUM7RUFBRTVTLFFBQVEsRUFBRUMsWUFBWTtFQUFFbVIsTUFBTSxHQUFHO0FBQUssQ0FBQyxLQUFLO0VBQ2xFLE1BQU1nQyxRQUFRLEdBQUc1Uyw0Q0FBSyxDQUFDc0YsTUFBTSxDQUFDLElBQUksQ0FBQztFQUNuQyxNQUFNO0lBQUV1TjtFQUFtQixDQUFDLEdBQUduSSxxRUFBYyxDQUFDLENBQUM7RUFFL0MsTUFBTWxMLFFBQVEsR0FBR1EsNENBQUssQ0FBQ0csUUFBUSxDQUFDQyxHQUFHLENBQUNYLFlBQVksRUFBRVksS0FBSyxJQUFJO0lBQ3pELElBQUksZUFBQ0wsNENBQUssQ0FBQ00sY0FBYyxDQUFDRCxLQUFLLENBQUMsRUFBRTtNQUNoQyxPQUFPLElBQUk7SUFDYjtJQUVBLE1BQU07TUFBRW9MLFlBQVk7TUFBRUM7SUFBYSxDQUFDLEdBQUdyTCxLQUFLLENBQUNnQixLQUFLO0lBRWxELE1BQU1zSixnQkFBZ0IsR0FBR3JELEtBQUssSUFBSTtNQUNoQyxJQUFJLENBQUNzTCxRQUFRLENBQUNsUyxPQUFPLEVBQUU7TUFFdkIsTUFBTW9TLFFBQVEsR0FBR0YsUUFBUSxDQUFDbFMsT0FBTyxDQUFDcVMscUJBQXFCLENBQUMsQ0FBQztNQUV6RCxNQUFNN0MsQ0FBQyxHQUFHNEMsUUFBUSxDQUFDOU4sS0FBSyxHQUFHLENBQUMsR0FBRzhOLFFBQVEsQ0FBQ0UsSUFBSTtNQUM1QyxNQUFNN1IsQ0FBQyxHQUFHMlIsUUFBUSxDQUFDN04sTUFBTSxHQUFHLENBQUMsR0FBRzZOLFFBQVEsQ0FBQzdSLEdBQUc7TUFDNUM0UixrQkFBa0IsQ0FBQztRQUFFM0MsQ0FBQztRQUFFL087TUFBRSxDQUFDLENBQUM7TUFFNUIsSUFBSXNLLFlBQVksRUFBRTtRQUNoQkEsWUFBWSxDQUFDbkUsS0FBSyxDQUFDO01BQ3JCO0lBQ0YsQ0FBQztJQUVELE1BQU13RCxnQkFBZ0IsR0FBR3hELEtBQUssSUFBSTtNQUNoQyxJQUFJLENBQUNzTCxRQUFRLENBQUNsUyxPQUFPLEVBQUU7TUFFdkJtUyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7TUFFeEIsSUFBSW5ILFlBQVksRUFBRTtRQUNoQkEsWUFBWSxDQUFDcEUsS0FBSyxDQUFDO01BQ3JCO0lBQ0YsQ0FBQztJQUVELE1BQU0vRyxTQUFTLEdBQUdDLElBQUksSUFBSTtNQUN4QjtNQUNBb1MsUUFBUSxDQUFDbFMsT0FBTyxHQUFHRixJQUFJOztNQUV2QjtNQUNBLE1BQU07UUFBRUM7TUFBSSxDQUFDLEdBQUdKLEtBQUs7TUFFckIsSUFBSSxPQUFPSSxHQUFHLEtBQUssVUFBVSxFQUFFO1FBQzdCQSxHQUFHLENBQUNELElBQUksQ0FBQztNQUNYLENBQUMsTUFBTSxJQUFJQyxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ3ZCQSxHQUFHLENBQUNDLE9BQU8sR0FBR0YsSUFBSTtNQUNwQjtJQUNGLENBQUM7SUFFRCxvQkFBT1IsNENBQUssQ0FBQ1csWUFBWSxDQUFDTixLQUFLLEVBQUU7TUFDL0JvTCxZQUFZLEVBQUVkLGdCQUFnQjtNQUM5QmUsWUFBWSxFQUFFWixnQkFBZ0I7TUFDOUJySyxHQUFHLEVBQUVGO0lBQ1AsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUYsT0FBT3FRLE1BQU0sR0FBR3BSLFFBQVEsR0FBR0MsWUFBWTtBQUN6QyxDQUFDO0FBRWNPLHdIQUFLLENBQUNjLElBQUksQ0FBQ3NSLFlBQVksQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUM5RHZDO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMEI7QUFDWTtBQUFBO0FBRXRDLE1BQU1hLGFBQWEsR0FBRztFQUNwQkMsV0FBVyxFQUFFO0lBQ1hDLFFBQVEsRUFBRSxLQUFLO0lBQ2ZDLEtBQUssRUFBRWxILHNEQUFNLENBQUNDO0VBQ2hCLENBQUM7RUFDRDJHLFFBQVEsRUFBRTtBQUNaLENBQUM7QUFFRCxNQUFNTyxXQUFXLEdBQUdBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxLQUFLO0VBQ3JDLFFBQVFBLE1BQU0sQ0FBQ3BCLElBQUk7SUFDakIsS0FBSyxxQkFBcUI7TUFBRTtRQUMxQixPQUFBclAsYUFBQSxDQUFBQSxhQUFBLEtBQ0t3USxLQUFLO1VBQ1JKLFdBQVcsRUFBQXBRLGFBQUEsQ0FBQUEsYUFBQSxLQUNOd1EsS0FBSyxDQUFDSixXQUFXLEdBQ2pCSyxNQUFNLENBQUNDLE9BQU87UUFDbEI7TUFFTDtJQUNBLEtBQUssbUJBQW1CO01BQUU7UUFDeEIsT0FBQTFRLGFBQUEsQ0FBQUEsYUFBQSxLQUNLd1EsS0FBSztVQUNSSixXQUFXLEVBQUFwUSxhQUFBLENBQUFBLGFBQUEsS0FDTndRLEtBQUssQ0FBQ0osV0FBVztZQUNwQkMsUUFBUSxFQUFFO1VBQUk7UUFDZjtNQUVMO0lBQ0EsS0FBSyxzQkFBc0I7TUFBRTtRQUMzQixPQUFBclEsYUFBQSxDQUFBQSxhQUFBLEtBQ0t3USxLQUFLO1VBQ1JKLFdBQVcsRUFBQXBRLGFBQUEsQ0FBQUEsYUFBQSxLQUNOd1EsS0FBSyxDQUFDSixXQUFXO1lBQ3BCQyxRQUFRLEVBQUU7VUFBSztRQUNoQjtNQUVMO0lBQ0EsS0FBSyxrQkFBa0I7TUFBRTtRQUN2QixPQUFBclEsYUFBQSxDQUFBQSxhQUFBLEtBQ0t3USxLQUFLO1VBQ1JKLFdBQVcsRUFBQXBRLGFBQUEsQ0FBQUEsYUFBQSxLQUNOd1EsS0FBSyxDQUFDSixXQUFXO1lBQ3BCRSxLQUFLLEVBQUVHLE1BQU0sQ0FBQ0M7VUFBTztRQUN0QjtNQUVMO0lBQ0EsS0FBSyxvQkFBb0I7TUFBRTtRQUN6QixPQUFBMVEsYUFBQSxDQUFBQSxhQUFBLEtBQ0t3USxLQUFLO1VBQ1JKLFdBQVcsRUFBQXBRLGFBQUEsQ0FBQUEsYUFBQSxLQUNOd1EsS0FBSyxDQUFDSixXQUFXO1lBQ3BCRSxLQUFLLEVBQUVILGFBQWEsQ0FBQ0MsV0FBVyxDQUFDRTtVQUFLO1FBQ3ZDO01BRUw7SUFDQSxLQUFLLHNCQUFzQjtNQUFFO1FBQzNCLE9BQUF0USxhQUFBLENBQUFBLGFBQUEsS0FDS3dRLEtBQUs7VUFDUlIsUUFBUSxFQUFFUyxNQUFNLENBQUNDO1FBQU87TUFFNUI7SUFDQTtNQUFTO1FBQ1AsT0FBT0YsS0FBSztNQUNkO0VBQ0Y7QUFDRixDQUFDO0FBRU0sTUFBTUcsYUFBYSxnQkFBR3pULDRDQUFLLENBQUMwVCxhQUFhLENBQUMsQ0FBQztBQUUzQyxTQUFTQyxxQkFBcUJBLENBQUM7RUFBRW5VO0FBQVMsQ0FBQyxFQUFFO0VBQ2xELE1BQU0sQ0FBQzhULEtBQUssRUFBRXJCLFFBQVEsQ0FBQyxHQUFHalMsNENBQUssQ0FBQzRULFVBQVUsQ0FBQ1AsV0FBVyxFQUFFSixhQUFhLENBQUM7RUFDdEUsTUFBTVksS0FBSyxHQUFHN1QsNENBQUssQ0FBQzBGLE9BQU8sQ0FBQyxPQUFPO0lBQUU0TixLQUFLO0lBQUVyQjtFQUFTLENBQUMsQ0FBQyxFQUFFLENBQUNxQixLQUFLLENBQUMsQ0FBQztFQUNqRSxvQkFDRTFRLG9FQUFBLENBQUM2USxhQUFhLENBQUNLLFFBQVE7SUFBQ0MsS0FBSyxFQUFFRixLQUFNO0lBQUFyVSxRQUFBLEVBQUVBO0VBQVE7SUFBQThELFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUF5QixDQUFDO0FBRTdFO0FBRU8sTUFBTXVRLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07RUFDcEMsTUFBTTtJQUFFVixLQUFLO0lBQUVyQjtFQUFTLENBQUMsR0FBR2pTLDRDQUFLLENBQUNpVSxVQUFVLENBQUNSLGFBQWEsQ0FBQztFQUMzRCxPQUFPLENBQUNILEtBQUssRUFBRXJCLFFBQVEsQ0FBQztBQUMxQixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGRDtBQUMwQjtBQUFBO0FBRW5CLE1BQU1nQixhQUFhLEdBQUc7RUFDM0I5RCxVQUFVLEVBQUU7QUFDZCxDQUFDO0FBRUQsTUFBTWtFLFdBQVcsR0FBR0EsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEtBQUs7RUFDckMsUUFBUUEsTUFBTSxDQUFDcEIsSUFBSTtJQUNqQixLQUFLLGFBQWE7TUFBRTtRQUNsQixPQUFBclAsYUFBQSxDQUFBQSxhQUFBLEtBQ0t3USxLQUFLO1VBQ1JuRSxVQUFVLEVBQUUsQ0FBQ21FLEtBQUssQ0FBQ25FO1FBQVU7TUFFakM7SUFDQTtNQUFTO1FBQ1AsT0FBT21FLEtBQUs7TUFDZDtFQUNGO0FBQ0YsQ0FBQztBQUVNLE1BQU1ZLFdBQVcsZ0JBQUdsVSw0Q0FBSyxDQUFDMFQsYUFBYSxDQUFDLENBQUM7QUFFekMsU0FBU1MsbUJBQW1CQSxDQUFDO0VBQUUzVTtBQUFTLENBQUMsRUFBRTtFQUNoRCxNQUFNLENBQUM4VCxLQUFLLEVBQUVyQixRQUFRLENBQUMsR0FBR2pTLDRDQUFLLENBQUM0VCxVQUFVLENBQUNQLFdBQVcsRUFBRUosYUFBYSxDQUFDO0VBQ3RFLE1BQU1ZLEtBQUssR0FBRzdULDRDQUFLLENBQUMwRixPQUFPLENBQUMsT0FBTztJQUFFNE4sS0FBSztJQUFFckI7RUFBUyxDQUFDLENBQUMsRUFBRSxDQUFDcUIsS0FBSyxDQUFDLENBQUM7RUFDakUsb0JBQU8xUSxvRUFBQSxDQUFDc1IsV0FBVyxDQUFDSixRQUFRO0lBQUNDLEtBQUssRUFBRUYsS0FBTTtJQUFBclUsUUFBQSxFQUFFQTtFQUFRO0lBQUE4RCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FBdUIsQ0FBQztBQUM5RTtBQUVPLE1BQU0yTCxjQUFjLEdBQUdBLENBQUEsS0FBTTtFQUNsQyxNQUFNO0lBQUVrRSxLQUFLO0lBQUVyQjtFQUFTLENBQUMsR0FBR2pTLDRDQUFLLENBQUNpVSxVQUFVLENBQUNDLFdBQVcsQ0FBQztFQUN6RCxPQUFPLENBQUNaLEtBQUssRUFBRXJCLFFBQVEsQ0FBQztBQUMxQixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDeUI7QUFDMkI7QUFFckQsTUFBTXZILGNBQWMsR0FBR0EsQ0FBQSxLQUFNO0VBQzNCLE1BQU0sQ0FBQzRJLEtBQUssRUFBRXJCLFFBQVEsQ0FBQyxHQUFHK0Isd0VBQWdCLENBQUMsQ0FBQztFQUU1QyxNQUFNeEosZUFBZSxHQUFHeEssNENBQUssQ0FBQzRLLFdBQVcsQ0FBQyxNQUFNO0lBQzlDcUgsUUFBUSxDQUFDO01BQUVFLElBQUksRUFBRTtJQUFvQixDQUFDLENBQUM7RUFDekMsQ0FBQyxFQUFFLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0VBRWQsTUFBTXhILGtCQUFrQixHQUFHekssNENBQUssQ0FBQzRLLFdBQVcsQ0FBQyxNQUFNO0lBQ2pEcUgsUUFBUSxDQUFDO01BQUVFLElBQUksRUFBRTtJQUF1QixDQUFDLENBQUM7RUFDNUMsQ0FBQyxFQUFFLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0VBRWQsTUFBTTVDLGNBQWMsR0FBR3JQLDRDQUFLLENBQUM0SyxXQUFXLENBQ3JDd0ksS0FBSyxJQUFLO0lBQ1RuQixRQUFRLENBQUM7TUFBRUUsSUFBSSxFQUFFLGtCQUFrQjtNQUFFcUIsT0FBTyxFQUFFSjtJQUFNLENBQUMsQ0FBQztFQUN4RCxDQUFDLEVBQ0QsQ0FBQ25CLFFBQVEsQ0FDWCxDQUFDO0VBRUQsTUFBTTNDLGdCQUFnQixHQUFHdFAsNENBQUssQ0FBQzRLLFdBQVcsQ0FBQyxNQUFNO0lBQy9DcUgsUUFBUSxDQUFDO01BQUVFLElBQUksRUFBRTtJQUFxQixDQUFDLENBQUM7RUFDMUMsQ0FBQyxFQUFFLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0VBRWQsTUFBTVksa0JBQWtCLEdBQUc3Uyw0Q0FBSyxDQUFDNEssV0FBVyxDQUN6Q3dKLFdBQVcsSUFBSztJQUNmbkMsUUFBUSxDQUFDO01BQUVFLElBQUksRUFBRSxzQkFBc0I7TUFBRXFCLE9BQU8sRUFBRVk7SUFBWSxDQUFDLENBQUM7RUFDbEUsQ0FBQyxFQUNELENBQUNuQyxRQUFRLENBQ1gsQ0FBQztFQUVELE9BQUFuUCxhQUFBLENBQUFBLGFBQUEsS0FDS3dRLEtBQUs7SUFDUmpFLGNBQWM7SUFDZEMsZ0JBQWdCO0lBQ2hCOUUsZUFBZTtJQUNmQyxrQkFBa0I7SUFDbEJvSTtFQUFrQjtBQUV0QixDQUFDO0FBRWNuSSw2RUFBYyxFOzs7Ozs7Ozs7Ozs7QUMxQzdCO0FBQUE7QUFBQTtBQUEwQjtBQUUxQixNQUFNMkosTUFBTSxHQUFHQSxDQUFDNVQsR0FBRyxFQUFFc1QsS0FBSyxLQUFLO0VBQzdCLElBQUksT0FBT3RULEdBQUcsS0FBSyxVQUFVLEVBQUU7SUFDN0JBLEdBQUcsQ0FBQ3NULEtBQUssQ0FBQztFQUNaLENBQUMsTUFBTSxJQUFJdFQsR0FBRyxFQUFFO0lBQ2RBLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHcVQsS0FBSztFQUNyQjtBQUNGLENBQUM7QUFFRCxNQUFNdk8sVUFBVSxHQUFHQSxDQUFDOE8sSUFBSSxFQUFFQyxJQUFJO0FBQzVCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDRXZVLDRDQUFLLENBQUMwRixPQUFPLENBQUMsTUFBTTtFQUNsQixJQUFJNE8sSUFBSSxJQUFJLElBQUksSUFBSUMsSUFBSSxJQUFJLElBQUksRUFBRTtJQUNoQyxPQUFPLElBQUk7RUFDYjtFQUNBLE9BQVFDLFFBQVEsSUFBSztJQUNuQkgsTUFBTSxDQUFDQyxJQUFJLEVBQUVFLFFBQVEsQ0FBQztJQUN0QkgsTUFBTSxDQUFDRSxJQUFJLEVBQUVDLFFBQVEsQ0FBQztFQUN4QixDQUFDO0FBQ0gsQ0FBQyxFQUFFLENBQUNGLElBQUksRUFBRUMsSUFBSSxDQUFDLENBQUM7QUFDSC9PLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQ3pCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUN1QjtBQUVqRCxNQUFNZ0ssYUFBYSxHQUFJaUYsVUFBVSxJQUFLO0VBQ3BDLE1BQU14USxLQUFLLEdBQUdqRSw0Q0FBSyxDQUFDaVUsVUFBVSxDQUFDUyw4REFBWSxDQUFDO0VBQzVDLElBQUlDLEtBQUssR0FBRyxPQUFPRixVQUFVLEtBQUssVUFBVSxHQUFHQSxVQUFVLENBQUN4USxLQUFLLENBQUMsR0FBR3dRLFVBQVU7RUFDN0VFLEtBQUssR0FBR0EsS0FBSyxDQUFDdE8sT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7RUFFekMsTUFBTXVPLFlBQVksUUFBZ0M7RUFDbEQsTUFBTUMsY0FBYyxHQUFHLEtBQUs7RUFDNUIsTUFBTUMsVUFBVSxHQUFHRixZQUFZLEdBQUcxUyxNQUFNLENBQUM0UyxVQUFVLEdBQUcsSUFBSTtFQUUxRCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdoViw0Q0FBSyxDQUFDNkIsUUFBUSxDQUFDLE1BQU07SUFDN0MsSUFBSStTLFlBQVksRUFBRTtNQUNoQixPQUFPRSxVQUFVLENBQUNILEtBQUssQ0FBQyxDQUFDTSxPQUFPO0lBQ2xDOztJQUVBO0lBQ0E7SUFDQSxPQUFPSixjQUFjO0VBQ3ZCLENBQUMsQ0FBQztFQUVGN1UsNENBQUssQ0FBQ0MsU0FBUyxDQUFDLE1BQU07SUFDcEIsSUFBSSxDQUFDMlUsWUFBWSxFQUFFO01BQ2pCLE9BQU9NLFNBQVM7SUFDbEI7SUFFQSxNQUFNQyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ0gsS0FBSyxDQUFDO0lBQ25DLE1BQU1TLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO01BQ3hCSixRQUFRLENBQUNHLFNBQVMsQ0FBQ0YsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFREcsV0FBVyxDQUFDLENBQUM7SUFDYkQsU0FBUyxDQUFDMVMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFMlMsV0FBVyxDQUFDO0lBRWpELE9BQU8sTUFBTTtNQUNYRCxTQUFTLENBQUN6UyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUwUyxXQUFXLENBQUM7SUFDdEQsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDVCxLQUFLLEVBQUVHLFVBQVUsRUFBRUYsWUFBWSxDQUFDLENBQUM7RUFFckMsT0FBT0csS0FBSztBQUNkLENBQUM7QUFFY3ZGLDRFQUFhLEU7Ozs7Ozs7Ozs7OztBQzNDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUN1QjtBQUVqRCxNQUFNM0MsY0FBYyxHQUFHQSxDQUFBLEtBQU07RUFDM0IsTUFBTTVJLEtBQUssR0FBR2pFLDRDQUFLLENBQUNpVSxVQUFVLENBQUNTLDhEQUFZLENBQUM7RUFDNUMsT0FBT3pRLEtBQUssSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVjNEksNkVBQWMsRTs7Ozs7Ozs7Ozs7O0FDUjdCO0FBQUE7QUFBQTtBQUEwQjtBQUUxQixNQUFNRCxhQUFhLEdBQUdBLENBQUEsS0FBTTtFQUMxQjtFQUNBO0VBQ0EsTUFBTSxDQUFDRCxVQUFVLEVBQUUwSSxhQUFhLENBQUMsR0FBR3JWLDRDQUFLLENBQUM2QixRQUFRLENBQUM7SUFDakRtRCxLQUFLLEVBQUVrUSxTQUFTO0lBQ2hCalEsTUFBTSxFQUFFaVE7RUFDVixDQUFDLENBQUM7RUFFRmxWLDRDQUFLLENBQUNDLFNBQVMsQ0FBQyxNQUFNO0lBQ3BCO0lBQ0E7SUFDQSxNQUFNcVYsWUFBWSxHQUFHQSxDQUFBLEtBQU07TUFDekI7TUFDQUQsYUFBYSxDQUFDO1FBQ1pyUSxLQUFLLEVBQUU5QyxNQUFNLENBQUNxVCxVQUFVO1FBQ3hCdFEsTUFBTSxFQUFFL0MsTUFBTSxDQUFDSztNQUNqQixDQUFDLENBQUM7SUFDSixDQUFDOztJQUVEO0lBQ0FMLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsUUFBUSxFQUFFNlMsWUFBWSxDQUFDOztJQUUvQztJQUNBQSxZQUFZLENBQUMsQ0FBQzs7SUFFZDtJQUNBO0VBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDUixPQUFPM0ksVUFBVTtBQUNuQixDQUFDO0FBRWNDLDRFQUFhLEU7Ozs7Ozs7Ozs7O0FDakM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFRQTtBQXVCQSxJQUFJNEksY0FBSjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxHQUFKLEVBQWxCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQ3hCLFFBQWdDelQsU0FBaEMsR0FBOEQsSUFEaEU7QUFFQSxNQUFNMFQsVUFBMkMsR0FBRyxFQUFwRDtBQUVBLFNBQVNDLFdBQVQsR0FBeUQ7RUFDdkQ7RUFDQSxJQUFJTCxjQUFKLEVBQW9CO0lBQ2xCLE9BQU9BLGNBQVA7RUFDRCxDQUVEO0VBQ0EsSUFBSSxDQUFDRyxvQkFBTCxFQUEyQjtJQUN6QixPQUFPVCxTQUFQO0VBQ0Q7RUFFRCxPQUFRTSxjQUFjLEdBQUcsSUFBSUcsb0JBQUosQ0FDdEJHLE9BQUQsSUFBYTtJQUNYQSxPQUFPLENBQUNDLE9BQVJELENBQWlCRSxLQUFELElBQVc7TUFDekIsSUFBSSxDQUFDUCxTQUFTLENBQUNRLEdBQVZSLENBQWNPLEtBQUssQ0FBQ3JELE1BQXBCOEMsQ0FBTCxFQUFrQztRQUNoQztNQUNEO01BRUQsTUFBTVMsRUFBRSxHQUFHVCxTQUFTLENBQUNVLEdBQVZWLENBQWNPLEtBQUssQ0FBQ3JELE1BQXBCOEMsQ0FBWDtNQUNBLElBQUlPLEtBQUssQ0FBQ0ksY0FBTkosSUFBd0JBLEtBQUssQ0FBQ0ssaUJBQU5MLEdBQTBCLENBQXRELEVBQXlEO1FBQ3ZEUixjQUFjLENBQUNjLFNBQWZkLENBQXlCUSxLQUFLLENBQUNyRCxNQUEvQjZDO1FBQ0FDLFNBQVMsQ0FBQ2MsTUFBVmQsQ0FBaUJPLEtBQUssQ0FBQ3JELE1BQXZCOEM7UUFDQVMsRUFBRTtNQUNIO0lBQ0YsQ0FYREo7RUFZRCxDQWRzQixFQWV2QjtJQUFFVSxVQUFVLEVBQUU7RUFBZCxDQWZ1QixDQUF6QjtBQWlCRDtBQUVELE1BQU1DLHFCQUFxQixHQUFHLENBQUNDLEVBQUQsRUFBY1IsRUFBZCxLQUFpQztFQUM3RCxNQUFNUyxRQUFRLEdBQUdkLFdBQVcsRUFBNUI7RUFDQSxJQUFJLENBQUNjLFFBQUwsRUFBZTtJQUNiLE9BQU8sTUFBTSxDQUFFLENBQWY7RUFDRDtFQUVEQSxRQUFRLENBQUNDLE9BQVRELENBQWlCRCxFQUFqQkM7RUFDQWxCLFNBQVMsQ0FBQ29CLEdBQVZwQixDQUFjaUIsRUFBZGpCLEVBQWtCUyxFQUFsQlQ7RUFDQSxPQUFPLE1BQU07SUFDWCxJQUFJO01BQ0ZrQixRQUFRLENBQUNMLFNBQVRLLENBQW1CRCxFQUFuQkM7SUFDRCxDQUFDLFFBQU9HLEdBQVAsRUFBWTtNQUNaQyxPQUFPLENBQUNDLEtBQVJELENBQWNELEdBQWRDO0lBQ0Q7SUFDRHRCLFNBQVMsQ0FBQ2MsTUFBVmQsQ0FBaUJpQixFQUFqQmpCO0VBQ0QsQ0FQRDtBQVFELENBaEJEO0FBa0JBLFNBQVN3QixRQUFULENBQ0VDLE1BREYsRUFFRWpVLElBRkYsRUFHRWtVLEVBSEYsRUFJRTFSLE9BSkYsRUFLUTtFQUNOLFVBQW1DO0VBQ25DLElBQUksQ0FBQyx3QkFBV3hDLElBQVgsQ0FBTCxFQUF1QixPQUN2QjtFQUNBO0VBQ0E7RUFDQTtFQUNBaVUsTUFBTSxDQUFDRCxRQUFQQyxDQUFnQmpVLElBQWhCaVUsRUFBc0JDLEVBQXRCRCxFQUEwQnpSLE9BQTFCeVIsRUFBbUNFLEtBQW5DRixDQUEwQ0osR0FBRCxJQUFTO0lBQ2hELFVBQTJDO01BQ3pDO01BQ0EsTUFBTUEsR0FBTjtJQUNEO0VBQ0YsQ0FMREksRUFNQTtFQUNBdEIsVUFBVSxDQUFDM1MsSUFBSSxHQUFHLEdBQVBBLEdBQWFrVSxFQUFkLENBQVZ2QixHQUE4QixJQUE5QkE7QUFDRDtBQUVELFNBQVN5QixlQUFULENBQXlCL1AsS0FBekIsRUFBa0Q7RUFDaEQsTUFBTTtJQUFFcUw7RUFBRixJQUFhckwsS0FBSyxDQUFDZ1EsYUFBekI7RUFDQSxPQUNHM0UsTUFBTSxJQUFJQSxNQUFNLEtBQUssT0FBdEIsSUFDQXJMLEtBQUssQ0FBQ2lRLE9BRE4sSUFFQWpRLEtBQUssQ0FBQ2tRLE9BRk4sSUFHQWxRLEtBQUssQ0FBQ21RLFFBSE4sSUFJQW5RLEtBQUssQ0FBQ29RLE1BSk47RUFJZ0I7RUFDZnBRLEtBQUssQ0FBQ3FRLFdBQU5yUSxJQUFxQkEsS0FBSyxDQUFDcVEsV0FBTnJRLENBQWtCc1EsS0FBbEJ0USxLQUE0QixDQU5wRDtBQVFEO0FBRUQsU0FBU3VRLFdBQVQsQ0FDRUMsQ0FERixFQUVFWixNQUZGLEVBR0VqVSxJQUhGLEVBSUVrVSxFQUpGLEVBS0U5USxPQUxGLEVBTUUwUixPQU5GLEVBT0VDLE1BUEYsRUFRRUMsTUFSRixFQVNRO0VBQ04sTUFBTTtJQUFFQztFQUFGLElBQWVKLENBQUMsQ0FBQ1IsYUFBdkI7RUFFQSxJQUFJWSxRQUFRLEtBQUssR0FBYkEsS0FBcUJiLGVBQWUsQ0FBQ1MsQ0FBRCxDQUFmVCxJQUFzQixDQUFDLHdCQUFXcFUsSUFBWCxDQUE1Q2lWLENBQUosRUFBbUU7SUFDakU7SUFDQTtFQUNEO0VBRURKLENBQUMsQ0FBQ3ZRLGNBQUZ1USxHQUVBO0VBQ0EsSUFBSUUsTUFBTSxJQUFJLElBQWQsRUFBb0I7SUFDbEJBLE1BQU0sR0FBR2IsRUFBRSxDQUFDZ0IsT0FBSGhCLENBQVcsR0FBWEEsSUFBa0IsQ0FBM0JhO0VBQ0QsQ0FFRDtFQUNBZCxNQUFNLENBQUM3USxPQUFPLEdBQUcsU0FBSCxHQUFlLE1BQXZCLENBQU42USxDQUFxQ2pVLElBQXJDaVUsRUFBMkNDLEVBQTNDRCxFQUErQztJQUFFYSxPQUFGO0lBQVdFO0VBQVgsQ0FBL0NmLEVBQW9Fa0IsSUFBcEVsQixDQUNHbUIsT0FBRCxJQUFzQjtJQUNwQixJQUFJLENBQUNBLE9BQUwsRUFBYztJQUNkLElBQUlMLE1BQUosRUFBWTtNQUNWOVYsTUFBTSxDQUFDb1csUUFBUHBXLENBQWdCLENBQWhCQSxFQUFtQixDQUFuQkE7TUFDQUUsUUFBUSxDQUFDbVcsSUFBVG5XLENBQWNvVyxLQUFkcFc7SUFDRDtFQUNGLENBUEg4VTtBQVNEO0FBRUQsU0FBU2xVLElBQVQsQ0FBYzNCLEtBQWQsRUFBeUQ7RUFDdkQsVUFBMkM7SUFDekMsU0FBU29YLGVBQVQsQ0FBeUJDLElBQXpCLEVBSUc7TUFDRCxPQUFPLElBQUluUSxLQUFKLENBQ0osZ0NBQStCbVEsSUFBSSxDQUFDQyxHQUFJLGdCQUFlRCxJQUFJLENBQUNFLFFBQVMsNkJBQTRCRixJQUFJLENBQUNHLE1BQU8sYUFBOUcsSUFDRyxRQUNHLFNBREgsR0FFRyxFQUhOLENBREssQ0FBUDtJQU1ELENBRUQ7SUFDQSxNQUFNQyxrQkFBbUQsR0FBRztNQUMxRDdWLElBQUksRUFBRTtJQURvRCxDQUE1RDtJQUdBLE1BQU04VixhQUFrQyxHQUFHQyxNQUFNLENBQUNDLElBQVBELENBQ3pDRixrQkFEeUNFLENBQTNDO0lBR0EsYUFBYSxDQUFDakQsT0FBZCxDQUF1QjRDLEdBQUQsSUFBNEI7TUFDaEQsSUFBSUEsR0FBRyxLQUFLLE1BQVosRUFBb0I7UUFDbEIsSUFDRXRYLEtBQUssQ0FBQ3NYLEdBQUQsQ0FBTHRYLElBQWMsSUFBZEEsSUFDQyxPQUFPQSxLQUFLLENBQUNzWCxHQUFELENBQVosS0FBc0IsUUFBdEIsSUFBa0MsT0FBT3RYLEtBQUssQ0FBQ3NYLEdBQUQsQ0FBWixLQUFzQixRQUYzRCxFQUdFO1VBQ0EsTUFBTUYsZUFBZSxDQUFDO1lBQ3BCRSxHQURvQjtZQUVwQkMsUUFBUSxFQUFFLHNCQUZVO1lBR3BCQyxNQUFNLEVBQUV4WCxLQUFLLENBQUNzWCxHQUFELENBQUx0WCxLQUFlLElBQWZBLEdBQXNCLE1BQXRCQSxHQUErQixPQUFPQSxLQUFLLENBQUNzWCxHQUFEO1VBSC9CLENBQUQsQ0FBckI7UUFLRDtNQUNGLENBWEQsTUFXTztRQUNMO1FBQ0E7UUFDQSxNQUFNTyxDQUFRLEdBQUdQLEdBQWpCO01BQ0Q7SUFDRixDQWpCRCxFQW1CQTtJQUNBLE1BQU1RLGtCQUFtRCxHQUFHO01BQzFEaEMsRUFBRSxFQUFFLElBRHNEO01BRTFEOVEsT0FBTyxFQUFFLElBRmlEO01BRzFEMlIsTUFBTSxFQUFFLElBSGtEO01BSTFERCxPQUFPLEVBQUUsSUFKaUQ7TUFLMUQ3VSxRQUFRLEVBQUUsSUFMZ0Q7TUFNMUQrVCxRQUFRLEVBQUUsSUFOZ0Q7TUFPMURnQixNQUFNLEVBQUU7SUFQa0QsQ0FBNUQ7SUFTQSxNQUFNbUIsYUFBa0MsR0FBR0osTUFBTSxDQUFDQyxJQUFQRCxDQUN6Q0csa0JBRHlDSCxDQUEzQztJQUdBLGFBQWEsQ0FBQ2pELE9BQWQsQ0FBdUI0QyxHQUFELElBQTRCO01BQ2hELE1BQU1VLE9BQU8sR0FBRyxPQUFPaFksS0FBSyxDQUFDc1gsR0FBRCxDQUE1QjtNQUVBLElBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO1FBQ2hCLElBQUl0WCxLQUFLLENBQUNzWCxHQUFELENBQUx0WCxJQUFjZ1ksT0FBTyxLQUFLLFFBQTFCaFksSUFBc0NnWSxPQUFPLEtBQUssUUFBdEQsRUFBZ0U7VUFDOUQsTUFBTVosZUFBZSxDQUFDO1lBQ3BCRSxHQURvQjtZQUVwQkMsUUFBUSxFQUFFLHNCQUZVO1lBR3BCQyxNQUFNLEVBQUVRO1VBSFksQ0FBRCxDQUFyQjtRQUtEO01BQ0YsQ0FSRCxNQVFPLElBQUlWLEdBQUcsS0FBSyxRQUFaLEVBQXNCO1FBQzNCLElBQUl0WCxLQUFLLENBQUNzWCxHQUFELENBQUx0WCxJQUFjZ1ksT0FBTyxLQUFLLFFBQTlCLEVBQXdDO1VBQ3RDLE1BQU1aLGVBQWUsQ0FBQztZQUNwQkUsR0FEb0I7WUFFcEJDLFFBQVEsRUFBRSxVQUZVO1lBR3BCQyxNQUFNLEVBQUVRO1VBSFksQ0FBRCxDQUFyQjtRQUtEO01BQ0YsQ0FSTSxNQVFBLElBQ0xWLEdBQUcsS0FBSyxTQUFSQSxJQUNBQSxHQUFHLEtBQUssUUFEUkEsSUFFQUEsR0FBRyxLQUFLLFNBRlJBLElBR0FBLEdBQUcsS0FBSyxVQUhSQSxJQUlBQSxHQUFHLEtBQUssVUFMSCxFQU1MO1FBQ0EsSUFBSXRYLEtBQUssQ0FBQ3NYLEdBQUQsQ0FBTHRYLElBQWMsSUFBZEEsSUFBc0JnWSxPQUFPLEtBQUssU0FBdEMsRUFBaUQ7VUFDL0MsTUFBTVosZUFBZSxDQUFDO1lBQ3BCRSxHQURvQjtZQUVwQkMsUUFBUSxFQUFFLFdBRlU7WUFHcEJDLE1BQU0sRUFBRVE7VUFIWSxDQUFELENBQXJCO1FBS0Q7TUFDRixDQWRNLE1BY0E7UUFDTDtRQUNBO1FBQ0EsTUFBTUgsQ0FBUSxHQUFHUCxHQUFqQjtNQUNEO0lBQ0YsQ0F0Q0QsRUF3Q0E7SUFDQTtJQUNBLE1BQU1XLFNBQVMsR0FBR3RaLGVBQU1zRixNQUFOdEYsQ0FBYSxLQUFiQSxDQUFsQjtJQUNBLElBQUlxQixLQUFLLENBQUM0VixRQUFONVYsSUFBa0IsQ0FBQ2lZLFNBQVMsQ0FBQzVZLE9BQWpDLEVBQTBDO01BQ3hDNFksU0FBUyxDQUFDNVksT0FBVjRZLEdBQW9CLElBQXBCQTtNQUNBdkMsT0FBTyxDQUFDd0MsSUFBUnhDLENBQ0UsbUtBREZBO0lBR0Q7RUFDRjtFQUNELE1BQU1oUSxDQUFDLEdBQUcxRixLQUFLLENBQUM0VixRQUFONVYsS0FBbUIsS0FBN0I7RUFFQSxNQUFNNlYsTUFBTSxHQUFHLHlCQUFmO0VBQ0EsTUFBTXNDLFFBQVEsR0FBSXRDLE1BQU0sSUFBSUEsTUFBTSxDQUFDc0MsUUFBbEIsSUFBK0IsR0FBaEQ7RUFFQSxNQUFNO0lBQUV2VyxJQUFGO0lBQVFrVTtFQUFSLElBQWVuWCxlQUFNMEYsT0FBTjFGLENBQWMsTUFBTTtJQUN2QyxNQUFNLENBQUN5WixZQUFELEVBQWVDLFVBQWYsSUFBNkIseUJBQVlGLFFBQVosRUFBc0JuWSxLQUFLLENBQUM0QixJQUE1QixFQUFrQyxJQUFsQyxDQUFuQztJQUNBLE9BQU87TUFDTEEsSUFBSSxFQUFFd1csWUFERDtNQUVMdEMsRUFBRSxFQUFFOVYsS0FBSyxDQUFDOFYsRUFBTjlWLEdBQ0EseUJBQVltWSxRQUFaLEVBQXNCblksS0FBSyxDQUFDOFYsRUFBNUIsQ0FEQTlWLEdBRUFxWSxVQUFVLElBQUlEO0lBSmIsQ0FBUDtFQU1ELENBUm9CelosRUFRbEIsQ0FBQ3daLFFBQUQsRUFBV25ZLEtBQUssQ0FBQzRCLElBQWpCLEVBQXVCNUIsS0FBSyxDQUFDOFYsRUFBN0IsQ0FSa0JuWCxDQUFyQjtFQVVBLElBQUk7SUFBRVIsUUFBRjtJQUFZNkcsT0FBWjtJQUFxQjBSLE9BQXJCO0lBQThCQyxNQUE5QjtJQUFzQ0M7RUFBdEMsSUFBaUQ1VyxLQUFyRCxDQUVBO0VBQ0EsSUFBSSxPQUFPN0IsUUFBUCxLQUFvQixRQUF4QixFQUFrQztJQUNoQ0EsUUFBUSxnQkFBRyx3Q0FBSUEsUUFBSixDQUFYQTtFQUNELENBRUQ7RUFDQSxNQUFNYSxLQUFVLEdBQUdGLGdCQUFTd1osSUFBVHhaLENBQWNYLFFBQWRXLENBQW5CO0VBQ0EsTUFBTXlTLFFBQWEsR0FBR3ZTLEtBQUssSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQTFCQSxJQUFzQ0EsS0FBSyxDQUFDSSxHQUFsRTtFQUVBLE1BQU1tWixPQUFPLEdBQUc1WixlQUFNc0YsTUFBTnRGLEVBQWhCO0VBQ0EsTUFBTXFVLE1BQU0sR0FBR3JVLGVBQU00SyxXQUFONUssQ0FDWjBXLEVBQUQsSUFBaUI7SUFDZjtJQUNBLElBQUlrRCxPQUFPLENBQUNsWixPQUFaLEVBQXFCO01BQ25Ca1osT0FBTyxDQUFDbFosT0FBUmtaO01BQ0FBLE9BQU8sQ0FBQ2xaLE9BQVJrWixHQUFrQjFFLFNBQWxCMEU7SUFDRDtJQUVELElBQUk3UyxDQUFDLElBQUk0TyxvQkFBTDVPLElBQTZCMlAsRUFBN0IzUCxJQUFtQzJQLEVBQUUsQ0FBQ21ELE9BQXRDOVMsSUFBaUQsd0JBQVc5RCxJQUFYLENBQXJELEVBQXVFO01BQ3JFO01BQ0EsTUFBTTZXLFlBQVksR0FBR2xFLFVBQVUsQ0FBQzNTLElBQUksR0FBRyxHQUFQQSxHQUFha1UsRUFBZCxDQUEvQjtNQUNBLElBQUksQ0FBQzJDLFlBQUwsRUFBbUI7UUFDakJGLE9BQU8sQ0FBQ2xaLE9BQVJrWixHQUFrQm5ELHFCQUFxQixDQUFDQyxFQUFELEVBQUssTUFBTTtVQUNoRE8sUUFBUSxDQUFDQyxNQUFELEVBQVNqVSxJQUFULEVBQWVrVSxFQUFmLEVBQW1CO1lBQ3pCYyxNQUFNLEVBQ0osT0FBT0EsTUFBUCxLQUFrQixXQUFsQixHQUNJQSxNQURKLEdBRUlmLE1BQU0sSUFBSUEsTUFBTSxDQUFDZTtVQUpFLENBQW5CLENBQVJoQjtRQU1ELENBUHNDLENBQXZDMkM7TUFRRDtJQUNGO0lBRUQsSUFBSWhILFFBQUosRUFBYztNQUNaLElBQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQ0EsUUFBUSxDQUFDOEQsRUFBRCxDQUFSOUQsQ0FBcEMsS0FDSyxJQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7UUFDckNBLFFBQVEsQ0FBQ2xTLE9BQVRrUyxHQUFtQjhELEVBQW5COUQ7TUFDRDtJQUNGO0VBQ0YsQ0E3Qlk1UyxFQThCYixDQUFDK0csQ0FBRCxFQUFJNkwsUUFBSixFQUFjM1AsSUFBZCxFQUFvQmtVLEVBQXBCLEVBQXdCRCxNQUF4QixFQUFnQ2UsTUFBaEMsQ0E5QmFqWSxDQUFmO0VBaUNBLE1BQU0rWixVQUtMLEdBQUc7SUFDRnRaLEdBQUcsRUFBRTRULE1BREg7SUFFRjdJLE9BQU8sRUFBR3NNLENBQUQsSUFBeUI7TUFDaEMsSUFBSXpYLEtBQUssQ0FBQ2dCLEtBQU5oQixJQUFlLE9BQU9BLEtBQUssQ0FBQ2dCLEtBQU5oQixDQUFZbUwsT0FBbkIsS0FBK0IsVUFBbEQsRUFBOEQ7UUFDNURuTCxLQUFLLENBQUNnQixLQUFOaEIsQ0FBWW1MLE9BQVpuTCxDQUFvQnlYLENBQXBCelg7TUFDRDtNQUNELElBQUksQ0FBQ3lYLENBQUMsQ0FBQ2tDLGdCQUFQLEVBQXlCO1FBQ3ZCbkMsV0FBVyxDQUFDQyxDQUFELEVBQUlaLE1BQUosRUFBWWpVLElBQVosRUFBa0JrVSxFQUFsQixFQUFzQjlRLE9BQXRCLEVBQStCMFIsT0FBL0IsRUFBd0NDLE1BQXhDLEVBQWdEQyxNQUFoRCxDQUFYSjtNQUNEO0lBQ0Y7RUFUQyxDQUxKO0VBaUJBLElBQUk5USxDQUFKLEVBQU87SUFDTGdULFVBQVUsQ0FBQ3RPLFlBQVhzTyxHQUEyQmpDLENBQUQsSUFBeUI7TUFDakQsSUFBSSxDQUFDLHdCQUFXN1UsSUFBWCxDQUFMLEVBQXVCO01BQ3ZCLElBQUk1QyxLQUFLLENBQUNnQixLQUFOaEIsSUFBZSxPQUFPQSxLQUFLLENBQUNnQixLQUFOaEIsQ0FBWW9MLFlBQW5CLEtBQW9DLFVBQXZELEVBQW1FO1FBQ2pFcEwsS0FBSyxDQUFDZ0IsS0FBTmhCLENBQVlvTCxZQUFacEwsQ0FBeUJ5WCxDQUF6QnpYO01BQ0Q7TUFDRDRXLFFBQVEsQ0FBQ0MsTUFBRCxFQUFTalUsSUFBVCxFQUFla1UsRUFBZixFQUFtQjtRQUFFOEMsUUFBUSxFQUFFO01BQVosQ0FBbkIsQ0FBUmhEO0lBQ0QsQ0FORDhDO0VBT0QsQ0FFRDtFQUNBO0VBQ0EsSUFBSTFZLEtBQUssQ0FBQzZCLFFBQU43QixJQUFtQmhCLEtBQUssQ0FBQzhSLElBQU45UixLQUFlLEdBQWZBLElBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUFDZ0IsS0FBbEIsQ0FBN0MsRUFBd0U7SUFDdEUwWSxVQUFVLENBQUM5VyxJQUFYOFcsR0FBa0IseUJBQ2hCLHVCQUNFNUMsRUFERixFQUVFLE9BQU9jLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDZixNQUFNLElBQUlBLE1BQU0sQ0FBQ2UsTUFGNUQsRUFHRWYsTUFBTSxJQUFJQSxNQUFNLENBQUNnRCxhQUhuQixDQURnQixDQUFsQkg7RUFPRDtFQUVELG9CQUFPL1osZUFBTVcsWUFBTlgsQ0FBbUJLLEtBQW5CTCxFQUEwQitaLFVBQTFCL1osQ0FBUDtBQUNEO2VBRWNnRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0MzV2Y7OztBQUdPLFNBQVNtWCx1QkFBVCxDQUFpQ0MsSUFBakMsRUFBdUQ7RUFDNUQsT0FBT0EsSUFBSSxDQUFDQyxRQUFMRCxDQUFjLEdBQWRBLEtBQXNCQSxJQUFJLEtBQUssR0FBL0JBLEdBQXFDQSxJQUFJLENBQUN2SyxLQUFMdUssQ0FBVyxDQUFYQSxFQUFjLENBQUMsQ0FBZkEsQ0FBckNBLEdBQXlEQSxJQUFoRTtBQUNELENBRUQ7Ozs7QUFJTyxNQUFNRSwwQkFBMEIsR0FBR0MsU0FDckNILFNBRHFDRyxHQVV0Q0osdUJBVkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQO0FBQ0E7OztBQUNBO0FBc0hBO3lDQXpIQTtBQW1CQSxNQUFNSyxlQUFvQyxHQUFHO0VBQzNDdEQsTUFBTSxFQUFFLElBRG1DO0VBQzdCO0VBQ2R1RCxjQUFjLEVBQUUsRUFGMkI7RUFHM0NDLEtBQUssQ0FBQ3hFLEVBQUQsRUFBaUI7SUFDcEIsSUFBSSxLQUFLZ0IsTUFBVCxFQUFpQixPQUFPaEIsRUFBRSxFQUFUO0lBQ2pCLFdBQW1DLEVBRWxDO0VBQ0Y7QUFSMEMsQ0FBN0MsQ0FXQTtBQUNBLE1BQU15RSxpQkFBaUIsR0FBRyxDQUN4QixVQUR3QixFQUV4QixPQUZ3QixFQUd4QixPQUh3QixFQUl4QixRQUp3QixFQUt4QixZQUx3QixFQU14QixZQU53QixFQU94QixVQVB3QixFQVF4QixRQVJ3QixFQVN4QixTQVR3QixFQVV4QixlQVZ3QixDQUExQjtBQVlBLE1BQU1DLFlBQVksR0FBRyxDQUNuQixrQkFEbUIsRUFFbkIscUJBRm1CLEVBR25CLHFCQUhtQixFQUluQixrQkFKbUIsRUFLbkIsaUJBTG1CLEVBTW5CLG9CQU5tQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLENBQ3ZCLE1BRHVCLEVBRXZCLFNBRnVCLEVBR3ZCLFFBSHVCLEVBSXZCLE1BSnVCLEVBS3ZCLFVBTHVCLEVBTXZCLGdCQU51QixDQUF6QixDQVNBO0FBQ0E3QixNQUFNLENBQUM4QixjQUFQOUIsQ0FBc0J3QixlQUF0QnhCLEVBQXVDLFFBQXZDQSxFQUFpRDtFQUMvQzdDLEdBQUcsR0FBRztJQUNKLE9BQU80RSxpQkFBT0MsTUFBZDtFQUNEO0FBSDhDLENBQWpEaEM7QUFNQTJCLGlCQUFpQixDQUFDNUUsT0FBbEI0RSxDQUEyQk0sS0FBRCxJQUFXO0VBQ25DO0VBQ0E7RUFDQTtFQUNBO0VBQ0FqQyxNQUFNLENBQUM4QixjQUFQOUIsQ0FBc0J3QixlQUF0QnhCLEVBQXVDaUMsS0FBdkNqQyxFQUE4QztJQUM1QzdDLEdBQUcsR0FBRztNQUNKLE1BQU1lLE1BQU0sR0FBR2dFLFNBQVMsRUFBeEI7TUFDQSxPQUFPaEUsTUFBTSxDQUFDK0QsS0FBRCxDQUFiO0lBQ0Q7RUFKMkMsQ0FBOUNqQztBQU1ELENBWEQyQjtBQWFBLGdCQUFnQixDQUFDNUUsT0FBakIsQ0FBMEJrRixLQUFELElBQVc7RUFDbEM7RUFDQTtFQUFFVCxlQUFELENBQXlCUyxLQUF6QixJQUFrQyxDQUFDLEdBQUd2QyxJQUFKLEtBQW9CO0lBQ3JELE1BQU14QixNQUFNLEdBQUdnRSxTQUFTLEVBQXhCO0lBQ0EsT0FBT2hFLE1BQU0sQ0FBQytELEtBQUQsQ0FBTi9ELENBQWMsR0FBR3dCLElBQWpCeEIsQ0FBUDtFQUNELENBSEE7QUFJRixDQU5EO0FBUUEwRCxZQUFZLENBQUM3RSxPQUFiNkUsQ0FBc0J0VCxLQUFELElBQVc7RUFDOUJrVCxlQUFlLENBQUNFLEtBQWhCRixDQUFzQixNQUFNO0lBQzFCTyxpQkFBT0MsTUFBUEQsQ0FBY0ksRUFBZEosQ0FBaUJ6VCxLQUFqQnlULEVBQXdCLENBQUMsR0FBR3JDLElBQUosS0FBYTtNQUNuQyxNQUFNMEMsVUFBVSxHQUFJLEtBQUk5VCxLQUFLLENBQUMrVCxNQUFOL1QsQ0FBYSxDQUFiQSxFQUFnQmdVLFdBQWhCaFUsRUFBOEIsR0FBRUEsS0FBSyxDQUFDaVUsU0FBTmpVLENBQ3RELENBRHNEQSxDQUV0RCxFQUZGO01BR0EsTUFBTWtVLGdCQUFnQixHQUFHaEIsZUFBekI7TUFDQSxJQUFJZ0IsZ0JBQWdCLENBQUNKLFVBQUQsQ0FBcEIsRUFBa0M7UUFDaEMsSUFBSTtVQUNGSSxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFoQkksQ0FBNkIsR0FBRzlDLElBQWhDOEM7UUFDRCxDQUFDLFFBQU8xRSxHQUFQLEVBQVk7VUFDWkMsT0FBTyxDQUFDQyxLQUFSRCxDQUFlLHdDQUF1Q3FFLFVBQVcsRUFBakVyRTtVQUNBQSxPQUFPLENBQUNDLEtBQVJELENBQWUsR0FBRUQsR0FBRyxDQUFDMkUsT0FBUSxLQUFJM0UsR0FBRyxDQUFDNEUsS0FBTSxFQUEzQzNFO1FBQ0Q7TUFDRjtJQUNGLENBYkRnRTtFQWNELENBZkRQO0FBZ0JELENBakJESTtBQW1CQSxTQUFTTSxTQUFULEdBQTZCO0VBQzNCLElBQUksQ0FBQ1YsZUFBZSxDQUFDdEQsTUFBckIsRUFBNkI7SUFDM0IsTUFBTXVFLE9BQU8sR0FDWCxnQ0FDQSx5RUFGRjtJQUdBLE1BQU0sSUFBSWxULEtBQUosQ0FBVWtULE9BQVYsQ0FBTjtFQUNEO0VBQ0QsT0FBT2pCLGVBQWUsQ0FBQ3RELE1BQXZCO0FBQ0QsQ0FFRDtlQUNlc0QsZSxDQUVmOztBQUdPLFNBQVNtQixTQUFULEdBQWlDO0VBQ3RDLE9BQU8zYixlQUFNaVUsVUFBTmpVLENBQWlCNGIsNEJBQWpCNWIsQ0FBUDtBQUNELENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ08sTUFBTTZiLFlBQVksR0FBRyxDQUFDLEdBQUduRCxJQUFKLEtBQWlDO0VBQzNEOEIsZUFBZSxDQUFDdEQsTUFBaEJzRCxHQUF5QixJQUFJTyxnQkFBSixDQUFXLEdBQUdyQyxJQUFkLENBQXpCOEI7RUFDQUEsZUFBZSxDQUFDQyxjQUFoQkQsQ0FBK0J6RSxPQUEvQnlFLENBQXdDdEUsRUFBRCxJQUFRQSxFQUFFLEVBQWpEc0U7RUFDQUEsZUFBZSxDQUFDQyxjQUFoQkQsR0FBaUMsRUFBakNBO0VBRUEsT0FBT0EsZUFBZSxDQUFDdEQsTUFBdkI7QUFDRCxDQU5NLENBUVA7O0FBQ08sU0FBUzRFLHdCQUFULENBQWtDNUUsTUFBbEMsRUFBOEQ7RUFDbkUsTUFBTTZFLE9BQU8sR0FBRzdFLE1BQWhCO0VBQ0EsTUFBTThFLFFBQVEsR0FBRyxFQUFqQjtFQUVBLEtBQUssTUFBTUMsUUFBWCxJQUF1QnRCLGlCQUF2QixFQUEwQztJQUN4QyxJQUFJLE9BQU9vQixPQUFPLENBQUNFLFFBQUQsQ0FBZCxLQUE2QixRQUFqQyxFQUEyQztNQUN6Q0QsUUFBUSxDQUFDQyxRQUFELENBQVJELEdBQXFCaEQsTUFBTSxDQUFDa0QsTUFBUGxELENBQ25CbUQsS0FBSyxDQUFDQyxPQUFORCxDQUFjSixPQUFPLENBQUNFLFFBQUQsQ0FBckJFLElBQW1DLEVBQW5DQSxHQUF3QyxFQURyQm5ELEVBRW5CK0MsT0FBTyxDQUFDRSxRQUFELENBRllqRCxDQUFyQmdELENBR0U7TUFDRjtJQUNEO0lBRURBLFFBQVEsQ0FBQ0MsUUFBRCxDQUFSRCxHQUFxQkQsT0FBTyxDQUFDRSxRQUFELENBQTVCRDtFQUNELENBRUQ7RUFDQUEsUUFBUSxDQUFDaEIsTUFBVGdCLEdBQWtCakIsaUJBQU9DLE1BQXpCZ0I7RUFFQW5CLGdCQUFnQixDQUFDOUUsT0FBakI4RSxDQUEwQkksS0FBRCxJQUFXO0lBQ2xDZSxRQUFRLENBQUNmLEtBQUQsQ0FBUmUsR0FBa0IsQ0FBQyxHQUFHdEQsSUFBSixLQUFvQjtNQUNwQyxPQUFPcUQsT0FBTyxDQUFDZCxLQUFELENBQVBjLENBQWUsR0FBR3JELElBQWxCcUQsQ0FBUDtJQUNELENBRkRDO0VBR0QsQ0FKRG5CO0VBTUEsT0FBT21CLFFBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLRDtBQUVBO0FBV2UsU0FBU0ssVUFBVCxDQUliQyxpQkFKYSxFQUsrQjtFQUM1QyxTQUFTQyxpQkFBVCxDQUEyQmxiLEtBQTNCLEVBQXVDO0lBQ3JDLG9CQUFPLDZCQUFDLGlCQUFEO01BQW1CLE1BQU0sRUFBRTtJQUEzQixHQUE0Q0EsS0FBNUMsRUFBUDtFQUNEO0VBRUQsaUJBQWlCLENBQUNtYixlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQ3REO0VBQUE7RUFDRUQsaUJBQUQsQ0FBMkJFLG1CQUEzQixHQUFrREgsaUJBQUQsQ0FBMkJHLG1CQUE1RTtFQUNELFVBQTJDO0lBQ3pDLE1BQU1DLElBQUksR0FDUkosaUJBQWlCLENBQUNLLFdBQWxCTCxJQUFpQ0EsaUJBQWlCLENBQUNJLElBQW5ESixJQUEyRCxTQUQ3RDtJQUVBQyxpQkFBaUIsQ0FBQ0ksV0FBbEJKLEdBQWlDLGNBQWFHLElBQUssR0FBbkRIO0VBQ0Q7RUFFRCxPQUFPQSxpQkFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ2pDWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBOEM7QUFDdkU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRDtBQUM3RTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMkNBQTJDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpREFBaUQsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyx3T0FBd08sVUFBVSxFQUFFO0FBQ3BQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZEQUE2RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7Ozs7O3VCQ3JaQTs7Ozs7OzBCQUFBLENBWUE7QUFDQTtBQUNBO0FBVWUsU0FBU0ssSUFBVCxHQUE2QjtFQUMxQyxNQUFNQyxHQUErQixHQUFHN0QsTUFBTSxDQUFDOEQsTUFBUDlELENBQWMsSUFBZEEsQ0FBeEM7RUFFQSxPQUFPO0lBQ0xtQyxFQUFFLENBQUNoSixJQUFELEVBQWU0SyxPQUFmLEVBQWlDO01BQ2pDO01BQUMsQ0FBQ0YsR0FBRyxDQUFDMUssSUFBRCxDQUFIMEssS0FBY0EsR0FBRyxDQUFDMUssSUFBRCxDQUFIMEssR0FBWSxFQUExQkEsQ0FBRCxFQUFnQ25ULElBQWhDLENBQXFDcVQsT0FBckM7SUFDRixDQUhJO0lBS0xDLEdBQUcsQ0FBQzdLLElBQUQsRUFBZTRLLE9BQWYsRUFBaUM7TUFDbEMsSUFBSUYsR0FBRyxDQUFDMUssSUFBRCxDQUFQLEVBQWU7UUFDYjBLLEdBQUcsQ0FBQzFLLElBQUQsQ0FBSDBLLENBQVVJLE1BQVZKLENBQWlCQSxHQUFHLENBQUMxSyxJQUFELENBQUgwSyxDQUFVMUUsT0FBVjBFLENBQWtCRSxPQUFsQkYsTUFBK0IsQ0FBaERBLEVBQW1ELENBQW5EQTtNQUNEO0lBQ0YsQ0FUSTtJQVdMSyxJQUFJLENBQUMvSyxJQUFELEVBQWUsR0FBR2dMLElBQWxCLEVBQStCO01BQ2pDO01BQ0E7TUFBQyxDQUFDTixHQUFHLENBQUMxSyxJQUFELENBQUgwSyxJQUFhLEVBQWQsRUFBa0JoTixLQUFsQixHQUEwQnpQLEdBQTFCLENBQStCMmMsT0FBRCxJQUFzQjtRQUNuREEsT0FBTyxDQUFDLEdBQUdJLElBQUosQ0FBUEo7TUFDRCxDQUZBO0lBR0Y7RUFoQkksQ0FBUDtBQWtCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEO0FBS0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0NBM0JBLDRCQUNBO0FBeUNBLE1BQU1LLFFBQVEsR0FBSTdDLE1BQUQsSUFBa0QsRUFBbkU7QUFFQSxTQUFTOEMsc0JBQVQsR0FBa0M7RUFDaEMsT0FBT3JFLE1BQU0sQ0FBQ2tELE1BQVBsRCxDQUFjLElBQUl6USxLQUFKLENBQVUsaUJBQVYsQ0FBZHlRLEVBQTRDO0lBQ2pEc0UsU0FBUyxFQUFFO0VBRHNDLENBQTVDdEUsQ0FBUDtBQUdEO0FBRUQsU0FBU3VFLGFBQVQsQ0FBdUJuRCxJQUF2QixFQUFxQ29ELE1BQXJDLEVBQXNEO0VBQ3BELE9BQU9BLE1BQU0sSUFBSXBELElBQUksQ0FBQ3FELFVBQUxyRCxDQUFnQixHQUFoQkEsQ0FBVm9ELEdBQ0hwRCxJQUFJLEtBQUssR0FBVEEsR0FDRSx3REFBMkJvRCxNQUEzQixDQURGcEQsR0FFRyxHQUFFb0QsTUFBTyxHQUFFcEQsSUFBSyxFQUhoQm9ELEdBSUhwRCxJQUpKO0FBS0Q7QUFFTSxTQUFTc0QsU0FBVCxDQUNMdEQsSUFESyxFQUVMbkMsTUFGSyxFQUdMaUMsYUFISyxFQUlMO0VBQ0EsSUFBSUssS0FBSixFQUFxQyxFQU9wQztFQUNELE9BQU9ILElBQVA7QUFDRDtBQUVNLFNBQVN1RCxTQUFULENBQW1CdkQsSUFBbkIsRUFBaUNuQyxNQUFqQyxFQUFrRDtFQUN2RCxJQUFJc0MsS0FBSixFQUFxQyxFQUtwQztFQUNELE9BQU9ILElBQVA7QUFDRDtBQUVNLFNBQVN3RCxXQUFULENBQXFCeEQsSUFBckIsRUFBNEM7RUFDakQsT0FBT0EsSUFBSSxLQUFLZ0QsUUFBVGhELElBQXFCQSxJQUFJLENBQUNxRCxVQUFMckQsQ0FBZ0JnRCxRQUFRLEdBQUcsR0FBM0JoRCxDQUE1QjtBQUNEO0FBRU0sU0FBU3lELFdBQVQsQ0FBcUJ6RCxJQUFyQixFQUEyQztFQUNoRDtFQUNBLE9BQU9tRCxhQUFhLENBQUNuRCxJQUFELEVBQU9nRCxRQUFQLENBQXBCO0FBQ0Q7QUFFTSxTQUFTVSxXQUFULENBQXFCMUQsSUFBckIsRUFBMkM7RUFDaEQsT0FBT0EsSUFBSSxDQUFDdkssS0FBTHVLLENBQVdnRCxRQUFRLENBQUM5UCxNQUFwQjhNLEtBQStCLEdBQXRDO0FBQ0QsQ0FFRDs7O0FBR08sU0FBUzJELFVBQVQsQ0FBb0J2TCxHQUFwQixFQUEwQztFQUMvQyxJQUFJQSxHQUFHLENBQUNpTCxVQUFKakwsQ0FBZSxHQUFmQSxDQUFKLEVBQXlCLE9BQU8sSUFBUDtFQUN6QixJQUFJO0lBQ0Y7SUFDQSxNQUFNd0wsY0FBYyxHQUFHLCtCQUF2QjtJQUNBLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxHQUFKLENBQVExTCxHQUFSLEVBQWF3TCxjQUFiLENBQWpCO0lBQ0EsT0FBT0MsUUFBUSxDQUFDRSxNQUFURixLQUFvQkQsY0FBcEJDLElBQXNDTCxXQUFXLENBQUNLLFFBQVEsQ0FBQ3pFLFFBQVYsQ0FBeEQ7RUFDRCxDQUFDLFFBQU9OLENBQVAsRUFBVTtJQUNWLE9BQU8sS0FBUDtFQUNEO0FBQ0Y7QUFJTSxTQUFTa0YsYUFBVCxDQUNMQyxLQURLLEVBRUxDLFVBRkssRUFHTDNKLEtBSEssRUFJTDtFQUNBLElBQUk0SixpQkFBaUIsR0FBRyxFQUF4QjtFQUVBLE1BQU1DLFlBQVksR0FBRywrQkFBY0gsS0FBZCxDQUFyQjtFQUNBLE1BQU1JLGFBQWEsR0FBR0QsWUFBWSxDQUFDRSxNQUFuQztFQUNBLE1BQU1DLGNBQWM7RUFDbEI7RUFDQSxDQUFDTCxVQUFVLEtBQUtELEtBQWZDLEdBQXVCLG1DQUFnQkUsWUFBaEIsRUFBOEJGLFVBQTlCLENBQXZCQSxHQUFtRSxFQUFwRTtFQUNBO0VBQ0E7RUFDQTNKLEtBTEY7RUFPQTRKLGlCQUFpQixHQUFHRixLQUFwQkU7RUFDQSxNQUFNSyxNQUFNLEdBQUc1RixNQUFNLENBQUNDLElBQVBELENBQVl5RixhQUFaekYsQ0FBZjtFQUVBLElBQ0UsQ0FBQzRGLE1BQU0sQ0FBQ0MsS0FBUEQsQ0FBY0UsS0FBRCxJQUFXO0lBQ3ZCLElBQUkvSyxLQUFLLEdBQUc0SyxjQUFjLENBQUNHLEtBQUQsQ0FBZEgsSUFBeUIsRUFBckM7SUFDQSxNQUFNO01BQUVJLE1BQUY7TUFBVUM7SUFBVixJQUF1QlAsYUFBYSxDQUFDSyxLQUFELENBQTFDLENBRUE7SUFDQTtJQUNBLElBQUlHLFFBQVEsR0FBSSxJQUFHRixNQUFNLEdBQUcsS0FBSCxHQUFXLEVBQUcsR0FBRUQsS0FBTSxHQUEvQztJQUNBLElBQUlFLFFBQUosRUFBYztNQUNaQyxRQUFRLEdBQUksR0FBRSxDQUFDbEwsS0FBRCxHQUFTLEdBQVQsR0FBZSxFQUFHLElBQUdrTCxRQUFTLEdBQTVDQTtJQUNEO0lBQ0QsSUFBSUYsTUFBTSxJQUFJLENBQUM1QyxLQUFLLENBQUNDLE9BQU5ELENBQWNwSSxLQUFkb0ksQ0FBZixFQUFxQ3BJLEtBQUssR0FBRyxDQUFDQSxLQUFELENBQVJBO0lBRXJDLE9BQ0UsQ0FBQ2lMLFFBQVEsSUFBSUYsS0FBSyxJQUFJSCxjQUF0QjtJQUNBO0lBQ0NKLGlCQUFpQixHQUNoQkEsaUJBQWlCLENBQUVsWSxPQUFuQmtZLENBQ0VVLFFBREZWLEVBRUVRLE1BQU0sR0FDRGhMLEtBQUQsQ0FBb0IzVCxHQUFwQixDQUF3QjhlLDZCQUF4QixFQUE4Q0MsSUFBOUMsQ0FBbUQsR0FBbkQsQ0FERSxHQUVGLG1DQUFxQnBMLEtBQXJCLENBSk53SyxLQUtLLEdBUlAsQ0FERjtFQVdELENBdkJBSyxDQURILEVBeUJFO0lBQ0FMLGlCQUFpQixHQUFHLEVBQXBCQSxDQUF1QjtJQUV2QjtJQUNBO0VBQ0Q7RUFDRCxPQUFPO0lBQ0xLLE1BREs7SUFFTFEsTUFBTSxFQUFFYjtFQUZILENBQVA7QUFJRDtBQUVELFNBQVNjLGtCQUFULENBQTRCMUssS0FBNUIsRUFBbURpSyxNQUFuRCxFQUFxRTtFQUNuRSxNQUFNVSxhQUE2QixHQUFHLEVBQXRDO0VBRUF0RyxNQUFNLENBQUNDLElBQVBELENBQVlyRSxLQUFacUUsRUFBbUJqRCxPQUFuQmlELENBQTRCTCxHQUFELElBQVM7SUFDbEMsSUFBSSxDQUFDaUcsTUFBTSxDQUFDVyxRQUFQWCxDQUFnQmpHLEdBQWhCaUcsQ0FBTCxFQUEyQjtNQUN6QlUsYUFBYSxDQUFDM0csR0FBRCxDQUFiMkcsR0FBcUIzSyxLQUFLLENBQUNnRSxHQUFELENBQTFCMkc7SUFDRDtFQUNGLENBSkR0RztFQUtBLE9BQU9zRyxhQUFQO0FBQ0QsQ0FFRDs7OztBQUlPLFNBQVNFLFdBQVQsQ0FDTEMsV0FESyxFQUVMeGMsSUFGSyxFQUdMeWMsU0FISyxFQUlHO0VBQ1I7RUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSXpCLEdBQUosQ0FBUXVCLFdBQVIsRUFBcUIsVUFBckIsQ0FBYjtFQUNBLE1BQU1HLFdBQVcsR0FDZixPQUFPM2MsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsSUFBM0IsR0FBa0MsaUNBQXFCQSxJQUFyQixDQURwQztFQUVBLElBQUk7SUFDRixNQUFNNGMsUUFBUSxHQUFHLElBQUkzQixHQUFKLENBQVEwQixXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtJQUNBRSxRQUFRLENBQUNyRyxRQUFUcUcsR0FBb0Isd0RBQTJCQSxRQUFRLENBQUNyRyxRQUFwQyxDQUFwQnFHO0lBQ0EsSUFBSUMsY0FBYyxHQUFHLEVBQXJCO0lBRUEsSUFDRSwrQkFBZUQsUUFBUSxDQUFDckcsUUFBeEIsS0FDQXFHLFFBQVEsQ0FBQ0UsWUFEVCxJQUVBTCxTQUhGLEVBSUU7TUFDQSxNQUFNL0ssS0FBSyxHQUFHLHlDQUF1QmtMLFFBQVEsQ0FBQ0UsWUFBaEMsQ0FBZDtNQUVBLE1BQU07UUFBRVgsTUFBRjtRQUFVUjtNQUFWLElBQXFCUixhQUFhLENBQ3RDeUIsUUFBUSxDQUFDckcsUUFENkIsRUFFdENxRyxRQUFRLENBQUNyRyxRQUY2QixFQUd0QzdFLEtBSHNDLENBQXhDO01BTUEsSUFBSXlLLE1BQUosRUFBWTtRQUNWVSxjQUFjLEdBQUcsaUNBQXFCO1VBQ3BDdEcsUUFBUSxFQUFFNEYsTUFEMEI7VUFFcENZLElBQUksRUFBRUgsUUFBUSxDQUFDRyxJQUZxQjtVQUdwQ3JMLEtBQUssRUFBRTBLLGtCQUFrQixDQUFDMUssS0FBRCxFQUFRaUssTUFBUjtRQUhXLENBQXJCLENBQWpCa0I7TUFLRDtJQUNGLENBRUQ7SUFDQSxNQUFNckcsWUFBWSxHQUNoQm9HLFFBQVEsQ0FBQzFCLE1BQVQwQixLQUFvQkYsSUFBSSxDQUFDeEIsTUFBekIwQixHQUNJQSxRQUFRLENBQUM1YyxJQUFUNGMsQ0FBY2hRLEtBQWRnUSxDQUFvQkEsUUFBUSxDQUFDMUIsTUFBVDBCLENBQWdCdlMsTUFBcEN1UyxDQURKQSxHQUVJQSxRQUFRLENBQUM1YyxJQUhmO0lBS0EsT0FBUXljLFNBQVMsR0FDYixDQUFDakcsWUFBRCxFQUFlcUcsY0FBYyxJQUFJckcsWUFBakMsQ0FEYSxHQUViQSxZQUZKO0VBR0QsQ0FBQyxRQUFPUCxDQUFQLEVBQVU7SUFDVixPQUFRd0csU0FBUyxHQUFHLENBQUNFLFdBQUQsQ0FBSCxHQUFtQkEsV0FBcEM7RUFDRDtBQUNGO0FBRUQsTUFBTUssZUFBZSxHQUFHQyxNQUFNLENBQUMsaUJBQUQsQ0FBOUI7QUFDTyxTQUFTQyxnQkFBVCxDQUEwQnJKLEdBQTFCLEVBQTZDO0VBQ2xELE9BQU9rQyxNQUFNLENBQUM4QixjQUFQOUIsQ0FBc0JsQyxHQUF0QmtDLEVBQTJCaUgsZUFBM0JqSCxFQUE0QyxFQUE1Q0EsQ0FBUDtBQUNEO0FBRUQsU0FBU29ILFlBQVQsQ0FBc0JsSixNQUF0QixFQUEwQzFFLEdBQTFDLEVBQW9EMkUsRUFBcEQsRUFBNkQ7RUFDM0Q7RUFDQTtFQUNBLE9BQU87SUFDTDNFLEdBQUcsRUFBRXFMLFdBQVcsQ0FBQzJCLFdBQVcsQ0FBQ3RJLE1BQU0sQ0FBQ3NDLFFBQVIsRUFBa0JoSCxHQUFsQixDQUFaLENBRFg7SUFFTDJFLEVBQUUsRUFBRUEsRUFBRSxHQUFHMEcsV0FBVyxDQUFDMkIsV0FBVyxDQUFDdEksTUFBTSxDQUFDc0MsUUFBUixFQUFrQnJDLEVBQWxCLENBQVosQ0FBZCxHQUFtREE7RUFGcEQsQ0FBUDtBQUlEO0FBc0RELE1BQU1rSix1QkFBdUIsR0FDM0I5RixVQUVBLEtBSEY7QUFLQSxNQUFNK0Ysd0JBQXdCLEdBQUcsb0JBQWpDO0FBRUEsU0FBU0MsVUFBVCxDQUFvQi9OLEdBQXBCLEVBQWlDZ08sUUFBakMsRUFBaUU7RUFDL0QsT0FBTyxLQUFLLENBQUNoTyxHQUFELEVBQU07SUFDaEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBaU8sV0FBVyxFQUFFO0VBWkcsQ0FBTixDQUFMLENBYUpySSxJQWJJLENBYUVzSSxHQUFELElBQVM7SUFDZixJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBVCxFQUFhO01BQ1gsSUFBSUgsUUFBUSxHQUFHLENBQVhBLElBQWdCRSxHQUFHLENBQUNFLE1BQUpGLElBQWMsR0FBbEMsRUFBdUM7UUFDckMsT0FBT0gsVUFBVSxDQUFDL04sR0FBRCxFQUFNZ08sUUFBUSxHQUFHLENBQWpCLENBQWpCO01BQ0Q7TUFDRCxJQUFJRSxHQUFHLENBQUNFLE1BQUpGLEtBQWUsR0FBbkIsRUFBd0I7UUFDdEI7UUFDQTtRQUNBLE1BQU0sSUFBSW5ZLEtBQUosQ0FBVStYLHdCQUFWLENBQU47TUFDRDtNQUNELE1BQU0sSUFBSS9YLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0lBQ0Q7SUFDRCxPQUFPbVksR0FBRyxDQUFDRyxJQUFKSCxFQUFQO0VBQ0QsQ0ExQk0sQ0FBUDtBQTJCRDtBQUVELFNBQVNJLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQXlDQyxjQUF6QyxFQUFrRTtFQUNoRSxPQUFPLFVBQVUsQ0FBQ0QsUUFBRCxFQUFXQyxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQWhDLENBQVYsQ0FBNkM1SixLQUE3QyxDQUFvRE4sR0FBRCxJQUFnQjtJQUN4RTtJQUNBO0lBQ0E7SUFFQSxJQUFJLENBQUNrSyxjQUFMLEVBQXFCO01BQ25CYixnQkFBZ0IsQ0FBQ3JKLEdBQUQsQ0FBaEJxSjtJQUNEO0lBQ0QsTUFBTXJKLEdBQU47RUFDRCxDQVRNLENBQVA7QUFVRDtBQUVjLE1BQU1pRSxNQUE2QjtFQU9oRDs7QUFQZ0QsSUFPaEQsQ0FJQTtFQWtCQWtHLFdBQVcsQ0FDVHpILFNBRFMsRUFFVDdFLE1BRlMsRUFHVHdDLEdBSFMsRUFJVDtJQUNFK0osWUFERjtJQUVFQyxVQUZGO0lBR0VDLEdBSEY7SUFJRUMsT0FKRjtJQUtFdGQsU0FMRjtJQU1FdWQsa0JBTkY7SUFPRXhLLEdBUEY7SUFRRXlLLFlBUkY7SUFTRUMsVUFURjtJQVVFdkosTUFWRjtJQVdFd0osT0FYRjtJQVlFdkg7RUFaRixDQUpTLEVBK0JUO0lBQUEsS0EzREZtRSxLQTJERTtJQUFBLEtBMURGN0UsUUEwREU7SUFBQSxLQXpERjdFLEtBeURFO0lBQUEsS0F4REYrTSxNQXdERTtJQUFBLEtBdkRGdEUsUUF1REU7SUFBQSxLQWxERnVFLFVBa0RFO0lBQUEsS0FoREZDLEdBZ0RFLEdBaERrQyxFQWdEbEM7SUFBQSxLQS9DRkMsR0ErQ0U7SUFBQSxLQTlDRkMsR0E4Q0U7SUFBQSxLQTdDRlgsVUE2Q0U7SUFBQSxLQTVDRlksSUE0Q0U7SUFBQSxLQTNDRi9HLE1BMkNFO0lBQUEsS0ExQ0ZnSCxRQTBDRTtJQUFBLEtBekNGQyxLQXlDRTtJQUFBLEtBeENGVCxVQXdDRTtJQUFBLEtBdkNGVSxjQXVDRTtJQUFBLEtBdENGQyxRQXNDRTtJQUFBLEtBckNGbEssTUFxQ0U7SUFBQSxLQXBDRndKLE9Bb0NFO0lBQUEsS0FuQ0Z2SCxhQW1DRTtJQUFBLEtBcUdGa0ksVUFyR0UsR0FxR1l0SyxDQUFELElBQTRCO01BQ3ZDLE1BQU14RSxLQUFLLEdBQUd3RSxDQUFDLENBQUN4RSxLQUFoQjtNQUVBLElBQUksQ0FBQ0EsS0FBTCxFQUFZO1FBQ1Y7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtVQUFFa0csUUFBRjtVQUFZN0U7UUFBWixJQUFzQixJQUE1QjtRQUNBLEtBQUswTixXQUFMLENBQ0UsY0FERixFQUVFLGlDQUFxQjtVQUFFN0ksUUFBUSxFQUFFcUUsV0FBVyxDQUFDckUsUUFBRCxDQUF2QjtVQUFtQzdFO1FBQW5DLENBQXJCLENBRkYsRUFHRSxvQkFIRjtRQUtBO01BQ0Q7TUFFRCxJQUFJLENBQUNyQixLQUFLLENBQUNnUCxHQUFYLEVBQWdCO1FBQ2Q7TUFDRDtNQUVELE1BQU07UUFBRTlQLEdBQUY7UUFBTzJFLEVBQVA7UUFBVzFSO01BQVgsSUFBdUI2TixLQUE3QjtNQUVBLE1BQU07UUFBRWtHO01BQUYsSUFBZSx3Q0FBaUJoSCxHQUFqQixDQUFyQixDQUVBO01BQ0E7TUFDQSxJQUFJLEtBQUt5UCxLQUFMLElBQWM5SyxFQUFFLEtBQUssS0FBS3VLLE1BQTFCLElBQW9DbEksUUFBUSxLQUFLLEtBQUtBLFFBQTFELEVBQW9FO1FBQ2xFO01BQ0QsQ0FFRDtNQUNBO01BQ0EsSUFBSSxLQUFLdUksSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVek8sS0FBVixDQUFsQixFQUFvQztRQUNsQztNQUNEO01BRUQsS0FBS2lQLE1BQUwsQ0FDRSxjQURGLEVBRUUvUCxHQUZGLEVBR0UyRSxFQUhGLEVBSUU2QixNQUFNLENBQUNrRCxNQUFQbEQsQ0FBYyxFQUFkQSxFQUFrQnZULE9BQWxCdVQsRUFBMkI7UUFDekJqQixPQUFPLEVBQUV0UyxPQUFPLENBQUNzUyxPQUFSdFMsSUFBbUIsS0FBSzBjLFFBRFI7UUFFekJsSyxNQUFNLEVBQUV4UyxPQUFPLENBQUN3UyxNQUFSeFMsSUFBa0IsS0FBS3lVO01BRk4sQ0FBM0JsQixDQUpGO0lBU0QsQ0F4SkMsQ0FDQTtJQUNBLEtBQUtxRixLQUFMLEdBQWEscURBQXdCN0UsU0FBeEIsQ0FBYixDQUVBO0lBQ0EsS0FBS21JLFVBQUwsR0FBa0IsRUFBbEIsQ0FDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJbkksU0FBUSxLQUFLLFNBQWpCLEVBQTRCO01BQzFCLEtBQUttSSxVQUFMLENBQWdCLEtBQUt0RCxLQUFyQixJQUE4QjtRQUM1QnRhLFNBRDRCO1FBRTVCeWUsV0FBVyxFQUFFbEIsa0JBRmU7UUFHNUJqZ0IsS0FBSyxFQUFFNmYsWUFIcUI7UUFJNUJwSyxHQUo0QjtRQUs1QjJMLE9BQU8sRUFBRXZCLFlBQVksSUFBSUEsWUFBWSxDQUFDdUIsT0FMVjtRQU01QkMsT0FBTyxFQUFFeEIsWUFBWSxJQUFJQSxZQUFZLENBQUN3QjtNQU5WLENBQTlCO0lBUUQ7SUFFRCxLQUFLZixVQUFMLENBQWdCLE9BQWhCLElBQTJCO01BQ3pCNWQsU0FBUyxFQUFFcWQsR0FEYztNQUV6Qm9CLFdBQVcsRUFBRTtJQUZZLENBQTNCLENBT0E7SUFDQTtJQUNBLEtBQUt4SCxNQUFMLEdBQWNELE1BQU0sQ0FBQ0MsTUFBckI7SUFFQSxLQUFLbUcsVUFBTCxHQUFrQkEsVUFBbEI7SUFDQSxLQUFLM0gsUUFBTCxHQUFnQkEsU0FBaEI7SUFDQSxLQUFLN0UsS0FBTCxHQUFhQSxNQUFiLENBQ0E7SUFDQTtJQUNBLEtBQUsrTSxNQUFMO0lBQ0U7SUFDQSwrQkFBZWxJLFNBQWYsS0FBNEJtSixhQUFhLENBQUNDLFVBQTFDLEdBQXVEcEosU0FBdkQsR0FBa0VyQyxHQUZwRTtJQUdBLEtBQUtpRyxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUt5RSxHQUFMLEdBQVdOLFlBQVg7SUFDQSxLQUFLTyxHQUFMLEdBQVcsSUFBWDtJQUNBLEtBQUtFLFFBQUwsR0FBZ0JYLE9BQWhCLENBQ0E7SUFDQTtJQUNBLEtBQUtZLEtBQUwsR0FBYSxJQUFiO0lBRUEsS0FBS1QsVUFBTCxHQUFrQkEsVUFBbEI7SUFFQSxJQUFJakgsS0FBSixFQUFxQyxFQUlwQztJQUVELFdBQW1DLEVBMkNsQztFQUNGO0VBdUREc0ksTUFBTSxHQUFTO0lBQ2IzZ0IsTUFBTSxDQUFDNGdCLFFBQVA1Z0IsQ0FBZ0IyZ0IsTUFBaEIzZ0I7RUFDRCxDQUVEOzs7RUFHQTZnQixJQUFJLEdBQUc7SUFDTDdnQixNQUFNLENBQUM4Z0IsT0FBUDlnQixDQUFlNmdCLElBQWY3Z0I7RUFDRCxDQUVEOzs7Ozs7RUFNQXdILElBQUksQ0FBQzhJLEdBQUQsRUFBVzJFLEVBQU8sR0FBRzNFLEdBQXJCLEVBQTBCL00sT0FBMEIsR0FBRyxFQUF2RCxFQUEyRDtJQUM3RDtJQUFDLENBQUM7TUFBRStNLEdBQUY7TUFBTzJFO0lBQVAsSUFBY2lKLFlBQVksQ0FBQyxJQUFELEVBQU81TixHQUFQLEVBQVkyRSxFQUFaLENBQTNCO0lBQ0QsT0FBTyxLQUFLb0wsTUFBTCxDQUFZLFdBQVosRUFBeUIvUCxHQUF6QixFQUE4QjJFLEVBQTlCLEVBQWtDMVIsT0FBbEMsQ0FBUDtFQUNELENBRUQ7Ozs7OztFQU1BWSxPQUFPLENBQUNtTSxHQUFELEVBQVcyRSxFQUFPLEdBQUczRSxHQUFyQixFQUEwQi9NLE9BQTBCLEdBQUcsRUFBdkQsRUFBMkQ7SUFDaEU7SUFBQyxDQUFDO01BQUUrTSxHQUFGO01BQU8yRTtJQUFQLElBQWNpSixZQUFZLENBQUMsSUFBRCxFQUFPNU4sR0FBUCxFQUFZMkUsRUFBWixDQUEzQjtJQUNELE9BQU8sS0FBS29MLE1BQUwsQ0FBWSxjQUFaLEVBQTRCL1AsR0FBNUIsRUFBaUMyRSxFQUFqQyxFQUFxQzFSLE9BQXJDLENBQVA7RUFDRDtFQUVELE1BQU04YyxNQUFOLENBQ0VVLE1BREYsRUFFRXpRLEdBRkYsRUFHRTJFLEVBSEYsRUFJRTFSLE9BSkYsRUFLb0I7SUFDbEIsSUFBSSxDQUFDc1ksVUFBVSxDQUFDdkwsR0FBRCxDQUFmLEVBQXNCO01BQ3BCdFEsTUFBTSxDQUFDNGdCLFFBQVA1Z0IsQ0FBZ0JlLElBQWhCZixHQUF1QnNRLEdBQXZCdFE7TUFDQSxPQUFPLEtBQVA7SUFDRDtJQUVELElBQUlxWSxLQUFKLEVBQXFDLEVBaUJwQztJQUVELElBQUksQ0FBRTlVLE9BQUQsQ0FBaUJ5ZCxFQUF0QixFQUEwQjtNQUN4QixLQUFLakIsS0FBTCxHQUFhLEtBQWI7SUFDRCxDQUNEO0lBQ0EsSUFBSWtCLFNBQUosRUFBUTtNQUNOQyxXQUFXLENBQUNDLElBQVpELENBQWlCLGFBQWpCQTtJQUNEO0lBRUQsSUFBSSxLQUFLbEIsY0FBVCxFQUF5QjtNQUN2QixLQUFLb0Isa0JBQUwsQ0FBd0IsS0FBS3BCLGNBQTdCO0lBQ0Q7SUFFRC9LLEVBQUUsR0FBR3VHLFNBQVMsQ0FBQ3ZHLEVBQUQsRUFBSzFSLE9BQU8sQ0FBQ3dTLE1BQWIsRUFBcUIsS0FBS2lDLGFBQTFCLENBQWQvQztJQUNBLE1BQU1vTSxTQUFTLEdBQUc1RixTQUFTLENBQ3pCQyxXQUFXLENBQUN6RyxFQUFELENBQVh5RyxHQUFrQkUsV0FBVyxDQUFDM0csRUFBRCxDQUE3QnlHLEdBQW9DekcsRUFEWCxFQUV6QixLQUFLYyxNQUZvQixDQUEzQjtJQUlBLEtBQUtpSyxjQUFMLEdBQXNCL0ssRUFBdEIsQ0FFQTtJQUNBO0lBRUE7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFFMVIsT0FBRCxDQUFpQnlkLEVBQWxCLElBQXdCLEtBQUtNLGVBQUwsQ0FBcUJELFNBQXJCLENBQTVCLEVBQTZEO01BQzNELEtBQUs3QixNQUFMLEdBQWM2QixTQUFkO01BQ0F4SSxNQUFNLENBQUNDLE1BQVBELENBQWNtQyxJQUFkbkMsQ0FBbUIsaUJBQW5CQSxFQUFzQzVELEVBQXRDNEQsRUFDQTtNQUNBLEtBQUtzSCxXQUFMLENBQWlCWSxNQUFqQixFQUF5QnpRLEdBQXpCLEVBQThCMkUsRUFBOUIsRUFBa0MxUixPQUFsQztNQUNBLEtBQUtnZSxZQUFMLENBQWtCRixTQUFsQjtNQUNBLEtBQUtHLE1BQUwsQ0FBWSxLQUFLL0IsVUFBTCxDQUFnQixLQUFLdEQsS0FBckIsQ0FBWjtNQUNBdEQsTUFBTSxDQUFDQyxNQUFQRCxDQUFjbUMsSUFBZG5DLENBQW1CLG9CQUFuQkEsRUFBeUM1RCxFQUF6QzREO01BQ0EsT0FBTyxJQUFQO0lBQ0QsQ0FFRDtJQUNBO0lBQ0E7SUFDQSxNQUFNNEksS0FBSyxHQUFHLE1BQU0sS0FBS3hDLFVBQUwsQ0FBZ0J5QyxXQUFoQixFQUFwQjtJQUNBLE1BQU07TUFBRUMsVUFBVSxFQUFFQztJQUFkLElBQTJCLE1BQU0sS0FBSzNDLFVBQUwsQ0FBZ0I0QyxxQkFBdkQ7SUFFQSxJQUFJQyxNQUFNLEdBQUcsd0NBQWlCeFIsR0FBakIsQ0FBYjtJQUVBLElBQUk7TUFBRWdILFFBQUY7TUFBWTdFO0lBQVosSUFBc0JxUCxNQUExQjtJQUVBQSxNQUFNLEdBQUcsS0FBS0MsWUFBTCxDQUFrQkQsTUFBbEIsRUFBMEJMLEtBQTFCLENBQVRLO0lBRUEsSUFBSUEsTUFBTSxDQUFDeEssUUFBUHdLLEtBQW9CeEssUUFBeEIsRUFBa0M7TUFDaENBLFFBQVEsR0FBR3dLLE1BQU0sQ0FBQ3hLLFFBQWxCQTtNQUNBaEgsR0FBRyxHQUFHLGlDQUFxQndSLE1BQXJCLENBQU54UjtJQUNELENBRUQ7SUFDQTtJQUNBO0lBQ0FnSCxRQUFRLEdBQUdBLFFBQVEsR0FDZixxREFBd0JzRSxXQUFXLENBQUN0RSxRQUFELENBQW5DLENBRGUsR0FFZkEsUUFGSkEsQ0FJQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDLEtBQUswSyxRQUFMLENBQWNYLFNBQWQsQ0FBTCxFQUErQjtNQUM3Qk4sTUFBTSxHQUFHLGNBQVRBO0lBQ0Q7SUFFRCxJQUFJNUUsS0FBSyxHQUFHLHFEQUF3QjdFLFFBQXhCLENBQVo7SUFDQSxNQUFNO01BQUV6QixPQUFPLEdBQUc7SUFBWixJQUFzQnRTLE9BQTVCLENBRUE7SUFDQTtJQUNBLElBQUlpVSxVQUFVLEdBQUd2QyxFQUFqQjtJQUVBLElBQUlvRCxJQUFKLEVBQXFDO01BQ25DYixVQUFVLEdBQUcsOEJBQ1gsd0NBQWlCdkMsRUFBakIsRUFBcUJxQyxRQURWLEVBRVhtSyxLQUZXLEVBR1h2RyxRQUhXLEVBSVgwRyxRQUpXLEVBS1huUCxLQUxXLEVBTVY1TixDQUFELElBQWUsS0FBS2tkLFlBQUwsQ0FBa0I7UUFBRXpLLFFBQVEsRUFBRXpTO01BQVosQ0FBbEIsRUFBbUM0YyxLQUFuQyxFQUEwQ25LLFFBTjlDLENBQWJFO01BU0EsSUFBSUEsVUFBVSxLQUFLdkMsRUFBbkIsRUFBdUI7UUFDckIsTUFBTWdOLGFBQWEsR0FBRyxxREFDcEIsS0FBS0YsWUFBTCxDQUNFakwsTUFBTSxDQUFDa0QsTUFBUGxELENBQWMsRUFBZEEsRUFBa0JnTCxNQUFsQmhMLEVBQTBCO1VBQUVRLFFBQVEsRUFBRUU7UUFBWixDQUExQlYsQ0FERixFQUVFMkssS0FGRixFQUdFLEtBSEYsRUFJRW5LLFFBTGtCLENBQXRCLENBUUE7UUFDQTtRQUNBLElBQUltSyxLQUFLLENBQUNwRSxRQUFOb0UsQ0FBZVEsYUFBZlIsQ0FBSixFQUFtQztVQUNqQ3RGLEtBQUssR0FBRzhGLGFBQVI5RjtVQUNBN0UsUUFBUSxHQUFHMkssYUFBWDNLO1VBQ0F3SyxNQUFNLENBQUN4SyxRQUFQd0ssR0FBa0J4SyxRQUFsQndLO1VBQ0F4UixHQUFHLEdBQUcsaUNBQXFCd1IsTUFBckIsQ0FBTnhSO1FBQ0Q7TUFDRjtJQUNGO0lBQ0RrSCxVQUFVLEdBQUdpRSxTQUFTLENBQUNHLFdBQVcsQ0FBQ3BFLFVBQUQsQ0FBWixFQUEwQixLQUFLekIsTUFBL0IsQ0FBdEJ5QjtJQUVBLElBQUksK0JBQWUyRSxLQUFmLENBQUosRUFBMkI7TUFDekIsTUFBTStGLFFBQVEsR0FBRyx3Q0FBaUIxSyxVQUFqQixDQUFqQjtNQUNBLE1BQU00RSxVQUFVLEdBQUc4RixRQUFRLENBQUM1SyxRQUE1QjtNQUVBLE1BQU02SyxVQUFVLEdBQUcsK0JBQWNoRyxLQUFkLENBQW5CO01BQ0EsTUFBTWlHLFVBQVUsR0FBRyxtQ0FBZ0JELFVBQWhCLEVBQTRCL0YsVUFBNUIsQ0FBbkI7TUFDQSxNQUFNaUcsaUJBQWlCLEdBQUdsRyxLQUFLLEtBQUtDLFVBQXBDO01BQ0EsTUFBTXdCLGNBQWMsR0FBR3lFLGlCQUFpQixHQUNwQ25HLGFBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQW9CM0osS0FBcEIsQ0FEdUIsR0FFbkMsRUFGTDtNQUlBLElBQUksQ0FBQzJQLFVBQUQsSUFBZ0JDLGlCQUFpQixJQUFJLENBQUN6RSxjQUFjLENBQUNWLE1BQXpELEVBQWtFO1FBQ2hFLE1BQU1vRixhQUFhLEdBQUd4TCxNQUFNLENBQUNDLElBQVBELENBQVlxTCxVQUFVLENBQUMzRixNQUF2QjFGLEVBQStCeUwsTUFBL0J6TCxDQUNuQjhGLEtBQUQsSUFBVyxDQUFDbkssS0FBSyxDQUFDbUssS0FBRCxDQURHOUYsQ0FBdEI7UUFJQSxJQUFJd0wsYUFBYSxDQUFDbFgsTUFBZGtYLEdBQXVCLENBQTNCLEVBQThCO1VBQzVCLFVBQTJDO1lBQ3pDek4sT0FBTyxDQUFDd0MsSUFBUnhDLENBQ0csR0FDQ3dOLGlCQUFpQixHQUNaLG9CQURZLEdBRVosaUNBQ04sOEJBSkQsR0FLRyxlQUFjQyxhQUFhLENBQUNyRixJQUFkcUYsQ0FDYixJQURhQSxDQUViLDhCQVJOek47VUFVRDtVQUVELE1BQU0sSUFBSXhPLEtBQUosQ0FDSixDQUFDZ2MsaUJBQWlCLEdBQ2IsMEJBQXlCL1IsR0FBSSxvQ0FBbUNnUyxhQUFhLENBQUNyRixJQUFkcUYsQ0FDL0QsSUFEK0RBLENBRS9ELGlDQUhZLEdBSWIsOEJBQTZCbEcsVUFBVyw4Q0FBNkNELEtBQU0sS0FKaEcsSUFLRyw0Q0FDQ2tHLGlCQUFpQixHQUNiLDJCQURhLEdBRWIsc0JBQ0wsRUFWQyxDQUFOO1FBWUQ7TUFDRixDQWhDRCxNQWdDTyxJQUFJQSxpQkFBSixFQUF1QjtRQUM1QnBOLEVBQUUsR0FBRyxpQ0FDSDZCLE1BQU0sQ0FBQ2tELE1BQVBsRCxDQUFjLEVBQWRBLEVBQWtCb0wsUUFBbEJwTCxFQUE0QjtVQUMxQlEsUUFBUSxFQUFFc0csY0FBYyxDQUFDVixNQURDO1VBRTFCekssS0FBSyxFQUFFMEssa0JBQWtCLENBQUMxSyxLQUFELEVBQVFtTCxjQUFjLENBQUNsQixNQUF2QjtRQUZDLENBQTVCNUYsQ0FERyxDQUFMN0I7TUFNRCxDQVBNLE1BT0E7UUFDTDtRQUNBNkIsTUFBTSxDQUFDa0QsTUFBUGxELENBQWNyRSxLQUFkcUUsRUFBcUJzTCxVQUFyQnRMO01BQ0Q7SUFDRjtJQUVEK0IsTUFBTSxDQUFDQyxNQUFQRCxDQUFjbUMsSUFBZG5DLENBQW1CLGtCQUFuQkEsRUFBdUM1RCxFQUF2QzREO0lBRUEsSUFBSTtNQUNGLE1BQU0ySixTQUFTLEdBQUcsTUFBTSxLQUFLQyxZQUFMLENBQ3RCdEcsS0FEc0IsRUFFdEI3RSxRQUZzQixFQUd0QjdFLEtBSHNCLEVBSXRCd0MsRUFKc0IsRUFLdEJZLE9BTHNCLENBQXhCO01BT0EsSUFBSTtRQUFFZixLQUFGO1FBQVMzVixLQUFUO1FBQWdCb2hCLE9BQWhCO1FBQXlCQztNQUF6QixJQUFxQ2dDLFNBQXpDLENBRUE7TUFDQSxJQUNFLENBQUNqQyxPQUFPLElBQUlDLE9BQVosS0FDQXJoQixLQURBLElBRUNBLEtBQUQsQ0FBZXVqQixTQUZmLElBR0N2akIsS0FBRCxDQUFldWpCLFNBQWYsQ0FBeUJDLFlBSjNCLEVBS0U7UUFDQSxNQUFNQyxXQUFXLEdBQUl6akIsS0FBRCxDQUFldWpCLFNBQWYsQ0FBeUJDLFlBQTdDLENBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSUMsV0FBVyxDQUFDckgsVUFBWnFILENBQXVCLEdBQXZCQSxDQUFKLEVBQWlDO1VBQy9CLE1BQU1DLFVBQVUsR0FBRyx3Q0FBaUJELFdBQWpCLENBQW5CO1VBQ0EsS0FBS2IsWUFBTCxDQUFrQmMsVUFBbEIsRUFBOEJwQixLQUE5QjtVQUVBLElBQUlBLEtBQUssQ0FBQ3BFLFFBQU5vRSxDQUFlb0IsVUFBVSxDQUFDdkwsUUFBMUJtSyxDQUFKLEVBQXlDO1lBQ3ZDLE9BQU8sS0FBS3BCLE1BQUwsQ0FBWVUsTUFBWixFQUFvQjZCLFdBQXBCLEVBQWlDQSxXQUFqQyxFQUE4Q3JmLE9BQTlDLENBQVA7VUFDRDtRQUNGO1FBRUR2RCxNQUFNLENBQUM0Z0IsUUFBUDVnQixDQUFnQmUsSUFBaEJmLEdBQXVCNGlCLFdBQXZCNWlCO1FBQ0EsT0FBTyxJQUFJOGlCLE9BQUosQ0FBWSxNQUFNLENBQUUsQ0FBcEIsQ0FBUDtNQUNEO01BRURqSyxNQUFNLENBQUNDLE1BQVBELENBQWNtQyxJQUFkbkMsQ0FBbUIscUJBQW5CQSxFQUEwQzVELEVBQTFDNEQ7TUFDQSxLQUFLc0gsV0FBTCxDQUNFWSxNQURGLEVBRUV6USxHQUZGLEVBR0VrTCxTQUFTLENBQUN2RyxFQUFELEVBQUsxUixPQUFPLENBQUN3UyxNQUFiLEVBQXFCLEtBQUtpQyxhQUExQixDQUhYLEVBSUV6VSxPQUpGO01BT0EsVUFBMkM7UUFDekMsTUFBTXdmLE9BQVksR0FBRyxLQUFLdEQsVUFBTCxDQUFnQixPQUFoQixFQUF5QjVkLFNBQTlDO1FBQ0U3QixNQUFELENBQWdCZ2pCLElBQWhCLENBQXFCQyxhQUFyQixHQUNDRixPQUFPLENBQUN6SSxlQUFSeUksS0FBNEJBLE9BQU8sQ0FBQ3hJLG1CQUFwQ3dJLElBQ0EsQ0FBRVAsU0FBUyxDQUFDM2dCLFNBQVgsQ0FBNkJ5WSxlQUYvQjtNQUdGO01BRUQsTUFBTSxLQUFLM0YsR0FBTCxDQUFTd0gsS0FBVCxFQUFnQjdFLFFBQWhCLEVBQTJCN0UsS0FBM0IsRUFBa0M0TyxTQUFsQyxFQUE2Q21CLFNBQTdDLEVBQXdEdE4sS0FBeEQsQ0FDSFUsQ0FBRCxJQUFPO1FBQ0wsSUFBSUEsQ0FBQyxDQUFDd0YsU0FBTixFQUFpQnRHLEtBQUssR0FBR0EsS0FBSyxJQUFJYyxDQUFqQmQsQ0FBakIsS0FDSyxNQUFNYyxDQUFOO01BQ04sQ0FKRyxDQUFOO01BT0EsSUFBSWQsS0FBSixFQUFXO1FBQ1QrRCxNQUFNLENBQUNDLE1BQVBELENBQWNtQyxJQUFkbkMsQ0FBbUIsa0JBQW5CQSxFQUF1Qy9ELEtBQXZDK0QsRUFBOEN3SSxTQUE5Q3hJO1FBQ0EsTUFBTS9ELEtBQU47TUFDRDtNQUVELElBQUl1RCxLQUFKLEVBQTJDLEVBSTFDO01BRUQsSUFBSUEsS0FBSixFQUFxQyxFQUlwQztNQUNEUSxNQUFNLENBQUNDLE1BQVBELENBQWNtQyxJQUFkbkMsQ0FBbUIscUJBQW5CQSxFQUEwQzVELEVBQTFDNEQ7TUFFQSxPQUFPLElBQVA7SUFDRCxDQUFDLFFBQU9qRSxHQUFQLEVBQVk7TUFDWixJQUFJQSxHQUFHLENBQUN3RyxTQUFSLEVBQW1CO1FBQ2pCLE9BQU8sS0FBUDtNQUNEO01BQ0QsTUFBTXhHLEdBQU47SUFDRDtFQUNGO0VBRUR1TCxXQUFXLENBQ1RZLE1BRFMsRUFFVHpRLEdBRlMsRUFHVDJFLEVBSFMsRUFJVDFSLE9BQTBCLEdBQUcsRUFKcEIsRUFLSDtJQUNOLFVBQTJDO01BQ3pDLElBQUksT0FBT3ZELE1BQU0sQ0FBQzhnQixPQUFkLEtBQTBCLFdBQTlCLEVBQTJDO1FBQ3pDak0sT0FBTyxDQUFDQyxLQUFSRCxDQUFlLDJDQUFmQTtRQUNBO01BQ0Q7TUFFRCxJQUFJLE9BQU83VSxNQUFNLENBQUM4Z0IsT0FBUDlnQixDQUFlK2dCLE1BQWYvZ0IsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtRQUNqRDZVLE9BQU8sQ0FBQ0MsS0FBUkQsQ0FBZSwyQkFBMEJrTSxNQUFPLG1CQUFoRGxNO1FBQ0E7TUFDRDtJQUNGO0lBRUQsSUFBSWtNLE1BQU0sS0FBSyxXQUFYQSxJQUEwQix5QkFBYTlMLEVBQTNDLEVBQStDO01BQzdDLEtBQUtnTCxRQUFMLEdBQWdCMWMsT0FBTyxDQUFDc1MsT0FBeEI7TUFDQSxNQUFNLENBQUNpTCxPQUFQLENBQWVDLE1BQWYsRUFDRTtRQUNFelEsR0FERjtRQUVFMkUsRUFGRjtRQUdFMVIsT0FIRjtRQUlFNmMsR0FBRyxFQUFFO01BSlAsQ0FERjtNQU9FO01BQ0E7TUFDQTtNQUNBLEVBVkYsRUFXRW5MLEVBWEY7SUFhRDtFQUNGO0VBRUQsTUFBTWlPLG9CQUFOLENBQ0V0TyxHQURGLEVBRUUwQyxRQUZGLEVBR0U3RSxLQUhGLEVBSUV3QyxFQUpGLEVBS0VrTyxhQUxGLEVBTTZCO0lBQzNCLElBQUl2TyxHQUFHLENBQUN3RyxTQUFSLEVBQW1CO01BQ2pCO01BQ0EsTUFBTXhHLEdBQU47SUFDRDtJQUVELElBQUltSixlQUFlLElBQUluSixHQUFuQm1KLElBQTBCb0YsYUFBOUIsRUFBNkM7TUFDM0N0SyxNQUFNLENBQUNDLE1BQVBELENBQWNtQyxJQUFkbkMsQ0FBbUIsa0JBQW5CQSxFQUF1Q2pFLEdBQXZDaUUsRUFBNEM1RCxFQUE1QzRELEVBRUE7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBN1ksTUFBTSxDQUFDNGdCLFFBQVA1Z0IsQ0FBZ0JlLElBQWhCZixHQUF1QmlWLEVBQXZCalYsQ0FFQTtNQUNBO01BQ0EsTUFBTW1iLHNCQUFzQixFQUE1QjtJQUNEO0lBRUQsSUFBSTtNQUNGLElBQUl0WixTQUFKO01BQ0EsSUFBSXllLFdBQUo7TUFDQSxJQUFJbmhCLEtBQUo7TUFDQSxNQUFNaWtCLE1BQU0sR0FBR3hPLEdBQUcsQ0FBQzJFLE9BQUozRSxLQUFnQndKLHdCQUEvQjtNQUVBLElBQUlnRixNQUFKLEVBQVk7UUFDVixJQUFJO1VBQ0YsSUFBSUMsR0FBSjtVQUNDLENBQUM7WUFBRUMsSUFBSSxFQUFFemhCLFNBQVI7WUFBbUJ5ZSxXQUFuQjtZQUFnQytDO1VBQWhDLElBQXdDLE1BQU0sS0FBS0UsY0FBTCxDQUM5QyxNQUQ4QyxDQUEvQyxFQUlEO1VBQ0E7VUFDQSxJQUFJRixHQUFHLElBQUlBLEdBQUcsQ0FBQzlDLE9BQWYsRUFBd0I7WUFDdEJwaEIsS0FBSyxHQUFHLE1BQU0sS0FBS3FrQixjQUFMLENBQ1osS0FBS3ZFLFVBQUwsQ0FBZ0J3RSxXQUFoQixDQUE0QixNQUE1QixFQUFvQyxNQUFwQyxFQUE0QyxJQUE1QyxFQUFrRCxLQUFLMU4sTUFBdkQsQ0FEWSxDQUFkNVc7VUFHRDtRQUNGLENBQUMsUUFBT3VrQixJQUFQLEVBQWEsQ0FDYjtRQUFBO01BRUg7TUFFRCxJQUNFLE9BQU83aEIsU0FBUCxLQUFzQixXQUF0QixJQUNBLE9BQU95ZSxXQUFQLEtBQXdCLFdBRjFCLEVBR0U7UUFDQTtRQUFDLENBQUM7VUFBRWdELElBQUksRUFBRXpoQixTQUFSO1VBQW1CeWU7UUFBbkIsSUFBbUMsTUFBTSxLQUFLaUQsY0FBTCxDQUN6QyxTQUR5QyxDQUExQztNQUdGO01BRUQsTUFBTWYsU0FBMkIsR0FBRztRQUNsQ3JqQixLQURrQztRQUVsQzBDLFNBRmtDO1FBR2xDeWUsV0FIa0M7UUFJbEMxTCxHQUFHLEVBQUV3TyxNQUFNLEdBQUdwUSxTQUFILEdBQWU0QixHQUpRO1FBS2xDRSxLQUFLLEVBQUVzTyxNQUFNLEdBQUdwUSxTQUFILEdBQWU0QjtNQUxNLENBQXBDO01BUUEsSUFBSSxDQUFDNE4sU0FBUyxDQUFDcmpCLEtBQWYsRUFBc0I7UUFDcEIsSUFBSTtVQUNGcWpCLFNBQVMsQ0FBQ3JqQixLQUFWcWpCLEdBQWtCLE1BQU0sS0FBS2xJLGVBQUwsQ0FBcUJ6WSxTQUFyQixFQUFnQztZQUN0RCtTLEdBRHNEO1lBRXREMEMsUUFGc0Q7WUFHdEQ3RTtVQUhzRCxDQUFoQyxDQUF4QitQO1FBS0QsQ0FBQyxRQUFPbUIsTUFBUCxFQUFlO1VBQ2Y5TyxPQUFPLENBQUNDLEtBQVJELENBQWMseUNBQWRBLEVBQXlEOE8sTUFBekQ5TztVQUNBMk4sU0FBUyxDQUFDcmpCLEtBQVZxakIsR0FBa0IsRUFBbEJBO1FBQ0Q7TUFDRjtNQUVELE9BQU9BLFNBQVA7SUFDRCxDQUFDLFFBQU9vQixZQUFQLEVBQXFCO01BQ3JCLE9BQU8sS0FBS1Ysb0JBQUwsQ0FBMEJVLFlBQTFCLEVBQXdDdE0sUUFBeEMsRUFBa0Q3RSxLQUFsRCxFQUF5RHdDLEVBQXpELEVBQTZELElBQTdELENBQVA7SUFDRDtFQUNGO0VBRUQsTUFBTXdOLFlBQU4sQ0FDRXRHLEtBREYsRUFFRTdFLFFBRkYsRUFHRTdFLEtBSEYsRUFJRXdDLEVBSkYsRUFLRVksT0FBZ0IsR0FBRyxLQUxyQixFQU02QjtJQUMzQixJQUFJO01BQ0YsTUFBTWdPLGVBQWUsR0FBRyxLQUFLcEUsVUFBTCxDQUFnQnRELEtBQWhCLENBQXhCO01BRUEsSUFBSXRHLE9BQU8sSUFBSWdPLGVBQVhoTyxJQUE4QixLQUFLc0csS0FBTCxLQUFlQSxLQUFqRCxFQUF3RDtRQUN0RCxPQUFPMEgsZUFBUDtNQUNEO01BRUQsTUFBTXJCLFNBQTJCLEdBQUdxQixlQUFlLEdBQy9DQSxlQUQrQyxHQUUvQyxNQUFNLEtBQUtOLGNBQUwsQ0FBb0JwSCxLQUFwQixFQUEyQmpHLElBQTNCLENBQWlDc0ksR0FBRCxLQUFVO1FBQzlDM2MsU0FBUyxFQUFFMmMsR0FBRyxDQUFDOEUsSUFEK0I7UUFFOUNoRCxXQUFXLEVBQUU5QixHQUFHLENBQUM4QixXQUY2QjtRQUc5Q0MsT0FBTyxFQUFFL0IsR0FBRyxDQUFDNkUsR0FBSjdFLENBQVErQixPQUg2QjtRQUk5Q0MsT0FBTyxFQUFFaEMsR0FBRyxDQUFDNkUsR0FBSjdFLENBQVFnQztNQUo2QixDQUFWLENBQWhDLENBRlY7TUFTQSxNQUFNO1FBQUUzZSxTQUFGO1FBQWEwZSxPQUFiO1FBQXNCQztNQUF0QixJQUFrQ2dDLFNBQXhDO01BRUEsVUFBMkM7UUFDekMsTUFBTTtVQUFFc0I7UUFBRixJQUF5QkMsbUJBQU8sQ0FBQyxvRUFBRCxDQUF0QztRQUNBLElBQUksQ0FBQ0Qsa0JBQWtCLENBQUNqaUIsU0FBRCxDQUF2QixFQUFvQztVQUNsQyxNQUFNLElBQUl3RSxLQUFKLENBQ0gseURBQXdEaVIsUUFBUyxHQUQ5RCxDQUFOO1FBR0Q7TUFDRjtNQUVELElBQUl1SCxRQUFKO01BRUEsSUFBSTBCLE9BQU8sSUFBSUMsT0FBZixFQUF3QjtRQUN0QjNCLFFBQVEsR0FBRyxLQUFLSSxVQUFMLENBQWdCd0UsV0FBaEIsQ0FDVCxpQ0FBcUI7VUFBRW5NLFFBQUY7VUFBWTdFO1FBQVosQ0FBckIsQ0FEUyxFQUVUbUosV0FBVyxDQUFDM0csRUFBRCxDQUZGLEVBR1RzTCxPQUhTLEVBSVQsS0FBS3hLLE1BSkksQ0FBWDhJO01BTUQ7TUFFRCxNQUFNMWYsS0FBSyxHQUFHLE1BQU0sS0FBSzZrQixRQUFMLENBQWdDLE1BQ2xEekQsT0FBTyxHQUNILEtBQUtpRCxjQUFMLENBQW9CM0UsUUFBcEIsQ0FERyxHQUVIMkIsT0FBTyxHQUNQLEtBQUt5RCxjQUFMLENBQW9CcEYsUUFBcEIsQ0FETyxHQUVQLEtBQUt2RSxlQUFMLENBQ0V6WSxTQURGO01BRUU7TUFDQTtRQUNFeVYsUUFERjtRQUVFN0UsS0FGRjtRQUdFK00sTUFBTSxFQUFFdks7TUFIVixDQUhGLENBTGMsQ0FBcEI7TUFnQkF1TixTQUFTLENBQUNyakIsS0FBVnFqQixHQUFrQnJqQixLQUFsQnFqQjtNQUNBLEtBQUsvQyxVQUFMLENBQWdCdEQsS0FBaEIsSUFBeUJxRyxTQUF6QjtNQUNBLE9BQU9BLFNBQVA7SUFDRCxDQUFDLFFBQU81TixHQUFQLEVBQVk7TUFDWixPQUFPLEtBQUtzTyxvQkFBTCxDQUEwQnRPLEdBQTFCLEVBQStCMEMsUUFBL0IsRUFBeUM3RSxLQUF6QyxFQUFnRHdDLEVBQWhELENBQVA7SUFDRDtFQUNGO0VBRUROLEdBQUcsQ0FDRHdILEtBREMsRUFFRDdFLFFBRkMsRUFHRDdFLEtBSEMsRUFJRHdDLEVBSkMsRUFLRGlQLElBTEMsRUFNYztJQUNmLEtBQUs1RSxVQUFMLEdBQWtCLEtBQWxCO0lBRUEsS0FBS25ELEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUs3RSxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUs3RSxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLK00sTUFBTCxHQUFjdkssRUFBZDtJQUNBLE9BQU8sS0FBS3VNLE1BQUwsQ0FBWTBDLElBQVosQ0FBUDtFQUNELENBRUQ7Ozs7RUFJQUMsY0FBYyxDQUFDblEsRUFBRCxFQUE2QjtJQUN6QyxLQUFLNkwsSUFBTCxHQUFZN0wsRUFBWjtFQUNEO0VBRURzTixlQUFlLENBQUNyTSxFQUFELEVBQXNCO0lBQ25DLElBQUksQ0FBQyxLQUFLdUssTUFBVixFQUFrQixPQUFPLEtBQVA7SUFDbEIsTUFBTSxDQUFDNEUsWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUs3RSxNQUFMLENBQVk4RSxLQUFaLENBQWtCLEdBQWxCLENBQWhDO0lBQ0EsTUFBTSxDQUFDQyxZQUFELEVBQWVDLE9BQWYsSUFBMEJ2UCxFQUFFLENBQUNxUCxLQUFIclAsQ0FBUyxHQUFUQSxDQUFoQyxDQUVBO0lBQ0EsSUFBSXVQLE9BQU8sSUFBSUosWUFBWSxLQUFLRyxZQUE1QkMsSUFBNENILE9BQU8sS0FBS0csT0FBNUQsRUFBcUU7TUFDbkUsT0FBTyxJQUFQO0lBQ0QsQ0FFRDtJQUNBLElBQUlKLFlBQVksS0FBS0csWUFBckIsRUFBbUM7TUFDakMsT0FBTyxLQUFQO0lBQ0QsQ0FFRDtJQUNBO0lBQ0E7SUFDQTtJQUNBLE9BQU9GLE9BQU8sS0FBS0csT0FBbkI7RUFDRDtFQUVEakQsWUFBWSxDQUFDdE0sRUFBRCxFQUFtQjtJQUM3QixNQUFNLEdBQUc2SSxJQUFILElBQVc3SSxFQUFFLENBQUNxUCxLQUFIclAsQ0FBUyxHQUFUQSxDQUFqQixDQUNBO0lBQ0EsSUFBSTZJLElBQUksS0FBSyxFQUFiLEVBQWlCO01BQ2Y5ZCxNQUFNLENBQUNvVyxRQUFQcFcsQ0FBZ0IsQ0FBaEJBLEVBQW1CLENBQW5CQTtNQUNBO0lBQ0QsQ0FFRDtJQUNBLE1BQU15a0IsSUFBSSxHQUFHdmtCLFFBQVEsQ0FBQ3drQixjQUFUeGtCLENBQXdCNGQsSUFBeEI1ZCxDQUFiO0lBQ0EsSUFBSXVrQixJQUFKLEVBQVU7TUFDUkEsSUFBSSxDQUFDRSxjQUFMRjtNQUNBO0lBQ0QsQ0FDRDtJQUNBO0lBQ0EsTUFBTUcsTUFBTSxHQUFHMWtCLFFBQVEsQ0FBQzJrQixpQkFBVDNrQixDQUEyQjRkLElBQTNCNWQsRUFBaUMsQ0FBakNBLENBQWY7SUFDQSxJQUFJMGtCLE1BQUosRUFBWTtNQUNWQSxNQUFNLENBQUNELGNBQVBDO0lBQ0Q7RUFDRjtFQUVENUMsUUFBUSxDQUFDeEMsTUFBRCxFQUEwQjtJQUNoQyxPQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0VBQ0Q7RUFFRHVDLFlBQVksQ0FBQ2MsVUFBRCxFQUF3QnBCLEtBQXhCLEVBQXlDcUQsYUFBYSxHQUFHLElBQXpELEVBQStEO0lBQ3pFLE1BQU07TUFBRXhOO0lBQUYsSUFBZXVMLFVBQXJCO0lBQ0EsTUFBTWtDLGFBQWEsR0FBRyxxREFDcEIsOENBQW9CRCxhQUFhLEdBQUdsSixXQUFXLENBQUN0RSxRQUFELENBQWQsR0FBNEJBLFFBQTdELENBRG9CLENBQXRCO0lBSUEsSUFBSXlOLGFBQWEsS0FBSyxNQUFsQkEsSUFBNEJBLGFBQWEsS0FBSyxTQUFsRCxFQUE2RDtNQUMzRCxPQUFPbEMsVUFBUDtJQUNELENBRUQ7SUFDQSxJQUFJLENBQUNwQixLQUFLLENBQUNwRSxRQUFOb0UsQ0FBZXNELGFBQWZ0RCxDQUFMLEVBQXFDO01BQ25DO01BQ0FBLEtBQUssQ0FBQ3VELElBQU52RCxDQUFZNkIsSUFBRCxJQUFVO1FBQ25CLElBQ0UsK0JBQWVBLElBQWYsS0FDQSwrQkFBY0EsSUFBZCxFQUFvQjJCLEVBQXBCLENBQXVCQyxJQUF2QixDQUE0QkgsYUFBNUIsQ0FGRixFQUdFO1VBQ0FsQyxVQUFVLENBQUN2TCxRQUFYdUwsR0FBc0JpQyxhQUFhLEdBQUduSixXQUFXLENBQUMySCxJQUFELENBQWQsR0FBdUJBLElBQTFEVDtVQUNBLE9BQU8sSUFBUDtRQUNEO01BQ0YsQ0FSRHBCO0lBU0Q7SUFDRCxPQUFPb0IsVUFBUDtFQUNELENBRUQ7Ozs7OztFQU1BLE1BQU05TixRQUFOLENBQ0V6RSxHQURGLEVBRUVrUCxNQUFjLEdBQUdsUCxHQUZuQixFQUdFL00sT0FBd0IsR0FBRyxFQUg3QixFQUlpQjtJQUNmLElBQUl1ZSxNQUFNLEdBQUcsd0NBQWlCeFIsR0FBakIsQ0FBYjtJQUVBLElBQUk7TUFBRWdIO0lBQUYsSUFBZXdLLE1BQW5CO0lBRUEsSUFBSXpKLEtBQUosRUFBcUMsRUFrQnBDO0lBRUQsTUFBTW9KLEtBQUssR0FBRyxNQUFNLEtBQUt4QyxVQUFMLENBQWdCeUMsV0FBaEIsRUFBcEI7SUFFQUksTUFBTSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JELE1BQWxCLEVBQTBCTCxLQUExQixDQUFUSztJQUVBLElBQUlBLE1BQU0sQ0FBQ3hLLFFBQVB3SyxLQUFvQnhLLFFBQXhCLEVBQWtDO01BQ2hDQSxRQUFRLEdBQUd3SyxNQUFNLENBQUN4SyxRQUFsQkE7TUFDQWhILEdBQUcsR0FBRyxpQ0FBcUJ3UixNQUFyQixDQUFOeFI7SUFDRCxDQUVEO0lBQ0EsVUFBMkM7TUFDekM7SUFDRDtJQUVELE1BQU02TCxLQUFLLEdBQUcscURBQXdCN0UsUUFBeEIsQ0FBZDtJQUNBLE1BQU13TCxPQUFPLENBQUNuSSxHQUFSbUksQ0FBWSxDQUNoQixLQUFLN0QsVUFBTCxDQUFnQmtHLFlBQWhCLENBQ0U3VSxHQURGLEVBRUVrUCxNQUZGLEVBR0UsT0FBT2pjLE9BQU8sQ0FBQ3dTLE1BQWYsS0FBMEIsV0FBMUIsR0FBd0N4UyxPQUFPLENBQUN3UyxNQUFoRCxHQUF5RCxLQUFLQSxNQUhoRSxFQUlFLEtBQUtpQyxhQUpQLENBRGdCLEVBT2hCLEtBQUtpSCxVQUFMLENBQWdCMWIsT0FBTyxDQUFDd1UsUUFBUnhVLEdBQW1CLFVBQW5CQSxHQUFnQyxVQUFoRCxFQUE0RDRZLEtBQTVELENBUGdCLENBQVoyRyxDQUFOO0VBU0Q7RUFFRCxNQUFNUyxjQUFOLENBQXFCcEgsS0FBckIsRUFBNEQ7SUFDMUQsSUFBSWYsU0FBUyxHQUFHLEtBQWhCO0lBQ0EsTUFBTWdLLE1BQU0sR0FBSSxLQUFLeEYsR0FBTCxHQUFXLE1BQU07TUFDL0J4RSxTQUFTLEdBQUcsSUFBWkE7SUFDRCxDQUZEO0lBSUEsTUFBTWlLLGVBQWUsR0FBRyxNQUFNLEtBQUtwRyxVQUFMLENBQWdCcUcsUUFBaEIsQ0FBeUJuSixLQUF6QixDQUE5QjtJQUVBLElBQUlmLFNBQUosRUFBZTtNQUNiLE1BQU10RyxLQUFVLEdBQUcsSUFBSXpPLEtBQUosQ0FDaEIsd0NBQXVDOFYsS0FBTSxHQUQ3QixDQUFuQjtNQUdBckgsS0FBSyxDQUFDc0csU0FBTnRHLEdBQWtCLElBQWxCQTtNQUNBLE1BQU1BLEtBQU47SUFDRDtJQUVELElBQUlzUSxNQUFNLEtBQUssS0FBS3hGLEdBQXBCLEVBQXlCO01BQ3ZCLEtBQUtBLEdBQUwsR0FBVyxJQUFYO0lBQ0Q7SUFFRCxPQUFPeUYsZUFBUDtFQUNEO0VBRURyQixRQUFRLENBQUl1QixFQUFKLEVBQXNDO0lBQzVDLElBQUluSyxTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNZ0ssTUFBTSxHQUFHLE1BQU07TUFDbkJoSyxTQUFTLEdBQUcsSUFBWkE7SUFDRCxDQUZEO0lBR0EsS0FBS3dFLEdBQUwsR0FBV3dGLE1BQVg7SUFDQSxPQUFPRyxFQUFFLEdBQUdyUCxJQUFMcVAsQ0FBV3JCLElBQUQsSUFBVTtNQUN6QixJQUFJa0IsTUFBTSxLQUFLLEtBQUt4RixHQUFwQixFQUF5QjtRQUN2QixLQUFLQSxHQUFMLEdBQVcsSUFBWDtNQUNEO01BRUQsSUFBSXhFLFNBQUosRUFBZTtRQUNiLE1BQU14RyxHQUFRLEdBQUcsSUFBSXZPLEtBQUosQ0FBVSxpQ0FBVixDQUFqQjtRQUNBdU8sR0FBRyxDQUFDd0csU0FBSnhHLEdBQWdCLElBQWhCQTtRQUNBLE1BQU1BLEdBQU47TUFDRDtNQUVELE9BQU9zUCxJQUFQO0lBQ0QsQ0FaTXFCLENBQVA7RUFhRDtFQUVEL0IsY0FBYyxDQUFDM0UsUUFBRCxFQUFvQztJQUNoRCxNQUFNO01BQUU5ZCxJQUFJLEVBQUV5a0I7SUFBUixJQUFxQixJQUFJeEosR0FBSixDQUFRNkMsUUFBUixFQUFrQjdlLE1BQU0sQ0FBQzRnQixRQUFQNWdCLENBQWdCZSxJQUFsQyxDQUEzQjtJQUNBLElBQUlzWCxLQUFKLEVBQWlFLEVBRWhFO0lBQ0QsT0FBT3VHLGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUtrQixLQUFoQixDQUFibkIsQ0FBb0MxSSxJQUFwQzBJLENBQTBDc0YsSUFBRCxJQUFVO01BQ3hELEtBQUt4RSxHQUFMLENBQVM4RixRQUFULElBQXFCdEIsSUFBckI7TUFDQSxPQUFPQSxJQUFQO0lBQ0QsQ0FITXRGLENBQVA7RUFJRDtFQUVEcUYsY0FBYyxDQUFDcEYsUUFBRCxFQUFvQztJQUNoRCxPQUFPRCxhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLa0IsS0FBaEIsQ0FBcEI7RUFDRDtFQUVEekYsZUFBZSxDQUNielksU0FEYSxFQUViNGpCLEdBRmEsRUFHQztJQUNkLE1BQU07TUFBRTVqQixTQUFTLEVBQUVxZDtJQUFiLElBQXFCLEtBQUtPLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBM0I7SUFDQSxNQUFNaUcsT0FBTyxHQUFHLEtBQUs1RixRQUFMLENBQWNaLEdBQWQsQ0FBaEI7SUFDQXVHLEdBQUcsQ0FBQ0MsT0FBSkQsR0FBY0MsT0FBZEQ7SUFDQSxPQUFPLGdDQUE0Q3ZHLEdBQTVDLEVBQWlEO01BQ3REd0csT0FEc0Q7TUFFdEQ3akIsU0FGc0Q7TUFHdERtVCxNQUFNLEVBQUUsSUFIOEM7TUFJdER5UTtJQUpzRCxDQUFqRCxDQUFQO0VBTUQ7RUFFRHJFLGtCQUFrQixDQUFDbk0sRUFBRCxFQUFtQjtJQUNuQyxJQUFJLEtBQUsySyxHQUFULEVBQWM7TUFDWi9HLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBY21DLElBQWRuQyxDQUFtQixrQkFBbkJBLEVBQXVDc0Msc0JBQXNCLEVBQTdEdEMsRUFBaUU1RCxFQUFqRTREO01BQ0EsS0FBSytHLEdBQUw7TUFDQSxLQUFLQSxHQUFMLEdBQVcsSUFBWDtJQUNEO0VBQ0Y7RUFFRDRCLE1BQU0sQ0FBQzBDLElBQUQsRUFBd0M7SUFDNUMsT0FBTyxLQUFLdkUsR0FBTCxDQUFTdUUsSUFBVCxFQUFlLEtBQUt6RSxVQUFMLENBQWdCLE9BQWhCLEVBQXlCNWQsU0FBeEMsQ0FBUDtFQUNEO0FBbjhCK0M7O0FBQTdCZ1gsTSxDQTJCWkMsTSxHQUFzQixvQjs7Ozs7Ozs7Ozs7Ozs7O3VDQzFYL0I7QUFDZSxTQUFTa0Usb0JBQVQsQ0FBOEIySSxPQUE5QixFQUF1RDtFQUNwRSxPQUFPQSxPQUFPLENBQUN4aEIsT0FBUndoQixDQUFnQixRQUFoQkEsRUFBMkJDLElBQUQsSUFBa0JDLGtCQUFrQixDQUFDRCxJQUFELENBQTlERCxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3FCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLE1BQU1HLGdCQUFnQixHQUFHLHdCQUF6QjtBQUVPLFNBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQXNDO0VBQzNDLElBQUk7SUFBRUMsSUFBRjtJQUFRQztFQUFSLElBQXFCRixNQUF6QjtFQUNBLElBQUlHLFFBQVEsR0FBR0gsTUFBTSxDQUFDRyxRQUFQSCxJQUFtQixFQUFsQztFQUNBLElBQUkxTyxRQUFRLEdBQUcwTyxNQUFNLENBQUMxTyxRQUFQME8sSUFBbUIsRUFBbEM7RUFDQSxJQUFJbEksSUFBSSxHQUFHa0ksTUFBTSxDQUFDbEksSUFBUGtJLElBQWUsRUFBMUI7RUFDQSxJQUFJdlQsS0FBSyxHQUFHdVQsTUFBTSxDQUFDdlQsS0FBUHVULElBQWdCLEVBQTVCO0VBQ0EsSUFBSUksSUFBb0IsR0FBRyxLQUEzQjtFQUVBSCxJQUFJLEdBQUdBLElBQUksR0FBR0osa0JBQWtCLENBQUNJLElBQUQsQ0FBbEJKLENBQXlCMWhCLE9BQXpCMGhCLENBQWlDLE1BQWpDQSxFQUF5QyxHQUF6Q0EsSUFBZ0QsR0FBbkQsR0FBeUQsRUFBcEVJO0VBRUEsSUFBSUQsTUFBTSxDQUFDSSxJQUFYLEVBQWlCO0lBQ2ZBLElBQUksR0FBR0gsSUFBSSxHQUFHRCxNQUFNLENBQUNJLElBQXJCQTtFQUNELENBRkQsTUFFTyxJQUFJRixRQUFKLEVBQWM7SUFDbkJFLElBQUksR0FBR0gsSUFBSSxJQUFJLENBQUNDLFFBQVEsQ0FBQ2pRLE9BQVRpUSxDQUFpQixHQUFqQkEsQ0FBRCxHQUEwQixJQUFHQSxRQUFTLEdBQXRDLEdBQTJDQSxRQUEvQyxDQUFYRTtJQUNBLElBQUlKLE1BQU0sQ0FBQ0ssSUFBWCxFQUFpQjtNQUNmRCxJQUFJLElBQUksTUFBTUosTUFBTSxDQUFDSyxJQUFyQkQ7SUFDRDtFQUNGO0VBRUQsSUFBSTNULEtBQUssSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQTlCLEVBQXdDO0lBQ3RDQSxLQUFLLEdBQUc2VCxNQUFNLENBQUNDLFdBQVcsQ0FBQ0Msc0JBQVpELENBQW1DOVQsS0FBbkM4VCxDQUFELENBQWQ5VDtFQUNEO0VBRUQsSUFBSWdVLE1BQU0sR0FBR1QsTUFBTSxDQUFDUyxNQUFQVCxJQUFrQnZULEtBQUssSUFBSyxJQUFHQSxLQUFNLEVBQXJDdVQsSUFBMkMsRUFBeEQ7RUFFQSxJQUFJRyxRQUFRLElBQUlBLFFBQVEsQ0FBQ08sTUFBVFAsQ0FBZ0IsQ0FBQyxDQUFqQkEsTUFBd0IsR0FBeEMsRUFBNkNBLFFBQVEsSUFBSSxHQUFaQTtFQUU3QyxJQUNFSCxNQUFNLENBQUNXLE9BQVBYLElBQ0MsQ0FBQyxDQUFDRyxRQUFELElBQWFMLGdCQUFnQixDQUFDWixJQUFqQlksQ0FBc0JLLFFBQXRCTCxDQUFkLEtBQWtETSxJQUFJLEtBQUssS0FGOUQsRUFHRTtJQUNBQSxJQUFJLEdBQUcsUUFBUUEsSUFBSSxJQUFJLEVBQWhCLENBQVBBO0lBQ0EsSUFBSTlPLFFBQVEsSUFBSUEsUUFBUSxDQUFDLENBQUQsQ0FBUkEsS0FBZ0IsR0FBaEMsRUFBcUNBLFFBQVEsR0FBRyxNQUFNQSxRQUFqQkE7RUFDdEMsQ0FORCxNQU1PLElBQUksQ0FBQzhPLElBQUwsRUFBVztJQUNoQkEsSUFBSSxHQUFHLEVBQVBBO0VBQ0Q7RUFFRCxJQUFJdEksSUFBSSxJQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFKQSxLQUFZLEdBQXhCLEVBQTZCQSxJQUFJLEdBQUcsTUFBTUEsSUFBYkE7RUFDN0IsSUFBSTJJLE1BQU0sSUFBSUEsTUFBTSxDQUFDLENBQUQsQ0FBTkEsS0FBYyxHQUE1QixFQUFpQ0EsTUFBTSxHQUFHLE1BQU1BLE1BQWZBO0VBRWpDblAsUUFBUSxHQUFHQSxRQUFRLENBQUNuVCxPQUFUbVQsQ0FBaUIsT0FBakJBLEVBQTBCdU8sa0JBQTFCdk8sQ0FBWEE7RUFDQW1QLE1BQU0sR0FBR0EsTUFBTSxDQUFDdGlCLE9BQVBzaUIsQ0FBZSxHQUFmQSxFQUFvQixLQUFwQkEsQ0FBVEE7RUFFQSxPQUFRLEdBQUVOLFFBQVMsR0FBRUMsSUFBSyxHQUFFOU8sUUFBUyxHQUFFbVAsTUFBTyxHQUFFM0ksSUFBSyxFQUFyRDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozt3Q0N4RUQ7QUFDQSxNQUFNOEksVUFBVSxHQUFHLHNCQUFuQjtBQUVPLFNBQVNDLGNBQVQsQ0FBd0IxSyxLQUF4QixFQUFnRDtFQUNyRCxPQUFPeUssVUFBVSxDQUFDMUIsSUFBWDBCLENBQWdCekssS0FBaEJ5SyxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFFQSxNQUFNRSxVQUFVLEdBQUcsSUFBSTlLLEdBQUosQ0FDakIsT0FBZ0MsVUFBaEMsR0FBNkMsU0FENUIsQ0FBbkIsQ0FJQTs7Ozs7O0FBTU8sU0FBUytLLGdCQUFULENBQTBCelcsR0FBMUIsRUFBdUNtTixJQUF2QyxFQUFzRDtFQUMzRCxNQUFNdUosWUFBWSxHQUFHdkosSUFBSSxHQUFHLElBQUl6QixHQUFKLENBQVF5QixJQUFSLEVBQWNxSixVQUFkLENBQUgsR0FBK0JBLFVBQXhEO0VBQ0EsTUFBTTtJQUNKeFAsUUFESTtJQUVKdUcsWUFGSTtJQUdKNEksTUFISTtJQUlKM0ksSUFKSTtJQUtKL2MsSUFMSTtJQU1Ka2IsTUFOSTtJQU9Ka0s7RUFQSSxJQVFGLElBQUluSyxHQUFKLENBQVExTCxHQUFSLEVBQWEwVyxZQUFiLENBUko7RUFTQSxJQUNFL0ssTUFBTSxLQUFLNkssVUFBVSxDQUFDN0ssTUFBdEJBLElBQ0NrSyxRQUFRLEtBQUssT0FBYkEsSUFBd0JBLFFBQVEsS0FBSyxRQUZ4QyxFQUdFO0lBQ0EsTUFBTSxJQUFJOWYsS0FBSixDQUFVLGlDQUFWLENBQU47RUFDRDtFQUNELE9BQU87SUFDTGlSLFFBREs7SUFFTDdFLEtBQUssRUFBRSx5Q0FBdUJvTCxZQUF2QixDQUZGO0lBR0w0SSxNQUhLO0lBSUwzSSxJQUpLO0lBS0wvYyxJQUFJLEVBQUVBLElBQUksQ0FBQzRNLEtBQUw1TSxDQUFXK2xCLFVBQVUsQ0FBQzdLLE1BQVg2SyxDQUFrQjFiLE1BQTdCcks7RUFMRCxDQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPLE1BQU1rbUIsY0FDYyxHQUFHO0VBQzVCQyxTQUFTLEVBQUUsS0FEaUI7RUFFNUJDLFNBQVMsRUFBRTtBQUZpQixDQUR2Qjs7QUFNQSxNQUFNQyx5QkFDYyxtQ0FDdEJILGNBRHlCO0VBRTVCSSxNQUFNLEVBQUU7QUFGb0IsRUFEdkI7O2VBTVEsQ0FBQ0MsV0FBVyxHQUFHLEtBQWYsS0FBeUI7RUFDdEMsT0FBUXBQLElBQUQsSUFBa0I7SUFDdkIsTUFBTW5CLElBQXdCLEdBQUcsRUFBakM7SUFDQSxNQUFNd1EsWUFBWSxHQUFHQyxZQUFZLENBQUNBLFlBQWJBLENBQ25CdFAsSUFEbUJzUCxFQUVuQnpRLElBRm1CeVEsRUFHbkJGLFdBQVcsR0FBR0YseUJBQUgsR0FBK0JILGNBSHZCTyxDQUFyQjtJQUtBLE1BQU1DLE9BQU8sR0FBR0QsWUFBWSxDQUFDRSxnQkFBYkYsQ0FBOEJELFlBQTlCQyxFQUE0Q3pRLElBQTVDeVEsQ0FBaEI7SUFFQSxPQUFPLENBQUNsUSxRQUFELEVBQXNDb0YsTUFBdEMsS0FBdUQ7TUFDNUQsTUFBTThCLEdBQUcsR0FBR2xILFFBQVEsSUFBSSxJQUFaQSxHQUFtQixLQUFuQkEsR0FBMkJtUSxPQUFPLENBQUNuUSxRQUFELENBQTlDO01BQ0EsSUFBSSxDQUFDa0gsR0FBTCxFQUFVO1FBQ1IsT0FBTyxLQUFQO01BQ0Q7TUFFRCxJQUFJOEksV0FBSixFQUFpQjtRQUNmLEtBQUssTUFBTTdRLEdBQVgsSUFBa0JNLElBQWxCLEVBQXdCO1VBQ3RCO1VBQ0E7VUFDQSxJQUFJLE9BQU9OLEdBQUcsQ0FBQytELElBQVgsS0FBb0IsUUFBeEIsRUFBa0M7WUFDaEMsT0FBUWdFLEdBQUcsQ0FBQzlCLE1BQUwsQ0FBb0JqRyxHQUFHLENBQUMrRCxJQUF4QixDQUFQO1VBQ0Q7UUFDRjtNQUNGO01BRUQsdUNBQVlrQyxNQUFMLEdBQWdCOEIsR0FBRyxDQUFDOUIsTUFBM0I7SUFDRCxDQWpCRDtFQWtCRCxDQTNCRDtBQTRCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUllLFNBQVNpTCxrQkFBVCxDQUNiL0UsV0FEYSxFQUVibEcsTUFGYSxFQUdiakssS0FIYSxFQUlibVYsbUJBSmEsRUFLYjFNLFFBTGEsRUFNYjtFQUNBLElBQUkyTSxpQkFLbUMsR0FBRyxFQUwxQyxDQU9BO0VBQ0FwVixLQUFLLEdBQUdxRSxNQUFNLENBQUNrRCxNQUFQbEQsQ0FBYyxFQUFkQSxFQUFrQnJFLEtBQWxCcUUsQ0FBUnJFO0VBQ0EsT0FBT0EsS0FBSyxDQUFDcVYsWUFBYjtFQUVBLElBQUlsRixXQUFXLENBQUNySCxVQUFacUgsQ0FBdUIsR0FBdkJBLENBQUosRUFBaUM7SUFDL0JpRixpQkFBaUIsR0FBRyx3Q0FBaUJqRixXQUFqQixDQUFwQmlGO0VBQ0QsQ0FGRCxNQUVPO0lBQ0wsTUFBTTtNQUNKdlEsUUFESTtNQUVKdUcsWUFGSTtNQUdKQyxJQUhJO01BSUpvSSxRQUpJO01BS0pHLElBTEk7TUFNSkYsUUFOSTtNQU9KTSxNQVBJO01BUUoxbEI7SUFSSSxJQVNGLElBQUlpYixHQUFKLENBQVE0RyxXQUFSLENBVEo7SUFXQWlGLGlCQUFpQixHQUFHO01BQ2xCdlEsUUFEa0I7TUFFbEI3RSxLQUFLLEVBQUUseUNBQXVCb0wsWUFBdkIsQ0FGVztNQUdsQkMsSUFIa0I7TUFJbEJxSSxRQUprQjtNQUtsQkQsUUFMa0I7TUFNbEJHLElBTmtCO01BT2xCSSxNQVBrQjtNQVFsQjFsQjtJQVJrQixDQUFwQjhtQjtFQVVEO0VBRUQsTUFBTUUsU0FBUyxHQUFHRixpQkFBaUIsQ0FBQ3BWLEtBQXBDO0VBQ0EsTUFBTXVWLFFBQVEsR0FBSSxHQUFFSCxpQkFBaUIsQ0FBQ3ZRLFFBQVUsR0FDOUN1USxpQkFBaUIsQ0FBQy9KLElBQWxCK0osSUFBMEIsRUFDM0IsRUFGRDtFQUdBLE1BQU1JLGlCQUFxQyxHQUFHLEVBQTlDO0VBQ0FULFlBQVksQ0FBQ0EsWUFBYkEsQ0FBMEJRLFFBQTFCUixFQUFvQ1MsaUJBQXBDVDtFQUVBLE1BQU1VLGNBQWMsR0FBR0QsaUJBQWlCLENBQUMvcEIsR0FBbEIrcEIsQ0FBdUJ4UixHQUFELElBQVNBLEdBQUcsQ0FBQytELElBQW5DeU4sQ0FBdkI7RUFFQSxJQUFJRSxtQkFBbUIsR0FBRyxZQUFZLENBQUNDLE9BQWIsQ0FDeEJKLFFBRHdCO0VBRXhCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0lBQUVLLFFBQVEsRUFBRTtFQUFaLENBUndCLENBQTFCO0VBVUEsSUFBSUMsTUFBSixDQUVBO0VBQ0EsS0FBSyxNQUFNLENBQUM3UixHQUFELEVBQU04UixVQUFOLENBQVgsSUFBZ0N6UixNQUFNLENBQUNsRCxPQUFQa0QsQ0FBZWlSLFNBQWZqUixDQUFoQyxFQUEyRDtJQUN6RCxJQUFJakYsS0FBSyxHQUFHb0ksS0FBSyxDQUFDQyxPQUFORCxDQUFjc08sVUFBZHRPLElBQTRCc08sVUFBVSxDQUFDLENBQUQsQ0FBdEN0TyxHQUE0Q3NPLFVBQXhEO0lBQ0EsSUFBSTFXLEtBQUosRUFBVztNQUNUO01BQ0E7TUFDQUEsS0FBSyxHQUFJLElBQUdBLEtBQU0sRUFBbEJBO01BQ0EsTUFBTTJXLGFBQWEsR0FBR2hCLFlBQVksQ0FBQ1ksT0FBYlosQ0FBcUIzVixLQUFyQjJWLEVBQTRCO1FBQUVhLFFBQVEsRUFBRTtNQUFaLENBQTVCYixDQUF0QjtNQUNBM1YsS0FBSyxHQUFHMlcsYUFBYSxDQUFDOUwsTUFBRCxDQUFiOEwsQ0FBc0I5QixNQUF0QjhCLENBQTZCLENBQTdCQSxDQUFSM1c7SUFDRDtJQUNEa1csU0FBUyxDQUFDdFIsR0FBRCxDQUFUc1IsR0FBaUJsVyxLQUFqQmtXO0VBQ0QsQ0FFRDtFQUNBO0VBQ0EsTUFBTVUsU0FBUyxHQUFHM1IsTUFBTSxDQUFDQyxJQUFQRCxDQUFZNEYsTUFBWjVGLENBQWxCO0VBRUEsSUFDRThRLG1CQUFtQixJQUNuQixDQUFDYSxTQUFTLENBQUN6RCxJQUFWeUQsQ0FBZ0JoUyxHQUFELElBQVN5UixjQUFjLENBQUM3SyxRQUFmNkssQ0FBd0J6UixHQUF4QnlSLENBQXhCTyxDQUZILEVBR0U7SUFDQSxLQUFLLE1BQU1oUyxHQUFYLElBQWtCZ1MsU0FBbEIsRUFBNkI7TUFDM0IsSUFBSSxFQUFFaFMsR0FBRyxJQUFJc1IsU0FBVCxDQUFKLEVBQXlCO1FBQ3ZCQSxTQUFTLENBQUN0UixHQUFELENBQVRzUixHQUFpQnJMLE1BQU0sQ0FBQ2pHLEdBQUQsQ0FBdkJzUjtNQUNEO0lBQ0Y7RUFDRjtFQUVELE1BQU1XLGlCQUFpQixHQUFHOUYsV0FBVyxDQUFDckgsVUFBWnFILENBQXVCLEdBQXZCQSxLQUErQjFILFFBQXpEO0VBRUEsSUFBSTtJQUNGb04sTUFBTSxHQUFJLEdBQUVJLGlCQUFpQixHQUFHeE4sUUFBSCxHQUFjLEVBQUcsR0FBRWlOLG1CQUFtQixDQUNqRXpMLE1BRGlFLENBRWpFLEVBRkY0TDtJQUlBLE1BQU0sQ0FBQ2hSLFFBQUQsRUFBV3dHLElBQVgsSUFBbUJ3SyxNQUFNLENBQUNoRSxLQUFQZ0UsQ0FBYSxHQUFiQSxDQUF6QjtJQUNBVCxpQkFBaUIsQ0FBQ3ZRLFFBQWxCdVEsR0FBNkJ2USxRQUE3QnVRO0lBQ0FBLGlCQUFpQixDQUFDL0osSUFBbEIrSixHQUEwQixHQUFFL0osSUFBSSxHQUFHLEdBQUgsR0FBUyxFQUFHLEdBQUVBLElBQUksSUFBSSxFQUFHLEVBQXpEK0o7SUFDQSxPQUFPQSxpQkFBaUIsQ0FBQ3BCLE1BQXpCO0VBQ0QsQ0FBQyxRQUFPN1IsR0FBUCxFQUFZO0lBQ1osSUFBSUEsR0FBRyxDQUFDMkUsT0FBSjNFLENBQVkvQixLQUFaK0IsQ0FBa0IsOENBQWxCQSxDQUFKLEVBQXVFO01BQ3JFLE1BQU0sSUFBSXZPLEtBQUosQ0FDSCx3S0FERyxDQUFOO0lBR0Q7SUFDRCxNQUFNdU8sR0FBTjtFQUNELENBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQWlULGlCQUFpQixDQUFDcFYsS0FBbEJvVixtQ0FDS3BWLEtBRHFCLEdBRXJCb1YsaUJBQWlCLENBQUNwVixLQUZHLENBQTFCb1Y7RUFLQSxPQUFPO0lBQ0xTLE1BREs7SUFFTFQ7RUFGSyxDQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklNLFNBQVNjLHNCQUFULENBQ0w5SyxZQURLLEVBRVc7RUFDaEIsTUFBTXBMLEtBQXFCLEdBQUcsRUFBOUI7RUFDQW9MLFlBQVksQ0FBQ2hLLE9BQWJnSyxDQUFxQixDQUFDaE0sS0FBRCxFQUFRNEUsR0FBUixLQUFnQjtJQUNuQyxJQUFJLE9BQU9oRSxLQUFLLENBQUNnRSxHQUFELENBQVosS0FBc0IsV0FBMUIsRUFBdUM7TUFDckNoRSxLQUFLLENBQUNnRSxHQUFELENBQUxoRSxHQUFhWixLQUFiWTtJQUNELENBRkQsTUFFTyxJQUFJd0gsS0FBSyxDQUFDQyxPQUFORCxDQUFjeEgsS0FBSyxDQUFDZ0UsR0FBRCxDQUFuQndELENBQUosRUFBK0I7TUFDcEM7TUFBRXhILEtBQUssQ0FBQ2dFLEdBQUQsQ0FBTixDQUF5QmpQLElBQXpCLENBQThCcUssS0FBOUI7SUFDRixDQUZNLE1BRUE7TUFDTFksS0FBSyxDQUFDZ0UsR0FBRCxDQUFMaEUsR0FBYSxDQUFDQSxLQUFLLENBQUNnRSxHQUFELENBQU4sRUFBdUI1RSxLQUF2QixDQUFiWTtJQUNEO0VBQ0YsQ0FSRG9MO0VBU0EsT0FBT3BMLEtBQVA7QUFDRDtBQUVELFNBQVNtVyxzQkFBVCxDQUFnQ2hNLEtBQWhDLEVBQXVEO0VBQ3JELElBQ0UsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUNDLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsQ0FBQ2lNLEtBQUssQ0FBQ2pNLEtBQUQsQ0FEcEMsSUFFQSxPQUFPQSxLQUFQLEtBQWlCLFNBSG5CLEVBSUU7SUFDQSxPQUFPMEosTUFBTSxDQUFDMUosS0FBRCxDQUFiO0VBQ0QsQ0FORCxNQU1PO0lBQ0wsT0FBTyxFQUFQO0VBQ0Q7QUFDRjtBQUVNLFNBQVM0SixzQkFBVCxDQUNMc0MsUUFESyxFQUVZO0VBQ2pCLE1BQU01TCxNQUFNLEdBQUcsSUFBSTZMLGVBQUosRUFBZjtFQUNBalMsTUFBTSxDQUFDbEQsT0FBUGtELENBQWVnUyxRQUFmaFMsRUFBeUJqRCxPQUF6QmlELENBQWlDLENBQUMsQ0FBQ0wsR0FBRCxFQUFNNUUsS0FBTixDQUFELEtBQWtCO0lBQ2pELElBQUlvSSxLQUFLLENBQUNDLE9BQU5ELENBQWNwSSxLQUFkb0ksQ0FBSixFQUEwQjtNQUN4QnBJLEtBQUssQ0FBQ2dDLE9BQU5oQyxDQUFlNUksSUFBRCxJQUFVaVUsTUFBTSxDQUFDOEwsTUFBUDlMLENBQWN6RyxHQUFkeUcsRUFBbUIwTCxzQkFBc0IsQ0FBQzNmLElBQUQsQ0FBekNpVSxDQUF4QnJMO0lBQ0QsQ0FGRCxNQUVPO01BQ0xxTCxNQUFNLENBQUN2SSxHQUFQdUksQ0FBV3pHLEdBQVh5RyxFQUFnQjBMLHNCQUFzQixDQUFDL1csS0FBRCxDQUF0Q3FMO0lBQ0Q7RUFDRixDQU5EcEc7RUFPQSxPQUFPb0csTUFBUDtBQUNEO0FBRU0sU0FBU2xELE1BQVQsQ0FDTHZKLE1BREssRUFFTCxHQUFHd1ksZ0JBRkUsRUFHWTtFQUNqQkEsZ0JBQWdCLENBQUNwVixPQUFqQm9WLENBQTBCcEwsWUFBRCxJQUFrQjtJQUN6QzVELEtBQUssQ0FBQ2lQLElBQU5qUCxDQUFXNEQsWUFBWSxDQUFDOUcsSUFBYjhHLEVBQVg1RCxFQUFnQ3BHLE9BQWhDb0csQ0FBeUN4RCxHQUFELElBQVNoRyxNQUFNLENBQUM0RCxNQUFQNUQsQ0FBY2dHLEdBQWRoRyxDQUFqRHdKO0lBQ0E0RCxZQUFZLENBQUNoSyxPQUFiZ0ssQ0FBcUIsQ0FBQ2hNLEtBQUQsRUFBUTRFLEdBQVIsS0FBZ0JoRyxNQUFNLENBQUN1WSxNQUFQdlksQ0FBY2dHLEdBQWRoRyxFQUFtQm9CLEtBQW5CcEIsQ0FBckNvTjtFQUNELENBSERvTDtFQUlBLE9BQU94WSxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BERDtBQUNBO0FBRUE7Ozs7OztBQUVBLE1BQU0wWSxrQkFBa0IsR0FBRyx3QkFBVSxJQUFWLENBQTNCO0FBRWUsU0FBU0MsZUFBVCxDQUNiNUosTUFEYSxFQUViaUMsS0FGYSxFQUdidkcsUUFIYSxFQUliMEcsUUFKYSxFQUtiblAsS0FMYSxFQU1iNkssV0FOYSxFQU9iO0VBQ0EsSUFBSSxDQUFDbUUsS0FBSyxDQUFDcEUsUUFBTm9FLENBQWVqQyxNQUFmaUMsQ0FBTCxFQUE2QjtJQUMzQixLQUFLLE1BQU00SCxPQUFYLElBQXNCekgsUUFBdEIsRUFBZ0M7TUFDOUIsTUFBTTZGLE9BQU8sR0FBRzBCLGtCQUFrQixDQUFDRSxPQUFPLENBQUNqakIsTUFBVCxDQUFsQztNQUNBLE1BQU1zVyxNQUFNLEdBQUcrSyxPQUFPLENBQUNqSSxNQUFELENBQXRCO01BRUEsSUFBSTlDLE1BQUosRUFBWTtRQUNWLElBQUksQ0FBQzJNLE9BQU8sQ0FBQ3pHLFdBQWIsRUFBMEI7VUFDeEI7VUFDQTtRQUNEO1FBQ0QsTUFBTTBHLE9BQU8sR0FBRyxpQ0FDZEQsT0FBTyxDQUFDekcsV0FETSxFQUVkbEcsTUFGYyxFQUdkakssS0FIYyxFQUlkLElBSmMsRUFLZDRXLE9BQU8sQ0FBQ25PLFFBQVJtTyxLQUFxQixLQUFyQkEsR0FBNkIsRUFBN0JBLEdBQWtDbk8sUUFMcEIsQ0FBaEI7UUFPQXNFLE1BQU0sR0FBRzhKLE9BQU8sQ0FBQ3pCLGlCQUFSeUIsQ0FBMEJoUyxRQUFuQ2tJO1FBQ0ExSSxNQUFNLENBQUNrRCxNQUFQbEQsQ0FBY3JFLEtBQWRxRSxFQUFxQndTLE9BQU8sQ0FBQ3pCLGlCQUFSeUIsQ0FBMEI3VyxLQUEvQ3FFO1FBRUEsSUFBSTJLLEtBQUssQ0FBQ3BFLFFBQU5vRSxDQUFlLHFEQUF3QmpDLE1BQXhCLENBQWZpQyxDQUFKLEVBQXFEO1VBQ25EO1VBQ0E7VUFDQTtRQUNELENBRUQ7UUFDQSxNQUFNbEssWUFBWSxHQUFHK0YsV0FBVyxDQUFDa0MsTUFBRCxDQUFoQztRQUVBLElBQUlqSSxZQUFZLEtBQUtpSSxNQUFqQmpJLElBQTJCa0ssS0FBSyxDQUFDcEUsUUFBTm9FLENBQWVsSyxZQUFma0ssQ0FBL0IsRUFBNkQ7VUFDM0Q7UUFDRDtNQUNGO0lBQ0Y7RUFDRjtFQUNELE9BQU9qQyxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETSxTQUFTK0osZUFBVCxDQUF5QnBILFVBQXpCLEVBQXVFO0VBQzVFLE1BQU07SUFBRThDLEVBQUY7SUFBTXpJO0VBQU4sSUFBaUIyRixVQUF2QjtFQUNBLE9BQVE3SyxRQUFELElBQXlDO0lBQzlDLE1BQU04SyxVQUFVLEdBQUc2QyxFQUFFLENBQUN1RSxJQUFIdkUsQ0FBUTNOLFFBQVIyTixDQUFuQjtJQUNBLElBQUksQ0FBQzdDLFVBQUwsRUFBaUI7TUFDZixPQUFPLEtBQVA7SUFDRDtJQUVELE1BQU1xSCxNQUFNLEdBQUk3TSxLQUFELElBQW1CO01BQ2hDLElBQUk7UUFDRixPQUFPOE0sa0JBQWtCLENBQUM5TSxLQUFELENBQXpCO01BQ0QsQ0FBQyxRQUFPNUYsQ0FBUCxFQUFVO1FBQ1YsTUFBTXBDLEdBQThCLEdBQUcsSUFBSXZPLEtBQUosQ0FDckMsd0JBRHFDLENBQXZDO1FBR0F1TyxHQUFHLENBQUMrVSxJQUFKL1UsR0FBVyxlQUFYQTtRQUNBLE1BQU1BLEdBQU47TUFDRDtJQUNGLENBVkQ7SUFXQSxNQUFNOEgsTUFBa0QsR0FBRyxFQUEzRDtJQUVBNUYsTUFBTSxDQUFDQyxJQUFQRCxDQUFZMEYsTUFBWjFGLEVBQW9CakQsT0FBcEJpRCxDQUE2QjhTLFFBQUQsSUFBc0I7TUFDaEQsTUFBTUMsQ0FBQyxHQUFHck4sTUFBTSxDQUFDb04sUUFBRCxDQUFoQjtNQUNBLE1BQU1FLENBQUMsR0FBRzFILFVBQVUsQ0FBQ3lILENBQUMsQ0FBQ0UsR0FBSCxDQUFwQjtNQUNBLElBQUlELENBQUMsS0FBSzlXLFNBQVYsRUFBcUI7UUFDbkIwSixNQUFNLENBQUNrTixRQUFELENBQU5sTixHQUFtQixDQUFDb04sQ0FBQyxDQUFDN1QsT0FBRjZULENBQVUsR0FBVkEsQ0FBRCxHQUNmQSxDQUFDLENBQUN4RixLQUFGd0YsQ0FBUSxHQUFSQSxFQUFhNXJCLEdBQWI0ckIsQ0FBa0JoVyxLQUFELElBQVcyVixNQUFNLENBQUMzVixLQUFELENBQWxDZ1csQ0FEZSxHQUVmRCxDQUFDLENBQUNoTixNQUFGZ04sR0FDQSxDQUFDSixNQUFNLENBQUNLLENBQUQsQ0FBUCxDQURBRCxHQUVBSixNQUFNLENBQUNLLENBQUQsQ0FKVnBOO01BS0Q7SUFDRixDQVZENUY7SUFXQSxPQUFPNEYsTUFBUDtFQUNELENBL0JEO0FBZ0NELEM7Ozs7Ozs7Ozs7Ozs7OztzQ0M5QkQ7QUFDQTtBQUNBLFNBQVNzTixXQUFULENBQXFCQyxHQUFyQixFQUFrQztFQUNoQyxPQUFPQSxHQUFHLENBQUM5bEIsT0FBSjhsQixDQUFZLHNCQUFaQSxFQUFvQyxNQUFwQ0EsQ0FBUDtBQUNEO0FBRUQsU0FBU0MsY0FBVCxDQUF3QnROLEtBQXhCLEVBQXVDO0VBQ3JDLE1BQU1FLFFBQVEsR0FBR0YsS0FBSyxDQUFDckIsVUFBTnFCLENBQWlCLEdBQWpCQSxLQUF5QkEsS0FBSyxDQUFDekUsUUFBTnlFLENBQWUsR0FBZkEsQ0FBMUM7RUFDQSxJQUFJRSxRQUFKLEVBQWM7SUFDWkYsS0FBSyxHQUFHQSxLQUFLLENBQUNqUCxLQUFOaVAsQ0FBWSxDQUFaQSxFQUFlLENBQUMsQ0FBaEJBLENBQVJBO0VBQ0Q7RUFDRCxNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ3JCLFVBQU5xQixDQUFpQixLQUFqQkEsQ0FBZjtFQUNBLElBQUlDLE1BQUosRUFBWTtJQUNWRCxLQUFLLEdBQUdBLEtBQUssQ0FBQ2pQLEtBQU5pUCxDQUFZLENBQVpBLENBQVJBO0VBQ0Q7RUFDRCxPQUFPO0lBQUVuRyxHQUFHLEVBQUVtRyxLQUFQO0lBQWNDLE1BQWQ7SUFBc0JDO0VBQXRCLENBQVA7QUFDRDtBQUVNLFNBQVNxTixhQUFULENBQ0xDLGVBREssRUFPTDtFQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDRCxlQUFlLENBQUNqbUIsT0FBaEJpbUIsQ0FBd0IsS0FBeEJBLEVBQStCLEVBQS9CQSxLQUFzQyxHQUF2QyxFQUNkemMsS0FEYyxDQUNSLENBRFEsRUFFZDJXLEtBRmMsQ0FFUixHQUZRLENBQWpCO0VBSUEsTUFBTTlILE1BQXNDLEdBQUcsRUFBL0M7RUFDQSxJQUFJOE4sVUFBVSxHQUFHLENBQWpCO0VBQ0EsTUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FDaENuc0IsR0FEd0Jtc0IsQ0FDbkIxRSxPQUFELElBQWE7SUFDaEIsSUFBSUEsT0FBTyxDQUFDcEssVUFBUm9LLENBQW1CLEdBQW5CQSxLQUEyQkEsT0FBTyxDQUFDeE4sUUFBUndOLENBQWlCLEdBQWpCQSxDQUEvQixFQUFzRDtNQUNwRCxNQUFNO1FBQUVsUCxHQUFGO1FBQU9xRyxRQUFQO1FBQWlCRDtNQUFqQixJQUE0QnFOLGNBQWMsQ0FBQ3ZFLE9BQU8sQ0FBQ2hZLEtBQVJnWSxDQUFjLENBQWRBLEVBQWlCLENBQUMsQ0FBbEJBLENBQUQsQ0FBaEQ7TUFDQW5KLE1BQU0sQ0FBQy9GLEdBQUQsQ0FBTitGLEdBQWM7UUFBRXVOLEdBQUcsRUFBRU8sVUFBVSxFQUFqQjtRQUFxQnpOLE1BQXJCO1FBQTZCQztNQUE3QixDQUFkTjtNQUNBLE9BQU9LLE1BQU0sR0FBSUMsUUFBUSxHQUFHLGFBQUgsR0FBbUIsUUFBL0IsR0FBMkMsV0FBeEQ7SUFDRCxDQUpELE1BSU87TUFDTCxPQUFRLElBQUdrTixXQUFXLENBQUNyRSxPQUFELENBQVUsRUFBaEM7SUFDRDtFQUNGLENBVHdCMEUsRUFVeEJwTixJQVZ3Qm9OLENBVW5CLEVBVm1CQSxDQUEzQixDQVlBO0VBQ0E7RUFDQSxVQUFtQztJQUNqQyxJQUFJRyxnQkFBZ0IsR0FBRyxFQUF2QjtJQUNBLElBQUlDLGtCQUFrQixHQUFHLENBQXpCLENBRUE7SUFDQSxNQUFNQyxlQUFlLEdBQUcsTUFBTTtNQUM1QixJQUFJQyxRQUFRLEdBQUcsRUFBZjtNQUVBLEtBQUssSUFBSXBqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa2pCLGtCQUFwQixFQUF3Q2xqQixDQUFDLEVBQXpDLEVBQTZDO1FBQzNDb2pCLFFBQVEsSUFBSXJFLE1BQU0sQ0FBQ3NFLFlBQVB0RSxDQUFvQmtFLGdCQUFwQmxFLENBQVpxRTtRQUNBSCxnQkFBZ0I7UUFFaEIsSUFBSUEsZ0JBQWdCLEdBQUcsR0FBdkIsRUFBNEI7VUFDMUJDLGtCQUFrQjtVQUNsQkQsZ0JBQWdCLEdBQUcsRUFBbkJBO1FBQ0Q7TUFDRjtNQUNELE9BQU9HLFFBQVA7SUFDRCxDQWJEO0lBZUEsTUFBTUUsU0FBc0MsR0FBRyxFQUEvQztJQUVBLElBQUlDLHVCQUF1QixHQUFHVCxRQUFRLENBQ25DbnNCLEdBRDJCbXNCLENBQ3RCMUUsT0FBRCxJQUFhO01BQ2hCLElBQUlBLE9BQU8sQ0FBQ3BLLFVBQVJvSyxDQUFtQixHQUFuQkEsS0FBMkJBLE9BQU8sQ0FBQ3hOLFFBQVJ3TixDQUFpQixHQUFqQkEsQ0FBL0IsRUFBc0Q7UUFDcEQsTUFBTTtVQUFFbFAsR0FBRjtVQUFPcUcsUUFBUDtVQUFpQkQ7UUFBakIsSUFBNEJxTixjQUFjLENBQUN2RSxPQUFPLENBQUNoWSxLQUFSZ1ksQ0FBYyxDQUFkQSxFQUFpQixDQUFDLENBQWxCQSxDQUFELENBQWhELENBQ0E7UUFDQTtRQUNBLElBQUlvRixVQUFVLEdBQUd0VSxHQUFHLENBQUN0UyxPQUFKc1MsQ0FBWSxLQUFaQSxFQUFtQixFQUFuQkEsQ0FBakI7UUFDQSxJQUFJdVUsVUFBVSxHQUFHLEtBQWpCLENBRUE7UUFDQTtRQUNBLElBQUlELFVBQVUsQ0FBQzNmLE1BQVgyZixLQUFzQixDQUF0QkEsSUFBMkJBLFVBQVUsQ0FBQzNmLE1BQVgyZixHQUFvQixFQUFuRCxFQUF1RDtVQUNyREMsVUFBVSxHQUFHLElBQWJBO1FBQ0Q7UUFDRCxJQUFJLENBQUNuQyxLQUFLLENBQUNvQyxRQUFRLENBQUNGLFVBQVUsQ0FBQ3JFLE1BQVhxRSxDQUFrQixDQUFsQkEsRUFBcUIsQ0FBckJBLENBQUQsQ0FBVCxDQUFWLEVBQStDO1VBQzdDQyxVQUFVLEdBQUcsSUFBYkE7UUFDRDtRQUVELElBQUlBLFVBQUosRUFBZ0I7VUFDZEQsVUFBVSxHQUFHTCxlQUFlLEVBQTVCSztRQUNEO1FBRURGLFNBQVMsQ0FBQ0UsVUFBRCxDQUFURixHQUF3QnBVLEdBQXhCb1U7UUFDQSxPQUFPaE8sTUFBTSxHQUNUQyxRQUFRLEdBQ0wsVUFBU2lPLFVBQVcsU0FEZixHQUVMLE9BQU1BLFVBQVcsT0FIWCxHQUlSLE9BQU1BLFVBQVcsVUFKdEI7TUFLRCxDQTFCRCxNQTBCTztRQUNMLE9BQVEsSUFBR2YsV0FBVyxDQUFDckUsT0FBRCxDQUFVLEVBQWhDO01BQ0Q7SUFDRixDQS9CMkIwRSxFQWdDM0JwTixJQWhDMkJvTixDQWdDdEIsRUFoQ3NCQSxDQUE5QjtJQWtDQSxPQUFPO01BQ0xwRixFQUFFLEVBQUUsSUFBSWlHLE1BQUosQ0FBWSxJQUFHWCxrQkFBbUIsU0FBbEMsQ0FEQztNQUVML04sTUFGSztNQUdMcU8sU0FISztNQUlMTSxVQUFVLEVBQUcsSUFBR0wsdUJBQXdCO0lBSm5DLENBQVA7RUFNRDtFQUVELE9BQU87SUFDTDdGLEVBQUUsRUFBRSxJQUFJaUcsTUFBSixDQUFZLElBQUdYLGtCQUFtQixTQUFsQyxDQURDO0lBRUwvTjtFQUZLLENBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIRCw2SUF5UUE7OztBQUdPLFNBQVM0TyxRQUFULENBQ0w3RixFQURLLEVBRUY7RUFDSCxJQUFJOEYsSUFBSSxHQUFHLEtBQVg7RUFDQSxJQUFJbk8sTUFBSjtFQUVBLE9BQVEsQ0FBQyxHQUFHMUcsSUFBSixLQUFvQjtJQUMxQixJQUFJLENBQUM2VSxJQUFMLEVBQVc7TUFDVEEsSUFBSSxHQUFHLElBQVBBO01BQ0FuTyxNQUFNLEdBQUdxSSxFQUFFLENBQUMsR0FBRy9PLElBQUosQ0FBWDBHO0lBQ0Q7SUFDRCxPQUFPQSxNQUFQO0VBQ0QsQ0FORDtBQU9EO0FBRU0sU0FBU29PLGlCQUFULEdBQTZCO0VBQ2xDLE1BQU07SUFBRW5GLFFBQUY7SUFBWUQsUUFBWjtJQUFzQkc7RUFBdEIsSUFBK0JybUIsTUFBTSxDQUFDNGdCLFFBQTVDO0VBQ0EsT0FBUSxHQUFFdUYsUUFBUyxLQUFJRCxRQUFTLEdBQUVHLElBQUksR0FBRyxNQUFNQSxJQUFULEdBQWdCLEVBQUcsRUFBekQ7QUFDRDtBQUVNLFNBQVNrRixNQUFULEdBQWtCO0VBQ3ZCLE1BQU07SUFBRXhxQjtFQUFGLElBQVdmLE1BQU0sQ0FBQzRnQixRQUF4QjtFQUNBLE1BQU0zRSxNQUFNLEdBQUdxUCxpQkFBaUIsRUFBaEM7RUFDQSxPQUFPdnFCLElBQUksQ0FBQ3NZLFNBQUx0WSxDQUFla2IsTUFBTSxDQUFDN1EsTUFBdEJySyxDQUFQO0FBQ0Q7QUFFTSxTQUFTeXFCLGNBQVQsQ0FBMkIzcEIsU0FBM0IsRUFBd0Q7RUFDN0QsT0FBTyxPQUFPQSxTQUFQLEtBQXFCLFFBQXJCLEdBQ0hBLFNBREcsR0FFSEEsU0FBUyxDQUFDNFksV0FBVjVZLElBQXlCQSxTQUFTLENBQUMyWSxJQUFuQzNZLElBQTJDLFNBRi9DO0FBR0Q7QUFFTSxTQUFTNHBCLFNBQVQsQ0FBbUJqTixHQUFuQixFQUF3QztFQUM3QyxPQUFPQSxHQUFHLENBQUNrTixRQUFKbE4sSUFBZ0JBLEdBQUcsQ0FBQ21OLFdBQTNCO0FBQ0Q7QUFFTSxlQUFlQyxtQkFBZixDQUlMMU0sR0FKSyxFQUk2QnVHLEdBSjdCLEVBSWtEO0VBQ3ZELFVBQTJDO0lBQUE7SUFDekMsc0JBQUl2RyxHQUFHLENBQUMyTSxTQUFSLHFCQUFJM00sZUFBZTVFLGVBQW5CLEVBQW9DO01BQ2xDLE1BQU1mLE9BQU8sR0FBSSxJQUFHaVMsY0FBYyxDQUNoQ3RNLEdBRGdDLENBRWhDLDBKQUZGO01BR0EsTUFBTSxJQUFJN1ksS0FBSixDQUFVa1QsT0FBVixDQUFOO0lBQ0Q7RUFDRixDQUNEO0VBQ0EsTUFBTWlGLEdBQUcsR0FBR2lILEdBQUcsQ0FBQ2pILEdBQUppSCxJQUFZQSxHQUFHLENBQUNBLEdBQUpBLElBQVdBLEdBQUcsQ0FBQ0EsR0FBSkEsQ0FBUWpILEdBQTNDO0VBRUEsSUFBSSxDQUFDVSxHQUFHLENBQUM1RSxlQUFULEVBQTBCO0lBQ3hCLElBQUltTCxHQUFHLENBQUNBLEdBQUpBLElBQVdBLEdBQUcsQ0FBQzVqQixTQUFuQixFQUE4QjtNQUM1QjtNQUNBLE9BQU87UUFDTDZnQixTQUFTLEVBQUUsTUFBTWtKLG1CQUFtQixDQUFDbkcsR0FBRyxDQUFDNWpCLFNBQUwsRUFBZ0I0akIsR0FBRyxDQUFDQSxHQUFwQjtNQUQvQixDQUFQO0lBR0Q7SUFDRCxPQUFPLEVBQVA7RUFDRDtFQUVELE1BQU10bUIsS0FBSyxHQUFHLE1BQU0rZixHQUFHLENBQUM1RSxlQUFKNEUsQ0FBb0J1RyxHQUFwQnZHLENBQXBCO0VBRUEsSUFBSVYsR0FBRyxJQUFJaU4sU0FBUyxDQUFDak4sR0FBRCxDQUFwQixFQUEyQjtJQUN6QixPQUFPcmYsS0FBUDtFQUNEO0VBRUQsSUFBSSxDQUFDQSxLQUFMLEVBQVk7SUFDVixNQUFNb2EsT0FBTyxHQUFJLElBQUdpUyxjQUFjLENBQ2hDdE0sR0FEZ0MsQ0FFaEMsK0RBQThEL2YsS0FBTSxZQUZ0RTtJQUdBLE1BQU0sSUFBSWtILEtBQUosQ0FBVWtULE9BQVYsQ0FBTjtFQUNEO0VBRUQsVUFBMkM7SUFDekMsSUFBSXpDLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWTNYLEtBQVoyWCxFQUFtQjFMLE1BQW5CMEwsS0FBOEIsQ0FBOUJBLElBQW1DLENBQUMyTyxHQUFHLENBQUNBLEdBQTVDLEVBQWlEO01BQy9DNVEsT0FBTyxDQUFDd0MsSUFBUnhDLENBQ0csR0FBRTJXLGNBQWMsQ0FDZnRNLEdBRGUsQ0FFZiw4S0FISnJLO0lBS0Q7RUFDRjtFQUVELE9BQU8xVixLQUFQO0FBQ0Q7QUFFTSxNQUFNMnNCLGFBQWEsR0FBRyxDQUMzQixNQUQyQixFQUUzQixNQUYyQixFQUczQixNQUgyQixFQUkzQixVQUoyQixFQUszQixNQUwyQixFQU0zQixNQU4yQixFQU8zQixVQVAyQixFQVEzQixNQVIyQixFQVMzQixVQVQyQixFQVUzQixPQVYyQixFQVczQixRQVgyQixFQVkzQixTQVoyQixDQUF0Qjs7QUFlQSxTQUFTQyxvQkFBVCxDQUE4QnpiLEdBQTlCLEVBQXNEO0VBQzNELFVBQTRDO0lBQzFDLElBQUlBLEdBQUcsS0FBSyxJQUFSQSxJQUFnQixPQUFPQSxHQUFQLEtBQWUsUUFBbkMsRUFBNkM7TUFDM0N3RyxNQUFNLENBQUNDLElBQVBELENBQVl4RyxHQUFad0csRUFBaUJqRCxPQUFqQmlELENBQTBCTCxHQUFELElBQVM7UUFDaEMsSUFBSXFWLGFBQWEsQ0FBQzdWLE9BQWQ2VixDQUFzQnJWLEdBQXRCcVYsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztVQUNyQ2pYLE9BQU8sQ0FBQ3dDLElBQVJ4QyxDQUNHLHFEQUFvRDRCLEdBQUksRUFEM0Q1QjtRQUdEO01BQ0YsQ0FORGlDO0lBT0Q7RUFDRjtFQUVELE9BQU8sMEJBQVV4RyxHQUFWLENBQVA7QUFDRDtBQUVNLE1BQU0wYixFQUFFLEdBQUcsT0FBTzlLLFdBQVAsS0FBdUIsV0FBbEM7O0FBQ0EsTUFBTUQsRUFBRSxHQUNiK0ssRUFBRSxJQUNGLE9BQU85SyxXQUFXLENBQUNDLElBQW5CLEtBQTRCLFVBRDVCNkssSUFFQSxPQUFPOUssV0FBVyxDQUFDK0ssT0FBbkIsS0FBK0IsVUFIMUI7Ozs7Ozs7Ozs7Ozs7QUN4WU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BMYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyw0R0FBK0I7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDNEI7QUFDRTtBQUNTO0FBQ2I7QUFDSTtBQUNUO0FBQUE7QUFFL0MsU0FBU0MsSUFBSUEsQ0FBQSxFQUFHO0VBQ2Qsb0JBQ0V4ckIsb0VBQUEsQ0FBQXlyQiw4REFBQTtJQUFBN3VCLFFBQUEsZ0JBQ0VvRCxvRUFBQSxDQUFDNEssK0RBQWE7TUFBQWxLLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDakJiLG9FQUFBLENBQUNtSSxnRUFBYztNQUFBekgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQUUsQ0FBQyxlQUNsQmIsb0VBQUEsQ0FBQzByQix3RUFBZTtNQUFBaHJCLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDbkJiLG9FQUFBLENBQUMyckIsOERBQVk7TUFBQWpyQixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRSxDQUFDLGVBQ2hCYixvRUFBQSxDQUFDc0wsZ0VBQWM7TUFBQTVLLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDbEJiLG9FQUFBLENBQUNrTywrREFBTTtNQUFBeE4sUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQUUsQ0FBQztFQUFBLGVBQ1YsQ0FBQztBQUVQO0FBRWV6RCx3SEFBSyxDQUFDYyxJQUFJLENBQUNzdEIsSUFBSSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3JCL0I7QUFBZTtFQUNibmQsS0FBSyxFQUFFLE1BQU07RUFDYnVkLEtBQUssRUFBRSxNQUFNO0VBQ2JyaUIsR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7QUFBd0M7QUFFekJzaUIsb0hBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUVqQyxNQUFNemlCLGtCQUFrQixHQUFHeWlCLHFEQUFHO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNQRDtBQUFlLGdFQUNiLENBQ0UscUJBQXFCLEVBQ3JCLENBQ0UsVUFBVSxFQUNWLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixpQ0FBaUMsQ0FDbEMsQ0FDRixFQUNELENBQ0UsaUJBQWlCLEVBQ2pCLENBQ0UsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIsNEJBQTRCLEVBQzVCLG1CQUFtQixDQUNwQixDQUNGLEVBQ0QsQ0FDRSx1QkFBdUIsRUFDdkIsQ0FDRSxxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQiw0QkFBNEIsRUFDNUIsd0JBQXdCLEVBQ3hCLDJCQUEyQixDQUU1QixDQUNGLEVBQ0QsQ0FDRSwyQkFBMkIsRUFDM0IsQ0FDRSxJQUFJLENBRUwsQ0FDRixDQUNGLEU7Ozs7Ozs7Ozs7O0FDekNELDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIGRlbGF5OiAwLjMsXHJcbiAgdHJhbnNsYXRlWToge1xyXG4gICAgZHVyYXRpb246IDEsXHJcbiAgICBlYXNlOiBbMCwgMC43LCAwLjI5LCAwLjk3XSxcclxuICB9LFxyXG4gIG9wYWNpdHk6IHtcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgZWFzZTogWzAuMjUsIDAuMSwgMC4yNSwgMS4wXSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgc2hvdzogeyB0cmFuc2xhdGVZOiAwLCBvcGFjaXR5OiAxIH0sXHJcbiAgaGlkZGVuOiB7IHRyYW5zbGF0ZVk6IDYwLCBvcGFjaXR5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRlT25TY3JlZW4gPSAoeyBjaGlsZHJlbjogY2hpbGRyZW5Qcm9wIH0pID0+IHtcclxuICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBbaW5WaWV3UmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHsgdHJpZ2dlck9uY2U6IHRydWUgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5WaWV3KSB7XHJcbiAgICAgIGFuaW1hdGlvbi5zdGFydCgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH0sIFthbmltYXRpb24sIGluVmlldywgaW5WaWV3UmVmXSk7XHJcblxyXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgY2hpbGQgPT4ge1xyXG4gICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVmID0gbm9kZSA9PiB7XHJcbiAgICAgIC8vIEtlZXAgeW91ciBvd24gcmVmZXJlbmNlXHJcbiAgICAgIGluVmlld1JlZihub2RlKTtcclxuXHJcbiAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIHJlZiwgaWYgYW55XHJcbiAgICAgIGNvbnN0IHsgcmVmIH0gPSBjaGlsZDtcclxuICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZWYobm9kZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgdmFyaWFudHMsXHJcbiAgICAgIHRyYW5zaXRpb24sXHJcbiAgICAgIGFuaW1hdGU6IGFuaW1hdGlvbixcclxuICAgICAgaW5pdGlhbDogJ2hpZGRlbicsXHJcbiAgICAgIHJlZjogaGFuZGxlUmVmLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQW5pbWF0ZU9uU2NyZWVuKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQW5pbWF0ZU9uU2NyZWVuJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0ljb25zL0xvZ28nO1xyXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tICcuLi9NZW51QnV0dG9uJztcclxuaW1wb3J0IHsgU2xpZGVyLCBDb250YWluZXIsIFN0eWxlZExpbmssIE1lbnVXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgZ2V0U3R5bGVzID0gKGRpcmVjdGlvbiA9ICcnKSA9PiB7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSByZXR1cm4geyB0b3A6IDAgfTtcclxuICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSByZXR1cm4geyBib3R0b206IDAgfTtcclxuXHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaGlkZGVuOiB7IHk6IC0xMzEgfSxcclxuICBzaG93OiB7IHk6IDAgfSxcclxufTtcclxuXHJcbmNvbnN0IEFwcEJhciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBkaXJlY3Rpb24gPSAnZG93bicsXHJcbiAgICBvZmZzZXQgPSAxMDUsXHJcbiAgICBsb2dvUHJvcHMgPSB7fSxcclxuICAgIHN0eWxlOiBzdHlsZVByb3AgPSB7fSxcclxuICAgIC4uLnJvb3RQcm9wc1xyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgc2hvdWxkSGlkZSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaW50ZXJzZWN0aW9uID0gb2Zmc2V0O1xyXG4gICAgICBsZXQgY3VycmVudFlQb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcclxuICAgICAgICBjdXJyZW50WVBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XHJcbiAgICAgICAgY3VycmVudFlQb3NpdGlvbiA9XHJcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGludGVyc2VjdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBvZmZzZXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNob3VsZEhpZGUgPSBjdXJyZW50WVBvc2l0aW9uID4gaW50ZXJzZWN0aW9uO1xyXG4gICAgICBpZiAoc2hvdWxkSGlkZSAhPT0gaGlkZGVuKSB7XHJcbiAgICAgICAgc2V0SGlkZGVuKHNob3VsZEhpZGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNjcm9sbCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtoaWRkZW4sIGRpcmVjdGlvbiwgb2Zmc2V0XSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyhkaXJlY3Rpb24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlclxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICBhbmltYXRlPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdzaG93J31cclxuICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IFswLjY2NiwgMCwgMC4yMzcsIDFdLFxyXG4gICAgICB9fVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlcyxcclxuICAgICAgICAuLi5zdHlsZVByb3AsXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yb290UHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgIDxTdHlsZWRMaW5rIHRpdGxlPVwiRnVycm93XCI+XHJcbiAgICAgICAgICAgIDxMb2dvIHsuLi5sb2dvUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxNZW51V3JhcHBlcj5cclxuICAgICAgICAgIDxNZW51QnV0dG9uIHRpdGxlPVwiUHJvamVjdHNcIiAvPlxyXG4gICAgICAgIDwvTWVudVdyYXBwZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQXBwQmFyKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQXBwQmFyJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IFNsaWRlciA9IHN0eWxlZCgoeyByZW5kZXJBcywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBDb21wb25lbnQgPSBtb3Rpb25bcmVuZGVyQXNdIHx8ICdkaXYnO1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufSlgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHotaW5kZXg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuekluZGV4LnNsaWRlcn07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU0cHg7XG4gIGxlZnQ6IGF1dG87XG4gIHdpZHRoOiAxMzFweDtcbiAgaGVpZ2h0OiAyM3B4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHdpZHRoOiA5OXB4O1xuICAgIGhlaWdodDogMTdweDtcbiAgICB0b3A6IDMycHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU0cHg7XG4gIHJpZ2h0OiAzMnB4O1xuICBtYXJnaW46IC0yMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIHRvcDogMjlweDtcbiAgYH07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vLi4vaG9va3MvdXNlRm9ya1JlZic7XHJcbmltcG9ydCBjYW52YXNFcmFzZXJGYWN0b3J5IGZyb20gJy4vQ2FudmFzRXJhc2VyRmFjdG9yeSc7XHJcblxyXG5jb25zdCBDYW52YXNFcmFzZXIgPSAocHJvcHMsIHJlZikgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbXBsZXRlUmF0aW8gPSAxLFxyXG4gICAgZW5hYmxlZCA9IHRydWUsXHJcbiAgICBvbkNvbXBsZXRlID0gbnVsbCxcclxuICAgIG9uUHJvZ3Jlc3MgPSBudWxsLFxyXG4gICAgc2l6ZSA9IDQwLFxyXG4gICAgYmFja2dyb3VuZCA9ICcjMDAwJyxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0LFxyXG4gICAgLi4ub3RoZXJcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtjYW52YXNFcmFzZXIsIHNldENhbnZhc0VyYXNlcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjYW52YXNSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlRm9ya1JlZihjYW52YXNSZWYsIHJlZik7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgY29tcGxldGVSYXRpbyxcclxuICAgICAgZW5hYmxlZCxcclxuICAgICAgb25Db21wbGV0ZSxcclxuICAgICAgb25Qcm9ncmVzcyxcclxuICAgICAgc2l6ZSxcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodCxcclxuICAgIH0pLFxyXG4gICAgW1xyXG4gICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICBjb21wbGV0ZVJhdGlvLFxyXG4gICAgICBlbmFibGVkLFxyXG4gICAgICBvbkNvbXBsZXRlLFxyXG4gICAgICBvblByb2dyZXNzLFxyXG4gICAgICBzaXplLFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgXSxcclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzRXJhc2VyRmFjdG9yeSgpO1xyXG4gICAgc2V0Q2FudmFzRXJhc2VyKGNhbnZhcyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNhbnZhc0VyYXNlcikge1xyXG4gICAgICBjYW52YXNFcmFzZXIuaW5pdChjYW52YXNSZWYuY3VycmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfSwgW2NhbnZhc0VyYXNlciwgb3B0aW9uc10pO1xyXG5cclxuICByZXR1cm4gPGNhbnZhcyByZWY9e2NvbXBvbmVudFJlZn0gey4uLm90aGVyfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoQ2FudmFzRXJhc2VyKTtcclxuIiwiY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xyXG4gIGJhY2tncm91bmQ6ICcjMDAwJyxcclxuICBjb21wbGV0ZVJhdGlvOiAxLFxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbiAgb25Db21wbGV0ZTogbnVsbCxcclxuICBvblByb2dyZXNzOiBudWxsLFxyXG4gIHNpemU6IDQwLFxyXG59O1xyXG5cclxuY29uc3QgZ2V0RWxlbWVudENvbXB1dGVkU3R5bGVkID0gKGVsZW1lbnQsIHByb3ApID0+IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtwcm9wXS5yZXBsYWNlKCdweCcsICcnKSk7XHJcblxyXG5jb25zdCBmYWN0b3J5ID0gKCkgPT4ge1xyXG4gIGxldCBfY2FudmFzID0gbnVsbDtcclxuICBsZXQgX2NvbnRleHQgPSBudWxsO1xyXG4gIGxldCBfZGF0YSA9IHt9O1xyXG5cclxuICBjb25zdCBfaGFuZGxlRXJhc2VyUHJvZ3Jlc3MgPSAoY3VycmVudFgsIGN1cnJlbnRZKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbFBhcnRzLFxyXG4gICAgICBudW1QYXJ0cyxcclxuICAgICAgY29tcGxldGVSYXRpbyxcclxuICAgICAgZW5hYmxlZCxcclxuICAgICAgc2l6ZSxcclxuICAgICAgb25Db21wbGV0ZSxcclxuICAgICAgb25Qcm9ncmVzcyxcclxuICAgIH0gPSBfZGF0YTtcclxuXHJcbiAgICBpZiAoIWVuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgcCA9IE1hdGguZmxvb3IoY3VycmVudFggLyBzaXplKSArIE1hdGguZmxvb3IoY3VycmVudFkgLyBzaXplKSAqIGNvbFBhcnRzO1xyXG5cclxuICAgIGlmIChwID49IDAgJiYgcCA8IG51bVBhcnRzKSB7XHJcbiAgICAgIF9kYXRhLnJhdGlvICs9IF9kYXRhLnBhcnRzW3BdO1xyXG4gICAgICBfZGF0YS5wYXJ0c1twXSA9IDA7XHJcblxyXG4gICAgICBpZiAoIV9kYXRhLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgcCA9IF9kYXRhLnJhdGlvIC8gX2RhdGEubnVtUGFydHM7XHJcblxyXG4gICAgICAgIGlmIChwID49IGNvbXBsZXRlUmF0aW8pIHtcclxuICAgICAgICAgIF9kYXRhLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvblByb2dyZXNzKSB7XHJcbiAgICAgICAgICBvblByb2dyZXNzKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGVuYWJsZWQsIHBvc1gsIHBvc1ksIHNjYWxlUmF0aW8sIHRvdWNoWCwgdG91Y2hZLFxyXG4gICAgfSA9IF9kYXRhO1xyXG4gICAgY29uc3QgY3VycmVudFggPSAoZXZlbnQucGFnZVggLSBwb3NYKSAqIHNjYWxlUmF0aW87XHJcbiAgICBjb25zdCBjdXJyZW50WSA9IChldmVudC5wYWdlWSAtIHBvc1kpICogc2NhbGVSYXRpbztcclxuXHJcbiAgICBpZiAoZW5hYmxlZCkge1xyXG4gICAgICBfaGFuZGxlRXJhc2VyUHJvZ3Jlc3MoY3VycmVudFgsIGN1cnJlbnRZKTtcclxuICAgICAgX2NvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgIF9jb250ZXh0Lm1vdmVUbyh0b3VjaFgsIHRvdWNoWSk7XHJcbiAgICAgIF9jb250ZXh0LmxpbmVUbyhjdXJyZW50WCwgY3VycmVudFkpO1xyXG4gICAgICBfY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGF0YS50b3VjaFggPSBjdXJyZW50WDtcclxuICAgIF9kYXRhLnRvdWNoWSA9IGN1cnJlbnRZO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9vbk1vdXNlRG93biA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGVuYWJsZWQsIHBvc1gsIHBvc1ksIHNjYWxlUmF0aW8sXHJcbiAgICB9ID0gX2RhdGE7XHJcbiAgICBjb25zdCBjdXJyZW50WCA9IChldmVudC5wYWdlWCAtIHBvc1gpICogc2NhbGVSYXRpbztcclxuICAgIGNvbnN0IGN1cnJlbnRZID0gKGV2ZW50LnBhZ2VZIC0gcG9zWSkgKiBzY2FsZVJhdGlvO1xyXG5cclxuICAgIF9kYXRhLnRvdWNoRG93biA9IHRydWU7XHJcbiAgICBfZGF0YS50b3VjaFggPSBjdXJyZW50WDtcclxuICAgIF9kYXRhLnRvdWNoWSA9IGN1cnJlbnRZO1xyXG5cclxuICAgIGlmIChlbmFibGVkKSB7XHJcbiAgICAgIF9oYW5kbGVFcmFzZXJQcm9ncmVzcyhjdXJyZW50WCwgY3VycmVudFkpO1xyXG5cclxuICAgICAgX2NvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgIF9jb250ZXh0Lm1vdmVUbyhjdXJyZW50WCAtIDEsIGN1cnJlbnRZKTtcclxuICAgICAgX2NvbnRleHQubGluZVRvKGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcbiAgICAgIF9jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX29uTW91c2VNb3ZlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBfb25Nb3VzZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgZW5hYmxlZCwgcG9zWCwgcG9zWSwgc2NhbGVSYXRpbyxcclxuICAgIH0gPSBfZGF0YTtcclxuICAgIGNvbnN0IGN1cnJlbnRYID0gKGV2ZW50LnBhZ2VYIC0gcG9zWCkgKiBzY2FsZVJhdGlvO1xyXG4gICAgY29uc3QgY3VycmVudFkgPSAoZXZlbnQucGFnZVkgLSBwb3NZKSAqIHNjYWxlUmF0aW87XHJcblxyXG4gICAgX2RhdGEudG91Y2hEb3duID0gdHJ1ZTtcclxuICAgIF9kYXRhLnRvdWNoWCA9IGN1cnJlbnRYO1xyXG4gICAgX2RhdGEudG91Y2hZID0gY3VycmVudFk7XHJcblxyXG4gICAgaWYgKGVuYWJsZWQpIHtcclxuICAgICAgX2hhbmRsZUVyYXNlclByb2dyZXNzKGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcblxyXG4gICAgICBfY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgX2NvbnRleHQubW92ZVRvKGN1cnJlbnRYIC0gMSwgY3VycmVudFkpO1xyXG4gICAgICBfY29udGV4dC5saW5lVG8oY3VycmVudFgsIGN1cnJlbnRZKTtcclxuICAgICAgX2NvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfb25Nb3VzZU1vdmUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoc291cmNlLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgIGlmICghc291cmNlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnTm8gc291cmNlIGVsZW1lbnQgcHJvdmlkZWQuIEl0IG11c3QgYmUgYW4gSFRNTCBjYW52YXMgZWxlbWVudC4nLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRPcHRpb25zID0geyAuLi5ERUZBVUxUX09QVElPTlMsIC4uLm9wdGlvbnMgfTtcclxuICAgIGNvbnN0IHsgc2l6ZSwgYmFja2dyb3VuZCB9ID0gY3VycmVudE9wdGlvbnM7XHJcblxyXG4gICAgX2NhbnZhcyA9IHNvdXJjZTtcclxuICAgIF9jb250ZXh0ID0gX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29uc3QgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XHJcbiAgICBjb25zdCBiYWNraW5nU3RvcmVSYXRpbyA9IF9jb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW9cclxuICAgICAgfHwgX2NvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xyXG4gICAgICB8fCBfY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW9cclxuICAgICAgfHwgX2NvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW9cclxuICAgICAgfHwgX2NvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xyXG4gICAgICB8fCAxO1xyXG4gICAgY29uc3Qgc2NhbGVSYXRpbyA9IGRldmljZVBpeGVsUmF0aW8gLyBiYWNraW5nU3RvcmVSYXRpbztcclxuXHJcbiAgICBjb25zdCByZWFsV2lkdGggPSBnZXRFbGVtZW50Q29tcHV0ZWRTdHlsZWQoX2NhbnZhcywgJ3dpZHRoJyk7XHJcbiAgICBjb25zdCByZWFsSGVpZ2h0ID0gZ2V0RWxlbWVudENvbXB1dGVkU3R5bGVkKF9jYW52YXMsICdoZWlnaHQnKTtcclxuICAgIGNvbnN0IHdpZHRoID0gcmVhbFdpZHRoICogc2NhbGVSYXRpbztcclxuICAgIGNvbnN0IGhlaWdodCA9IHJlYWxIZWlnaHQgKiBzY2FsZVJhdGlvO1xyXG5cclxuICAgIGlmIChkZXZpY2VQaXhlbFJhdGlvICE9PSBiYWNraW5nU3RvcmVSYXRpbykge1xyXG4gICAgICBfY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIF9jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICBfY2FudmFzLnN0eWxlLndpZHRoID0gYCR7cmVhbFdpZHRofXB4YDtcclxuICAgICAgX2NhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtyZWFsSGVpZ2h0fXB4YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9jYW52YXMud2lkdGggPSByZWFsV2lkdGg7XHJcbiAgICAgIF9jYW52YXMuaGVpZ2h0ID0gcmVhbEhlaWdodDtcclxuICAgICAgX2NhbnZhcy5zdHlsZS53aWR0aCA9ICcnO1xyXG4gICAgICBfY2FudmFzLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIF9jb250ZXh0LnNjYWxlKHNjYWxlUmF0aW8sIHNjYWxlUmF0aW8pO1xyXG4gICAgX2NvbnRleHQuZmlsbFN0eWxlID0gYmFja2dyb3VuZDtcclxuICAgIF9jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgX2NvbnRleHQuZHJhd0ltYWdlKF9jYW52YXMsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIC8vIHByZXBhcmUgY29udGV4dCBmb3IgZHJhd2luZyBvcGVyYXRpb25zXHJcbiAgICBfY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuICAgIF9jb250ZXh0LmxpbmVXaWR0aCA9IHNpemU7XHJcbiAgICBfY29udGV4dC5saW5lQ2FwID0gJ3JvdW5kJztcclxuXHJcbiAgICAvLyBiaW5kIGV2ZW50c1xyXG4gICAgX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX29uTW91c2VEb3duKTtcclxuICAgIF9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfb25Nb3VzZUNsaWNrKTtcclxuICAgIC8vIF9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIF9vblRvdWNoU3RhcnQpO1xyXG4gICAgLy8gX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBfb25Ub3VjaE1vdmUpO1xyXG4gICAgLy8gX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIF9vblRvdWNoRW5kKTtcclxuXHJcbiAgICAvLyByZXNldCBwYXJ0c1xyXG4gICAgY29uc3QgcGFydHMgPSBbXTtcclxuICAgIGNvbnN0IGNvbFBhcnRzID0gTWF0aC5mbG9vcih3aWR0aCAvIHNpemUpO1xyXG4gICAgY29uc3QgbnVtUGFydHMgPSBjb2xQYXJ0cyAqIE1hdGguZmxvb3IoaGVpZ2h0IC8gc2l6ZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBhcnRzOyBpKyspIHtcclxuICAgICAgcGFydHMucHVzaCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGF0YSA9IHtcclxuICAgICAgcG9zWDogX2NhbnZhcy5vZmZzZXRMZWZ0LFxyXG4gICAgICBwb3NZOiBfY2FudmFzLm9mZnNldFRvcCxcclxuICAgICAgdG91Y2hEb3duOiBmYWxzZSxcclxuICAgICAgdG91Y2hJRDogLTk5OSxcclxuICAgICAgdG91Y2hYOiAwLFxyXG4gICAgICB0b3VjaFk6IDAsXHJcbiAgICAgIHB0b3VjaFg6IDAsXHJcbiAgICAgIHB0b3VjaFk6IDAsXHJcbiAgICAgIHc6IHdpZHRoLFxyXG4gICAgICBoOiBoZWlnaHQsXHJcbiAgICAgIHNjYWxlUmF0aW8sXHJcbiAgICAgIHJhdGlvOiAwLFxyXG4gICAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgICAgIGN1cnJlbnRPcHRpb25zLFxyXG4gICAgICAuLi5jdXJyZW50T3B0aW9ucyxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHcsIGgsIG51bVBhcnRzLCBvbkNvbXBsZXRlLFxyXG4gICAgfSA9IF9kYXRhO1xyXG5cclxuICAgIGlmIChfZGF0YSkge1xyXG4gICAgICBfY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBhcnRzOyBpKyspIHtcclxuICAgICAgICBfZGF0YS5wYXJ0c1tpXSA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIF9kYXRhLnJhdGlvID0gbnVtUGFydHM7XHJcbiAgICAgIF9kYXRhLmNvbXBsZXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgb25Db21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHcsIGgsIG51bVBhcnRzIH0gPSBfZGF0YTtcclxuXHJcbiAgICBfY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xyXG4gICAgX2NvbnRleHQuZHJhd0ltYWdlKF9jYW52YXMsIDAsIDAsIHcsIGgpO1xyXG4gICAgX2NvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QYXJ0czsgaSsrKSB7XHJcbiAgICAgIF9kYXRhLnBhcnRzW2ldID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBfZGF0YS5yYXRpbyA9IDA7XHJcbiAgICBfZGF0YS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgX2RhdGEudG91Y2hEb3duID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQsXHJcbiAgICBjbGVhcixcclxuICAgIHJlc2V0LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYW52YXNFcmFzZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGl0ZW1zIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cy9zZXJ2aWNlcy1pdGVtcyc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBUZXh0V3JhcHBlcixcclxuICBTZXJ2aWNlc1dyYXBwZXIsXHJcbiAgQWNjb3JkaW9uVG9nZ2xlLFxyXG4gIEFjY29yZGlvbkNvbnRlbnQsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIGN1cnIgPT4ge1xyXG4gICAgICBpZiAoY3VyciA9PT0gc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIH0sXHJcbiAgICBbc2VsZWN0ZWRJdGVtLCBhZGRDdXJzb3JCb3JkZXJdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIGN1cnIgPT4ge1xyXG4gICAgICBpZiAoY3VyciA9PT0gc2VsZWN0ZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICByZW1vdmVDdXJzb3JCb3JkZXIoKTtcclxuICAgIH0sXHJcbiAgICBbc2VsZWN0ZWRJdGVtLCByZW1vdmVDdXJzb3JCb3JkZXJdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgPFRleHRXcmFwcGVyPlxyXG4gICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgT3VyIG1pc3Npb24gaXMgdG8gcmV2b2x1dGlvbml6ZSB2aXN1YWwgZXhwZXJpZW5jZXMsIFxyXG4gICAgICAgICAgYnJpZGdpbmcgdGhlIGdhcCBiZXR3ZWVuIHRoZSBwaHlzaWNhbCBhbmQgZGlnaXRhbCB3b3JsZHMuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICBBdCBvdXIgY29tcGFueSwgd2Ugc3BlY2lhbGl6ZSBpbiBhIHJhbmdlIG9mIGN1dHRpbmctZWRnZSBkaWdpdGFsIHNvbHV0aW9ucy4gXHJcbiAgICAgICAgICBPdXIgc2VydmljZXMgaW5jbHVkZSBhZHZhbmNlZCBBdWdtZW50ZWQgUmVhbGl0eSBzb2Z0d2FyZSB0aGF0IHRyYW5zZm9ybXMgeW91ciBcclxuICAgICAgICAgIGRpZ2l0YWwgaW50ZXJhY3Rpb25zLCBjb21wcmVoZW5zaXZlIFdlYiBEZXZlbG9wbWVudCB0byBjcmVhdGUgdXNlciBmcmllbmRseSBvbmxpbmUgXHJcbiAgICAgICAgICBwbGF0Zm9ybXMsIGlubm92YXRpdmUgSW1hZ2UgVHJhY2tpbmcgQW5kIE9iamVjdCBkZXRlY3Rpb24gc3lzdGVtIGRlc2lnbmVkIHRvIHN0cmVhbWxpbmUgXHJcbiAgICAgICAgICBwcm9jZXNzZXMgdGhyb3VnaCBzbWFydCByZWNvZ25pdGlvbi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L1RleHRXcmFwcGVyPlxyXG4gICAgICAgIDxTZXJ2aWNlc1dyYXBwZXI+XHJcbiAgICAgICAgICA8aDM+U2VydmljZXM8L2gzPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoW2l0ZW0sIHNlcnZpY2VzXSwgaXRlbUluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Ub2dnbGVcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2l0ZW1JbmRleCA9PT0gc2VsZWN0ZWRJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJdGVtKGl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZU1vdXNlRW50ZXIoaXRlbUluZGV4KX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTW91c2VMZWF2ZShpdGVtSW5kZXgpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IGhlaWdodDogaXRlbUluZGV4ID09PSBzZWxlY3RlZEl0ZW0gPyAnMTAwJScgOiAnMCcgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNywgZWFzZTogWzAsIDAuNywgMC4yOSwgMC45N10gfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlLCBzZXJ2aWNlSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtgJHtpdGVtSW5kZXh9XyR7c2VydmljZUluZGV4fWB9PntzZXJ2aWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VydmljZXNXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQWJvdXQpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BYm91dCc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGNvbnRhaW5lclN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBzZWNvbmRhcnlGb250U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3RleHQnO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFNlY3Rpb24gPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICAke2NvbnRhaW5lclN0eWxlc307XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgbWFyZ2luLWJvdHRvbTogODZweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogOC4zMzMlO1xuICB3aWR0aDogNTguMzMzJTtcblxuICAmIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGZvbnQtc2l6ZTogMi42MjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gICYgcCB7XG4gICAgbWF4LXdpZHRoOiA0NDhweDtcbiAgICBtYXJnaW46IDYuOXB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgICYgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xuICAgIH1cbiAgYH07XG4gIFxuYDtcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMyU7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cbiAgJiBoMyB7XG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvblRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4gICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjdweCAwIDAgMzVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICY6aG92ZXI6bm90KFthcmlhLWV4cGFuZGVkPSd0cnVlJ10pIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICB3aWR0aDogMTFweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAycHg7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgbGVmdDogMTNweDtcbiAgICB9XG4gIH1cblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLXRvcDogMTEuNXB4O1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gICZbYXJpYS1leHBhbmRlZD0ndHJ1ZSddIHtcbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDExcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbGVmdDogMnB4O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IDEzcHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uQ29udGVudCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4wNzE0Mjg1NzE0O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yZWR9O1xuXG4gICYgcCB7XG4gICAgbWFyZ2luOiA2LjFweCAwIDA7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xyXG5pbXBvcnQgdXNlU3R5bGVkVGhlbWUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlU3R5bGVkVGhlbWUnO1xyXG5pbXBvcnQgQ2FudmFzRXJhc2VyIGZyb20gJy4uLy4uL0NhbnZhc0VyYXNlcic7XHJcbmltcG9ydCB7IEJhbm5lclNlY3Rpb24sIEJhbm5lclRpdGxlLCBWaWRlb0NvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRpdGxlQW5pbWF0aW9uID0ge1xyXG4gIGFuaW1hdGU6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjE1LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaXRlbVRpdGxlQW5pbWF0aW9uID0ge1xyXG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9LCAvLyBTdGFydCB3aXRoIG9wYWNpdHkgMCBhbmQgc2NhbGUgZG93blxyXG4gIGFuaW1hdGU6IHtcclxuICAgIG9wYWNpdHk6IDEsIC8vIEZhZGUgaW5cclxuICAgIHNjYWxlOiAxLCAgIC8vIFNjYWxlIHVwIHRvIGZ1bGwgc2l6ZVxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMC4zLCAvLyBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgIGVhc2U6IFswLjQsIDAsIDAuMiwgMV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB0ZXh0cyA9IFsnQVInLCAnTmV0JywgJ0FpJ107XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VTdHlsZWRUaGVtZSgpO1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGlzTW9iaWxlID0gd2luZG93U2l6ZS53aWR0aCA8IDc2ODsgLy8gQWRqdXN0IGJyZWFrcG9pbnQgYXMgbmVlZGVkXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50VGV4dCwgc2V0Q3VycmVudFRleHRdID0gdXNlU3RhdGUodGV4dHNbMF0pO1xyXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgdGV4dHMubGVuZ3RoKTtcclxuICAgIH0sIDUwMCk7IC8vIENoYW5nZSB0ZXh0IGV2ZXJ5IDIgc2Vjb25kc1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50VGV4dCh0ZXh0c1tpbmRleF0pO1xyXG4gIH0sIFtpbmRleF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhbm5lclNlY3Rpb24gc3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3dTaXplLmhlaWdodCB9fT5cclxuICAgICAgPFZpZGVvQ29udGFpbmVyPlxyXG4gICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgc3JjPVwiL3ZpZGVvcy9iYW5uZXIubXA0XCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgIGxvb3BcclxuICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICBtdXRlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvVmlkZW9Db250YWluZXI+XHJcbiAgICAgIHshaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxDYW52YXNFcmFzZXJcclxuICAgICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgICAgd2lkdGg9e3dpbmRvd1NpemUud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3dpbmRvd1NpemUuaGVpZ2h0fVxyXG4gICAgICAgICAgc2l6ZT17MTIwfVxyXG4gICAgICAgICAgYmFja2dyb3VuZD17dGhlbWUuYmFja2dyb3VuZH1cclxuICAgICAgICAgIG9uTW91c2VFbnRlcj17YWRkQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPEJhbm5lclRpdGxlXHJcbiAgICAgICAgdmFyaWFudHM9e3RpdGxlQW5pbWF0aW9ufVxyXG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8bW90aW9uLnNwYW4gdmFyaWFudHM9e2l0ZW1UaXRsZUFuaW1hdGlvbn0+bmV4PC9tb3Rpb24uc3Bhbj5cclxuICAgICAgICA8bW90aW9uLnNwYW4gdmFyaWFudHM9e2l0ZW1UaXRsZUFuaW1hdGlvbn0ga2V5PXtjdXJyZW50VGV4dH0+XHJcbiAgICAgICAgICB7Y3VycmVudFRleHR9XHJcbiAgICAgICAgPC9tb3Rpb24uc3Bhbj5cclxuICAgICAgPC9CYW5uZXJUaXRsZT5cclxuICAgIDwvQmFubmVyU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCYW5uZXIpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9CYW5uZXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEJhbm5lclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzA1cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG5cbiAgJiBjYW52YXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBWaWRlb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJiB2aWRlbyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCYW5uZXJUaXRsZSA9IHN0eWxlZChtb3Rpb24uaDEpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTkzcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBmb250LXNpemU6IDQyMHB4O1xuICBmb250LXNpemU6IDI2LjI1cmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDAuNjcxNDI4NTcxNDtcblxuICAmIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIGxlZnQ6IC0xMHB4O1xuICAgIGJvdHRvbTogLTYzcHg7XG4gICAgZm9udC1zaXplOiAyODBweDtcbiAgICBmb250LXNpemU6IDE3LjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IC42ODIxNDI4NTcxO1xuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBsZWZ0OiAtNnB4O1xuICAgIGJvdHRvbTogLTM2cHg7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgKyA2cHgpO1xuICAgIGZvbnQtc2l6ZTogMTYwcHg7XG4gICAgZm9udC1zaXplOiAxMHJlbTtcbiAgICBsaW5lLWhlaWdodDogLjY4MTI1O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIGB9O1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VDdXJzb3JTdHlsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDdXJzb3JTdHlsZSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gJy4uLy4uL1NvY2lhbE1lZGlhJztcclxuaW1wb3J0IHsgQ29udGFjdFNlY3Rpb24gfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWRkQ3Vyc29yQm9yZGVyLCByZW1vdmVDdXJzb3JCb3JkZXIgfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgICA8Q29udGFjdFNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtdGV4dFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJ0ZWw6KzEuOTAyLjQxNy4wNjM0XCJcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICArOTEuODY2LjA0NC45OTcwXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtdGV4dFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0BmdXJyb3cuc3R1ZGlvXCJcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBpbmZvQGx1bWluZXhhLmluXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGFkZHJlc3MgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRhY3QtdGV4dFwiPlxyXG4gICAgICAgICAgMTQgMXN0IFN0YWdlIEJoYW5hc2hhbmthcmk8YnIgLz4gQmFuZ2Fsb3JlLCBLQSBJTlxyXG4gICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICA8U29jaWFsTWVkaWEgY2xhc3NOYW1lPVwiY29sdW1uXCIgLz5cclxuICAgICAgPC9Db250YWN0U2VjdGlvbj5cclxuICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENvbnRhY3QpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250YWN0JztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZChtb3Rpb24uc2VjdGlvbilgXG4gICR7Y29udGFpbmVyU3R5bGVzfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDBweCAyMDBweDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG4gIC8qIG9wYWNpdHk6IDE7ICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XG4gIC8qIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLjcsIDAuMjksIDAuOTcpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzOyAqL1xuICAvKiB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtOyAqL1xuICB3aWR0aDogMTAwJTtcblxuICAmIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgJiBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIH1cbiAgfVxuXG4gICYgLmNvbnRhY3QtdGV4dCB7XG4gICAgJHtzZWNvbmRhcnlGb250U3R5bGV9O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gICYgYWRkcmVzcyB7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcbiAgICAmIC5jb2x1bW4ge1xuICAgICAgd2lkdGg6IDQxLjY2NiU7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxNi42NjYlO1xuICAgICAgfVxuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICYgLmNvbHVtbiB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcGFkZGluZzogMXB4IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiBhZGRyZXNzIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBwYWRkaW5nOiAwIDBweCA2MHB4O1xuXG4gICAgJiBhZGRyZXNzIHtcbiAgICAgIHBhZGRpbmc6IDE3cHggMCA0MnB4O1xuICAgIH1cblxuICAgICYgLmNvbnRhY3QtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgfVxuICBgfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQW5pbWF0ZU9uU2NyZWVuIGZyb20gJy4uLy4uL0FuaW1hdGVPblNjcmVlbic7XHJcbmltcG9ydCB7IENvbnRlbnRTZWN0aW9uLCBUZXh0V3JhcHBlciwgVGV4dCB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICA8VGV4dFdyYXBwZXI+XHJcbiAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgIElubm92YXRpb24gZG9lc27igJl0IHNpbXBseSBcclxuICAgICAgICAgIGVtZXJnZSAtXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgaXTigJlzIGN1bHRpdmF0ZWQuIFdlIHNpZnQgdGhyb3VnaCB0aGUgbGF5ZXJzIG9mIHRoZSBvcmRpbmFyeSB0byB1bmVhcnRoIFxyXG4gICAgICAgICAgICBleHRyYW9yZGluYXJ5IGlkZWFzLCBlbWJyYWNpbmcgdGhlIGdyaXQgYW5kIGdyaW5kIGFsb25nIHRoZSB3YXkuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9UZXh0V3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50U2VjdGlvbj5cclxuICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250ZW50JztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgY29udGFpbmVyU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuXG4gIG1hcmdpbi1ib3R0b206IDIxMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi1ib3R0b206IDEwN3B4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMyU7XG4gIHdpZHRoOiBjYWxjKDU4LjMzMyUgLSAzMnB4KTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgyYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMi42MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgJiBiciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZU1lbnVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9tZW51JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCB1c2VTdHlsZWRUaGVtZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VTdHlsZWRUaGVtZSc7XHJcbmltcG9ydCBBbmltYXRlT25TY3JlZW4gZnJvbSAnLi4vLi4vQW5pbWF0ZU9uU2NyZWVuJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uLy4uL0ljb25zL0Fycm93JztcclxuaW1wb3J0IHtcclxuICBDb250ZW50U2VjdGlvbixcclxuICBQcm9qZWN0QW5jaG9yLFxyXG4gIFByb2plY3RJbmZvLFxyXG4gIFByb2plY3RUaXRsZSxcclxuICBWaWRlb1ByZXZpZXcsXHJcbiAgTWVudUNvbnRhaW5lcixcclxuICBNZW51QnV0dG9uLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgZHVyYXRpb246IDEsXHJcbiAgZWFzZTogWzAuNCwgMCwgMC4yLCAxXSxcclxufTtcclxuXHJcbmNvbnN0IHdvcmRzID0gW1wibmV4QVJcIiwgXCJuZXhOZXRcIiwgXCJuZXhBaVwiXTtcclxuXHJcbmNvbnN0IEZlYXR1cmVkUHJvamVjdCA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3b3JkSW5kZXgsIHNldFdvcmRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGNvbnRyb2xzSW5mbyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IGNvbnRyb2xzQXJyb3cgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVN0eWxlZFRoZW1lKCk7XHJcbiAgY29uc3QgW3sgaXNNZW51T3BlbiB9XSA9IHVzZU1lbnVDb250ZXh0KCk7XHJcbiAgY29uc3Qge1xyXG4gICAgYWRkQ3Vyc29yQ29sb3IsXHJcbiAgICByZXNldEN1cnNvckNvbG9yLFxyXG4gICAgYWRkQ3Vyc29yQm9yZGVyLFxyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyLFxyXG4gIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG4gIGNvbnN0IGlzVGFibGV0VmlldyA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgICAoeyBicmVha3BvaW50cyB9KSA9PiBgKG1heC13aWR0aDoke2JyZWFrcG9pbnRzLnNpemVzLnRhYmxldH1weClgLFxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eXBpbmdFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpc1R5cGluZykge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKChwcmV2KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0Q2hhckluZGV4ID0gcHJldi5sZW5ndGggPCB3b3Jkc1t3b3JkSW5kZXhdLmxlbmd0aCBcclxuICAgICAgICAgICAgPyBwcmV2Lmxlbmd0aCArIDEgXHJcbiAgICAgICAgICAgIDogcHJldi5sZW5ndGg7XHJcbiAgICAgICAgICByZXR1cm4gd29yZHNbd29yZEluZGV4XS5zbGljZSgwLCBuZXh0Q2hhckluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCgocHJldikgPT4gcHJldi5zbGljZSgwLCAtMSkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzVHlwaW5nKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA9PT0gd29yZHNbd29yZEluZGV4XS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNldElzVHlwaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNUeXBpbmcodHJ1ZSksIDEwMDApOyAvLyBXYWl0IGJlZm9yZSBzdGFydGluZyB0byBjbGVhclxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudFdvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRXb3JkSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSB3b3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHR5cGluZ0VmZmVjdCgpO1xyXG4gICAgfSwgaXNUeXBpbmcgPyAxNTAgOiAxMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgfSwgW2N1cnJlbnRXb3JkLCBpc1R5cGluZywgd29yZEluZGV4XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICBhZGRDdXJzb3JCb3JkZXIoKTtcclxuICAgIGFkZEN1cnNvckNvbG9yKHRoZW1lLnRleHQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNNZW51T3BlbikgcmV0dXJuO1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICByZXNldEN1cnNvckNvbG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5jaG9ySG92ZXJTdGFydCA9ICgpID0+IHtcclxuICAgIGFkZEN1cnNvckJvcmRlcigpO1xyXG4gICAgY29udHJvbHNJbmZvLnN0YXJ0KHsgb3BhY2l0eTogMSB9KTtcclxuICAgIGNvbnRyb2xzQXJyb3cuc3RhcnQoeyB4OiAwIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuY2hvckhvdmVyRW5kID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ3Vyc29yQm9yZGVyKCk7XHJcbiAgICBjb250cm9sc0luZm8uc3RhcnQoeyBvcGFjaXR5OiAwIH0pO1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29udHJvbHNBcnJvdy5zdGFydCh7IHg6IGlzVGFibGV0VmlldyA/IC0yNS4xOSA6IC0zMyB9KTtcclxuICB9LCBbY29udHJvbHNBcnJvdywgaXNUYWJsZXRWaWV3XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPG1vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL25vdC1odW1ibGVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPFByb2plY3RBbmNob3JcclxuICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9e2hhbmRsZUFuY2hvckhvdmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgb25Ib3ZlckVuZD17aGFuZGxlQW5jaG9ySG92ZXJFbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UHJvamVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRXb3JkfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHNJbmZvfVxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+Sm9pbiBVcyBvbiBhIEpvdXJuZXk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+MDAzPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIEdFVCA8YnIgLz4gU1RBUlRFRFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJvdyBhbmltYXRlPXtjb250cm9sc0Fycm93fSB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RUaXRsZT5cclxuICAgICAgICAgICAgICA8L1Byb2plY3RJbmZvPlxyXG4gICAgICAgICAgICAgIDxWaWRlb1ByZXZpZXc+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW8gbG9vcCBhdXRvUGxheSBtdXRlZCBzcmM9XCJ2aWRlb3MvZmVhdHVyZWQtdmlkZW8ubXA0XCIgLz5cclxuICAgICAgICAgICAgICA8L1ZpZGVvUHJldmlldz5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0QW5jaG9yPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9BbmltYXRlT25TY3JlZW4+XHJcbiAgICAgIDxBbmltYXRlT25TY3JlZW4+XHJcbiAgICAgICAgPE1lbnVDb250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxNZW51QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3RpY2t5PXtmYWxzZX1cclxuICAgICAgICAgICAgICB0aXRsZT1cIlZpZXcgTW9yZVwiXHJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnVDb250YWluZXI+XHJcbiAgICAgIDwvQW5pbWF0ZU9uU2NyZWVuPlxyXG4gICAgPC9Db250ZW50U2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRQcm9qZWN0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9GZWF0dXJlZFByb2plY3QnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBjb250YWluZXJTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9jb250YWluZXInO1xuaW1wb3J0IHsgc2Vjb25kYXJ5Rm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC90ZXh0JztcbmltcG9ydCBEZWZhdWx0TWVudUJ1dHRvbiBmcm9tICcuLi8uLi9NZW51QnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgJHtjb250YWluZXJTdHlsZXN9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudGFibGV0YFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0QW5jaG9yID0gc3R5bGVkKG1vdGlvbi5hKWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBtYXJnaW46IDAgMCAyMTVweDtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwOHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SW5mbyA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgbWFyZ2luLWxlZnQ6IDguMzMzJTtcbiAgd2lkdGg6IDgzLjMzMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmIGgzLFxuICAmIC5wcm9qZWN0LWluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gICYgaDMge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgfVxuXG4gICYgLnByb2plY3QtaW5mbyB7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICAmIGg0IHtcbiAgICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbWFsbGBcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB3aWR0aDogODMuMzMzJTtcblxuICAgICYgLnByb2plY3QtaW5mbyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgJiBoMyB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjc3Nzc3Nzc3ODtcbiAgICAgIHRvcDogMTdweDtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RUaXRsZSA9IHN0eWxlZChtb3Rpb24uaDEpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzQ3cHg7XG4gIGxlZnQ6IC0zcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgJiAuYXJyb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAyNXB4IDAgMCAzcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIHdpZHRoOiAxMDFweDtcblxuICAgICYgc3ZnIHBhdGgge1xuICAgICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICB9XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICB0b3A6IDE2NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjcxNjY2NjY2Njc7XG5cbiAgICAmIC5hcnJvdyB7XG4gICAgICBtYXJnaW46IDEwcHggMCAwIDJweDtcbiAgICAgIHdpZHRoOiA3Ni4xOXB4O1xuICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgVmlkZW9QcmV2aWV3ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDgwcHg7XG4gIG1hcmdpbjogMDtcblxuICAmIHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDY0cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gc3R5bGVkKERlZmF1bHRNZW51QnV0dG9uKWBcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMzBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJlZH07XG5cbiAgJjo6YmVmb3JlLFxuICAmOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gICYgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1lZGl1bWBcbiAgICB3aWR0aDogY2FsYygzMy4zMzMlIC0gMzBweCk7XG4gIGB9O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAyMzVweDtcblxuICAgICYgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICBgfTtcblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnRhYmxldGBcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgbWF4LXdpZHRoOiAyMTVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG5cbiAgICAmIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3Nzc3Nzc3Nzg7XG4gICAgfVxuICBgfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICcuLi8uLi9ob29rcy91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcEJhcic7XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBoaWRkZW46IGlzVGFibGV0VmlldyA9PiAoeyB5OiBpc1RhYmxldFZpZXcgPyAtODEgOiAtMTMxIH0pLFxyXG4gIHNob3c6IHsgeTogMCB9LFxyXG59O1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlzVGFibGV0VmlldyA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgICAoeyBicmVha3BvaW50cyB9KSA9PiBgKG1heC13aWR0aDoke2JyZWFrcG9pbnRzLnNpemVzLnRhYmxldH1weClgLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQmFyXHJcbiAgICAgIGtleT17aXNUYWJsZXRWaWV3fVxyXG4gICAgICBkaXJlY3Rpb249XCJ1cFwiXHJcbiAgICAgIHJlbmRlckFzPVwiZm9vdGVyXCJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICBpbml0aWFsPXtmYWxzZX1cclxuICAgICAgY3VzdG9tPXtpc1RhYmxldFZpZXd9XHJcbiAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICBkdXJhdGlvbjogMC43LFxyXG4gICAgICAgIGVhc2U6IFswLjY2NiwgMCwgMC4yMzcsIDFdLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iLCJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFycm93ID0gKHsgZmlsbENvbG9yID0gY29sb3JzLndoaXRlLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPG1vdGlvbi5zdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgdmlld0JveD1cIjAgMCAxMDEgNTdcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMzMgMzRIMFYyNGg4MS40MjlMNjYgNy44ODQgNzMuNTQ4IDBsMTkuODc3IDIwLjc2My4wMjctLjAyOUwxMDEgMjguNjE4IDczLjgyOSA1N2wtNy41NDgtNy44ODRMODAuNzUzIDM0SDMzelwiXHJcbiAgICAgIGZpbGw9e2ZpbGxDb2xvcn1cclxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgID48L3BhdGg+XHJcbiAgPC9tb3Rpb24uc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XHJcbiIsImNvbnN0IEZhY2Vib29rID0gcHJvcHMgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTEgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0zLjYyNSAxLjIzNkM0LjU0NC4zNDYgNS44NS4wNDQgNy4wODUuMDA2IDguMzg3LS4wMDQgOS42OTEuMDAzIDEwLjk5NS4wMDRjLjAwNSAxLjQuMDA2IDIuODAyIDAgNC4yMDMtLjg0My0uMDAxLTEuNjg3LjAwMi0yLjUzLS4wMDEtLjUzNC0uMDM0LTEuMDgzLjM3OC0xLjE4LjkxOC0uMDEzLjkzNy0uMDA0IDEuODc1LS4wMDQgMi44MTMgMS4yMzYuMDA1IDIuNDcyLS4wMDIgMy43MDguMDAzYTUzLjI5NyA1My4yOTcgMCAwMS0uNDUgNC4wNWMtMS4wOTEuMDExLTIuMTgzIDAtMy4yNzUuMDA3LS4wMSA0IC4wMDUgOC0uMDA4IDEyLTEuNjIyLjAwNi0zLjI0NC0uMDA0LTQuODY2LjAwNC0uMDMtNCAuMDAyLTguMDAzLS4wMTctMTIuMDA0LS43OTEtLjAwOC0xLjU4My4wMDYtMi4zNzQtLjAwNy4wMDMtMS4zNDQuMDAxLTIuNjg5LjAwMS00LjAzMy43OTEtLjAxIDEuNTgyLjAwMiAyLjM3My0uMDA2LjAyNC0xLjMwNy0uMDI0LTIuNjE2LjAyNS0zLjkyMi4wOC0xLjAzNS40NjYtMi4wNzcgMS4yMjYtMi43OTJ6XCJcclxuICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuICAgICAgZmlsbD1cIiNFQTI4MUVcIlxyXG4gICAgPjwvcGF0aD5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rO1xyXG4iLCJjb25zdCBJbnN0YWdyYW0gPSBwcm9wcyA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIHsuLi5wcm9wc30+XHJcbiAgICA8ZyBmaWxsPVwiI0VBMjgxRVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEwLjUgMEM3LjY0OCAwIDcuMjkuMDEyIDYuMTcuMDYzIDUuMDU0LjExNCA0LjI5LjI5MiAzLjYyMy41NTFhNS4xNDYgNS4xNDYgMCAwMC0xLjg2IDEuMjExIDUuMTQ3IDUuMTQ3IDAgMDAtMS4yMSAxLjg2Qy4yOTEgNC4yOS4xMTMgNS4wNTMuMDYyIDYuMTcxLjAxMiA3LjI5IDAgNy42NDggMCAxMC41YzAgMi44NTIuMDEyIDMuMjEuMDYzIDQuMzMuMDUxIDEuMTE3LjIyOSAxLjg4LjQ4OCAyLjU0OC4yNjkuNjkuNjI4IDEuMjc2IDEuMjExIDEuODYuNTg0LjU4MyAxLjE3Ljk0MiAxLjg2IDEuMjEuNjY4LjI2IDEuNDMxLjQzOCAyLjU0OS40ODkgMS4xMi4wNSAxLjQ3Ny4wNjMgNC4zMjkuMDYzIDIuODUyIDAgMy4yMS0uMDEyIDQuMzMtLjA2MyAxLjExNy0uMDUxIDEuODgtLjIyOSAyLjU0OC0uNDg4YTUuMTQ2IDUuMTQ2IDAgMDAxLjg2LTEuMjExIDUuMTQ3IDUuMTQ3IDAgMDAxLjIxLTEuODZjLjI2LS42NjguNDM4LTEuNDMxLjQ4OS0yLjU0OS4wNTEtMS4xMi4wNjMtMS40NzcuMDYzLTQuMzI5IDAtMi44NTItLjAxMi0zLjIxLS4wNjMtNC4zMy0uMDUxLTEuMTE3LS4yMjktMS44OC0uNDg4LTIuNTQ4YTUuMTQ3IDUuMTQ3IDAgMDAtMS4yMTEtMS44NiA1LjE0NiA1LjE0NiAwIDAwLTEuODYtMS4yMWMtLjY2OC0uMjYtMS40MzEtLjQzOC0yLjU0OS0uNDg5QzEzLjcxLjAxMiAxMy4zNTIgMCAxMC41IDBtMCAxLjg5MmMyLjgwNCAwIDMuMTM2LjAxIDQuMjQzLjA2MSAxLjAyNC4wNDcgMS41OC4yMTggMS45NS4zNjIuNDkuMTkuODQuNDE4IDEuMjA3Ljc4NS4zNjcuMzY4LjU5NS43MTcuNzg1IDEuMjA3LjE0NC4zNy4zMTUuOTI2LjM2MiAxLjk1LjA1IDEuMTA3LjA2MSAxLjQ0LjA2MSA0LjI0MyAwIDIuODA0LS4wMSAzLjEzNi0uMDYxIDQuMjQzLS4wNDcgMS4wMjQtLjIxOCAxLjU4LS4zNjIgMS45NS0uMTkuNDktLjQxOC44NC0uNzg1IDEuMjA3YTMuMjUyIDMuMjUyIDAgMDEtMS4yMDcuNzg1Yy0uMzcuMTQ0LS45MjYuMzE1LTEuOTUuMzYyLTEuMTA3LjA1LTEuNDQuMDYxLTQuMjQzLjA2MS0yLjgwNCAwLTMuMTM2LS4wMS00LjI0My0uMDYxLTEuMDI0LS4wNDctMS41OC0uMjE4LTEuOTUtLjM2Mi0uNDktLjE5LS44NC0uNDE4LTEuMjA3LS43ODVhMy4yNTQgMy4yNTQgMCAwMS0uNzg1LTEuMjA3Yy0uMTQ0LS4zNy0uMzE1LS45MjYtLjM2Mi0xLjk1LS4wNS0xLjEwNy0uMDYxLTEuNDQtLjA2MS00LjI0MyAwLTIuODA0LjAxLTMuMTM2LjA2MS00LjI0My4wNDctMS4wMjQuMjE4LTEuNTguMzYyLTEuOTUuMTktLjQ5LjQxOC0uODQuNzg1LTEuMjA3YTMuMjUzIDMuMjUzIDAgMDExLjIwNy0uNzg1Yy4zNy0uMTQ0LjkyNi0uMzE1IDEuOTUtLjM2MiAxLjEwNy0uMDUgMS40NC0uMDYxIDQuMjQzLS4wNjFcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTAuNSAxNC4wN2EzLjU3IDMuNTcgMCAxMTAtNy4xNCAzLjU3IDMuNTcgMCAwMTAgNy4xNG0wLTkuMDdhNS41IDUuNSAwIDEwMCAxMSA1LjUgNS41IDAgMDAwLTExXCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCBkPVwiTTE3IDVhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwXCI+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zdGFncmFtO1xyXG4iLCJjb25zdCBMaW5rZWRJbiA9IHByb3BzID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjAuNDUyIDIwLjQ1MmgtMy41NDh2LTUuNTY4YzAtMS4zMjctLjAyNy0zLjAzNC0xLjg0NC0zLjAzNC0xLjg0MyAwLTIuMTI2IDEuNDMtMi4xMjYgMi45MDh2NS42OTRoLTMuNTQ4VjloMy40MDR2MS40NTFoLjA0OWMuNDc1LS44OTcgMS42MzctMS44MzkgMy4zNTctMS44MzkgMy41OTYgMCA0LjI1MiAyLjM3IDQuMjUyIDUuNDQ0djYuMzk3em0tMTUuOTQ0LTEyLjU5Yy0xLjE1NyAwLTIuMDkuOTM0LTIuMDkgMi4wOXMuOTM0IDIuMDkgMi4wOSAyLjA5IDIuMDktLjkzNCAyLjA5LTIuMDktLjkzNC0yLjA5LTIuMDktMi4wOXptMS43NzQgMTIuNTlIMi42NzhWOWgzLjU0OHYxMS40NTJ6bTE3Ljc2OC0yMS40NTJIMS42NzhDLjc1IDAgMCAuNzUgMCAxLjY3OHYyMC42NDRDMCAyMy4yNS43NSAyNCAxLjY3OCAyNGgyMC42NDRDMjMuMjUgMjQgMjQgMjMuMjUgMjQgMjIuMzIyVjEuNjc4QzI0IC43NSAyMy4yNSAwIDIyLjMyMiAwelwiXHJcbiAgICAgICAgZmlsbD1cIiNFQTI4MUVcIiBcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGlua2VkSW47XHJcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBMb2dvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEVuc3VyZSBwb3NpdGlvbmluZyBjb250ZXh0ICovXHJcbiAgICAgICAgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gIHJpZ2h0OiAyOHB4O1xyXG4gIGJvdHRvbTogMTdweDsgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZExvZ28gPSBzdHlsZWQuaW1nYFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExvZ29Db250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRMb2dvXHJcbiAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCIgLy8gUmVmZXJlbmNlIGRpcmVjdGx5IGZyb20gdGhlIHB1YmxpYyBmb2xkZXJcclxuICAgICAgICBhbHQ9XCJMdW1pbmV4YSBMb2dvXCJcclxuICAgICAgLz5cclxuICAgIDwvTG9nb0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiY29uc3QgVHdpdHRlciA9IHByb3BzID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjMuNjMzIDQuOTk5Yy0uODg1LjM5Mi0xLjgzLjY1NS0yLjgyNi43NzVhNC45MzUgNC45MzUgMCAwMDIuMTYzLTIuNzI0IDkuODYzIDkuODYzIDAgMDEtMy4xMjcgMS4yIDQuOTI2IDQuOTI2IDAgMDAtOC4zOCA0LjQ4MkExMy45NiAxMy45NiAwIDAxMS42NyAzLjE0OWE0LjkyMyA0LjkyMyAwIDAwMS41MjMgNi41NjUgNC45MDQgNC45MDQgMCAwMS0yLjIyOC0uNjE1di4wNjFhNC45MzMgNC45MzMgMCAwMDMuOTQ2IDQuODQgNC45MjcgNC45MjcgMCAwMS0yLjIxNS4wODQgNC45MzUgNC45MzUgMCAwMDQuNjA0IDMuNDE3QTkuODY3IDkuODY3IDAgMDEwIDIwLjI1M2ExMy45MzUgMTMuOTM1IDAgMDA3LjU0OCAyLjIxMmM5LjA1OCAwIDE0LjAwMy03LjUwNyAxNC4wMDMtMTMuOTg1IDAtLjIxMy0uMDA1LS40MjYtLjAxNC0uNjM3QTEwLjAzMiAxMC4wMzIgMCAwMDI0IDQuNTgzYTkuOTY1IDkuOTY1IDAgMDEtMi4zNjcuNjQ5IDQuOTEzIDQuOTEzIDAgMDAyLjE1Ny0yLjcyNHpcIlxyXG4gICAgICAgIGZpbGw9XCIjRUEyODFFXCIgLy8gQ2hhbmdlZCB0byByZWRcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgVHdpdHRlcjtcclxuICAiLCJjb25zdCBZb3VUdWJlID0gcHJvcHMgPT4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yMy40OTggNi4xODZjLS4yNzMtMS4wNzUtMS4wNzUtMS45MjItMi4xMy0yLjA4Ni0xLjk5NS0uMTk3LTQuMzU4LS4xOTctNi44NzgtLjE5N3MtNC44ODMgMC02Ljg3OC4xOTdjLTEuMDU1LjE2NC0xLjg1NyAxLjAxMS0yLjEzIDIuMDg2QzUuMDAxIDguMzU0IDUgMTIgNSAxMnMwIDMuNjQ2LjM2MiA1LjgxNGMuMjczIDEuMDc1IDEuMDc1IDEuOTIyIDIuMTMgMi4wODYgMS45OTUuMTk3IDQuMzU4LjE5NyA2Ljg3OC4xOTdzNC44ODMgMCA2Ljg3OC0uMTk3YzEuMDU1LS4xNjQgMS44NTctMS4wMTEgMi4xMy0yLjA4NkMyMyAxNS42NDYgMjMgMTIgMjMgMTJzMC0zLjY0Ni0uNTAyLTUuODE0ek05LjU0NSAxNS4xNjJWOC44MzhsNi4yMzYgMy4xNjItNi4yMzYgMy4xNjJ6XCJcclxuICAgICAgICBmaWxsPVwiI0VBMjgxRVwiIC8vIFlvdVR1YmUgcmVkXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFlvdVR1YmU7XHJcbiAgIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvdyB9IGZyb20gJy4vQXJyb3cnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rIH0gZnJvbSAnLi9GYWNlYm9vayc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5zdGFncmFtIH0gZnJvbSAnLi9JbnN0YWdyYW0nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFlvdXR1YmUgfSBmcm9tICcuL1lvdXR1YmUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXIgfSBmcm9tICcuL1R3aXR0ZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtlZGluIH0gZnJvbSAnLi9MaW5rZWRpbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU1lbnVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tZW51JztcclxuaW1wb3J0IHVzZUN1cnNvclN0eWxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUN1cnNvclN0eWxlJztcclxuaW1wb3J0IFN0aWNreUN1cnNvciBmcm9tICcuLi9TdGlja3lDdXJzb3InO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBNZW51QnV0dG9uID0gKHsgc3RpY2t5ID0gdHJ1ZSwgdGl0bGUgPSAnJywgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XHJcbiAgY29uc3QgWywgZGlzcGF0Y2hdID0gdXNlTWVudUNvbnRleHQoKTtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPblRvZ2dsZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9NRU5VJyB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGlja3lDdXJzb3Igc3RpY2t5PXtzdGlja3l9PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXtyZW1vdmVDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT25Ub2dnbGV9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1N0aWNreUN1cnNvcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhSZWFjdC5mb3J3YXJkUmVmKE1lbnVCdXR0b24pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWVudUJ1dHRvbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA2M3B4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cblxuICAmIHNwYW4ge1xuICAgICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIH1cblxuICAmOmhvdmVyIHNwYW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnNtYWxsYFxuICAgICYgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH07XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy50YWJsZXRgXG4gICAgd2lkdGg6IDY2cHg7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICBgfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5pbXBvcnQgeyBJbnN0YWdyYW0sIEZhY2Vib29rLCBZb3V0dWJlLCBUd2l0dGVyLCBMaW5rZWRpbiB9IGZyb20gJy4uL0ljb25zJztcclxuaW1wb3J0IFN0aWNreUN1cnNvciBmcm9tICcuLi9TdGlja3lDdXJzb3InO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIExpbmsgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBtZWRpYXMgPSBbXHJcbiAgeyBjb21wb25lbnQ6IEluc3RhZ3JhbSwgdXJsOiAnaW5zdGFncmFtLmNvbS9fbHVtaW5leGEvJyB9LFxyXG4gIHsgY29tcG9uZW50OiBGYWNlYm9vaywgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FybHVtaW5leGEvJyB9LFxyXG4gIHsgY29tcG9uZW50OiBZb3V0dWJlLCB1cmw6ICdodHRwczovL3lvdXR1YmUuY29tJyB9LFxyXG4gIHsgY29tcG9uZW50OiBUd2l0dGVyLCB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL19sdW1pbmV4YSd9LFxyXG4gIHsgY29tcG9uZW50OiBMaW5rZWRpbiwgdXJsOiAnaHR0cHM6Ly9saW5rZWRpbi5jb20vY29tcGFueS9sdW1pbmV4YS10ZWNobm9sb2d5J30sXHJcbl07XHJcblxyXG5jb25zdCBTb2NpYWxNZWRpYSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGFkZEN1cnNvckJvcmRlciwgcmVtb3ZlQ3Vyc29yQm9yZGVyIH0gPSB1c2VDdXJzb3JTdHlsZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB7Li4ucHJvcHN9PlxyXG4gICAgICB7bWVkaWFzLm1hcCgoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgdXJsIH0pID0+IChcclxuICAgICAgICA8U3RpY2t5Q3Vyc29yIGtleT17dXJsfT5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXthZGRDdXJzb3JCb3JkZXJ9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17cmVtb3ZlQ3Vyc29yQm9yZGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9TdGlja3lDdXJzb3I+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU29jaWFsTWVkaWEpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Tb2NpYWxNZWRpYSc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNlY29uZGFyeUZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvdGV4dCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuc21hbGxgXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gICR7c2Vjb25kYXJ5Rm9udFN0eWxlfTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA0MXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gICY6bnRoLW9mLXR5cGUoMikge1xuICAgIHdpZHRoOiAzMXB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuXG4gICY6aG92ZXIgc3ZnIHBhdGgge1xuICAgIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQ3Vyc29yU3R5bGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlQ3Vyc29yU3R5bGUnO1xyXG5cclxuY29uc3QgU3RpY2t5Q3Vyc29yID0gKHsgY2hpbGRyZW46IGNoaWxkcmVuUHJvcCwgc3RpY2t5ID0gdHJ1ZSB9KSA9PiB7XHJcbiAgY29uc3QgY2hpbGRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgeyBsb2NrQ3Vyc29yUG9zaXRpb24gfSA9IHVzZUN1cnNvclN0eWxlKCk7XHJcblxyXG4gIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgY2hpbGQgPT4ge1xyXG4gICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSB9ID0gY2hpbGQucHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IGV2ZW50ID0+IHtcclxuICAgICAgaWYgKCFjaGlsZFJlZi5jdXJyZW50KSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNoaWxkUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICBjb25zdCB4ID0gcG9zaXRpb24ud2lkdGggLyAyICsgcG9zaXRpb24ubGVmdDtcclxuICAgICAgY29uc3QgeSA9IHBvc2l0aW9uLmhlaWdodCAvIDIgKyBwb3NpdGlvbi50b3A7XHJcbiAgICAgIGxvY2tDdXJzb3JQb3NpdGlvbih7IHgsIHkgfSk7XHJcblxyXG4gICAgICBpZiAob25Nb3VzZUVudGVyKSB7XHJcbiAgICAgICAgb25Nb3VzZUVudGVyKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoIWNoaWxkUmVmLmN1cnJlbnQpIHJldHVybjtcclxuXHJcbiAgICAgIGxvY2tDdXJzb3JQb3NpdGlvbihudWxsKTtcclxuXHJcbiAgICAgIGlmIChvbk1vdXNlTGVhdmUpIHtcclxuICAgICAgICBvbk1vdXNlTGVhdmUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZiA9IG5vZGUgPT4ge1xyXG4gICAgICAvLyBLZWVwIHlvdXIgb3duIHJlZmVyZW5jZVxyXG4gICAgICBjaGlsZFJlZi5jdXJyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIHJlZiwgaWYgYW55XHJcbiAgICAgIGNvbnN0IHsgcmVmIH0gPSBjaGlsZDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVmKG5vZGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgIG9uTW91c2VFbnRlcjogaGFuZGxlTW91c2VFbnRlcixcclxuICAgICAgb25Nb3VzZUxlYXZlOiBoYW5kbGVNb3VzZUxlYXZlLFxyXG4gICAgICByZWY6IGhhbmRsZVJlZixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc3RpY2t5ID8gY2hpbGRyZW4gOiBjaGlsZHJlblByb3A7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFN0aWNreUN1cnNvcik7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N0aWNreUN1cnNvcic7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vc3R5bGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGN1cnNvclN0eWxlOiB7XHJcbiAgICBib3JkZXJlZDogZmFsc2UsXHJcbiAgICBjb2xvcjogY29sb3JzLnJlZCxcclxuICB9LFxyXG4gIHBvc2l0aW9uOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1VQREFURV9DVVJTT1JfU1RZTEUnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0FERF9DVVJTT1JfQk9SREVSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnNvclN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jdXJzb3JTdHlsZSxcclxuICAgICAgICAgIGJvcmRlcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdSRU1PVkVfQ1VSU09SX0JPUkRFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJzb3JTdHlsZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY3Vyc29yU3R5bGUsXHJcbiAgICAgICAgICBib3JkZXJlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0FERF9DVVJTT1JfQ09MT1InOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgY29sb3I6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdSRVNFVF9DVVJTT1JfQ09MT1InOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmN1cnNvclN0eWxlLFxyXG4gICAgICAgICAgY29sb3I6IElOSVRJQUxfU1RBVEUuY3Vyc29yU3R5bGUuY29sb3IsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPQ0tfQ1VSU09SX1BPU0lUSU9OJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJzb3JDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEN1cnNvckNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIElOSVRJQUxfU1RBVEUpO1xyXG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBzdGF0ZSwgZGlzcGF0Y2ggfSksIFtzdGF0ZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q3Vyc29yQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L0N1cnNvckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUN1cnNvckNvbnRleHQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IFJlYWN0LnVzZUNvbnRleHQoQ3Vyc29yQ29udGV4dCk7XHJcbiAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdO1xyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBpc01lbnVPcGVuOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdUT0dHTEVfTUVOVSc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc01lbnVPcGVuOiAhc3RhdGUuaXNNZW51T3BlbixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNZW51Q29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyb290UmVkdWNlciwgSU5JVElBTF9TVEFURSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IHN0YXRlLCBkaXNwYXRjaCB9KSwgW3N0YXRlXSk7XHJcbiAgcmV0dXJuIDxNZW51Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L01lbnVDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1lbnVDb250ZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KE1lbnVDb250ZXh0KTtcclxuICByZXR1cm4gW3N0YXRlLCBkaXNwYXRjaF07XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUN1cnNvckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2N1cnNvcic7XHJcblxyXG5jb25zdCB1c2VDdXJzb3JTdHlsZSA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUN1cnNvckNvbnRleHQoKTtcclxuXHJcbiAgY29uc3QgYWRkQ3Vyc29yQm9yZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NVUlNPUl9CT1JERVInIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCByZW1vdmVDdXJzb3JCb3JkZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfQ1VSU09SX0JPUkRFUicgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGFkZEN1cnNvckNvbG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoY29sb3IpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NVUlNPUl9DT0xPUicsIHBheWxvYWQ6IGNvbG9yIH0pO1xyXG4gICAgfSxcclxuICAgIFtkaXNwYXRjaF0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcmVzZXRDdXJzb3JDb2xvciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFU0VUX0NVUlNPUl9DT0xPUicgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGxvY2tDdXJzb3JQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQ0tfQ1VSU09SX1BPU0lUSU9OJywgcGF5bG9hZDogY29vcmRpbmF0ZXMgfSk7XHJcbiAgICB9LFxyXG4gICAgW2Rpc3BhdGNoXSxcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBhZGRDdXJzb3JDb2xvcixcclxuICAgIHJlc2V0Q3Vyc29yQ29sb3IsXHJcbiAgICBhZGRDdXJzb3JCb3JkZXIsXHJcbiAgICByZW1vdmVDdXJzb3JCb3JkZXIsXHJcbiAgICBsb2NrQ3Vyc29yUG9zaXRpb24sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUN1cnNvclN0eWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3Qgc2V0UmVmID0gKHJlZiwgdmFsdWUpID0+IHtcclxuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmVmKHZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHJlZikge1xyXG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB1c2VGb3JrUmVmID0gKHJlZkEsIHJlZkIpID0+XHJcbiAgLyoqXHJcbiAgICogVGhpcyB3aWxsIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiB0aGUgcmVmIHByb3BzIGNoYW5nZSBhbmQgYXJlIGRlZmluZWQuXHJcbiAgICogVGhpcyBtZWFucyByZWFjdCB3aWxsIGNhbGwgdGhlIG9sZCBmb3JrUmVmIHdpdGggYG51bGxgIGFuZCB0aGUgbmV3IGZvcmtSZWZcclxuICAgKiB3aXRoIHRoZSByZWYuIENsZWFudXAgbmF0dXJhbGx5IGVtZXJnZXMgZnJvbSB0aGlzIGJlaGF2aW9yLlxyXG4gICAqL1xyXG4gIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlZkEgPT0gbnVsbCAmJiByZWZCID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHJlZlZhbHVlKSA9PiB7XHJcbiAgICAgIHNldFJlZihyZWZBLCByZWZWYWx1ZSk7XHJcbiAgICAgIHNldFJlZihyZWZCLCByZWZWYWx1ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtyZWZBLCByZWZCXSk7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZvcmtSZWY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHVzZU1lZGlhUXVlcnkgPSAocXVlcnlJbnB1dCkgPT4ge1xyXG4gIGNvbnN0IHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gIGxldCBxdWVyeSA9IHR5cGVvZiBxdWVyeUlucHV0ID09PSAnZnVuY3Rpb24nID8gcXVlcnlJbnB1dCh0aGVtZSkgOiBxdWVyeUlucHV0O1xyXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXkBtZWRpYSggPykvbSwgJycpO1xyXG5cclxuICBjb25zdCBpc0NsaWVudFNpZGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcclxuICBjb25zdCBkZWZhdWx0TWF0Y2hlcyA9IGZhbHNlO1xyXG4gIGNvbnN0IG1hdGNoTWVkaWEgPSBpc0NsaWVudFNpZGUgPyB3aW5kb3cubWF0Y2hNZWRpYSA6IG51bGw7XHJcblxyXG4gIGNvbnN0IFttYXRjaCwgc2V0TWF0Y2hdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgaWYgKGlzQ2xpZW50U2lkZSkge1xyXG4gICAgICByZXR1cm4gbWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmNlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgd2UgcmVseSBvbiB0aGVcclxuICAgIC8vIGV2ZW50IGxpc3RlbmVycyB0byByZXR1cm4gdGhlIGNvcnJlY3QgbWF0Y2hlcyB2YWx1ZS5cclxuICAgIHJldHVybiBkZWZhdWx0TWF0Y2hlcztcclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNDbGllbnRTaWRlKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcXVlcnlMaXN0ID0gbWF0Y2hNZWRpYShxdWVyeSk7XHJcbiAgICBjb25zdCB1cGRhdGVNYXRjaCA9ICgpID0+IHtcclxuICAgICAgc2V0TWF0Y2gocXVlcnlMaXN0Lm1hdGNoZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVNYXRjaCgpO1xyXG4gICAgcXVlcnlMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZU1hdGNoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBxdWVyeUxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlTWF0Y2gpO1xyXG4gICAgfTtcclxuICB9LCBbcXVlcnksIG1hdGNoTWVkaWEsIGlzQ2xpZW50U2lkZV0pO1xyXG5cclxuICByZXR1cm4gbWF0Y2g7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VNZWRpYVF1ZXJ5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCB1c2VTdHlsZWRUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIHJldHVybiB0aGVtZSB8fCB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlZFRoZW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlV2luZG93U2l6ZSA9ICgpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxuICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICB9KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcbiAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXG4gICAgICBzZXRXaW5kb3dTaXplKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgIC8vIENhbGwgaGFuZGxlciByaWdodCBhd2F5IHNvIHN0YXRlIGdldHMgdXBkYXRlZCB3aXRoIGluaXRpYWwgd2luZG93IHNpemVcbiAgICBoYW5kbGVSZXNpemUoKTtcblxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXG4gICAgLy8gcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnRcbiAgcmV0dXJuIHdpbmRvd1NpemU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgY2xlYW51cCA9IFJlYWN0LnVzZVJlZjwoKSA9PiB2b2lkPigpXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgLy8gY2xlYW51cCBwcmV2aW91cyBldmVudCBoYW5kbGVyc1xuICAgICAgaWYgKGNsZWFudXAuY3VycmVudCkge1xuICAgICAgICBjbGVhbnVwLmN1cnJlbnQoKVxuICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgZWwgJiYgZWwudGFnTmFtZSAmJiBpc0xvY2FsVVJMKGhyZWYpKSB7XG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgIGNsZWFudXAuY3VycmVudCA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhlbCwgKCkgPT4ge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICBsb2NhbGU6XG4gICAgICAgICAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gbG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbcCwgY2hpbGRSZWYsIGhyZWYsIGFzLCByb3V0ZXIsIGxvY2FsZV1cbiAgKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgsXG4gICAgICB9ID0gcmVxdWlyZSgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG5cbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKGFzLCB0aGlzLmxvY2FsZXMpXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbiwgb3B0aW9ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZSgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuICAgICAgICAubm9ybWFsaXplTG9jYWxlUGF0aCBhcyB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpLm5vcm1hbGl6ZUxvY2FsZVBhdGhcblxuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBkZWxldGUgcXVlcnkuX19uZXh0TG9jYWxlXG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhbm5lclNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0Jhbm5lcic7XHJcbmltcG9ydCBDb250ZW50U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQ29udGVudCc7XHJcbmltcG9ydCBGZWF0dXJlZFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0ZlYXR1cmVkUHJvamVjdCc7XHJcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0Fib3V0JztcclxuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9Db250YWN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvRm9vdGVyJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCYW5uZXJTZWN0aW9uIC8+XHJcbiAgICAgIDxDb250ZW50U2VjdGlvbiAvPlxyXG4gICAgICA8RmVhdHVyZWRTZWN0aW9uIC8+XHJcbiAgICAgIDxBYm91dFNlY3Rpb24gLz5cclxuICAgICAgPENvbnRhY3RTZWN0aW9uIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSG9tZSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgd2hpdGU6ICcjZmZmJyxcbiAgYmxhY2s6ICcjMDAwJyxcbiAgcmVkOiAnI0VBMjgxRScsXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4gIG1heC13aWR0aDogMTIzNHB4O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUZvbnRTdHlsZSA9IGNzc2BcbiAgZm9udC1mYW1pbHk6IHByZXNpY2F2LCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuYDtcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICBbXHJcbiAgICAnSW5ub3ZhdGl2ZSBQcm9kdWN0cycsXHJcbiAgICBbXHJcbiAgICAgICdBUiBDYXJkcycsXHJcbiAgICAgICdBUiBCdXNpbmVzcyBDYXJkcycsXHJcbiAgICAgICdBUiBXZWRkaW5nIENhcmRzJyxcclxuICAgICAgJ0FSIFN0aWNrZXJzJyxcclxuICAgICAgJ0FSIFQtU2hpcnRzJyxcclxuICAgICAgJ0N1c3RvbWUgQVIgQnVpbGQgd2l0aCBEYXNoYm9hcmQnLFxyXG4gICAgXSxcclxuICBdLFxyXG4gIFtcclxuICAgICduZXhBUiAtIEFSICYgWFInLFxyXG4gICAgW1xyXG4gICAgICAnSW1hZ2UgVHJhY2tpbmcgQVInLFxyXG4gICAgICAnTXVsdGkgSW1hZ2UgVHJhY2tpbmcnLFxyXG4gICAgICAnTXVsdGkgSW1hZ2UgVGFyZ2V0JyxcclxuICAgICAgJ1RhcCB0byBQbGFjZSBBUiAvIFhSIGJhc2VkJyxcclxuICAgICAgJ0xvY2F0aW9uIEJhc2VkIEFSJyxcclxuICAgIF0sXHJcbiAgXSxcclxuICBbXHJcbiAgICAnbmV4TmV0IC0gQ3VzdG9tZSBXZWJEJyxcclxuICAgIFtcclxuICAgICAgJ1NpbmdsZSBQYWdlIFdlYnNpdGUnLFxyXG4gICAgICAnU3RhdGljIFdlYnNpdGVzJyxcclxuICAgICAgJ0R5bmFtaWMgV2Vic2l0ZXMnLFxyXG4gICAgICAnUmVzcG9uc2l2ZSBEZXNpZ24gLVJlYWN0SnMnLFxyXG4gICAgICAnTW9iaWxlIEFwcCBEZXZlbG9wbWVudCcsXHJcbiAgICAgICdDdXN0b21lIEFwbGxpY2F0aW9uIEJ1aWxkJyxcclxuXHJcbiAgICBdLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgJ25leHRBaSAtIE9iamVjdCBEZXRlY3Rpb24nLFxyXG4gICAgW1xyXG4gICAgICAnLi4nLFxyXG5cclxuICAgIF0sXHJcbiAgXSxcclxuXTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
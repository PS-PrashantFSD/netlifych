webpackHotUpdate_N_E("pages/About",{

/***/ "./components/AnimateOnScreen/AnimateOnScreen.jsx":
/*!********************************************************!*\
  !*** ./components/AnimateOnScreen/AnimateOnScreen.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _s = $RefreshSig$();




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
const AnimateOnScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(_c = _s((_ref, ref) => {
  _s();
  let {
    children: childrenProp
  } = _ref;
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])();
  const [inViewRef, inView] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"])({
    triggerOnce: true
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [animation, inView]);
  const children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child)) {
      return null;
    }
    const handleRef = node => {
      // Keep your own reference
      inViewRef(node);

      // Call the original ref, if any
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref.current) {
          ref.current = node;
        }
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: children
  }, void 0, false);
}, "BjO3DlGYt8beq9aHOLEgmc5cXeQ=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__["useAnimation"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"]];
}));
_c2 = AnimateOnScreen;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AnimateOnScreen));
var _c, _c2, _c3;
$RefreshReg$(_c, "AnimateOnScreen$React.forwardRef");
$RefreshReg$(_c2, "AnimateOnScreen");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbmltYXRlT25TY3JlZW4vQW5pbWF0ZU9uU2NyZWVuLmpzeCJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ0cmFuc2xhdGVZIiwiZHVyYXRpb24iLCJlYXNlIiwib3BhY2l0eSIsInZhcmlhbnRzIiwic2hvdyIsImhpZGRlbiIsIkFuaW1hdGVPblNjcmVlbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIl9jIiwiX3MiLCJfcmVmIiwicmVmIiwiY2hpbGRyZW4iLCJjaGlsZHJlblByb3AiLCJhbmltYXRpb24iLCJ1c2VBbmltYXRpb24iLCJpblZpZXdSZWYiLCJpblZpZXciLCJ1c2VJblZpZXciLCJ0cmlnZ2VyT25jZSIsInVzZUVmZmVjdCIsInN0YXJ0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiaGFuZGxlUmVmIiwibm9kZSIsImN1cnJlbnQiLCJjbG9uZUVsZW1lbnQiLCJhbmltYXRlIiwiaW5pdGlhbCIsIl9qc3hERVYiLCJfRnJhZ21lbnQiLCJfYzIiLCJfYzMiLCJtZW1vIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDVztBQUFBO0FBRXhELE1BQU1BLFVBQVUsR0FBRztFQUNqQkMsS0FBSyxFQUFFLEdBQUc7RUFDVkMsVUFBVSxFQUFFO0lBQ1ZDLFFBQVEsRUFBRSxDQUFDO0lBQ1hDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7RUFDM0IsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDUEYsUUFBUSxFQUFFLENBQUM7SUFDWEMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRztFQUM3QjtBQUNGLENBQUM7QUFFRCxNQUFNRSxRQUFRLEdBQUc7RUFDZkMsSUFBSSxFQUFFO0lBQUVMLFVBQVUsRUFBRSxDQUFDO0lBQUVHLE9BQU8sRUFBRTtFQUFFLENBQUM7RUFDbkNHLE1BQU0sRUFBRTtJQUFFTixVQUFVLEVBQUUsRUFBRTtJQUFFRyxPQUFPLEVBQUU7RUFBRTtBQUN2QyxDQUFDO0FBRUQsTUFBTUksZUFBZSxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBVSxDQUFBQyxFQUFBLEdBQUFDLEVBQUEsQ0FBQyxDQUFBQyxJQUFBLEVBQTZCQyxHQUFHLEtBQUs7RUFBQUYsRUFBQTtFQUFBLElBQXBDO0lBQUVHLFFBQVEsRUFBRUM7RUFBYSxDQUFDLEdBQUFILElBQUE7RUFDbEUsTUFBTUksU0FBUyxHQUFHQyxrRUFBWSxDQUFDLENBQUM7RUFDaEMsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLE1BQU0sQ0FBQyxHQUFHQyw2RUFBUyxDQUFDO0lBQUVDLFdBQVcsRUFBRTtFQUFLLENBQUMsQ0FBQztFQUU1RGIsNENBQUssQ0FBQ2MsU0FBUyxDQUFDLE1BQU07SUFDcEIsSUFBSUgsTUFBTSxFQUFFO01BQ1ZILFNBQVMsQ0FBQ08sS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN6QjtFQUNGLENBQUMsRUFBRSxDQUFDUCxTQUFTLEVBQUVHLE1BQU0sQ0FBQyxDQUFDO0VBRXZCLE1BQU1MLFFBQVEsR0FBR04sNENBQUssQ0FBQ2dCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDVixZQUFZLEVBQUVXLEtBQUssSUFBSTtJQUN6RCxJQUFJLGVBQUNsQiw0Q0FBSyxDQUFDbUIsY0FBYyxDQUFDRCxLQUFLLENBQUMsRUFBRTtNQUNoQyxPQUFPLElBQUk7SUFDYjtJQUVBLE1BQU1FLFNBQVMsR0FBR0MsSUFBSSxJQUFJO01BQ3hCO01BQ0FYLFNBQVMsQ0FBQ1csSUFBSSxDQUFDOztNQUVmO01BQ0EsSUFBSWhCLEdBQUcsRUFBRTtRQUNQLElBQUksT0FBT0EsR0FBRyxLQUFLLFVBQVUsRUFBRTtVQUM3QkEsR0FBRyxDQUFDZ0IsSUFBSSxDQUFDO1FBQ1gsQ0FBQyxNQUFNLElBQUloQixHQUFHLENBQUNpQixPQUFPLEVBQUU7VUFDdEJqQixHQUFHLENBQUNpQixPQUFPLEdBQUdELElBQUk7UUFDcEI7TUFDRjtJQUNGLENBQUM7SUFFRCxvQkFBT3JCLDRDQUFLLENBQUN1QixZQUFZLENBQUNMLEtBQUssRUFBRTtNQUMvQnRCLFFBQVE7TUFDUk4sVUFBVTtNQUNWa0MsT0FBTyxFQUFFaEIsU0FBUztNQUNsQmlCLE9BQU8sRUFBRSxRQUFRO01BQ2pCcEIsR0FBRyxFQUFFZTtJQUNQLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUVGLG9CQUFPTSxvRUFBQSxDQUFBQyw4REFBQTtJQUFBckIsUUFBQSxFQUFHQTtFQUFRLGdCQUFHLENBQUM7QUFDeEIsQ0FBQztFQUFBLFFBdENtQkcsMERBQVksRUFDRkcscUVBQVM7QUFBQSxFQXFDdEMsQ0FBQztBQUFDZ0IsR0FBQSxHQXZDRzdCLGVBQWU7QUF5Q3JCOEIsa0VBQUEsZ0JBQWU3Qiw0Q0FBSyxDQUFDOEIsSUFBSSxDQUFDL0IsZUFBZSxDQUFDLEVBQUM7QUFBQSxJQUFBRyxFQUFBLEVBQUEwQixHQUFBLEVBQUFDLEdBQUE7QUFBQUUsWUFBQSxDQUFBN0IsRUFBQTtBQUFBNkIsWUFBQSxDQUFBSCxHQUFBO0FBQUFHLFlBQUEsQ0FBQUYsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9BYm91dC5hMDJlNDZiMTcyZDM5NWJhYjU3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIGRlbGF5OiAwLjMsXHJcbiAgdHJhbnNsYXRlWToge1xyXG4gICAgZHVyYXRpb246IDEsXHJcbiAgICBlYXNlOiBbMCwgMC43LCAwLjI5LCAwLjk3XSxcclxuICB9LFxyXG4gIG9wYWNpdHk6IHtcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgZWFzZTogWzAuMjUsIDAuMSwgMC4yNSwgMS4wXSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgc2hvdzogeyB0cmFuc2xhdGVZOiAwLCBvcGFjaXR5OiAxIH0sXHJcbiAgaGlkZGVuOiB7IHRyYW5zbGF0ZVk6IDYwLCBvcGFjaXR5OiAwIH0sXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRlT25TY3JlZW4gPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNoaWxkcmVuOiBjaGlsZHJlblByb3AgfSwgcmVmKSA9PiB7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgW2luVmlld1JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7IHRyaWdnZXJPbmNlOiB0cnVlIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluVmlldykge1xyXG4gICAgICBhbmltYXRpb24uc3RhcnQoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9LCBbYW5pbWF0aW9uLCBpblZpZXddKTtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW5Qcm9wLCBjaGlsZCA9PiB7XHJcbiAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWYgPSBub2RlID0+IHtcclxuICAgICAgLy8gS2VlcCB5b3VyIG93biByZWZlcmVuY2VcclxuICAgICAgaW5WaWV3UmVmKG5vZGUpO1xyXG5cclxuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgcmVmLCBpZiBhbnlcclxuICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICByZWYobm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgIHZhcmlhbnRzLFxyXG4gICAgICB0cmFuc2l0aW9uLFxyXG4gICAgICBhbmltYXRlOiBhbmltYXRpb24sXHJcbiAgICAgIGluaXRpYWw6ICdoaWRkZW4nLFxyXG4gICAgICByZWY6IGhhbmRsZVJlZixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQW5pbWF0ZU9uU2NyZWVuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
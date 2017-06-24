
          window.__NEXT_REGISTER_PAGE('/search', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jasonstinson/dev/reactriot2017-goldenhour/shared/head.js";

exports.default = function () {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Golden Hour"), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jasonstinson/dev/reactriot2017-goldenhour/shared/head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jasonstinson/dev/reactriot2017-goldenhour/shared/head.js"); } } })();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(540);

var _head2 = _interopRequireDefault(_head);

var _isomorphicFetch = __webpack_require__(545);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _endpoints = __webpack_require__(546);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jasonstinson/dev/reactriot2017-goldenhour/pages/search.js?entry',
    _this = undefined;

var Search = function Search(_ref) {
  var photos = _ref.photos;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Search'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, photos.map(function (photo) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, photo.name), _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement('img', { src: photo.image_url, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })));
  })));
};

Search.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var res, json;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicFetch2.default)(_endpoints.GET_PHOTOS);

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          json = _context.sent;
          return _context.abrupt('return', {
            photos: json.photos
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

exports.default = Search;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jasonstinson/dev/reactriot2017-goldenhour/pages/search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jasonstinson/dev/reactriot2017-goldenhour/pages/search.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/search")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = {
	"GET_PHOTOS": "https://api.500px.com/v1/photos/search?term=golden hour&tags=goldenhour,golden hour,sunset,sunrise&geo=40.7162735,-73.9607704,13.29km&image_size=440&sort=highest_rating&consumer_key=FBd1TAlMzdqkwKoQLJsqHYJh81OMRhY5o44e0NvU"
};

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(542);


/***/ })

},[550]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9zZWFyY2guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvaGVhZC5qcz85NjI1ZjZiIiwid2VicGFjazovLy8uL3BhZ2VzL3NlYXJjaC5qcz85NjI1ZjZiIiwid2VicGFjazovLy8uL2VuZHBvaW50cy5qc29uPzk2MjVmNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxIZWFkPlxuICAgIDx0aXRsZT5Hb2xkZW4gSG91cjwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICA8L0hlYWQ+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2hhcmVkL2hlYWQuanMiLCJpbXBvcnQgSGVhZCBmcm9tICcuLi9zaGFyZWQvaGVhZCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmltcG9ydCB7IEdFVF9QSE9UT1MgfSBmcm9tICcuLi9lbmRwb2ludHMuanNvbic7XG5cbmNvbnN0IFNlYXJjaCA9ICh7IHBob3RvcyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQgLz5cbiAgICA8ZGl2PlNlYXJjaDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIHBob3Rvcy5tYXAoKHBob3RvKSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+e3Bob3RvLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPXtwaG90by5pbWFnZV91cmx9IC8+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuU2VhcmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goR0VUX1BIT1RPUyk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHBob3RvczoganNvbi5waG90b3NcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3NlYXJjaC5qcz9lbnRyeSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkdFVF9QSE9UT1NcIjogXCJodHRwczovL2FwaS41MDBweC5jb20vdjEvcGhvdG9zL3NlYXJjaD90ZXJtPWdvbGRlbiBob3VyJnRhZ3M9Z29sZGVuaG91cixnb2xkZW4gaG91cixzdW5zZXQsc3VucmlzZSZnZW89NDAuNzE2MjczNSwtNzMuOTYwNzcwNCwxMy4yOWttJmltYWdlX3NpemU9NDQwJnNvcnQ9aGlnaGVzdF9yYXRpbmcmY29uc3VtZXJfa2V5PUZCZDFUQWxNemRxa3dLb1FMSnNxSFlKaDgxT01SaFk1bzQ0ZTBOdlVcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZHBvaW50cy5qc29uXG4vLyBtb2R1bGUgaWQgPSA1NDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFIQTtBQU5BO0FBQ0E7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7O0FBSUE7QUFBQTtBQUNBO0FBTEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
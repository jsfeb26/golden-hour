'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('../shared/head');

var _head2 = _interopRequireDefault(_head);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _endpoints = require('../endpoints.json');

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
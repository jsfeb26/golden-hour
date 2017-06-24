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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var Search = function Search(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null), _react2.default.createElement('div', null, 'Search'), _react2.default.createElement('div', null, props.test.map(function (t) {
    return _react2.default.createElement('div', null, t.name);
  })));
};

Search.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt('return', { test: [{ name: 'test' }, { name: 'test2' }]
          });

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

exports.default = Search;
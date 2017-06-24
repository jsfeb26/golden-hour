'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('../shared/head');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null), _react2.default.createElement('div', null, _react2.default.createElement(_link2.default, { href: '/search' }, 'Search'), _react2.default.createElement(_link2.default, { href: '/favorites' }, 'Favorites'), 'Main'));
};
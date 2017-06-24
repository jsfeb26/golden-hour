"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement("title", null, "Golden Hour"), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }));
};
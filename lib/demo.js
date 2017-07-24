'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _EditorDemo = require('./EditorDemo');

var _EditorDemo2 = _interopRequireDefault(_EditorDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  _reactDom2.default.render(_react2.default.createElement(_EditorDemo2.default, null), rootNode);
});
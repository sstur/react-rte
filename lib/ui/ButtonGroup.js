'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = ButtonGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonGroup = require('./ButtonGroup.css');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonGroup(props) {
  var className = (0, _classnames2.default)(props.className, _ButtonGroup2.default.root);
  return _react2.default.createElement('div', (0, _extends3.default)({}, props, { className: className }));
}
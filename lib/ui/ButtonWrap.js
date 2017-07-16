'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ButtonWrap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonWrap = require('./ButtonWrap.css');

var _ButtonWrap2 = _interopRequireDefault(_ButtonWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonWrap(props) {
  var className = (0, _classnames2.default)(props.className, _ButtonWrap2.default.root);
  return _react2.default.createElement('div', _extends({}, props, { className: className }));
}
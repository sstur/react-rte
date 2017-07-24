'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
  return _react2.default.createElement('div', (0, _extends3.default)({}, props, { className: className }));
}
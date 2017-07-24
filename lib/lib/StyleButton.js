'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('../ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleButton = function (_Component) {
  (0, _inherits3.default)(StyleButton, _Component);

  function StyleButton() {
    (0, _classCallCheck3.default)(this, StyleButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StyleButton.__proto__ || (0, _getPrototypeOf2.default)(StyleButton)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(StyleButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          onToggle = _props.onToggle,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['style', 'onToggle']); // eslint-disable-line no-unused-vars

      var iconName = style.toLowerCase();
      // `focusOnClick` will prevent the editor from losing focus when a control
      // button is clicked.
      return _react2.default.createElement(_IconButton2.default, (0, _extends3.default)({}, otherProps, {
        iconName: iconName,
        onClick: this._onClick,
        focusOnClick: false
      }));
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      this.props.onToggle(this.props.style);
    }
  }]);
  return StyleButton;
}(_react.Component);

exports.default = StyleButton;
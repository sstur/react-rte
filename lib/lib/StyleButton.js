'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('../ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleButton = function (_Component) {
  _inherits(StyleButton, _Component);

  function StyleButton() {
    _classCallCheck(this, StyleButton);

    var _this = _possibleConstructorReturn(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    return _this;
  }

  _createClass(StyleButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          onToggle = _props.onToggle,
          otherProps = _objectWithoutProperties(_props, ['style', 'onToggle']); // eslint-disable-line no-unused-vars


      var iconName = style.toLowerCase();
      // `focusOnClick` will prevent the editor from losing focus when a control
      // button is clicked.
      return _react2.default.createElement(_IconButton2.default, _extends({}, otherProps, {
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
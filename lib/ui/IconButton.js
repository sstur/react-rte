'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonWrap = require('./ButtonWrap');

var _ButtonWrap2 = _interopRequireDefault(_ButtonWrap);

var _IconButton = require('./IconButton.css');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButton = function (_Component) {
  (0, _inherits3.default)(IconButton, _Component);

  function IconButton() {
    (0, _classCallCheck3.default)(this, IconButton);
    return (0, _possibleConstructorReturn3.default)(this, (IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'render',
    value: function render() {
      var _cx;

      var props = this.props;
      var className = props.className,
          iconName = props.iconName,
          label = props.label,
          children = props.children,
          isActive = props.isActive,
          otherProps = (0, _objectWithoutProperties3.default)(props, ['className', 'iconName', 'label', 'children', 'isActive']);

      className = (0, _classnames2.default)(className, (_cx = {}, (0, _defineProperty3.default)(_cx, _IconButton2.default.root, true), (0, _defineProperty3.default)(_cx, _IconButton2.default.isActive, isActive), _cx));
      return _react2.default.createElement(
        _ButtonWrap2.default,
        null,
        _react2.default.createElement(
          _Button2.default,
          (0, _extends3.default)({}, otherProps, { title: label, className: className }),
          _react2.default.createElement('span', { className: _IconButton2.default['icon-' + iconName] })
        ),
        children
      );
    }
  }]);
  return IconButton;
}(_react.Component);

exports.default = IconButton;
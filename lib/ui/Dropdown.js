'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

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

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Dropdown = require('./Dropdown.css');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          choices = _props.choices,
          selectedKey = _props.selectedKey,
          className = _props.className,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['choices', 'selectedKey', 'className']);

      className = (0, _classnames2.default)(className, _Dropdown2.default.root);
      var selectedItem = selectedKey == null ? null : choices.get(selectedKey);
      var selectedValue = selectedItem && selectedItem.label || '';
      return _react2.default.createElement(
        'span',
        { className: className, title: selectedValue },
        _react2.default.createElement(
          'select',
          (0, _extends3.default)({}, otherProps, { value: selectedKey, onChange: this._onChange }),
          this._renderChoices()
        ),
        _react2.default.createElement(
          'span',
          { className: _Dropdown2.default.value },
          selectedValue
        )
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      var value = event.target.value;
      this.props.onChange(value);
    }
  }, {
    key: '_renderChoices',
    value: function _renderChoices() {
      var choices = this.props.choices;

      var entries = (0, _from2.default)(choices.entries());
      return entries.map(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            key = _ref2[0],
            _ref2$ = _ref2[1],
            label = _ref2$.label,
            className = _ref2$.className;

        return _react2.default.createElement(
          'option',
          { key: key, value: key, className: className },
          label
        );
      });
    }
  }]);
  return Dropdown;
}(_react.Component);

exports.default = Dropdown;
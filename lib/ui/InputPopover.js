'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputPopover = require('./InputPopover.css');

var _InputPopover2 = _interopRequireDefault(_InputPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputPopover = function (_Component) {
  (0, _inherits3.default)(InputPopover, _Component);

  function InputPopover() {
    (0, _classCallCheck3.default)(this, InputPopover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputPopover.__proto__ || (0, _getPrototypeOf2.default)(InputPopover)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(InputPopover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this._onDocumentClick);
      document.addEventListener('keydown', this._onDocumentKeydown);
      if (this._inputRef) {
        this._inputRef.focus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._onDocumentClick);
      document.removeEventListener('keydown', this._onDocumentKeydown);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      var className = (0, _classnames2.default)(props.className, _InputPopover2.default.root);
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: _InputPopover2.default.inner },
          _react2.default.createElement('input', {
            ref: this._setInputRef,
            type: 'text',
            placeholder: 'https://example.com/',
            className: _InputPopover2.default.input,
            onKeyPress: this._onInputKeyPress
          }),
          _react2.default.createElement(
            _ButtonGroup2.default,
            { className: _InputPopover2.default.buttonGroup },
            _react2.default.createElement(_IconButton2.default, {
              label: 'Cancel',
              iconName: 'cancel',
              onClick: props.onCancel
            }),
            _react2.default.createElement(_IconButton2.default, {
              label: 'Submit',
              iconName: 'accept',
              onClick: this._onSubmit
            })
          )
        )
      );
    }
  }, {
    key: '_setInputRef',
    value: function _setInputRef(inputElement) {
      this._inputRef = inputElement;
    }
  }, {
    key: '_onInputKeyPress',
    value: function _onInputKeyPress(event) {
      if (event.which === 13) {
        // Avoid submitting a <form> somewhere up the element tree.
        event.preventDefault();
        this._onSubmit();
      }
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit() {
      var value = this._inputRef ? this._inputRef.value : '';
      this.props.onSubmit(value);
    }
  }, {
    key: '_onDocumentClick',
    value: function _onDocumentClick(event) {
      var rootNode = _reactDom2.default.findDOMNode(this);
      if (!rootNode.contains(event.target)) {
        // Here we pass the event so the parent can manage focus.
        this.props.onCancel(event);
      }
    }
  }, {
    key: '_onDocumentKeydown',
    value: function _onDocumentKeydown(event) {
      if (event.keyCode === 27) {
        this.props.onCancel();
      }
    }
  }]);
  return InputPopover;
}(_react.Component);

exports.default = InputPopover;
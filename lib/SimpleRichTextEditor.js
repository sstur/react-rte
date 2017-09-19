'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _RichTextEditor = require('./RichTextEditor');

var _RichTextEditor2 = _interopRequireDefault(_RichTextEditor);

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleRichTextEditor = function (_Component) {
  (0, _inherits3.default)(SimpleRichTextEditor, _Component);

  function SimpleRichTextEditor() {
    (0, _classCallCheck3.default)(this, SimpleRichTextEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SimpleRichTextEditor.__proto__ || (0, _getPrototypeOf2.default)(SimpleRichTextEditor)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    _this.state = {
      editorValue: (0, _RichTextEditor.createEmptyValue)()
    };
    return _this;
  }
  // The [format, value] of what's currently displayed in the <RichTextEditor />


  (0, _createClass3.default)(SimpleRichTextEditor, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._updateStateFromProps(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this._updateStateFromProps(newProps);
    }
  }, {
    key: '_updateStateFromProps',
    value: function _updateStateFromProps(newProps) {
      var value = newProps.value,
          format = newProps.format;

      if (this._currentValue != null) {
        var _currentValue = (0, _slicedToArray3.default)(this._currentValue, 2),
            currentValue = _currentValue[0],
            currentFormat = _currentValue[1];

        if (format === currentFormat && value === currentValue) {
          return;
        }
      }
      var editorValue = this.state.editorValue;

      this.setState({
        editorValue: editorValue.setContentFromString(value, format)
      });
      this._currentValue = [format, value];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          onChange = _props.onChange,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['value', 'format', 'onChange']); // eslint-disable-line no-unused-vars

      return _react2.default.createElement(_RichTextEditor2.default, (0, _extends3.default)({}, otherProps, {
        value: this.state.editorValue,
        onChange: this._onChange
      }));
    }
  }, {
    key: '_onChange',
    value: function _onChange(editorValue) {
      var _props2 = this.props,
          format = _props2.format,
          onChange = _props2.onChange;

      var oldEditorValue = this.state.editorValue;
      this.setState({ editorValue: editorValue });
      var oldContentState = oldEditorValue ? oldEditorValue.getEditorState().getCurrentContent() : null;
      var newContentState = editorValue.getEditorState().getCurrentContent();
      if (oldContentState !== newContentState) {
        var stringValue = editorValue.toString(format);
        // Optimization so if we receive new props we don't need
        // to parse anything unnecessarily.
        this._currentValue = [format, stringValue];
        if (onChange && stringValue !== this.props.value) {
          onChange(stringValue);
        }
      }
    }
  }]);
  return SimpleRichTextEditor;
}(_react.Component);

exports.default = SimpleRichTextEditor;
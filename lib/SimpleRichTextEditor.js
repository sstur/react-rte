'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RichTextEditor = require('./RichTextEditor');

var _RichTextEditor2 = _interopRequireDefault(_RichTextEditor);

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleRichTextEditor = function (_Component) {
  _inherits(SimpleRichTextEditor, _Component);

  function SimpleRichTextEditor() {
    _classCallCheck(this, SimpleRichTextEditor);

    var _this = _possibleConstructorReturn(this, (SimpleRichTextEditor.__proto__ || Object.getPrototypeOf(SimpleRichTextEditor)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    _this.state = {
      editorValue: (0, _RichTextEditor.createEmptyValue)()
    };
    return _this;
  }
  // The [format, value] of what's currently displayed in the <RichTextEditor />


  _createClass(SimpleRichTextEditor, [{
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
        var _currentValue = _slicedToArray(this._currentValue, 2),
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
          otherProps = _objectWithoutProperties(_props, ['value', 'format', 'onChange']); // eslint-disable-line no-unused-vars


      return _react2.default.createElement(_RichTextEditor2.default, _extends({}, otherProps, {
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
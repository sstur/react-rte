'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RichTextEditor = require('./RichTextEditor');

var _RichTextEditor2 = _interopRequireDefault(_RichTextEditor);

var _draftJs = require('draft-js');

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorDemo = function (_Component) {
  _inherits(EditorDemo, _Component);

  function EditorDemo() {
    _classCallCheck(this, EditorDemo);

    var _this = _possibleConstructorReturn(this, (EditorDemo.__proto__ || Object.getPrototypeOf(EditorDemo)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    _this.state = {
      value: (0, _RichTextEditor.createEmptyValue)(),
      format: 'html',
      readOnly: false
    };
    return _this;
  }

  _createClass(EditorDemo, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          format = _state.format;


      return _react2.default.createElement(
        'div',
        { className: 'editor-demo' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'p',
            null,
            'This is a demo of the ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/sstur/react-rte', target: 'top' },
              'react-rte'
            ),
            ' editor.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_RichTextEditor2.default, {
            value: value,
            onChange: this._onChange,
            className: 'react-rte-demo',
            placeholder: 'Tell a story',
            toolbarClassName: 'demo-toolbar',
            editorClassName: 'demo-editor',
            readOnly: this.state.readOnly
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'label',
            { className: 'radio-item' },
            _react2.default.createElement('input', {
              type: 'radio',
              name: 'format',
              value: 'html',
              checked: format === 'html',
              onChange: this._onChangeFormat
            }),
            _react2.default.createElement(
              'span',
              null,
              'HTML'
            )
          ),
          _react2.default.createElement(
            'label',
            { className: 'radio-item' },
            _react2.default.createElement('input', {
              type: 'radio',
              name: 'format',
              value: 'markdown',
              checked: format === 'markdown',
              onChange: this._onChangeFormat
            }),
            _react2.default.createElement(
              'span',
              null,
              'Markdown'
            )
          ),
          _react2.default.createElement(
            'label',
            { className: 'radio-item' },
            _react2.default.createElement('input', {
              type: 'checkbox',
              onChange: this._onChangeReadOnly,
              checked: this.state.readOnly
            }),
            _react2.default.createElement(
              'span',
              null,
              'Editor is read-only'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('textarea', {
            className: 'source',
            placeholder: 'Editor Source',
            value: value.toString(format),
            onChange: this._onChangeSource
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row btn-row' },
          _react2.default.createElement(
            'span',
            { className: 'label' },
            'Debugging:'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn', onClick: this._logState },
            'Log Content State'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn', onClick: this._logStateRaw },
            'Log Raw'
          )
        )
      );
    }
  }, {
    key: '_logState',
    value: function _logState() {
      var editorState = this.state.value.getEditorState();
      var contentState = window.contentState = editorState.getCurrentContent().toJS();
      console.log(contentState);
    }
  }, {
    key: '_logStateRaw',
    value: function _logStateRaw() {
      var editorState = this.state.value.getEditorState();
      var contentState = editorState.getCurrentContent();
      var rawContentState = window.rawContentState = (0, _draftJs.convertToRaw)(contentState);
      console.log(JSON.stringify(rawContentState));
    }
  }, {
    key: '_onChange',
    value: function _onChange(value) {
      this.setState({ value: value });
    }
  }, {
    key: '_onChangeSource',
    value: function _onChangeSource(event) {
      var source = event.target.value;
      var oldValue = this.state.value;
      this.setState({
        value: oldValue.setContentFromString(source, this.state.format)
      });
    }
  }, {
    key: '_onChangeFormat',
    value: function _onChangeFormat(event) {
      this.setState({ format: event.target.value });
    }
  }, {
    key: '_onChangeReadOnly',
    value: function _onChangeReadOnly(event) {
      this.setState({ readOnly: event.target.checked });
    }
  }]);

  return EditorDemo;
}(_react.Component);

exports.default = EditorDemo;
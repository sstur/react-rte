'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

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

var _draftJs = require('draft-js');

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _ButtonGroup = require('./ui/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Dropdown = require('./ui/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _IconButton = require('./ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorDemo = function (_Component) {
  (0, _inherits3.default)(EditorDemo, _Component);

  function EditorDemo() {
    (0, _classCallCheck3.default)(this, EditorDemo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditorDemo.__proto__ || (0, _getPrototypeOf2.default)(EditorDemo)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    _this.state = {
      value: (0, _RichTextEditor.createEmptyValue)(),
      format: 'html',
      readOnly: false
    };
    return _this;
  }

  (0, _createClass3.default)(EditorDemo, [{
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
            readOnly: this.state.readOnly,
            customControls: [
            // eslint-disable-next-line no-unused-vars
            function (setValue, getValue, editorState) {
              var choices = new _map2.default([['1', { label: '1' }], ['2', { label: '2' }], ['3', { label: '3' }]]);
              return _react2.default.createElement(
                _ButtonGroup2.default,
                { key: 1 },
                _react2.default.createElement(_Dropdown2.default, {
                  choices: choices,
                  selectedKey: getValue('my-control-name'),
                  onChange: function onChange(value) {
                    return setValue('my-control-name', value);
                  }
                })
              );
            }, _react2.default.createElement(
              _ButtonGroup2.default,
              { key: 2 },
              _react2.default.createElement(_IconButton2.default, {
                label: 'Remove Link',
                iconName: 'remove-link',
                focusOnClick: false,
                onClick: function onClick() {
                  return console.log('You pressed a button');
                }
              })
            )]
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
      console.log((0, _stringify2.default)(rawContentState));
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
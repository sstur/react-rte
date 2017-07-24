'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.Button = exports.ButtonGroup = exports.createValueFromString = exports.createEmptyValue = exports.decorator = exports.EditorValue = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _draftJs = require('draft-js');

var _getDefaultKeyBinding = require('draft-js/lib/getDefaultKeyBinding');

var _getDefaultKeyBinding2 = _interopRequireDefault(_getDefaultKeyBinding);

var _changeBlockDepth = require('./lib/changeBlockDepth');

var _changeBlockDepth2 = _interopRequireDefault(_changeBlockDepth);

var _changeBlockType = require('./lib/changeBlockType');

var _changeBlockType2 = _interopRequireDefault(_changeBlockType);

var _getBlocksInSelection = require('./lib/getBlocksInSelection');

var _getBlocksInSelection2 = _interopRequireDefault(_getBlocksInSelection);

var _insertBlockAfter = require('./lib/insertBlockAfter');

var _insertBlockAfter2 = _interopRequireDefault(_insertBlockAfter);

var _isListItem = require('./lib/isListItem');

var _isListItem2 = _interopRequireDefault(_isListItem);

var _isSoftNewlineEvent = require('draft-js/lib/isSoftNewlineEvent');

var _isSoftNewlineEvent2 = _interopRequireDefault(_isSoftNewlineEvent);

var _EditorToolbar = require('./lib/EditorToolbar');

var _EditorToolbar2 = _interopRequireDefault(_EditorToolbar);

var _EditorValue = require('./lib/EditorValue');

var _EditorValue2 = _interopRequireDefault(_EditorValue);

var _LinkDecorator = require('./lib/LinkDecorator');

var _LinkDecorator2 = _interopRequireDefault(_LinkDecorator);

var _ImageDecorator = require('./lib/ImageDecorator');

var _ImageDecorator2 = _interopRequireDefault(_ImageDecorator);

var _composite = require('./lib/composite');

var _composite2 = _interopRequireDefault(_composite);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _draftJsUtils = require('draft-js-utils');

require('./Draft.global.css');

var _RichTextEditor = require('./RichTextEditor.css');

var _RichTextEditor2 = _interopRequireDefault(_RichTextEditor);

var _ButtonGroup = require('./ui/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Button = require('./ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require('./ui/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_LIST_DEPTH = 2;

// Custom overrides for "code" style.

var styleMap = {
  CODE: {
    backgroundColor: '#f3f3f3',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

var RichTextEditor = function (_Component) {
  (0, _inherits3.default)(RichTextEditor, _Component);

  function RichTextEditor() {
    (0, _classCallCheck3.default)(this, RichTextEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RichTextEditor.__proto__ || (0, _getPrototypeOf2.default)(RichTextEditor)).apply(this, arguments));

    _this._keyEmitter = new _events2.default();
    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(RichTextEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var autoFocus = this.props.autoFocus;


      if (!autoFocus) {
        return;
      }

      this._focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          value = _props.value,
          className = _props.className,
          toolbarClassName = _props.toolbarClassName,
          editorClassName = _props.editorClassName,
          placeholder = _props.placeholder,
          customStyleMap = _props.customStyleMap,
          readOnly = _props.readOnly,
          disabled = _props.disabled,
          toolbarConfig = _props.toolbarConfig,
          blockStyleFn = _props.blockStyleFn,
          customControls = _props.customControls,
          keyBindingFn = _props.keyBindingFn,
          rootStyle = _props.rootStyle,
          toolbarStyle = _props.toolbarStyle,
          editorStyle = _props.editorStyle,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['value', 'className', 'toolbarClassName', 'editorClassName', 'placeholder', 'customStyleMap', 'readOnly', 'disabled', 'toolbarConfig', 'blockStyleFn', 'customControls', 'keyBindingFn', 'rootStyle', 'toolbarStyle', 'editorStyle']);

      var editorState = value.getEditorState();
      customStyleMap = customStyleMap ? (0, _extends3.default)({}, styleMap, customStyleMap) : styleMap;

      // If the user changes block type before entering any text, we can either
      // style the placeholder or hide it. Let's just hide it for now.
      var combinedEditorClassName = (0, _classnames2.default)((_cx = {}, (0, _defineProperty3.default)(_cx, _RichTextEditor2.default.editor, true), (0, _defineProperty3.default)(_cx, _RichTextEditor2.default.hidePlaceholder, this._shouldHidePlaceholder()), _cx), editorClassName);
      if (readOnly == null) {
        readOnly = disabled;
      }
      var editorToolbar = void 0;
      if (!readOnly) {
        editorToolbar = _react2.default.createElement(_EditorToolbar2.default, {
          rootStyle: toolbarStyle,
          className: toolbarClassName,
          keyEmitter: this._keyEmitter,
          editorState: editorState,
          onChange: this._onChange,
          focusEditor: this._focus,
          toolbarConfig: toolbarConfig,
          customControls: customControls
        });
      }
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_RichTextEditor2.default.root, className), style: rootStyle },
        editorToolbar,
        _react2.default.createElement(
          'div',
          { className: combinedEditorClassName, style: editorStyle },
          _react2.default.createElement(_draftJs.Editor, (0, _extends3.default)({}, otherProps, {
            blockStyleFn: (0, _composite2.default)(defaultBlockStyleFn, blockStyleFn),
            customStyleMap: customStyleMap,
            editorState: editorState,
            handleReturn: this._handleReturn,
            keyBindingFn: keyBindingFn || this._customKeyHandler,
            handleKeyCommand: this._handleKeyCommand,
            onTab: this._onTab,
            onChange: this._onChange,
            placeholder: placeholder,
            ref: 'editor',
            spellCheck: true,
            readOnly: readOnly
          }))
        )
      );
    }
  }, {
    key: '_shouldHidePlaceholder',
    value: function _shouldHidePlaceholder() {
      var editorState = this.props.value.getEditorState();
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          return true;
        }
      }
      return false;
    }
  }, {
    key: '_handleReturn',
    value: function _handleReturn(event) {
      var handleReturn = this.props.handleReturn;

      if (handleReturn != null && handleReturn(event)) {
        return true;
      }
      if (this._handleReturnSoftNewline(event)) {
        return true;
      }
      if (this._handleReturnEmptyListItem()) {
        return true;
      }
      if (this._handleReturnSpecialBlock()) {
        return true;
      }
      return false;
    }

    // `shift + return` should insert a soft newline.

  }, {
    key: '_handleReturnSoftNewline',
    value: function _handleReturnSoftNewline(event) {
      var editorState = this.props.value.getEditorState();
      if ((0, _isSoftNewlineEvent2.default)(event)) {
        var selection = editorState.getSelection();
        if (selection.isCollapsed()) {
          this._onChange(_draftJs.RichUtils.insertSoftNewline(editorState));
        } else {
          var content = editorState.getCurrentContent();
          var newContent = _draftJs.Modifier.removeRange(content, selection, 'forward');
          var newSelection = newContent.getSelectionAfter();
          var _block = newContent.getBlockForKey(newSelection.getStartKey());
          newContent = _draftJs.Modifier.insertText(newContent, newSelection, '\n', _block.getInlineStyleAt(newSelection.getStartOffset()), null);
          this._onChange(_draftJs.EditorState.push(editorState, newContent, 'insert-fragment'));
        }
        return true;
      }
      return false;
    }

    // If the cursor is in an empty list item when return is pressed, then the
    // block type should change to normal (end the list).

  }, {
    key: '_handleReturnEmptyListItem',
    value: function _handleReturnEmptyListItem() {
      var editorState = this.props.value.getEditorState();
      var selection = editorState.getSelection();
      if (selection.isCollapsed()) {
        var contentState = editorState.getCurrentContent();
        var blockKey = selection.getStartKey();
        var _block2 = contentState.getBlockForKey(blockKey);
        if ((0, _isListItem2.default)(_block2) && _block2.getLength() === 0) {
          var depth = _block2.getDepth();
          var newState = depth === 0 ? (0, _changeBlockType2.default)(editorState, blockKey, _draftJsUtils.BLOCK_TYPE.UNSTYLED) : (0, _changeBlockDepth2.default)(editorState, blockKey, depth - 1);
          this._onChange(newState);
          return true;
        }
      }
      return false;
    }

    // If the cursor is at the end of a special block (any block type other than
    // normal or list item) when return is pressed, new block should be normal.

  }, {
    key: '_handleReturnSpecialBlock',
    value: function _handleReturnSpecialBlock() {
      var editorState = this.props.value.getEditorState();
      var selection = editorState.getSelection();
      if (selection.isCollapsed()) {
        var contentState = editorState.getCurrentContent();
        var blockKey = selection.getStartKey();
        var _block3 = contentState.getBlockForKey(blockKey);
        if (!(0, _isListItem2.default)(_block3) && _block3.getType() !== _draftJsUtils.BLOCK_TYPE.UNSTYLED) {
          // If cursor is at end.
          if (_block3.getLength() === selection.getStartOffset()) {
            var newEditorState = (0, _insertBlockAfter2.default)(editorState, blockKey, _draftJsUtils.BLOCK_TYPE.UNSTYLED);
            this._onChange(newEditorState);
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: '_onTab',
    value: function _onTab(event) {
      var editorState = this.props.value.getEditorState();
      var newEditorState = _draftJs.RichUtils.onTab(event, editorState, MAX_LIST_DEPTH);
      if (newEditorState !== editorState) {
        this._onChange(newEditorState);
      }
    }
  }, {
    key: '_customKeyHandler',
    value: function _customKeyHandler(event) {
      // Allow toolbar to catch key combinations.
      var eventFlags = {};
      this._keyEmitter.emit('keypress', event, eventFlags);
      if (eventFlags.wasHandled) {
        return null;
      } else {
        return (0, _getDefaultKeyBinding2.default)(event);
      }
    }
  }, {
    key: '_handleKeyCommand',
    value: function _handleKeyCommand(command) {
      var editorState = this.props.value.getEditorState();
      var newEditorState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newEditorState) {
        this._onChange(newEditorState);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(editorState) {
      var _props2 = this.props,
          onChange = _props2.onChange,
          value = _props2.value;

      if (onChange == null) {
        return;
      }
      var newValue = value.setEditorState(editorState);
      var newEditorState = newValue.getEditorState();
      this._handleInlineImageSelection(newEditorState);
      onChange(newValue);
    }
  }, {
    key: '_handleInlineImageSelection',
    value: function _handleInlineImageSelection(editorState) {
      var selection = editorState.getSelection();
      var blocks = (0, _getBlocksInSelection2.default)(editorState);

      var selectImage = function selectImage(block, offset) {
        var imageKey = block.getEntityAt(offset);
        _draftJs.Entity.mergeData(imageKey, { selected: true });
      };

      var isInMiddleBlock = function isInMiddleBlock(index) {
        return index > 0 && index < blocks.size - 1;
      };
      var isWithinStartBlockSelection = function isWithinStartBlockSelection(offset, index) {
        return index === 0 && offset > selection.getStartOffset();
      };
      var isWithinEndBlockSelection = function isWithinEndBlockSelection(offset, index) {
        return index === blocks.size - 1 && offset < selection.getEndOffset();
      };

      blocks.toIndexedSeq().forEach(function (block, index) {
        _ImageDecorator2.default.strategy(block, function (offset) {
          if (isWithinStartBlockSelection(offset, index) || isInMiddleBlock(index) || isWithinEndBlockSelection(offset, index)) {
            selectImage(block, offset);
          }
        });
      });
    }
  }, {
    key: '_focus',
    value: function _focus() {
      this.refs.editor.focus();
    }
  }]);
  return RichTextEditor;
}(_react.Component);

exports.default = RichTextEditor;


function defaultBlockStyleFn(block) {
  var result = _RichTextEditor2.default.block;
  switch (block.getType()) {
    case 'unstyled':
      return (0, _classnames2.default)(result, _RichTextEditor2.default.paragraph);
    case 'blockquote':
      return (0, _classnames2.default)(result, _RichTextEditor2.default.blockquote);
    case 'code-block':
      return (0, _classnames2.default)(result, _RichTextEditor2.default.codeBlock);
    default:
      return result;
  }
}

var decorator = new _draftJs.CompositeDecorator([_LinkDecorator2.default, _ImageDecorator2.default]);

function createEmptyValue() {
  return _EditorValue2.default.createEmpty(decorator);
}

function createValueFromString(markup, format, options) {
  return _EditorValue2.default.createFromString(markup, format, decorator, options);
}

// $FlowIssue - This should probably not be done this way.
(0, _assign2.default)(RichTextEditor, {
  EditorValue: _EditorValue2.default,
  decorator: decorator,
  createEmptyValue: createEmptyValue,
  createValueFromString: createValueFromString,
  ButtonGroup: _ButtonGroup2.default,
  Button: _Button2.default,
  Dropdown: _Dropdown2.default
});

exports.EditorValue = _EditorValue2.default;
exports.decorator = decorator;
exports.createEmptyValue = createEmptyValue;
exports.createValueFromString = createValueFromString;
exports.ButtonGroup = _ButtonGroup2.default;
exports.Button = _Button2.default;
exports.Dropdown = _Dropdown2.default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _KeyBindingUtil = require('draft-js/lib/KeyBindingUtil');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJs = require('draft-js');

var _draftJsUtils = require('draft-js-utils');

var _EditorToolbarConfig = require('./EditorToolbarConfig');

var _EditorToolbarConfig2 = _interopRequireDefault(_EditorToolbarConfig);

var _StyleButton = require('./StyleButton');

var _StyleButton2 = _interopRequireDefault(_StyleButton);

var _PopoverIconButton = require('../ui/PopoverIconButton');

var _PopoverIconButton2 = _interopRequireDefault(_PopoverIconButton);

var _ButtonGroup = require('../ui/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Dropdown = require('../ui/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _IconButton = require('../ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _getEntityAtCursor2 = require('./getEntityAtCursor');

var _getEntityAtCursor3 = _interopRequireDefault(_getEntityAtCursor2);

var _clearEntityForRange = require('./clearEntityForRange');

var _clearEntityForRange2 = _interopRequireDefault(_clearEntityForRange);

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _EditorToolbar = require('./EditorToolbar.css');

var _EditorToolbar2 = _interopRequireDefault(_EditorToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorToolbar = function (_Component) {
  (0, _inherits3.default)(EditorToolbar, _Component);

  function EditorToolbar() {
    (0, _classCallCheck3.default)(this, EditorToolbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditorToolbar.__proto__ || (0, _getPrototypeOf2.default)(EditorToolbar)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    _this.state = {
      showLinkInput: false,
      showImageInput: false
    };
    return _this;
  }

  (0, _createClass3.default)(EditorToolbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Technically, we should also attach/detach event listeners when the
      // `keyEmitter` prop changes.
      this.props.keyEmitter.on('keypress', this._onKeypress);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.keyEmitter.removeListener('keypress', this._onKeypress);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          toolbarConfig = _props.toolbarConfig,
          rootStyle = _props.rootStyle,
          customControls = _props.customControls,
          editorState = _props.editorState;

      if (toolbarConfig == null) {
        toolbarConfig = _EditorToolbarConfig2.default;
      }
      var display = toolbarConfig.display || _EditorToolbarConfig2.default.display;
      var buttonsGroups = display.map(function (groupName) {
        switch (groupName) {
          case 'INLINE_STYLE_BUTTONS':
            {
              return _this2._renderInlineStyleButtons(groupName, toolbarConfig);
            }
          case 'BLOCK_TYPE_DROPDOWN':
            {
              return _this2._renderBlockTypeDropdown(groupName, toolbarConfig);
            }
          case 'LINK_BUTTONS':
            {
              return _this2._renderLinkButtons(groupName, toolbarConfig);
            }
          case 'IMAGE_BUTTON':
            {
              return _this2._renderImageButton(groupName, toolbarConfig);
            }
          case 'BLOCK_TYPE_BUTTONS':
            {
              return _this2._renderBlockTypeButtons(groupName, toolbarConfig);
            }
          case 'HISTORY_BUTTONS':
            {
              return _this2._renderUndoRedo(groupName, toolbarConfig);
            }
        }
      });
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_EditorToolbar2.default.root, className), style: rootStyle },
        '//         ',
        this._renderInlineStyleButtons(),
        '//         ',
        this._renderBlockTypeButtons(),
        '//         ',
        this._renderLinkButtons(),
        '//         ',
        this._renderImageButton(),
        '//         ',
        this._renderBlockTypeDropdown(),
        '//         ',
        this._renderUndoRedo(),
        buttonsGroups,
        customControls && customControls.map(function (f) {
          switch (typeof f === 'undefined' ? 'undefined' : (0, _typeof3.default)(f)) {
            case 'function':
              return f(function (key, value) {
                return _this2.setState((0, _defineProperty3.default)({}, 'customControl' + key, value));
              }, function (key) {
                return _this2.state['customControl' + key];
              }, editorState);
            default:
              return f;
          }
        })
      );
    }
  }, {
    key: '_renderBlockTypeDropdown',
    value: function _renderBlockTypeDropdown(name, toolbarConfig) {
      var blockType = this._getCurrentBlockType();
      var choices = new _map2.default((toolbarConfig.BLOCK_TYPE_DROPDOWN || []).map(function (type) {
        return [type.style, { label: type.label, className: type.className }];
      }));
      if (!choices.has(blockType)) {
        blockType = (0, _from2.default)(choices.keys())[0];
      }
      return _react2.default.createElement(
        _ButtonGroup2.default,
        { key: name },
        _react2.default.createElement(_Dropdown2.default, (0, _extends3.default)({}, toolbarConfig.extraProps, {
          choices: choices,
          selectedKey: blockType,
          onChange: this._selectBlockType
        }))
      );
    }
  }, {
    key: '_renderBlockTypeButtons',
    value: function _renderBlockTypeButtons(name, toolbarConfig) {
      var _this3 = this;

      var blockType = this._getCurrentBlockType();
      var buttons = (toolbarConfig.BLOCK_TYPE_BUTTONS || []).map(function (type, index) {
        return _react2.default.createElement(_StyleButton2.default, (0, _extends3.default)({}, toolbarConfig.extraProps, {
          key: String(index),
          isActive: type.style === blockType,
          label: type.label,
          onToggle: _this3._toggleBlockType,
          style: type.style,
          onFocus: _this3.props.focusEditor,
          className: type.className
        }));
      });
      return _react2.default.createElement(
        _ButtonGroup2.default,
        { key: name },
        buttons
      );
    }
  }, {
    key: '_renderInlineStyleButtons',
    value: function _renderInlineStyleButtons(name, toolbarConfig) {
      var _this4 = this;

      var editorState = this.props.editorState;

      var currentStyle = editorState.getCurrentInlineStyle();
      var buttons = (toolbarConfig.INLINE_STYLE_BUTTONS || []).map(function (type, index) {
        return _react2.default.createElement(_StyleButton2.default, (0, _extends3.default)({}, toolbarConfig.extraProps, {
          key: String(index),
          isActive: currentStyle.has(type.style),
          label: type.label,
          onToggle: _this4._toggleInlineStyle,
          style: type.style,
          onFocus: _this4.props.focusEditor,
          className: type.className
        }));
      });
      return _react2.default.createElement(
        _ButtonGroup2.default,
        { key: name },
        buttons
      );
    }
  }, {
    key: '_renderLinkButtons',
    value: function _renderLinkButtons(name, toolbarConfig) {
      var editorState = this.props.editorState;

      var selection = editorState.getSelection();
      var entity = this._getEntityAtCursor();
      var hasSelection = !selection.isCollapsed();
      var isCursorOnLink = entity != null && entity.type === _draftJsUtils.ENTITY_TYPE.LINK;
      var shouldShowLinkButton = hasSelection || isCursorOnLink;
      return _react2.default.createElement(
        _ButtonGroup2.default,
        { key: name },
        _react2.default.createElement(_PopoverIconButton2.default, {
          label: 'Link',
          iconName: 'link',
          isDisabled: !shouldShowLinkButton,
          showPopover: this.state.showLinkInput,
          onTogglePopover: this._toggleShowLinkInput,
          onSubmit: this._setLink
        }),
        _react2.default.createElement(_IconButton2.default, (0, _extends3.default)({}, toolbarConfig.extraProps, {
          label: 'Remove Link',
          iconName: 'remove-link',
          isDisabled: !isCursorOnLink,
          onClick: this._removeLink,
          focusOnClick: false
        }))
      );
    }
  }, {
    key: '_renderImageButton',
    value: function _renderImageButton(name) {
      return _react2.default.createElement(
        _ButtonGroup2.default,
        { key: name },
        _react2.default.createElement(_PopoverIconButton2.default, {
          label: 'Image',
          iconName: 'image',
          showPopover: this.state.showImageInput,
          onTogglePopover: this._toggleShowImageInput,
          onSubmit: this._setImage
        })
      );
    }
  }, {
    key: '_renderUndoRedo',
    value: function _renderUndoRedo(name, toolbarConfig) {
      var editorState = this.props.editorState;

      var canUndo = editorState.getUndoStack().size !== 0;
      var canRedo = editorState.getRedoStack().size !== 0;
      return _react2.default.createElement(
        _ButtonGroup2.default,
        { key: name },
        _react2.default.createElement(_IconButton2.default, (0, _extends3.default)({}, toolbarConfig.extraProps, {
          label: 'Undo',
          iconName: 'undo',
          isDisabled: !canUndo,
          onClick: this._undo,
          focusOnClick: false
        })),
        _react2.default.createElement(_IconButton2.default, (0, _extends3.default)({}, toolbarConfig.extraProps, {
          label: 'Redo',
          iconName: 'redo',
          isDisabled: !canRedo,
          onClick: this._redo,
          focusOnClick: false
        }))
      );
    }
  }, {
    key: '_onKeypress',
    value: function _onKeypress(event, eventFlags) {
      // Catch cmd+k for use with link insertion.
      if ((0, _KeyBindingUtil.hasCommandModifier)(event) && event.keyCode === 75) {
        var _editorState = this.props.editorState;

        if (!_editorState.getSelection().isCollapsed()) {
          this.setState({ showLinkInput: true });
          eventFlags.wasHandled = true;
        }
      }
    }
  }, {
    key: '_toggleShowLinkInput',
    value: function _toggleShowLinkInput(event) {
      var isShowing = this.state.showLinkInput;
      // If this is a hide request, decide if we should focus the editor.
      if (isShowing) {
        var shouldFocusEditor = true;
        if (event && event.type === 'click') {
          // TODO: Use a better way to get the editor root node.
          var editorRoot = _reactDom2.default.findDOMNode(this).parentNode;
          var _document = document,
              activeElement = _document.activeElement;

          var wasClickAway = activeElement == null || activeElement === document.body;
          if (!wasClickAway && !editorRoot.contains(activeElement)) {
            shouldFocusEditor = false;
          }
        }
        if (shouldFocusEditor) {
          this.props.focusEditor();
        }
      }
      this.setState({ showLinkInput: !isShowing });
    }
  }, {
    key: '_toggleShowImageInput',
    value: function _toggleShowImageInput(event) {
      var isShowing = this.state.showImageInput;
      // If this is a hide request, decide if we should focus the editor.
      if (isShowing) {
        var shouldFocusEditor = true;
        if (event && event.type === 'click') {
          // TODO: Use a better way to get the editor root node.
          var editorRoot = _reactDom2.default.findDOMNode(this).parentNode;
          var _document2 = document,
              activeElement = _document2.activeElement;

          var wasClickAway = activeElement == null || activeElement === document.body;
          if (!wasClickAway && !editorRoot.contains(activeElement)) {
            shouldFocusEditor = false;
          }
        }
        if (shouldFocusEditor) {
          this.props.focusEditor();
        }
      }
      this.setState({ showImageInput: !isShowing });
    }
  }, {
    key: '_setImage',
    value: function _setImage(src) {
      var editorState = this.props.editorState;

      var contentState = editorState.getCurrentContent();
      var selection = editorState.getSelection();
      var entityKey = _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.IMAGE, 'IMMUTABLE', { src: src });
      var updatedContent = _draftJs.Modifier.insertText(contentState, selection, ' ', null, entityKey);
      this.setState({ showImageInput: false });
      this.props.onChange(_draftJs.EditorState.push(editorState, updatedContent));
      this._focusEditor();
    }
  }, {
    key: '_setLink',
    value: function _setLink(url) {
      var editorState = this.props.editorState;

      var selection = editorState.getSelection();
      var entityKey = _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.LINK, 'MUTABLE', { url: url });
      this.setState({ showLinkInput: false });
      this.props.onChange(_draftJs.RichUtils.toggleLink(editorState, selection, entityKey));
      this._focusEditor();
    }
  }, {
    key: '_removeLink',
    value: function _removeLink() {
      var editorState = this.props.editorState;

      var entity = (0, _getEntityAtCursor3.default)(editorState);
      if (entity != null) {
        var blockKey = entity.blockKey,
            startOffset = entity.startOffset,
            endOffset = entity.endOffset;

        this.props.onChange((0, _clearEntityForRange2.default)(editorState, blockKey, startOffset, endOffset));
      }
    }
  }, {
    key: '_getEntityAtCursor',
    value: function _getEntityAtCursor() {
      var editorState = this.props.editorState;

      var entity = (0, _getEntityAtCursor3.default)(editorState);
      return entity == null ? null : _draftJs.Entity.get(entity.entityKey);
    }
  }, {
    key: '_getCurrentBlockType',
    value: function _getCurrentBlockType() {
      var editorState = this.props.editorState;

      var selection = editorState.getSelection();
      return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    }
  }, {
    key: '_selectBlockType',
    value: function _selectBlockType() {
      this._toggleBlockType.apply(this, arguments);
      this._focusEditor();
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.props.onChange(_draftJs.RichUtils.toggleBlockType(this.props.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.props.onChange(_draftJs.RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle));
    }
  }, {
    key: '_undo',
    value: function _undo() {
      var editorState = this.props.editorState;

      this.props.onChange(_draftJs.EditorState.undo(editorState));
    }
  }, {
    key: '_redo',
    value: function _redo() {
      var editorState = this.props.editorState;

      this.props.onChange(_draftJs.EditorState.redo(editorState));
    }
  }, {
    key: '_focusEditor',
    value: function _focusEditor() {
      var _this5 = this;

      // Hacky: Wait to focus the editor so we don't lose selection.
      setTimeout(function () {
        _this5.props.focusEditor();
      }, 50);
    }
  }]);
  return EditorToolbar;
}(_react.Component);

exports.default = EditorToolbar;
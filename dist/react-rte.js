module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createValueFromString = exports.createEmptyValue = exports.decorator = exports.EditorValue = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(2);

	var _getDefaultKeyBinding = __webpack_require__(131);

	var _getDefaultKeyBinding2 = _interopRequireDefault(_getDefaultKeyBinding);

	var _changeBlockDepth = __webpack_require__(144);

	var _changeBlockDepth2 = _interopRequireDefault(_changeBlockDepth);

	var _changeBlockType = __webpack_require__(145);

	var _changeBlockType2 = _interopRequireDefault(_changeBlockType);

	var _getBlocksInSelection = __webpack_require__(146);

	var _getBlocksInSelection2 = _interopRequireDefault(_getBlocksInSelection);

	var _insertBlockAfter = __webpack_require__(148);

	var _insertBlockAfter2 = _interopRequireDefault(_insertBlockAfter);

	var _isListItem = __webpack_require__(149);

	var _isListItem2 = _interopRequireDefault(_isListItem);

	var _isSoftNewlineEvent = __webpack_require__(156);

	var _isSoftNewlineEvent2 = _interopRequireDefault(_isSoftNewlineEvent);

	var _EditorToolbar = __webpack_require__(157);

	var _EditorToolbar2 = _interopRequireDefault(_EditorToolbar);

	var _EditorValue = __webpack_require__(187);

	var _EditorValue2 = _interopRequireDefault(_EditorValue);

	var _LinkDecorator = __webpack_require__(209);

	var _LinkDecorator2 = _interopRequireDefault(_LinkDecorator);

	var _ImageDecorator = __webpack_require__(210);

	var _ImageDecorator2 = _interopRequireDefault(_ImageDecorator);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _classAutobind = __webpack_require__(163);

	var _classAutobind2 = _interopRequireDefault(_classAutobind);

	var _events = __webpack_require__(214);

	var _events2 = _interopRequireDefault(_events);

	var _draftJsUtils = __webpack_require__(150);

	__webpack_require__(215);

	var _RichTextEditor = __webpack_require__(217);

	var _RichTextEditor2 = _interopRequireDefault(_RichTextEditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	  _inherits(RichTextEditor, _Component);

	  function RichTextEditor() {
	    _classCallCheck(this, RichTextEditor);

	    var _this = _possibleConstructorReturn(this, (RichTextEditor.__proto__ || Object.getPrototypeOf(RichTextEditor)).apply(this, arguments));

	    _this._keyEmitter = new _events2.default();
	    (0, _classAutobind2.default)(_this);
	    return _this;
	  }

	  _createClass(RichTextEditor, [{
	    key: 'render',
	    value: function render() {
	      var _cx;

	      var _props = this.props;
	      var value = _props.value;
	      var className = _props.className;
	      var toolbarClassName = _props.toolbarClassName;
	      var editorClassName = _props.editorClassName;
	      var placeholder = _props.placeholder;
	      var customStyleMap = _props.customStyleMap;
	      var readOnly = _props.readOnly;
	      var disabled = _props.disabled;

	      var otherProps = _objectWithoutProperties(_props, ['value', 'className', 'toolbarClassName', 'editorClassName', 'placeholder', 'customStyleMap', 'readOnly', 'disabled']);

	      var editorState = value.getEditorState();
	      customStyleMap = customStyleMap ? _extends({}, styleMap, customStyleMap) : styleMap;

	      // If the user changes block type before entering any text, we can either
	      // style the placeholder or hide it. Let's just hide it for now.
	      var combinedEditorClassName = (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, _RichTextEditor2.default.editor, true), _defineProperty(_cx, _RichTextEditor2.default.hidePlaceholder, this._shouldHidePlaceholder()), _cx), editorClassName);
	      if (readOnly == null) {
	        readOnly = disabled;
	      }
	      var editorToolbar = void 0;
	      if (!readOnly) {
	        editorToolbar = _react2.default.createElement(_EditorToolbar2.default, {
	          className: toolbarClassName,
	          keyEmitter: this._keyEmitter,
	          editorState: editorState,
	          onChange: this._onChange,
	          focusEditor: this._focus
	        });
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(_RichTextEditor2.default.root, className) },
	        editorToolbar,
	        _react2.default.createElement(
	          'div',
	          { className: combinedEditorClassName },
	          _react2.default.createElement(_draftJs.Editor, _extends({}, otherProps, {
	            blockStyleFn: getBlockStyle,
	            customStyleMap: customStyleMap,
	            editorState: editorState,
	            handleReturn: this._handleReturn,
	            keyBindingFn: this._customKeyHandler,
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
	          var block = newContent.getBlockForKey(newSelection.getStartKey());
	          newContent = _draftJs.Modifier.insertText(newContent, newSelection, '\n', block.getInlineStyleAt(newSelection.getStartOffset()), null);
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
	        var block = contentState.getBlockForKey(blockKey);
	        if ((0, _isListItem2.default)(block) && block.getLength() === 0) {
	          var depth = block.getDepth();
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
	        var block = contentState.getBlockForKey(blockKey);
	        if (!(0, _isListItem2.default)(block) && block.getType() !== _draftJsUtils.BLOCK_TYPE.UNSTYLED) {
	          // If cursor is at end.
	          if (block.getLength() === selection.getStartOffset()) {
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
	      var _props2 = this.props;
	      var onChange = _props2.onChange;
	      var value = _props2.value;

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


	function getBlockStyle(block) {
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

	function createValueFromString(markup, format) {
	  return _EditorValue2.default.createFromString(markup, format, decorator);
	}

	// $FlowIssue - This should probably not be done this way.
	Object.assign(RichTextEditor, {
	  EditorValue: _EditorValue2.default,
	  decorator: decorator,
	  createEmptyValue: createEmptyValue,
	  createValueFromString: createValueFromString
	});

	exports.EditorValue = _EditorValue2.default;
	exports.decorator = decorator;
	exports.createEmptyValue = createEmptyValue;
	exports.createValueFromString = createValueFromString;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Draft
	 */

	'use strict';

	var AtomicBlockUtils = __webpack_require__(3);
	var BlockMapBuilder = __webpack_require__(4);
	var CharacterMetadata = __webpack_require__(6);
	var CompositeDraftDecorator = __webpack_require__(41);
	var ContentBlock = __webpack_require__(7);
	var ContentState = __webpack_require__(33);
	var DefaultDraftBlockRenderMap = __webpack_require__(42);
	var DefaultDraftInlineStyle = __webpack_require__(44);
	var DraftEditor = __webpack_require__(45);
	var DraftEditorBlock = __webpack_require__(51);
	var DraftModifier = __webpack_require__(9);
	var DraftEntity = __webpack_require__(15);
	var DraftEntityInstance = __webpack_require__(17);
	var EditorState = __webpack_require__(30);
	var KeyBindingUtil = __webpack_require__(101);
	var RichTextEditorUtil = __webpack_require__(132);
	var SelectionState = __webpack_require__(34);

	var convertFromDraftStateToRaw = __webpack_require__(134);
	var convertFromHTMLToContentBlocks = __webpack_require__(124);
	var convertFromRawToDraftState = __webpack_require__(138);
	var generateRandomKey = __webpack_require__(22);
	var getDefaultKeyBinding = __webpack_require__(131);
	var getVisibleSelectionRect = __webpack_require__(142);

	var DraftPublic = {
	  Editor: DraftEditor,
	  EditorBlock: DraftEditorBlock,
	  EditorState: EditorState,

	  CompositeDecorator: CompositeDraftDecorator,
	  Entity: DraftEntity,
	  EntityInstance: DraftEntityInstance,

	  BlockMapBuilder: BlockMapBuilder,
	  CharacterMetadata: CharacterMetadata,
	  ContentBlock: ContentBlock,
	  ContentState: ContentState,
	  SelectionState: SelectionState,

	  AtomicBlockUtils: AtomicBlockUtils,
	  KeyBindingUtil: KeyBindingUtil,
	  Modifier: DraftModifier,
	  RichUtils: RichTextEditorUtil,

	  DefaultDraftBlockRenderMap: DefaultDraftBlockRenderMap,
	  DefaultDraftInlineStyle: DefaultDraftInlineStyle,

	  convertFromHTML: convertFromHTMLToContentBlocks,
	  convertFromRaw: convertFromRawToDraftState,
	  convertToRaw: convertFromDraftStateToRaw,
	  genKey: generateRandomKey,
	  getDefaultKeyBinding: getDefaultKeyBinding,
	  getVisibleSelectionRect: getVisibleSelectionRect
	};

	module.exports = DraftPublic;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AtomicBlockUtils
	 * @typechecks
	 * 
	 */

	'use strict';

	var BlockMapBuilder = __webpack_require__(4);
	var CharacterMetadata = __webpack_require__(6);
	var ContentBlock = __webpack_require__(7);
	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);
	var Immutable = __webpack_require__(5);

	var generateRandomKey = __webpack_require__(22);

	var List = Immutable.List;
	var Repeat = Immutable.Repeat;


	var AtomicBlockUtils = {
	  insertAtomicBlock: function insertAtomicBlock(editorState, entityKey, character) {
	    var contentState = editorState.getCurrentContent();
	    var selectionState = editorState.getSelection();

	    var afterRemoval = DraftModifier.removeRange(contentState, selectionState, 'backward');

	    var targetSelection = afterRemoval.getSelectionAfter();
	    var afterSplit = DraftModifier.splitBlock(afterRemoval, targetSelection);
	    var insertionTarget = afterSplit.getSelectionAfter();

	    var asAtomicBlock = DraftModifier.setBlockType(afterSplit, insertionTarget, 'atomic');

	    var charData = CharacterMetadata.create({ entity: entityKey });

	    var fragmentArray = [new ContentBlock({
	      key: generateRandomKey(),
	      type: 'atomic',
	      text: character,
	      characterList: List(Repeat(charData, character.length))
	    }), new ContentBlock({
	      key: generateRandomKey(),
	      type: 'unstyled',
	      text: '',
	      characterList: List()
	    })];

	    var fragment = BlockMapBuilder.createFromArray(fragmentArray);

	    var withAtomicBlock = DraftModifier.replaceWithFragment(asAtomicBlock, insertionTarget, fragment);

	    var newContent = withAtomicBlock.merge({
	      selectionBefore: selectionState,
	      selectionAfter: withAtomicBlock.getSelectionAfter().set('hasFocus', true)
	    });

	    return EditorState.push(editorState, newContent, 'insert-fragment');
	  }
	};

	module.exports = AtomicBlockUtils;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BlockMapBuilder
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(5);

	var OrderedMap = Immutable.OrderedMap;


	var BlockMapBuilder = {
	  createFromArray: function createFromArray(blocks) {
	    return OrderedMap(blocks.map(function (block) {
	      return [block.getKey(), block];
	    }));
	  }
	};

	module.exports = BlockMapBuilder;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.Immutable = factory();
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step > 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    findEntry: function(predicate, context) {
	      var found;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findLastEntry: function(predicate, context) {
	      return this.toSeq().reverse().findEntry(predicate, context);
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  // Temporary warning about using length
	  (function () {
	    try {
	      Object.defineProperty(IterablePrototype, 'length', {
	        get: function () {
	          if (!Iterable.noLengthWarning) {
	            var stack;
	            try {
	              throw new Error();
	            } catch (error) {
	              stack = error.stack;
	            }
	            if (stack.indexOf('_wrapObject') === -1) {
	              console && console.warn && console.warn(
	                'iterable.length has been deprecated, '+
	                'use iterable.size or iterable.count(). '+
	                'This warning will become a silent error in a future version. ' +
	                stack
	              );
	              return this.size;
	            }
	          }
	        }
	      });
	    } catch (e) {}
	  })();



	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLastKey: function(predicate, context) {
	      return this.toSeq().reverse().findKey(predicate, context);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    lastKeyOf: function(searchValue) {
	      return this.findLastKey(function(value ) {return is(value, searchValue)});
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.toKeyedSeq().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.toKeyedSeq().reverse().keyOf(searchValue);
	      return key === undefined ? -1 : key;

	      // var index =
	      // return this.toSeq().reverse().indexOf(searchValue);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var key = this.toKeyedSeq().findLastKey(predicate, context);
	      return key === undefined ? -1 : key;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : value;
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CharacterMetadata
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(5);

	var Map = _require.Map;
	var OrderedSet = _require.OrderedSet;
	var Record = _require.Record;


	var EMPTY_SET = OrderedSet();

	var defaultRecord = {
	  style: EMPTY_SET,
	  entity: null
	};

	var CharacterMetadataRecord = Record(defaultRecord);

	var CharacterMetadata = function (_CharacterMetadataRec) {
	  _inherits(CharacterMetadata, _CharacterMetadataRec);

	  function CharacterMetadata() {
	    _classCallCheck(this, CharacterMetadata);

	    return _possibleConstructorReturn(this, _CharacterMetadataRec.apply(this, arguments));
	  }

	  CharacterMetadata.prototype.getStyle = function getStyle() {
	    return this.get('style');
	  };

	  CharacterMetadata.prototype.getEntity = function getEntity() {
	    return this.get('entity');
	  };

	  CharacterMetadata.prototype.hasStyle = function hasStyle(style) {
	    return this.getStyle().has(style);
	  };

	  CharacterMetadata.applyStyle = function applyStyle(record, style) {
	    var withStyle = record.set('style', record.getStyle().add(style));
	    return CharacterMetadata.create(withStyle);
	  };

	  CharacterMetadata.removeStyle = function removeStyle(record, style) {
	    var withoutStyle = record.set('style', record.getStyle().remove(style));
	    return CharacterMetadata.create(withoutStyle);
	  };

	  CharacterMetadata.applyEntity = function applyEntity(record, entityKey) {
	    var withEntity = record.getEntity() === entityKey ? record : record.set('entity', entityKey);
	    return CharacterMetadata.create(withEntity);
	  };

	  /**
	   * Use this function instead of the `CharacterMetadata` constructor.
	   * Since most content generally uses only a very small number of
	   * style/entity permutations, we can reuse these objects as often as
	   * possible.
	   */


	  CharacterMetadata.create = function create(config) {
	    if (!config) {
	      return EMPTY;
	    }

	    // Fill in unspecified properties, if necessary.
	    var configMap = Map({ style: EMPTY_SET, entity: null }).merge(config);

	    var existing = pool.get(configMap);
	    if (existing) {
	      return existing;
	    }

	    var newCharacter = new CharacterMetadata(configMap);
	    pool = pool.set(configMap, newCharacter);
	    return newCharacter;
	  };

	  return CharacterMetadata;
	}(CharacterMetadataRecord);

	var EMPTY = new CharacterMetadata();
	var pool = Map([[Map(defaultRecord), EMPTY]]);

	CharacterMetadata.EMPTY = EMPTY;

	module.exports = CharacterMetadata;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ContentBlock
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Immutable = __webpack_require__(5);

	var findRangesImmutable = __webpack_require__(8);

	var List = Immutable.List;
	var Map = Immutable.Map;
	var OrderedSet = Immutable.OrderedSet;
	var Record = Immutable.Record;


	var EMPTY_SET = OrderedSet();

	var defaultRecord = {
	  key: '',
	  type: 'unstyled',
	  text: '',
	  characterList: List(),
	  depth: 0,
	  data: Map()
	};

	var ContentBlockRecord = Record(defaultRecord);

	var ContentBlock = function (_ContentBlockRecord) {
	  _inherits(ContentBlock, _ContentBlockRecord);

	  function ContentBlock() {
	    _classCallCheck(this, ContentBlock);

	    return _possibleConstructorReturn(this, _ContentBlockRecord.apply(this, arguments));
	  }

	  ContentBlock.prototype.getKey = function getKey() {
	    return this.get('key');
	  };

	  ContentBlock.prototype.getType = function getType() {
	    return this.get('type');
	  };

	  ContentBlock.prototype.getText = function getText() {
	    return this.get('text');
	  };

	  ContentBlock.prototype.getCharacterList = function getCharacterList() {
	    return this.get('characterList');
	  };

	  ContentBlock.prototype.getLength = function getLength() {
	    return this.getText().length;
	  };

	  ContentBlock.prototype.getDepth = function getDepth() {
	    return this.get('depth');
	  };

	  ContentBlock.prototype.getData = function getData() {
	    return this.get('data');
	  };

	  ContentBlock.prototype.getInlineStyleAt = function getInlineStyleAt(offset) {
	    var character = this.getCharacterList().get(offset);
	    return character ? character.getStyle() : EMPTY_SET;
	  };

	  ContentBlock.prototype.getEntityAt = function getEntityAt(offset) {
	    var character = this.getCharacterList().get(offset);
	    return character ? character.getEntity() : null;
	  };

	  /**
	   * Execute a callback for every contiguous range of styles within the block.
	   */


	  ContentBlock.prototype.findStyleRanges = function findStyleRanges(filterFn, callback) {
	    findRangesImmutable(this.getCharacterList(), haveEqualStyle, filterFn, callback);
	  };

	  /**
	   * Execute a callback for every contiguous range of entities within the block.
	   */


	  ContentBlock.prototype.findEntityRanges = function findEntityRanges(filterFn, callback) {
	    findRangesImmutable(this.getCharacterList(), haveEqualEntity, filterFn, callback);
	  };

	  return ContentBlock;
	}(ContentBlockRecord);

	function haveEqualStyle(charA, charB) {
	  return charA.getStyle() === charB.getStyle();
	}

	function haveEqualEntity(charA, charB) {
	  return charA.getEntity() === charB.getEntity();
	}

	module.exports = ContentBlock;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findRangesImmutable
	 * 
	 */

	'use strict';

	/**
	 * Search through an array to find contiguous stretches of elements that
	 * match a specified filter function.
	 *
	 * When ranges are found, execute a specified `found` function to supply
	 * the values to the caller.
	 */
	function findRangesImmutable(haystack, areEqualFn, filterFn, foundFn) {
	  if (!haystack.size) {
	    return;
	  }

	  var cursor = 0;

	  haystack.reduce(function (value, nextValue, nextIndex) {
	    /* $FlowFixMe(>=0.28.0): `value` could be undefined! */
	    if (!areEqualFn(value, nextValue)) {
	      /* $FlowFixMe(>=0.28.0): `value` could be undefined! */
	      if (filterFn(value)) {
	        foundFn(cursor, nextIndex);
	      }
	      cursor = nextIndex;
	    }
	    return nextValue;
	  });

	  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
	}

	module.exports = findRangesImmutable;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftModifier
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(6);
	var ContentStateInlineStyle = __webpack_require__(11);
	var Immutable = __webpack_require__(5);

	var applyEntityToContentState = __webpack_require__(12);
	var getCharacterRemovalRange = __webpack_require__(14);
	var getContentStateFragment = __webpack_require__(21);
	var insertFragmentIntoContentState = __webpack_require__(24);
	var insertTextIntoContentState = __webpack_require__(26);
	var invariant = __webpack_require__(18);
	var modifyBlockForContentState = __webpack_require__(27);
	var removeEntitiesAtEdges = __webpack_require__(23);
	var removeRangeFromContentState = __webpack_require__(28);
	var splitBlockInContentState = __webpack_require__(29);

	var OrderedSet = Immutable.OrderedSet;

	/**
	 * `DraftModifier` provides a set of convenience methods that apply
	 * modifications to a `ContentState` object based on a target `SelectionState`.
	 *
	 * Any change to a `ContentState` should be decomposable into a series of
	 * transaction functions that apply the required changes and return output
	 * `ContentState` objects.
	 *
	 * These functions encapsulate some of the most common transaction sequences.
	 */

	var DraftModifier = {
	  replaceText: function replaceText(contentState, rangeToReplace, text, inlineStyle, entityKey) {
	    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToReplace);
	    var withoutText = removeRangeFromContentState(withoutEntities, rangeToReplace);

	    var character = CharacterMetadata.create({
	      style: inlineStyle || OrderedSet(),
	      entity: entityKey || null
	    });

	    return insertTextIntoContentState(withoutText, withoutText.getSelectionAfter(), text, character);
	  },

	  insertText: function insertText(contentState, targetRange, text, inlineStyle, entityKey) {
	    !targetRange.isCollapsed() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Target range must be collapsed for `insertText`.') : invariant(false) : void 0;
	    return DraftModifier.replaceText(contentState, targetRange, text, inlineStyle, entityKey);
	  },

	  moveText: function moveText(contentState, removalRange, targetRange) {
	    var movedFragment = getContentStateFragment(contentState, removalRange);

	    var afterRemoval = DraftModifier.removeRange(contentState, removalRange, 'backward');

	    return DraftModifier.replaceWithFragment(afterRemoval, targetRange, movedFragment);
	  },

	  replaceWithFragment: function replaceWithFragment(contentState, targetRange, fragment) {
	    var withoutEntities = removeEntitiesAtEdges(contentState, targetRange);
	    var withoutText = removeRangeFromContentState(withoutEntities, targetRange);

	    return insertFragmentIntoContentState(withoutText, withoutText.getSelectionAfter(), fragment);
	  },

	  removeRange: function removeRange(contentState, rangeToRemove, removalDirection) {
	    // Check whether the selection state overlaps with a single entity.
	    // If so, try to remove the appropriate substring of the entity text.
	    if (rangeToRemove.getAnchorKey() === rangeToRemove.getFocusKey()) {
	      var key = rangeToRemove.getAnchorKey();
	      var startOffset = rangeToRemove.getStartOffset();
	      var endOffset = rangeToRemove.getEndOffset();
	      var block = contentState.getBlockForKey(key);

	      var startEntity = block.getEntityAt(startOffset);
	      var endEntity = block.getEntityAt(endOffset - 1);
	      if (startEntity && startEntity === endEntity) {
	        var adjustedRemovalRange = getCharacterRemovalRange(block, rangeToRemove, removalDirection);
	        return removeRangeFromContentState(contentState, adjustedRemovalRange);
	      }
	    }

	    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToRemove);
	    return removeRangeFromContentState(withoutEntities, rangeToRemove);
	  },

	  splitBlock: function splitBlock(contentState, selectionState) {
	    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
	    var withoutText = removeRangeFromContentState(withoutEntities, selectionState);

	    return splitBlockInContentState(withoutText, withoutText.getSelectionAfter());
	  },

	  applyInlineStyle: function applyInlineStyle(contentState, selectionState, inlineStyle) {
	    return ContentStateInlineStyle.add(contentState, selectionState, inlineStyle);
	  },

	  removeInlineStyle: function removeInlineStyle(contentState, selectionState, inlineStyle) {
	    return ContentStateInlineStyle.remove(contentState, selectionState, inlineStyle);
	  },

	  setBlockType: function setBlockType(contentState, selectionState, blockType) {
	    return modifyBlockForContentState(contentState, selectionState, function (block) {
	      return block.merge({ type: blockType, depth: 0 });
	    });
	  },

	  setBlockData: function setBlockData(contentState, selectionState, blockData) {
	    return modifyBlockForContentState(contentState, selectionState, function (block) {
	      return block.merge({ data: blockData });
	    });
	  },

	  mergeBlockData: function mergeBlockData(contentState, selectionState, blockData) {
	    return modifyBlockForContentState(contentState, selectionState, function (block) {
	      return block.merge({ data: block.getData().merge(blockData) });
	    });
	  },

	  applyEntity: function applyEntity(contentState, selectionState, entityKey) {
	    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
	    return applyEntityToContentState(withoutEntities, selectionState, entityKey);
	  }
	};

	module.exports = DraftModifier;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ContentStateInlineStyle
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(6);

	var _require = __webpack_require__(5);

	var Map = _require.Map;


	var ContentStateInlineStyle = {
	  add: function add(contentState, selectionState, inlineStyle) {
	    return modifyInlineStyle(contentState, selectionState, inlineStyle, true);
	  },

	  remove: function remove(contentState, selectionState, inlineStyle) {
	    return modifyInlineStyle(contentState, selectionState, inlineStyle, false);
	  }
	};

	function modifyInlineStyle(contentState, selectionState, inlineStyle, addOrRemove) {
	  var blockMap = contentState.getBlockMap();
	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();

	  var newBlocks = blockMap.skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).concat(Map([[endKey, blockMap.get(endKey)]])).map(function (block, blockKey) {
	    var sliceStart;
	    var sliceEnd;

	    if (startKey === endKey) {
	      sliceStart = startOffset;
	      sliceEnd = endOffset;
	    } else {
	      sliceStart = blockKey === startKey ? startOffset : 0;
	      sliceEnd = blockKey === endKey ? endOffset : block.getLength();
	    }

	    var chars = block.getCharacterList();
	    var current;
	    while (sliceStart < sliceEnd) {
	      current = chars.get(sliceStart);
	      chars = chars.set(sliceStart, addOrRemove ? CharacterMetadata.applyStyle(current, inlineStyle) : CharacterMetadata.removeStyle(current, inlineStyle));
	      sliceStart++;
	    }

	    return block.set('characterList', chars);
	  });

	  return contentState.merge({
	    blockMap: blockMap.merge(newBlocks),
	    selectionBefore: selectionState,
	    selectionAfter: selectionState
	  });
	}

	module.exports = ContentStateInlineStyle;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule applyEntityToContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(5);

	var applyEntityToContentBlock = __webpack_require__(13);

	function applyEntityToContentState(contentState, selectionState, entityKey) {
	  var blockMap = contentState.getBlockMap();
	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();

	  var newBlocks = blockMap.skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).toOrderedMap().merge(Immutable.OrderedMap([[endKey, blockMap.get(endKey)]])).map(function (block, blockKey) {
	    var sliceStart = blockKey === startKey ? startOffset : 0;
	    var sliceEnd = blockKey === endKey ? endOffset : block.getLength();
	    return applyEntityToContentBlock(block, sliceStart, sliceEnd, entityKey);
	  });

	  return contentState.merge({
	    blockMap: blockMap.merge(newBlocks),
	    selectionBefore: selectionState,
	    selectionAfter: selectionState
	  });
	}

	module.exports = applyEntityToContentState;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule applyEntityToContentBlock
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(6);

	function applyEntityToContentBlock(contentBlock, start, end, entityKey) {
	  var characterList = contentBlock.getCharacterList();
	  while (start < end) {
	    characterList = characterList.set(start, CharacterMetadata.applyEntity(characterList.get(start), entityKey));
	    start++;
	  }
	  return contentBlock.set('characterList', characterList);
	}

	module.exports = applyEntityToContentBlock;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getCharacterRemovalRange
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftEntity = __webpack_require__(15);
	var DraftEntitySegments = __webpack_require__(19);

	var getRangesForDraftEntity = __webpack_require__(20);
	var invariant = __webpack_require__(18);

	/**
	 * Given a SelectionState and a removal direction, determine the entire range
	 * that should be removed from a ContentState. This is based on any entities
	 * within the target, with their `mutability` values taken into account.
	 *
	 * For instance, if we are attempting to remove part of an "immutable" entity
	 * range, the entire entity must be removed. The returned `SelectionState`
	 * will be adjusted accordingly.
	 */
	function getCharacterRemovalRange(block, selectionState, direction) {
	  var start = selectionState.getStartOffset();
	  var end = selectionState.getEndOffset();
	  var entityKey = block.getEntityAt(start);
	  if (!entityKey) {
	    return selectionState;
	  }

	  var entity = DraftEntity.get(entityKey);
	  var mutability = entity.getMutability();

	  // `MUTABLE` entities can just have the specified range of text removed
	  // directly. No adjustments are needed.
	  if (mutability === 'MUTABLE') {
	    return selectionState;
	  }

	  // Find the entity range that overlaps with our removal range.
	  var entityRanges = getRangesForDraftEntity(block, entityKey).filter(function (range) {
	    return start < range.end && end > range.start;
	  });

	  !(entityRanges.length == 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There should only be one entity range within this removal range.') : invariant(false) : void 0;

	  var entityRange = entityRanges[0];

	  // For `IMMUTABLE` entity types, we will remove the entire entity range.
	  if (mutability === 'IMMUTABLE') {
	    return selectionState.merge({
	      anchorOffset: entityRange.start,
	      focusOffset: entityRange.end,
	      isBackward: false
	    });
	  }

	  // For `SEGMENTED` entity types, determine the appropriate segment to
	  // remove.
	  var removalRange = DraftEntitySegments.getRemovalRange(start, end, block.getText().slice(entityRange.start, entityRange.end), entityRange.start, direction);

	  return selectionState.merge({
	    anchorOffset: removalRange.start,
	    focusOffset: removalRange.end,
	    isBackward: false
	  });
	}

	module.exports = getCharacterRemovalRange;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _assign = __webpack_require__(16);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEntity
	 * @typechecks
	 * 
	 */

	var DraftEntityInstance = __webpack_require__(17);
	var Immutable = __webpack_require__(5);

	var invariant = __webpack_require__(18);

	var Map = Immutable.Map;


	var instances = Map();
	var instanceKey = 0;

	/**
	 * A "document entity" is an object containing metadata associated with a
	 * piece of text in a ContentBlock.
	 *
	 * For example, a `link` entity might include a `uri` property. When a
	 * ContentBlock is rendered in the browser, text that refers to that link
	 * entity may be rendered as an anchor, with the `uri` as the href value.
	 *
	 * In a ContentBlock, every position in the text may correspond to zero
	 * or one entities. This correspondence is tracked using a key string,
	 * generated via DraftEntity.create() and used to obtain entity metadata
	 * via DraftEntity.get().
	 */
	var DraftEntity = {
	  /**
	   * Create a DraftEntityInstance and store it for later retrieval.
	   *
	   * A random key string will be generated and returned. This key may
	   * be used to track the entity's usage in a ContentBlock, and for
	   * retrieving data about the entity at render time.
	   */
	  create: function create(type, mutability, data) {
	    return DraftEntity.add(new DraftEntityInstance({ type: type, mutability: mutability, data: data || {} }));
	  },

	  /**
	   * Add an existing DraftEntityInstance to the DraftEntity map. This is
	   * useful when restoring instances from the server.
	   */
	  add: function add(instance) {
	    var key = '' + ++instanceKey;
	    instances = instances.set(key, instance);
	    return key;
	  },

	  /**
	   * Retrieve the entity corresponding to the supplied key string.
	   */
	  get: function get(key) {
	    var instance = instances.get(key);
	    !!!instance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Unknown DraftEntity key.') : invariant(false) : void 0;
	    return instance;
	  },

	  /**
	   * Entity instances are immutable. If you need to update the data for an
	   * instance, this method will merge your data updates and return a new
	   * instance.
	   */
	  mergeData: function mergeData(key, toMerge) {
	    var instance = DraftEntity.get(key);
	    var newData = _extends({}, instance.getData(), toMerge);
	    var newInstance = instance.set('data', newData);
	    instances = instances.set(key, newInstance);
	    return newInstance;
	  },

	  /**
	   * Completely replace the data for a given instance.
	   */
	  replaceData: function replaceData(key, newData) {
	    var instance = DraftEntity.get(key);
	    var newInstance = instance.set('data', newData);
	    instances = instances.set(key, newInstance);
	    return newInstance;
	  }
	};

	module.exports = DraftEntity;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEntityInstance
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Immutable = __webpack_require__(5);

	var Record = Immutable.Record;


	var DraftEntityInstanceRecord = Record({
	  type: 'TOKEN',
	  mutability: 'IMMUTABLE',
	  data: Object
	});

	/**
	 * An instance of a document entity, consisting of a `type` and relevant
	 * `data`, metadata about the entity.
	 *
	 * For instance, a "link" entity might provide a URI, and a "mention"
	 * entity might provide the mentioned user's ID. These pieces of data
	 * may be used when rendering the entity as part of a ContentBlock DOM
	 * representation. For a link, the data would be used as an href for
	 * the rendered anchor. For a mention, the ID could be used to retrieve
	 * a hovercard.
	 */

	var DraftEntityInstance = function (_DraftEntityInstanceR) {
	  _inherits(DraftEntityInstance, _DraftEntityInstanceR);

	  function DraftEntityInstance() {
	    _classCallCheck(this, DraftEntityInstance);

	    return _possibleConstructorReturn(this, _DraftEntityInstanceR.apply(this, arguments));
	  }

	  DraftEntityInstance.prototype.getType = function getType() {
	    return this.get('type');
	  };

	  DraftEntityInstance.prototype.getMutability = function getMutability() {
	    return this.get('mutability');
	  };

	  DraftEntityInstance.prototype.getData = function getData() {
	    return this.get('data');
	  };

	  return DraftEntityInstance;
	}(DraftEntityInstanceRecord);

	module.exports = DraftEntityInstance;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEntitySegments
	 * @typechecks
	 * 
	 */

	'use strict';

	/**
	 * Identify the range to delete from a segmented entity.
	 *
	 * Rules:
	 *
	 *  Example: 'John F. Kennedy'
	 *
	 *   - Deletion from within any non-whitespace (i.e. ['John', 'F.', 'Kennedy'])
	 *     will return the range of that text.
	 *
	 *       'John F. Kennedy' -> 'John F.'
	 *                  ^
	 *
	 *   - Forward deletion of whitespace will remove the following section:
	 *
	 *       'John F. Kennedy' -> 'John Kennedy'
	 *            ^
	 *
	 *   - Backward deletion of whitespace will remove the previous section:
	 *
	 *       'John F. Kennedy' -> 'F. Kennedy'
	 *            ^
	 */
	var DraftEntitySegments = {
	  getRemovalRange: function getRemovalRange(selectionStart, selectionEnd, text, entityStart, direction) {
	    var segments = text.split(' ');
	    segments = segments.map(function ( /*string*/segment, /*number*/ii) {
	      if (direction === 'forward') {
	        if (ii > 0) {
	          return ' ' + segment;
	        }
	      } else if (ii < segments.length - 1) {
	        return segment + ' ';
	      }
	      return segment;
	    });

	    var segmentStart = entityStart;
	    var segmentEnd;
	    var segment;
	    var removalStart = null;
	    var removalEnd = null;

	    for (var jj = 0; jj < segments.length; jj++) {
	      segment = segments[jj];
	      segmentEnd = segmentStart + segment.length;

	      // Our selection overlaps this segment.
	      if (selectionStart < segmentEnd && segmentStart < selectionEnd) {
	        if (removalStart !== null) {
	          removalEnd = segmentEnd;
	        } else {
	          removalStart = segmentStart;
	          removalEnd = segmentEnd;
	        }
	      } else if (removalStart !== null) {
	        break;
	      }

	      segmentStart = segmentEnd;
	    }

	    var entityEnd = entityStart + text.length;
	    var atStart = removalStart === entityStart;
	    var atEnd = removalEnd === entityEnd;

	    if (!atStart && atEnd || atStart && !atEnd) {
	      if (direction === 'forward') {
	        if (removalEnd !== entityEnd) {
	          removalEnd++;
	        }
	      } else if (removalStart !== entityStart) {
	        removalStart--;
	      }
	    }

	    return {
	      start: removalStart,
	      end: removalEnd
	    };
	  }
	};

	module.exports = DraftEntitySegments;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getRangesForDraftEntity
	 * @typechecks
	 * 
	 */

	'use strict';

	var invariant = __webpack_require__(18);

	/**
	 * Obtain the start and end positions of the range that has the
	 * specified entity applied to it.
	 *
	 * Entity keys are applied only to contiguous stretches of text, so this
	 * method searches for the first instance of the entity key and returns
	 * the subsequent range.
	 */
	function getRangesForDraftEntity(block, key) {
	  var ranges = [];
	  block.findEntityRanges(function (c) {
	    return c.getEntity() === key;
	  }, function (start, end) {
	    ranges.push({ start: start, end: end });
	  });

	  !!!ranges.length ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Entity key not found in this range.') : invariant(false) : void 0;

	  return ranges;
	}

	module.exports = getRangesForDraftEntity;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getContentStateFragment
	 * @typechecks
	 * 
	 */

	'use strict';

	var generateRandomKey = __webpack_require__(22);
	var removeEntitiesAtEdges = __webpack_require__(23);

	function getContentStateFragment(contentState, selectionState) {
	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();

	  // Edge entities should be stripped to ensure that we don't preserve
	  // invalid partial entities when the fragment is reused. We do, however,
	  // preserve entities that are entirely within the selection range.
	  var contentWithoutEdgeEntities = removeEntitiesAtEdges(contentState, selectionState);

	  var blockMap = contentWithoutEdgeEntities.getBlockMap();
	  var blockKeys = blockMap.keySeq();
	  var startIndex = blockKeys.indexOf(startKey);
	  var endIndex = blockKeys.indexOf(endKey) + 1;

	  var slice = blockMap.slice(startIndex, endIndex).map(function (block, blockKey) {
	    var newKey = generateRandomKey();

	    var text = block.getText();
	    var chars = block.getCharacterList();

	    if (startKey === endKey) {
	      return block.merge({
	        key: newKey,
	        text: text.slice(startOffset, endOffset),
	        characterList: chars.slice(startOffset, endOffset)
	      });
	    }

	    if (blockKey === startKey) {
	      return block.merge({
	        key: newKey,
	        text: text.slice(startOffset),
	        characterList: chars.slice(startOffset)
	      });
	    }

	    if (blockKey === endKey) {
	      return block.merge({
	        key: newKey,
	        text: text.slice(0, endOffset),
	        characterList: chars.slice(0, endOffset)
	      });
	    }

	    return block.set('key', newKey);
	  });

	  return slice.toOrderedMap();
	}

	module.exports = getContentStateFragment;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule generateRandomKey
	 * @typechecks
	 * 
	 */

	'use strict';

	var seenKeys = {};
	var MULTIPLIER = Math.pow(2, 24);

	function generateRandomKey() {
	  var key = void 0;
	  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
	    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
	  }
	  seenKeys[key] = true;
	  return key;
	}

	module.exports = generateRandomKey;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule removeEntitiesAtEdges
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(6);
	var DraftEntity = __webpack_require__(15);

	var findRangesImmutable = __webpack_require__(8);
	var invariant = __webpack_require__(18);

	function removeEntitiesAtEdges(contentState, selectionState) {
	  var blockMap = contentState.getBlockMap();

	  var updatedBlocks = {};

	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var startBlock = blockMap.get(startKey);
	  var updatedStart = removeForBlock(startBlock, startOffset);

	  if (updatedStart !== startBlock) {
	    updatedBlocks[startKey] = updatedStart;
	  }

	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();
	  var endBlock = blockMap.get(endKey);
	  if (startKey === endKey) {
	    endBlock = updatedStart;
	  }

	  var updatedEnd = removeForBlock(endBlock, endOffset);

	  if (updatedEnd !== endBlock) {
	    updatedBlocks[endKey] = updatedEnd;
	  }

	  if (!Object.keys(updatedBlocks).length) {
	    return contentState.set('selectionAfter', selectionState);
	  }

	  return contentState.merge({
	    blockMap: blockMap.merge(updatedBlocks),
	    selectionAfter: selectionState
	  });
	}

	function getRemovalRange(characters, key, offset) {
	  var removalRange;
	  findRangesImmutable(characters, function (a, b) {
	    return a.getEntity() === b.getEntity();
	  }, function (element) {
	    return element.getEntity() === key;
	  }, function (start, end) {
	    if (start <= offset && end >= offset) {
	      removalRange = { start: start, end: end };
	    }
	  });
	  !(typeof removalRange === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Removal range must exist within character list.') : invariant(false) : void 0;
	  return removalRange;
	}

	function removeForBlock(block, offset) {
	  var chars = block.getCharacterList();
	  var charBefore = offset > 0 ? chars.get(offset - 1) : undefined;
	  var charAfter = offset < chars.count() ? chars.get(offset) : undefined;
	  var entityBeforeCursor = charBefore ? charBefore.getEntity() : undefined;
	  var entityAfterCursor = charAfter ? charAfter.getEntity() : undefined;

	  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
	    var entity = DraftEntity.get(entityAfterCursor);
	    if (entity.getMutability() !== 'MUTABLE') {
	      var _getRemovalRange = getRemovalRange(chars, entityAfterCursor, offset);

	      var start = _getRemovalRange.start;
	      var end = _getRemovalRange.end;

	      var current;
	      while (start < end) {
	        current = chars.get(start);
	        chars = chars.set(start, CharacterMetadata.applyEntity(current, null));
	        start++;
	      }
	      return block.set('characterList', chars);
	    }
	  }

	  return block;
	}

	module.exports = removeEntitiesAtEdges;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule insertFragmentIntoContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var BlockMapBuilder = __webpack_require__(4);

	var generateRandomKey = __webpack_require__(22);
	var insertIntoList = __webpack_require__(25);
	var invariant = __webpack_require__(18);

	function insertFragmentIntoContentState(contentState, selectionState, fragment) {
	  !selectionState.isCollapsed() ? process.env.NODE_ENV !== 'production' ? invariant(false, '`insertFragment` should only be called with a collapsed selection state.') : invariant(false) : void 0;

	  var targetKey = selectionState.getStartKey();
	  var targetOffset = selectionState.getStartOffset();

	  var blockMap = contentState.getBlockMap();

	  var fragmentSize = fragment.size;
	  var finalKey;
	  var finalOffset;

	  if (fragmentSize === 1) {
	    var targetBlock = blockMap.get(targetKey);
	    var pastedBlock = fragment.first();
	    var text = targetBlock.getText();
	    var chars = targetBlock.getCharacterList();

	    var newBlock = targetBlock.merge({
	      text: text.slice(0, targetOffset) + pastedBlock.getText() + text.slice(targetOffset),
	      characterList: insertIntoList(chars, pastedBlock.getCharacterList(), targetOffset),
	      data: pastedBlock.getData()
	    });

	    blockMap = blockMap.set(targetKey, newBlock);

	    finalKey = targetKey;
	    finalOffset = targetOffset + pastedBlock.getText().length;

	    return contentState.merge({
	      blockMap: blockMap.set(targetKey, newBlock),
	      selectionBefore: selectionState,
	      selectionAfter: selectionState.merge({
	        anchorKey: finalKey,
	        anchorOffset: finalOffset,
	        focusKey: finalKey,
	        focusOffset: finalOffset,
	        isBackward: false
	      })
	    });
	  }

	  var newBlockArr = [];

	  contentState.getBlockMap().forEach(function (block, blockKey) {
	    if (blockKey !== targetKey) {
	      newBlockArr.push(block);
	      return;
	    }

	    var text = block.getText();
	    var chars = block.getCharacterList();

	    // Modify head portion of block.
	    var blockSize = text.length;
	    var headText = text.slice(0, targetOffset);
	    var headCharacters = chars.slice(0, targetOffset);
	    var appendToHead = fragment.first();

	    var modifiedHead = block.merge({
	      text: headText + appendToHead.getText(),
	      characterList: headCharacters.concat(appendToHead.getCharacterList()),
	      type: headText ? block.getType() : appendToHead.getType(),
	      data: appendToHead.getData()
	    });

	    newBlockArr.push(modifiedHead);

	    // Insert fragment blocks after the head and before the tail.
	    fragment.slice(1, fragmentSize - 1).forEach(function (fragmentBlock) {
	      newBlockArr.push(fragmentBlock.set('key', generateRandomKey()));
	    });

	    // Modify tail portion of block.
	    var tailText = text.slice(targetOffset, blockSize);
	    var tailCharacters = chars.slice(targetOffset, blockSize);
	    var prependToTail = fragment.last();
	    finalKey = generateRandomKey();

	    var modifiedTail = prependToTail.merge({
	      key: finalKey,
	      text: prependToTail.getText() + tailText,
	      characterList: prependToTail.getCharacterList().concat(tailCharacters),
	      data: prependToTail.getData()
	    });

	    newBlockArr.push(modifiedTail);
	  });

	  finalOffset = fragment.last().getLength();

	  return contentState.merge({
	    blockMap: BlockMapBuilder.createFromArray(newBlockArr),
	    selectionBefore: selectionState,
	    selectionAfter: selectionState.merge({
	      anchorKey: finalKey,
	      anchorOffset: finalOffset,
	      focusKey: finalKey,
	      focusOffset: finalOffset,
	      isBackward: false
	    })
	  });
	}

	module.exports = insertFragmentIntoContentState;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule insertIntoList
	 * 
	 */

	'use strict';

	/**
	 * Maintain persistence for target list when appending and prepending.
	 */
	function insertIntoList(targetList, toInsert, offset) {
	  if (offset === targetList.count()) {
	    toInsert.forEach(function (c) {
	      targetList = targetList.push(c);
	    });
	  } else if (offset === 0) {
	    toInsert.reverse().forEach(function (c) {
	      targetList = targetList.unshift(c);
	    });
	  } else {
	    var head = targetList.slice(0, offset);
	    var tail = targetList.slice(offset);
	    targetList = head.concat(toInsert, tail).toList();
	  }
	  return targetList;
	}

	module.exports = insertIntoList;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule insertTextIntoContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(5);

	var insertIntoList = __webpack_require__(25);
	var invariant = __webpack_require__(18);

	var Repeat = Immutable.Repeat;


	function insertTextIntoContentState(contentState, selectionState, text, characterMetadata) {
	  !selectionState.isCollapsed() ? process.env.NODE_ENV !== 'production' ? invariant(false, '`insertText` should only be called with a collapsed range.') : invariant(false) : void 0;

	  var len = text.length;
	  if (!len) {
	    return contentState;
	  }

	  var blockMap = contentState.getBlockMap();
	  var key = selectionState.getStartKey();
	  var offset = selectionState.getStartOffset();
	  var block = blockMap.get(key);
	  var blockText = block.getText();

	  var newBlock = block.merge({
	    text: blockText.slice(0, offset) + text + blockText.slice(offset, block.getLength()),
	    characterList: insertIntoList(block.getCharacterList(), Repeat(characterMetadata, len).toList(), offset)
	  });

	  var newOffset = offset + len;

	  return contentState.merge({
	    blockMap: blockMap.set(key, newBlock),
	    selectionAfter: selectionState.merge({
	      anchorOffset: newOffset,
	      focusOffset: newOffset
	    })
	  });
	}

	module.exports = insertTextIntoContentState;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule modifyBlockForContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(5);

	var Map = Immutable.Map;


	function modifyBlockForContentState(contentState, selectionState, operation) {
	  var startKey = selectionState.getStartKey();
	  var endKey = selectionState.getEndKey();
	  var blockMap = contentState.getBlockMap();
	  var newBlocks = blockMap.toSeq().skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).concat(Map([[endKey, blockMap.get(endKey)]])).map(operation);

	  return contentState.merge({
	    blockMap: blockMap.merge(newBlocks),
	    selectionBefore: selectionState,
	    selectionAfter: selectionState
	  });
	}

	module.exports = modifyBlockForContentState;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule removeRangeFromContentState
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(5);

	function removeRangeFromContentState(contentState, selectionState) {
	  if (selectionState.isCollapsed()) {
	    return contentState;
	  }

	  var blockMap = contentState.getBlockMap();
	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();

	  var startBlock = blockMap.get(startKey);
	  var endBlock = blockMap.get(endKey);
	  var characterList;

	  if (startBlock === endBlock) {
	    characterList = removeFromList(startBlock.getCharacterList(), startOffset, endOffset);
	  } else {
	    characterList = startBlock.getCharacterList().slice(0, startOffset).concat(endBlock.getCharacterList().slice(endOffset));
	  }

	  var modifiedStart = startBlock.merge({
	    text: startBlock.getText().slice(0, startOffset) + endBlock.getText().slice(endOffset),
	    characterList: characterList
	  });

	  var newBlocks = blockMap.toSeq().skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).concat(Immutable.Map([[endKey, null]])).map(function (_, k) {
	    return k === startKey ? modifiedStart : null;
	  });

	  blockMap = blockMap.merge(newBlocks).filter(function (block) {
	    return !!block;
	  });

	  return contentState.merge({
	    blockMap: blockMap,
	    selectionBefore: selectionState,
	    selectionAfter: selectionState.merge({
	      anchorKey: startKey,
	      anchorOffset: startOffset,
	      focusKey: startKey,
	      focusOffset: startOffset,
	      isBackward: false
	    })
	  });
	}

	/**
	 * Maintain persistence for target list when removing characters on the
	 * head and tail of the character list.
	 */
	function removeFromList(targetList, startOffset, endOffset) {
	  if (startOffset === 0) {
	    while (startOffset < endOffset) {
	      targetList = targetList.shift();
	      startOffset++;
	    }
	  } else if (endOffset === targetList.count()) {
	    while (endOffset > startOffset) {
	      targetList = targetList.pop();
	      endOffset--;
	    }
	  } else {
	    var head = targetList.slice(0, startOffset);
	    var tail = targetList.slice(endOffset);
	    targetList = head.concat(tail).toList();
	  }
	  return targetList;
	}

	module.exports = removeRangeFromContentState;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule splitBlockInContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(5);

	var generateRandomKey = __webpack_require__(22);
	var invariant = __webpack_require__(18);

	var Map = Immutable.Map;


	function splitBlockInContentState(contentState, selectionState) {
	  !selectionState.isCollapsed() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Selection range must be collapsed.') : invariant(false) : void 0;

	  var key = selectionState.getAnchorKey();
	  var offset = selectionState.getAnchorOffset();
	  var blockMap = contentState.getBlockMap();
	  var blockToSplit = blockMap.get(key);

	  var text = blockToSplit.getText();
	  var chars = blockToSplit.getCharacterList();

	  var blockAbove = blockToSplit.merge({
	    text: text.slice(0, offset),
	    characterList: chars.slice(0, offset)
	  });

	  var keyBelow = generateRandomKey();
	  var blockBelow = blockAbove.merge({
	    key: keyBelow,
	    text: text.slice(offset),
	    characterList: chars.slice(offset),
	    data: Map()
	  });

	  var blocksBefore = blockMap.toSeq().takeUntil(function (v) {
	    return v === blockToSplit;
	  });
	  var blocksAfter = blockMap.toSeq().skipUntil(function (v) {
	    return v === blockToSplit;
	  }).rest();
	  var newBlocks = blocksBefore.concat([[blockAbove.getKey(), blockAbove], [blockBelow.getKey(), blockBelow]], blocksAfter).toOrderedMap();

	  return contentState.merge({
	    blockMap: newBlocks,
	    selectionBefore: selectionState,
	    selectionAfter: selectionState.merge({
	      anchorKey: keyBelow,
	      anchorOffset: 0,
	      focusKey: keyBelow,
	      focusOffset: 0,
	      isBackward: false
	    })
	  });
	}

	module.exports = splitBlockInContentState;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EditorState
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BlockTree = __webpack_require__(31);
	var ContentState = __webpack_require__(33);
	var EditorBidiService = __webpack_require__(36);
	var Immutable = __webpack_require__(5);
	var SelectionState = __webpack_require__(34);

	var OrderedSet = Immutable.OrderedSet;
	var Record = Immutable.Record;
	var Stack = Immutable.Stack;


	var defaultRecord = {
	  allowUndo: true,
	  currentContent: null,
	  decorator: null,
	  directionMap: null,
	  forceSelection: false,
	  inCompositionMode: false,
	  inlineStyleOverride: null,
	  lastChangeType: null,
	  nativelyRenderedContent: null,
	  redoStack: Stack(),
	  selection: null,
	  treeMap: null,
	  undoStack: Stack()
	};

	var EditorStateRecord = Record(defaultRecord);

	var EditorState = function () {
	  EditorState.createEmpty = function createEmpty(decorator) {
	    return EditorState.createWithContent(ContentState.createFromText(''), decorator);
	  };

	  EditorState.createWithContent = function createWithContent(contentState, decorator) {
	    var firstKey = contentState.getBlockMap().first().getKey();
	    return EditorState.create({
	      currentContent: contentState,
	      undoStack: Stack(),
	      redoStack: Stack(),
	      decorator: decorator || null,
	      selection: SelectionState.createEmpty(firstKey)
	    });
	  };

	  EditorState.create = function create(config) {
	    var currentContent = config.currentContent;
	    var decorator = config.decorator;

	    var recordConfig = _extends({}, config, {
	      treeMap: generateNewTreeMap(currentContent, decorator),
	      directionMap: EditorBidiService.getDirectionMap(currentContent)
	    });
	    return new EditorState(new EditorStateRecord(recordConfig));
	  };

	  EditorState.set = function set(editorState, put) {
	    var map = editorState.getImmutable().withMutations(function (state) {
	      var existingDecorator = state.get('decorator');
	      var decorator = existingDecorator;
	      if (put.decorator === null) {
	        decorator = null;
	      } else if (put.decorator) {
	        decorator = put.decorator;
	      }

	      var newContent = put.currentContent || editorState.getCurrentContent();

	      if (decorator !== existingDecorator) {
	        var treeMap = state.get('treeMap');
	        var newTreeMap;
	        if (decorator && existingDecorator) {
	          newTreeMap = regenerateTreeForNewDecorator(newContent.getBlockMap(), treeMap, decorator, existingDecorator);
	        } else {
	          newTreeMap = generateNewTreeMap(newContent, decorator);
	        }

	        state.merge({
	          decorator: decorator,
	          treeMap: newTreeMap,
	          nativelyRenderedContent: null
	        });
	        return;
	      }

	      var existingContent = editorState.getCurrentContent();
	      if (newContent !== existingContent) {
	        state.set('treeMap', regenerateTreeForNewBlocks(editorState, newContent.getBlockMap(), decorator));
	      }

	      state.merge(put);
	    });

	    return new EditorState(map);
	  };

	  EditorState.prototype.toJS = function toJS() {
	    return this.getImmutable().toJS();
	  };

	  EditorState.prototype.getAllowUndo = function getAllowUndo() {
	    return this.getImmutable().get('allowUndo');
	  };

	  EditorState.prototype.getCurrentContent = function getCurrentContent() {
	    return this.getImmutable().get('currentContent');
	  };

	  EditorState.prototype.getUndoStack = function getUndoStack() {
	    return this.getImmutable().get('undoStack');
	  };

	  EditorState.prototype.getRedoStack = function getRedoStack() {
	    return this.getImmutable().get('redoStack');
	  };

	  EditorState.prototype.getSelection = function getSelection() {
	    return this.getImmutable().get('selection');
	  };

	  EditorState.prototype.getDecorator = function getDecorator() {
	    return this.getImmutable().get('decorator');
	  };

	  EditorState.prototype.isInCompositionMode = function isInCompositionMode() {
	    return this.getImmutable().get('inCompositionMode');
	  };

	  EditorState.prototype.mustForceSelection = function mustForceSelection() {
	    return this.getImmutable().get('forceSelection');
	  };

	  EditorState.prototype.getNativelyRenderedContent = function getNativelyRenderedContent() {
	    return this.getImmutable().get('nativelyRenderedContent');
	  };

	  EditorState.prototype.getLastChangeType = function getLastChangeType() {
	    return this.getImmutable().get('lastChangeType');
	  };

	  /**
	   * While editing, the user may apply inline style commands with a collapsed
	   * cursor, intending to type text that adopts the specified style. In this
	   * case, we track the specified style as an "override" that takes precedence
	   * over the inline style of the text adjacent to the cursor.
	   *
	   * If null, there is no override in place.
	   */


	  EditorState.prototype.getInlineStyleOverride = function getInlineStyleOverride() {
	    return this.getImmutable().get('inlineStyleOverride');
	  };

	  EditorState.setInlineStyleOverride = function setInlineStyleOverride(editorState, inlineStyleOverride) {
	    return EditorState.set(editorState, { inlineStyleOverride: inlineStyleOverride });
	  };

	  /**
	   * Get the appropriate inline style for the editor state. If an
	   * override is in place, use it. Otherwise, the current style is
	   * based on the location of the selection state.
	   */


	  EditorState.prototype.getCurrentInlineStyle = function getCurrentInlineStyle() {
	    var override = this.getInlineStyleOverride();
	    if (override != null) {
	      return override;
	    }

	    var content = this.getCurrentContent();
	    var selection = this.getSelection();

	    if (selection.isCollapsed()) {
	      return getInlineStyleForCollapsedSelection(content, selection);
	    }

	    return getInlineStyleForNonCollapsedSelection(content, selection);
	  };

	  EditorState.prototype.getBlockTree = function getBlockTree(blockKey) {
	    return this.getImmutable().getIn(['treeMap', blockKey]);
	  };

	  EditorState.prototype.isSelectionAtStartOfContent = function isSelectionAtStartOfContent() {
	    var firstKey = this.getCurrentContent().getBlockMap().first().getKey();
	    return this.getSelection().hasEdgeWithin(firstKey, 0, 0);
	  };

	  EditorState.prototype.isSelectionAtEndOfContent = function isSelectionAtEndOfContent() {
	    var content = this.getCurrentContent();
	    var blockMap = content.getBlockMap();
	    var last = blockMap.last();
	    var end = last.getLength();
	    return this.getSelection().hasEdgeWithin(last.getKey(), end, end);
	  };

	  EditorState.prototype.getDirectionMap = function getDirectionMap() {
	    return this.getImmutable().get('directionMap');
	  };

	  /**
	   * Incorporate native DOM selection changes into the EditorState. This
	   * method can be used when we simply want to accept whatever the DOM
	   * has given us to represent selection, and we do not need to re-render
	   * the editor.
	   *
	   * To forcibly move the DOM selection, see `EditorState.forceSelection`.
	   */


	  EditorState.acceptSelection = function acceptSelection(editorState, selection) {
	    return updateSelection(editorState, selection, false);
	  };

	  /**
	   * At times, we need to force the DOM selection to be where we
	   * need it to be. This can occur when the anchor or focus nodes
	   * are non-text nodes, for instance. In this case, we want to trigger
	   * a re-render of the editor, which in turn forces selection into
	   * the correct place in the DOM. The `forceSelection` method
	   * accomplishes this.
	   *
	   * This method should be used in cases where you need to explicitly
	   * move the DOM selection from one place to another without a change
	   * in ContentState.
	   */


	  EditorState.forceSelection = function forceSelection(editorState, selection) {
	    if (!selection.getHasFocus()) {
	      selection = selection.set('hasFocus', true);
	    }
	    return updateSelection(editorState, selection, true);
	  };

	  /**
	   * Move selection to the end of the editor without forcing focus.
	   */


	  EditorState.moveSelectionToEnd = function moveSelectionToEnd(editorState) {
	    var content = editorState.getCurrentContent();
	    var lastBlock = content.getLastBlock();
	    var lastKey = lastBlock.getKey();
	    var length = lastBlock.getLength();

	    return EditorState.acceptSelection(editorState, new SelectionState({
	      anchorKey: lastKey,
	      anchorOffset: length,
	      focusKey: lastKey,
	      focusOffset: length,
	      isBackward: false
	    }));
	  };

	  /**
	   * Force focus to the end of the editor. This is useful in scenarios
	   * where we want to programmatically focus the input and it makes sense
	   * to allow the user to continue working seamlessly.
	   */


	  EditorState.moveFocusToEnd = function moveFocusToEnd(editorState) {
	    var afterSelectionMove = EditorState.moveSelectionToEnd(editorState);
	    return EditorState.forceSelection(afterSelectionMove, afterSelectionMove.getSelection());
	  };

	  /**
	   * Push the current ContentState onto the undo stack if it should be
	   * considered a boundary state, and set the provided ContentState as the
	   * new current content.
	   */


	  EditorState.push = function push(editorState, contentState, changeType) {
	    if (editorState.getCurrentContent() === contentState) {
	      return editorState;
	    }

	    var forceSelection = changeType !== 'insert-characters';
	    var directionMap = EditorBidiService.getDirectionMap(contentState, editorState.getDirectionMap());

	    if (!editorState.getAllowUndo()) {
	      return EditorState.set(editorState, {
	        currentContent: contentState,
	        directionMap: directionMap,
	        lastChangeType: changeType,
	        selection: contentState.getSelectionAfter(),
	        forceSelection: forceSelection,
	        inlineStyleOverride: null
	      });
	    }

	    var selection = editorState.getSelection();
	    var currentContent = editorState.getCurrentContent();
	    var undoStack = editorState.getUndoStack();
	    var newContent = contentState;

	    if (selection !== currentContent.getSelectionAfter() || mustBecomeBoundary(editorState, changeType)) {
	      undoStack = undoStack.push(currentContent);
	      newContent = newContent.set('selectionBefore', selection);
	    } else if (changeType === 'insert-characters' || changeType === 'backspace-character' || changeType === 'delete-character') {
	      // Preserve the previous selection.
	      newContent = newContent.set('selectionBefore', currentContent.getSelectionBefore());
	    }

	    var inlineStyleOverride = editorState.getInlineStyleOverride();

	    // Don't discard inline style overrides on block type or depth changes.
	    if (changeType !== 'adjust-depth' && changeType !== 'change-block-type') {
	      inlineStyleOverride = null;
	    }

	    var editorStateChanges = {
	      currentContent: newContent,
	      directionMap: directionMap,
	      undoStack: undoStack,
	      redoStack: Stack(),
	      lastChangeType: changeType,
	      selection: contentState.getSelectionAfter(),
	      forceSelection: forceSelection,
	      inlineStyleOverride: inlineStyleOverride
	    };

	    return EditorState.set(editorState, editorStateChanges);
	  };

	  /**
	   * Make the top ContentState in the undo stack the new current content and
	   * push the current content onto the redo stack.
	   */


	  EditorState.undo = function undo(editorState) {
	    if (!editorState.getAllowUndo()) {
	      return editorState;
	    }

	    var undoStack = editorState.getUndoStack();
	    var newCurrentContent = undoStack.peek();
	    if (!newCurrentContent) {
	      return editorState;
	    }

	    var currentContent = editorState.getCurrentContent();
	    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());

	    return EditorState.set(editorState, {
	      currentContent: newCurrentContent,
	      directionMap: directionMap,
	      undoStack: undoStack.shift(),
	      redoStack: editorState.getRedoStack().push(currentContent),
	      forceSelection: true,
	      inlineStyleOverride: null,
	      lastChangeType: 'undo',
	      nativelyRenderedContent: null,
	      selection: currentContent.getSelectionBefore()
	    });
	  };

	  /**
	   * Make the top ContentState in the redo stack the new current content and
	   * push the current content onto the undo stack.
	   */


	  EditorState.redo = function redo(editorState) {
	    if (!editorState.getAllowUndo()) {
	      return editorState;
	    }

	    var redoStack = editorState.getRedoStack();
	    var newCurrentContent = redoStack.peek();
	    if (!newCurrentContent) {
	      return editorState;
	    }

	    var currentContent = editorState.getCurrentContent();
	    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());

	    return EditorState.set(editorState, {
	      currentContent: newCurrentContent,
	      directionMap: directionMap,
	      undoStack: editorState.getUndoStack().push(currentContent),
	      redoStack: redoStack.shift(),
	      forceSelection: true,
	      inlineStyleOverride: null,
	      lastChangeType: 'redo',
	      nativelyRenderedContent: null,
	      selection: newCurrentContent.getSelectionAfter()
	    });
	  };

	  /**
	   * Not for public consumption.
	   */


	  function EditorState(immutable) {
	    _classCallCheck(this, EditorState);

	    this._immutable = immutable;
	  }

	  /**
	   * Not for public consumption.
	   */


	  EditorState.prototype.getImmutable = function getImmutable() {
	    return this._immutable;
	  };

	  return EditorState;
	}();

	/**
	 * Set the supplied SelectionState as the new current selection, and set
	 * the `force` flag to trigger manual selection placement by the view.
	 */


	function updateSelection(editorState, selection, forceSelection) {
	  return EditorState.set(editorState, {
	    selection: selection,
	    forceSelection: forceSelection,
	    nativelyRenderedContent: null,
	    inlineStyleOverride: null
	  });
	}

	/**
	 * Regenerate the entire tree map for a given ContentState and decorator.
	 * Returns an OrderedMap that maps all available ContentBlock objects.
	 */
	function generateNewTreeMap(contentState, decorator) {
	  return contentState.getBlockMap().map(function (block) {
	    return BlockTree.generate(block, decorator);
	  }).toOrderedMap();
	}

	/**
	 * Regenerate tree map objects for all ContentBlocks that have changed
	 * between the current editorState and newContent. Returns an OrderedMap
	 * with only changed regenerated tree map objects.
	 */
	function regenerateTreeForNewBlocks(editorState, newBlockMap, decorator) {
	  var prevBlockMap = editorState.getCurrentContent().getBlockMap();
	  var prevTreeMap = editorState.getImmutable().get('treeMap');
	  return prevTreeMap.merge(newBlockMap.toSeq().filter(function (block, key) {
	    return block !== prevBlockMap.get(key);
	  }).map(function (block) {
	    return BlockTree.generate(block, decorator);
	  }));
	}

	/**
	 * Generate tree map objects for a new decorator object, preserving any
	 * decorations that are unchanged from the previous decorator.
	 *
	 * Note that in order for this to perform optimally, decoration Lists for
	 * decorators should be preserved when possible to allow for direct immutable
	 * List comparison.
	 */
	function regenerateTreeForNewDecorator(blockMap, previousTreeMap, decorator, existingDecorator) {
	  return previousTreeMap.merge(blockMap.toSeq().filter(function (block) {
	    return decorator.getDecorations(block) !== existingDecorator.getDecorations(block);
	  }).map(function (block) {
	    return BlockTree.generate(block, decorator);
	  }));
	}

	/**
	 * Return whether a change should be considered a boundary state, given
	 * the previous change type. Allows us to discard potential boundary states
	 * during standard typing or deletion behavior.
	 */
	function mustBecomeBoundary(editorState, changeType) {
	  var lastChangeType = editorState.getLastChangeType();
	  return changeType !== lastChangeType || changeType !== 'insert-characters' && changeType !== 'backspace-character' && changeType !== 'delete-character';
	}

	function getInlineStyleForCollapsedSelection(content, selection) {
	  var startKey = selection.getStartKey();
	  var startOffset = selection.getStartOffset();
	  var startBlock = content.getBlockForKey(startKey);

	  // If the cursor is not at the start of the block, look backward to
	  // preserve the style of the preceding character.
	  if (startOffset > 0) {
	    return startBlock.getInlineStyleAt(startOffset - 1);
	  }

	  // The caret is at position zero in this block. If the block has any
	  // text at all, use the style of the first character.
	  if (startBlock.getLength()) {
	    return startBlock.getInlineStyleAt(0);
	  }

	  // Otherwise, look upward in the document to find the closest character.
	  return lookUpwardForInlineStyle(content, startKey);
	}

	function getInlineStyleForNonCollapsedSelection(content, selection) {
	  var startKey = selection.getStartKey();
	  var startOffset = selection.getStartOffset();
	  var startBlock = content.getBlockForKey(startKey);

	  // If there is a character just inside the selection, use its style.
	  if (startOffset < startBlock.getLength()) {
	    return startBlock.getInlineStyleAt(startOffset);
	  }

	  // Check if the selection at the end of a non-empty block. Use the last
	  // style in the block.
	  if (startOffset > 0) {
	    return startBlock.getInlineStyleAt(startOffset - 1);
	  }

	  // Otherwise, look upward in the document to find the closest character.
	  return lookUpwardForInlineStyle(content, startKey);
	}

	function lookUpwardForInlineStyle(content, fromKey) {
	  var previousBlock = content.getBlockBefore(fromKey);
	  var previousLength;

	  while (previousBlock) {
	    previousLength = previousBlock.getLength();
	    if (previousLength) {
	      return previousBlock.getInlineStyleAt(previousLength - 1);
	    }
	    previousBlock = content.getBlockBefore(previousBlock.getKey());
	  }

	  return OrderedSet();
	}

	module.exports = EditorState;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BlockTree
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(5);

	var emptyFunction = __webpack_require__(32);
	var findRangesImmutable = __webpack_require__(8);

	var List = Immutable.List;
	var Repeat = Immutable.Repeat;
	var Record = Immutable.Record;


	var returnTrue = emptyFunction.thatReturnsTrue;

	var FINGERPRINT_DELIMITER = '-';

	var defaultLeafRange = {
	  start: null,
	  end: null
	};

	var LeafRange = Record(defaultLeafRange);

	var defaultDecoratorRange = {
	  start: null,
	  end: null,
	  decoratorKey: null,
	  leaves: null
	};

	var DecoratorRange = Record(defaultDecoratorRange);

	var BlockTree = {
	  /**
	   * Generate a block tree for a given ContentBlock/decorator pair.
	   */
	  generate: function generate(block, decorator) {
	    var textLength = block.getLength();
	    if (!textLength) {
	      return List.of(new DecoratorRange({
	        start: 0,
	        end: 0,
	        decoratorKey: null,
	        leaves: List.of(new LeafRange({ start: 0, end: 0 }))
	      }));
	    }

	    var leafSets = [];
	    var decorations = decorator ? decorator.getDecorations(block) : List(Repeat(null, textLength));

	    var chars = block.getCharacterList();

	    findRangesImmutable(decorations, areEqual, returnTrue, function (start, end) {
	      leafSets.push(new DecoratorRange({
	        start: start,
	        end: end,
	        decoratorKey: decorations.get(start),
	        leaves: generateLeaves(chars.slice(start, end).toList(), start)
	      }));
	    });

	    return List(leafSets);
	  },

	  /**
	   * Create a string representation of the given tree map. This allows us
	   * to rapidly determine whether a tree has undergone a significant
	   * structural change.
	   */
	  getFingerprint: function getFingerprint(tree) {
	    return tree.map(function (leafSet) {
	      var decoratorKey = leafSet.get('decoratorKey');
	      var fingerprintString = decoratorKey !== null ? decoratorKey + '.' + (leafSet.get('end') - leafSet.get('start')) : '';
	      return '' + fingerprintString + '.' + leafSet.get('leaves').size;
	    }).join(FINGERPRINT_DELIMITER);
	  }
	};

	/**
	 * Generate LeafRange records for a given character list.
	 */
	function generateLeaves(characters, offset) {
	  var leaves = [];
	  var inlineStyles = characters.map(function (c) {
	    return c.getStyle();
	  }).toList();
	  findRangesImmutable(inlineStyles, areEqual, returnTrue, function (start, end) {
	    leaves.push(new LeafRange({
	      start: start + offset,
	      end: end + offset
	    }));
	  });
	  return List(leaves);
	}

	function areEqual(a, b) {
	  return a === b;
	}

	module.exports = BlockTree;

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BlockMapBuilder = __webpack_require__(4);
	var CharacterMetadata = __webpack_require__(6);
	var ContentBlock = __webpack_require__(7);
	var Immutable = __webpack_require__(5);
	var SelectionState = __webpack_require__(34);

	var generateRandomKey = __webpack_require__(22);
	var sanitizeDraftText = __webpack_require__(35);

	var List = Immutable.List;
	var Record = Immutable.Record;
	var Repeat = Immutable.Repeat;


	var defaultRecord = {
	  blockMap: null,
	  selectionBefore: null,
	  selectionAfter: null
	};

	var ContentStateRecord = Record(defaultRecord);

	var ContentState = function (_ContentStateRecord) {
	  _inherits(ContentState, _ContentStateRecord);

	  function ContentState() {
	    _classCallCheck(this, ContentState);

	    return _possibleConstructorReturn(this, _ContentStateRecord.apply(this, arguments));
	  }

	  ContentState.prototype.getBlockMap = function getBlockMap() {
	    return this.get('blockMap');
	  };

	  ContentState.prototype.getSelectionBefore = function getSelectionBefore() {
	    return this.get('selectionBefore');
	  };

	  ContentState.prototype.getSelectionAfter = function getSelectionAfter() {
	    return this.get('selectionAfter');
	  };

	  ContentState.prototype.getBlockForKey = function getBlockForKey(key) {
	    var block = this.getBlockMap().get(key);
	    return block;
	  };

	  ContentState.prototype.getKeyBefore = function getKeyBefore(key) {
	    return this.getBlockMap().reverse().keySeq().skipUntil(function (v) {
	      return v === key;
	    }).skip(1).first();
	  };

	  ContentState.prototype.getKeyAfter = function getKeyAfter(key) {
	    return this.getBlockMap().keySeq().skipUntil(function (v) {
	      return v === key;
	    }).skip(1).first();
	  };

	  ContentState.prototype.getBlockAfter = function getBlockAfter(key) {
	    return this.getBlockMap().skipUntil(function (_, k) {
	      return k === key;
	    }).skip(1).first();
	  };

	  ContentState.prototype.getBlockBefore = function getBlockBefore(key) {
	    return this.getBlockMap().reverse().skipUntil(function (_, k) {
	      return k === key;
	    }).skip(1).first();
	  };

	  ContentState.prototype.getBlocksAsArray = function getBlocksAsArray() {
	    return this.getBlockMap().toArray();
	  };

	  ContentState.prototype.getFirstBlock = function getFirstBlock() {
	    return this.getBlockMap().first();
	  };

	  ContentState.prototype.getLastBlock = function getLastBlock() {
	    return this.getBlockMap().last();
	  };

	  ContentState.prototype.getPlainText = function getPlainText(delimiter) {
	    return this.getBlockMap().map(function (block) {
	      return block ? block.getText() : '';
	    }).join(delimiter || '\n');
	  };

	  ContentState.prototype.hasText = function hasText() {
	    var blockMap = this.getBlockMap();
	    return blockMap.size > 1 || blockMap.first().getLength() > 0;
	  };

	  ContentState.createFromBlockArray = function createFromBlockArray(blocks) {
	    var blockMap = BlockMapBuilder.createFromArray(blocks);
	    var selectionState = SelectionState.createEmpty(blockMap.first().getKey());
	    return new ContentState({
	      blockMap: blockMap,
	      selectionBefore: selectionState,
	      selectionAfter: selectionState
	    });
	  };

	  ContentState.createFromText = function createFromText(text) {
	    var delimiter = arguments.length <= 1 || arguments[1] === undefined ? /\r\n?|\n/g : arguments[1];

	    var strings = text.split(delimiter);
	    var blocks = strings.map(function (block) {
	      block = sanitizeDraftText(block);
	      return new ContentBlock({
	        key: generateRandomKey(),
	        text: block,
	        type: 'unstyled',
	        characterList: List(Repeat(CharacterMetadata.EMPTY, block.length))
	      });
	    });
	    return ContentState.createFromBlockArray(blocks);
	  };

	  return ContentState;
	}(ContentStateRecord);

	module.exports = ContentState;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectionState
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Immutable = __webpack_require__(5);

	var Record = Immutable.Record;


	var defaultRecord = {
	  anchorKey: '',
	  anchorOffset: 0,
	  focusKey: '',
	  focusOffset: 0,
	  isBackward: false,
	  hasFocus: false
	};

	var SelectionStateRecord = Record(defaultRecord);

	var SelectionState = function (_SelectionStateRecord) {
	  _inherits(SelectionState, _SelectionStateRecord);

	  function SelectionState() {
	    _classCallCheck(this, SelectionState);

	    return _possibleConstructorReturn(this, _SelectionStateRecord.apply(this, arguments));
	  }

	  SelectionState.prototype.serialize = function serialize() {
	    return 'Anchor: ' + this.getAnchorKey() + ':' + this.getAnchorOffset() + ', ' + 'Focus: ' + this.getFocusKey() + ':' + this.getFocusOffset() + ', ' + 'Is Backward: ' + String(this.getIsBackward()) + ', ' + 'Has Focus: ' + String(this.getHasFocus());
	  };

	  SelectionState.prototype.getAnchorKey = function getAnchorKey() {
	    return this.get('anchorKey');
	  };

	  SelectionState.prototype.getAnchorOffset = function getAnchorOffset() {
	    return this.get('anchorOffset');
	  };

	  SelectionState.prototype.getFocusKey = function getFocusKey() {
	    return this.get('focusKey');
	  };

	  SelectionState.prototype.getFocusOffset = function getFocusOffset() {
	    return this.get('focusOffset');
	  };

	  SelectionState.prototype.getIsBackward = function getIsBackward() {
	    return this.get('isBackward');
	  };

	  SelectionState.prototype.getHasFocus = function getHasFocus() {
	    return this.get('hasFocus');
	  };

	  /**
	   * Return whether the specified range overlaps with an edge of the
	   * SelectionState.
	   */


	  SelectionState.prototype.hasEdgeWithin = function hasEdgeWithin(blockKey, start, end) {
	    var anchorKey = this.getAnchorKey();
	    var focusKey = this.getFocusKey();

	    if (anchorKey === focusKey && anchorKey === blockKey) {
	      var selectionStart = this.getStartOffset();
	      var selectionEnd = this.getEndOffset();
	      return start <= selectionEnd && selectionStart <= end;
	    }

	    if (blockKey !== anchorKey && blockKey !== focusKey) {
	      return false;
	    }

	    var offsetToCheck = blockKey === anchorKey ? this.getAnchorOffset() : this.getFocusOffset();

	    return start <= offsetToCheck && end >= offsetToCheck;
	  };

	  SelectionState.prototype.isCollapsed = function isCollapsed() {
	    return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
	  };

	  SelectionState.prototype.getStartKey = function getStartKey() {
	    return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
	  };

	  SelectionState.prototype.getStartOffset = function getStartOffset() {
	    return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
	  };

	  SelectionState.prototype.getEndKey = function getEndKey() {
	    return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
	  };

	  SelectionState.prototype.getEndOffset = function getEndOffset() {
	    return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
	  };

	  SelectionState.createEmpty = function createEmpty(key) {
	    return new SelectionState({
	      anchorKey: key,
	      anchorOffset: 0,
	      focusKey: key,
	      focusOffset: 0,
	      isBackward: false,
	      hasFocus: false
	    });
	  };

	  return SelectionState;
	}(SelectionStateRecord);

	module.exports = SelectionState;

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule sanitizeDraftText
	 * 
	 */

	'use strict';

	var REGEX_BLOCK_DELIMITER = new RegExp('\r', 'g');

	function sanitizeDraftText(input) {
	  return input.replace(REGEX_BLOCK_DELIMITER, '');
	}

	module.exports = sanitizeDraftText;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EditorBidiService
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(5);
	var UnicodeBidiService = __webpack_require__(37);

	var nullthrows = __webpack_require__(40);

	var OrderedMap = Immutable.OrderedMap;


	var bidiService;

	var EditorBidiService = {
	  getDirectionMap: function getDirectionMap(content, prevBidiMap) {
	    if (!bidiService) {
	      bidiService = new UnicodeBidiService();
	    } else {
	      bidiService.reset();
	    }

	    var blockMap = content.getBlockMap();
	    var nextBidi = blockMap.valueSeq().map(function (block) {
	      return nullthrows(bidiService).getDirection(block.getText());
	    });
	    var bidiMap = OrderedMap(blockMap.keySeq().zip(nextBidi));

	    if (prevBidiMap != null && Immutable.is(prevBidiMap, bidiMap)) {
	      return prevBidiMap;
	    }

	    return bidiMap;
	  }
	};

	module.exports = EditorBidiService;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/**
	 * Stateful API for text direction detection
	 *
	 * This class can be used in applications where you need to detect the
	 * direction of a sequence of text blocks, where each direction shall be used
	 * as the fallback direction for the next one.
	 *
	 * NOTE: A default direction, if not provided, is set based on the global
	 *       direction, as defined by `UnicodeBidiDirection`.
	 *
	 * == Example ==
	 * ```
	 * var UnicodeBidiService = require('UnicodeBidiService');
	 *
	 * var bidiService = new UnicodeBidiService();
	 *
	 * ...
	 *
	 * bidiService.reset();
	 * for (var para in paragraphs) {
	 *   var dir = bidiService.getDirection(para);
	 *   ...
	 * }
	 * ```
	 *
	 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
	 * Unicode Standard Annex #9 (UAX9)
	 * http://www.unicode.org/reports/tr9/
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UnicodeBidi = __webpack_require__(38);
	var UnicodeBidiDirection = __webpack_require__(39);

	var invariant = __webpack_require__(18);

	var UnicodeBidiService = function () {

	  /**
	   * Stateful class for paragraph direction detection
	   *
	   * @param defaultDir  Default direction of the service
	   */

	  function UnicodeBidiService(defaultDir) {
	    _classCallCheck(this, UnicodeBidiService);

	    if (!defaultDir) {
	      defaultDir = UnicodeBidiDirection.getGlobalDir();
	    } else {
	      !UnicodeBidiDirection.isStrong(defaultDir) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Default direction must be a strong direction (LTR or RTL)') : invariant(false) : void 0;
	    }
	    this._defaultDir = defaultDir;
	    this.reset();
	  }

	  /**
	   * Reset the internal state
	   *
	   * Instead of creating a new instance, you can just reset() your instance
	   * everytime you start a new loop.
	   */


	  UnicodeBidiService.prototype.reset = function reset() {
	    this._lastDir = this._defaultDir;
	  };

	  /**
	   * Returns the direction of a block of text, and remembers it as the
	   * fall-back direction for the next paragraph.
	   *
	   * @param str  A text block, e.g. paragraph, table cell, tag
	   * @return     The resolved direction
	   */


	  UnicodeBidiService.prototype.getDirection = function getDirection(str) {
	    this._lastDir = UnicodeBidi.getDirection(str, this._lastDir);
	    return this._lastDir;
	  };

	  return UnicodeBidiService;
	}();

	module.exports = UnicodeBidiService;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/**
	 * Basic (stateless) API for text direction detection
	 *
	 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
	 * Unicode Standard Annex #9 (UAX9)
	 * http://www.unicode.org/reports/tr9/
	 */

	'use strict';

	var UnicodeBidiDirection = __webpack_require__(39);

	var invariant = __webpack_require__(18);

	/**
	 * RegExp ranges of characters with a *Strong* Bidi_Class value.
	 *
	 * Data is based on DerivedBidiClass.txt in UCD version 7.0.0.
	 *
	 * NOTE: For performance reasons, we only support Unicode's
	 *       Basic Multilingual Plane (BMP) for now.
	 */
	var RANGE_BY_BIDI_TYPE = {

	  L: 'A-Za-zªµºÀ-ÖØ-öø-ƺƻ' + 'Ƽ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸ' + 'ʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷ' + 'ͺͻ-ͽͿΆΈ-ΊΌΎ-Ρ' + 'Σ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ' + '՚-՟ա-և։ःऄ-हऻऽ' + 'ा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥' + '०-९॰ॱॲ-ঀং-ঃঅ-ঌ' + 'এ-ঐও-নপ-রলশ-হঽ' + 'া-ীে-ৈো-ৌৎৗড়-ঢ়' + 'য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃ' + 'ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼' + 'ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯' + 'ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-ર' + 'લ-ળવ-હઽા-ીૉો-ૌૐ' + 'ૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐ' + 'ଓ-ନପ-ରଲ-ଳଵ-ହଽାୀ' + 'େ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯' + '୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-க' + 'ங-சஜஞ-டண-தந-பம-ஹ' + 'ா-ிு-ூெ-ைொ-ௌௐௗ' + '௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐ' + 'ఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ' + '౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನ' + 'ಪ-ಳವ-ಹಽಾಿೀ-ೄೆ' + 'ೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯' + 'ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽ' + 'ാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ' + '൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖ' + 'ක-නඳ-රලව-ෆා-ෑෘ-ෟ' + '෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅ' + 'ๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈ' + 'ຊຍດ-ທນ-ຟມ-ຣລວ' + 'ສ-ຫອ-ະາ-ຳຽເ-ໄໆ' + '໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔' + '༕-༗༚-༟༠-༩༪-༳༴༶༸' + '༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ' + '྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘' + '࿙-࿚က-ဪါ-ာေးျ-ြဿ' + '၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡ' + 'ၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁ' + 'ႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ' + '႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼ' + 'ჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈ' + 'ኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅ' + 'ወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨' + '፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮' + 'ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰ' + 'ᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶' + 'ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅ' + 'ះ-ៈ។-៖ៗ៘-៚ៜ០-៩' + '᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪ' + 'ᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱ' + 'ᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫ' + 'ᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖ' + 'ᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤ' + 'ᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭' + 'ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ' + '᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠ' + 'ᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧ' + 'ᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫ' + 'ᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙' + 'ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡' + 'ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫ' + 'ᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕ' + 'Ἐ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝ' + 'Ὗ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌ' + 'ῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎' + 'ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝ' + 'ℤΩℨK-ℭℯ-ℴℵ-ℸℹ' + 'ℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄ' + 'ↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿' + 'Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤ' + 'Ⳬ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ' + '⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾ' + 'ⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇' + '〡-〩〮-〯〱-〵〸-〺〻〼' + 'ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿ' + 'ㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟' + 'ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇' + '㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋' + '㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵' + '一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ' + '꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫ' + 'Ꙁ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ' + '꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎ' + 'Ꞑ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁ' + 'ꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵' + '꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ' + '꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉' + 'ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼ' + 'ꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍' + 'ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ' + '꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴ' + 'ꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯ' + 'ꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱ' + 'ꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟' + 'ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵ' + 'ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ' + 'ꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤ' + 'ꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣' + 'ힰ-ퟆퟋ-ퟻ-豈-舘並-龎' + 'ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰ' + 'ｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏ' + 'ￒ-ￗￚ-ￜ',

	  R: '֐־׀׃׆׈-׏א-ת׫-ׯ' + 'װ-ײ׳-״׵-׿߀-߉ߊ-ߪ' + 'ߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ' + '࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞' + '࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ' + '﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ',

	  AL: '؈؋؍؛؜؝؞-؟ؠ-ؿـ' + 'ف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦ' + 'ۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏' + 'ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿' + 'ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒' + 'ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ' + '﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵' + 'ﹶ-ﻼ﻽-﻾'

	};

	var REGEX_STRONG = new RegExp('[' + RANGE_BY_BIDI_TYPE.L + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + ']');

	var REGEX_RTL = new RegExp('[' + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + ']');

	/**
	 * Returns the first strong character (has Bidi_Class value of L, R, or AL).
	 *
	 * @param str  A text block; e.g. paragraph, table cell, tag
	 * @return     A character with strong bidi direction, or null if not found
	 */
	function firstStrongChar(str) {
	  var match = REGEX_STRONG.exec(str);
	  return match == null ? null : match[0];
	}

	/**
	 * Returns the direction of a block of text, based on the direction of its
	 * first strong character (has Bidi_Class value of L, R, or AL).
	 *
	 * @param str  A text block; e.g. paragraph, table cell, tag
	 * @return     The resolved direction
	 */
	function firstStrongCharDir(str) {
	  var strongChar = firstStrongChar(str);
	  if (strongChar == null) {
	    return UnicodeBidiDirection.NEUTRAL;
	  }
	  return REGEX_RTL.exec(strongChar) ? UnicodeBidiDirection.RTL : UnicodeBidiDirection.LTR;
	}

	/**
	 * Returns the direction of a block of text, based on the direction of its
	 * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
	 * direction, if no strong character is found.
	 *
	 * This function is supposed to be used in respect to Higher-Level Protocol
	 * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
	 *
	 * @param str       A text block; e.g. paragraph, table cell, tag
	 * @param fallback  Fallback direction, used if no strong direction detected
	 *                  for the block (default = NEUTRAL)
	 * @return          The resolved direction
	 */
	function resolveBlockDir(str, fallback) {
	  fallback = fallback || UnicodeBidiDirection.NEUTRAL;
	  if (!str.length) {
	    return fallback;
	  }
	  var blockDir = firstStrongCharDir(str);
	  return blockDir === UnicodeBidiDirection.NEUTRAL ? fallback : blockDir;
	}

	/**
	 * Returns the direction of a block of text, based on the direction of its
	 * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
	 * direction, if no strong character is found.
	 *
	 * NOTE: This function is similar to resolveBlockDir(), but uses the global
	 * direction as the fallback, so it *always* returns a Strong direction,
	 * making it useful for integration in places that you need to make the final
	 * decision, like setting some CSS class.
	 *
	 * This function is supposed to be used in respect to Higher-Level Protocol
	 * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
	 *
	 * @param str             A text block; e.g. paragraph, table cell
	 * @param strongFallback  Fallback direction, used if no strong direction
	 *                        detected for the block (default = global direction)
	 * @return                The resolved Strong direction
	 */
	function getDirection(str, strongFallback) {
	  if (!strongFallback) {
	    strongFallback = UnicodeBidiDirection.getGlobalDir();
	  }
	  !UnicodeBidiDirection.isStrong(strongFallback) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Fallback direction must be a strong direction') : invariant(false) : void 0;
	  return resolveBlockDir(str, strongFallback);
	}

	/**
	 * Returns true if getDirection(arguments...) returns LTR.
	 *
	 * @param str             A text block; e.g. paragraph, table cell
	 * @param strongFallback  Fallback direction, used if no strong direction
	 *                        detected for the block (default = global direction)
	 * @return                True if the resolved direction is LTR
	 */
	function isDirectionLTR(str, strongFallback) {
	  return getDirection(str, strongFallback) === UnicodeBidiDirection.LTR;
	}

	/**
	 * Returns true if getDirection(arguments...) returns RTL.
	 *
	 * @param str             A text block; e.g. paragraph, table cell
	 * @param strongFallback  Fallback direction, used if no strong direction
	 *                        detected for the block (default = global direction)
	 * @return                True if the resolved direction is RTL
	 */
	function isDirectionRTL(str, strongFallback) {
	  return getDirection(str, strongFallback) === UnicodeBidiDirection.RTL;
	}

	var UnicodeBidi = {
	  firstStrongChar: firstStrongChar,
	  firstStrongCharDir: firstStrongCharDir,
	  resolveBlockDir: resolveBlockDir,
	  getDirection: getDirection,
	  isDirectionLTR: isDirectionLTR,
	  isDirectionRTL: isDirectionRTL
	};

	module.exports = UnicodeBidi;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/**
	 * Constants to represent text directionality
	 *
	 * Also defines a *global* direciton, to be used in bidi algorithms as a
	 * default fallback direciton, when no better direction is found or provided.
	 *
	 * NOTE: Use `setGlobalDir()`, or update `initGlobalDir()`, to set the initial
	 *       global direction value based on the application.
	 *
	 * Part of the implementation of Unicode Bidirectional Algorithm (UBA)
	 * Unicode Standard Annex #9 (UAX9)
	 * http://www.unicode.org/reports/tr9/
	 */

	'use strict';

	var invariant = __webpack_require__(18);

	var NEUTRAL = 'NEUTRAL'; // No strong direction
	var LTR = 'LTR'; // Left-to-Right direction
	var RTL = 'RTL'; // Right-to-Left direction

	var globalDir = null;

	// == Helpers ==

	/**
	 * Check if a directionality value is a Strong one
	 */
	function isStrong(dir) {
	  return dir === LTR || dir === RTL;
	}

	/**
	 * Get string value to be used for `dir` HTML attribute or `direction` CSS
	 * property.
	 */
	function getHTMLDir(dir) {
	  !isStrong(dir) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
	  return dir === LTR ? 'ltr' : 'rtl';
	}

	/**
	 * Get string value to be used for `dir` HTML attribute or `direction` CSS
	 * property, but returns null if `dir` has same value as `otherDir`.
	 * `null`.
	 */
	function getHTMLDirIfDifferent(dir, otherDir) {
	  !isStrong(dir) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
	  !isStrong(otherDir) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`otherDir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
	  return dir === otherDir ? null : getHTMLDir(dir);
	}

	// == Global Direction ==

	/**
	 * Set the global direction.
	 */
	function setGlobalDir(dir) {
	  globalDir = dir;
	}

	/**
	 * Initialize the global direction
	 */
	function initGlobalDir() {
	  setGlobalDir(LTR);
	}

	/**
	 * Get the global direction
	 */
	function getGlobalDir() {
	  if (!globalDir) {
	    this.initGlobalDir();
	  }
	  !globalDir ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Global direction not set.') : invariant(false) : void 0;
	  return globalDir;
	}

	var UnicodeBidiDirection = {
	  // Values
	  NEUTRAL: NEUTRAL,
	  LTR: LTR,
	  RTL: RTL,
	  // Helpers
	  isStrong: isStrong,
	  getHTMLDir: getHTMLDir,
	  getHTMLDirIfDifferent: getHTMLDirIfDifferent,
	  // Global Direction
	  setGlobalDir: setGlobalDir,
	  initGlobalDir: initGlobalDir,
	  getGlobalDir: getGlobalDir
	};

	module.exports = UnicodeBidiDirection;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	var nullthrows = function nullthrows(x) {
	  if (x != null) {
	    return x;
	  }
	  throw new Error("Got unexpected null or undefined");
	};

	module.exports = nullthrows;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CompositeDraftDecorator
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Immutable = __webpack_require__(5);

	var List = Immutable.List;


	var DELIMITER = '.';

	/**
	 * A CompositeDraftDecorator traverses through a list of DraftDecorator
	 * instances to identify sections of a ContentBlock that should be rendered
	 * in a "decorated" manner. For example, hashtags, mentions, and links may
	 * be intended to stand out visually, be rendered as anchors, etc.
	 *
	 * The list of decorators supplied to the constructor will be used in the
	 * order they are provided. This allows the caller to specify a priority for
	 * string matching, in case of match collisions among decorators.
	 *
	 * For instance, I may have a link with a `#` in its text. Though this section
	 * of text may match our hashtag decorator, it should not be treated as a
	 * hashtag. I should therefore list my link DraftDecorator
	 * before my hashtag DraftDecorator when constructing this composite
	 * decorator instance.
	 *
	 * Thus, when a collision like this is encountered, the earlier match is
	 * preserved and the new match is discarded.
	 */

	var CompositeDraftDecorator = function () {
	  function CompositeDraftDecorator(decorators) {
	    _classCallCheck(this, CompositeDraftDecorator);

	    // Copy the decorator array, since we use this array order to determine
	    // precedence of decoration matching. If the array is mutated externally,
	    // we don't want to be affected here.
	    this._decorators = decorators.slice();
	  }

	  CompositeDraftDecorator.prototype.getDecorations = function getDecorations(block) {
	    var decorations = Array(block.getText().length).fill(null);

	    this._decorators.forEach(function ( /*object*/decorator, /*number*/ii) {
	      var counter = 0;
	      var strategy = decorator.strategy;
	      strategy(block, function ( /*number*/start, /*number*/end) {
	        // Find out if any of our matching range is already occupied
	        // by another decorator. If so, discard the match. Otherwise, store
	        // the component key for rendering.
	        if (canOccupySlice(decorations, start, end)) {
	          occupySlice(decorations, start, end, ii + DELIMITER + counter);
	          counter++;
	        }
	      });
	    });

	    return List(decorations);
	  };

	  CompositeDraftDecorator.prototype.getComponentForKey = function getComponentForKey(key) {
	    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
	    return this._decorators[componentKey].component;
	  };

	  CompositeDraftDecorator.prototype.getPropsForKey = function getPropsForKey(key) {
	    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
	    return this._decorators[componentKey].props;
	  };

	  return CompositeDraftDecorator;
	}();

	/**
	 * Determine whether we can occupy the specified slice of the decorations
	 * array.
	 */


	function canOccupySlice(decorations, start, end) {
	  for (var ii = start; ii < end; ii++) {
	    if (decorations[ii] != null) {
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Splice the specified component into our decoration array at the desired
	 * range.
	 */
	function occupySlice(targetArr, start, end, componentKey) {
	  for (var ii = start; ii < end; ii++) {
	    targetArr[ii] = componentKey;
	  }
	}

	module.exports = CompositeDraftDecorator;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultDraftBlockRenderMap
	 * 
	 */

	'use strict';

	var _require = __webpack_require__(5);

	var Map = _require.Map;

	var React = __webpack_require__(1);

	var cx = __webpack_require__(43);

	var UL_WRAP = React.createElement('ul', { className: cx('public/DraftStyleDefault/ul') });
	var OL_WRAP = React.createElement('ol', { className: cx('public/DraftStyleDefault/ol') });
	var PRE_WRAP = React.createElement('pre', { className: cx('public/DraftStyleDefault/pre') });

	module.exports = Map({
	  'header-one': {
	    element: 'h1'
	  },
	  'header-two': {
	    element: 'h2'
	  },
	  'header-three': {
	    element: 'h3'
	  },
	  'header-four': {
	    element: 'h4'
	  },
	  'header-five': {
	    element: 'h5'
	  },
	  'header-six': {
	    element: 'h6'
	  },
	  'unordered-list-item': {
	    element: 'li',
	    wrapper: UL_WRAP
	  },
	  'ordered-list-item': {
	    element: 'li',
	    wrapper: OL_WRAP
	  },
	  'blockquote': {
	    element: 'blockquote'
	  },
	  'atomic': {
	    element: 'figure'
	  },
	  'code-block': {
	    element: 'pre',
	    wrapper: PRE_WRAP
	  },
	  'unstyled': {
	    element: 'div'
	  }
	});

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    }).map(replace).join(' ');
	  }
	  return Array.prototype.map.call(arguments, replace).join(' ');
	}

	function replace(str) {
	  return str.replace(/\//g, '-');
	}

	module.exports = cx;

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultDraftInlineStyle
	 * 
	 */

	'use strict';

	module.exports = {
	  BOLD: {
	    fontWeight: 'bold'
	  },

	  CODE: {
	    fontFamily: 'monospace',
	    wordWrap: 'break-word'
	  },

	  ITALIC: {
	    fontStyle: 'italic'
	  },

	  STRIKETHROUGH: {
	    textDecoration: 'line-through'
	  },

	  UNDERLINE: {
	    textDecoration: 'underline'
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditor.react
	 * @typechecks
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultDraftBlockRenderMap = __webpack_require__(42);
	var DefaultDraftInlineStyle = __webpack_require__(44);
	var DraftEditorCompositionHandler = __webpack_require__(46);
	var DraftEditorContents = __webpack_require__(50);
	var DraftEditorDragHandler = __webpack_require__(80);
	var DraftEditorEditHandler = __webpack_require__(89);
	var DraftEditorPlaceholder = __webpack_require__(130);
	var EditorState = __webpack_require__(30);
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(54);
	var Scroll = __webpack_require__(68);
	var Style = __webpack_require__(69);
	var UserAgent = __webpack_require__(55);

	var cx = __webpack_require__(43);
	var emptyFunction = __webpack_require__(32);
	var generateRandomKey = __webpack_require__(22);
	var getDefaultKeyBinding = __webpack_require__(131);
	var nullthrows = __webpack_require__(40);
	var getScrollPosition = __webpack_require__(75);

	var isIE = UserAgent.isBrowser('IE');

	// IE does not support the `input` event on contentEditable, so we can't
	// observe spellcheck behavior.
	var allowSpellCheck = !isIE;

	// Define a set of handler objects to correspond to each possible `mode`
	// of editor behavior.
	var handlerMap = {
	  'edit': DraftEditorEditHandler,
	  'composite': DraftEditorCompositionHandler,
	  'drag': DraftEditorDragHandler,
	  'cut': null,
	  'render': null
	};

	/**
	 * `DraftEditor` is the root editor component. It composes a `contentEditable`
	 * div, and provides a wide variety of useful function props for managing the
	 * state of the editor. See `DraftEditorProps` for details.
	 */
	var DraftEditor = function (_React$Component) {
	  _inherits(DraftEditor, _React$Component);

	  function DraftEditor(props) {
	    _classCallCheck(this, DraftEditor);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this._blockSelectEvents = false;
	    _this._clipboard = null;
	    _this._guardAgainstRender = false;
	    _this._handler = null;
	    _this._dragCount = 0;
	    _this._editorKey = generateRandomKey();
	    _this._placeholderAccessibilityID = 'placeholder-' + _this._editorKey;

	    _this._onBeforeInput = _this._buildHandler('onBeforeInput');
	    _this._onBlur = _this._buildHandler('onBlur');
	    _this._onCharacterData = _this._buildHandler('onCharacterData');
	    _this._onCompositionEnd = _this._buildHandler('onCompositionEnd');
	    _this._onCompositionStart = _this._buildHandler('onCompositionStart');
	    _this._onCopy = _this._buildHandler('onCopy');
	    _this._onCut = _this._buildHandler('onCut');
	    _this._onDragEnd = _this._buildHandler('onDragEnd');
	    _this._onDragOver = _this._buildHandler('onDragOver');
	    _this._onDragStart = _this._buildHandler('onDragStart');
	    _this._onDrop = _this._buildHandler('onDrop');
	    _this._onInput = _this._buildHandler('onInput');
	    _this._onFocus = _this._buildHandler('onFocus');
	    _this._onKeyDown = _this._buildHandler('onKeyDown');
	    _this._onKeyPress = _this._buildHandler('onKeyPress');
	    _this._onKeyUp = _this._buildHandler('onKeyUp');
	    _this._onMouseDown = _this._buildHandler('onMouseDown');
	    _this._onMouseUp = _this._buildHandler('onMouseUp');
	    _this._onPaste = _this._buildHandler('onPaste');
	    _this._onSelect = _this._buildHandler('onSelect');

	    // Manual binding for public and internal methods.
	    _this.focus = _this._focus.bind(_this);
	    _this.blur = _this._blur.bind(_this);
	    _this.setMode = _this._setMode.bind(_this);
	    _this.exitCurrentMode = _this._exitCurrentMode.bind(_this);
	    _this.restoreEditorDOM = _this._restoreEditorDOM.bind(_this);
	    _this.setRenderGuard = _this._setRenderGuard.bind(_this);
	    _this.removeRenderGuard = _this._removeRenderGuard.bind(_this);
	    _this.setClipboard = _this._setClipboard.bind(_this);
	    _this.getClipboard = _this._getClipboard.bind(_this);
	    _this.getEditorKey = function () {
	      return _this._editorKey;
	    };
	    _this.update = _this._update.bind(_this);
	    _this.onDragEnter = _this._onDragEnter.bind(_this);
	    _this.onDragLeave = _this._onDragLeave.bind(_this);

	    // See `_restoreEditorDOM()`.
	    _this.state = { containerKey: 0 };
	    return _this;
	  }

	  /**
	   * Build a method that will pass the event to the specified handler method.
	   * This allows us to look up the correct handler function for the current
	   * editor mode, if any has been specified.
	   */


	  /**
	   * Define proxies that can route events to the current handler.
	   */


	  DraftEditor.prototype._buildHandler = function _buildHandler(eventName) {
	    var _this2 = this;

	    return function (e) {
	      if (!_this2.props.readOnly) {
	        var method = _this2._handler && _this2._handler[eventName];
	        method && method.call(_this2, e);
	      }
	    };
	  };

	  DraftEditor.prototype._showPlaceholder = function _showPlaceholder() {
	    return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
	  };

	  DraftEditor.prototype._renderPlaceholder = function _renderPlaceholder() {
	    if (this._showPlaceholder()) {
	      return React.createElement(DraftEditorPlaceholder, {
	        text: nullthrows(this.props.placeholder),
	        editorState: this.props.editorState,
	        textAlignment: this.props.textAlignment,
	        accessibilityID: this._placeholderAccessibilityID
	      });
	    }
	    return null;
	  };

	  DraftEditor.prototype.render = function render() {
	    var _props = this.props;
	    var readOnly = _props.readOnly;
	    var textAlignment = _props.textAlignment;

	    var rootClass = cx({
	      'DraftEditor/root': true,
	      'DraftEditor/alignLeft': textAlignment === 'left',
	      'DraftEditor/alignRight': textAlignment === 'right',
	      'DraftEditor/alignCenter': textAlignment === 'center'
	    });

	    var contentStyle = {
	      outline: 'none',
	      whiteSpace: 'pre-wrap',
	      wordWrap: 'break-word'
	    };

	    return React.createElement(
	      'div',
	      { className: rootClass },
	      this._renderPlaceholder(),
	      React.createElement(
	        'div',
	        {
	          className: cx('DraftEditor/editorContainer'),
	          key: 'editor' + this.state.containerKey,
	          ref: 'editorContainer' },
	        React.createElement(
	          'div',
	          {
	            'aria-activedescendant': readOnly ? null : this.props.ariaActiveDescendantID,
	            'aria-autocomplete': readOnly ? null : this.props.ariaAutoComplete,
	            'aria-describedby': this._showPlaceholder() ? this._placeholderAccessibilityID : null,
	            'aria-expanded': readOnly ? null : this.props.ariaExpanded,
	            'aria-haspopup': readOnly ? null : this.props.ariaHasPopup,
	            'aria-label': this.props.ariaLabel,
	            'aria-owns': readOnly ? null : this.props.ariaOwneeID,
	            className: cx('public/DraftEditor/content'),
	            contentEditable: !readOnly,
	            'data-testid': this.props.webDriverTestID,
	            onBeforeInput: this._onBeforeInput,
	            onBlur: this._onBlur,
	            onCompositionEnd: this._onCompositionEnd,
	            onCompositionStart: this._onCompositionStart,
	            onCopy: this._onCopy,
	            onCut: this._onCut,
	            onDragEnd: this._onDragEnd,
	            onDragEnter: this.onDragEnter,
	            onDragLeave: this.onDragLeave,
	            onDragOver: this._onDragOver,
	            onDragStart: this._onDragStart,
	            onDrop: this._onDrop,
	            onFocus: this._onFocus,
	            onInput: this._onInput,
	            onKeyDown: this._onKeyDown,
	            onKeyPress: this._onKeyPress,
	            onKeyUp: this._onKeyUp,
	            onMouseUp: this._onMouseUp,
	            onPaste: this._onPaste,
	            onSelect: this._onSelect,
	            ref: 'editor',
	            role: readOnly ? null : this.props.role || 'textbox',
	            spellCheck: allowSpellCheck && this.props.spellCheck,
	            style: contentStyle,
	            suppressContentEditableWarning: true,
	            tabIndex: this.props.tabIndex },
	          React.createElement(DraftEditorContents, {
	            blockRenderMap: this.props.blockRenderMap,
	            blockRendererFn: this.props.blockRendererFn,
	            blockStyleFn: this.props.blockStyleFn,
	            customStyleMap: _extends({}, DefaultDraftInlineStyle, this.props.customStyleMap),
	            customStyleFn: this.props.customStyleFn,
	            editorKey: this._editorKey,
	            editorState: this.props.editorState
	          })
	        )
	      )
	    );
	  };

	  DraftEditor.prototype.componentDidMount = function componentDidMount() {
	    this.setMode('edit');

	    /**
	     * IE has a hardcoded "feature" that attempts to convert link text into
	     * anchors in contentEditable DOM. This breaks the editor's expectations of
	     * the DOM, and control is lost. Disable it to make IE behave.
	     * See: http://blogs.msdn.com/b/ieinternals/archive/2010/09/15/
	     * ie9-beta-minor-change-list.aspx
	     */
	    if (isIE) {
	      document.execCommand('AutoUrlDetect', false, false);
	    }
	  };

	  /**
	   * Prevent selection events from affecting the current editor state. This
	   * is mostly intended to defend against IE, which fires off `selectionchange`
	   * events regardless of whether the selection is set via the browser or
	   * programmatically. We only care about selection events that occur because
	   * of browser interaction, not re-renders and forced selections.
	   */


	  DraftEditor.prototype.componentWillUpdate = function componentWillUpdate() {
	    this._blockSelectEvents = true;
	  };

	  DraftEditor.prototype.componentDidUpdate = function componentDidUpdate() {
	    this._blockSelectEvents = false;
	  };

	  /**
	   * Used via `this.focus()`.
	   *
	   * Force focus back onto the editor node.
	   *
	   * Forcing focus causes the browser to scroll to the top of the editor, which
	   * may be undesirable when the editor is taller than the viewport. To solve
	   * this, either use a specified scroll position (in cases like `cut` behavior
	   * where it should be restored to a known position) or store the current
	   * scroll state and put it back in place after focus has been forced.
	   */


	  DraftEditor.prototype._focus = function _focus(scrollPosition) {
	    var editorState = this.props.editorState;

	    var alreadyHasFocus = editorState.getSelection().getHasFocus();
	    var editorNode = ReactDOM.findDOMNode(this.refs.editor);

	    var scrollParent = Style.getScrollParent(editorNode);

	    var _ref = scrollPosition || getScrollPosition(scrollParent);

	    var x = _ref.x;
	    var y = _ref.y;


	    editorNode.focus();
	    if (scrollParent === window) {
	      window.scrollTo(x, y);
	    } else {
	      Scroll.setTop(scrollParent, y);
	    }

	    // On Chrome and Safari, calling focus on contenteditable focuses the
	    // cursor at the first character. This is something you don't expect when
	    // you're clicking on an input element but not directly on a character.
	    // Put the cursor back where it was before the blur.
	    if (!alreadyHasFocus) {
	      this.update(EditorState.forceSelection(editorState, editorState.getSelection()));
	    }
	  };

	  DraftEditor.prototype._blur = function _blur() {
	    ReactDOM.findDOMNode(this.refs.editor).blur();
	  };

	  /**
	   * Used via `this.setMode(...)`.
	   *
	   * Set the behavior mode for the editor component. This switches the current
	   * handler module to ensure that DOM events are managed appropriately for
	   * the active mode.
	   */


	  DraftEditor.prototype._setMode = function _setMode(mode) {
	    this._handler = handlerMap[mode];
	  };

	  DraftEditor.prototype._exitCurrentMode = function _exitCurrentMode() {
	    this.setMode('edit');
	  };

	  /**
	   * Used via `this.restoreEditorDOM()`.
	   *
	   * Force a complete re-render of the editor based on the current EditorState.
	   * This is useful when we know we are going to lose control of the DOM
	   * state (cut command, IME) and we want to make sure that reconciliation
	   * occurs on a version of the DOM that is synchronized with our EditorState.
	   */


	  DraftEditor.prototype._restoreEditorDOM = function _restoreEditorDOM(scrollPosition) {
	    var _this3 = this;

	    this.setState({ containerKey: this.state.containerKey + 1 }, function () {
	      _this3._focus(scrollPosition);
	    });
	  };

	  /**
	   * Guard against rendering. Intended for use when we need to manually
	   * reset editor contents, to ensure that no outside influences lead to
	   * React reconciliation when we are in an uncertain state.
	   */


	  DraftEditor.prototype._setRenderGuard = function _setRenderGuard() {
	    this._guardAgainstRender = true;
	  };

	  DraftEditor.prototype._removeRenderGuard = function _removeRenderGuard() {
	    this._guardAgainstRender = false;
	  };

	  /**
	   * Used via `this.setClipboard(...)`.
	   *
	   * Set the clipboard state for a cut/copy event.
	   */


	  DraftEditor.prototype._setClipboard = function _setClipboard(clipboard) {
	    this._clipboard = clipboard;
	  };

	  /**
	   * Used via `this.getClipboard()`.
	   *
	   * Retrieve the clipboard state for a cut/copy event.
	   */


	  DraftEditor.prototype._getClipboard = function _getClipboard() {
	    return this._clipboard;
	  };

	  /**
	   * Used via `this.update(...)`.
	   *
	   * Propagate a new `EditorState` object to higher-level components. This is
	   * the method by which event handlers inform the `DraftEditor` component of
	   * state changes. A component that composes a `DraftEditor` **must** provide
	   * an `onChange` prop to receive state updates passed along from this
	   * function.
	   */


	  DraftEditor.prototype._update = function _update(editorState) {
	    this.props.onChange(editorState);
	  };

	  /**
	   * Used in conjunction with `_onDragLeave()`, by counting the number of times
	   * a dragged element enters and leaves the editor (or any of its children),
	   * to determine when the dragged element absolutely leaves the editor.
	   */


	  DraftEditor.prototype._onDragEnter = function _onDragEnter() {
	    this._dragCount++;
	  };

	  /**
	   * See `_onDragEnter()`.
	   */


	  DraftEditor.prototype._onDragLeave = function _onDragLeave() {
	    this._dragCount--;
	    if (this._dragCount === 0) {
	      this.exitCurrentMode();
	    }
	  };

	  return DraftEditor;
	}(React.Component);

	DraftEditor.defaultProps = {
	  blockRenderMap: DefaultDraftBlockRenderMap,
	  blockRendererFn: emptyFunction.thatReturnsNull,
	  blockStyleFn: emptyFunction.thatReturns(''),
	  keyBindingFn: getDefaultKeyBinding,
	  readOnly: false,
	  spellCheck: false,
	  stripPastedStyles: false
	};


	module.exports = DraftEditor;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorCompositionHandler
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);
	var Keys = __webpack_require__(47);

	var getEntityKeyForSelection = __webpack_require__(48);
	var isSelectionAtLeafStart = __webpack_require__(49);

	/**
	 * Millisecond delay to allow `compositionstart` to fire again upon
	 * `compositionend`.
	 *
	 * This is used for Korean input to ensure that typing can continue without
	 * the editor trying to render too quickly. More specifically, Safari 7.1+
	 * triggers `compositionstart` a little slower than Chrome/FF, which
	 * leads to composed characters being resolved and re-render occurring
	 * sooner than we want.
	 */
	var RESOLVE_DELAY = 20;

	/**
	 * A handful of variables used to track the current composition and its
	 * resolution status. These exist at the module level because it is not
	 * possible to have compositions occurring in multiple editors simultaneously,
	 * and it simplifies state management with respect to the DraftEditor component.
	 */
	var resolved = false;
	var stillComposing = false;
	var textInputData = '';

	var DraftEditorCompositionHandler = {
	  onBeforeInput: function onBeforeInput(e) {
	    textInputData = (textInputData || '') + e.data;
	  },

	  /**
	   * A `compositionstart` event has fired while we're still in composition
	   * mode. Continue the current composition session to prevent a re-render.
	   */
	  onCompositionStart: function onCompositionStart() {
	    stillComposing = true;
	  },

	  /**
	   * Attempt to end the current composition session.
	   *
	   * Defer handling because browser will still insert the chars into active
	   * element after `compositionend`. If a `compositionstart` event fires
	   * before `resolveComposition` executes, our composition session will
	   * continue.
	   *
	   * The `resolved` flag is useful because certain IME interfaces fire the
	   * `compositionend` event multiple times, thus queueing up multiple attempts
	   * at handling the composition. Since handling the same composition event
	   * twice could break the DOM, we only use the first event. Example: Arabic
	   * Google Input Tools on Windows 8.1 fires `compositionend` three times.
	   */
	  onCompositionEnd: function onCompositionEnd() {
	    var _this = this;

	    resolved = false;
	    stillComposing = false;
	    setTimeout(function () {
	      if (!resolved) {
	        DraftEditorCompositionHandler.resolveComposition.call(_this);
	      }
	    }, RESOLVE_DELAY);
	  },

	  /**
	   * In Safari, keydown events may fire when committing compositions. If
	   * the arrow keys are used to commit, prevent default so that the cursor
	   * doesn't move, otherwise it will jump back noticeably on re-render.
	   */
	  onKeyDown: function onKeyDown(e) {
	    if (e.which === Keys.RIGHT || e.which === Keys.LEFT) {
	      e.preventDefault();
	    }
	  },

	  /**
	   * Keypress events may fire when committing compositions. In Firefox,
	   * pressing RETURN commits the composition and inserts extra newline
	   * characters that we do not want. `preventDefault` allows the composition
	   * to be committed while preventing the extra characters.
	   */
	  onKeyPress: function onKeyPress(e) {
	    if (e.which === Keys.RETURN) {
	      e.preventDefault();
	    }
	  },

	  /**
	   * Attempt to insert composed characters into the document.
	   *
	   * If we are still in a composition session, do nothing. Otherwise, insert
	   * the characters into the document and terminate the composition session.
	   *
	   * If no characters were composed -- for instance, the user
	   * deleted all composed characters and committed nothing new --
	   * force a re-render. We also re-render when the composition occurs
	   * at the beginning of a leaf, to ensure that if the browser has
	   * created a new text node for the composition, we will discard it.
	   *
	   * Resetting innerHTML will move focus to the beginning of the editor,
	   * so we update to force it back to the correct place.
	   */
	  resolveComposition: function resolveComposition() {
	    if (stillComposing) {
	      return;
	    }

	    resolved = true;
	    var composedChars = textInputData;
	    textInputData = '';

	    var editorState = EditorState.set(this.props.editorState, {
	      inCompositionMode: false
	    });

	    var currentStyle = editorState.getCurrentInlineStyle();
	    var entityKey = getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection());

	    var mustReset = !composedChars || isSelectionAtLeafStart(editorState) || currentStyle.size > 0 || entityKey !== null;

	    if (mustReset) {
	      this.restoreEditorDOM();
	    }

	    this.exitCurrentMode();
	    this.removeRenderGuard();

	    if (composedChars) {
	      // If characters have been composed, re-rendering with the update
	      // is sufficient to reset the editor.
	      var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), composedChars, currentStyle, entityKey);
	      this.update(EditorState.push(editorState, contentState, 'insert-characters'));
	      return;
	    }

	    if (mustReset) {
	      this.update(EditorState.set(editorState, {
	        nativelyRenderedContent: null,
	        forceSelection: true
	      }));
	    }
	  }
	};

	module.exports = DraftEditorCompositionHandler;

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	module.exports = {
	  BACKSPACE: 8,
	  TAB: 9,
	  RETURN: 13,
	  ALT: 18,
	  ESC: 27,
	  SPACE: 32,
	  PAGE_UP: 33,
	  PAGE_DOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  DELETE: 46,
	  COMMA: 188,
	  PERIOD: 190,
	  A: 65,
	  Z: 90,
	  ZERO: 48,
	  NUMPAD_0: 96,
	  NUMPAD_9: 105
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEntityKeyForSelection
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftEntity = __webpack_require__(15);

	/**
	 * Return the entity key that should be used when inserting text for the
	 * specified target selection, only if the entity is `MUTABLE`. `IMMUTABLE`
	 * and `SEGMENTED` entities should not be used for insertion behavior.
	 */
	function getEntityKeyForSelection(contentState, targetSelection) {
	  var entityKey;

	  if (targetSelection.isCollapsed()) {
	    var key = targetSelection.getAnchorKey();
	    var offset = targetSelection.getAnchorOffset();
	    if (offset > 0) {
	      entityKey = contentState.getBlockForKey(key).getEntityAt(offset - 1);
	      return filterKey(entityKey);
	    }
	    return null;
	  }

	  var startKey = targetSelection.getStartKey();
	  var startOffset = targetSelection.getStartOffset();
	  var startBlock = contentState.getBlockForKey(startKey);

	  entityKey = startOffset === startBlock.getLength() ? null : startBlock.getEntityAt(startOffset);

	  return filterKey(entityKey);
	}

	/**
	 * Determine whether an entity key corresponds to a `MUTABLE` entity. If so,
	 * return it. If not, return null.
	 */
	function filterKey(entityKey) {
	  if (entityKey) {
	    var entity = DraftEntity.get(entityKey);
	    return entity.getMutability() === 'MUTABLE' ? entityKey : null;
	  }
	  return null;
	}

	module.exports = getEntityKeyForSelection;

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isSelectionAtLeafStart
	 * @typechecks
	 * 
	 */

	'use strict';

	function isSelectionAtLeafStart(editorState) {
	  var selection = editorState.getSelection();
	  var anchorKey = selection.getAnchorKey();
	  var blockTree = editorState.getBlockTree(anchorKey);
	  var offset = selection.getStartOffset();

	  var isAtStart = false;

	  blockTree.some(function (leafSet) {
	    if (offset === leafSet.get('start')) {
	      isAtStart = true;
	      return true;
	    }

	    if (offset < leafSet.get('end')) {
	      return leafSet.get('leaves').some(function (leaf) {
	        var leafStart = leaf.get('start');
	        if (offset === leafStart) {
	          isAtStart = true;
	          return true;
	        }

	        return false;
	      });
	    }

	    return false;
	  });

	  return isAtStart;
	}

	module.exports = isSelectionAtLeafStart;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorContents.react
	 * @typechecks
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DraftEditorBlock = __webpack_require__(51);
	var DraftOffsetKey = __webpack_require__(67);
	var EditorState = __webpack_require__(30);
	var React = __webpack_require__(1);

	var cx = __webpack_require__(43);
	var joinClasses = __webpack_require__(79);
	var nullthrows = __webpack_require__(40);

	/**
	 * `DraftEditorContents` is the container component for all block components
	 * rendered for a `DraftEditor`. It is optimized to aggressively avoid
	 * re-rendering blocks whenever possible.
	 *
	 * This component is separate from `DraftEditor` because certain props
	 * (for instance, ARIA props) must be allowed to update without affecting
	 * the contents of the editor.
	 */
	var DraftEditorContents = function (_React$Component) {
	  _inherits(DraftEditorContents, _React$Component);

	  function DraftEditorContents() {
	    _classCallCheck(this, DraftEditorContents);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  DraftEditorContents.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    var prevEditorState = this.props.editorState;
	    var nextEditorState = nextProps.editorState;

	    var prevDirectionMap = prevEditorState.getDirectionMap();
	    var nextDirectionMap = nextEditorState.getDirectionMap();

	    // Text direction has changed for one or more blocks. We must re-render.
	    if (prevDirectionMap !== nextDirectionMap) {
	      return true;
	    }

	    var didHaveFocus = prevEditorState.getSelection().getHasFocus();
	    var nowHasFocus = nextEditorState.getSelection().getHasFocus();

	    if (didHaveFocus !== nowHasFocus) {
	      return true;
	    }

	    var nextNativeContent = nextEditorState.getNativelyRenderedContent();

	    var wasComposing = prevEditorState.isInCompositionMode();
	    var nowComposing = nextEditorState.isInCompositionMode();

	    // If the state is unchanged or we're currently rendering a natively
	    // rendered state, there's nothing new to be done.
	    if (prevEditorState === nextEditorState || nextNativeContent !== null && nextEditorState.getCurrentContent() === nextNativeContent || wasComposing && nowComposing) {
	      return false;
	    }

	    var prevContent = prevEditorState.getCurrentContent();
	    var nextContent = nextEditorState.getCurrentContent();
	    var prevDecorator = prevEditorState.getDecorator();
	    var nextDecorator = nextEditorState.getDecorator();
	    return wasComposing !== nowComposing || prevContent !== nextContent || prevDecorator !== nextDecorator || nextEditorState.mustForceSelection();
	  };

	  DraftEditorContents.prototype.render = function render() {
	    var _props = this.props;
	    var blockRenderMap = _props.blockRenderMap;
	    var blockRendererFn = _props.blockRendererFn;
	    var customStyleMap = _props.customStyleMap;
	    var customStyleFn = _props.customStyleFn;
	    var editorState = _props.editorState;


	    var content = editorState.getCurrentContent();
	    var selection = editorState.getSelection();
	    var forceSelection = editorState.mustForceSelection();
	    var decorator = editorState.getDecorator();
	    var directionMap = nullthrows(editorState.getDirectionMap());

	    var blocksAsArray = content.getBlocksAsArray();
	    var processedBlocks = [];
	    var currentDepth = null;
	    var lastWrapperTemplate = null;

	    for (var ii = 0; ii < blocksAsArray.length; ii++) {
	      var _block = blocksAsArray[ii];
	      var key = _block.getKey();
	      var blockType = _block.getType();

	      var customRenderer = blockRendererFn(_block);
	      var CustomComponent = void 0,
	          customProps = void 0,
	          customEditable = void 0;
	      if (customRenderer) {
	        CustomComponent = customRenderer.component;
	        customProps = customRenderer.props;
	        customEditable = customRenderer.editable;
	      }

	      var direction = directionMap.get(key);
	      var offsetKey = DraftOffsetKey.encode(key, 0, 0);
	      var componentProps = {
	        block: _block,
	        blockProps: customProps,
	        customStyleMap: customStyleMap,
	        customStyleFn: customStyleFn,
	        decorator: decorator,
	        direction: direction,
	        forceSelection: forceSelection,
	        key: key,
	        offsetKey: offsetKey,
	        selection: selection,
	        tree: editorState.getBlockTree(key)
	      };

	      var configForType = blockRenderMap.get(blockType);
	      var wrapperTemplate = configForType.wrapper;

	      var _Element = configForType.element || blockRenderMap.get('unstyled').element;

	      var depth = _block.getDepth();
	      var className = this.props.blockStyleFn(_block);

	      // List items are special snowflakes, since we handle nesting and
	      // counters manually.
	      if (_Element === 'li') {
	        var shouldResetCount = lastWrapperTemplate !== wrapperTemplate || currentDepth === null || depth > currentDepth;
	        className = joinClasses(className, getListItemClasses(blockType, depth, shouldResetCount, direction));
	      }

	      var Component = CustomComponent || DraftEditorBlock;
	      var childProps = {
	        className: className,
	        'data-block': true,
	        'data-editor': this.props.editorKey,
	        'data-offset-key': offsetKey,
	        key: key
	      };
	      if (customEditable !== undefined) {
	        childProps = _extends({}, childProps, {
	          contentEditable: customEditable,
	          suppressContentEditableWarning: true
	        });
	      }

	      var child = React.createElement(_Element, childProps, React.createElement(Component, componentProps));

	      processedBlocks.push({
	        block: child,
	        wrapperTemplate: wrapperTemplate,
	        key: key,
	        offsetKey: offsetKey
	      });

	      if (wrapperTemplate) {
	        currentDepth = _block.getDepth();
	      } else {
	        currentDepth = null;
	      }
	      lastWrapperTemplate = wrapperTemplate;
	    }

	    // Group contiguous runs of blocks that have the same wrapperTemplate
	    var outputBlocks = [];
	    for (var _ii = 0; _ii < processedBlocks.length;) {
	      var info = processedBlocks[_ii];
	      if (info.wrapperTemplate) {
	        var blocks = [];
	        do {
	          blocks.push(processedBlocks[_ii].block);
	          _ii++;
	        } while (_ii < processedBlocks.length && processedBlocks[_ii].wrapperTemplate === info.wrapperTemplate);
	        var wrapperElement = React.cloneElement(info.wrapperTemplate, {
	          key: info.key + '-wrap',
	          'data-offset-key': info.offsetKey
	        }, blocks);
	        outputBlocks.push(wrapperElement);
	      } else {
	        outputBlocks.push(info.block);
	        _ii++;
	      }
	    }

	    return React.createElement(
	      'div',
	      { 'data-contents': 'true' },
	      outputBlocks
	    );
	  };

	  return DraftEditorContents;
	}(React.Component);

	/**
	 * Provide default styling for list items. This way, lists will be styled with
	 * proper counters and indentation even if the caller does not specify
	 * their own styling at all. If more than five levels of nesting are needed,
	 * the necessary CSS classes can be provided via `blockStyleFn` configuration.
	 */


	function getListItemClasses(type, depth, shouldResetCount, direction) {
	  return cx({
	    'public/DraftStyleDefault/unorderedListItem': type === 'unordered-list-item',
	    'public/DraftStyleDefault/orderedListItem': type === 'ordered-list-item',
	    'public/DraftStyleDefault/reset': shouldResetCount,
	    'public/DraftStyleDefault/depth0': depth === 0,
	    'public/DraftStyleDefault/depth1': depth === 1,
	    'public/DraftStyleDefault/depth2': depth === 2,
	    'public/DraftStyleDefault/depth3': depth === 3,
	    'public/DraftStyleDefault/depth4': depth === 4,
	    'public/DraftStyleDefault/listLTR': direction === 'LTR',
	    'public/DraftStyleDefault/listRTL': direction === 'RTL'
	  });
	}

	module.exports = DraftEditorContents;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorBlock.react
	 * @typechecks
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContentBlock = __webpack_require__(7);
	var DraftEditorLeaf = __webpack_require__(52);
	var DraftOffsetKey = __webpack_require__(67);
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(54);
	var Scroll = __webpack_require__(68);
	var SelectionState = __webpack_require__(34);
	var Style = __webpack_require__(69);
	var UnicodeBidi = __webpack_require__(38);
	var UnicodeBidiDirection = __webpack_require__(39);

	var cx = __webpack_require__(43);
	var getElementPosition = __webpack_require__(73);
	var getScrollPosition = __webpack_require__(75);
	var getViewportDimensions = __webpack_require__(78);
	var nullthrows = __webpack_require__(40);

	var SCROLL_BUFFER = 10;

	/**
	 * The default block renderer for a `DraftEditor` component.
	 *
	 * A `DraftEditorBlock` is able to render a given `ContentBlock` to its
	 * appropriate decorator and inline style components.
	 */
	var DraftEditorBlock = function (_React$Component) {
	  _inherits(DraftEditorBlock, _React$Component);

	  function DraftEditorBlock() {
	    _classCallCheck(this, DraftEditorBlock);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  DraftEditorBlock.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return this.props.block !== nextProps.block || this.props.tree !== nextProps.tree || this.props.direction !== nextProps.direction || isBlockOnSelectionEdge(nextProps.selection, nextProps.block.getKey()) && nextProps.forceSelection;
	  };

	  /**
	   * When a block is mounted and overlaps the selection state, we need to make
	   * sure that the cursor is visible to match native behavior. This may not
	   * be the case if the user has pressed `RETURN` or pasted some content, since
	   * programatically creating these new blocks and setting the DOM selection
	   * will miss out on the browser natively scrolling to that position.
	   *
	   * To replicate native behavior, if the block overlaps the selection state
	   * on mount, force the scroll position. Check the scroll state of the scroll
	   * parent, and adjust it to align the entire block to the bottom of the
	   * scroll parent.
	   */


	  DraftEditorBlock.prototype.componentDidMount = function componentDidMount() {
	    var selection = this.props.selection;
	    var endKey = selection.getEndKey();
	    if (!selection.getHasFocus() || endKey !== this.props.block.getKey()) {
	      return;
	    }

	    var blockNode = ReactDOM.findDOMNode(this);
	    var scrollParent = Style.getScrollParent(blockNode);
	    var scrollPosition = getScrollPosition(scrollParent);
	    var scrollDelta;

	    if (scrollParent === window) {
	      var nodePosition = getElementPosition(blockNode);
	      var nodeBottom = nodePosition.y + nodePosition.height;
	      var viewportHeight = getViewportDimensions().height;
	      scrollDelta = nodeBottom - viewportHeight;
	      if (scrollDelta > 0) {
	        window.scrollTo(scrollPosition.x, scrollPosition.y + scrollDelta + SCROLL_BUFFER);
	      }
	    } else {
	      var blockBottom = blockNode.offsetHeight + blockNode.offsetTop;
	      var scrollBottom = scrollParent.offsetHeight + scrollPosition.y;
	      scrollDelta = blockBottom - scrollBottom;
	      if (scrollDelta > 0) {
	        Scroll.setTop(scrollParent, Scroll.getTop(scrollParent) + scrollDelta + SCROLL_BUFFER);
	      }
	    }
	  };

	  DraftEditorBlock.prototype._renderChildren = function _renderChildren() {
	    var _this2 = this;

	    var block = this.props.block;
	    var blockKey = block.getKey();
	    var text = block.getText();
	    var lastLeafSet = this.props.tree.size - 1;
	    var hasSelection = isBlockOnSelectionEdge(this.props.selection, blockKey);

	    return this.props.tree.map(function (leafSet, ii) {
	      var leavesForLeafSet = leafSet.get('leaves');
	      var lastLeaf = leavesForLeafSet.size - 1;
	      var leaves = leavesForLeafSet.map(function (leaf, jj) {
	        var offsetKey = DraftOffsetKey.encode(blockKey, ii, jj);
	        var start = leaf.get('start');
	        var end = leaf.get('end');
	        return React.createElement(DraftEditorLeaf, {
	          key: offsetKey,
	          offsetKey: offsetKey,
	          blockKey: blockKey,
	          start: start,
	          selection: hasSelection ? _this2.props.selection : undefined,
	          forceSelection: _this2.props.forceSelection,
	          text: text.slice(start, end),
	          styleSet: block.getInlineStyleAt(start),
	          customStyleMap: _this2.props.customStyleMap,
	          customStyleFn: _this2.props.customStyleFn,
	          isLast: ii === lastLeafSet && jj === lastLeaf
	        });
	      }).toArray();

	      var decoratorKey = leafSet.get('decoratorKey');
	      if (decoratorKey == null) {
	        return leaves;
	      }

	      if (!_this2.props.decorator) {
	        return leaves;
	      }

	      var decorator = nullthrows(_this2.props.decorator);

	      var DecoratorComponent = decorator.getComponentForKey(decoratorKey);
	      if (!DecoratorComponent) {
	        return leaves;
	      }

	      var decoratorProps = decorator.getPropsForKey(decoratorKey);
	      var decoratorOffsetKey = DraftOffsetKey.encode(blockKey, ii, 0);
	      var decoratedText = text.slice(leavesForLeafSet.first().get('start'), leavesForLeafSet.last().get('end'));

	      // Resetting dir to the same value on a child node makes Chrome/Firefox
	      // confused on cursor movement. See http://jsfiddle.net/d157kLck/3/
	      var dir = UnicodeBidiDirection.getHTMLDirIfDifferent(UnicodeBidi.getDirection(decoratedText), _this2.props.direction);

	      return React.createElement(
	        DecoratorComponent,
	        _extends({}, decoratorProps, {
	          decoratedText: decoratedText,
	          dir: dir,
	          key: decoratorOffsetKey,
	          entityKey: block.getEntityAt(leafSet.get('start')),
	          offsetKey: decoratorOffsetKey }),
	        leaves
	      );
	    }).toArray();
	  };

	  DraftEditorBlock.prototype.render = function render() {
	    var _props = this.props;
	    var direction = _props.direction;
	    var offsetKey = _props.offsetKey;

	    var className = cx({
	      'public/DraftStyleDefault/block': true,
	      'public/DraftStyleDefault/ltr': direction === 'LTR',
	      'public/DraftStyleDefault/rtl': direction === 'RTL'
	    });

	    return React.createElement(
	      'div',
	      { 'data-offset-key': offsetKey, className: className },
	      this._renderChildren()
	    );
	  };

	  return DraftEditorBlock;
	}(React.Component);

	/**
	 * Return whether a block overlaps with either edge of the `SelectionState`.
	 */


	function isBlockOnSelectionEdge(selection, key) {
	  return selection.getAnchorKey() === key || selection.getFocusKey() === key;
	}

	module.exports = DraftEditorBlock;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorLeaf.react
	 * @typechecks
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DraftEditorTextNode = __webpack_require__(53);
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(54);
	var SelectionState = __webpack_require__(34);

	var setDraftEditorSelection = __webpack_require__(62);

	/**
	 * All leaf nodes in the editor are spans with single text nodes. Leaf
	 * elements are styled based on the merging of an optional custom style map
	 * and a default style map.
	 *
	 * `DraftEditorLeaf` also provides a wrapper for calling into the imperative
	 * DOM Selection API. In this way, top-level components can declaratively
	 * maintain the selection state.
	 */
	var DraftEditorLeaf = function (_React$Component) {
	  _inherits(DraftEditorLeaf, _React$Component);

	  function DraftEditorLeaf() {
	    _classCallCheck(this, DraftEditorLeaf);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  /**
	   * By making individual leaf instances aware of their context within
	   * the text of the editor, we can set our selection range more
	   * easily than we could in the non-React world.
	   *
	   * Note that this depends on our maintaining tight control over the
	   * DOM structure of the TextEditor component. If leaves had multiple
	   * text nodes, this would be harder.
	   */
	  DraftEditorLeaf.prototype._setSelection = function _setSelection() {
	    var selection = this.props.selection;

	    // If selection state is irrelevant to the parent block, no-op.

	    if (selection == null || !selection.getHasFocus()) {
	      return;
	    }

	    var _props = this.props;
	    var blockKey = _props.blockKey;
	    var start = _props.start;
	    var text = _props.text;

	    var end = start + text.length;
	    if (!selection.hasEdgeWithin(blockKey, start, end)) {
	      return;
	    }

	    // Determine the appropriate target node for selection. If the child
	    // is not a text node, it is a <br /> spacer. In this case, use the
	    // <span> itself as the selection target.
	    var node = ReactDOM.findDOMNode(this);
	    var child = node.firstChild;
	    var targetNode = void 0;

	    if (child.nodeType === Node.TEXT_NODE) {
	      targetNode = child;
	    } else if (child.tagName === 'BR') {
	      targetNode = node;
	    } else {
	      targetNode = child.firstChild;
	    }

	    setDraftEditorSelection(selection, targetNode, blockKey, start, end);
	  };

	  DraftEditorLeaf.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return ReactDOM.findDOMNode(this.refs.leaf).textContent !== nextProps.text || nextProps.styleSet !== this.props.styleSet || nextProps.forceSelection;
	  };

	  DraftEditorLeaf.prototype.componentDidUpdate = function componentDidUpdate() {
	    this._setSelection();
	  };

	  DraftEditorLeaf.prototype.componentDidMount = function componentDidMount() {
	    this._setSelection();
	  };

	  DraftEditorLeaf.prototype.render = function render() {
	    var text = this.props.text;

	    // If the leaf is at the end of its block and ends in a soft newline, append
	    // an extra line feed character. Browsers collapse trailing newline
	    // characters, which leaves the cursor in the wrong place after a
	    // shift+enter. The extra character repairs this.

	    if (text.endsWith('\n') && this.props.isLast) {
	      text += '\n';
	    }

	    var _props2 = this.props;
	    var customStyleMap = _props2.customStyleMap;
	    var customStyleFn = _props2.customStyleFn;
	    var offsetKey = _props2.offsetKey;
	    var styleSet = _props2.styleSet;

	    var styleObj = styleSet.reduce(function (map, styleName) {
	      var mergedStyles = {};
	      var style = customStyleMap[styleName];

	      if (style !== undefined && map.textDecoration !== style.textDecoration) {
	        // .trim() is necessary for IE9/10/11 and Edge
	        mergedStyles.textDecoration = [map.textDecoration, style.textDecoration].join(' ').trim();
	      }

	      return _assign(map, style, mergedStyles);
	    }, {});

	    if (customStyleFn) {
	      var newStyles = customStyleFn(styleSet);
	      styleObj = _assign(styleObj, newStyles);
	    }

	    return React.createElement(
	      'span',
	      {
	        'data-offset-key': offsetKey,
	        ref: 'leaf',
	        style: styleObj },
	      React.createElement(
	        DraftEditorTextNode,
	        null,
	        text
	      )
	    );
	  };

	  return DraftEditorLeaf;
	}(React.Component);

	module.exports = DraftEditorLeaf;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorTextNode.react
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(54);
	var UserAgent = __webpack_require__(55);

	// In IE, spans with <br> tags render as two newlines. By rendering a span
	// with only a newline character, we can be sure to render a single line.
	var useNewlineChar = UserAgent.isBrowser('IE <= 11');

	/**
	 * Check whether the node should be considered a newline.
	 */
	function isNewline(node) {
	  return useNewlineChar ? node.textContent === '\n' : node.tagName === 'BR';
	}

	/**
	 * Placeholder elements for empty text content.
	 *
	 * What is this `data-text` attribute, anyway? It turns out that we need to
	 * put an attribute on the lowest-level text node in order to preserve correct
	 * spellcheck handling. If the <span> is naked, Chrome and Safari may do
	 * bizarre things to do the DOM -- split text nodes, create extra spans, etc.
	 * If the <span> has an attribute, this appears not to happen.
	 * See http://jsfiddle.net/9khdavod/ for the failure case, and
	 * http://jsfiddle.net/7pg143f7/ for the fixed case.
	 */
	var NEWLINE_A = useNewlineChar ? React.createElement(
	  'span',
	  { key: 'A', 'data-text': 'true' },
	  '\n'
	) : React.createElement('br', { key: 'A', 'data-text': 'true' });

	var NEWLINE_B = useNewlineChar ? React.createElement(
	  'span',
	  { key: 'B', 'data-text': 'true' },
	  '\n'
	) : React.createElement('br', { key: 'B', 'data-text': 'true' });

	/**
	 * The lowest-level component in a `DraftEditor`, the text node component
	 * replaces the default React text node implementation. This allows us to
	 * perform custom handling of newline behavior and avoid re-rendering text
	 * nodes with DOM state that already matches the expectations of our immutable
	 * editor state.
	 */
	var DraftEditorTextNode = function (_React$Component) {
	  _inherits(DraftEditorTextNode, _React$Component);

	  function DraftEditorTextNode(props) {
	    _classCallCheck(this, DraftEditorTextNode);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this._forceFlag = false;
	    return _this;
	  }

	  DraftEditorTextNode.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    var node = ReactDOM.findDOMNode(this);
	    var shouldBeNewline = nextProps.children === '';
	    if (shouldBeNewline) {
	      return !isNewline(node);
	    }
	    return node.textContent !== nextProps.children;
	  };

	  DraftEditorTextNode.prototype.componentWillUpdate = function componentWillUpdate() {
	    // By flipping this flag, we also keep flipping keys which forces
	    // React to remount this node every time it rerenders.
	    this._forceFlag = !this._forceFlag;
	  };

	  DraftEditorTextNode.prototype.render = function render() {
	    if (this.props.children === '') {
	      return this._forceFlag ? NEWLINE_A : NEWLINE_B;
	    }
	    return React.createElement(
	      'span',
	      { key: this._forceFlag ? 'A' : 'B', 'data-text': 'true' },
	      this.props.children
	    );
	  };

	  return DraftEditorTextNode;
	}(React.Component);

	module.exports = DraftEditorTextNode;

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var UserAgentData = __webpack_require__(56);
	var VersionRange = __webpack_require__(59);

	var mapObject = __webpack_require__(60);
	var memoizeStringOnly = __webpack_require__(61);

	/**
	 * Checks to see whether `name` and `version` satisfy `query`.
	 *
	 * @param {string} name Name of the browser, device, engine or platform
	 * @param {?string} version Version of the browser, engine or platform
	 * @param {string} query Query of form "Name [range expression]"
	 * @param {?function} normalizer Optional pre-processor for range expression
	 * @return {boolean}
	 */
	function compare(name, version, query, normalizer) {
	  // check for exact match with no version
	  if (name === query) {
	    return true;
	  }

	  // check for non-matching names
	  if (!query.startsWith(name)) {
	    return false;
	  }

	  // full comparison with version
	  var range = query.slice(name.length);
	  if (version) {
	    range = normalizer ? normalizer(range) : range;
	    return VersionRange.contains(range, version);
	  }

	  return false;
	}

	/**
	 * Normalizes `version` by stripping any "NT" prefix, but only on the Windows
	 * platform.
	 *
	 * Mimics the stripping performed by the `UserAgentWindowsPlatform` PHP class.
	 *
	 * @param {string} version
	 * @return {string}
	 */
	function normalizePlatformVersion(version) {
	  if (UserAgentData.platformName === 'Windows') {
	    return version.replace(/^\s*NT/, '');
	  }

	  return version;
	}

	/**
	 * Provides client-side access to the authoritative PHP-generated User Agent
	 * information supplied by the server.
	 */
	var UserAgent = {
	  /**
	   * Check if the User Agent browser matches `query`.
	   *
	   * `query` should be a string like "Chrome" or "Chrome > 33".
	   *
	   * Valid browser names include:
	   *
	   * - ACCESS NetFront
	   * - AOL
	   * - Amazon Silk
	   * - Android
	   * - BlackBerry
	   * - BlackBerry PlayBook
	   * - Chrome
	   * - Chrome for iOS
	   * - Chrome frame
	   * - Facebook PHP SDK
	   * - Facebook for iOS
	   * - Firefox
	   * - IE
	   * - IE Mobile
	   * - Mobile Safari
	   * - Motorola Internet Browser
	   * - Nokia
	   * - Openwave Mobile Browser
	   * - Opera
	   * - Opera Mini
	   * - Opera Mobile
	   * - Safari
	   * - UIWebView
	   * - Unknown
	   * - webOS
	   * - etc...
	   *
	   * An authoritative list can be found in the PHP `BrowserDetector` class and
	   * related classes in the same file (see calls to `new UserAgentBrowser` here:
	   * https://fburl.com/50728104).
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "Name [range expression]"
	   * @return {boolean}
	   */

	  isBrowser: function isBrowser(query) {
	    return compare(UserAgentData.browserName, UserAgentData.browserFullVersion, query);
	  },


	  /**
	   * Check if the User Agent browser uses a 32 or 64 bit architecture.
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "32" or "64".
	   * @return {boolean}
	   */
	  isBrowserArchitecture: function isBrowserArchitecture(query) {
	    return compare(UserAgentData.browserArchitecture, null, query);
	  },


	  /**
	   * Check if the User Agent device matches `query`.
	   *
	   * `query` should be a string like "iPhone" or "iPad".
	   *
	   * Valid device names include:
	   *
	   * - Kindle
	   * - Kindle Fire
	   * - Unknown
	   * - iPad
	   * - iPhone
	   * - iPod
	   * - etc...
	   *
	   * An authoritative list can be found in the PHP `DeviceDetector` class and
	   * related classes in the same file (see calls to `new UserAgentDevice` here:
	   * https://fburl.com/50728332).
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "Name"
	   * @return {boolean}
	   */
	  isDevice: function isDevice(query) {
	    return compare(UserAgentData.deviceName, null, query);
	  },


	  /**
	   * Check if the User Agent rendering engine matches `query`.
	   *
	   * `query` should be a string like "WebKit" or "WebKit >= 537".
	   *
	   * Valid engine names include:
	   *
	   * - Gecko
	   * - Presto
	   * - Trident
	   * - WebKit
	   * - etc...
	   *
	   * An authoritative list can be found in the PHP `RenderingEngineDetector`
	   * class related classes in the same file (see calls to `new
	   * UserAgentRenderingEngine` here: https://fburl.com/50728617).
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "Name [range expression]"
	   * @return {boolean}
	   */
	  isEngine: function isEngine(query) {
	    return compare(UserAgentData.engineName, UserAgentData.engineVersion, query);
	  },


	  /**
	   * Check if the User Agent platform matches `query`.
	   *
	   * `query` should be a string like "Windows" or "iOS 5 - 6".
	   *
	   * Valid platform names include:
	   *
	   * - Android
	   * - BlackBerry OS
	   * - Java ME
	   * - Linux
	   * - Mac OS X
	   * - Mac OS X Calendar
	   * - Mac OS X Internet Account
	   * - Symbian
	   * - SymbianOS
	   * - Windows
	   * - Windows Mobile
	   * - Windows Phone
	   * - iOS
	   * - iOS Facebook Integration Account
	   * - iOS Facebook Social Sharing UI
	   * - webOS
	   * - Chrome OS
	   * - etc...
	   *
	   * An authoritative list can be found in the PHP `PlatformDetector` class and
	   * related classes in the same file (see calls to `new UserAgentPlatform`
	   * here: https://fburl.com/50729226).
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "Name [range expression]"
	   * @return {boolean}
	   */
	  isPlatform: function isPlatform(query) {
	    return compare(UserAgentData.platformName, UserAgentData.platformFullVersion, query, normalizePlatformVersion);
	  },


	  /**
	   * Check if the User Agent platform is a 32 or 64 bit architecture.
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "32" or "64".
	   * @return {boolean}
	   */
	  isPlatformArchitecture: function isPlatformArchitecture(query) {
	    return compare(UserAgentData.platformArchitecture, null, query);
	  }
	};

	module.exports = mapObject(UserAgent, memoizeStringOnly);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Usage note:
	 * This module makes a best effort to export the same data we would internally.
	 * At Facebook we use a server-generated module that does the parsing and
	 * exports the data for the client to use. We can't rely on a server-side
	 * implementation in open source so instead we make use of an open source
	 * library to do the heavy lifting and then make some adjustments as necessary.
	 * It's likely there will be some differences. Some we can smooth over.
	 * Others are going to be harder.
	 */

	'use strict';

	var UAParser = __webpack_require__(57);

	var UNKNOWN = 'Unknown';

	var PLATFORM_MAP = {
	  'Mac OS': 'Mac OS X'
	};

	/**
	 * Convert from UAParser platform name to what we expect.
	 */
	function convertPlatformName(name) {
	  return PLATFORM_MAP[name] || name;
	}

	/**
	 * Get the version number in parts. This is very naive. We actually get major
	 * version as a part of UAParser already, which is generally good enough, but
	 * let's get the minor just in case.
	 */
	function getBrowserVersion(version) {
	  if (!version) {
	    return {
	      major: '',
	      minor: ''
	    };
	  }
	  var parts = version.split('.');
	  return {
	    major: parts[0],
	    minor: parts[1]
	  };
	}

	/**
	 * Get the UA data fom UAParser and then convert it to the format we're
	 * expecting for our APIS.
	 */
	var parser = new UAParser();
	var results = parser.getResult();

	// Do some conversion first.
	var browserVersionData = getBrowserVersion(results.browser.version);
	var uaData = {
	  browserArchitecture: results.cpu.architecture || UNKNOWN,
	  browserFullVersion: results.browser.version || UNKNOWN,
	  browserMinorVersion: browserVersionData.minor || UNKNOWN,
	  browserName: results.browser.name || UNKNOWN,
	  browserVersion: results.browser.major || UNKNOWN,
	  deviceName: results.device.model || UNKNOWN,
	  engineName: results.engine.name || UNKNOWN,
	  engineVersion: results.engine.version || UNKNOWN,
	  platformArchitecture: results.cpu.architecture || UNKNOWN,
	  platformName: convertPlatformName(results.os.name) || UNKNOWN,
	  platformVersion: results.os.version || UNKNOWN,
	  platformFullVersion: results.os.version || UNKNOWN
	};

	module.exports = uaData;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * UAParser.js v0.7.10
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */

	(function (window, undefined) {

	    'use strict';

	    //////////////
	    // Constants
	    /////////////


	    var LIBVERSION  = '0.7.10',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major', // deprecated
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded';


	    ///////////
	    // Helper
	    //////////


	    var util = {
	        extend : function (regexes, extensions) {
	            for (var i in extensions) {
	                if ("browser cpu device engine os".indexOf(i) !== -1 && extensions[i].length % 2 === 0) {
	                    regexes[i] = extensions[i].concat(regexes[i]);
	                }
	            }
	            return regexes;
	        },
	        has : function (str1, str2) {
	          if (typeof str1 === "string") {
	            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	          } else {
	            return false;
	          }
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        },
	        major : function (version) {
	            return typeof(version) === STR_TYPE ? version.split(".")[0] : undefined;
	        }
	    };


	    ///////////////
	    // Map helper
	    //////////////


	    var mapper = {

	        rgx : function () {

	            var result, i = 0, j, k, p, q, matches, match, args = arguments;

	            // loop through all regexes maps
	            while (i < args.length && !matches) {

	                var regex = args[i],       // even sequence (0,2,4,..)
	                    props = args[i + 1];   // odd sequence (1,3,5,..)

	                // construct object barebones
	                if (typeof result === UNDEF_TYPE) {
	                    result = {};
	                    for (p in props) {
	                        if (props.hasOwnProperty(p)){
	                            q = props[p];
	                            if (typeof q === OBJ_TYPE) {
	                                result[q[0]] = undefined;
	                            } else {
	                                result[q] = undefined;
	                            }
	                        }
	                    }
	                }

	                // try matching uastring with regexes
	                j = k = 0;
	                while (j < regex.length && !matches) {
	                    matches = regex[j++].exec(this.getUA());
	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        result[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        result[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                    } else {
	                                        // sanitize match using given regex
	                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                    }
	                                } else if (q.length == 4) {
	                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                }
	                            } else {
	                                result[q] = match ? match : undefined;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	            return result;
	        },

	        str : function (str, map) {

	            for (var i in map) {
	                // check if array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined : i;
	                }
	            }
	            return str;
	        }
	    };


	    ///////////////
	    // String map
	    //////////////


	    var maps = {

	        browser : {
	            oldsafari : {
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            }
	        },

	        device : {
	            amazon : {
	                model : {
	                    'Fire Phone' : ['SD', 'KF']
	                }
	            },
	            sprint : {
	                model : {
	                    'Evo Shift 4G' : '7373KT'
	                },
	                vendor : {
	                    'HTC'       : 'APA',
	                    'Sprint'    : 'Sprint'
	                }
	            }
	        },

	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    '10'        : ['NT 6.4', 'NT 10.0'],
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };


	    //////////////
	    // Regex map
	    /////////////


	    var regexes = {

	        browser : [[

	            // Presto based
	            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
	            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
	            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
	            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80

	            ], [NAME, VERSION], [

	            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION], [

	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
	                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

	            // Trident based
	            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
	                                                                                // Avant/IEMobile/SlimBrowser/Baidu
	            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

	            // Webkit/KHTML based
	            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
	                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
	            ], [NAME, VERSION], [

	            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
	            ], [[NAME, 'IE'], VERSION], [

	            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
	            ], [NAME, VERSION], [

	            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
	            ], [[NAME, 'Yandex'], VERSION], [

	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [

	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
	                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
	            /(qqbrowser)[\/\s]?([\w\.]+)/i
	                                                                                // QQBrowser
	            ], [NAME, VERSION], [

	            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
	            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
	            /JUC.+(ucweb)[\/\s]?([\w\.]+)/i
	                                                                                // UCBrowser
	            ], [[NAME, 'UCBrowser'], VERSION], [

	            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION], [

	            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
	            ], [[NAME, 'Chrome'], VERSION], [

	            /XiaoMi\/MiuiBrowser\/([\w\.]+)/i                                   // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI Browser']], [

	            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i         // Android Browser
	            ], [VERSION, [NAME, 'Android Browser']], [

	            /FBAV\/([\w\.]+);/i                                                 // Facebook App for iOS
	            ], [VERSION, [NAME, 'Facebook']], [

	            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, 'Firefox']], [

	            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [

	            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
	            ], [VERSION, NAME], [

	            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
	            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

	            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [

	            // Gecko based
	            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	            /(links)\s\(([\w\.]+)/i,                                            // Links
	            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
	            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
	            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
	            ], [NAME, VERSION]

	            /* /////////////////////
	            // Media players BEGIN
	            ////////////////////////

	            , [

	            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
	            /(coremedia) v((\d+)[\w\._]+)/i
	            ], [NAME, VERSION], [

	            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
	            ], [NAME, VERSION], [

	            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
	            ], [NAME, VERSION], [

	            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
	                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
	                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
	            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
	            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
	            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
	            ], [NAME, VERSION], [
	            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
	            ], [NAME, VERSION], [

	            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
	            ], [[NAME, 'Flip Player'], VERSION], [

	            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
	                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
	            ], [NAME], [

	            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
	                                                                                // Gstreamer
	            ], [NAME, VERSION], [

	            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
	            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
	                                                                                // Java/urllib/requests/wget/cURL
	            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
	            ], [NAME, VERSION], [

	            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
	            ], [[NAME, /_/g, ' '], VERSION], [

	            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
	                                                                                // MPlayer SVN
	            ], [NAME, VERSION], [

	            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
	            ], [NAME, VERSION], [

	            /(mplayer)/i,                                                       // MPlayer (no other info)
	            /(yourmuze)/i,                                                      // YourMuze
	            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
	            ], [NAME], [

	            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
	            ], [NAME, VERSION], [

	            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
	            ], [NAME, VERSION], [

	            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
	            ], [NAME, VERSION], [

	            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
	            /(winamp)\s((\d+)[\w\.-]+)/i,
	            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
	            ], [NAME, VERSION], [

	            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
	                                                                                // inlight radio
	            ], [NAME], [

	            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
	                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
	                                                                                // SoundTap/Totem/Stagefright/Streamium
	            ], [NAME, VERSION], [

	            /(smp)((\d+)[\d\.]+)/i                                              // SMP
	            ], [NAME, VERSION], [

	            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
	            /(vlc)\/((\d+)[\w\.-]+)/i,
	            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
	            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
	            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
	            ], [NAME, VERSION], [

	            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
	            /(windows-media-player)\/((\d+)[\w\.-]+)/i
	            ], [[NAME, /-/g, ' '], VERSION], [

	            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
	                                                                                // Windows Media Server
	            ], [VERSION, [NAME, 'Windows']], [

	            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
	            ], [NAME, VERSION], [

	            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
	            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
	            ], [[NAME, 'rad.io'], VERSION]

	            //////////////////////
	            // Media players END
	            ////////////////////*/

	        ],

	        cpu : [[

	            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
	            ], [[ARCHITECTURE, 'amd64']], [

	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, util.lowerize]], [

	            /((?:i[346]|x)86)[;\)]/i                                            // IA32
	            ], [[ARCHITECTURE, 'ia32']], [

	            // PocketPC mistakenly identified as PowerPC
	            /windows\s(ce|mobile);\sppc;/i
	            ], [[ARCHITECTURE, 'arm']], [

	            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
	            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [

	            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, util.lowerize]]
	        ],

	        device : [[

	            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [

	            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

	            /(apple\s{0,1}tv)/i                                                 // Apple TV
	            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

	            /(archos)\s(gamepad2?)/i,                                           // Archos
	            /(hp).+(touchpad)/i,                                                // HP TouchPad
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
	            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
	            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
	            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

	            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
	            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
	            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

	            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
	                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
	            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
	            /(asus)-?(\w+)/i                                                    // Asus
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
	            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
	                                                                                // Asus Tablets
	            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
	            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

	            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
	            /(sony)?(?:sgp.+)\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
	            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

	            /\s(ouya)\s/i,                                                      // Ouya
	            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

	            /android.+;\s(shield)\sbuild/i                                      // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

	            /(playstation\s[34portablevi]+)/i                                   // Playstation
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

	            /(sprint\s(\w+))/i                                                  // Sprint Phones
	            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

	            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
	            /(zte)-(\w+)*/i,                                                    // ZTE
	            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
	                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [
	                
	            /(nexus\s9)/i                                                       // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

	            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

	                                                                                // Motorola
	            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
	            /mot[\s-]?(\w+)*/i,
	            /(XT\d{3,4}) build\//i,
	            /(nexus\s[6])/i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
	            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

	            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
	            /((SM-T\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
	            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
	            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
	            /sec-((sgh\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
	            /(samsung);smarttv/i
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [

	            /\(dtv[\);].+(aquos)/i                                              // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
	            /sie-(\w+)*/i                                                       // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

	            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
	            /(nokia)[\s_-]?([\w-]+)*/i
	            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

	            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

	            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
	            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
	            /(lg) netcast\.tv/i                                                 // LG SmartTV
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
	            /(nexus\s[45])/i,                                                   // LG
	            /lg[e;\s\/-]+(\w+)*/i
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

	            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

	            /linux;.+((jolla));/i                                               // Jolla
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

	            /android.+;\s(glass)\s\d/i                                          // Google Glass
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

	            /android.+(\w+)\s+build\/hm\1/i,                                        // Xiaomi Hongmi 'numeric' models
	            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,                   // Xiaomi Hongmi
	            /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

	            /\s(tablet)[;\/\s]/i,                                               // Unidentifiable Tablet
	            /\s(mobile)[;\/\s]/i                                                // Unidentifiable Mobile
	            ], [[TYPE, util.lowerize], VENDOR, MODEL]

	            /*//////////////////////////
	            // TODO: move to string map
	            ////////////////////////////

	            /(C6603)/i                                                          // Sony Xperia Z C6603
	            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	            /(C6903)/i                                                          // Sony Xperia Z 1
	            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

	            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
	            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
	            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
	            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
	            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
	            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
	            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
	            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

	            /(R1001)/i                                                          // Oppo R1001
	            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
	            /(X9006)/i                                                          // Oppo Find 7a
	            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	            /(R2001)/i                                                          // Oppo YOYO R2001
	            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	            /(R815)/i                                                           // Oppo Clover R815
	            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	             /(U707)/i                                                          // Oppo Find Way S
	            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [

	            /(T3C)/i                                                            // Advan Vandroid T3C
	            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
	            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
	            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

	            /(V972M)/i                                                          // ZTE V972M
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

	            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
	            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
	            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            
	            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
	            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

	            /////////////
	            // END TODO
	            ///////////*/

	        ],

	        engine : [[

	            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, 'EdgeHTML']], [

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows based
	            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

	            // Mobile/Embedded OS
	            /\((bb)(10);/i                                                      // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [
	            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
	            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
	            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
	                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
	            /linux;.+(sailfish);/i                                              // Sailfish OS
	            ], [NAME, VERSION], [
	            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
	            ], [[NAME, 'Symbian'], VERSION], [
	            /\((series40);/i                                                    // Series 40
	            ], [NAME], [
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [

	            // Console
	            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
	            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
	            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
	            /(gnu)\s?([\w\.]+)*/i                                               // GNU
	            ], [NAME, VERSION], [

	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Solaris
	            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [

	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [NAME, VERSION],[

	            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
	            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

	            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
	            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

	            // Other
	            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
	            /(haiku)\s(\w+)/i,                                                  // Haiku
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
	            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
	                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
	            /(unix)\s?([\w\.]+)*/i                                              // UNIX
	            ], [NAME, VERSION]
	        ]
	    };


	    /////////////////
	    // Constructor
	    ////////////////


	    var UAParser = function (uastring, extensions) {

	        if (!(this instanceof UAParser)) {
	            return new UAParser(uastring, extensions).getResult();
	        }

	        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

	        this.getBrowser = function () {
	            var browser = mapper.rgx.apply(this, rgxmap.browser);
	            browser.major = util.major(browser.version);
	            return browser;
	        };
	        this.getCPU = function () {
	            return mapper.rgx.apply(this, rgxmap.cpu);
	        };
	        this.getDevice = function () {
	            return mapper.rgx.apply(this, rgxmap.device);
	        };
	        this.getEngine = function () {
	            return mapper.rgx.apply(this, rgxmap.engine);
	        };
	        this.getOS = function () {
	            return mapper.rgx.apply(this, rgxmap.os);
	        };
	        this.getResult = function() {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return ua;
	        };
	        this.setUA = function (uastring) {
	            ua = uastring;
	            return this;
	        };
	        this.setUA(ua);
	        return this;
	    };

	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER = {
	        NAME    : NAME,
	        MAJOR   : MAJOR, // deprecated
	        VERSION : VERSION
	    };
	    UAParser.CPU = {
	        ARCHITECTURE : ARCHITECTURE
	    };
	    UAParser.DEVICE = {
	        MODEL   : MODEL,
	        VENDOR  : VENDOR,
	        TYPE    : TYPE,
	        CONSOLE : CONSOLE,
	        MOBILE  : MOBILE,
	        SMARTTV : SMARTTV,
	        TABLET  : TABLET,
	        WEARABLE: WEARABLE,
	        EMBEDDED: EMBEDDED
	    };
	    UAParser.ENGINE = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    UAParser.OS = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };


	    ///////////
	    // Export
	    //////////


	    // check js environment
	    if (typeof(exports) !== UNDEF_TYPE) {
	        // nodejs env
	        if (typeof module !== UNDEF_TYPE && module.exports) {
	            exports = module.exports = UAParser;
	        }
	        exports.UAParser = UAParser;
	    } else {
	        // requirejs env (optional)
	        if ("function" === FUNC_TYPE && __webpack_require__(58)) {
	            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                return UAParser;
	            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        } else {
	            // browser env
	            window.UAParser = UAParser;
	        }
	    }

	    // jQuery/Zepto specific (optional)
	    // Note: 
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = window.jQuery || window.Zepto;
	    if (typeof $ !== UNDEF_TYPE) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function() {
	            return parser.getUA();
	        };
	        $.ua.set = function (uastring) {
	            parser.setUA(uastring);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }

	})(typeof window === 'object' ? window : this);


/***/ },
/* 58 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var invariant = __webpack_require__(18);

	var componentRegex = /\./;
	var orRegex = /\|\|/;
	var rangeRegex = /\s+\-\s+/;
	var modifierRegex = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
	var numericRegex = /^(\d*)(.*)/;

	/**
	 * Splits input `range` on "||" and returns true if any subrange matches
	 * `version`.
	 *
	 * @param {string} range
	 * @param {string} version
	 * @returns {boolean}
	 */
	function checkOrExpression(range, version) {
	  var expressions = range.split(orRegex);

	  if (expressions.length > 1) {
	    return expressions.some(function (range) {
	      return VersionRange.contains(range, version);
	    });
	  } else {
	    range = expressions[0].trim();
	    return checkRangeExpression(range, version);
	  }
	}

	/**
	 * Splits input `range` on " - " (the surrounding whitespace is required) and
	 * returns true if version falls between the two operands.
	 *
	 * @param {string} range
	 * @param {string} version
	 * @returns {boolean}
	 */
	function checkRangeExpression(range, version) {
	  var expressions = range.split(rangeRegex);

	  !(expressions.length > 0 && expressions.length <= 2) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'the "-" operator expects exactly 2 operands') : invariant(false) : void 0;

	  if (expressions.length === 1) {
	    return checkSimpleExpression(expressions[0], version);
	  } else {
	    var startVersion = expressions[0];
	    var endVersion = expressions[1];

	    !(isSimpleVersion(startVersion) && isSimpleVersion(endVersion)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'operands to the "-" operator must be simple (no modifiers)') : invariant(false) : void 0;

	    return checkSimpleExpression('>=' + startVersion, version) && checkSimpleExpression('<=' + endVersion, version);
	  }
	}

	/**
	 * Checks if `range` matches `version`. `range` should be a "simple" range (ie.
	 * not a compound range using the " - " or "||" operators).
	 *
	 * @param {string} range
	 * @param {string} version
	 * @returns {boolean}
	 */
	function checkSimpleExpression(range, version) {
	  range = range.trim();
	  if (range === '') {
	    return true;
	  }

	  var versionComponents = version.split(componentRegex);

	  var _getModifierAndCompon = getModifierAndComponents(range);

	  var modifier = _getModifierAndCompon.modifier;
	  var rangeComponents = _getModifierAndCompon.rangeComponents;

	  switch (modifier) {
	    case '<':
	      return checkLessThan(versionComponents, rangeComponents);
	    case '<=':
	      return checkLessThanOrEqual(versionComponents, rangeComponents);
	    case '>=':
	      return checkGreaterThanOrEqual(versionComponents, rangeComponents);
	    case '>':
	      return checkGreaterThan(versionComponents, rangeComponents);
	    case '~':
	    case '~>':
	      return checkApproximateVersion(versionComponents, rangeComponents);
	    default:
	      return checkEqual(versionComponents, rangeComponents);
	  }
	}

	/**
	 * Checks whether `a` is less than `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkLessThan(a, b) {
	  return compareComponents(a, b) === -1;
	}

	/**
	 * Checks whether `a` is less than or equal to `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkLessThanOrEqual(a, b) {
	  var result = compareComponents(a, b);
	  return result === -1 || result === 0;
	}

	/**
	 * Checks whether `a` is equal to `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkEqual(a, b) {
	  return compareComponents(a, b) === 0;
	}

	/**
	 * Checks whether `a` is greater than or equal to `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkGreaterThanOrEqual(a, b) {
	  var result = compareComponents(a, b);
	  return result === 1 || result === 0;
	}

	/**
	 * Checks whether `a` is greater than `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkGreaterThan(a, b) {
	  return compareComponents(a, b) === 1;
	}

	/**
	 * Checks whether `a` is "reasonably close" to `b` (as described in
	 * https://www.npmjs.org/doc/misc/semver.html). For example, if `b` is "1.3.1"
	 * then "reasonably close" is defined as ">= 1.3.1 and < 1.4".
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkApproximateVersion(a, b) {
	  var lowerBound = b.slice();
	  var upperBound = b.slice();

	  if (upperBound.length > 1) {
	    upperBound.pop();
	  }
	  var lastIndex = upperBound.length - 1;
	  var numeric = parseInt(upperBound[lastIndex], 10);
	  if (isNumber(numeric)) {
	    upperBound[lastIndex] = numeric + 1 + '';
	  }

	  return checkGreaterThanOrEqual(a, lowerBound) && checkLessThan(a, upperBound);
	}

	/**
	 * Extracts the optional modifier (<, <=, =, >=, >, ~, ~>) and version
	 * components from `range`.
	 *
	 * For example, given `range` ">= 1.2.3" returns an object with a `modifier` of
	 * `">="` and `components` of `[1, 2, 3]`.
	 *
	 * @param {string} range
	 * @returns {object}
	 */
	function getModifierAndComponents(range) {
	  var rangeComponents = range.split(componentRegex);
	  var matches = rangeComponents[0].match(modifierRegex);
	  !matches ? process.env.NODE_ENV !== 'production' ? invariant(false, 'expected regex to match but it did not') : invariant(false) : void 0;

	  return {
	    modifier: matches[1],
	    rangeComponents: [matches[2]].concat(rangeComponents.slice(1))
	  };
	}

	/**
	 * Determines if `number` is a number.
	 *
	 * @param {mixed} number
	 * @returns {boolean}
	 */
	function isNumber(number) {
	  return !isNaN(number) && isFinite(number);
	}

	/**
	 * Tests whether `range` is a "simple" version number without any modifiers
	 * (">", "~" etc).
	 *
	 * @param {string} range
	 * @returns {boolean}
	 */
	function isSimpleVersion(range) {
	  return !getModifierAndComponents(range).modifier;
	}

	/**
	 * Zero-pads array `array` until it is at least `length` long.
	 *
	 * @param {array} array
	 * @param {number} length
	 */
	function zeroPad(array, length) {
	  for (var i = array.length; i < length; i++) {
	    array[i] = '0';
	  }
	}

	/**
	 * Normalizes `a` and `b` in preparation for comparison by doing the following:
	 *
	 * - zero-pads `a` and `b`
	 * - marks any "x", "X" or "*" component in `b` as equivalent by zero-ing it out
	 *   in both `a` and `b`
	 * - marks any final "*" component in `b` as a greedy wildcard by zero-ing it
	 *   and all of its successors in `a`
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {array<array<string>>}
	 */
	function normalizeVersions(a, b) {
	  a = a.slice();
	  b = b.slice();

	  zeroPad(a, b.length);

	  // mark "x" and "*" components as equal
	  for (var i = 0; i < b.length; i++) {
	    var matches = b[i].match(/^[x*]$/i);
	    if (matches) {
	      b[i] = a[i] = '0';

	      // final "*" greedily zeros all remaining components
	      if (matches[0] === '*' && i === b.length - 1) {
	        for (var j = i; j < a.length; j++) {
	          a[j] = '0';
	        }
	      }
	    }
	  }

	  zeroPad(b, a.length);

	  return [a, b];
	}

	/**
	 * Returns the numerical -- not the lexicographical -- ordering of `a` and `b`.
	 *
	 * For example, `10-alpha` is greater than `2-beta`.
	 *
	 * @param {string} a
	 * @param {string} b
	 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
	 * or greater than `b`, respectively
	 */
	function compareNumeric(a, b) {
	  var aPrefix = a.match(numericRegex)[1];
	  var bPrefix = b.match(numericRegex)[1];
	  var aNumeric = parseInt(aPrefix, 10);
	  var bNumeric = parseInt(bPrefix, 10);

	  if (isNumber(aNumeric) && isNumber(bNumeric) && aNumeric !== bNumeric) {
	    return compare(aNumeric, bNumeric);
	  } else {
	    return compare(a, b);
	  }
	}

	/**
	 * Returns the ordering of `a` and `b`.
	 *
	 * @param {string|number} a
	 * @param {string|number} b
	 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
	 * or greater than `b`, respectively
	 */
	function compare(a, b) {
	  !(typeof a === typeof b) ? process.env.NODE_ENV !== 'production' ? invariant(false, '"a" and "b" must be of the same type') : invariant(false) : void 0;

	  if (a > b) {
	    return 1;
	  } else if (a < b) {
	    return -1;
	  } else {
	    return 0;
	  }
	}

	/**
	 * Compares arrays of version components.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
	 * or greater than `b`, respectively
	 */
	function compareComponents(a, b) {
	  var _normalizeVersions = normalizeVersions(a, b);

	  var aNormalized = _normalizeVersions[0];
	  var bNormalized = _normalizeVersions[1];


	  for (var i = 0; i < bNormalized.length; i++) {
	    var result = compareNumeric(aNormalized[i], bNormalized[i]);
	    if (result) {
	      return result;
	    }
	  }

	  return 0;
	}

	var VersionRange = {
	  /**
	   * Checks whether `version` satisfies the `range` specification.
	   *
	   * We support a subset of the expressions defined in
	   * https://www.npmjs.org/doc/misc/semver.html:
	   *
	   *    version   Must match version exactly
	   *    =version  Same as just version
	   *    >version  Must be greater than version
	   *    >=version Must be greater than or equal to version
	   *    <version  Must be less than version
	   *    <=version Must be less than or equal to version
	   *    ~version  Must be at least version, but less than the next significant
	   *              revision above version:
	   *              "~1.2.3" is equivalent to ">= 1.2.3 and < 1.3"
	   *    ~>version Equivalent to ~version
	   *    1.2.x     Must match "1.2.x", where "x" is a wildcard that matches
	   *              anything
	   *    1.2.*     Similar to "1.2.x", but "*" in the trailing position is a
	   *              "greedy" wildcard, so will match any number of additional
	   *              components:
	   *              "1.2.*" will match "1.2.1", "1.2.1.1", "1.2.1.1.1" etc
	   *    *         Any version
	   *    ""        (Empty string) Same as *
	   *    v1 - v2   Equivalent to ">= v1 and <= v2"
	   *    r1 || r2  Passes if either r1 or r2 are satisfied
	   *
	   * @param {string} range
	   * @param {string} version
	   * @returns {boolean}
	   */

	  contains: function contains(range, version) {
	    return checkOrExpression(range.trim(), version.trim());
	  }
	};

	module.exports = VersionRange;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */

	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setDraftEditorSelection
	 * @typechecks
	 * 
	 */

	'use strict';

	var containsNode = __webpack_require__(63);
	var getActiveElement = __webpack_require__(66);

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 */
	function setDraftEditorSelection(selectionState, node, blockKey, nodeStart, nodeEnd) {
	  // It's possible that the editor has been removed from the DOM but
	  // our selection code doesn't know it yet. Forcing selection in
	  // this case may lead to errors, so just bail now.
	  if (!containsNode(document.documentElement, node)) {
	    return;
	  }

	  var selection = global.getSelection();
	  var anchorKey = selectionState.getAnchorKey();
	  var anchorOffset = selectionState.getAnchorOffset();
	  var focusKey = selectionState.getFocusKey();
	  var focusOffset = selectionState.getFocusOffset();
	  var isBackward = selectionState.getIsBackward();

	  // IE doesn't support backward selection. Swap key/offset pairs.
	  if (!selection.extend && isBackward) {
	    var tempKey = anchorKey;
	    var tempOffset = anchorOffset;
	    anchorKey = focusKey;
	    anchorOffset = focusOffset;
	    focusKey = tempKey;
	    focusOffset = tempOffset;
	    isBackward = false;
	  }

	  var hasAnchor = anchorKey === blockKey && nodeStart <= anchorOffset && nodeEnd >= anchorOffset;

	  var hasFocus = focusKey === blockKey && nodeStart <= focusOffset && nodeEnd >= focusOffset;

	  // If the selection is entirely bound within this node, set the selection
	  // and be done.
	  if (hasAnchor && hasFocus) {
	    selection.removeAllRanges();
	    addPointToSelection(selection, node, anchorOffset - nodeStart);
	    addFocusToSelection(selection, node, focusOffset - nodeStart);
	    return;
	  }

	  if (!isBackward) {
	    // If the anchor is within this node, set the range start.
	    if (hasAnchor) {
	      selection.removeAllRanges();
	      addPointToSelection(selection, node, anchorOffset - nodeStart);
	    }

	    // If the focus is within this node, we can assume that we have
	    // already set the appropriate start range on the selection, and
	    // can simply extend the selection.
	    if (hasFocus) {
	      addFocusToSelection(selection, node, focusOffset - nodeStart);
	    }
	  } else {
	    // If this node has the focus, set the selection range to be a
	    // collapsed range beginning here. Later, when we encounter the anchor,
	    // we'll use this information to extend the selection.
	    if (hasFocus) {
	      selection.removeAllRanges();
	      addPointToSelection(selection, node, focusOffset - nodeStart);
	    }

	    // If this node has the anchor, we may assume that the correct
	    // focus information is already stored on the selection object.
	    // We keep track of it, reset the selection range, and extend it
	    // back to the focus point.
	    if (hasAnchor) {
	      var storedFocusNode = selection.focusNode;
	      var storedFocusOffset = selection.focusOffset;

	      selection.removeAllRanges();
	      addPointToSelection(selection, node, anchorOffset - nodeStart);
	      addFocusToSelection(selection, storedFocusNode, storedFocusOffset);
	    }
	  }
	}

	/**
	 * Extend selection towards focus point.
	 */
	function addFocusToSelection(selection, node, offset) {
	  if (selection.extend && containsNode(getActiveElement(), node)) {
	    // If `extend` is called while another element has focus, an error is
	    // thrown. We therefore disable `extend` if the active element is somewhere
	    // other than the node we are selecting. This should only occur in Firefox,
	    // since it is the only browser to support multiple selections.
	    // See https://bugzilla.mozilla.org/show_bug.cgi?id=921444.
	    selection.extend(node, offset);
	  } else {
	    // IE doesn't support extend. This will mean no backward selection.
	    // Extract the existing selection range and add focus to it.
	    // Additionally, clone the selection range. IE11 throws an
	    // InvalidStateError when attempting to access selection properties
	    // after the range is detached.
	    var range = selection.getRangeAt(0);
	    range.setEnd(node, offset);
	    selection.addRange(range.cloneRange());
	  }
	}

	function addPointToSelection(selection, node, offset) {
	  var range = document.createRange();
	  range.setStart(node, offset);
	  selection.addRange(range);
	}

	module.exports = setDraftEditorSelection;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	var isTextNode = __webpack_require__(64);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var isNode = __webpack_require__(65);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;

/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftOffsetKey
	 * 
	 */

	'use strict';

	var KEY_DELIMITER = '-';

	var DraftOffsetKey = {
	  encode: function encode(blockKey, decoratorKey, leafKey) {
	    return blockKey + KEY_DELIMITER + decoratorKey + KEY_DELIMITER + leafKey;
	  },

	  decode: function decode(offsetKey) {
	    var _offsetKey$split = offsetKey.split(KEY_DELIMITER);

	    var blockKey = _offsetKey$split[0];
	    var decoratorKey = _offsetKey$split[1];
	    var leafKey = _offsetKey$split[2];

	    return {
	      blockKey: blockKey,
	      decoratorKey: parseInt(decoratorKey, 10),
	      leafKey: parseInt(leafKey, 10)
	    };
	  }
	};

	module.exports = DraftOffsetKey;

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * @param {DOMElement} element
	 * @param {DOMDocument} doc
	 * @return {boolean}
	 */
	function _isViewportScrollElement(element, doc) {
	  return !!doc && (element === doc.documentElement || element === doc.body);
	}

	/**
	 * Scroll Module. This class contains 4 simple static functions
	 * to be used to access Element.scrollTop/scrollLeft properties.
	 * To solve the inconsistencies between browsers when either
	 * document.body or document.documentElement is supplied,
	 * below logic will be used to alleviate the issue:
	 *
	 * 1. If 'element' is either 'document.body' or 'document.documentElement,
	 *    get whichever element's 'scroll{Top,Left}' is larger.
	 * 2. If 'element' is either 'document.body' or 'document.documentElement',
	 *    set the 'scroll{Top,Left}' on both elements.
	 */

	var Scroll = {
	  /**
	   * @param {DOMElement} element
	   * @return {number}
	   */
	  getTop: function getTop(element) {
	    var doc = element.ownerDocument;
	    return _isViewportScrollElement(element, doc) ?
	    // In practice, they will either both have the same value,
	    // or one will be zero and the other will be the scroll position
	    // of the viewport. So we can use `X || Y` instead of `Math.max(X, Y)`
	    doc.body.scrollTop || doc.documentElement.scrollTop : element.scrollTop;
	  },

	  /**
	   * @param {DOMElement} element
	   * @param {number} newTop
	   */
	  setTop: function setTop(element, newTop) {
	    var doc = element.ownerDocument;
	    if (_isViewportScrollElement(element, doc)) {
	      doc.body.scrollTop = doc.documentElement.scrollTop = newTop;
	    } else {
	      element.scrollTop = newTop;
	    }
	  },

	  /**
	   * @param {DOMElement} element
	   * @return {number}
	   */
	  getLeft: function getLeft(element) {
	    var doc = element.ownerDocument;
	    return _isViewportScrollElement(element, doc) ? doc.body.scrollLeft || doc.documentElement.scrollLeft : element.scrollLeft;
	  },

	  /**
	   * @param {DOMElement} element
	   * @param {number} newLeft
	   */
	  setLeft: function setLeft(element, newLeft) {
	    var doc = element.ownerDocument;
	    if (_isViewportScrollElement(element, doc)) {
	      doc.body.scrollLeft = doc.documentElement.scrollLeft = newLeft;
	    } else {
	      element.scrollLeft = newLeft;
	    }
	  }
	};

	module.exports = Scroll;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var getStyleProperty = __webpack_require__(70);

	/**
	 * @param {DOMNode} element [description]
	 * @param {string} name Overflow style property name.
	 * @return {boolean} True if the supplied ndoe is scrollable.
	 */
	function _isNodeScrollable(element, name) {
	  var overflow = Style.get(element, name);
	  return overflow === 'auto' || overflow === 'scroll';
	}

	/**
	 * Utilities for querying and mutating style properties.
	 */
	var Style = {
	  /**
	   * Gets the style property for the supplied node. This will return either the
	   * computed style, if available, or the declared style.
	   *
	   * @param {DOMNode} node
	   * @param {string} name Style property name.
	   * @return {?string} Style property value.
	   */
	  get: getStyleProperty,

	  /**
	   * Determines the nearest ancestor of a node that is scrollable.
	   *
	   * NOTE: This can be expensive if used repeatedly or on a node nested deeply.
	   *
	   * @param {?DOMNode} node Node from which to start searching.
	   * @return {?DOMWindow|DOMElement} Scroll parent of the supplied node.
	   */
	  getScrollParent: function getScrollParent(node) {
	    if (!node) {
	      return null;
	    }
	    while (node && node !== document.body) {
	      if (_isNodeScrollable(node, 'overflow') || _isNodeScrollable(node, 'overflowY') || _isNodeScrollable(node, 'overflowX')) {
	        return node;
	      }
	      node = node.parentNode;
	    }
	    return window;
	  }

	};

	module.exports = Style;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var camelize = __webpack_require__(71);
	var hyphenate = __webpack_require__(72);

	function asString(value) /*?string*/{
	  return value == null ? value : String(value);
	}

	function getStyleProperty( /*DOMNode*/node, /*string*/name) /*?string*/{
	  var computedStyle = void 0;

	  // W3C Standard
	  if (window.getComputedStyle) {
	    // In certain cases such as within an iframe in FF3, this returns null.
	    computedStyle = window.getComputedStyle(node, null);
	    if (computedStyle) {
	      return asString(computedStyle.getPropertyValue(hyphenate(name)));
	    }
	  }
	  // Safari
	  if (document.defaultView && document.defaultView.getComputedStyle) {
	    computedStyle = document.defaultView.getComputedStyle(node, null);
	    // A Safari bug causes this to return null for `display: none` elements.
	    if (computedStyle) {
	      return asString(computedStyle.getPropertyValue(hyphenate(name)));
	    }
	    if (name === 'display') {
	      return 'none';
	    }
	  }
	  // Internet Explorer
	  if (node.currentStyle) {
	    if (name === 'float') {
	      return asString(node.currentStyle.cssFloat || node.currentStyle.styleFloat);
	    }
	    return asString(node.currentStyle[camelize(name)]);
	  }
	  return asString(node.style && node.style[camelize(name)]);
	}

	module.exports = getStyleProperty;

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var getElementRect = __webpack_require__(74);

	/**
	 * Gets an element's position in pixels relative to the viewport. The returned
	 * object represents the position of the element's top left corner.
	 *
	 * @param {DOMElement} element
	 * @return {object}
	 */
	function getElementPosition(element) {
	  var rect = getElementRect(element);
	  return {
	    x: rect.left,
	    y: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  };
	}

	module.exports = getElementPosition;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var containsNode = __webpack_require__(63);

	/**
	 * Gets an element's bounding rect in pixels relative to the viewport.
	 *
	 * @param {DOMElement} elem
	 * @return {object}
	 */
	function getElementRect(elem) {
	  var docElem = document.documentElement;

	  // FF 2, Safari 3 and Opera 9.5- do not support getBoundingClientRect().
	  // IE9- will throw if the element is not in the document.
	  if (!('getBoundingClientRect' in elem) || !containsNode(docElem, elem)) {
	    return {
	      left: 0,
	      right: 0,
	      top: 0,
	      bottom: 0
	    };
	  }

	  // Subtracts clientTop/Left because IE8- added a 2px border to the
	  // <html> element (see http://fburl.com/1493213). IE 7 in
	  // Quicksmode does not report clientLeft/clientTop so there
	  // will be an unaccounted offset of 2px when in quirksmode
	  var rect = elem.getBoundingClientRect();

	  return {
	    left: Math.round(rect.left) - docElem.clientLeft,
	    right: Math.round(rect.right) - docElem.clientLeft,
	    top: Math.round(rect.top) - docElem.clientTop,
	    bottom: Math.round(rect.bottom) - docElem.clientTop
	  };
	}

	module.exports = getElementRect;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var getDocumentScrollElement = __webpack_require__(76);
	var getUnboundedScrollPosition = __webpack_require__(77);

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are bounded. This means that if the scroll position is
	 * negative or exceeds the element boundaries (which is possible using inertial
	 * scrolling), you will get zero or the maximum scroll position, respectively.
	 *
	 * If you need the unbound scroll position, use `getUnboundedScrollPosition`.
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	function getScrollPosition(scrollable) {
	  var documentScrollElement = getDocumentScrollElement();
	  if (scrollable === window) {
	    scrollable = documentScrollElement;
	  }
	  var scrollPosition = getUnboundedScrollPosition(scrollable);

	  var viewport = scrollable === documentScrollElement ? document.documentElement : scrollable;

	  var xMax = scrollable.scrollWidth - viewport.clientWidth;
	  var yMax = scrollable.scrollHeight - viewport.clientHeight;

	  scrollPosition.x = Math.max(0, Math.min(scrollPosition.x, xMax));
	  scrollPosition.y = Math.max(0, Math.min(scrollPosition.y, yMax));

	  return scrollPosition;
	}

	module.exports = getScrollPosition;

/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var isWebkit = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('AppleWebKit') > -1;

	/**
	 * Gets the element with the document scroll properties such as `scrollLeft` and
	 * `scrollHeight`. This may differ across different browsers.
	 *
	 * NOTE: The return value can be null if the DOM is not yet ready.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */
	function getDocumentScrollElement(doc) {
	  doc = doc || document;
	  return !isWebkit && doc.compatMode === 'CSS1Compat' ? doc.documentElement : doc.body;
	}

	module.exports = getDocumentScrollElement;

/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */

	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	function getViewportWidth() {
	  var width = void 0;
	  if (document.documentElement) {
	    width = document.documentElement.clientWidth;
	  }

	  if (!width && document.body) {
	    width = document.body.clientWidth;
	  }

	  return width || 0;
	} /**
	   * Copyright (c) 2013-present, Facebook, Inc.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * 
	   * @typechecks
	   */

	function getViewportHeight() {
	  var height = void 0;
	  if (document.documentElement) {
	    height = document.documentElement.clientHeight;
	  }

	  if (!height && document.body) {
	    height = document.body.clientHeight;
	  }

	  return height || 0;
	}

	/**
	 * Gets the viewport dimensions including any scrollbars.
	 */
	function getViewportDimensions() {
	  return {
	    width: window.innerWidth || getViewportWidth(),
	    height: window.innerHeight || getViewportHeight()
	  };
	}

	/**
	 * Gets the viewport dimensions excluding any scrollbars.
	 */
	getViewportDimensions.withoutScrollbars = function () {
	  return {
	    width: getViewportWidth(),
	    height: getViewportHeight()
	  };
	};

	module.exports = getViewportDimensions;

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} className
	 * @return {string}
	 */

	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass = void 0;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorDragHandler
	 * @typechecks
	 * 
	 */

	'use strict';

	var DataTransfer = __webpack_require__(81);
	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);

	var findAncestorOffsetKey = __webpack_require__(84);
	var getTextContentFromFiles = __webpack_require__(86);
	var getUpdatedSelectionState = __webpack_require__(87);
	var nullthrows = __webpack_require__(40);

	var isEventHandled = __webpack_require__(88);

	/**
	 * Get a SelectionState for the supplied mouse event.
	 */
	function getSelectionForEvent(event, editorState) {
	  var node = null;
	  var offset = null;

	  if (typeof document.caretRangeFromPoint === 'function') {
	    var dropRange = document.caretRangeFromPoint(event.x, event.y);
	    node = dropRange.startContainer;
	    offset = dropRange.startOffset;
	  } else if (event.rangeParent) {
	    node = event.rangeParent;
	    offset = event.rangeOffset;
	  } else {
	    return null;
	  }

	  node = nullthrows(node);
	  offset = nullthrows(offset);
	  var offsetKey = nullthrows(findAncestorOffsetKey(node));

	  return getUpdatedSelectionState(editorState, offsetKey, offset, offsetKey, offset);
	}

	var DraftEditorDragHandler = {
	  /**
	   * Drag originating from input terminated.
	   */
	  onDragEnd: function onDragEnd() {
	    this.exitCurrentMode();
	  },

	  /**
	   * Handle data being dropped.
	   */
	  onDrop: function onDrop(e) {
	    var _this = this;

	    var data = new DataTransfer(e.nativeEvent.dataTransfer);

	    var editorState = this.props.editorState;
	    var dropSelection = getSelectionForEvent(e.nativeEvent, editorState);

	    e.preventDefault();
	    this.exitCurrentMode();

	    if (dropSelection == null) {
	      return;
	    }

	    var files = data.getFiles();
	    if (files.length > 0) {
	      if (this.props.handleDroppedFiles && isEventHandled(this.props.handleDroppedFiles(dropSelection, files))) {
	        return;
	      }

	      getTextContentFromFiles(files, function (fileText) {
	        fileText && _this.update(insertTextAtSelection(editorState, nullthrows(dropSelection), // flow wtf
	        fileText));
	      });
	      return;
	    }

	    var dragType = this._internalDrag ? 'internal' : 'external';
	    if (this.props.handleDrop && isEventHandled(this.props.handleDrop(dropSelection, data, dragType))) {
	      return;
	    }

	    if (this._internalDrag) {
	      this.update(moveText(editorState, dropSelection));
	      return;
	    }

	    this.update(insertTextAtSelection(editorState, dropSelection, data.getText()));
	  }

	};

	function moveText(editorState, targetSelection) {
	  var newContentState = DraftModifier.moveText(editorState.getCurrentContent(), editorState.getSelection(), targetSelection);
	  return EditorState.push(editorState, newContentState, 'insert-fragment');
	}

	/**
	 * Insert text at a specified selection.
	 */
	function insertTextAtSelection(editorState, selection, text) {
	  var newContentState = DraftModifier.insertText(editorState.getCurrentContent(), selection, text, editorState.getCurrentInlineStyle());
	  return EditorState.push(editorState, newContentState, 'insert-fragment');
	}

	module.exports = DraftEditorDragHandler;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var PhotosMimeType = __webpack_require__(82);

	var createArrayFromMixed = __webpack_require__(83);
	var emptyFunction = __webpack_require__(32);

	var CR_LF_REGEX = new RegExp('\r\n', 'g');
	var LF_ONLY = '\n';

	var RICH_TEXT_TYPES = {
	  'text/rtf': 1,
	  'text/html': 1
	};

	/**
	 * If DataTransferItem is a file then return the Blob of data.
	 *
	 * @param {object} item
	 * @return {?blob}
	 */
	function getFileFromDataTransfer(item) {
	  if (item.kind == 'file') {
	    return item.getAsFile();
	  }
	}

	var DataTransfer = function () {
	  /**
	   * @param {object} data
	   */

	  function DataTransfer(data) {
	    _classCallCheck(this, DataTransfer);

	    this.data = data;

	    // Types could be DOMStringList or array
	    this.types = data.types ? createArrayFromMixed(data.types) : [];
	  }

	  /**
	   * Is this likely to be a rich text data transfer?
	   *
	   * @return {boolean}
	   */


	  DataTransfer.prototype.isRichText = function isRichText() {
	    // If HTML is available, treat this data as rich text. This way, we avoid
	    // using a pasted image if it is packaged with HTML -- this may occur with
	    // pastes from MS Word, for example.  However this is only rich text if
	    // there's accompanying text.
	    if (this.getHTML() && this.getText()) {
	      return true;
	    }

	    // When an image is copied from a preview window, you end up with two
	    // DataTransferItems one of which is a file's metadata as text.  Skip those.
	    if (this.isImage()) {
	      return false;
	    }

	    return this.types.some(function (type) {
	      return RICH_TEXT_TYPES[type];
	    });
	  };

	  /**
	   * Get raw text.
	   *
	   * @return {?string}
	   */


	  DataTransfer.prototype.getText = function getText() {
	    var text;
	    if (this.data.getData) {
	      if (!this.types.length) {
	        text = this.data.getData('Text');
	      } else if (this.types.indexOf('text/plain') != -1) {
	        text = this.data.getData('text/plain');
	      }
	    }
	    return text ? text.replace(CR_LF_REGEX, LF_ONLY) : null;
	  };

	  /**
	   * Get HTML paste data
	   *
	   * @return {?string}
	   */


	  DataTransfer.prototype.getHTML = function getHTML() {
	    if (this.data.getData) {
	      if (!this.types.length) {
	        return this.data.getData('Text');
	      } else if (this.types.indexOf('text/html') != -1) {
	        return this.data.getData('text/html');
	      }
	    }
	  };

	  /**
	   * Is this a link data transfer?
	   *
	   * @return {boolean}
	   */


	  DataTransfer.prototype.isLink = function isLink() {
	    return this.types.some(function (type) {
	      return type.indexOf('Url') != -1 || type.indexOf('text/uri-list') != -1 || type.indexOf('text/x-moz-url');
	    });
	  };

	  /**
	   * Get a link url.
	   *
	   * @return {?string}
	   */


	  DataTransfer.prototype.getLink = function getLink() {
	    if (this.data.getData) {
	      if (this.types.indexOf('text/x-moz-url') != -1) {
	        var url = this.data.getData('text/x-moz-url').split('\n');
	        return url[0];
	      }
	      return this.types.indexOf('text/uri-list') != -1 ? this.data.getData('text/uri-list') : this.data.getData('url');
	    }

	    return null;
	  };

	  /**
	   * Is this an image data transfer?
	   *
	   * @return {boolean}
	   */


	  DataTransfer.prototype.isImage = function isImage() {
	    var isImage = this.types.some(function (type) {
	      // Firefox will have a type of application/x-moz-file for images during
	      // dragging
	      return type.indexOf('application/x-moz-file') != -1;
	    });

	    if (isImage) {
	      return true;
	    }

	    var items = this.getFiles();
	    for (var i = 0; i < items.length; i++) {
	      var type = items[i].type;
	      if (!PhotosMimeType.isImage(type)) {
	        return false;
	      }
	    }

	    return true;
	  };

	  DataTransfer.prototype.getCount = function getCount() {
	    if (this.data.hasOwnProperty('items')) {
	      return this.data.items.length;
	    } else if (this.data.hasOwnProperty('mozItemCount')) {
	      return this.data.mozItemCount;
	    } else if (this.data.files) {
	      return this.data.files.length;
	    }
	    return null;
	  };

	  /**
	   * Get files.
	   *
	   * @return {array}
	   */


	  DataTransfer.prototype.getFiles = function getFiles() {
	    if (this.data.items) {
	      // createArrayFromMixed doesn't properly handle DataTransferItemLists.
	      return Array.prototype.slice.call(this.data.items).map(getFileFromDataTransfer).filter(emptyFunction.thatReturnsArgument);
	    } else if (this.data.files) {
	      return Array.prototype.slice.call(this.data.files);
	    } else {
	      return [];
	    }
	  };

	  /**
	   * Are there any files to fetch?
	   *
	   * @return {boolean}
	   */


	  DataTransfer.prototype.hasFiles = function hasFiles() {
	    return this.getFiles().length > 0;
	  };

	  return DataTransfer;
	}();

	module.exports = DataTransfer;

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	var PhotosMimeType = {
	  isImage: function isImage(mimeString) {
	    return getParts(mimeString)[0] === 'image';
	  },
	  isJpeg: function isJpeg(mimeString) {
	    var parts = getParts(mimeString);
	    return PhotosMimeType.isImage(mimeString) && (
	    // see http://fburl.com/10972194
	    parts[1] === 'jpeg' || parts[1] === 'pjpeg');
	  }
	};

	function getParts(mimeString) {
	  return mimeString.split('/');
	}

	module.exports = PhotosMimeType;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var invariant = __webpack_require__(18);

	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;

	  // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
	  // in old versions of Safari).
	  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;

	  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;

	  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;

	  !(typeof obj.callee !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;

	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }

	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}

	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return(
	    // not null/false
	    !!obj && (
	    // arrays are objects, NodeLists are functions in Safari
	    typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    'length' in obj &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    typeof obj.nodeType != 'number' && (
	    // a real array
	    Array.isArray(obj) ||
	    // arguments
	    'callee' in obj ||
	    // HTMLCollection/NodeList
	    'item' in obj)
	  );
	}

	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}

	module.exports = createArrayFromMixed;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findAncestorOffsetKey
	 * @typechecks
	 * 
	 */

	'use strict';

	var getSelectionOffsetKeyForNode = __webpack_require__(85);

	/**
	 * Get the key from the node's nearest offset-aware ancestor.
	 */
	function findAncestorOffsetKey(node) {
	  var searchNode = node;
	  while (searchNode && searchNode !== document.documentElement) {
	    var key = getSelectionOffsetKeyForNode(searchNode);
	    if (key != null) {
	      return key;
	    }
	    searchNode = searchNode.parentNode;
	  }
	  return null;
	}

	module.exports = findAncestorOffsetKey;

/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getSelectionOffsetKeyForNode
	 * @typechecks
	 * 
	 */

	'use strict';

	/**
	 * Get offset key from a node or it's child nodes. Return the first offset key
	 * found on the DOM tree of given node.
	 */

	function getSelectionOffsetKeyForNode(node) {
	  if (node instanceof Element) {
	    var offsetKey = node.getAttribute('data-offset-key');
	    if (offsetKey) {
	      return offsetKey;
	    }
	    for (var ii = 0; ii < node.childNodes.length; ii++) {
	      var childOffsetKey = getSelectionOffsetKeyForNode(node.childNodes[ii]);
	      if (childOffsetKey) {
	        return childOffsetKey;
	      }
	    }
	  }
	  return null;
	}

	module.exports = getSelectionOffsetKeyForNode;

/***/ },
/* 86 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentFromFiles
	 * 
	 */

	'use strict';

	var TEXT_CLIPPING_REGEX = /\.textClipping$/;

	var TEXT_TYPES = {
	  'text/plain': true,
	  'text/html': true,
	  'text/rtf': true
	};

	// Somewhat arbitrary upper bound on text size. Let's not lock up the browser.
	var TEXT_SIZE_UPPER_BOUND = 5000;

	/**
	 * Extract the text content from a file list.
	 */
	function getTextContentFromFiles(files, callback) {
	  var readCount = 0;
	  var results = [];
	  files.forEach(function ( /*blob*/file) {
	    readFile(file, function ( /*string*/text) {
	      readCount++;
	      text && results.push(text.slice(0, TEXT_SIZE_UPPER_BOUND));
	      if (readCount == files.length) {
	        callback(results.join('\r'));
	      }
	    });
	  });
	}

	/**
	 * todo isaac: Do work to turn html/rtf into a content fragment.
	 */
	function readFile(file, callback) {
	  if (!global.FileReader || file.type && !(file.type in TEXT_TYPES)) {
	    callback('');
	    return;
	  }

	  if (file.type === '') {
	    var contents = '';
	    // Special-case text clippings, which have an empty type but include
	    // `.textClipping` in the file name. `readAsText` results in an empty
	    // string for text clippings, so we force the file name to serve
	    // as the text value for the file.
	    if (TEXT_CLIPPING_REGEX.test(file.name)) {
	      contents = file.name.replace(TEXT_CLIPPING_REGEX, '');
	    }
	    callback(contents);
	    return;
	  }

	  var reader = new FileReader();
	  reader.onload = function () {
	    callback(reader.result);
	  };
	  reader.onerror = function () {
	    callback('');
	  };
	  reader.readAsText(file);
	}

	module.exports = getTextContentFromFiles;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUpdatedSelectionState
	 * 
	 */

	'use strict';

	var DraftOffsetKey = __webpack_require__(67);

	var nullthrows = __webpack_require__(40);

	function getUpdatedSelectionState(editorState, anchorKey, anchorOffset, focusKey, focusOffset) {
	  var selection = nullthrows(editorState.getSelection());
	  if (process.env.NODE_ENV !== 'production') {
	    if (!anchorKey || !focusKey) {
	      /*eslint-disable no-console */
	      console.warn('Invalid selection state.', arguments, editorState.toJS());
	      /*eslint-enable no-console */
	      return selection;
	    }
	  }

	  var anchorPath = DraftOffsetKey.decode(anchorKey);
	  var anchorBlockKey = anchorPath.blockKey;
	  var anchorLeaf = editorState.getBlockTree(anchorBlockKey).getIn([anchorPath.decoratorKey, 'leaves', anchorPath.leafKey]);

	  var focusPath = DraftOffsetKey.decode(focusKey);
	  var focusBlockKey = focusPath.blockKey;
	  var focusLeaf = editorState.getBlockTree(focusBlockKey).getIn([focusPath.decoratorKey, 'leaves', focusPath.leafKey]);

	  var anchorLeafStart = anchorLeaf.get('start');
	  var focusLeafStart = focusLeaf.get('start');

	  var anchorBlockOffset = anchorLeaf ? anchorLeafStart + anchorOffset : null;
	  var focusBlockOffset = focusLeaf ? focusLeafStart + focusOffset : null;

	  var areEqual = selection.getAnchorKey() === anchorBlockKey && selection.getAnchorOffset() === anchorBlockOffset && selection.getFocusKey() === focusBlockKey && selection.getFocusOffset() === focusBlockOffset;

	  if (areEqual) {
	    return selection;
	  }

	  var isBackward = false;
	  if (anchorBlockKey === focusBlockKey) {
	    var anchorLeafEnd = anchorLeaf.get('end');
	    var focusLeafEnd = focusLeaf.get('end');
	    if (focusLeafStart === anchorLeafStart && focusLeafEnd === anchorLeafEnd) {
	      isBackward = focusOffset < anchorOffset;
	    } else {
	      isBackward = focusLeafStart < anchorLeafStart;
	    }
	  } else {
	    var startKey = editorState.getCurrentContent().getBlockMap().keySeq().skipUntil(function (v) {
	      return v === anchorBlockKey || v === focusBlockKey;
	    }).first();
	    isBackward = startKey === focusBlockKey;
	  }

	  return selection.merge({
	    anchorKey: anchorBlockKey,
	    anchorOffset: anchorBlockOffset,
	    focusKey: focusBlockKey,
	    focusOffset: focusBlockOffset,
	    isBackward: isBackward
	  });
	}

	module.exports = getUpdatedSelectionState;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventHandled
	 * @typechecks
	 * 
	 */

	'use strict';

	/**
	 * Utility method for determining whether or not the value returned
	 * from a handler indicates that it was handled.
	 */
	function isEventHandled(value) {
	  return value === 'handled' || value === true;
	}

	module.exports = isEventHandled;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorEditHandler
	 * 
	 */

	'use strict';

	var onBeforeInput = __webpack_require__(90);
	var onBlur = __webpack_require__(91);
	var onCompositionStart = __webpack_require__(92);
	var onCopy = __webpack_require__(93);
	var onCut = __webpack_require__(95);
	var onDragOver = __webpack_require__(96);
	var onDragStart = __webpack_require__(97);
	var onFocus = __webpack_require__(98);
	var onInput = __webpack_require__(99);
	var onKeyDown = __webpack_require__(100);
	var onPaste = __webpack_require__(122);
	var onSelect = __webpack_require__(128);

	var DraftEditorEditHandler = {
	  onBeforeInput: onBeforeInput,
	  onBlur: onBlur,
	  onCompositionStart: onCompositionStart,
	  onCopy: onCopy,
	  onCut: onCut,
	  onDragOver: onDragOver,
	  onDragStart: onDragStart,
	  onFocus: onFocus,
	  onInput: onInput,
	  onKeyDown: onKeyDown,
	  onPaste: onPaste,
	  onSelect: onSelect
	};

	module.exports = DraftEditorEditHandler;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnBeforeInput
	 * 
	 */

	'use strict';

	var BlockTree = __webpack_require__(31);
	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);
	var UserAgent = __webpack_require__(55);

	var getEntityKeyForSelection = __webpack_require__(48);
	var isSelectionAtLeafStart = __webpack_require__(49);
	var nullthrows = __webpack_require__(40);

	var isEventHandled = __webpack_require__(88);

	// When nothing is focused, Firefox regards two characters, `'` and `/`, as
	// commands that should open and focus the "quickfind" search bar. This should
	// *never* happen while a contenteditable is focused, but as of v28, it
	// sometimes does, even when the keypress event target is the contenteditable.
	// This breaks the input. Special case these characters to ensure that when
	// they are typed, we prevent default on the event to make sure not to
	// trigger quickfind.
	var FF_QUICKFIND_CHAR = '\'';
	var FF_QUICKFIND_LINK_CHAR = '\/';
	var isFirefox = UserAgent.isBrowser('Firefox');

	function mustPreventDefaultForCharacter(character) {
	  return isFirefox && (character == FF_QUICKFIND_CHAR || character == FF_QUICKFIND_LINK_CHAR);
	}

	/**
	 * Replace the current selection with the specified text string, with the
	 * inline style and entity key applied to the newly inserted text.
	 */
	function replaceText(editorState, text, inlineStyle, entityKey) {
	  var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), text, inlineStyle, entityKey);
	  return EditorState.push(editorState, contentState, 'insert-characters');
	}

	/**
	 * When `onBeforeInput` executes, the browser is attempting to insert a
	 * character into the editor. Apply this character data to the document,
	 * allowing native insertion if possible.
	 *
	 * Native insertion is encouraged in order to limit re-rendering and to
	 * preserve spellcheck highlighting, which disappears or flashes if re-render
	 * occurs on the relevant text nodes.
	 */
	function editOnBeforeInput(e) {
	  var chars = e.data;

	  // In some cases (ex: IE ideographic space insertion) no character data
	  // is provided. There's nothing to do when this happens.
	  if (!chars) {
	    return;
	  }

	  // Allow the top-level component to handle the insertion manually. This is
	  // useful when triggering interesting behaviors for a character insertion,
	  // Simple examples: replacing a raw text ':)' with a smile emoji or image
	  // decorator, or setting a block to be a list item after typing '- ' at the
	  // start of the block.
	  if (this.props.handleBeforeInput && isEventHandled(this.props.handleBeforeInput(chars))) {
	    e.preventDefault();
	    return;
	  }

	  // If selection is collapsed, conditionally allow native behavior. This
	  // reduces re-renders and preserves spellcheck highlighting. If the selection
	  // is not collapsed, we will re-render.
	  var editorState = this.props.editorState;
	  var selection = editorState.getSelection();

	  if (!selection.isCollapsed()) {
	    e.preventDefault();
	    this.update(replaceText(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())));
	    return;
	  }

	  var mayAllowNative = !isSelectionAtLeafStart(editorState);
	  var newEditorState = replaceText(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection()));

	  if (!mayAllowNative) {
	    e.preventDefault();
	    this.update(newEditorState);
	    return;
	  }

	  var anchorKey = selection.getAnchorKey();
	  var anchorTree = editorState.getBlockTree(anchorKey);

	  // Check the old and new "fingerprints" of the current block to determine
	  // whether this insertion requires any addition or removal of text nodes,
	  // in which case we would prevent the native character insertion.
	  var originalFingerprint = BlockTree.getFingerprint(anchorTree);
	  var newFingerprint = BlockTree.getFingerprint(newEditorState.getBlockTree(anchorKey));

	  if (mustPreventDefaultForCharacter(chars) || originalFingerprint !== newFingerprint || nullthrows(newEditorState.getDirectionMap()).get(anchorKey) !== nullthrows(editorState.getDirectionMap()).get(anchorKey)) {
	    e.preventDefault();
	  } else {
	    // The native event is allowed to occur.
	    newEditorState = EditorState.set(newEditorState, {
	      nativelyRenderedContent: newEditorState.getCurrentContent()
	    });
	  }

	  this.update(newEditorState);
	}

	module.exports = editOnBeforeInput;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnBlur
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);
	var UserAgent = __webpack_require__(55);

	var getActiveElement = __webpack_require__(66);

	var isWebKit = UserAgent.isEngine('WebKit');

	function editOnBlur(e) {
	  // Webkit has a bug in which blurring a contenteditable by clicking on
	  // other active elements will trigger the `blur` event but will not remove
	  // the DOM selection from the contenteditable. We therefore force the
	  // issue to be certain, checking whether the active element is `body`
	  // to force it when blurring occurs within the window (as opposed to
	  // clicking to another tab or window).
	  if (isWebKit && getActiveElement() === document.body) {
	    global.getSelection().removeAllRanges();
	  }

	  var editorState = this.props.editorState;
	  var currentSelection = editorState.getSelection();
	  if (!currentSelection.getHasFocus()) {
	    return;
	  }

	  var selection = currentSelection.set('hasFocus', false);
	  this.props.onBlur && this.props.onBlur(e);
	  this.update(EditorState.acceptSelection(editorState, selection));
	}

	module.exports = editOnBlur;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnCompositionStart
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);

	/**
	 * The user has begun using an IME input system. Switching to `composite` mode
	 * allows handling composition input and disables other edit behavior.
	 */
	function editOnCompositionStart() {
	  this.setRenderGuard();
	  this.setMode('composite');
	  this.update(EditorState.set(this.props.editorState, { inCompositionMode: true }));
	}

	module.exports = editOnCompositionStart;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnCopy
	 * 
	 */

	'use strict';

	var getFragmentFromSelection = __webpack_require__(94);

	/**
	 * If we have a selection, create a ContentState fragment and store
	 * it in our internal clipboard. Subsequent paste events will use this
	 * fragment if no external clipboard data is supplied.
	 */
	function editOnCopy(e) {
	  var editorState = this.props.editorState;
	  var selection = editorState.getSelection();

	  // No selection, so there's nothing to copy.
	  if (selection.isCollapsed()) {
	    e.preventDefault();
	    return;
	  }

	  this.setClipboard(getFragmentFromSelection(this.props.editorState));
	}

	module.exports = editOnCopy;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getFragmentFromSelection
	 * 
	 */

	'use strict';

	var getContentStateFragment = __webpack_require__(21);

	function getFragmentFromSelection(editorState) {
	  var selectionState = editorState.getSelection();

	  if (selectionState.isCollapsed()) {
	    return null;
	  }

	  return getContentStateFragment(editorState.getCurrentContent(), selectionState);
	}

	module.exports = getFragmentFromSelection;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnCut
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);
	var Style = __webpack_require__(69);

	var getFragmentFromSelection = __webpack_require__(94);
	var getScrollPosition = __webpack_require__(75);

	/**
	 * On `cut` events, native behavior is allowed to occur so that the system
	 * clipboard is set properly. This means that we need to take steps to recover
	 * the editor DOM state after the `cut` has occurred in order to maintain
	 * control of the component.
	 *
	 * In addition, we can keep a copy of the removed fragment, including all
	 * styles and entities, for use as an internal paste.
	 */
	function editOnCut(e) {
	  var _this = this;

	  var editorState = this.props.editorState;
	  var selection = editorState.getSelection();

	  // No selection, so there's nothing to cut.
	  if (selection.isCollapsed()) {
	    e.preventDefault();
	    return;
	  }

	  // Track the current scroll position so that it can be forced back in place
	  // after the editor regains control of the DOM.
	  var scrollParent = Style.getScrollParent(e.target);

	  var _getScrollPosition = getScrollPosition(scrollParent);

	  var x = _getScrollPosition.x;
	  var y = _getScrollPosition.y;


	  var fragment = getFragmentFromSelection(editorState);
	  this.setClipboard(fragment);

	  // Set `cut` mode to disable all event handling temporarily.
	  this.setRenderGuard();
	  this.setMode('cut');

	  // Let native `cut` behavior occur, then recover control.
	  setTimeout(function () {
	    _this.restoreEditorDOM({ x: x, y: y });
	    _this.removeRenderGuard();
	    _this.exitCurrentMode();
	    _this.update(removeFragment(editorState));
	  }, 0);
	}

	function removeFragment(editorState) {
	  var newContent = DraftModifier.removeRange(editorState.getCurrentContent(), editorState.getSelection(), 'forward');
	  return EditorState.push(editorState, newContent, 'remove-range');
	}

	module.exports = editOnCut;

/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnDragOver
	 * 
	 */

	'use strict';

	/**
	 * Drag behavior has begun from outside the editor element.
	 */

	function editOnDragOver(e) {
	  this._internalDrag = false;
	  this.setMode('drag');
	  e.preventDefault();
	}

	module.exports = editOnDragOver;

/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnDragStart
	 * 
	 */

	'use strict';

	/**
	 * A `dragstart` event has begun within the text editor component.
	 */

	function editOnDragStart() {
	  this._internalDrag = true;
	  this.setMode('drag');
	}

	module.exports = editOnDragStart;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnFocus
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);

	function editOnFocus(e) {
	  var editorState = this.props.editorState;
	  var currentSelection = editorState.getSelection();
	  if (currentSelection.getHasFocus()) {
	    return;
	  }

	  var selection = currentSelection.set('hasFocus', true);
	  this.props.onFocus && this.props.onFocus(e);

	  // When the tab containing this text editor is hidden and the user does a
	  // find-in-page in a _different_ tab, Chrome on Mac likes to forget what the
	  // selection was right after sending this focus event and (if you let it)
	  // moves the cursor back to the beginning of the editor, so we force the
	  // selection here instead of simply accepting it in order to preserve the
	  // old cursor position. See https://crbug.com/540004.
	  this.update(EditorState.forceSelection(editorState, selection));
	}

	module.exports = editOnFocus;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnInput
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(9);
	var DraftOffsetKey = __webpack_require__(67);
	var EditorState = __webpack_require__(30);
	var Entity = __webpack_require__(15);
	var UserAgent = __webpack_require__(55);

	var findAncestorOffsetKey = __webpack_require__(84);
	var nullthrows = __webpack_require__(40);

	var isGecko = UserAgent.isEngine('Gecko');

	var DOUBLE_NEWLINE = '\n\n';

	/**
	 * This function is intended to handle spellcheck and autocorrect changes,
	 * which occur in the DOM natively without any opportunity to observe or
	 * interpret the changes before they occur.
	 *
	 * The `input` event fires in contentEditable elements reliably for non-IE
	 * browsers, immediately after changes occur to the editor DOM. Since our other
	 * handlers override or otherwise handle cover other varieties of text input,
	 * the DOM state should match the model in all controlled input cases. Thus,
	 * when an `input` change leads to a DOM/model mismatch, the change should be
	 * due to a spellcheck change, and we can incorporate it into our model.
	 */
	function editOnInput() {
	  var domSelection = global.getSelection();

	  var anchorNode = domSelection.anchorNode;
	  var isCollapsed = domSelection.isCollapsed;

	  if (anchorNode.nodeType !== Node.TEXT_NODE) {
	    return;
	  }

	  var domText = anchorNode.textContent;
	  var editorState = this.props.editorState;

	  var offsetKey = nullthrows(findAncestorOffsetKey(anchorNode));

	  var _DraftOffsetKey$decod = DraftOffsetKey.decode(offsetKey);

	  var blockKey = _DraftOffsetKey$decod.blockKey;
	  var decoratorKey = _DraftOffsetKey$decod.decoratorKey;
	  var leafKey = _DraftOffsetKey$decod.leafKey;

	  var _editorState$getBlock = editorState.getBlockTree(blockKey).getIn([decoratorKey, 'leaves', leafKey]);

	  var start = _editorState$getBlock.start;
	  var end = _editorState$getBlock.end;


	  var content = editorState.getCurrentContent();
	  var block = content.getBlockForKey(blockKey);
	  var modelText = block.getText().slice(start, end);

	  // Special-case soft newlines here. If the DOM text ends in a soft newline,
	  // we will have manually inserted an extra soft newline in DraftEditorLeaf.
	  // We want to remove this extra newline for the purpose of our comparison
	  // of DOM and model text.
	  if (domText.endsWith(DOUBLE_NEWLINE)) {
	    domText = domText.slice(0, -1);
	  }

	  // No change -- the DOM is up to date. Nothing to do here.
	  if (domText === modelText) {
	    return;
	  }

	  var selection = editorState.getSelection();

	  // We'll replace the entire leaf with the text content of the target.
	  var targetRange = selection.merge({
	    anchorOffset: start,
	    focusOffset: end,
	    isBackward: false
	  });

	  var entityKey = block.getEntityAt(start);
	  var entity = entityKey && Entity.get(entityKey);
	  var entityType = entity && entity.getMutability();
	  var preserveEntity = entityType === 'MUTABLE';

	  // Immutable or segmented entities cannot properly be handled by the
	  // default browser undo, so we have to use a different change type to
	  // force using our internal undo method instead of falling through to the
	  // native browser undo.
	  var changeType = preserveEntity ? 'spellcheck-change' : 'apply-entity';

	  var newContent = DraftModifier.replaceText(content, targetRange, domText, block.getInlineStyleAt(start), preserveEntity ? block.getEntityAt(start) : null);

	  var anchorOffset, focusOffset, startOffset, endOffset;

	  if (isGecko) {
	    // Firefox selection does not change while the context menu is open, so
	    // we preserve the anchor and focus values of the DOM selection.
	    anchorOffset = domSelection.anchorOffset;
	    focusOffset = domSelection.focusOffset;
	    startOffset = start + Math.min(anchorOffset, focusOffset);
	    endOffset = startOffset + Math.abs(anchorOffset - focusOffset);
	    anchorOffset = startOffset;
	    focusOffset = endOffset;
	  } else {
	    // Browsers other than Firefox may adjust DOM selection while the context
	    // menu is open, and Safari autocorrect is prone to providing an inaccurate
	    // DOM selection. Don't trust it. Instead, use our existing SelectionState
	    // and adjust it based on the number of characters changed during the
	    // mutation.
	    var charDelta = domText.length - modelText.length;
	    startOffset = selection.getStartOffset();
	    endOffset = selection.getEndOffset();

	    anchorOffset = isCollapsed ? endOffset + charDelta : startOffset;
	    focusOffset = endOffset + charDelta;
	  }

	  // Segmented entities are completely or partially removed when their
	  // text content changes. For this case we do not want any text to be selected
	  // after the change, so we are not merging the selection.
	  var contentWithAdjustedDOMSelection = newContent.merge({
	    selectionBefore: content.getSelectionAfter(),
	    selectionAfter: selection.merge({ anchorOffset: anchorOffset, focusOffset: focusOffset })
	  });

	  this.update(EditorState.push(editorState, contentWithAdjustedDOMSelection, changeType));
	}

	module.exports = editOnInput;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnKeyDown
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);
	var KeyBindingUtil = __webpack_require__(101);
	var Keys = __webpack_require__(47);
	var SecondaryClipboard = __webpack_require__(102);
	var UserAgent = __webpack_require__(55);

	var keyCommandBackspaceToStartOfLine = __webpack_require__(103);
	var keyCommandBackspaceWord = __webpack_require__(110);
	var keyCommandDeleteWord = __webpack_require__(113);
	var keyCommandInsertNewline = __webpack_require__(115);
	var keyCommandPlainBackspace = __webpack_require__(116);
	var keyCommandPlainDelete = __webpack_require__(117);
	var keyCommandMoveSelectionToEndOfBlock = __webpack_require__(118);
	var keyCommandMoveSelectionToStartOfBlock = __webpack_require__(119);
	var keyCommandTransposeCharacters = __webpack_require__(120);
	var keyCommandUndo = __webpack_require__(121);

	var isEventHandled = __webpack_require__(88);

	var isOptionKeyCommand = KeyBindingUtil.isOptionKeyCommand;

	var isChrome = UserAgent.isBrowser('Chrome');

	/**
	 * Map a `DraftEditorCommand` command value to a corresponding function.
	 */
	function onKeyCommand(command, editorState) {
	  switch (command) {
	    case 'redo':
	      return EditorState.redo(editorState);
	    case 'delete':
	      return keyCommandPlainDelete(editorState);
	    case 'delete-word':
	      return keyCommandDeleteWord(editorState);
	    case 'backspace':
	      return keyCommandPlainBackspace(editorState);
	    case 'backspace-word':
	      return keyCommandBackspaceWord(editorState);
	    case 'backspace-to-start-of-line':
	      return keyCommandBackspaceToStartOfLine(editorState);
	    case 'split-block':
	      return keyCommandInsertNewline(editorState);
	    case 'transpose-characters':
	      return keyCommandTransposeCharacters(editorState);
	    case 'move-selection-to-start-of-block':
	      return keyCommandMoveSelectionToStartOfBlock(editorState);
	    case 'move-selection-to-end-of-block':
	      return keyCommandMoveSelectionToEndOfBlock(editorState);
	    case 'secondary-cut':
	      return SecondaryClipboard.cut(editorState);
	    case 'secondary-paste':
	      return SecondaryClipboard.paste(editorState);
	    default:
	      return editorState;
	  }
	}

	/**
	 * Intercept keydown behavior to handle keys and commands manually, if desired.
	 *
	 * Keydown combinations may be mapped to `DraftCommand` values, which may
	 * correspond to command functions that modify the editor or its contents.
	 *
	 * See `getDefaultKeyBinding` for defaults. Alternatively, the top-level
	 * component may provide a custom mapping via the `keyBindingFn` prop.
	 */
	function editOnKeyDown(e) {
	  var keyCode = e.which;
	  var editorState = this.props.editorState;

	  switch (keyCode) {
	    case Keys.RETURN:
	      e.preventDefault();
	      // The top-level component may manually handle newline insertion. If
	      // no special handling is performed, fall through to command handling.
	      if (this.props.handleReturn && isEventHandled(this.props.handleReturn(e))) {
	        return;
	      }
	      break;
	    case Keys.ESC:
	      e.preventDefault();
	      this.props.onEscape && this.props.onEscape(e);
	      return;
	    case Keys.TAB:
	      this.props.onTab && this.props.onTab(e);
	      return;
	    case Keys.UP:
	      this.props.onUpArrow && this.props.onUpArrow(e);
	      return;
	    case Keys.DOWN:
	      this.props.onDownArrow && this.props.onDownArrow(e);
	      return;
	    case Keys.SPACE:
	      // Handling for OSX where option + space scrolls.
	      if (isChrome && isOptionKeyCommand(e)) {
	        e.preventDefault();
	        // Insert a nbsp into the editor.
	        var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), ' ');
	        this.update(EditorState.push(editorState, contentState, 'insert-characters'));
	        return;
	      }
	  }

	  var command = this.props.keyBindingFn(e);

	  // If no command is specified, allow keydown event to continue.
	  if (!command) {
	    return;
	  }

	  if (command === 'undo') {
	    // Since undo requires some special updating behavior to keep the editor
	    // in sync, handle it separately.
	    keyCommandUndo(e, editorState, this.update);
	    return;
	  }

	  // At this point, we know that we're handling a command of some kind, so
	  // we don't want to insert a character following the keydown.
	  e.preventDefault();

	  // Allow components higher up the tree to handle the command first.
	  if (this.props.handleKeyCommand && isEventHandled(this.props.handleKeyCommand(command))) {
	    return;
	  }

	  var newState = onKeyCommand(command, editorState);
	  if (newState !== editorState) {
	    this.update(newState);
	  }
	}

	module.exports = editOnKeyDown;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyBindingUtil
	 * @typechecks
	 * 
	 */

	'use strict';

	var UserAgent = __webpack_require__(55);

	var isOSX = UserAgent.isPlatform('Mac OS X');

	var KeyBindingUtil = {
	  /**
	   * Check whether the ctrlKey modifier is *not* being used in conjunction with
	   * the altKey modifier. If they are combined, the result is an `altGraph`
	   * key modifier, which should not be handled by this set of key bindings.
	   */
	  isCtrlKeyCommand: function isCtrlKeyCommand(e) {
	    return !!e.ctrlKey && !e.altKey;
	  },

	  isOptionKeyCommand: function isOptionKeyCommand(e) {
	    return isOSX && e.altKey;
	  },

	  hasCommandModifier: function hasCommandModifier(e) {
	    return isOSX ? !!e.metaKey && !e.altKey : KeyBindingUtil.isCtrlKeyCommand(e);
	  }
	};

	module.exports = KeyBindingUtil;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SecondaryClipboard
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);

	var getContentStateFragment = __webpack_require__(21);
	var nullthrows = __webpack_require__(40);

	var clipboard = null;

	/**
	 * Some systems offer a "secondary" clipboard to allow quick internal cut
	 * and paste behavior. For instance, Ctrl+K (cut) and Ctrl+Y (paste).
	 */
	var SecondaryClipboard = {
	  cut: function cut(editorState) {
	    var content = editorState.getCurrentContent();
	    var selection = editorState.getSelection();
	    var targetRange = null;

	    if (selection.isCollapsed()) {
	      var anchorKey = selection.getAnchorKey();
	      var blockEnd = content.getBlockForKey(anchorKey).getLength();

	      if (blockEnd === selection.getAnchorOffset()) {
	        return editorState;
	      }

	      targetRange = selection.set('focusOffset', blockEnd);
	    } else {
	      targetRange = selection;
	    }

	    targetRange = nullthrows(targetRange);
	    clipboard = getContentStateFragment(content, targetRange);

	    var afterRemoval = DraftModifier.removeRange(content, targetRange, 'forward');

	    if (afterRemoval === content) {
	      return editorState;
	    }

	    return EditorState.push(editorState, afterRemoval, 'remove-range');
	  },

	  paste: function paste(editorState) {
	    if (!clipboard) {
	      return editorState;
	    }

	    var newContent = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), clipboard);

	    return EditorState.push(editorState, newContent, 'insert-fragment');
	  }
	};

	module.exports = SecondaryClipboard;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandBackspaceToStartOfLine
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);

	var expandRangeToStartOfLine = __webpack_require__(104);
	var getDraftEditorSelectionWithNodes = __webpack_require__(107);
	var moveSelectionBackward = __webpack_require__(108);
	var removeTextWithStrategy = __webpack_require__(109);

	function keyCommandBackspaceToStartOfLine(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    if (selection.isCollapsed() && selection.getAnchorOffset() === 0) {
	      return moveSelectionBackward(strategyState, 1);
	    }

	    var domSelection = global.getSelection();
	    var range = domSelection.getRangeAt(0);
	    range = expandRangeToStartOfLine(range);

	    return getDraftEditorSelectionWithNodes(strategyState, null, range.endContainer, range.endOffset, range.startContainer, range.startOffset).selectionState;
	  }, 'backward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  return EditorState.push(editorState, afterRemoval, 'remove-range');
	}

	module.exports = keyCommandBackspaceToStartOfLine;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule expandRangeToStartOfLine
	 * @typechecks
	 * 
	 */

	var UnicodeUtils = __webpack_require__(105);

	var getRangeClientRects = __webpack_require__(106);
	var invariant = __webpack_require__(18);

	/**
	 * Return the computed line height, in pixels, for the provided element.
	 */
	function getLineHeightPx(element) {
	  var computed = getComputedStyle(element);
	  var div = document.createElement('div');
	  div.style.fontFamily = computed.fontFamily;
	  div.style.fontSize = computed.fontSize;
	  div.style.fontStyle = computed.fontStyle;
	  div.style.fontWeight = computed.fontWeight;
	  div.style.lineHeight = computed.lineHeight;
	  div.style.position = 'absolute';
	  div.textContent = 'M';

	  // forced layout here
	  document.body.appendChild(div);
	  var rect = div.getBoundingClientRect();
	  document.body.removeChild(div);

	  return rect.height;
	}

	/**
	 * Return whether every ClientRect in the provided list lies on the same line.
	 *
	 * We assume that the rects on the same line all contain the baseline, so the
	 * lowest top line needs to be above the highest bottom line (i.e., if you were
	 * to project the rects onto the y-axis, their intersection would be nonempty).
	 *
	 * In addition, we require that no two boxes are lineHeight (or more) apart at
	 * either top or bottom, which helps protect against false positives for fonts
	 * with extremely large glyph heights (e.g., with a font size of 17px, Zapfino
	 * produces rects of height 58px!).
	 */
	function areRectsOnOneLine(rects, lineHeight) {
	  var minTop = Infinity;
	  var minBottom = Infinity;
	  var maxTop = -Infinity;
	  var maxBottom = -Infinity;

	  for (var ii = 0; ii < rects.length; ii++) {
	    var rect = rects[ii];
	    if (rect.width === 0 || rect.width === 1) {
	      // When a range starts or ends a soft wrap, many browsers (Chrome, IE,
	      // Safari) include an empty rect on the previous or next line. When the
	      // text lies in a container whose position is not integral (e.g., from
	      // margin: auto), Safari makes these empty rects have width 1 (instead of
	      // 0). Having one-pixel-wide characters seems unlikely (and most browsers
	      // report widths in subpixel precision anyway) so it's relatively safe to
	      // skip over them.
	      continue;
	    }
	    minTop = Math.min(minTop, rect.top);
	    minBottom = Math.min(minBottom, rect.bottom);
	    maxTop = Math.max(maxTop, rect.top);
	    maxBottom = Math.max(maxBottom, rect.bottom);
	  }

	  return maxTop <= minBottom && maxTop - minTop < lineHeight && maxBottom - minBottom < lineHeight;
	}

	/**
	 * Return the length of a node, as used by Range offsets.
	 */
	function getNodeLength(node) {
	  // http://www.w3.org/TR/dom/#concept-node-length
	  switch (node.nodeType) {
	    case Node.DOCUMENT_TYPE_NODE:
	      return 0;
	    case Node.TEXT_NODE:
	    case Node.PROCESSING_INSTRUCTION_NODE:
	    case Node.COMMENT_NODE:
	      return node.length;
	    default:
	      return node.childNodes.length;
	  }
	}

	/**
	 * Given a collapsed range, move the start position backwards as far as
	 * possible while the range still spans only a single line.
	 */
	function expandRangeToStartOfLine(range) {
	  !range.collapsed ? process.env.NODE_ENV !== 'production' ? invariant(false, 'expandRangeToStartOfLine: Provided range is not collapsed.') : invariant(false) : void 0;
	  range = range.cloneRange();

	  var containingElement = range.startContainer;
	  if (containingElement.nodeType !== 1) {
	    containingElement = containingElement.parentNode;
	  }
	  var lineHeight = getLineHeightPx(containingElement);

	  // Imagine our text looks like:
	  //   <div><span>once upon a time, there was a <em>boy
	  //   who lived</em> </span><q><strong>under^ the
	  //   stairs</strong> in a small closet.</q></div>
	  // where the caret represents the cursor. First, we crawl up the tree until
	  // the range spans multiple lines (setting the start point to before
	  // "<strong>", then before "<div>"), then at each level we do a search to
	  // find the latest point which is still on a previous line. We'll find that
	  // the break point is inside the span, then inside the <em>, then in its text
	  // node child, the actual break point before "who".

	  var bestContainer = range.endContainer;
	  var bestOffset = range.endOffset;
	  range.setStart(range.startContainer, 0);

	  while (areRectsOnOneLine(getRangeClientRects(range), lineHeight)) {
	    bestContainer = range.startContainer;
	    bestOffset = range.startOffset;
	    !bestContainer.parentNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Found unexpected detached subtree when traversing.') : invariant(false) : void 0;
	    range.setStartBefore(bestContainer);
	    if (bestContainer.nodeType === 1 && getComputedStyle(bestContainer).display !== 'inline') {
	      // The start of the line is never in a different block-level container.
	      break;
	    }
	  }

	  // In the above example, range now spans from "<div>" to "under",
	  // bestContainer is <div>, and bestOffset is 1 (index of <q> inside <div>)].
	  // Picking out which child to recurse into here is a special case since we
	  // don't want to check past <q> -- once we find that the final range starts
	  // in <span>, we can look at all of its children (and all of their children)
	  // to find the break point.

	  // At all times, (bestContainer, bestOffset) is the latest single-line start
	  // point that we know of.
	  var currentContainer = bestContainer;
	  var maxIndexToConsider = bestOffset - 1;

	  do {
	    var nodeValue = currentContainer.nodeValue;

	    for (var ii = maxIndexToConsider; ii >= 0; ii--) {
	      if (nodeValue != null && ii > 0 && UnicodeUtils.isSurrogatePair(nodeValue, ii - 1)) {
	        // We're in the middle of a surrogate pair -- skip over so we never
	        // return a range with an endpoint in the middle of a code point.
	        continue;
	      }

	      range.setStart(currentContainer, ii);
	      if (areRectsOnOneLine(getRangeClientRects(range), lineHeight)) {
	        bestContainer = currentContainer;
	        bestOffset = ii;
	      } else {
	        break;
	      }
	    }

	    if (ii === -1 || currentContainer.childNodes.length === 0) {
	      // If ii === -1, then (bestContainer, bestOffset), which is equal to
	      // (currentContainer, 0), was a single-line start point but a start
	      // point before currentContainer wasn't, so the line break seems to
	      // have occurred immediately after currentContainer's start tag
	      //
	      // If currentContainer.childNodes.length === 0, we're already at a
	      // terminal node (e.g., text node) and should return our current best.
	      break;
	    }

	    currentContainer = currentContainer.childNodes[ii];
	    maxIndexToConsider = getNodeLength(currentContainer);
	  } while (true);

	  range.setStart(bestContainer, bestOffset);
	  return range;
	}

	module.exports = expandRangeToStartOfLine;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/**
	 * Unicode-enabled replacesments for basic String functions.
	 *
	 * All the functions in this module assume that the input string is a valid
	 * UTF-16 encoding of a Unicode sequence. If it's not the case, the behavior
	 * will be undefined.
	 *
	 * WARNING: Since this module is typechecks-enforced, you may find new bugs
	 * when replacing normal String functions with ones provided here.
	 */

	'use strict';

	var invariant = __webpack_require__(18);

	// These two ranges are consecutive so anything in [HIGH_START, LOW_END] is a
	// surrogate code unit.
	var SURROGATE_HIGH_START = 0xD800;
	var SURROGATE_HIGH_END = 0xDBFF;
	var SURROGATE_LOW_START = 0xDC00;
	var SURROGATE_LOW_END = 0xDFFF;
	var SURROGATE_UNITS_REGEX = /[\uD800-\uDFFF]/;

	/**
	 * @param {number} codeUnit   A Unicode code-unit, in range [0, 0x10FFFF]
	 * @return {boolean}          Whether code-unit is in a surrogate (hi/low) range
	 */
	function isCodeUnitInSurrogateRange(codeUnit) {
	  return SURROGATE_HIGH_START <= codeUnit && codeUnit <= SURROGATE_LOW_END;
	}

	/**
	 * Returns whether the two characters starting at `index` form a surrogate pair.
	 * For example, given the string s = "\uD83D\uDE0A", (s, 0) returns true and
	 * (s, 1) returns false.
	 *
	 * @param {string} str
	 * @param {number} index
	 * @return {boolean}
	 */
	function isSurrogatePair(str, index) {
	  !(0 <= index && index < str.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'isSurrogatePair: Invalid index %s for string length %s.', index, str.length) : invariant(false) : void 0;
	  if (index + 1 === str.length) {
	    return false;
	  }
	  var first = str.charCodeAt(index);
	  var second = str.charCodeAt(index + 1);
	  return SURROGATE_HIGH_START <= first && first <= SURROGATE_HIGH_END && SURROGATE_LOW_START <= second && second <= SURROGATE_LOW_END;
	}

	/**
	 * @param {string} str  Non-empty string
	 * @return {boolean}    True if the input includes any surrogate code units
	 */
	function hasSurrogateUnit(str) {
	  return SURROGATE_UNITS_REGEX.test(str);
	}

	/**
	 * Return the length of the original Unicode character at given position in the
	 * String by looking into the UTF-16 code unit; that is equal to 1 for any
	 * non-surrogate characters in BMP ([U+0000..U+D7FF] and [U+E000, U+FFFF]); and
	 * returns 2 for the hi/low surrogates ([U+D800..U+DFFF]), which are in fact
	 * representing non-BMP characters ([U+10000..U+10FFFF]).
	 *
	 * Examples:
	 * - '\u0020' => 1
	 * - '\u3020' => 1
	 * - '\uD835' => 2
	 * - '\uD835\uDDEF' => 2
	 * - '\uDDEF' => 2
	 *
	 * @param {string} str  Non-empty string
	 * @param {number} pos  Position in the string to look for one code unit
	 * @return {number}      Number 1 or 2
	 */
	function getUTF16Length(str, pos) {
	  return 1 + isCodeUnitInSurrogateRange(str.charCodeAt(pos));
	}

	/**
	 * Fully Unicode-enabled replacement for String#length
	 *
	 * @param {string} str  Valid Unicode string
	 * @return {number}     The number of Unicode characters in the string
	 */
	function strlen(str) {
	  // Call the native functions if there's no surrogate char
	  if (!hasSurrogateUnit(str)) {
	    return str.length;
	  }

	  var len = 0;
	  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
	    len++;
	  }
	  return len;
	}

	/**
	 * Fully Unicode-enabled replacement for String#substr()
	 *
	 * @param {string} str      Valid Unicode string
	 * @param {number} start    Location in Unicode sequence to begin extracting
	 * @param {?number} length  The number of Unicode characters to extract
	 *                          (default: to the end of the string)
	 * @return {string}         Extracted sub-string
	 */
	function substr(str, start, length) {
	  start = start || 0;
	  length = length === undefined ? Infinity : length || 0;

	  // Call the native functions if there's no surrogate char
	  if (!hasSurrogateUnit(str)) {
	    return str.substr(start, length);
	  }

	  // Obvious cases
	  var size = str.length;
	  if (size <= 0 || start > size || length <= 0) {
	    return '';
	  }

	  // Find the actual starting position
	  var posA = 0;
	  if (start > 0) {
	    for (; start > 0 && posA < size; start--) {
	      posA += getUTF16Length(str, posA);
	    }
	    if (posA >= size) {
	      return '';
	    }
	  } else if (start < 0) {
	    for (posA = size; start < 0 && 0 < posA; start++) {
	      posA -= getUTF16Length(str, posA - 1);
	    }
	    if (posA < 0) {
	      posA = 0;
	    }
	  }

	  // Find the actual ending position
	  var posB = size;
	  if (length < size) {
	    for (posB = posA; length > 0 && posB < size; length--) {
	      posB += getUTF16Length(str, posB);
	    }
	  }

	  return str.substring(posA, posB);
	}

	/**
	 * Fully Unicode-enabled replacement for String#substring()
	 *
	 * @param {string} str    Valid Unicode string
	 * @param {number} start  Location in Unicode sequence to begin extracting
	 * @param {?number} end   Location in Unicode sequence to end extracting
	 *                        (default: end of the string)
	 * @return {string}       Extracted sub-string
	 */
	function substring(str, start, end) {
	  start = start || 0;
	  end = end === undefined ? Infinity : end || 0;

	  if (start < 0) {
	    start = 0;
	  }
	  if (end < 0) {
	    end = 0;
	  }

	  var length = Math.abs(end - start);
	  start = start < end ? start : end;
	  return substr(str, start, length);
	}

	/**
	 * Get a list of Unicode code-points from a String
	 *
	 * @param {string} str        Valid Unicode string
	 * @return {array<number>}    A list of code-points in [0..0x10FFFF]
	 */
	function getCodePoints(str) {
	  var codePoints = [];
	  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
	    codePoints.push(str.codePointAt(pos));
	  }
	  return codePoints;
	}

	var UnicodeUtils = {
	  getCodePoints: getCodePoints,
	  getUTF16Length: getUTF16Length,
	  hasSurrogateUnit: hasSurrogateUnit,
	  isCodeUnitInSurrogateRange: isCodeUnitInSurrogateRange,
	  isSurrogatePair: isSurrogatePair,
	  strlen: strlen,
	  substring: substring,
	  substr: substr
	};

	module.exports = UnicodeUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getRangeClientRects
	 * @typechecks
	 * 
	 */

	'use strict';

	var UserAgent = __webpack_require__(55);

	var invariant = __webpack_require__(18);

	var isChrome = UserAgent.isBrowser('Chrome');

	// In Chrome, the client rects will include the entire bounds of all nodes that
	// begin (have a start tag) within the selection, even if the selection does
	// not overlap the entire node. To resolve this, we split the range at each
	// start tag and join the client rects together.
	// https://code.google.com/p/chromium/issues/detail?id=324437
	/* eslint-disable consistent-return */
	function getRangeClientRectsChrome(range) {
	  var tempRange = range.cloneRange();
	  var clientRects = [];

	  for (var ancestor = range.endContainer; ancestor != null; ancestor = ancestor.parentNode) {
	    // If we've climbed up to the common ancestor, we can now use the
	    // original start point and stop climbing the tree.
	    var atCommonAncestor = ancestor === range.commonAncestorContainer;
	    if (atCommonAncestor) {
	      tempRange.setStart(range.startContainer, range.startOffset);
	    } else {
	      tempRange.setStart(tempRange.endContainer, 0);
	    }
	    var rects = Array.from(tempRange.getClientRects());
	    clientRects.push(rects);
	    if (atCommonAncestor) {
	      var _ref;

	      clientRects.reverse();
	      return (_ref = []).concat.apply(_ref, clientRects);
	    }
	    tempRange.setEndBefore(ancestor);
	  }

	   true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Found an unexpected detached subtree when getting range client rects.') : invariant(false) : void 0;
	}
	/* eslint-enable consistent-return */

	/**
	 * Like range.getClientRects() but normalizes for browser bugs.
	 */
	var getRangeClientRects = isChrome ? getRangeClientRectsChrome : function (range) {
	  return Array.from(range.getClientRects());
	};

	module.exports = getRangeClientRects;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getDraftEditorSelectionWithNodes
	 * @typechecks
	 * 
	 */

	'use strict';

	var findAncestorOffsetKey = __webpack_require__(84);
	var getSelectionOffsetKeyForNode = __webpack_require__(85);
	var getUpdatedSelectionState = __webpack_require__(87);
	var invariant = __webpack_require__(18);
	var nullthrows = __webpack_require__(40);

	/**
	 * Convert the current selection range to an anchor/focus pair of offset keys
	 * and values that can be interpreted by components.
	 */
	function getDraftEditorSelectionWithNodes(editorState, root, anchorNode, anchorOffset, focusNode, focusOffset) {
	  var anchorIsTextNode = anchorNode.nodeType === Node.TEXT_NODE;
	  var focusIsTextNode = focusNode.nodeType === Node.TEXT_NODE;

	  // If the selection range lies only on text nodes, the task is simple.
	  // Find the nearest offset-aware elements and use the
	  // offset values supplied by the selection range.
	  if (anchorIsTextNode && focusIsTextNode) {
	    return {
	      selectionState: getUpdatedSelectionState(editorState, nullthrows(findAncestorOffsetKey(anchorNode)), anchorOffset, nullthrows(findAncestorOffsetKey(focusNode)), focusOffset),
	      needsRecovery: false
	    };
	  }

	  var anchorPoint = null;
	  var focusPoint = null;
	  var needsRecovery = true;

	  // An element is selected. Convert this selection range into leaf offset
	  // keys and offset values for consumption at the component level. This
	  // is common in Firefox, where select-all and triple click behavior leads
	  // to entire elements being selected.
	  //
	  // Note that we use the `needsRecovery` parameter in the callback here. This
	  // is because when certain elements are selected, the behavior for subsequent
	  // cursor movement (e.g. via arrow keys) is uncertain and may not match
	  // expectations at the component level. For example, if an entire <div> is
	  // selected and the user presses the right arrow, Firefox keeps the selection
	  // on the <div>. If we allow subsequent keypresses to insert characters
	  // natively, they will be inserted into a browser-created text node to the
	  // right of that <div>. This is obviously undesirable.
	  //
	  // With the `needsRecovery` flag, we inform the caller that it is responsible
	  // for manually setting the selection state on the rendered document to
	  // ensure proper selection state maintenance.

	  if (anchorIsTextNode) {
	    anchorPoint = {
	      key: nullthrows(findAncestorOffsetKey(anchorNode)),
	      offset: anchorOffset
	    };
	    focusPoint = getPointForNonTextNode(root, focusNode, focusOffset);
	  } else if (focusIsTextNode) {
	    focusPoint = {
	      key: nullthrows(findAncestorOffsetKey(focusNode)),
	      offset: focusOffset
	    };
	    anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset);
	  } else {
	    anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset);
	    focusPoint = getPointForNonTextNode(root, focusNode, focusOffset);

	    // If the selection is collapsed on an empty block, don't force recovery.
	    // This way, on arrow key selection changes, the browser can move the
	    // cursor from a non-zero offset on one block, through empty blocks,
	    // to a matching non-zero offset on other text blocks.
	    if (anchorNode === focusNode && anchorOffset === focusOffset) {
	      needsRecovery = !!anchorNode.firstChild && anchorNode.firstChild.nodeName !== 'BR';
	    }
	  }

	  return {
	    selectionState: getUpdatedSelectionState(editorState, anchorPoint.key, anchorPoint.offset, focusPoint.key, focusPoint.offset),
	    needsRecovery: needsRecovery
	  };
	}

	/**
	 * Identify the first leaf descendant for the given node.
	 */
	function getFirstLeaf(node) {
	  while (node.firstChild && getSelectionOffsetKeyForNode(node.firstChild)) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Identify the last leaf descendant for the given node.
	 */
	function getLastLeaf(node) {
	  while (node.lastChild && getSelectionOffsetKeyForNode(node.lastChild)) {
	    node = node.lastChild;
	  }
	  return node;
	}

	function getPointForNonTextNode(editorRoot, startNode, childOffset) {
	  var node = startNode;
	  var offsetKey = findAncestorOffsetKey(node);

	  !(offsetKey != null || editorRoot && (editorRoot === node || editorRoot.firstChild === node)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Unknown node in selection range.') : invariant(false) : void 0;

	  // If the editorRoot is the selection, step downward into the content
	  // wrapper.
	  if (editorRoot === node) {
	    node = node.firstChild;
	    !(node instanceof Element && node.getAttribute('data-contents') === 'true') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid DraftEditorContents structure.') : invariant(false) : void 0;
	    if (childOffset > 0) {
	      childOffset = node.childNodes.length;
	    }
	  }

	  // If the child offset is zero and we have an offset key, we're done.
	  // If there's no offset key because the entire editor is selected,
	  // find the leftmost ("first") leaf in the tree and use that as the offset
	  // key.
	  if (childOffset === 0) {
	    var key = null;
	    if (offsetKey != null) {
	      key = offsetKey;
	    } else {
	      var firstLeaf = getFirstLeaf(node);
	      key = nullthrows(getSelectionOffsetKeyForNode(firstLeaf));
	    }
	    return { key: key, offset: 0 };
	  }

	  var nodeBeforeCursor = node.childNodes[childOffset - 1];
	  var leafKey = null;
	  var textLength = null;

	  if (!getSelectionOffsetKeyForNode(nodeBeforeCursor)) {
	    // Our target node may be a leaf or a text node, in which case we're
	    // already where we want to be and can just use the child's length as
	    // our offset.
	    leafKey = nullthrows(offsetKey);
	    textLength = getTextContentLength(nodeBeforeCursor);
	  } else {
	    // Otherwise, we'll look at the child to the left of the cursor and find
	    // the last leaf node in its subtree.
	    var lastLeaf = getLastLeaf(nodeBeforeCursor);
	    leafKey = nullthrows(getSelectionOffsetKeyForNode(lastLeaf));
	    textLength = getTextContentLength(lastLeaf);
	  }

	  return {
	    key: leafKey,
	    offset: textLength
	  };
	}

	/**
	 * Return the length of a node's textContent, regarding single newline
	 * characters as zero-length. This allows us to avoid problems with identifying
	 * the correct selection offset for empty blocks in IE, in which we
	 * render newlines instead of break tags.
	 */
	function getTextContentLength(node) {
	  var textContent = node.textContent;
	  return textContent === '\n' ? 0 : textContent.length;
	}

	module.exports = getDraftEditorSelectionWithNodes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule moveSelectionBackward
	 * 
	 */

	'use strict';

	/**
	 * Given a collapsed selection, move the focus `maxDistance` backward within
	 * the selected block. If the selection will go beyond the start of the block,
	 * move focus to the end of the previous block, but no further.
	 *
	 * This function is not Unicode-aware, so surrogate pairs will be treated
	 * as having length 2.
	 */
	function moveSelectionBackward(editorState, maxDistance) {
	  var selection = editorState.getSelection();
	  var content = editorState.getCurrentContent();
	  var key = selection.getStartKey();
	  var offset = selection.getStartOffset();

	  var focusKey = key;
	  var focusOffset = 0;

	  if (maxDistance > offset) {
	    var keyBefore = content.getKeyBefore(key);
	    if (keyBefore == null) {
	      focusKey = key;
	    } else {
	      focusKey = keyBefore;
	      var blockBefore = content.getBlockForKey(keyBefore);
	      focusOffset = blockBefore.getText().length;
	    }
	  } else {
	    focusOffset = offset - maxDistance;
	  }

	  return selection.merge({
	    focusKey: focusKey,
	    focusOffset: focusOffset,
	    isBackward: true
	  });
	}

	module.exports = moveSelectionBackward;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule removeTextWithStrategy
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(9);

	/**
	 * For a collapsed selection state, remove text based on the specified strategy.
	 * If the selection state is not collapsed, remove the entire selected range.
	 */
	function removeTextWithStrategy(editorState, strategy, direction) {
	  var selection = editorState.getSelection();
	  var content = editorState.getCurrentContent();
	  var target = selection;
	  if (selection.isCollapsed()) {
	    if (direction === 'forward') {
	      if (editorState.isSelectionAtEndOfContent()) {
	        return content;
	      }
	    } else if (editorState.isSelectionAtStartOfContent()) {
	      return content;
	    }

	    target = strategy(editorState);
	    if (target === selection) {
	      return content;
	    }
	  }
	  return DraftModifier.removeRange(content, target, direction);
	}

	module.exports = removeTextWithStrategy;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandBackspaceWord
	 * 
	 */

	'use strict';

	var DraftRemovableWord = __webpack_require__(111);
	var EditorState = __webpack_require__(30);

	var moveSelectionBackward = __webpack_require__(108);
	var removeTextWithStrategy = __webpack_require__(109);

	/**
	 * Delete the word that is left of the cursor, as well as any spaces or
	 * punctuation after the word.
	 */
	function keyCommandBackspaceWord(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    var offset = selection.getStartOffset();
	    // If there are no words before the cursor, remove the preceding newline.
	    if (offset === 0) {
	      return moveSelectionBackward(strategyState, 1);
	    }
	    var key = selection.getStartKey();
	    var content = strategyState.getCurrentContent();
	    var text = content.getBlockForKey(key).getText().slice(0, offset);
	    var toRemove = DraftRemovableWord.getBackward(text);
	    return moveSelectionBackward(strategyState, toRemove.length || 1);
	  }, 'backward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  return EditorState.push(editorState, afterRemoval, 'remove-range');
	}

	module.exports = keyCommandBackspaceWord;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftRemovableWord
	 * @typechecks
	 * 
	 */

	'use strict';

	var TokenizeUtil = __webpack_require__(112);

	var punctuation = TokenizeUtil.getPunctuation();

	// The apostrophe and curly single quotes behave in a curious way: when
	// surrounded on both sides by word characters, they behave as word chars; when
	// either neighbor is punctuation or an end of the string, they behave as
	// punctuation.
	var CHAMELEON_CHARS = '[\'‘’]';

	// Remove the underscore, which should count as part of the removable word. The
	// "chameleon chars" also count as punctuation in this regex.
	var WHITESPACE_AND_PUNCTUATION = '\\s|(?![_])' + punctuation;

	var DELETE_STRING = '^' + '(?:' + WHITESPACE_AND_PUNCTUATION + ')*' + '(?:' + CHAMELEON_CHARS + '|(?!' + WHITESPACE_AND_PUNCTUATION + ').)*' + '(?:(?!' + WHITESPACE_AND_PUNCTUATION + ').)';
	var DELETE_REGEX = new RegExp(DELETE_STRING);

	var BACKSPACE_STRING = '(?:(?!' + WHITESPACE_AND_PUNCTUATION + ').)' + '(?:' + CHAMELEON_CHARS + '|(?!' + WHITESPACE_AND_PUNCTUATION + ').)*' + '(?:' + WHITESPACE_AND_PUNCTUATION + ')*' + '$';
	var BACKSPACE_REGEX = new RegExp(BACKSPACE_STRING);

	function getRemovableWord(text, isBackward) {
	  var matches = isBackward ? BACKSPACE_REGEX.exec(text) : DELETE_REGEX.exec(text);
	  return matches ? matches[0] : text;
	}

	var DraftRemovableWord = {
	  getBackward: function getBackward(text) {
	    return getRemovableWord(text, true);
	  },

	  getForward: function getForward(text) {
	    return getRemovableWord(text, false);
	  }
	};

	module.exports = DraftRemovableWord;

/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @stub
	 * 
	 */

	'use strict';

	// \u00a1-\u00b1\u00b4-\u00b8\u00ba\u00bb\u00bf
	//             is latin supplement punctuation except fractions and superscript
	//             numbers
	// \u2010-\u2027\u2030-\u205e
	//             is punctuation from the general punctuation block:
	//             weird quotes, commas, bullets, dashes, etc.
	// \u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f
	//             is CJK punctuation
	// \uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65
	//             is some full-width/half-width punctuation
	// \u2E2E\u061f\u066a-\u066c\u061b\u060c\u060d\uFD3e\uFD3F
	//             is some Arabic punctuation marks
	// \u1801\u0964\u104a\u104b
	//             is misc. other language punctuation marks

	var PUNCTUATION = '[.,+*?$|#{}()\'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;' + '・、。〈-】〔-〟：-？！-／' + '［-｀｛-･⸮؟٪-٬؛،؍' + '﴾﴿᠁।၊။‐-‧‰-⁞' + '¡-±´-¸º»¿]';

	module.exports = {
	  getPunctuation: function getPunctuation() {
	    return PUNCTUATION;
	  }
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandDeleteWord
	 * 
	 */

	'use strict';

	var DraftRemovableWord = __webpack_require__(111);
	var EditorState = __webpack_require__(30);

	var moveSelectionForward = __webpack_require__(114);
	var removeTextWithStrategy = __webpack_require__(109);

	/**
	 * Delete the word that is right of the cursor, as well as any spaces or
	 * punctuation before the word.
	 */
	function keyCommandDeleteWord(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    var offset = selection.getStartOffset();
	    var key = selection.getStartKey();
	    var content = strategyState.getCurrentContent();
	    var text = content.getBlockForKey(key).getText().slice(offset);
	    var toRemove = DraftRemovableWord.getForward(text);

	    // If there are no words in front of the cursor, remove the newline.
	    return moveSelectionForward(strategyState, toRemove.length || 1);
	  }, 'forward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  return EditorState.push(editorState, afterRemoval, 'remove-range');
	}

	module.exports = keyCommandDeleteWord;

/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule moveSelectionForward
	 * 
	 */

	'use strict';

	/**
	 * Given a collapsed selection, move the focus `maxDistance` forward within
	 * the selected block. If the selection will go beyond the end of the block,
	 * move focus to the start of the next block, but no further.
	 *
	 * This function is not Unicode-aware, so surrogate pairs will be treated
	 * as having length 2.
	 */
	function moveSelectionForward(editorState, maxDistance) {
	  var selection = editorState.getSelection();
	  var key = selection.getStartKey();
	  var offset = selection.getStartOffset();
	  var content = editorState.getCurrentContent();

	  var focusKey = key;
	  var focusOffset;

	  var block = content.getBlockForKey(key);

	  if (maxDistance > block.getText().length - offset) {
	    focusKey = content.getKeyAfter(key);
	    focusOffset = 0;
	  } else {
	    focusOffset = offset + maxDistance;
	  }

	  return selection.merge({ focusKey: focusKey, focusOffset: focusOffset });
	}

	module.exports = moveSelectionForward;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandInsertNewline
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);

	function keyCommandInsertNewline(editorState) {
	  var contentState = DraftModifier.splitBlock(editorState.getCurrentContent(), editorState.getSelection());
	  return EditorState.push(editorState, contentState, 'split-block');
	}

	module.exports = keyCommandInsertNewline;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandPlainBackspace
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);
	var UnicodeUtils = __webpack_require__(105);

	var moveSelectionBackward = __webpack_require__(108);
	var removeTextWithStrategy = __webpack_require__(109);

	/**
	 * Remove the selected range. If the cursor is collapsed, remove the preceding
	 * character. This operation is Unicode-aware, so removing a single character
	 * will remove a surrogate pair properly as well.
	 */
	function keyCommandPlainBackspace(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    var content = strategyState.getCurrentContent();
	    var key = selection.getAnchorKey();
	    var offset = selection.getAnchorOffset();
	    var charBehind = content.getBlockForKey(key).getText()[offset - 1];
	    return moveSelectionBackward(strategyState, charBehind ? UnicodeUtils.getUTF16Length(charBehind, 0) : 1);
	  }, 'backward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  var selection = editorState.getSelection();
	  return EditorState.push(editorState, afterRemoval.set('selectionBefore', selection), selection.isCollapsed() ? 'backspace-character' : 'remove-range');
	}

	module.exports = keyCommandPlainBackspace;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandPlainDelete
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);
	var UnicodeUtils = __webpack_require__(105);

	var moveSelectionForward = __webpack_require__(114);
	var removeTextWithStrategy = __webpack_require__(109);

	/**
	 * Remove the selected range. If the cursor is collapsed, remove the following
	 * character. This operation is Unicode-aware, so removing a single character
	 * will remove a surrogate pair properly as well.
	 */
	function keyCommandPlainDelete(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    var content = strategyState.getCurrentContent();
	    var key = selection.getAnchorKey();
	    var offset = selection.getAnchorOffset();
	    var charAhead = content.getBlockForKey(key).getText()[offset];
	    return moveSelectionForward(strategyState, charAhead ? UnicodeUtils.getUTF16Length(charAhead, 0) : 1);
	  }, 'forward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  var selection = editorState.getSelection();

	  return EditorState.push(editorState, afterRemoval.set('selectionBefore', selection), selection.isCollapsed() ? 'delete-character' : 'remove-range');
	}

	module.exports = keyCommandPlainDelete;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandMoveSelectionToEndOfBlock
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);

	/**
	 * See comment for `moveSelectionToStartOfBlock`.
	 */
	function keyCommandMoveSelectionToEndOfBlock(editorState) {
	  var selection = editorState.getSelection();
	  var endKey = selection.getEndKey();
	  var content = editorState.getCurrentContent();
	  var textLength = content.getBlockForKey(endKey).getLength();
	  return EditorState.set(editorState, {
	    selection: selection.merge({
	      anchorKey: endKey,
	      anchorOffset: textLength,
	      focusKey: endKey,
	      focusOffset: textLength,
	      isBackward: false
	    }),
	    forceSelection: true
	  });
	}

	module.exports = keyCommandMoveSelectionToEndOfBlock;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandMoveSelectionToStartOfBlock
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);

	/**
	 * Collapse selection at the start of the first selected block. This is used
	 * for Firefox versions that attempt to navigate forward/backward instead of
	 * moving the cursor. Other browsers are able to move the cursor natively.
	 */
	function keyCommandMoveSelectionToStartOfBlock(editorState) {
	  var selection = editorState.getSelection();
	  var startKey = selection.getStartKey();
	  return EditorState.set(editorState, {
	    selection: selection.merge({
	      anchorKey: startKey,
	      anchorOffset: 0,
	      focusKey: startKey,
	      focusOffset: 0,
	      isBackward: false
	    }),
	    forceSelection: true
	  });
	}

	module.exports = keyCommandMoveSelectionToStartOfBlock;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandTransposeCharacters
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);

	var getContentStateFragment = __webpack_require__(21);

	/**
	 * Transpose the characters on either side of a collapsed cursor, or
	 * if the cursor is at the end of the block, transpose the last two
	 * characters.
	 */
	function keyCommandTransposeCharacters(editorState) {
	  var selection = editorState.getSelection();
	  if (!selection.isCollapsed()) {
	    return editorState;
	  }

	  var offset = selection.getAnchorOffset();
	  if (offset === 0) {
	    return editorState;
	  }

	  var blockKey = selection.getAnchorKey();
	  var content = editorState.getCurrentContent();
	  var block = content.getBlockForKey(blockKey);
	  var length = block.getLength();

	  // Nothing to transpose if there aren't two characters.
	  if (length <= 1) {
	    return editorState;
	  }

	  var removalRange;
	  var finalSelection;

	  if (offset === length) {
	    // The cursor is at the end of the block. Swap the last two characters.
	    removalRange = selection.set('anchorOffset', offset - 1);
	    finalSelection = selection;
	  } else {
	    removalRange = selection.set('focusOffset', offset + 1);
	    finalSelection = removalRange.set('anchorOffset', offset + 1);
	  }

	  // Extract the character to move as a fragment. This preserves its
	  // styling and entity, if any.
	  var movedFragment = getContentStateFragment(content, removalRange);
	  var afterRemoval = DraftModifier.removeRange(content, removalRange, 'backward');

	  // After the removal, the insertion target is one character back.
	  var selectionAfter = afterRemoval.getSelectionAfter();
	  var targetOffset = selectionAfter.getAnchorOffset() - 1;
	  var targetRange = selectionAfter.merge({
	    anchorOffset: targetOffset,
	    focusOffset: targetOffset
	  });

	  var afterInsert = DraftModifier.replaceWithFragment(afterRemoval, targetRange, movedFragment);

	  var newEditorState = EditorState.push(editorState, afterInsert, 'insert-fragment');

	  return EditorState.acceptSelection(newEditorState, finalSelection);
	}

	module.exports = keyCommandTransposeCharacters;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandUndo
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);

	function keyCommandUndo(e, editorState, updateFn) {
	  var undoneState = EditorState.undo(editorState);

	  // If the last change to occur was a spellcheck change, allow the undo
	  // event to fall through to the browser. This allows the browser to record
	  // the unwanted change, which should soon lead it to learn not to suggest
	  // the correction again.
	  if (editorState.getLastChangeType() === 'spellcheck-change') {
	    var nativelyRenderedContent = undoneState.getCurrentContent();
	    updateFn(EditorState.set(undoneState, { nativelyRenderedContent: nativelyRenderedContent }));
	    return;
	  }

	  // Otheriwse, manage the undo behavior manually.
	  e.preventDefault();
	  if (!editorState.getNativelyRenderedContent()) {
	    updateFn(undoneState);
	    return;
	  }

	  // Trigger a re-render with the current content state to ensure that the
	  // component tree has up-to-date props for comparison.
	  updateFn(EditorState.set(editorState, { nativelyRenderedContent: null }));

	  // Wait to ensure that the re-render has occurred before performing
	  // the undo action.
	  setTimeout(function () {
	    updateFn(undoneState);
	  }, 0);
	}

	module.exports = keyCommandUndo;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnPaste
	 * 
	 */

	'use strict';

	var BlockMapBuilder = __webpack_require__(4);
	var CharacterMetadata = __webpack_require__(6);
	var DataTransfer = __webpack_require__(81);
	var DraftModifier = __webpack_require__(9);
	var DraftPasteProcessor = __webpack_require__(123);
	var EditorState = __webpack_require__(30);

	var getEntityKeyForSelection = __webpack_require__(48);
	var getTextContentFromFiles = __webpack_require__(86);
	var splitTextIntoTextBlocks = __webpack_require__(127);

	var isEventHandled = __webpack_require__(88);

	/**
	 * Paste content.
	 */
	function editOnPaste(e) {
	  var _this = this;

	  e.preventDefault();
	  var data = new DataTransfer(e.clipboardData);

	  // Get files, unless this is likely to be a string the user wants inline.
	  if (!data.isRichText()) {
	    var files = data.getFiles();
	    var defaultFileText = data.getText();
	    if (files.length > 0) {
	      // Allow customized paste handling for images, etc. Otherwise, fall
	      // through to insert text contents into the editor.
	      if (this.props.handlePastedFiles && isEventHandled(this.props.handlePastedFiles(files))) {
	        return;
	      }

	      getTextContentFromFiles(files, function ( /*string*/fileText) {
	        fileText = fileText || defaultFileText;
	        if (!fileText) {
	          return;
	        }

	        var editorState = _this.props.editorState;

	        var blocks = splitTextIntoTextBlocks(fileText);
	        var character = CharacterMetadata.create({
	          style: editorState.getCurrentInlineStyle(),
	          entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
	        });

	        var text = DraftPasteProcessor.processText(blocks, character);
	        var fragment = BlockMapBuilder.createFromArray(text);

	        var withInsertedText = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);

	        _this.update(EditorState.push(editorState, withInsertedText, 'insert-fragment'));
	      });

	      return;
	    }
	  }

	  var textBlocks = [];
	  var text = data.getText();
	  var html = data.getHTML();

	  if (this.props.handlePastedText && isEventHandled(this.props.handlePastedText(text, html))) {
	    return;
	  }

	  if (text) {
	    textBlocks = splitTextIntoTextBlocks(text);
	  }

	  if (!this.props.stripPastedStyles) {
	    // If the text from the paste event is rich content that matches what we
	    // already have on the internal clipboard, assume that we should just use
	    // the clipboard fragment for the paste. This will allow us to preserve
	    // styling and entities, if any are present. Note that newlines are
	    // stripped during comparison -- this is because copy/paste within the
	    // editor in Firefox and IE will not include empty lines. The resulting
	    // paste will preserve the newlines correctly.
	    var internalClipboard = this.getClipboard();
	    if (data.isRichText() && internalClipboard) {
	      if (
	      // If the editorKey is present in the pasted HTML, it should be safe to
	      // assume this is an internal paste.
	      html.indexOf(this.getEditorKey()) !== -1 ||
	      // The copy may have been made within a single block, in which case the
	      // editor key won't be part of the paste. In this case, just check
	      // whether the pasted text matches the internal clipboard.
	      textBlocks.length === 1 && internalClipboard.size === 1 && internalClipboard.first().getText() === text) {
	        this.update(insertFragment(this.props.editorState, internalClipboard));
	        return;
	      }
	    } else if (internalClipboard && data.types.includes('com.apple.webarchive') && !data.types.includes('text/html') && areTextBlocksAndClipboardEqual(textBlocks, internalClipboard)) {
	      // Safari does not properly store text/html in some cases.
	      // Use the internalClipboard if present and equal to what is on
	      // the clipboard. See https://bugs.webkit.org/show_bug.cgi?id=19893.
	      this.update(insertFragment(this.props.editorState, internalClipboard));
	      return;
	    }

	    // If there is html paste data, try to parse that.
	    if (html) {
	      var htmlFragment = DraftPasteProcessor.processHTML(html, this.props.blockRenderMap);
	      if (htmlFragment) {
	        var htmlMap = BlockMapBuilder.createFromArray(htmlFragment);
	        this.update(insertFragment(this.props.editorState, htmlMap));
	        return;
	      }
	    }

	    // Otherwise, create a new fragment from our pasted text. Also
	    // empty the internal clipboard, since it's no longer valid.
	    this.setClipboard(null);
	  }

	  if (textBlocks) {
	    var editorState = this.props.editorState;

	    var character = CharacterMetadata.create({
	      style: editorState.getCurrentInlineStyle(),
	      entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
	    });

	    var textFragment = DraftPasteProcessor.processText(textBlocks, character);

	    var textMap = BlockMapBuilder.createFromArray(textFragment);
	    this.update(insertFragment(this.props.editorState, textMap));
	  }
	}

	function insertFragment(editorState, fragment) {
	  var newContent = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);
	  return EditorState.push(editorState, newContent, 'insert-fragment');
	}

	function areTextBlocksAndClipboardEqual(textBlocks, blockMap) {
	  return textBlocks.length === blockMap.size && blockMap.valueSeq().every(function (block, ii) {
	    return block.getText() === textBlocks[ii];
	  });
	}

	module.exports = editOnPaste;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftPasteProcessor
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(6);
	var ContentBlock = __webpack_require__(7);
	var Immutable = __webpack_require__(5);

	var convertFromHTMLtoContentBlocks = __webpack_require__(124);
	var generateRandomKey = __webpack_require__(22);
	var getSafeBodyFromHTML = __webpack_require__(126);
	var sanitizeDraftText = __webpack_require__(35);

	var List = Immutable.List;
	var Repeat = Immutable.Repeat;


	var DraftPasteProcessor = {
	  processHTML: function processHTML(html, blockRenderMap) {
	    return convertFromHTMLtoContentBlocks(html, getSafeBodyFromHTML, blockRenderMap);
	  },
	  processText: function processText(textBlocks, character) {
	    return textBlocks.map(function (textLine) {
	      textLine = sanitizeDraftText(textLine);
	      return new ContentBlock({
	        key: generateRandomKey(),
	        type: 'unstyled',
	        text: textLine,
	        characterList: List(Repeat(character, textLine.length))
	      });
	    });
	  }
	};

	module.exports = DraftPasteProcessor;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule convertFromHTMLToContentBlocks
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(6);
	var ContentBlock = __webpack_require__(7);
	var DefaultDraftBlockRenderMap = __webpack_require__(42);
	var DraftEntity = __webpack_require__(15);
	var Immutable = __webpack_require__(5);
	var URI = __webpack_require__(125);

	var generateRandomKey = __webpack_require__(22);
	var getSafeBodyFromHTML = __webpack_require__(126);
	var invariant = __webpack_require__(18);
	var nullthrows = __webpack_require__(40);
	var sanitizeDraftText = __webpack_require__(35);

	var List = Immutable.List;
	var OrderedSet = Immutable.OrderedSet;


	var NBSP = '&nbsp;';
	var SPACE = ' ';

	// Arbitrary max indent
	var MAX_DEPTH = 4;

	// used for replacing characters in HTML
	var REGEX_CR = new RegExp('\r', 'g');
	var REGEX_LF = new RegExp('\n', 'g');
	var REGEX_NBSP = new RegExp(NBSP, 'g');
	var REGEX_CARRIAGE = new RegExp('&#13;?', 'g');
	var REGEX_ZWS = new RegExp('&#8203;?', 'g');

	// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
	var boldValues = ['bold', 'bolder', '500', '600', '700', '800', '900'];
	var notBoldValues = ['light', 'lighter', '100', '200', '300', '400'];

	// Block tag flow is different because LIs do not have
	// a deterministic style ;_;
	var inlineTags = {
	  b: 'BOLD',
	  code: 'CODE',
	  del: 'STRIKETHROUGH',
	  em: 'ITALIC',
	  i: 'ITALIC',
	  s: 'STRIKETHROUGH',
	  strike: 'STRIKETHROUGH',
	  strong: 'BOLD',
	  u: 'UNDERLINE'
	};

	var anchorAttr = ['className', 'href', 'rel', 'target', 'title'];

	var lastBlock;

	function getEmptyChunk() {
	  return {
	    text: '',
	    inlines: [],
	    entities: [],
	    blocks: []
	  };
	}

	function getWhitespaceChunk(inEntity) {
	  var entities = new Array(1);
	  if (inEntity) {
	    entities[0] = inEntity;
	  }
	  return {
	    text: SPACE,
	    inlines: [OrderedSet()],
	    entities: entities,
	    blocks: []
	  };
	}

	function getSoftNewlineChunk() {
	  return {
	    text: '\n',
	    inlines: [OrderedSet()],
	    entities: new Array(1),
	    blocks: []
	  };
	}

	function getBlockDividerChunk(block, depth) {
	  return {
	    text: '\r',
	    inlines: [OrderedSet()],
	    entities: new Array(1),
	    blocks: [{
	      type: block,
	      depth: Math.max(0, Math.min(MAX_DEPTH, depth))
	    }]
	  };
	}

	function getListBlockType(tag, lastList) {
	  if (tag === 'li') {
	    return lastList === 'ol' ? 'ordered-list-item' : 'unordered-list-item';
	  }
	  return null;
	}

	function getBlockMapSupportedTags(blockRenderMap) {
	  var unstyledElement = blockRenderMap.get('unstyled').element;
	  return blockRenderMap.map(function (config) {
	    return config.element;
	  }).valueSeq().toSet().filter(function (tag) {
	    return tag && tag !== unstyledElement;
	  }).toArray().sort();
	}

	// custom element conversions
	function getMultiMatchedType(tag, lastList, multiMatchExtractor) {
	  for (var ii = 0; ii < multiMatchExtractor.length; ii++) {
	    var matchType = multiMatchExtractor[ii](tag, lastList);
	    if (matchType) {
	      return matchType;
	    }
	  }
	  return null;
	}

	function getBlockTypeForTag(tag, lastList, blockRenderMap) {
	  var matchedTypes = blockRenderMap.filter(function (config) {
	    return config.element === tag || config.wrapper === tag;
	  }).keySeq().toSet().toArray().sort();

	  // if we dont have any matched type, return unstyled
	  // if we have one matched type return it
	  // if we have multi matched types use the multi-match function to gather type
	  switch (matchedTypes.length) {
	    case 0:
	      return 'unstyled';
	    case 1:
	      return matchedTypes[0];
	    default:
	      return getMultiMatchedType(tag, lastList, [getListBlockType]) || 'unstyled';
	  }
	}

	function processInlineTag(tag, node, currentStyle) {
	  var styleToCheck = inlineTags[tag];
	  if (styleToCheck) {
	    currentStyle = currentStyle.add(styleToCheck).toOrderedSet();
	  } else if (node instanceof HTMLElement) {
	    (function () {
	      var htmlElement = node;
	      currentStyle = currentStyle.withMutations(function (style) {
	        var fontWeight = htmlElement.style.fontWeight;
	        var fontStyle = htmlElement.style.fontStyle;
	        var textDecoration = htmlElement.style.textDecoration;

	        if (boldValues.indexOf(fontWeight) >= 0) {
	          style.add('BOLD');
	        } else if (notBoldValues.indexOf(fontWeight) >= 0) {
	          style.remove('BOLD');
	        }

	        if (fontStyle === 'italic') {
	          style.add('ITALIC');
	        } else if (fontStyle === 'normal') {
	          style.remove('ITALIC');
	        }

	        if (textDecoration === 'underline') {
	          style.add('UNDERLINE');
	        }
	        if (textDecoration === 'line-through') {
	          style.add('STRIKETHROUGH');
	        }
	        if (textDecoration === 'none') {
	          style.remove('UNDERLINE');
	          style.remove('STRIKETHROUGH');
	        }
	      }).toOrderedSet();
	    })();
	  }
	  return currentStyle;
	}

	function joinChunks(A, B) {
	  // Sometimes two blocks will touch in the DOM and we need to strip the
	  // extra delimiter to preserve niceness.
	  var lastInA = A.text.slice(-1);
	  var firstInB = B.text.slice(0, 1);

	  if (lastInA === '\r' && firstInB === '\r') {
	    A.text = A.text.slice(0, -1);
	    A.inlines.pop();
	    A.entities.pop();
	    A.blocks.pop();
	  }

	  // Kill whitespace after blocks
	  if (lastInA === '\r') {
	    if (B.text === SPACE || B.text === '\n') {
	      return A;
	    } else if (firstInB === SPACE || firstInB === '\n') {
	      B.text = B.text.slice(1);
	      B.inlines.shift();
	      B.entities.shift();
	    }
	  }

	  return {
	    text: A.text + B.text,
	    inlines: A.inlines.concat(B.inlines),
	    entities: A.entities.concat(B.entities),
	    blocks: A.blocks.concat(B.blocks)
	  };
	}

	/**
	 * Check to see if we have anything like <p> <blockquote> <h1>... to create
	 * block tags from. If we do, we can use those and ignore <div> tags. If we
	 * don't, we can treat <div> tags as meaningful (unstyled) blocks.
	 */
	function containsSemanticBlockMarkup(html, blockTags) {
	  return blockTags.some(function (tag) {
	    return html.indexOf('<' + tag) !== -1;
	  });
	}

	function hasValidLinkText(link) {
	  !(link instanceof HTMLAnchorElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Link must be an HTMLAnchorElement.') : invariant(false) : void 0;
	  var protocol = link.protocol;
	  return protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:';
	}

	function genFragment(node, inlineStyle, lastList, inBlock, blockTags, depth, blockRenderMap, inEntity) {
	  var nodeName = node.nodeName.toLowerCase();
	  var newBlock = false;
	  var nextBlockType = 'unstyled';
	  var lastLastBlock = lastBlock;

	  // Base Case
	  if (nodeName === '#text') {
	    var text = node.textContent;
	    if (text.trim() === '' && inBlock !== 'pre') {
	      return getWhitespaceChunk(inEntity);
	    }
	    if (inBlock !== 'pre') {
	      // Can't use empty string because MSWord
	      text = text.replace(REGEX_LF, SPACE);
	    }

	    // save the last block so we can use it later
	    lastBlock = nodeName;

	    return {
	      text: text,
	      inlines: Array(text.length).fill(inlineStyle),
	      entities: Array(text.length).fill(inEntity),
	      blocks: []
	    };
	  }

	  // save the last block so we can use it later
	  lastBlock = nodeName;

	  // BR tags
	  if (nodeName === 'br') {
	    if (lastLastBlock === 'br' && (!inBlock || getBlockTypeForTag(inBlock, lastList, blockRenderMap) === 'unstyled')) {
	      return getBlockDividerChunk('unstyled', depth);
	    }
	    return getSoftNewlineChunk();
	  }

	  var chunk = getEmptyChunk();
	  var newChunk = null;

	  // Inline tags
	  inlineStyle = processInlineTag(nodeName, node, inlineStyle);

	  // Handle lists
	  if (nodeName === 'ul' || nodeName === 'ol') {
	    if (lastList) {
	      depth += 1;
	    }
	    lastList = nodeName;
	  }

	  // Block Tags
	  if (!inBlock && blockTags.indexOf(nodeName) !== -1) {
	    chunk = getBlockDividerChunk(getBlockTypeForTag(nodeName, lastList, blockRenderMap), depth);
	    inBlock = nodeName;
	    newBlock = true;
	  } else if (lastList && inBlock === 'li' && nodeName === 'li') {
	    chunk = getBlockDividerChunk(getBlockTypeForTag(nodeName, lastList, blockRenderMap), depth);
	    inBlock = nodeName;
	    newBlock = true;
	    nextBlockType = lastList === 'ul' ? 'unordered-list-item' : 'ordered-list-item';
	  }

	  // Recurse through children
	  var child = node.firstChild;
	  if (child != null) {
	    nodeName = child.nodeName.toLowerCase();
	  }

	  var entityId = null;

	  while (child) {
	    if (child instanceof HTMLAnchorElement && child.href && hasValidLinkText(child)) {
	      (function () {
	        var anchor = child;
	        var entityConfig = {};

	        anchorAttr.forEach(function (attr) {
	          var anchorAttribute = anchor.getAttribute(attr);
	          if (anchorAttribute) {
	            entityConfig[attr] = anchorAttribute;
	          }
	        });

	        entityConfig.url = new URI(anchor.href).toString();

	        entityId = DraftEntity.create('LINK', 'MUTABLE', entityConfig);
	      })();
	    } else {
	      entityId = undefined;
	    }

	    newChunk = genFragment(child, inlineStyle, lastList, inBlock, blockTags, depth, blockRenderMap, entityId || inEntity);

	    chunk = joinChunks(chunk, newChunk);
	    var sibling = child.nextSibling;

	    // Put in a newline to break up blocks inside blocks
	    if (sibling && blockTags.indexOf(nodeName) >= 0 && inBlock) {
	      chunk = joinChunks(chunk, getSoftNewlineChunk());
	    }
	    if (sibling) {
	      nodeName = sibling.nodeName.toLowerCase();
	    }
	    child = sibling;
	  }

	  if (newBlock) {
	    chunk = joinChunks(chunk, getBlockDividerChunk(nextBlockType, depth));
	  }

	  return chunk;
	}

	function getChunkForHTML(html, DOMBuilder, blockRenderMap) {
	  html = html.trim().replace(REGEX_CR, '').replace(REGEX_NBSP, SPACE).replace(REGEX_CARRIAGE, '').replace(REGEX_ZWS, '');

	  var supportedBlockTags = getBlockMapSupportedTags(blockRenderMap);

	  var safeBody = DOMBuilder(html);
	  if (!safeBody) {
	    return null;
	  }
	  lastBlock = null;

	  // Sometimes we aren't dealing with content that contains nice semantic
	  // tags. In this case, use divs to separate everything out into paragraphs
	  // and hope for the best.
	  var workingBlocks = containsSemanticBlockMarkup(html, supportedBlockTags) ? supportedBlockTags : ['div'];

	  // Start with -1 block depth to offset the fact that we are passing in a fake
	  // UL block to start with.
	  var chunk = genFragment(safeBody, OrderedSet(), 'ul', null, workingBlocks, -1, blockRenderMap);

	  // join with previous block to prevent weirdness on paste
	  if (chunk.text.indexOf('\r') === 0) {
	    chunk = {
	      text: chunk.text.slice(1),
	      inlines: chunk.inlines.slice(1),
	      entities: chunk.entities.slice(1),
	      blocks: chunk.blocks
	    };
	  }

	  // Kill block delimiter at the end
	  if (chunk.text.slice(-1) === '\r') {
	    chunk.text = chunk.text.slice(0, -1);
	    chunk.inlines = chunk.inlines.slice(0, -1);
	    chunk.entities = chunk.entities.slice(0, -1);
	    chunk.blocks.pop();
	  }

	  // If we saw no block tags, put an unstyled one in
	  if (chunk.blocks.length === 0) {
	    chunk.blocks.push({ type: 'unstyled', depth: 0 });
	  }

	  // Sometimes we start with text that isn't in a block, which is then
	  // followed by blocks. Need to fix up the blocks to add in
	  // an unstyled block for this content
	  if (chunk.text.split('\r').length === chunk.blocks.length + 1) {
	    chunk.blocks.unshift({ type: 'unstyled', depth: 0 });
	  }

	  return chunk;
	}

	function convertFromHTMLtoContentBlocks(html) {
	  var DOMBuilder = arguments.length <= 1 || arguments[1] === undefined ? getSafeBodyFromHTML : arguments[1];
	  var blockRenderMap = arguments.length <= 2 || arguments[2] === undefined ? DefaultDraftBlockRenderMap : arguments[2];

	  // Be ABSOLUTELY SURE that the dom builder you pass here won't execute
	  // arbitrary code in whatever environment you're running this in. For an
	  // example of how we try to do this in-browser, see getSafeBodyFromHTML.

	  var chunk = getChunkForHTML(html, DOMBuilder, blockRenderMap);

	  if (chunk == null) {
	    return null;
	  }
	  var start = 0;
	  return chunk.text.split('\r').map(function (textBlock, ii) {
	    // Make absolutely certain that our text is acceptable.
	    textBlock = sanitizeDraftText(textBlock);
	    var end = start + textBlock.length;
	    var inlines = nullthrows(chunk).inlines.slice(start, end);
	    var entities = nullthrows(chunk).entities.slice(start, end);
	    var characterList = List(inlines.map(function (style, ii) {
	      var data = { style: style, entity: null };
	      if (entities[ii]) {
	        data.entity = entities[ii];
	      }
	      return CharacterMetadata.create(data);
	    }));
	    start = end + 1;

	    return new ContentBlock({
	      key: generateRandomKey(),
	      type: nullthrows(chunk).blocks[ii].type,
	      depth: nullthrows(chunk).blocks[ii].depth,
	      text: textBlock,
	      characterList: characterList
	    });
	  });
	}

	module.exports = convertFromHTMLtoContentBlocks;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var URI = function () {
	  function URI(uri) {
	    _classCallCheck(this, URI);

	    this._uri = uri;
	  }

	  URI.prototype.toString = function toString() {
	    return this._uri;
	  };

	  return URI;
	}();

	module.exports = URI;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getSafeBodyFromHTML
	 * 
	 */

	'use strict';

	var UserAgent = __webpack_require__(55);

	var isOldIE = UserAgent.isBrowser('IE <= 9');

	// Provides a dom node that will not execute scripts
	// https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation.createHTMLDocument
	// https://developer.mozilla.org/en-US/Add-ons/Code_snippets/HTML_to_DOM

	function getSafeBodyFromHTML(html) {
	  var doc;
	  var root = null;
	  // Provides a safe context
	  if (!isOldIE && document.implementation && document.implementation.createHTMLDocument) {
	    doc = document.implementation.createHTMLDocument('foo');
	    doc.documentElement.innerHTML = html;
	    root = doc.getElementsByTagName('body')[0];
	  }
	  return root;
	}

	module.exports = getSafeBodyFromHTML;

/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule splitTextIntoTextBlocks
	 * 
	 */

	'use strict';

	var NEWLINE_REGEX = /\r\n?|\n/g;

	function splitTextIntoTextBlocks(text) {
	  return text.split(NEWLINE_REGEX);
	}

	module.exports = splitTextIntoTextBlocks;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnSelect
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(30);
	var ReactDOM = __webpack_require__(54);

	var getDraftEditorSelection = __webpack_require__(129);

	function editOnSelect() {
	  if (this._blockSelectEvents) {
	    return;
	  }

	  var editorState = this.props.editorState;
	  var documentSelection = getDraftEditorSelection(editorState, ReactDOM.findDOMNode(this.refs.editorContainer).firstChild);
	  var updatedSelectionState = documentSelection.selectionState;

	  if (updatedSelectionState !== editorState.getSelection()) {
	    if (documentSelection.needsRecovery) {
	      editorState = EditorState.forceSelection(editorState, updatedSelectionState);
	    } else {
	      editorState = EditorState.acceptSelection(editorState, updatedSelectionState);
	    }
	    this.update(editorState);
	  }
	}

	module.exports = editOnSelect;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getDraftEditorSelection
	 * @typechecks
	 * 
	 */

	'use strict';

	var getDraftEditorSelectionWithNodes = __webpack_require__(107);

	/**
	 * Convert the current selection range to an anchor/focus pair of offset keys
	 * and values that can be interpreted by components.
	 */
	function getDraftEditorSelection(editorState, root) {
	  var selection = global.getSelection();

	  // No active selection.
	  if (selection.rangeCount === 0) {
	    return {
	      selectionState: editorState.getSelection().set('hasFocus', false),
	      needsRecovery: false
	    };
	  }

	  return getDraftEditorSelectionWithNodes(editorState, root, selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
	}

	module.exports = getDraftEditorSelection;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorPlaceholder.react
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var cx = __webpack_require__(43);

	/**
	 * This component is responsible for rendering placeholder text for the
	 * `DraftEditor` component.
	 *
	 * Override placeholder style via CSS.
	 */
	var DraftEditorPlaceholder = function (_React$Component) {
	  _inherits(DraftEditorPlaceholder, _React$Component);

	  function DraftEditorPlaceholder() {
	    _classCallCheck(this, DraftEditorPlaceholder);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  DraftEditorPlaceholder.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return this.props.text !== nextProps.text || this.props.editorState.getSelection().getHasFocus() !== nextProps.editorState.getSelection().getHasFocus();
	  };

	  DraftEditorPlaceholder.prototype.render = function render() {
	    var hasFocus = this.props.editorState.getSelection().getHasFocus();

	    var className = cx({
	      'public/DraftEditorPlaceholder/root': true,
	      'public/DraftEditorPlaceholder/hasFocus': hasFocus
	    });

	    return React.createElement(
	      'div',
	      { className: className },
	      React.createElement(
	        'div',
	        {
	          className: cx('public/DraftEditorPlaceholder/inner'),
	          id: this.props.accessibilityID },
	        this.props.text
	      )
	    );
	  };

	  return DraftEditorPlaceholder;
	}(React.Component);

	module.exports = DraftEditorPlaceholder;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getDefaultKeyBinding
	 * @typechecks
	 * 
	 */

	'use strict';

	var KeyBindingUtil = __webpack_require__(101);
	var Keys = __webpack_require__(47);
	var UserAgent = __webpack_require__(55);

	var isOSX = UserAgent.isPlatform('Mac OS X');
	var isWindows = UserAgent.isPlatform('Windows');

	// Firefox on OSX had a bug resulting in navigation instead of cursor movement.
	// This bug was fixed in Firefox 29. Feature detection is virtually impossible
	// so we just check the version number. See #342765.
	var shouldFixFirefoxMovement = isOSX && UserAgent.isBrowser('Firefox < 29');

	var hasCommandModifier = KeyBindingUtil.hasCommandModifier;
	var isCtrlKeyCommand = KeyBindingUtil.isCtrlKeyCommand;


	function shouldRemoveWord(e) {
	  return isOSX && e.altKey || isCtrlKeyCommand(e);
	}

	/**
	 * Get the appropriate undo/redo command for a Z key command.
	 */
	function getZCommand(e) {
	  if (!hasCommandModifier(e)) {
	    return null;
	  }
	  return e.shiftKey ? 'redo' : 'undo';
	}

	function getDeleteCommand(e) {
	  // Allow default "cut" behavior for Windows on Shift + Delete.
	  if (isWindows && e.shiftKey) {
	    return null;
	  }
	  return shouldRemoveWord(e) ? 'delete-word' : 'delete';
	}

	function getBackspaceCommand(e) {
	  if (hasCommandModifier(e) && isOSX) {
	    return 'backspace-to-start-of-line';
	  }
	  return shouldRemoveWord(e) ? 'backspace-word' : 'backspace';
	}

	/**
	 * Retrieve a bound key command for the given event.
	 */
	function getDefaultKeyBinding(e) {
	  switch (e.keyCode) {
	    case 66:
	      // B
	      return hasCommandModifier(e) ? 'bold' : null;
	    case 68:
	      // D
	      return isCtrlKeyCommand(e) ? 'delete' : null;
	    case 72:
	      // H
	      return isCtrlKeyCommand(e) ? 'backspace' : null;
	    case 73:
	      // I
	      return hasCommandModifier(e) ? 'italic' : null;
	    case 74:
	      // J
	      return hasCommandModifier(e) ? 'code' : null;
	    case 75:
	      // K
	      return !isWindows && isCtrlKeyCommand(e) ? 'secondary-cut' : null;
	    case 77:
	      // M
	      return isCtrlKeyCommand(e) ? 'split-block' : null;
	    case 79:
	      // O
	      return isCtrlKeyCommand(e) ? 'split-block' : null;
	    case 84:
	      // T
	      return isOSX && isCtrlKeyCommand(e) ? 'transpose-characters' : null;
	    case 85:
	      // U
	      return hasCommandModifier(e) ? 'underline' : null;
	    case 87:
	      // W
	      return isOSX && isCtrlKeyCommand(e) ? 'backspace-word' : null;
	    case 89:
	      // Y
	      if (isCtrlKeyCommand(e)) {
	        return isWindows ? 'redo' : 'secondary-paste';
	      }
	      return null;
	    case 90:
	      // Z
	      return getZCommand(e) || null;
	    case Keys.RETURN:
	      return 'split-block';
	    case Keys.DELETE:
	      return getDeleteCommand(e);
	    case Keys.BACKSPACE:
	      return getBackspaceCommand(e);
	    // LEFT/RIGHT handlers serve as a workaround for a Firefox bug.
	    case Keys.LEFT:
	      return shouldFixFirefoxMovement && hasCommandModifier(e) ? 'move-selection-to-start-of-block' : null;
	    case Keys.RIGHT:
	      return shouldFixFirefoxMovement && hasCommandModifier(e) ? 'move-selection-to-end-of-block' : null;
	    default:
	      return null;
	  }
	}

	module.exports = getDefaultKeyBinding;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RichTextEditorUtil
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftEntity = __webpack_require__(15);
	var DraftModifier = __webpack_require__(9);
	var EditorState = __webpack_require__(30);
	var SelectionState = __webpack_require__(34);

	var adjustBlockDepthForContentState = __webpack_require__(133);
	var nullthrows = __webpack_require__(40);

	var RichTextEditorUtil = {
	  currentBlockContainsLink: function currentBlockContainsLink(editorState) {
	    var selection = editorState.getSelection();
	    return editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey()).getCharacterList().slice(selection.getStartOffset(), selection.getEndOffset()).some(function (v) {
	      var entity = v.getEntity();
	      return !!entity && DraftEntity.get(entity).getType() === 'LINK';
	    });
	  },

	  getCurrentBlockType: function getCurrentBlockType(editorState) {
	    var selection = editorState.getSelection();
	    return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
	  },

	  getDataObjectForLinkURL: function getDataObjectForLinkURL(uri) {
	    return { url: uri.toString() };
	  },

	  handleKeyCommand: function handleKeyCommand(editorState, command) {
	    switch (command) {
	      case 'bold':
	        return RichTextEditorUtil.toggleInlineStyle(editorState, 'BOLD');
	      case 'italic':
	        return RichTextEditorUtil.toggleInlineStyle(editorState, 'ITALIC');
	      case 'underline':
	        return RichTextEditorUtil.toggleInlineStyle(editorState, 'UNDERLINE');
	      case 'code':
	        return RichTextEditorUtil.toggleCode(editorState);
	      case 'backspace':
	      case 'backspace-word':
	      case 'backspace-to-start-of-line':
	        return RichTextEditorUtil.onBackspace(editorState);
	      case 'delete':
	      case 'delete-word':
	      case 'delete-to-end-of-block':
	        return RichTextEditorUtil.onDelete(editorState);
	      default:
	        return null;
	    }
	  },

	  insertSoftNewline: function insertSoftNewline(editorState) {
	    var contentState = DraftModifier.insertText(editorState.getCurrentContent(), editorState.getSelection(), '\n', editorState.getCurrentInlineStyle(), null);

	    var newEditorState = EditorState.push(editorState, contentState, 'insert-characters');

	    return EditorState.forceSelection(newEditorState, contentState.getSelectionAfter());
	  },

	  /**
	   * For collapsed selections at the start of styled blocks, backspace should
	   * just remove the existing style.
	   */
	  onBackspace: function onBackspace(editorState) {
	    var selection = editorState.getSelection();
	    if (!selection.isCollapsed() || selection.getAnchorOffset() || selection.getFocusOffset()) {
	      return null;
	    }

	    // First, try to remove a preceding atomic block.
	    var content = editorState.getCurrentContent();
	    var startKey = selection.getStartKey();
	    var blockBefore = content.getBlockBefore(startKey);

	    if (blockBefore && blockBefore.getType() === 'atomic') {
	      var atomicBlockTarget = selection.merge({
	        anchorKey: blockBefore.getKey(),
	        anchorOffset: 0
	      });
	      var asCurrentStyle = DraftModifier.setBlockType(content, atomicBlockTarget, content.getBlockForKey(startKey).getType());
	      var withoutAtomicBlock = DraftModifier.removeRange(asCurrentStyle, atomicBlockTarget, 'backward');
	      if (withoutAtomicBlock !== content) {
	        return EditorState.push(editorState, withoutAtomicBlock, 'remove-range');
	      }
	    }

	    // If that doesn't succeed, try to remove the current block style.
	    var withoutBlockStyle = RichTextEditorUtil.tryToRemoveBlockStyle(editorState);

	    if (withoutBlockStyle) {
	      return EditorState.push(editorState, withoutBlockStyle, 'change-block-type');
	    }

	    return null;
	  },

	  onDelete: function onDelete(editorState) {
	    var selection = editorState.getSelection();
	    if (!selection.isCollapsed()) {
	      return null;
	    }

	    var content = editorState.getCurrentContent();
	    var startKey = selection.getStartKey();
	    var block = content.getBlockForKey(startKey);
	    var length = block.getLength();

	    // The cursor is somewhere within the text. Behave normally.
	    if (selection.getStartOffset() < length) {
	      return null;
	    }

	    var blockAfter = content.getBlockAfter(startKey);

	    if (!blockAfter || blockAfter.getType() !== 'atomic') {
	      return null;
	    }

	    var atomicBlockTarget = selection.merge({
	      focusKey: blockAfter.getKey(),
	      focusOffset: blockAfter.getLength()
	    });

	    var withoutAtomicBlock = DraftModifier.removeRange(content, atomicBlockTarget, 'forward');

	    if (withoutAtomicBlock !== content) {
	      return EditorState.push(editorState, withoutAtomicBlock, 'remove-range');
	    }

	    return null;
	  },

	  onTab: function onTab(event, editorState, maxDepth) {
	    var selection = editorState.getSelection();
	    var key = selection.getAnchorKey();
	    if (key !== selection.getFocusKey()) {
	      return editorState;
	    }

	    var content = editorState.getCurrentContent();
	    var block = content.getBlockForKey(key);
	    var type = block.getType();
	    if (type !== 'unordered-list-item' && type !== 'ordered-list-item') {
	      return editorState;
	    }

	    event.preventDefault();

	    // Only allow indenting one level beyond the block above, and only if
	    // the block above is a list item as well.
	    var blockAbove = content.getBlockBefore(key);
	    if (!blockAbove) {
	      return editorState;
	    }

	    var typeAbove = blockAbove.getType();
	    if (typeAbove !== 'unordered-list-item' && typeAbove !== 'ordered-list-item') {
	      return editorState;
	    }

	    var depth = block.getDepth();
	    if (!event.shiftKey && depth === maxDepth) {
	      return editorState;
	    }

	    maxDepth = Math.min(blockAbove.getDepth() + 1, maxDepth);

	    var withAdjustment = adjustBlockDepthForContentState(content, selection, event.shiftKey ? -1 : 1, maxDepth);

	    return EditorState.push(editorState, withAdjustment, 'adjust-depth');
	  },

	  toggleBlockType: function toggleBlockType(editorState, blockType) {
	    var selection = editorState.getSelection();
	    var startKey = selection.getStartKey();
	    var endKey = selection.getEndKey();
	    var content = editorState.getCurrentContent();
	    var target = selection;

	    // Triple-click can lead to a selection that includes offset 0 of the
	    // following block. The `SelectionState` for this case is accurate, but
	    // we should avoid toggling block type for the trailing block because it
	    // is a confusing interaction.
	    if (startKey !== endKey && selection.getEndOffset() === 0) {
	      var blockBefore = nullthrows(content.getBlockBefore(endKey));
	      endKey = blockBefore.getKey();
	      target = target.merge({
	        anchorKey: startKey,
	        anchorOffset: selection.getStartOffset(),
	        focusKey: endKey,
	        focusOffset: blockBefore.getLength(),
	        isBackward: false
	      });
	    }

	    var hasAtomicBlock = content.getBlockMap().skipWhile(function (_, k) {
	      return k !== startKey;
	    }).reverse().skipWhile(function (_, k) {
	      return k !== endKey;
	    }).some(function (v) {
	      return v.getType() === 'atomic';
	    });

	    if (hasAtomicBlock) {
	      return editorState;
	    }

	    var typeToSet = content.getBlockForKey(startKey).getType() === blockType ? 'unstyled' : blockType;

	    return EditorState.push(editorState, DraftModifier.setBlockType(content, target, typeToSet), 'change-block-type');
	  },

	  toggleCode: function toggleCode(editorState) {
	    var selection = editorState.getSelection();
	    var anchorKey = selection.getAnchorKey();
	    var focusKey = selection.getFocusKey();

	    if (selection.isCollapsed() || anchorKey !== focusKey) {
	      return RichTextEditorUtil.toggleBlockType(editorState, 'code-block');
	    }

	    return RichTextEditorUtil.toggleInlineStyle(editorState, 'CODE');
	  },

	  /**
	   * Toggle the specified inline style for the selection. If the
	   * user's selection is collapsed, apply or remove the style for the
	   * internal state. If it is not collapsed, apply the change directly
	   * to the document state.
	   */
	  toggleInlineStyle: function toggleInlineStyle(editorState, inlineStyle) {
	    var selection = editorState.getSelection();
	    var currentStyle = editorState.getCurrentInlineStyle();

	    // If the selection is collapsed, toggle the specified style on or off and
	    // set the result as the new inline style override. This will then be
	    // used as the inline style for the next character to be inserted.
	    if (selection.isCollapsed()) {
	      return EditorState.setInlineStyleOverride(editorState, currentStyle.has(inlineStyle) ? currentStyle.remove(inlineStyle) : currentStyle.add(inlineStyle));
	    }

	    // If characters are selected, immediately apply or remove the
	    // inline style on the document state itself.
	    var content = editorState.getCurrentContent();
	    var newContent;

	    // If the style is already present for the selection range, remove it.
	    // Otherwise, apply it.
	    if (currentStyle.has(inlineStyle)) {
	      newContent = DraftModifier.removeInlineStyle(content, selection, inlineStyle);
	    } else {
	      newContent = DraftModifier.applyInlineStyle(content, selection, inlineStyle);
	    }

	    return EditorState.push(editorState, newContent, 'change-inline-style');
	  },

	  toggleLink: function toggleLink(editorState, targetSelection, entityKey) {
	    var withoutLink = DraftModifier.applyEntity(editorState.getCurrentContent(), targetSelection, entityKey);

	    return EditorState.push(editorState, withoutLink, 'apply-entity');
	  },

	  /**
	   * When a collapsed cursor is at the start of an empty styled block, allow
	   * certain key commands (newline, backspace) to simply change the
	   * style of the block instead of the default behavior.
	   */
	  tryToRemoveBlockStyle: function tryToRemoveBlockStyle(editorState) {
	    var selection = editorState.getSelection();
	    var offset = selection.getAnchorOffset();
	    if (selection.isCollapsed() && offset === 0) {
	      var key = selection.getAnchorKey();
	      var content = editorState.getCurrentContent();
	      var block = content.getBlockForKey(key);
	      if (block.getLength() > 0) {
	        return null;
	      }

	      var type = block.getType();
	      var blockBefore = content.getBlockBefore(key);
	      if (type === 'code-block' && blockBefore && blockBefore.getType() === 'code-block') {
	        return null;
	      }

	      if (type !== 'unstyled') {
	        return DraftModifier.setBlockType(content, selection, 'unstyled');
	      }
	    }
	    return null;
	  }
	};

	module.exports = RichTextEditorUtil;

/***/ },
/* 133 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adjustBlockDepthForContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	function adjustBlockDepthForContentState(contentState, selectionState, adjustment, maxDepth) {
	  var startKey = selectionState.getStartKey();
	  var endKey = selectionState.getEndKey();
	  var blockMap = contentState.getBlockMap();
	  var blocks = blockMap.toSeq().skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).concat([[endKey, blockMap.get(endKey)]]).map(function (block) {
	    var depth = block.getDepth() + adjustment;
	    depth = Math.max(0, Math.min(depth, maxDepth));
	    return block.set('depth', depth);
	  });

	  blockMap = blockMap.merge(blocks);

	  return contentState.merge({
	    blockMap: blockMap,
	    selectionBefore: selectionState,
	    selectionAfter: selectionState
	  });
	}

	module.exports = adjustBlockDepthForContentState;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule convertFromDraftStateToRaw
	 * 
	 */

	'use strict';

	var DraftEntity = __webpack_require__(15);
	var DraftStringKey = __webpack_require__(135);

	var encodeEntityRanges = __webpack_require__(136);
	var encodeInlineStyleRanges = __webpack_require__(137);

	function convertFromDraftStateToRaw(contentState) {
	  var entityStorageKey = 0;
	  var entityStorageMap = {};
	  var rawBlocks = [];

	  contentState.getBlockMap().forEach(function (block, blockKey) {
	    block.findEntityRanges(function (character) {
	      return character.getEntity() !== null;
	    }, function (start) {
	      // Stringify to maintain order of otherwise numeric keys.
	      var stringifiedEntityKey = DraftStringKey.stringify(block.getEntityAt(start));
	      if (!entityStorageMap.hasOwnProperty(stringifiedEntityKey)) {
	        entityStorageMap[stringifiedEntityKey] = '' + entityStorageKey++;
	      }
	    });

	    rawBlocks.push({
	      key: blockKey,
	      text: block.getText(),
	      type: block.getType(),
	      depth: block.getDepth(),
	      inlineStyleRanges: encodeInlineStyleRanges(block),
	      entityRanges: encodeEntityRanges(block, entityStorageMap),
	      data: block.getData().toObject()
	    });
	  });

	  // Flip storage map so that our storage keys map to global
	  // DraftEntity keys.
	  var entityKeys = Object.keys(entityStorageMap);
	  var flippedStorageMap = {};
	  entityKeys.forEach(function (key, jj) {
	    var entity = DraftEntity.get(DraftStringKey.unstringify(key));
	    flippedStorageMap[jj] = {
	      type: entity.getType(),
	      mutability: entity.getMutability(),
	      data: entity.getData()
	    };
	  });

	  return {
	    entityMap: flippedStorageMap,
	    blocks: rawBlocks
	  };
	}

	module.exports = convertFromDraftStateToRaw;

/***/ },
/* 135 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftStringKey
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftStringKey = {
	  stringify: function stringify(key) {
	    return '_' + String(key);
	  },

	  unstringify: function unstringify(key) {
	    return key.slice(1);
	  }
	};

	module.exports = DraftStringKey;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule encodeEntityRanges
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftStringKey = __webpack_require__(135);
	var UnicodeUtils = __webpack_require__(105);

	var strlen = UnicodeUtils.strlen;

	/**
	 * Convert to UTF-8 character counts for storage.
	 */

	function encodeEntityRanges(block, storageMap) {
	  var encoded = [];
	  block.findEntityRanges(function (character) {
	    return !!character.getEntity();
	  }, function ( /*number*/start, /*number*/end) {
	    var text = block.getText();
	    var key = block.getEntityAt(start);
	    encoded.push({
	      offset: strlen(text.slice(0, start)),
	      length: strlen(text.slice(start, end)),
	      // Encode the key as a number for range storage.
	      key: Number(storageMap[DraftStringKey.stringify(key)])
	    });
	  });
	  return encoded;
	}

	module.exports = encodeEntityRanges;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule encodeInlineStyleRanges
	 * 
	 */

	'use strict';

	var UnicodeUtils = __webpack_require__(105);

	var findRangesImmutable = __webpack_require__(8);

	var areEqual = function areEqual(a, b) {
	  return a === b;
	};
	var isTruthy = function isTruthy(a) {
	  return !!a;
	};
	var EMPTY_ARRAY = [];

	/**
	 * Helper function for getting encoded styles for each inline style. Convert
	 * to UTF-8 character counts for storage.
	 */
	function getEncodedInlinesForType(block, styleList, styleToEncode) {
	  var ranges = [];

	  // Obtain an array with ranges for only the specified style.
	  var filteredInlines = styleList.map(function (style) {
	    return style.has(styleToEncode);
	  }).toList();

	  findRangesImmutable(filteredInlines, areEqual,
	  // We only want to keep ranges with nonzero style values.
	  isTruthy, function (start, end) {
	    var text = block.getText();
	    ranges.push({
	      offset: UnicodeUtils.strlen(text.slice(0, start)),
	      length: UnicodeUtils.strlen(text.slice(start, end)),
	      style: styleToEncode
	    });
	  });

	  return ranges;
	}

	/*
	 * Retrieve the encoded arrays of inline styles, with each individual style
	 * treated separately.
	 */
	function encodeInlineStyleRanges(block) {
	  var styleList = block.getCharacterList().map(function (c) {
	    return c.getStyle();
	  }).toList();
	  var ranges = styleList.flatten().toSet().map(function (style) {
	    return getEncodedInlinesForType(block, styleList, style);
	  });

	  return Array.prototype.concat.apply(EMPTY_ARRAY, ranges.toJS());
	}

	module.exports = encodeInlineStyleRanges;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule convertFromRawToDraftState
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var ContentBlock = __webpack_require__(7);
	var ContentState = __webpack_require__(33);
	var DraftEntity = __webpack_require__(15);
	var Immutable = __webpack_require__(5);

	var createCharacterList = __webpack_require__(139);
	var decodeEntityRanges = __webpack_require__(140);
	var decodeInlineStyleRanges = __webpack_require__(141);
	var generateRandomKey = __webpack_require__(22);

	var Map = Immutable.Map;


	function convertFromRawToDraftState(rawState) {
	  var blocks = rawState.blocks;
	  var entityMap = rawState.entityMap;


	  var fromStorageToLocal = {};
	  Object.keys(entityMap).forEach(function (storageKey) {
	    var encodedEntity = entityMap[storageKey];
	    var type = encodedEntity.type;
	    var mutability = encodedEntity.mutability;
	    var data = encodedEntity.data;

	    var newKey = DraftEntity.create(type, mutability, data || {});
	    fromStorageToLocal[storageKey] = newKey;
	  });

	  var contentBlocks = blocks.map(function (block) {
	    var key = block.key;
	    var type = block.type;
	    var text = block.text;
	    var depth = block.depth;
	    var inlineStyleRanges = block.inlineStyleRanges;
	    var entityRanges = block.entityRanges;
	    var data = block.data;

	    key = key || generateRandomKey();
	    depth = depth || 0;
	    inlineStyleRanges = inlineStyleRanges || [];
	    entityRanges = entityRanges || [];
	    data = Map(data);

	    var inlineStyles = decodeInlineStyleRanges(text, inlineStyleRanges);

	    // Translate entity range keys to the DraftEntity map.
	    var filteredEntityRanges = entityRanges.filter(function (range) {
	      return fromStorageToLocal.hasOwnProperty(range.key);
	    }).map(function (range) {
	      return _extends({}, range, { key: fromStorageToLocal[range.key] });
	    });

	    var entities = decodeEntityRanges(text, filteredEntityRanges);
	    var characterList = createCharacterList(inlineStyles, entities);

	    return new ContentBlock({ key: key, type: type, text: text, depth: depth, characterList: characterList, data: data });
	  });

	  return ContentState.createFromBlockArray(contentBlocks);
	}

	module.exports = convertFromRawToDraftState;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createCharacterList
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(6);
	var Immutable = __webpack_require__(5);

	var List = Immutable.List;


	function createCharacterList(inlineStyles, entities) {
	  var characterArray = inlineStyles.map(function (style, ii) {
	    var entity = entities[ii];
	    return CharacterMetadata.create({ style: style, entity: entity });
	  });
	  return List(characterArray);
	}

	module.exports = createCharacterList;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule decodeEntityRanges
	 * @typechecks
	 * 
	 */

	'use strict';

	var UnicodeUtils = __webpack_require__(105);

	var substr = UnicodeUtils.substr;

	/**
	 * Convert to native JavaScript string lengths to determine ranges.
	 */

	function decodeEntityRanges(text, ranges) {
	  var entities = Array(text.length).fill(null);
	  if (ranges) {
	    ranges.forEach(function (range) {
	      // Using Unicode-enabled substrings converted to JavaScript lengths,
	      // fill the output array with entity keys.
	      var start = substr(text, 0, range.offset).length;
	      var end = start + substr(text, range.offset, range.length).length;
	      for (var ii = start; ii < end; ii++) {
	        entities[ii] = range.key;
	      }
	    });
	  }
	  return entities;
	}

	module.exports = decodeEntityRanges;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule decodeInlineStyleRanges
	 * @typechecks
	 * 
	 */

	'use strict';

	var UnicodeUtils = __webpack_require__(105);

	var _require = __webpack_require__(5);

	var OrderedSet = _require.OrderedSet;
	var substr = UnicodeUtils.substr;


	var EMPTY_SET = OrderedSet();

	/**
	 * Convert to native JavaScript string lengths to determine ranges.
	 */
	function decodeInlineStyleRanges(text, ranges) {
	  var styles = Array(text.length).fill(EMPTY_SET);
	  if (ranges) {
	    ranges.forEach(function ( /*object*/range) {
	      var cursor = substr(text, 0, range.offset).length;
	      var end = cursor + substr(text, range.offset, range.length).length;
	      while (cursor < end) {
	        styles[cursor] = styles[cursor].add(range.style);
	        cursor++;
	      }
	    });
	  }
	  return styles;
	}

	module.exports = decodeInlineStyleRanges;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getVisibleSelectionRect
	 * @typechecks
	 * 
	 */

	'use strict';

	var getRangeBoundingClientRect = __webpack_require__(143);

	/**
	 * Return the bounding ClientRect for the visible DOM selection, if any.
	 * In cases where there are no selected ranges or the bounding rect is
	 * temporarily invalid, return null.
	 */
	function getVisibleSelectionRect(global) {
	  var selection = global.getSelection();
	  if (!selection.rangeCount) {
	    return null;
	  }

	  var range = selection.getRangeAt(0);
	  var boundingRect = getRangeBoundingClientRect(range);
	  var top = boundingRect.top;
	  var right = boundingRect.right;
	  var bottom = boundingRect.bottom;
	  var left = boundingRect.left;

	  // When a re-render leads to a node being removed, the DOM selection will
	  // temporarily be placed on an ancestor node, which leads to an invalid
	  // bounding rect. Discard this state.

	  if (top === 0 && right === 0 && bottom === 0 && left === 0) {
	    return null;
	  }

	  return boundingRect;
	}

	module.exports = getVisibleSelectionRect;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getRangeBoundingClientRect
	 * @typechecks
	 * 
	 */

	'use strict';

	var getRangeClientRects = __webpack_require__(106);

	/**
	 * Like range.getBoundingClientRect() but normalizes for browser bugs.
	 */
	function getRangeBoundingClientRect(range) {
	  // "Return a DOMRect object describing the smallest rectangle that includes
	  // the first rectangle in list and all of the remaining rectangles of which
	  // the height or width is not zero."
	  // http://www.w3.org/TR/cssom-view/#dom-range-getboundingclientrect
	  var rects = getRangeClientRects(range);
	  var top = 0;
	  var right = 0;
	  var bottom = 0;
	  var left = 0;

	  if (rects.length) {
	    var _rects$ = rects[0];
	    top = _rects$.top;
	    right = _rects$.right;
	    bottom = _rects$.bottom;
	    left = _rects$.left;

	    for (var ii = 1; ii < rects.length; ii++) {
	      var rect = rects[ii];
	      if (rect.height !== 0 || rect.width !== 0) {
	        top = Math.min(top, rect.top);
	        right = Math.max(right, rect.right);
	        bottom = Math.max(bottom, rect.bottom);
	        left = Math.min(left, rect.left);
	      }
	    }
	  }

	  return {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left,
	    width: right - left,
	    height: bottom - top
	  };
	}

	module.exports = getRangeBoundingClientRect;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = changeBlockDepth;

	var _draftJs = __webpack_require__(2);

	function changeBlockDepth(editorState, blockKey, newDepth) {
	  var content = editorState.getCurrentContent();
	  var block = content.getBlockForKey(blockKey);
	  var depth = block.getDepth();
	  if (depth === newDepth) {
	    return editorState;
	  }
	  var newBlock = block.set('depth', newDepth);
	  var newContent = content.merge({
	    blockMap: content.getBlockMap().set(blockKey, newBlock)
	  });
	  return _draftJs.EditorState.push(editorState, newContent, 'adjust-depth');
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = changeBlockType;

	var _draftJs = __webpack_require__(2);

	function changeBlockType(editorState, blockKey, newType) {
	  var content = editorState.getCurrentContent();
	  var block = content.getBlockForKey(blockKey);
	  var type = block.getType();
	  if (type === newType) {
	    return editorState;
	  }
	  var newBlock = block.set('type', newType);
	  var newContent = content.merge({
	    blockMap: content.getBlockMap().set(blockKey, newBlock)
	  });
	  return _draftJs.EditorState.push(editorState, newContent, 'change-block-type');
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getBlocksInSelection;

	var _draftJs = __webpack_require__(2);

	var _immutable = __webpack_require__(147);

	function getBlocksInSelection(editorState) {
	  var contentState = editorState.getCurrentContent();
	  var blockMap = contentState.getBlockMap();
	  var selection = editorState.getSelection();
	  if (selection.isCollapsed()) {
	    return new _immutable.OrderedMap();
	  }

	  var startKey = selection.getStartKey();
	  var endKey = selection.getEndKey();
	  if (startKey === endKey) {
	    return new _immutable.OrderedMap({ startKey: contentState.getBlockForKey(startKey) });
	  }
	  var blocksUntilEnd = blockMap.takeUntil(function (block, key) {
	    return key === endKey;
	  });
	  return blocksUntilEnd.skipUntil(function (block, key) {
	    return key === startKey;
	  });
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = insertBlockAfter;

	var _draftJs = __webpack_require__(2);

	function insertBlockAfter(editorState, blockKey, newType) {
	  var content = editorState.getCurrentContent();
	  var blockMap = content.getBlockMap();
	  var block = blockMap.get(blockKey);
	  var blocksBefore = blockMap.toSeq().takeUntil(function (v) {
	    return v === block;
	  });
	  var blocksAfter = blockMap.toSeq().skipUntil(function (v) {
	    return v === block;
	  }).rest();
	  var newBlockKey = (0, _draftJs.genKey)();
	  var newBlock = new _draftJs.ContentBlock({
	    key: newBlockKey,
	    type: newType,
	    text: '',
	    characterList: block.getCharacterList().slice(0, 0),
	    depth: 0
	  });
	  var newBlockMap = blocksBefore.concat([[blockKey, block], [newBlockKey, newBlock]], blocksAfter).toOrderedMap();
	  var selection = editorState.getSelection();
	  var newContent = content.merge({
	    blockMap: newBlockMap,
	    selectionBefore: selection,
	    selectionAfter: selection.merge({
	      anchorKey: newBlockKey,
	      anchorOffset: 0,
	      focusKey: newBlockKey,
	      focusOffset: 0,
	      isBackward: false
	    })
	  });
	  return _draftJs.EditorState.push(editorState, newContent, 'split-block');
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isListItem;

	var _draftJsUtils = __webpack_require__(150);

	function isListItem(block) {
	  var blockType = block.getType();
	  return blockType === _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM || blockType === _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM;
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Constants = __webpack_require__(151);

	Object.keys(_Constants).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Constants[key];
	    }
	  });
	});
	Object.defineProperty(exports, 'Constants', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Constants).default;
	  }
	});

	var _getEntityRanges = __webpack_require__(152);

	Object.defineProperty(exports, 'getEntityRanges', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getEntityRanges).default;
	  }
	});

	var _getSelectedBlocks = __webpack_require__(153);

	Object.defineProperty(exports, 'getSelectedBlocks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getSelectedBlocks).default;
	  }
	});

	var _selectionContainsEntity = __webpack_require__(154);

	Object.defineProperty(exports, 'selectionContainsEntity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_selectionContainsEntity).default;
	  }
	});

	var _callModifierForSelectedBlocks = __webpack_require__(155);

	Object.defineProperty(exports, 'callModifierForSelectedBlocks', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_callModifierForSelectedBlocks).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BLOCK_TYPE = exports.BLOCK_TYPE = {
	  // This is used to represent a normal text block (paragraph).
	  UNSTYLED: 'unstyled',
	  HEADER_ONE: 'header-one',
	  HEADER_TWO: 'header-two',
	  HEADER_THREE: 'header-three',
	  HEADER_FOUR: 'header-four',
	  HEADER_FIVE: 'header-five',
	  HEADER_SIX: 'header-six',
	  UNORDERED_LIST_ITEM: 'unordered-list-item',
	  ORDERED_LIST_ITEM: 'ordered-list-item',
	  BLOCKQUOTE: 'blockquote',
	  PULLQUOTE: 'pullquote',
	  CODE: 'code-block',
	  ATOMIC: 'atomic'
	};

	var ENTITY_TYPE = exports.ENTITY_TYPE = {
	  LINK: 'LINK',
	  IMAGE: 'IMAGE'
	};

	var INLINE_STYLE = exports.INLINE_STYLE = {
	  BOLD: 'BOLD',
	  CODE: 'CODE',
	  ITALIC: 'ITALIC',
	  STRIKETHROUGH: 'STRIKETHROUGH',
	  UNDERLINE: 'UNDERLINE'
	};

	exports.default = {
	  BLOCK_TYPE: BLOCK_TYPE,
	  ENTITY_TYPE: ENTITY_TYPE,
	  INLINE_STYLE: INLINE_STYLE
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EMPTY_SET = undefined;
	exports.default = getEntityRanges;

	var _immutable = __webpack_require__(147);

	var EMPTY_SET = exports.EMPTY_SET = new _immutable.OrderedSet();

	function getEntityRanges(text, charMetaList) {
	  var charEntity = null;
	  var prevCharEntity = null;
	  var ranges = [];
	  var rangeStart = 0;
	  for (var i = 0, len = text.length; i < len; i++) {
	    prevCharEntity = charEntity;
	    var meta = charMetaList.get(i);
	    charEntity = meta ? meta.getEntity() : null;
	    if (i > 0 && charEntity !== prevCharEntity) {
	      ranges.push([prevCharEntity, getStyleRanges(text.slice(rangeStart, i), charMetaList.slice(rangeStart, i))]);
	      rangeStart = i;
	    }
	  }
	  ranges.push([charEntity, getStyleRanges(text.slice(rangeStart), charMetaList.slice(rangeStart))]);
	  return ranges;
	}

	function getStyleRanges(text, charMetaList) {
	  var charStyle = EMPTY_SET;
	  var prevCharStyle = EMPTY_SET;
	  var ranges = [];
	  var rangeStart = 0;
	  for (var i = 0, len = text.length; i < len; i++) {
	    prevCharStyle = charStyle;
	    var meta = charMetaList.get(i);
	    charStyle = meta ? meta.getStyle() : EMPTY_SET;
	    if (i > 0 && !(0, _immutable.is)(charStyle, prevCharStyle)) {
	      ranges.push([text.slice(rangeStart, i), prevCharStyle]);
	      rangeStart = i;
	    }
	  }
	  ranges.push([text.slice(rangeStart), charStyle]);
	  return ranges;
	}

/***/ },
/* 153 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Returns an array of all `ContentBlock` instances within two block keys
	 *
	 * @param  {object} contentState A draft.js `ContentState` instance
	 * @param  {string} anchorKey    The block key to start searching from
	 * @param  {string} focusKey     The block key until which to search
	 *
	 * @return {array} An array containing the found content blocks
	 */

	exports.default = function (contentState, anchorKey, focusKey) {
	  var isSameBlock = anchorKey === focusKey;
	  var startingBlock = contentState.getBlockForKey(anchorKey);

	  if (!startingBlock) {
	    return [];
	  }

	  var selectedBlocks = [startingBlock];

	  if (!isSameBlock) {
	    var blockKey = anchorKey;

	    while (blockKey !== focusKey) {
	      var nextBlock = contentState.getBlockAfter(blockKey);

	      if (!nextBlock) {
	        selectedBlocks = [];
	        break;
	      }

	      selectedBlocks.push(nextBlock);
	      blockKey = nextBlock.getKey();
	    }
	  }

	  return selectedBlocks;
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getSelectedBlocks = __webpack_require__(153);

	var _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (strategy) {
	  return function (editorState, selection) {
	    var contentState = editorState.getCurrentContent();
	    var currentSelection = selection || editorState.getSelection();
	    var startKey = currentSelection.getStartKey();
	    var endKey = currentSelection.getEndKey();
	    var startOffset = currentSelection.getStartOffset();
	    var endOffset = currentSelection.getEndOffset();

	    var isSameBlock = startKey === endKey;
	    var selectedBlocks = (0, _getSelectedBlocks2.default)(contentState, startKey, endKey);
	    var entityFound = false;

	    // We have to shift the offset to not get false positives when selecting
	    // a character just before or after an entity
	    var finalStartOffset = startOffset + 1;
	    var finalEndOffset = endOffset - 1;

	    selectedBlocks.forEach(function (block) {
	      strategy(block, function (start, end) {
	        if (entityFound) {
	          return;
	        }

	        var blockKey = block.getKey();

	        if (isSameBlock && (end < finalStartOffset || start > finalEndOffset)) {
	          return;
	        } else if (blockKey === startKey && end < finalStartOffset) {
	          return;
	        } else if (blockKey === endKey && start > finalEndOffset) {
	          return;
	        }

	        entityFound = true;
	      });
	    });

	    return entityFound;
	  };
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(2);

	var _getSelectedBlocks = __webpack_require__(153);

	var _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Calls a provided `modifier` function with a selection for each
	 * selected block in the current editor selection. Passes through additional
	 * arguments to the modifier.
	 *
	 * Note: At the moment it will retain the original selection and override
	 * possible selection changes from modifiers
	 *
	 * @param  {object} editorState The current draft.js editor state object
	 *
	 * @param  {function} modifier  A modifier function to be executed.
	 *                              Must have the signature (editorState, selection, ...)
	 *
	 * @param  {mixed} ...args      Additional arguments to be passed through to the modifier
	 *
	 * @return {object} The new editor state
	 */

	exports.default = function (editorState, modifier) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  var contentState = editorState.getCurrentContent();
	  var currentSelection = editorState.getSelection();

	  var startKey = currentSelection.getStartKey();
	  var endKey = currentSelection.getEndKey();
	  var startOffset = currentSelection.getStartOffset();
	  var endOffset = currentSelection.getEndOffset();

	  var isSameBlock = startKey === endKey;
	  var selectedBlocks = (0, _getSelectedBlocks2.default)(contentState, startKey, endKey);

	  var finalEditorState = editorState;
	  selectedBlocks.forEach(function (block) {
	    var currentBlockKey = block.getKey();
	    var selectionStart = startOffset;
	    var selectionEnd = endOffset;

	    if (currentBlockKey === startKey) {
	      selectionStart = startOffset;
	      selectionEnd = isSameBlock ? endOffset : block.getText().length;
	    } else if (currentBlockKey === endKey) {
	      selectionStart = isSameBlock ? startOffset : 0;
	      selectionEnd = endOffset;
	    } else {
	      selectionStart = 0;
	      selectionEnd = block.getText().length;
	    }

	    var selection = new _draftJs.SelectionState({
	      anchorKey: currentBlockKey,
	      anchorOffset: selectionStart,
	      focusKey: currentBlockKey,
	      focusOffset: selectionEnd
	    });

	    finalEditorState = modifier.apply(undefined, [finalEditorState, selection].concat(args));
	  });

	  return _draftJs.EditorState.forceSelection(finalEditorState, currentSelection);
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isSoftNewlineEvent
	 * @typechecks
	 * 
	 */

	'use strict';

	var Keys = __webpack_require__(47);

	function isSoftNewlineEvent(e) {
	  return e.which === Keys.RETURN && (e.getModifierState('Shift') || e.getModifierState('Alt') || e.getModifierState('Control'));
	}

	module.exports = isSoftNewlineEvent;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _KeyBindingUtil = __webpack_require__(101);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(54);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _draftJs = __webpack_require__(2);

	var _draftJsUtils = __webpack_require__(150);

	var _EditorToolbarConfig = __webpack_require__(158);

	var _StyleButton = __webpack_require__(159);

	var _StyleButton2 = _interopRequireDefault(_StyleButton);

	var _PopoverIconButton = __webpack_require__(173);

	var _PopoverIconButton2 = _interopRequireDefault(_PopoverIconButton);

	var _ButtonGroup = __webpack_require__(175);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var _Dropdown = __webpack_require__(180);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _IconButton = __webpack_require__(160);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _getEntityAtCursor2 = __webpack_require__(183);

	var _getEntityAtCursor3 = _interopRequireDefault(_getEntityAtCursor2);

	var _clearEntityForRange = __webpack_require__(184);

	var _clearEntityForRange2 = _interopRequireDefault(_clearEntityForRange);

	var _classAutobind = __webpack_require__(163);

	var _classAutobind2 = _interopRequireDefault(_classAutobind);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _EditorToolbar = __webpack_require__(185);

	var _EditorToolbar2 = _interopRequireDefault(_EditorToolbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditorToolbar = function (_Component) {
	  _inherits(EditorToolbar, _Component);

	  function EditorToolbar() {
	    _classCallCheck(this, EditorToolbar);

	    var _this = _possibleConstructorReturn(this, (EditorToolbar.__proto__ || Object.getPrototypeOf(EditorToolbar)).apply(this, arguments));

	    (0, _classAutobind2.default)(_this);
	    _this.state = {
	      showLinkInput: false,
	      showImageInput: false
	    };
	    return _this;
	  }

	  _createClass(EditorToolbar, [{
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
	      var className = this.props.className;

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(_EditorToolbar2.default.root, className) },
	        this._renderInlineStyleButtons(),
	        this._renderBlockTypeButtons(),
	        this._renderLinkButtons(),
	        this._renderImageButton(),
	        this._renderBlockTypeDropdown(),
	        this._renderUndoRedo()
	      );
	    }
	  }, {
	    key: '_renderBlockTypeDropdown',
	    value: function _renderBlockTypeDropdown() {
	      var blockType = this._getCurrentBlockType();
	      var choices = new Map(_EditorToolbarConfig.BLOCK_TYPE_DROPDOWN.map(function (type) {
	        return [type.style, type.label];
	      }));
	      if (!choices.has(blockType)) {
	        blockType = Array.from(choices.keys())[0];
	      }
	      return _react2.default.createElement(
	        _ButtonGroup2.default,
	        null,
	        _react2.default.createElement(_Dropdown2.default, {
	          choices: choices,
	          selectedKey: blockType,
	          onChange: this._selectBlockType
	        })
	      );
	    }
	  }, {
	    key: '_renderBlockTypeButtons',
	    value: function _renderBlockTypeButtons() {
	      var _this2 = this;

	      var blockType = this._getCurrentBlockType();
	      var buttons = _EditorToolbarConfig.BLOCK_TYPE_BUTTONS.map(function (type, index) {
	        return _react2.default.createElement(_StyleButton2.default, {
	          key: String(index),
	          isActive: type.style === blockType,
	          label: type.label,
	          onToggle: _this2._toggleBlockType,
	          style: type.style
	        });
	      });
	      return _react2.default.createElement(
	        _ButtonGroup2.default,
	        null,
	        buttons
	      );
	    }
	  }, {
	    key: '_renderInlineStyleButtons',
	    value: function _renderInlineStyleButtons() {
	      var _this3 = this;

	      var editorState = this.props.editorState;

	      var currentStyle = editorState.getCurrentInlineStyle();
	      var buttons = _EditorToolbarConfig.INLINE_STYLE_BUTTONS.map(function (type, index) {
	        return _react2.default.createElement(_StyleButton2.default, {
	          key: String(index),
	          isActive: currentStyle.has(type.style),
	          label: type.label,
	          onToggle: _this3._toggleInlineStyle,
	          style: type.style
	        });
	      });
	      return _react2.default.createElement(
	        _ButtonGroup2.default,
	        null,
	        buttons
	      );
	    }
	  }, {
	    key: '_renderLinkButtons',
	    value: function _renderLinkButtons() {
	      var editorState = this.props.editorState;

	      var selection = editorState.getSelection();
	      var entity = this._getEntityAtCursor();
	      var hasSelection = !selection.isCollapsed();
	      var isCursorOnLink = entity != null && entity.type === _draftJsUtils.ENTITY_TYPE.LINK;
	      var shouldShowLinkButton = hasSelection || isCursorOnLink;
	      return _react2.default.createElement(
	        _ButtonGroup2.default,
	        null,
	        _react2.default.createElement(_PopoverIconButton2.default, {
	          label: 'Link',
	          iconName: 'link',
	          isDisabled: !shouldShowLinkButton,
	          showPopover: this.state.showLinkInput,
	          onTogglePopover: this._toggleShowLinkInput,
	          onSubmit: this._setLink
	        }),
	        _react2.default.createElement(_IconButton2.default, {
	          label: 'Remove Link',
	          iconName: 'remove-link',
	          isDisabled: !isCursorOnLink,
	          onClick: this._removeLink,
	          focusOnClick: false
	        })
	      );
	    }
	  }, {
	    key: '_renderImageButton',
	    value: function _renderImageButton() {
	      return _react2.default.createElement(
	        _ButtonGroup2.default,
	        null,
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
	    value: function _renderUndoRedo() {
	      var editorState = this.props.editorState;

	      var canUndo = editorState.getUndoStack().size !== 0;
	      var canRedo = editorState.getRedoStack().size !== 0;
	      return _react2.default.createElement(
	        _ButtonGroup2.default,
	        null,
	        _react2.default.createElement(_IconButton2.default, {
	          label: 'Undo',
	          iconName: 'undo',
	          isDisabled: !canUndo,
	          onClick: this._undo,
	          focusOnClick: false
	        }),
	        _react2.default.createElement(_IconButton2.default, {
	          label: 'Redo',
	          iconName: 'redo',
	          isDisabled: !canRedo,
	          onClick: this._redo,
	          focusOnClick: false
	        })
	      );
	    }
	  }, {
	    key: '_onKeypress',
	    value: function _onKeypress(event, eventFlags) {
	      // Catch cmd+k for use with link insertion.
	      if ((0, _KeyBindingUtil.hasCommandModifier)(event) && event.keyCode === 75) {
	        // TODO: Ensure there is some text selected.
	        this.setState({ showLinkInput: true });
	        eventFlags.wasHandled = true;
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
	          var _document = document;
	          var activeElement = _document.activeElement;

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
	          var _document2 = document;
	          var activeElement = _document2.activeElement;

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
	        var blockKey = entity.blockKey;
	        var startOffset = entity.startOffset;
	        var endOffset = entity.endOffset;

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
	      var _this4 = this;

	      // Hacky: Wait to focus the editor so we don't lose selection.
	      setTimeout(function () {
	        _this4.props.focusEditor();
	      }, 50);
	    }
	  }]);

	  return EditorToolbar;
	}(_react.Component);

	exports.default = EditorToolbar;

/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var INLINE_STYLE_BUTTONS = exports.INLINE_STYLE_BUTTONS = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Strikethrough', style: 'STRIKETHROUGH' }, { label: 'Monospace', style: 'CODE' }];

	var BLOCK_TYPE_DROPDOWN = exports.BLOCK_TYPE_DROPDOWN = [{ label: 'Normal', style: 'unstyled' }, { label: 'Heading Large', style: 'header-one' }, { label: 'Heading Medium', style: 'header-two' }, { label: 'Heading Small', style: 'header-three' }, { label: 'Code Block', style: 'code-block' }];
	var BLOCK_TYPE_BUTTONS = exports.BLOCK_TYPE_BUTTONS = [{ label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Blockquote', style: 'blockquote' }];

	exports.default = {
	  INLINE_STYLE_BUTTONS: INLINE_STYLE_BUTTONS,
	  BLOCK_TYPE_DROPDOWN: BLOCK_TYPE_DROPDOWN,
	  BLOCK_TYPE_BUTTONS: BLOCK_TYPE_BUTTONS
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _IconButton = __webpack_require__(160);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _classAutobind = __webpack_require__(163);

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
	      var _props = this.props;
	      var style = _props.style;
	      var onToggle = _props.onToggle;

	      var otherProps = _objectWithoutProperties(_props, ['style', 'onToggle']); // eslint-disable-line no-unused-vars


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

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Button = __webpack_require__(162);

	var _Button2 = _interopRequireDefault(_Button);

	var _ButtonWrap = __webpack_require__(168);

	var _ButtonWrap2 = _interopRequireDefault(_ButtonWrap);

	var _IconButton = __webpack_require__(171);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// TODO: Use a more specific type here.
	var IconButton = function (_Component) {
	  _inherits(IconButton, _Component);

	  function IconButton() {
	    _classCallCheck(this, IconButton);

	    return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
	  }

	  _createClass(IconButton, [{
	    key: 'render',
	    value: function render() {
	      var _cx;

	      var props = this.props;
	      var className = props.className;
	      var iconName = props.iconName;
	      var label = props.label;
	      var children = props.children;
	      var isActive = props.isActive;

	      var otherProps = _objectWithoutProperties(props, ['className', 'iconName', 'label', 'children', 'isActive']);

	      className = (0, _classnames2.default)(className, (_cx = {}, _defineProperty(_cx, _IconButton2.default.root, true), _defineProperty(_cx, _IconButton2.default.isActive, isActive), _cx));
	      return _react2.default.createElement(
	        _ButtonWrap2.default,
	        null,
	        _react2.default.createElement(
	          _Button2.default,
	          _extends({}, otherProps, { title: label, className: className }),
	          _react2.default.createElement('span', { className: _IconButton2.default['icon-' + iconName] })
	        ),
	        children
	      );
	    }
	  }]);

	  return IconButton;
	}(_react.Component);

	exports.default = IconButton;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _classAutobind = __webpack_require__(163);

	var _classAutobind2 = _interopRequireDefault(_classAutobind);

	var _Button = __webpack_require__(164);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// TODO: Use a more specific type here.
	var Button = function (_Component) {
	  _inherits(Button, _Component);

	  function Button() {
	    _classCallCheck(this, Button);

	    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

	    (0, _classAutobind2.default)(_this);
	    return _this;
	  }

	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var className = props.className;
	      var isDisabled = props.isDisabled;
	      var focusOnClick = props.focusOnClick;
	      var formSubmit = props.formSubmit;

	      var otherProps = _objectWithoutProperties(props, ['className', 'isDisabled', 'focusOnClick', 'formSubmit']);

	      className = (0, _classnames2.default)(className, _Button2.default.root);
	      var onMouseDown = focusOnClick === false ? this._onMouseDownPreventDefault : props.onMouseDown;
	      var type = formSubmit ? 'submit' : 'button';
	      return _react2.default.createElement(
	        'button',
	        _extends({ type: type }, otherProps, { onMouseDown: onMouseDown, className: className, disabled: isDisabled }),
	        props.children
	      );
	    }
	  }, {
	    key: '_onMouseDownPreventDefault',
	    value: function _onMouseDownPreventDefault(event) {
	      event.preventDefault();
	      var onMouseDown = this.props.onMouseDown;

	      if (onMouseDown != null) {
	        onMouseDown(event);
	      }
	    }
	  }]);

	  return Button;
	}(_react.Component);

	exports.default = Button;

/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = autobind;


	// The following React methods should not be automatically bound.
	var REACT_EXCLUDE_METHODS = {
	  getChildContext: true,
	  render: true,
	  componentWillMount: true,
	  componentDidMount: true,
	  componentWillReceiveProps: true,
	  shouldComponentUpdate: true,
	  componentWillUpdate: true,
	  componentDidUpdate: true,
	  componentWillUnmount: true
	};

	function isExcluded(methodName) {
	  return REACT_EXCLUDE_METHODS[methodName] === true;
	}

	function isFunction(item) {
	  return typeof item === 'function';
	}

	function autobind(instance, proto) {
	  if (proto == null) {
	    proto = Object.getPrototypeOf(instance);
	  }
	  var propertyNames = Object.getOwnPropertyNames(proto);
	  for (var _iterator = propertyNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var name = _ref;

	    var value = proto[name];
	    if (isFunction(value) && !isExcluded(name)) {
	      instance[name] = proto[name].bind(instance);
	    }
	  }
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(165);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./Button.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./Button.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".Button__root___1t9vg {\r\n  display: inline-block;\r\n  margin: 0 5px 0 0;\r\n  padding: 3px 8px;\r\n  height: 30px;\r\n  line-height: 22px;\r\n  box-sizing: border-box;\r\n  background: none #fdfdfd;\r\n  background: linear-gradient(to bottom, #fdfdfd 0%,#f6f7f8 100%);\r\n  border: 1px solid #999;\r\n  border-radius: 2px;\r\n  color: #333;\r\n  text-decoration: none;\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n}\r\n\r\n.Button__root___1t9vg:disabled {\r\n  cursor: not-allowed;\r\n  background: none transparent;\r\n}\r\n\r\n.Button__root___1t9vg:disabled > * {\r\n  opacity: .5;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "Button__root___1t9vg"
	};

/***/ },
/* 166 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = ButtonWrap;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ButtonWrap = __webpack_require__(169);

	var _ButtonWrap2 = _interopRequireDefault(_ButtonWrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ButtonWrap(props) {
	  var className = (0, _classnames2.default)(props.className, _ButtonWrap2.default.root);
	  return _react2.default.createElement('div', _extends({}, props, { className: className }));
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(170);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./ButtonWrap.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./ButtonWrap.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".ButtonWrap__root___2qgcQ {\r\n  display: inline-block;\r\n  position: relative;\r\n  /* This ensures the popover will show on top of the editor. */\r\n  z-index: 10;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "ButtonWrap__root___2qgcQ"
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./IconButton.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./IconButton.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".IconButton__root___2awWb {\r\n  padding-left: 3px;\r\n  padding-right: 3px;\r\n}\r\n\r\n.IconButton__icon___2DdFx {\r\n  display: inline-block;\r\n  width: 22px;\r\n  height: 22px;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: 18px;\r\n}\r\n\r\n.IconButton__isActive___2rZ4Z {\r\n  background: none #d8d8d8;\r\n}\r\n\r\n.IconButton__icon-undo___2w6D8 {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuODU2IDI0YzIuNjY1LTQuODMgMy4xMTUtMTIuMTk1LTcuMzU2LTExLjk1VjE4bC05LTkgOS05djUuODJDMjMuMDM4IDUuNDk1IDI0LjQzNSAxNi44OSAxNy44NTYgMjR6Ii8+PC9zdmc+\");\r\n  background-size: 14px;\r\n}\r\n.IconButton__icon-redo___Uq9D7 {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNSA1LjgyVjBsOSA5LTkgOXYtNS45NUMzLjAzIDExLjgwNiAzLjQ3OCAxOS4xNyA2LjE0NCAyNC0uNDM2IDE2Ljg5Ljk2MiA1LjQ5NCAxMy41IDUuODJ6Ii8+PC9zdmc+\");\r\n  background-size: 14px;\r\n}\r\n\r\n.IconButton__icon-unordered-list-item___1cs8c {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNC42NTYgMy4zNDRIMTR2MS4zMTNINC42NTZWMy4zNDR6bTAgNS4zMTJWNy4zNDNIMTR2MS4zMTNINC42NTZ6bTAgNHYtMS4zMTNIMTR2MS4zMTNINC42NTZ6bS0yLTEuNTNxLjM3NSAwIC42NC4yNXQuMjY3LjYyNC0uMjY2LjYyNS0uNjQuMjUtLjYyNi0uMjVUMS43OCAxMnQuMjUtLjYyNS42MjYtLjI1em0wLTguMTI2cS40MDYgMCAuNzAzLjI4dC4yOTYuNzItLjI5Ny43Mi0uNzA0LjI4LS43MDMtLjI4VDEuNjU2IDR0LjI5Ny0uNzIuNzAzLS4yOHptMCA0cS40MDYgMCAuNzAzLjI4dC4yOTYuNzItLjI5Ny43Mi0uNzA0LjI4LS43MDMtLjI4VDEuNjU2IDh0LjI5Ny0uNzIuNzAzLS4yOHoiLz48L3N2Zz4=\");\r\n}\r\n.IconButton__icon-ordered-list-item___3JgbM {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNC42NTYgOC42NTZWNy4zNDNIMTR2MS4zMTNINC42NTZ6bTAgNHYtMS4zMTNIMTR2MS4zMTNINC42NTZ6bTAtOS4zMTJIMTR2MS4zMTNINC42NTZWMy4zNDR6bS0zLjMxMiA0di0uNjg4aDJ2LjYyNWwtMS4yMiAxLjM3NmgxLjIydi42ODhoLTJWOC43MmwxLjE4OC0xLjM3NkgxLjM0NHptLjY1Ni0ydi0yaC0uNjU2di0uNjg4aDEuMzEzdjIuNjg4SDJ6bS0uNjU2IDZ2LS42ODhoMnYyLjY4OGgtMnYtLjY4OGgxLjMxM3YtLjMxM0gydi0uNjg4aC42NTd2LS4zMTNIMS4zNDR6Ii8+PC9zdmc+\");\r\n}\r\n.IconButton__icon-blockquote___uz2D0 {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOS4zNDQgMTEuMzQ0bDEuMzEzLTIuNjg4aC0ydi00aDR2NGwtMS4zMTMgMi42ODhoLTJ6bS01LjM0NCAwbDEuMzQ0LTIuNjg4aC0ydi00aDR2NEw2IDExLjM0NEg0eiIvPjwvc3ZnPg==\");\r\n}\r\n\r\n.IconButton__icon-bold___FMXgD {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOSAxMC4zNDRxLjQzOCAwIC43Mi0uMjk3dC4yOC0uNzAzLS4yOC0uNzAzVDkgOC4zNDVINi42NTZ2Mkg5em0tMi4zNDQtNnYyaDJxLjQwNiAwIC43MDMtLjI5N3QuMjk2LS43MDMtLjI5Ny0uNzAzLS43MDQtLjI5NmgtMnptMy43NSAyLjg0NHExLjQzOC42NTYgMS40MzggMi4yOCAwIDEuMDY0LS43MDMgMS43OThUOS4zNzYgMTJoLTQuNzJWMi42NTZoNC4xOXExLjEyNCAwIDEuODkuNzh0Ljc2NiAxLjkwNy0xLjA5MyAxLjg0NHoiLz48L3N2Zz4=\");\r\n}\r\n.IconButton__icon-italic___2Tb_j {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNi42NTYgMi42NTZIMTJ2MmgtMS44NzVMNy44NzUgMTBoMS40N3YySDR2LTJoMS44NzVsMi4yNS01LjM0NGgtMS40N3YtMnoiLz48L3N2Zz4=\");\r\n}\r\n.IconButton__icon-underline___23t7Y {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMy4zNDQgMTIuNjU2aDkuMzEzVjE0SDMuMzQ0di0xLjM0NHpNOCAxMS4zNDRxLTEuNjU2IDAtMi44MjgtMS4xNzJUNCA3LjM0NFYyaDEuNjU2djUuMzQ0cTAgLjk3LjY4OCAxLjY0VDggOS42NTh0MS42NTYtLjY3Mi42ODgtMS42NFYySDEydjUuMzQ0UTEyIDkgMTAuODI4IDEwLjE3MlQ4IDExLjM0NHoiLz48L3N2Zz4=\");\r\n}\r\n.IconButton__icon-strikethrough___1Uq4O {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuNTcgMTJxLjE5IDAgLjMxLjEydC4xMi4zMXYuODU2cTAgLjE4OC0uMTIuMzA4dC0uMzEuMTJILjQzcS0uMTg4IDAtLjMwOC0uMTJUMCAxMy4yODZ2LS44NTdxMC0uMTkuMTItLjMxVC40MjggMTJIMjMuNTd6bS0xNy4xLS44NTdxLS4zNzYtLjQ3LS42ODQtMS4wNy0uNjQzLTEuMy0uNjQzLTIuNTIgMC0yLjQyMyAxLjc5NS00LjEzNyAxLjc4LTEuNyA1LjI2My0xLjcuNjcgMCAyLjIzOC4yNTMuODg0LjE2IDIuMzcuNjQyLjEzNS41MS4yODIgMS41OC4xODggMS42NDcuMTg4IDIuNDUgMCAuMjQyLS4wNjcuNjA0bC0uMTYuMDQtMS4xMjUtLjA4LS4xODgtLjAyN3EtLjY3LTEuOTk3LTEuMzgtMi43NDctMS4xNzgtMS4yMi0yLjgxMi0xLjIyLTEuNTI3IDAtMi40MzguNzktLjg5Ny43NzgtLjg5NyAxLjk1NiAwIC45NzcuODg0IDEuODc0dDMuNzM3IDEuNzI4cS45MjUuMjY4IDIuMzE4Ljg4NC43NzcuMzc1IDEuMjcyLjY5Nkg2LjQ3em02Ljc5IDMuNDI4aDUuNTAzcS4wOTQuNTIzLjA5NCAxLjIzMyAwIDEuNDg3LS41NSAyLjg0LS4zMDcuNzM2LS45NSAxLjM5Mi0uNDk2LjQ3LTEuNDYgMS4wODUtMS4wNy42NDMtMi4wNS44ODQtMS4wNy4yOC0yLjcxOC4yOC0xLjUyOCAwLTIuNjEzLS4zMDdsLTEuODc1LS41MzZxLS43NjMtLjIxMy0uOTY0LS4zNzQtLjEwNy0uMTA3LS4xMDctLjI5NXYtLjE3M3EwLTEuNDQ2LS4wMjYtMi4wOS0uMDEzLS40IDAtLjkxbC4wMjctLjQ5NnYtLjU4OGwxLjM2Ny0uMDI3cS4yLjQ1NS40MDIuOTV0LjMuNzUuMTY3LjM2M3EuNDcuNzYzIDEuMDcgMS4yNi41NzcuNDggMS40MDcuNzYyLjc5LjI5NSAxLjc2OC4yOTUuODU3IDAgMS44NjItLjM2MiAxLjAzLS4zNDggMS42MzQtMS4xNTIuNjMtLjgxNi42My0xLjcyNyAwLTEuMTI1LTEuMDg2LTIuMTAzLS40NTUtLjM4OC0xLjgzNS0uOTV6Ii8+PC9zdmc+\");\r\n  background-size: 14px;\r\n}\r\n.IconButton__icon-code___LWqTN {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE2IDExNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNDE0Ij48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0yMi40NjQgMjguNDhjMCAyLjg5NS4zNDQgNS45MDUuODA2IDkuMDIuMzQyIDMuMDEuNjkgNi4wMi42OSA4LjkxNyAwIDMuNTYyLS45MTcgNy43OS04Ljk1NSA3LjkxMnY3LjIzNmM4LjAzNi4xMTUgOC45NTYgNC42NzIgOC45NTYgNy45MTIgMCAyLjg4Ni0uMzQ4IDUuNzgzLS42OSA4Ljc4Ny0uNDYyIDMuMDEzLS44MDYgNi4xMzQtLjgwNiA4LjkyIDAgMTEuMjM4IDcuMTA2IDE1LjI1MiAxNy4wODcgMTUuMjUyaDMuMzJ2LTcuOTEyaC0yLjA2MmMtNS43MjYgMC04LjAyNS0zLjIzMy04LjAyNS04Ljc5NiAwLTIuMjM2LjM0NC00LjU3LjgwNi03LjAyMy4yMjctMi40MzguNjg0LTUuMTIuNjg0LTguMTIuMTE1LTcuNzkyLTMuMzItMTEuMjUzLTkuMTc0LTEyLjU4NnYtLjIyNWM1Ljg1NC0xLjMzMiA5LjI5My00LjY3NiA5LjE3LTEyLjQ3IDAtMi44OTUtLjQ1Ny01LjU2NS0uNjg0LTguMDI0LS40NjItMi40NC0uODA3LTQuNzc3LS44MDctNy4wMTIgMC01LjQ1IDIuMDU4LTguNjg4IDguMDI0LTguNjg4aDIuMDY2di04LjAxNGgtMy4zMmMtMTAuMjA1LS4wMDMtMTcuMDg2IDQuNDQ0LTE3LjA4NiAxNC45MTV6TTkyLjA2IDQ2LjQxN2MwLTIuODkzLjQ1My01LjkwMy44MDMtOC45MTguMzQzLTMuMTE0Ljc5Ny02LjEyLjc5Ny05LjAyIDAtMTAuNDctNi44NzUtMTQuOTE3LTE3LjA4LTE0LjkxN2gtMy4zMjd2OC4wMTdoMi4wNmM1Ljg1Mi4xMTQgNy45MSAzLjIzMyA3LjkxIDguNjg4IDAgMi4yMy0uMzQyIDQuNTY1LS42ODUgNy4wMTItLjM1IDIuNDU1LS42OTIgNS4xMjYtLjY5MiA4LjAyNC0uMTA1IDcuNzk3IDMuMzI3IDExLjEzNiA5LjA1NiAxMi40N3YuMjIyYy01LjcyIDEuMzMzLTkuMTYgNC43OTYtOS4wNTYgMTIuNTg3IDAgMyAuMzQyIDUuNjg2LjY5MiA4LjEyLjM0MyAyLjQ1NS42ODYgNC43OS42ODYgNy4wMjUgMCA1LjU1NC0yLjE4IDguNjgtNy45MTIgOC43ODhoLTIuMDZ2Ny45MTJoMy4zMjVjOS45NzUgMCAxNy4wNzYtNC4wMSAxNy4wNzYtMTUuMjUgMC0yLjc4My0uNDU0LTUuOS0uNzk2LTguOTE0LS4zNDctMy4wMS0uODA1LTUuOS0uODA1LTguNzk1IDAtMy4yMzMgMS4wMzUtNy43OSA4Ljk0My03LjkxM1Y1NC4zMmMtNy45MDQtLjExMi04LjkzNS00LjM0LTguOTM1LTcuOTAzeiIvPjwvZz48L3N2Zz4=\");\r\n}\r\n\r\n.IconButton__icon-link___2I96k {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIyIDI0Ij48cGF0aCBkPSJNMTkuNSAxNi4yODZxMC0uNTM2LS4zNzUtLjkxbC0yLjc4Ni0yLjc4N3EtLjM3Ni0uMzc2LS45MTItLjM3Ni0uNTYzIDAtLjk2NC40M2wuMjU0LjI0N3EuMjE0LjIwOC4yODguMjl0LjIuMjUzLjE3NS4zNDIuMDQ4LjM2OHEwIC41MzYtLjM3NS45MXQtLjkxLjM3NnEtLjIwMiAwLS4zNy0uMDQ4dC0uMzQtLjE3NC0uMjU1LS4yLS4yODgtLjI5LS4yNDgtLjI1M3EtLjQ0Mi40MTUtLjQ0Mi45NzggMCAuNTM2LjM3NS45MWwyLjc2IDIuNzczcS4zNi4zNjIuOTEuMzYyLjUzNiAwIC45MS0uMzQ4bDEuOTctMS45NTVxLjM3NS0uMzc1LjM3NS0uODk3em0tOS40MTUtOS40NDJxMC0uNTM2LS4zNzUtLjkxTDYuOTUgMy4xNnEtLjM3NC0uMzc0LS45MS0uMzc0LS41MjIgMC0uOTEuMzYyTDMuMTYgNS4xMDNxLS4zNzUuMzc1LS4zNzUuODk3IDAgLjUzNi4zNzUuOTFsMi43ODYgMi43ODdxLjM2Mi4zNjIuOTEuMzYyLjU2NCAwIC45NjUtLjQxNmwtLjI1My0uMjQ4cS0uMjEzLS4yMDgtLjI4OC0uMjg4dC0uMjAyLS4yNTQtLjE3NC0uMzQyLS4wNDctLjM2OHEwLS41MzYuMzc1LS45MXQuOTEtLjM3NnEuMjAyIDAgLjM3LjA0N3QuMzQuMTc0LjI1NS4yLjI4OC4yODguMjQ4LjI1NHEuNDQyLS40MTUuNDQyLS45Nzh6bTExLjk4NiA5LjQ0MnEwIDEuNjA3LTEuMTM3IDIuNzJsLTEuOTcgMS45NTRxLTEuMTEgMS4xMTItMi43MTggMS4xMTItMS42MiAwLTIuNzMyLTEuMTM4bC0yLjc2LTIuNzcycS0xLjExLTEuMTEyLTEuMTEtMi43MiAwLTEuNjQ2IDEuMTc4LTIuNzk4bC0xLjE3OC0xLjE4cS0xLjE1MiAxLjE4LTIuNzg2IDEuMTgtMS42MDcgMC0yLjczMi0xLjEyNUwxLjMzOCA4LjczMlEuMjEzIDcuNjA4LjIxMyA2VDEuMzUgMy4yODNsMS45Ny0xLjk1NVE0LjQzMi4yMTUgNi4wNC4yMTVxMS42MiAwIDIuNzMgMS4xMzhsMi43NiAyLjc3MnExLjExMiAxLjExMiAxLjExMiAyLjcyIDAgMS42NDYtMS4xOCAyLjc5OGwxLjE4IDEuMThxMS4xNTItMS4xOCAyLjc4Ni0xLjE4IDEuNjA3IDAgMi43MzIgMS4xMjVsMi43ODYgMi43ODZxMS4xMjUgMS4xMjUgMS4xMjUgMi43MzJ6Ii8+PC9zdmc+\");\r\n  background-size: 14px;\r\n}\r\n\r\n.IconButton__icon-remove-link___2BnS8 {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIyIDI0Ij48cGF0aCBkPSJNNS44OCAxNy4wMjJsLTMuNDMgMy40M3EtLjEzNC4xMi0uMzA4LjEyLS4xNiAwLS4zMDgtLjEyLS4xMi0uMTM1LS4xMi0uMzF0LjEyLS4zMDdsMy40My0zLjQzcS4xMzMtLjEyLjMwNy0uMTJ0LjMxLjEycS4xMi4xMzUuMTIuMzF0LS4xMi4zMDd6bTIuMjYzLjU1djQuMjg1cTAgLjE4OC0uMTIuMzA4dC0uMzEuMTItLjMwNy0uMTItLjEyLS4zMDhWMTcuNTdxMC0uMTg3LjEyLS4zMDd0LjMwOC0uMTIuMzA4LjEyLjEyLjMwOHptLTMtM3EwIC4xODctLjEyLjMwN3QtLjMxLjEySC40M3EtLjE4OCAwLS4zMDgtLjEyVDAgMTQuNTd0LjEyLS4zMDcuMzA4LS4xMmg0LjI4NnEuMTg4IDAgLjMwOC4xMnQuMTIuMzA4em0xNi45MjggMS43MTRxMCAxLjYwNy0xLjEzNyAyLjcybC0xLjk3IDEuOTU0cS0xLjExIDEuMTEyLTIuNzE4IDEuMTEyLTEuNjIgMC0yLjczMi0xLjEzOEw5LjA0IDE2LjQ0N3EtLjI4LS4yOC0uNTYzLS43NWwzLjItLjI0IDMuNjU3IDMuNjdxLjM2Mi4zNi45MS4zNjd0LjkxMi0uMzU1bDEuOTctMS45NTZxLjM3NC0uMzc1LjM3NC0uODk3IDAtLjUzNi0uMzc1LS45MWwtMy42Ny0zLjY4NC4yNC0zLjJxLjQ3LjI4Ljc1LjU2Mmw0LjUgNC41cTEuMTI2IDEuMTUyIDEuMTI2IDIuNzMyek0xMy44MSA2LjU5bC0zLjIuMjRMNi45NSAzLjE2cS0uMzc0LS4zNzUtLjkxLS4zNzUtLjUyMiAwLS45MS4zNjJMMy4xNiA1LjEwMnEtLjM3NS4zNzUtLjM3NS44OTcgMCAuNTM1LjM3NS45MWwzLjY3IDMuNjctLjI0IDMuMjE0cS0uNDctLjI4LS43NS0uNTYzbC00LjUtNC41US4yMTMgNy41OC4yMTMgNnEwLTEuNjA4IDEuMTM4LTIuNzJsMS45Ny0xLjk1NVE0LjQzLjIxMyA2LjA0LjIxM3ExLjYyIDAgMi43MzIgMS4xMzhsNC40NzMgNC40ODhxLjI4LjI4LjU2My43NXptOC40NzggMS4xMjRxMCAuMTg4LS4xMi4zMDh0LS4zMS4xMmgtNC4yODVxLS4xODcgMC0uMzA3LS4xMnQtLjEyLS4zMDguMTItLjMwOC4zMDgtLjEyaDQuMjg3cS4xODggMCAuMzA4LjEydC4xMi4zMDh6TTE1IC40M3Y0LjI4NXEwIC4xODgtLjEyLjMwOHQtLjMxLjEyLS4zMDctLjEyLS4xMi0uMzA4Vi40M3EwLS4xOS4xMi0uMzFUMTQuNTcgMHQuMzEuMTIuMTIuMzF6bTUuNDUgMi4wMmwtMy40MjggMy40M3EtLjE0Ny4xMi0uMzA4LjEydC0uMzA4LS4xMnEtLjEyLS4xMzQtLjEyLS4zMDh0LjEyLS4zMDhsMy40My0zLjQzcS4xMzMtLjEyLjMwNy0uMTJ0LjMwOC4xMnEuMTIyLjEzNS4xMjIuMzF0LS4xMi4zMDd6Ii8+PC9zdmc+\");\r\n  background-size: 14px;\r\n}\r\n\r\n.IconButton__icon-image___2NVj8 {\r\n  background-image: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTMzLjMzMyA1MzMuMzM0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MzMuMzMzIDUzMy4zMzQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDY2LjY2NywxMDBoLTQwMHYzMzMuMzMzaDQwMFYxMDB6IE01MzMuMzMzLDMzLjMzM0w1MzMuMzMzLDMzLjMzM1Y1MDBIMFYzMy4zMzNINTMzLjMzM3ogTTQzMy4zMzMsNDAwSDEwMHYtNjYuNjY3ICAgbDEwMC0xNjYuNjY3bDEzNi45NzksMTY2LjY2N2w5Ni4zNTQtNjYuNjY2VjMwMFY0MDB6IE0zMzMuMzMzLDE4My4zMzNjMCwyNy42MTQsMjIuMzg2LDUwLDUwLDUwczUwLTIyLjM4Niw1MC01MHMtMjIuMzg2LTUwLTUwLTUwICAgUzMzMy4zMzMsMTU1LjcxOSwzMzMuMzMzLDE4My4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\");\r\n  background-size: 14px;\r\n}\r\n\r\n.IconButton__icon-cancel___1A6y8 {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuNzggMTkuMjhMMTYuNSAxMmw3LjI4LTcuMjhhLjc0OC43NDggMCAwIDAgMC0xLjA2TDIwLjM0LjIxOGEuNzUuNzUgMCAwIDAtMS4wNi0uMDAyTDEyIDcuNDk4IDQuNzE3LjIyYS43NDguNzQ4IDAgMCAwLTEuMDYgMEwuMjE3IDMuNjZhLjc1Ljc1IDAgMCAwIDAgMS4wNkw3LjQ5NyAxMmwtNy4yOCA3LjI4YS43NDguNzQ4IDAgMCAwIDAgMS4wNmwzLjQ0IDMuNDRhLjc1Ljc1IDAgMCAwIDEuMDYuMDAybDcuMjgtNy4yOCA3LjI4MiA3LjI4Yy4wNzguMDc4LjE3LjEzNS4yNjguMTcuMjY3LjEuNTguMDQ0Ljc5My0uMTdsMy40NC0zLjQ0YS43NS43NSAwIDAgMCAwLTEuMDZ6Ii8+PC9zdmc+\");\r\n  background-size: 13px;\r\n}\r\n\r\n.IconButton__icon-accept___2elsq {\r\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuMjUgM0w5IDE0LjI1IDMuNzUgOSAwIDEyLjc1bDkgOSAxNS0xNXoiLz48L3N2Zz4=\");\r\n  background-size: 13px;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "IconButton__root___2awWb",
		"icon": "IconButton__icon___2DdFx",
		"isActive": "IconButton__isActive___2rZ4Z",
		"icon-undo": "IconButton__icon-undo___2w6D8 IconButton__icon___2DdFx",
		"icon-redo": "IconButton__icon-redo___Uq9D7 IconButton__icon___2DdFx",
		"icon-unordered-list-item": "IconButton__icon-unordered-list-item___1cs8c IconButton__icon___2DdFx",
		"icon-ordered-list-item": "IconButton__icon-ordered-list-item___3JgbM IconButton__icon___2DdFx",
		"icon-blockquote": "IconButton__icon-blockquote___uz2D0 IconButton__icon___2DdFx",
		"icon-bold": "IconButton__icon-bold___FMXgD IconButton__icon___2DdFx",
		"icon-italic": "IconButton__icon-italic___2Tb_j IconButton__icon___2DdFx",
		"icon-underline": "IconButton__icon-underline___23t7Y IconButton__icon___2DdFx",
		"icon-strikethrough": "IconButton__icon-strikethrough___1Uq4O IconButton__icon___2DdFx",
		"icon-code": "IconButton__icon-code___LWqTN IconButton__icon___2DdFx",
		"icon-link": "IconButton__icon-link___2I96k IconButton__icon___2DdFx",
		"icon-remove-link": "IconButton__icon-remove-link___2BnS8 IconButton__icon___2DdFx",
		"icon-image": "IconButton__icon-image___2NVj8 IconButton__icon___2DdFx",
		"icon-cancel": "IconButton__icon-cancel___1A6y8 IconButton__icon___2DdFx",
		"icon-accept": "IconButton__icon-accept___2elsq IconButton__icon___2DdFx"
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _IconButton = __webpack_require__(160);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _InputPopover = __webpack_require__(174);

	var _InputPopover2 = _interopRequireDefault(_InputPopover);

	var _classAutobind = __webpack_require__(163);

	var _classAutobind2 = _interopRequireDefault(_classAutobind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PopoverIconButton = function (_Component) {
	  _inherits(PopoverIconButton, _Component);

	  function PopoverIconButton() {
	    _classCallCheck(this, PopoverIconButton);

	    var _this = _possibleConstructorReturn(this, (PopoverIconButton.__proto__ || Object.getPrototypeOf(PopoverIconButton)).apply(this, arguments));

	    (0, _classAutobind2.default)(_this);
	    return _this;
	  }

	  _createClass(PopoverIconButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var onTogglePopover = _props.onTogglePopover;
	      var showPopover = _props.showPopover;

	      var props = _objectWithoutProperties(_props, ['onTogglePopover', 'showPopover']); // eslint-disable-line no-unused-vars


	      return _react2.default.createElement(
	        _IconButton2.default,
	        _extends({}, props, { onClick: onTogglePopover }),
	        this._renderPopover()
	      );
	    }
	  }, {
	    key: '_renderPopover',
	    value: function _renderPopover() {
	      if (!this.props.showPopover) {
	        return null;
	      }
	      return _react2.default.createElement(_InputPopover2.default, {
	        onSubmit: this._onSubmit,
	        onCancel: this._hidePopover
	      });
	    }
	  }, {
	    key: '_onSubmit',
	    value: function _onSubmit() {
	      var _props2;

	      (_props2 = this.props).onSubmit.apply(_props2, arguments);
	    }
	  }, {
	    key: '_hidePopover',
	    value: function _hidePopover() {
	      if (this.props.showPopover) {
	        var _props3;

	        (_props3 = this.props).onTogglePopover.apply(_props3, arguments);
	      }
	    }
	  }]);

	  return PopoverIconButton;
	}(_react.Component);

	exports.default = PopoverIconButton;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(54);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _IconButton = __webpack_require__(160);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _ButtonGroup = __webpack_require__(175);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var _classAutobind = __webpack_require__(163);

	var _classAutobind2 = _interopRequireDefault(_classAutobind);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _InputPopover = __webpack_require__(178);

	var _InputPopover2 = _interopRequireDefault(_InputPopover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputPopover = function (_Component) {
	  _inherits(InputPopover, _Component);

	  function InputPopover() {
	    _classCallCheck(this, InputPopover);

	    var _this = _possibleConstructorReturn(this, (InputPopover.__proto__ || Object.getPrototypeOf(InputPopover)).apply(this, arguments));

	    (0, _classAutobind2.default)(_this);
	    return _this;
	  }

	  _createClass(InputPopover, [{
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

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = ButtonGroup;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ButtonGroup = __webpack_require__(176);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ButtonGroup(props_) {
	  var className = (0, _classnames2.default)(props_.className, _ButtonGroup2.default.root);
	  return _react2.default.createElement('div', _extends({}, props_, { className: className }));
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(177);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./ButtonGroup.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./ButtonGroup.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".ButtonGroup__root___2nXYD {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  margin: 0 5px 5px 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n.ButtonGroup__root___2nXYD:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n/* TODO: remove all this child selector and tag selector stuff. */\r\n\r\n.ButtonGroup__root___2nXYD > div > button {\r\n  margin-right: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.ButtonGroup__root___2nXYD > div > button:focus {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.ButtonGroup__root___2nXYD > div:first-child > button {\r\n  border-top-left-radius: 2px;\r\n  border-bottom-left-radius: 2px;\r\n}\r\n\r\n.ButtonGroup__root___2nXYD > div + div > button {\r\n  border-left-width: 0;\r\n}\r\n\r\n.ButtonGroup__root___2nXYD > div:last-child > button {\r\n  border-top-right-radius: 2px;\r\n  border-bottom-right-radius: 2px;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "ButtonGroup__root___2nXYD"
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(179);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./InputPopover.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./InputPopover.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".InputPopover__root___sAIh7 {\r\n  position: absolute;\r\n  top: calc(100% + 5px);\r\n  left: 0;\r\n  width: 260px;\r\n  background: none #fdfdfd;\r\n  background: linear-gradient(to bottom, #fdfdfd 0%,#f6f7f8 100%);\r\n  border: 1px solid #999;\r\n  border-radius: 2px;\r\n  box-sizing: border-box;\r\n  padding: 4px;\r\n}\r\n\r\n.InputPopover__root___sAIh7:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  top: -10px;\r\n  left: 10px;\r\n  border: 5px solid transparent;\r\n  border-bottom-color: #999;\r\n}\r\n\r\n.InputPopover__root___sAIh7:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  top: -9px;\r\n  left: 10px;\r\n  border: 5px solid transparent;\r\n  border-bottom-color: #fdfdfd;\r\n}\r\n\r\n.InputPopover__inner___1sUSg {\r\n  display: flex;\r\n}\r\n\r\n.InputPopover__input___3QwmQ {\r\n  display: block;\r\n  flex: 1 0 auto;\r\n  height: 30px;\r\n  background: none white;\r\n  border: 1px solid #999;\r\n  border-radius: 2px;\r\n  box-sizing: border-box;\r\n  padding: 2px 6px;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: 24px;\r\n}\r\n\r\n.InputPopover__inner___1sUSg .InputPopover__buttonGroup___3zSkK {\r\n  flex: 0 1 auto;\r\n  margin-left: 4px;\r\n  margin-bottom: 0;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "InputPopover__root___sAIh7",
		"inner": "InputPopover__inner___1sUSg",
		"input": "InputPopover__input___3QwmQ",
		"buttonGroup": "InputPopover__buttonGroup___3zSkK"
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classAutobind = __webpack_require__(163);

	var _classAutobind2 = _interopRequireDefault(_classAutobind);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Dropdown = __webpack_require__(181);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dropdown = function (_Component) {
	  _inherits(Dropdown, _Component);

	  function Dropdown() {
	    _classCallCheck(this, Dropdown);

	    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));

	    (0, _classAutobind2.default)(_this);
	    return _this;
	  }

	  _createClass(Dropdown, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var choices = _props.choices;
	      var selectedKey = _props.selectedKey;
	      var className = _props.className;

	      var otherProps = _objectWithoutProperties(_props, ['choices', 'selectedKey', 'className']);

	      className = (0, _classnames2.default)(className, _Dropdown2.default.root);
	      var selectedValue = selectedKey == null ? '' : choices.get(selectedKey);
	      return _react2.default.createElement(
	        'span',
	        { className: className, title: selectedValue },
	        _react2.default.createElement(
	          'select',
	          _extends({}, otherProps, { value: selectedKey, onChange: this._onChange }),
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

	      var entries = Array.from(choices.entries());
	      return entries.map(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2);

	        var key = _ref2[0];
	        var text = _ref2[1];
	        return _react2.default.createElement(
	          'option',
	          { key: key, value: key },
	          text
	        );
	      });
	    }
	  }]);

	  return Dropdown;
	}(_react.Component);

	exports.default = Dropdown;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./Dropdown.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./Dropdown.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".Dropdown__root___1B9ta {\r\n  display: inline-block;\r\n  position: relative;\r\n  line-height: 22px;\r\n  vertical-align: top;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\n.Dropdown__root___1B9ta select {\r\n  position: relative;\r\n  z-index: 2;\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  height: 30px;\r\n  line-height: inherit;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  color: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 4px solid transparent;\r\n  border-right-width: 10px;\r\n  border-left-width: 5px;\r\n  background: none transparent;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.Dropdown__root___1B9ta .Dropdown__value___3gCvl {\r\n  display: block;\r\n  position: absolute;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  line-height: 23px;\r\n  border: 1px solid #999;\r\n  border-radius: 2px;\r\n  padding: 3px;\r\n  padding-right: 33px;\r\n  padding-left: 12px;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.Dropdown__root___1B9ta .Dropdown__value___3gCvl::before,\r\n.Dropdown__root___1B9ta .Dropdown__value___3gCvl::after {\r\n  display: block;\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 10px;\r\n  width: 0;\r\n  height: 0;\r\n  border: 4px solid transparent;\r\n}\r\n\r\n.Dropdown__root___1B9ta .Dropdown__value___3gCvl::before {\r\n  margin-top: -10px;\r\n  border-bottom-color: #555;\r\n}\r\n\r\n.Dropdown__root___1B9ta .Dropdown__value___3gCvl::after {\r\n  margin-top: 1px;\r\n  border-top-color: #555;\r\n}\r\n\r\n.Dropdown__root___1B9ta select:focus + .Dropdown__value___3gCvl {\r\n  border-color: #66afe9;\r\n}\r\n\r\n/* On Webkit we can style <select> to be transparant without turning off the\r\n   default focus styles. This is better for accessibility. */\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .Dropdown__root___1B9ta select {\r\n    opacity: 1;\r\n    color: inherit;\r\n    -webkit-appearance: none;\r\n    border-left-width: 12px;\r\n    border-right-width: 35px;\r\n  }\r\n\r\n  .Dropdown__root___1B9ta select + .Dropdown__value___3gCvl {\r\n    color: transparent;\r\n  }\r\n\r\n  .Dropdown__root___1B9ta select:focus + .Dropdown__value___3gCvl {\r\n    border-color: #999;\r\n  }\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "Dropdown__root___1B9ta",
		"value": "Dropdown__value___3gCvl"
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getEntityAtCursor;
	function getEntityAtOffset(block, offset) {
	  var entityKey = block.getEntityAt(offset);
	  if (entityKey == null) {
	    return null;
	  }
	  var startOffset = offset;
	  while (startOffset > 0 && block.getEntityAt(startOffset - 1) === entityKey) {
	    startOffset -= 1;
	  }
	  var endOffset = startOffset;
	  var blockLength = block.getLength();
	  while (endOffset < blockLength && block.getEntityAt(endOffset + 1) === entityKey) {
	    endOffset += 1;
	  }
	  return {
	    entityKey: entityKey,
	    blockKey: block.getKey(),
	    startOffset: startOffset,
	    endOffset: endOffset + 1
	  };
	}

	function getEntityAtCursor(editorState) {
	  var selection = editorState.getSelection();
	  var startKey = selection.getStartKey();
	  var startBlock = editorState.getCurrentContent().getBlockForKey(startKey);
	  var startOffset = selection.getStartOffset();
	  if (selection.isCollapsed()) {
	    // Get the entity before the cursor (unless the cursor is at the start).
	    return getEntityAtOffset(startBlock, startOffset === 0 ? startOffset : startOffset - 1);
	  }
	  if (startKey !== selection.getEndKey()) {
	    return null;
	  }
	  var endOffset = selection.getEndOffset();
	  var startEntityKey = startBlock.getEntityAt(startOffset);
	  for (var i = startOffset; i < endOffset; i++) {
	    var _entityKey = startBlock.getEntityAt(i);
	    if (_entityKey == null || _entityKey !== startEntityKey) {
	      return null;
	    }
	  }
	  return {
	    entityKey: startEntityKey,
	    blockKey: startBlock.getKey(),
	    startOffset: startOffset,
	    endOffset: endOffset
	  };
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = clearEntityForRange;

	var _draftJs = __webpack_require__(2);

	function clearEntityForRange(editorState, blockKey, startOffset, endOffset) {
	  var contentState = editorState.getCurrentContent();
	  var blockMap = contentState.getBlockMap();
	  var block = blockMap.get(blockKey);
	  var charList = block.getCharacterList();
	  var newCharList = charList.map(function (char, i) {
	    if (i >= startOffset && i < endOffset) {
	      return _draftJs.CharacterMetadata.applyEntity(char, null);
	    } else {
	      return char;
	    }
	  });
	  var newBlock = block.set('characterList', newCharList);
	  var newBlockMap = blockMap.set(blockKey, newBlock);
	  var newContentState = contentState.set('blockMap', newBlockMap);
	  return _draftJs.EditorState.push(editorState, newContentState, 'apply-entity');
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./EditorToolbar.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./EditorToolbar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".EditorToolbar__root___1VC2v {\r\n  font-family: 'Helvetica', sans-serif;\r\n  font-size: 14px;\r\n  margin-bottom: -5px;\r\n  user-select: none;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "EditorToolbar__root___1VC2v"
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _draftJs = __webpack_require__(2);

	var _draftJsExportHtml = __webpack_require__(188);

	var _draftJsImportHtml = __webpack_require__(194);

	var _draftJsExportMarkdown = __webpack_require__(201);

	var _draftJsImportMarkdown = __webpack_require__(203);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EditorValue = function () {
	  function EditorValue(editorState) {
	    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, EditorValue);

	    this._cache = cache;
	    this._editorState = editorState;
	  }

	  _createClass(EditorValue, [{
	    key: 'getEditorState',
	    value: function getEditorState() {
	      return this._editorState;
	    }
	  }, {
	    key: 'setEditorState',
	    value: function setEditorState(editorState) {
	      return this._editorState === editorState ? this : new EditorValue(editorState);
	    }
	  }, {
	    key: 'toString',
	    value: function toString(format) {
	      var fromCache = this._cache[format];
	      if (fromCache != null) {
	        return fromCache;
	      }
	      return this._cache[format] = _toString(this.getEditorState(), format);
	    }
	  }, {
	    key: 'setContentFromString',
	    value: function setContentFromString(markup, format) {
	      var editorState = _draftJs.EditorState.push(this._editorState, fromString(markup, format), 'secondary-paste');
	      return new EditorValue(editorState, _defineProperty({}, format, markup));
	    }
	  }], [{
	    key: 'createEmpty',
	    value: function createEmpty(decorator) {
	      var editorState = _draftJs.EditorState.createEmpty(decorator);
	      return new EditorValue(editorState);
	    }
	  }, {
	    key: 'createFromState',
	    value: function createFromState(editorState) {
	      return new EditorValue(editorState);
	    }
	  }, {
	    key: 'createFromString',
	    value: function createFromString(markup, format, decorator) {
	      var contentState = fromString(markup, format);
	      var editorState = _draftJs.EditorState.createWithContent(contentState, decorator);
	      return new EditorValue(editorState, _defineProperty({}, format, markup));
	    }
	  }]);

	  return EditorValue;
	}();

	exports.default = EditorValue;


	function _toString(editorState, format) {
	  var contentState = editorState.getCurrentContent();
	  switch (format) {
	    case 'html':
	      {
	        return (0, _draftJsExportHtml.stateToHTML)(contentState);
	      }
	    case 'markdown':
	      {
	        return (0, _draftJsExportMarkdown.stateToMarkdown)(contentState);
	      }
	    default:
	      {
	        throw new Error('Format not supported: ' + format);
	      }
	  }
	}

	function fromString(markup, format) {
	  switch (format) {
	    case 'html':
	      {
	        return (0, _draftJsImportHtml.stateFromHTML)(markup);
	      }
	    case 'markdown':
	      {
	        return (0, _draftJsImportMarkdown.stateFromMarkdown)(markup);
	      }
	    default:
	      {
	        throw new Error('Format not supported: ' + format);
	      }
	  }
	}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stateToHTML = __webpack_require__(189);

	Object.defineProperty(exports, 'stateToHTML', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_stateToHTML).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DEFAULT_STYLE_MAP, _ENTITY_ATTR_MAP, _DATA_TO_ATTR;

	exports.default = stateToHTML;

	var _combineOrderedStyles3 = __webpack_require__(190);

	var _combineOrderedStyles4 = _interopRequireDefault(_combineOrderedStyles3);

	var _normalizeAttributes = __webpack_require__(191);

	var _normalizeAttributes2 = _interopRequireDefault(_normalizeAttributes);

	var _styleToCSS = __webpack_require__(192);

	var _styleToCSS2 = _interopRequireDefault(_styleToCSS);

	var _draftJs = __webpack_require__(2);

	var _draftJsUtils = __webpack_require__(150);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var BOLD = _draftJsUtils.INLINE_STYLE.BOLD;
	var CODE = _draftJsUtils.INLINE_STYLE.CODE;
	var ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC;
	var STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH;
	var UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE;


	var INDENT = '  ';
	var BREAK = '<br>';
	var DATA_ATTRIBUTE = /^data-([a-z0-9-]+)$/;

	var DEFAULT_STYLE_MAP = (_DEFAULT_STYLE_MAP = {}, _defineProperty(_DEFAULT_STYLE_MAP, BOLD, { element: 'strong' }), _defineProperty(_DEFAULT_STYLE_MAP, CODE, { element: 'code' }), _defineProperty(_DEFAULT_STYLE_MAP, ITALIC, { element: 'em' }), _defineProperty(_DEFAULT_STYLE_MAP, STRIKETHROUGH, { element: 'del' }), _defineProperty(_DEFAULT_STYLE_MAP, UNDERLINE, { element: 'ins' }), _DEFAULT_STYLE_MAP);

	// Order: inner-most style to outer-most.
	// Examle: <em><strong>foo</strong></em>
	var DEFAULT_STYLE_ORDER = [BOLD, ITALIC, UNDERLINE, STRIKETHROUGH, CODE];

	// Map entity data to element attributes.
	var ENTITY_ATTR_MAP = (_ENTITY_ATTR_MAP = {}, _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.LINK, { url: 'href', rel: 'rel', target: 'target', title: 'title', className: 'class' }), _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.IMAGE, { src: 'src', height: 'height', width: 'width', alt: 'alt', className: 'class' }), _ENTITY_ATTR_MAP);

	// Map entity data to element attributes.
	var DATA_TO_ATTR = (_DATA_TO_ATTR = {}, _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.LINK, function (entityType, entity) {
	  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
	  var data = entity.getData();
	  var attrs = {};
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.keys(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var dataKey = _step.value;

	      var dataValue = data[dataKey];
	      if (attrMap.hasOwnProperty(dataKey)) {
	        var attrKey = attrMap[dataKey];
	        attrs[attrKey] = dataValue;
	      } else if (DATA_ATTRIBUTE.test(dataKey)) {
	        attrs[dataKey] = dataValue;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return attrs;
	}), _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.IMAGE, function (entityType, entity) {
	  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
	  var data = entity.getData();
	  var attrs = {};
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = Object.keys(data)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var dataKey = _step2.value;

	      var dataValue = data[dataKey];
	      if (attrMap.hasOwnProperty(dataKey)) {
	        var attrKey = attrMap[dataKey];
	        attrs[attrKey] = dataValue;
	      } else if (DATA_ATTRIBUTE.test(dataKey)) {
	        attrs[dataKey] = dataValue;
	      }
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  return attrs;
	}), _DATA_TO_ATTR);

	// The reason this returns an array is because a single block might get wrapped
	// in two tags.
	function getTags(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
	      return ['h1'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
	      return ['h2'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
	      return ['h3'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
	      return ['h4'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
	      return ['h5'];
	    case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
	      return ['h6'];
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      return ['li'];
	    case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
	      return ['blockquote'];
	    case _draftJsUtils.BLOCK_TYPE.CODE:
	      return ['pre', 'code'];
	    case _draftJsUtils.BLOCK_TYPE.ATOMIC:
	      return ['figure'];
	    default:
	      return ['p'];
	  }
	}

	function getWrapperTag(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	      return 'ul';
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      return 'ol';
	    default:
	      return null;
	  }
	}

	var MarkupGenerator = function () {
	  // These are related to state.
	  function MarkupGenerator(contentState, options) {
	    _classCallCheck(this, MarkupGenerator);

	    if (options == null) {
	      options = {};
	    }
	    this.contentState = contentState;
	    this.options = options;

	    var _combineOrderedStyles = (0, _combineOrderedStyles4.default)(options.inlineStyles, [DEFAULT_STYLE_MAP, DEFAULT_STYLE_ORDER]);

	    var _combineOrderedStyles2 = _slicedToArray(_combineOrderedStyles, 2);

	    var inlineStyles = _combineOrderedStyles2[0];
	    var styleOrder = _combineOrderedStyles2[1];

	    this.inlineStyles = inlineStyles;
	    this.styleOrder = styleOrder;
	  }
	  // These are related to user-defined options.


	  _createClass(MarkupGenerator, [{
	    key: 'generate',
	    value: function generate() {
	      this.output = [];
	      this.blocks = this.contentState.getBlocksAsArray();
	      this.totalBlocks = this.blocks.length;
	      this.currentBlock = 0;
	      this.indentLevel = 0;
	      this.wrapperTag = null;
	      while (this.currentBlock < this.totalBlocks) {
	        this.processBlock();
	      }
	      this.closeWrapperTag();
	      return this.output.join('').trim();
	    }
	  }, {
	    key: 'processBlock',
	    value: function processBlock() {
	      var blockRenderers = this.options.blockRenderers;

	      var block = this.blocks[this.currentBlock];
	      var blockType = block.getType();
	      var newWrapperTag = getWrapperTag(blockType);
	      if (this.wrapperTag !== newWrapperTag) {
	        if (this.wrapperTag) {
	          this.closeWrapperTag();
	        }
	        if (newWrapperTag) {
	          this.openWrapperTag(newWrapperTag);
	        }
	      }
	      this.indent();
	      // Allow blocks to be rendered using a custom renderer.
	      var customRenderer = blockRenderers != null && blockRenderers.hasOwnProperty(blockType) ? blockRenderers[blockType] : null;
	      var customRendererOutput = customRenderer ? customRenderer(block) : null;
	      // Renderer can return null, which will cause processing to continue as normal.
	      if (customRendererOutput != null) {
	        this.output.push(customRendererOutput);
	        this.output.push('\n');
	        this.currentBlock += 1;
	        return;
	      }
	      this.writeStartTag(block);
	      this.output.push(this.renderBlockContent(block));
	      // Look ahead and see if we will nest list.
	      var nextBlock = this.getNextBlock();
	      if (canHaveDepth(blockType) && nextBlock && nextBlock.getDepth() === block.getDepth() + 1) {
	        this.output.push('\n');
	        // This is a litle hacky: temporarily stash our current wrapperTag and
	        // render child list(s).
	        var thisWrapperTag = this.wrapperTag;
	        this.wrapperTag = null;
	        this.indentLevel += 1;
	        this.currentBlock += 1;
	        this.processBlocksAtDepth(nextBlock.getDepth());
	        this.wrapperTag = thisWrapperTag;
	        this.indentLevel -= 1;
	        this.indent();
	      } else {
	        this.currentBlock += 1;
	      }
	      this.writeEndTag(block);
	    }
	  }, {
	    key: 'processBlocksAtDepth',
	    value: function processBlocksAtDepth(depth) {
	      var block = this.blocks[this.currentBlock];
	      while (block && block.getDepth() === depth) {
	        this.processBlock();
	        block = this.blocks[this.currentBlock];
	      }
	      this.closeWrapperTag();
	    }
	  }, {
	    key: 'getNextBlock',
	    value: function getNextBlock() {
	      return this.blocks[this.currentBlock + 1];
	    }
	  }, {
	    key: 'writeStartTag',
	    value: function writeStartTag(block) {
	      var tags = getTags(block.getType());

	      var attrString = void 0;
	      if (this.options.blockStyleFn) {
	        var _ref = this.options.blockStyleFn(block) || {};

	        var _attributes = _ref.attributes;
	        var _style = _ref.style;
	        // Normalize `className` -> `class`, etc.

	        _attributes = (0, _normalizeAttributes2.default)(_attributes);
	        if (_style != null) {
	          var styleAttr = (0, _styleToCSS2.default)(_style);
	          _attributes = _attributes == null ? { style: styleAttr } : _extends({}, _attributes, { style: styleAttr });
	        }
	        attrString = stringifyAttrs(_attributes);
	      } else {
	        attrString = '';
	      }

	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = tags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var tag = _step3.value;

	          this.output.push('<' + tag + attrString + '>');
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'writeEndTag',
	    value: function writeEndTag(block) {
	      var tags = getTags(block.getType());
	      if (tags.length === 1) {
	        this.output.push('</' + tags[0] + '>\n');
	      } else {
	        var output = [];
	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;

	        try {
	          for (var _iterator4 = tags[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var tag = _step4.value;

	            output.unshift('</' + tag + '>');
	          }
	        } catch (err) {
	          _didIteratorError4 = true;
	          _iteratorError4 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	              _iterator4.return();
	            }
	          } finally {
	            if (_didIteratorError4) {
	              throw _iteratorError4;
	            }
	          }
	        }

	        this.output.push(output.join('') + '\n');
	      }
	    }
	  }, {
	    key: 'openWrapperTag',
	    value: function openWrapperTag(wrapperTag) {
	      this.wrapperTag = wrapperTag;
	      this.indent();
	      this.output.push('<' + wrapperTag + '>\n');
	      this.indentLevel += 1;
	    }
	  }, {
	    key: 'closeWrapperTag',
	    value: function closeWrapperTag() {
	      var wrapperTag = this.wrapperTag;

	      if (wrapperTag) {
	        this.indentLevel -= 1;
	        this.indent();
	        this.output.push('</' + wrapperTag + '>\n');
	        this.wrapperTag = null;
	      }
	    }
	  }, {
	    key: 'indent',
	    value: function indent() {
	      this.output.push(INDENT.repeat(this.indentLevel));
	    }
	  }, {
	    key: 'renderBlockContent',
	    value: function renderBlockContent(block) {
	      var _this = this;

	      var blockType = block.getType();
	      var text = block.getText();
	      if (text === '') {
	        // Prevent element collapse if completely empty.
	        return BREAK;
	      }
	      text = this.preserveWhitespace(text);
	      var charMetaList = block.getCharacterList();
	      var entityPieces = (0, _draftJsUtils.getEntityRanges)(text, charMetaList);
	      return entityPieces.map(function (_ref2) {
	        var _ref3 = _slicedToArray(_ref2, 2);

	        var entityKey = _ref3[0];
	        var stylePieces = _ref3[1];

	        var content = stylePieces.map(function (_ref4) {
	          var _ref5 = _slicedToArray(_ref4, 2);

	          var text = _ref5[0];
	          var styleSet = _ref5[1];

	          var content = encodeContent(text);
	          var _iteratorNormalCompletion5 = true;
	          var _didIteratorError5 = false;
	          var _iteratorError5 = undefined;

	          try {
	            for (var _iterator5 = _this.styleOrder[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	              var _styleName = _step5.value;

	              // If our block type is CODE then don't wrap inline code elements.
	              if (_styleName === CODE && blockType === _draftJsUtils.BLOCK_TYPE.CODE) {
	                continue;
	              }
	              if (styleSet.has(_styleName)) {
	                var _inlineStyles$_styleN = _this.inlineStyles[_styleName];
	                var _element = _inlineStyles$_styleN.element;
	                var _attributes2 = _inlineStyles$_styleN.attributes;
	                var _style2 = _inlineStyles$_styleN.style;

	                if (_element == null) {
	                  _element = 'span';
	                }
	                // Normalize `className` -> `class`, etc.
	                _attributes2 = (0, _normalizeAttributes2.default)(_attributes2);
	                if (_style2 != null) {
	                  var styleAttr = (0, _styleToCSS2.default)(_style2);
	                  _attributes2 = _attributes2 == null ? { style: styleAttr } : _extends({}, _attributes2, { style: styleAttr });
	                }
	                var attrString = stringifyAttrs(_attributes2);
	                content = '<' + _element + attrString + '>' + content + '</' + _element + '>';
	              }
	            }
	          } catch (err) {
	            _didIteratorError5 = true;
	            _iteratorError5 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                _iterator5.return();
	              }
	            } finally {
	              if (_didIteratorError5) {
	                throw _iteratorError5;
	              }
	            }
	          }

	          return content;
	        }).join('');
	        var entity = entityKey ? _draftJs.Entity.get(entityKey) : null;
	        // Note: The `toUpperCase` below is for compatability with some libraries that use lower-case for image blocks.
	        var entityType = entity == null ? null : entity.getType().toUpperCase();
	        if (entityType != null && entityType === _draftJsUtils.ENTITY_TYPE.LINK) {
	          var attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
	          var attrString = stringifyAttrs(attrs);
	          return '<a' + attrString + '>' + content + '</a>';
	        } else if (entityType != null && entityType === _draftJsUtils.ENTITY_TYPE.IMAGE) {
	          var _attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
	          var _attrString = stringifyAttrs(_attrs);
	          return '<img' + _attrString + '/>';
	        } else {
	          return content;
	        }
	      }).join('');
	    }
	  }, {
	    key: 'preserveWhitespace',
	    value: function preserveWhitespace(text) {
	      var length = text.length;
	      // Prevent leading/trailing/consecutive whitespace collapse.
	      var newText = new Array(length);
	      for (var i = 0; i < length; i++) {
	        if (text[i] === ' ' && (i === 0 || i === length - 1 || text[i - 1] === ' ')) {
	          newText[i] = '\xA0';
	        } else {
	          newText[i] = text[i];
	        }
	      }
	      return newText.join('');
	    }
	  }]);

	  return MarkupGenerator;
	}();

	function stringifyAttrs(attrs) {
	  if (attrs == null) {
	    return '';
	  }
	  var parts = [];
	  var _iteratorNormalCompletion6 = true;
	  var _didIteratorError6 = false;
	  var _iteratorError6 = undefined;

	  try {
	    for (var _iterator6 = Object.keys(attrs)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	      var name = _step6.value;

	      var value = attrs[name];
	      if (value != null) {
	        parts.push(' ' + name + '="' + encodeAttr(value + '') + '"');
	      }
	    }
	  } catch (err) {
	    _didIteratorError6 = true;
	    _iteratorError6 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion6 && _iterator6.return) {
	        _iterator6.return();
	      }
	    } finally {
	      if (_didIteratorError6) {
	        throw _iteratorError6;
	      }
	    }
	  }

	  return parts.join('');
	}

	function canHaveDepth(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      return true;
	    default:
	      return false;
	  }
	}

	function encodeContent(text) {
	  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('\xA0').join('&nbsp;').split('\n').join(BREAK + '\n');
	}

	function encodeAttr(text) {
	  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
	}

	function stateToHTML(content, options) {
	  return new MarkupGenerator(content, options).generate();
	}

/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function combineOrderedStyles(customMap, defaults) {
	  if (customMap == null) {
	    return defaults;
	  }

	  var _defaults = _slicedToArray(defaults, 2);

	  var defaultStyleMap = _defaults[0];
	  var defaultStyleOrder = _defaults[1];

	  var styleMap = _extends({}, defaultStyleMap);
	  var styleOrder = [].concat(_toConsumableArray(defaultStyleOrder));
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.keys(customMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _styleName = _step.value;

	      if (defaultStyleMap.hasOwnProperty(_styleName)) {
	        var defaultStyles = defaultStyleMap[_styleName];
	        styleMap[_styleName] = _extends({}, defaultStyles, customMap[_styleName]);
	      } else {
	        styleMap[_styleName] = customMap[_styleName];
	        styleOrder.push(_styleName);
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return [styleMap, styleOrder];
	}

	exports.default = combineOrderedStyles;

/***/ },
/* 191 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
	var ATTR_NAME_MAP = {
	  acceptCharset: 'accept-charset',
	  className: 'class',
	  htmlFor: 'for',
	  httpEquiv: 'http-equiv'
	};

	function normalizeAttributes(attributes) {
	  if (attributes == null) {
	    return attributes;
	  }
	  var normalized = {};
	  var didNormalize = false;
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.keys(attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var name = _step.value;

	      var newName = name;
	      if (ATTR_NAME_MAP.hasOwnProperty(name)) {
	        newName = ATTR_NAME_MAP[name];
	        didNormalize = true;
	      }
	      normalized[newName] = attributes[name];
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return didNormalize ? normalized : attributes;
	}

	exports.default = normalizeAttributes;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CSSProperty = __webpack_require__(193);

	var VENDOR_PREFIX = /^(moz|ms|o|webkit)-/;

	var NUMERIC_STRING = /^\d+$/;
	var UPPERCASE_PATTERN = /([A-Z])/g;

	// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/CSSPropertyOperations.js
	function processStyleName(name) {
	  return name.replace(UPPERCASE_PATTERN, '-$1').toLowerCase().replace(VENDOR_PREFIX, '-$1-');
	}

	// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/dangerousStyleValue.js
	function processStyleValue(name, value) {
	  var isNumeric = void 0;
	  if (typeof value === 'string') {
	    isNumeric = NUMERIC_STRING.test(value);
	  } else {
	    isNumeric = true;
	    value = String(value);
	  }
	  if (!isNumeric || value === '0' || _CSSProperty.isUnitlessNumber[name] === true) {
	    return value;
	  } else {
	    return value + 'px';
	  }
	}

	function styleToCSS(styleDescr) {
	  return Object.keys(styleDescr).map(function (name) {
	    var styleValue = processStyleValue(name, styleDescr[name]);
	    var styleName = processStyleName(name);
	    return styleName + ': ' + styleValue;
	  }).join('; ');
	}

	exports.default = styleToCSS;

/***/ },
/* 193 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */

	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stateFromHTML = __webpack_require__(195);

	Object.defineProperty(exports, 'stateFromHTML', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_stateFromHTML).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stateFromHTML;

	var _draftJsImportElement = __webpack_require__(196);

	var _parseHTML = __webpack_require__(200);

	var _parseHTML2 = _interopRequireDefault(_parseHTML);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function stateFromHTML(html, options) {
	  var parser = options == null || options.parser == null ? _parseHTML2.default : options.parser;
	  var element = parser(html);
	  return (0, _draftJsImportElement.stateFromElement)(element, options);
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stateFromElement = __webpack_require__(197);

	Object.defineProperty(exports, 'stateFromElement', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_stateFromElement).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = stateFromElement;

	var _replaceTextWithMeta3 = __webpack_require__(198);

	var _replaceTextWithMeta4 = _interopRequireDefault(_replaceTextWithMeta3);

	var _draftJs = __webpack_require__(2);

	var _immutable = __webpack_require__(147);

	var _draftJsUtils = __webpack_require__(150);

	var _syntheticDom = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// A ParsedBlock has two purposes:
	//   1) to keep data about the block (textFragments, type)
	//   2) to act as some context for storing parser state as we parse its contents
	var NO_STYLE = (0, _immutable.OrderedSet)();
	var NO_ENTITY = null;

	var EMPTY_BLOCK = new _draftJs.ContentBlock({
	  key: (0, _draftJs.genKey)(),
	  text: '',
	  type: _draftJsUtils.BLOCK_TYPE.UNSTYLED,
	  characterList: (0, _immutable.List)(),
	  depth: 0
	});

	var LINE_BREAKS = /(\r\n|\r|\n)/g;
	// We use `\r` because that character is always stripped from source (normalized
	// to `\n`), so it's safe to assume it will only appear in the text content when
	// we put it there as a placeholder.
	var SOFT_BREAK_PLACEHOLDER = '\r';
	var ZERO_WIDTH_SPACE = '\u200B';
	var DATA_ATTRIBUTE = /^data-([a-z0-9-]+)$/;

	// Map element attributes to entity data.
	var ELEM_ATTR_MAP = {
	  a: { href: 'url', rel: 'rel', target: 'target', title: 'title' },
	  img: { src: 'src', alt: 'alt' }
	};

	var getEntityData = function getEntityData(tagName, element) {
	  var data = {};
	  if (ELEM_ATTR_MAP.hasOwnProperty(tagName)) {
	    var attrMap = ELEM_ATTR_MAP[tagName];
	    for (var i = 0; i < element.attributes.length; i++) {
	      var _element$attributes$i = element.attributes[i];
	      var name = _element$attributes$i.name;
	      var value = _element$attributes$i.value;

	      if (value != null) {
	        if (attrMap.hasOwnProperty(name)) {
	          var newName = attrMap[name];
	          data[newName] = value;
	        } else if (DATA_ATTRIBUTE.test(name)) {
	          data[name] = value;
	        }
	      }
	    }
	  }
	  return data;
	};

	// Functions to convert elements to entities.
	var ELEM_TO_ENTITY = {
	  a: function a(tagName, element) {
	    var data = getEntityData(tagName, element);
	    // Don't add `<a>` elements with no href.
	    if (data.url != null) {
	      return _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.LINK, 'MUTABLE', data);
	    }
	  },
	  img: function img(tagName, element) {
	    var data = getEntityData(tagName, element);
	    // Don't add `<img>` elements with no src.
	    if (data.src != null) {
	      return _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.IMAGE, 'MUTABLE', data);
	    }
	  }
	};

	// TODO: Move this out to a module.
	var INLINE_ELEMENTS = {
	  a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1,
	  canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1,
	  embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1,
	  label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1, output: 1,
	  progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1,
	  span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, var: 1,
	  video: 1, wbr: 1, acronym: 1, applet: 1, basefont: 1, big: 1, font: 1,
	  isindex: 1, strike: 1, style: 1, tt: 1
	};

	// These elements are special because they cannot contain text as a direct
	// child (some cannot contain childNodes at all).
	var SPECIAL_ELEMENTS = {
	  area: 1, base: 1, br: 1, col: 1, colgroup: 1, command: 1, dl: 1, embed: 1,
	  head: 1, hgroup: 1, hr: 1, iframe: 1, img: 1, input: 1, keygen: 1, link: 1,
	  meta: 1, ol: 1, optgroup: 1, option: 1, param: 1, script: 1, select: 1,
	  source: 1, style: 1, table: 1, tbody: 1, textarea: 1, tfoot: 1, thead: 1,
	  title: 1, tr: 1, track: 1, ul: 1, wbr: 1, basefont: 1, dialog: 1, dir: 1,
	  isindex: 1
	};

	// These elements are special because they cannot contain childNodes.
	var SELF_CLOSING_ELEMENTS = { img: 1 };

	var BlockGenerator = function () {
	  function BlockGenerator() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, BlockGenerator);

	    this.options = options;
	    // This represents the hierarchy as we traverse nested elements; for
	    // example [body, ul, li] where we must know li's parent type (ul or ol).
	    this.blockStack = [];
	    // This is a linear list of blocks that will form the output; for example
	    // [p, li, li, blockquote].
	    this.blockList = [];
	    this.depth = 0;
	  }

	  _createClass(BlockGenerator, [{
	    key: 'process',
	    value: function process(element) {
	      this.processBlockElement(element);
	      var contentBlocks = [];
	      this.blockList.forEach(function (block) {
	        var _concatFragments = concatFragments(block.textFragments);

	        var text = _concatFragments.text;
	        var characterMeta = _concatFragments.characterMeta;

	        var includeEmptyBlock = false;
	        // If the block contains only a soft break then don't discard the block,
	        // but discard the soft break.
	        if (text === SOFT_BREAK_PLACEHOLDER) {
	          includeEmptyBlock = true;
	          text = '';
	        }
	        if (block.tagName === 'pre') {
	          var _trimLeadingNewline = trimLeadingNewline(text, characterMeta);

	          text = _trimLeadingNewline.text;
	          characterMeta = _trimLeadingNewline.characterMeta;
	        } else {
	          var _collapseWhiteSpace = collapseWhiteSpace(text, characterMeta);

	          text = _collapseWhiteSpace.text;
	          characterMeta = _collapseWhiteSpace.characterMeta;
	        }
	        // Previously we were using a placeholder for soft breaks. Now that we
	        // have collapsed whitespace we can change it back to normal line breaks.
	        text = text.split(SOFT_BREAK_PLACEHOLDER).join('\n');
	        // Discard empty blocks (unless otherwise specified).
	        if (text.length || includeEmptyBlock) {
	          contentBlocks.push(new _draftJs.ContentBlock({
	            key: (0, _draftJs.genKey)(),
	            text: text,
	            type: block.type,
	            characterList: characterMeta.toList(),
	            depth: block.depth
	          }));
	        }
	      });
	      if (contentBlocks.length) {
	        return contentBlocks;
	      } else {
	        return [EMPTY_BLOCK];
	      }
	    }
	  }, {
	    key: 'getBlockTypeFromTagName',
	    value: function getBlockTypeFromTagName(tagName) {
	      switch (tagName) {
	        case 'li':
	          {
	            var parent = this.blockStack.slice(-1)[0];
	            return parent.tagName === 'ol' ? _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM : _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM;
	          }
	        case 'blockquote':
	          {
	            return _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE;
	          }
	        case 'h1':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_ONE;
	          }
	        case 'h2':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_TWO;
	          }
	        case 'h3':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_THREE;
	          }
	        case 'h4':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_FOUR;
	          }
	        case 'h5':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_FIVE;
	          }
	        case 'h6':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_SIX;
	          }
	        case 'pre':
	          {
	            return _draftJsUtils.BLOCK_TYPE.CODE;
	          }
	        case 'figure':
	          {
	            return _draftJsUtils.BLOCK_TYPE.ATOMIC;
	          }
	        default:
	          {
	            return _draftJsUtils.BLOCK_TYPE.UNSTYLED;
	          }
	      }
	    }
	  }, {
	    key: 'processBlockElement',
	    value: function processBlockElement(element) {
	      if (!element) {
	        return;
	      }
	      var tagName = element.nodeName.toLowerCase();
	      var type = this.getBlockTypeFromTagName(tagName);
	      var hasDepth = canHaveDepth(type);
	      var allowRender = !SPECIAL_ELEMENTS.hasOwnProperty(tagName);
	      var block = {
	        tagName: tagName,
	        textFragments: [],
	        type: type,
	        styleStack: [NO_STYLE],
	        entityStack: [NO_ENTITY],
	        depth: hasDepth ? this.depth : 0
	      };
	      if (allowRender) {
	        this.blockList.push(block);
	        if (hasDepth) {
	          this.depth += 1;
	        }
	      }
	      this.blockStack.push(block);
	      if (element.childNodes != null) {
	        Array.from(element.childNodes).forEach(this.processNode, this);
	      }
	      this.blockStack.pop();
	      if (allowRender && hasDepth) {
	        this.depth -= 1;
	      }
	    }
	  }, {
	    key: 'processInlineElement',
	    value: function processInlineElement(element) {
	      var tagName = element.nodeName.toLowerCase();
	      if (tagName === 'br') {
	        this.processText(SOFT_BREAK_PLACEHOLDER);
	        return;
	      }
	      var block = this.blockStack.slice(-1)[0];
	      var style = block.styleStack.slice(-1)[0];
	      var entityKey = block.entityStack.slice(-1)[0];
	      style = addStyleFromTagName(style, tagName, this.options.elementStyles);
	      if (ELEM_TO_ENTITY.hasOwnProperty(tagName)) {
	        // If the to-entity function returns nothing, use the existing entity.
	        entityKey = ELEM_TO_ENTITY[tagName](tagName, element) || entityKey;
	      }
	      block.styleStack.push(style);
	      block.entityStack.push(entityKey);
	      if (element.childNodes != null) {
	        Array.from(element.childNodes).forEach(this.processNode, this);
	      }
	      if (SELF_CLOSING_ELEMENTS.hasOwnProperty(tagName)) {
	        this.processText('~');
	      }
	      block.entityStack.pop();
	      block.styleStack.pop();
	    }
	  }, {
	    key: 'processTextNode',
	    value: function processTextNode(node) {
	      var text = node.nodeValue;
	      // This is important because we will use \r as a placeholder for a soft break.
	      text = text.replace(LINE_BREAKS, '\n');
	      // Replace zero-width space (we use it as a placeholder in markdown) with a
	      // soft break.
	      // TODO: The import-markdown package should correctly turn breaks into <br>
	      // elements so we don't need to include this hack.
	      text = text.split(ZERO_WIDTH_SPACE).join(SOFT_BREAK_PLACEHOLDER);
	      this.processText(text);
	    }
	  }, {
	    key: 'processText',
	    value: function processText(text) {
	      var block = this.blockStack.slice(-1)[0];
	      var style = block.styleStack.slice(-1)[0];
	      var entity = block.entityStack.slice(-1)[0];
	      var charMetadata = _draftJs.CharacterMetadata.create({
	        style: style,
	        entity: entity
	      });
	      var seq = (0, _immutable.Repeat)(charMetadata, text.length);
	      block.textFragments.push({
	        text: text,
	        characterMeta: seq
	      });
	    }
	  }, {
	    key: 'processNode',
	    value: function processNode(node) {
	      if (node.nodeType === _syntheticDom.NODE_TYPE_ELEMENT) {
	        var element = node;
	        var _tagName = element.nodeName.toLowerCase();
	        if (INLINE_ELEMENTS.hasOwnProperty(_tagName)) {
	          this.processInlineElement(element);
	        } else {
	          this.processBlockElement(element);
	        }
	      } else if (node.nodeType === _syntheticDom.NODE_TYPE_TEXT) {
	        this.processTextNode(node);
	      }
	    }
	  }]);

	  return BlockGenerator;
	}();

	function trimLeadingNewline(text, characterMeta) {
	  if (text.charAt(0) === '\n') {
	    text = text.slice(1);
	    characterMeta = characterMeta.slice(1);
	  }
	  return { text: text, characterMeta: characterMeta };
	}

	function trimLeadingSpace(text, characterMeta) {
	  while (text.charAt(0) === ' ') {
	    text = text.slice(1);
	    characterMeta = characterMeta.slice(1);
	  }
	  return { text: text, characterMeta: characterMeta };
	}

	function trimTrailingSpace(text, characterMeta) {
	  while (text.slice(-1) === ' ') {
	    text = text.slice(0, -1);
	    characterMeta = characterMeta.slice(0, -1);
	  }
	  return { text: text, characterMeta: characterMeta };
	}

	function collapseWhiteSpace(text, characterMeta) {
	  text = text.replace(/[ \t\n]/g, ' ');

	  var _trimLeadingSpace = trimLeadingSpace(text, characterMeta);

	  text = _trimLeadingSpace.text;
	  characterMeta = _trimLeadingSpace.characterMeta;

	  var _trimTrailingSpace = trimTrailingSpace(text, characterMeta);

	  text = _trimTrailingSpace.text;
	  characterMeta = _trimTrailingSpace.characterMeta;

	  var i = text.length;
	  while (i--) {
	    if (text.charAt(i) === ' ' && text.charAt(i - 1) === ' ') {
	      text = text.slice(0, i) + text.slice(i + 1);
	      characterMeta = characterMeta.slice(0, i).concat(characterMeta.slice(i + 1));
	    }
	  }
	  // There could still be one space on either side of a softbreak.

	  var _replaceTextWithMeta = (0, _replaceTextWithMeta4.default)({ text: text, characterMeta: characterMeta }, SOFT_BREAK_PLACEHOLDER + ' ', SOFT_BREAK_PLACEHOLDER);

	  text = _replaceTextWithMeta.text;
	  characterMeta = _replaceTextWithMeta.characterMeta;

	  var _replaceTextWithMeta2 = (0, _replaceTextWithMeta4.default)({ text: text, characterMeta: characterMeta }, ' ' + SOFT_BREAK_PLACEHOLDER, SOFT_BREAK_PLACEHOLDER);

	  text = _replaceTextWithMeta2.text;
	  characterMeta = _replaceTextWithMeta2.characterMeta;

	  return { text: text, characterMeta: characterMeta };
	}

	function canHaveDepth(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      {
	        return true;
	      }
	    default:
	      {
	        return false;
	      }
	  }
	}

	function concatFragments(fragments) {
	  var text = '';
	  var characterMeta = (0, _immutable.Seq)();
	  fragments.forEach(function (textFragment) {
	    text = text + textFragment.text;
	    characterMeta = characterMeta.concat(textFragment.characterMeta);
	  });
	  return { text: text, characterMeta: characterMeta };
	}

	function addStyleFromTagName(styleSet, tagName, elementStyles) {
	  switch (tagName) {
	    case 'b':
	    case 'strong':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.BOLD);
	      }
	    case 'i':
	    case 'em':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.ITALIC);
	      }
	    case 'ins':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.UNDERLINE);
	      }
	    case 'code':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.CODE);
	      }
	    case 'del':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.STRIKETHROUGH);
	      }
	    default:
	      {
	        // Allow custom styles to be provided.
	        if (elementStyles && elementStyles[tagName]) {
	          return styleSet.add(elementStyles[tagName]);
	        }

	        return styleSet;
	      }
	  }
	}

	function stateFromElement(element, options) {
	  var blocks = new BlockGenerator(options).process(element);
	  return _draftJs.ContentState.createFromBlockArray(blocks);
	}

/***/ },
/* 198 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = replaceTextWithMeta;
	function replaceTextWithMeta(subject, searchText, replaceText) {
	  var text = subject.text;
	  var characterMeta = subject.characterMeta;

	  var searchTextLength = searchText.length;
	  var replaceTextLength = replaceText.length;
	  var resultTextParts = [];
	  // Get empty set of same kind as characterMeta.
	  var resultCharMeta = characterMeta.slice(0, 0);
	  var lastEndIndex = 0;
	  var index = text.indexOf(searchText);
	  while (index !== -1) {
	    resultTextParts.push(text.slice(lastEndIndex, index) + replaceText);
	    resultCharMeta = resultCharMeta.concat(characterMeta.slice(lastEndIndex, index),
	    // Use the metadata of the first char we are replacing.
	    repeatSeq(characterMeta.slice(index, index + 1), replaceTextLength));
	    lastEndIndex = index + searchTextLength;
	    index = text.indexOf(searchText, lastEndIndex);
	  }
	  resultTextParts.push(text.slice(lastEndIndex));
	  resultCharMeta = resultCharMeta.concat(characterMeta.slice(lastEndIndex));
	  return { text: resultTextParts.join(''), characterMeta: resultCharMeta };
	}

	function repeatSeq(seq, count) {
	  var result = seq.slice(0, 0);
	  while (count-- > 0) {
	    result = result.concat(seq);
	  }
	  return result;
	}

/***/ },
/* 199 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NODE_TYPE_ELEMENT = exports.NODE_TYPE_ELEMENT = 1;
	var NODE_TYPE_TEXT = exports.NODE_TYPE_TEXT = 3;
	var NODE_TYPE_FRAGMENT = exports.NODE_TYPE_FRAGMENT = 11;
	var SELF_CLOSING = exports.SELF_CLOSING = {
	  area: true, base: true, br: true, col: true, embed: true, hr: true, img: true,
	  input: true, keygen: true, link: true, meta: true, param: true, source: true,
	  track: true, wbr: true
	};

	var Node = exports.Node = function Node() {
	  _classCallCheck(this, Node);
	};

	var TextNode = exports.TextNode = function (_Node) {
	  _inherits(TextNode, _Node);

	  function TextNode(value) {
	    _classCallCheck(this, TextNode);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextNode).apply(this, arguments));

	    _this.nodeType = NODE_TYPE_TEXT;
	    _this.nodeName = '#text';
	    _this.nodeValue = value;
	    return _this;
	  }

	  _createClass(TextNode, [{
	    key: 'toString',
	    value: function toString() {
	      return escape(this.nodeValue);
	    }
	  }]);

	  return TextNode;
	}(Node);

	var ElementNode = exports.ElementNode = function (_Node2) {
	  _inherits(ElementNode, _Node2);

	  function ElementNode(name, attributes, childNodes) {
	    _classCallCheck(this, ElementNode);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ElementNode).apply(this, arguments));

	    var isSelfClosing = SELF_CLOSING[name] === true;
	    _this2.nodeType = NODE_TYPE_ELEMENT;
	    _this2.nodeName = name;
	    _this2.attributes = attributes == null ? new Map() : new Map(attributes);
	    _this2.childNodes = [];
	    _this2.isSelfClosing = isSelfClosing;
	    if (!isSelfClosing && childNodes) {
	      childNodes.forEach(_this2.appendChild, _this2);
	    }
	    return _this2;
	  }

	  _createClass(ElementNode, [{
	    key: 'appendChild',
	    value: function appendChild(node) {
	      if (node.nodeType === NODE_TYPE_FRAGMENT) {
	        if (node.childNodes != null) {
	          var _childNodes;

	          (_childNodes = this.childNodes).push.apply(_childNodes, _toConsumableArray(node.childNodes));
	        }
	      } else {
	        this.childNodes.push(node);
	      }
	    }
	  }, {
	    key: 'getAttribute',
	    value: function getAttribute(name) {
	      return this.attributes.get(name);
	    }
	  }, {
	    key: 'toString',
	    value: function toString(isXHTML) {
	      var attributes = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.attributes.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _step$value = _slicedToArray(_step.value, 2);

	          var name = _step$value[0];
	          var value = _step$value[1];

	          attributes.push(name + (value ? '="' + escapeAttr(value) + '"' : ''));
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      var attrString = attributes.length ? ' ' + attributes.join(' ') : '';
	      if (this.isSelfClosing) {
	        return '<' + this.nodeName + attrString + (isXHTML ? '/>' : '>');
	      }
	      var childNodes = this.childNodes.map(function (node) {
	        return node.toString(isXHTML);
	      }).join('');
	      return '<' + this.nodeName + attrString + '>' + childNodes + '</' + this.nodeName + '>';
	    }
	  }]);

	  return ElementNode;
	}(Node);

	var FragmentNode = exports.FragmentNode = function (_Node3) {
	  _inherits(FragmentNode, _Node3);

	  function FragmentNode(childNodes) {
	    _classCallCheck(this, FragmentNode);

	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(FragmentNode).apply(this, arguments));

	    _this3.nodeType = NODE_TYPE_FRAGMENT;
	    _this3.childNodes = [];
	    if (childNodes) {
	      childNodes.forEach(_this3.appendChild, _this3);
	    }
	    return _this3;
	  }

	  _createClass(FragmentNode, [{
	    key: 'appendChild',
	    value: function appendChild(node) {
	      if (node.nodeType === NODE_TYPE_FRAGMENT) {
	        if (node.childNodes != null) {
	          var _childNodes2;

	          (_childNodes2 = this.childNodes).push.apply(_childNodes2, _toConsumableArray(node.childNodes));
	        }
	      } else {
	        this.childNodes.push(node);
	      }
	    }
	  }, {
	    key: 'toString',
	    value: function toString(isXHTML) {
	      return this.childNodes.map(function (node) {
	        return node.toString(isXHTML);
	      }).join('');
	    }
	  }]);

	  return FragmentNode;
	}(Node);

	function escape(html) {
	  return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	function escapeAttr(html) {
	  return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	}

/***/ },
/* 200 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parseHTML;
	function parseHTML(html) {
	  var doc = void 0;
	  if (typeof DOMParser !== 'undefined') {
	    var parser = new DOMParser();
	    doc = parser.parseFromString(html, 'text/html');
	  } else {
	    doc = document.implementation.createHTMLDocument('');
	    doc.documentElement.innerHTML = html;
	  }
	  return doc.body;
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stateToMarkdown = __webpack_require__(202);

	Object.defineProperty(exports, 'stateToMarkdown', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_stateToMarkdown).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = stateToMarkdown;

	var _draftJsUtils = __webpack_require__(150);

	var _draftJs = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BOLD = _draftJsUtils.INLINE_STYLE.BOLD;
	var CODE = _draftJsUtils.INLINE_STYLE.CODE;
	var ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC;
	var STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH;
	var UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE;


	var CODE_INDENT = '    ';

	var MarkupGenerator = function () {
	  function MarkupGenerator(contentState) {
	    _classCallCheck(this, MarkupGenerator);

	    this.contentState = contentState;
	  }

	  _createClass(MarkupGenerator, [{
	    key: 'generate',
	    value: function generate() {
	      this.output = [];
	      this.blocks = this.contentState.getBlockMap().toArray();
	      this.totalBlocks = this.blocks.length;
	      this.currentBlock = 0;
	      this.listItemCounts = {};
	      while (this.currentBlock < this.totalBlocks) {
	        this.processBlock();
	      }
	      return this.output.join('');
	    }
	  }, {
	    key: 'processBlock',
	    value: function processBlock() {
	      var block = this.blocks[this.currentBlock];
	      var blockType = block.getType();
	      switch (blockType) {
	        case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
	          {
	            this.insertLineBreaks(1);
	            this.output.push('# ' + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
	          {
	            this.insertLineBreaks(1);
	            this.output.push('## ' + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
	          {
	            this.insertLineBreaks(1);
	            this.output.push('### ' + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
	          {
	            this.insertLineBreaks(1);
	            this.output.push('#### ' + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
	          {
	            this.insertLineBreaks(1);
	            this.output.push('##### ' + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
	          {
	            this.insertLineBreaks(1);
	            this.output.push('###### ' + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	          {
	            var blockDepth = block.getDepth();
	            var lastBlock = this.getLastBlock();
	            var lastBlockType = lastBlock ? lastBlock.getType() : null;
	            var lastBlockDepth = lastBlock && canHaveDepth(lastBlockType) ? lastBlock.getDepth() : null;
	            if (lastBlockType !== blockType && lastBlockDepth !== blockDepth - 1) {
	              this.insertLineBreaks(1);
	              // Insert an additional line break if following opposite list type.
	              if (lastBlockType === _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM) {
	                this.insertLineBreaks(1);
	              }
	            }
	            var indent = ' '.repeat(block.depth * 2);
	            this.output.push(indent + '- ' + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	          {
	            var _blockDepth = block.getDepth();
	            var _lastBlock = this.getLastBlock();
	            var _lastBlockType = _lastBlock ? _lastBlock.getType() : null;
	            var _lastBlockDepth = _lastBlock && canHaveDepth(_lastBlockType) ? _lastBlock.getDepth() : null;
	            if (_lastBlockType !== blockType && _lastBlockDepth !== _blockDepth - 1) {
	              this.insertLineBreaks(1);
	              // Insert an additional line break if following opposite list type.
	              if (_lastBlockType === _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM) {
	                this.insertLineBreaks(1);
	              }
	            }
	            var _indent = ' '.repeat(_blockDepth * 2);
	            // TODO: figure out what to do with two-digit numbers
	            var count = this.getListItemCount(block) % 10;
	            this.output.push(_indent + (count + '. ') + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
	          {
	            this.insertLineBreaks(1);
	            this.output.push(' > ' + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        case _draftJsUtils.BLOCK_TYPE.CODE:
	          {
	            this.insertLineBreaks(1);
	            this.output.push(CODE_INDENT + this.renderBlockContent(block) + '\n');
	            break;
	          }
	        default:
	          {
	            this.insertLineBreaks(1);
	            this.output.push(this.renderBlockContent(block) + '\n');
	            break;
	          }
	      }
	      this.currentBlock += 1;
	    }
	  }, {
	    key: 'getLastBlock',
	    value: function getLastBlock() {
	      return this.blocks[this.currentBlock - 1];
	    }
	  }, {
	    key: 'getNextBlock',
	    value: function getNextBlock() {
	      return this.blocks[this.currentBlock + 1];
	    }
	  }, {
	    key: 'getListItemCount',
	    value: function getListItemCount(block) {
	      var blockType = block.getType();
	      var blockDepth = block.getDepth();
	      // To decide if we need to start over we need to backtrack (skipping list
	      // items that are of greater depth)
	      var index = this.currentBlock - 1;
	      var prevBlock = this.blocks[index];
	      while (prevBlock && canHaveDepth(prevBlock.getType()) && prevBlock.getDepth() > blockDepth) {
	        index -= 1;
	        prevBlock = this.blocks[index];
	      }
	      if (!prevBlock || prevBlock.getType() !== blockType || prevBlock.getDepth() !== blockDepth) {
	        this.listItemCounts[blockDepth] = 0;
	      }
	      return this.listItemCounts[blockDepth] = this.listItemCounts[blockDepth] + 1;
	    }
	  }, {
	    key: 'insertLineBreaks',
	    value: function insertLineBreaks() {
	      if (this.currentBlock > 0) {
	        this.output.push('\n');
	      }
	    }
	  }, {
	    key: 'renderBlockContent',
	    value: function renderBlockContent(block) {
	      var blockType = block.getType();
	      var text = block.getText();
	      if (text === '') {
	        // Prevent element collapse if completely empty.
	        // TODO: Replace with constant.
	        return '​';
	      }
	      var charMetaList = block.getCharacterList();
	      var entityPieces = (0, _draftJsUtils.getEntityRanges)(text, charMetaList);
	      return entityPieces.map(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2);

	        var entityKey = _ref2[0];
	        var stylePieces = _ref2[1];

	        var content = stylePieces.map(function (_ref3) {
	          var _ref4 = _slicedToArray(_ref3, 2);

	          var text = _ref4[0];
	          var style = _ref4[1];

	          // Don't allow empty inline elements.
	          if (!text) {
	            return '';
	          }
	          var content = encodeContent(text);
	          if (style.has(BOLD)) {
	            content = '**' + content + '**';
	          }
	          if (style.has(UNDERLINE)) {
	            // TODO: encode `+`?
	            content = '++' + content + '++';
	          }
	          if (style.has(ITALIC)) {
	            content = '_' + content + '_';
	          }
	          if (style.has(STRIKETHROUGH)) {
	            // TODO: encode `~`?
	            content = '~~' + content + '~~';
	          }
	          if (style.has(CODE)) {
	            content = blockType === _draftJsUtils.BLOCK_TYPE.CODE ? content : '`' + content + '`';
	          }
	          return content;
	        }).join('');
	        var entity = entityKey ? _draftJs.Entity.get(entityKey) : null;
	        if (entity != null && entity.getType() === _draftJsUtils.ENTITY_TYPE.LINK) {
	          var data = entity.getData();
	          var url = data.url || '';
	          var title = data.title ? ' "' + escapeTitle(data.title) + '"' : '';
	          return '[' + content + '](' + encodeURL(url) + title + ')';
	        } else if (entity != null && entity.getType() === _draftJsUtils.ENTITY_TYPE.IMAGE) {
	          var _data = entity.getData();
	          var src = _data.src || '';
	          var alt = _data.alt ? ' "' + escapeTitle(_data.alt) + '"' : '';
	          return '![' + alt + '](' + encodeURL(src) + ')';
	        } else {
	          return content;
	        }
	      }).join('');
	    }
	  }]);

	  return MarkupGenerator;
	}();

	function canHaveDepth(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      return true;
	    default:
	      return false;
	  }
	}

	function encodeContent(text) {
	  return text.replace(/[*_`]/g, '\\$&');
	}

	// Encode chars that would normally be allowed in a URL but would conflict with
	// our markdown syntax: `[foo](http://foo/)`
	function encodeURL(url) {
	  return url.replace(/\)/g, '%29');
	}

	// Escape quotes using backslash.
	function escapeTitle(text) {
	  return text.replace(/"/g, '\\"');
	}

	function stateToMarkdown(content) {
	  return new MarkupGenerator(content).generate();
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stateFromMarkdown = __webpack_require__(204);

	Object.defineProperty(exports, 'stateFromMarkdown', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_stateFromMarkdown).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stateFromMarkdown;

	var _MarkdownParser = __webpack_require__(205);

	var _MarkdownParser2 = _interopRequireDefault(_MarkdownParser);

	var _draftJsImportElement = __webpack_require__(206);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function stateFromMarkdown(markdown) {
	  var element = _MarkdownParser2.default.parse(markdown, { getAST: true });
	  return (0, _draftJsImportElement.stateFromElement)(element);
	}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _syntheticDom = __webpack_require__(199);

	var hasOwnProperty = Object.prototype.hasOwnProperty; /**
	                                                       * Ported from:
	                                                       *   https://github.com/chjj/marked/blob/49b7eaca/lib/marked.js
	                                                       * TODO:
	                                                       *   Use ES6 classes
	                                                       *   Add flow annotations
	                                                       */
	/* eslint-disable no-spaced-func */

	var assign = Object.assign || function (obj) {
	  var i = 1;
	  for (; i < arguments.length; i++) {
	    var target = arguments[i];
	    for (var key in target) {
	      if (hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }
	  return obj;
	};

	var noop = function noop() {};
	noop.exec = noop;

	var defaults = {
	  gfm: true,
	  breaks: false,
	  pedantic: false,
	  smartLists: false,
	  silent: false,
	  langPrefix: 'lang-',
	  renderer: new Renderer(),
	  xhtml: false
	};

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();

	block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();

	block.blockquote = replace(block.blockquote)('def', block.def)();

	block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('def', block.def)();

	/**
	 * Normal Block Grammar
	 */

	block.normal = assign({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = assign({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = assign({}, options || defaults);
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    this.rules = block.gfm;
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.parse = function (src, options) {
	  var lexer = new Lexer(options);
	  return lexer.parse(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.parse = function (src) {
	  src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function (src, top, bq) {
	  var next;
	  var loose;
	  var cap;
	  var bull;
	  var b;
	  var item;
	  var space;
	  var i;
	  var l;

	  src = src.replace(/^ +$/gm, '');

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3]
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) {
	            loose = next;
	          }
	        }

	        this.tokens.push({
	          type: loose ? 'loose_item_start' : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // def
	    if (!bq && top && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  ins: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();

	inline.reflink = replace(inline.reflink)('inside', inline._inside)();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = assign({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = assign({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = assign({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  ins: /^\+\+(?=\S)([\s\S]*?\S)\+\+/,
	  text: replace(inline.text)(']|', '~+]|')()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = assign({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = assign({}, options || defaults);
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer();
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.parse = function (src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.parse(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.parse = function (src) {
	  var out = new _syntheticDom.FragmentNode();
	  var link;
	  var cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out.appendChild(new _syntheticDom.TextNode(cap[1]));
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out.appendChild(this.outputLink(cap, { href: cap[2], title: cap[3] }));
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out.appendChild(new _syntheticDom.TextNode(cap[0].charAt(0)));
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out.appendChild(this.outputLink(cap, link));
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out.appendChild(this.renderer.strong(this.parse(cap[2] || cap[1])));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out.appendChild(this.renderer.em(this.parse(cap[2] || cap[1])));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out.appendChild(this.renderer.codespan(cap[2]));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out.appendChild(this.renderer.br());
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out.appendChild(this.renderer.del(this.parse(cap[1])));
	      continue;
	    }

	    // ins (gfm extended)
	    if (cap = this.rules.ins.exec(src)) {
	      src = src.substring(cap[0].length);
	      out.appendChild(this.renderer.ins(this.parse(cap[1])));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out.appendChild(this.renderer.text(new _syntheticDom.TextNode(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function (cap, link) {
	  var href = link.href;
	  var title = link.title;

	  return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.parse(cap[1])) : this.renderer.image(href, title, cap[1]);
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function (childNode, lang) {
	  var attributes = [];
	  if (lang) {
	    attributes.push(['class', this.options.langPrefix + lang]);
	  }
	  var codeNode = new _syntheticDom.ElementNode('code', attributes, [childNode]);
	  return new _syntheticDom.ElementNode('pre', [], [codeNode]);
	};

	Renderer.prototype.blockquote = function (childNode) {
	  return new _syntheticDom.ElementNode('blockquote', [], [childNode]);
	};

	Renderer.prototype.heading = function (childNode, level) {
	  return new _syntheticDom.ElementNode('h' + level, [], [childNode]);
	};

	Renderer.prototype.hr = function () {
	  return new _syntheticDom.ElementNode('hr', [], _syntheticDom.SELF_CLOSING);
	};

	Renderer.prototype.list = function (childNode, isOrdered) {
	  return new _syntheticDom.ElementNode(isOrdered ? 'ol' : 'ul', [], [childNode]);
	};

	Renderer.prototype.listitem = function (childNode) {
	  return new _syntheticDom.ElementNode('li', [], [childNode]);
	};

	Renderer.prototype.paragraph = function (childNode) {
	  return new _syntheticDom.ElementNode('p', [], [childNode]);
	};

	// span level renderer
	Renderer.prototype.strong = function (childNode) {
	  return new _syntheticDom.ElementNode('strong', [], [childNode]);
	};

	Renderer.prototype.em = function (childNode) {
	  return new _syntheticDom.ElementNode('em', [], [childNode]);
	};

	Renderer.prototype.codespan = function (text) {
	  return new _syntheticDom.ElementNode('code', [], [new _syntheticDom.TextNode(text)]);
	};

	Renderer.prototype.br = function () {
	  return new _syntheticDom.ElementNode('br', [], _syntheticDom.SELF_CLOSING);
	};

	Renderer.prototype.del = function (childNode) {
	  return new _syntheticDom.ElementNode('del', [], [childNode]);
	};

	Renderer.prototype.ins = function (childNode) {
	  return new _syntheticDom.ElementNode('ins', [], [childNode]);
	};

	Renderer.prototype.link = function (href, title, childNode) {
	  var attributes = [['href', href]];
	  if (title) {
	    attributes.push(['title', title]);
	  }
	  return new _syntheticDom.ElementNode('a', attributes, [childNode]);
	};

	Renderer.prototype.image = function (href, title, alt) {
	  var attributes = [['src', href]];
	  if (title) {
	    attributes.push(['title', title]);
	  }
	  if (alt) {
	    attributes.push(['alt', alt]);
	  }
	  return new _syntheticDom.ElementNode('img', attributes, _syntheticDom.SELF_CLOSING);
	};

	Renderer.prototype.text = function (childNode) {
	  return childNode;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = assign({}, options || defaults);
	  this.options.renderer = this.options.renderer || new Renderer();
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function (src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function (src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.slice().reverse();

	  var out = new _syntheticDom.FragmentNode();
	  while (this.next()) {
	    out.appendChild(this.tok());
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function () {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function () {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function () {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.parse(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function () {
	  switch (this.token.type) {
	    case 'space':
	      {
	        return new _syntheticDom.TextNode('');
	      }
	    case 'hr':
	      {
	        return this.renderer.hr();
	      }
	    case 'heading':
	      {
	        return this.renderer.heading(this.inline.parse(this.token.text), this.token.depth);
	      }
	    case 'code':
	      {
	        return this.renderer.code(this.token.text, this.token.lang);
	      }
	    case 'blockquote_start':
	      {
	        var body = new _syntheticDom.FragmentNode();

	        while (this.next().type !== 'blockquote_end') {
	          body.appendChild(this.tok());
	        }

	        return this.renderer.blockquote(body);
	      }
	    case 'list_start':
	      {
	        var _body = new _syntheticDom.FragmentNode();
	        var ordered = this.token.ordered;

	        while (this.next().type !== 'list_end') {
	          _body.appendChild(this.tok());
	        }

	        return this.renderer.list(_body, ordered);
	      }
	    case 'list_item_start':
	      {
	        var _body2 = new _syntheticDom.FragmentNode();

	        while (this.next().type !== 'list_item_end') {
	          _body2.appendChild(this.token.type === 'text' ? this.parseText() : this.tok());
	        }

	        return this.renderer.listitem(_body2);
	      }
	    case 'loose_item_start':
	      {
	        var _body3 = new _syntheticDom.FragmentNode();

	        while (this.next().type !== 'list_item_end') {
	          _body3.appendChild(this.tok());
	        }

	        return this.renderer.listitem(_body3);
	      }
	    case 'paragraph':
	      {
	        return this.renderer.paragraph(this.inline.parse(this.token.text));
	      }
	    case 'text':
	      {
	        return this.renderer.paragraph(this.parseText());
	      }
	  }
	};

	/**
	 * Helpers
	 */

	function replace(regex, options) {
	  regex = regex.source;
	  options = options || '';
	  return function self(name, val) {
	    if (!name) {
	      return new RegExp(regex, options);
	    }
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	var MarkdownParser = {
	  parse: function parse(src, options) {
	    options = assign({}, defaults, options);
	    try {
	      var fragment = Parser.parse(Lexer.parse(src, options), options);
	    } catch (e) {
	      if (options.silent) {
	        fragment = new _syntheticDom.FragmentNode([new _syntheticDom.ElementNode('p', [], [new _syntheticDom.TextNode('An error occured:')]), new _syntheticDom.ElementNode('pre', [], [new _syntheticDom.TextNode(e.message)])]);
	      } else {
	        throw e;
	      }
	    }
	    if (options.getAST) {
	      return new _syntheticDom.ElementNode('body', [], [fragment]);
	    } else {
	      return fragment.toString(this.options.xhtml);
	    }
	  }
	};

	exports.default = MarkdownParser;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stateFromElement = __webpack_require__(207);

	Object.defineProperty(exports, 'stateFromElement', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_stateFromElement).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = stateFromElement;

	var _replaceTextWithMeta3 = __webpack_require__(208);

	var _replaceTextWithMeta4 = _interopRequireDefault(_replaceTextWithMeta3);

	var _draftJs = __webpack_require__(2);

	var _immutable = __webpack_require__(147);

	var _draftJsUtils = __webpack_require__(150);

	var _syntheticDom = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// A ParsedBlock has two purposes:
	//   1) to keep data about the block (textFragments, type)
	//   2) to act as some context for storing parser state as we parse its contents


	var NO_STYLE = (0, _immutable.OrderedSet)();
	var NO_ENTITY = null;

	var EMPTY_BLOCK = new _draftJs.ContentBlock({
	  key: (0, _draftJs.genKey)(),
	  text: '',
	  type: _draftJsUtils.BLOCK_TYPE.UNSTYLED,
	  characterList: (0, _immutable.List)(),
	  depth: 0
	});

	var LINE_BREAKS = /(\r\n|\r|\n)/g;
	// We use `\r` because that character is always stripped from source (normalized
	// to `\n`), so it's safe to assume it will only appear in the text content when
	// we put it there as a placeholder.
	var SOFT_BREAK_PLACEHOLDER = '\r';
	var ZERO_WIDTH_SPACE = '​';

	// Map element attributes to entity data.
	var ELEM_ATTR_MAP = {
	  a: { href: 'url', rel: 'rel', target: 'target', title: 'title' },
	  img: { src: 'src', alt: 'alt' }
	};

	var getEntityData = function getEntityData(tagName, element) {
	  var data = {};
	  if (ELEM_ATTR_MAP.hasOwnProperty(tagName)) {
	    var attrMap = ELEM_ATTR_MAP[tagName];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = Object.keys(attrMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var attr = _step.value;

	        var dataKey = attrMap[attr];
	        var dataValue = element.getAttribute(attr);
	        if (dataValue != null) {
	          data[dataKey] = dataValue;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  }
	  return data;
	};

	// Functions to convert elements to entities.
	var ELEM_TO_ENTITY = {
	  a: function a(tagName, element) {
	    var data = getEntityData(tagName, element);
	    // Don't add `<a>` elements with no href.
	    if (data.url != null) {
	      return _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.LINK, 'MUTABLE', data);
	    }
	  },
	  img: function img(tagName, element) {
	    var data = getEntityData(tagName, element);
	    // Don't add `<img>` elements with no src.
	    if (data.src != null) {
	      return _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.IMAGE, 'MUTABLE', data);
	    }
	  }
	};

	// TODO: Move this out to a module.
	var INLINE_ELEMENTS = {
	  a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1,
	  canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1,
	  embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1,
	  label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1, output: 1,
	  progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1,
	  span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, var: 1,
	  video: 1, wbr: 1, acronym: 1, applet: 1, basefont: 1, big: 1, font: 1,
	  isindex: 1, strike: 1, style: 1, tt: 1
	};

	// These elements are special because they cannot contain text as a direct
	// child (some cannot contain childNodes at all).
	var SPECIAL_ELEMENTS = {
	  area: 1, base: 1, br: 1, col: 1, colgroup: 1, command: 1, dl: 1, embed: 1,
	  head: 1, hgroup: 1, hr: 1, iframe: 1, img: 1, input: 1, keygen: 1, link: 1,
	  meta: 1, ol: 1, optgroup: 1, option: 1, param: 1, script: 1, select: 1,
	  source: 1, style: 1, table: 1, tbody: 1, textarea: 1, tfoot: 1, thead: 1,
	  title: 1, tr: 1, track: 1, ul: 1, wbr: 1, basefont: 1, dialog: 1, dir: 1,
	  isindex: 1
	};

	// These elements are special because they cannot contain childNodes.
	var SELF_CLOSING_ELEMENTS = { img: 1 };

	var BlockGenerator = function () {
	  function BlockGenerator() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, BlockGenerator);

	    this.options = options;
	    // This represents the hierarchy as we traverse nested elements; for
	    // example [body, ul, li] where we must know li's parent type (ul or ol).
	    this.blockStack = [];
	    // This is a linear list of blocks that will form the output; for example
	    // [p, li, li, blockquote].
	    this.blockList = [];
	    this.depth = 0;
	  }

	  _createClass(BlockGenerator, [{
	    key: 'process',
	    value: function process(element) {
	      this.processBlockElement(element);
	      var contentBlocks = [];
	      this.blockList.forEach(function (block) {
	        var _concatFragments = concatFragments(block.textFragments);

	        var text = _concatFragments.text;
	        var characterMeta = _concatFragments.characterMeta;

	        var includeEmptyBlock = false;
	        // If the block contains only a soft break then don't discard the block,
	        // but discard the soft break.
	        if (text === SOFT_BREAK_PLACEHOLDER) {
	          includeEmptyBlock = true;
	          text = '';
	        }
	        if (block.tagName === 'pre') {
	          var _trimLeadingNewline = trimLeadingNewline(text, characterMeta);

	          text = _trimLeadingNewline.text;
	          characterMeta = _trimLeadingNewline.characterMeta;
	        } else {
	          var _collapseWhiteSpace = collapseWhiteSpace(text, characterMeta);

	          text = _collapseWhiteSpace.text;
	          characterMeta = _collapseWhiteSpace.characterMeta;
	        }
	        // Previously we were using a placeholder for soft breaks. Now that we
	        // have collapsed whitespace we can change it back to normal line breaks.
	        text = text.split(SOFT_BREAK_PLACEHOLDER).join('\n');
	        // Discard empty blocks (unless otherwise specified).
	        if (text.length || includeEmptyBlock) {
	          contentBlocks.push(new _draftJs.ContentBlock({
	            key: (0, _draftJs.genKey)(),
	            text: text,
	            type: block.type,
	            characterList: characterMeta.toList(),
	            depth: block.depth
	          }));
	        }
	      });
	      if (contentBlocks.length) {
	        return contentBlocks;
	      } else {
	        return [EMPTY_BLOCK];
	      }
	    }
	  }, {
	    key: 'getBlockTypeFromTagName',
	    value: function getBlockTypeFromTagName(tagName) {
	      switch (tagName) {
	        case 'li':
	          {
	            var parent = this.blockStack.slice(-1)[0];
	            return parent.tagName === 'ol' ? _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM : _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM;
	          }
	        case 'blockquote':
	          {
	            return _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE;
	          }
	        case 'h1':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_ONE;
	          }
	        case 'h2':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_TWO;
	          }
	        case 'h3':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_THREE;
	          }
	        case 'h4':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_FOUR;
	          }
	        case 'h5':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_FIVE;
	          }
	        case 'h6':
	          {
	            return _draftJsUtils.BLOCK_TYPE.HEADER_SIX;
	          }
	        case 'pre':
	          {
	            return _draftJsUtils.BLOCK_TYPE.CODE;
	          }
	        case 'figure':
	          {
	            return _draftJsUtils.BLOCK_TYPE.ATOMIC;
	          }
	        default:
	          {
	            return _draftJsUtils.BLOCK_TYPE.UNSTYLED;
	          }
	      }
	    }
	  }, {
	    key: 'processBlockElement',
	    value: function processBlockElement(element) {
	      var tagName = element.nodeName.toLowerCase();
	      var type = this.getBlockTypeFromTagName(tagName);
	      var hasDepth = canHaveDepth(type);
	      var allowRender = !SPECIAL_ELEMENTS.hasOwnProperty(tagName);
	      var block = {
	        tagName: tagName,
	        textFragments: [],
	        type: type,
	        styleStack: [NO_STYLE],
	        entityStack: [NO_ENTITY],
	        depth: hasDepth ? this.depth : 0
	      };
	      if (allowRender) {
	        this.blockList.push(block);
	        if (hasDepth) {
	          this.depth += 1;
	        }
	      }
	      this.blockStack.push(block);
	      if (element.childNodes != null) {
	        Array.from(element.childNodes).forEach(this.processNode, this);
	      }
	      this.blockStack.pop();
	      if (allowRender && hasDepth) {
	        this.depth -= 1;
	      }
	    }
	  }, {
	    key: 'processInlineElement',
	    value: function processInlineElement(element) {
	      var tagName = element.nodeName.toLowerCase();
	      if (tagName === 'br') {
	        this.processText(SOFT_BREAK_PLACEHOLDER);
	        return;
	      }
	      var block = this.blockStack.slice(-1)[0];
	      var style = block.styleStack.slice(-1)[0];
	      var entityKey = block.entityStack.slice(-1)[0];
	      style = addStyleFromTagName(style, tagName, this.options.elementStyles);
	      if (ELEM_TO_ENTITY.hasOwnProperty(tagName)) {
	        // If the to-entity function returns nothing, use the existing entity.
	        entityKey = ELEM_TO_ENTITY[tagName](tagName, element) || entityKey;
	      }
	      block.styleStack.push(style);
	      block.entityStack.push(entityKey);
	      if (element.childNodes != null) {
	        Array.from(element.childNodes).forEach(this.processNode, this);
	      }
	      if (SELF_CLOSING_ELEMENTS.hasOwnProperty(tagName)) {
	        this.processText('~');
	      }
	      block.entityStack.pop();
	      block.styleStack.pop();
	    }
	  }, {
	    key: 'processTextNode',
	    value: function processTextNode(node) {
	      var text = node.nodeValue;
	      // This is important because we will use \r as a placeholder for a soft break.
	      text = text.replace(LINE_BREAKS, '\n');
	      // Replace zero-width space (we use it as a placeholder in markdown) with a
	      // soft break.
	      // TODO: The import-markdown package should correctly turn breaks into <br>
	      // elements so we don't need to include this hack.
	      text = text.split(ZERO_WIDTH_SPACE).join(SOFT_BREAK_PLACEHOLDER);
	      this.processText(text);
	    }
	  }, {
	    key: 'processText',
	    value: function processText(text) {
	      var block = this.blockStack.slice(-1)[0];
	      var style = block.styleStack.slice(-1)[0];
	      var entity = block.entityStack.slice(-1)[0];
	      var charMetadata = _draftJs.CharacterMetadata.create({
	        style: style,
	        entity: entity
	      });
	      var seq = (0, _immutable.Repeat)(charMetadata, text.length);
	      block.textFragments.push({
	        text: text,
	        characterMeta: seq
	      });
	    }
	  }, {
	    key: 'processNode',
	    value: function processNode(node) {
	      if (node.nodeType === _syntheticDom.NODE_TYPE_ELEMENT) {
	        var element = node;
	        var _tagName = element.nodeName.toLowerCase();
	        if (INLINE_ELEMENTS.hasOwnProperty(_tagName)) {
	          this.processInlineElement(element);
	        } else {
	          this.processBlockElement(element);
	        }
	      } else if (node.nodeType === _syntheticDom.NODE_TYPE_TEXT) {
	        this.processTextNode(node);
	      }
	    }
	  }]);

	  return BlockGenerator;
	}();

	function trimLeadingNewline(text, characterMeta) {
	  if (text.charAt(0) === '\n') {
	    text = text.slice(1);
	    characterMeta = characterMeta.slice(1);
	  }
	  return { text: text, characterMeta: characterMeta };
	}

	function trimLeadingSpace(text, characterMeta) {
	  while (text.charAt(0) === ' ') {
	    text = text.slice(1);
	    characterMeta = characterMeta.slice(1);
	  }
	  return { text: text, characterMeta: characterMeta };
	}

	function trimTrailingSpace(text, characterMeta) {
	  while (text.slice(-1) === ' ') {
	    text = text.slice(0, -1);
	    characterMeta = characterMeta.slice(0, -1);
	  }
	  return { text: text, characterMeta: characterMeta };
	}

	function collapseWhiteSpace(text, characterMeta) {
	  text = text.replace(/[ \t\n]/g, ' ');

	  var _trimLeadingSpace = trimLeadingSpace(text, characterMeta);

	  text = _trimLeadingSpace.text;
	  characterMeta = _trimLeadingSpace.characterMeta;

	  var _trimTrailingSpace = trimTrailingSpace(text, characterMeta);

	  text = _trimTrailingSpace.text;
	  characterMeta = _trimTrailingSpace.characterMeta;

	  var i = text.length;
	  while (i--) {
	    if (text.charAt(i) === ' ' && text.charAt(i - 1) === ' ') {
	      text = text.slice(0, i) + text.slice(i + 1);
	      characterMeta = characterMeta.slice(0, i).concat(characterMeta.slice(i + 1));
	    }
	  }
	  // There could still be one space on either side of a softbreak.

	  var _replaceTextWithMeta = (0, _replaceTextWithMeta4.default)({ text: text, characterMeta: characterMeta }, SOFT_BREAK_PLACEHOLDER + ' ', SOFT_BREAK_PLACEHOLDER);

	  text = _replaceTextWithMeta.text;
	  characterMeta = _replaceTextWithMeta.characterMeta;

	  var _replaceTextWithMeta2 = (0, _replaceTextWithMeta4.default)({ text: text, characterMeta: characterMeta }, ' ' + SOFT_BREAK_PLACEHOLDER, SOFT_BREAK_PLACEHOLDER);

	  text = _replaceTextWithMeta2.text;
	  characterMeta = _replaceTextWithMeta2.characterMeta;

	  return { text: text, characterMeta: characterMeta };
	}

	function canHaveDepth(blockType) {
	  switch (blockType) {
	    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
	    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
	      {
	        return true;
	      }
	    default:
	      {
	        return false;
	      }
	  }
	}

	function concatFragments(fragments) {
	  var text = '';
	  var characterMeta = (0, _immutable.Seq)();
	  fragments.forEach(function (textFragment) {
	    text = text + textFragment.text;
	    characterMeta = characterMeta.concat(textFragment.characterMeta);
	  });
	  return { text: text, characterMeta: characterMeta };
	}

	function addStyleFromTagName(styleSet, tagName, elementStyles) {
	  switch (tagName) {
	    case 'b':
	    case 'strong':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.BOLD);
	      }
	    case 'i':
	    case 'em':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.ITALIC);
	      }
	    case 'ins':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.UNDERLINE);
	      }
	    case 'code':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.CODE);
	      }
	    case 'del':
	      {
	        return styleSet.add(_draftJsUtils.INLINE_STYLE.STRIKETHROUGH);
	      }
	    default:
	      {
	        // Allow custom styles to be provided.
	        if (elementStyles && elementStyles[tagName]) {
	          return styleSet.add(elementStyles[tagName]);
	        }

	        return styleSet;
	      }
	  }
	}

	function stateFromElement(element, options) {
	  var blocks = new BlockGenerator(options).process(element);
	  return _draftJs.ContentState.createFromBlockArray(blocks);
	}

/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = replaceTextWithMeta;
	function replaceTextWithMeta(subject, searchText, replaceText) {
	  var text = subject.text;
	  var characterMeta = subject.characterMeta;

	  var searchTextLength = searchText.length;
	  var replaceTextLength = replaceText.length;
	  var resultTextParts = [];
	  // Get empty set of same kind as characterMeta.
	  var resultCharMeta = characterMeta.slice(0, 0);
	  var lastEndIndex = 0;
	  var index = text.indexOf(searchText);
	  while (index !== -1) {
	    resultTextParts.push(text.slice(lastEndIndex, index) + replaceText);
	    resultCharMeta = resultCharMeta.concat(characterMeta.slice(lastEndIndex, index),
	    // Use the metadata of the first char we are replacing.
	    repeatSeq(characterMeta.slice(index, index + 1), replaceTextLength));
	    lastEndIndex = index + searchTextLength;
	    index = text.indexOf(searchText, lastEndIndex);
	  }
	  resultTextParts.push(text.slice(lastEndIndex));
	  resultCharMeta = resultCharMeta.concat(characterMeta.slice(lastEndIndex));
	  return { text: resultTextParts.join(''), characterMeta: resultCharMeta };
	}

	function repeatSeq(seq, count) {
	  var result = seq.slice(0, 0);
	  while (count-- > 0) {
	    result = result.concat(seq);
	  }
	  return result;
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(2);

	var _draftJsUtils = __webpack_require__(150);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// TODO: Use a more specific type here.
	function Link(props_) {
	  var _Entity$get$getData = _draftJs.Entity.get(props_.entityKey).getData();

	  var url = _Entity$get$getData.url;

	  return _react2.default.createElement(
	    'a',
	    { href: url },
	    props_.children
	  );
	}


	function findLinkEntities(contentBlock, callback) {
	  contentBlock.findEntityRanges(function (character) {
	    var entityKey = character.getEntity();
	    return entityKey != null && _draftJs.Entity.get(entityKey).getType() === _draftJsUtils.ENTITY_TYPE.LINK;
	  }, callback);
	}

	exports.default = {
	  strategy: findLinkEntities,
	  component: Link
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageSpan = __webpack_require__(211);

	var _ImageSpan2 = _interopRequireDefault(_ImageSpan);

	var _draftJs = __webpack_require__(2);

	var _draftJsUtils = __webpack_require__(150);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function findImageEntities(contentBlock, callback) {
	  contentBlock.findEntityRanges(function (character) {
	    var entityKey = character.getEntity();
	    return entityKey != null && _draftJs.Entity.get(entityKey).getType() === _draftJsUtils.ENTITY_TYPE.IMAGE;
	  }, callback);
	}
	exports.default = {
	  strategy: findImageEntities,
	  component: _ImageSpan2.default
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classAutobind = __webpack_require__(163);

	var _classAutobind2 = _interopRequireDefault(_classAutobind);

	var _classnames = __webpack_require__(161);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(2);

	var _ImageSpan = __webpack_require__(212);

	var _ImageSpan2 = _interopRequireDefault(_ImageSpan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// $FlowIssue - Flow doesn't understand CSS Modules


	// TODO: Use a more specific type here.
	var ImageSpan = function (_Component) {
	  _inherits(ImageSpan, _Component);

	  function ImageSpan(props) {
	    _classCallCheck(this, ImageSpan);

	    var _this = _possibleConstructorReturn(this, (ImageSpan.__proto__ || Object.getPrototypeOf(ImageSpan)).call(this, props));

	    (0, _classAutobind2.default)(_this);
	    var entity = _draftJs.Entity.get(_this.props.entityKey);

	    var _entity$getData = entity.getData();

	    var width = _entity$getData.width;
	    var height = _entity$getData.height;

	    _this.state = {
	      width: width,
	      height: height
	    };
	    return _this;
	  }

	  _createClass(ImageSpan, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var _state = this.state;
	      var width = _state.width;
	      var height = _state.height;

	      var entity = _draftJs.Entity.get(this.props.entityKey);
	      var image = new Image();

	      var _entity$getData2 = entity.getData();

	      var src = _entity$getData2.src;

	      image.src = src;
	      image.onload = function () {
	        if (width == null || height == null) {
	          // TODO: isMounted?
	          _this2.setState({ width: image.width, height: image.height });
	          _draftJs.Entity.mergeData(_this2.props.entityKey, {
	            width: image.width,
	            height: image.height,
	            originalWidth: image.width,
	            originalHeight: image.height
	          });
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state2 = this.state;
	      var width = _state2.width;
	      var height = _state2.height;
	      var className = this.props.className;

	      var entity = _draftJs.Entity.get(this.props.entityKey);

	      var _entity$getData3 = entity.getData();

	      var src = _entity$getData3.src;


	      className = (0, _classnames2.default)(className, _ImageSpan2.default.root);
	      var imageStyle = {
	        verticalAlign: 'bottom',
	        backgroundImage: 'url("' + src + '")',
	        backgroundSize: width + 'px ' + height + 'px',
	        lineHeight: height + 'px',
	        fontSize: height + 'px',
	        width: width,
	        height: height,
	        letterSpacing: width
	      };

	      return _react2.default.createElement(
	        'span',
	        {
	          className: className,
	          style: imageStyle,
	          onClick: this._onClick
	        },
	        this.props.children
	      );
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      console.log('image click');
	    }
	  }, {
	    key: '_handleResize',
	    value: function _handleResize(event, data) {
	      var _data$size = data.size;
	      var width = _data$size.width;
	      var height = _data$size.height;

	      this.setState({ width: width, height: height });
	      _draftJs.Entity.mergeData(this.props.entityKey, { width: width, height: height });
	    }
	  }]);

	  return ImageSpan;
	}(_react.Component);

	exports.default = ImageSpan;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(213);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./ImageSpan.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./ImageSpan.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".ImageSpan__root___UNCON {\r\n  background-repeat: no-repeat;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.ImageSpan__resize___2PEqf {\r\n  border: 1px dashed #78a300;\r\n  position: relative;\r\n  max-width: 100%;\r\n  display: inline-block;\r\n  line-height: 0;\r\n  top: -1px;\r\n  left: -1px,\r\n}\r\n\r\n.ImageSpan__resizeHandle___2JBaV {\r\n  cursor: nwse-resize;\r\n  position: absolute;\r\n  z-index: 2;\r\n  line-height: 1;\r\n  bottom: -4px;\r\n  right: -5px;\r\n  border: 1px solid white;\r\n  background-color: #78a300;\r\n  width: 8px;\r\n  height: 8px;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "ImageSpan__root___UNCON",
		"resize": "ImageSpan__resize___2PEqf",
		"resizeHandle": "ImageSpan__resizeHandle___2JBaV"
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(216);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/raw-loader/index.js!./Draft.global.css", function() {
				var newContent = require("!!./../node_modules/raw-loader/index.js!./Draft.global.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "/**\r\n * We inherit the height of the container by default\r\n */\r\n\r\n.DraftEditor-root,\r\n.DraftEditor-editorContainer,\r\n.public-DraftEditor-content {\r\n  height: inherit;\r\n  text-align: initial;\r\n}\r\n\r\n.DraftEditor-root {\r\n  position: relative;\r\n}\r\n\r\n/**\r\n * Zero-opacity background used to allow focus in IE. Otherwise, clicks\r\n * fall through to the placeholder.\r\n */\r\n\r\n.DraftEditor-editorContainer {\r\n  background-color: rgba(255, 255, 255, 0);\r\n  /* Repair mysterious missing Safari cursor */\r\n  border-left: 0.1px solid transparent;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.public-DraftEditor-content {\r\n  outline: none;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.public-DraftEditor-block {\r\n  position: relative;\r\n}\r\n\r\n.DraftEditor-alignLeft .public-DraftEditor-block {\r\n  text-align: left;\r\n}\r\n\r\n.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\r\n  left: 0;\r\n  text-align: left;\r\n}\r\n\r\n.DraftEditor-alignCenter .public-DraftEditor-block {\r\n  text-align: center;\r\n}\r\n\r\n.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.DraftEditor-alignRight .public-DraftEditor-block {\r\n  text-align: right;\r\n}\r\n\r\n.DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\r\n  right: 0;\r\n  text-align: right;\r\n}\r\n/**\r\n * @providesModule DraftEditorPlaceholder\r\n */\r\n\r\n.public-DraftEditorPlaceholder-root {\r\n  color: #9197a3;\r\n  position: absolute;\r\n  z-index: 0;\r\n}\r\n\r\n.public-DraftEditorPlaceholder-hasFocus {\r\n  color: #bdc1c9;\r\n}\r\n\r\n.DraftEditorPlaceholder-hidden {\r\n  display: none;\r\n}\r\n/**\r\n * @providesModule DraftStyleDefault\r\n */\r\n\r\n.public-DraftStyleDefault-block {\r\n  position: relative;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-ltr {\r\n  direction: ltr;\r\n  text-align: left;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-rtl {\r\n  direction: rtl;\r\n  text-align: right;\r\n}\r\n\r\n/**\r\n * These rules provide appropriate text direction for counter pseudo-elements.\r\n */\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-listLTR {\r\n  direction: ltr;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-listRTL {\r\n  direction: rtl;\r\n}\r\n\r\n/**\r\n * Default spacing for list container elements. Override with CSS as needed.\r\n */\r\n\r\n.public-DraftStyleDefault-ul,\r\n.public-DraftStyleDefault-ol {\r\n  margin: 16px 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Default counters and styles are provided for five levels of nesting.\r\n * If you require nesting beyond that level, you should use your own CSS\r\n * classes to do so. If you care about handling RTL languages, the rules you\r\n * create should look a lot like these.\r\n */\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {\r\n  margin-left: 1.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {\r\n  margin-right: 1.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {\r\n  margin-left: 3em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {\r\n  margin-right: 3em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {\r\n  margin-left: 4.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {\r\n  margin-right: 4.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {\r\n  margin-left: 6em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {\r\n  margin-right: 6em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {\r\n  margin-left: 7.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {\r\n  margin-right: 7.5em;\r\n}\r\n\r\n/**\r\n * Only use `square` list-style after the first two levels.\r\n */\r\n\r\n.public-DraftStyleDefault-unorderedListItem {\r\n  list-style-type: square;\r\n  position: relative;\r\n}\r\n\r\n.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {\r\n  list-style-type: disc;\r\n}\r\n\r\n.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {\r\n  list-style-type: circle;\r\n}\r\n\r\n/**\r\n * Ordered list item counters are managed with CSS, since all list nesting is\r\n * purely visual.\r\n */\r\n\r\n.public-DraftStyleDefault-orderedListItem {\r\n  list-style-type: none;\r\n  position: relative;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {\r\n  left: -36px;\r\n  position: absolute;\r\n  text-align: right;\r\n  width: 30px;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {\r\n  position: absolute;\r\n  right: -36px;\r\n  text-align: left;\r\n  width: 30px;\r\n}\r\n\r\n/**\r\n * Counters are reset in JavaScript. If you need different counter styles,\r\n * override these rules. If you need more nesting, create your own rules to\r\n * do so.\r\n */\r\n\r\n.public-DraftStyleDefault-orderedListItem:before {\r\n  content: counter(ol0) \". \";\r\n  counter-increment: ol0;\r\n}\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {\r\n  content: counter(ol1) \". \";\r\n  counter-increment: ol1;\r\n}\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {\r\n  content: counter(ol2) \". \";\r\n  counter-increment: ol2;\r\n}\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {\r\n  content: counter(ol3) \". \";\r\n  counter-increment: ol3;\r\n}\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {\r\n  content: counter(ol4) \". \";\r\n  counter-increment: ol4;\r\n}\r\n\r\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {\r\n  counter-reset: ol0;\r\n}\r\n\r\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {\r\n  counter-reset: ol1;\r\n}\r\n\r\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {\r\n  counter-reset: ol2;\r\n}\r\n\r\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {\r\n  counter-reset: ol3;\r\n}\r\n\r\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {\r\n  counter-reset: ol4;\r\n}\r\n"

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(218);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./RichTextEditor.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./RichTextEditor.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports


	// module
	exports.push([module.id, ".RichTextEditor__root___33zoV {\r\n  background: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 3px;\r\n  font-family: 'Georgia', serif;\r\n  font-size: 14px;\r\n  padding: 10px;\r\n}\r\n\r\n.RichTextEditor__editor___1VEsr {\r\n  border-top: 1px solid #ddd;\r\n  cursor: text;\r\n  font-size: 16px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.RichTextEditor__editor___1VEsr .public-DraftEditorPlaceholder-root,\r\n.RichTextEditor__editor___1VEsr .public-DraftEditor-content {\r\n  margin: 0 -10px -10px;\r\n  padding: 10px;\r\n}\r\n\r\n.RichTextEditor__editor___1VEsr .public-DraftEditor-content {\r\n  overflow: auto;\r\n}\r\n\r\n.RichTextEditor__hidePlaceholder___3Kk-t .public-DraftEditorPlaceholder-root {\r\n  display: none;\r\n}\r\n\r\n.RichTextEditor__editor___1VEsr .RichTextEditor__paragraph___fFnY4 {\r\n  margin: 14px 0;\r\n}\r\n\r\n/* Consecutive code blocks are nested inside a single parent <pre> (like <li>\r\n  inside <ul>). Unstyle the parent and style the children. */\r\n.RichTextEditor__editor___1VEsr pre {\r\n  margin: 14px 0;\r\n}\r\n\r\n.RichTextEditor__editor___1VEsr .RichTextEditor__codeBlock___uySV1 {\r\n  background-color: #f3f3f3;\r\n  font-family: \"Inconsolata\", \"Menlo\", \"Consolas\", monospace;\r\n  font-size: 16px;\r\n  /* This should collapse with the margin around the parent <pre>. */\r\n  margin: 14px 0;\r\n  padding: 20px;\r\n}\r\n\r\n/* Hacky: Remove padding from inline <code> within code block. */\r\n.RichTextEditor__editor___1VEsr .RichTextEditor__codeBlock___uySV1 span[style] {\r\n  padding: 0 !important;\r\n}\r\n\r\n.RichTextEditor__editor___1VEsr .RichTextEditor__blockquote___2j6X- {\r\n  border-left: 5px solid #eee;\r\n  color: #666;\r\n  font-family: 'Hoefler Text', 'Georgia', serif;\r\n  font-style: italic;\r\n  margin: 16px 0;\r\n  padding: 10px 20px;\r\n}\r\n\r\n/* There shouldn't be margin outside the first/last blocks */\r\n.RichTextEditor__editor___1VEsr .RichTextEditor__block___3k2zv:first-child,\r\n.RichTextEditor__editor___1VEsr pre:first-child,\r\n.RichTextEditor__editor___1VEsr ul:first-child,\r\n.RichTextEditor__editor___1VEsr ol:first-child {\r\n  margin-top: 0;\r\n}\r\n.RichTextEditor__editor___1VEsr .RichTextEditor__block___3k2zv:last-child,\r\n.RichTextEditor__editor___1VEsr pre:last-child,\r\n.RichTextEditor__editor___1VEsr ul:last-child,\r\n.RichTextEditor__editor___1VEsr ol:last-child {\r\n  margin-bottom: 0;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"root": "RichTextEditor__root___33zoV",
		"editor": "RichTextEditor__editor___1VEsr",
		"hidePlaceholder": "RichTextEditor__hidePlaceholder___3Kk-t",
		"paragraph": "RichTextEditor__paragraph___fFnY4",
		"codeBlock": "RichTextEditor__codeBlock___uySV1",
		"blockquote": "RichTextEditor__blockquote___2j6X-",
		"block": "RichTextEditor__block___3k2zv"
	};

/***/ }
/******/ ]);
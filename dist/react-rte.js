module.exports = /******/
function(modules) {
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) /******/
        return installedModules[moduleId].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: !1
        };
        /******/
        /******/
        // Return the exports of the module
        /******/
        /******/
        /******/
        // Execute the module function
        /******/
        /******/
        /******/
        // Flag the module as loaded
        /******/
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.loaded = !0, module.exports;
    }
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/
    // Load entry module and return exports
    /******/
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/
    // expose the module cache
    /******/
    /******/
    /******/
    // __webpack_public_path__
    /******/
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.p = "", __webpack_require__(0);
}([ /* 0 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
        return target;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function defaultBlockStyleFn(block) {
        var result = _RichTextEditor2.default.block;
        switch (block.getType()) {
          case "unstyled":
            return (0, _classnames2.default)(result, _RichTextEditor2.default.paragraph);

          case "blockquote":
            return (0, _classnames2.default)(result, _RichTextEditor2.default.blockquote);

          case "code-block":
            return (0, _classnames2.default)(result, _RichTextEditor2.default.codeBlock);

          default:
            return result;
        }
    }
    function createEmptyValue() {
        return _EditorValue2.default.createEmpty(decorator);
    }
    function createValueFromString(markup, format, options) {
        return _EditorValue2.default.createFromString(markup, format, decorator, options);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.createValueFromString = exports.createEmptyValue = exports.decorator = exports.EditorValue = void 0;
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _draftJs = __webpack_require__(2), _getDefaultKeyBinding = __webpack_require__(130), _getDefaultKeyBinding2 = _interopRequireDefault(_getDefaultKeyBinding), _changeBlockDepth = __webpack_require__(143), _changeBlockDepth2 = _interopRequireDefault(_changeBlockDepth), _changeBlockType = __webpack_require__(144), _changeBlockType2 = _interopRequireDefault(_changeBlockType), _getBlocksInSelection = __webpack_require__(145), _getBlocksInSelection2 = _interopRequireDefault(_getBlocksInSelection), _insertBlockAfter = __webpack_require__(147), _insertBlockAfter2 = _interopRequireDefault(_insertBlockAfter), _isListItem = __webpack_require__(148), _isListItem2 = _interopRequireDefault(_isListItem), _isSoftNewlineEvent = __webpack_require__(155), _isSoftNewlineEvent2 = _interopRequireDefault(_isSoftNewlineEvent), _EditorToolbar = __webpack_require__(156), _EditorToolbar2 = _interopRequireDefault(_EditorToolbar), _EditorValue = __webpack_require__(186), _EditorValue2 = _interopRequireDefault(_EditorValue), _LinkDecorator = __webpack_require__(205), _LinkDecorator2 = _interopRequireDefault(_LinkDecorator), _ImageDecorator = __webpack_require__(206), _ImageDecorator2 = _interopRequireDefault(_ImageDecorator), _composite = __webpack_require__(210), _composite2 = _interopRequireDefault(_composite), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _classAutobind = __webpack_require__(162), _classAutobind2 = _interopRequireDefault(_classAutobind), _events = __webpack_require__(211), _events2 = _interopRequireDefault(_events), _draftJsUtils = __webpack_require__(149);
    __webpack_require__(212);
    var _RichTextEditor = __webpack_require__(214), _RichTextEditor2 = _interopRequireDefault(_RichTextEditor), MAX_LIST_DEPTH = 2, styleMap = {
        CODE: {
            backgroundColor: "#f3f3f3",
            fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
            fontSize: 16,
            padding: 2
        }
    }, RichTextEditor = function(_Component) {
        function RichTextEditor() {
            _classCallCheck(this, RichTextEditor);
            var _this = _possibleConstructorReturn(this, (RichTextEditor.__proto__ || Object.getPrototypeOf(RichTextEditor)).apply(this, arguments));
            return _this._keyEmitter = new _events2.default(), (0, _classAutobind2.default)(_this), 
            _this;
        }
        return _inherits(RichTextEditor, _Component), _createClass(RichTextEditor, [ {
            key: "componentDidMount",
            value: function() {
                var autoFocus = this.props.autoFocus;
                autoFocus && this._focus();
            }
        }, {
            key: "render",
            value: function() {
                var _cx, _props = this.props, value = _props.value, className = _props.className, toolbarClassName = _props.toolbarClassName, editorClassName = _props.editorClassName, placeholder = _props.placeholder, customStyleMap = _props.customStyleMap, readOnly = _props.readOnly, disabled = _props.disabled, toolbarConfig = _props.toolbarConfig, blockStyleFn = _props.blockStyleFn, otherProps = _objectWithoutProperties(_props, [ "value", "className", "toolbarClassName", "editorClassName", "placeholder", "customStyleMap", "readOnly", "disabled", "toolbarConfig", "blockStyleFn" ]), editorState = value.getEditorState();
                customStyleMap = customStyleMap ? _extends({}, styleMap, customStyleMap) : styleMap;
                // If the user changes block type before entering any text, we can either
                // style the placeholder or hide it. Let's just hide it for now.
                var combinedEditorClassName = (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, _RichTextEditor2.default.editor, !0), 
                _defineProperty(_cx, _RichTextEditor2.default.hidePlaceholder, this._shouldHidePlaceholder()), 
                _cx), editorClassName);
                null == readOnly && (readOnly = disabled);
                var editorToolbar = void 0;
                return readOnly || (editorToolbar = _react2.default.createElement(_EditorToolbar2.default, {
                    className: toolbarClassName,
                    keyEmitter: this._keyEmitter,
                    editorState: editorState,
                    onChange: this._onChange,
                    focusEditor: this._focus,
                    toolbarConfig: toolbarConfig
                })), _react2.default.createElement("div", {
                    className: (0, _classnames2.default)(_RichTextEditor2.default.root, className)
                }, editorToolbar, _react2.default.createElement("div", {
                    className: combinedEditorClassName
                }, _react2.default.createElement(_draftJs.Editor, _extends({}, otherProps, {
                    blockStyleFn: (0, _composite2.default)(defaultBlockStyleFn, blockStyleFn),
                    customStyleMap: customStyleMap,
                    editorState: editorState,
                    handleReturn: this._handleReturn,
                    keyBindingFn: this._customKeyHandler,
                    handleKeyCommand: this._handleKeyCommand,
                    onTab: this._onTab,
                    onChange: this._onChange,
                    placeholder: placeholder,
                    ref: "editor",
                    spellCheck: !0,
                    readOnly: readOnly
                }))));
            }
        }, {
            key: "_shouldHidePlaceholder",
            value: function() {
                var editorState = this.props.value.getEditorState(), contentState = editorState.getCurrentContent();
                return !contentState.hasText() && "unstyled" !== contentState.getBlockMap().first().getType();
            }
        }, {
            key: "_handleReturn",
            value: function(event) {
                var handleReturn = this.props.handleReturn;
                return !(null == handleReturn || !handleReturn(event)) || (!!this._handleReturnSoftNewline(event) || (!!this._handleReturnEmptyListItem() || !!this._handleReturnSpecialBlock()));
            }
        }, {
            key: "_handleReturnSoftNewline",
            value: function(event) {
                var editorState = this.props.value.getEditorState();
                if ((0, _isSoftNewlineEvent2.default)(event)) {
                    var selection = editorState.getSelection();
                    if (selection.isCollapsed()) this._onChange(_draftJs.RichUtils.insertSoftNewline(editorState)); else {
                        var content = editorState.getCurrentContent(), newContent = _draftJs.Modifier.removeRange(content, selection, "forward"), newSelection = newContent.getSelectionAfter(), _block = newContent.getBlockForKey(newSelection.getStartKey());
                        newContent = _draftJs.Modifier.insertText(newContent, newSelection, "\n", _block.getInlineStyleAt(newSelection.getStartOffset()), null), 
                        this._onChange(_draftJs.EditorState.push(editorState, newContent, "insert-fragment"));
                    }
                    return !0;
                }
                return !1;
            }
        }, {
            key: "_handleReturnEmptyListItem",
            value: function() {
                var editorState = this.props.value.getEditorState(), selection = editorState.getSelection();
                if (selection.isCollapsed()) {
                    var contentState = editorState.getCurrentContent(), blockKey = selection.getStartKey(), _block2 = contentState.getBlockForKey(blockKey);
                    if ((0, _isListItem2.default)(_block2) && 0 === _block2.getLength()) {
                        var depth = _block2.getDepth(), newState = 0 === depth ? (0, _changeBlockType2.default)(editorState, blockKey, _draftJsUtils.BLOCK_TYPE.UNSTYLED) : (0, 
                        _changeBlockDepth2.default)(editorState, blockKey, depth - 1);
                        return this._onChange(newState), !0;
                    }
                }
                return !1;
            }
        }, {
            key: "_handleReturnSpecialBlock",
            value: function() {
                var editorState = this.props.value.getEditorState(), selection = editorState.getSelection();
                if (selection.isCollapsed()) {
                    var contentState = editorState.getCurrentContent(), blockKey = selection.getStartKey(), _block3 = contentState.getBlockForKey(blockKey);
                    if (!(0, _isListItem2.default)(_block3) && _block3.getType() !== _draftJsUtils.BLOCK_TYPE.UNSTYLED && _block3.getLength() === selection.getStartOffset()) {
                        var newEditorState = (0, _insertBlockAfter2.default)(editorState, blockKey, _draftJsUtils.BLOCK_TYPE.UNSTYLED);
                        return this._onChange(newEditorState), !0;
                    }
                }
                return !1;
            }
        }, {
            key: "_onTab",
            value: function(event) {
                var editorState = this.props.value.getEditorState(), newEditorState = _draftJs.RichUtils.onTab(event, editorState, MAX_LIST_DEPTH);
                newEditorState !== editorState && this._onChange(newEditorState);
            }
        }, {
            key: "_customKeyHandler",
            value: function(event) {
                // Allow toolbar to catch key combinations.
                var eventFlags = {};
                return this._keyEmitter.emit("keypress", event, eventFlags), eventFlags.wasHandled ? null : (0, 
                _getDefaultKeyBinding2.default)(event);
            }
        }, {
            key: "_handleKeyCommand",
            value: function(command) {
                var editorState = this.props.value.getEditorState(), newEditorState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
                return !!newEditorState && (this._onChange(newEditorState), !0);
            }
        }, {
            key: "_onChange",
            value: function(editorState) {
                var _props2 = this.props, onChange = _props2.onChange, value = _props2.value;
                if (null != onChange) {
                    var newValue = value.setEditorState(editorState), newEditorState = newValue.getEditorState();
                    this._handleInlineImageSelection(newEditorState), onChange(newValue);
                }
            }
        }, {
            key: "_handleInlineImageSelection",
            value: function(editorState) {
                var selection = editorState.getSelection(), blocks = (0, _getBlocksInSelection2.default)(editorState), selectImage = function(block, offset) {
                    var imageKey = block.getEntityAt(offset);
                    Entity.mergeData(imageKey, {
                        selected: !0
                    });
                }, isInMiddleBlock = function(index) {
                    return index > 0 && index < blocks.size - 1;
                }, isWithinStartBlockSelection = function(offset, index) {
                    return 0 === index && offset > selection.getStartOffset();
                }, isWithinEndBlockSelection = function(offset, index) {
                    return index === blocks.size - 1 && offset < selection.getEndOffset();
                };
                blocks.toIndexedSeq().forEach(function(block, index) {
                    _ImageDecorator2.default.strategy(block, function(offset) {
                        (isWithinStartBlockSelection(offset, index) || isInMiddleBlock(index) || isWithinEndBlockSelection(offset, index)) && selectImage(block, offset);
                    });
                });
            }
        }, {
            key: "_focus",
            value: function() {
                this.refs.editor.focus();
            }
        } ]), RichTextEditor;
    }(_react.Component);
    exports.default = RichTextEditor;
    var decorator = new _draftJs.CompositeDecorator([ _LinkDecorator2.default, _ImageDecorator2.default ]);
    // $FlowIssue - This should probably not be done this way.
    Object.assign(RichTextEditor, {
        EditorValue: _EditorValue2.default,
        decorator: decorator,
        createEmptyValue: createEmptyValue,
        createValueFromString: createValueFromString
    }), exports.EditorValue = _EditorValue2.default, exports.decorator = decorator, 
    exports.createEmptyValue = createEmptyValue, exports.createValueFromString = createValueFromString;
}, /* 1 */
/***/
function(module, exports) {
    module.exports = require("react");
}, /* 2 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var AtomicBlockUtils = __webpack_require__(3), BlockMapBuilder = __webpack_require__(4), CharacterMetadata = __webpack_require__(6), CompositeDraftDecorator = __webpack_require__(40), ContentBlock = __webpack_require__(7), ContentState = __webpack_require__(32), DefaultDraftBlockRenderMap = __webpack_require__(41), DefaultDraftInlineStyle = __webpack_require__(43), DraftEditor = __webpack_require__(44), DraftEditorBlock = __webpack_require__(50), DraftModifier = __webpack_require__(9), DraftEntity = __webpack_require__(14), DraftEntityInstance = __webpack_require__(16), EditorState = __webpack_require__(29), KeyBindingUtil = __webpack_require__(100), RichTextEditorUtil = __webpack_require__(131), SelectionState = __webpack_require__(33), convertFromDraftStateToRaw = __webpack_require__(133), convertFromHTMLToContentBlocks = __webpack_require__(123), convertFromRawToDraftState = __webpack_require__(137), generateRandomKey = __webpack_require__(21), getDefaultKeyBinding = __webpack_require__(130), getVisibleSelectionRect = __webpack_require__(141), DraftPublic = {
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
}, /* 3 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var BlockMapBuilder = __webpack_require__(4), CharacterMetadata = __webpack_require__(6), ContentBlock = __webpack_require__(7), DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), Immutable = __webpack_require__(5), generateRandomKey = __webpack_require__(21), List = Immutable.List, Repeat = Immutable.Repeat, AtomicBlockUtils = {
        insertAtomicBlock: function(editorState, entityKey, character) {
            var contentState = editorState.getCurrentContent(), selectionState = editorState.getSelection(), afterRemoval = DraftModifier.removeRange(contentState, selectionState, "backward"), targetSelection = afterRemoval.getSelectionAfter(), afterSplit = DraftModifier.splitBlock(afterRemoval, targetSelection), insertionTarget = afterSplit.getSelectionAfter(), asAtomicBlock = DraftModifier.setBlockType(afterSplit, insertionTarget, "atomic"), charData = CharacterMetadata.create({
                entity: entityKey
            }), fragmentArray = [ new ContentBlock({
                key: generateRandomKey(),
                type: "atomic",
                text: character,
                characterList: List(Repeat(charData, character.length))
            }), new ContentBlock({
                key: generateRandomKey(),
                type: "unstyled",
                text: "",
                characterList: List()
            }) ], fragment = BlockMapBuilder.createFromArray(fragmentArray), withAtomicBlock = DraftModifier.replaceWithFragment(asAtomicBlock, insertionTarget, fragment), newContent = withAtomicBlock.merge({
                selectionBefore: selectionState,
                selectionAfter: withAtomicBlock.getSelectionAfter().set("hasFocus", !0)
            });
            return EditorState.push(editorState, newContent, "insert-fragment");
        }
    };
    module.exports = AtomicBlockUtils;
}, /* 4 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var Immutable = __webpack_require__(5), OrderedMap = Immutable.OrderedMap, BlockMapBuilder = {
        createFromArray: function(blocks) {
            return OrderedMap(blocks.map(function(block) {
                return [ block.getKey(), block ];
            }));
        }
    };
    module.exports = BlockMapBuilder;
}, /* 5 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
    !function(global, factory) {
        module.exports = factory();
    }(this, function() {
        "use strict";
        function createClass(ctor, superClass) {
            superClass && (ctor.prototype = Object.create(superClass.prototype)), ctor.prototype.constructor = ctor;
        }
        function Iterable(value) {
            return isIterable(value) ? value : Seq(value);
        }
        function KeyedIterable(value) {
            return isKeyed(value) ? value : KeyedSeq(value);
        }
        function IndexedIterable(value) {
            return isIndexed(value) ? value : IndexedSeq(value);
        }
        function SetIterable(value) {
            return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
        }
        function isIterable(maybeIterable) {
            return !(!maybeIterable || !maybeIterable[IS_ITERABLE_SENTINEL]);
        }
        function isKeyed(maybeKeyed) {
            return !(!maybeKeyed || !maybeKeyed[IS_KEYED_SENTINEL]);
        }
        function isIndexed(maybeIndexed) {
            return !(!maybeIndexed || !maybeIndexed[IS_INDEXED_SENTINEL]);
        }
        function isAssociative(maybeAssociative) {
            return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
        }
        function isOrdered(maybeOrdered) {
            return !(!maybeOrdered || !maybeOrdered[IS_ORDERED_SENTINEL]);
        }
        function MakeRef(ref) {
            return ref.value = !1, ref;
        }
        function SetRef(ref) {
            ref && (ref.value = !0);
        }
        // A function which returns a value representing an "owner" for transient writes
        // to tries. The return value will only ever equal itself, and will not equal
        // the return of any subsequent call of this function.
        function OwnerID() {}
        // http://jsperf.com/copy-array-inline
        function arrCopy(arr, offset) {
            offset = offset || 0;
            for (var len = Math.max(0, arr.length - offset), newArr = new Array(len), ii = 0; ii < len; ii++) newArr[ii] = arr[ii + offset];
            return newArr;
        }
        function ensureSize(iter) {
            return void 0 === iter.size && (iter.size = iter.__iterate(returnTrue)), iter.size;
        }
        function wrapIndex(iter, index) {
            // This implements "is array index" which the ECMAString spec defines as:
            //
            //     A String property name P is an array index if and only if
            //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
            //     to 2^32−1.
            //
            // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
            if ("number" != typeof index) {
                var uint32Index = index >>> 0;
                // N >>> 0 is shorthand for ToUint32
                if ("" + uint32Index !== index || 4294967295 === uint32Index) return NaN;
                index = uint32Index;
            }
            return index < 0 ? ensureSize(iter) + index : index;
        }
        function returnTrue() {
            return !0;
        }
        function wholeSlice(begin, end, size) {
            return (0 === begin || void 0 !== size && begin <= -size) && (void 0 === end || void 0 !== size && end >= size);
        }
        function resolveBegin(begin, size) {
            return resolveIndex(begin, size, 0);
        }
        function resolveEnd(end, size) {
            return resolveIndex(end, size, size);
        }
        function resolveIndex(index, size, defaultIndex) {
            return void 0 === index ? defaultIndex : index < 0 ? Math.max(0, size + index) : void 0 === size ? index : Math.min(size, index);
        }
        function Iterator(next) {
            this.next = next;
        }
        function iteratorValue(type, k, v, iteratorResult) {
            var value = 0 === type ? k : 1 === type ? v : [ k, v ];
            return iteratorResult ? iteratorResult.value = value : iteratorResult = {
                value: value,
                done: !1
            }, iteratorResult;
        }
        function iteratorDone() {
            return {
                value: void 0,
                done: !0
            };
        }
        function hasIterator(maybeIterable) {
            return !!getIteratorFn(maybeIterable);
        }
        function isIterator(maybeIterator) {
            return maybeIterator && "function" == typeof maybeIterator.next;
        }
        function getIterator(iterable) {
            var iteratorFn = getIteratorFn(iterable);
            return iteratorFn && iteratorFn.call(iterable);
        }
        function getIteratorFn(iterable) {
            var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
            if ("function" == typeof iteratorFn) return iteratorFn;
        }
        function isArrayLike(value) {
            return value && "number" == typeof value.length;
        }
        function Seq(value) {
            return null === value || void 0 === value ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
        }
        function KeyedSeq(value) {
            return null === value || void 0 === value ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
        }
        function IndexedSeq(value) {
            return null === value || void 0 === value ? emptySequence() : isIterable(value) ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq() : indexedSeqFromValue(value);
        }
        function SetSeq(value) {
            return (null === value || void 0 === value ? emptySequence() : isIterable(value) ? isKeyed(value) ? value.entrySeq() : value : indexedSeqFromValue(value)).toSetSeq();
        }
        function ArraySeq(array) {
            this._array = array, this.size = array.length;
        }
        function ObjectSeq(object) {
            var keys = Object.keys(object);
            this._object = object, this._keys = keys, this.size = keys.length;
        }
        function IterableSeq(iterable) {
            this._iterable = iterable, this.size = iterable.length || iterable.size;
        }
        function IteratorSeq(iterator) {
            this._iterator = iterator, this._iteratorCache = [];
        }
        // # pragma Helper functions
        function isSeq(maybeSeq) {
            return !(!maybeSeq || !maybeSeq[IS_SEQ_SENTINEL]);
        }
        function emptySequence() {
            return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
        }
        function keyedSeqFromValue(value) {
            var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : "object" == typeof value ? new ObjectSeq(value) : void 0;
            if (!seq) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + value);
            return seq;
        }
        function indexedSeqFromValue(value) {
            var seq = maybeIndexedSeqFromValue(value);
            if (!seq) throw new TypeError("Expected Array or iterable object of values: " + value);
            return seq;
        }
        function seqFromValue(value) {
            var seq = maybeIndexedSeqFromValue(value) || "object" == typeof value && new ObjectSeq(value);
            if (!seq) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + value);
            return seq;
        }
        function maybeIndexedSeqFromValue(value) {
            return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : void 0;
        }
        function seqIterate(seq, fn, reverse, useKeys) {
            var cache = seq._cache;
            if (cache) {
                for (var maxIndex = cache.length - 1, ii = 0; ii <= maxIndex; ii++) {
                    var entry = cache[reverse ? maxIndex - ii : ii];
                    if (fn(entry[1], useKeys ? entry[0] : ii, seq) === !1) return ii + 1;
                }
                return ii;
            }
            return seq.__iterateUncached(fn, reverse);
        }
        function seqIterator(seq, type, reverse, useKeys) {
            var cache = seq._cache;
            if (cache) {
                var maxIndex = cache.length - 1, ii = 0;
                return new Iterator(function() {
                    var entry = cache[reverse ? maxIndex - ii : ii];
                    return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
                });
            }
            return seq.__iteratorUncached(type, reverse);
        }
        function fromJS(json, converter) {
            return converter ? fromJSWith(converter, json, "", {
                "": json
            }) : fromJSDefault(json);
        }
        function fromJSWith(converter, json, key, parentJSON) {
            return Array.isArray(json) ? converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k) {
                return fromJSWith(converter, v, k, json);
            })) : isPlainObj(json) ? converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k) {
                return fromJSWith(converter, v, k, json);
            })) : json;
        }
        function fromJSDefault(json) {
            return Array.isArray(json) ? IndexedSeq(json).map(fromJSDefault).toList() : isPlainObj(json) ? KeyedSeq(json).map(fromJSDefault).toMap() : json;
        }
        function isPlainObj(value) {
            return value && (value.constructor === Object || void 0 === value.constructor);
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
            if (valueA === valueB || valueA !== valueA && valueB !== valueB) return !0;
            if (!valueA || !valueB) return !1;
            if ("function" == typeof valueA.valueOf && "function" == typeof valueB.valueOf) {
                if (valueA = valueA.valueOf(), valueB = valueB.valueOf(), valueA === valueB || valueA !== valueA && valueB !== valueB) return !0;
                if (!valueA || !valueB) return !1;
            }
            return !("function" != typeof valueA.equals || "function" != typeof valueB.equals || !valueA.equals(valueB));
        }
        function deepEqual(a, b) {
            if (a === b) return !0;
            if (!isIterable(b) || void 0 !== a.size && void 0 !== b.size && a.size !== b.size || void 0 !== a.__hash && void 0 !== b.__hash && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) return !1;
            if (0 === a.size && 0 === b.size) return !0;
            var notAssociative = !isAssociative(a);
            if (isOrdered(a)) {
                var entries = a.entries();
                return b.every(function(v, k) {
                    var entry = entries.next().value;
                    return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
                }) && entries.next().done;
            }
            var flipped = !1;
            if (void 0 === a.size) if (void 0 === b.size) "function" == typeof a.cacheResult && a.cacheResult(); else {
                flipped = !0;
                var _ = a;
                a = b, b = _;
            }
            var allEqual = !0, bSize = b.__iterate(function(v, k) {
                if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) return allEqual = !1, 
                !1;
            });
            return allEqual && a.size === bSize;
        }
        function Repeat(value, times) {
            if (!(this instanceof Repeat)) return new Repeat(value, times);
            if (this._value = value, this.size = void 0 === times ? 1 / 0 : Math.max(0, times), 
            0 === this.size) {
                if (EMPTY_REPEAT) return EMPTY_REPEAT;
                EMPTY_REPEAT = this;
            }
        }
        function invariant(condition, error) {
            if (!condition) throw new Error(error);
        }
        function Range(start, end, step) {
            if (!(this instanceof Range)) return new Range(start, end, step);
            if (invariant(0 !== step, "Cannot step a Range by 0"), start = start || 0, void 0 === end && (end = 1 / 0), 
            step = void 0 === step ? 1 : Math.abs(step), end < start && (step = -step), this._start = start, 
            this._end = end, this._step = step, this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1), 
            0 === this.size) {
                if (EMPTY_RANGE) return EMPTY_RANGE;
                EMPTY_RANGE = this;
            }
        }
        function Collection() {
            throw TypeError("Abstract");
        }
        function KeyedCollection() {}
        function IndexedCollection() {}
        function SetCollection() {}
        // v8 has an optimization for storing 31-bit signed numbers.
        // Values which have either 00 or 11 as the high order bits qualify.
        // This function drops the highest order bit in a signed number, maintaining
        // the sign bit.
        function smi(i32) {
            return i32 >>> 1 & 1073741824 | 3221225471 & i32;
        }
        function hash(o) {
            if (o === !1 || null === o || void 0 === o) return 0;
            if ("function" == typeof o.valueOf && (o = o.valueOf(), o === !1 || null === o || void 0 === o)) return 0;
            if (o === !0) return 1;
            var type = typeof o;
            if ("number" === type) {
                var h = 0 | o;
                for (h !== o && (h ^= 4294967295 * o); o > 4294967295; ) o /= 4294967295, h ^= o;
                return smi(h);
            }
            if ("string" === type) return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
            if ("function" == typeof o.hashCode) return o.hashCode();
            if ("object" === type) return hashJSObj(o);
            if ("function" == typeof o.toString) return hashString(o.toString());
            throw new Error("Value type " + type + " cannot be hashed.");
        }
        function cachedHashString(string) {
            var hash = stringHashCache[string];
            return void 0 === hash && (hash = hashString(string), STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE && (STRING_HASH_CACHE_SIZE = 0, 
            stringHashCache = {}), STRING_HASH_CACHE_SIZE++, stringHashCache[string] = hash), 
            hash;
        }
        // http://jsperf.com/hashing-strings
        function hashString(string) {
            for (var hash = 0, ii = 0; ii < string.length; ii++) hash = 31 * hash + string.charCodeAt(ii) | 0;
            return smi(hash);
        }
        function hashJSObj(obj) {
            var hash;
            if (usingWeakMap && (hash = weakMap.get(obj), void 0 !== hash)) return hash;
            if (hash = obj[UID_HASH_KEY], void 0 !== hash) return hash;
            if (!canDefineProperty) {
                if (hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY], void 0 !== hash) return hash;
                if (hash = getIENodeHash(obj), void 0 !== hash) return hash;
            }
            if (hash = ++objHashUID, 1073741824 & objHashUID && (objHashUID = 0), usingWeakMap) weakMap.set(obj, hash); else {
                if (void 0 !== isExtensible && isExtensible(obj) === !1) throw new Error("Non-extensible objects are not allowed as keys.");
                if (canDefineProperty) Object.defineProperty(obj, UID_HASH_KEY, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: hash
                }); else if (void 0 !== obj.propertyIsEnumerable && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) // Since we can't define a non-enumerable property on the object
                // we'll hijack one of the less-used non-enumerable properties to
                // save our hash on it. Since this is a function it will not show up in
                // `JSON.stringify` which is what we want.
                obj.propertyIsEnumerable = function() {
                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
                }, obj.propertyIsEnumerable[UID_HASH_KEY] = hash; else {
                    if (void 0 === obj.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                    // At this point we couldn't get the IE `uniqueID` to use as a hash
                    // and we couldn't use a non-enumerable property to exploit the
                    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
                    // itself.
                    obj[UID_HASH_KEY] = hash;
                }
            }
            return hash;
        }
        // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
        // and avoid memory leaks from the IE cloneNode bug.
        function getIENodeHash(node) {
            if (node && node.nodeType > 0) switch (node.nodeType) {
              case 1:
                // Element
                return node.uniqueID;

              case 9:
                // Document
                return node.documentElement && node.documentElement.uniqueID;
            }
        }
        function assertNotInfinite(size) {
            invariant(size !== 1 / 0, "Cannot perform this action with an infinite size.");
        }
        // @pragma Construction
        function Map(value) {
            return null === value || void 0 === value ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map) {
                var iter = KeyedIterable(value);
                assertNotInfinite(iter.size), iter.forEach(function(v, k) {
                    return map.set(k, v);
                });
            });
        }
        function isMap(maybeMap) {
            return !(!maybeMap || !maybeMap[IS_MAP_SENTINEL]);
        }
        // #pragma Trie Nodes
        function ArrayMapNode(ownerID, entries) {
            this.ownerID = ownerID, this.entries = entries;
        }
        function BitmapIndexedNode(ownerID, bitmap, nodes) {
            this.ownerID = ownerID, this.bitmap = bitmap, this.nodes = nodes;
        }
        function HashArrayMapNode(ownerID, count, nodes) {
            this.ownerID = ownerID, this.count = count, this.nodes = nodes;
        }
        function HashCollisionNode(ownerID, keyHash, entries) {
            this.ownerID = ownerID, this.keyHash = keyHash, this.entries = entries;
        }
        function ValueNode(ownerID, keyHash, entry) {
            this.ownerID = ownerID, this.keyHash = keyHash, this.entry = entry;
        }
        function MapIterator(map, type, reverse) {
            this._type = type, this._reverse = reverse, this._stack = map._root && mapIteratorFrame(map._root);
        }
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
            return map.size = size, map._root = root, map.__ownerID = ownerID, map.__hash = hash, 
            map.__altered = !1, map;
        }
        function emptyMap() {
            return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
        }
        function updateMap(map, k, v) {
            var newRoot, newSize;
            if (map._root) {
                var didChangeSize = MakeRef(CHANGE_LENGTH), didAlter = MakeRef(DID_ALTER);
                if (newRoot = updateNode(map._root, map.__ownerID, 0, void 0, k, v, didChangeSize, didAlter), 
                !didAlter.value) return map;
                newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
            } else {
                if (v === NOT_SET) return map;
                newSize = 1, newRoot = new ArrayMapNode(map.__ownerID, [ [ k, v ] ]);
            }
            return map.__ownerID ? (map.size = newSize, map._root = newRoot, map.__hash = void 0, 
            map.__altered = !0, map) : newRoot ? makeMap(newSize, newRoot) : emptyMap();
        }
        function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            return node ? node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) : value === NOT_SET ? node : (SetRef(didAlter), 
            SetRef(didChangeSize), new ValueNode(ownerID, keyHash, [ key, value ]));
        }
        function isLeafNode(node) {
            return node.constructor === ValueNode || node.constructor === HashCollisionNode;
        }
        function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
            if (node.keyHash === keyHash) return new HashCollisionNode(ownerID, keyHash, [ node.entry, entry ]);
            var newNode, idx1 = (0 === shift ? node.keyHash : node.keyHash >>> shift) & MASK, idx2 = (0 === shift ? keyHash : keyHash >>> shift) & MASK, nodes = idx1 === idx2 ? [ mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry) ] : (newNode = new ValueNode(ownerID, keyHash, entry), 
            idx1 < idx2 ? [ node, newNode ] : [ newNode, node ]);
            return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
        }
        function createNodes(ownerID, entries, key, value) {
            ownerID || (ownerID = new OwnerID());
            for (var node = new ValueNode(ownerID, hash(key), [ key, value ]), ii = 0; ii < entries.length; ii++) {
                var entry = entries[ii];
                node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
            }
            return node;
        }
        function packNodes(ownerID, nodes, count, excluding) {
            for (var bitmap = 0, packedII = 0, packedNodes = new Array(count), ii = 0, bit = 1, len = nodes.length; ii < len; ii++, 
            bit <<= 1) {
                var node = nodes[ii];
                void 0 !== node && ii !== excluding && (bitmap |= bit, packedNodes[packedII++] = node);
            }
            return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
        }
        function expandNodes(ownerID, nodes, bitmap, including, node) {
            for (var count = 0, expandedNodes = new Array(SIZE), ii = 0; 0 !== bitmap; ii++, 
            bitmap >>>= 1) expandedNodes[ii] = 1 & bitmap ? nodes[count++] : void 0;
            return expandedNodes[including] = node, new HashArrayMapNode(ownerID, count + 1, expandedNodes);
        }
        function mergeIntoMapWith(map, merger, iterables) {
            for (var iters = [], ii = 0; ii < iterables.length; ii++) {
                var value = iterables[ii], iter = KeyedIterable(value);
                isIterable(value) || (iter = iter.map(function(v) {
                    return fromJS(v);
                })), iters.push(iter);
            }
            return mergeIntoCollectionWith(map, merger, iters);
        }
        function deepMerger(existing, value, key) {
            return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is(existing, value) ? existing : value;
        }
        function deepMergerWith(merger) {
            return function(existing, value, key) {
                if (existing && existing.mergeDeepWith && isIterable(value)) return existing.mergeDeepWith(merger, value);
                var nextValue = merger(existing, value, key);
                return is(existing, nextValue) ? existing : nextValue;
            };
        }
        function mergeIntoCollectionWith(collection, merger, iters) {
            return iters = iters.filter(function(x) {
                return 0 !== x.size;
            }), 0 === iters.length ? collection : 0 !== collection.size || collection.__ownerID || 1 !== iters.length ? collection.withMutations(function(collection) {
                for (var mergeIntoMap = merger ? function(value, key) {
                    collection.update(key, NOT_SET, function(existing) {
                        return existing === NOT_SET ? value : merger(existing, value, key);
                    });
                } : function(value, key) {
                    collection.set(key, value);
                }, ii = 0; ii < iters.length; ii++) iters[ii].forEach(mergeIntoMap);
            }) : collection.constructor(iters[0]);
        }
        function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
            var isNotSet = existing === NOT_SET, step = keyPathIter.next();
            if (step.done) {
                var existingValue = isNotSet ? notSetValue : existing, newValue = updater(existingValue);
                return newValue === existingValue ? existing : newValue;
            }
            invariant(isNotSet || existing && existing.set, "invalid keyPath");
            var key = step.value, nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET), nextUpdated = updateInDeepMap(nextExisting, keyPathIter, notSetValue, updater);
            return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
        }
        function popCount(x) {
            return x -= x >> 1 & 1431655765, x = (858993459 & x) + (x >> 2 & 858993459), x = x + (x >> 4) & 252645135, 
            x += x >> 8, x += x >> 16, 127 & x;
        }
        function setIn(array, idx, val, canEdit) {
            var newArray = canEdit ? array : arrCopy(array);
            return newArray[idx] = val, newArray;
        }
        function spliceIn(array, idx, val, canEdit) {
            var newLen = array.length + 1;
            if (canEdit && idx + 1 === newLen) return array[idx] = val, array;
            for (var newArray = new Array(newLen), after = 0, ii = 0; ii < newLen; ii++) ii === idx ? (newArray[ii] = val, 
            after = -1) : newArray[ii] = array[ii + after];
            return newArray;
        }
        function spliceOut(array, idx, canEdit) {
            var newLen = array.length - 1;
            if (canEdit && idx === newLen) return array.pop(), array;
            for (var newArray = new Array(newLen), after = 0, ii = 0; ii < newLen; ii++) ii === idx && (after = 1), 
            newArray[ii] = array[ii + after];
            return newArray;
        }
        // @pragma Construction
        function List(value) {
            var empty = emptyList();
            if (null === value || void 0 === value) return empty;
            if (isList(value)) return value;
            var iter = IndexedIterable(value), size = iter.size;
            return 0 === size ? empty : (assertNotInfinite(size), size > 0 && size < SIZE ? makeList(0, size, SHIFT, null, new VNode(iter.toArray())) : empty.withMutations(function(list) {
                list.setSize(size), iter.forEach(function(v, i) {
                    return list.set(i, v);
                });
            }));
        }
        function isList(maybeList) {
            return !(!maybeList || !maybeList[IS_LIST_SENTINEL]);
        }
        function VNode(array, ownerID) {
            this.array = array, this.ownerID = ownerID;
        }
        function iterateList(list, reverse) {
            function iterateNodeOrLeaf(node, level, offset) {
                return 0 === level ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
            }
            function iterateLeaf(node, offset) {
                var array = offset === tailPos ? tail && tail.array : node && node.array, from = offset > left ? 0 : left - offset, to = right - offset;
                return to > SIZE && (to = SIZE), function() {
                    if (from === to) return DONE;
                    var idx = reverse ? --to : from++;
                    return array && array[idx];
                };
            }
            function iterateNode(node, level, offset) {
                var values, array = node && node.array, from = offset > left ? 0 : left - offset >> level, to = (right - offset >> level) + 1;
                return to > SIZE && (to = SIZE), function() {
                    for (;;) {
                        if (values) {
                            var value = values();
                            if (value !== DONE) return value;
                            values = null;
                        }
                        if (from === to) return DONE;
                        var idx = reverse ? --to : from++;
                        values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
                    }
                };
            }
            var left = list._origin, right = list._capacity, tailPos = getTailOffset(right), tail = list._tail;
            return iterateNodeOrLeaf(list._root, list._level, 0);
        }
        function makeList(origin, capacity, level, root, tail, ownerID, hash) {
            var list = Object.create(ListPrototype);
            return list.size = capacity - origin, list._origin = origin, list._capacity = capacity, 
            list._level = level, list._root = root, list._tail = tail, list.__ownerID = ownerID, 
            list.__hash = hash, list.__altered = !1, list;
        }
        function emptyList() {
            return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
        }
        function updateList(list, index, value) {
            if (index = wrapIndex(list, index), index !== index) return list;
            if (index >= list.size || index < 0) return list.withMutations(function(list) {
                index < 0 ? setListBounds(list, index).set(0, value) : setListBounds(list, 0, index + 1).set(index, value);
            });
            index += list._origin;
            var newTail = list._tail, newRoot = list._root, didAlter = MakeRef(DID_ALTER);
            return index >= getTailOffset(list._capacity) ? newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter) : newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter), 
            didAlter.value ? list.__ownerID ? (list._root = newRoot, list._tail = newTail, list.__hash = void 0, 
            list.__altered = !0, list) : makeList(list._origin, list._capacity, list._level, newRoot, newTail) : list;
        }
        function updateVNode(node, ownerID, level, index, value, didAlter) {
            var idx = index >>> level & MASK, nodeHas = node && idx < node.array.length;
            if (!nodeHas && void 0 === value) return node;
            var newNode;
            if (level > 0) {
                var lowerNode = node && node.array[idx], newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
                return newLowerNode === lowerNode ? node : (newNode = editableVNode(node, ownerID), 
                newNode.array[idx] = newLowerNode, newNode);
            }
            return nodeHas && node.array[idx] === value ? node : (SetRef(didAlter), newNode = editableVNode(node, ownerID), 
            void 0 === value && idx === newNode.array.length - 1 ? newNode.array.pop() : newNode.array[idx] = value, 
            newNode);
        }
        function editableVNode(node, ownerID) {
            return ownerID && node && ownerID === node.ownerID ? node : new VNode(node ? node.array.slice() : [], ownerID);
        }
        function listNodeFor(list, rawIndex) {
            if (rawIndex >= getTailOffset(list._capacity)) return list._tail;
            if (rawIndex < 1 << list._level + SHIFT) {
                for (var node = list._root, level = list._level; node && level > 0; ) node = node.array[rawIndex >>> level & MASK], 
                level -= SHIFT;
                return node;
            }
        }
        function setListBounds(list, begin, end) {
            // Sanitize begin & end using this shorthand for ToInt32(argument)
            // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
            void 0 !== begin && (begin |= 0), void 0 !== end && (end |= 0);
            var owner = list.__ownerID || new OwnerID(), oldOrigin = list._origin, oldCapacity = list._capacity, newOrigin = oldOrigin + begin, newCapacity = void 0 === end ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
            if (newOrigin === oldOrigin && newCapacity === oldCapacity) return list;
            // If it's going to end after it starts, it's empty.
            if (newOrigin >= newCapacity) return list.clear();
            for (var newLevel = list._level, newRoot = list._root, offsetShift = 0; newOrigin + offsetShift < 0; ) newRoot = new VNode(newRoot && newRoot.array.length ? [ void 0, newRoot ] : [], owner), 
            newLevel += SHIFT, offsetShift += 1 << newLevel;
            offsetShift && (newOrigin += offsetShift, oldOrigin += offsetShift, newCapacity += offsetShift, 
            oldCapacity += offsetShift);
            // New size might need creating a higher root.
            for (var oldTailOffset = getTailOffset(oldCapacity), newTailOffset = getTailOffset(newCapacity); newTailOffset >= 1 << newLevel + SHIFT; ) newRoot = new VNode(newRoot && newRoot.array.length ? [ newRoot ] : [], owner), 
            newLevel += SHIFT;
            // Locate or create the new tail.
            var oldTail = list._tail, newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
            // Merge Tail into tree.
            if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
                newRoot = editableVNode(newRoot, owner);
                for (var node = newRoot, level = newLevel; level > SHIFT; level -= SHIFT) {
                    var idx = oldTailOffset >>> level & MASK;
                    node = node.array[idx] = editableVNode(node.array[idx], owner);
                }
                node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
            }
            // If the new origin is within the tail, then we do not need a root.
            if (// If the size has been reduced, there's a chance the tail needs to be trimmed.
            newCapacity < oldCapacity && (newTail = newTail && newTail.removeAfter(owner, 0, newCapacity)), 
            newOrigin >= newTailOffset) newOrigin -= newTailOffset, newCapacity -= newTailOffset, 
            newLevel = SHIFT, newRoot = null, newTail = newTail && newTail.removeBefore(owner, 0, newOrigin); else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
                // Identify the new top root node of the subtree of the old root.
                for (offsetShift = 0; newRoot; ) {
                    var beginIndex = newOrigin >>> newLevel & MASK;
                    if (beginIndex !== newTailOffset >>> newLevel & MASK) break;
                    beginIndex && (offsetShift += (1 << newLevel) * beginIndex), newLevel -= SHIFT, 
                    newRoot = newRoot.array[beginIndex];
                }
                // Trim the new sides of the new root.
                newRoot && newOrigin > oldOrigin && (newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift)), 
                newRoot && newTailOffset < oldTailOffset && (newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift)), 
                offsetShift && (newOrigin -= offsetShift, newCapacity -= offsetShift);
            }
            return list.__ownerID ? (list.size = newCapacity - newOrigin, list._origin = newOrigin, 
            list._capacity = newCapacity, list._level = newLevel, list._root = newRoot, list._tail = newTail, 
            list.__hash = void 0, list.__altered = !0, list) : makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
        }
        function mergeIntoListWith(list, merger, iterables) {
            for (var iters = [], maxSize = 0, ii = 0; ii < iterables.length; ii++) {
                var value = iterables[ii], iter = IndexedIterable(value);
                iter.size > maxSize && (maxSize = iter.size), isIterable(value) || (iter = iter.map(function(v) {
                    return fromJS(v);
                })), iters.push(iter);
            }
            return maxSize > list.size && (list = list.setSize(maxSize)), mergeIntoCollectionWith(list, merger, iters);
        }
        function getTailOffset(size) {
            return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
        }
        // @pragma Construction
        function OrderedMap(value) {
            return null === value || void 0 === value ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map) {
                var iter = KeyedIterable(value);
                assertNotInfinite(iter.size), iter.forEach(function(v, k) {
                    return map.set(k, v);
                });
            });
        }
        function isOrderedMap(maybeOrderedMap) {
            return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
        }
        function makeOrderedMap(map, list, ownerID, hash) {
            var omap = Object.create(OrderedMap.prototype);
            return omap.size = map ? map.size : 0, omap._map = map, omap._list = list, omap.__ownerID = ownerID, 
            omap.__hash = hash, omap;
        }
        function emptyOrderedMap() {
            return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
        }
        function updateOrderedMap(omap, k, v) {
            var newMap, newList, map = omap._map, list = omap._list, i = map.get(k), has = void 0 !== i;
            if (v === NOT_SET) {
                // removed
                if (!has) return omap;
                list.size >= SIZE && list.size >= 2 * map.size ? (newList = list.filter(function(entry, idx) {
                    return void 0 !== entry && i !== idx;
                }), newMap = newList.toKeyedSeq().map(function(entry) {
                    return entry[0];
                }).flip().toMap(), omap.__ownerID && (newMap.__ownerID = newList.__ownerID = omap.__ownerID)) : (newMap = map.remove(k), 
                newList = i === list.size - 1 ? list.pop() : list.set(i, void 0));
            } else if (has) {
                if (v === list.get(i)[1]) return omap;
                newMap = map, newList = list.set(i, [ k, v ]);
            } else newMap = map.set(k, list.size), newList = list.set(list.size, [ k, v ]);
            return omap.__ownerID ? (omap.size = newMap.size, omap._map = newMap, omap._list = newList, 
            omap.__hash = void 0, omap) : makeOrderedMap(newMap, newList);
        }
        function ToKeyedSequence(indexed, useKeys) {
            this._iter = indexed, this._useKeys = useKeys, this.size = indexed.size;
        }
        function ToIndexedSequence(iter) {
            this._iter = iter, this.size = iter.size;
        }
        function ToSetSequence(iter) {
            this._iter = iter, this.size = iter.size;
        }
        function FromEntriesSequence(entries) {
            this._iter = entries, this.size = entries.size;
        }
        function flipFactory(iterable) {
            var flipSequence = makeSequence(iterable);
            return flipSequence._iter = iterable, flipSequence.size = iterable.size, flipSequence.flip = function() {
                return iterable;
            }, flipSequence.reverse = function() {
                var reversedSequence = iterable.reverse.apply(this);
                // super.reverse()
                return reversedSequence.flip = function() {
                    return iterable.reverse();
                }, reversedSequence;
            }, flipSequence.has = function(key) {
                return iterable.includes(key);
            }, flipSequence.includes = function(key) {
                return iterable.has(key);
            }, flipSequence.cacheResult = cacheResultThrough, flipSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                return iterable.__iterate(function(v, k) {
                    return fn(k, v, this$0) !== !1;
                }, reverse);
            }, flipSequence.__iteratorUncached = function(type, reverse) {
                if (type === ITERATE_ENTRIES) {
                    var iterator = iterable.__iterator(type, reverse);
                    return new Iterator(function() {
                        var step = iterator.next();
                        if (!step.done) {
                            var k = step.value[0];
                            step.value[0] = step.value[1], step.value[1] = k;
                        }
                        return step;
                    });
                }
                return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
            }, flipSequence;
        }
        function mapFactory(iterable, mapper, context) {
            var mappedSequence = makeSequence(iterable);
            return mappedSequence.size = iterable.size, mappedSequence.has = function(key) {
                return iterable.has(key);
            }, mappedSequence.get = function(key, notSetValue) {
                var v = iterable.get(key, NOT_SET);
                return v === NOT_SET ? notSetValue : mapper.call(context, v, key, iterable);
            }, mappedSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                return iterable.__iterate(function(v, k, c) {
                    return fn(mapper.call(context, v, k, c), k, this$0) !== !1;
                }, reverse);
            }, mappedSequence.__iteratorUncached = function(type, reverse) {
                var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
                return new Iterator(function() {
                    var step = iterator.next();
                    if (step.done) return step;
                    var entry = step.value, key = entry[0];
                    return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
                });
            }, mappedSequence;
        }
        function reverseFactory(iterable, useKeys) {
            var reversedSequence = makeSequence(iterable);
            return reversedSequence._iter = iterable, reversedSequence.size = iterable.size, 
            reversedSequence.reverse = function() {
                return iterable;
            }, iterable.flip && (reversedSequence.flip = function() {
                var flipSequence = flipFactory(iterable);
                return flipSequence.reverse = function() {
                    return iterable.flip();
                }, flipSequence;
            }), reversedSequence.get = function(key, notSetValue) {
                return iterable.get(useKeys ? key : -1 - key, notSetValue);
            }, reversedSequence.has = function(key) {
                return iterable.has(useKeys ? key : -1 - key);
            }, reversedSequence.includes = function(value) {
                return iterable.includes(value);
            }, reversedSequence.cacheResult = cacheResultThrough, reversedSequence.__iterate = function(fn, reverse) {
                var this$0 = this;
                return iterable.__iterate(function(v, k) {
                    return fn(v, k, this$0);
                }, !reverse);
            }, reversedSequence.__iterator = function(type, reverse) {
                return iterable.__iterator(type, !reverse);
            }, reversedSequence;
        }
        function filterFactory(iterable, predicate, context, useKeys) {
            var filterSequence = makeSequence(iterable);
            return useKeys && (filterSequence.has = function(key) {
                var v = iterable.get(key, NOT_SET);
                return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
            }, filterSequence.get = function(key, notSetValue) {
                var v = iterable.get(key, NOT_SET);
                return v !== NOT_SET && predicate.call(context, v, key, iterable) ? v : notSetValue;
            }), filterSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this, iterations = 0;
                return iterable.__iterate(function(v, k, c) {
                    if (predicate.call(context, v, k, c)) return iterations++, fn(v, useKeys ? k : iterations - 1, this$0);
                }, reverse), iterations;
            }, filterSequence.__iteratorUncached = function(type, reverse) {
                var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse), iterations = 0;
                return new Iterator(function() {
                    for (;;) {
                        var step = iterator.next();
                        if (step.done) return step;
                        var entry = step.value, key = entry[0], value = entry[1];
                        if (predicate.call(context, value, key, iterable)) return iteratorValue(type, useKeys ? key : iterations++, value, step);
                    }
                });
            }, filterSequence;
        }
        function countByFactory(iterable, grouper, context) {
            var groups = Map().asMutable();
            return iterable.__iterate(function(v, k) {
                groups.update(grouper.call(context, v, k, iterable), 0, function(a) {
                    return a + 1;
                });
            }), groups.asImmutable();
        }
        function groupByFactory(iterable, grouper, context) {
            var isKeyedIter = isKeyed(iterable), groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
            iterable.__iterate(function(v, k) {
                groups.update(grouper.call(context, v, k, iterable), function(a) {
                    return a = a || [], a.push(isKeyedIter ? [ k, v ] : v), a;
                });
            });
            var coerce = iterableClass(iterable);
            return groups.map(function(arr) {
                return reify(iterable, coerce(arr));
            });
        }
        function sliceFactory(iterable, begin, end, useKeys) {
            var originalSize = iterable.size;
            if (// Sanitize begin & end using this shorthand for ToInt32(argument)
            // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
            void 0 !== begin && (begin |= 0), void 0 !== end && (end |= 0), wholeSlice(begin, end, originalSize)) return iterable;
            var resolvedBegin = resolveBegin(begin, originalSize), resolvedEnd = resolveEnd(end, originalSize);
            // begin or end will be NaN if they were provided as negative numbers and
            // this iterable's size is unknown. In that case, cache first so there is
            // a known size and these do not resolve to NaN.
            if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
            // Note: resolvedEnd is undefined when the original sequence's length is
            // unknown and this slice did not supply an end and should contain all
            // elements after resolvedBegin.
            // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
            var sliceSize, resolvedSize = resolvedEnd - resolvedBegin;
            resolvedSize === resolvedSize && (sliceSize = resolvedSize < 0 ? 0 : resolvedSize);
            var sliceSeq = makeSequence(iterable);
            // If iterable.size is undefined, the size of the realized sliceSeq is
            // unknown at this point unless the number of items to slice is 0
            return sliceSeq.size = 0 === sliceSize ? sliceSize : iterable.size && sliceSize || void 0, 
            !useKeys && isSeq(iterable) && sliceSize >= 0 && (sliceSeq.get = function(index, notSetValue) {
                return index = wrapIndex(this, index), index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
            }), sliceSeq.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                if (0 === sliceSize) return 0;
                if (reverse) return this.cacheResult().__iterate(fn, reverse);
                var skipped = 0, isSkipping = !0, iterations = 0;
                return iterable.__iterate(function(v, k) {
                    if (!isSkipping || !(isSkipping = skipped++ < resolvedBegin)) return iterations++, 
                    fn(v, useKeys ? k : iterations - 1, this$0) !== !1 && iterations !== sliceSize;
                }), iterations;
            }, sliceSeq.__iteratorUncached = function(type, reverse) {
                if (0 !== sliceSize && reverse) return this.cacheResult().__iterator(type, reverse);
                // Don't bother instantiating parent iterator if taking 0.
                var iterator = 0 !== sliceSize && iterable.__iterator(type, reverse), skipped = 0, iterations = 0;
                return new Iterator(function() {
                    for (;skipped++ < resolvedBegin; ) iterator.next();
                    if (++iterations > sliceSize) return iteratorDone();
                    var step = iterator.next();
                    return useKeys || type === ITERATE_VALUES ? step : type === ITERATE_KEYS ? iteratorValue(type, iterations - 1, void 0, step) : iteratorValue(type, iterations - 1, step.value[1], step);
                });
            }, sliceSeq;
        }
        function takeWhileFactory(iterable, predicate, context) {
            var takeSequence = makeSequence(iterable);
            return takeSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                if (reverse) return this.cacheResult().__iterate(fn, reverse);
                var iterations = 0;
                return iterable.__iterate(function(v, k, c) {
                    return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0);
                }), iterations;
            }, takeSequence.__iteratorUncached = function(type, reverse) {
                var this$0 = this;
                if (reverse) return this.cacheResult().__iterator(type, reverse);
                var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse), iterating = !0;
                return new Iterator(function() {
                    if (!iterating) return iteratorDone();
                    var step = iterator.next();
                    if (step.done) return step;
                    var entry = step.value, k = entry[0], v = entry[1];
                    return predicate.call(context, v, k, this$0) ? type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step) : (iterating = !1, 
                    iteratorDone());
                });
            }, takeSequence;
        }
        function skipWhileFactory(iterable, predicate, context, useKeys) {
            var skipSequence = makeSequence(iterable);
            return skipSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                if (reverse) return this.cacheResult().__iterate(fn, reverse);
                var isSkipping = !0, iterations = 0;
                return iterable.__iterate(function(v, k, c) {
                    if (!isSkipping || !(isSkipping = predicate.call(context, v, k, c))) return iterations++, 
                    fn(v, useKeys ? k : iterations - 1, this$0);
                }), iterations;
            }, skipSequence.__iteratorUncached = function(type, reverse) {
                var this$0 = this;
                if (reverse) return this.cacheResult().__iterator(type, reverse);
                var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse), skipping = !0, iterations = 0;
                return new Iterator(function() {
                    var step, k, v;
                    do {
                        if (step = iterator.next(), step.done) return useKeys || type === ITERATE_VALUES ? step : type === ITERATE_KEYS ? iteratorValue(type, iterations++, void 0, step) : iteratorValue(type, iterations++, step.value[1], step);
                        var entry = step.value;
                        k = entry[0], v = entry[1], skipping && (skipping = predicate.call(context, v, k, this$0));
                    } while (skipping);
                    return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
                });
            }, skipSequence;
        }
        function concatFactory(iterable, values) {
            var isKeyedIterable = isKeyed(iterable), iters = [ iterable ].concat(values).map(function(v) {
                return isIterable(v) ? isKeyedIterable && (v = KeyedIterable(v)) : v = isKeyedIterable ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [ v ]), 
                v;
            }).filter(function(v) {
                return 0 !== v.size;
            });
            if (0 === iters.length) return iterable;
            if (1 === iters.length) {
                var singleton = iters[0];
                if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) return singleton;
            }
            var concatSeq = new ArraySeq(iters);
            return isKeyedIterable ? concatSeq = concatSeq.toKeyedSeq() : isIndexed(iterable) || (concatSeq = concatSeq.toSetSeq()), 
            concatSeq = concatSeq.flatten(!0), concatSeq.size = iters.reduce(function(sum, seq) {
                if (void 0 !== sum) {
                    var size = seq.size;
                    if (void 0 !== size) return sum + size;
                }
            }, 0), concatSeq;
        }
        function flattenFactory(iterable, depth, useKeys) {
            var flatSequence = makeSequence(iterable);
            return flatSequence.__iterateUncached = function(fn, reverse) {
                function flatDeep(iter, currentDepth) {
                    var this$0 = this;
                    iter.__iterate(function(v, k) {
                        return (!depth || currentDepth < depth) && isIterable(v) ? flatDeep(v, currentDepth + 1) : fn(v, useKeys ? k : iterations++, this$0) === !1 && (stopped = !0), 
                        !stopped;
                    }, reverse);
                }
                var iterations = 0, stopped = !1;
                return flatDeep(iterable, 0), iterations;
            }, flatSequence.__iteratorUncached = function(type, reverse) {
                var iterator = iterable.__iterator(type, reverse), stack = [], iterations = 0;
                return new Iterator(function() {
                    for (;iterator; ) {
                        var step = iterator.next();
                        if (step.done === !1) {
                            var v = step.value;
                            if (type === ITERATE_ENTRIES && (v = v[1]), depth && !(stack.length < depth) || !isIterable(v)) return useKeys ? step : iteratorValue(type, iterations++, v, step);
                            stack.push(iterator), iterator = v.__iterator(type, reverse);
                        } else iterator = stack.pop();
                    }
                    return iteratorDone();
                });
            }, flatSequence;
        }
        function flatMapFactory(iterable, mapper, context) {
            var coerce = iterableClass(iterable);
            return iterable.toSeq().map(function(v, k) {
                return coerce(mapper.call(context, v, k, iterable));
            }).flatten(!0);
        }
        function interposeFactory(iterable, separator) {
            var interposedSequence = makeSequence(iterable);
            return interposedSequence.size = iterable.size && 2 * iterable.size - 1, interposedSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this, iterations = 0;
                return iterable.__iterate(function(v, k) {
                    return (!iterations || fn(separator, iterations++, this$0) !== !1) && fn(v, iterations++, this$0) !== !1;
                }, reverse), iterations;
            }, interposedSequence.__iteratorUncached = function(type, reverse) {
                var step, iterator = iterable.__iterator(ITERATE_VALUES, reverse), iterations = 0;
                return new Iterator(function() {
                    return (!step || iterations % 2) && (step = iterator.next(), step.done) ? step : iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
                });
            }, interposedSequence;
        }
        function sortFactory(iterable, comparator, mapper) {
            comparator || (comparator = defaultComparator);
            var isKeyedIterable = isKeyed(iterable), index = 0, entries = iterable.toSeq().map(function(v, k) {
                return [ k, v, index++, mapper ? mapper(v, k, iterable) : v ];
            }).toArray();
            return entries.sort(function(a, b) {
                return comparator(a[3], b[3]) || a[2] - b[2];
            }).forEach(isKeyedIterable ? function(v, i) {
                entries[i].length = 2;
            } : function(v, i) {
                entries[i] = v[1];
            }), isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
        }
        function maxFactory(iterable, comparator, mapper) {
            if (comparator || (comparator = defaultComparator), mapper) {
                var entry = iterable.toSeq().map(function(v, k) {
                    return [ v, mapper(v, k, iterable) ];
                }).reduce(function(a, b) {
                    return maxCompare(comparator, a[1], b[1]) ? b : a;
                });
                return entry && entry[0];
            }
            return iterable.reduce(function(a, b) {
                return maxCompare(comparator, a, b) ? b : a;
            });
        }
        function maxCompare(comparator, a, b) {
            var comp = comparator(b, a);
            // b is considered the new max if the comparator declares them equal, but
            // they are not equal and b is in fact a nullish value.
            return 0 === comp && b !== a && (void 0 === b || null === b || b !== b) || comp > 0;
        }
        function zipWithFactory(keyIter, zipper, iters) {
            var zipSequence = makeSequence(keyIter);
            // Note: this a generic base implementation of __iterate in terms of
            // __iterator which may be more generically useful in the future.
            return zipSequence.size = new ArraySeq(iters).map(function(i) {
                return i.size;
            }).min(), zipSequence.__iterate = function(fn, reverse) {
                for (/* generic:
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
                var step, iterator = this.__iterator(ITERATE_VALUES, reverse), iterations = 0; !(step = iterator.next()).done && fn(step.value, iterations++, this) !== !1; ) ;
                return iterations;
            }, zipSequence.__iteratorUncached = function(type, reverse) {
                var iterators = iters.map(function(i) {
                    return i = Iterable(i), getIterator(reverse ? i.reverse() : i);
                }), iterations = 0, isDone = !1;
                return new Iterator(function() {
                    var steps;
                    return isDone || (steps = iterators.map(function(i) {
                        return i.next();
                    }), isDone = steps.some(function(s) {
                        return s.done;
                    })), isDone ? iteratorDone() : iteratorValue(type, iterations++, zipper.apply(null, steps.map(function(s) {
                        return s.value;
                    })));
                });
            }, zipSequence;
        }
        // #pragma Helper Functions
        function reify(iter, seq) {
            return isSeq(iter) ? seq : iter.constructor(seq);
        }
        function validateEntry(entry) {
            if (entry !== Object(entry)) throw new TypeError("Expected [K, V] tuple: " + entry);
        }
        function resolveSize(iter) {
            return assertNotInfinite(iter.size), ensureSize(iter);
        }
        function iterableClass(iterable) {
            return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
        }
        function makeSequence(iterable) {
            return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
        }
        function cacheResultThrough() {
            return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, 
            this) : Seq.prototype.cacheResult.call(this);
        }
        function defaultComparator(a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
        }
        function forceIterator(keyPath) {
            var iter = getIterator(keyPath);
            if (!iter) {
                // Array might not be iterable in this environment, so we need a fallback
                // to our wrapped type.
                if (!isArrayLike(keyPath)) throw new TypeError("Expected iterable or array-like: " + keyPath);
                iter = getIterator(Iterable(keyPath));
            }
            return iter;
        }
        function Record(defaultValues, name) {
            var hasInitialized, RecordType = function(values) {
                if (values instanceof RecordType) return values;
                if (!(this instanceof RecordType)) return new RecordType(values);
                if (!hasInitialized) {
                    hasInitialized = !0;
                    var keys = Object.keys(defaultValues);
                    setProps(RecordTypePrototype, keys), RecordTypePrototype.size = keys.length, RecordTypePrototype._name = name, 
                    RecordTypePrototype._keys = keys, RecordTypePrototype._defaultValues = defaultValues;
                }
                this._map = Map(values);
            }, RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
            return RecordTypePrototype.constructor = RecordType, RecordType;
        }
        function makeRecord(likeRecord, map, ownerID) {
            var record = Object.create(Object.getPrototypeOf(likeRecord));
            return record._map = map, record.__ownerID = ownerID, record;
        }
        function recordName(record) {
            return record._name || record.constructor.name || "Record";
        }
        function setProps(prototype, names) {
            try {
                names.forEach(setProp.bind(void 0, prototype));
            } catch (error) {}
        }
        function setProp(prototype, name) {
            Object.defineProperty(prototype, name, {
                get: function() {
                    return this.get(name);
                },
                set: function(value) {
                    invariant(this.__ownerID, "Cannot set on an immutable record."), this.set(name, value);
                }
            });
        }
        // @pragma Construction
        function Set(value) {
            return null === value || void 0 === value ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set) {
                var iter = SetIterable(value);
                assertNotInfinite(iter.size), iter.forEach(function(v) {
                    return set.add(v);
                });
            });
        }
        function isSet(maybeSet) {
            return !(!maybeSet || !maybeSet[IS_SET_SENTINEL]);
        }
        function updateSet(set, newMap) {
            return set.__ownerID ? (set.size = newMap.size, set._map = newMap, set) : newMap === set._map ? set : 0 === newMap.size ? set.__empty() : set.__make(newMap);
        }
        function makeSet(map, ownerID) {
            var set = Object.create(SetPrototype);
            return set.size = map ? map.size : 0, set._map = map, set.__ownerID = ownerID, set;
        }
        function emptySet() {
            return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
        }
        // @pragma Construction
        function OrderedSet(value) {
            return null === value || void 0 === value ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set) {
                var iter = SetIterable(value);
                assertNotInfinite(iter.size), iter.forEach(function(v) {
                    return set.add(v);
                });
            });
        }
        function isOrderedSet(maybeOrderedSet) {
            return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
        }
        function makeOrderedSet(map, ownerID) {
            var set = Object.create(OrderedSetPrototype);
            return set.size = map ? map.size : 0, set._map = map, set.__ownerID = ownerID, set;
        }
        function emptyOrderedSet() {
            return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
        }
        // @pragma Construction
        function Stack(value) {
            return null === value || void 0 === value ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
        }
        function isStack(maybeStack) {
            return !(!maybeStack || !maybeStack[IS_STACK_SENTINEL]);
        }
        function makeStack(size, head, ownerID, hash) {
            var map = Object.create(StackPrototype);
            return map.size = size, map._head = head, map.__ownerID = ownerID, map.__hash = hash, 
            map.__altered = !1, map;
        }
        function emptyStack() {
            return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
        }
        /**
	   * Contributes additional methods to a constructor
	   */
        function mixin(ctor, methods) {
            var keyCopier = function(key) {
                ctor.prototype[key] = methods[key];
            };
            return Object.keys(methods).forEach(keyCopier), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier), 
            ctor;
        }
        // #pragma Helper functions
        function keyMapper(v, k) {
            return k;
        }
        function entryMapper(v, k) {
            return [ k, v ];
        }
        function not(predicate) {
            return function() {
                return !predicate.apply(this, arguments);
            };
        }
        function neg(predicate) {
            return function() {
                return -predicate.apply(this, arguments);
            };
        }
        function quoteString(value) {
            return "string" == typeof value ? JSON.stringify(value) : value;
        }
        function defaultZipper() {
            return arrCopy(arguments);
        }
        function defaultNegComparator(a, b) {
            return a < b ? 1 : a > b ? -1 : 0;
        }
        function hashIterable(iterable) {
            if (iterable.size === 1 / 0) return 0;
            var ordered = isOrdered(iterable), keyed = isKeyed(iterable), h = ordered ? 1 : 0, size = iterable.__iterate(keyed ? ordered ? function(v, k) {
                h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
            } : function(v, k) {
                h = h + hashMerge(hash(v), hash(k)) | 0;
            } : ordered ? function(v) {
                h = 31 * h + hash(v) | 0;
            } : function(v) {
                h = h + hash(v) | 0;
            });
            return murmurHashOfSize(size, h);
        }
        function murmurHashOfSize(size, h) {
            return h = imul(h, 3432918353), h = imul(h << 15 | h >>> -15, 461845907), h = imul(h << 13 | h >>> -13, 5), 
            h = (h + 3864292196 | 0) ^ size, h = imul(h ^ h >>> 16, 2246822507), h = imul(h ^ h >>> 13, 3266489909), 
            h = smi(h ^ h >>> 16);
        }
        function hashMerge(a, b) {
            return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
        }
        var SLICE$0 = Array.prototype.slice;
        createClass(KeyedIterable, Iterable), createClass(IndexedIterable, Iterable), createClass(SetIterable, Iterable), 
        Iterable.isIterable = isIterable, Iterable.isKeyed = isKeyed, Iterable.isIndexed = isIndexed, 
        Iterable.isAssociative = isAssociative, Iterable.isOrdered = isOrdered, Iterable.Keyed = KeyedIterable, 
        Iterable.Indexed = IndexedIterable, Iterable.Set = SetIterable;
        var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@", IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@", IS_INDEXED_SENTINEL = "@@__IMMUTABLE_INDEXED__@@", IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@", DELETE = "delete", SHIFT = 5, SIZE = 1 << SHIFT, MASK = SIZE - 1, NOT_SET = {}, CHANGE_LENGTH = {
            value: !1
        }, DID_ALTER = {
            value: !1
        }, ITERATE_KEYS = 0, ITERATE_VALUES = 1, ITERATE_ENTRIES = 2, REAL_ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
        Iterator.prototype.toString = function() {
            return "[Iterator]";
        }, Iterator.KEYS = ITERATE_KEYS, Iterator.VALUES = ITERATE_VALUES, Iterator.ENTRIES = ITERATE_ENTRIES, 
        Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
            return this.toString();
        }, Iterator.prototype[ITERATOR_SYMBOL] = function() {
            return this;
        }, createClass(Seq, Iterable), Seq.of = function() {
            return Seq(arguments);
        }, Seq.prototype.toSeq = function() {
            return this;
        }, Seq.prototype.toString = function() {
            return this.__toString("Seq {", "}");
        }, Seq.prototype.cacheResult = function() {
            return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), 
            this.size = this._cache.length), this;
        }, // abstract __iterateUncached(fn, reverse)
        Seq.prototype.__iterate = function(fn, reverse) {
            return seqIterate(this, fn, reverse, !0);
        }, // abstract __iteratorUncached(type, reverse)
        Seq.prototype.__iterator = function(type, reverse) {
            return seqIterator(this, type, reverse, !0);
        }, createClass(KeyedSeq, Seq), KeyedSeq.prototype.toKeyedSeq = function() {
            return this;
        }, createClass(IndexedSeq, Seq), IndexedSeq.of = function() {
            return IndexedSeq(arguments);
        }, IndexedSeq.prototype.toIndexedSeq = function() {
            return this;
        }, IndexedSeq.prototype.toString = function() {
            return this.__toString("Seq [", "]");
        }, IndexedSeq.prototype.__iterate = function(fn, reverse) {
            return seqIterate(this, fn, reverse, !1);
        }, IndexedSeq.prototype.__iterator = function(type, reverse) {
            return seqIterator(this, type, reverse, !1);
        }, createClass(SetSeq, Seq), SetSeq.of = function() {
            return SetSeq(arguments);
        }, SetSeq.prototype.toSetSeq = function() {
            return this;
        }, Seq.isSeq = isSeq, Seq.Keyed = KeyedSeq, Seq.Set = SetSeq, Seq.Indexed = IndexedSeq;
        var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
        Seq.prototype[IS_SEQ_SENTINEL] = !0, createClass(ArraySeq, IndexedSeq), ArraySeq.prototype.get = function(index, notSetValue) {
            return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
        }, ArraySeq.prototype.__iterate = function(fn, reverse) {
            for (var array = this._array, maxIndex = array.length - 1, ii = 0; ii <= maxIndex; ii++) if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === !1) return ii + 1;
            return ii;
        }, ArraySeq.prototype.__iterator = function(type, reverse) {
            var array = this._array, maxIndex = array.length - 1, ii = 0;
            return new Iterator(function() {
                return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
            });
        }, createClass(ObjectSeq, KeyedSeq), ObjectSeq.prototype.get = function(key, notSetValue) {
            return void 0 === notSetValue || this.has(key) ? this._object[key] : notSetValue;
        }, ObjectSeq.prototype.has = function(key) {
            return this._object.hasOwnProperty(key);
        }, ObjectSeq.prototype.__iterate = function(fn, reverse) {
            for (var object = this._object, keys = this._keys, maxIndex = keys.length - 1, ii = 0; ii <= maxIndex; ii++) {
                var key = keys[reverse ? maxIndex - ii : ii];
                if (fn(object[key], key, this) === !1) return ii + 1;
            }
            return ii;
        }, ObjectSeq.prototype.__iterator = function(type, reverse) {
            var object = this._object, keys = this._keys, maxIndex = keys.length - 1, ii = 0;
            return new Iterator(function() {
                var key = keys[reverse ? maxIndex - ii : ii];
                return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
            });
        }, ObjectSeq.prototype[IS_ORDERED_SENTINEL] = !0, createClass(IterableSeq, IndexedSeq), 
        IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
            if (reverse) return this.cacheResult().__iterate(fn, reverse);
            var iterable = this._iterable, iterator = getIterator(iterable), iterations = 0;
            if (isIterator(iterator)) for (var step; !(step = iterator.next()).done && fn(step.value, iterations++, this) !== !1; ) ;
            return iterations;
        }, IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
            if (reverse) return this.cacheResult().__iterator(type, reverse);
            var iterable = this._iterable, iterator = getIterator(iterable);
            if (!isIterator(iterator)) return new Iterator(iteratorDone);
            var iterations = 0;
            return new Iterator(function() {
                var step = iterator.next();
                return step.done ? step : iteratorValue(type, iterations++, step.value);
            });
        }, createClass(IteratorSeq, IndexedSeq), IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
            if (reverse) return this.cacheResult().__iterate(fn, reverse);
            for (var iterator = this._iterator, cache = this._iteratorCache, iterations = 0; iterations < cache.length; ) if (fn(cache[iterations], iterations++, this) === !1) return iterations;
            for (var step; !(step = iterator.next()).done; ) {
                var val = step.value;
                if (cache[iterations] = val, fn(val, iterations++, this) === !1) break;
            }
            return iterations;
        }, IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
            if (reverse) return this.cacheResult().__iterator(type, reverse);
            var iterator = this._iterator, cache = this._iteratorCache, iterations = 0;
            return new Iterator(function() {
                if (iterations >= cache.length) {
                    var step = iterator.next();
                    if (step.done) return step;
                    cache[iterations] = step.value;
                }
                return iteratorValue(type, iterations, cache[iterations++]);
            });
        };
        var EMPTY_SEQ;
        createClass(Repeat, IndexedSeq), Repeat.prototype.toString = function() {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
        }, Repeat.prototype.get = function(index, notSetValue) {
            return this.has(index) ? this._value : notSetValue;
        }, Repeat.prototype.includes = function(searchValue) {
            return is(this._value, searchValue);
        }, Repeat.prototype.slice = function(begin, end) {
            var size = this.size;
            return wholeSlice(begin, end, size) ? this : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
        }, Repeat.prototype.reverse = function() {
            return this;
        }, Repeat.prototype.indexOf = function(searchValue) {
            return is(this._value, searchValue) ? 0 : -1;
        }, Repeat.prototype.lastIndexOf = function(searchValue) {
            return is(this._value, searchValue) ? this.size : -1;
        }, Repeat.prototype.__iterate = function(fn, reverse) {
            for (var ii = 0; ii < this.size; ii++) if (fn(this._value, ii, this) === !1) return ii + 1;
            return ii;
        }, Repeat.prototype.__iterator = function(type, reverse) {
            var this$0 = this, ii = 0;
            return new Iterator(function() {
                return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone();
            });
        }, Repeat.prototype.equals = function(other) {
            return other instanceof Repeat ? is(this._value, other._value) : deepEqual(other);
        };
        var EMPTY_REPEAT;
        createClass(Range, IndexedSeq), Range.prototype.toString = function() {
            return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
        }, Range.prototype.get = function(index, notSetValue) {
            return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
        }, Range.prototype.includes = function(searchValue) {
            var possibleIndex = (searchValue - this._start) / this._step;
            return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
        }, Range.prototype.slice = function(begin, end) {
            return wholeSlice(begin, end, this.size) ? this : (begin = resolveBegin(begin, this.size), 
            end = resolveEnd(end, this.size), end <= begin ? new Range(0, 0) : new Range(this.get(begin, this._end), this.get(end, this._end), this._step));
        }, Range.prototype.indexOf = function(searchValue) {
            var offsetValue = searchValue - this._start;
            if (offsetValue % this._step === 0) {
                var index = offsetValue / this._step;
                if (index >= 0 && index < this.size) return index;
            }
            return -1;
        }, Range.prototype.lastIndexOf = function(searchValue) {
            return this.indexOf(searchValue);
        }, Range.prototype.__iterate = function(fn, reverse) {
            for (var maxIndex = this.size - 1, step = this._step, value = reverse ? this._start + maxIndex * step : this._start, ii = 0; ii <= maxIndex; ii++) {
                if (fn(value, ii, this) === !1) return ii + 1;
                value += reverse ? -step : step;
            }
            return ii;
        }, Range.prototype.__iterator = function(type, reverse) {
            var maxIndex = this.size - 1, step = this._step, value = reverse ? this._start + maxIndex * step : this._start, ii = 0;
            return new Iterator(function() {
                var v = value;
                return value += reverse ? -step : step, ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
            });
        }, Range.prototype.equals = function(other) {
            return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
        };
        var EMPTY_RANGE;
        createClass(Collection, Iterable), createClass(KeyedCollection, Collection), createClass(IndexedCollection, Collection), 
        createClass(SetCollection, Collection), Collection.Keyed = KeyedCollection, Collection.Indexed = IndexedCollection, 
        Collection.Set = SetCollection;
        var weakMap, imul = "function" == typeof Math.imul && Math.imul(4294967295, 2) === -2 ? Math.imul : function(a, b) {
            a |= 0, // int
            b |= 0;
            // int
            var c = 65535 & a, d = 65535 & b;
            // Shift by 0 fixes the sign on the high part.
            return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
        }, isExtensible = Object.isExtensible, canDefineProperty = function() {
            try {
                return Object.defineProperty({}, "@", {}), !0;
            } catch (e) {
                return !1;
            }
        }(), usingWeakMap = "function" == typeof WeakMap;
        usingWeakMap && (weakMap = new WeakMap());
        var objHashUID = 0, UID_HASH_KEY = "__immutablehash__";
        "function" == typeof Symbol && (UID_HASH_KEY = Symbol(UID_HASH_KEY));
        var STRING_HASH_CACHE_MIN_STRLEN = 16, STRING_HASH_CACHE_MAX_SIZE = 255, STRING_HASH_CACHE_SIZE = 0, stringHashCache = {};
        createClass(Map, KeyedCollection), Map.prototype.toString = function() {
            return this.__toString("Map {", "}");
        }, // @pragma Access
        Map.prototype.get = function(k, notSetValue) {
            return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
        }, // @pragma Modification
        Map.prototype.set = function(k, v) {
            return updateMap(this, k, v);
        }, Map.prototype.setIn = function(keyPath, v) {
            return this.updateIn(keyPath, NOT_SET, function() {
                return v;
            });
        }, Map.prototype.remove = function(k) {
            return updateMap(this, k, NOT_SET);
        }, Map.prototype.deleteIn = function(keyPath) {
            return this.updateIn(keyPath, function() {
                return NOT_SET;
            });
        }, Map.prototype.update = function(k, notSetValue, updater) {
            return 1 === arguments.length ? k(this) : this.updateIn([ k ], notSetValue, updater);
        }, Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
            updater || (updater = notSetValue, notSetValue = void 0);
            var updatedValue = updateInDeepMap(this, forceIterator(keyPath), notSetValue, updater);
            return updatedValue === NOT_SET ? void 0 : updatedValue;
        }, Map.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, 
            this.__hash = void 0, this.__altered = !0, this) : emptyMap();
        }, // @pragma Composition
        Map.prototype.merge = function() {
            return mergeIntoMapWith(this, void 0, arguments);
        }, Map.prototype.mergeWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoMapWith(this, merger, iters);
        }, Map.prototype.mergeIn = function(keyPath) {
            var iters = SLICE$0.call(arguments, 1);
            return this.updateIn(keyPath, emptyMap(), function(m) {
                return "function" == typeof m.merge ? m.merge.apply(m, iters) : iters[iters.length - 1];
            });
        }, Map.prototype.mergeDeep = function() {
            return mergeIntoMapWith(this, deepMerger, arguments);
        }, Map.prototype.mergeDeepWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoMapWith(this, deepMergerWith(merger), iters);
        }, Map.prototype.mergeDeepIn = function(keyPath) {
            var iters = SLICE$0.call(arguments, 1);
            return this.updateIn(keyPath, emptyMap(), function(m) {
                return "function" == typeof m.mergeDeep ? m.mergeDeep.apply(m, iters) : iters[iters.length - 1];
            });
        }, Map.prototype.sort = function(comparator) {
            // Late binding
            return OrderedMap(sortFactory(this, comparator));
        }, Map.prototype.sortBy = function(mapper, comparator) {
            // Late binding
            return OrderedMap(sortFactory(this, comparator, mapper));
        }, // @pragma Mutability
        Map.prototype.withMutations = function(fn) {
            var mutable = this.asMutable();
            return fn(mutable), mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
        }, Map.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
        }, Map.prototype.asImmutable = function() {
            return this.__ensureOwner();
        }, Map.prototype.wasAltered = function() {
            return this.__altered;
        }, Map.prototype.__iterator = function(type, reverse) {
            return new MapIterator(this, type, reverse);
        }, Map.prototype.__iterate = function(fn, reverse) {
            var this$0 = this, iterations = 0;
            return this._root && this._root.iterate(function(entry) {
                return iterations++, fn(entry[1], entry[0], this$0);
            }, reverse), iterations;
        }, Map.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID ? this : ownerID ? makeMap(this.size, this._root, ownerID, this.__hash) : (this.__ownerID = ownerID, 
            this.__altered = !1, this);
        }, Map.isMap = isMap;
        var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@", MapPrototype = Map.prototype;
        MapPrototype[IS_MAP_SENTINEL] = !0, MapPrototype[DELETE] = MapPrototype.remove, 
        MapPrototype.removeIn = MapPrototype.deleteIn, ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            for (var entries = this.entries, ii = 0, len = entries.length; ii < len; ii++) if (is(key, entries[ii][0])) return entries[ii][1];
            return notSetValue;
        }, ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            for (var removed = value === NOT_SET, entries = this.entries, idx = 0, len = entries.length; idx < len && !is(key, entries[idx][0]); idx++) ;
            var exists = idx < len;
            if (exists ? entries[idx][1] === value : removed) return this;
            if (SetRef(didAlter), (removed || !exists) && SetRef(didChangeSize), !removed || 1 !== entries.length) {
                if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) return createNodes(ownerID, entries, key, value);
                var isEditable = ownerID && ownerID === this.ownerID, newEntries = isEditable ? entries : arrCopy(entries);
                return exists ? removed ? idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop() : newEntries[idx] = [ key, value ] : newEntries.push([ key, value ]), 
                isEditable ? (this.entries = newEntries, this) : new ArrayMapNode(ownerID, newEntries);
            }
        }, BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            void 0 === keyHash && (keyHash = hash(key));
            var bit = 1 << ((0 === shift ? keyHash : keyHash >>> shift) & MASK), bitmap = this.bitmap;
            return 0 === (bitmap & bit) ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
        }, BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            void 0 === keyHash && (keyHash = hash(key));
            var keyHashFrag = (0 === shift ? keyHash : keyHash >>> shift) & MASK, bit = 1 << keyHashFrag, bitmap = this.bitmap, exists = 0 !== (bitmap & bit);
            if (!exists && value === NOT_SET) return this;
            var idx = popCount(bitmap & bit - 1), nodes = this.nodes, node = exists ? nodes[idx] : void 0, newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
            if (newNode === node) return this;
            if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
            if (exists && !newNode && 2 === nodes.length && isLeafNode(nodes[1 ^ idx])) return nodes[1 ^ idx];
            if (exists && newNode && 1 === nodes.length && isLeafNode(newNode)) return newNode;
            var isEditable = ownerID && ownerID === this.ownerID, newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit, newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
            return isEditable ? (this.bitmap = newBitmap, this.nodes = newNodes, this) : new BitmapIndexedNode(ownerID, newBitmap, newNodes);
        }, HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            void 0 === keyHash && (keyHash = hash(key));
            var idx = (0 === shift ? keyHash : keyHash >>> shift) & MASK, node = this.nodes[idx];
            return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
        }, HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            void 0 === keyHash && (keyHash = hash(key));
            var idx = (0 === shift ? keyHash : keyHash >>> shift) & MASK, removed = value === NOT_SET, nodes = this.nodes, node = nodes[idx];
            if (removed && !node) return this;
            var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
            if (newNode === node) return this;
            var newCount = this.count;
            if (node) {
                if (!newNode && (newCount--, newCount < MIN_HASH_ARRAY_MAP_SIZE)) return packNodes(ownerID, nodes, newCount, idx);
            } else newCount++;
            var isEditable = ownerID && ownerID === this.ownerID, newNodes = setIn(nodes, idx, newNode, isEditable);
            return isEditable ? (this.count = newCount, this.nodes = newNodes, this) : new HashArrayMapNode(ownerID, newCount, newNodes);
        }, HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            for (var entries = this.entries, ii = 0, len = entries.length; ii < len; ii++) if (is(key, entries[ii][0])) return entries[ii][1];
            return notSetValue;
        }, HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            void 0 === keyHash && (keyHash = hash(key));
            var removed = value === NOT_SET;
            if (keyHash !== this.keyHash) return removed ? this : (SetRef(didAlter), SetRef(didChangeSize), 
            mergeIntoNode(this, ownerID, shift, keyHash, [ key, value ]));
            for (var entries = this.entries, idx = 0, len = entries.length; idx < len && !is(key, entries[idx][0]); idx++) ;
            var exists = idx < len;
            if (exists ? entries[idx][1] === value : removed) return this;
            if (SetRef(didAlter), (removed || !exists) && SetRef(didChangeSize), removed && 2 === len) return new ValueNode(ownerID, this.keyHash, entries[1 ^ idx]);
            var isEditable = ownerID && ownerID === this.ownerID, newEntries = isEditable ? entries : arrCopy(entries);
            return exists ? removed ? idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop() : newEntries[idx] = [ key, value ] : newEntries.push([ key, value ]), 
            isEditable ? (this.entries = newEntries, this) : new HashCollisionNode(ownerID, this.keyHash, newEntries);
        }, ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
        }, ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            var removed = value === NOT_SET, keyMatch = is(key, this.entry[0]);
            return (keyMatch ? value === this.entry[1] : removed) ? this : (SetRef(didAlter), 
            removed ? void SetRef(didChangeSize) : keyMatch ? ownerID && ownerID === this.ownerID ? (this.entry[1] = value, 
            this) : new ValueNode(ownerID, this.keyHash, [ key, value ]) : (SetRef(didChangeSize), 
            mergeIntoNode(this, ownerID, shift, hash(key), [ key, value ])));
        }, // #pragma Iterators
        ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse) {
            for (var entries = this.entries, ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) if (fn(entries[reverse ? maxIndex - ii : ii]) === !1) return !1;
        }, BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse) {
            for (var nodes = this.nodes, ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
                var node = nodes[reverse ? maxIndex - ii : ii];
                if (node && node.iterate(fn, reverse) === !1) return !1;
            }
        }, ValueNode.prototype.iterate = function(fn, reverse) {
            return fn(this.entry);
        }, createClass(MapIterator, Iterator), MapIterator.prototype.next = function() {
            for (var type = this._type, stack = this._stack; stack; ) {
                var maxIndex, node = stack.node, index = stack.index++;
                if (node.entry) {
                    if (0 === index) return mapIteratorValue(type, node.entry);
                } else if (node.entries) {
                    if (maxIndex = node.entries.length - 1, index <= maxIndex) return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
                } else if (maxIndex = node.nodes.length - 1, index <= maxIndex) {
                    var subNode = node.nodes[this._reverse ? maxIndex - index : index];
                    if (subNode) {
                        if (subNode.entry) return mapIteratorValue(type, subNode.entry);
                        stack = this._stack = mapIteratorFrame(subNode, stack);
                    }
                    continue;
                }
                stack = this._stack = this._stack.__prev;
            }
            return iteratorDone();
        };
        var EMPTY_MAP, MAX_ARRAY_MAP_SIZE = SIZE / 4, MAX_BITMAP_INDEXED_SIZE = SIZE / 2, MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
        createClass(List, IndexedCollection), List.of = function() {
            return this(arguments);
        }, List.prototype.toString = function() {
            return this.__toString("List [", "]");
        }, // @pragma Access
        List.prototype.get = function(index, notSetValue) {
            if (index = wrapIndex(this, index), index >= 0 && index < this.size) {
                index += this._origin;
                var node = listNodeFor(this, index);
                return node && node.array[index & MASK];
            }
            return notSetValue;
        }, // @pragma Modification
        List.prototype.set = function(index, value) {
            return updateList(this, index, value);
        }, List.prototype.remove = function(index) {
            return this.has(index) ? 0 === index ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1) : this;
        }, List.prototype.insert = function(index, value) {
            return this.splice(index, 0, value);
        }, List.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, 
            this._level = SHIFT, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, 
            this) : emptyList();
        }, List.prototype.push = function() {
            var values = arguments, oldSize = this.size;
            return this.withMutations(function(list) {
                setListBounds(list, 0, oldSize + values.length);
                for (var ii = 0; ii < values.length; ii++) list.set(oldSize + ii, values[ii]);
            });
        }, List.prototype.pop = function() {
            return setListBounds(this, 0, -1);
        }, List.prototype.unshift = function() {
            var values = arguments;
            return this.withMutations(function(list) {
                setListBounds(list, -values.length);
                for (var ii = 0; ii < values.length; ii++) list.set(ii, values[ii]);
            });
        }, List.prototype.shift = function() {
            return setListBounds(this, 1);
        }, // @pragma Composition
        List.prototype.merge = function() {
            return mergeIntoListWith(this, void 0, arguments);
        }, List.prototype.mergeWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoListWith(this, merger, iters);
        }, List.prototype.mergeDeep = function() {
            return mergeIntoListWith(this, deepMerger, arguments);
        }, List.prototype.mergeDeepWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoListWith(this, deepMergerWith(merger), iters);
        }, List.prototype.setSize = function(size) {
            return setListBounds(this, 0, size);
        }, // @pragma Iteration
        List.prototype.slice = function(begin, end) {
            var size = this.size;
            return wholeSlice(begin, end, size) ? this : setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
        }, List.prototype.__iterator = function(type, reverse) {
            var index = 0, values = iterateList(this, reverse);
            return new Iterator(function() {
                var value = values();
                return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
            });
        }, List.prototype.__iterate = function(fn, reverse) {
            for (var value, index = 0, values = iterateList(this, reverse); (value = values()) !== DONE && fn(value, index++, this) !== !1; ) ;
            return index;
        }, List.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID ? this : ownerID ? makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash) : (this.__ownerID = ownerID, 
            this);
        }, List.isList = isList;
        var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@", ListPrototype = List.prototype;
        ListPrototype[IS_LIST_SENTINEL] = !0, ListPrototype[DELETE] = ListPrototype.remove, 
        ListPrototype.setIn = MapPrototype.setIn, ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn, 
        ListPrototype.update = MapPrototype.update, ListPrototype.updateIn = MapPrototype.updateIn, 
        ListPrototype.mergeIn = MapPrototype.mergeIn, ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn, 
        ListPrototype.withMutations = MapPrototype.withMutations, ListPrototype.asMutable = MapPrototype.asMutable, 
        ListPrototype.asImmutable = MapPrototype.asImmutable, ListPrototype.wasAltered = MapPrototype.wasAltered, 
        // TODO: seems like these methods are very similar
        VNode.prototype.removeBefore = function(ownerID, level, index) {
            if (index === level ? 1 << level : 0 === this.array.length) return this;
            var originIndex = index >>> level & MASK;
            if (originIndex >= this.array.length) return new VNode([], ownerID);
            var newChild, removingFirst = 0 === originIndex;
            if (level > 0) {
                var oldChild = this.array[originIndex];
                if (newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index), 
                newChild === oldChild && removingFirst) return this;
            }
            if (removingFirst && !newChild) return this;
            var editable = editableVNode(this, ownerID);
            if (!removingFirst) for (var ii = 0; ii < originIndex; ii++) editable.array[ii] = void 0;
            return newChild && (editable.array[originIndex] = newChild), editable;
        }, VNode.prototype.removeAfter = function(ownerID, level, index) {
            if (index === (level ? 1 << level : 0) || 0 === this.array.length) return this;
            var sizeIndex = index - 1 >>> level & MASK;
            if (sizeIndex >= this.array.length) return this;
            var newChild;
            if (level > 0) {
                var oldChild = this.array[sizeIndex];
                if (newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index), 
                newChild === oldChild && sizeIndex === this.array.length - 1) return this;
            }
            var editable = editableVNode(this, ownerID);
            return editable.array.splice(sizeIndex + 1), newChild && (editable.array[sizeIndex] = newChild), 
            editable;
        };
        var EMPTY_LIST, DONE = {};
        createClass(OrderedMap, Map), OrderedMap.of = function() {
            return this(arguments);
        }, OrderedMap.prototype.toString = function() {
            return this.__toString("OrderedMap {", "}");
        }, // @pragma Access
        OrderedMap.prototype.get = function(k, notSetValue) {
            var index = this._map.get(k);
            return void 0 !== index ? this._list.get(index)[1] : notSetValue;
        }, // @pragma Modification
        OrderedMap.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), 
            this._list.clear(), this) : emptyOrderedMap();
        }, OrderedMap.prototype.set = function(k, v) {
            return updateOrderedMap(this, k, v);
        }, OrderedMap.prototype.remove = function(k) {
            return updateOrderedMap(this, k, NOT_SET);
        }, OrderedMap.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered();
        }, OrderedMap.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._list.__iterate(function(entry) {
                return entry && fn(entry[1], entry[0], this$0);
            }, reverse);
        }, OrderedMap.prototype.__iterator = function(type, reverse) {
            return this._list.fromEntrySeq().__iterator(type, reverse);
        }, OrderedMap.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map.__ensureOwner(ownerID), newList = this._list.__ensureOwner(ownerID);
            return ownerID ? makeOrderedMap(newMap, newList, ownerID, this.__hash) : (this.__ownerID = ownerID, 
            this._map = newMap, this._list = newList, this);
        }, OrderedMap.isOrderedMap = isOrderedMap, OrderedMap.prototype[IS_ORDERED_SENTINEL] = !0, 
        OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
        var EMPTY_ORDERED_MAP;
        createClass(ToKeyedSequence, KeyedSeq), ToKeyedSequence.prototype.get = function(key, notSetValue) {
            return this._iter.get(key, notSetValue);
        }, ToKeyedSequence.prototype.has = function(key) {
            return this._iter.has(key);
        }, ToKeyedSequence.prototype.valueSeq = function() {
            return this._iter.valueSeq();
        }, ToKeyedSequence.prototype.reverse = function() {
            var this$0 = this, reversedSequence = reverseFactory(this, !0);
            return this._useKeys || (reversedSequence.valueSeq = function() {
                return this$0._iter.toSeq().reverse();
            }), reversedSequence;
        }, ToKeyedSequence.prototype.map = function(mapper, context) {
            var this$0 = this, mappedSequence = mapFactory(this, mapper, context);
            return this._useKeys || (mappedSequence.valueSeq = function() {
                return this$0._iter.toSeq().map(mapper, context);
            }), mappedSequence;
        }, ToKeyedSequence.prototype.__iterate = function(fn, reverse) {
            var ii, this$0 = this;
            return this._iter.__iterate(this._useKeys ? function(v, k) {
                return fn(v, k, this$0);
            } : (ii = reverse ? resolveSize(this) : 0, function(v) {
                return fn(v, reverse ? --ii : ii++, this$0);
            }), reverse);
        }, ToKeyedSequence.prototype.__iterator = function(type, reverse) {
            if (this._useKeys) return this._iter.__iterator(type, reverse);
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse), ii = reverse ? resolveSize(this) : 0;
            return new Iterator(function() {
                var step = iterator.next();
                return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
            });
        }, ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = !0, createClass(ToIndexedSequence, IndexedSeq), 
        ToIndexedSequence.prototype.includes = function(value) {
            return this._iter.includes(value);
        }, ToIndexedSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this, iterations = 0;
            return this._iter.__iterate(function(v) {
                return fn(v, iterations++, this$0);
            }, reverse);
        }, ToIndexedSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse), iterations = 0;
            return new Iterator(function() {
                var step = iterator.next();
                return step.done ? step : iteratorValue(type, iterations++, step.value, step);
            });
        }, createClass(ToSetSequence, SetSeq), ToSetSequence.prototype.has = function(key) {
            return this._iter.includes(key);
        }, ToSetSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._iter.__iterate(function(v) {
                return fn(v, v, this$0);
            }, reverse);
        }, ToSetSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
            return new Iterator(function() {
                var step = iterator.next();
                return step.done ? step : iteratorValue(type, step.value, step.value, step);
            });
        }, createClass(FromEntriesSequence, KeyedSeq), FromEntriesSequence.prototype.entrySeq = function() {
            return this._iter.toSeq();
        }, FromEntriesSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._iter.__iterate(function(entry) {
                // Check if entry exists first so array access doesn't throw for holes
                // in the parent iteration.
                if (entry) {
                    validateEntry(entry);
                    var indexedIterable = isIterable(entry);
                    return fn(indexedIterable ? entry.get(1) : entry[1], indexedIterable ? entry.get(0) : entry[0], this$0);
                }
            }, reverse);
        }, FromEntriesSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
            return new Iterator(function() {
                for (;;) {
                    var step = iterator.next();
                    if (step.done) return step;
                    var entry = step.value;
                    // Check if entry exists first so array access doesn't throw for holes
                    // in the parent iteration.
                    if (entry) {
                        validateEntry(entry);
                        var indexedIterable = isIterable(entry);
                        return iteratorValue(type, indexedIterable ? entry.get(0) : entry[0], indexedIterable ? entry.get(1) : entry[1], step);
                    }
                }
            });
        }, ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough, 
        createClass(Record, KeyedCollection), Record.prototype.toString = function() {
            return this.__toString(recordName(this) + " {", "}");
        }, // @pragma Access
        Record.prototype.has = function(k) {
            return this._defaultValues.hasOwnProperty(k);
        }, Record.prototype.get = function(k, notSetValue) {
            if (!this.has(k)) return notSetValue;
            var defaultVal = this._defaultValues[k];
            return this._map ? this._map.get(k, defaultVal) : defaultVal;
        }, // @pragma Modification
        Record.prototype.clear = function() {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var RecordType = this.constructor;
            return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
        }, Record.prototype.set = function(k, v) {
            if (!this.has(k)) throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
            var newMap = this._map && this._map.set(k, v);
            return this.__ownerID || newMap === this._map ? this : makeRecord(this, newMap);
        }, Record.prototype.remove = function(k) {
            if (!this.has(k)) return this;
            var newMap = this._map && this._map.remove(k);
            return this.__ownerID || newMap === this._map ? this : makeRecord(this, newMap);
        }, Record.prototype.wasAltered = function() {
            return this._map.wasAltered();
        }, Record.prototype.__iterator = function(type, reverse) {
            var this$0 = this;
            return KeyedIterable(this._defaultValues).map(function(_, k) {
                return this$0.get(k);
            }).__iterator(type, reverse);
        }, Record.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return KeyedIterable(this._defaultValues).map(function(_, k) {
                return this$0.get(k);
            }).__iterate(fn, reverse);
        }, Record.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map && this._map.__ensureOwner(ownerID);
            return ownerID ? makeRecord(this, newMap, ownerID) : (this.__ownerID = ownerID, 
            this._map = newMap, this);
        };
        var RecordPrototype = Record.prototype;
        RecordPrototype[DELETE] = RecordPrototype.remove, RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn, 
        RecordPrototype.merge = MapPrototype.merge, RecordPrototype.mergeWith = MapPrototype.mergeWith, 
        RecordPrototype.mergeIn = MapPrototype.mergeIn, RecordPrototype.mergeDeep = MapPrototype.mergeDeep, 
        RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith, RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn, 
        RecordPrototype.setIn = MapPrototype.setIn, RecordPrototype.update = MapPrototype.update, 
        RecordPrototype.updateIn = MapPrototype.updateIn, RecordPrototype.withMutations = MapPrototype.withMutations, 
        RecordPrototype.asMutable = MapPrototype.asMutable, RecordPrototype.asImmutable = MapPrototype.asImmutable, 
        createClass(Set, SetCollection), Set.of = function() {
            return this(arguments);
        }, Set.fromKeys = function(value) {
            return this(KeyedIterable(value).keySeq());
        }, Set.prototype.toString = function() {
            return this.__toString("Set {", "}");
        }, // @pragma Access
        Set.prototype.has = function(value) {
            return this._map.has(value);
        }, // @pragma Modification
        Set.prototype.add = function(value) {
            return updateSet(this, this._map.set(value, !0));
        }, Set.prototype.remove = function(value) {
            return updateSet(this, this._map.remove(value));
        }, Set.prototype.clear = function() {
            return updateSet(this, this._map.clear());
        }, // @pragma Composition
        Set.prototype.union = function() {
            var iters = SLICE$0.call(arguments, 0);
            return iters = iters.filter(function(x) {
                return 0 !== x.size;
            }), 0 === iters.length ? this : 0 !== this.size || this.__ownerID || 1 !== iters.length ? this.withMutations(function(set) {
                for (var ii = 0; ii < iters.length; ii++) SetIterable(iters[ii]).forEach(function(value) {
                    return set.add(value);
                });
            }) : this.constructor(iters[0]);
        }, Set.prototype.intersect = function() {
            var iters = SLICE$0.call(arguments, 0);
            if (0 === iters.length) return this;
            iters = iters.map(function(iter) {
                return SetIterable(iter);
            });
            var originalSet = this;
            return this.withMutations(function(set) {
                originalSet.forEach(function(value) {
                    iters.every(function(iter) {
                        return iter.includes(value);
                    }) || set.remove(value);
                });
            });
        }, Set.prototype.subtract = function() {
            var iters = SLICE$0.call(arguments, 0);
            if (0 === iters.length) return this;
            iters = iters.map(function(iter) {
                return SetIterable(iter);
            });
            var originalSet = this;
            return this.withMutations(function(set) {
                originalSet.forEach(function(value) {
                    iters.some(function(iter) {
                        return iter.includes(value);
                    }) && set.remove(value);
                });
            });
        }, Set.prototype.merge = function() {
            return this.union.apply(this, arguments);
        }, Set.prototype.mergeWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return this.union.apply(this, iters);
        }, Set.prototype.sort = function(comparator) {
            // Late binding
            return OrderedSet(sortFactory(this, comparator));
        }, Set.prototype.sortBy = function(mapper, comparator) {
            // Late binding
            return OrderedSet(sortFactory(this, comparator, mapper));
        }, Set.prototype.wasAltered = function() {
            return this._map.wasAltered();
        }, Set.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._map.__iterate(function(_, k) {
                return fn(k, k, this$0);
            }, reverse);
        }, Set.prototype.__iterator = function(type, reverse) {
            return this._map.map(function(_, k) {
                return k;
            }).__iterator(type, reverse);
        }, Set.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map.__ensureOwner(ownerID);
            return ownerID ? this.__make(newMap, ownerID) : (this.__ownerID = ownerID, this._map = newMap, 
            this);
        }, Set.isSet = isSet;
        var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@", SetPrototype = Set.prototype;
        SetPrototype[IS_SET_SENTINEL] = !0, SetPrototype[DELETE] = SetPrototype.remove, 
        SetPrototype.mergeDeep = SetPrototype.merge, SetPrototype.mergeDeepWith = SetPrototype.mergeWith, 
        SetPrototype.withMutations = MapPrototype.withMutations, SetPrototype.asMutable = MapPrototype.asMutable, 
        SetPrototype.asImmutable = MapPrototype.asImmutable, SetPrototype.__empty = emptySet, 
        SetPrototype.__make = makeSet;
        var EMPTY_SET;
        createClass(OrderedSet, Set), OrderedSet.of = function() {
            return this(arguments);
        }, OrderedSet.fromKeys = function(value) {
            return this(KeyedIterable(value).keySeq());
        }, OrderedSet.prototype.toString = function() {
            return this.__toString("OrderedSet {", "}");
        }, OrderedSet.isOrderedSet = isOrderedSet;
        var OrderedSetPrototype = OrderedSet.prototype;
        OrderedSetPrototype[IS_ORDERED_SENTINEL] = !0, OrderedSetPrototype.__empty = emptyOrderedSet, 
        OrderedSetPrototype.__make = makeOrderedSet;
        var EMPTY_ORDERED_SET;
        createClass(Stack, IndexedCollection), Stack.of = function() {
            return this(arguments);
        }, Stack.prototype.toString = function() {
            return this.__toString("Stack [", "]");
        }, // @pragma Access
        Stack.prototype.get = function(index, notSetValue) {
            var head = this._head;
            for (index = wrapIndex(this, index); head && index--; ) head = head.next;
            return head ? head.value : notSetValue;
        }, Stack.prototype.peek = function() {
            return this._head && this._head.value;
        }, // @pragma Modification
        Stack.prototype.push = function() {
            if (0 === arguments.length) return this;
            for (var newSize = this.size + arguments.length, head = this._head, ii = arguments.length - 1; ii >= 0; ii--) head = {
                value: arguments[ii],
                next: head
            };
            return this.__ownerID ? (this.size = newSize, this._head = head, this.__hash = void 0, 
            this.__altered = !0, this) : makeStack(newSize, head);
        }, Stack.prototype.pushAll = function(iter) {
            if (iter = IndexedIterable(iter), 0 === iter.size) return this;
            assertNotInfinite(iter.size);
            var newSize = this.size, head = this._head;
            return iter.reverse().forEach(function(value) {
                newSize++, head = {
                    value: value,
                    next: head
                };
            }), this.__ownerID ? (this.size = newSize, this._head = head, this.__hash = void 0, 
            this.__altered = !0, this) : makeStack(newSize, head);
        }, Stack.prototype.pop = function() {
            return this.slice(1);
        }, Stack.prototype.unshift = function() {
            return this.push.apply(this, arguments);
        }, Stack.prototype.unshiftAll = function(iter) {
            return this.pushAll(iter);
        }, Stack.prototype.shift = function() {
            return this.pop.apply(this, arguments);
        }, Stack.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, 
            this.__hash = void 0, this.__altered = !0, this) : emptyStack();
        }, Stack.prototype.slice = function(begin, end) {
            if (wholeSlice(begin, end, this.size)) return this;
            var resolvedBegin = resolveBegin(begin, this.size), resolvedEnd = resolveEnd(end, this.size);
            if (resolvedEnd !== this.size) // super.slice(begin, end);
            return IndexedCollection.prototype.slice.call(this, begin, end);
            for (var newSize = this.size - resolvedBegin, head = this._head; resolvedBegin--; ) head = head.next;
            return this.__ownerID ? (this.size = newSize, this._head = head, this.__hash = void 0, 
            this.__altered = !0, this) : makeStack(newSize, head);
        }, // @pragma Mutability
        Stack.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID ? this : ownerID ? makeStack(this.size, this._head, ownerID, this.__hash) : (this.__ownerID = ownerID, 
            this.__altered = !1, this);
        }, // @pragma Iteration
        Stack.prototype.__iterate = function(fn, reverse) {
            if (reverse) return this.reverse().__iterate(fn);
            for (var iterations = 0, node = this._head; node && fn(node.value, iterations++, this) !== !1; ) node = node.next;
            return iterations;
        }, Stack.prototype.__iterator = function(type, reverse) {
            if (reverse) return this.reverse().__iterator(type);
            var iterations = 0, node = this._head;
            return new Iterator(function() {
                if (node) {
                    var value = node.value;
                    return node = node.next, iteratorValue(type, iterations++, value);
                }
                return iteratorDone();
            });
        }, Stack.isStack = isStack;
        var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@", StackPrototype = Stack.prototype;
        StackPrototype[IS_STACK_SENTINEL] = !0, StackPrototype.withMutations = MapPrototype.withMutations, 
        StackPrototype.asMutable = MapPrototype.asMutable, StackPrototype.asImmutable = MapPrototype.asImmutable, 
        StackPrototype.wasAltered = MapPrototype.wasAltered;
        var EMPTY_STACK;
        Iterable.Iterator = Iterator, mixin(Iterable, {
            // ### Conversion to other types
            toArray: function() {
                assertNotInfinite(this.size);
                var array = new Array(this.size || 0);
                return this.valueSeq().__iterate(function(v, i) {
                    array[i] = v;
                }), array;
            },
            toIndexedSeq: function() {
                return new ToIndexedSequence(this);
            },
            toJS: function() {
                return this.toSeq().map(function(value) {
                    return value && "function" == typeof value.toJS ? value.toJS() : value;
                }).__toJS();
            },
            toJSON: function() {
                return this.toSeq().map(function(value) {
                    return value && "function" == typeof value.toJSON ? value.toJSON() : value;
                }).__toJS();
            },
            toKeyedSeq: function() {
                return new ToKeyedSequence(this, !0);
            },
            toMap: function() {
                // Use Late Binding here to solve the circular dependency.
                return Map(this.toKeyedSeq());
            },
            toObject: function() {
                assertNotInfinite(this.size);
                var object = {};
                return this.__iterate(function(v, k) {
                    object[k] = v;
                }), object;
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
                return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
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
                return "[Iterable]";
            },
            __toString: function(head, tail) {
                return 0 === this.size ? head + tail : head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
            },
            // ### ES6 Collection methods (ES6 Array and Map)
            concat: function() {
                var values = SLICE$0.call(arguments, 0);
                return reify(this, concatFactory(this, values));
            },
            includes: function(searchValue) {
                return this.some(function(value) {
                    return is(value, searchValue);
                });
            },
            entries: function() {
                return this.__iterator(ITERATE_ENTRIES);
            },
            every: function(predicate, context) {
                assertNotInfinite(this.size);
                var returnValue = !0;
                return this.__iterate(function(v, k, c) {
                    if (!predicate.call(context, v, k, c)) return returnValue = !1, !1;
                }), returnValue;
            },
            filter: function(predicate, context) {
                return reify(this, filterFactory(this, predicate, context, !0));
            },
            find: function(predicate, context, notSetValue) {
                var entry = this.findEntry(predicate, context);
                return entry ? entry[1] : notSetValue;
            },
            findEntry: function(predicate, context) {
                var found;
                return this.__iterate(function(v, k, c) {
                    if (predicate.call(context, v, k, c)) return found = [ k, v ], !1;
                }), found;
            },
            findLastEntry: function(predicate, context) {
                return this.toSeq().reverse().findEntry(predicate, context);
            },
            forEach: function(sideEffect, context) {
                return assertNotInfinite(this.size), this.__iterate(context ? sideEffect.bind(context) : sideEffect);
            },
            join: function(separator) {
                assertNotInfinite(this.size), separator = void 0 !== separator ? "" + separator : ",";
                var joined = "", isFirst = !0;
                return this.__iterate(function(v) {
                    isFirst ? isFirst = !1 : joined += separator, joined += null !== v && void 0 !== v ? v.toString() : "";
                }), joined;
            },
            keys: function() {
                return this.__iterator(ITERATE_KEYS);
            },
            map: function(mapper, context) {
                return reify(this, mapFactory(this, mapper, context));
            },
            reduce: function(reducer, initialReduction, context) {
                assertNotInfinite(this.size);
                var reduction, useFirst;
                return arguments.length < 2 ? useFirst = !0 : reduction = initialReduction, this.__iterate(function(v, k, c) {
                    useFirst ? (useFirst = !1, reduction = v) : reduction = reducer.call(context, reduction, v, k, c);
                }), reduction;
            },
            reduceRight: function(reducer, initialReduction, context) {
                var reversed = this.toKeyedSeq().reverse();
                return reversed.reduce.apply(reversed, arguments);
            },
            reverse: function() {
                return reify(this, reverseFactory(this, !0));
            },
            slice: function(begin, end) {
                return reify(this, sliceFactory(this, begin, end, !0));
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
                return void 0 !== this.size ? 0 === this.size : !this.some(function() {
                    return !0;
                });
            },
            count: function(predicate, context) {
                return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
            },
            countBy: function(grouper, context) {
                return countByFactory(this, grouper, context);
            },
            equals: function(other) {
                return deepEqual(this, other);
            },
            entrySeq: function() {
                var iterable = this;
                if (iterable._cache) // We cache as an entries array, so we can just return the cache!
                return new ArraySeq(iterable._cache);
                var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
                return entriesSequence.fromEntrySeq = function() {
                    return iterable.toSeq();
                }, entriesSequence;
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
                return reify(this, flattenFactory(this, depth, !0));
            },
            fromEntrySeq: function() {
                return new FromEntriesSequence(this);
            },
            get: function(searchKey, notSetValue) {
                return this.find(function(_, key) {
                    return is(key, searchKey);
                }, void 0, notSetValue);
            },
            getIn: function(searchKeyPath, notSetValue) {
                for (var step, nested = this, iter = forceIterator(searchKeyPath); !(step = iter.next()).done; ) {
                    var key = step.value;
                    if (nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET, nested === NOT_SET) return notSetValue;
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
                return iter = "function" == typeof iter.includes ? iter : Iterable(iter), this.every(function(value) {
                    return iter.includes(value);
                });
            },
            isSuperset: function(iter) {
                return iter = "function" == typeof iter.isSubset ? iter : Iterable(iter), iter.isSubset(this);
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
                return reify(this, skipWhileFactory(this, predicate, context, !0));
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
        });
        // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
        // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
        // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
        // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
        var IterablePrototype = Iterable.prototype;
        IterablePrototype[IS_ITERABLE_SENTINEL] = !0, IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values, 
        IterablePrototype.__toJS = IterablePrototype.toArray, IterablePrototype.__toStringMapper = quoteString, 
        IterablePrototype.inspect = IterablePrototype.toSource = function() {
            return this.toString();
        }, IterablePrototype.chain = IterablePrototype.flatMap, IterablePrototype.contains = IterablePrototype.includes, 
        // Temporary warning about using length
        function() {
            try {
                Object.defineProperty(IterablePrototype, "length", {
                    get: function() {
                        if (!Iterable.noLengthWarning) {
                            var stack;
                            try {
                                throw new Error();
                            } catch (error) {
                                stack = error.stack;
                            }
                            if (stack.indexOf("_wrapObject") === -1) return console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + stack), 
                            this.size;
                        }
                    }
                });
            } catch (e) {}
        }(), mixin(KeyedIterable, {
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
                return this.findKey(function(value) {
                    return is(value, searchValue);
                });
            },
            lastKeyOf: function(searchValue) {
                return this.findLastKey(function(value) {
                    return is(value, searchValue);
                });
            },
            mapEntries: function(mapper, context) {
                var this$0 = this, iterations = 0;
                return reify(this, this.toSeq().map(function(v, k) {
                    return mapper.call(context, [ k, v ], iterations++, this$0);
                }).fromEntrySeq());
            },
            mapKeys: function(mapper, context) {
                var this$0 = this;
                return reify(this, this.toSeq().flip().map(function(k, v) {
                    return mapper.call(context, k, v, this$0);
                }).flip());
            }
        });
        var KeyedIterablePrototype = KeyedIterable.prototype;
        KeyedIterablePrototype[IS_KEYED_SENTINEL] = !0, KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries, 
        KeyedIterablePrototype.__toJS = IterablePrototype.toObject, KeyedIterablePrototype.__toStringMapper = function(v, k) {
            return JSON.stringify(k) + ": " + quoteString(v);
        }, mixin(IndexedIterable, {
            // ### Conversion to other types
            toKeyedSeq: function() {
                return new ToKeyedSequence(this, !1);
            },
            // ### ES6 Collection methods (ES6 Array and Map)
            filter: function(predicate, context) {
                return reify(this, filterFactory(this, predicate, context, !1));
            },
            findIndex: function(predicate, context) {
                var entry = this.findEntry(predicate, context);
                return entry ? entry[0] : -1;
            },
            indexOf: function(searchValue) {
                var key = this.toKeyedSeq().keyOf(searchValue);
                return void 0 === key ? -1 : key;
            },
            lastIndexOf: function(searchValue) {
                var key = this.toKeyedSeq().reverse().keyOf(searchValue);
                return void 0 === key ? -1 : key;
            },
            reverse: function() {
                return reify(this, reverseFactory(this, !1));
            },
            slice: function(begin, end) {
                return reify(this, sliceFactory(this, begin, end, !1));
            },
            splice: function(index, removeNum) {
                var numArgs = arguments.length;
                if (removeNum = Math.max(0 | removeNum, 0), 0 === numArgs || 2 === numArgs && !removeNum) return this;
                // If index is negative, it should resolve relative to the size of the
                // collection. However size may be expensive to compute if not cached, so
                // only call count() if the number is in fact negative.
                index = resolveBegin(index, index < 0 ? this.count() : this.size);
                var spliced = this.slice(0, index);
                return reify(this, 1 === numArgs ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
            },
            // ### More collection methods
            findLastIndex: function(predicate, context) {
                var key = this.toKeyedSeq().findLastKey(predicate, context);
                return void 0 === key ? -1 : key;
            },
            first: function() {
                return this.get(0);
            },
            flatten: function(depth) {
                return reify(this, flattenFactory(this, depth, !1));
            },
            get: function(index, notSetValue) {
                return index = wrapIndex(this, index), index < 0 || this.size === 1 / 0 || void 0 !== this.size && index > this.size ? notSetValue : this.find(function(_, key) {
                    return key === index;
                }, void 0, notSetValue);
            },
            has: function(index) {
                return index = wrapIndex(this, index), index >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || index < this.size : this.indexOf(index) !== -1);
            },
            interpose: function(separator) {
                return reify(this, interposeFactory(this, separator));
            },
            interleave: function() {
                var iterables = [ this ].concat(arrCopy(arguments)), zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables), interleaved = zipped.flatten(!0);
                return zipped.size && (interleaved.size = zipped.size * iterables.length), reify(this, interleaved);
            },
            last: function() {
                return this.get(-1);
            },
            skipWhile: function(predicate, context) {
                return reify(this, skipWhileFactory(this, predicate, context, !1));
            },
            zip: function() {
                var iterables = [ this ].concat(arrCopy(arguments));
                return reify(this, zipWithFactory(this, defaultZipper, iterables));
            },
            zipWith: function(zipper) {
                var iterables = arrCopy(arguments);
                return iterables[0] = this, reify(this, zipWithFactory(this, zipper, iterables));
            }
        }), IndexedIterable.prototype[IS_INDEXED_SENTINEL] = !0, IndexedIterable.prototype[IS_ORDERED_SENTINEL] = !0, 
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
        }), SetIterable.prototype.has = IterablePrototype.includes, // Mixin subclasses
        mixin(KeyedSeq, KeyedIterable.prototype), mixin(IndexedSeq, IndexedIterable.prototype), 
        mixin(SetSeq, SetIterable.prototype), mixin(KeyedCollection, KeyedIterable.prototype), 
        mixin(IndexedCollection, IndexedIterable.prototype), mixin(SetCollection, SetIterable.prototype);
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
    });
}, /* 6 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _require = __webpack_require__(5), Map = _require.Map, OrderedSet = _require.OrderedSet, Record = _require.Record, EMPTY_SET = OrderedSet(), defaultRecord = {
        style: EMPTY_SET,
        entity: null
    }, CharacterMetadataRecord = Record(defaultRecord), CharacterMetadata = function(_CharacterMetadataRec) {
        function CharacterMetadata() {
            return _classCallCheck(this, CharacterMetadata), _possibleConstructorReturn(this, _CharacterMetadataRec.apply(this, arguments));
        }
        /**
	   * Use this function instead of the `CharacterMetadata` constructor.
	   * Since most content generally uses only a very small number of
	   * style/entity permutations, we can reuse these objects as often as
	   * possible.
	   */
        return _inherits(CharacterMetadata, _CharacterMetadataRec), CharacterMetadata.prototype.getStyle = function() {
            return this.get("style");
        }, CharacterMetadata.prototype.getEntity = function() {
            return this.get("entity");
        }, CharacterMetadata.prototype.hasStyle = function(style) {
            return this.getStyle().has(style);
        }, CharacterMetadata.applyStyle = function(record, style) {
            var withStyle = record.set("style", record.getStyle().add(style));
            return CharacterMetadata.create(withStyle);
        }, CharacterMetadata.removeStyle = function(record, style) {
            var withoutStyle = record.set("style", record.getStyle().remove(style));
            return CharacterMetadata.create(withoutStyle);
        }, CharacterMetadata.applyEntity = function(record, entityKey) {
            var withEntity = record.getEntity() === entityKey ? record : record.set("entity", entityKey);
            return CharacterMetadata.create(withEntity);
        }, CharacterMetadata.create = function(config) {
            if (!config) return EMPTY;
            // Fill in unspecified properties, if necessary.
            var configMap = Map({
                style: EMPTY_SET,
                entity: null
            }).merge(config), existing = pool.get(configMap);
            if (existing) return existing;
            var newCharacter = new CharacterMetadata(configMap);
            return pool = pool.set(configMap, newCharacter), newCharacter;
        }, CharacterMetadata;
    }(CharacterMetadataRecord), EMPTY = new CharacterMetadata(), pool = Map([ [ Map(defaultRecord), EMPTY ] ]);
    CharacterMetadata.EMPTY = EMPTY, module.exports = CharacterMetadata;
}, /* 7 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function haveEqualStyle(charA, charB) {
        return charA.getStyle() === charB.getStyle();
    }
    function haveEqualEntity(charA, charB) {
        return charA.getEntity() === charB.getEntity();
    }
    var Immutable = __webpack_require__(5), findRangesImmutable = __webpack_require__(8), List = Immutable.List, Map = Immutable.Map, OrderedSet = Immutable.OrderedSet, Record = Immutable.Record, EMPTY_SET = OrderedSet(), defaultRecord = {
        key: "",
        type: "unstyled",
        text: "",
        characterList: List(),
        depth: 0,
        data: Map()
    }, ContentBlockRecord = Record(defaultRecord), ContentBlock = function(_ContentBlockRecord) {
        function ContentBlock() {
            return _classCallCheck(this, ContentBlock), _possibleConstructorReturn(this, _ContentBlockRecord.apply(this, arguments));
        }
        /**
	   * Execute a callback for every contiguous range of styles within the block.
	   */
        /**
	   * Execute a callback for every contiguous range of entities within the block.
	   */
        return _inherits(ContentBlock, _ContentBlockRecord), ContentBlock.prototype.getKey = function() {
            return this.get("key");
        }, ContentBlock.prototype.getType = function() {
            return this.get("type");
        }, ContentBlock.prototype.getText = function() {
            return this.get("text");
        }, ContentBlock.prototype.getCharacterList = function() {
            return this.get("characterList");
        }, ContentBlock.prototype.getLength = function() {
            return this.getText().length;
        }, ContentBlock.prototype.getDepth = function() {
            return this.get("depth");
        }, ContentBlock.prototype.getData = function() {
            return this.get("data");
        }, ContentBlock.prototype.getInlineStyleAt = function(offset) {
            var character = this.getCharacterList().get(offset);
            return character ? character.getStyle() : EMPTY_SET;
        }, ContentBlock.prototype.getEntityAt = function(offset) {
            var character = this.getCharacterList().get(offset);
            return character ? character.getEntity() : null;
        }, ContentBlock.prototype.findStyleRanges = function(filterFn, callback) {
            findRangesImmutable(this.getCharacterList(), haveEqualStyle, filterFn, callback);
        }, ContentBlock.prototype.findEntityRanges = function(filterFn, callback) {
            findRangesImmutable(this.getCharacterList(), haveEqualEntity, filterFn, callback);
        }, ContentBlock;
    }(ContentBlockRecord);
    module.exports = ContentBlock;
}, /* 8 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Search through an array to find contiguous stretches of elements that
	 * match a specified filter function.
	 *
	 * When ranges are found, execute a specified `found` function to supply
	 * the values to the caller.
	 */
    function findRangesImmutable(haystack, areEqualFn, filterFn, foundFn) {
        if (haystack.size) {
            var cursor = 0;
            haystack.reduce(function(value, nextValue, nextIndex) {
                /* $FlowFixMe(>=0.28.0): `value` could be undefined! */
                /* $FlowFixMe(>=0.28.0): `value` could be undefined! */
                return areEqualFn(value, nextValue) || (filterFn(value) && foundFn(cursor, nextIndex), 
                cursor = nextIndex), nextValue;
            }), filterFn(haystack.last()) && foundFn(cursor, haystack.count());
        }
    }
    module.exports = findRangesImmutable;
}, /* 9 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    var CharacterMetadata = __webpack_require__(6), ContentStateInlineStyle = __webpack_require__(10), Immutable = __webpack_require__(5), applyEntityToContentState = __webpack_require__(11), getCharacterRemovalRange = __webpack_require__(13), getContentStateFragment = __webpack_require__(20), insertFragmentIntoContentState = __webpack_require__(23), insertTextIntoContentState = __webpack_require__(25), invariant = __webpack_require__(17), modifyBlockForContentState = __webpack_require__(26), removeEntitiesAtEdges = __webpack_require__(22), removeRangeFromContentState = __webpack_require__(27), splitBlockInContentState = __webpack_require__(28), OrderedSet = Immutable.OrderedSet, DraftModifier = {
        replaceText: function(contentState, rangeToReplace, text, inlineStyle, entityKey) {
            var withoutEntities = removeEntitiesAtEdges(contentState, rangeToReplace), withoutText = removeRangeFromContentState(withoutEntities, rangeToReplace), character = CharacterMetadata.create({
                style: inlineStyle || OrderedSet(),
                entity: entityKey || null
            });
            return insertTextIntoContentState(withoutText, withoutText.getSelectionAfter(), text, character);
        },
        insertText: function(contentState, targetRange, text, inlineStyle, entityKey) {
            return targetRange.isCollapsed() ? void 0 : invariant(!1), DraftModifier.replaceText(contentState, targetRange, text, inlineStyle, entityKey);
        },
        moveText: function(contentState, removalRange, targetRange) {
            var movedFragment = getContentStateFragment(contentState, removalRange), afterRemoval = DraftModifier.removeRange(contentState, removalRange, "backward");
            return DraftModifier.replaceWithFragment(afterRemoval, targetRange, movedFragment);
        },
        replaceWithFragment: function(contentState, targetRange, fragment) {
            var withoutEntities = removeEntitiesAtEdges(contentState, targetRange), withoutText = removeRangeFromContentState(withoutEntities, targetRange);
            return insertFragmentIntoContentState(withoutText, withoutText.getSelectionAfter(), fragment);
        },
        removeRange: function(contentState, rangeToRemove, removalDirection) {
            // Check whether the selection state overlaps with a single entity.
            // If so, try to remove the appropriate substring of the entity text.
            if (rangeToRemove.getAnchorKey() === rangeToRemove.getFocusKey()) {
                var key = rangeToRemove.getAnchorKey(), startOffset = rangeToRemove.getStartOffset(), endOffset = rangeToRemove.getEndOffset(), block = contentState.getBlockForKey(key), startEntity = block.getEntityAt(startOffset), endEntity = block.getEntityAt(endOffset - 1);
                if (startEntity && startEntity === endEntity) {
                    var adjustedRemovalRange = getCharacterRemovalRange(block, rangeToRemove, removalDirection);
                    return removeRangeFromContentState(contentState, adjustedRemovalRange);
                }
            }
            var withoutEntities = removeEntitiesAtEdges(contentState, rangeToRemove);
            return removeRangeFromContentState(withoutEntities, rangeToRemove);
        },
        splitBlock: function(contentState, selectionState) {
            var withoutEntities = removeEntitiesAtEdges(contentState, selectionState), withoutText = removeRangeFromContentState(withoutEntities, selectionState);
            return splitBlockInContentState(withoutText, withoutText.getSelectionAfter());
        },
        applyInlineStyle: function(contentState, selectionState, inlineStyle) {
            return ContentStateInlineStyle.add(contentState, selectionState, inlineStyle);
        },
        removeInlineStyle: function(contentState, selectionState, inlineStyle) {
            return ContentStateInlineStyle.remove(contentState, selectionState, inlineStyle);
        },
        setBlockType: function(contentState, selectionState, blockType) {
            return modifyBlockForContentState(contentState, selectionState, function(block) {
                return block.merge({
                    type: blockType,
                    depth: 0
                });
            });
        },
        setBlockData: function(contentState, selectionState, blockData) {
            return modifyBlockForContentState(contentState, selectionState, function(block) {
                return block.merge({
                    data: blockData
                });
            });
        },
        mergeBlockData: function(contentState, selectionState, blockData) {
            return modifyBlockForContentState(contentState, selectionState, function(block) {
                return block.merge({
                    data: block.getData().merge(blockData)
                });
            });
        },
        applyEntity: function(contentState, selectionState, entityKey) {
            var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
            return applyEntityToContentState(withoutEntities, selectionState, entityKey);
        }
    };
    module.exports = DraftModifier;
}, /* 10 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function modifyInlineStyle(contentState, selectionState, inlineStyle, addOrRemove) {
        var blockMap = contentState.getBlockMap(), startKey = selectionState.getStartKey(), startOffset = selectionState.getStartOffset(), endKey = selectionState.getEndKey(), endOffset = selectionState.getEndOffset(), newBlocks = blockMap.skipUntil(function(_, k) {
            return k === startKey;
        }).takeUntil(function(_, k) {
            return k === endKey;
        }).concat(Map([ [ endKey, blockMap.get(endKey) ] ])).map(function(block, blockKey) {
            var sliceStart, sliceEnd;
            startKey === endKey ? (sliceStart = startOffset, sliceEnd = endOffset) : (sliceStart = blockKey === startKey ? startOffset : 0, 
            sliceEnd = blockKey === endKey ? endOffset : block.getLength());
            for (var current, chars = block.getCharacterList(); sliceStart < sliceEnd; ) current = chars.get(sliceStart), 
            chars = chars.set(sliceStart, addOrRemove ? CharacterMetadata.applyStyle(current, inlineStyle) : CharacterMetadata.removeStyle(current, inlineStyle)), 
            sliceStart++;
            return block.set("characterList", chars);
        });
        return contentState.merge({
            blockMap: blockMap.merge(newBlocks),
            selectionBefore: selectionState,
            selectionAfter: selectionState
        });
    }
    var CharacterMetadata = __webpack_require__(6), _require = __webpack_require__(5), Map = _require.Map, ContentStateInlineStyle = {
        add: function(contentState, selectionState, inlineStyle) {
            return modifyInlineStyle(contentState, selectionState, inlineStyle, !0);
        },
        remove: function(contentState, selectionState, inlineStyle) {
            return modifyInlineStyle(contentState, selectionState, inlineStyle, !1);
        }
    };
    module.exports = ContentStateInlineStyle;
}, /* 11 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function applyEntityToContentState(contentState, selectionState, entityKey) {
        var blockMap = contentState.getBlockMap(), startKey = selectionState.getStartKey(), startOffset = selectionState.getStartOffset(), endKey = selectionState.getEndKey(), endOffset = selectionState.getEndOffset(), newBlocks = blockMap.skipUntil(function(_, k) {
            return k === startKey;
        }).takeUntil(function(_, k) {
            return k === endKey;
        }).toOrderedMap().merge(Immutable.OrderedMap([ [ endKey, blockMap.get(endKey) ] ])).map(function(block, blockKey) {
            var sliceStart = blockKey === startKey ? startOffset : 0, sliceEnd = blockKey === endKey ? endOffset : block.getLength();
            return applyEntityToContentBlock(block, sliceStart, sliceEnd, entityKey);
        });
        return contentState.merge({
            blockMap: blockMap.merge(newBlocks),
            selectionBefore: selectionState,
            selectionAfter: selectionState
        });
    }
    var Immutable = __webpack_require__(5), applyEntityToContentBlock = __webpack_require__(12);
    module.exports = applyEntityToContentState;
}, /* 12 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function applyEntityToContentBlock(contentBlock, start, end, entityKey) {
        for (var characterList = contentBlock.getCharacterList(); start < end; ) characterList = characterList.set(start, CharacterMetadata.applyEntity(characterList.get(start), entityKey)), 
        start++;
        return contentBlock.set("characterList", characterList);
    }
    var CharacterMetadata = __webpack_require__(6);
    module.exports = applyEntityToContentBlock;
}, /* 13 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
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
        var start = selectionState.getStartOffset(), end = selectionState.getEndOffset(), entityKey = block.getEntityAt(start);
        if (!entityKey) return selectionState;
        var entity = DraftEntity.get(entityKey), mutability = entity.getMutability();
        // `MUTABLE` entities can just have the specified range of text removed
        // directly. No adjustments are needed.
        if ("MUTABLE" === mutability) return selectionState;
        // Find the entity range that overlaps with our removal range.
        var entityRanges = getRangesForDraftEntity(block, entityKey).filter(function(range) {
            return start < range.end && end > range.start;
        });
        1 != entityRanges.length ? invariant(!1) : void 0;
        var entityRange = entityRanges[0];
        // For `IMMUTABLE` entity types, we will remove the entire entity range.
        if ("IMMUTABLE" === mutability) return selectionState.merge({
            anchorOffset: entityRange.start,
            focusOffset: entityRange.end,
            isBackward: !1
        });
        // For `SEGMENTED` entity types, determine the appropriate segment to
        // remove.
        var removalRange = DraftEntitySegments.getRemovalRange(start, end, block.getText().slice(entityRange.start, entityRange.end), entityRange.start, direction);
        return selectionState.merge({
            anchorOffset: removalRange.start,
            focusOffset: removalRange.end,
            isBackward: !1
        });
    }
    var DraftEntity = __webpack_require__(14), DraftEntitySegments = __webpack_require__(18), getRangesForDraftEntity = __webpack_require__(19), invariant = __webpack_require__(17);
    module.exports = getCharacterRemovalRange;
}, /* 14 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var _assign = __webpack_require__(15), _extends = _assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, DraftEntityInstance = __webpack_require__(16), Immutable = __webpack_require__(5), invariant = __webpack_require__(17), Map = Immutable.Map, instances = Map(), instanceKey = 0, DraftEntity = {
        /**
	   * Create a DraftEntityInstance and store it for later retrieval.
	   *
	   * A random key string will be generated and returned. This key may
	   * be used to track the entity's usage in a ContentBlock, and for
	   * retrieving data about the entity at render time.
	   */
        create: function(type, mutability, data) {
            return DraftEntity.add(new DraftEntityInstance({
                type: type,
                mutability: mutability,
                data: data || {}
            }));
        },
        /**
	   * Add an existing DraftEntityInstance to the DraftEntity map. This is
	   * useful when restoring instances from the server.
	   */
        add: function(instance) {
            var key = "" + ++instanceKey;
            return instances = instances.set(key, instance), key;
        },
        /**
	   * Retrieve the entity corresponding to the supplied key string.
	   */
        get: function(key) {
            var instance = instances.get(key);
            return instance ? void 0 : invariant(!1), instance;
        },
        /**
	   * Entity instances are immutable. If you need to update the data for an
	   * instance, this method will merge your data updates and return a new
	   * instance.
	   */
        mergeData: function(key, toMerge) {
            var instance = DraftEntity.get(key), newData = _extends({}, instance.getData(), toMerge), newInstance = instance.set("data", newData);
            return instances = instances.set(key, newInstance), newInstance;
        },
        /**
	   * Completely replace the data for a given instance.
	   */
        replaceData: function(key, newData) {
            var instance = DraftEntity.get(key), newInstance = instance.set("data", newData);
            return instances = instances.set(key, newInstance), newInstance;
        }
    };
    module.exports = DraftEntity;
}, /* 15 */
/***/
function(module, exports) {
    "use strict";
    function toObject(val) {
        if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(val);
    }
    function shouldUseNative() {
        try {
            if (!Object.assign) return !1;
            // Detect buggy property enumeration order in older V8 versions.
            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
            var test1 = new String("abc");
            if (// eslint-disable-line
            test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
            for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                return test2[n];
            });
            if ("0123456789" !== order2.join("")) return !1;
            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test3 = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                test3[letter] = letter;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
        } catch (e) {
            // We don't expect any of the above to throw, but better to be safe.
            return !1;
        }
    }
    /* eslint-disable no-unused-vars */
    var hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
            if (Object.getOwnPropertySymbols) {
                symbols = Object.getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
            }
        }
        return to;
    };
}, /* 16 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var Immutable = __webpack_require__(5), Record = Immutable.Record, DraftEntityInstanceRecord = Record({
        type: "TOKEN",
        mutability: "IMMUTABLE",
        data: Object
    }), DraftEntityInstance = function(_DraftEntityInstanceR) {
        function DraftEntityInstance() {
            return _classCallCheck(this, DraftEntityInstance), _possibleConstructorReturn(this, _DraftEntityInstanceR.apply(this, arguments));
        }
        return _inherits(DraftEntityInstance, _DraftEntityInstanceR), DraftEntityInstance.prototype.getType = function() {
            return this.get("type");
        }, DraftEntityInstance.prototype.getMutability = function() {
            return this.get("mutability");
        }, DraftEntityInstance.prototype.getData = function() {
            return this.get("data");
        }, DraftEntityInstance;
    }(DraftEntityInstanceRecord);
    module.exports = DraftEntityInstance;
}, /* 17 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
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
        if (!condition) {
            var error;
            if (void 0 === format) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var args = [ a, b, c, d, e, f ], argIndex = 0;
                error = new Error(format.replace(/%s/g, function() {
                    return args[argIndex++];
                })), error.name = "Invariant Violation";
            }
            // we don't care about invariant's own frame
            throw error.framesToPop = 1, error;
        }
    }
    module.exports = invariant;
}, /* 18 */
/***/
function(module, exports) {
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
    "use strict";
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
        getRemovalRange: function(selectionStart, selectionEnd, text, entityStart, direction) {
            var segments = text.split(" ");
            segments = segments.map(function(/*string*/ segment, /*number*/ ii) {
                if ("forward" === direction) {
                    if (ii > 0) return " " + segment;
                } else if (ii < segments.length - 1) return segment + " ";
                return segment;
            });
            for (var segmentEnd, segment, segmentStart = entityStart, removalStart = null, removalEnd = null, jj = 0; jj < segments.length; jj++) {
                // Our selection overlaps this segment.
                if (segment = segments[jj], segmentEnd = segmentStart + segment.length, selectionStart < segmentEnd && segmentStart < selectionEnd) null !== removalStart ? removalEnd = segmentEnd : (removalStart = segmentStart, 
                removalEnd = segmentEnd); else if (null !== removalStart) break;
                segmentStart = segmentEnd;
            }
            var entityEnd = entityStart + text.length, atStart = removalStart === entityStart, atEnd = removalEnd === entityEnd;
            return (!atStart && atEnd || atStart && !atEnd) && ("forward" === direction ? removalEnd !== entityEnd && removalEnd++ : removalStart !== entityStart && removalStart--), 
            {
                start: removalStart,
                end: removalEnd
            };
        }
    };
    module.exports = DraftEntitySegments;
}, /* 19 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
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
        return block.findEntityRanges(function(c) {
            return c.getEntity() === key;
        }, function(start, end) {
            ranges.push({
                start: start,
                end: end
            });
        }), ranges.length ? void 0 : invariant(!1), ranges;
    }
    var invariant = __webpack_require__(17);
    module.exports = getRangesForDraftEntity;
}, /* 20 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function getContentStateFragment(contentState, selectionState) {
        var startKey = selectionState.getStartKey(), startOffset = selectionState.getStartOffset(), endKey = selectionState.getEndKey(), endOffset = selectionState.getEndOffset(), contentWithoutEdgeEntities = removeEntitiesAtEdges(contentState, selectionState), blockMap = contentWithoutEdgeEntities.getBlockMap(), blockKeys = blockMap.keySeq(), startIndex = blockKeys.indexOf(startKey), endIndex = blockKeys.indexOf(endKey) + 1, slice = blockMap.slice(startIndex, endIndex).map(function(block, blockKey) {
            var newKey = generateRandomKey(), text = block.getText(), chars = block.getCharacterList();
            return startKey === endKey ? block.merge({
                key: newKey,
                text: text.slice(startOffset, endOffset),
                characterList: chars.slice(startOffset, endOffset)
            }) : blockKey === startKey ? block.merge({
                key: newKey,
                text: text.slice(startOffset),
                characterList: chars.slice(startOffset)
            }) : blockKey === endKey ? block.merge({
                key: newKey,
                text: text.slice(0, endOffset),
                characterList: chars.slice(0, endOffset)
            }) : block.set("key", newKey);
        });
        return slice.toOrderedMap();
    }
    var generateRandomKey = __webpack_require__(21), removeEntitiesAtEdges = __webpack_require__(22);
    module.exports = getContentStateFragment;
}, /* 21 */
/***/
function(module, exports) {
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
    "use strict";
    function generateRandomKey() {
        for (var key = void 0; void 0 === key || seenKeys.hasOwnProperty(key) || !isNaN(+key); ) key = Math.floor(Math.random() * MULTIPLIER).toString(32);
        return seenKeys[key] = !0, key;
    }
    var seenKeys = {}, MULTIPLIER = Math.pow(2, 24);
    module.exports = generateRandomKey;
}, /* 22 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    function removeEntitiesAtEdges(contentState, selectionState) {
        var blockMap = contentState.getBlockMap(), updatedBlocks = {}, startKey = selectionState.getStartKey(), startOffset = selectionState.getStartOffset(), startBlock = blockMap.get(startKey), updatedStart = removeForBlock(startBlock, startOffset);
        updatedStart !== startBlock && (updatedBlocks[startKey] = updatedStart);
        var endKey = selectionState.getEndKey(), endOffset = selectionState.getEndOffset(), endBlock = blockMap.get(endKey);
        startKey === endKey && (endBlock = updatedStart);
        var updatedEnd = removeForBlock(endBlock, endOffset);
        return updatedEnd !== endBlock && (updatedBlocks[endKey] = updatedEnd), Object.keys(updatedBlocks).length ? contentState.merge({
            blockMap: blockMap.merge(updatedBlocks),
            selectionAfter: selectionState
        }) : contentState.set("selectionAfter", selectionState);
    }
    function getRemovalRange(characters, key, offset) {
        var removalRange;
        return findRangesImmutable(characters, function(a, b) {
            return a.getEntity() === b.getEntity();
        }, function(element) {
            return element.getEntity() === key;
        }, function(start, end) {
            start <= offset && end >= offset && (removalRange = {
                start: start,
                end: end
            });
        }), "object" != typeof removalRange ? invariant(!1) : void 0, removalRange;
    }
    function removeForBlock(block, offset) {
        var chars = block.getCharacterList(), charBefore = offset > 0 ? chars.get(offset - 1) : void 0, charAfter = offset < chars.count() ? chars.get(offset) : void 0, entityBeforeCursor = charBefore ? charBefore.getEntity() : void 0, entityAfterCursor = charAfter ? charAfter.getEntity() : void 0;
        if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
            var entity = DraftEntity.get(entityAfterCursor);
            if ("MUTABLE" !== entity.getMutability()) {
                for (var current, _getRemovalRange = getRemovalRange(chars, entityAfterCursor, offset), start = _getRemovalRange.start, end = _getRemovalRange.end; start < end; ) current = chars.get(start), 
                chars = chars.set(start, CharacterMetadata.applyEntity(current, null)), start++;
                return block.set("characterList", chars);
            }
        }
        return block;
    }
    var CharacterMetadata = __webpack_require__(6), DraftEntity = __webpack_require__(14), findRangesImmutable = __webpack_require__(8), invariant = __webpack_require__(17);
    module.exports = removeEntitiesAtEdges;
}, /* 23 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    function insertFragmentIntoContentState(contentState, selectionState, fragment) {
        selectionState.isCollapsed() ? void 0 : invariant(!1);
        var finalKey, finalOffset, targetKey = selectionState.getStartKey(), targetOffset = selectionState.getStartOffset(), blockMap = contentState.getBlockMap(), fragmentSize = fragment.size;
        if (1 === fragmentSize) {
            var targetBlock = blockMap.get(targetKey), pastedBlock = fragment.first(), text = targetBlock.getText(), chars = targetBlock.getCharacterList(), newBlock = targetBlock.merge({
                text: text.slice(0, targetOffset) + pastedBlock.getText() + text.slice(targetOffset),
                characterList: insertIntoList(chars, pastedBlock.getCharacterList(), targetOffset),
                data: pastedBlock.getData()
            });
            return blockMap = blockMap.set(targetKey, newBlock), finalKey = targetKey, finalOffset = targetOffset + pastedBlock.getText().length, 
            contentState.merge({
                blockMap: blockMap.set(targetKey, newBlock),
                selectionBefore: selectionState,
                selectionAfter: selectionState.merge({
                    anchorKey: finalKey,
                    anchorOffset: finalOffset,
                    focusKey: finalKey,
                    focusOffset: finalOffset,
                    isBackward: !1
                })
            });
        }
        var newBlockArr = [];
        return contentState.getBlockMap().forEach(function(block, blockKey) {
            if (blockKey !== targetKey) return void newBlockArr.push(block);
            var text = block.getText(), chars = block.getCharacterList(), blockSize = text.length, headText = text.slice(0, targetOffset), headCharacters = chars.slice(0, targetOffset), appendToHead = fragment.first(), modifiedHead = block.merge({
                text: headText + appendToHead.getText(),
                characterList: headCharacters.concat(appendToHead.getCharacterList()),
                type: headText ? block.getType() : appendToHead.getType(),
                data: appendToHead.getData()
            });
            newBlockArr.push(modifiedHead), // Insert fragment blocks after the head and before the tail.
            fragment.slice(1, fragmentSize - 1).forEach(function(fragmentBlock) {
                newBlockArr.push(fragmentBlock.set("key", generateRandomKey()));
            });
            // Modify tail portion of block.
            var tailText = text.slice(targetOffset, blockSize), tailCharacters = chars.slice(targetOffset, blockSize), prependToTail = fragment.last();
            finalKey = generateRandomKey();
            var modifiedTail = prependToTail.merge({
                key: finalKey,
                text: prependToTail.getText() + tailText,
                characterList: prependToTail.getCharacterList().concat(tailCharacters),
                data: prependToTail.getData()
            });
            newBlockArr.push(modifiedTail);
        }), finalOffset = fragment.last().getLength(), contentState.merge({
            blockMap: BlockMapBuilder.createFromArray(newBlockArr),
            selectionBefore: selectionState,
            selectionAfter: selectionState.merge({
                anchorKey: finalKey,
                anchorOffset: finalOffset,
                focusKey: finalKey,
                focusOffset: finalOffset,
                isBackward: !1
            })
        });
    }
    var BlockMapBuilder = __webpack_require__(4), generateRandomKey = __webpack_require__(21), insertIntoList = __webpack_require__(24), invariant = __webpack_require__(17);
    module.exports = insertFragmentIntoContentState;
}, /* 24 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Maintain persistence for target list when appending and prepending.
	 */
    function insertIntoList(targetList, toInsert, offset) {
        if (offset === targetList.count()) toInsert.forEach(function(c) {
            targetList = targetList.push(c);
        }); else if (0 === offset) toInsert.reverse().forEach(function(c) {
            targetList = targetList.unshift(c);
        }); else {
            var head = targetList.slice(0, offset), tail = targetList.slice(offset);
            targetList = head.concat(toInsert, tail).toList();
        }
        return targetList;
    }
    module.exports = insertIntoList;
}, /* 25 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    function insertTextIntoContentState(contentState, selectionState, text, characterMetadata) {
        selectionState.isCollapsed() ? void 0 : invariant(!1);
        var len = text.length;
        if (!len) return contentState;
        var blockMap = contentState.getBlockMap(), key = selectionState.getStartKey(), offset = selectionState.getStartOffset(), block = blockMap.get(key), blockText = block.getText(), newBlock = block.merge({
            text: blockText.slice(0, offset) + text + blockText.slice(offset, block.getLength()),
            characterList: insertIntoList(block.getCharacterList(), Repeat(characterMetadata, len).toList(), offset)
        }), newOffset = offset + len;
        return contentState.merge({
            blockMap: blockMap.set(key, newBlock),
            selectionAfter: selectionState.merge({
                anchorOffset: newOffset,
                focusOffset: newOffset
            })
        });
    }
    var Immutable = __webpack_require__(5), insertIntoList = __webpack_require__(24), invariant = __webpack_require__(17), Repeat = Immutable.Repeat;
    module.exports = insertTextIntoContentState;
}, /* 26 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function modifyBlockForContentState(contentState, selectionState, operation) {
        var startKey = selectionState.getStartKey(), endKey = selectionState.getEndKey(), blockMap = contentState.getBlockMap(), newBlocks = blockMap.toSeq().skipUntil(function(_, k) {
            return k === startKey;
        }).takeUntil(function(_, k) {
            return k === endKey;
        }).concat(Map([ [ endKey, blockMap.get(endKey) ] ])).map(operation);
        return contentState.merge({
            blockMap: blockMap.merge(newBlocks),
            selectionBefore: selectionState,
            selectionAfter: selectionState
        });
    }
    var Immutable = __webpack_require__(5), Map = Immutable.Map;
    module.exports = modifyBlockForContentState;
}, /* 27 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function removeRangeFromContentState(contentState, selectionState) {
        if (selectionState.isCollapsed()) return contentState;
        var characterList, blockMap = contentState.getBlockMap(), startKey = selectionState.getStartKey(), startOffset = selectionState.getStartOffset(), endKey = selectionState.getEndKey(), endOffset = selectionState.getEndOffset(), startBlock = blockMap.get(startKey), endBlock = blockMap.get(endKey);
        characterList = startBlock === endBlock ? removeFromList(startBlock.getCharacterList(), startOffset, endOffset) : startBlock.getCharacterList().slice(0, startOffset).concat(endBlock.getCharacterList().slice(endOffset));
        var modifiedStart = startBlock.merge({
            text: startBlock.getText().slice(0, startOffset) + endBlock.getText().slice(endOffset),
            characterList: characterList
        }), newBlocks = blockMap.toSeq().skipUntil(function(_, k) {
            return k === startKey;
        }).takeUntil(function(_, k) {
            return k === endKey;
        }).concat(Immutable.Map([ [ endKey, null ] ])).map(function(_, k) {
            return k === startKey ? modifiedStart : null;
        });
        return blockMap = blockMap.merge(newBlocks).filter(function(block) {
            return !!block;
        }), contentState.merge({
            blockMap: blockMap,
            selectionBefore: selectionState,
            selectionAfter: selectionState.merge({
                anchorKey: startKey,
                anchorOffset: startOffset,
                focusKey: startKey,
                focusOffset: startOffset,
                isBackward: !1
            })
        });
    }
    /**
	 * Maintain persistence for target list when removing characters on the
	 * head and tail of the character list.
	 */
    function removeFromList(targetList, startOffset, endOffset) {
        if (0 === startOffset) for (;startOffset < endOffset; ) targetList = targetList.shift(), 
        startOffset++; else if (endOffset === targetList.count()) for (;endOffset > startOffset; ) targetList = targetList.pop(), 
        endOffset--; else {
            var head = targetList.slice(0, startOffset), tail = targetList.slice(endOffset);
            targetList = head.concat(tail).toList();
        }
        return targetList;
    }
    var Immutable = __webpack_require__(5);
    module.exports = removeRangeFromContentState;
}, /* 28 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    function splitBlockInContentState(contentState, selectionState) {
        selectionState.isCollapsed() ? void 0 : invariant(!1);
        var key = selectionState.getAnchorKey(), offset = selectionState.getAnchorOffset(), blockMap = contentState.getBlockMap(), blockToSplit = blockMap.get(key), text = blockToSplit.getText(), chars = blockToSplit.getCharacterList(), blockAbove = blockToSplit.merge({
            text: text.slice(0, offset),
            characterList: chars.slice(0, offset)
        }), keyBelow = generateRandomKey(), blockBelow = blockAbove.merge({
            key: keyBelow,
            text: text.slice(offset),
            characterList: chars.slice(offset),
            data: Map()
        }), blocksBefore = blockMap.toSeq().takeUntil(function(v) {
            return v === blockToSplit;
        }), blocksAfter = blockMap.toSeq().skipUntil(function(v) {
            return v === blockToSplit;
        }).rest(), newBlocks = blocksBefore.concat([ [ blockAbove.getKey(), blockAbove ], [ blockBelow.getKey(), blockBelow ] ], blocksAfter).toOrderedMap();
        return contentState.merge({
            blockMap: newBlocks,
            selectionBefore: selectionState,
            selectionAfter: selectionState.merge({
                anchorKey: keyBelow,
                anchorOffset: 0,
                focusKey: keyBelow,
                focusOffset: 0,
                isBackward: !1
            })
        });
    }
    var Immutable = __webpack_require__(5), generateRandomKey = __webpack_require__(21), invariant = __webpack_require__(17), Map = Immutable.Map;
    module.exports = splitBlockInContentState;
}, /* 29 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
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
        return contentState.getBlockMap().map(function(block) {
            return BlockTree.generate(block, decorator);
        }).toOrderedMap();
    }
    /**
	 * Regenerate tree map objects for all ContentBlocks that have changed
	 * between the current editorState and newContent. Returns an OrderedMap
	 * with only changed regenerated tree map objects.
	 */
    function regenerateTreeForNewBlocks(editorState, newBlockMap, decorator) {
        var prevBlockMap = editorState.getCurrentContent().getBlockMap(), prevTreeMap = editorState.getImmutable().get("treeMap");
        return prevTreeMap.merge(newBlockMap.toSeq().filter(function(block, key) {
            return block !== prevBlockMap.get(key);
        }).map(function(block) {
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
        return previousTreeMap.merge(blockMap.toSeq().filter(function(block) {
            return decorator.getDecorations(block) !== existingDecorator.getDecorations(block);
        }).map(function(block) {
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
        return changeType !== lastChangeType || "insert-characters" !== changeType && "backspace-character" !== changeType && "delete-character" !== changeType;
    }
    function getInlineStyleForCollapsedSelection(content, selection) {
        var startKey = selection.getStartKey(), startOffset = selection.getStartOffset(), startBlock = content.getBlockForKey(startKey);
        // If the cursor is not at the start of the block, look backward to
        // preserve the style of the preceding character.
        // If the cursor is not at the start of the block, look backward to
        // preserve the style of the preceding character.
        // The caret is at position zero in this block. If the block has any
        // text at all, use the style of the first character.
        return startOffset > 0 ? startBlock.getInlineStyleAt(startOffset - 1) : startBlock.getLength() ? startBlock.getInlineStyleAt(0) : lookUpwardForInlineStyle(content, startKey);
    }
    function getInlineStyleForNonCollapsedSelection(content, selection) {
        var startKey = selection.getStartKey(), startOffset = selection.getStartOffset(), startBlock = content.getBlockForKey(startKey);
        // If there is a character just inside the selection, use its style.
        // If there is a character just inside the selection, use its style.
        // Check if the selection at the end of a non-empty block. Use the last
        // style in the block.
        return startOffset < startBlock.getLength() ? startBlock.getInlineStyleAt(startOffset) : startOffset > 0 ? startBlock.getInlineStyleAt(startOffset - 1) : lookUpwardForInlineStyle(content, startKey);
    }
    function lookUpwardForInlineStyle(content, fromKey) {
        for (var previousLength, previousBlock = content.getBlockBefore(fromKey); previousBlock; ) {
            if (previousLength = previousBlock.getLength()) return previousBlock.getInlineStyleAt(previousLength - 1);
            previousBlock = content.getBlockBefore(previousBlock.getKey());
        }
        return OrderedSet();
    }
    var _assign = __webpack_require__(15), _extends = _assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, BlockTree = __webpack_require__(30), ContentState = __webpack_require__(32), EditorBidiService = __webpack_require__(35), Immutable = __webpack_require__(5), SelectionState = __webpack_require__(33), OrderedSet = Immutable.OrderedSet, Record = Immutable.Record, Stack = Immutable.Stack, defaultRecord = {
        allowUndo: !0,
        currentContent: null,
        decorator: null,
        directionMap: null,
        forceSelection: !1,
        inCompositionMode: !1,
        inlineStyleOverride: null,
        lastChangeType: null,
        nativelyRenderedContent: null,
        redoStack: Stack(),
        selection: null,
        treeMap: null,
        undoStack: Stack()
    }, EditorStateRecord = Record(defaultRecord), EditorState = function() {
        /**
	   * Not for public consumption.
	   */
        function EditorState(immutable) {
            _classCallCheck(this, EditorState), this._immutable = immutable;
        }
        /**
	   * While editing, the user may apply inline style commands with a collapsed
	   * cursor, intending to type text that adopts the specified style. In this
	   * case, we track the specified style as an "override" that takes precedence
	   * over the inline style of the text adjacent to the cursor.
	   *
	   * If null, there is no override in place.
	   */
        /**
	   * Get the appropriate inline style for the editor state. If an
	   * override is in place, use it. Otherwise, the current style is
	   * based on the location of the selection state.
	   */
        /**
	   * Incorporate native DOM selection changes into the EditorState. This
	   * method can be used when we simply want to accept whatever the DOM
	   * has given us to represent selection, and we do not need to re-render
	   * the editor.
	   *
	   * To forcibly move the DOM selection, see `EditorState.forceSelection`.
	   */
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
        /**
	   * Move selection to the end of the editor without forcing focus.
	   */
        /**
	   * Force focus to the end of the editor. This is useful in scenarios
	   * where we want to programmatically focus the input and it makes sense
	   * to allow the user to continue working seamlessly.
	   */
        /**
	   * Push the current ContentState onto the undo stack if it should be
	   * considered a boundary state, and set the provided ContentState as the
	   * new current content.
	   */
        /**
	   * Make the top ContentState in the undo stack the new current content and
	   * push the current content onto the redo stack.
	   */
        /**
	   * Make the top ContentState in the redo stack the new current content and
	   * push the current content onto the undo stack.
	   */
        /**
	   * Not for public consumption.
	   */
        return EditorState.createEmpty = function(decorator) {
            return EditorState.createWithContent(ContentState.createFromText(""), decorator);
        }, EditorState.createWithContent = function(contentState, decorator) {
            var firstKey = contentState.getBlockMap().first().getKey();
            return EditorState.create({
                currentContent: contentState,
                undoStack: Stack(),
                redoStack: Stack(),
                decorator: decorator || null,
                selection: SelectionState.createEmpty(firstKey)
            });
        }, EditorState.create = function(config) {
            var currentContent = config.currentContent, decorator = config.decorator, recordConfig = _extends({}, config, {
                treeMap: generateNewTreeMap(currentContent, decorator),
                directionMap: EditorBidiService.getDirectionMap(currentContent)
            });
            return new EditorState(new EditorStateRecord(recordConfig));
        }, EditorState.set = function(editorState, put) {
            var map = editorState.getImmutable().withMutations(function(state) {
                var existingDecorator = state.get("decorator"), decorator = existingDecorator;
                null === put.decorator ? decorator = null : put.decorator && (decorator = put.decorator);
                var newContent = put.currentContent || editorState.getCurrentContent();
                if (decorator !== existingDecorator) {
                    var newTreeMap, treeMap = state.get("treeMap");
                    return newTreeMap = decorator && existingDecorator ? regenerateTreeForNewDecorator(newContent.getBlockMap(), treeMap, decorator, existingDecorator) : generateNewTreeMap(newContent, decorator), 
                    void state.merge({
                        decorator: decorator,
                        treeMap: newTreeMap,
                        nativelyRenderedContent: null
                    });
                }
                var existingContent = editorState.getCurrentContent();
                newContent !== existingContent && state.set("treeMap", regenerateTreeForNewBlocks(editorState, newContent.getBlockMap(), decorator)), 
                state.merge(put);
            });
            return new EditorState(map);
        }, EditorState.prototype.toJS = function() {
            return this.getImmutable().toJS();
        }, EditorState.prototype.getAllowUndo = function() {
            return this.getImmutable().get("allowUndo");
        }, EditorState.prototype.getCurrentContent = function() {
            return this.getImmutable().get("currentContent");
        }, EditorState.prototype.getUndoStack = function() {
            return this.getImmutable().get("undoStack");
        }, EditorState.prototype.getRedoStack = function() {
            return this.getImmutable().get("redoStack");
        }, EditorState.prototype.getSelection = function() {
            return this.getImmutable().get("selection");
        }, EditorState.prototype.getDecorator = function() {
            return this.getImmutable().get("decorator");
        }, EditorState.prototype.isInCompositionMode = function() {
            return this.getImmutable().get("inCompositionMode");
        }, EditorState.prototype.mustForceSelection = function() {
            return this.getImmutable().get("forceSelection");
        }, EditorState.prototype.getNativelyRenderedContent = function() {
            return this.getImmutable().get("nativelyRenderedContent");
        }, EditorState.prototype.getLastChangeType = function() {
            return this.getImmutable().get("lastChangeType");
        }, EditorState.prototype.getInlineStyleOverride = function() {
            return this.getImmutable().get("inlineStyleOverride");
        }, EditorState.setInlineStyleOverride = function(editorState, inlineStyleOverride) {
            return EditorState.set(editorState, {
                inlineStyleOverride: inlineStyleOverride
            });
        }, EditorState.prototype.getCurrentInlineStyle = function() {
            var override = this.getInlineStyleOverride();
            if (null != override) return override;
            var content = this.getCurrentContent(), selection = this.getSelection();
            return selection.isCollapsed() ? getInlineStyleForCollapsedSelection(content, selection) : getInlineStyleForNonCollapsedSelection(content, selection);
        }, EditorState.prototype.getBlockTree = function(blockKey) {
            return this.getImmutable().getIn([ "treeMap", blockKey ]);
        }, EditorState.prototype.isSelectionAtStartOfContent = function() {
            var firstKey = this.getCurrentContent().getBlockMap().first().getKey();
            return this.getSelection().hasEdgeWithin(firstKey, 0, 0);
        }, EditorState.prototype.isSelectionAtEndOfContent = function() {
            var content = this.getCurrentContent(), blockMap = content.getBlockMap(), last = blockMap.last(), end = last.getLength();
            return this.getSelection().hasEdgeWithin(last.getKey(), end, end);
        }, EditorState.prototype.getDirectionMap = function() {
            return this.getImmutable().get("directionMap");
        }, EditorState.acceptSelection = function(editorState, selection) {
            return updateSelection(editorState, selection, !1);
        }, EditorState.forceSelection = function(editorState, selection) {
            return selection.getHasFocus() || (selection = selection.set("hasFocus", !0)), updateSelection(editorState, selection, !0);
        }, EditorState.moveSelectionToEnd = function(editorState) {
            var content = editorState.getCurrentContent(), lastBlock = content.getLastBlock(), lastKey = lastBlock.getKey(), length = lastBlock.getLength();
            return EditorState.acceptSelection(editorState, new SelectionState({
                anchorKey: lastKey,
                anchorOffset: length,
                focusKey: lastKey,
                focusOffset: length,
                isBackward: !1
            }));
        }, EditorState.moveFocusToEnd = function(editorState) {
            var afterSelectionMove = EditorState.moveSelectionToEnd(editorState);
            return EditorState.forceSelection(afterSelectionMove, afterSelectionMove.getSelection());
        }, EditorState.push = function(editorState, contentState, changeType) {
            if (editorState.getCurrentContent() === contentState) return editorState;
            var forceSelection = "insert-characters" !== changeType, directionMap = EditorBidiService.getDirectionMap(contentState, editorState.getDirectionMap());
            if (!editorState.getAllowUndo()) return EditorState.set(editorState, {
                currentContent: contentState,
                directionMap: directionMap,
                lastChangeType: changeType,
                selection: contentState.getSelectionAfter(),
                forceSelection: forceSelection,
                inlineStyleOverride: null
            });
            var selection = editorState.getSelection(), currentContent = editorState.getCurrentContent(), undoStack = editorState.getUndoStack(), newContent = contentState;
            selection !== currentContent.getSelectionAfter() || mustBecomeBoundary(editorState, changeType) ? (undoStack = undoStack.push(currentContent), 
            newContent = newContent.set("selectionBefore", selection)) : "insert-characters" !== changeType && "backspace-character" !== changeType && "delete-character" !== changeType || (// Preserve the previous selection.
            newContent = newContent.set("selectionBefore", currentContent.getSelectionBefore()));
            var inlineStyleOverride = editorState.getInlineStyleOverride();
            // Don't discard inline style overrides on block type or depth changes.
            "adjust-depth" !== changeType && "change-block-type" !== changeType && (inlineStyleOverride = null);
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
        }, EditorState.undo = function(editorState) {
            if (!editorState.getAllowUndo()) return editorState;
            var undoStack = editorState.getUndoStack(), newCurrentContent = undoStack.peek();
            if (!newCurrentContent) return editorState;
            var currentContent = editorState.getCurrentContent(), directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());
            return EditorState.set(editorState, {
                currentContent: newCurrentContent,
                directionMap: directionMap,
                undoStack: undoStack.shift(),
                redoStack: editorState.getRedoStack().push(currentContent),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: "undo",
                nativelyRenderedContent: null,
                selection: currentContent.getSelectionBefore()
            });
        }, EditorState.redo = function(editorState) {
            if (!editorState.getAllowUndo()) return editorState;
            var redoStack = editorState.getRedoStack(), newCurrentContent = redoStack.peek();
            if (!newCurrentContent) return editorState;
            var currentContent = editorState.getCurrentContent(), directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());
            return EditorState.set(editorState, {
                currentContent: newCurrentContent,
                directionMap: directionMap,
                undoStack: editorState.getUndoStack().push(currentContent),
                redoStack: redoStack.shift(),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: "redo",
                nativelyRenderedContent: null,
                selection: newCurrentContent.getSelectionAfter()
            });
        }, EditorState.prototype.getImmutable = function() {
            return this._immutable;
        }, EditorState;
    }();
    module.exports = EditorState;
}, /* 30 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Generate LeafRange records for a given character list.
	 */
    function generateLeaves(characters, offset) {
        var leaves = [], inlineStyles = characters.map(function(c) {
            return c.getStyle();
        }).toList();
        return findRangesImmutable(inlineStyles, areEqual, returnTrue, function(start, end) {
            leaves.push(new LeafRange({
                start: start + offset,
                end: end + offset
            }));
        }), List(leaves);
    }
    function areEqual(a, b) {
        return a === b;
    }
    var Immutable = __webpack_require__(5), emptyFunction = __webpack_require__(31), findRangesImmutable = __webpack_require__(8), List = Immutable.List, Repeat = Immutable.Repeat, Record = Immutable.Record, returnTrue = emptyFunction.thatReturnsTrue, FINGERPRINT_DELIMITER = "-", defaultLeafRange = {
        start: null,
        end: null
    }, LeafRange = Record(defaultLeafRange), defaultDecoratorRange = {
        start: null,
        end: null,
        decoratorKey: null,
        leaves: null
    }, DecoratorRange = Record(defaultDecoratorRange), BlockTree = {
        /**
	   * Generate a block tree for a given ContentBlock/decorator pair.
	   */
        generate: function(block, decorator) {
            var textLength = block.getLength();
            if (!textLength) return List.of(new DecoratorRange({
                start: 0,
                end: 0,
                decoratorKey: null,
                leaves: List.of(new LeafRange({
                    start: 0,
                    end: 0
                }))
            }));
            var leafSets = [], decorations = decorator ? decorator.getDecorations(block) : List(Repeat(null, textLength)), chars = block.getCharacterList();
            return findRangesImmutable(decorations, areEqual, returnTrue, function(start, end) {
                leafSets.push(new DecoratorRange({
                    start: start,
                    end: end,
                    decoratorKey: decorations.get(start),
                    leaves: generateLeaves(chars.slice(start, end).toList(), start)
                }));
            }), List(leafSets);
        },
        /**
	   * Create a string representation of the given tree map. This allows us
	   * to rapidly determine whether a tree has undergone a significant
	   * structural change.
	   */
        getFingerprint: function(tree) {
            return tree.map(function(leafSet) {
                var decoratorKey = leafSet.get("decoratorKey"), fingerprintString = null !== decoratorKey ? decoratorKey + "." + (leafSet.get("end") - leafSet.get("start")) : "";
                return "" + fingerprintString + "." + leafSet.get("leaves").size;
            }).join(FINGERPRINT_DELIMITER);
        }
    };
    module.exports = BlockTree;
}, /* 31 */
/***/
function(module, exports) {
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
        return function() {
            return arg;
        };
    }
    /**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
    var emptyFunction = function() {};
    emptyFunction.thatReturns = makeEmptyFunction, emptyFunction.thatReturnsFalse = makeEmptyFunction(!1), 
    emptyFunction.thatReturnsTrue = makeEmptyFunction(!0), emptyFunction.thatReturnsNull = makeEmptyFunction(null), 
    emptyFunction.thatReturnsThis = function() {
        return this;
    }, emptyFunction.thatReturnsArgument = function(arg) {
        return arg;
    }, module.exports = emptyFunction;
}, /* 32 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var BlockMapBuilder = __webpack_require__(4), CharacterMetadata = __webpack_require__(6), ContentBlock = __webpack_require__(7), Immutable = __webpack_require__(5), SelectionState = __webpack_require__(33), generateRandomKey = __webpack_require__(21), sanitizeDraftText = __webpack_require__(34), List = Immutable.List, Record = Immutable.Record, Repeat = Immutable.Repeat, defaultRecord = {
        blockMap: null,
        selectionBefore: null,
        selectionAfter: null
    }, ContentStateRecord = Record(defaultRecord), ContentState = function(_ContentStateRecord) {
        function ContentState() {
            return _classCallCheck(this, ContentState), _possibleConstructorReturn(this, _ContentStateRecord.apply(this, arguments));
        }
        return _inherits(ContentState, _ContentStateRecord), ContentState.prototype.getBlockMap = function() {
            return this.get("blockMap");
        }, ContentState.prototype.getSelectionBefore = function() {
            return this.get("selectionBefore");
        }, ContentState.prototype.getSelectionAfter = function() {
            return this.get("selectionAfter");
        }, ContentState.prototype.getBlockForKey = function(key) {
            var block = this.getBlockMap().get(key);
            return block;
        }, ContentState.prototype.getKeyBefore = function(key) {
            return this.getBlockMap().reverse().keySeq().skipUntil(function(v) {
                return v === key;
            }).skip(1).first();
        }, ContentState.prototype.getKeyAfter = function(key) {
            return this.getBlockMap().keySeq().skipUntil(function(v) {
                return v === key;
            }).skip(1).first();
        }, ContentState.prototype.getBlockAfter = function(key) {
            return this.getBlockMap().skipUntil(function(_, k) {
                return k === key;
            }).skip(1).first();
        }, ContentState.prototype.getBlockBefore = function(key) {
            return this.getBlockMap().reverse().skipUntil(function(_, k) {
                return k === key;
            }).skip(1).first();
        }, ContentState.prototype.getBlocksAsArray = function() {
            return this.getBlockMap().toArray();
        }, ContentState.prototype.getFirstBlock = function() {
            return this.getBlockMap().first();
        }, ContentState.prototype.getLastBlock = function() {
            return this.getBlockMap().last();
        }, ContentState.prototype.getPlainText = function(delimiter) {
            return this.getBlockMap().map(function(block) {
                return block ? block.getText() : "";
            }).join(delimiter || "\n");
        }, ContentState.prototype.hasText = function() {
            var blockMap = this.getBlockMap();
            return blockMap.size > 1 || blockMap.first().getLength() > 0;
        }, ContentState.createFromBlockArray = function(blocks) {
            var blockMap = BlockMapBuilder.createFromArray(blocks), selectionState = SelectionState.createEmpty(blockMap.first().getKey());
            return new ContentState({
                blockMap: blockMap,
                selectionBefore: selectionState,
                selectionAfter: selectionState
            });
        }, ContentState.createFromText = function(text) {
            var delimiter = arguments.length <= 1 || void 0 === arguments[1] ? /\r\n?|\n/g : arguments[1], strings = text.split(delimiter), blocks = strings.map(function(block) {
                return block = sanitizeDraftText(block), new ContentBlock({
                    key: generateRandomKey(),
                    text: block,
                    type: "unstyled",
                    characterList: List(Repeat(CharacterMetadata.EMPTY, block.length))
                });
            });
            return ContentState.createFromBlockArray(blocks);
        }, ContentState;
    }(ContentStateRecord);
    module.exports = ContentState;
}, /* 33 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var Immutable = __webpack_require__(5), Record = Immutable.Record, defaultRecord = {
        anchorKey: "",
        anchorOffset: 0,
        focusKey: "",
        focusOffset: 0,
        isBackward: !1,
        hasFocus: !1
    }, SelectionStateRecord = Record(defaultRecord), SelectionState = function(_SelectionStateRecord) {
        function SelectionState() {
            return _classCallCheck(this, SelectionState), _possibleConstructorReturn(this, _SelectionStateRecord.apply(this, arguments));
        }
        /**
	   * Return whether the specified range overlaps with an edge of the
	   * SelectionState.
	   */
        return _inherits(SelectionState, _SelectionStateRecord), SelectionState.prototype.serialize = function() {
            return "Anchor: " + this.getAnchorKey() + ":" + this.getAnchorOffset() + ", Focus: " + this.getFocusKey() + ":" + this.getFocusOffset() + ", Is Backward: " + String(this.getIsBackward()) + ", Has Focus: " + String(this.getHasFocus());
        }, SelectionState.prototype.getAnchorKey = function() {
            return this.get("anchorKey");
        }, SelectionState.prototype.getAnchorOffset = function() {
            return this.get("anchorOffset");
        }, SelectionState.prototype.getFocusKey = function() {
            return this.get("focusKey");
        }, SelectionState.prototype.getFocusOffset = function() {
            return this.get("focusOffset");
        }, SelectionState.prototype.getIsBackward = function() {
            return this.get("isBackward");
        }, SelectionState.prototype.getHasFocus = function() {
            return this.get("hasFocus");
        }, SelectionState.prototype.hasEdgeWithin = function(blockKey, start, end) {
            var anchorKey = this.getAnchorKey(), focusKey = this.getFocusKey();
            if (anchorKey === focusKey && anchorKey === blockKey) {
                var selectionStart = this.getStartOffset(), selectionEnd = this.getEndOffset();
                return start <= selectionEnd && selectionStart <= end;
            }
            if (blockKey !== anchorKey && blockKey !== focusKey) return !1;
            var offsetToCheck = blockKey === anchorKey ? this.getAnchorOffset() : this.getFocusOffset();
            return start <= offsetToCheck && end >= offsetToCheck;
        }, SelectionState.prototype.isCollapsed = function() {
            return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
        }, SelectionState.prototype.getStartKey = function() {
            return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
        }, SelectionState.prototype.getStartOffset = function() {
            return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
        }, SelectionState.prototype.getEndKey = function() {
            return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
        }, SelectionState.prototype.getEndOffset = function() {
            return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
        }, SelectionState.createEmpty = function(key) {
            return new SelectionState({
                anchorKey: key,
                anchorOffset: 0,
                focusKey: key,
                focusOffset: 0,
                isBackward: !1,
                hasFocus: !1
            });
        }, SelectionState;
    }(SelectionStateRecord);
    module.exports = SelectionState;
}, /* 34 */
/***/
function(module, exports) {
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
    "use strict";
    function sanitizeDraftText(input) {
        return input.replace(REGEX_BLOCK_DELIMITER, "");
    }
    var REGEX_BLOCK_DELIMITER = new RegExp("\r", "g");
    module.exports = sanitizeDraftText;
}, /* 35 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var bidiService, Immutable = __webpack_require__(5), UnicodeBidiService = __webpack_require__(36), nullthrows = __webpack_require__(39), OrderedMap = Immutable.OrderedMap, EditorBidiService = {
        getDirectionMap: function(content, prevBidiMap) {
            bidiService ? bidiService.reset() : bidiService = new UnicodeBidiService();
            var blockMap = content.getBlockMap(), nextBidi = blockMap.valueSeq().map(function(block) {
                return nullthrows(bidiService).getDirection(block.getText());
            }), bidiMap = OrderedMap(blockMap.keySeq().zip(nextBidi));
            return null != prevBidiMap && Immutable.is(prevBidiMap, bidiMap) ? prevBidiMap : bidiMap;
        }
    };
    module.exports = EditorBidiService;
}, /* 36 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var UnicodeBidi = __webpack_require__(37), UnicodeBidiDirection = __webpack_require__(38), invariant = __webpack_require__(17), UnicodeBidiService = function() {
        /**
	   * Stateful class for paragraph direction detection
	   *
	   * @param defaultDir  Default direction of the service
	   */
        function UnicodeBidiService(defaultDir) {
            _classCallCheck(this, UnicodeBidiService), defaultDir ? UnicodeBidiDirection.isStrong(defaultDir) ? void 0 : invariant(!1) : defaultDir = UnicodeBidiDirection.getGlobalDir(), 
            this._defaultDir = defaultDir, this.reset();
        }
        /**
	   * Reset the internal state
	   *
	   * Instead of creating a new instance, you can just reset() your instance
	   * everytime you start a new loop.
	   */
        /**
	   * Returns the direction of a block of text, and remembers it as the
	   * fall-back direction for the next paragraph.
	   *
	   * @param str  A text block, e.g. paragraph, table cell, tag
	   * @return     The resolved direction
	   */
        return UnicodeBidiService.prototype.reset = function() {
            this._lastDir = this._defaultDir;
        }, UnicodeBidiService.prototype.getDirection = function(str) {
            return this._lastDir = UnicodeBidi.getDirection(str, this._lastDir), this._lastDir;
        }, UnicodeBidiService;
    }();
    module.exports = UnicodeBidiService;
}, /* 37 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    /**
	 * Returns the first strong character (has Bidi_Class value of L, R, or AL).
	 *
	 * @param str  A text block; e.g. paragraph, table cell, tag
	 * @return     A character with strong bidi direction, or null if not found
	 */
    function firstStrongChar(str) {
        var match = REGEX_STRONG.exec(str);
        return null == match ? null : match[0];
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
        return null == strongChar ? UnicodeBidiDirection.NEUTRAL : REGEX_RTL.exec(strongChar) ? UnicodeBidiDirection.RTL : UnicodeBidiDirection.LTR;
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
        if (fallback = fallback || UnicodeBidiDirection.NEUTRAL, !str.length) return fallback;
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
        return strongFallback || (strongFallback = UnicodeBidiDirection.getGlobalDir()), 
        UnicodeBidiDirection.isStrong(strongFallback) ? void 0 : invariant(!1), resolveBlockDir(str, strongFallback);
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
    var UnicodeBidiDirection = __webpack_require__(38), invariant = __webpack_require__(17), RANGE_BY_BIDI_TYPE = {
        L: "A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        R: "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
        AL: "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾"
    }, REGEX_STRONG = new RegExp("[" + RANGE_BY_BIDI_TYPE.L + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + "]"), REGEX_RTL = new RegExp("[" + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + "]"), UnicodeBidi = {
        firstStrongChar: firstStrongChar,
        firstStrongCharDir: firstStrongCharDir,
        resolveBlockDir: resolveBlockDir,
        getDirection: getDirection,
        isDirectionLTR: isDirectionLTR,
        isDirectionRTL: isDirectionRTL
    };
    module.exports = UnicodeBidi;
}, /* 38 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
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
        return isStrong(dir) ? void 0 : invariant(!1), dir === LTR ? "ltr" : "rtl";
    }
    /**
	 * Get string value to be used for `dir` HTML attribute or `direction` CSS
	 * property, but returns null if `dir` has same value as `otherDir`.
	 * `null`.
	 */
    function getHTMLDirIfDifferent(dir, otherDir) {
        return isStrong(dir) ? void 0 : invariant(!1), isStrong(otherDir) ? void 0 : invariant(!1), 
        dir === otherDir ? null : getHTMLDir(dir);
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
        return globalDir || this.initGlobalDir(), globalDir ? void 0 : invariant(!1), globalDir;
    }
    var invariant = __webpack_require__(17), NEUTRAL = "NEUTRAL", LTR = "LTR", RTL = "RTL", globalDir = null, UnicodeBidiDirection = {
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
}, /* 39 */
/***/
function(module, exports) {
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
    var nullthrows = function(x) {
        if (null != x) return x;
        throw new Error("Got unexpected null or undefined");
    };
    module.exports = nullthrows;
}, /* 40 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    /**
	 * Determine whether we can occupy the specified slice of the decorations
	 * array.
	 */
    function canOccupySlice(decorations, start, end) {
        for (var ii = start; ii < end; ii++) if (null != decorations[ii]) return !1;
        return !0;
    }
    /**
	 * Splice the specified component into our decoration array at the desired
	 * range.
	 */
    function occupySlice(targetArr, start, end, componentKey) {
        for (var ii = start; ii < end; ii++) targetArr[ii] = componentKey;
    }
    var Immutable = __webpack_require__(5), List = Immutable.List, DELIMITER = ".", CompositeDraftDecorator = function() {
        function CompositeDraftDecorator(decorators) {
            _classCallCheck(this, CompositeDraftDecorator), // Copy the decorator array, since we use this array order to determine
            // precedence of decoration matching. If the array is mutated externally,
            // we don't want to be affected here.
            this._decorators = decorators.slice();
        }
        return CompositeDraftDecorator.prototype.getDecorations = function(block) {
            var decorations = Array(block.getText().length).fill(null);
            return this._decorators.forEach(function(/*object*/ decorator, /*number*/ ii) {
                var counter = 0, strategy = decorator.strategy;
                strategy(block, function(/*number*/ start, /*number*/ end) {
                    // Find out if any of our matching range is already occupied
                    // by another decorator. If so, discard the match. Otherwise, store
                    // the component key for rendering.
                    canOccupySlice(decorations, start, end) && (occupySlice(decorations, start, end, ii + DELIMITER + counter), 
                    counter++);
                });
            }), List(decorations);
        }, CompositeDraftDecorator.prototype.getComponentForKey = function(key) {
            var componentKey = parseInt(key.split(DELIMITER)[0], 10);
            return this._decorators[componentKey].component;
        }, CompositeDraftDecorator.prototype.getPropsForKey = function(key) {
            var componentKey = parseInt(key.split(DELIMITER)[0], 10);
            return this._decorators[componentKey].props;
        }, CompositeDraftDecorator;
    }();
    module.exports = CompositeDraftDecorator;
}, /* 41 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var _require = __webpack_require__(5), Map = _require.Map, React = __webpack_require__(1), cx = __webpack_require__(42), UL_WRAP = React.createElement("ul", {
        className: cx("public/DraftStyleDefault/ul")
    }), OL_WRAP = React.createElement("ol", {
        className: cx("public/DraftStyleDefault/ol")
    }), PRE_WRAP = React.createElement("pre", {
        className: cx("public/DraftStyleDefault/pre")
    });
    module.exports = Map({
        "header-one": {
            element: "h1"
        },
        "header-two": {
            element: "h2"
        },
        "header-three": {
            element: "h3"
        },
        "header-four": {
            element: "h4"
        },
        "header-five": {
            element: "h5"
        },
        "header-six": {
            element: "h6"
        },
        "unordered-list-item": {
            element: "li",
            wrapper: UL_WRAP
        },
        "ordered-list-item": {
            element: "li",
            wrapper: OL_WRAP
        },
        blockquote: {
            element: "blockquote"
        },
        atomic: {
            element: "figure"
        },
        "code-block": {
            element: "pre",
            wrapper: PRE_WRAP
        },
        unstyled: {
            element: "div"
        }
    });
}, /* 42 */
/***/
function(module, exports) {
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
        return "object" == typeof classNames ? Object.keys(classNames).filter(function(className) {
            return classNames[className];
        }).map(replace).join(" ") : Array.prototype.map.call(arguments, replace).join(" ");
    }
    function replace(str) {
        return str.replace(/\//g, "-");
    }
    module.exports = cx;
}, /* 43 */
/***/
function(module, exports) {
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
    "use strict";
    module.exports = {
        BOLD: {
            fontWeight: "bold"
        },
        CODE: {
            fontFamily: "monospace",
            wordWrap: "break-word"
        },
        ITALIC: {
            fontStyle: "italic"
        },
        STRIKETHROUGH: {
            textDecoration: "line-through"
        },
        UNDERLINE: {
            textDecoration: "underline"
        }
    };
}, /* 44 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _assign = __webpack_require__(15), _extends = _assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, DefaultDraftBlockRenderMap = __webpack_require__(41), DefaultDraftInlineStyle = __webpack_require__(43), DraftEditorCompositionHandler = __webpack_require__(45), DraftEditorContents = __webpack_require__(49), DraftEditorDragHandler = __webpack_require__(79), DraftEditorEditHandler = __webpack_require__(88), DraftEditorPlaceholder = __webpack_require__(129), EditorState = __webpack_require__(29), React = __webpack_require__(1), ReactDOM = __webpack_require__(53), Scroll = __webpack_require__(67), Style = __webpack_require__(68), UserAgent = __webpack_require__(54), cx = __webpack_require__(42), emptyFunction = __webpack_require__(31), generateRandomKey = __webpack_require__(21), getDefaultKeyBinding = __webpack_require__(130), nullthrows = __webpack_require__(39), getScrollPosition = __webpack_require__(74), isIE = UserAgent.isBrowser("IE"), allowSpellCheck = !isIE, handlerMap = {
        edit: DraftEditorEditHandler,
        composite: DraftEditorCompositionHandler,
        drag: DraftEditorDragHandler,
        cut: null,
        render: null
    }, DraftEditor = function(_React$Component) {
        function DraftEditor(props) {
            _classCallCheck(this, DraftEditor);
            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
            // Manual binding for public and internal methods.
            // See `_restoreEditorDOM()`.
            return _this._blockSelectEvents = !1, _this._clipboard = null, _this._guardAgainstRender = !1, 
            _this._handler = null, _this._dragCount = 0, _this._editorKey = generateRandomKey(), 
            _this._placeholderAccessibilityID = "placeholder-" + _this._editorKey, _this._onBeforeInput = _this._buildHandler("onBeforeInput"), 
            _this._onBlur = _this._buildHandler("onBlur"), _this._onCharacterData = _this._buildHandler("onCharacterData"), 
            _this._onCompositionEnd = _this._buildHandler("onCompositionEnd"), _this._onCompositionStart = _this._buildHandler("onCompositionStart"), 
            _this._onCopy = _this._buildHandler("onCopy"), _this._onCut = _this._buildHandler("onCut"), 
            _this._onDragEnd = _this._buildHandler("onDragEnd"), _this._onDragOver = _this._buildHandler("onDragOver"), 
            _this._onDragStart = _this._buildHandler("onDragStart"), _this._onDrop = _this._buildHandler("onDrop"), 
            _this._onInput = _this._buildHandler("onInput"), _this._onFocus = _this._buildHandler("onFocus"), 
            _this._onKeyDown = _this._buildHandler("onKeyDown"), _this._onKeyPress = _this._buildHandler("onKeyPress"), 
            _this._onKeyUp = _this._buildHandler("onKeyUp"), _this._onMouseDown = _this._buildHandler("onMouseDown"), 
            _this._onMouseUp = _this._buildHandler("onMouseUp"), _this._onPaste = _this._buildHandler("onPaste"), 
            _this._onSelect = _this._buildHandler("onSelect"), _this.focus = _this._focus.bind(_this), 
            _this.blur = _this._blur.bind(_this), _this.setMode = _this._setMode.bind(_this), 
            _this.exitCurrentMode = _this._exitCurrentMode.bind(_this), _this.restoreEditorDOM = _this._restoreEditorDOM.bind(_this), 
            _this.setRenderGuard = _this._setRenderGuard.bind(_this), _this.removeRenderGuard = _this._removeRenderGuard.bind(_this), 
            _this.setClipboard = _this._setClipboard.bind(_this), _this.getClipboard = _this._getClipboard.bind(_this), 
            _this.getEditorKey = function() {
                return _this._editorKey;
            }, _this.update = _this._update.bind(_this), _this.onDragEnter = _this._onDragEnter.bind(_this), 
            _this.onDragLeave = _this._onDragLeave.bind(_this), _this.state = {
                containerKey: 0
            }, _this;
        }
        /**
	   * Build a method that will pass the event to the specified handler method.
	   * This allows us to look up the correct handler function for the current
	   * editor mode, if any has been specified.
	   */
        /**
	   * Define proxies that can route events to the current handler.
	   */
        /**
	   * Prevent selection events from affecting the current editor state. This
	   * is mostly intended to defend against IE, which fires off `selectionchange`
	   * events regardless of whether the selection is set via the browser or
	   * programmatically. We only care about selection events that occur because
	   * of browser interaction, not re-renders and forced selections.
	   */
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
        /**
	   * Used via `this.setMode(...)`.
	   *
	   * Set the behavior mode for the editor component. This switches the current
	   * handler module to ensure that DOM events are managed appropriately for
	   * the active mode.
	   */
        /**
	   * Used via `this.restoreEditorDOM()`.
	   *
	   * Force a complete re-render of the editor based on the current EditorState.
	   * This is useful when we know we are going to lose control of the DOM
	   * state (cut command, IME) and we want to make sure that reconciliation
	   * occurs on a version of the DOM that is synchronized with our EditorState.
	   */
        /**
	   * Guard against rendering. Intended for use when we need to manually
	   * reset editor contents, to ensure that no outside influences lead to
	   * React reconciliation when we are in an uncertain state.
	   */
        /**
	   * Used via `this.setClipboard(...)`.
	   *
	   * Set the clipboard state for a cut/copy event.
	   */
        /**
	   * Used via `this.getClipboard()`.
	   *
	   * Retrieve the clipboard state for a cut/copy event.
	   */
        /**
	   * Used via `this.update(...)`.
	   *
	   * Propagate a new `EditorState` object to higher-level components. This is
	   * the method by which event handlers inform the `DraftEditor` component of
	   * state changes. A component that composes a `DraftEditor` **must** provide
	   * an `onChange` prop to receive state updates passed along from this
	   * function.
	   */
        /**
	   * Used in conjunction with `_onDragLeave()`, by counting the number of times
	   * a dragged element enters and leaves the editor (or any of its children),
	   * to determine when the dragged element absolutely leaves the editor.
	   */
        /**
	   * See `_onDragEnter()`.
	   */
        return _inherits(DraftEditor, _React$Component), DraftEditor.prototype._buildHandler = function(eventName) {
            var _this2 = this;
            return function(e) {
                if (!_this2.props.readOnly) {
                    var method = _this2._handler && _this2._handler[eventName];
                    method && method.call(_this2, e);
                }
            };
        }, DraftEditor.prototype._showPlaceholder = function() {
            return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
        }, DraftEditor.prototype._renderPlaceholder = function() {
            return this._showPlaceholder() ? React.createElement(DraftEditorPlaceholder, {
                text: nullthrows(this.props.placeholder),
                editorState: this.props.editorState,
                textAlignment: this.props.textAlignment,
                accessibilityID: this._placeholderAccessibilityID
            }) : null;
        }, DraftEditor.prototype.render = function() {
            var _props = this.props, readOnly = _props.readOnly, textAlignment = _props.textAlignment, rootClass = cx({
                "DraftEditor/root": !0,
                "DraftEditor/alignLeft": "left" === textAlignment,
                "DraftEditor/alignRight": "right" === textAlignment,
                "DraftEditor/alignCenter": "center" === textAlignment
            }), contentStyle = {
                outline: "none",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word"
            };
            return React.createElement("div", {
                className: rootClass
            }, this._renderPlaceholder(), React.createElement("div", {
                className: cx("DraftEditor/editorContainer"),
                key: "editor" + this.state.containerKey,
                ref: "editorContainer"
            }, React.createElement("div", {
                "aria-activedescendant": readOnly ? null : this.props.ariaActiveDescendantID,
                "aria-autocomplete": readOnly ? null : this.props.ariaAutoComplete,
                "aria-describedby": this._showPlaceholder() ? this._placeholderAccessibilityID : null,
                "aria-expanded": readOnly ? null : this.props.ariaExpanded,
                "aria-haspopup": readOnly ? null : this.props.ariaHasPopup,
                "aria-label": this.props.ariaLabel,
                "aria-owns": readOnly ? null : this.props.ariaOwneeID,
                className: cx("public/DraftEditor/content"),
                contentEditable: !readOnly,
                "data-testid": this.props.webDriverTestID,
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
                ref: "editor",
                role: readOnly ? null : this.props.role || "textbox",
                spellCheck: allowSpellCheck && this.props.spellCheck,
                style: contentStyle,
                suppressContentEditableWarning: !0,
                tabIndex: this.props.tabIndex
            }, React.createElement(DraftEditorContents, {
                blockRenderMap: this.props.blockRenderMap,
                blockRendererFn: this.props.blockRendererFn,
                blockStyleFn: this.props.blockStyleFn,
                customStyleMap: _extends({}, DefaultDraftInlineStyle, this.props.customStyleMap),
                customStyleFn: this.props.customStyleFn,
                editorKey: this._editorKey,
                editorState: this.props.editorState
            }))));
        }, DraftEditor.prototype.componentDidMount = function() {
            this.setMode("edit"), /**
	     * IE has a hardcoded "feature" that attempts to convert link text into
	     * anchors in contentEditable DOM. This breaks the editor's expectations of
	     * the DOM, and control is lost. Disable it to make IE behave.
	     * See: http://blogs.msdn.com/b/ieinternals/archive/2010/09/15/
	     * ie9-beta-minor-change-list.aspx
	     */
            isIE && document.execCommand("AutoUrlDetect", !1, !1);
        }, DraftEditor.prototype.componentWillUpdate = function() {
            this._blockSelectEvents = !0;
        }, DraftEditor.prototype.componentDidUpdate = function() {
            this._blockSelectEvents = !1;
        }, DraftEditor.prototype._focus = function(scrollPosition) {
            var editorState = this.props.editorState, alreadyHasFocus = editorState.getSelection().getHasFocus(), editorNode = ReactDOM.findDOMNode(this.refs.editor), scrollParent = Style.getScrollParent(editorNode), _ref = scrollPosition || getScrollPosition(scrollParent), x = _ref.x, y = _ref.y;
            editorNode.focus(), scrollParent === window ? window.scrollTo(x, y) : Scroll.setTop(scrollParent, y), 
            // On Chrome and Safari, calling focus on contenteditable focuses the
            // cursor at the first character. This is something you don't expect when
            // you're clicking on an input element but not directly on a character.
            // Put the cursor back where it was before the blur.
            alreadyHasFocus || this.update(EditorState.forceSelection(editorState, editorState.getSelection()));
        }, DraftEditor.prototype._blur = function() {
            ReactDOM.findDOMNode(this.refs.editor).blur();
        }, DraftEditor.prototype._setMode = function(mode) {
            this._handler = handlerMap[mode];
        }, DraftEditor.prototype._exitCurrentMode = function() {
            this.setMode("edit");
        }, DraftEditor.prototype._restoreEditorDOM = function(scrollPosition) {
            var _this3 = this;
            this.setState({
                containerKey: this.state.containerKey + 1
            }, function() {
                _this3._focus(scrollPosition);
            });
        }, DraftEditor.prototype._setRenderGuard = function() {
            this._guardAgainstRender = !0;
        }, DraftEditor.prototype._removeRenderGuard = function() {
            this._guardAgainstRender = !1;
        }, DraftEditor.prototype._setClipboard = function(clipboard) {
            this._clipboard = clipboard;
        }, DraftEditor.prototype._getClipboard = function() {
            return this._clipboard;
        }, DraftEditor.prototype._update = function(editorState) {
            this.props.onChange(editorState);
        }, DraftEditor.prototype._onDragEnter = function() {
            this._dragCount++;
        }, DraftEditor.prototype._onDragLeave = function() {
            this._dragCount--, 0 === this._dragCount && this.exitCurrentMode();
        }, DraftEditor;
    }(React.Component);
    DraftEditor.defaultProps = {
        blockRenderMap: DefaultDraftBlockRenderMap,
        blockRendererFn: emptyFunction.thatReturnsNull,
        blockStyleFn: emptyFunction.thatReturns(""),
        keyBindingFn: getDefaultKeyBinding,
        readOnly: !1,
        spellCheck: !1,
        stripPastedStyles: !1
    }, module.exports = DraftEditor;
}, /* 45 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), Keys = __webpack_require__(46), getEntityKeyForSelection = __webpack_require__(47), isSelectionAtLeafStart = __webpack_require__(48), RESOLVE_DELAY = 20, resolved = !1, stillComposing = !1, textInputData = "", DraftEditorCompositionHandler = {
        onBeforeInput: function(e) {
            textInputData = (textInputData || "") + e.data;
        },
        /**
	   * A `compositionstart` event has fired while we're still in composition
	   * mode. Continue the current composition session to prevent a re-render.
	   */
        onCompositionStart: function() {
            stillComposing = !0;
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
        onCompositionEnd: function() {
            var _this = this;
            resolved = !1, stillComposing = !1, setTimeout(function() {
                resolved || DraftEditorCompositionHandler.resolveComposition.call(_this);
            }, RESOLVE_DELAY);
        },
        /**
	   * In Safari, keydown events may fire when committing compositions. If
	   * the arrow keys are used to commit, prevent default so that the cursor
	   * doesn't move, otherwise it will jump back noticeably on re-render.
	   */
        onKeyDown: function(e) {
            e.which !== Keys.RIGHT && e.which !== Keys.LEFT || e.preventDefault();
        },
        /**
	   * Keypress events may fire when committing compositions. In Firefox,
	   * pressing RETURN commits the composition and inserts extra newline
	   * characters that we do not want. `preventDefault` allows the composition
	   * to be committed while preventing the extra characters.
	   */
        onKeyPress: function(e) {
            e.which === Keys.RETURN && e.preventDefault();
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
        resolveComposition: function() {
            if (!stillComposing) {
                resolved = !0;
                var composedChars = textInputData;
                textInputData = "";
                var editorState = EditorState.set(this.props.editorState, {
                    inCompositionMode: !1
                }), currentStyle = editorState.getCurrentInlineStyle(), entityKey = getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection()), mustReset = !composedChars || isSelectionAtLeafStart(editorState) || currentStyle.size > 0 || null !== entityKey;
                if (mustReset && this.restoreEditorDOM(), this.exitCurrentMode(), this.removeRenderGuard(), 
                composedChars) {
                    // If characters have been composed, re-rendering with the update
                    // is sufficient to reset the editor.
                    var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), composedChars, currentStyle, entityKey);
                    return void this.update(EditorState.push(editorState, contentState, "insert-characters"));
                }
                mustReset && this.update(EditorState.set(editorState, {
                    nativelyRenderedContent: null,
                    forceSelection: !0
                }));
            }
        }
    };
    module.exports = DraftEditorCompositionHandler;
}, /* 46 */
/***/
function(module, exports) {
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
}, /* 47 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Return the entity key that should be used when inserting text for the
	 * specified target selection, only if the entity is `MUTABLE`. `IMMUTABLE`
	 * and `SEGMENTED` entities should not be used for insertion behavior.
	 */
    function getEntityKeyForSelection(contentState, targetSelection) {
        var entityKey;
        if (targetSelection.isCollapsed()) {
            var key = targetSelection.getAnchorKey(), offset = targetSelection.getAnchorOffset();
            return offset > 0 ? (entityKey = contentState.getBlockForKey(key).getEntityAt(offset - 1), 
            filterKey(entityKey)) : null;
        }
        var startKey = targetSelection.getStartKey(), startOffset = targetSelection.getStartOffset(), startBlock = contentState.getBlockForKey(startKey);
        return entityKey = startOffset === startBlock.getLength() ? null : startBlock.getEntityAt(startOffset), 
        filterKey(entityKey);
    }
    /**
	 * Determine whether an entity key corresponds to a `MUTABLE` entity. If so,
	 * return it. If not, return null.
	 */
    function filterKey(entityKey) {
        if (entityKey) {
            var entity = DraftEntity.get(entityKey);
            return "MUTABLE" === entity.getMutability() ? entityKey : null;
        }
        return null;
    }
    var DraftEntity = __webpack_require__(14);
    module.exports = getEntityKeyForSelection;
}, /* 48 */
/***/
function(module, exports) {
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
    "use strict";
    function isSelectionAtLeafStart(editorState) {
        var selection = editorState.getSelection(), anchorKey = selection.getAnchorKey(), blockTree = editorState.getBlockTree(anchorKey), offset = selection.getStartOffset(), isAtStart = !1;
        return blockTree.some(function(leafSet) {
            return offset === leafSet.get("start") ? (isAtStart = !0, !0) : offset < leafSet.get("end") && leafSet.get("leaves").some(function(leaf) {
                var leafStart = leaf.get("start");
                return offset === leafStart && (isAtStart = !0, !0);
            });
        }), isAtStart;
    }
    module.exports = isSelectionAtLeafStart;
}, /* 49 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    /**
	 * Provide default styling for list items. This way, lists will be styled with
	 * proper counters and indentation even if the caller does not specify
	 * their own styling at all. If more than five levels of nesting are needed,
	 * the necessary CSS classes can be provided via `blockStyleFn` configuration.
	 */
    function getListItemClasses(type, depth, shouldResetCount, direction) {
        return cx({
            "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === type,
            "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === type,
            "public/DraftStyleDefault/reset": shouldResetCount,
            "public/DraftStyleDefault/depth0": 0 === depth,
            "public/DraftStyleDefault/depth1": 1 === depth,
            "public/DraftStyleDefault/depth2": 2 === depth,
            "public/DraftStyleDefault/depth3": 3 === depth,
            "public/DraftStyleDefault/depth4": 4 === depth,
            "public/DraftStyleDefault/listLTR": "LTR" === direction,
            "public/DraftStyleDefault/listRTL": "RTL" === direction
        });
    }
    var _assign = __webpack_require__(15), _extends = _assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, DraftEditorBlock = __webpack_require__(50), DraftOffsetKey = __webpack_require__(66), React = (__webpack_require__(29), 
    __webpack_require__(1)), cx = __webpack_require__(42), joinClasses = __webpack_require__(78), nullthrows = __webpack_require__(39), DraftEditorContents = function(_React$Component) {
        function DraftEditorContents() {
            return _classCallCheck(this, DraftEditorContents), _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }
        return _inherits(DraftEditorContents, _React$Component), DraftEditorContents.prototype.shouldComponentUpdate = function(nextProps) {
            var prevEditorState = this.props.editorState, nextEditorState = nextProps.editorState, prevDirectionMap = prevEditorState.getDirectionMap(), nextDirectionMap = nextEditorState.getDirectionMap();
            // Text direction has changed for one or more blocks. We must re-render.
            if (prevDirectionMap !== nextDirectionMap) return !0;
            var didHaveFocus = prevEditorState.getSelection().getHasFocus(), nowHasFocus = nextEditorState.getSelection().getHasFocus();
            if (didHaveFocus !== nowHasFocus) return !0;
            var nextNativeContent = nextEditorState.getNativelyRenderedContent(), wasComposing = prevEditorState.isInCompositionMode(), nowComposing = nextEditorState.isInCompositionMode();
            // If the state is unchanged or we're currently rendering a natively
            // rendered state, there's nothing new to be done.
            if (prevEditorState === nextEditorState || null !== nextNativeContent && nextEditorState.getCurrentContent() === nextNativeContent || wasComposing && nowComposing) return !1;
            var prevContent = prevEditorState.getCurrentContent(), nextContent = nextEditorState.getCurrentContent(), prevDecorator = prevEditorState.getDecorator(), nextDecorator = nextEditorState.getDecorator();
            return wasComposing !== nowComposing || prevContent !== nextContent || prevDecorator !== nextDecorator || nextEditorState.mustForceSelection();
        }, DraftEditorContents.prototype.render = function() {
            for (var _props = this.props, blockRenderMap = _props.blockRenderMap, blockRendererFn = _props.blockRendererFn, customStyleMap = _props.customStyleMap, customStyleFn = _props.customStyleFn, editorState = _props.editorState, content = editorState.getCurrentContent(), selection = editorState.getSelection(), forceSelection = editorState.mustForceSelection(), decorator = editorState.getDecorator(), directionMap = nullthrows(editorState.getDirectionMap()), blocksAsArray = content.getBlocksAsArray(), processedBlocks = [], currentDepth = null, lastWrapperTemplate = null, ii = 0; ii < blocksAsArray.length; ii++) {
                var _block = blocksAsArray[ii], key = _block.getKey(), blockType = _block.getType(), customRenderer = blockRendererFn(_block), CustomComponent = void 0, customProps = void 0, customEditable = void 0;
                customRenderer && (CustomComponent = customRenderer.component, customProps = customRenderer.props, 
                customEditable = customRenderer.editable);
                var direction = directionMap.get(key), offsetKey = DraftOffsetKey.encode(key, 0, 0), componentProps = {
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
                }, configForType = blockRenderMap.get(blockType), wrapperTemplate = configForType.wrapper, _Element = configForType.element || blockRenderMap.get("unstyled").element, depth = _block.getDepth(), className = this.props.blockStyleFn(_block);
                // List items are special snowflakes, since we handle nesting and
                // counters manually.
                if ("li" === _Element) {
                    var shouldResetCount = lastWrapperTemplate !== wrapperTemplate || null === currentDepth || depth > currentDepth;
                    className = joinClasses(className, getListItemClasses(blockType, depth, shouldResetCount, direction));
                }
                var Component = CustomComponent || DraftEditorBlock, childProps = {
                    className: className,
                    "data-block": !0,
                    "data-editor": this.props.editorKey,
                    "data-offset-key": offsetKey,
                    key: key
                };
                void 0 !== customEditable && (childProps = _extends({}, childProps, {
                    contentEditable: customEditable,
                    suppressContentEditableWarning: !0
                }));
                var child = React.createElement(_Element, childProps, React.createElement(Component, componentProps));
                processedBlocks.push({
                    block: child,
                    wrapperTemplate: wrapperTemplate,
                    key: key,
                    offsetKey: offsetKey
                }), currentDepth = wrapperTemplate ? _block.getDepth() : null, lastWrapperTemplate = wrapperTemplate;
            }
            for (var outputBlocks = [], _ii = 0; _ii < processedBlocks.length; ) {
                var info = processedBlocks[_ii];
                if (info.wrapperTemplate) {
                    var blocks = [];
                    do blocks.push(processedBlocks[_ii].block), _ii++; while (_ii < processedBlocks.length && processedBlocks[_ii].wrapperTemplate === info.wrapperTemplate);
                    var wrapperElement = React.cloneElement(info.wrapperTemplate, {
                        key: info.key + "-wrap",
                        "data-offset-key": info.offsetKey
                    }, blocks);
                    outputBlocks.push(wrapperElement);
                } else outputBlocks.push(info.block), _ii++;
            }
            return React.createElement("div", {
                "data-contents": "true"
            }, outputBlocks);
        }, DraftEditorContents;
    }(React.Component);
    module.exports = DraftEditorContents;
}, /* 50 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    /**
	 * Return whether a block overlaps with either edge of the `SelectionState`.
	 */
    function isBlockOnSelectionEdge(selection, key) {
        return selection.getAnchorKey() === key || selection.getFocusKey() === key;
    }
    var _assign = __webpack_require__(15), _extends = _assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, DraftEditorLeaf = (__webpack_require__(7), __webpack_require__(51)), DraftOffsetKey = __webpack_require__(66), React = __webpack_require__(1), ReactDOM = __webpack_require__(53), Scroll = __webpack_require__(67), Style = (__webpack_require__(33), 
    __webpack_require__(68)), UnicodeBidi = __webpack_require__(37), UnicodeBidiDirection = __webpack_require__(38), cx = __webpack_require__(42), getElementPosition = __webpack_require__(72), getScrollPosition = __webpack_require__(74), getViewportDimensions = __webpack_require__(77), nullthrows = __webpack_require__(39), SCROLL_BUFFER = 10, DraftEditorBlock = function(_React$Component) {
        function DraftEditorBlock() {
            return _classCallCheck(this, DraftEditorBlock), _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }
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
        return _inherits(DraftEditorBlock, _React$Component), DraftEditorBlock.prototype.shouldComponentUpdate = function(nextProps) {
            return this.props.block !== nextProps.block || this.props.tree !== nextProps.tree || this.props.direction !== nextProps.direction || isBlockOnSelectionEdge(nextProps.selection, nextProps.block.getKey()) && nextProps.forceSelection;
        }, DraftEditorBlock.prototype.componentDidMount = function() {
            var selection = this.props.selection, endKey = selection.getEndKey();
            if (selection.getHasFocus() && endKey === this.props.block.getKey()) {
                var scrollDelta, blockNode = ReactDOM.findDOMNode(this), scrollParent = Style.getScrollParent(blockNode), scrollPosition = getScrollPosition(scrollParent);
                if (scrollParent === window) {
                    var nodePosition = getElementPosition(blockNode), nodeBottom = nodePosition.y + nodePosition.height, viewportHeight = getViewportDimensions().height;
                    scrollDelta = nodeBottom - viewportHeight, scrollDelta > 0 && window.scrollTo(scrollPosition.x, scrollPosition.y + scrollDelta + SCROLL_BUFFER);
                } else {
                    var blockBottom = blockNode.offsetHeight + blockNode.offsetTop, scrollBottom = scrollParent.offsetHeight + scrollPosition.y;
                    scrollDelta = blockBottom - scrollBottom, scrollDelta > 0 && Scroll.setTop(scrollParent, Scroll.getTop(scrollParent) + scrollDelta + SCROLL_BUFFER);
                }
            }
        }, DraftEditorBlock.prototype._renderChildren = function() {
            var _this2 = this, block = this.props.block, blockKey = block.getKey(), text = block.getText(), lastLeafSet = this.props.tree.size - 1, hasSelection = isBlockOnSelectionEdge(this.props.selection, blockKey);
            return this.props.tree.map(function(leafSet, ii) {
                var leavesForLeafSet = leafSet.get("leaves"), lastLeaf = leavesForLeafSet.size - 1, leaves = leavesForLeafSet.map(function(leaf, jj) {
                    var offsetKey = DraftOffsetKey.encode(blockKey, ii, jj), start = leaf.get("start"), end = leaf.get("end");
                    return React.createElement(DraftEditorLeaf, {
                        key: offsetKey,
                        offsetKey: offsetKey,
                        blockKey: blockKey,
                        start: start,
                        selection: hasSelection ? _this2.props.selection : void 0,
                        forceSelection: _this2.props.forceSelection,
                        text: text.slice(start, end),
                        styleSet: block.getInlineStyleAt(start),
                        customStyleMap: _this2.props.customStyleMap,
                        customStyleFn: _this2.props.customStyleFn,
                        isLast: ii === lastLeafSet && jj === lastLeaf
                    });
                }).toArray(), decoratorKey = leafSet.get("decoratorKey");
                if (null == decoratorKey) return leaves;
                if (!_this2.props.decorator) return leaves;
                var decorator = nullthrows(_this2.props.decorator), DecoratorComponent = decorator.getComponentForKey(decoratorKey);
                if (!DecoratorComponent) return leaves;
                var decoratorProps = decorator.getPropsForKey(decoratorKey), decoratorOffsetKey = DraftOffsetKey.encode(blockKey, ii, 0), decoratedText = text.slice(leavesForLeafSet.first().get("start"), leavesForLeafSet.last().get("end")), dir = UnicodeBidiDirection.getHTMLDirIfDifferent(UnicodeBidi.getDirection(decoratedText), _this2.props.direction);
                return React.createElement(DecoratorComponent, _extends({}, decoratorProps, {
                    decoratedText: decoratedText,
                    dir: dir,
                    key: decoratorOffsetKey,
                    entityKey: block.getEntityAt(leafSet.get("start")),
                    offsetKey: decoratorOffsetKey
                }), leaves);
            }).toArray();
        }, DraftEditorBlock.prototype.render = function() {
            var _props = this.props, direction = _props.direction, offsetKey = _props.offsetKey, className = cx({
                "public/DraftStyleDefault/block": !0,
                "public/DraftStyleDefault/ltr": "LTR" === direction,
                "public/DraftStyleDefault/rtl": "RTL" === direction
            });
            return React.createElement("div", {
                "data-offset-key": offsetKey,
                className: className
            }, this._renderChildren());
        }, DraftEditorBlock;
    }(React.Component);
    module.exports = DraftEditorBlock;
}, /* 51 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _assign = __webpack_require__(15), DraftEditorTextNode = __webpack_require__(52), React = __webpack_require__(1), ReactDOM = __webpack_require__(53), setDraftEditorSelection = (__webpack_require__(33), 
    __webpack_require__(61)), DraftEditorLeaf = function(_React$Component) {
        function DraftEditorLeaf() {
            return _classCallCheck(this, DraftEditorLeaf), _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
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
        return _inherits(DraftEditorLeaf, _React$Component), DraftEditorLeaf.prototype._setSelection = function() {
            var selection = this.props.selection;
            // If selection state is irrelevant to the parent block, no-op.
            if (null != selection && selection.getHasFocus()) {
                var _props = this.props, blockKey = _props.blockKey, start = _props.start, text = _props.text, end = start + text.length;
                if (selection.hasEdgeWithin(blockKey, start, end)) {
                    // Determine the appropriate target node for selection. If the child
                    // is not a text node, it is a <br /> spacer. In this case, use the
                    // <span> itself as the selection target.
                    var node = ReactDOM.findDOMNode(this), child = node.firstChild, targetNode = void 0;
                    targetNode = child.nodeType === Node.TEXT_NODE ? child : "BR" === child.tagName ? node : child.firstChild, 
                    setDraftEditorSelection(selection, targetNode, blockKey, start, end);
                }
            }
        }, DraftEditorLeaf.prototype.shouldComponentUpdate = function(nextProps) {
            return ReactDOM.findDOMNode(this.refs.leaf).textContent !== nextProps.text || nextProps.styleSet !== this.props.styleSet || nextProps.forceSelection;
        }, DraftEditorLeaf.prototype.componentDidUpdate = function() {
            this._setSelection();
        }, DraftEditorLeaf.prototype.componentDidMount = function() {
            this._setSelection();
        }, DraftEditorLeaf.prototype.render = function() {
            var text = this.props.text;
            // If the leaf is at the end of its block and ends in a soft newline, append
            // an extra line feed character. Browsers collapse trailing newline
            // characters, which leaves the cursor in the wrong place after a
            // shift+enter. The extra character repairs this.
            text.endsWith("\n") && this.props.isLast && (text += "\n");
            var _props2 = this.props, customStyleMap = _props2.customStyleMap, customStyleFn = _props2.customStyleFn, offsetKey = _props2.offsetKey, styleSet = _props2.styleSet, styleObj = styleSet.reduce(function(map, styleName) {
                var mergedStyles = {}, style = customStyleMap[styleName];
                // .trim() is necessary for IE9/10/11 and Edge
                return void 0 !== style && map.textDecoration !== style.textDecoration && (mergedStyles.textDecoration = [ map.textDecoration, style.textDecoration ].join(" ").trim()), 
                _assign(map, style, mergedStyles);
            }, {});
            if (customStyleFn) {
                var newStyles = customStyleFn(styleSet);
                styleObj = _assign(styleObj, newStyles);
            }
            return React.createElement("span", {
                "data-offset-key": offsetKey,
                ref: "leaf",
                style: styleObj
            }, React.createElement(DraftEditorTextNode, null, text));
        }, DraftEditorLeaf;
    }(React.Component);
    module.exports = DraftEditorLeaf;
}, /* 52 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    /**
	 * Check whether the node should be considered a newline.
	 */
    function isNewline(node) {
        return useNewlineChar ? "\n" === node.textContent : "BR" === node.tagName;
    }
    var React = __webpack_require__(1), ReactDOM = __webpack_require__(53), UserAgent = __webpack_require__(54), useNewlineChar = UserAgent.isBrowser("IE <= 11"), NEWLINE_A = useNewlineChar ? React.createElement("span", {
        key: "A",
        "data-text": "true"
    }, "\n") : React.createElement("br", {
        key: "A",
        "data-text": "true"
    }), NEWLINE_B = useNewlineChar ? React.createElement("span", {
        key: "B",
        "data-text": "true"
    }, "\n") : React.createElement("br", {
        key: "B",
        "data-text": "true"
    }), DraftEditorTextNode = function(_React$Component) {
        function DraftEditorTextNode(props) {
            _classCallCheck(this, DraftEditorTextNode);
            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
            return _this._forceFlag = !1, _this;
        }
        return _inherits(DraftEditorTextNode, _React$Component), DraftEditorTextNode.prototype.shouldComponentUpdate = function(nextProps) {
            var node = ReactDOM.findDOMNode(this), shouldBeNewline = "" === nextProps.children;
            return shouldBeNewline ? !isNewline(node) : node.textContent !== nextProps.children;
        }, DraftEditorTextNode.prototype.componentWillUpdate = function() {
            // By flipping this flag, we also keep flipping keys which forces
            // React to remount this node every time it rerenders.
            this._forceFlag = !this._forceFlag;
        }, DraftEditorTextNode.prototype.render = function() {
            return "" === this.props.children ? this._forceFlag ? NEWLINE_A : NEWLINE_B : React.createElement("span", {
                key: this._forceFlag ? "A" : "B",
                "data-text": "true"
            }, this.props.children);
        }, DraftEditorTextNode;
    }(React.Component);
    module.exports = DraftEditorTextNode;
}, /* 53 */
/***/
function(module, exports) {
    module.exports = require("react-dom");
}, /* 54 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
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
        if (name === query) return !0;
        // check for non-matching names
        if (!query.startsWith(name)) return !1;
        // full comparison with version
        var range = query.slice(name.length);
        return !!version && (range = normalizer ? normalizer(range) : range, VersionRange.contains(range, version));
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
        return "Windows" === UserAgentData.platformName ? version.replace(/^\s*NT/, "") : version;
    }
    var UserAgentData = __webpack_require__(55), VersionRange = __webpack_require__(58), mapObject = __webpack_require__(59), memoizeStringOnly = __webpack_require__(60), UserAgent = {
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
        isBrowser: function(query) {
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
        isBrowserArchitecture: function(query) {
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
        isDevice: function(query) {
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
        isEngine: function(query) {
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
        isPlatform: function(query) {
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
        isPlatformArchitecture: function(query) {
            return compare(UserAgentData.platformArchitecture, null, query);
        }
    };
    module.exports = mapObject(UserAgent, memoizeStringOnly);
}, /* 55 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
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
        if (!version) return {
            major: "",
            minor: ""
        };
        var parts = version.split(".");
        return {
            major: parts[0],
            minor: parts[1]
        };
    }
    var UAParser = __webpack_require__(56), UNKNOWN = "Unknown", PLATFORM_MAP = {
        "Mac OS": "Mac OS X"
    }, parser = new UAParser(), results = parser.getResult(), browserVersionData = getBrowserVersion(results.browser.version), uaData = {
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
}, /* 56 */
/***/
function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /**
	 * UAParser.js v0.7.10
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */
    !function(window, undefined) {
        "use strict";
        //////////////
        // Constants
        /////////////
        var LIBVERSION = "0.7.10", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", // deprecated
        MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", util = {
            extend: function(regexes, extensions) {
                for (var i in extensions) "browser cpu device engine os".indexOf(i) !== -1 && extensions[i].length % 2 === 0 && (regexes[i] = extensions[i].concat(regexes[i]));
                return regexes;
            },
            has: function(str1, str2) {
                return "string" == typeof str1 && str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
            },
            lowerize: function(str) {
                return str.toLowerCase();
            },
            major: function(version) {
                return typeof version === STR_TYPE ? version.split(".")[0] : undefined;
            }
        }, mapper = {
            rgx: function() {
                // loop through all regexes maps
                for (var result, j, k, p, q, matches, match, i = 0, args = arguments; i < args.length && !matches; ) {
                    var regex = args[i], // even sequence (0,2,4,..)
                    props = args[i + 1];
                    // odd sequence (1,3,5,..)
                    // construct object barebones
                    if (typeof result === UNDEF_TYPE) {
                        result = {};
                        for (p in props) props.hasOwnProperty(p) && (q = props[p], typeof q === OBJ_TYPE ? result[q[0]] = undefined : result[q] = undefined);
                    }
                    for (// try matching uastring with regexes
                    j = k = 0; j < regex.length && !matches; ) if (matches = regex[j++].exec(this.getUA())) for (p = 0; p < props.length; p++) match = matches[++k], 
                    q = props[p], // check if given property is actually array
                    typeof q === OBJ_TYPE && q.length > 0 ? 2 == q.length ? typeof q[1] == FUNC_TYPE ? // assign modified match
                    result[q[0]] = q[1].call(this, match) : // assign given value, ignore regex match
                    result[q[0]] = q[1] : 3 == q.length ? // check whether function or regex
                    typeof q[1] !== FUNC_TYPE || q[1].exec && q[1].test ? // sanitize match using given regex
                    result[q[0]] = match ? match.replace(q[1], q[2]) : undefined : // call function (usually string mapper)
                    result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined : 4 == q.length && (result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined) : result[q] = match ? match : undefined;
                    i += 2;
                }
                return result;
            },
            str: function(str, map) {
                for (var i in map) // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) if (util.has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
                } else if (util.has(map[i], str)) return i === UNKNOWN ? undefined : i;
                return str;
            }
        }, maps = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        "1.2": "/1",
                        "1.3": "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": [ "SD", "KF" ]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        "2000": "NT 5.0",
                        XP: [ "NT 5.1", "NT 5.2" ],
                        Vista: "NT 6.0",
                        "7": "NT 6.1",
                        "8": "NT 6.2",
                        "8.1": "NT 6.3",
                        "10": [ "NT 6.4", "NT 10.0" ],
                        RT: "ARM"
                    }
                }
            }
        }, regexes = {
            browser: [ [ // Presto based
            /(opera\smini)\/([\w\.-]+)/i, // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i, // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i ], [ NAME, VERSION ], [ /\s(opr)\/([\w\.]+)/i ], [ [ NAME, "Opera" ], VERSION ], [ // Mixed
            /(kindle)\/([\w\.]+)/i, // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i, // Internet Explorer
            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i, // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i ], [ NAME, VERSION ], [ /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i ], [ [ NAME, "IE" ], VERSION ], [ /(edge)\/((\d+)?[\w\.]+)/i ], [ NAME, VERSION ], [ /(yabrowser)\/([\w\.]+)/i ], [ [ NAME, "Yandex" ], VERSION ], [ /(comodo_dragon)\/([\w\.]+)/i ], [ [ NAME, /_/g, " " ], VERSION ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, // Chrome/OmniWeb/Arora/Tizen/Nokia
            /(qqbrowser)[\/\s]?([\w\.]+)/i ], [ NAME, VERSION ], [ /(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i ], [ [ NAME, "UCBrowser" ], VERSION ], [ /(dolfin)\/([\w\.]+)/i ], [ [ NAME, "Dolphin" ], VERSION ], [ /((?:android.+)crmo|crios)\/([\w\.]+)/i ], [ [ NAME, "Chrome" ], VERSION ], [ /XiaoMi\/MiuiBrowser\/([\w\.]+)/i ], [ VERSION, [ NAME, "MIUI Browser" ] ], [ /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i ], [ VERSION, [ NAME, "Android Browser" ] ], [ /FBAV\/([\w\.]+);/i ], [ VERSION, [ NAME, "Facebook" ] ], [ /fxios\/([\w\.-]+)/i ], [ VERSION, [ NAME, "Firefox" ] ], [ /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i ], [ VERSION, [ NAME, "Mobile Safari" ] ], [ /version\/([\w\.]+).+?(mobile\s?safari|safari)/i ], [ VERSION, NAME ], [ /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ NAME, [ VERSION, mapper.str, maps.browser.oldsafari.version ] ], [ /(konqueror)\/([\w\.]+)/i, // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i ], [ NAME, VERSION ], [ // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i ], [ [ NAME, "Netscape" ], VERSION ], [ /(swiftfox)/i, // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, // Mozilla
            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i, // Links
            /(gobrowser)\/?([\w\.]+)*/i, // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i, // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i ], [ NAME, VERSION ] ],
            cpu: [ [ /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ], [ [ ARCHITECTURE, "amd64" ] ], [ /(ia32(?=;))/i ], [ [ ARCHITECTURE, util.lowerize ] ], [ /((?:i[346]|x)86)[;\)]/i ], [ [ ARCHITECTURE, "ia32" ] ], [ // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i ], [ [ ARCHITECTURE, "arm" ] ], [ /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i ], [ [ ARCHITECTURE, /ower/, "", util.lowerize ] ], [ /(sun4\w)[;\)]/i ], [ [ ARCHITECTURE, "sparc" ] ], [ /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [ [ ARCHITECTURE, util.lowerize ] ] ],
            device: [ [ /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i ], [ MODEL, VENDOR, [ TYPE, TABLET ] ], [ /applecoremedia\/[\w\.]+ \((ipad)/ ], [ MODEL, [ VENDOR, "Apple" ], [ TYPE, TABLET ] ], [ /(apple\s{0,1}tv)/i ], [ [ MODEL, "Apple TV" ], [ VENDOR, "Apple" ] ], [ /(archos)\s(gamepad2?)/i, // Archos
            /(hp).+(touchpad)/i, // HP TouchPad
            /(kindle)\/([\w\.]+)/i, // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i, // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i ], [ VENDOR, MODEL, [ TYPE, TABLET ] ], [ /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i ], [ MODEL, [ VENDOR, "Amazon" ], [ TYPE, TABLET ] ], [ /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i ], [ [ MODEL, mapper.str, maps.device.amazon.model ], [ VENDOR, "Amazon" ], [ TYPE, MOBILE ] ], [ /\((ip[honed|\s\w*]+);.+(apple)/i ], [ MODEL, VENDOR, [ TYPE, MOBILE ] ], [ /\((ip[honed|\s\w*]+);/i ], [ MODEL, [ VENDOR, "Apple" ], [ TYPE, MOBILE ] ], [ /(blackberry)[\s-]?(\w+)/i, // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i, // HP iPAQ
            /(asus)-?(\w+)/i ], [ VENDOR, MODEL, [ TYPE, MOBILE ] ], [ /\(bb10;\s(\w+)/i ], [ MODEL, [ VENDOR, "BlackBerry" ], [ TYPE, MOBILE ] ], [ // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i ], [ MODEL, [ VENDOR, "Asus" ], [ TYPE, TABLET ] ], [ /(sony)\s(tablet\s[ps])\sbuild\//i, // Sony
            /(sony)?(?:sgp.+)\sbuild\//i ], [ [ VENDOR, "Sony" ], [ MODEL, "Xperia Tablet" ], [ TYPE, TABLET ] ], [ /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i ], [ [ VENDOR, "Sony" ], [ MODEL, "Xperia Phone" ], [ TYPE, MOBILE ] ], [ /\s(ouya)\s/i, // Ouya
            /(nintendo)\s([wids3u]+)/i ], [ VENDOR, MODEL, [ TYPE, CONSOLE ] ], [ /android.+;\s(shield)\sbuild/i ], [ MODEL, [ VENDOR, "Nvidia" ], [ TYPE, CONSOLE ] ], [ /(playstation\s[34portablevi]+)/i ], [ MODEL, [ VENDOR, "Sony" ], [ TYPE, CONSOLE ] ], [ /(sprint\s(\w+))/i ], [ [ VENDOR, mapper.str, maps.device.sprint.vendor ], [ MODEL, mapper.str, maps.device.sprint.model ], [ TYPE, MOBILE ] ], [ /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i ], [ VENDOR, MODEL, [ TYPE, TABLET ] ], [ /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, // HTC
            /(zte)-(\w+)*/i, // ZTE
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i ], [ VENDOR, [ MODEL, /_/g, " " ], [ TYPE, MOBILE ] ], [ /(nexus\s9)/i ], [ MODEL, [ VENDOR, "HTC" ], [ TYPE, TABLET ] ], [ /[\s\(;](xbox(?:\sone)?)[\s\);]/i ], [ MODEL, [ VENDOR, "Microsoft" ], [ TYPE, CONSOLE ] ], [ /(kin\.[onetw]{3})/i ], [ [ MODEL, /\./g, " " ], [ VENDOR, "Microsoft" ], [ TYPE, MOBILE ] ], [ // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i ], [ MODEL, [ VENDOR, "Motorola" ], [ TYPE, MOBILE ] ], [ /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i ], [ MODEL, [ VENDOR, "Motorola" ], [ TYPE, TABLET ] ], [ /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i ], [ [ VENDOR, "Samsung" ], MODEL, [ TYPE, TABLET ] ], [ // Samsung
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i ], [ [ VENDOR, "Samsung" ], MODEL, [ TYPE, MOBILE ] ], [ /(samsung);smarttv/i ], [ VENDOR, MODEL, [ TYPE, SMARTTV ] ], [ /\(dtv[\);].+(aquos)/i ], [ MODEL, [ VENDOR, "Sharp" ], [ TYPE, SMARTTV ] ], [ /sie-(\w+)*/i ], [ MODEL, [ VENDOR, "Siemens" ], [ TYPE, MOBILE ] ], [ /(maemo|nokia).*(n900|lumia\s\d+)/i, // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i ], [ [ VENDOR, "Nokia" ], MODEL, [ TYPE, MOBILE ] ], [ /android\s3\.[\s\w;-]{10}(a\d{3})/i ], [ MODEL, [ VENDOR, "Acer" ], [ TYPE, TABLET ] ], [ /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i ], [ [ VENDOR, "LG" ], MODEL, [ TYPE, TABLET ] ], [ /(lg) netcast\.tv/i ], [ VENDOR, MODEL, [ TYPE, SMARTTV ] ], [ /(nexus\s[45])/i, // LG
            /lg[e;\s\/-]+(\w+)*/i ], [ MODEL, [ VENDOR, "LG" ], [ TYPE, MOBILE ] ], [ /android.+(ideatab[a-z0-9\-\s]+)/i ], [ MODEL, [ VENDOR, "Lenovo" ], [ TYPE, TABLET ] ], [ /linux;.+((jolla));/i ], [ VENDOR, MODEL, [ TYPE, MOBILE ] ], [ /((pebble))app\/[\d\.]+\s/i ], [ VENDOR, MODEL, [ TYPE, WEARABLE ] ], [ /android.+;\s(glass)\s\d/i ], [ MODEL, [ VENDOR, "Google" ], [ TYPE, WEARABLE ] ], [ /android.+(\w+)\s+build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i ], [ [ MODEL, /_/g, " " ], [ VENDOR, "Xiaomi" ], [ TYPE, MOBILE ] ], [ /\s(tablet)[;\/\s]/i, // Unidentifiable Tablet
            /\s(mobile)[;\/\s]/i ], [ [ TYPE, util.lowerize ], VENDOR, MODEL ] ],
            engine: [ [ /windows.+\sedge\/([\w\.]+)/i ], [ VERSION, [ NAME, "EdgeHTML" ] ], [ /(presto)\/([\w\.]+)/i, // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ NAME, VERSION ], [ /rv\:([\w\.]+).*(gecko)/i ], [ VERSION, NAME ] ],
            os: [ [ // Windows based
            /microsoft\s(windows)\s(vista|xp)/i ], [ NAME, VERSION ], [ /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ NAME, [ VERSION, mapper.str, maps.os.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ NAME, "Windows" ], [ VERSION, mapper.str, maps.os.windows.version ] ], [ // Mobile/Embedded OS
            /\((bb)(10);/i ], [ [ NAME, "BlackBerry" ], VERSION ], [ /(blackberry)\w*\/?([\w\.]+)*/i, // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i, // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i ], [ NAME, VERSION ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i ], [ [ NAME, "Symbian" ], VERSION ], [ /\((series40);/i ], [ NAME ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ NAME, "Firefox OS" ], VERSION ], [ // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i, // Nintendo/Playstation
            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i, // Mint
            /(mageia|vectorlinux)[;\s]/i, // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
            // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i, // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i ], [ NAME, VERSION ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ NAME, "Chromium OS" ], VERSION ], [ // Solaris
            /(sunos)\s?([\w\.]+\d)*/i ], [ [ NAME, "Solaris" ], VERSION ], [ // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i ], [ NAME, VERSION ], [ /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i ], [ [ NAME, "iOS" ], [ VERSION, /_/g, "." ] ], [ /(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i ], [ [ NAME, "Mac OS" ], [ VERSION, /_/g, "." ] ], [ // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, // Solaris
            /(haiku)\s(\w+)/i, // Haiku
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i ], [ NAME, VERSION ] ]
        }, UAParser = function(uastring, extensions) {
            if (!(this instanceof UAParser)) return new UAParser(uastring, extensions).getResult();
            var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY), rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
            return this.getBrowser = function() {
                var browser = mapper.rgx.apply(this, rgxmap.browser);
                return browser.major = util.major(browser.version), browser;
            }, this.getCPU = function() {
                return mapper.rgx.apply(this, rgxmap.cpu);
            }, this.getDevice = function() {
                return mapper.rgx.apply(this, rgxmap.device);
            }, this.getEngine = function() {
                return mapper.rgx.apply(this, rgxmap.engine);
            }, this.getOS = function() {
                return mapper.rgx.apply(this, rgxmap.os);
            }, this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                };
            }, this.getUA = function() {
                return ua;
            }, this.setUA = function(uastring) {
                return ua = uastring, this;
            }, this.setUA(ua), this;
        };
        UAParser.VERSION = LIBVERSION, UAParser.BROWSER = {
            NAME: NAME,
            MAJOR: MAJOR,
            // deprecated
            VERSION: VERSION
        }, UAParser.CPU = {
            ARCHITECTURE: ARCHITECTURE
        }, UAParser.DEVICE = {
            MODEL: MODEL,
            VENDOR: VENDOR,
            TYPE: TYPE,
            CONSOLE: CONSOLE,
            MOBILE: MOBILE,
            SMARTTV: SMARTTV,
            TABLET: TABLET,
            WEARABLE: WEARABLE,
            EMBEDDED: EMBEDDED
        }, UAParser.ENGINE = {
            NAME: NAME,
            VERSION: VERSION
        }, UAParser.OS = {
            NAME: NAME,
            VERSION: VERSION
        }, ///////////
        // Export
        //////////
        // check js environment
        typeof exports !== UNDEF_TYPE ? (// nodejs env
        typeof module !== UNDEF_TYPE && module.exports && (exports = module.exports = UAParser), 
        exports.UAParser = UAParser) : // requirejs env (optional)
        "function" === FUNC_TYPE && __webpack_require__(57) ? (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return UAParser;
        }.call(exports, __webpack_require__, exports, module), !(__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : // browser env
        window.UAParser = UAParser;
        // jQuery/Zepto specific (optional)
        // Note: 
        //   In AMD env the global scope should be kept clean, but jQuery is an exception.
        //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
        //   and we should catch that.
        var $ = window.jQuery || window.Zepto;
        if (typeof $ !== UNDEF_TYPE) {
            var parser = new UAParser();
            $.ua = parser.getResult(), $.ua.get = function() {
                return parser.getUA();
            }, $.ua.set = function(uastring) {
                parser.setUA(uastring);
                var result = parser.getResult();
                for (var prop in result) $.ua[prop] = result[prop];
            };
        }
    }("object" == typeof window ? window : this);
}, /* 57 */
/***/
function(module, exports) {
    /* WEBPACK VAR INJECTION */
    (function(__webpack_amd_options__) {
        module.exports = __webpack_amd_options__;
    }).call(exports, {});
}, /* 58 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
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
        return expressions.length > 1 ? expressions.some(function(range) {
            return VersionRange.contains(range, version);
        }) : (range = expressions[0].trim(), checkRangeExpression(range, version));
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
        if (expressions.length > 0 && expressions.length <= 2 ? void 0 : invariant(!1), 
        1 === expressions.length) return checkSimpleExpression(expressions[0], version);
        var startVersion = expressions[0], endVersion = expressions[1];
        return isSimpleVersion(startVersion) && isSimpleVersion(endVersion) ? void 0 : invariant(!1), 
        checkSimpleExpression(">=" + startVersion, version) && checkSimpleExpression("<=" + endVersion, version);
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
        if (range = range.trim(), "" === range) return !0;
        var versionComponents = version.split(componentRegex), _getModifierAndCompon = getModifierAndComponents(range), modifier = _getModifierAndCompon.modifier, rangeComponents = _getModifierAndCompon.rangeComponents;
        switch (modifier) {
          case "<":
            return checkLessThan(versionComponents, rangeComponents);

          case "<=":
            return checkLessThanOrEqual(versionComponents, rangeComponents);

          case ">=":
            return checkGreaterThanOrEqual(versionComponents, rangeComponents);

          case ">":
            return checkGreaterThan(versionComponents, rangeComponents);

          case "~":
          case "~>":
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
        return result === -1 || 0 === result;
    }
    /**
	 * Checks whether `a` is equal to `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
    function checkEqual(a, b) {
        return 0 === compareComponents(a, b);
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
        return 1 === result || 0 === result;
    }
    /**
	 * Checks whether `a` is greater than `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
    function checkGreaterThan(a, b) {
        return 1 === compareComponents(a, b);
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
        var lowerBound = b.slice(), upperBound = b.slice();
        upperBound.length > 1 && upperBound.pop();
        var lastIndex = upperBound.length - 1, numeric = parseInt(upperBound[lastIndex], 10);
        return isNumber(numeric) && (upperBound[lastIndex] = numeric + 1 + ""), checkGreaterThanOrEqual(a, lowerBound) && checkLessThan(a, upperBound);
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
        var rangeComponents = range.split(componentRegex), matches = rangeComponents[0].match(modifierRegex);
        return matches ? void 0 : invariant(!1), {
            modifier: matches[1],
            rangeComponents: [ matches[2] ].concat(rangeComponents.slice(1))
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
        for (var i = array.length; i < length; i++) array[i] = "0";
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
        a = a.slice(), b = b.slice(), zeroPad(a, b.length);
        // mark "x" and "*" components as equal
        for (var i = 0; i < b.length; i++) {
            var matches = b[i].match(/^[x*]$/i);
            if (matches && (b[i] = a[i] = "0", "*" === matches[0] && i === b.length - 1)) for (var j = i; j < a.length; j++) a[j] = "0";
        }
        return zeroPad(b, a.length), [ a, b ];
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
        var aPrefix = a.match(numericRegex)[1], bPrefix = b.match(numericRegex)[1], aNumeric = parseInt(aPrefix, 10), bNumeric = parseInt(bPrefix, 10);
        return isNumber(aNumeric) && isNumber(bNumeric) && aNumeric !== bNumeric ? compare(aNumeric, bNumeric) : compare(a, b);
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
        return typeof a != typeof b ? invariant(!1) : void 0, a > b ? 1 : a < b ? -1 : 0;
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
        for (var _normalizeVersions = normalizeVersions(a, b), aNormalized = _normalizeVersions[0], bNormalized = _normalizeVersions[1], i = 0; i < bNormalized.length; i++) {
            var result = compareNumeric(aNormalized[i], bNormalized[i]);
            if (result) return result;
        }
        return 0;
    }
    var invariant = __webpack_require__(17), componentRegex = /\./, orRegex = /\|\|/, rangeRegex = /\s+\-\s+/, modifierRegex = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/, numericRegex = /^(\d*)(.*)/, VersionRange = {
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
        contains: function(range, version) {
            return checkOrExpression(range.trim(), version.trim());
        }
    };
    module.exports = VersionRange;
}, /* 59 */
/***/
function(module, exports) {
    /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
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
        if (!object) return null;
        var result = {};
        for (var name in object) hasOwnProperty.call(object, name) && (result[name] = callback.call(context, object[name], name, object));
        return result;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    module.exports = mapObject;
}, /* 60 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Memoizes the return value of a function that accepts one string argument.
	 */
    function memoizeStringOnly(callback) {
        var cache = {};
        return function(string) {
            return cache.hasOwnProperty(string) || (cache[string] = callback.call(this, string)), 
            cache[string];
        };
    }
    module.exports = memoizeStringOnly;
}, /* 61 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(global) {
        /**
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
        "use strict";
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
            if (containsNode(document.documentElement, node)) {
                var selection = global.getSelection(), anchorKey = selectionState.getAnchorKey(), anchorOffset = selectionState.getAnchorOffset(), focusKey = selectionState.getFocusKey(), focusOffset = selectionState.getFocusOffset(), isBackward = selectionState.getIsBackward();
                // IE doesn't support backward selection. Swap key/offset pairs.
                if (!selection.extend && isBackward) {
                    var tempKey = anchorKey, tempOffset = anchorOffset;
                    anchorKey = focusKey, anchorOffset = focusOffset, focusKey = tempKey, focusOffset = tempOffset, 
                    isBackward = !1;
                }
                var hasAnchor = anchorKey === blockKey && nodeStart <= anchorOffset && nodeEnd >= anchorOffset, hasFocus = focusKey === blockKey && nodeStart <= focusOffset && nodeEnd >= focusOffset;
                // If the selection is entirely bound within this node, set the selection
                // and be done.
                if (hasAnchor && hasFocus) return selection.removeAllRanges(), addPointToSelection(selection, node, anchorOffset - nodeStart), 
                void addFocusToSelection(selection, node, focusOffset - nodeStart);
                if (isBackward) {
                    // If this node has the anchor, we may assume that the correct
                    // focus information is already stored on the selection object.
                    // We keep track of it, reset the selection range, and extend it
                    // back to the focus point.
                    if (// If this node has the focus, set the selection range to be a
                    // collapsed range beginning here. Later, when we encounter the anchor,
                    // we'll use this information to extend the selection.
                    hasFocus && (selection.removeAllRanges(), addPointToSelection(selection, node, focusOffset - nodeStart)), 
                    hasAnchor) {
                        var storedFocusNode = selection.focusNode, storedFocusOffset = selection.focusOffset;
                        selection.removeAllRanges(), addPointToSelection(selection, node, anchorOffset - nodeStart), 
                        addFocusToSelection(selection, storedFocusNode, storedFocusOffset);
                    }
                } else // If the anchor is within this node, set the range start.
                hasAnchor && (selection.removeAllRanges(), addPointToSelection(selection, node, anchorOffset - nodeStart)), 
                // If the focus is within this node, we can assume that we have
                // already set the appropriate start range on the selection, and
                // can simply extend the selection.
                hasFocus && addFocusToSelection(selection, node, focusOffset - nodeStart);
            }
        }
        /**
	 * Extend selection towards focus point.
	 */
        function addFocusToSelection(selection, node, offset) {
            if (selection.extend && containsNode(getActiveElement(), node)) // If `extend` is called while another element has focus, an error is
            // thrown. We therefore disable `extend` if the active element is somewhere
            // other than the node we are selecting. This should only occur in Firefox,
            // since it is the only browser to support multiple selections.
            // See https://bugzilla.mozilla.org/show_bug.cgi?id=921444.
            selection.extend(node, offset); else {
                // IE doesn't support extend. This will mean no backward selection.
                // Extract the existing selection range and add focus to it.
                // Additionally, clone the selection range. IE11 throws an
                // InvalidStateError when attempting to access selection properties
                // after the range is detached.
                var range = selection.getRangeAt(0);
                range.setEnd(node, offset), selection.addRange(range.cloneRange());
            }
        }
        function addPointToSelection(selection, node, offset) {
            var range = document.createRange();
            range.setStart(node, offset), selection.addRange(range);
        }
        var containsNode = __webpack_require__(62), getActiveElement = __webpack_require__(65);
        module.exports = setDraftEditorSelection;
    }).call(exports, function() {
        return this;
    }());
}, /* 62 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /*eslint-disable no-bitwise */
    /**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
    function containsNode(outerNode, innerNode) {
        return !(!outerNode || !innerNode) && (outerNode === innerNode || !isTextNode(outerNode) && (isTextNode(innerNode) ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : !!outerNode.compareDocumentPosition && !!(16 & outerNode.compareDocumentPosition(innerNode))));
    }
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
    var isTextNode = __webpack_require__(63);
    module.exports = containsNode;
}, /* 63 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
    function isTextNode(object) {
        return isNode(object) && 3 == object.nodeType;
    }
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
    var isNode = __webpack_require__(64);
    module.exports = isTextNode;
}, /* 64 */
/***/
function(module, exports) {
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
    /**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
    function isNode(object) {
        return !(!object || !("function" == typeof Node ? object instanceof Node : "object" == typeof object && "number" == typeof object.nodeType && "string" == typeof object.nodeName));
    }
    module.exports = isNode;
}, /* 65 */
/***/
function(module, exports) {
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
    /* eslint-disable fb-www/typeof-undefined */
    /**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
    function getActiveElement() {
        if ("undefined" == typeof document) return null;
        try {
            return document.activeElement || document.body;
        } catch (e) {
            return document.body;
        }
    }
    module.exports = getActiveElement;
}, /* 66 */
/***/
function(module, exports) {
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
    "use strict";
    var KEY_DELIMITER = "-", DraftOffsetKey = {
        encode: function(blockKey, decoratorKey, leafKey) {
            return blockKey + KEY_DELIMITER + decoratorKey + KEY_DELIMITER + leafKey;
        },
        decode: function(offsetKey) {
            var _offsetKey$split = offsetKey.split(KEY_DELIMITER), blockKey = _offsetKey$split[0], decoratorKey = _offsetKey$split[1], leafKey = _offsetKey$split[2];
            return {
                blockKey: blockKey,
                decoratorKey: parseInt(decoratorKey, 10),
                leafKey: parseInt(leafKey, 10)
            };
        }
    };
    module.exports = DraftOffsetKey;
}, /* 67 */
/***/
function(module, exports) {
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
        getTop: function(element) {
            var doc = element.ownerDocument;
            // In practice, they will either both have the same value,
            // or one will be zero and the other will be the scroll position
            // of the viewport. So we can use `X || Y` instead of `Math.max(X, Y)`
            return _isViewportScrollElement(element, doc) ? doc.body.scrollTop || doc.documentElement.scrollTop : element.scrollTop;
        },
        /**
	   * @param {DOMElement} element
	   * @param {number} newTop
	   */
        setTop: function(element, newTop) {
            var doc = element.ownerDocument;
            _isViewportScrollElement(element, doc) ? doc.body.scrollTop = doc.documentElement.scrollTop = newTop : element.scrollTop = newTop;
        },
        /**
	   * @param {DOMElement} element
	   * @return {number}
	   */
        getLeft: function(element) {
            var doc = element.ownerDocument;
            return _isViewportScrollElement(element, doc) ? doc.body.scrollLeft || doc.documentElement.scrollLeft : element.scrollLeft;
        },
        /**
	   * @param {DOMElement} element
	   * @param {number} newLeft
	   */
        setLeft: function(element, newLeft) {
            var doc = element.ownerDocument;
            _isViewportScrollElement(element, doc) ? doc.body.scrollLeft = doc.documentElement.scrollLeft = newLeft : element.scrollLeft = newLeft;
        }
    };
    module.exports = Scroll;
}, /* 68 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /**
	 * @param {DOMNode} element [description]
	 * @param {string} name Overflow style property name.
	 * @return {boolean} True if the supplied ndoe is scrollable.
	 */
    function _isNodeScrollable(element, name) {
        var overflow = Style.get(element, name);
        return "auto" === overflow || "scroll" === overflow;
    }
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
    var getStyleProperty = __webpack_require__(69), Style = {
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
        getScrollParent: function(node) {
            if (!node) return null;
            for (;node && node !== document.body; ) {
                if (_isNodeScrollable(node, "overflow") || _isNodeScrollable(node, "overflowY") || _isNodeScrollable(node, "overflowX")) return node;
                node = node.parentNode;
            }
            return window;
        }
    };
    module.exports = Style;
}, /* 69 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function asString(value) {
        return null == value ? value : String(value);
    }
    function getStyleProperty(/*DOMNode*/ node, /*string*/ name) {
        var computedStyle = void 0;
        // W3C Standard
        if (window.getComputedStyle && (// In certain cases such as within an iframe in FF3, this returns null.
        computedStyle = window.getComputedStyle(node, null))) return asString(computedStyle.getPropertyValue(hyphenate(name)));
        // Safari
        if (document.defaultView && document.defaultView.getComputedStyle) {
            // A Safari bug causes this to return null for `display: none` elements.
            if (computedStyle = document.defaultView.getComputedStyle(node, null)) return asString(computedStyle.getPropertyValue(hyphenate(name)));
            if ("display" === name) return "none";
        }
        // Internet Explorer
        // Internet Explorer
        return asString(node.currentStyle ? "float" === name ? node.currentStyle.cssFloat || node.currentStyle.styleFloat : node.currentStyle[camelize(name)] : node.style && node.style[camelize(name)]);
    }
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
    var camelize = __webpack_require__(70), hyphenate = __webpack_require__(71);
    module.exports = getStyleProperty;
}, /* 70 */
/***/
function(module, exports) {
    "use strict";
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
        return string.replace(_hyphenPattern, function(_, character) {
            return character.toUpperCase();
        });
    }
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
    module.exports = camelize;
}, /* 71 */
/***/
function(module, exports) {
    "use strict";
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
        return string.replace(_uppercasePattern, "-$1").toLowerCase();
    }
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
    module.exports = hyphenate;
}, /* 72 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
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
    var getElementRect = __webpack_require__(73);
    module.exports = getElementPosition;
}, /* 73 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
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
        if (!("getBoundingClientRect" in elem && containsNode(docElem, elem))) return {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
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
    var containsNode = __webpack_require__(62);
    module.exports = getElementRect;
}, /* 74 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
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
        scrollable === window && (scrollable = documentScrollElement);
        var scrollPosition = getUnboundedScrollPosition(scrollable), viewport = scrollable === documentScrollElement ? document.documentElement : scrollable, xMax = scrollable.scrollWidth - viewport.clientWidth, yMax = scrollable.scrollHeight - viewport.clientHeight;
        return scrollPosition.x = Math.max(0, Math.min(scrollPosition.x, xMax)), scrollPosition.y = Math.max(0, Math.min(scrollPosition.y, yMax)), 
        scrollPosition;
    }
    var getDocumentScrollElement = __webpack_require__(75), getUnboundedScrollPosition = __webpack_require__(76);
    module.exports = getScrollPosition;
}, /* 75 */
/***/
function(module, exports) {
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
    "use strict";
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
        return doc = doc || document, isWebkit || "CSS1Compat" !== doc.compatMode ? doc.body : doc.documentElement;
    }
    var isWebkit = "undefined" != typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > -1;
    module.exports = getDocumentScrollElement;
}, /* 76 */
/***/
function(module, exports) {
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
    "use strict";
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
        return scrollable === window ? {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        } : {
            x: scrollable.scrollLeft,
            y: scrollable.scrollTop
        };
    }
    module.exports = getUnboundedScrollPosition;
}, /* 77 */
/***/
function(module, exports) {
    "use strict";
    function getViewportWidth() {
        var width = void 0;
        return document.documentElement && (width = document.documentElement.clientWidth), 
        !width && document.body && (width = document.body.clientWidth), width || 0;
    }
    /**
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
        return document.documentElement && (height = document.documentElement.clientHeight), 
        !height && document.body && (height = document.body.clientHeight), height || 0;
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
    getViewportDimensions.withoutScrollbars = function() {
        return {
            width: getViewportWidth(),
            height: getViewportHeight()
        };
    }, module.exports = getViewportDimensions;
}, /* 78 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} className
	 * @return {string}
	 */
    function joinClasses(className) {
        className || (className = "");
        var nextClass = void 0, argLength = arguments.length;
        if (argLength > 1) for (var ii = 1; ii < argLength; ii++) nextClass = arguments[ii], 
        nextClass && (className = (className ? className + " " : "") + nextClass);
        return className;
    }
    module.exports = joinClasses;
}, /* 79 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Get a SelectionState for the supplied mouse event.
	 */
    function getSelectionForEvent(event, editorState) {
        var node = null, offset = null;
        if ("function" == typeof document.caretRangeFromPoint) {
            var dropRange = document.caretRangeFromPoint(event.x, event.y);
            node = dropRange.startContainer, offset = dropRange.startOffset;
        } else {
            if (!event.rangeParent) return null;
            node = event.rangeParent, offset = event.rangeOffset;
        }
        node = nullthrows(node), offset = nullthrows(offset);
        var offsetKey = nullthrows(findAncestorOffsetKey(node));
        return getUpdatedSelectionState(editorState, offsetKey, offset, offsetKey, offset);
    }
    function moveText(editorState, targetSelection) {
        var newContentState = DraftModifier.moveText(editorState.getCurrentContent(), editorState.getSelection(), targetSelection);
        return EditorState.push(editorState, newContentState, "insert-fragment");
    }
    /**
	 * Insert text at a specified selection.
	 */
    function insertTextAtSelection(editorState, selection, text) {
        var newContentState = DraftModifier.insertText(editorState.getCurrentContent(), selection, text, editorState.getCurrentInlineStyle());
        return EditorState.push(editorState, newContentState, "insert-fragment");
    }
    var DataTransfer = __webpack_require__(80), DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), findAncestorOffsetKey = __webpack_require__(83), getTextContentFromFiles = __webpack_require__(85), getUpdatedSelectionState = __webpack_require__(86), nullthrows = __webpack_require__(39), isEventHandled = __webpack_require__(87), DraftEditorDragHandler = {
        /**
	   * Drag originating from input terminated.
	   */
        onDragEnd: function() {
            this.exitCurrentMode();
        },
        /**
	   * Handle data being dropped.
	   */
        onDrop: function(e) {
            var _this = this, data = new DataTransfer(e.nativeEvent.dataTransfer), editorState = this.props.editorState, dropSelection = getSelectionForEvent(e.nativeEvent, editorState);
            if (e.preventDefault(), this.exitCurrentMode(), null != dropSelection) {
                var files = data.getFiles();
                if (files.length > 0) {
                    if (this.props.handleDroppedFiles && isEventHandled(this.props.handleDroppedFiles(dropSelection, files))) return;
                    return void getTextContentFromFiles(files, function(fileText) {
                        fileText && _this.update(insertTextAtSelection(editorState, nullthrows(dropSelection), // flow wtf
                        fileText));
                    });
                }
                var dragType = this._internalDrag ? "internal" : "external";
                if (!this.props.handleDrop || !isEventHandled(this.props.handleDrop(dropSelection, data, dragType))) return this._internalDrag ? void this.update(moveText(editorState, dropSelection)) : void this.update(insertTextAtSelection(editorState, dropSelection, data.getText()));
            }
        }
    };
    module.exports = DraftEditorDragHandler;
}, /* 80 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    /**
	 * If DataTransferItem is a file then return the Blob of data.
	 *
	 * @param {object} item
	 * @return {?blob}
	 */
    function getFileFromDataTransfer(item) {
        if ("file" == item.kind) return item.getAsFile();
    }
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
    var PhotosMimeType = __webpack_require__(81), createArrayFromMixed = __webpack_require__(82), emptyFunction = __webpack_require__(31), CR_LF_REGEX = new RegExp("\r\n", "g"), LF_ONLY = "\n", RICH_TEXT_TYPES = {
        "text/rtf": 1,
        "text/html": 1
    }, DataTransfer = function() {
        /**
	   * @param {object} data
	   */
        function DataTransfer(data) {
            _classCallCheck(this, DataTransfer), this.data = data, // Types could be DOMStringList or array
            this.types = data.types ? createArrayFromMixed(data.types) : [];
        }
        /**
	   * Is this likely to be a rich text data transfer?
	   *
	   * @return {boolean}
	   */
        /**
	   * Get raw text.
	   *
	   * @return {?string}
	   */
        /**
	   * Get HTML paste data
	   *
	   * @return {?string}
	   */
        /**
	   * Is this a link data transfer?
	   *
	   * @return {boolean}
	   */
        /**
	   * Get a link url.
	   *
	   * @return {?string}
	   */
        /**
	   * Is this an image data transfer?
	   *
	   * @return {boolean}
	   */
        /**
	   * Get files.
	   *
	   * @return {array}
	   */
        /**
	   * Are there any files to fetch?
	   *
	   * @return {boolean}
	   */
        return DataTransfer.prototype.isRichText = function() {
            // If HTML is available, treat this data as rich text. This way, we avoid
            // using a pasted image if it is packaged with HTML -- this may occur with
            // pastes from MS Word, for example.  However this is only rich text if
            // there's accompanying text.
            // If HTML is available, treat this data as rich text. This way, we avoid
            // using a pasted image if it is packaged with HTML -- this may occur with
            // pastes from MS Word, for example.  However this is only rich text if
            // there's accompanying text.
            // When an image is copied from a preview window, you end up with two
            // DataTransferItems one of which is a file's metadata as text.  Skip those.
            return !(!this.getHTML() || !this.getText()) || !this.isImage() && this.types.some(function(type) {
                return RICH_TEXT_TYPES[type];
            });
        }, DataTransfer.prototype.getText = function() {
            var text;
            return this.data.getData && (this.types.length ? this.types.indexOf("text/plain") != -1 && (text = this.data.getData("text/plain")) : text = this.data.getData("Text")), 
            text ? text.replace(CR_LF_REGEX, LF_ONLY) : null;
        }, DataTransfer.prototype.getHTML = function() {
            if (this.data.getData) {
                if (!this.types.length) return this.data.getData("Text");
                if (this.types.indexOf("text/html") != -1) return this.data.getData("text/html");
            }
        }, DataTransfer.prototype.isLink = function() {
            return this.types.some(function(type) {
                return type.indexOf("Url") != -1 || type.indexOf("text/uri-list") != -1 || type.indexOf("text/x-moz-url");
            });
        }, DataTransfer.prototype.getLink = function() {
            if (this.data.getData) {
                if (this.types.indexOf("text/x-moz-url") != -1) {
                    var url = this.data.getData("text/x-moz-url").split("\n");
                    return url[0];
                }
                return this.types.indexOf("text/uri-list") != -1 ? this.data.getData("text/uri-list") : this.data.getData("url");
            }
            return null;
        }, DataTransfer.prototype.isImage = function isImage() {
            var isImage = this.types.some(function(type) {
                // Firefox will have a type of application/x-moz-file for images during
                // dragging
                return type.indexOf("application/x-moz-file") != -1;
            });
            if (isImage) return !0;
            for (var items = this.getFiles(), i = 0; i < items.length; i++) {
                var type = items[i].type;
                if (!PhotosMimeType.isImage(type)) return !1;
            }
            return !0;
        }, DataTransfer.prototype.getCount = function() {
            return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null;
        }, DataTransfer.prototype.getFiles = function() {
            return this.data.items ? Array.prototype.slice.call(this.data.items).map(getFileFromDataTransfer).filter(emptyFunction.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : [];
        }, DataTransfer.prototype.hasFiles = function() {
            return this.getFiles().length > 0;
        }, DataTransfer;
    }();
    module.exports = DataTransfer;
}, /* 81 */
/***/
function(module, exports) {
    "use strict";
    function getParts(mimeString) {
        return mimeString.split("/");
    }
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
        isImage: function(mimeString) {
            return "image" === getParts(mimeString)[0];
        },
        isJpeg: function(mimeString) {
            var parts = getParts(mimeString);
            // see http://fburl.com/10972194
            return PhotosMimeType.isImage(mimeString) && ("jpeg" === parts[1] || "pjpeg" === parts[1]);
        }
    };
    module.exports = PhotosMimeType;
}, /* 82 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
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
        // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
        // without method will throw during the slice call and skip straight to the
        // fallback.
        if (// Some browsers builtin objects can report typeof 'function' (e.g. NodeList
        // in old versions of Safari).
        Array.isArray(obj) || "object" != typeof obj && "function" != typeof obj ? invariant(!1) : void 0, 
        "number" != typeof length ? invariant(!1) : void 0, 0 === length || length - 1 in obj ? void 0 : invariant(!1), 
        "function" == typeof obj.callee ? invariant(!1) : void 0, obj.hasOwnProperty) try {
            return Array.prototype.slice.call(obj);
        } catch (e) {}
        for (var ret = Array(length), ii = 0; ii < length; ii++) ret[ii] = obj[ii];
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
        // not null/false
        // arrays are objects, NodeLists are functions in Safari
        // quacks like an array
        // not window
        // no DOM node should be considered an array-like
        // a 'select' element has 'length' and 'item' properties on IE8
        // a real array
        // arguments
        // HTMLCollection/NodeList
        return !!obj && ("object" == typeof obj || "function" == typeof obj) && "length" in obj && !("setInterval" in obj) && "number" != typeof obj.nodeType && (Array.isArray(obj) || "callee" in obj || "item" in obj);
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
        return hasArrayNature(obj) ? Array.isArray(obj) ? obj.slice() : toArray(obj) : [ obj ];
    }
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
    var invariant = __webpack_require__(17);
    module.exports = createArrayFromMixed;
}, /* 83 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Get the key from the node's nearest offset-aware ancestor.
	 */
    function findAncestorOffsetKey(node) {
        for (var searchNode = node; searchNode && searchNode !== document.documentElement; ) {
            var key = getSelectionOffsetKeyForNode(searchNode);
            if (null != key) return key;
            searchNode = searchNode.parentNode;
        }
        return null;
    }
    var getSelectionOffsetKeyForNode = __webpack_require__(84);
    module.exports = findAncestorOffsetKey;
}, /* 84 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Get offset key from a node or it's child nodes. Return the first offset key
	 * found on the DOM tree of given node.
	 */
    function getSelectionOffsetKeyForNode(node) {
        if (node instanceof Element) {
            var offsetKey = node.getAttribute("data-offset-key");
            if (offsetKey) return offsetKey;
            for (var ii = 0; ii < node.childNodes.length; ii++) {
                var childOffsetKey = getSelectionOffsetKeyForNode(node.childNodes[ii]);
                if (childOffsetKey) return childOffsetKey;
            }
        }
        return null;
    }
    module.exports = getSelectionOffsetKeyForNode;
}, /* 85 */
/***/
function(module, exports) {
    /* WEBPACK VAR INJECTION */
    (function(global) {
        /**
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
        "use strict";
        /**
	 * Extract the text content from a file list.
	 */
        function getTextContentFromFiles(files, callback) {
            var readCount = 0, results = [];
            files.forEach(function(/*blob*/ file) {
                readFile(file, function(/*string*/ text) {
                    readCount++, text && results.push(text.slice(0, TEXT_SIZE_UPPER_BOUND)), readCount == files.length && callback(results.join("\r"));
                });
            });
        }
        /**
	 * todo isaac: Do work to turn html/rtf into a content fragment.
	 */
        function readFile(file, callback) {
            if (!global.FileReader || file.type && !(file.type in TEXT_TYPES)) return void callback("");
            if ("" === file.type) {
                var contents = "";
                // Special-case text clippings, which have an empty type but include
                // `.textClipping` in the file name. `readAsText` results in an empty
                // string for text clippings, so we force the file name to serve
                // as the text value for the file.
                return TEXT_CLIPPING_REGEX.test(file.name) && (contents = file.name.replace(TEXT_CLIPPING_REGEX, "")), 
                void callback(contents);
            }
            var reader = new FileReader();
            reader.onload = function() {
                callback(reader.result);
            }, reader.onerror = function() {
                callback("");
            }, reader.readAsText(file);
        }
        var TEXT_CLIPPING_REGEX = /\.textClipping$/, TEXT_TYPES = {
            "text/plain": !0,
            "text/html": !0,
            "text/rtf": !0
        }, TEXT_SIZE_UPPER_BOUND = 5e3;
        module.exports = getTextContentFromFiles;
    }).call(exports, function() {
        return this;
    }());
}, /* 86 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    function getUpdatedSelectionState(editorState, anchorKey, anchorOffset, focusKey, focusOffset) {
        var selection = nullthrows(editorState.getSelection()), anchorPath = DraftOffsetKey.decode(anchorKey), anchorBlockKey = anchorPath.blockKey, anchorLeaf = editorState.getBlockTree(anchorBlockKey).getIn([ anchorPath.decoratorKey, "leaves", anchorPath.leafKey ]), focusPath = DraftOffsetKey.decode(focusKey), focusBlockKey = focusPath.blockKey, focusLeaf = editorState.getBlockTree(focusBlockKey).getIn([ focusPath.decoratorKey, "leaves", focusPath.leafKey ]), anchorLeafStart = anchorLeaf.get("start"), focusLeafStart = focusLeaf.get("start"), anchorBlockOffset = anchorLeaf ? anchorLeafStart + anchorOffset : null, focusBlockOffset = focusLeaf ? focusLeafStart + focusOffset : null, areEqual = selection.getAnchorKey() === anchorBlockKey && selection.getAnchorOffset() === anchorBlockOffset && selection.getFocusKey() === focusBlockKey && selection.getFocusOffset() === focusBlockOffset;
        if (areEqual) return selection;
        var isBackward = !1;
        if (anchorBlockKey === focusBlockKey) {
            var anchorLeafEnd = anchorLeaf.get("end"), focusLeafEnd = focusLeaf.get("end");
            isBackward = focusLeafStart === anchorLeafStart && focusLeafEnd === anchorLeafEnd ? focusOffset < anchorOffset : focusLeafStart < anchorLeafStart;
        } else {
            var startKey = editorState.getCurrentContent().getBlockMap().keySeq().skipUntil(function(v) {
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
    var DraftOffsetKey = __webpack_require__(66), nullthrows = __webpack_require__(39);
    module.exports = getUpdatedSelectionState;
}, /* 87 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Utility method for determining whether or not the value returned
	 * from a handler indicates that it was handled.
	 */
    function isEventHandled(value) {
        return "handled" === value || value === !0;
    }
    module.exports = isEventHandled;
}, /* 88 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var onBeforeInput = __webpack_require__(89), onBlur = __webpack_require__(90), onCompositionStart = __webpack_require__(91), onCopy = __webpack_require__(92), onCut = __webpack_require__(94), onDragOver = __webpack_require__(95), onDragStart = __webpack_require__(96), onFocus = __webpack_require__(97), onInput = __webpack_require__(98), onKeyDown = __webpack_require__(99), onPaste = __webpack_require__(121), onSelect = __webpack_require__(127), DraftEditorEditHandler = {
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
}, /* 89 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function mustPreventDefaultForCharacter(character) {
        return isFirefox && (character == FF_QUICKFIND_CHAR || character == FF_QUICKFIND_LINK_CHAR);
    }
    /**
	 * Replace the current selection with the specified text string, with the
	 * inline style and entity key applied to the newly inserted text.
	 */
    function replaceText(editorState, text, inlineStyle, entityKey) {
        var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), text, inlineStyle, entityKey);
        return EditorState.push(editorState, contentState, "insert-characters");
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
        if (chars) {
            // Allow the top-level component to handle the insertion manually. This is
            // useful when triggering interesting behaviors for a character insertion,
            // Simple examples: replacing a raw text ':)' with a smile emoji or image
            // decorator, or setting a block to be a list item after typing '- ' at the
            // start of the block.
            if (this.props.handleBeforeInput && isEventHandled(this.props.handleBeforeInput(chars))) return void e.preventDefault();
            // If selection is collapsed, conditionally allow native behavior. This
            // reduces re-renders and preserves spellcheck highlighting. If the selection
            // is not collapsed, we will re-render.
            var editorState = this.props.editorState, selection = editorState.getSelection();
            if (!selection.isCollapsed()) return e.preventDefault(), void this.update(replaceText(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())));
            var mayAllowNative = !isSelectionAtLeafStart(editorState), newEditorState = replaceText(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection()));
            if (!mayAllowNative) return e.preventDefault(), void this.update(newEditorState);
            var anchorKey = selection.getAnchorKey(), anchorTree = editorState.getBlockTree(anchorKey), originalFingerprint = BlockTree.getFingerprint(anchorTree), newFingerprint = BlockTree.getFingerprint(newEditorState.getBlockTree(anchorKey));
            mustPreventDefaultForCharacter(chars) || originalFingerprint !== newFingerprint || nullthrows(newEditorState.getDirectionMap()).get(anchorKey) !== nullthrows(editorState.getDirectionMap()).get(anchorKey) ? e.preventDefault() : // The native event is allowed to occur.
            newEditorState = EditorState.set(newEditorState, {
                nativelyRenderedContent: newEditorState.getCurrentContent()
            }), this.update(newEditorState);
        }
    }
    var BlockTree = __webpack_require__(30), DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), UserAgent = __webpack_require__(54), getEntityKeyForSelection = __webpack_require__(47), isSelectionAtLeafStart = __webpack_require__(48), nullthrows = __webpack_require__(39), isEventHandled = __webpack_require__(87), FF_QUICKFIND_CHAR = "'", FF_QUICKFIND_LINK_CHAR = "/", isFirefox = UserAgent.isBrowser("Firefox");
    module.exports = editOnBeforeInput;
}, /* 90 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(global) {
        /**
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
        "use strict";
        function editOnBlur(e) {
            // Webkit has a bug in which blurring a contenteditable by clicking on
            // other active elements will trigger the `blur` event but will not remove
            // the DOM selection from the contenteditable. We therefore force the
            // issue to be certain, checking whether the active element is `body`
            // to force it when blurring occurs within the window (as opposed to
            // clicking to another tab or window).
            isWebKit && getActiveElement() === document.body && global.getSelection().removeAllRanges();
            var editorState = this.props.editorState, currentSelection = editorState.getSelection();
            if (currentSelection.getHasFocus()) {
                var selection = currentSelection.set("hasFocus", !1);
                this.props.onBlur && this.props.onBlur(e), this.update(EditorState.acceptSelection(editorState, selection));
            }
        }
        var EditorState = __webpack_require__(29), UserAgent = __webpack_require__(54), getActiveElement = __webpack_require__(65), isWebKit = UserAgent.isEngine("WebKit");
        module.exports = editOnBlur;
    }).call(exports, function() {
        return this;
    }());
}, /* 91 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * The user has begun using an IME input system. Switching to `composite` mode
	 * allows handling composition input and disables other edit behavior.
	 */
    function editOnCompositionStart() {
        this.setRenderGuard(), this.setMode("composite"), this.update(EditorState.set(this.props.editorState, {
            inCompositionMode: !0
        }));
    }
    var EditorState = __webpack_require__(29);
    module.exports = editOnCompositionStart;
}, /* 92 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * If we have a selection, create a ContentState fragment and store
	 * it in our internal clipboard. Subsequent paste events will use this
	 * fragment if no external clipboard data is supplied.
	 */
    function editOnCopy(e) {
        var editorState = this.props.editorState, selection = editorState.getSelection();
        // No selection, so there's nothing to copy.
        // No selection, so there's nothing to copy.
        return selection.isCollapsed() ? void e.preventDefault() : void this.setClipboard(getFragmentFromSelection(this.props.editorState));
    }
    var getFragmentFromSelection = __webpack_require__(93);
    module.exports = editOnCopy;
}, /* 93 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function getFragmentFromSelection(editorState) {
        var selectionState = editorState.getSelection();
        return selectionState.isCollapsed() ? null : getContentStateFragment(editorState.getCurrentContent(), selectionState);
    }
    var getContentStateFragment = __webpack_require__(20);
    module.exports = getFragmentFromSelection;
}, /* 94 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
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
        var _this = this, editorState = this.props.editorState, selection = editorState.getSelection();
        // No selection, so there's nothing to cut.
        if (selection.isCollapsed()) return void e.preventDefault();
        // Track the current scroll position so that it can be forced back in place
        // after the editor regains control of the DOM.
        var scrollParent = Style.getScrollParent(e.target), _getScrollPosition = getScrollPosition(scrollParent), x = _getScrollPosition.x, y = _getScrollPosition.y, fragment = getFragmentFromSelection(editorState);
        this.setClipboard(fragment), // Set `cut` mode to disable all event handling temporarily.
        this.setRenderGuard(), this.setMode("cut"), // Let native `cut` behavior occur, then recover control.
        setTimeout(function() {
            _this.restoreEditorDOM({
                x: x,
                y: y
            }), _this.removeRenderGuard(), _this.exitCurrentMode(), _this.update(removeFragment(editorState));
        }, 0);
    }
    function removeFragment(editorState) {
        var newContent = DraftModifier.removeRange(editorState.getCurrentContent(), editorState.getSelection(), "forward");
        return EditorState.push(editorState, newContent, "remove-range");
    }
    var DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), Style = __webpack_require__(68), getFragmentFromSelection = __webpack_require__(93), getScrollPosition = __webpack_require__(74);
    module.exports = editOnCut;
}, /* 95 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Drag behavior has begun from outside the editor element.
	 */
    function editOnDragOver(e) {
        this._internalDrag = !1, this.setMode("drag"), e.preventDefault();
    }
    module.exports = editOnDragOver;
}, /* 96 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * A `dragstart` event has begun within the text editor component.
	 */
    function editOnDragStart() {
        this._internalDrag = !0, this.setMode("drag");
    }
    module.exports = editOnDragStart;
}, /* 97 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function editOnFocus(e) {
        var editorState = this.props.editorState, currentSelection = editorState.getSelection();
        if (!currentSelection.getHasFocus()) {
            var selection = currentSelection.set("hasFocus", !0);
            this.props.onFocus && this.props.onFocus(e), // When the tab containing this text editor is hidden and the user does a
            // find-in-page in a _different_ tab, Chrome on Mac likes to forget what the
            // selection was right after sending this focus event and (if you let it)
            // moves the cursor back to the beginning of the editor, so we force the
            // selection here instead of simply accepting it in order to preserve the
            // old cursor position. See https://crbug.com/540004.
            this.update(EditorState.forceSelection(editorState, selection));
        }
    }
    var EditorState = __webpack_require__(29);
    module.exports = editOnFocus;
}, /* 98 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(global) {
        /**
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
        "use strict";
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
            var domSelection = global.getSelection(), anchorNode = domSelection.anchorNode, isCollapsed = domSelection.isCollapsed;
            if (anchorNode.nodeType === Node.TEXT_NODE) {
                var domText = anchorNode.textContent, editorState = this.props.editorState, offsetKey = nullthrows(findAncestorOffsetKey(anchorNode)), _DraftOffsetKey$decod = DraftOffsetKey.decode(offsetKey), blockKey = _DraftOffsetKey$decod.blockKey, decoratorKey = _DraftOffsetKey$decod.decoratorKey, leafKey = _DraftOffsetKey$decod.leafKey, _editorState$getBlock = editorState.getBlockTree(blockKey).getIn([ decoratorKey, "leaves", leafKey ]), start = _editorState$getBlock.start, end = _editorState$getBlock.end, content = editorState.getCurrentContent(), block = content.getBlockForKey(blockKey), modelText = block.getText().slice(start, end);
                // No change -- the DOM is up to date. Nothing to do here.
                if (// Special-case soft newlines here. If the DOM text ends in a soft newline,
                // we will have manually inserted an extra soft newline in DraftEditorLeaf.
                // We want to remove this extra newline for the purpose of our comparison
                // of DOM and model text.
                domText.endsWith(DOUBLE_NEWLINE) && (domText = domText.slice(0, -1)), domText !== modelText) {
                    var anchorOffset, focusOffset, startOffset, endOffset, selection = editorState.getSelection(), targetRange = selection.merge({
                        anchorOffset: start,
                        focusOffset: end,
                        isBackward: !1
                    }), entityKey = block.getEntityAt(start), entity = entityKey && Entity.get(entityKey), entityType = entity && entity.getMutability(), preserveEntity = "MUTABLE" === entityType, changeType = preserveEntity ? "spellcheck-change" : "apply-entity", newContent = DraftModifier.replaceText(content, targetRange, domText, block.getInlineStyleAt(start), preserveEntity ? block.getEntityAt(start) : null);
                    if (isGecko) // Firefox selection does not change while the context menu is open, so
                    // we preserve the anchor and focus values of the DOM selection.
                    anchorOffset = domSelection.anchorOffset, focusOffset = domSelection.focusOffset, 
                    startOffset = start + Math.min(anchorOffset, focusOffset), endOffset = startOffset + Math.abs(anchorOffset - focusOffset), 
                    anchorOffset = startOffset, focusOffset = endOffset; else {
                        // Browsers other than Firefox may adjust DOM selection while the context
                        // menu is open, and Safari autocorrect is prone to providing an inaccurate
                        // DOM selection. Don't trust it. Instead, use our existing SelectionState
                        // and adjust it based on the number of characters changed during the
                        // mutation.
                        var charDelta = domText.length - modelText.length;
                        startOffset = selection.getStartOffset(), endOffset = selection.getEndOffset(), 
                        anchorOffset = isCollapsed ? endOffset + charDelta : startOffset, focusOffset = endOffset + charDelta;
                    }
                    // Segmented entities are completely or partially removed when their
                    // text content changes. For this case we do not want any text to be selected
                    // after the change, so we are not merging the selection.
                    var contentWithAdjustedDOMSelection = newContent.merge({
                        selectionBefore: content.getSelectionAfter(),
                        selectionAfter: selection.merge({
                            anchorOffset: anchorOffset,
                            focusOffset: focusOffset
                        })
                    });
                    this.update(EditorState.push(editorState, contentWithAdjustedDOMSelection, changeType));
                }
            }
        }
        var DraftModifier = __webpack_require__(9), DraftOffsetKey = __webpack_require__(66), EditorState = __webpack_require__(29), Entity = __webpack_require__(14), UserAgent = __webpack_require__(54), findAncestorOffsetKey = __webpack_require__(83), nullthrows = __webpack_require__(39), isGecko = UserAgent.isEngine("Gecko"), DOUBLE_NEWLINE = "\n\n";
        module.exports = editOnInput;
    }).call(exports, function() {
        return this;
    }());
}, /* 99 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Map a `DraftEditorCommand` command value to a corresponding function.
	 */
    function onKeyCommand(command, editorState) {
        switch (command) {
          case "redo":
            return EditorState.redo(editorState);

          case "delete":
            return keyCommandPlainDelete(editorState);

          case "delete-word":
            return keyCommandDeleteWord(editorState);

          case "backspace":
            return keyCommandPlainBackspace(editorState);

          case "backspace-word":
            return keyCommandBackspaceWord(editorState);

          case "backspace-to-start-of-line":
            return keyCommandBackspaceToStartOfLine(editorState);

          case "split-block":
            return keyCommandInsertNewline(editorState);

          case "transpose-characters":
            return keyCommandTransposeCharacters(editorState);

          case "move-selection-to-start-of-block":
            return keyCommandMoveSelectionToStartOfBlock(editorState);

          case "move-selection-to-end-of-block":
            return keyCommandMoveSelectionToEndOfBlock(editorState);

          case "secondary-cut":
            return SecondaryClipboard.cut(editorState);

          case "secondary-paste":
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
        var keyCode = e.which, editorState = this.props.editorState;
        switch (keyCode) {
          case Keys.RETURN:
            // The top-level component may manually handle newline insertion. If
            // no special handling is performed, fall through to command handling.
            if (e.preventDefault(), this.props.handleReturn && isEventHandled(this.props.handleReturn(e))) return;
            break;

          case Keys.ESC:
            return e.preventDefault(), void (this.props.onEscape && this.props.onEscape(e));

          case Keys.TAB:
            return void (this.props.onTab && this.props.onTab(e));

          case Keys.UP:
            return void (this.props.onUpArrow && this.props.onUpArrow(e));

          case Keys.DOWN:
            return void (this.props.onDownArrow && this.props.onDownArrow(e));

          case Keys.SPACE:
            // Handling for OSX where option + space scrolls.
            if (isChrome && isOptionKeyCommand(e)) {
                e.preventDefault();
                // Insert a nbsp into the editor.
                var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), " ");
                return void this.update(EditorState.push(editorState, contentState, "insert-characters"));
            }
        }
        var command = this.props.keyBindingFn(e);
        // If no command is specified, allow keydown event to continue.
        if (command) {
            if ("undo" === command) // Since undo requires some special updating behavior to keep the editor
            // in sync, handle it separately.
            return void keyCommandUndo(e, editorState, this.update);
            // Allow components higher up the tree to handle the command first.
            if (// At this point, we know that we're handling a command of some kind, so
            // we don't want to insert a character following the keydown.
            e.preventDefault(), !this.props.handleKeyCommand || !isEventHandled(this.props.handleKeyCommand(command))) {
                var newState = onKeyCommand(command, editorState);
                newState !== editorState && this.update(newState);
            }
        }
    }
    var DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), KeyBindingUtil = __webpack_require__(100), Keys = __webpack_require__(46), SecondaryClipboard = __webpack_require__(101), UserAgent = __webpack_require__(54), keyCommandBackspaceToStartOfLine = __webpack_require__(102), keyCommandBackspaceWord = __webpack_require__(109), keyCommandDeleteWord = __webpack_require__(112), keyCommandInsertNewline = __webpack_require__(114), keyCommandPlainBackspace = __webpack_require__(115), keyCommandPlainDelete = __webpack_require__(116), keyCommandMoveSelectionToEndOfBlock = __webpack_require__(117), keyCommandMoveSelectionToStartOfBlock = __webpack_require__(118), keyCommandTransposeCharacters = __webpack_require__(119), keyCommandUndo = __webpack_require__(120), isEventHandled = __webpack_require__(87), isOptionKeyCommand = KeyBindingUtil.isOptionKeyCommand, isChrome = UserAgent.isBrowser("Chrome");
    module.exports = editOnKeyDown;
}, /* 100 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var UserAgent = __webpack_require__(54), isOSX = UserAgent.isPlatform("Mac OS X"), KeyBindingUtil = {
        /**
	   * Check whether the ctrlKey modifier is *not* being used in conjunction with
	   * the altKey modifier. If they are combined, the result is an `altGraph`
	   * key modifier, which should not be handled by this set of key bindings.
	   */
        isCtrlKeyCommand: function(e) {
            return !!e.ctrlKey && !e.altKey;
        },
        isOptionKeyCommand: function(e) {
            return isOSX && e.altKey;
        },
        hasCommandModifier: function(e) {
            return isOSX ? !!e.metaKey && !e.altKey : KeyBindingUtil.isCtrlKeyCommand(e);
        }
    };
    module.exports = KeyBindingUtil;
}, /* 101 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), getContentStateFragment = __webpack_require__(20), nullthrows = __webpack_require__(39), clipboard = null, SecondaryClipboard = {
        cut: function(editorState) {
            var content = editorState.getCurrentContent(), selection = editorState.getSelection(), targetRange = null;
            if (selection.isCollapsed()) {
                var anchorKey = selection.getAnchorKey(), blockEnd = content.getBlockForKey(anchorKey).getLength();
                if (blockEnd === selection.getAnchorOffset()) return editorState;
                targetRange = selection.set("focusOffset", blockEnd);
            } else targetRange = selection;
            targetRange = nullthrows(targetRange), clipboard = getContentStateFragment(content, targetRange);
            var afterRemoval = DraftModifier.removeRange(content, targetRange, "forward");
            return afterRemoval === content ? editorState : EditorState.push(editorState, afterRemoval, "remove-range");
        },
        paste: function(editorState) {
            if (!clipboard) return editorState;
            var newContent = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), clipboard);
            return EditorState.push(editorState, newContent, "insert-fragment");
        }
    };
    module.exports = SecondaryClipboard;
}, /* 102 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(global) {
        /**
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
        "use strict";
        function keyCommandBackspaceToStartOfLine(editorState) {
            var afterRemoval = removeTextWithStrategy(editorState, function(strategyState) {
                var selection = strategyState.getSelection();
                if (selection.isCollapsed() && 0 === selection.getAnchorOffset()) return moveSelectionBackward(strategyState, 1);
                var domSelection = global.getSelection(), range = domSelection.getRangeAt(0);
                return range = expandRangeToStartOfLine(range), getDraftEditorSelectionWithNodes(strategyState, null, range.endContainer, range.endOffset, range.startContainer, range.startOffset).selectionState;
            }, "backward");
            return afterRemoval === editorState.getCurrentContent() ? editorState : EditorState.push(editorState, afterRemoval, "remove-range");
        }
        var EditorState = __webpack_require__(29), expandRangeToStartOfLine = __webpack_require__(103), getDraftEditorSelectionWithNodes = __webpack_require__(106), moveSelectionBackward = __webpack_require__(107), removeTextWithStrategy = __webpack_require__(108);
        module.exports = keyCommandBackspaceToStartOfLine;
    }).call(exports, function() {
        return this;
    }());
}, /* 103 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /**
	 * Return the computed line height, in pixels, for the provided element.
	 */
    function getLineHeightPx(element) {
        var computed = getComputedStyle(element), div = document.createElement("div");
        div.style.fontFamily = computed.fontFamily, div.style.fontSize = computed.fontSize, 
        div.style.fontStyle = computed.fontStyle, div.style.fontWeight = computed.fontWeight, 
        div.style.lineHeight = computed.lineHeight, div.style.position = "absolute", div.textContent = "M", 
        // forced layout here
        document.body.appendChild(div);
        var rect = div.getBoundingClientRect();
        return document.body.removeChild(div), rect.height;
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
        for (var minTop = 1 / 0, minBottom = 1 / 0, maxTop = -(1 / 0), maxBottom = -(1 / 0), ii = 0; ii < rects.length; ii++) {
            var rect = rects[ii];
            0 !== rect.width && 1 !== rect.width && (minTop = Math.min(minTop, rect.top), minBottom = Math.min(minBottom, rect.bottom), 
            maxTop = Math.max(maxTop, rect.top), maxBottom = Math.max(maxBottom, rect.bottom));
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
        range.collapsed ? void 0 : invariant(!1), range = range.cloneRange();
        var containingElement = range.startContainer;
        1 !== containingElement.nodeType && (containingElement = containingElement.parentNode);
        var lineHeight = getLineHeightPx(containingElement), bestContainer = range.endContainer, bestOffset = range.endOffset;
        for (range.setStart(range.startContainer, 0); areRectsOnOneLine(getRangeClientRects(range), lineHeight) && (bestContainer = range.startContainer, 
        bestOffset = range.startOffset, bestContainer.parentNode ? void 0 : invariant(!1), 
        range.setStartBefore(bestContainer), 1 !== bestContainer.nodeType || "inline" === getComputedStyle(bestContainer).display); ) ;
        for (// In the above example, range now spans from "<div>" to "under",
        // bestContainer is <div>, and bestOffset is 1 (index of <q> inside <div>)].
        // Picking out which child to recurse into here is a special case since we
        // don't want to check past <q> -- once we find that the final range starts
        // in <span>, we can look at all of its children (and all of their children)
        // to find the break point.
        // At all times, (bestContainer, bestOffset) is the latest single-line start
        // point that we know of.
        var currentContainer = bestContainer, maxIndexToConsider = bestOffset - 1; ;) {
            for (var nodeValue = currentContainer.nodeValue, ii = maxIndexToConsider; ii >= 0; ii--) if (!(null != nodeValue && ii > 0 && UnicodeUtils.isSurrogatePair(nodeValue, ii - 1))) {
                if (range.setStart(currentContainer, ii), !areRectsOnOneLine(getRangeClientRects(range), lineHeight)) break;
                bestContainer = currentContainer, bestOffset = ii;
            }
            if (ii === -1 || 0 === currentContainer.childNodes.length) // If ii === -1, then (bestContainer, bestOffset), which is equal to
            // (currentContainer, 0), was a single-line start point but a start
            // point before currentContainer wasn't, so the line break seems to
            // have occurred immediately after currentContainer's start tag
            //
            // If currentContainer.childNodes.length === 0, we're already at a
            // terminal node (e.g., text node) and should return our current best.
            break;
            currentContainer = currentContainer.childNodes[ii], maxIndexToConsider = getNodeLength(currentContainer);
        }
        return range.setStart(bestContainer, bestOffset), range;
    }
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
    var UnicodeUtils = __webpack_require__(104), getRangeClientRects = __webpack_require__(105), invariant = __webpack_require__(17);
    module.exports = expandRangeToStartOfLine;
}, /* 104 */
/***/
function(module, exports, __webpack_require__) {
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
	 * Unicode-enabled replacesments for basic String functions.
	 *
	 * All the functions in this module assume that the input string is a valid
	 * UTF-16 encoding of a Unicode sequence. If it's not the case, the behavior
	 * will be undefined.
	 *
	 * WARNING: Since this module is typechecks-enforced, you may find new bugs
	 * when replacing normal String functions with ones provided here.
	 */
    "use strict";
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
        if (0 <= index && index < str.length ? void 0 : invariant(!1), index + 1 === str.length) return !1;
        var first = str.charCodeAt(index), second = str.charCodeAt(index + 1);
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
        if (!hasSurrogateUnit(str)) return str.length;
        for (var len = 0, pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) len++;
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
        // Call the native functions if there's no surrogate char
        if (start = start || 0, length = void 0 === length ? 1 / 0 : length || 0, !hasSurrogateUnit(str)) return str.substr(start, length);
        // Obvious cases
        var size = str.length;
        if (size <= 0 || start > size || length <= 0) return "";
        // Find the actual starting position
        var posA = 0;
        if (start > 0) {
            for (;start > 0 && posA < size; start--) posA += getUTF16Length(str, posA);
            if (posA >= size) return "";
        } else if (start < 0) {
            for (posA = size; start < 0 && 0 < posA; start++) posA -= getUTF16Length(str, posA - 1);
            posA < 0 && (posA = 0);
        }
        // Find the actual ending position
        var posB = size;
        if (length < size) for (posB = posA; length > 0 && posB < size; length--) posB += getUTF16Length(str, posB);
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
        start = start || 0, end = void 0 === end ? 1 / 0 : end || 0, start < 0 && (start = 0), 
        end < 0 && (end = 0);
        var length = Math.abs(end - start);
        return start = start < end ? start : end, substr(str, start, length);
    }
    /**
	 * Get a list of Unicode code-points from a String
	 *
	 * @param {string} str        Valid Unicode string
	 * @return {array<number>}    A list of code-points in [0..0x10FFFF]
	 */
    function getCodePoints(str) {
        for (var codePoints = [], pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) codePoints.push(str.codePointAt(pos));
        return codePoints;
    }
    var invariant = __webpack_require__(17), SURROGATE_HIGH_START = 55296, SURROGATE_HIGH_END = 56319, SURROGATE_LOW_START = 56320, SURROGATE_LOW_END = 57343, SURROGATE_UNITS_REGEX = /[\uD800-\uDFFF]/, UnicodeUtils = {
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
}, /* 105 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    // In Chrome, the client rects will include the entire bounds of all nodes that
    // begin (have a start tag) within the selection, even if the selection does
    // not overlap the entire node. To resolve this, we split the range at each
    // start tag and join the client rects together.
    // https://code.google.com/p/chromium/issues/detail?id=324437
    /* eslint-disable consistent-return */
    function getRangeClientRectsChrome(range) {
        for (var tempRange = range.cloneRange(), clientRects = [], ancestor = range.endContainer; null != ancestor; ancestor = ancestor.parentNode) {
            // If we've climbed up to the common ancestor, we can now use the
            // original start point and stop climbing the tree.
            var atCommonAncestor = ancestor === range.commonAncestorContainer;
            atCommonAncestor ? tempRange.setStart(range.startContainer, range.startOffset) : tempRange.setStart(tempRange.endContainer, 0);
            var rects = Array.from(tempRange.getClientRects());
            if (clientRects.push(rects), atCommonAncestor) {
                var _ref;
                return clientRects.reverse(), (_ref = []).concat.apply(_ref, clientRects);
            }
            tempRange.setEndBefore(ancestor);
        }
        invariant(!1);
    }
    var UserAgent = __webpack_require__(54), invariant = __webpack_require__(17), isChrome = UserAgent.isBrowser("Chrome"), getRangeClientRects = isChrome ? getRangeClientRectsChrome : function(range) {
        return Array.from(range.getClientRects());
    };
    module.exports = getRangeClientRects;
}, /* 106 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    /**
	 * Convert the current selection range to an anchor/focus pair of offset keys
	 * and values that can be interpreted by components.
	 */
    function getDraftEditorSelectionWithNodes(editorState, root, anchorNode, anchorOffset, focusNode, focusOffset) {
        var anchorIsTextNode = anchorNode.nodeType === Node.TEXT_NODE, focusIsTextNode = focusNode.nodeType === Node.TEXT_NODE;
        // If the selection range lies only on text nodes, the task is simple.
        // Find the nearest offset-aware elements and use the
        // offset values supplied by the selection range.
        if (anchorIsTextNode && focusIsTextNode) return {
            selectionState: getUpdatedSelectionState(editorState, nullthrows(findAncestorOffsetKey(anchorNode)), anchorOffset, nullthrows(findAncestorOffsetKey(focusNode)), focusOffset),
            needsRecovery: !1
        };
        var anchorPoint = null, focusPoint = null, needsRecovery = !0;
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
        // If the selection is collapsed on an empty block, don't force recovery.
        // This way, on arrow key selection changes, the browser can move the
        // cursor from a non-zero offset on one block, through empty blocks,
        // to a matching non-zero offset on other text blocks.
        return anchorIsTextNode ? (anchorPoint = {
            key: nullthrows(findAncestorOffsetKey(anchorNode)),
            offset: anchorOffset
        }, focusPoint = getPointForNonTextNode(root, focusNode, focusOffset)) : focusIsTextNode ? (focusPoint = {
            key: nullthrows(findAncestorOffsetKey(focusNode)),
            offset: focusOffset
        }, anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset)) : (anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset), 
        focusPoint = getPointForNonTextNode(root, focusNode, focusOffset), anchorNode === focusNode && anchorOffset === focusOffset && (needsRecovery = !!anchorNode.firstChild && "BR" !== anchorNode.firstChild.nodeName)), 
        {
            selectionState: getUpdatedSelectionState(editorState, anchorPoint.key, anchorPoint.offset, focusPoint.key, focusPoint.offset),
            needsRecovery: needsRecovery
        };
    }
    /**
	 * Identify the first leaf descendant for the given node.
	 */
    function getFirstLeaf(node) {
        for (;node.firstChild && getSelectionOffsetKeyForNode(node.firstChild); ) node = node.firstChild;
        return node;
    }
    /**
	 * Identify the last leaf descendant for the given node.
	 */
    function getLastLeaf(node) {
        for (;node.lastChild && getSelectionOffsetKeyForNode(node.lastChild); ) node = node.lastChild;
        return node;
    }
    function getPointForNonTextNode(editorRoot, startNode, childOffset) {
        var node = startNode, offsetKey = findAncestorOffsetKey(node);
        // If the child offset is zero and we have an offset key, we're done.
        // If there's no offset key because the entire editor is selected,
        // find the leftmost ("first") leaf in the tree and use that as the offset
        // key.
        if (null != offsetKey || editorRoot && (editorRoot === node || editorRoot.firstChild === node) ? void 0 : invariant(!1), 
        // If the editorRoot is the selection, step downward into the content
        // wrapper.
        editorRoot === node && (node = node.firstChild, node instanceof Element && "true" === node.getAttribute("data-contents") ? void 0 : invariant(!1), 
        childOffset > 0 && (childOffset = node.childNodes.length)), 0 === childOffset) {
            var key = null;
            if (null != offsetKey) key = offsetKey; else {
                var firstLeaf = getFirstLeaf(node);
                key = nullthrows(getSelectionOffsetKeyForNode(firstLeaf));
            }
            return {
                key: key,
                offset: 0
            };
        }
        var nodeBeforeCursor = node.childNodes[childOffset - 1], leafKey = null, textLength = null;
        if (getSelectionOffsetKeyForNode(nodeBeforeCursor)) {
            // Otherwise, we'll look at the child to the left of the cursor and find
            // the last leaf node in its subtree.
            var lastLeaf = getLastLeaf(nodeBeforeCursor);
            leafKey = nullthrows(getSelectionOffsetKeyForNode(lastLeaf)), textLength = getTextContentLength(lastLeaf);
        } else // Our target node may be a leaf or a text node, in which case we're
        // already where we want to be and can just use the child's length as
        // our offset.
        leafKey = nullthrows(offsetKey), textLength = getTextContentLength(nodeBeforeCursor);
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
        return "\n" === textContent ? 0 : textContent.length;
    }
    var findAncestorOffsetKey = __webpack_require__(83), getSelectionOffsetKeyForNode = __webpack_require__(84), getUpdatedSelectionState = __webpack_require__(86), invariant = __webpack_require__(17), nullthrows = __webpack_require__(39);
    module.exports = getDraftEditorSelectionWithNodes;
}, /* 107 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Given a collapsed selection, move the focus `maxDistance` backward within
	 * the selected block. If the selection will go beyond the start of the block,
	 * move focus to the end of the previous block, but no further.
	 *
	 * This function is not Unicode-aware, so surrogate pairs will be treated
	 * as having length 2.
	 */
    function moveSelectionBackward(editorState, maxDistance) {
        var selection = editorState.getSelection(), content = editorState.getCurrentContent(), key = selection.getStartKey(), offset = selection.getStartOffset(), focusKey = key, focusOffset = 0;
        if (maxDistance > offset) {
            var keyBefore = content.getKeyBefore(key);
            if (null == keyBefore) focusKey = key; else {
                focusKey = keyBefore;
                var blockBefore = content.getBlockForKey(keyBefore);
                focusOffset = blockBefore.getText().length;
            }
        } else focusOffset = offset - maxDistance;
        return selection.merge({
            focusKey: focusKey,
            focusOffset: focusOffset,
            isBackward: !0
        });
    }
    module.exports = moveSelectionBackward;
}, /* 108 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * For a collapsed selection state, remove text based on the specified strategy.
	 * If the selection state is not collapsed, remove the entire selected range.
	 */
    function removeTextWithStrategy(editorState, strategy, direction) {
        var selection = editorState.getSelection(), content = editorState.getCurrentContent(), target = selection;
        if (selection.isCollapsed()) {
            if ("forward" === direction) {
                if (editorState.isSelectionAtEndOfContent()) return content;
            } else if (editorState.isSelectionAtStartOfContent()) return content;
            if (target = strategy(editorState), target === selection) return content;
        }
        return DraftModifier.removeRange(content, target, direction);
    }
    var DraftModifier = __webpack_require__(9);
    module.exports = removeTextWithStrategy;
}, /* 109 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Delete the word that is left of the cursor, as well as any spaces or
	 * punctuation after the word.
	 */
    function keyCommandBackspaceWord(editorState) {
        var afterRemoval = removeTextWithStrategy(editorState, function(strategyState) {
            var selection = strategyState.getSelection(), offset = selection.getStartOffset();
            // If there are no words before the cursor, remove the preceding newline.
            if (0 === offset) return moveSelectionBackward(strategyState, 1);
            var key = selection.getStartKey(), content = strategyState.getCurrentContent(), text = content.getBlockForKey(key).getText().slice(0, offset), toRemove = DraftRemovableWord.getBackward(text);
            return moveSelectionBackward(strategyState, toRemove.length || 1);
        }, "backward");
        return afterRemoval === editorState.getCurrentContent() ? editorState : EditorState.push(editorState, afterRemoval, "remove-range");
    }
    var DraftRemovableWord = __webpack_require__(110), EditorState = __webpack_require__(29), moveSelectionBackward = __webpack_require__(107), removeTextWithStrategy = __webpack_require__(108);
    module.exports = keyCommandBackspaceWord;
}, /* 110 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function getRemovableWord(text, isBackward) {
        var matches = isBackward ? BACKSPACE_REGEX.exec(text) : DELETE_REGEX.exec(text);
        return matches ? matches[0] : text;
    }
    var TokenizeUtil = __webpack_require__(111), punctuation = TokenizeUtil.getPunctuation(), CHAMELEON_CHARS = "['‘’]", WHITESPACE_AND_PUNCTUATION = "\\s|(?![_])" + punctuation, DELETE_STRING = "^(?:" + WHITESPACE_AND_PUNCTUATION + ")*(?:" + CHAMELEON_CHARS + "|(?!" + WHITESPACE_AND_PUNCTUATION + ").)*(?:(?!" + WHITESPACE_AND_PUNCTUATION + ").)", DELETE_REGEX = new RegExp(DELETE_STRING), BACKSPACE_STRING = "(?:(?!" + WHITESPACE_AND_PUNCTUATION + ").)(?:" + CHAMELEON_CHARS + "|(?!" + WHITESPACE_AND_PUNCTUATION + ").)*(?:" + WHITESPACE_AND_PUNCTUATION + ")*$", BACKSPACE_REGEX = new RegExp(BACKSPACE_STRING), DraftRemovableWord = {
        getBackward: function(text) {
            return getRemovableWord(text, !0);
        },
        getForward: function(text) {
            return getRemovableWord(text, !1);
        }
    };
    module.exports = DraftRemovableWord;
}, /* 111 */
/***/
function(module, exports) {
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
    "use strict";
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
    var PUNCTUATION = "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]";
    module.exports = {
        getPunctuation: function() {
            return PUNCTUATION;
        }
    };
}, /* 112 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Delete the word that is right of the cursor, as well as any spaces or
	 * punctuation before the word.
	 */
    function keyCommandDeleteWord(editorState) {
        var afterRemoval = removeTextWithStrategy(editorState, function(strategyState) {
            var selection = strategyState.getSelection(), offset = selection.getStartOffset(), key = selection.getStartKey(), content = strategyState.getCurrentContent(), text = content.getBlockForKey(key).getText().slice(offset), toRemove = DraftRemovableWord.getForward(text);
            // If there are no words in front of the cursor, remove the newline.
            return moveSelectionForward(strategyState, toRemove.length || 1);
        }, "forward");
        return afterRemoval === editorState.getCurrentContent() ? editorState : EditorState.push(editorState, afterRemoval, "remove-range");
    }
    var DraftRemovableWord = __webpack_require__(110), EditorState = __webpack_require__(29), moveSelectionForward = __webpack_require__(113), removeTextWithStrategy = __webpack_require__(108);
    module.exports = keyCommandDeleteWord;
}, /* 113 */
/***/
function(module, exports) {
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
    "use strict";
    /**
	 * Given a collapsed selection, move the focus `maxDistance` forward within
	 * the selected block. If the selection will go beyond the end of the block,
	 * move focus to the start of the next block, but no further.
	 *
	 * This function is not Unicode-aware, so surrogate pairs will be treated
	 * as having length 2.
	 */
    function moveSelectionForward(editorState, maxDistance) {
        var focusOffset, selection = editorState.getSelection(), key = selection.getStartKey(), offset = selection.getStartOffset(), content = editorState.getCurrentContent(), focusKey = key, block = content.getBlockForKey(key);
        return maxDistance > block.getText().length - offset ? (focusKey = content.getKeyAfter(key), 
        focusOffset = 0) : focusOffset = offset + maxDistance, selection.merge({
            focusKey: focusKey,
            focusOffset: focusOffset
        });
    }
    module.exports = moveSelectionForward;
}, /* 114 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function keyCommandInsertNewline(editorState) {
        var contentState = DraftModifier.splitBlock(editorState.getCurrentContent(), editorState.getSelection());
        return EditorState.push(editorState, contentState, "split-block");
    }
    var DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29);
    module.exports = keyCommandInsertNewline;
}, /* 115 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Remove the selected range. If the cursor is collapsed, remove the preceding
	 * character. This operation is Unicode-aware, so removing a single character
	 * will remove a surrogate pair properly as well.
	 */
    function keyCommandPlainBackspace(editorState) {
        var afterRemoval = removeTextWithStrategy(editorState, function(strategyState) {
            var selection = strategyState.getSelection(), content = strategyState.getCurrentContent(), key = selection.getAnchorKey(), offset = selection.getAnchorOffset(), charBehind = content.getBlockForKey(key).getText()[offset - 1];
            return moveSelectionBackward(strategyState, charBehind ? UnicodeUtils.getUTF16Length(charBehind, 0) : 1);
        }, "backward");
        if (afterRemoval === editorState.getCurrentContent()) return editorState;
        var selection = editorState.getSelection();
        return EditorState.push(editorState, afterRemoval.set("selectionBefore", selection), selection.isCollapsed() ? "backspace-character" : "remove-range");
    }
    var EditorState = __webpack_require__(29), UnicodeUtils = __webpack_require__(104), moveSelectionBackward = __webpack_require__(107), removeTextWithStrategy = __webpack_require__(108);
    module.exports = keyCommandPlainBackspace;
}, /* 116 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Remove the selected range. If the cursor is collapsed, remove the following
	 * character. This operation is Unicode-aware, so removing a single character
	 * will remove a surrogate pair properly as well.
	 */
    function keyCommandPlainDelete(editorState) {
        var afterRemoval = removeTextWithStrategy(editorState, function(strategyState) {
            var selection = strategyState.getSelection(), content = strategyState.getCurrentContent(), key = selection.getAnchorKey(), offset = selection.getAnchorOffset(), charAhead = content.getBlockForKey(key).getText()[offset];
            return moveSelectionForward(strategyState, charAhead ? UnicodeUtils.getUTF16Length(charAhead, 0) : 1);
        }, "forward");
        if (afterRemoval === editorState.getCurrentContent()) return editorState;
        var selection = editorState.getSelection();
        return EditorState.push(editorState, afterRemoval.set("selectionBefore", selection), selection.isCollapsed() ? "delete-character" : "remove-range");
    }
    var EditorState = __webpack_require__(29), UnicodeUtils = __webpack_require__(104), moveSelectionForward = __webpack_require__(113), removeTextWithStrategy = __webpack_require__(108);
    module.exports = keyCommandPlainDelete;
}, /* 117 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * See comment for `moveSelectionToStartOfBlock`.
	 */
    function keyCommandMoveSelectionToEndOfBlock(editorState) {
        var selection = editorState.getSelection(), endKey = selection.getEndKey(), content = editorState.getCurrentContent(), textLength = content.getBlockForKey(endKey).getLength();
        return EditorState.set(editorState, {
            selection: selection.merge({
                anchorKey: endKey,
                anchorOffset: textLength,
                focusKey: endKey,
                focusOffset: textLength,
                isBackward: !1
            }),
            forceSelection: !0
        });
    }
    var EditorState = __webpack_require__(29);
    module.exports = keyCommandMoveSelectionToEndOfBlock;
}, /* 118 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Collapse selection at the start of the first selected block. This is used
	 * for Firefox versions that attempt to navigate forward/backward instead of
	 * moving the cursor. Other browsers are able to move the cursor natively.
	 */
    function keyCommandMoveSelectionToStartOfBlock(editorState) {
        var selection = editorState.getSelection(), startKey = selection.getStartKey();
        return EditorState.set(editorState, {
            selection: selection.merge({
                anchorKey: startKey,
                anchorOffset: 0,
                focusKey: startKey,
                focusOffset: 0,
                isBackward: !1
            }),
            forceSelection: !0
        });
    }
    var EditorState = __webpack_require__(29);
    module.exports = keyCommandMoveSelectionToStartOfBlock;
}, /* 119 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Transpose the characters on either side of a collapsed cursor, or
	 * if the cursor is at the end of the block, transpose the last two
	 * characters.
	 */
    function keyCommandTransposeCharacters(editorState) {
        var selection = editorState.getSelection();
        if (!selection.isCollapsed()) return editorState;
        var offset = selection.getAnchorOffset();
        if (0 === offset) return editorState;
        var blockKey = selection.getAnchorKey(), content = editorState.getCurrentContent(), block = content.getBlockForKey(blockKey), length = block.getLength();
        // Nothing to transpose if there aren't two characters.
        if (length <= 1) return editorState;
        var removalRange, finalSelection;
        offset === length ? (// The cursor is at the end of the block. Swap the last two characters.
        removalRange = selection.set("anchorOffset", offset - 1), finalSelection = selection) : (removalRange = selection.set("focusOffset", offset + 1), 
        finalSelection = removalRange.set("anchorOffset", offset + 1));
        // Extract the character to move as a fragment. This preserves its
        // styling and entity, if any.
        var movedFragment = getContentStateFragment(content, removalRange), afterRemoval = DraftModifier.removeRange(content, removalRange, "backward"), selectionAfter = afterRemoval.getSelectionAfter(), targetOffset = selectionAfter.getAnchorOffset() - 1, targetRange = selectionAfter.merge({
            anchorOffset: targetOffset,
            focusOffset: targetOffset
        }), afterInsert = DraftModifier.replaceWithFragment(afterRemoval, targetRange, movedFragment), newEditorState = EditorState.push(editorState, afterInsert, "insert-fragment");
        return EditorState.acceptSelection(newEditorState, finalSelection);
    }
    var DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), getContentStateFragment = __webpack_require__(20);
    module.exports = keyCommandTransposeCharacters;
}, /* 120 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function keyCommandUndo(e, editorState, updateFn) {
        var undoneState = EditorState.undo(editorState);
        // If the last change to occur was a spellcheck change, allow the undo
        // event to fall through to the browser. This allows the browser to record
        // the unwanted change, which should soon lead it to learn not to suggest
        // the correction again.
        if ("spellcheck-change" === editorState.getLastChangeType()) {
            var nativelyRenderedContent = undoneState.getCurrentContent();
            return void updateFn(EditorState.set(undoneState, {
                nativelyRenderedContent: nativelyRenderedContent
            }));
        }
        // Otheriwse, manage the undo behavior manually.
        // Trigger a re-render with the current content state to ensure that the
        // component tree has up-to-date props for comparison.
        // Wait to ensure that the re-render has occurred before performing
        // the undo action.
        return e.preventDefault(), editorState.getNativelyRenderedContent() ? (updateFn(EditorState.set(editorState, {
            nativelyRenderedContent: null
        })), void setTimeout(function() {
            updateFn(undoneState);
        }, 0)) : void updateFn(undoneState);
    }
    var EditorState = __webpack_require__(29);
    module.exports = keyCommandUndo;
}, /* 121 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Paste content.
	 */
    function editOnPaste(e) {
        var _this = this;
        e.preventDefault();
        var data = new DataTransfer(e.clipboardData);
        // Get files, unless this is likely to be a string the user wants inline.
        if (!data.isRichText()) {
            var files = data.getFiles(), defaultFileText = data.getText();
            if (files.length > 0) {
                // Allow customized paste handling for images, etc. Otherwise, fall
                // through to insert text contents into the editor.
                if (this.props.handlePastedFiles && isEventHandled(this.props.handlePastedFiles(files))) return;
                return void getTextContentFromFiles(files, function(/*string*/ fileText) {
                    if (fileText = fileText || defaultFileText) {
                        var editorState = _this.props.editorState, blocks = splitTextIntoTextBlocks(fileText), character = CharacterMetadata.create({
                            style: editorState.getCurrentInlineStyle(),
                            entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
                        }), text = DraftPasteProcessor.processText(blocks, character), fragment = BlockMapBuilder.createFromArray(text), withInsertedText = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);
                        _this.update(EditorState.push(editorState, withInsertedText, "insert-fragment"));
                    }
                });
            }
        }
        var textBlocks = [], text = data.getText(), html = data.getHTML();
        if (!this.props.handlePastedText || !isEventHandled(this.props.handlePastedText(text, html))) {
            if (text && (textBlocks = splitTextIntoTextBlocks(text)), !this.props.stripPastedStyles) {
                // If the text from the paste event is rich content that matches what we
                // already have on the internal clipboard, assume that we should just use
                // the clipboard fragment for the paste. This will allow us to preserve
                // styling and entities, if any are present. Note that newlines are
                // stripped during comparison -- this is because copy/paste within the
                // editor in Firefox and IE will not include empty lines. The resulting
                // paste will preserve the newlines correctly.
                var internalClipboard = this.getClipboard();
                if (data.isRichText() && internalClipboard) {
                    if (// If the editorKey is present in the pasted HTML, it should be safe to
                    // assume this is an internal paste.
                    html.indexOf(this.getEditorKey()) !== -1 || // The copy may have been made within a single block, in which case the
                    // editor key won't be part of the paste. In this case, just check
                    // whether the pasted text matches the internal clipboard.
                    1 === textBlocks.length && 1 === internalClipboard.size && internalClipboard.first().getText() === text) return void this.update(insertFragment(this.props.editorState, internalClipboard));
                } else if (internalClipboard && data.types.includes("com.apple.webarchive") && !data.types.includes("text/html") && areTextBlocksAndClipboardEqual(textBlocks, internalClipboard)) // Safari does not properly store text/html in some cases.
                // Use the internalClipboard if present and equal to what is on
                // the clipboard. See https://bugs.webkit.org/show_bug.cgi?id=19893.
                return void this.update(insertFragment(this.props.editorState, internalClipboard));
                // If there is html paste data, try to parse that.
                if (html) {
                    var htmlFragment = DraftPasteProcessor.processHTML(html, this.props.blockRenderMap);
                    if (htmlFragment) {
                        var htmlMap = BlockMapBuilder.createFromArray(htmlFragment);
                        return void this.update(insertFragment(this.props.editorState, htmlMap));
                    }
                }
                // Otherwise, create a new fragment from our pasted text. Also
                // empty the internal clipboard, since it's no longer valid.
                this.setClipboard(null);
            }
            if (textBlocks) {
                var editorState = this.props.editorState, character = CharacterMetadata.create({
                    style: editorState.getCurrentInlineStyle(),
                    entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
                }), textFragment = DraftPasteProcessor.processText(textBlocks, character), textMap = BlockMapBuilder.createFromArray(textFragment);
                this.update(insertFragment(this.props.editorState, textMap));
            }
        }
    }
    function insertFragment(editorState, fragment) {
        var newContent = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);
        return EditorState.push(editorState, newContent, "insert-fragment");
    }
    function areTextBlocksAndClipboardEqual(textBlocks, blockMap) {
        return textBlocks.length === blockMap.size && blockMap.valueSeq().every(function(block, ii) {
            return block.getText() === textBlocks[ii];
        });
    }
    var BlockMapBuilder = __webpack_require__(4), CharacterMetadata = __webpack_require__(6), DataTransfer = __webpack_require__(80), DraftModifier = __webpack_require__(9), DraftPasteProcessor = __webpack_require__(122), EditorState = __webpack_require__(29), getEntityKeyForSelection = __webpack_require__(47), getTextContentFromFiles = __webpack_require__(85), splitTextIntoTextBlocks = __webpack_require__(126), isEventHandled = __webpack_require__(87);
    module.exports = editOnPaste;
}, /* 122 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var ContentBlock = (__webpack_require__(6), __webpack_require__(7)), Immutable = __webpack_require__(5), convertFromHTMLtoContentBlocks = __webpack_require__(123), generateRandomKey = __webpack_require__(21), getSafeBodyFromHTML = __webpack_require__(125), sanitizeDraftText = __webpack_require__(34), List = Immutable.List, Repeat = Immutable.Repeat, DraftPasteProcessor = {
        processHTML: function(html, blockRenderMap) {
            return convertFromHTMLtoContentBlocks(html, getSafeBodyFromHTML, blockRenderMap);
        },
        processText: function(textBlocks, character) {
            return textBlocks.map(function(textLine) {
                return textLine = sanitizeDraftText(textLine), new ContentBlock({
                    key: generateRandomKey(),
                    type: "unstyled",
                    text: textLine,
                    characterList: List(Repeat(character, textLine.length))
                });
            });
        }
    };
    module.exports = DraftPasteProcessor;
}, /* 123 */
/***/
function(module, exports, __webpack_require__) {
    /**
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
    "use strict";
    function getEmptyChunk() {
        return {
            text: "",
            inlines: [],
            entities: [],
            blocks: []
        };
    }
    function getWhitespaceChunk(inEntity) {
        var entities = new Array(1);
        return inEntity && (entities[0] = inEntity), {
            text: SPACE,
            inlines: [ OrderedSet() ],
            entities: entities,
            blocks: []
        };
    }
    function getSoftNewlineChunk() {
        return {
            text: "\n",
            inlines: [ OrderedSet() ],
            entities: new Array(1),
            blocks: []
        };
    }
    function getBlockDividerChunk(block, depth) {
        return {
            text: "\r",
            inlines: [ OrderedSet() ],
            entities: new Array(1),
            blocks: [ {
                type: block,
                depth: Math.max(0, Math.min(MAX_DEPTH, depth))
            } ]
        };
    }
    function getListBlockType(tag, lastList) {
        return "li" === tag ? "ol" === lastList ? "ordered-list-item" : "unordered-list-item" : null;
    }
    function getBlockMapSupportedTags(blockRenderMap) {
        var unstyledElement = blockRenderMap.get("unstyled").element;
        return blockRenderMap.map(function(config) {
            return config.element;
        }).valueSeq().toSet().filter(function(tag) {
            return tag && tag !== unstyledElement;
        }).toArray().sort();
    }
    // custom element conversions
    function getMultiMatchedType(tag, lastList, multiMatchExtractor) {
        for (var ii = 0; ii < multiMatchExtractor.length; ii++) {
            var matchType = multiMatchExtractor[ii](tag, lastList);
            if (matchType) return matchType;
        }
        return null;
    }
    function getBlockTypeForTag(tag, lastList, blockRenderMap) {
        var matchedTypes = blockRenderMap.filter(function(config) {
            return config.element === tag || config.wrapper === tag;
        }).keySeq().toSet().toArray().sort();
        // if we dont have any matched type, return unstyled
        // if we have one matched type return it
        // if we have multi matched types use the multi-match function to gather type
        switch (matchedTypes.length) {
          case 0:
            return "unstyled";

          case 1:
            return matchedTypes[0];

          default:
            return getMultiMatchedType(tag, lastList, [ getListBlockType ]) || "unstyled";
        }
    }
    function processInlineTag(tag, node, currentStyle) {
        var styleToCheck = inlineTags[tag];
        return styleToCheck ? currentStyle = currentStyle.add(styleToCheck).toOrderedSet() : node instanceof HTMLElement && !function() {
            var htmlElement = node;
            currentStyle = currentStyle.withMutations(function(style) {
                var fontWeight = htmlElement.style.fontWeight, fontStyle = htmlElement.style.fontStyle, textDecoration = htmlElement.style.textDecoration;
                boldValues.indexOf(fontWeight) >= 0 ? style.add("BOLD") : notBoldValues.indexOf(fontWeight) >= 0 && style.remove("BOLD"), 
                "italic" === fontStyle ? style.add("ITALIC") : "normal" === fontStyle && style.remove("ITALIC"), 
                "underline" === textDecoration && style.add("UNDERLINE"), "line-through" === textDecoration && style.add("STRIKETHROUGH"), 
                "none" === textDecoration && (style.remove("UNDERLINE"), style.remove("STRIKETHROUGH"));
            }).toOrderedSet();
        }(), currentStyle;
    }
    function joinChunks(A, B) {
        // Sometimes two blocks will touch in the DOM and we need to strip the
        // extra delimiter to preserve niceness.
        var lastInA = A.text.slice(-1), firstInB = B.text.slice(0, 1);
        // Kill whitespace after blocks
        if ("\r" === lastInA && "\r" === firstInB && (A.text = A.text.slice(0, -1), A.inlines.pop(), 
        A.entities.pop(), A.blocks.pop()), "\r" === lastInA) {
            if (B.text === SPACE || "\n" === B.text) return A;
            firstInB !== SPACE && "\n" !== firstInB || (B.text = B.text.slice(1), B.inlines.shift(), 
            B.entities.shift());
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
        return blockTags.some(function(tag) {
            return html.indexOf("<" + tag) !== -1;
        });
    }
    function hasValidLinkText(link) {
        link instanceof HTMLAnchorElement ? void 0 : invariant(!1);
        var protocol = link.protocol;
        return "http:" === protocol || "https:" === protocol || "mailto:" === protocol;
    }
    function genFragment(node, inlineStyle, lastList, inBlock, blockTags, depth, blockRenderMap, inEntity) {
        var nodeName = node.nodeName.toLowerCase(), newBlock = !1, nextBlockType = "unstyled", lastLastBlock = lastBlock;
        // Base Case
        if ("#text" === nodeName) {
            var text = node.textContent;
            // Can't use empty string because MSWord
            // save the last block so we can use it later
            return "" === text.trim() && "pre" !== inBlock ? getWhitespaceChunk(inEntity) : ("pre" !== inBlock && (text = text.replace(REGEX_LF, SPACE)), 
            lastBlock = nodeName, {
                text: text,
                inlines: Array(text.length).fill(inlineStyle),
                entities: Array(text.length).fill(inEntity),
                blocks: []
            });
        }
        // BR tags
        if (// save the last block so we can use it later
        lastBlock = nodeName, "br" === nodeName) return "br" !== lastLastBlock || inBlock && "unstyled" !== getBlockTypeForTag(inBlock, lastList, blockRenderMap) ? getSoftNewlineChunk() : getBlockDividerChunk("unstyled", depth);
        var chunk = getEmptyChunk(), newChunk = null;
        // Inline tags
        inlineStyle = processInlineTag(nodeName, node, inlineStyle), // Handle lists
        "ul" !== nodeName && "ol" !== nodeName || (lastList && (depth += 1), lastList = nodeName), 
        // Block Tags
        inBlock || blockTags.indexOf(nodeName) === -1 ? lastList && "li" === inBlock && "li" === nodeName && (chunk = getBlockDividerChunk(getBlockTypeForTag(nodeName, lastList, blockRenderMap), depth), 
        inBlock = nodeName, newBlock = !0, nextBlockType = "ul" === lastList ? "unordered-list-item" : "ordered-list-item") : (chunk = getBlockDividerChunk(getBlockTypeForTag(nodeName, lastList, blockRenderMap), depth), 
        inBlock = nodeName, newBlock = !0);
        // Recurse through children
        var child = node.firstChild;
        null != child && (nodeName = child.nodeName.toLowerCase());
        for (var entityId = null; child; ) {
            child instanceof HTMLAnchorElement && child.href && hasValidLinkText(child) ? !function() {
                var anchor = child, entityConfig = {};
                anchorAttr.forEach(function(attr) {
                    var anchorAttribute = anchor.getAttribute(attr);
                    anchorAttribute && (entityConfig[attr] = anchorAttribute);
                }), entityConfig.url = new URI(anchor.href).toString(), entityId = DraftEntity.create("LINK", "MUTABLE", entityConfig);
            }() : entityId = void 0, newChunk = genFragment(child, inlineStyle, lastList, inBlock, blockTags, depth, blockRenderMap, entityId || inEntity), 
            chunk = joinChunks(chunk, newChunk);
            var sibling = child.nextSibling;
            // Put in a newline to break up blocks inside blocks
            sibling && blockTags.indexOf(nodeName) >= 0 && inBlock && (chunk = joinChunks(chunk, getSoftNewlineChunk())), 
            sibling && (nodeName = sibling.nodeName.toLowerCase()), child = sibling;
        }
        return newBlock && (chunk = joinChunks(chunk, getBlockDividerChunk(nextBlockType, depth))), 
        chunk;
    }
    function getChunkForHTML(html, DOMBuilder, blockRenderMap) {
        html = html.trim().replace(REGEX_CR, "").replace(REGEX_NBSP, SPACE).replace(REGEX_CARRIAGE, "").replace(REGEX_ZWS, "");
        var supportedBlockTags = getBlockMapSupportedTags(blockRenderMap), safeBody = DOMBuilder(html);
        if (!safeBody) return null;
        lastBlock = null;
        // Sometimes we aren't dealing with content that contains nice semantic
        // tags. In this case, use divs to separate everything out into paragraphs
        // and hope for the best.
        var workingBlocks = containsSemanticBlockMarkup(html, supportedBlockTags) ? supportedBlockTags : [ "div" ], chunk = genFragment(safeBody, OrderedSet(), "ul", null, workingBlocks, -1, blockRenderMap);
        // join with previous block to prevent weirdness on paste
        // Kill block delimiter at the end
        // If we saw no block tags, put an unstyled one in
        // Sometimes we start with text that isn't in a block, which is then
        // followed by blocks. Need to fix up the blocks to add in
        // an unstyled block for this content
        return 0 === chunk.text.indexOf("\r") && (chunk = {
            text: chunk.text.slice(1),
            inlines: chunk.inlines.slice(1),
            entities: chunk.entities.slice(1),
            blocks: chunk.blocks
        }), "\r" === chunk.text.slice(-1) && (chunk.text = chunk.text.slice(0, -1), chunk.inlines = chunk.inlines.slice(0, -1), 
        chunk.entities = chunk.entities.slice(0, -1), chunk.blocks.pop()), 0 === chunk.blocks.length && chunk.blocks.push({
            type: "unstyled",
            depth: 0
        }), chunk.text.split("\r").length === chunk.blocks.length + 1 && chunk.blocks.unshift({
            type: "unstyled",
            depth: 0
        }), chunk;
    }
    function convertFromHTMLtoContentBlocks(html) {
        var DOMBuilder = arguments.length <= 1 || void 0 === arguments[1] ? getSafeBodyFromHTML : arguments[1], blockRenderMap = arguments.length <= 2 || void 0 === arguments[2] ? DefaultDraftBlockRenderMap : arguments[2], chunk = getChunkForHTML(html, DOMBuilder, blockRenderMap);
        if (null == chunk) return null;
        var start = 0;
        return chunk.text.split("\r").map(function(textBlock, ii) {
            // Make absolutely certain that our text is acceptable.
            textBlock = sanitizeDraftText(textBlock);
            var end = start + textBlock.length, inlines = nullthrows(chunk).inlines.slice(start, end), entities = nullthrows(chunk).entities.slice(start, end), characterList = List(inlines.map(function(style, ii) {
                var data = {
                    style: style,
                    entity: null
                };
                return entities[ii] && (data.entity = entities[ii]), CharacterMetadata.create(data);
            }));
            return start = end + 1, new ContentBlock({
                key: generateRandomKey(),
                type: nullthrows(chunk).blocks[ii].type,
                depth: nullthrows(chunk).blocks[ii].depth,
                text: textBlock,
                characterList: characterList
            });
        });
    }
    var lastBlock, CharacterMetadata = __webpack_require__(6), ContentBlock = __webpack_require__(7), DefaultDraftBlockRenderMap = __webpack_require__(41), DraftEntity = __webpack_require__(14), Immutable = __webpack_require__(5), URI = __webpack_require__(124), generateRandomKey = __webpack_require__(21), getSafeBodyFromHTML = __webpack_require__(125), invariant = __webpack_require__(17), nullthrows = __webpack_require__(39), sanitizeDraftText = __webpack_require__(34), List = Immutable.List, OrderedSet = Immutable.OrderedSet, NBSP = "&nbsp;", SPACE = " ", MAX_DEPTH = 4, REGEX_CR = new RegExp("\r", "g"), REGEX_LF = new RegExp("\n", "g"), REGEX_NBSP = new RegExp(NBSP, "g"), REGEX_CARRIAGE = new RegExp("&#13;?", "g"), REGEX_ZWS = new RegExp("&#8203;?", "g"), boldValues = [ "bold", "bolder", "500", "600", "700", "800", "900" ], notBoldValues = [ "light", "lighter", "100", "200", "300", "400" ], inlineTags = {
        b: "BOLD",
        code: "CODE",
        del: "STRIKETHROUGH",
        em: "ITALIC",
        i: "ITALIC",
        s: "STRIKETHROUGH",
        strike: "STRIKETHROUGH",
        strong: "BOLD",
        u: "UNDERLINE"
    }, anchorAttr = [ "className", "href", "rel", "target", "title" ];
    module.exports = convertFromHTMLtoContentBlocks;
}, /* 124 */
/***/
function(module, exports) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var URI = function() {
        function URI(uri) {
            _classCallCheck(this, URI), this._uri = uri;
        }
        return URI.prototype.toString = function() {
            return this._uri;
        }, URI;
    }();
    module.exports = URI;
}, /* 125 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    // Provides a dom node that will not execute scripts
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation.createHTMLDocument
    // https://developer.mozilla.org/en-US/Add-ons/Code_snippets/HTML_to_DOM
    function getSafeBodyFromHTML(html) {
        var doc, root = null;
        // Provides a safe context
        return !isOldIE && document.implementation && document.implementation.createHTMLDocument && (doc = document.implementation.createHTMLDocument("foo"), 
        doc.documentElement.innerHTML = html, root = doc.getElementsByTagName("body")[0]), 
        root;
    }
    var UserAgent = __webpack_require__(54), isOldIE = UserAgent.isBrowser("IE <= 9");
    module.exports = getSafeBodyFromHTML;
}, /* 126 */
/***/
function(module, exports) {
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
    "use strict";
    function splitTextIntoTextBlocks(text) {
        return text.split(NEWLINE_REGEX);
    }
    var NEWLINE_REGEX = /\r\n?|\n/g;
    module.exports = splitTextIntoTextBlocks;
}, /* 127 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function editOnSelect() {
        if (!this._blockSelectEvents) {
            var editorState = this.props.editorState, documentSelection = getDraftEditorSelection(editorState, ReactDOM.findDOMNode(this.refs.editorContainer).firstChild), updatedSelectionState = documentSelection.selectionState;
            updatedSelectionState !== editorState.getSelection() && (editorState = documentSelection.needsRecovery ? EditorState.forceSelection(editorState, updatedSelectionState) : EditorState.acceptSelection(editorState, updatedSelectionState), 
            this.update(editorState));
        }
    }
    var EditorState = __webpack_require__(29), ReactDOM = __webpack_require__(53), getDraftEditorSelection = __webpack_require__(128);
    module.exports = editOnSelect;
}, /* 128 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(global) {
        /**
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
        "use strict";
        /**
	 * Convert the current selection range to an anchor/focus pair of offset keys
	 * and values that can be interpreted by components.
	 */
        function getDraftEditorSelection(editorState, root) {
            var selection = global.getSelection();
            // No active selection.
            // No active selection.
            return 0 === selection.rangeCount ? {
                selectionState: editorState.getSelection().set("hasFocus", !1),
                needsRecovery: !1
            } : getDraftEditorSelectionWithNodes(editorState, root, selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
        }
        var getDraftEditorSelectionWithNodes = __webpack_require__(106);
        module.exports = getDraftEditorSelection;
    }).call(exports, function() {
        return this;
    }());
}, /* 129 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var React = __webpack_require__(1), cx = __webpack_require__(42), DraftEditorPlaceholder = function(_React$Component) {
        function DraftEditorPlaceholder() {
            return _classCallCheck(this, DraftEditorPlaceholder), _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }
        return _inherits(DraftEditorPlaceholder, _React$Component), DraftEditorPlaceholder.prototype.shouldComponentUpdate = function(nextProps) {
            return this.props.text !== nextProps.text || this.props.editorState.getSelection().getHasFocus() !== nextProps.editorState.getSelection().getHasFocus();
        }, DraftEditorPlaceholder.prototype.render = function() {
            var hasFocus = this.props.editorState.getSelection().getHasFocus(), className = cx({
                "public/DraftEditorPlaceholder/root": !0,
                "public/DraftEditorPlaceholder/hasFocus": hasFocus
            });
            return React.createElement("div", {
                className: className
            }, React.createElement("div", {
                className: cx("public/DraftEditorPlaceholder/inner"),
                id: this.props.accessibilityID
            }, this.props.text));
        }, DraftEditorPlaceholder;
    }(React.Component);
    module.exports = DraftEditorPlaceholder;
}, /* 130 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function shouldRemoveWord(e) {
        return isOSX && e.altKey || isCtrlKeyCommand(e);
    }
    /**
	 * Get the appropriate undo/redo command for a Z key command.
	 */
    function getZCommand(e) {
        return hasCommandModifier(e) ? e.shiftKey ? "redo" : "undo" : null;
    }
    function getDeleteCommand(e) {
        // Allow default "cut" behavior for Windows on Shift + Delete.
        // Allow default "cut" behavior for Windows on Shift + Delete.
        return isWindows && e.shiftKey ? null : shouldRemoveWord(e) ? "delete-word" : "delete";
    }
    function getBackspaceCommand(e) {
        return hasCommandModifier(e) && isOSX ? "backspace-to-start-of-line" : shouldRemoveWord(e) ? "backspace-word" : "backspace";
    }
    /**
	 * Retrieve a bound key command for the given event.
	 */
    function getDefaultKeyBinding(e) {
        switch (e.keyCode) {
          case 66:
            // B
            return hasCommandModifier(e) ? "bold" : null;

          case 68:
            // D
            return isCtrlKeyCommand(e) ? "delete" : null;

          case 72:
            // H
            return isCtrlKeyCommand(e) ? "backspace" : null;

          case 73:
            // I
            return hasCommandModifier(e) ? "italic" : null;

          case 74:
            // J
            return hasCommandModifier(e) ? "code" : null;

          case 75:
            // K
            return !isWindows && isCtrlKeyCommand(e) ? "secondary-cut" : null;

          case 77:
            // M
            return isCtrlKeyCommand(e) ? "split-block" : null;

          case 79:
            // O
            return isCtrlKeyCommand(e) ? "split-block" : null;

          case 84:
            // T
            return isOSX && isCtrlKeyCommand(e) ? "transpose-characters" : null;

          case 85:
            // U
            return hasCommandModifier(e) ? "underline" : null;

          case 87:
            // W
            return isOSX && isCtrlKeyCommand(e) ? "backspace-word" : null;

          case 89:
            // Y
            // Y
            return isCtrlKeyCommand(e) ? isWindows ? "redo" : "secondary-paste" : null;

          case 90:
            // Z
            return getZCommand(e) || null;

          case Keys.RETURN:
            return "split-block";

          case Keys.DELETE:
            return getDeleteCommand(e);

          case Keys.BACKSPACE:
            return getBackspaceCommand(e);

          // LEFT/RIGHT handlers serve as a workaround for a Firefox bug.
            case Keys.LEFT:
            return shouldFixFirefoxMovement && hasCommandModifier(e) ? "move-selection-to-start-of-block" : null;

          case Keys.RIGHT:
            return shouldFixFirefoxMovement && hasCommandModifier(e) ? "move-selection-to-end-of-block" : null;

          default:
            return null;
        }
    }
    var KeyBindingUtil = __webpack_require__(100), Keys = __webpack_require__(46), UserAgent = __webpack_require__(54), isOSX = UserAgent.isPlatform("Mac OS X"), isWindows = UserAgent.isPlatform("Windows"), shouldFixFirefoxMovement = isOSX && UserAgent.isBrowser("Firefox < 29"), hasCommandModifier = KeyBindingUtil.hasCommandModifier, isCtrlKeyCommand = KeyBindingUtil.isCtrlKeyCommand;
    module.exports = getDefaultKeyBinding;
}, /* 131 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    var DraftEntity = __webpack_require__(14), DraftModifier = __webpack_require__(9), EditorState = __webpack_require__(29), adjustBlockDepthForContentState = (__webpack_require__(33), 
    __webpack_require__(132)), nullthrows = __webpack_require__(39), RichTextEditorUtil = {
        currentBlockContainsLink: function(editorState) {
            var selection = editorState.getSelection();
            return editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey()).getCharacterList().slice(selection.getStartOffset(), selection.getEndOffset()).some(function(v) {
                var entity = v.getEntity();
                return !!entity && "LINK" === DraftEntity.get(entity).getType();
            });
        },
        getCurrentBlockType: function(editorState) {
            var selection = editorState.getSelection();
            return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
        },
        getDataObjectForLinkURL: function(uri) {
            return {
                url: uri.toString()
            };
        },
        handleKeyCommand: function(editorState, command) {
            switch (command) {
              case "bold":
                return RichTextEditorUtil.toggleInlineStyle(editorState, "BOLD");

              case "italic":
                return RichTextEditorUtil.toggleInlineStyle(editorState, "ITALIC");

              case "underline":
                return RichTextEditorUtil.toggleInlineStyle(editorState, "UNDERLINE");

              case "code":
                return RichTextEditorUtil.toggleCode(editorState);

              case "backspace":
              case "backspace-word":
              case "backspace-to-start-of-line":
                return RichTextEditorUtil.onBackspace(editorState);

              case "delete":
              case "delete-word":
              case "delete-to-end-of-block":
                return RichTextEditorUtil.onDelete(editorState);

              default:
                return null;
            }
        },
        insertSoftNewline: function(editorState) {
            var contentState = DraftModifier.insertText(editorState.getCurrentContent(), editorState.getSelection(), "\n", editorState.getCurrentInlineStyle(), null), newEditorState = EditorState.push(editorState, contentState, "insert-characters");
            return EditorState.forceSelection(newEditorState, contentState.getSelectionAfter());
        },
        /**
	   * For collapsed selections at the start of styled blocks, backspace should
	   * just remove the existing style.
	   */
        onBackspace: function(editorState) {
            var selection = editorState.getSelection();
            if (!selection.isCollapsed() || selection.getAnchorOffset() || selection.getFocusOffset()) return null;
            // First, try to remove a preceding atomic block.
            var content = editorState.getCurrentContent(), startKey = selection.getStartKey(), blockBefore = content.getBlockBefore(startKey);
            if (blockBefore && "atomic" === blockBefore.getType()) {
                var atomicBlockTarget = selection.merge({
                    anchorKey: blockBefore.getKey(),
                    anchorOffset: 0
                }), asCurrentStyle = DraftModifier.setBlockType(content, atomicBlockTarget, content.getBlockForKey(startKey).getType()), withoutAtomicBlock = DraftModifier.removeRange(asCurrentStyle, atomicBlockTarget, "backward");
                if (withoutAtomicBlock !== content) return EditorState.push(editorState, withoutAtomicBlock, "remove-range");
            }
            // If that doesn't succeed, try to remove the current block style.
            var withoutBlockStyle = RichTextEditorUtil.tryToRemoveBlockStyle(editorState);
            return withoutBlockStyle ? EditorState.push(editorState, withoutBlockStyle, "change-block-type") : null;
        },
        onDelete: function(editorState) {
            var selection = editorState.getSelection();
            if (!selection.isCollapsed()) return null;
            var content = editorState.getCurrentContent(), startKey = selection.getStartKey(), block = content.getBlockForKey(startKey), length = block.getLength();
            // The cursor is somewhere within the text. Behave normally.
            if (selection.getStartOffset() < length) return null;
            var blockAfter = content.getBlockAfter(startKey);
            if (!blockAfter || "atomic" !== blockAfter.getType()) return null;
            var atomicBlockTarget = selection.merge({
                focusKey: blockAfter.getKey(),
                focusOffset: blockAfter.getLength()
            }), withoutAtomicBlock = DraftModifier.removeRange(content, atomicBlockTarget, "forward");
            return withoutAtomicBlock !== content ? EditorState.push(editorState, withoutAtomicBlock, "remove-range") : null;
        },
        onTab: function(event, editorState, maxDepth) {
            var selection = editorState.getSelection(), key = selection.getAnchorKey();
            if (key !== selection.getFocusKey()) return editorState;
            var content = editorState.getCurrentContent(), block = content.getBlockForKey(key), type = block.getType();
            if ("unordered-list-item" !== type && "ordered-list-item" !== type) return editorState;
            event.preventDefault();
            // Only allow indenting one level beyond the block above, and only if
            // the block above is a list item as well.
            var blockAbove = content.getBlockBefore(key);
            if (!blockAbove) return editorState;
            var typeAbove = blockAbove.getType();
            if ("unordered-list-item" !== typeAbove && "ordered-list-item" !== typeAbove) return editorState;
            var depth = block.getDepth();
            if (!event.shiftKey && depth === maxDepth) return editorState;
            maxDepth = Math.min(blockAbove.getDepth() + 1, maxDepth);
            var withAdjustment = adjustBlockDepthForContentState(content, selection, event.shiftKey ? -1 : 1, maxDepth);
            return EditorState.push(editorState, withAdjustment, "adjust-depth");
        },
        toggleBlockType: function(editorState, blockType) {
            var selection = editorState.getSelection(), startKey = selection.getStartKey(), endKey = selection.getEndKey(), content = editorState.getCurrentContent(), target = selection;
            // Triple-click can lead to a selection that includes offset 0 of the
            // following block. The `SelectionState` for this case is accurate, but
            // we should avoid toggling block type for the trailing block because it
            // is a confusing interaction.
            if (startKey !== endKey && 0 === selection.getEndOffset()) {
                var blockBefore = nullthrows(content.getBlockBefore(endKey));
                endKey = blockBefore.getKey(), target = target.merge({
                    anchorKey: startKey,
                    anchorOffset: selection.getStartOffset(),
                    focusKey: endKey,
                    focusOffset: blockBefore.getLength(),
                    isBackward: !1
                });
            }
            var hasAtomicBlock = content.getBlockMap().skipWhile(function(_, k) {
                return k !== startKey;
            }).reverse().skipWhile(function(_, k) {
                return k !== endKey;
            }).some(function(v) {
                return "atomic" === v.getType();
            });
            if (hasAtomicBlock) return editorState;
            var typeToSet = content.getBlockForKey(startKey).getType() === blockType ? "unstyled" : blockType;
            return EditorState.push(editorState, DraftModifier.setBlockType(content, target, typeToSet), "change-block-type");
        },
        toggleCode: function(editorState) {
            var selection = editorState.getSelection(), anchorKey = selection.getAnchorKey(), focusKey = selection.getFocusKey();
            return selection.isCollapsed() || anchorKey !== focusKey ? RichTextEditorUtil.toggleBlockType(editorState, "code-block") : RichTextEditorUtil.toggleInlineStyle(editorState, "CODE");
        },
        /**
	   * Toggle the specified inline style for the selection. If the
	   * user's selection is collapsed, apply or remove the style for the
	   * internal state. If it is not collapsed, apply the change directly
	   * to the document state.
	   */
        toggleInlineStyle: function(editorState, inlineStyle) {
            var selection = editorState.getSelection(), currentStyle = editorState.getCurrentInlineStyle();
            // If the selection is collapsed, toggle the specified style on or off and
            // set the result as the new inline style override. This will then be
            // used as the inline style for the next character to be inserted.
            if (selection.isCollapsed()) return EditorState.setInlineStyleOverride(editorState, currentStyle.has(inlineStyle) ? currentStyle.remove(inlineStyle) : currentStyle.add(inlineStyle));
            // If characters are selected, immediately apply or remove the
            // inline style on the document state itself.
            var newContent, content = editorState.getCurrentContent();
            // If the style is already present for the selection range, remove it.
            // Otherwise, apply it.
            return newContent = currentStyle.has(inlineStyle) ? DraftModifier.removeInlineStyle(content, selection, inlineStyle) : DraftModifier.applyInlineStyle(content, selection, inlineStyle), 
            EditorState.push(editorState, newContent, "change-inline-style");
        },
        toggleLink: function(editorState, targetSelection, entityKey) {
            var withoutLink = DraftModifier.applyEntity(editorState.getCurrentContent(), targetSelection, entityKey);
            return EditorState.push(editorState, withoutLink, "apply-entity");
        },
        /**
	   * When a collapsed cursor is at the start of an empty styled block, allow
	   * certain key commands (newline, backspace) to simply change the
	   * style of the block instead of the default behavior.
	   */
        tryToRemoveBlockStyle: function(editorState) {
            var selection = editorState.getSelection(), offset = selection.getAnchorOffset();
            if (selection.isCollapsed() && 0 === offset) {
                var key = selection.getAnchorKey(), content = editorState.getCurrentContent(), block = content.getBlockForKey(key);
                if (block.getLength() > 0) return null;
                var type = block.getType(), blockBefore = content.getBlockBefore(key);
                if ("code-block" === type && blockBefore && "code-block" === blockBefore.getType()) return null;
                if ("unstyled" !== type) return DraftModifier.setBlockType(content, selection, "unstyled");
            }
            return null;
        }
    };
    module.exports = RichTextEditorUtil;
}, /* 132 */
/***/
function(module, exports) {
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
    "use strict";
    function adjustBlockDepthForContentState(contentState, selectionState, adjustment, maxDepth) {
        var startKey = selectionState.getStartKey(), endKey = selectionState.getEndKey(), blockMap = contentState.getBlockMap(), blocks = blockMap.toSeq().skipUntil(function(_, k) {
            return k === startKey;
        }).takeUntil(function(_, k) {
            return k === endKey;
        }).concat([ [ endKey, blockMap.get(endKey) ] ]).map(function(block) {
            var depth = block.getDepth() + adjustment;
            return depth = Math.max(0, Math.min(depth, maxDepth)), block.set("depth", depth);
        });
        return blockMap = blockMap.merge(blocks), contentState.merge({
            blockMap: blockMap,
            selectionBefore: selectionState,
            selectionAfter: selectionState
        });
    }
    module.exports = adjustBlockDepthForContentState;
}, /* 133 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function convertFromDraftStateToRaw(contentState) {
        var entityStorageKey = 0, entityStorageMap = {}, rawBlocks = [];
        contentState.getBlockMap().forEach(function(block, blockKey) {
            block.findEntityRanges(function(character) {
                return null !== character.getEntity();
            }, function(start) {
                // Stringify to maintain order of otherwise numeric keys.
                var stringifiedEntityKey = DraftStringKey.stringify(block.getEntityAt(start));
                entityStorageMap.hasOwnProperty(stringifiedEntityKey) || (entityStorageMap[stringifiedEntityKey] = "" + entityStorageKey++);
            }), rawBlocks.push({
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
        var entityKeys = Object.keys(entityStorageMap), flippedStorageMap = {};
        return entityKeys.forEach(function(key, jj) {
            var entity = DraftEntity.get(DraftStringKey.unstringify(key));
            flippedStorageMap[jj] = {
                type: entity.getType(),
                mutability: entity.getMutability(),
                data: entity.getData()
            };
        }), {
            entityMap: flippedStorageMap,
            blocks: rawBlocks
        };
    }
    var DraftEntity = __webpack_require__(14), DraftStringKey = __webpack_require__(134), encodeEntityRanges = __webpack_require__(135), encodeInlineStyleRanges = __webpack_require__(136);
    module.exports = convertFromDraftStateToRaw;
}, /* 134 */
/***/
function(module, exports) {
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
    "use strict";
    var DraftStringKey = {
        stringify: function(key) {
            return "_" + String(key);
        },
        unstringify: function(key) {
            return key.slice(1);
        }
    };
    module.exports = DraftStringKey;
}, /* 135 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Convert to UTF-8 character counts for storage.
	 */
    function encodeEntityRanges(block, storageMap) {
        var encoded = [];
        return block.findEntityRanges(function(character) {
            return !!character.getEntity();
        }, function(/*number*/ start, /*number*/ end) {
            var text = block.getText(), key = block.getEntityAt(start);
            encoded.push({
                offset: strlen(text.slice(0, start)),
                length: strlen(text.slice(start, end)),
                // Encode the key as a number for range storage.
                key: Number(storageMap[DraftStringKey.stringify(key)])
            });
        }), encoded;
    }
    var DraftStringKey = __webpack_require__(134), UnicodeUtils = __webpack_require__(104), strlen = UnicodeUtils.strlen;
    module.exports = encodeEntityRanges;
}, /* 136 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Helper function for getting encoded styles for each inline style. Convert
	 * to UTF-8 character counts for storage.
	 */
    function getEncodedInlinesForType(block, styleList, styleToEncode) {
        var ranges = [], filteredInlines = styleList.map(function(style) {
            return style.has(styleToEncode);
        }).toList();
        // We only want to keep ranges with nonzero style values.
        return findRangesImmutable(filteredInlines, areEqual, isTruthy, function(start, end) {
            var text = block.getText();
            ranges.push({
                offset: UnicodeUtils.strlen(text.slice(0, start)),
                length: UnicodeUtils.strlen(text.slice(start, end)),
                style: styleToEncode
            });
        }), ranges;
    }
    /*
	 * Retrieve the encoded arrays of inline styles, with each individual style
	 * treated separately.
	 */
    function encodeInlineStyleRanges(block) {
        var styleList = block.getCharacterList().map(function(c) {
            return c.getStyle();
        }).toList(), ranges = styleList.flatten().toSet().map(function(style) {
            return getEncodedInlinesForType(block, styleList, style);
        });
        return Array.prototype.concat.apply(EMPTY_ARRAY, ranges.toJS());
    }
    var UnicodeUtils = __webpack_require__(104), findRangesImmutable = __webpack_require__(8), areEqual = function(a, b) {
        return a === b;
    }, isTruthy = function(a) {
        return !!a;
    }, EMPTY_ARRAY = [];
    module.exports = encodeInlineStyleRanges;
}, /* 137 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function convertFromRawToDraftState(rawState) {
        var blocks = rawState.blocks, entityMap = rawState.entityMap, fromStorageToLocal = {};
        Object.keys(entityMap).forEach(function(storageKey) {
            var encodedEntity = entityMap[storageKey], type = encodedEntity.type, mutability = encodedEntity.mutability, data = encodedEntity.data, newKey = DraftEntity.create(type, mutability, data || {});
            fromStorageToLocal[storageKey] = newKey;
        });
        var contentBlocks = blocks.map(function(block) {
            var key = block.key, type = block.type, text = block.text, depth = block.depth, inlineStyleRanges = block.inlineStyleRanges, entityRanges = block.entityRanges, data = block.data;
            key = key || generateRandomKey(), depth = depth || 0, inlineStyleRanges = inlineStyleRanges || [], 
            entityRanges = entityRanges || [], data = Map(data);
            var inlineStyles = decodeInlineStyleRanges(text, inlineStyleRanges), filteredEntityRanges = entityRanges.filter(function(range) {
                return fromStorageToLocal.hasOwnProperty(range.key);
            }).map(function(range) {
                return _extends({}, range, {
                    key: fromStorageToLocal[range.key]
                });
            }), entities = decodeEntityRanges(text, filteredEntityRanges), characterList = createCharacterList(inlineStyles, entities);
            return new ContentBlock({
                key: key,
                type: type,
                text: text,
                depth: depth,
                characterList: characterList,
                data: data
            });
        });
        return ContentState.createFromBlockArray(contentBlocks);
    }
    var _assign = __webpack_require__(15), _extends = _assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, ContentBlock = __webpack_require__(7), ContentState = __webpack_require__(32), DraftEntity = __webpack_require__(14), Immutable = __webpack_require__(5), createCharacterList = __webpack_require__(138), decodeEntityRanges = __webpack_require__(139), decodeInlineStyleRanges = __webpack_require__(140), generateRandomKey = __webpack_require__(21), Map = Immutable.Map;
    module.exports = convertFromRawToDraftState;
}, /* 138 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function createCharacterList(inlineStyles, entities) {
        var characterArray = inlineStyles.map(function(style, ii) {
            var entity = entities[ii];
            return CharacterMetadata.create({
                style: style,
                entity: entity
            });
        });
        return List(characterArray);
    }
    var CharacterMetadata = __webpack_require__(6), Immutable = __webpack_require__(5), List = Immutable.List;
    module.exports = createCharacterList;
}, /* 139 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Convert to native JavaScript string lengths to determine ranges.
	 */
    function decodeEntityRanges(text, ranges) {
        var entities = Array(text.length).fill(null);
        return ranges && ranges.forEach(function(range) {
            for (var start = substr(text, 0, range.offset).length, end = start + substr(text, range.offset, range.length).length, ii = start; ii < end; ii++) entities[ii] = range.key;
        }), entities;
    }
    var UnicodeUtils = __webpack_require__(104), substr = UnicodeUtils.substr;
    module.exports = decodeEntityRanges;
}, /* 140 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Convert to native JavaScript string lengths to determine ranges.
	 */
    function decodeInlineStyleRanges(text, ranges) {
        var styles = Array(text.length).fill(EMPTY_SET);
        return ranges && ranges.forEach(function(/*object*/ range) {
            for (var cursor = substr(text, 0, range.offset).length, end = cursor + substr(text, range.offset, range.length).length; cursor < end; ) styles[cursor] = styles[cursor].add(range.style), 
            cursor++;
        }), styles;
    }
    var UnicodeUtils = __webpack_require__(104), _require = __webpack_require__(5), OrderedSet = _require.OrderedSet, substr = UnicodeUtils.substr, EMPTY_SET = OrderedSet();
    module.exports = decodeInlineStyleRanges;
}, /* 141 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Return the bounding ClientRect for the visible DOM selection, if any.
	 * In cases where there are no selected ranges or the bounding rect is
	 * temporarily invalid, return null.
	 */
    function getVisibleSelectionRect(global) {
        var selection = global.getSelection();
        if (!selection.rangeCount) return null;
        var range = selection.getRangeAt(0), boundingRect = getRangeBoundingClientRect(range), top = boundingRect.top, right = boundingRect.right, bottom = boundingRect.bottom, left = boundingRect.left;
        // When a re-render leads to a node being removed, the DOM selection will
        // temporarily be placed on an ancestor node, which leads to an invalid
        // bounding rect. Discard this state.
        // When a re-render leads to a node being removed, the DOM selection will
        // temporarily be placed on an ancestor node, which leads to an invalid
        // bounding rect. Discard this state.
        return 0 === top && 0 === right && 0 === bottom && 0 === left ? null : boundingRect;
    }
    var getRangeBoundingClientRect = __webpack_require__(142);
    module.exports = getVisibleSelectionRect;
}, /* 142 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    /**
	 * Like range.getBoundingClientRect() but normalizes for browser bugs.
	 */
    function getRangeBoundingClientRect(range) {
        // "Return a DOMRect object describing the smallest rectangle that includes
        // the first rectangle in list and all of the remaining rectangles of which
        // the height or width is not zero."
        // http://www.w3.org/TR/cssom-view/#dom-range-getboundingclientrect
        var rects = getRangeClientRects(range), top = 0, right = 0, bottom = 0, left = 0;
        if (rects.length) {
            var _rects$ = rects[0];
            top = _rects$.top, right = _rects$.right, bottom = _rects$.bottom, left = _rects$.left;
            for (var ii = 1; ii < rects.length; ii++) {
                var rect = rects[ii];
                0 === rect.height && 0 === rect.width || (top = Math.min(top, rect.top), right = Math.max(right, rect.right), 
                bottom = Math.max(bottom, rect.bottom), left = Math.min(left, rect.left));
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
    var getRangeClientRects = __webpack_require__(105);
    module.exports = getRangeBoundingClientRect;
}, /* 143 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function changeBlockDepth(editorState, blockKey, newDepth) {
        var content = editorState.getCurrentContent(), block = content.getBlockForKey(blockKey), depth = block.getDepth();
        if (depth === newDepth) return editorState;
        var newBlock = block.set("depth", newDepth), newContent = content.merge({
            blockMap: content.getBlockMap().set(blockKey, newBlock)
        });
        return _draftJs.EditorState.push(editorState, newContent, "adjust-depth");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = changeBlockDepth;
    var _draftJs = __webpack_require__(2);
}, /* 144 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function changeBlockType(editorState, blockKey, newType) {
        var content = editorState.getCurrentContent(), block = content.getBlockForKey(blockKey), type = block.getType();
        if (type === newType) return editorState;
        var newBlock = block.set("type", newType), newContent = content.merge({
            blockMap: content.getBlockMap().set(blockKey, newBlock)
        });
        return _draftJs.EditorState.push(editorState, newContent, "change-block-type");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = changeBlockType;
    var _draftJs = __webpack_require__(2);
}, /* 145 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function getBlocksInSelection(editorState) {
        var contentState = editorState.getCurrentContent(), blockMap = contentState.getBlockMap(), selection = editorState.getSelection();
        if (selection.isCollapsed()) return new _immutable.OrderedMap();
        var startKey = selection.getStartKey(), endKey = selection.getEndKey();
        if (startKey === endKey) return new _immutable.OrderedMap({
            startKey: contentState.getBlockForKey(startKey)
        });
        var blocksUntilEnd = blockMap.takeUntil(function(block, key) {
            return key === endKey;
        });
        return blocksUntilEnd.skipUntil(function(block, key) {
            return key === startKey;
        });
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = getBlocksInSelection;
    var _immutable = (__webpack_require__(2), __webpack_require__(146));
}, /* 146 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
    !function(global, factory) {
        module.exports = factory();
    }(this, function() {
        "use strict";
        function createClass(ctor, superClass) {
            superClass && (ctor.prototype = Object.create(superClass.prototype)), ctor.prototype.constructor = ctor;
        }
        function Iterable(value) {
            return isIterable(value) ? value : Seq(value);
        }
        function KeyedIterable(value) {
            return isKeyed(value) ? value : KeyedSeq(value);
        }
        function IndexedIterable(value) {
            return isIndexed(value) ? value : IndexedSeq(value);
        }
        function SetIterable(value) {
            return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
        }
        function isIterable(maybeIterable) {
            return !(!maybeIterable || !maybeIterable[IS_ITERABLE_SENTINEL]);
        }
        function isKeyed(maybeKeyed) {
            return !(!maybeKeyed || !maybeKeyed[IS_KEYED_SENTINEL]);
        }
        function isIndexed(maybeIndexed) {
            return !(!maybeIndexed || !maybeIndexed[IS_INDEXED_SENTINEL]);
        }
        function isAssociative(maybeAssociative) {
            return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
        }
        function isOrdered(maybeOrdered) {
            return !(!maybeOrdered || !maybeOrdered[IS_ORDERED_SENTINEL]);
        }
        function MakeRef(ref) {
            return ref.value = !1, ref;
        }
        function SetRef(ref) {
            ref && (ref.value = !0);
        }
        // A function which returns a value representing an "owner" for transient writes
        // to tries. The return value will only ever equal itself, and will not equal
        // the return of any subsequent call of this function.
        function OwnerID() {}
        // http://jsperf.com/copy-array-inline
        function arrCopy(arr, offset) {
            offset = offset || 0;
            for (var len = Math.max(0, arr.length - offset), newArr = new Array(len), ii = 0; ii < len; ii++) newArr[ii] = arr[ii + offset];
            return newArr;
        }
        function ensureSize(iter) {
            return void 0 === iter.size && (iter.size = iter.__iterate(returnTrue)), iter.size;
        }
        function wrapIndex(iter, index) {
            // This implements "is array index" which the ECMAString spec defines as:
            //
            //     A String property name P is an array index if and only if
            //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
            //     to 2^32−1.
            //
            // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
            if ("number" != typeof index) {
                var uint32Index = index >>> 0;
                // N >>> 0 is shorthand for ToUint32
                if ("" + uint32Index !== index || 4294967295 === uint32Index) return NaN;
                index = uint32Index;
            }
            return index < 0 ? ensureSize(iter) + index : index;
        }
        function returnTrue() {
            return !0;
        }
        function wholeSlice(begin, end, size) {
            return (0 === begin || void 0 !== size && begin <= -size) && (void 0 === end || void 0 !== size && end >= size);
        }
        function resolveBegin(begin, size) {
            return resolveIndex(begin, size, 0);
        }
        function resolveEnd(end, size) {
            return resolveIndex(end, size, size);
        }
        function resolveIndex(index, size, defaultIndex) {
            return void 0 === index ? defaultIndex : index < 0 ? Math.max(0, size + index) : void 0 === size ? index : Math.min(size, index);
        }
        function Iterator(next) {
            this.next = next;
        }
        function iteratorValue(type, k, v, iteratorResult) {
            var value = 0 === type ? k : 1 === type ? v : [ k, v ];
            return iteratorResult ? iteratorResult.value = value : iteratorResult = {
                value: value,
                done: !1
            }, iteratorResult;
        }
        function iteratorDone() {
            return {
                value: void 0,
                done: !0
            };
        }
        function hasIterator(maybeIterable) {
            return !!getIteratorFn(maybeIterable);
        }
        function isIterator(maybeIterator) {
            return maybeIterator && "function" == typeof maybeIterator.next;
        }
        function getIterator(iterable) {
            var iteratorFn = getIteratorFn(iterable);
            return iteratorFn && iteratorFn.call(iterable);
        }
        function getIteratorFn(iterable) {
            var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
            if ("function" == typeof iteratorFn) return iteratorFn;
        }
        function isArrayLike(value) {
            return value && "number" == typeof value.length;
        }
        function Seq(value) {
            return null === value || void 0 === value ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
        }
        function KeyedSeq(value) {
            return null === value || void 0 === value ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
        }
        function IndexedSeq(value) {
            return null === value || void 0 === value ? emptySequence() : isIterable(value) ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq() : indexedSeqFromValue(value);
        }
        function SetSeq(value) {
            return (null === value || void 0 === value ? emptySequence() : isIterable(value) ? isKeyed(value) ? value.entrySeq() : value : indexedSeqFromValue(value)).toSetSeq();
        }
        function ArraySeq(array) {
            this._array = array, this.size = array.length;
        }
        function ObjectSeq(object) {
            var keys = Object.keys(object);
            this._object = object, this._keys = keys, this.size = keys.length;
        }
        function IterableSeq(iterable) {
            this._iterable = iterable, this.size = iterable.length || iterable.size;
        }
        function IteratorSeq(iterator) {
            this._iterator = iterator, this._iteratorCache = [];
        }
        // # pragma Helper functions
        function isSeq(maybeSeq) {
            return !(!maybeSeq || !maybeSeq[IS_SEQ_SENTINEL]);
        }
        function emptySequence() {
            return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
        }
        function keyedSeqFromValue(value) {
            var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : "object" == typeof value ? new ObjectSeq(value) : void 0;
            if (!seq) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + value);
            return seq;
        }
        function indexedSeqFromValue(value) {
            var seq = maybeIndexedSeqFromValue(value);
            if (!seq) throw new TypeError("Expected Array or iterable object of values: " + value);
            return seq;
        }
        function seqFromValue(value) {
            var seq = maybeIndexedSeqFromValue(value) || "object" == typeof value && new ObjectSeq(value);
            if (!seq) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + value);
            return seq;
        }
        function maybeIndexedSeqFromValue(value) {
            return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : void 0;
        }
        function seqIterate(seq, fn, reverse, useKeys) {
            var cache = seq._cache;
            if (cache) {
                for (var maxIndex = cache.length - 1, ii = 0; ii <= maxIndex; ii++) {
                    var entry = cache[reverse ? maxIndex - ii : ii];
                    if (fn(entry[1], useKeys ? entry[0] : ii, seq) === !1) return ii + 1;
                }
                return ii;
            }
            return seq.__iterateUncached(fn, reverse);
        }
        function seqIterator(seq, type, reverse, useKeys) {
            var cache = seq._cache;
            if (cache) {
                var maxIndex = cache.length - 1, ii = 0;
                return new Iterator(function() {
                    var entry = cache[reverse ? maxIndex - ii : ii];
                    return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
                });
            }
            return seq.__iteratorUncached(type, reverse);
        }
        function fromJS(json, converter) {
            return converter ? fromJSWith(converter, json, "", {
                "": json
            }) : fromJSDefault(json);
        }
        function fromJSWith(converter, json, key, parentJSON) {
            return Array.isArray(json) ? converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k) {
                return fromJSWith(converter, v, k, json);
            })) : isPlainObj(json) ? converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k) {
                return fromJSWith(converter, v, k, json);
            })) : json;
        }
        function fromJSDefault(json) {
            return Array.isArray(json) ? IndexedSeq(json).map(fromJSDefault).toList() : isPlainObj(json) ? KeyedSeq(json).map(fromJSDefault).toMap() : json;
        }
        function isPlainObj(value) {
            return value && (value.constructor === Object || void 0 === value.constructor);
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
            if (valueA === valueB || valueA !== valueA && valueB !== valueB) return !0;
            if (!valueA || !valueB) return !1;
            if ("function" == typeof valueA.valueOf && "function" == typeof valueB.valueOf) {
                if (valueA = valueA.valueOf(), valueB = valueB.valueOf(), valueA === valueB || valueA !== valueA && valueB !== valueB) return !0;
                if (!valueA || !valueB) return !1;
            }
            return !("function" != typeof valueA.equals || "function" != typeof valueB.equals || !valueA.equals(valueB));
        }
        function deepEqual(a, b) {
            if (a === b) return !0;
            if (!isIterable(b) || void 0 !== a.size && void 0 !== b.size && a.size !== b.size || void 0 !== a.__hash && void 0 !== b.__hash && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) return !1;
            if (0 === a.size && 0 === b.size) return !0;
            var notAssociative = !isAssociative(a);
            if (isOrdered(a)) {
                var entries = a.entries();
                return b.every(function(v, k) {
                    var entry = entries.next().value;
                    return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
                }) && entries.next().done;
            }
            var flipped = !1;
            if (void 0 === a.size) if (void 0 === b.size) "function" == typeof a.cacheResult && a.cacheResult(); else {
                flipped = !0;
                var _ = a;
                a = b, b = _;
            }
            var allEqual = !0, bSize = b.__iterate(function(v, k) {
                if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) return allEqual = !1, 
                !1;
            });
            return allEqual && a.size === bSize;
        }
        function Repeat(value, times) {
            if (!(this instanceof Repeat)) return new Repeat(value, times);
            if (this._value = value, this.size = void 0 === times ? 1 / 0 : Math.max(0, times), 
            0 === this.size) {
                if (EMPTY_REPEAT) return EMPTY_REPEAT;
                EMPTY_REPEAT = this;
            }
        }
        function invariant(condition, error) {
            if (!condition) throw new Error(error);
        }
        function Range(start, end, step) {
            if (!(this instanceof Range)) return new Range(start, end, step);
            if (invariant(0 !== step, "Cannot step a Range by 0"), start = start || 0, void 0 === end && (end = 1 / 0), 
            step = void 0 === step ? 1 : Math.abs(step), end < start && (step = -step), this._start = start, 
            this._end = end, this._step = step, this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1), 
            0 === this.size) {
                if (EMPTY_RANGE) return EMPTY_RANGE;
                EMPTY_RANGE = this;
            }
        }
        function Collection() {
            throw TypeError("Abstract");
        }
        function KeyedCollection() {}
        function IndexedCollection() {}
        function SetCollection() {}
        // v8 has an optimization for storing 31-bit signed numbers.
        // Values which have either 00 or 11 as the high order bits qualify.
        // This function drops the highest order bit in a signed number, maintaining
        // the sign bit.
        function smi(i32) {
            return i32 >>> 1 & 1073741824 | 3221225471 & i32;
        }
        function hash(o) {
            if (o === !1 || null === o || void 0 === o) return 0;
            if ("function" == typeof o.valueOf && (o = o.valueOf(), o === !1 || null === o || void 0 === o)) return 0;
            if (o === !0) return 1;
            var type = typeof o;
            if ("number" === type) {
                if (o !== o || o === 1 / 0) return 0;
                var h = 0 | o;
                for (h !== o && (h ^= 4294967295 * o); o > 4294967295; ) o /= 4294967295, h ^= o;
                return smi(h);
            }
            if ("string" === type) return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
            if ("function" == typeof o.hashCode) return o.hashCode();
            if ("object" === type) return hashJSObj(o);
            if ("function" == typeof o.toString) return hashString(o.toString());
            throw new Error("Value type " + type + " cannot be hashed.");
        }
        function cachedHashString(string) {
            var hash = stringHashCache[string];
            return void 0 === hash && (hash = hashString(string), STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE && (STRING_HASH_CACHE_SIZE = 0, 
            stringHashCache = {}), STRING_HASH_CACHE_SIZE++, stringHashCache[string] = hash), 
            hash;
        }
        // http://jsperf.com/hashing-strings
        function hashString(string) {
            for (var hash = 0, ii = 0; ii < string.length; ii++) hash = 31 * hash + string.charCodeAt(ii) | 0;
            return smi(hash);
        }
        function hashJSObj(obj) {
            var hash;
            if (usingWeakMap && (hash = weakMap.get(obj), void 0 !== hash)) return hash;
            if (hash = obj[UID_HASH_KEY], void 0 !== hash) return hash;
            if (!canDefineProperty) {
                if (hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY], void 0 !== hash) return hash;
                if (hash = getIENodeHash(obj), void 0 !== hash) return hash;
            }
            if (hash = ++objHashUID, 1073741824 & objHashUID && (objHashUID = 0), usingWeakMap) weakMap.set(obj, hash); else {
                if (void 0 !== isExtensible && isExtensible(obj) === !1) throw new Error("Non-extensible objects are not allowed as keys.");
                if (canDefineProperty) Object.defineProperty(obj, UID_HASH_KEY, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: hash
                }); else if (void 0 !== obj.propertyIsEnumerable && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) // Since we can't define a non-enumerable property on the object
                // we'll hijack one of the less-used non-enumerable properties to
                // save our hash on it. Since this is a function it will not show up in
                // `JSON.stringify` which is what we want.
                obj.propertyIsEnumerable = function() {
                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
                }, obj.propertyIsEnumerable[UID_HASH_KEY] = hash; else {
                    if (void 0 === obj.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                    // At this point we couldn't get the IE `uniqueID` to use as a hash
                    // and we couldn't use a non-enumerable property to exploit the
                    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
                    // itself.
                    obj[UID_HASH_KEY] = hash;
                }
            }
            return hash;
        }
        // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
        // and avoid memory leaks from the IE cloneNode bug.
        function getIENodeHash(node) {
            if (node && node.nodeType > 0) switch (node.nodeType) {
              case 1:
                // Element
                return node.uniqueID;

              case 9:
                // Document
                return node.documentElement && node.documentElement.uniqueID;
            }
        }
        function assertNotInfinite(size) {
            invariant(size !== 1 / 0, "Cannot perform this action with an infinite size.");
        }
        // @pragma Construction
        function Map(value) {
            return null === value || void 0 === value ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map) {
                var iter = KeyedIterable(value);
                assertNotInfinite(iter.size), iter.forEach(function(v, k) {
                    return map.set(k, v);
                });
            });
        }
        function isMap(maybeMap) {
            return !(!maybeMap || !maybeMap[IS_MAP_SENTINEL]);
        }
        // #pragma Trie Nodes
        function ArrayMapNode(ownerID, entries) {
            this.ownerID = ownerID, this.entries = entries;
        }
        function BitmapIndexedNode(ownerID, bitmap, nodes) {
            this.ownerID = ownerID, this.bitmap = bitmap, this.nodes = nodes;
        }
        function HashArrayMapNode(ownerID, count, nodes) {
            this.ownerID = ownerID, this.count = count, this.nodes = nodes;
        }
        function HashCollisionNode(ownerID, keyHash, entries) {
            this.ownerID = ownerID, this.keyHash = keyHash, this.entries = entries;
        }
        function ValueNode(ownerID, keyHash, entry) {
            this.ownerID = ownerID, this.keyHash = keyHash, this.entry = entry;
        }
        function MapIterator(map, type, reverse) {
            this._type = type, this._reverse = reverse, this._stack = map._root && mapIteratorFrame(map._root);
        }
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
            return map.size = size, map._root = root, map.__ownerID = ownerID, map.__hash = hash, 
            map.__altered = !1, map;
        }
        function emptyMap() {
            return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
        }
        function updateMap(map, k, v) {
            var newRoot, newSize;
            if (map._root) {
                var didChangeSize = MakeRef(CHANGE_LENGTH), didAlter = MakeRef(DID_ALTER);
                if (newRoot = updateNode(map._root, map.__ownerID, 0, void 0, k, v, didChangeSize, didAlter), 
                !didAlter.value) return map;
                newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
            } else {
                if (v === NOT_SET) return map;
                newSize = 1, newRoot = new ArrayMapNode(map.__ownerID, [ [ k, v ] ]);
            }
            return map.__ownerID ? (map.size = newSize, map._root = newRoot, map.__hash = void 0, 
            map.__altered = !0, map) : newRoot ? makeMap(newSize, newRoot) : emptyMap();
        }
        function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            return node ? node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) : value === NOT_SET ? node : (SetRef(didAlter), 
            SetRef(didChangeSize), new ValueNode(ownerID, keyHash, [ key, value ]));
        }
        function isLeafNode(node) {
            return node.constructor === ValueNode || node.constructor === HashCollisionNode;
        }
        function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
            if (node.keyHash === keyHash) return new HashCollisionNode(ownerID, keyHash, [ node.entry, entry ]);
            var newNode, idx1 = (0 === shift ? node.keyHash : node.keyHash >>> shift) & MASK, idx2 = (0 === shift ? keyHash : keyHash >>> shift) & MASK, nodes = idx1 === idx2 ? [ mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry) ] : (newNode = new ValueNode(ownerID, keyHash, entry), 
            idx1 < idx2 ? [ node, newNode ] : [ newNode, node ]);
            return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
        }
        function createNodes(ownerID, entries, key, value) {
            ownerID || (ownerID = new OwnerID());
            for (var node = new ValueNode(ownerID, hash(key), [ key, value ]), ii = 0; ii < entries.length; ii++) {
                var entry = entries[ii];
                node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
            }
            return node;
        }
        function packNodes(ownerID, nodes, count, excluding) {
            for (var bitmap = 0, packedII = 0, packedNodes = new Array(count), ii = 0, bit = 1, len = nodes.length; ii < len; ii++, 
            bit <<= 1) {
                var node = nodes[ii];
                void 0 !== node && ii !== excluding && (bitmap |= bit, packedNodes[packedII++] = node);
            }
            return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
        }
        function expandNodes(ownerID, nodes, bitmap, including, node) {
            for (var count = 0, expandedNodes = new Array(SIZE), ii = 0; 0 !== bitmap; ii++, 
            bitmap >>>= 1) expandedNodes[ii] = 1 & bitmap ? nodes[count++] : void 0;
            return expandedNodes[including] = node, new HashArrayMapNode(ownerID, count + 1, expandedNodes);
        }
        function mergeIntoMapWith(map, merger, iterables) {
            for (var iters = [], ii = 0; ii < iterables.length; ii++) {
                var value = iterables[ii], iter = KeyedIterable(value);
                isIterable(value) || (iter = iter.map(function(v) {
                    return fromJS(v);
                })), iters.push(iter);
            }
            return mergeIntoCollectionWith(map, merger, iters);
        }
        function deepMerger(existing, value, key) {
            return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is(existing, value) ? existing : value;
        }
        function deepMergerWith(merger) {
            return function(existing, value, key) {
                if (existing && existing.mergeDeepWith && isIterable(value)) return existing.mergeDeepWith(merger, value);
                var nextValue = merger(existing, value, key);
                return is(existing, nextValue) ? existing : nextValue;
            };
        }
        function mergeIntoCollectionWith(collection, merger, iters) {
            return iters = iters.filter(function(x) {
                return 0 !== x.size;
            }), 0 === iters.length ? collection : 0 !== collection.size || collection.__ownerID || 1 !== iters.length ? collection.withMutations(function(collection) {
                for (var mergeIntoMap = merger ? function(value, key) {
                    collection.update(key, NOT_SET, function(existing) {
                        return existing === NOT_SET ? value : merger(existing, value, key);
                    });
                } : function(value, key) {
                    collection.set(key, value);
                }, ii = 0; ii < iters.length; ii++) iters[ii].forEach(mergeIntoMap);
            }) : collection.constructor(iters[0]);
        }
        function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
            var isNotSet = existing === NOT_SET, step = keyPathIter.next();
            if (step.done) {
                var existingValue = isNotSet ? notSetValue : existing, newValue = updater(existingValue);
                return newValue === existingValue ? existing : newValue;
            }
            invariant(isNotSet || existing && existing.set, "invalid keyPath");
            var key = step.value, nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET), nextUpdated = updateInDeepMap(nextExisting, keyPathIter, notSetValue, updater);
            return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
        }
        function popCount(x) {
            return x -= x >> 1 & 1431655765, x = (858993459 & x) + (x >> 2 & 858993459), x = x + (x >> 4) & 252645135, 
            x += x >> 8, x += x >> 16, 127 & x;
        }
        function setIn(array, idx, val, canEdit) {
            var newArray = canEdit ? array : arrCopy(array);
            return newArray[idx] = val, newArray;
        }
        function spliceIn(array, idx, val, canEdit) {
            var newLen = array.length + 1;
            if (canEdit && idx + 1 === newLen) return array[idx] = val, array;
            for (var newArray = new Array(newLen), after = 0, ii = 0; ii < newLen; ii++) ii === idx ? (newArray[ii] = val, 
            after = -1) : newArray[ii] = array[ii + after];
            return newArray;
        }
        function spliceOut(array, idx, canEdit) {
            var newLen = array.length - 1;
            if (canEdit && idx === newLen) return array.pop(), array;
            for (var newArray = new Array(newLen), after = 0, ii = 0; ii < newLen; ii++) ii === idx && (after = 1), 
            newArray[ii] = array[ii + after];
            return newArray;
        }
        // @pragma Construction
        function List(value) {
            var empty = emptyList();
            if (null === value || void 0 === value) return empty;
            if (isList(value)) return value;
            var iter = IndexedIterable(value), size = iter.size;
            return 0 === size ? empty : (assertNotInfinite(size), size > 0 && size < SIZE ? makeList(0, size, SHIFT, null, new VNode(iter.toArray())) : empty.withMutations(function(list) {
                list.setSize(size), iter.forEach(function(v, i) {
                    return list.set(i, v);
                });
            }));
        }
        function isList(maybeList) {
            return !(!maybeList || !maybeList[IS_LIST_SENTINEL]);
        }
        function VNode(array, ownerID) {
            this.array = array, this.ownerID = ownerID;
        }
        function iterateList(list, reverse) {
            function iterateNodeOrLeaf(node, level, offset) {
                return 0 === level ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
            }
            function iterateLeaf(node, offset) {
                var array = offset === tailPos ? tail && tail.array : node && node.array, from = offset > left ? 0 : left - offset, to = right - offset;
                return to > SIZE && (to = SIZE), function() {
                    if (from === to) return DONE;
                    var idx = reverse ? --to : from++;
                    return array && array[idx];
                };
            }
            function iterateNode(node, level, offset) {
                var values, array = node && node.array, from = offset > left ? 0 : left - offset >> level, to = (right - offset >> level) + 1;
                return to > SIZE && (to = SIZE), function() {
                    for (;;) {
                        if (values) {
                            var value = values();
                            if (value !== DONE) return value;
                            values = null;
                        }
                        if (from === to) return DONE;
                        var idx = reverse ? --to : from++;
                        values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
                    }
                };
            }
            var left = list._origin, right = list._capacity, tailPos = getTailOffset(right), tail = list._tail;
            return iterateNodeOrLeaf(list._root, list._level, 0);
        }
        function makeList(origin, capacity, level, root, tail, ownerID, hash) {
            var list = Object.create(ListPrototype);
            return list.size = capacity - origin, list._origin = origin, list._capacity = capacity, 
            list._level = level, list._root = root, list._tail = tail, list.__ownerID = ownerID, 
            list.__hash = hash, list.__altered = !1, list;
        }
        function emptyList() {
            return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
        }
        function updateList(list, index, value) {
            if (index = wrapIndex(list, index), index !== index) return list;
            if (index >= list.size || index < 0) return list.withMutations(function(list) {
                index < 0 ? setListBounds(list, index).set(0, value) : setListBounds(list, 0, index + 1).set(index, value);
            });
            index += list._origin;
            var newTail = list._tail, newRoot = list._root, didAlter = MakeRef(DID_ALTER);
            return index >= getTailOffset(list._capacity) ? newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter) : newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter), 
            didAlter.value ? list.__ownerID ? (list._root = newRoot, list._tail = newTail, list.__hash = void 0, 
            list.__altered = !0, list) : makeList(list._origin, list._capacity, list._level, newRoot, newTail) : list;
        }
        function updateVNode(node, ownerID, level, index, value, didAlter) {
            var idx = index >>> level & MASK, nodeHas = node && idx < node.array.length;
            if (!nodeHas && void 0 === value) return node;
            var newNode;
            if (level > 0) {
                var lowerNode = node && node.array[idx], newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
                return newLowerNode === lowerNode ? node : (newNode = editableVNode(node, ownerID), 
                newNode.array[idx] = newLowerNode, newNode);
            }
            return nodeHas && node.array[idx] === value ? node : (SetRef(didAlter), newNode = editableVNode(node, ownerID), 
            void 0 === value && idx === newNode.array.length - 1 ? newNode.array.pop() : newNode.array[idx] = value, 
            newNode);
        }
        function editableVNode(node, ownerID) {
            return ownerID && node && ownerID === node.ownerID ? node : new VNode(node ? node.array.slice() : [], ownerID);
        }
        function listNodeFor(list, rawIndex) {
            if (rawIndex >= getTailOffset(list._capacity)) return list._tail;
            if (rawIndex < 1 << list._level + SHIFT) {
                for (var node = list._root, level = list._level; node && level > 0; ) node = node.array[rawIndex >>> level & MASK], 
                level -= SHIFT;
                return node;
            }
        }
        function setListBounds(list, begin, end) {
            // Sanitize begin & end using this shorthand for ToInt32(argument)
            // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
            void 0 !== begin && (begin |= 0), void 0 !== end && (end |= 0);
            var owner = list.__ownerID || new OwnerID(), oldOrigin = list._origin, oldCapacity = list._capacity, newOrigin = oldOrigin + begin, newCapacity = void 0 === end ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
            if (newOrigin === oldOrigin && newCapacity === oldCapacity) return list;
            // If it's going to end after it starts, it's empty.
            if (newOrigin >= newCapacity) return list.clear();
            for (var newLevel = list._level, newRoot = list._root, offsetShift = 0; newOrigin + offsetShift < 0; ) newRoot = new VNode(newRoot && newRoot.array.length ? [ void 0, newRoot ] : [], owner), 
            newLevel += SHIFT, offsetShift += 1 << newLevel;
            offsetShift && (newOrigin += offsetShift, oldOrigin += offsetShift, newCapacity += offsetShift, 
            oldCapacity += offsetShift);
            // New size might need creating a higher root.
            for (var oldTailOffset = getTailOffset(oldCapacity), newTailOffset = getTailOffset(newCapacity); newTailOffset >= 1 << newLevel + SHIFT; ) newRoot = new VNode(newRoot && newRoot.array.length ? [ newRoot ] : [], owner), 
            newLevel += SHIFT;
            // Locate or create the new tail.
            var oldTail = list._tail, newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
            // Merge Tail into tree.
            if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
                newRoot = editableVNode(newRoot, owner);
                for (var node = newRoot, level = newLevel; level > SHIFT; level -= SHIFT) {
                    var idx = oldTailOffset >>> level & MASK;
                    node = node.array[idx] = editableVNode(node.array[idx], owner);
                }
                node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
            }
            // If the new origin is within the tail, then we do not need a root.
            if (// If the size has been reduced, there's a chance the tail needs to be trimmed.
            newCapacity < oldCapacity && (newTail = newTail && newTail.removeAfter(owner, 0, newCapacity)), 
            newOrigin >= newTailOffset) newOrigin -= newTailOffset, newCapacity -= newTailOffset, 
            newLevel = SHIFT, newRoot = null, newTail = newTail && newTail.removeBefore(owner, 0, newOrigin); else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
                // Identify the new top root node of the subtree of the old root.
                for (offsetShift = 0; newRoot; ) {
                    var beginIndex = newOrigin >>> newLevel & MASK;
                    if (beginIndex !== newTailOffset >>> newLevel & MASK) break;
                    beginIndex && (offsetShift += (1 << newLevel) * beginIndex), newLevel -= SHIFT, 
                    newRoot = newRoot.array[beginIndex];
                }
                // Trim the new sides of the new root.
                newRoot && newOrigin > oldOrigin && (newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift)), 
                newRoot && newTailOffset < oldTailOffset && (newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift)), 
                offsetShift && (newOrigin -= offsetShift, newCapacity -= offsetShift);
            }
            return list.__ownerID ? (list.size = newCapacity - newOrigin, list._origin = newOrigin, 
            list._capacity = newCapacity, list._level = newLevel, list._root = newRoot, list._tail = newTail, 
            list.__hash = void 0, list.__altered = !0, list) : makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
        }
        function mergeIntoListWith(list, merger, iterables) {
            for (var iters = [], maxSize = 0, ii = 0; ii < iterables.length; ii++) {
                var value = iterables[ii], iter = IndexedIterable(value);
                iter.size > maxSize && (maxSize = iter.size), isIterable(value) || (iter = iter.map(function(v) {
                    return fromJS(v);
                })), iters.push(iter);
            }
            return maxSize > list.size && (list = list.setSize(maxSize)), mergeIntoCollectionWith(list, merger, iters);
        }
        function getTailOffset(size) {
            return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
        }
        // @pragma Construction
        function OrderedMap(value) {
            return null === value || void 0 === value ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map) {
                var iter = KeyedIterable(value);
                assertNotInfinite(iter.size), iter.forEach(function(v, k) {
                    return map.set(k, v);
                });
            });
        }
        function isOrderedMap(maybeOrderedMap) {
            return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
        }
        function makeOrderedMap(map, list, ownerID, hash) {
            var omap = Object.create(OrderedMap.prototype);
            return omap.size = map ? map.size : 0, omap._map = map, omap._list = list, omap.__ownerID = ownerID, 
            omap.__hash = hash, omap;
        }
        function emptyOrderedMap() {
            return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
        }
        function updateOrderedMap(omap, k, v) {
            var newMap, newList, map = omap._map, list = omap._list, i = map.get(k), has = void 0 !== i;
            if (v === NOT_SET) {
                // removed
                if (!has) return omap;
                list.size >= SIZE && list.size >= 2 * map.size ? (newList = list.filter(function(entry, idx) {
                    return void 0 !== entry && i !== idx;
                }), newMap = newList.toKeyedSeq().map(function(entry) {
                    return entry[0];
                }).flip().toMap(), omap.__ownerID && (newMap.__ownerID = newList.__ownerID = omap.__ownerID)) : (newMap = map.remove(k), 
                newList = i === list.size - 1 ? list.pop() : list.set(i, void 0));
            } else if (has) {
                if (v === list.get(i)[1]) return omap;
                newMap = map, newList = list.set(i, [ k, v ]);
            } else newMap = map.set(k, list.size), newList = list.set(list.size, [ k, v ]);
            return omap.__ownerID ? (omap.size = newMap.size, omap._map = newMap, omap._list = newList, 
            omap.__hash = void 0, omap) : makeOrderedMap(newMap, newList);
        }
        function ToKeyedSequence(indexed, useKeys) {
            this._iter = indexed, this._useKeys = useKeys, this.size = indexed.size;
        }
        function ToIndexedSequence(iter) {
            this._iter = iter, this.size = iter.size;
        }
        function ToSetSequence(iter) {
            this._iter = iter, this.size = iter.size;
        }
        function FromEntriesSequence(entries) {
            this._iter = entries, this.size = entries.size;
        }
        function flipFactory(iterable) {
            var flipSequence = makeSequence(iterable);
            return flipSequence._iter = iterable, flipSequence.size = iterable.size, flipSequence.flip = function() {
                return iterable;
            }, flipSequence.reverse = function() {
                var reversedSequence = iterable.reverse.apply(this);
                // super.reverse()
                return reversedSequence.flip = function() {
                    return iterable.reverse();
                }, reversedSequence;
            }, flipSequence.has = function(key) {
                return iterable.includes(key);
            }, flipSequence.includes = function(key) {
                return iterable.has(key);
            }, flipSequence.cacheResult = cacheResultThrough, flipSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                return iterable.__iterate(function(v, k) {
                    return fn(k, v, this$0) !== !1;
                }, reverse);
            }, flipSequence.__iteratorUncached = function(type, reverse) {
                if (type === ITERATE_ENTRIES) {
                    var iterator = iterable.__iterator(type, reverse);
                    return new Iterator(function() {
                        var step = iterator.next();
                        if (!step.done) {
                            var k = step.value[0];
                            step.value[0] = step.value[1], step.value[1] = k;
                        }
                        return step;
                    });
                }
                return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
            }, flipSequence;
        }
        function mapFactory(iterable, mapper, context) {
            var mappedSequence = makeSequence(iterable);
            return mappedSequence.size = iterable.size, mappedSequence.has = function(key) {
                return iterable.has(key);
            }, mappedSequence.get = function(key, notSetValue) {
                var v = iterable.get(key, NOT_SET);
                return v === NOT_SET ? notSetValue : mapper.call(context, v, key, iterable);
            }, mappedSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                return iterable.__iterate(function(v, k, c) {
                    return fn(mapper.call(context, v, k, c), k, this$0) !== !1;
                }, reverse);
            }, mappedSequence.__iteratorUncached = function(type, reverse) {
                var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
                return new Iterator(function() {
                    var step = iterator.next();
                    if (step.done) return step;
                    var entry = step.value, key = entry[0];
                    return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
                });
            }, mappedSequence;
        }
        function reverseFactory(iterable, useKeys) {
            var reversedSequence = makeSequence(iterable);
            return reversedSequence._iter = iterable, reversedSequence.size = iterable.size, 
            reversedSequence.reverse = function() {
                return iterable;
            }, iterable.flip && (reversedSequence.flip = function() {
                var flipSequence = flipFactory(iterable);
                return flipSequence.reverse = function() {
                    return iterable.flip();
                }, flipSequence;
            }), reversedSequence.get = function(key, notSetValue) {
                return iterable.get(useKeys ? key : -1 - key, notSetValue);
            }, reversedSequence.has = function(key) {
                return iterable.has(useKeys ? key : -1 - key);
            }, reversedSequence.includes = function(value) {
                return iterable.includes(value);
            }, reversedSequence.cacheResult = cacheResultThrough, reversedSequence.__iterate = function(fn, reverse) {
                var this$0 = this;
                return iterable.__iterate(function(v, k) {
                    return fn(v, k, this$0);
                }, !reverse);
            }, reversedSequence.__iterator = function(type, reverse) {
                return iterable.__iterator(type, !reverse);
            }, reversedSequence;
        }
        function filterFactory(iterable, predicate, context, useKeys) {
            var filterSequence = makeSequence(iterable);
            return useKeys && (filterSequence.has = function(key) {
                var v = iterable.get(key, NOT_SET);
                return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
            }, filterSequence.get = function(key, notSetValue) {
                var v = iterable.get(key, NOT_SET);
                return v !== NOT_SET && predicate.call(context, v, key, iterable) ? v : notSetValue;
            }), filterSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this, iterations = 0;
                return iterable.__iterate(function(v, k, c) {
                    if (predicate.call(context, v, k, c)) return iterations++, fn(v, useKeys ? k : iterations - 1, this$0);
                }, reverse), iterations;
            }, filterSequence.__iteratorUncached = function(type, reverse) {
                var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse), iterations = 0;
                return new Iterator(function() {
                    for (;;) {
                        var step = iterator.next();
                        if (step.done) return step;
                        var entry = step.value, key = entry[0], value = entry[1];
                        if (predicate.call(context, value, key, iterable)) return iteratorValue(type, useKeys ? key : iterations++, value, step);
                    }
                });
            }, filterSequence;
        }
        function countByFactory(iterable, grouper, context) {
            var groups = Map().asMutable();
            return iterable.__iterate(function(v, k) {
                groups.update(grouper.call(context, v, k, iterable), 0, function(a) {
                    return a + 1;
                });
            }), groups.asImmutable();
        }
        function groupByFactory(iterable, grouper, context) {
            var isKeyedIter = isKeyed(iterable), groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
            iterable.__iterate(function(v, k) {
                groups.update(grouper.call(context, v, k, iterable), function(a) {
                    return a = a || [], a.push(isKeyedIter ? [ k, v ] : v), a;
                });
            });
            var coerce = iterableClass(iterable);
            return groups.map(function(arr) {
                return reify(iterable, coerce(arr));
            });
        }
        function sliceFactory(iterable, begin, end, useKeys) {
            var originalSize = iterable.size;
            if (// Sanitize begin & end using this shorthand for ToInt32(argument)
            // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
            void 0 !== begin && (begin |= 0), void 0 !== end && (end === 1 / 0 ? end = originalSize : end |= 0), 
            wholeSlice(begin, end, originalSize)) return iterable;
            var resolvedBegin = resolveBegin(begin, originalSize), resolvedEnd = resolveEnd(end, originalSize);
            // begin or end will be NaN if they were provided as negative numbers and
            // this iterable's size is unknown. In that case, cache first so there is
            // a known size and these do not resolve to NaN.
            if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
            // Note: resolvedEnd is undefined when the original sequence's length is
            // unknown and this slice did not supply an end and should contain all
            // elements after resolvedBegin.
            // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
            var sliceSize, resolvedSize = resolvedEnd - resolvedBegin;
            resolvedSize === resolvedSize && (sliceSize = resolvedSize < 0 ? 0 : resolvedSize);
            var sliceSeq = makeSequence(iterable);
            // If iterable.size is undefined, the size of the realized sliceSeq is
            // unknown at this point unless the number of items to slice is 0
            return sliceSeq.size = 0 === sliceSize ? sliceSize : iterable.size && sliceSize || void 0, 
            !useKeys && isSeq(iterable) && sliceSize >= 0 && (sliceSeq.get = function(index, notSetValue) {
                return index = wrapIndex(this, index), index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
            }), sliceSeq.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                if (0 === sliceSize) return 0;
                if (reverse) return this.cacheResult().__iterate(fn, reverse);
                var skipped = 0, isSkipping = !0, iterations = 0;
                return iterable.__iterate(function(v, k) {
                    if (!isSkipping || !(isSkipping = skipped++ < resolvedBegin)) return iterations++, 
                    fn(v, useKeys ? k : iterations - 1, this$0) !== !1 && iterations !== sliceSize;
                }), iterations;
            }, sliceSeq.__iteratorUncached = function(type, reverse) {
                if (0 !== sliceSize && reverse) return this.cacheResult().__iterator(type, reverse);
                // Don't bother instantiating parent iterator if taking 0.
                var iterator = 0 !== sliceSize && iterable.__iterator(type, reverse), skipped = 0, iterations = 0;
                return new Iterator(function() {
                    for (;skipped++ < resolvedBegin; ) iterator.next();
                    if (++iterations > sliceSize) return iteratorDone();
                    var step = iterator.next();
                    return useKeys || type === ITERATE_VALUES ? step : type === ITERATE_KEYS ? iteratorValue(type, iterations - 1, void 0, step) : iteratorValue(type, iterations - 1, step.value[1], step);
                });
            }, sliceSeq;
        }
        function takeWhileFactory(iterable, predicate, context) {
            var takeSequence = makeSequence(iterable);
            return takeSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                if (reverse) return this.cacheResult().__iterate(fn, reverse);
                var iterations = 0;
                return iterable.__iterate(function(v, k, c) {
                    return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0);
                }), iterations;
            }, takeSequence.__iteratorUncached = function(type, reverse) {
                var this$0 = this;
                if (reverse) return this.cacheResult().__iterator(type, reverse);
                var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse), iterating = !0;
                return new Iterator(function() {
                    if (!iterating) return iteratorDone();
                    var step = iterator.next();
                    if (step.done) return step;
                    var entry = step.value, k = entry[0], v = entry[1];
                    return predicate.call(context, v, k, this$0) ? type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step) : (iterating = !1, 
                    iteratorDone());
                });
            }, takeSequence;
        }
        function skipWhileFactory(iterable, predicate, context, useKeys) {
            var skipSequence = makeSequence(iterable);
            return skipSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this;
                if (reverse) return this.cacheResult().__iterate(fn, reverse);
                var isSkipping = !0, iterations = 0;
                return iterable.__iterate(function(v, k, c) {
                    if (!isSkipping || !(isSkipping = predicate.call(context, v, k, c))) return iterations++, 
                    fn(v, useKeys ? k : iterations - 1, this$0);
                }), iterations;
            }, skipSequence.__iteratorUncached = function(type, reverse) {
                var this$0 = this;
                if (reverse) return this.cacheResult().__iterator(type, reverse);
                var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse), skipping = !0, iterations = 0;
                return new Iterator(function() {
                    var step, k, v;
                    do {
                        if (step = iterator.next(), step.done) return useKeys || type === ITERATE_VALUES ? step : type === ITERATE_KEYS ? iteratorValue(type, iterations++, void 0, step) : iteratorValue(type, iterations++, step.value[1], step);
                        var entry = step.value;
                        k = entry[0], v = entry[1], skipping && (skipping = predicate.call(context, v, k, this$0));
                    } while (skipping);
                    return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
                });
            }, skipSequence;
        }
        function concatFactory(iterable, values) {
            var isKeyedIterable = isKeyed(iterable), iters = [ iterable ].concat(values).map(function(v) {
                return isIterable(v) ? isKeyedIterable && (v = KeyedIterable(v)) : v = isKeyedIterable ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [ v ]), 
                v;
            }).filter(function(v) {
                return 0 !== v.size;
            });
            if (0 === iters.length) return iterable;
            if (1 === iters.length) {
                var singleton = iters[0];
                if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) return singleton;
            }
            var concatSeq = new ArraySeq(iters);
            return isKeyedIterable ? concatSeq = concatSeq.toKeyedSeq() : isIndexed(iterable) || (concatSeq = concatSeq.toSetSeq()), 
            concatSeq = concatSeq.flatten(!0), concatSeq.size = iters.reduce(function(sum, seq) {
                if (void 0 !== sum) {
                    var size = seq.size;
                    if (void 0 !== size) return sum + size;
                }
            }, 0), concatSeq;
        }
        function flattenFactory(iterable, depth, useKeys) {
            var flatSequence = makeSequence(iterable);
            return flatSequence.__iterateUncached = function(fn, reverse) {
                function flatDeep(iter, currentDepth) {
                    var this$0 = this;
                    iter.__iterate(function(v, k) {
                        return (!depth || currentDepth < depth) && isIterable(v) ? flatDeep(v, currentDepth + 1) : fn(v, useKeys ? k : iterations++, this$0) === !1 && (stopped = !0), 
                        !stopped;
                    }, reverse);
                }
                var iterations = 0, stopped = !1;
                return flatDeep(iterable, 0), iterations;
            }, flatSequence.__iteratorUncached = function(type, reverse) {
                var iterator = iterable.__iterator(type, reverse), stack = [], iterations = 0;
                return new Iterator(function() {
                    for (;iterator; ) {
                        var step = iterator.next();
                        if (step.done === !1) {
                            var v = step.value;
                            if (type === ITERATE_ENTRIES && (v = v[1]), depth && !(stack.length < depth) || !isIterable(v)) return useKeys ? step : iteratorValue(type, iterations++, v, step);
                            stack.push(iterator), iterator = v.__iterator(type, reverse);
                        } else iterator = stack.pop();
                    }
                    return iteratorDone();
                });
            }, flatSequence;
        }
        function flatMapFactory(iterable, mapper, context) {
            var coerce = iterableClass(iterable);
            return iterable.toSeq().map(function(v, k) {
                return coerce(mapper.call(context, v, k, iterable));
            }).flatten(!0);
        }
        function interposeFactory(iterable, separator) {
            var interposedSequence = makeSequence(iterable);
            return interposedSequence.size = iterable.size && 2 * iterable.size - 1, interposedSequence.__iterateUncached = function(fn, reverse) {
                var this$0 = this, iterations = 0;
                return iterable.__iterate(function(v, k) {
                    return (!iterations || fn(separator, iterations++, this$0) !== !1) && fn(v, iterations++, this$0) !== !1;
                }, reverse), iterations;
            }, interposedSequence.__iteratorUncached = function(type, reverse) {
                var step, iterator = iterable.__iterator(ITERATE_VALUES, reverse), iterations = 0;
                return new Iterator(function() {
                    return (!step || iterations % 2) && (step = iterator.next(), step.done) ? step : iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
                });
            }, interposedSequence;
        }
        function sortFactory(iterable, comparator, mapper) {
            comparator || (comparator = defaultComparator);
            var isKeyedIterable = isKeyed(iterable), index = 0, entries = iterable.toSeq().map(function(v, k) {
                return [ k, v, index++, mapper ? mapper(v, k, iterable) : v ];
            }).toArray();
            return entries.sort(function(a, b) {
                return comparator(a[3], b[3]) || a[2] - b[2];
            }).forEach(isKeyedIterable ? function(v, i) {
                entries[i].length = 2;
            } : function(v, i) {
                entries[i] = v[1];
            }), isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
        }
        function maxFactory(iterable, comparator, mapper) {
            if (comparator || (comparator = defaultComparator), mapper) {
                var entry = iterable.toSeq().map(function(v, k) {
                    return [ v, mapper(v, k, iterable) ];
                }).reduce(function(a, b) {
                    return maxCompare(comparator, a[1], b[1]) ? b : a;
                });
                return entry && entry[0];
            }
            return iterable.reduce(function(a, b) {
                return maxCompare(comparator, a, b) ? b : a;
            });
        }
        function maxCompare(comparator, a, b) {
            var comp = comparator(b, a);
            // b is considered the new max if the comparator declares them equal, but
            // they are not equal and b is in fact a nullish value.
            return 0 === comp && b !== a && (void 0 === b || null === b || b !== b) || comp > 0;
        }
        function zipWithFactory(keyIter, zipper, iters) {
            var zipSequence = makeSequence(keyIter);
            // Note: this a generic base implementation of __iterate in terms of
            // __iterator which may be more generically useful in the future.
            return zipSequence.size = new ArraySeq(iters).map(function(i) {
                return i.size;
            }).min(), zipSequence.__iterate = function(fn, reverse) {
                for (/* generic:
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
                var step, iterator = this.__iterator(ITERATE_VALUES, reverse), iterations = 0; !(step = iterator.next()).done && fn(step.value, iterations++, this) !== !1; ) ;
                return iterations;
            }, zipSequence.__iteratorUncached = function(type, reverse) {
                var iterators = iters.map(function(i) {
                    return i = Iterable(i), getIterator(reverse ? i.reverse() : i);
                }), iterations = 0, isDone = !1;
                return new Iterator(function() {
                    var steps;
                    return isDone || (steps = iterators.map(function(i) {
                        return i.next();
                    }), isDone = steps.some(function(s) {
                        return s.done;
                    })), isDone ? iteratorDone() : iteratorValue(type, iterations++, zipper.apply(null, steps.map(function(s) {
                        return s.value;
                    })));
                });
            }, zipSequence;
        }
        // #pragma Helper Functions
        function reify(iter, seq) {
            return isSeq(iter) ? seq : iter.constructor(seq);
        }
        function validateEntry(entry) {
            if (entry !== Object(entry)) throw new TypeError("Expected [K, V] tuple: " + entry);
        }
        function resolveSize(iter) {
            return assertNotInfinite(iter.size), ensureSize(iter);
        }
        function iterableClass(iterable) {
            return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
        }
        function makeSequence(iterable) {
            return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
        }
        function cacheResultThrough() {
            return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, 
            this) : Seq.prototype.cacheResult.call(this);
        }
        function defaultComparator(a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
        }
        function forceIterator(keyPath) {
            var iter = getIterator(keyPath);
            if (!iter) {
                // Array might not be iterable in this environment, so we need a fallback
                // to our wrapped type.
                if (!isArrayLike(keyPath)) throw new TypeError("Expected iterable or array-like: " + keyPath);
                iter = getIterator(Iterable(keyPath));
            }
            return iter;
        }
        function Record(defaultValues, name) {
            var hasInitialized, RecordType = function(values) {
                if (values instanceof RecordType) return values;
                if (!(this instanceof RecordType)) return new RecordType(values);
                if (!hasInitialized) {
                    hasInitialized = !0;
                    var keys = Object.keys(defaultValues);
                    setProps(RecordTypePrototype, keys), RecordTypePrototype.size = keys.length, RecordTypePrototype._name = name, 
                    RecordTypePrototype._keys = keys, RecordTypePrototype._defaultValues = defaultValues;
                }
                this._map = Map(values);
            }, RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
            return RecordTypePrototype.constructor = RecordType, RecordType;
        }
        function makeRecord(likeRecord, map, ownerID) {
            var record = Object.create(Object.getPrototypeOf(likeRecord));
            return record._map = map, record.__ownerID = ownerID, record;
        }
        function recordName(record) {
            return record._name || record.constructor.name || "Record";
        }
        function setProps(prototype, names) {
            try {
                names.forEach(setProp.bind(void 0, prototype));
            } catch (error) {}
        }
        function setProp(prototype, name) {
            Object.defineProperty(prototype, name, {
                get: function() {
                    return this.get(name);
                },
                set: function(value) {
                    invariant(this.__ownerID, "Cannot set on an immutable record."), this.set(name, value);
                }
            });
        }
        // @pragma Construction
        function Set(value) {
            return null === value || void 0 === value ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set) {
                var iter = SetIterable(value);
                assertNotInfinite(iter.size), iter.forEach(function(v) {
                    return set.add(v);
                });
            });
        }
        function isSet(maybeSet) {
            return !(!maybeSet || !maybeSet[IS_SET_SENTINEL]);
        }
        function updateSet(set, newMap) {
            return set.__ownerID ? (set.size = newMap.size, set._map = newMap, set) : newMap === set._map ? set : 0 === newMap.size ? set.__empty() : set.__make(newMap);
        }
        function makeSet(map, ownerID) {
            var set = Object.create(SetPrototype);
            return set.size = map ? map.size : 0, set._map = map, set.__ownerID = ownerID, set;
        }
        function emptySet() {
            return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
        }
        // @pragma Construction
        function OrderedSet(value) {
            return null === value || void 0 === value ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set) {
                var iter = SetIterable(value);
                assertNotInfinite(iter.size), iter.forEach(function(v) {
                    return set.add(v);
                });
            });
        }
        function isOrderedSet(maybeOrderedSet) {
            return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
        }
        function makeOrderedSet(map, ownerID) {
            var set = Object.create(OrderedSetPrototype);
            return set.size = map ? map.size : 0, set._map = map, set.__ownerID = ownerID, set;
        }
        function emptyOrderedSet() {
            return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
        }
        // @pragma Construction
        function Stack(value) {
            return null === value || void 0 === value ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
        }
        function isStack(maybeStack) {
            return !(!maybeStack || !maybeStack[IS_STACK_SENTINEL]);
        }
        function makeStack(size, head, ownerID, hash) {
            var map = Object.create(StackPrototype);
            return map.size = size, map._head = head, map.__ownerID = ownerID, map.__hash = hash, 
            map.__altered = !1, map;
        }
        function emptyStack() {
            return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
        }
        /**
	   * Contributes additional methods to a constructor
	   */
        function mixin(ctor, methods) {
            var keyCopier = function(key) {
                ctor.prototype[key] = methods[key];
            };
            return Object.keys(methods).forEach(keyCopier), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier), 
            ctor;
        }
        // #pragma Helper functions
        function keyMapper(v, k) {
            return k;
        }
        function entryMapper(v, k) {
            return [ k, v ];
        }
        function not(predicate) {
            return function() {
                return !predicate.apply(this, arguments);
            };
        }
        function neg(predicate) {
            return function() {
                return -predicate.apply(this, arguments);
            };
        }
        function quoteString(value) {
            return "string" == typeof value ? JSON.stringify(value) : String(value);
        }
        function defaultZipper() {
            return arrCopy(arguments);
        }
        function defaultNegComparator(a, b) {
            return a < b ? 1 : a > b ? -1 : 0;
        }
        function hashIterable(iterable) {
            if (iterable.size === 1 / 0) return 0;
            var ordered = isOrdered(iterable), keyed = isKeyed(iterable), h = ordered ? 1 : 0, size = iterable.__iterate(keyed ? ordered ? function(v, k) {
                h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
            } : function(v, k) {
                h = h + hashMerge(hash(v), hash(k)) | 0;
            } : ordered ? function(v) {
                h = 31 * h + hash(v) | 0;
            } : function(v) {
                h = h + hash(v) | 0;
            });
            return murmurHashOfSize(size, h);
        }
        function murmurHashOfSize(size, h) {
            return h = imul(h, 3432918353), h = imul(h << 15 | h >>> -15, 461845907), h = imul(h << 13 | h >>> -13, 5), 
            h = (h + 3864292196 | 0) ^ size, h = imul(h ^ h >>> 16, 2246822507), h = imul(h ^ h >>> 13, 3266489909), 
            h = smi(h ^ h >>> 16);
        }
        function hashMerge(a, b) {
            return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
        }
        var SLICE$0 = Array.prototype.slice;
        createClass(KeyedIterable, Iterable), createClass(IndexedIterable, Iterable), createClass(SetIterable, Iterable), 
        Iterable.isIterable = isIterable, Iterable.isKeyed = isKeyed, Iterable.isIndexed = isIndexed, 
        Iterable.isAssociative = isAssociative, Iterable.isOrdered = isOrdered, Iterable.Keyed = KeyedIterable, 
        Iterable.Indexed = IndexedIterable, Iterable.Set = SetIterable;
        var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@", IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@", IS_INDEXED_SENTINEL = "@@__IMMUTABLE_INDEXED__@@", IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@", DELETE = "delete", SHIFT = 5, SIZE = 1 << SHIFT, MASK = SIZE - 1, NOT_SET = {}, CHANGE_LENGTH = {
            value: !1
        }, DID_ALTER = {
            value: !1
        }, ITERATE_KEYS = 0, ITERATE_VALUES = 1, ITERATE_ENTRIES = 2, REAL_ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
        Iterator.prototype.toString = function() {
            return "[Iterator]";
        }, Iterator.KEYS = ITERATE_KEYS, Iterator.VALUES = ITERATE_VALUES, Iterator.ENTRIES = ITERATE_ENTRIES, 
        Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
            return this.toString();
        }, Iterator.prototype[ITERATOR_SYMBOL] = function() {
            return this;
        }, createClass(Seq, Iterable), Seq.of = function() {
            return Seq(arguments);
        }, Seq.prototype.toSeq = function() {
            return this;
        }, Seq.prototype.toString = function() {
            return this.__toString("Seq {", "}");
        }, Seq.prototype.cacheResult = function() {
            return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), 
            this.size = this._cache.length), this;
        }, // abstract __iterateUncached(fn, reverse)
        Seq.prototype.__iterate = function(fn, reverse) {
            return seqIterate(this, fn, reverse, !0);
        }, // abstract __iteratorUncached(type, reverse)
        Seq.prototype.__iterator = function(type, reverse) {
            return seqIterator(this, type, reverse, !0);
        }, createClass(KeyedSeq, Seq), KeyedSeq.prototype.toKeyedSeq = function() {
            return this;
        }, createClass(IndexedSeq, Seq), IndexedSeq.of = function() {
            return IndexedSeq(arguments);
        }, IndexedSeq.prototype.toIndexedSeq = function() {
            return this;
        }, IndexedSeq.prototype.toString = function() {
            return this.__toString("Seq [", "]");
        }, IndexedSeq.prototype.__iterate = function(fn, reverse) {
            return seqIterate(this, fn, reverse, !1);
        }, IndexedSeq.prototype.__iterator = function(type, reverse) {
            return seqIterator(this, type, reverse, !1);
        }, createClass(SetSeq, Seq), SetSeq.of = function() {
            return SetSeq(arguments);
        }, SetSeq.prototype.toSetSeq = function() {
            return this;
        }, Seq.isSeq = isSeq, Seq.Keyed = KeyedSeq, Seq.Set = SetSeq, Seq.Indexed = IndexedSeq;
        var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
        Seq.prototype[IS_SEQ_SENTINEL] = !0, createClass(ArraySeq, IndexedSeq), ArraySeq.prototype.get = function(index, notSetValue) {
            return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
        }, ArraySeq.prototype.__iterate = function(fn, reverse) {
            for (var array = this._array, maxIndex = array.length - 1, ii = 0; ii <= maxIndex; ii++) if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === !1) return ii + 1;
            return ii;
        }, ArraySeq.prototype.__iterator = function(type, reverse) {
            var array = this._array, maxIndex = array.length - 1, ii = 0;
            return new Iterator(function() {
                return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
            });
        }, createClass(ObjectSeq, KeyedSeq), ObjectSeq.prototype.get = function(key, notSetValue) {
            return void 0 === notSetValue || this.has(key) ? this._object[key] : notSetValue;
        }, ObjectSeq.prototype.has = function(key) {
            return this._object.hasOwnProperty(key);
        }, ObjectSeq.prototype.__iterate = function(fn, reverse) {
            for (var object = this._object, keys = this._keys, maxIndex = keys.length - 1, ii = 0; ii <= maxIndex; ii++) {
                var key = keys[reverse ? maxIndex - ii : ii];
                if (fn(object[key], key, this) === !1) return ii + 1;
            }
            return ii;
        }, ObjectSeq.prototype.__iterator = function(type, reverse) {
            var object = this._object, keys = this._keys, maxIndex = keys.length - 1, ii = 0;
            return new Iterator(function() {
                var key = keys[reverse ? maxIndex - ii : ii];
                return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
            });
        }, ObjectSeq.prototype[IS_ORDERED_SENTINEL] = !0, createClass(IterableSeq, IndexedSeq), 
        IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
            if (reverse) return this.cacheResult().__iterate(fn, reverse);
            var iterable = this._iterable, iterator = getIterator(iterable), iterations = 0;
            if (isIterator(iterator)) for (var step; !(step = iterator.next()).done && fn(step.value, iterations++, this) !== !1; ) ;
            return iterations;
        }, IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
            if (reverse) return this.cacheResult().__iterator(type, reverse);
            var iterable = this._iterable, iterator = getIterator(iterable);
            if (!isIterator(iterator)) return new Iterator(iteratorDone);
            var iterations = 0;
            return new Iterator(function() {
                var step = iterator.next();
                return step.done ? step : iteratorValue(type, iterations++, step.value);
            });
        }, createClass(IteratorSeq, IndexedSeq), IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
            if (reverse) return this.cacheResult().__iterate(fn, reverse);
            for (var iterator = this._iterator, cache = this._iteratorCache, iterations = 0; iterations < cache.length; ) if (fn(cache[iterations], iterations++, this) === !1) return iterations;
            for (var step; !(step = iterator.next()).done; ) {
                var val = step.value;
                if (cache[iterations] = val, fn(val, iterations++, this) === !1) break;
            }
            return iterations;
        }, IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
            if (reverse) return this.cacheResult().__iterator(type, reverse);
            var iterator = this._iterator, cache = this._iteratorCache, iterations = 0;
            return new Iterator(function() {
                if (iterations >= cache.length) {
                    var step = iterator.next();
                    if (step.done) return step;
                    cache[iterations] = step.value;
                }
                return iteratorValue(type, iterations, cache[iterations++]);
            });
        };
        var EMPTY_SEQ;
        createClass(Repeat, IndexedSeq), Repeat.prototype.toString = function() {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
        }, Repeat.prototype.get = function(index, notSetValue) {
            return this.has(index) ? this._value : notSetValue;
        }, Repeat.prototype.includes = function(searchValue) {
            return is(this._value, searchValue);
        }, Repeat.prototype.slice = function(begin, end) {
            var size = this.size;
            return wholeSlice(begin, end, size) ? this : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
        }, Repeat.prototype.reverse = function() {
            return this;
        }, Repeat.prototype.indexOf = function(searchValue) {
            return is(this._value, searchValue) ? 0 : -1;
        }, Repeat.prototype.lastIndexOf = function(searchValue) {
            return is(this._value, searchValue) ? this.size : -1;
        }, Repeat.prototype.__iterate = function(fn, reverse) {
            for (var ii = 0; ii < this.size; ii++) if (fn(this._value, ii, this) === !1) return ii + 1;
            return ii;
        }, Repeat.prototype.__iterator = function(type, reverse) {
            var this$0 = this, ii = 0;
            return new Iterator(function() {
                return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone();
            });
        }, Repeat.prototype.equals = function(other) {
            return other instanceof Repeat ? is(this._value, other._value) : deepEqual(other);
        };
        var EMPTY_REPEAT;
        createClass(Range, IndexedSeq), Range.prototype.toString = function() {
            return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]";
        }, Range.prototype.get = function(index, notSetValue) {
            return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
        }, Range.prototype.includes = function(searchValue) {
            var possibleIndex = (searchValue - this._start) / this._step;
            return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
        }, Range.prototype.slice = function(begin, end) {
            return wholeSlice(begin, end, this.size) ? this : (begin = resolveBegin(begin, this.size), 
            end = resolveEnd(end, this.size), end <= begin ? new Range(0, 0) : new Range(this.get(begin, this._end), this.get(end, this._end), this._step));
        }, Range.prototype.indexOf = function(searchValue) {
            var offsetValue = searchValue - this._start;
            if (offsetValue % this._step === 0) {
                var index = offsetValue / this._step;
                if (index >= 0 && index < this.size) return index;
            }
            return -1;
        }, Range.prototype.lastIndexOf = function(searchValue) {
            return this.indexOf(searchValue);
        }, Range.prototype.__iterate = function(fn, reverse) {
            for (var maxIndex = this.size - 1, step = this._step, value = reverse ? this._start + maxIndex * step : this._start, ii = 0; ii <= maxIndex; ii++) {
                if (fn(value, ii, this) === !1) return ii + 1;
                value += reverse ? -step : step;
            }
            return ii;
        }, Range.prototype.__iterator = function(type, reverse) {
            var maxIndex = this.size - 1, step = this._step, value = reverse ? this._start + maxIndex * step : this._start, ii = 0;
            return new Iterator(function() {
                var v = value;
                return value += reverse ? -step : step, ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
            });
        }, Range.prototype.equals = function(other) {
            return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
        };
        var EMPTY_RANGE;
        createClass(Collection, Iterable), createClass(KeyedCollection, Collection), createClass(IndexedCollection, Collection), 
        createClass(SetCollection, Collection), Collection.Keyed = KeyedCollection, Collection.Indexed = IndexedCollection, 
        Collection.Set = SetCollection;
        var weakMap, imul = "function" == typeof Math.imul && Math.imul(4294967295, 2) === -2 ? Math.imul : function(a, b) {
            a |= 0, // int
            b |= 0;
            // int
            var c = 65535 & a, d = 65535 & b;
            // Shift by 0 fixes the sign on the high part.
            return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
        }, isExtensible = Object.isExtensible, canDefineProperty = function() {
            try {
                return Object.defineProperty({}, "@", {}), !0;
            } catch (e) {
                return !1;
            }
        }(), usingWeakMap = "function" == typeof WeakMap;
        usingWeakMap && (weakMap = new WeakMap());
        var objHashUID = 0, UID_HASH_KEY = "__immutablehash__";
        "function" == typeof Symbol && (UID_HASH_KEY = Symbol(UID_HASH_KEY));
        var STRING_HASH_CACHE_MIN_STRLEN = 16, STRING_HASH_CACHE_MAX_SIZE = 255, STRING_HASH_CACHE_SIZE = 0, stringHashCache = {};
        createClass(Map, KeyedCollection), Map.of = function() {
            var keyValues = SLICE$0.call(arguments, 0);
            return emptyMap().withMutations(function(map) {
                for (var i = 0; i < keyValues.length; i += 2) {
                    if (i + 1 >= keyValues.length) throw new Error("Missing value for key: " + keyValues[i]);
                    map.set(keyValues[i], keyValues[i + 1]);
                }
            });
        }, Map.prototype.toString = function() {
            return this.__toString("Map {", "}");
        }, // @pragma Access
        Map.prototype.get = function(k, notSetValue) {
            return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
        }, // @pragma Modification
        Map.prototype.set = function(k, v) {
            return updateMap(this, k, v);
        }, Map.prototype.setIn = function(keyPath, v) {
            return this.updateIn(keyPath, NOT_SET, function() {
                return v;
            });
        }, Map.prototype.remove = function(k) {
            return updateMap(this, k, NOT_SET);
        }, Map.prototype.deleteIn = function(keyPath) {
            return this.updateIn(keyPath, function() {
                return NOT_SET;
            });
        }, Map.prototype.update = function(k, notSetValue, updater) {
            return 1 === arguments.length ? k(this) : this.updateIn([ k ], notSetValue, updater);
        }, Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
            updater || (updater = notSetValue, notSetValue = void 0);
            var updatedValue = updateInDeepMap(this, forceIterator(keyPath), notSetValue, updater);
            return updatedValue === NOT_SET ? void 0 : updatedValue;
        }, Map.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, 
            this.__hash = void 0, this.__altered = !0, this) : emptyMap();
        }, // @pragma Composition
        Map.prototype.merge = function() {
            return mergeIntoMapWith(this, void 0, arguments);
        }, Map.prototype.mergeWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoMapWith(this, merger, iters);
        }, Map.prototype.mergeIn = function(keyPath) {
            var iters = SLICE$0.call(arguments, 1);
            return this.updateIn(keyPath, emptyMap(), function(m) {
                return "function" == typeof m.merge ? m.merge.apply(m, iters) : iters[iters.length - 1];
            });
        }, Map.prototype.mergeDeep = function() {
            return mergeIntoMapWith(this, deepMerger, arguments);
        }, Map.prototype.mergeDeepWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoMapWith(this, deepMergerWith(merger), iters);
        }, Map.prototype.mergeDeepIn = function(keyPath) {
            var iters = SLICE$0.call(arguments, 1);
            return this.updateIn(keyPath, emptyMap(), function(m) {
                return "function" == typeof m.mergeDeep ? m.mergeDeep.apply(m, iters) : iters[iters.length - 1];
            });
        }, Map.prototype.sort = function(comparator) {
            // Late binding
            return OrderedMap(sortFactory(this, comparator));
        }, Map.prototype.sortBy = function(mapper, comparator) {
            // Late binding
            return OrderedMap(sortFactory(this, comparator, mapper));
        }, // @pragma Mutability
        Map.prototype.withMutations = function(fn) {
            var mutable = this.asMutable();
            return fn(mutable), mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
        }, Map.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
        }, Map.prototype.asImmutable = function() {
            return this.__ensureOwner();
        }, Map.prototype.wasAltered = function() {
            return this.__altered;
        }, Map.prototype.__iterator = function(type, reverse) {
            return new MapIterator(this, type, reverse);
        }, Map.prototype.__iterate = function(fn, reverse) {
            var this$0 = this, iterations = 0;
            return this._root && this._root.iterate(function(entry) {
                return iterations++, fn(entry[1], entry[0], this$0);
            }, reverse), iterations;
        }, Map.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID ? this : ownerID ? makeMap(this.size, this._root, ownerID, this.__hash) : (this.__ownerID = ownerID, 
            this.__altered = !1, this);
        }, Map.isMap = isMap;
        var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@", MapPrototype = Map.prototype;
        MapPrototype[IS_MAP_SENTINEL] = !0, MapPrototype[DELETE] = MapPrototype.remove, 
        MapPrototype.removeIn = MapPrototype.deleteIn, ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            for (var entries = this.entries, ii = 0, len = entries.length; ii < len; ii++) if (is(key, entries[ii][0])) return entries[ii][1];
            return notSetValue;
        }, ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            for (var removed = value === NOT_SET, entries = this.entries, idx = 0, len = entries.length; idx < len && !is(key, entries[idx][0]); idx++) ;
            var exists = idx < len;
            if (exists ? entries[idx][1] === value : removed) return this;
            if (SetRef(didAlter), (removed || !exists) && SetRef(didChangeSize), !removed || 1 !== entries.length) {
                if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) return createNodes(ownerID, entries, key, value);
                var isEditable = ownerID && ownerID === this.ownerID, newEntries = isEditable ? entries : arrCopy(entries);
                return exists ? removed ? idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop() : newEntries[idx] = [ key, value ] : newEntries.push([ key, value ]), 
                isEditable ? (this.entries = newEntries, this) : new ArrayMapNode(ownerID, newEntries);
            }
        }, BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            void 0 === keyHash && (keyHash = hash(key));
            var bit = 1 << ((0 === shift ? keyHash : keyHash >>> shift) & MASK), bitmap = this.bitmap;
            return 0 === (bitmap & bit) ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
        }, BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            void 0 === keyHash && (keyHash = hash(key));
            var keyHashFrag = (0 === shift ? keyHash : keyHash >>> shift) & MASK, bit = 1 << keyHashFrag, bitmap = this.bitmap, exists = 0 !== (bitmap & bit);
            if (!exists && value === NOT_SET) return this;
            var idx = popCount(bitmap & bit - 1), nodes = this.nodes, node = exists ? nodes[idx] : void 0, newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
            if (newNode === node) return this;
            if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
            if (exists && !newNode && 2 === nodes.length && isLeafNode(nodes[1 ^ idx])) return nodes[1 ^ idx];
            if (exists && newNode && 1 === nodes.length && isLeafNode(newNode)) return newNode;
            var isEditable = ownerID && ownerID === this.ownerID, newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit, newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
            return isEditable ? (this.bitmap = newBitmap, this.nodes = newNodes, this) : new BitmapIndexedNode(ownerID, newBitmap, newNodes);
        }, HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            void 0 === keyHash && (keyHash = hash(key));
            var idx = (0 === shift ? keyHash : keyHash >>> shift) & MASK, node = this.nodes[idx];
            return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
        }, HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            void 0 === keyHash && (keyHash = hash(key));
            var idx = (0 === shift ? keyHash : keyHash >>> shift) & MASK, removed = value === NOT_SET, nodes = this.nodes, node = nodes[idx];
            if (removed && !node) return this;
            var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
            if (newNode === node) return this;
            var newCount = this.count;
            if (node) {
                if (!newNode && (newCount--, newCount < MIN_HASH_ARRAY_MAP_SIZE)) return packNodes(ownerID, nodes, newCount, idx);
            } else newCount++;
            var isEditable = ownerID && ownerID === this.ownerID, newNodes = setIn(nodes, idx, newNode, isEditable);
            return isEditable ? (this.count = newCount, this.nodes = newNodes, this) : new HashArrayMapNode(ownerID, newCount, newNodes);
        }, HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            for (var entries = this.entries, ii = 0, len = entries.length; ii < len; ii++) if (is(key, entries[ii][0])) return entries[ii][1];
            return notSetValue;
        }, HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            void 0 === keyHash && (keyHash = hash(key));
            var removed = value === NOT_SET;
            if (keyHash !== this.keyHash) return removed ? this : (SetRef(didAlter), SetRef(didChangeSize), 
            mergeIntoNode(this, ownerID, shift, keyHash, [ key, value ]));
            for (var entries = this.entries, idx = 0, len = entries.length; idx < len && !is(key, entries[idx][0]); idx++) ;
            var exists = idx < len;
            if (exists ? entries[idx][1] === value : removed) return this;
            if (SetRef(didAlter), (removed || !exists) && SetRef(didChangeSize), removed && 2 === len) return new ValueNode(ownerID, this.keyHash, entries[1 ^ idx]);
            var isEditable = ownerID && ownerID === this.ownerID, newEntries = isEditable ? entries : arrCopy(entries);
            return exists ? removed ? idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop() : newEntries[idx] = [ key, value ] : newEntries.push([ key, value ]), 
            isEditable ? (this.entries = newEntries, this) : new HashCollisionNode(ownerID, this.keyHash, newEntries);
        }, ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
            return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
        }, ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
            var removed = value === NOT_SET, keyMatch = is(key, this.entry[0]);
            return (keyMatch ? value === this.entry[1] : removed) ? this : (SetRef(didAlter), 
            removed ? void SetRef(didChangeSize) : keyMatch ? ownerID && ownerID === this.ownerID ? (this.entry[1] = value, 
            this) : new ValueNode(ownerID, this.keyHash, [ key, value ]) : (SetRef(didChangeSize), 
            mergeIntoNode(this, ownerID, shift, hash(key), [ key, value ])));
        }, // #pragma Iterators
        ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse) {
            for (var entries = this.entries, ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) if (fn(entries[reverse ? maxIndex - ii : ii]) === !1) return !1;
        }, BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse) {
            for (var nodes = this.nodes, ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
                var node = nodes[reverse ? maxIndex - ii : ii];
                if (node && node.iterate(fn, reverse) === !1) return !1;
            }
        }, ValueNode.prototype.iterate = function(fn, reverse) {
            return fn(this.entry);
        }, createClass(MapIterator, Iterator), MapIterator.prototype.next = function() {
            for (var type = this._type, stack = this._stack; stack; ) {
                var maxIndex, node = stack.node, index = stack.index++;
                if (node.entry) {
                    if (0 === index) return mapIteratorValue(type, node.entry);
                } else if (node.entries) {
                    if (maxIndex = node.entries.length - 1, index <= maxIndex) return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
                } else if (maxIndex = node.nodes.length - 1, index <= maxIndex) {
                    var subNode = node.nodes[this._reverse ? maxIndex - index : index];
                    if (subNode) {
                        if (subNode.entry) return mapIteratorValue(type, subNode.entry);
                        stack = this._stack = mapIteratorFrame(subNode, stack);
                    }
                    continue;
                }
                stack = this._stack = this._stack.__prev;
            }
            return iteratorDone();
        };
        var EMPTY_MAP, MAX_ARRAY_MAP_SIZE = SIZE / 4, MAX_BITMAP_INDEXED_SIZE = SIZE / 2, MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
        createClass(List, IndexedCollection), List.of = function() {
            return this(arguments);
        }, List.prototype.toString = function() {
            return this.__toString("List [", "]");
        }, // @pragma Access
        List.prototype.get = function(index, notSetValue) {
            if (index = wrapIndex(this, index), index >= 0 && index < this.size) {
                index += this._origin;
                var node = listNodeFor(this, index);
                return node && node.array[index & MASK];
            }
            return notSetValue;
        }, // @pragma Modification
        List.prototype.set = function(index, value) {
            return updateList(this, index, value);
        }, List.prototype.remove = function(index) {
            return this.has(index) ? 0 === index ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1) : this;
        }, List.prototype.insert = function(index, value) {
            return this.splice(index, 0, value);
        }, List.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, 
            this._level = SHIFT, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, 
            this) : emptyList();
        }, List.prototype.push = function() {
            var values = arguments, oldSize = this.size;
            return this.withMutations(function(list) {
                setListBounds(list, 0, oldSize + values.length);
                for (var ii = 0; ii < values.length; ii++) list.set(oldSize + ii, values[ii]);
            });
        }, List.prototype.pop = function() {
            return setListBounds(this, 0, -1);
        }, List.prototype.unshift = function() {
            var values = arguments;
            return this.withMutations(function(list) {
                setListBounds(list, -values.length);
                for (var ii = 0; ii < values.length; ii++) list.set(ii, values[ii]);
            });
        }, List.prototype.shift = function() {
            return setListBounds(this, 1);
        }, // @pragma Composition
        List.prototype.merge = function() {
            return mergeIntoListWith(this, void 0, arguments);
        }, List.prototype.mergeWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoListWith(this, merger, iters);
        }, List.prototype.mergeDeep = function() {
            return mergeIntoListWith(this, deepMerger, arguments);
        }, List.prototype.mergeDeepWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return mergeIntoListWith(this, deepMergerWith(merger), iters);
        }, List.prototype.setSize = function(size) {
            return setListBounds(this, 0, size);
        }, // @pragma Iteration
        List.prototype.slice = function(begin, end) {
            var size = this.size;
            return wholeSlice(begin, end, size) ? this : setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
        }, List.prototype.__iterator = function(type, reverse) {
            var index = 0, values = iterateList(this, reverse);
            return new Iterator(function() {
                var value = values();
                return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
            });
        }, List.prototype.__iterate = function(fn, reverse) {
            for (var value, index = 0, values = iterateList(this, reverse); (value = values()) !== DONE && fn(value, index++, this) !== !1; ) ;
            return index;
        }, List.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID ? this : ownerID ? makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash) : (this.__ownerID = ownerID, 
            this);
        }, List.isList = isList;
        var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@", ListPrototype = List.prototype;
        ListPrototype[IS_LIST_SENTINEL] = !0, ListPrototype[DELETE] = ListPrototype.remove, 
        ListPrototype.setIn = MapPrototype.setIn, ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn, 
        ListPrototype.update = MapPrototype.update, ListPrototype.updateIn = MapPrototype.updateIn, 
        ListPrototype.mergeIn = MapPrototype.mergeIn, ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn, 
        ListPrototype.withMutations = MapPrototype.withMutations, ListPrototype.asMutable = MapPrototype.asMutable, 
        ListPrototype.asImmutable = MapPrototype.asImmutable, ListPrototype.wasAltered = MapPrototype.wasAltered, 
        // TODO: seems like these methods are very similar
        VNode.prototype.removeBefore = function(ownerID, level, index) {
            if (index === level ? 1 << level : 0 === this.array.length) return this;
            var originIndex = index >>> level & MASK;
            if (originIndex >= this.array.length) return new VNode([], ownerID);
            var newChild, removingFirst = 0 === originIndex;
            if (level > 0) {
                var oldChild = this.array[originIndex];
                if (newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index), 
                newChild === oldChild && removingFirst) return this;
            }
            if (removingFirst && !newChild) return this;
            var editable = editableVNode(this, ownerID);
            if (!removingFirst) for (var ii = 0; ii < originIndex; ii++) editable.array[ii] = void 0;
            return newChild && (editable.array[originIndex] = newChild), editable;
        }, VNode.prototype.removeAfter = function(ownerID, level, index) {
            if (index === (level ? 1 << level : 0) || 0 === this.array.length) return this;
            var sizeIndex = index - 1 >>> level & MASK;
            if (sizeIndex >= this.array.length) return this;
            var newChild;
            if (level > 0) {
                var oldChild = this.array[sizeIndex];
                if (newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index), 
                newChild === oldChild && sizeIndex === this.array.length - 1) return this;
            }
            var editable = editableVNode(this, ownerID);
            return editable.array.splice(sizeIndex + 1), newChild && (editable.array[sizeIndex] = newChild), 
            editable;
        };
        var EMPTY_LIST, DONE = {};
        createClass(OrderedMap, Map), OrderedMap.of = function() {
            return this(arguments);
        }, OrderedMap.prototype.toString = function() {
            return this.__toString("OrderedMap {", "}");
        }, // @pragma Access
        OrderedMap.prototype.get = function(k, notSetValue) {
            var index = this._map.get(k);
            return void 0 !== index ? this._list.get(index)[1] : notSetValue;
        }, // @pragma Modification
        OrderedMap.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), 
            this._list.clear(), this) : emptyOrderedMap();
        }, OrderedMap.prototype.set = function(k, v) {
            return updateOrderedMap(this, k, v);
        }, OrderedMap.prototype.remove = function(k) {
            return updateOrderedMap(this, k, NOT_SET);
        }, OrderedMap.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered();
        }, OrderedMap.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._list.__iterate(function(entry) {
                return entry && fn(entry[1], entry[0], this$0);
            }, reverse);
        }, OrderedMap.prototype.__iterator = function(type, reverse) {
            return this._list.fromEntrySeq().__iterator(type, reverse);
        }, OrderedMap.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map.__ensureOwner(ownerID), newList = this._list.__ensureOwner(ownerID);
            return ownerID ? makeOrderedMap(newMap, newList, ownerID, this.__hash) : (this.__ownerID = ownerID, 
            this._map = newMap, this._list = newList, this);
        }, OrderedMap.isOrderedMap = isOrderedMap, OrderedMap.prototype[IS_ORDERED_SENTINEL] = !0, 
        OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
        var EMPTY_ORDERED_MAP;
        createClass(ToKeyedSequence, KeyedSeq), ToKeyedSequence.prototype.get = function(key, notSetValue) {
            return this._iter.get(key, notSetValue);
        }, ToKeyedSequence.prototype.has = function(key) {
            return this._iter.has(key);
        }, ToKeyedSequence.prototype.valueSeq = function() {
            return this._iter.valueSeq();
        }, ToKeyedSequence.prototype.reverse = function() {
            var this$0 = this, reversedSequence = reverseFactory(this, !0);
            return this._useKeys || (reversedSequence.valueSeq = function() {
                return this$0._iter.toSeq().reverse();
            }), reversedSequence;
        }, ToKeyedSequence.prototype.map = function(mapper, context) {
            var this$0 = this, mappedSequence = mapFactory(this, mapper, context);
            return this._useKeys || (mappedSequence.valueSeq = function() {
                return this$0._iter.toSeq().map(mapper, context);
            }), mappedSequence;
        }, ToKeyedSequence.prototype.__iterate = function(fn, reverse) {
            var ii, this$0 = this;
            return this._iter.__iterate(this._useKeys ? function(v, k) {
                return fn(v, k, this$0);
            } : (ii = reverse ? resolveSize(this) : 0, function(v) {
                return fn(v, reverse ? --ii : ii++, this$0);
            }), reverse);
        }, ToKeyedSequence.prototype.__iterator = function(type, reverse) {
            if (this._useKeys) return this._iter.__iterator(type, reverse);
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse), ii = reverse ? resolveSize(this) : 0;
            return new Iterator(function() {
                var step = iterator.next();
                return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
            });
        }, ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = !0, createClass(ToIndexedSequence, IndexedSeq), 
        ToIndexedSequence.prototype.includes = function(value) {
            return this._iter.includes(value);
        }, ToIndexedSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this, iterations = 0;
            return this._iter.__iterate(function(v) {
                return fn(v, iterations++, this$0);
            }, reverse);
        }, ToIndexedSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse), iterations = 0;
            return new Iterator(function() {
                var step = iterator.next();
                return step.done ? step : iteratorValue(type, iterations++, step.value, step);
            });
        }, createClass(ToSetSequence, SetSeq), ToSetSequence.prototype.has = function(key) {
            return this._iter.includes(key);
        }, ToSetSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._iter.__iterate(function(v) {
                return fn(v, v, this$0);
            }, reverse);
        }, ToSetSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
            return new Iterator(function() {
                var step = iterator.next();
                return step.done ? step : iteratorValue(type, step.value, step.value, step);
            });
        }, createClass(FromEntriesSequence, KeyedSeq), FromEntriesSequence.prototype.entrySeq = function() {
            return this._iter.toSeq();
        }, FromEntriesSequence.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._iter.__iterate(function(entry) {
                // Check if entry exists first so array access doesn't throw for holes
                // in the parent iteration.
                if (entry) {
                    validateEntry(entry);
                    var indexedIterable = isIterable(entry);
                    return fn(indexedIterable ? entry.get(1) : entry[1], indexedIterable ? entry.get(0) : entry[0], this$0);
                }
            }, reverse);
        }, FromEntriesSequence.prototype.__iterator = function(type, reverse) {
            var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
            return new Iterator(function() {
                for (;;) {
                    var step = iterator.next();
                    if (step.done) return step;
                    var entry = step.value;
                    // Check if entry exists first so array access doesn't throw for holes
                    // in the parent iteration.
                    if (entry) {
                        validateEntry(entry);
                        var indexedIterable = isIterable(entry);
                        return iteratorValue(type, indexedIterable ? entry.get(0) : entry[0], indexedIterable ? entry.get(1) : entry[1], step);
                    }
                }
            });
        }, ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough, 
        createClass(Record, KeyedCollection), Record.prototype.toString = function() {
            return this.__toString(recordName(this) + " {", "}");
        }, // @pragma Access
        Record.prototype.has = function(k) {
            return this._defaultValues.hasOwnProperty(k);
        }, Record.prototype.get = function(k, notSetValue) {
            if (!this.has(k)) return notSetValue;
            var defaultVal = this._defaultValues[k];
            return this._map ? this._map.get(k, defaultVal) : defaultVal;
        }, // @pragma Modification
        Record.prototype.clear = function() {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var RecordType = this.constructor;
            return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
        }, Record.prototype.set = function(k, v) {
            if (!this.has(k)) throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
            if (this._map && !this._map.has(k)) {
                var defaultVal = this._defaultValues[k];
                if (v === defaultVal) return this;
            }
            var newMap = this._map && this._map.set(k, v);
            return this.__ownerID || newMap === this._map ? this : makeRecord(this, newMap);
        }, Record.prototype.remove = function(k) {
            if (!this.has(k)) return this;
            var newMap = this._map && this._map.remove(k);
            return this.__ownerID || newMap === this._map ? this : makeRecord(this, newMap);
        }, Record.prototype.wasAltered = function() {
            return this._map.wasAltered();
        }, Record.prototype.__iterator = function(type, reverse) {
            var this$0 = this;
            return KeyedIterable(this._defaultValues).map(function(_, k) {
                return this$0.get(k);
            }).__iterator(type, reverse);
        }, Record.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return KeyedIterable(this._defaultValues).map(function(_, k) {
                return this$0.get(k);
            }).__iterate(fn, reverse);
        }, Record.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map && this._map.__ensureOwner(ownerID);
            return ownerID ? makeRecord(this, newMap, ownerID) : (this.__ownerID = ownerID, 
            this._map = newMap, this);
        };
        var RecordPrototype = Record.prototype;
        RecordPrototype[DELETE] = RecordPrototype.remove, RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn, 
        RecordPrototype.merge = MapPrototype.merge, RecordPrototype.mergeWith = MapPrototype.mergeWith, 
        RecordPrototype.mergeIn = MapPrototype.mergeIn, RecordPrototype.mergeDeep = MapPrototype.mergeDeep, 
        RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith, RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn, 
        RecordPrototype.setIn = MapPrototype.setIn, RecordPrototype.update = MapPrototype.update, 
        RecordPrototype.updateIn = MapPrototype.updateIn, RecordPrototype.withMutations = MapPrototype.withMutations, 
        RecordPrototype.asMutable = MapPrototype.asMutable, RecordPrototype.asImmutable = MapPrototype.asImmutable, 
        createClass(Set, SetCollection), Set.of = function() {
            return this(arguments);
        }, Set.fromKeys = function(value) {
            return this(KeyedIterable(value).keySeq());
        }, Set.prototype.toString = function() {
            return this.__toString("Set {", "}");
        }, // @pragma Access
        Set.prototype.has = function(value) {
            return this._map.has(value);
        }, // @pragma Modification
        Set.prototype.add = function(value) {
            return updateSet(this, this._map.set(value, !0));
        }, Set.prototype.remove = function(value) {
            return updateSet(this, this._map.remove(value));
        }, Set.prototype.clear = function() {
            return updateSet(this, this._map.clear());
        }, // @pragma Composition
        Set.prototype.union = function() {
            var iters = SLICE$0.call(arguments, 0);
            return iters = iters.filter(function(x) {
                return 0 !== x.size;
            }), 0 === iters.length ? this : 0 !== this.size || this.__ownerID || 1 !== iters.length ? this.withMutations(function(set) {
                for (var ii = 0; ii < iters.length; ii++) SetIterable(iters[ii]).forEach(function(value) {
                    return set.add(value);
                });
            }) : this.constructor(iters[0]);
        }, Set.prototype.intersect = function() {
            var iters = SLICE$0.call(arguments, 0);
            if (0 === iters.length) return this;
            iters = iters.map(function(iter) {
                return SetIterable(iter);
            });
            var originalSet = this;
            return this.withMutations(function(set) {
                originalSet.forEach(function(value) {
                    iters.every(function(iter) {
                        return iter.includes(value);
                    }) || set.remove(value);
                });
            });
        }, Set.prototype.subtract = function() {
            var iters = SLICE$0.call(arguments, 0);
            if (0 === iters.length) return this;
            iters = iters.map(function(iter) {
                return SetIterable(iter);
            });
            var originalSet = this;
            return this.withMutations(function(set) {
                originalSet.forEach(function(value) {
                    iters.some(function(iter) {
                        return iter.includes(value);
                    }) && set.remove(value);
                });
            });
        }, Set.prototype.merge = function() {
            return this.union.apply(this, arguments);
        }, Set.prototype.mergeWith = function(merger) {
            var iters = SLICE$0.call(arguments, 1);
            return this.union.apply(this, iters);
        }, Set.prototype.sort = function(comparator) {
            // Late binding
            return OrderedSet(sortFactory(this, comparator));
        }, Set.prototype.sortBy = function(mapper, comparator) {
            // Late binding
            return OrderedSet(sortFactory(this, comparator, mapper));
        }, Set.prototype.wasAltered = function() {
            return this._map.wasAltered();
        }, Set.prototype.__iterate = function(fn, reverse) {
            var this$0 = this;
            return this._map.__iterate(function(_, k) {
                return fn(k, k, this$0);
            }, reverse);
        }, Set.prototype.__iterator = function(type, reverse) {
            return this._map.map(function(_, k) {
                return k;
            }).__iterator(type, reverse);
        }, Set.prototype.__ensureOwner = function(ownerID) {
            if (ownerID === this.__ownerID) return this;
            var newMap = this._map.__ensureOwner(ownerID);
            return ownerID ? this.__make(newMap, ownerID) : (this.__ownerID = ownerID, this._map = newMap, 
            this);
        }, Set.isSet = isSet;
        var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@", SetPrototype = Set.prototype;
        SetPrototype[IS_SET_SENTINEL] = !0, SetPrototype[DELETE] = SetPrototype.remove, 
        SetPrototype.mergeDeep = SetPrototype.merge, SetPrototype.mergeDeepWith = SetPrototype.mergeWith, 
        SetPrototype.withMutations = MapPrototype.withMutations, SetPrototype.asMutable = MapPrototype.asMutable, 
        SetPrototype.asImmutable = MapPrototype.asImmutable, SetPrototype.__empty = emptySet, 
        SetPrototype.__make = makeSet;
        var EMPTY_SET;
        createClass(OrderedSet, Set), OrderedSet.of = function() {
            return this(arguments);
        }, OrderedSet.fromKeys = function(value) {
            return this(KeyedIterable(value).keySeq());
        }, OrderedSet.prototype.toString = function() {
            return this.__toString("OrderedSet {", "}");
        }, OrderedSet.isOrderedSet = isOrderedSet;
        var OrderedSetPrototype = OrderedSet.prototype;
        OrderedSetPrototype[IS_ORDERED_SENTINEL] = !0, OrderedSetPrototype.__empty = emptyOrderedSet, 
        OrderedSetPrototype.__make = makeOrderedSet;
        var EMPTY_ORDERED_SET;
        createClass(Stack, IndexedCollection), Stack.of = function() {
            return this(arguments);
        }, Stack.prototype.toString = function() {
            return this.__toString("Stack [", "]");
        }, // @pragma Access
        Stack.prototype.get = function(index, notSetValue) {
            var head = this._head;
            for (index = wrapIndex(this, index); head && index--; ) head = head.next;
            return head ? head.value : notSetValue;
        }, Stack.prototype.peek = function() {
            return this._head && this._head.value;
        }, // @pragma Modification
        Stack.prototype.push = function() {
            if (0 === arguments.length) return this;
            for (var newSize = this.size + arguments.length, head = this._head, ii = arguments.length - 1; ii >= 0; ii--) head = {
                value: arguments[ii],
                next: head
            };
            return this.__ownerID ? (this.size = newSize, this._head = head, this.__hash = void 0, 
            this.__altered = !0, this) : makeStack(newSize, head);
        }, Stack.prototype.pushAll = function(iter) {
            if (iter = IndexedIterable(iter), 0 === iter.size) return this;
            assertNotInfinite(iter.size);
            var newSize = this.size, head = this._head;
            return iter.reverse().forEach(function(value) {
                newSize++, head = {
                    value: value,
                    next: head
                };
            }), this.__ownerID ? (this.size = newSize, this._head = head, this.__hash = void 0, 
            this.__altered = !0, this) : makeStack(newSize, head);
        }, Stack.prototype.pop = function() {
            return this.slice(1);
        }, Stack.prototype.unshift = function() {
            return this.push.apply(this, arguments);
        }, Stack.prototype.unshiftAll = function(iter) {
            return this.pushAll(iter);
        }, Stack.prototype.shift = function() {
            return this.pop.apply(this, arguments);
        }, Stack.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, 
            this.__hash = void 0, this.__altered = !0, this) : emptyStack();
        }, Stack.prototype.slice = function(begin, end) {
            if (wholeSlice(begin, end, this.size)) return this;
            var resolvedBegin = resolveBegin(begin, this.size), resolvedEnd = resolveEnd(end, this.size);
            if (resolvedEnd !== this.size) // super.slice(begin, end);
            return IndexedCollection.prototype.slice.call(this, begin, end);
            for (var newSize = this.size - resolvedBegin, head = this._head; resolvedBegin--; ) head = head.next;
            return this.__ownerID ? (this.size = newSize, this._head = head, this.__hash = void 0, 
            this.__altered = !0, this) : makeStack(newSize, head);
        }, // @pragma Mutability
        Stack.prototype.__ensureOwner = function(ownerID) {
            return ownerID === this.__ownerID ? this : ownerID ? makeStack(this.size, this._head, ownerID, this.__hash) : (this.__ownerID = ownerID, 
            this.__altered = !1, this);
        }, // @pragma Iteration
        Stack.prototype.__iterate = function(fn, reverse) {
            if (reverse) return this.reverse().__iterate(fn);
            for (var iterations = 0, node = this._head; node && fn(node.value, iterations++, this) !== !1; ) node = node.next;
            return iterations;
        }, Stack.prototype.__iterator = function(type, reverse) {
            if (reverse) return this.reverse().__iterator(type);
            var iterations = 0, node = this._head;
            return new Iterator(function() {
                if (node) {
                    var value = node.value;
                    return node = node.next, iteratorValue(type, iterations++, value);
                }
                return iteratorDone();
            });
        }, Stack.isStack = isStack;
        var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@", StackPrototype = Stack.prototype;
        StackPrototype[IS_STACK_SENTINEL] = !0, StackPrototype.withMutations = MapPrototype.withMutations, 
        StackPrototype.asMutable = MapPrototype.asMutable, StackPrototype.asImmutable = MapPrototype.asImmutable, 
        StackPrototype.wasAltered = MapPrototype.wasAltered;
        var EMPTY_STACK;
        Iterable.Iterator = Iterator, mixin(Iterable, {
            // ### Conversion to other types
            toArray: function() {
                assertNotInfinite(this.size);
                var array = new Array(this.size || 0);
                return this.valueSeq().__iterate(function(v, i) {
                    array[i] = v;
                }), array;
            },
            toIndexedSeq: function() {
                return new ToIndexedSequence(this);
            },
            toJS: function() {
                return this.toSeq().map(function(value) {
                    return value && "function" == typeof value.toJS ? value.toJS() : value;
                }).__toJS();
            },
            toJSON: function() {
                return this.toSeq().map(function(value) {
                    return value && "function" == typeof value.toJSON ? value.toJSON() : value;
                }).__toJS();
            },
            toKeyedSeq: function() {
                return new ToKeyedSequence(this, !0);
            },
            toMap: function() {
                // Use Late Binding here to solve the circular dependency.
                return Map(this.toKeyedSeq());
            },
            toObject: function() {
                assertNotInfinite(this.size);
                var object = {};
                return this.__iterate(function(v, k) {
                    object[k] = v;
                }), object;
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
                return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
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
                return "[Iterable]";
            },
            __toString: function(head, tail) {
                return 0 === this.size ? head + tail : head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
            },
            // ### ES6 Collection methods (ES6 Array and Map)
            concat: function() {
                var values = SLICE$0.call(arguments, 0);
                return reify(this, concatFactory(this, values));
            },
            includes: function(searchValue) {
                return this.some(function(value) {
                    return is(value, searchValue);
                });
            },
            entries: function() {
                return this.__iterator(ITERATE_ENTRIES);
            },
            every: function(predicate, context) {
                assertNotInfinite(this.size);
                var returnValue = !0;
                return this.__iterate(function(v, k, c) {
                    if (!predicate.call(context, v, k, c)) return returnValue = !1, !1;
                }), returnValue;
            },
            filter: function(predicate, context) {
                return reify(this, filterFactory(this, predicate, context, !0));
            },
            find: function(predicate, context, notSetValue) {
                var entry = this.findEntry(predicate, context);
                return entry ? entry[1] : notSetValue;
            },
            forEach: function(sideEffect, context) {
                return assertNotInfinite(this.size), this.__iterate(context ? sideEffect.bind(context) : sideEffect);
            },
            join: function(separator) {
                assertNotInfinite(this.size), separator = void 0 !== separator ? "" + separator : ",";
                var joined = "", isFirst = !0;
                return this.__iterate(function(v) {
                    isFirst ? isFirst = !1 : joined += separator, joined += null !== v && void 0 !== v ? v.toString() : "";
                }), joined;
            },
            keys: function() {
                return this.__iterator(ITERATE_KEYS);
            },
            map: function(mapper, context) {
                return reify(this, mapFactory(this, mapper, context));
            },
            reduce: function(reducer, initialReduction, context) {
                assertNotInfinite(this.size);
                var reduction, useFirst;
                return arguments.length < 2 ? useFirst = !0 : reduction = initialReduction, this.__iterate(function(v, k, c) {
                    useFirst ? (useFirst = !1, reduction = v) : reduction = reducer.call(context, reduction, v, k, c);
                }), reduction;
            },
            reduceRight: function(reducer, initialReduction, context) {
                var reversed = this.toKeyedSeq().reverse();
                return reversed.reduce.apply(reversed, arguments);
            },
            reverse: function() {
                return reify(this, reverseFactory(this, !0));
            },
            slice: function(begin, end) {
                return reify(this, sliceFactory(this, begin, end, !0));
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
                return void 0 !== this.size ? 0 === this.size : !this.some(function() {
                    return !0;
                });
            },
            count: function(predicate, context) {
                return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
            },
            countBy: function(grouper, context) {
                return countByFactory(this, grouper, context);
            },
            equals: function(other) {
                return deepEqual(this, other);
            },
            entrySeq: function() {
                var iterable = this;
                if (iterable._cache) // We cache as an entries array, so we can just return the cache!
                return new ArraySeq(iterable._cache);
                var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
                return entriesSequence.fromEntrySeq = function() {
                    return iterable.toSeq();
                }, entriesSequence;
            },
            filterNot: function(predicate, context) {
                return this.filter(not(predicate), context);
            },
            findEntry: function(predicate, context, notSetValue) {
                var found = notSetValue;
                return this.__iterate(function(v, k, c) {
                    if (predicate.call(context, v, k, c)) return found = [ k, v ], !1;
                }), found;
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
                return reify(this, flattenFactory(this, depth, !0));
            },
            fromEntrySeq: function() {
                return new FromEntriesSequence(this);
            },
            get: function(searchKey, notSetValue) {
                return this.find(function(_, key) {
                    return is(key, searchKey);
                }, void 0, notSetValue);
            },
            getIn: function(searchKeyPath, notSetValue) {
                for (var step, nested = this, iter = forceIterator(searchKeyPath); !(step = iter.next()).done; ) {
                    var key = step.value;
                    if (nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET, nested === NOT_SET) return notSetValue;
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
                return iter = "function" == typeof iter.includes ? iter : Iterable(iter), this.every(function(value) {
                    return iter.includes(value);
                });
            },
            isSuperset: function(iter) {
                return iter = "function" == typeof iter.isSubset ? iter : Iterable(iter), iter.isSubset(this);
            },
            keyOf: function(searchValue) {
                return this.findKey(function(value) {
                    return is(value, searchValue);
                });
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
                return reify(this, skipWhileFactory(this, predicate, context, !0));
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
        });
        // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
        // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
        // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
        // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
        var IterablePrototype = Iterable.prototype;
        IterablePrototype[IS_ITERABLE_SENTINEL] = !0, IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values, 
        IterablePrototype.__toJS = IterablePrototype.toArray, IterablePrototype.__toStringMapper = quoteString, 
        IterablePrototype.inspect = IterablePrototype.toSource = function() {
            return this.toString();
        }, IterablePrototype.chain = IterablePrototype.flatMap, IterablePrototype.contains = IterablePrototype.includes, 
        mixin(KeyedIterable, {
            // ### More sequential methods
            flip: function() {
                return reify(this, flipFactory(this));
            },
            mapEntries: function(mapper, context) {
                var this$0 = this, iterations = 0;
                return reify(this, this.toSeq().map(function(v, k) {
                    return mapper.call(context, [ k, v ], iterations++, this$0);
                }).fromEntrySeq());
            },
            mapKeys: function(mapper, context) {
                var this$0 = this;
                return reify(this, this.toSeq().flip().map(function(k, v) {
                    return mapper.call(context, k, v, this$0);
                }).flip());
            }
        });
        var KeyedIterablePrototype = KeyedIterable.prototype;
        KeyedIterablePrototype[IS_KEYED_SENTINEL] = !0, KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries, 
        KeyedIterablePrototype.__toJS = IterablePrototype.toObject, KeyedIterablePrototype.__toStringMapper = function(v, k) {
            return JSON.stringify(k) + ": " + quoteString(v);
        }, mixin(IndexedIterable, {
            // ### Conversion to other types
            toKeyedSeq: function() {
                return new ToKeyedSequence(this, !1);
            },
            // ### ES6 Collection methods (ES6 Array and Map)
            filter: function(predicate, context) {
                return reify(this, filterFactory(this, predicate, context, !1));
            },
            findIndex: function(predicate, context) {
                var entry = this.findEntry(predicate, context);
                return entry ? entry[0] : -1;
            },
            indexOf: function(searchValue) {
                var key = this.keyOf(searchValue);
                return void 0 === key ? -1 : key;
            },
            lastIndexOf: function(searchValue) {
                var key = this.lastKeyOf(searchValue);
                return void 0 === key ? -1 : key;
            },
            reverse: function() {
                return reify(this, reverseFactory(this, !1));
            },
            slice: function(begin, end) {
                return reify(this, sliceFactory(this, begin, end, !1));
            },
            splice: function(index, removeNum) {
                var numArgs = arguments.length;
                if (removeNum = Math.max(0 | removeNum, 0), 0 === numArgs || 2 === numArgs && !removeNum) return this;
                // If index is negative, it should resolve relative to the size of the
                // collection. However size may be expensive to compute if not cached, so
                // only call count() if the number is in fact negative.
                index = resolveBegin(index, index < 0 ? this.count() : this.size);
                var spliced = this.slice(0, index);
                return reify(this, 1 === numArgs ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
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
                return reify(this, flattenFactory(this, depth, !1));
            },
            get: function(index, notSetValue) {
                return index = wrapIndex(this, index), index < 0 || this.size === 1 / 0 || void 0 !== this.size && index > this.size ? notSetValue : this.find(function(_, key) {
                    return key === index;
                }, void 0, notSetValue);
            },
            has: function(index) {
                return index = wrapIndex(this, index), index >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || index < this.size : this.indexOf(index) !== -1);
            },
            interpose: function(separator) {
                return reify(this, interposeFactory(this, separator));
            },
            interleave: function() {
                var iterables = [ this ].concat(arrCopy(arguments)), zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables), interleaved = zipped.flatten(!0);
                return zipped.size && (interleaved.size = zipped.size * iterables.length), reify(this, interleaved);
            },
            keySeq: function() {
                return Range(0, this.size);
            },
            last: function() {
                return this.get(-1);
            },
            skipWhile: function(predicate, context) {
                return reify(this, skipWhileFactory(this, predicate, context, !1));
            },
            zip: function() {
                var iterables = [ this ].concat(arrCopy(arguments));
                return reify(this, zipWithFactory(this, defaultZipper, iterables));
            },
            zipWith: function(zipper) {
                var iterables = arrCopy(arguments);
                return iterables[0] = this, reify(this, zipWithFactory(this, zipper, iterables));
            }
        }), IndexedIterable.prototype[IS_INDEXED_SENTINEL] = !0, IndexedIterable.prototype[IS_ORDERED_SENTINEL] = !0, 
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
        }), SetIterable.prototype.has = IterablePrototype.includes, SetIterable.prototype.contains = SetIterable.prototype.includes, 
        // Mixin subclasses
        mixin(KeyedSeq, KeyedIterable.prototype), mixin(IndexedSeq, IndexedIterable.prototype), 
        mixin(SetSeq, SetIterable.prototype), mixin(KeyedCollection, KeyedIterable.prototype), 
        mixin(IndexedCollection, IndexedIterable.prototype), mixin(SetCollection, SetIterable.prototype);
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
    });
}, /* 147 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function insertBlockAfter(editorState, blockKey, newType) {
        var content = editorState.getCurrentContent(), blockMap = content.getBlockMap(), block = blockMap.get(blockKey), blocksBefore = blockMap.toSeq().takeUntil(function(v) {
            return v === block;
        }), blocksAfter = blockMap.toSeq().skipUntil(function(v) {
            return v === block;
        }).rest(), newBlockKey = (0, _draftJs.genKey)(), newBlock = new _draftJs.ContentBlock({
            key: newBlockKey,
            type: newType,
            text: "",
            characterList: block.getCharacterList().slice(0, 0),
            depth: 0
        }), newBlockMap = blocksBefore.concat([ [ blockKey, block ], [ newBlockKey, newBlock ] ], blocksAfter).toOrderedMap(), selection = editorState.getSelection(), newContent = content.merge({
            blockMap: newBlockMap,
            selectionBefore: selection,
            selectionAfter: selection.merge({
                anchorKey: newBlockKey,
                anchorOffset: 0,
                focusKey: newBlockKey,
                focusOffset: 0,
                isBackward: !1
            })
        });
        return _draftJs.EditorState.push(editorState, newContent, "split-block");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = insertBlockAfter;
    var _draftJs = __webpack_require__(2);
}, /* 148 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function isListItem(block) {
        var blockType = block.getType();
        return blockType === _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM || blockType === _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM;
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = isListItem;
    var _draftJsUtils = __webpack_require__(149);
}, /* 149 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _Constants = __webpack_require__(150);
    Object.keys(_Constants).forEach(function(key) {
        "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: function() {
                return _Constants[key];
            }
        });
    }), Object.defineProperty(exports, "Constants", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_Constants).default;
        }
    });
    var _getEntityRanges = __webpack_require__(151);
    Object.defineProperty(exports, "getEntityRanges", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_getEntityRanges).default;
        }
    });
    var _getSelectedBlocks = __webpack_require__(152);
    Object.defineProperty(exports, "getSelectedBlocks", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_getSelectedBlocks).default;
        }
    });
    var _selectionContainsEntity = __webpack_require__(153);
    Object.defineProperty(exports, "selectionContainsEntity", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_selectionContainsEntity).default;
        }
    });
    var _callModifierForSelectedBlocks = __webpack_require__(154);
    Object.defineProperty(exports, "callModifierForSelectedBlocks", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_callModifierForSelectedBlocks).default;
        }
    });
}, /* 150 */
/***/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var BLOCK_TYPE = exports.BLOCK_TYPE = {
        // This is used to represent a normal text block (paragraph).
        UNSTYLED: "unstyled",
        HEADER_ONE: "header-one",
        HEADER_TWO: "header-two",
        HEADER_THREE: "header-three",
        HEADER_FOUR: "header-four",
        HEADER_FIVE: "header-five",
        HEADER_SIX: "header-six",
        UNORDERED_LIST_ITEM: "unordered-list-item",
        ORDERED_LIST_ITEM: "ordered-list-item",
        BLOCKQUOTE: "blockquote",
        PULLQUOTE: "pullquote",
        CODE: "code-block",
        ATOMIC: "atomic"
    }, ENTITY_TYPE = exports.ENTITY_TYPE = {
        LINK: "LINK",
        IMAGE: "IMAGE"
    }, INLINE_STYLE = exports.INLINE_STYLE = {
        BOLD: "BOLD",
        CODE: "CODE",
        ITALIC: "ITALIC",
        STRIKETHROUGH: "STRIKETHROUGH",
        UNDERLINE: "UNDERLINE"
    };
    exports.default = {
        BLOCK_TYPE: BLOCK_TYPE,
        ENTITY_TYPE: ENTITY_TYPE,
        INLINE_STYLE: INLINE_STYLE
    };
}, /* 151 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function getEntityRanges(text, charMetaList) {
        for (var charEntity = null, prevCharEntity = null, ranges = [], rangeStart = 0, i = 0, len = text.length; i < len; i++) {
            prevCharEntity = charEntity;
            var meta = charMetaList.get(i);
            charEntity = meta ? meta.getEntity() : null, i > 0 && charEntity !== prevCharEntity && (ranges.push([ prevCharEntity, getStyleRanges(text.slice(rangeStart, i), charMetaList.slice(rangeStart, i)) ]), 
            rangeStart = i);
        }
        return ranges.push([ charEntity, getStyleRanges(text.slice(rangeStart), charMetaList.slice(rangeStart)) ]), 
        ranges;
    }
    function getStyleRanges(text, charMetaList) {
        for (var charStyle = EMPTY_SET, prevCharStyle = EMPTY_SET, ranges = [], rangeStart = 0, i = 0, len = text.length; i < len; i++) {
            prevCharStyle = charStyle;
            var meta = charMetaList.get(i);
            charStyle = meta ? meta.getStyle() : EMPTY_SET, i > 0 && !(0, _immutable.is)(charStyle, prevCharStyle) && (ranges.push([ text.slice(rangeStart, i), prevCharStyle ]), 
            rangeStart = i);
        }
        return ranges.push([ text.slice(rangeStart), charStyle ]), ranges;
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.EMPTY_SET = void 0, exports.default = getEntityRanges;
    var _immutable = __webpack_require__(146), EMPTY_SET = exports.EMPTY_SET = new _immutable.OrderedSet();
}, /* 152 */
/***/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), /**
	 * Returns an array of all `ContentBlock` instances within two block keys
	 *
	 * @param  {object} contentState A draft.js `ContentState` instance
	 * @param  {string} anchorKey    The block key to start searching from
	 * @param  {string} focusKey     The block key until which to search
	 *
	 * @return {array} An array containing the found content blocks
	 */
    exports.default = function(contentState, anchorKey, focusKey) {
        var isSameBlock = anchorKey === focusKey, startingBlock = contentState.getBlockForKey(anchorKey);
        if (!startingBlock) return [];
        var selectedBlocks = [ startingBlock ];
        if (!isSameBlock) for (var blockKey = anchorKey; blockKey !== focusKey; ) {
            var nextBlock = contentState.getBlockAfter(blockKey);
            if (!nextBlock) {
                selectedBlocks = [];
                break;
            }
            selectedBlocks.push(nextBlock), blockKey = nextBlock.getKey();
        }
        return selectedBlocks;
    };
}, /* 153 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _getSelectedBlocks = __webpack_require__(152), _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);
    exports.default = function(strategy) {
        return function(editorState, selection) {
            var contentState = editorState.getCurrentContent(), currentSelection = selection || editorState.getSelection(), startKey = currentSelection.getStartKey(), endKey = currentSelection.getEndKey(), startOffset = currentSelection.getStartOffset(), endOffset = currentSelection.getEndOffset(), isSameBlock = startKey === endKey, selectedBlocks = (0, 
            _getSelectedBlocks2.default)(contentState, startKey, endKey), entityFound = !1, finalStartOffset = startOffset + 1, finalEndOffset = endOffset - 1;
            return selectedBlocks.forEach(function(block) {
                strategy(block, function(start, end) {
                    if (!entityFound) {
                        var blockKey = block.getKey();
                        isSameBlock && (end < finalStartOffset || start > finalEndOffset) || blockKey === startKey && end < finalStartOffset || blockKey === endKey && start > finalEndOffset || (entityFound = !0);
                    }
                });
            }), entityFound;
        };
    };
}, /* 154 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _draftJs = __webpack_require__(2), _getSelectedBlocks = __webpack_require__(152), _getSelectedBlocks2 = _interopRequireDefault(_getSelectedBlocks);
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
    exports.default = function(editorState, modifier) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
        var contentState = editorState.getCurrentContent(), currentSelection = editorState.getSelection(), startKey = currentSelection.getStartKey(), endKey = currentSelection.getEndKey(), startOffset = currentSelection.getStartOffset(), endOffset = currentSelection.getEndOffset(), isSameBlock = startKey === endKey, selectedBlocks = (0, 
        _getSelectedBlocks2.default)(contentState, startKey, endKey), finalEditorState = editorState;
        return selectedBlocks.forEach(function(block) {
            var currentBlockKey = block.getKey(), selectionStart = startOffset, selectionEnd = endOffset;
            currentBlockKey === startKey ? (selectionStart = startOffset, selectionEnd = isSameBlock ? endOffset : block.getText().length) : currentBlockKey === endKey ? (selectionStart = isSameBlock ? startOffset : 0, 
            selectionEnd = endOffset) : (selectionStart = 0, selectionEnd = block.getText().length);
            var selection = new _draftJs.SelectionState({
                anchorKey: currentBlockKey,
                anchorOffset: selectionStart,
                focusKey: currentBlockKey,
                focusOffset: selectionEnd
            });
            finalEditorState = modifier.apply(void 0, [ finalEditorState, selection ].concat(args));
        }), _draftJs.EditorState.forceSelection(finalEditorState, currentSelection);
    };
}, /* 155 */
/***/
function(module, exports, __webpack_require__) {
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
    "use strict";
    function isSoftNewlineEvent(e) {
        return e.which === Keys.RETURN && (e.getModifierState("Shift") || e.getModifierState("Alt") || e.getModifierState("Control"));
    }
    var Keys = __webpack_require__(46);
    module.exports = isSoftNewlineEvent;
}, /* 156 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _KeyBindingUtil = __webpack_require__(100), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _reactDom = __webpack_require__(53), _reactDom2 = _interopRequireDefault(_reactDom), _draftJs = __webpack_require__(2), _draftJsUtils = __webpack_require__(149), _EditorToolbarConfig = __webpack_require__(157), _EditorToolbarConfig2 = _interopRequireDefault(_EditorToolbarConfig), _StyleButton = __webpack_require__(158), _StyleButton2 = _interopRequireDefault(_StyleButton), _PopoverIconButton = __webpack_require__(172), _PopoverIconButton2 = _interopRequireDefault(_PopoverIconButton), _ButtonGroup = __webpack_require__(174), _ButtonGroup2 = _interopRequireDefault(_ButtonGroup), _Dropdown = __webpack_require__(179), _Dropdown2 = _interopRequireDefault(_Dropdown), _IconButton = __webpack_require__(159), _IconButton2 = _interopRequireDefault(_IconButton), _getEntityAtCursor2 = __webpack_require__(182), _getEntityAtCursor3 = _interopRequireDefault(_getEntityAtCursor2), _clearEntityForRange = __webpack_require__(183), _clearEntityForRange2 = _interopRequireDefault(_clearEntityForRange), _classAutobind = __webpack_require__(162), _classAutobind2 = _interopRequireDefault(_classAutobind), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _EditorToolbar = __webpack_require__(184), _EditorToolbar2 = _interopRequireDefault(_EditorToolbar), EditorToolbar = function(_Component) {
        function EditorToolbar() {
            _classCallCheck(this, EditorToolbar);
            var _this = _possibleConstructorReturn(this, (EditorToolbar.__proto__ || Object.getPrototypeOf(EditorToolbar)).apply(this, arguments));
            return (0, _classAutobind2.default)(_this), _this.state = {
                showLinkInput: !1,
                showImageInput: !1
            }, _this;
        }
        return _inherits(EditorToolbar, _Component), _createClass(EditorToolbar, [ {
            key: "componentWillMount",
            value: function() {
                // Technically, we should also attach/detach event listeners when the
                // `keyEmitter` prop changes.
                this.props.keyEmitter.on("keypress", this._onKeypress);
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.props.keyEmitter.removeListener("keypress", this._onKeypress);
            }
        }, {
            key: "render",
            value: function() {
                var _this2 = this, _props = this.props, className = _props.className, toolbarConfig = _props.toolbarConfig;
                null == toolbarConfig && (toolbarConfig = _EditorToolbarConfig2.default);
                var display = toolbarConfig.display || _EditorToolbarConfig2.default.display, buttonsGroups = display.map(function(groupName) {
                    switch (groupName) {
                      case "INLINE_STYLE_BUTTONS":
                        return _this2._renderInlineStyleButtons(groupName, toolbarConfig);

                      case "BLOCK_TYPE_DROPDOWN":
                        return _this2._renderBlockTypeDropdown(groupName, toolbarConfig);

                      case "LINK_BUTTONS":
                        return _this2._renderLinkButtons(groupName, toolbarConfig);

                      case "IMAGE_BUTTON":
                        return _this2._renderImageButton(groupName, toolbarConfig);

                      case "BLOCK_TYPE_BUTTONS":
                        return _this2._renderBlockTypeButtons(groupName, toolbarConfig);

                      case "HISTORY_BUTTONS":
                        return _this2._renderUndoRedo(groupName, toolbarConfig);
                    }
                });
                return _react2.default.createElement("div", {
                    className: (0, _classnames2.default)(_EditorToolbar2.default.root, className)
                }, buttonsGroups);
            }
        }, {
            key: "_renderBlockTypeDropdown",
            value: function(name, toolbarConfig) {
                var blockType = this._getCurrentBlockType(), choices = new Map((toolbarConfig.BLOCK_TYPE_DROPDOWN || []).map(function(type) {
                    return [ type.style, {
                        label: type.label,
                        className: type.className
                    } ];
                }));
                return choices.has(blockType) || (blockType = Array.from(choices.keys())[0]), _react2.default.createElement(_ButtonGroup2.default, {
                    key: name
                }, _react2.default.createElement(_Dropdown2.default, {
                    choices: choices,
                    selectedKey: blockType,
                    onChange: this._selectBlockType
                }));
            }
        }, {
            key: "_renderBlockTypeButtons",
            value: function(name, toolbarConfig) {
                var _this3 = this, blockType = this._getCurrentBlockType(), buttons = (toolbarConfig.BLOCK_TYPE_BUTTONS || []).map(function(type, index) {
                    return _react2.default.createElement(_StyleButton2.default, {
                        key: String(index),
                        isActive: type.style === blockType,
                        label: type.label,
                        onToggle: _this3._toggleBlockType,
                        style: type.style,
                        className: type.className
                    });
                });
                return _react2.default.createElement(_ButtonGroup2.default, {
                    key: name
                }, buttons);
            }
        }, {
            key: "_renderInlineStyleButtons",
            value: function(name, toolbarConfig) {
                var _this4 = this, editorState = this.props.editorState, currentStyle = editorState.getCurrentInlineStyle(), buttons = (toolbarConfig.INLINE_STYLE_BUTTONS || []).map(function(type, index) {
                    return _react2.default.createElement(_StyleButton2.default, {
                        key: String(index),
                        isActive: currentStyle.has(type.style),
                        label: type.label,
                        onToggle: _this4._toggleInlineStyle,
                        style: type.style,
                        className: type.className
                    });
                });
                return _react2.default.createElement(_ButtonGroup2.default, {
                    key: name
                }, buttons);
            }
        }, {
            key: "_renderLinkButtons",
            value: function(name) {
                var editorState = this.props.editorState, selection = editorState.getSelection(), entity = this._getEntityAtCursor(), hasSelection = !selection.isCollapsed(), isCursorOnLink = null != entity && entity.type === _draftJsUtils.ENTITY_TYPE.LINK, shouldShowLinkButton = hasSelection || isCursorOnLink;
                return _react2.default.createElement(_ButtonGroup2.default, {
                    key: name
                }, _react2.default.createElement(_PopoverIconButton2.default, {
                    label: "Link",
                    iconName: "link",
                    isDisabled: !shouldShowLinkButton,
                    showPopover: this.state.showLinkInput,
                    onTogglePopover: this._toggleShowLinkInput,
                    onSubmit: this._setLink
                }), _react2.default.createElement(_IconButton2.default, {
                    label: "Remove Link",
                    iconName: "remove-link",
                    isDisabled: !isCursorOnLink,
                    onClick: this._removeLink,
                    focusOnClick: !1
                }));
            }
        }, {
            key: "_renderImageButton",
            value: function(name) {
                return _react2.default.createElement(_ButtonGroup2.default, {
                    key: name
                }, _react2.default.createElement(_PopoverIconButton2.default, {
                    label: "Image",
                    iconName: "image",
                    showPopover: this.state.showImageInput,
                    onTogglePopover: this._toggleShowImageInput,
                    onSubmit: this._setImage
                }));
            }
        }, {
            key: "_renderUndoRedo",
            value: function(name) {
                var editorState = this.props.editorState, canUndo = 0 !== editorState.getUndoStack().size, canRedo = 0 !== editorState.getRedoStack().size;
                return _react2.default.createElement(_ButtonGroup2.default, {
                    key: name
                }, _react2.default.createElement(_IconButton2.default, {
                    label: "Undo",
                    iconName: "undo",
                    isDisabled: !canUndo,
                    onClick: this._undo,
                    focusOnClick: !1
                }), _react2.default.createElement(_IconButton2.default, {
                    label: "Redo",
                    iconName: "redo",
                    isDisabled: !canRedo,
                    onClick: this._redo,
                    focusOnClick: !1
                }));
            }
        }, {
            key: "_onKeypress",
            value: function(event, eventFlags) {
                // Catch cmd+k for use with link insertion.
                (0, _KeyBindingUtil.hasCommandModifier)(event) && 75 === event.keyCode && (// TODO: Ensure there is some text selected.
                this.setState({
                    showLinkInput: !0
                }), eventFlags.wasHandled = !0);
            }
        }, {
            key: "_toggleShowLinkInput",
            value: function(event) {
                var isShowing = this.state.showLinkInput;
                // If this is a hide request, decide if we should focus the editor.
                if (isShowing) {
                    var shouldFocusEditor = !0;
                    if (event && "click" === event.type) {
                        // TODO: Use a better way to get the editor root node.
                        var editorRoot = _reactDom2.default.findDOMNode(this).parentNode, _document = document, activeElement = _document.activeElement, wasClickAway = null == activeElement || activeElement === document.body;
                        wasClickAway || editorRoot.contains(activeElement) || (shouldFocusEditor = !1);
                    }
                    shouldFocusEditor && this.props.focusEditor();
                }
                this.setState({
                    showLinkInput: !isShowing
                });
            }
        }, {
            key: "_toggleShowImageInput",
            value: function(event) {
                var isShowing = this.state.showImageInput;
                // If this is a hide request, decide if we should focus the editor.
                if (isShowing) {
                    var shouldFocusEditor = !0;
                    if (event && "click" === event.type) {
                        // TODO: Use a better way to get the editor root node.
                        var editorRoot = _reactDom2.default.findDOMNode(this).parentNode, _document2 = document, activeElement = _document2.activeElement, wasClickAway = null == activeElement || activeElement === document.body;
                        wasClickAway || editorRoot.contains(activeElement) || (shouldFocusEditor = !1);
                    }
                    shouldFocusEditor && this.props.focusEditor();
                }
                this.setState({
                    showImageInput: !isShowing
                });
            }
        }, {
            key: "_setImage",
            value: function(src) {
                var editorState = this.props.editorState, contentState = editorState.getCurrentContent(), selection = editorState.getSelection(), entityKey = _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.IMAGE, "IMMUTABLE", {
                    src: src
                }), updatedContent = _draftJs.Modifier.insertText(contentState, selection, " ", null, entityKey);
                this.setState({
                    showImageInput: !1
                }), this.props.onChange(_draftJs.EditorState.push(editorState, updatedContent)), 
                this._focusEditor();
            }
        }, {
            key: "_setLink",
            value: function(url) {
                var editorState = this.props.editorState, selection = editorState.getSelection(), entityKey = _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.LINK, "MUTABLE", {
                    url: url
                });
                this.setState({
                    showLinkInput: !1
                }), this.props.onChange(_draftJs.RichUtils.toggleLink(editorState, selection, entityKey)), 
                this._focusEditor();
            }
        }, {
            key: "_removeLink",
            value: function() {
                var editorState = this.props.editorState, entity = (0, _getEntityAtCursor3.default)(editorState);
                if (null != entity) {
                    var blockKey = entity.blockKey, startOffset = entity.startOffset, endOffset = entity.endOffset;
                    this.props.onChange((0, _clearEntityForRange2.default)(editorState, blockKey, startOffset, endOffset));
                }
            }
        }, {
            key: "_getEntityAtCursor",
            value: function() {
                var editorState = this.props.editorState, entity = (0, _getEntityAtCursor3.default)(editorState);
                return null == entity ? null : _draftJs.Entity.get(entity.entityKey);
            }
        }, {
            key: "_getCurrentBlockType",
            value: function() {
                var editorState = this.props.editorState, selection = editorState.getSelection();
                return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
            }
        }, {
            key: "_selectBlockType",
            value: function() {
                this._toggleBlockType.apply(this, arguments), this._focusEditor();
            }
        }, {
            key: "_toggleBlockType",
            value: function(blockType) {
                this.props.onChange(_draftJs.RichUtils.toggleBlockType(this.props.editorState, blockType));
            }
        }, {
            key: "_toggleInlineStyle",
            value: function(inlineStyle) {
                this.props.onChange(_draftJs.RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle));
            }
        }, {
            key: "_undo",
            value: function() {
                var editorState = this.props.editorState;
                this.props.onChange(_draftJs.EditorState.undo(editorState));
            }
        }, {
            key: "_redo",
            value: function() {
                var editorState = this.props.editorState;
                this.props.onChange(_draftJs.EditorState.redo(editorState));
            }
        }, {
            key: "_focusEditor",
            value: function() {
                var _this5 = this;
                // Hacky: Wait to focus the editor so we don't lose selection.
                setTimeout(function() {
                    _this5.props.focusEditor();
                }, 50);
            }
        } ]), EditorToolbar;
    }(_react.Component);
    exports.default = EditorToolbar;
}, /* 157 */
/***/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var INLINE_STYLE_BUTTONS = exports.INLINE_STYLE_BUTTONS = [ {
        label: "Bold",
        style: "BOLD"
    }, {
        label: "Italic",
        style: "ITALIC"
    }, {
        label: "Strikethrough",
        style: "STRIKETHROUGH"
    }, {
        label: "Monospace",
        style: "CODE"
    }, {
        label: "Underline",
        style: "UNDERLINE"
    } ], BLOCK_TYPE_DROPDOWN = exports.BLOCK_TYPE_DROPDOWN = [ {
        label: "Normal",
        style: "unstyled"
    }, {
        label: "Heading Large",
        style: "header-one"
    }, {
        label: "Heading Medium",
        style: "header-two"
    }, {
        label: "Heading Small",
        style: "header-three"
    }, {
        label: "Code Block",
        style: "code-block"
    } ], BLOCK_TYPE_BUTTONS = exports.BLOCK_TYPE_BUTTONS = [ {
        label: "UL",
        style: "unordered-list-item"
    }, {
        label: "OL",
        style: "ordered-list-item"
    }, {
        label: "Blockquote",
        style: "blockquote"
    } ], EditorToolbarConfig = {
        display: [ "INLINE_STYLE_BUTTONS", "BLOCK_TYPE_BUTTONS", "LINK_BUTTONS", "IMAGE_BUTTON", "BLOCK_TYPE_DROPDOWN", "HISTORY_BUTTONS" ],
        INLINE_STYLE_BUTTONS: INLINE_STYLE_BUTTONS,
        BLOCK_TYPE_DROPDOWN: BLOCK_TYPE_DROPDOWN,
        BLOCK_TYPE_BUTTONS: BLOCK_TYPE_BUTTONS
    };
    exports.default = EditorToolbarConfig;
}, /* 158 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
        return target;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _IconButton = __webpack_require__(159), _IconButton2 = _interopRequireDefault(_IconButton), _classAutobind = __webpack_require__(162), _classAutobind2 = _interopRequireDefault(_classAutobind), StyleButton = function(_Component) {
        function StyleButton() {
            _classCallCheck(this, StyleButton);
            var _this = _possibleConstructorReturn(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).apply(this, arguments));
            return (0, _classAutobind2.default)(_this), _this;
        }
        return _inherits(StyleButton, _Component), _createClass(StyleButton, [ {
            key: "render",
            value: function() {
                var _props = this.props, style = _props.style, otherProps = (_props.onToggle, _objectWithoutProperties(_props, [ "style", "onToggle" ])), iconName = style.toLowerCase();
                // `focusOnClick` will prevent the editor from losing focus when a control
                // button is clicked.
                return _react2.default.createElement(_IconButton2.default, _extends({}, otherProps, {
                    iconName: iconName,
                    onClick: this._onClick,
                    focusOnClick: !1
                }));
            }
        }, {
            key: "_onClick",
            value: function() {
                this.props.onToggle(this.props.style);
            }
        } ]), StyleButton;
    }(_react.Component);
    exports.default = StyleButton;
}, /* 159 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
        return target;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _Button = __webpack_require__(161), _Button2 = _interopRequireDefault(_Button), _ButtonWrap = __webpack_require__(167), _ButtonWrap2 = _interopRequireDefault(_ButtonWrap), _IconButton = __webpack_require__(170), _IconButton2 = _interopRequireDefault(_IconButton), IconButton = function(_Component) {
        function IconButton() {
            return _classCallCheck(this, IconButton), _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
        }
        return _inherits(IconButton, _Component), _createClass(IconButton, [ {
            key: "render",
            value: function() {
                var _cx, props = this.props, className = props.className, iconName = props.iconName, label = props.label, children = props.children, isActive = props.isActive, otherProps = _objectWithoutProperties(props, [ "className", "iconName", "label", "children", "isActive" ]);
                return className = (0, _classnames2.default)(className, (_cx = {}, _defineProperty(_cx, _IconButton2.default.root, !0), 
                _defineProperty(_cx, _IconButton2.default.isActive, isActive), _cx)), _react2.default.createElement(_ButtonWrap2.default, null, _react2.default.createElement(_Button2.default, _extends({}, otherProps, {
                    title: label,
                    className: className
                }), _react2.default.createElement("span", {
                    className: _IconButton2.default["icon-" + iconName]
                })), children);
            }
        } ]), IconButton;
    }(_react.Component);
    exports.default = IconButton;
}, /* 160 */
/***/
function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
    /* global define */
    !function() {
        "use strict";
        function classNames() {
            for (var classes = [], i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (arg) {
                    var argType = typeof arg;
                    if ("string" === argType || "number" === argType) classes.push(arg); else if (Array.isArray(arg)) classes.push(classNames.apply(null, arg)); else if ("object" === argType) for (var key in arg) hasOwn.call(arg, key) && arg[key] && classes.push(key);
                }
            }
            return classes.join(" ");
        }
        var hasOwn = {}.hasOwnProperty;
        "undefined" != typeof module && module.exports ? module.exports = classNames : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return classNames;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), // register as 'classnames', consistent with npm package name
        !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
    }();
}, /* 161 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
        return target;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _classAutobind = __webpack_require__(162), _classAutobind2 = _interopRequireDefault(_classAutobind), _Button = __webpack_require__(163), _Button2 = _interopRequireDefault(_Button), Button = function(_Component) {
        function Button() {
            _classCallCheck(this, Button);
            var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
            return (0, _classAutobind2.default)(_this), _this;
        }
        return _inherits(Button, _Component), _createClass(Button, [ {
            key: "render",
            value: function() {
                var props = this.props, className = props.className, isDisabled = props.isDisabled, focusOnClick = props.focusOnClick, formSubmit = props.formSubmit, otherProps = _objectWithoutProperties(props, [ "className", "isDisabled", "focusOnClick", "formSubmit" ]);
                className = (0, _classnames2.default)(className, _Button2.default.root);
                var onMouseDown = focusOnClick === !1 ? this._onMouseDownPreventDefault : props.onMouseDown, type = formSubmit ? "submit" : "button";
                return _react2.default.createElement("button", _extends({
                    type: type
                }, otherProps, {
                    onMouseDown: onMouseDown,
                    className: className,
                    disabled: isDisabled
                }), props.children);
            }
        }, {
            key: "_onMouseDownPreventDefault",
            value: function(event) {
                event.preventDefault();
                var onMouseDown = this.props.onMouseDown;
                null != onMouseDown && onMouseDown(event);
            }
        } ]), Button;
    }(_react.Component);
    exports.default = Button;
}, /* 162 */
/***/
function(module, exports) {
    "use strict";
    function isExcluded(methodName) {
        return REACT_EXCLUDE_METHODS[methodName] === !0;
    }
    function isFunction(item) {
        return "function" == typeof item;
    }
    function autobind(instance, proto) {
        null == proto && (proto = Object.getPrototypeOf(instance));
        for (var propertyNames = Object.getOwnPropertyNames(proto), _iterator = propertyNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                if (_i = _iterator.next(), _i.done) break;
                _ref = _i.value;
            }
            var name = _ref, value = proto[name];
            isFunction(value) && !isExcluded(name) && (instance[name] = proto[name].bind(instance));
        }
    }
    exports.__esModule = !0, exports.default = autobind;
    // The following React methods should not be automatically bound.
    var REACT_EXCLUDE_METHODS = {
        getChildContext: !0,
        render: !0,
        componentWillMount: !0,
        componentDidMount: !0,
        componentWillReceiveProps: !0,
        shouldComponentUpdate: !0,
        componentWillUpdate: !0,
        componentDidUpdate: !0,
        componentWillUnmount: !0
    };
}, /* 163 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(164);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 164 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, ".Button__root___1t9vg{display:inline-block;margin:0 5px 0 0;padding:3px 8px;height:30px;line-height:22px;box-sizing:border-box;background:none #fdfdfd;background:linear-gradient(180deg,#fdfdfd 0,#f6f7f8);border:1px solid #999;border-radius:2px;color:#333;text-decoration:none;font-size:inherit;font-family:inherit;cursor:pointer;white-space:nowrap}.Button__root___1t9vg:disabled{cursor:not-allowed;background:none transparent}.Button__root___1t9vg:disabled>*{opacity:.5}", "" ]), 
    // exports
    exports.locals = {
        root: "Button__root___1t9vg"
    };
}, /* 165 */
/***/
function(module, exports) {
    /*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
    // css base code, injected by the css-loader
    module.exports = function() {
        var list = [];
        // return the list of modules as css string
        // import a list of modules into the list
        return list.toString = function() {
            for (var result = [], i = 0; i < this.length; i++) {
                var item = this[i];
                item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1]);
            }
            return result.join("");
        }, list.i = function(modules, mediaQuery) {
            "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                var id = this[i][0];
                "number" == typeof id && (alreadyImportedModules[id] = !0);
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                list.push(item));
            }
        }, list;
    };
}, /* 166 */
/***/
function(module, exports, __webpack_require__) {
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i], domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
            } else {
                for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                };
            }
        }
    }
    function listToStyles(list) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                css: css,
                media: media,
                sourceMap: sourceMap
            };
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                id: id,
                parts: [ part ]
            });
        }
        return styles;
    }
    function insertStyleElement(options, styleElement) {
        var head = getHeadElement(), lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling) : head.appendChild(styleElement) : head.insertBefore(styleElement, head.firstChild), 
        styleElementsInsertedAtTop.push(styleElement); else {
            if ("bottom" !== options.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            head.appendChild(styleElement);
        }
    }
    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        idx >= 0 && styleElementsInsertedAtTop.splice(idx, 1);
    }
    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        return styleElement.type = "text/css", insertStyleElement(options, styleElement), 
        styleElement;
    }
    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        return linkElement.rel = "stylesheet", insertStyleElement(options, linkElement), 
        linkElement;
    }
    function addStyle(obj, options) {
        var styleElement, update, remove;
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options)), 
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (styleElement = createLinkElement(options), 
        update = updateLink.bind(null, styleElement), remove = function() {
            removeStyleElement(styleElement), styleElement.href && URL.revokeObjectURL(styleElement.href);
        }) : (styleElement = createStyleElement(options), update = applyToTag.bind(null, styleElement), 
        remove = function() {
            removeStyleElement(styleElement);
        });
        return update(obj), function(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else remove();
        };
    }
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
            var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
            childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
        }
    }
    function applyToTag(styleElement, obj) {
        var css = obj.css, media = obj.media;
        if (media && styleElement.setAttribute("media", media), styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
            for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
            styleElement.appendChild(document.createTextNode(css));
        }
    }
    function updateLink(linkElement, obj) {
        var css = obj.css, sourceMap = obj.sourceMap;
        sourceMap && (// http://stackoverflow.com/a/26603875
        css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
        var blob = new Blob([ css ], {
            type: "text/css"
        }), oldSrc = linkElement.href;
        linkElement.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
    }
    /*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
    var stylesInDom = {}, memoize = function(fn) {
        var memo;
        return function() {
            return "undefined" == typeof memo && (memo = fn.apply(this, arguments)), memo;
        };
    }, isOldIE = memoize(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), getHeadElement = memoize(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), singletonElement = null, singletonCounter = 0, styleElementsInsertedAtTop = [];
    module.exports = function(list, options) {
        options = options || {}, // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        "undefined" == typeof options.singleton && (options.singleton = isOldIE()), // By default, add <style> tags to the bottom of <head>.
        "undefined" == typeof options.insertAt && (options.insertAt = "bottom");
        var styles = listToStyles(list);
        return addStylesToDom(styles, options), function(newList) {
            for (var mayRemove = [], i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                domStyle.refs--, mayRemove.push(domStyle);
            }
            if (newList) {
                var newStyles = listToStyles(newList);
                addStylesToDom(newStyles, options);
            }
            for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (0 === domStyle.refs) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    var replaceText = function() {
        var textStore = [];
        return function(index, replacement) {
            return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
        };
    }();
}, /* 167 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function ButtonWrap(props) {
        var className = (0, _classnames2.default)(props.className, _ButtonWrap2.default.root);
        return _react2.default.createElement("div", _extends({}, props, {
            className: className
        }));
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    };
    exports.default = ButtonWrap;
    var _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _ButtonWrap = __webpack_require__(168), _ButtonWrap2 = _interopRequireDefault(_ButtonWrap);
}, /* 168 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(169);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 169 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, ".ButtonWrap__root___2qgcQ{display:inline-block;position:relative;z-index:10}", "" ]), 
    // exports
    exports.locals = {
        root: "ButtonWrap__root___2qgcQ"
    };
}, /* 170 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(171);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 171 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, '.IconButton__root___2awWb{padding-left:3px;padding-right:3px}.IconButton__icon___2DdFx{display:inline-block;width:22px;height:22px;background-position:50%;background-repeat:no-repeat;background-size:18px}.IconButton__isActive___2rZ4Z{background:none #d8d8d8}.IconButton__icon-undo___2w6D8{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuODU2IDI0YzIuNjY1LTQuODMgMy4xMTUtMTIuMTk1LTcuMzU2LTExLjk1VjE4bC05LTkgOS05djUuODJDMjMuMDM4IDUuNDk1IDI0LjQzNSAxNi44OSAxNy44NTYgMjR6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-redo___Uq9D7{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNSA1LjgyVjBsOSA5LTkgOXYtNS45NUMzLjAzIDExLjgwNiAzLjQ3OCAxOS4xNyA2LjE0NCAyNC0uNDM2IDE2Ljg5Ljk2MiA1LjQ5NCAxMy41IDUuODJ6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-unordered-list-item___1cs8c{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNC42NTYgMy4zNDRIMTR2MS4zMTNINC42NTZWMy4zNDR6bTAgNS4zMTJWNy4zNDNIMTR2MS4zMTNINC42NTZ6bTAgNHYtMS4zMTNIMTR2MS4zMTNINC42NTZ6bS0yLTEuNTNxLjM3NSAwIC42NC4yNXQuMjY3LjYyNC0uMjY2LjYyNS0uNjQuMjUtLjYyNi0uMjVUMS43OCAxMnQuMjUtLjYyNS42MjYtLjI1em0wLTguMTI2cS40MDYgMCAuNzAzLjI4dC4yOTYuNzItLjI5Ny43Mi0uNzA0LjI4LS43MDMtLjI4VDEuNjU2IDR0LjI5Ny0uNzIuNzAzLS4yOHptMCA0cS40MDYgMCAuNzAzLjI4dC4yOTYuNzItLjI5Ny43Mi0uNzA0LjI4LS43MDMtLjI4VDEuNjU2IDh0LjI5Ny0uNzIuNzAzLS4yOHoiLz48L3N2Zz4=")}.IconButton__icon-ordered-list-item___3JgbM{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNC42NTYgOC42NTZWNy4zNDNIMTR2MS4zMTNINC42NTZ6bTAgNHYtMS4zMTNIMTR2MS4zMTNINC42NTZ6bTAtOS4zMTJIMTR2MS4zMTNINC42NTZWMy4zNDR6bS0zLjMxMiA0di0uNjg4aDJ2LjYyNWwtMS4yMiAxLjM3NmgxLjIydi42ODhoLTJWOC43MmwxLjE4OC0xLjM3NkgxLjM0NHptLjY1Ni0ydi0yaC0uNjU2di0uNjg4aDEuMzEzdjIuNjg4SDJ6bS0uNjU2IDZ2LS42ODhoMnYyLjY4OGgtMnYtLjY4OGgxLjMxM3YtLjMxM0gydi0uNjg4aC42NTd2LS4zMTNIMS4zNDR6Ii8+PC9zdmc+")}.IconButton__icon-blockquote___uz2D0{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOS4zNDQgMTEuMzQ0bDEuMzEzLTIuNjg4aC0ydi00aDR2NGwtMS4zMTMgMi42ODhoLTJ6bS01LjM0NCAwbDEuMzQ0LTIuNjg4aC0ydi00aDR2NEw2IDExLjM0NEg0eiIvPjwvc3ZnPg==")}.IconButton__icon-bold___FMXgD{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOSAxMC4zNDRxLjQzOCAwIC43Mi0uMjk3dC4yOC0uNzAzLS4yOC0uNzAzVDkgOC4zNDVINi42NTZ2Mkg5em0tMi4zNDQtNnYyaDJxLjQwNiAwIC43MDMtLjI5N3QuMjk2LS43MDMtLjI5Ny0uNzAzLS43MDQtLjI5NmgtMnptMy43NSAyLjg0NHExLjQzOC42NTYgMS40MzggMi4yOCAwIDEuMDY0LS43MDMgMS43OThUOS4zNzYgMTJoLTQuNzJWMi42NTZoNC4xOXExLjEyNCAwIDEuODkuNzh0Ljc2NiAxLjkwNy0xLjA5MyAxLjg0NHoiLz48L3N2Zz4=")}.IconButton__icon-italic___2Tb_j{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNNi42NTYgMi42NTZIMTJ2MmgtMS44NzVMNy44NzUgMTBoMS40N3YySDR2LTJoMS44NzVsMi4yNS01LjM0NGgtMS40N3YtMnoiLz48L3N2Zz4=")}.IconButton__icon-underline___23t7Y{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMy4zNDQgMTIuNjU2aDkuMzEzVjE0SDMuMzQ0di0xLjM0NHpNOCAxMS4zNDRxLTEuNjU2IDAtMi44MjgtMS4xNzJUNCA3LjM0NFYyaDEuNjU2djUuMzQ0cTAgLjk3LjY4OCAxLjY0VDggOS42NTh0MS42NTYtLjY3Mi42ODgtMS42NFYySDEydjUuMzQ0UTEyIDkgMTAuODI4IDEwLjE3MlQ4IDExLjM0NHoiLz48L3N2Zz4=")}.IconButton__icon-strikethrough___1Uq4O{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuNTcgMTJxLjE5IDAgLjMxLjEydC4xMi4zMXYuODU2cTAgLjE4OC0uMTIuMzA4dC0uMzEuMTJILjQzcS0uMTg4IDAtLjMwOC0uMTJUMCAxMy4yODZ2LS44NTdxMC0uMTkuMTItLjMxVC40MjggMTJIMjMuNTd6bS0xNy4xLS44NTdxLS4zNzYtLjQ3LS42ODQtMS4wNy0uNjQzLTEuMy0uNjQzLTIuNTIgMC0yLjQyMyAxLjc5NS00LjEzNyAxLjc4LTEuNyA1LjI2My0xLjcuNjcgMCAyLjIzOC4yNTMuODg0LjE2IDIuMzcuNjQyLjEzNS41MS4yODIgMS41OC4xODggMS42NDcuMTg4IDIuNDUgMCAuMjQyLS4wNjcuNjA0bC0uMTYuMDQtMS4xMjUtLjA4LS4xODgtLjAyN3EtLjY3LTEuOTk3LTEuMzgtMi43NDctMS4xNzgtMS4yMi0yLjgxMi0xLjIyLTEuNTI3IDAtMi40MzguNzktLjg5Ny43NzgtLjg5NyAxLjk1NiAwIC45NzcuODg0IDEuODc0dDMuNzM3IDEuNzI4cS45MjUuMjY4IDIuMzE4Ljg4NC43NzcuMzc1IDEuMjcyLjY5Nkg2LjQ3em02Ljc5IDMuNDI4aDUuNTAzcS4wOTQuNTIzLjA5NCAxLjIzMyAwIDEuNDg3LS41NSAyLjg0LS4zMDcuNzM2LS45NSAxLjM5Mi0uNDk2LjQ3LTEuNDYgMS4wODUtMS4wNy42NDMtMi4wNS44ODQtMS4wNy4yOC0yLjcxOC4yOC0xLjUyOCAwLTIuNjEzLS4zMDdsLTEuODc1LS41MzZxLS43NjMtLjIxMy0uOTY0LS4zNzQtLjEwNy0uMTA3LS4xMDctLjI5NXYtLjE3M3EwLTEuNDQ2LS4wMjYtMi4wOS0uMDEzLS40IDAtLjkxbC4wMjctLjQ5NnYtLjU4OGwxLjM2Ny0uMDI3cS4yLjQ1NS40MDIuOTV0LjMuNzUuMTY3LjM2M3EuNDcuNzYzIDEuMDcgMS4yNi41NzcuNDggMS40MDcuNzYyLjc5LjI5NSAxLjc2OC4yOTUuODU3IDAgMS44NjItLjM2MiAxLjAzLS4zNDggMS42MzQtMS4xNTIuNjMtLjgxNi42My0xLjcyNyAwLTEuMTI1LTEuMDg2LTIuMTAzLS40NTUtLjM4OC0xLjgzNS0uOTV6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-code___LWqTN{background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE2IDExNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNDE0Ij48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0yMi40NjQgMjguNDhjMCAyLjg5NS4zNDQgNS45MDUuODA2IDkuMDIuMzQyIDMuMDEuNjkgNi4wMi42OSA4LjkxNyAwIDMuNTYyLS45MTcgNy43OS04Ljk1NSA3LjkxMnY3LjIzNmM4LjAzNi4xMTUgOC45NTYgNC42NzIgOC45NTYgNy45MTIgMCAyLjg4Ni0uMzQ4IDUuNzgzLS42OSA4Ljc4Ny0uNDYyIDMuMDEzLS44MDYgNi4xMzQtLjgwNiA4LjkyIDAgMTEuMjM4IDcuMTA2IDE1LjI1MiAxNy4wODcgMTUuMjUyaDMuMzJ2LTcuOTEyaC0yLjA2MmMtNS43MjYgMC04LjAyNS0zLjIzMy04LjAyNS04Ljc5NiAwLTIuMjM2LjM0NC00LjU3LjgwNi03LjAyMy4yMjctMi40MzguNjg0LTUuMTIuNjg0LTguMTIuMTE1LTcuNzkyLTMuMzItMTEuMjUzLTkuMTc0LTEyLjU4NnYtLjIyNWM1Ljg1NC0xLjMzMiA5LjI5My00LjY3NiA5LjE3LTEyLjQ3IDAtMi44OTUtLjQ1Ny01LjU2NS0uNjg0LTguMDI0LS40NjItMi40NC0uODA3LTQuNzc3LS44MDctNy4wMTIgMC01LjQ1IDIuMDU4LTguNjg4IDguMDI0LTguNjg4aDIuMDY2di04LjAxNGgtMy4zMmMtMTAuMjA1LS4wMDMtMTcuMDg2IDQuNDQ0LTE3LjA4NiAxNC45MTV6TTkyLjA2IDQ2LjQxN2MwLTIuODkzLjQ1My01LjkwMy44MDMtOC45MTguMzQzLTMuMTE0Ljc5Ny02LjEyLjc5Ny05LjAyIDAtMTAuNDctNi44NzUtMTQuOTE3LTE3LjA4LTE0LjkxN2gtMy4zMjd2OC4wMTdoMi4wNmM1Ljg1Mi4xMTQgNy45MSAzLjIzMyA3LjkxIDguNjg4IDAgMi4yMy0uMzQyIDQuNTY1LS42ODUgNy4wMTItLjM1IDIuNDU1LS42OTIgNS4xMjYtLjY5MiA4LjAyNC0uMTA1IDcuNzk3IDMuMzI3IDExLjEzNiA5LjA1NiAxMi40N3YuMjIyYy01LjcyIDEuMzMzLTkuMTYgNC43OTYtOS4wNTYgMTIuNTg3IDAgMyAuMzQyIDUuNjg2LjY5MiA4LjEyLjM0MyAyLjQ1NS42ODYgNC43OS42ODYgNy4wMjUgMCA1LjU1NC0yLjE4IDguNjgtNy45MTIgOC43ODhoLTIuMDZ2Ny45MTJoMy4zMjVjOS45NzUgMCAxNy4wNzYtNC4wMSAxNy4wNzYtMTUuMjUgMC0yLjc4My0uNDU0LTUuOS0uNzk2LTguOTE0LS4zNDctMy4wMS0uODA1LTUuOS0uODA1LTguNzk1IDAtMy4yMzMgMS4wMzUtNy43OSA4Ljk0My03LjkxM1Y1NC4zMmMtNy45MDQtLjExMi04LjkzNS00LjM0LTguOTM1LTcuOTAzeiIvPjwvZz48L3N2Zz4=")}.IconButton__icon-link___2I96k{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIyIDI0Ij48cGF0aCBkPSJNMTkuNSAxNi4yODZxMC0uNTM2LS4zNzUtLjkxbC0yLjc4Ni0yLjc4N3EtLjM3Ni0uMzc2LS45MTItLjM3Ni0uNTYzIDAtLjk2NC40M2wuMjU0LjI0N3EuMjE0LjIwOC4yODguMjl0LjIuMjUzLjE3NS4zNDIuMDQ4LjM2OHEwIC41MzYtLjM3NS45MXQtLjkxLjM3NnEtLjIwMiAwLS4zNy0uMDQ4dC0uMzQtLjE3NC0uMjU1LS4yLS4yODgtLjI5LS4yNDgtLjI1M3EtLjQ0Mi40MTUtLjQ0Mi45NzggMCAuNTM2LjM3NS45MWwyLjc2IDIuNzczcS4zNi4zNjIuOTEuMzYyLjUzNiAwIC45MS0uMzQ4bDEuOTctMS45NTVxLjM3NS0uMzc1LjM3NS0uODk3em0tOS40MTUtOS40NDJxMC0uNTM2LS4zNzUtLjkxTDYuOTUgMy4xNnEtLjM3NC0uMzc0LS45MS0uMzc0LS41MjIgMC0uOTEuMzYyTDMuMTYgNS4xMDNxLS4zNzUuMzc1LS4zNzUuODk3IDAgLjUzNi4zNzUuOTFsMi43ODYgMi43ODdxLjM2Mi4zNjIuOTEuMzYyLjU2NCAwIC45NjUtLjQxNmwtLjI1My0uMjQ4cS0uMjEzLS4yMDgtLjI4OC0uMjg4dC0uMjAyLS4yNTQtLjE3NC0uMzQyLS4wNDctLjM2OHEwLS41MzYuMzc1LS45MXQuOTEtLjM3NnEuMjAyIDAgLjM3LjA0N3QuMzQuMTc0LjI1NS4yLjI4OC4yODguMjQ4LjI1NHEuNDQyLS40MTUuNDQyLS45Nzh6bTExLjk4NiA5LjQ0MnEwIDEuNjA3LTEuMTM3IDIuNzJsLTEuOTcgMS45NTRxLTEuMTEgMS4xMTItMi43MTggMS4xMTItMS42MiAwLTIuNzMyLTEuMTM4bC0yLjc2LTIuNzcycS0xLjExLTEuMTEyLTEuMTEtMi43MiAwLTEuNjQ2IDEuMTc4LTIuNzk4bC0xLjE3OC0xLjE4cS0xLjE1MiAxLjE4LTIuNzg2IDEuMTgtMS42MDcgMC0yLjczMi0xLjEyNUwxLjMzOCA4LjczMlEuMjEzIDcuNjA4LjIxMyA2VDEuMzUgMy4yODNsMS45Ny0xLjk1NVE0LjQzMi4yMTUgNi4wNC4yMTVxMS42MiAwIDIuNzMgMS4xMzhsMi43NiAyLjc3MnExLjExMiAxLjExMiAxLjExMiAyLjcyIDAgMS42NDYtMS4xOCAyLjc5OGwxLjE4IDEuMThxMS4xNTItMS4xOCAyLjc4Ni0xLjE4IDEuNjA3IDAgMi43MzIgMS4xMjVsMi43ODYgMi43ODZxMS4xMjUgMS4xMjUgMS4xMjUgMi43MzJ6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-remove-link___2BnS8{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIyIDI0Ij48cGF0aCBkPSJNNS44OCAxNy4wMjJsLTMuNDMgMy40M3EtLjEzNC4xMi0uMzA4LjEyLS4xNiAwLS4zMDgtLjEyLS4xMi0uMTM1LS4xMi0uMzF0LjEyLS4zMDdsMy40My0zLjQzcS4xMzMtLjEyLjMwNy0uMTJ0LjMxLjEycS4xMi4xMzUuMTIuMzF0LS4xMi4zMDd6bTIuMjYzLjU1djQuMjg1cTAgLjE4OC0uMTIuMzA4dC0uMzEuMTItLjMwNy0uMTItLjEyLS4zMDhWMTcuNTdxMC0uMTg3LjEyLS4zMDd0LjMwOC0uMTIuMzA4LjEyLjEyLjMwOHptLTMtM3EwIC4xODctLjEyLjMwN3QtLjMxLjEySC40M3EtLjE4OCAwLS4zMDgtLjEyVDAgMTQuNTd0LjEyLS4zMDcuMzA4LS4xMmg0LjI4NnEuMTg4IDAgLjMwOC4xMnQuMTIuMzA4em0xNi45MjggMS43MTRxMCAxLjYwNy0xLjEzNyAyLjcybC0xLjk3IDEuOTU0cS0xLjExIDEuMTEyLTIuNzE4IDEuMTEyLTEuNjIgMC0yLjczMi0xLjEzOEw5LjA0IDE2LjQ0N3EtLjI4LS4yOC0uNTYzLS43NWwzLjItLjI0IDMuNjU3IDMuNjdxLjM2Mi4zNi45MS4zNjd0LjkxMi0uMzU1bDEuOTctMS45NTZxLjM3NC0uMzc1LjM3NC0uODk3IDAtLjUzNi0uMzc1LS45MWwtMy42Ny0zLjY4NC4yNC0zLjJxLjQ3LjI4Ljc1LjU2Mmw0LjUgNC41cTEuMTI2IDEuMTUyIDEuMTI2IDIuNzMyek0xMy44MSA2LjU5bC0zLjIuMjRMNi45NSAzLjE2cS0uMzc0LS4zNzUtLjkxLS4zNzUtLjUyMiAwLS45MS4zNjJMMy4xNiA1LjEwMnEtLjM3NS4zNzUtLjM3NS44OTcgMCAuNTM1LjM3NS45MWwzLjY3IDMuNjctLjI0IDMuMjE0cS0uNDctLjI4LS43NS0uNTYzbC00LjUtNC41US4yMTMgNy41OC4yMTMgNnEwLTEuNjA4IDEuMTM4LTIuNzJsMS45Ny0xLjk1NVE0LjQzLjIxMyA2LjA0LjIxM3ExLjYyIDAgMi43MzIgMS4xMzhsNC40NzMgNC40ODhxLjI4LjI4LjU2My43NXptOC40NzggMS4xMjRxMCAuMTg4LS4xMi4zMDh0LS4zMS4xMmgtNC4yODVxLS4xODcgMC0uMzA3LS4xMnQtLjEyLS4zMDguMTItLjMwOC4zMDgtLjEyaDQuMjg3cS4xODggMCAuMzA4LjEydC4xMi4zMDh6TTE1IC40M3Y0LjI4NXEwIC4xODgtLjEyLjMwOHQtLjMxLjEyLS4zMDctLjEyLS4xMi0uMzA4Vi40M3EwLS4xOS4xMi0uMzFUMTQuNTcgMHQuMzEuMTIuMTIuMzF6bTUuNDUgMi4wMmwtMy40MjggMy40M3EtLjE0Ny4xMi0uMzA4LjEydC0uMzA4LS4xMnEtLjEyLS4xMzQtLjEyLS4zMDh0LjEyLS4zMDhsMy40My0zLjQzcS4xMzMtLjEyLjMwNy0uMTJ0LjMwOC4xMnEuMTIyLjEzNS4xMjIuMzF0LS4xMi4zMDd6Ii8+PC9zdmc+");background-size:14px}.IconButton__icon-image___2NVj8{background-image:url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTMzLjMzMyA1MzMuMzM0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MzMuMzMzIDUzMy4zMzQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDY2LjY2NywxMDBoLTQwMHYzMzMuMzMzaDQwMFYxMDB6IE01MzMuMzMzLDMzLjMzM0w1MzMuMzMzLDMzLjMzM1Y1MDBIMFYzMy4zMzNINTMzLjMzM3ogTTQzMy4zMzMsNDAwSDEwMHYtNjYuNjY3ICAgbDEwMC0xNjYuNjY3bDEzNi45NzksMTY2LjY2N2w5Ni4zNTQtNjYuNjY2VjMwMFY0MDB6IE0zMzMuMzMzLDE4My4zMzNjMCwyNy42MTQsMjIuMzg2LDUwLDUwLDUwczUwLTIyLjM4Niw1MC01MHMtMjIuMzg2LTUwLTUwLTUwICAgUzMzMy4zMzMsMTU1LjcxOSwzMzMuMzMzLDE4My4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==");background-size:14px}.IconButton__icon-cancel___1A6y8{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuNzggMTkuMjhMMTYuNSAxMmw3LjI4LTcuMjhhLjc0OC43NDggMCAwIDAgMC0xLjA2TDIwLjM0LjIxOGEuNzUuNzUgMCAwIDAtMS4wNi0uMDAyTDEyIDcuNDk4IDQuNzE3LjIyYS43NDguNzQ4IDAgMCAwLTEuMDYgMEwuMjE3IDMuNjZhLjc1Ljc1IDAgMCAwIDAgMS4wNkw3LjQ5NyAxMmwtNy4yOCA3LjI4YS43NDguNzQ4IDAgMCAwIDAgMS4wNmwzLjQ0IDMuNDRhLjc1Ljc1IDAgMCAwIDEuMDYuMDAybDcuMjgtNy4yOCA3LjI4MiA3LjI4Yy4wNzguMDc4LjE3LjEzNS4yNjguMTcuMjY3LjEuNTguMDQ0Ljc5My0uMTdsMy40NC0zLjQ0YS43NS43NSAwIDAgMCAwLTEuMDZ6Ii8+PC9zdmc+");background-size:13px}.IconButton__icon-accept___2elsq{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuMjUgM0w5IDE0LjI1IDMuNzUgOSAwIDEyLjc1bDkgOSAxNS0xNXoiLz48L3N2Zz4=");background-size:13px}', "" ]), 
    // exports
    exports.locals = {
        root: "IconButton__root___2awWb",
        icon: "IconButton__icon___2DdFx",
        isActive: "IconButton__isActive___2rZ4Z",
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
}, /* 172 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
        return target;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _IconButton = __webpack_require__(159), _IconButton2 = _interopRequireDefault(_IconButton), _InputPopover = __webpack_require__(173), _InputPopover2 = _interopRequireDefault(_InputPopover), _classAutobind = __webpack_require__(162), _classAutobind2 = _interopRequireDefault(_classAutobind), PopoverIconButton = function(_Component) {
        function PopoverIconButton() {
            _classCallCheck(this, PopoverIconButton);
            var _this = _possibleConstructorReturn(this, (PopoverIconButton.__proto__ || Object.getPrototypeOf(PopoverIconButton)).apply(this, arguments));
            return (0, _classAutobind2.default)(_this), _this;
        }
        return _inherits(PopoverIconButton, _Component), _createClass(PopoverIconButton, [ {
            key: "render",
            value: function() {
                var _props = this.props, onTogglePopover = _props.onTogglePopover, props = (_props.showPopover, 
                _objectWithoutProperties(_props, [ "onTogglePopover", "showPopover" ]));
                // eslint-disable-line no-unused-vars
                return _react2.default.createElement(_IconButton2.default, _extends({}, props, {
                    onClick: onTogglePopover
                }), this._renderPopover());
            }
        }, {
            key: "_renderPopover",
            value: function() {
                return this.props.showPopover ? _react2.default.createElement(_InputPopover2.default, {
                    onSubmit: this._onSubmit,
                    onCancel: this._hidePopover
                }) : null;
            }
        }, {
            key: "_onSubmit",
            value: function() {
                var _props2;
                (_props2 = this.props).onSubmit.apply(_props2, arguments);
            }
        }, {
            key: "_hidePopover",
            value: function() {
                if (this.props.showPopover) {
                    var _props3;
                    (_props3 = this.props).onTogglePopover.apply(_props3, arguments);
                }
            }
        } ]), PopoverIconButton;
    }(_react.Component);
    exports.default = PopoverIconButton;
}, /* 173 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _reactDom = __webpack_require__(53), _reactDom2 = _interopRequireDefault(_reactDom), _IconButton = __webpack_require__(159), _IconButton2 = _interopRequireDefault(_IconButton), _ButtonGroup = __webpack_require__(174), _ButtonGroup2 = _interopRequireDefault(_ButtonGroup), _classAutobind = __webpack_require__(162), _classAutobind2 = _interopRequireDefault(_classAutobind), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _InputPopover = __webpack_require__(177), _InputPopover2 = _interopRequireDefault(_InputPopover), InputPopover = function(_Component) {
        function InputPopover() {
            _classCallCheck(this, InputPopover);
            var _this = _possibleConstructorReturn(this, (InputPopover.__proto__ || Object.getPrototypeOf(InputPopover)).apply(this, arguments));
            return (0, _classAutobind2.default)(_this), _this;
        }
        return _inherits(InputPopover, _Component), _createClass(InputPopover, [ {
            key: "componentDidMount",
            value: function() {
                document.addEventListener("click", this._onDocumentClick), document.addEventListener("keydown", this._onDocumentKeydown), 
                this._inputRef && this._inputRef.focus();
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("click", this._onDocumentClick), document.removeEventListener("keydown", this._onDocumentKeydown);
            }
        }, {
            key: "render",
            value: function() {
                var props = this.props, className = (0, _classnames2.default)(props.className, _InputPopover2.default.root);
                return _react2.default.createElement("div", {
                    className: className
                }, _react2.default.createElement("div", {
                    className: _InputPopover2.default.inner
                }, _react2.default.createElement("input", {
                    ref: this._setInputRef,
                    type: "text",
                    placeholder: "https://example.com/",
                    className: _InputPopover2.default.input,
                    onKeyPress: this._onInputKeyPress
                }), _react2.default.createElement(_ButtonGroup2.default, {
                    className: _InputPopover2.default.buttonGroup
                }, _react2.default.createElement(_IconButton2.default, {
                    label: "Cancel",
                    iconName: "cancel",
                    onClick: props.onCancel
                }), _react2.default.createElement(_IconButton2.default, {
                    label: "Submit",
                    iconName: "accept",
                    onClick: this._onSubmit
                }))));
            }
        }, {
            key: "_setInputRef",
            value: function(inputElement) {
                this._inputRef = inputElement;
            }
        }, {
            key: "_onInputKeyPress",
            value: function(event) {
                13 === event.which && (// Avoid submitting a <form> somewhere up the element tree.
                event.preventDefault(), this._onSubmit());
            }
        }, {
            key: "_onSubmit",
            value: function() {
                var value = this._inputRef ? this._inputRef.value : "";
                this.props.onSubmit(value);
            }
        }, {
            key: "_onDocumentClick",
            value: function(event) {
                var rootNode = _reactDom2.default.findDOMNode(this);
                rootNode.contains(event.target) || // Here we pass the event so the parent can manage focus.
                this.props.onCancel(event);
            }
        }, {
            key: "_onDocumentKeydown",
            value: function(event) {
                27 === event.keyCode && this.props.onCancel();
            }
        } ]), InputPopover;
    }(_react.Component);
    exports.default = InputPopover;
}, /* 174 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function ButtonGroup(props) {
        var className = (0, _classnames2.default)(props.className, _ButtonGroup2.default.root);
        return _react2.default.createElement("div", _extends({}, props, {
            className: className
        }));
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    };
    exports.default = ButtonGroup;
    var _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _ButtonGroup = __webpack_require__(175), _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
}, /* 175 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(176);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 176 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, ".ButtonGroup__root___2nXYD{display:inline-block;vertical-align:top;margin:0 5px 5px 0;white-space:nowrap}.ButtonGroup__root___2nXYD:last-child{margin-right:0}.ButtonGroup__root___2nXYD>div>button{margin-right:0;border-radius:0}.ButtonGroup__root___2nXYD>div>button:focus{position:relative;z-index:1}.ButtonGroup__root___2nXYD>div:first-child>button{border-top-left-radius:2px;border-bottom-left-radius:2px}.ButtonGroup__root___2nXYD>div+div>button{border-left-width:0}.ButtonGroup__root___2nXYD>div:last-child>button{border-top-right-radius:2px;border-bottom-right-radius:2px}", "" ]), 
    // exports
    exports.locals = {
        root: "ButtonGroup__root___2nXYD"
    };
}, /* 177 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(178);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 178 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, '.InputPopover__root___sAIh7{position:absolute;top:calc(100% + 5px);left:0;width:260px;background:none #fdfdfd;background:linear-gradient(180deg,#fdfdfd 0,#f6f7f8);border:1px solid #999;border-radius:2px;box-sizing:border-box;padding:4px}.InputPopover__root___sAIh7:before{top:-10px;border:5px solid transparent;border-bottom-color:#999}.InputPopover__root___sAIh7:after,.InputPopover__root___sAIh7:before{content:"";display:block;position:absolute;width:0;height:0;left:10px}.InputPopover__root___sAIh7:after{top:-9px;border:5px solid transparent;border-bottom-color:#fdfdfd}.InputPopover__inner___1sUSg{display:flex}.InputPopover__input___3QwmQ{display:block;flex:1 0 auto;height:30px;background:none #fff;border:1px solid #999;border-radius:2px;box-sizing:border-box;padding:2px 6px;font-family:inherit;font-size:inherit;line-height:24px}.InputPopover__inner___1sUSg .InputPopover__buttonGroup___3zSkK{flex:0 1 auto;margin-left:4px;margin-bottom:0}', "" ]), 
    // exports
    exports.locals = {
        root: "InputPopover__root___sAIh7",
        inner: "InputPopover__inner___1sUSg",
        input: "InputPopover__input___3QwmQ",
        buttonGroup: "InputPopover__buttonGroup___3zSkK"
    };
}, /* 179 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
        return target;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [], _n = !0, _d = !1, _e = void 0;
            try {
                for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                !i || _arr.length !== i); _n = !0) ;
            } catch (err) {
                _d = !0, _e = err;
            } finally {
                try {
                    !_n && _i.return && _i.return();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) return arr;
            if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }(), _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _classAutobind = __webpack_require__(162), _classAutobind2 = _interopRequireDefault(_classAutobind), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _Dropdown = __webpack_require__(180), _Dropdown2 = _interopRequireDefault(_Dropdown), Dropdown = function(_Component) {
        function Dropdown() {
            _classCallCheck(this, Dropdown);
            var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
            return (0, _classAutobind2.default)(_this), _this;
        }
        return _inherits(Dropdown, _Component), _createClass(Dropdown, [ {
            key: "render",
            value: function() {
                var _props = this.props, choices = _props.choices, selectedKey = _props.selectedKey, className = _props.className, otherProps = _objectWithoutProperties(_props, [ "choices", "selectedKey", "className" ]);
                className = (0, _classnames2.default)(className, _Dropdown2.default.root);
                var selectedItem = null == selectedKey ? null : choices.get(selectedKey), selectedValue = selectedItem && selectedItem.label || "";
                return _react2.default.createElement("span", {
                    className: className,
                    title: selectedValue
                }, _react2.default.createElement("select", _extends({}, otherProps, {
                    value: selectedKey,
                    onChange: this._onChange
                }), this._renderChoices()), _react2.default.createElement("span", {
                    className: _Dropdown2.default.value
                }, selectedValue));
            }
        }, {
            key: "_onChange",
            value: function(event) {
                var value = event.target.value;
                this.props.onChange(value);
            }
        }, {
            key: "_renderChoices",
            value: function() {
                var choices = this.props.choices, entries = Array.from(choices.entries());
                return entries.map(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], _ref2$ = _ref2[1], label = _ref2$.label, className = _ref2$.className;
                    return _react2.default.createElement("option", {
                        key: key,
                        value: key,
                        className: className
                    }, label);
                });
            }
        } ]), Dropdown;
    }(_react.Component);
    exports.default = Dropdown;
}, /* 180 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(181);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 181 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, '.Dropdown__root___1B9ta{display:inline-block;position:relative;line-height:22px;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.Dropdown__root___1B9ta select{position:relative;z-index:2;display:inline-block;box-sizing:border-box;height:30px;line-height:inherit;font-family:inherit;font-size:inherit;color:inherit;margin:0;padding:0;border:4px solid transparent;border-right-width:10px;border-left-width:5px;background:none transparent;opacity:0;cursor:pointer}.Dropdown__root___1B9ta .Dropdown__value___3gCvl{display:block;position:absolute;z-index:1;left:0;top:0;right:0;bottom:0;line-height:23px;border:1px solid #999;border-radius:2px;padding:3px;padding-right:33px;padding-left:12px;white-space:nowrap;text-overflow:ellipsis}.Dropdown__root___1B9ta .Dropdown__value___3gCvl:after,.Dropdown__root___1B9ta .Dropdown__value___3gCvl:before{display:block;content:"";position:absolute;top:50%;right:10px;width:0;height:0;border:4px solid transparent}.Dropdown__root___1B9ta .Dropdown__value___3gCvl:before{margin-top:-10px;border-bottom-color:#555}.Dropdown__root___1B9ta .Dropdown__value___3gCvl:after{margin-top:1px;border-top-color:#555}.Dropdown__root___1B9ta select:focus+.Dropdown__value___3gCvl{border-color:#66afe9}@media screen and (-webkit-min-device-pixel-ratio:0){.Dropdown__root___1B9ta select{opacity:1;color:inherit;-webkit-appearance:none;border-left-width:12px;border-right-width:35px}.Dropdown__root___1B9ta select+.Dropdown__value___3gCvl{color:transparent}.Dropdown__root___1B9ta select:focus+.Dropdown__value___3gCvl{border-color:#999}}', "" ]), 
    // exports
    exports.locals = {
        root: "Dropdown__root___1B9ta",
        value: "Dropdown__value___3gCvl"
    };
}, /* 182 */
/***/
function(module, exports) {
    "use strict";
    function getEntityAtOffset(block, offset) {
        var entityKey = block.getEntityAt(offset);
        if (null == entityKey) return null;
        for (var startOffset = offset; startOffset > 0 && block.getEntityAt(startOffset - 1) === entityKey; ) startOffset -= 1;
        for (var endOffset = startOffset, blockLength = block.getLength(); endOffset < blockLength && block.getEntityAt(endOffset + 1) === entityKey; ) endOffset += 1;
        return {
            entityKey: entityKey,
            blockKey: block.getKey(),
            startOffset: startOffset,
            endOffset: endOffset + 1
        };
    }
    function getEntityAtCursor(editorState) {
        var selection = editorState.getSelection(), startKey = selection.getStartKey(), startBlock = editorState.getCurrentContent().getBlockForKey(startKey), startOffset = selection.getStartOffset();
        if (selection.isCollapsed()) // Get the entity before the cursor (unless the cursor is at the start).
        return getEntityAtOffset(startBlock, 0 === startOffset ? startOffset : startOffset - 1);
        if (startKey !== selection.getEndKey()) return null;
        for (var endOffset = selection.getEndOffset(), startEntityKey = startBlock.getEntityAt(startOffset), i = startOffset; i < endOffset; i++) {
            var _entityKey = startBlock.getEntityAt(i);
            if (null == _entityKey || _entityKey !== startEntityKey) return null;
        }
        return {
            entityKey: startEntityKey,
            blockKey: startBlock.getKey(),
            startOffset: startOffset,
            endOffset: endOffset
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = getEntityAtCursor;
}, /* 183 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function clearEntityForRange(editorState, blockKey, startOffset, endOffset) {
        var contentState = editorState.getCurrentContent(), blockMap = contentState.getBlockMap(), block = blockMap.get(blockKey), charList = block.getCharacterList(), newCharList = charList.map(function(char, i) {
            return i >= startOffset && i < endOffset ? _draftJs.CharacterMetadata.applyEntity(char, null) : char;
        }), newBlock = block.set("characterList", newCharList), newBlockMap = blockMap.set(blockKey, newBlock), newContentState = contentState.set("blockMap", newBlockMap);
        return _draftJs.EditorState.push(editorState, newContentState, "apply-entity");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = clearEntityForRange;
    var _draftJs = __webpack_require__(2);
}, /* 184 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(185);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 185 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, ".EditorToolbar__root___1VC2v{font-family:Helvetica,sans-serif;font-size:14px;margin:0 10px;padding:10px 0 5px;border-bottom:1px solid #ddd;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", "" ]), 
    // exports
    exports.locals = {
        root: "EditorToolbar__root___1VC2v"
    };
}, /* 186 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _toString(editorState, format, options) {
        var contentState = editorState.getCurrentContent();
        switch (format) {
          case "html":
            return (0, _draftJsExportHtml.stateToHTML)(contentState, options);

          case "markdown":
            return (0, _draftJsExportMarkdown.stateToMarkdown)(contentState);

          case "raw":
            return JSON.stringify((0, _draftJs.convertToRaw)(contentState));

          default:
            throw new Error("Format not supported: " + format);
        }
    }
    function fromString(markup, format, options) {
        switch (format) {
          case "html":
            return (0, _draftJsImportHtml.stateFromHTML)(markup, options);

          case "markdown":
            return (0, _draftJsImportMarkdown.stateFromMarkdown)(markup);

          case "raw":
            return (0, _draftJs.convertFromRaw)(JSON.parse(markup));

          default:
            throw new Error("Format not supported: " + format);
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _draftJs = __webpack_require__(2), _draftJsExportHtml = __webpack_require__(187), _draftJsImportHtml = __webpack_require__(193), _draftJsExportMarkdown = __webpack_require__(200), _draftJsImportMarkdown = __webpack_require__(202), EditorValue = function() {
        function EditorValue(editorState) {
            var cache = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, EditorValue), this._cache = cache, this._editorState = editorState;
        }
        return _createClass(EditorValue, [ {
            key: "getEditorState",
            value: function() {
                return this._editorState;
            }
        }, {
            key: "setEditorState",
            value: function(editorState) {
                return this._editorState === editorState ? this : new EditorValue(editorState);
            }
        }, {
            key: "toString",
            value: function(format, options) {
                var fromCache = this._cache[format];
                return null != fromCache ? fromCache : this._cache[format] = _toString(this.getEditorState(), format, options);
            }
        }, {
            key: "setContentFromString",
            value: function(markup, format, options) {
                var editorState = _draftJs.EditorState.push(this._editorState, fromString(markup, format, options), "secondary-paste");
                return new EditorValue(editorState, _defineProperty({}, format, markup));
            }
        } ], [ {
            key: "createEmpty",
            value: function(decorator) {
                var editorState = _draftJs.EditorState.createEmpty(decorator);
                return new EditorValue(editorState);
            }
        }, {
            key: "createFromState",
            value: function(editorState) {
                return new EditorValue(editorState);
            }
        }, {
            key: "createFromString",
            value: function(markup, format, decorator, options) {
                var contentState = fromString(markup, format, options), editorState = _draftJs.EditorState.createWithContent(contentState, decorator);
                return new EditorValue(editorState, _defineProperty({}, format, markup));
            }
        } ]), EditorValue;
    }();
    exports.default = EditorValue;
}, /* 187 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _stateToHTML = __webpack_require__(188);
    Object.defineProperty(exports, "stateToHTML", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_stateToHTML).default;
        }
    });
}, /* 188 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj;
    }
    // The reason this returns an array is because a single block might get wrapped
    // in two tags.
    function getTags(blockType) {
        switch (blockType) {
          case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
            return [ "h1" ];

          case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
            return [ "h2" ];

          case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
            return [ "h3" ];

          case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
            return [ "h4" ];

          case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
            return [ "h5" ];

          case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
            return [ "h6" ];

          case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
          case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
            return [ "li" ];

          case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
            return [ "blockquote" ];

          case _draftJsUtils.BLOCK_TYPE.CODE:
            return [ "pre", "code" ];

          case _draftJsUtils.BLOCK_TYPE.ATOMIC:
            return [ "figure" ];

          default:
            return [ "p" ];
        }
    }
    function getWrapperTag(blockType) {
        switch (blockType) {
          case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
            return "ul";

          case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
            return "ol";

          default:
            return null;
        }
    }
    function stringifyAttrs(attrs) {
        if (null == attrs) return "";
        var parts = [], _iteratorNormalCompletion6 = !0, _didIteratorError6 = !1, _iteratorError6 = void 0;
        try {
            for (var _step6, _iterator6 = Object.keys(attrs)[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = !0) {
                var name = _step6.value, value = attrs[name];
                null != value && parts.push(" " + name + '="' + encodeAttr(value + "") + '"');
            }
        } catch (err) {
            _didIteratorError6 = !0, _iteratorError6 = err;
        } finally {
            try {
                !_iteratorNormalCompletion6 && _iterator6.return && _iterator6.return();
            } finally {
                if (_didIteratorError6) throw _iteratorError6;
            }
        }
        return parts.join("");
    }
    function canHaveDepth(blockType) {
        switch (blockType) {
          case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
          case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
            return !0;

          default:
            return !1;
        }
    }
    function encodeContent(text) {
        return text.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split(" ").join("&nbsp;").split("\n").join(BREAK + "\n");
    }
    function encodeAttr(text) {
        return text.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;");
    }
    function stateToHTML(content, options) {
        return new MarkupGenerator(content, options).generate();
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _DEFAULT_STYLE_MAP, _ENTITY_ATTR_MAP, _DATA_TO_ATTR, _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, _slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [], _n = !0, _d = !1, _e = void 0;
            try {
                for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                !i || _arr.length !== i); _n = !0) ;
            } catch (err) {
                _d = !0, _e = err;
            } finally {
                try {
                    !_n && _i.return && _i.return();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) return arr;
            if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }(), _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }();
    exports.default = stateToHTML;
    var _combineOrderedStyles3 = __webpack_require__(189), _combineOrderedStyles4 = _interopRequireDefault(_combineOrderedStyles3), _normalizeAttributes = __webpack_require__(190), _normalizeAttributes2 = _interopRequireDefault(_normalizeAttributes), _styleToCSS = __webpack_require__(191), _styleToCSS2 = _interopRequireDefault(_styleToCSS), _draftJs = __webpack_require__(2), _draftJsUtils = __webpack_require__(149), BOLD = _draftJsUtils.INLINE_STYLE.BOLD, CODE = _draftJsUtils.INLINE_STYLE.CODE, ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC, STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH, UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE, INDENT = "  ", BREAK = "<br>", DATA_ATTRIBUTE = /^data-([a-z0-9-]+)$/, DEFAULT_STYLE_MAP = (_DEFAULT_STYLE_MAP = {}, 
    _defineProperty(_DEFAULT_STYLE_MAP, BOLD, {
        element: "strong"
    }), _defineProperty(_DEFAULT_STYLE_MAP, CODE, {
        element: "code"
    }), _defineProperty(_DEFAULT_STYLE_MAP, ITALIC, {
        element: "em"
    }), _defineProperty(_DEFAULT_STYLE_MAP, STRIKETHROUGH, {
        element: "del"
    }), _defineProperty(_DEFAULT_STYLE_MAP, UNDERLINE, {
        element: "ins"
    }), _DEFAULT_STYLE_MAP), DEFAULT_STYLE_ORDER = [ BOLD, ITALIC, UNDERLINE, STRIKETHROUGH, CODE ], ENTITY_ATTR_MAP = (_ENTITY_ATTR_MAP = {}, 
    _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.LINK, {
        url: "href",
        rel: "rel",
        target: "target",
        title: "title",
        className: "class"
    }), _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.IMAGE, {
        src: "src",
        height: "height",
        width: "width",
        alt: "alt",
        className: "class"
    }), _ENTITY_ATTR_MAP), DATA_TO_ATTR = (_DATA_TO_ATTR = {}, _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.LINK, function(entityType, entity) {
        var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {}, data = entity.getData(), attrs = {}, _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
        try {
            for (var _step, _iterator = Object.keys(data)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                var dataKey = _step.value, dataValue = data[dataKey];
                if (attrMap.hasOwnProperty(dataKey)) {
                    var attrKey = attrMap[dataKey];
                    attrs[attrKey] = dataValue;
                } else DATA_ATTRIBUTE.test(dataKey) && (attrs[dataKey] = dataValue);
            }
        } catch (err) {
            _didIteratorError = !0, _iteratorError = err;
        } finally {
            try {
                !_iteratorNormalCompletion && _iterator.return && _iterator.return();
            } finally {
                if (_didIteratorError) throw _iteratorError;
            }
        }
        return attrs;
    }), _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.IMAGE, function(entityType, entity) {
        var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {}, data = entity.getData(), attrs = {}, _iteratorNormalCompletion2 = !0, _didIteratorError2 = !1, _iteratorError2 = void 0;
        try {
            for (var _step2, _iterator2 = Object.keys(data)[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
                var dataKey = _step2.value, dataValue = data[dataKey];
                if (attrMap.hasOwnProperty(dataKey)) {
                    var attrKey = attrMap[dataKey];
                    attrs[attrKey] = dataValue;
                } else DATA_ATTRIBUTE.test(dataKey) && (attrs[dataKey] = dataValue);
            }
        } catch (err) {
            _didIteratorError2 = !0, _iteratorError2 = err;
        } finally {
            try {
                !_iteratorNormalCompletion2 && _iterator2.return && _iterator2.return();
            } finally {
                if (_didIteratorError2) throw _iteratorError2;
            }
        }
        return attrs;
    }), _DATA_TO_ATTR), MarkupGenerator = function() {
        // These are related to state.
        function MarkupGenerator(contentState, options) {
            _classCallCheck(this, MarkupGenerator), null == options && (options = {}), this.contentState = contentState, 
            this.options = options;
            var _combineOrderedStyles = (0, _combineOrderedStyles4.default)(options.inlineStyles, [ DEFAULT_STYLE_MAP, DEFAULT_STYLE_ORDER ]), _combineOrderedStyles2 = _slicedToArray(_combineOrderedStyles, 2), inlineStyles = _combineOrderedStyles2[0], styleOrder = _combineOrderedStyles2[1];
            this.inlineStyles = inlineStyles, this.styleOrder = styleOrder;
        }
        // These are related to user-defined options.
        return _createClass(MarkupGenerator, [ {
            key: "generate",
            value: function() {
                for (this.output = [], this.blocks = this.contentState.getBlocksAsArray(), this.totalBlocks = this.blocks.length, 
                this.currentBlock = 0, this.indentLevel = 0, this.wrapperTag = null; this.currentBlock < this.totalBlocks; ) this.processBlock();
                return this.closeWrapperTag(), this.output.join("").trim();
            }
        }, {
            key: "processBlock",
            value: function() {
                var blockRenderers = this.options.blockRenderers, block = this.blocks[this.currentBlock], blockType = block.getType(), newWrapperTag = getWrapperTag(blockType);
                this.wrapperTag !== newWrapperTag && (this.wrapperTag && this.closeWrapperTag(), 
                newWrapperTag && this.openWrapperTag(newWrapperTag)), this.indent();
                // Allow blocks to be rendered using a custom renderer.
                var customRenderer = null != blockRenderers && blockRenderers.hasOwnProperty(blockType) ? blockRenderers[blockType] : null, customRendererOutput = customRenderer ? customRenderer(block) : null;
                // Renderer can return null, which will cause processing to continue as normal.
                if (null != customRendererOutput) return this.output.push(customRendererOutput), 
                this.output.push("\n"), void (this.currentBlock += 1);
                this.writeStartTag(block), this.output.push(this.renderBlockContent(block));
                // Look ahead and see if we will nest list.
                var nextBlock = this.getNextBlock();
                if (canHaveDepth(blockType) && nextBlock && nextBlock.getDepth() === block.getDepth() + 1) {
                    this.output.push("\n");
                    // This is a litle hacky: temporarily stash our current wrapperTag and
                    // render child list(s).
                    var thisWrapperTag = this.wrapperTag;
                    this.wrapperTag = null, this.indentLevel += 1, this.currentBlock += 1, this.processBlocksAtDepth(nextBlock.getDepth()), 
                    this.wrapperTag = thisWrapperTag, this.indentLevel -= 1, this.indent();
                } else this.currentBlock += 1;
                this.writeEndTag(block);
            }
        }, {
            key: "processBlocksAtDepth",
            value: function(depth) {
                for (var block = this.blocks[this.currentBlock]; block && block.getDepth() === depth; ) this.processBlock(), 
                block = this.blocks[this.currentBlock];
                this.closeWrapperTag();
            }
        }, {
            key: "getNextBlock",
            value: function() {
                return this.blocks[this.currentBlock + 1];
            }
        }, {
            key: "writeStartTag",
            value: function(block) {
                var tags = getTags(block.getType()), attrString = void 0;
                if (this.options.blockStyleFn) {
                    var _ref = this.options.blockStyleFn(block) || {}, _attributes = _ref.attributes, _style = _ref.style;
                    if (// Normalize `className` -> `class`, etc.
                    _attributes = (0, _normalizeAttributes2.default)(_attributes), null != _style) {
                        var styleAttr = (0, _styleToCSS2.default)(_style);
                        _attributes = null == _attributes ? {
                            style: styleAttr
                        } : _extends({}, _attributes, {
                            style: styleAttr
                        });
                    }
                    attrString = stringifyAttrs(_attributes);
                } else attrString = "";
                var _iteratorNormalCompletion3 = !0, _didIteratorError3 = !1, _iteratorError3 = void 0;
                try {
                    for (var _step3, _iterator3 = tags[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = !0) {
                        var tag = _step3.value;
                        this.output.push("<" + tag + attrString + ">");
                    }
                } catch (err) {
                    _didIteratorError3 = !0, _iteratorError3 = err;
                } finally {
                    try {
                        !_iteratorNormalCompletion3 && _iterator3.return && _iterator3.return();
                    } finally {
                        if (_didIteratorError3) throw _iteratorError3;
                    }
                }
            }
        }, {
            key: "writeEndTag",
            value: function(block) {
                var tags = getTags(block.getType());
                if (1 === tags.length) this.output.push("</" + tags[0] + ">\n"); else {
                    var output = [], _iteratorNormalCompletion4 = !0, _didIteratorError4 = !1, _iteratorError4 = void 0;
                    try {
                        for (var _step4, _iterator4 = tags[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = !0) {
                            var tag = _step4.value;
                            output.unshift("</" + tag + ">");
                        }
                    } catch (err) {
                        _didIteratorError4 = !0, _iteratorError4 = err;
                    } finally {
                        try {
                            !_iteratorNormalCompletion4 && _iterator4.return && _iterator4.return();
                        } finally {
                            if (_didIteratorError4) throw _iteratorError4;
                        }
                    }
                    this.output.push(output.join("") + "\n");
                }
            }
        }, {
            key: "openWrapperTag",
            value: function(wrapperTag) {
                this.wrapperTag = wrapperTag, this.indent(), this.output.push("<" + wrapperTag + ">\n"), 
                this.indentLevel += 1;
            }
        }, {
            key: "closeWrapperTag",
            value: function() {
                var wrapperTag = this.wrapperTag;
                wrapperTag && (this.indentLevel -= 1, this.indent(), this.output.push("</" + wrapperTag + ">\n"), 
                this.wrapperTag = null);
            }
        }, {
            key: "indent",
            value: function() {
                this.output.push(INDENT.repeat(this.indentLevel));
            }
        }, {
            key: "renderBlockContent",
            value: function(block) {
                var _this = this, blockType = block.getType(), text = block.getText();
                if ("" === text) // Prevent element collapse if completely empty.
                return BREAK;
                text = this.preserveWhitespace(text);
                var charMetaList = block.getCharacterList(), entityPieces = (0, _draftJsUtils.getEntityRanges)(text, charMetaList);
                return entityPieces.map(function(_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2), entityKey = _ref3[0], stylePieces = _ref3[1], content = stylePieces.map(function(_ref4) {
                        var _ref5 = _slicedToArray(_ref4, 2), text = _ref5[0], styleSet = _ref5[1], content = encodeContent(text), _iteratorNormalCompletion5 = !0, _didIteratorError5 = !1, _iteratorError5 = void 0;
                        try {
                            for (var _step5, _iterator5 = _this.styleOrder[Symbol.iterator](); !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = !0) {
                                var _styleName = _step5.value;
                                // If our block type is CODE then don't wrap inline code elements.
                                if ((_styleName !== CODE || blockType !== _draftJsUtils.BLOCK_TYPE.CODE) && styleSet.has(_styleName)) {
                                    var _inlineStyles$_styleN = _this.inlineStyles[_styleName], _element = _inlineStyles$_styleN.element, _attributes2 = _inlineStyles$_styleN.attributes, _style2 = _inlineStyles$_styleN.style;
                                    if (null == _element && (_element = "span"), // Normalize `className` -> `class`, etc.
                                    _attributes2 = (0, _normalizeAttributes2.default)(_attributes2), null != _style2) {
                                        var styleAttr = (0, _styleToCSS2.default)(_style2);
                                        _attributes2 = null == _attributes2 ? {
                                            style: styleAttr
                                        } : _extends({}, _attributes2, {
                                            style: styleAttr
                                        });
                                    }
                                    var attrString = stringifyAttrs(_attributes2);
                                    content = "<" + _element + attrString + ">" + content + "</" + _element + ">";
                                }
                            }
                        } catch (err) {
                            _didIteratorError5 = !0, _iteratorError5 = err;
                        } finally {
                            try {
                                !_iteratorNormalCompletion5 && _iterator5.return && _iterator5.return();
                            } finally {
                                if (_didIteratorError5) throw _iteratorError5;
                            }
                        }
                        return content;
                    }).join(""), entity = entityKey ? _draftJs.Entity.get(entityKey) : null, entityType = null == entity ? null : entity.getType().toUpperCase();
                    if (null != entityType && entityType === _draftJsUtils.ENTITY_TYPE.LINK) {
                        var attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null, attrString = stringifyAttrs(attrs);
                        return "<a" + attrString + ">" + content + "</a>";
                    }
                    if (null != entityType && entityType === _draftJsUtils.ENTITY_TYPE.IMAGE) {
                        var _attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null, _attrString = stringifyAttrs(_attrs);
                        return "<img" + _attrString + "/>";
                    }
                    return content;
                }).join("");
            }
        }, {
            key: "preserveWhitespace",
            value: function(text) {
                for (var length = text.length, newText = new Array(length), i = 0; i < length; i++) " " !== text[i] || 0 !== i && i !== length - 1 && " " !== text[i - 1] ? newText[i] = text[i] : newText[i] = " ";
                return newText.join("");
            }
        } ]), MarkupGenerator;
    }();
}, /* 189 */
/***/
function(module, exports) {
    "use strict";
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
            return arr2;
        }
        return Array.from(arr);
    }
    function combineOrderedStyles(customMap, defaults) {
        if (null == customMap) return defaults;
        var _defaults = _slicedToArray(defaults, 2), defaultStyleMap = _defaults[0], defaultStyleOrder = _defaults[1], styleMap = _extends({}, defaultStyleMap), styleOrder = [].concat(_toConsumableArray(defaultStyleOrder)), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
        try {
            for (var _step, _iterator = Object.keys(customMap)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                var _styleName = _step.value;
                if (defaultStyleMap.hasOwnProperty(_styleName)) {
                    var defaultStyles = defaultStyleMap[_styleName];
                    styleMap[_styleName] = _extends({}, defaultStyles, customMap[_styleName]);
                } else styleMap[_styleName] = customMap[_styleName], styleOrder.push(_styleName);
            }
        } catch (err) {
            _didIteratorError = !0, _iteratorError = err;
        } finally {
            try {
                !_iteratorNormalCompletion && _iterator.return && _iterator.return();
            } finally {
                if (_didIteratorError) throw _iteratorError;
            }
        }
        return [ styleMap, styleOrder ];
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, _slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [], _n = !0, _d = !1, _e = void 0;
            try {
                for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                !i || _arr.length !== i); _n = !0) ;
            } catch (err) {
                _d = !0, _e = err;
            } finally {
                try {
                    !_n && _i.return && _i.return();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) return arr;
            if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }();
    exports.default = combineOrderedStyles;
}, /* 190 */
/***/
function(module, exports) {
    "use strict";
    function normalizeAttributes(attributes) {
        if (null == attributes) return attributes;
        var normalized = {}, didNormalize = !1, _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
        try {
            for (var _step, _iterator = Object.keys(attributes)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                var name = _step.value, newName = name;
                ATTR_NAME_MAP.hasOwnProperty(name) && (newName = ATTR_NAME_MAP[name], didNormalize = !0), 
                normalized[newName] = attributes[name];
            }
        } catch (err) {
            _didIteratorError = !0, _iteratorError = err;
        } finally {
            try {
                !_iteratorNormalCompletion && _iterator.return && _iterator.return();
            } finally {
                if (_didIteratorError) throw _iteratorError;
            }
        }
        return didNormalize ? normalized : attributes;
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    // Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
    var ATTR_NAME_MAP = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
    };
    exports.default = normalizeAttributes;
}, /* 191 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    // Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/CSSPropertyOperations.js
    function processStyleName(name) {
        return name.replace(UPPERCASE_PATTERN, "-$1").toLowerCase().replace(VENDOR_PREFIX, "-$1-");
    }
    // Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/dangerousStyleValue.js
    function processStyleValue(name, value) {
        var isNumeric = void 0;
        return "string" == typeof value ? isNumeric = NUMERIC_STRING.test(value) : (isNumeric = !0, 
        value = String(value)), isNumeric && "0" !== value && _CSSProperty.isUnitlessNumber[name] !== !0 ? value + "px" : value;
    }
    function styleToCSS(styleDescr) {
        return Object.keys(styleDescr).map(function(name) {
            var styleValue = processStyleValue(name, styleDescr[name]), styleName = processStyleName(name);
            return styleName + ": " + styleValue;
        }).join("; ");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _CSSProperty = __webpack_require__(192), VENDOR_PREFIX = /^(moz|ms|o|webkit)-/, NUMERIC_STRING = /^\d+$/, UPPERCASE_PATTERN = /([A-Z])/g;
    exports.default = styleToCSS;
}, /* 192 */
/***/
function(module, exports) {
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
    "use strict";
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
	 * CSS properties which accept numbers but are not in units of "px".
	 */
    var isUnitlessNumber = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridColumn: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        // SVG-related properties
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, prefixes = [ "Webkit", "ms", "Moz", "O" ];
    // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
    // infinite loop, because it iterates over the newly added props too.
    Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix) {
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
            backgroundAttachment: !0,
            backgroundColor: !0,
            backgroundImage: !0,
            backgroundPositionX: !0,
            backgroundPositionY: !0,
            backgroundRepeat: !0
        },
        backgroundPosition: {
            backgroundPositionX: !0,
            backgroundPositionY: !0
        },
        border: {
            borderWidth: !0,
            borderStyle: !0,
            borderColor: !0
        },
        borderBottom: {
            borderBottomWidth: !0,
            borderBottomStyle: !0,
            borderBottomColor: !0
        },
        borderLeft: {
            borderLeftWidth: !0,
            borderLeftStyle: !0,
            borderLeftColor: !0
        },
        borderRight: {
            borderRightWidth: !0,
            borderRightStyle: !0,
            borderRightColor: !0
        },
        borderTop: {
            borderTopWidth: !0,
            borderTopStyle: !0,
            borderTopColor: !0
        },
        font: {
            fontStyle: !0,
            fontVariant: !0,
            fontWeight: !0,
            fontSize: !0,
            lineHeight: !0,
            fontFamily: !0
        },
        outline: {
            outlineWidth: !0,
            outlineStyle: !0,
            outlineColor: !0
        }
    }, CSSProperty = {
        isUnitlessNumber: isUnitlessNumber,
        shorthandPropertyExpansions: shorthandPropertyExpansions
    };
    module.exports = CSSProperty;
}, /* 193 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _stateFromHTML = __webpack_require__(194);
    Object.defineProperty(exports, "stateFromHTML", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_stateFromHTML).default;
        }
    });
}, /* 194 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function stateFromHTML(html, options) {
        var parser = null == options || null == options.parser ? _parseHTML2.default : options.parser, element = parser(html);
        return (0, _draftJsImportElement.stateFromElement)(element, options);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = stateFromHTML;
    var _draftJsImportElement = __webpack_require__(195), _parseHTML = __webpack_require__(199), _parseHTML2 = _interopRequireDefault(_parseHTML);
}, /* 195 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _stateFromElement = __webpack_require__(196);
    Object.defineProperty(exports, "stateFromElement", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_stateFromElement).default;
        }
    });
}, /* 196 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function trimLeadingNewline(text, characterMeta) {
        return "\n" === text.charAt(0) && (text = text.slice(1), characterMeta = characterMeta.slice(1)), 
        {
            text: text,
            characterMeta: characterMeta
        };
    }
    function trimLeadingSpace(text, characterMeta) {
        for (;" " === text.charAt(0); ) text = text.slice(1), characterMeta = characterMeta.slice(1);
        return {
            text: text,
            characterMeta: characterMeta
        };
    }
    function trimTrailingSpace(text, characterMeta) {
        for (;" " === text.slice(-1); ) text = text.slice(0, -1), characterMeta = characterMeta.slice(0, -1);
        return {
            text: text,
            characterMeta: characterMeta
        };
    }
    function collapseWhiteSpace(text, characterMeta) {
        text = text.replace(/[ \t\n]/g, " ");
        var _trimLeadingSpace = trimLeadingSpace(text, characterMeta);
        text = _trimLeadingSpace.text, characterMeta = _trimLeadingSpace.characterMeta;
        var _trimTrailingSpace = trimTrailingSpace(text, characterMeta);
        text = _trimTrailingSpace.text, characterMeta = _trimTrailingSpace.characterMeta;
        for (var i = text.length; i--; ) " " === text.charAt(i) && " " === text.charAt(i - 1) && (text = text.slice(0, i) + text.slice(i + 1), 
        characterMeta = characterMeta.slice(0, i).concat(characterMeta.slice(i + 1)));
        // There could still be one space on either side of a softbreak.
        var _replaceTextWithMeta = (0, _replaceTextWithMeta4.default)({
            text: text,
            characterMeta: characterMeta
        }, SOFT_BREAK_PLACEHOLDER + " ", SOFT_BREAK_PLACEHOLDER);
        text = _replaceTextWithMeta.text, characterMeta = _replaceTextWithMeta.characterMeta;
        var _replaceTextWithMeta2 = (0, _replaceTextWithMeta4.default)({
            text: text,
            characterMeta: characterMeta
        }, " " + SOFT_BREAK_PLACEHOLDER, SOFT_BREAK_PLACEHOLDER);
        return text = _replaceTextWithMeta2.text, characterMeta = _replaceTextWithMeta2.characterMeta, 
        {
            text: text,
            characterMeta: characterMeta
        };
    }
    function canHaveDepth(blockType) {
        switch (blockType) {
          case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
          case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
            return !0;

          default:
            return !1;
        }
    }
    function concatFragments(fragments) {
        var text = "", characterMeta = (0, _immutable.Seq)();
        return fragments.forEach(function(textFragment) {
            text += textFragment.text, characterMeta = characterMeta.concat(textFragment.characterMeta);
        }), {
            text: text,
            characterMeta: characterMeta
        };
    }
    function addStyleFromTagName(styleSet, tagName, elementStyles) {
        switch (tagName) {
          case "b":
          case "strong":
            return styleSet.add(_draftJsUtils.INLINE_STYLE.BOLD);

          case "i":
          case "em":
            return styleSet.add(_draftJsUtils.INLINE_STYLE.ITALIC);

          case "ins":
            return styleSet.add(_draftJsUtils.INLINE_STYLE.UNDERLINE);

          case "code":
            return styleSet.add(_draftJsUtils.INLINE_STYLE.CODE);

          case "del":
            return styleSet.add(_draftJsUtils.INLINE_STYLE.STRIKETHROUGH);

          default:
            // Allow custom styles to be provided.
            // Allow custom styles to be provided.
            return elementStyles && elementStyles[tagName] ? styleSet.add(elementStyles[tagName]) : styleSet;
        }
    }
    function stateFromElement(element, options) {
        var blocks = new BlockGenerator(options).process(element);
        return _draftJs.ContentState.createFromBlockArray(blocks);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }();
    exports.default = stateFromElement;
    var _replaceTextWithMeta3 = __webpack_require__(197), _replaceTextWithMeta4 = _interopRequireDefault(_replaceTextWithMeta3), _draftJs = __webpack_require__(2), _immutable = __webpack_require__(146), _draftJsUtils = __webpack_require__(149), _syntheticDom = __webpack_require__(198), NO_STYLE = (0, 
    _immutable.OrderedSet)(), NO_ENTITY = null, EMPTY_BLOCK = new _draftJs.ContentBlock({
        key: (0, _draftJs.genKey)(),
        text: "",
        type: _draftJsUtils.BLOCK_TYPE.UNSTYLED,
        characterList: (0, _immutable.List)(),
        depth: 0
    }), LINE_BREAKS = /(\r\n|\r|\n)/g, SOFT_BREAK_PLACEHOLDER = "\r", ZERO_WIDTH_SPACE = "​", DATA_ATTRIBUTE = /^data-([a-z0-9-]+)$/, ELEM_ATTR_MAP = {
        a: {
            href: "url",
            rel: "rel",
            target: "target",
            title: "title"
        },
        img: {
            src: "src",
            alt: "alt"
        }
    }, getEntityData = function(tagName, element) {
        var data = {};
        if (ELEM_ATTR_MAP.hasOwnProperty(tagName)) for (var attrMap = ELEM_ATTR_MAP[tagName], i = 0; i < element.attributes.length; i++) {
            var _element$attributes$i = element.attributes[i], name = _element$attributes$i.name, value = _element$attributes$i.value;
            if (null != value) if (attrMap.hasOwnProperty(name)) {
                var newName = attrMap[name];
                data[newName] = value;
            } else DATA_ATTRIBUTE.test(name) && (data[name] = value);
        }
        return data;
    }, ELEM_TO_ENTITY = {
        a: function(tagName, element) {
            var data = getEntityData(tagName, element);
            // Don't add `<a>` elements with no href.
            if (null != data.url) return _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.LINK, "MUTABLE", data);
        },
        img: function(tagName, element) {
            var data = getEntityData(tagName, element);
            // Don't add `<img>` elements with no src.
            if (null != data.src) return _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.IMAGE, "MUTABLE", data);
        }
    }, INLINE_ELEMENTS = {
        a: 1,
        abbr: 1,
        area: 1,
        audio: 1,
        b: 1,
        bdi: 1,
        bdo: 1,
        br: 1,
        button: 1,
        canvas: 1,
        cite: 1,
        code: 1,
        command: 1,
        datalist: 1,
        del: 1,
        dfn: 1,
        em: 1,
        embed: 1,
        i: 1,
        iframe: 1,
        img: 1,
        input: 1,
        ins: 1,
        kbd: 1,
        keygen: 1,
        label: 1,
        map: 1,
        mark: 1,
        meter: 1,
        noscript: 1,
        object: 1,
        output: 1,
        progress: 1,
        q: 1,
        ruby: 1,
        s: 1,
        samp: 1,
        script: 1,
        select: 1,
        small: 1,
        span: 1,
        strong: 1,
        sub: 1,
        sup: 1,
        textarea: 1,
        time: 1,
        u: 1,
        var: 1,
        video: 1,
        wbr: 1,
        acronym: 1,
        applet: 1,
        basefont: 1,
        big: 1,
        font: 1,
        isindex: 1,
        strike: 1,
        style: 1,
        tt: 1
    }, SPECIAL_ELEMENTS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        colgroup: 1,
        command: 1,
        dl: 1,
        embed: 1,
        head: 1,
        hgroup: 1,
        hr: 1,
        iframe: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        ol: 1,
        optgroup: 1,
        option: 1,
        param: 1,
        script: 1,
        select: 1,
        source: 1,
        style: 1,
        table: 1,
        tbody: 1,
        textarea: 1,
        tfoot: 1,
        thead: 1,
        title: 1,
        tr: 1,
        track: 1,
        ul: 1,
        wbr: 1,
        basefont: 1,
        dialog: 1,
        dir: 1,
        isindex: 1
    }, SELF_CLOSING_ELEMENTS = {
        img: 1
    }, BlockGenerator = function() {
        function BlockGenerator() {
            var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            _classCallCheck(this, BlockGenerator), this.options = options, // This represents the hierarchy as we traverse nested elements; for
            // example [body, ul, li] where we must know li's parent type (ul or ol).
            this.blockStack = [], // This is a linear list of blocks that will form the output; for example
            // [p, li, li, blockquote].
            this.blockList = [], this.depth = 0;
        }
        return _createClass(BlockGenerator, [ {
            key: "process",
            value: function(element) {
                this.processBlockElement(element);
                var contentBlocks = [];
                return this.blockList.forEach(function(block) {
                    var _concatFragments = concatFragments(block.textFragments), text = _concatFragments.text, characterMeta = _concatFragments.characterMeta, includeEmptyBlock = !1;
                    if (// If the block contains only a soft break then don't discard the block,
                    // but discard the soft break.
                    text === SOFT_BREAK_PLACEHOLDER && (includeEmptyBlock = !0, text = ""), "pre" === block.tagName) {
                        var _trimLeadingNewline = trimLeadingNewline(text, characterMeta);
                        text = _trimLeadingNewline.text, characterMeta = _trimLeadingNewline.characterMeta;
                    } else {
                        var _collapseWhiteSpace = collapseWhiteSpace(text, characterMeta);
                        text = _collapseWhiteSpace.text, characterMeta = _collapseWhiteSpace.characterMeta;
                    }
                    // Previously we were using a placeholder for soft breaks. Now that we
                    // have collapsed whitespace we can change it back to normal line breaks.
                    text = text.split(SOFT_BREAK_PLACEHOLDER).join("\n"), // Discard empty blocks (unless otherwise specified).
                    (text.length || includeEmptyBlock) && contentBlocks.push(new _draftJs.ContentBlock({
                        key: (0, _draftJs.genKey)(),
                        text: text,
                        type: block.type,
                        characterList: characterMeta.toList(),
                        depth: block.depth
                    }));
                }), contentBlocks.length ? contentBlocks : [ EMPTY_BLOCK ];
            }
        }, {
            key: "getBlockTypeFromTagName",
            value: function(tagName) {
                var blockTypes = this.options.blockTypes;
                if (blockTypes && blockTypes[tagName]) return blockTypes[tagName];
                switch (tagName) {
                  case "li":
                    var parent = this.blockStack.slice(-1)[0];
                    return "ol" === parent.tagName ? _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM : _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM;

                  case "blockquote":
                    return _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE;

                  case "h1":
                    return _draftJsUtils.BLOCK_TYPE.HEADER_ONE;

                  case "h2":
                    return _draftJsUtils.BLOCK_TYPE.HEADER_TWO;

                  case "h3":
                    return _draftJsUtils.BLOCK_TYPE.HEADER_THREE;

                  case "h4":
                    return _draftJsUtils.BLOCK_TYPE.HEADER_FOUR;

                  case "h5":
                    return _draftJsUtils.BLOCK_TYPE.HEADER_FIVE;

                  case "h6":
                    return _draftJsUtils.BLOCK_TYPE.HEADER_SIX;

                  case "pre":
                    return _draftJsUtils.BLOCK_TYPE.CODE;

                  case "figure":
                    return _draftJsUtils.BLOCK_TYPE.ATOMIC;

                  default:
                    return _draftJsUtils.BLOCK_TYPE.UNSTYLED;
                }
            }
        }, {
            key: "processBlockElement",
            value: function(element) {
                if (element) {
                    var tagName = element.nodeName.toLowerCase(), type = this.getBlockTypeFromTagName(tagName), hasDepth = canHaveDepth(type), allowRender = !SPECIAL_ELEMENTS.hasOwnProperty(tagName), block = {
                        tagName: tagName,
                        textFragments: [],
                        type: type,
                        styleStack: [ NO_STYLE ],
                        entityStack: [ NO_ENTITY ],
                        depth: hasDepth ? this.depth : 0
                    };
                    allowRender && (this.blockList.push(block), hasDepth && (this.depth += 1)), this.blockStack.push(block), 
                    null != element.childNodes && Array.from(element.childNodes).forEach(this.processNode, this), 
                    this.blockStack.pop(), allowRender && hasDepth && (this.depth -= 1);
                }
            }
        }, {
            key: "processInlineElement",
            value: function(element) {
                var tagName = element.nodeName.toLowerCase();
                if ("br" === tagName) return void this.processText(SOFT_BREAK_PLACEHOLDER);
                var block = this.blockStack.slice(-1)[0], style = block.styleStack.slice(-1)[0], entityKey = block.entityStack.slice(-1)[0];
                style = addStyleFromTagName(style, tagName, this.options.elementStyles), ELEM_TO_ENTITY.hasOwnProperty(tagName) && (// If the to-entity function returns nothing, use the existing entity.
                entityKey = ELEM_TO_ENTITY[tagName](tagName, element) || entityKey), block.styleStack.push(style), 
                block.entityStack.push(entityKey), null != element.childNodes && Array.from(element.childNodes).forEach(this.processNode, this), 
                SELF_CLOSING_ELEMENTS.hasOwnProperty(tagName) && this.processText(" "), block.entityStack.pop(), 
                block.styleStack.pop();
            }
        }, {
            key: "processTextNode",
            value: function(node) {
                var text = node.nodeValue;
                // This is important because we will use \r as a placeholder for a soft break.
                text = text.replace(LINE_BREAKS, "\n"), // Replace zero-width space (we use it as a placeholder in markdown) with a
                // soft break.
                // TODO: The import-markdown package should correctly turn breaks into <br>
                // elements so we don't need to include this hack.
                text = text.split(ZERO_WIDTH_SPACE).join(SOFT_BREAK_PLACEHOLDER), this.processText(text);
            }
        }, {
            key: "processText",
            value: function(text) {
                var block = this.blockStack.slice(-1)[0], style = block.styleStack.slice(-1)[0], entity = block.entityStack.slice(-1)[0], charMetadata = _draftJs.CharacterMetadata.create({
                    style: style,
                    entity: entity
                }), seq = (0, _immutable.Repeat)(charMetadata, text.length);
                block.textFragments.push({
                    text: text,
                    characterMeta: seq
                });
            }
        }, {
            key: "processNode",
            value: function(node) {
                if (node.nodeType === _syntheticDom.NODE_TYPE_ELEMENT) {
                    var element = node, _tagName = element.nodeName.toLowerCase();
                    INLINE_ELEMENTS.hasOwnProperty(_tagName) ? this.processInlineElement(element) : this.processBlockElement(element);
                } else node.nodeType === _syntheticDom.NODE_TYPE_TEXT && this.processTextNode(node);
            }
        } ]), BlockGenerator;
    }();
}, /* 197 */
/***/
function(module, exports) {
    "use strict";
    function replaceTextWithMeta(subject, searchText, replaceText) {
        for (var text = subject.text, characterMeta = subject.characterMeta, searchTextLength = searchText.length, replaceTextLength = replaceText.length, resultTextParts = [], resultCharMeta = characterMeta.slice(0, 0), lastEndIndex = 0, index = text.indexOf(searchText); index !== -1; ) resultTextParts.push(text.slice(lastEndIndex, index) + replaceText), 
        resultCharMeta = resultCharMeta.concat(characterMeta.slice(lastEndIndex, index), // Use the metadata of the first char we are replacing.
        repeatSeq(characterMeta.slice(index, index + 1), replaceTextLength)), lastEndIndex = index + searchTextLength, 
        index = text.indexOf(searchText, lastEndIndex);
        return resultTextParts.push(text.slice(lastEndIndex)), resultCharMeta = resultCharMeta.concat(characterMeta.slice(lastEndIndex)), 
        {
            text: resultTextParts.join(""),
            characterMeta: resultCharMeta
        };
    }
    function repeatSeq(seq, count) {
        for (var result = seq.slice(0, 0); count-- > 0; ) result = result.concat(seq);
        return result;
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = replaceTextWithMeta;
}, /* 198 */
/***/
function(module, exports) {
    "use strict";
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
            return arr2;
        }
        return Array.from(arr);
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function escape(html) {
        return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function escapeAttr(html) {
        return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), EMPTY_ATTR_LIST = [], NODE_TYPE_ELEMENT = exports.NODE_TYPE_ELEMENT = 1, NODE_TYPE_TEXT = exports.NODE_TYPE_TEXT = 3, NODE_TYPE_FRAGMENT = exports.NODE_TYPE_FRAGMENT = 11, SELF_CLOSING = exports.SELF_CLOSING = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }, Node = exports.Node = function Node() {
        _classCallCheck(this, Node);
    };
    exports.TextNode = function(_Node) {
        function TextNode(value) {
            _classCallCheck(this, TextNode);
            var _this = _possibleConstructorReturn(this, (TextNode.__proto__ || Object.getPrototypeOf(TextNode)).apply(this, arguments));
            return _this.nodeType = NODE_TYPE_TEXT, _this.nodeName = "#text", _this.nodeValue = value, 
            _this;
        }
        return _inherits(TextNode, _Node), _createClass(TextNode, [ {
            key: "toString",
            value: function() {
                return escape(this.nodeValue);
            }
        } ]), TextNode;
    }(Node), exports.ElementNode = function(_Node2) {
        function ElementNode(name, attributes, childNodes) {
            _classCallCheck(this, ElementNode);
            var _this2 = _possibleConstructorReturn(this, (ElementNode.__proto__ || Object.getPrototypeOf(ElementNode)).apply(this, arguments));
            null == attributes && (attributes = EMPTY_ATTR_LIST);
            var isSelfClosing = SELF_CLOSING[name] === !0;
            return _this2.nodeType = NODE_TYPE_ELEMENT, _this2.nodeName = name, _this2.attributes = attributes, 
            _this2.attrMap = new Map(attributes.map(function(attr) {
                return [ attr.name, attr ];
            })), _this2.childNodes = [], _this2.isSelfClosing = isSelfClosing, !isSelfClosing && childNodes && childNodes.forEach(_this2.appendChild, _this2), 
            _this2;
        }
        return _inherits(ElementNode, _Node2), _createClass(ElementNode, [ {
            key: "appendChild",
            value: function(node) {
                if (node.nodeType === NODE_TYPE_FRAGMENT) {
                    if (null != node.childNodes) {
                        var _childNodes, childNodes = node.childNodes;
                        (_childNodes = this.childNodes).push.apply(_childNodes, _toConsumableArray(childNodes));
                    }
                } else this.childNodes.push(node);
            }
        }, {
            key: "getAttribute",
            value: function(name) {
                var attr = this.attrMap.get(name);
                if (attr) return attr.value;
            }
        }, {
            key: "toString",
            value: function(isXHTML) {
                var attributes = [], _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
                try {
                    for (var _step, _iterator = this.attributes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                        var _step$value = _step.value, _name = _step$value.name, _value = _step$value.value;
                        attributes.push(_name + (_value ? '="' + escapeAttr(_value) + '"' : ""));
                    }
                } catch (err) {
                    _didIteratorError = !0, _iteratorError = err;
                } finally {
                    try {
                        !_iteratorNormalCompletion && _iterator.return && _iterator.return();
                    } finally {
                        if (_didIteratorError) throw _iteratorError;
                    }
                }
                var attrString = attributes.length ? " " + attributes.join(" ") : "";
                if (this.isSelfClosing) return "<" + this.nodeName + attrString + (isXHTML ? "/>" : ">");
                var childNodes = this.childNodes.map(function(node) {
                    return node.toString(isXHTML);
                }).join("");
                return "<" + this.nodeName + attrString + ">" + childNodes + "</" + this.nodeName + ">";
            }
        } ]), ElementNode;
    }(Node), exports.FragmentNode = function(_Node3) {
        function FragmentNode(childNodes) {
            _classCallCheck(this, FragmentNode);
            var _this3 = _possibleConstructorReturn(this, (FragmentNode.__proto__ || Object.getPrototypeOf(FragmentNode)).apply(this, arguments));
            return _this3.nodeType = NODE_TYPE_FRAGMENT, _this3.childNodes = [], childNodes && childNodes.forEach(_this3.appendChild, _this3), 
            _this3;
        }
        return _inherits(FragmentNode, _Node3), _createClass(FragmentNode, [ {
            key: "appendChild",
            value: function(node) {
                if (node.nodeType === NODE_TYPE_FRAGMENT) {
                    if (null != node.childNodes) {
                        var _childNodes2, childNodes = node.childNodes;
                        (_childNodes2 = this.childNodes).push.apply(_childNodes2, _toConsumableArray(childNodes));
                    }
                } else this.childNodes.push(node);
            }
        }, {
            key: "toString",
            value: function(isXHTML) {
                return this.childNodes.map(function(node) {
                    return node.toString(isXHTML);
                }).join("");
            }
        } ]), FragmentNode;
    }(Node);
}, /* 199 */
/***/
function(module, exports) {
    "use strict";
    function parseHTML(html) {
        var doc = void 0;
        if ("undefined" != typeof DOMParser) {
            var parser = new DOMParser();
            doc = parser.parseFromString(html, "text/html");
        } else doc = document.implementation.createHTMLDocument(""), doc.documentElement.innerHTML = html;
        return doc.body;
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = parseHTML;
}, /* 200 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _stateToMarkdown = __webpack_require__(201);
    Object.defineProperty(exports, "stateToMarkdown", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_stateToMarkdown).default;
        }
    });
}, /* 201 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function canHaveDepth(blockType) {
        switch (blockType) {
          case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
          case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
            return !0;

          default:
            return !1;
        }
    }
    function encodeContent(text) {
        return text.replace(/[*_`]/g, "\\$&");
    }
    // Encode chars that would normally be allowed in a URL but would conflict with
    // our markdown syntax: `[foo](http://foo/)`
    function encodeURL(url) {
        return url.replace(/\)/g, "%29");
    }
    // Escape quotes using backslash.
    function escapeTitle(text) {
        return text.replace(/"/g, '\\"');
    }
    function stateToMarkdown(content) {
        return new MarkupGenerator(content).generate();
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [], _n = !0, _d = !1, _e = void 0;
            try {
                for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                !i || _arr.length !== i); _n = !0) ;
            } catch (err) {
                _d = !0, _e = err;
            } finally {
                try {
                    !_n && _i.return && _i.return();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) return arr;
            if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }(), _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }();
    exports.default = stateToMarkdown;
    var _draftJsUtils = __webpack_require__(149), _draftJs = __webpack_require__(2), BOLD = _draftJsUtils.INLINE_STYLE.BOLD, CODE = _draftJsUtils.INLINE_STYLE.CODE, ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC, STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH, UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE, CODE_INDENT = "    ", MarkupGenerator = function() {
        function MarkupGenerator(contentState) {
            _classCallCheck(this, MarkupGenerator), this.contentState = contentState;
        }
        return _createClass(MarkupGenerator, [ {
            key: "generate",
            value: function() {
                for (this.output = [], this.blocks = this.contentState.getBlockMap().toArray(), 
                this.totalBlocks = this.blocks.length, this.currentBlock = 0, this.listItemCounts = {}; this.currentBlock < this.totalBlocks; ) this.processBlock();
                return this.output.join("");
            }
        }, {
            key: "processBlock",
            value: function() {
                var block = this.blocks[this.currentBlock], blockType = block.getType();
                switch (blockType) {
                  case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
                    this.insertLineBreaks(1), this.output.push("# " + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
                    this.insertLineBreaks(1), this.output.push("## " + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
                    this.insertLineBreaks(1), this.output.push("### " + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
                    this.insertLineBreaks(1), this.output.push("#### " + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
                    this.insertLineBreaks(1), this.output.push("##### " + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
                    this.insertLineBreaks(1), this.output.push("###### " + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
                    var blockDepth = block.getDepth(), lastBlock = this.getLastBlock(), lastBlockType = lastBlock ? lastBlock.getType() : null, lastBlockDepth = lastBlock && canHaveDepth(lastBlockType) ? lastBlock.getDepth() : null;
                    lastBlockType !== blockType && lastBlockDepth !== blockDepth - 1 && (this.insertLineBreaks(1), 
                    // Insert an additional line break if following opposite list type.
                    lastBlockType === _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM && this.insertLineBreaks(1));
                    var indent = " ".repeat(4 * block.depth);
                    this.output.push(indent + "- " + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
                    var _blockDepth = block.getDepth(), _lastBlock = this.getLastBlock(), _lastBlockType = _lastBlock ? _lastBlock.getType() : null, _lastBlockDepth = _lastBlock && canHaveDepth(_lastBlockType) ? _lastBlock.getDepth() : null;
                    _lastBlockType !== blockType && _lastBlockDepth !== _blockDepth - 1 && (this.insertLineBreaks(1), 
                    // Insert an additional line break if following opposite list type.
                    _lastBlockType === _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM && this.insertLineBreaks(1));
                    var _indent = " ".repeat(4 * _blockDepth), count = this.getListItemCount(block) % 10;
                    this.output.push(_indent + (count + ". ") + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
                    this.insertLineBreaks(1), this.output.push(" > " + this.renderBlockContent(block) + "\n");
                    break;

                  case _draftJsUtils.BLOCK_TYPE.CODE:
                    this.insertLineBreaks(1), this.output.push(CODE_INDENT + this.renderBlockContent(block) + "\n");
                    break;

                  default:
                    this.insertLineBreaks(1), this.output.push(this.renderBlockContent(block) + "\n");
                }
                this.currentBlock += 1;
            }
        }, {
            key: "getLastBlock",
            value: function() {
                return this.blocks[this.currentBlock - 1];
            }
        }, {
            key: "getNextBlock",
            value: function() {
                return this.blocks[this.currentBlock + 1];
            }
        }, {
            key: "getListItemCount",
            value: function(block) {
                for (var blockType = block.getType(), blockDepth = block.getDepth(), index = this.currentBlock - 1, prevBlock = this.blocks[index]; prevBlock && canHaveDepth(prevBlock.getType()) && prevBlock.getDepth() > blockDepth; ) index -= 1, 
                prevBlock = this.blocks[index];
                return prevBlock && prevBlock.getType() === blockType && prevBlock.getDepth() === blockDepth || (this.listItemCounts[blockDepth] = 0), 
                this.listItemCounts[blockDepth] = this.listItemCounts[blockDepth] + 1;
            }
        }, {
            key: "insertLineBreaks",
            value: function() {
                this.currentBlock > 0 && this.output.push("\n");
            }
        }, {
            key: "renderBlockContent",
            value: function(block) {
                var blockType = block.getType(), text = block.getText();
                if ("" === text) // Prevent element collapse if completely empty.
                // TODO: Replace with constant.
                return "​";
                var charMetaList = block.getCharacterList(), entityPieces = (0, _draftJsUtils.getEntityRanges)(text, charMetaList);
                return entityPieces.map(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), entityKey = _ref2[0], stylePieces = _ref2[1], content = stylePieces.map(function(_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2), text = _ref4[0], style = _ref4[1];
                        // Don't allow empty inline elements.
                        if (!text) return "";
                        var content = encodeContent(text);
                        // TODO: encode `+`?
                        // TODO: encode `~`?
                        return style.has(BOLD) && (content = "**" + content + "**"), style.has(UNDERLINE) && (content = "++" + content + "++"), 
                        style.has(ITALIC) && (content = "_" + content + "_"), style.has(STRIKETHROUGH) && (content = "~~" + content + "~~"), 
                        style.has(CODE) && (content = blockType === _draftJsUtils.BLOCK_TYPE.CODE ? content : "`" + content + "`"), 
                        content;
                    }).join(""), entity = entityKey ? _draftJs.Entity.get(entityKey) : null;
                    if (null != entity && entity.getType() === _draftJsUtils.ENTITY_TYPE.LINK) {
                        var data = entity.getData(), url = data.url || "", title = data.title ? ' "' + escapeTitle(data.title) + '"' : "";
                        return "[" + content + "](" + encodeURL(url) + title + ")";
                    }
                    if (null != entity && entity.getType() === _draftJsUtils.ENTITY_TYPE.IMAGE) {
                        var _data = entity.getData(), src = _data.src || "", alt = _data.alt ? ' "' + escapeTitle(_data.alt) + '"' : "";
                        return "![" + alt + "](" + encodeURL(src) + ")";
                    }
                    return content;
                }).join("");
            }
        } ]), MarkupGenerator;
    }();
}, /* 202 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _stateFromMarkdown = __webpack_require__(203);
    Object.defineProperty(exports, "stateFromMarkdown", {
        enumerable: !0,
        get: function() {
            return _interopRequireDefault(_stateFromMarkdown).default;
        }
    });
}, /* 203 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function stateFromMarkdown(markdown) {
        var element = _MarkdownParser2.default.parse(markdown, {
            getAST: !0
        });
        return (0, _draftJsImportElement.stateFromElement)(element);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = stateFromMarkdown;
    var _MarkdownParser = __webpack_require__(204), _MarkdownParser2 = _interopRequireDefault(_MarkdownParser), _draftJsImportElement = __webpack_require__(195);
}, /* 204 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /**
	 * Block Lexer
	 */
    function Lexer(options) {
        this.tokens = [], this.tokens.links = {}, this.options = assign({}, options || defaults), 
        this.rules = block.normal, this.options.gfm && (this.rules = block.gfm);
    }
    /**
	 * Inline Lexer & Compiler
	 */
    function InlineLexer(links, options) {
        if (this.options = assign({}, options || defaults), this.links = links, this.rules = inline.normal, 
        this.renderer = this.options.renderer || new Renderer(), this.renderer.options = this.options, 
        !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.options.breaks ? this.rules = inline.breaks : this.rules = inline.gfm : this.options.pedantic && (this.rules = inline.pedantic);
    }
    /**
	 * Renderer
	 */
    function Renderer(options) {
        this.options = options || {};
    }
    /**
	 * Parsing & Compiling
	 */
    function Parser(options) {
        this.tokens = [], this.token = null, this.options = assign({}, options || defaults), 
        this.options.renderer = this.options.renderer || new Renderer(), this.renderer = this.options.renderer, 
        this.renderer.options = this.options;
    }
    /**
	 * Helpers
	 */
    function replace(regex, options) {
        return regex = regex.source, options = options || "", function self(name, val) {
            return name ? (val = val.source || val, val = val.replace(/(^|[^\[])\^/g, "$1"), 
            regex = regex.replace(name, val), self) : new RegExp(regex, options);
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _syntheticDom = __webpack_require__(198), hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign || function(obj) {
        for (var i = 1; i < arguments.length; i++) {
            var target = arguments[i];
            for (var key in target) hasOwnProperty.call(target, key) && (obj[key] = target[key]);
        }
        return obj;
    }, noop = function() {};
    noop.exec = noop;
    var defaults = {
        gfm: !0,
        breaks: !1,
        pedantic: !1,
        smartLists: !1,
        silent: !1,
        langPrefix: "lang-",
        renderer: new Renderer(),
        xhtml: !1
    }, block = {
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
    block.bullet = /(?:[*+-]|\d+\.)/, block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, 
    block.item = replace(block.item, "gm")(/bull/g, block.bullet)(), block.list = replace(block.list)(/bull/g, block.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + block.def.source + ")")(), 
    block.blockquote = replace(block.blockquote)("def", block.def)(), block.paragraph = replace(block.paragraph)("hr", block.hr)("heading", block.heading)("lheading", block.lheading)("blockquote", block.blockquote)("def", block.def)(), 
    /**
	 * Normal Block Grammar
	 */
    block.normal = assign({}, block), /**
	 * GFM Block Grammar
	 */
    block.gfm = assign({}, block.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    }), block.gfm.paragraph = replace(block.paragraph)("(?!", "(?!" + block.gfm.fences.source.replace("\\1", "\\2") + "|" + block.list.source.replace("\\1", "\\3") + "|")(), 
    /**
	 * Expose Block Rules
	 */
    Lexer.rules = block, /**
	 * Static Lex Method
	 */
    Lexer.parse = function(src, options) {
        var lexer = new Lexer(options);
        return lexer.parse(src);
    }, /**
	 * Preprocessing
	 */
    Lexer.prototype.parse = function(src) {
        return src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), 
        this.token(src, !0);
    }, /**
	 * Lexing
	 */
    Lexer.prototype.token = function(src, top, bq) {
        var next, loose, cap, bull, b, item, space, i, l;
        for (src = src.replace(/^ +$/gm, ""); src; ) // code
        if (// newline
        (cap = this.rules.newline.exec(src)) && (src = src.substring(cap[0].length), cap[0].length > 1 && this.tokens.push({
            type: "space"
        })), cap = this.rules.code.exec(src)) src = src.substring(cap[0].length), cap = cap[0].replace(/^ {4}/gm, ""), 
        this.tokens.push({
            type: "code",
            text: this.options.pedantic ? cap : cap.replace(/\n+$/, "")
        }); else // fences (gfm)
        if (cap = this.rules.fences.exec(src)) src = src.substring(cap[0].length), this.tokens.push({
            type: "code",
            lang: cap[2],
            text: cap[3]
        }); else // heading
        if (cap = this.rules.heading.exec(src)) src = src.substring(cap[0].length), this.tokens.push({
            type: "heading",
            depth: cap[1].length,
            text: cap[2]
        }); else // lheading
        if (cap = this.rules.lheading.exec(src)) src = src.substring(cap[0].length), this.tokens.push({
            type: "heading",
            depth: "=" === cap[2] ? 1 : 2,
            text: cap[1]
        }); else // hr
        if (cap = this.rules.hr.exec(src)) src = src.substring(cap[0].length), this.tokens.push({
            type: "hr"
        }); else // blockquote
        if (cap = this.rules.blockquote.exec(src)) src = src.substring(cap[0].length), this.tokens.push({
            type: "blockquote_start"
        }), cap = cap[0].replace(/^ *> ?/gm, ""), // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.
        this.token(cap, top, !0), this.tokens.push({
            type: "blockquote_end"
        }); else // list
        if (cap = this.rules.list.exec(src)) {
            for (src = src.substring(cap[0].length), bull = cap[2], this.tokens.push({
                type: "list_start",
                ordered: bull.length > 1
            }), // Get each top-level item.
            cap = cap[0].match(this.rules.item), next = !1, l = cap.length, i = 0; i < l; i++) item = cap[i], 
            // Remove the list item's bullet
            // so it is seen as the next token.
            space = item.length, item = item.replace(/^ *([*+-]|\d+\.) +/, ""), // Outdent whatever the
            // list item contains. Hacky.
            ~item.indexOf("\n ") && (space -= item.length, item = this.options.pedantic ? item.replace(/^ {1,4}/gm, "") : item.replace(new RegExp("^ {1," + space + "}", "gm"), "")), 
            // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.
            this.options.smartLists && i !== l - 1 && (b = block.bullet.exec(cap[i + 1])[0], 
            bull === b || bull.length > 1 && b.length > 1 || (src = cap.slice(i + 1).join("\n") + src, 
            i = l - 1)), // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.
            loose = next || /\n\n(?!\s*$)/.test(item), i !== l - 1 && (next = "\n" === item.charAt(item.length - 1), 
            loose || (loose = next)), this.tokens.push({
                type: loose ? "loose_item_start" : "list_item_start"
            }), // Recurse.
            this.token(item, !1, bq), this.tokens.push({
                type: "list_item_end"
            });
            this.tokens.push({
                type: "list_end"
            });
        } else // def
        if (!bq && top && (cap = this.rules.def.exec(src))) src = src.substring(cap[0].length), 
        this.tokens.links[cap[1].toLowerCase()] = {
            href: cap[2],
            title: cap[3]
        }; else // top-level paragraph
        if (top && (cap = this.rules.paragraph.exec(src))) src = src.substring(cap[0].length), 
        this.tokens.push({
            type: "paragraph",
            text: "\n" === cap[1].charAt(cap[1].length - 1) ? cap[1].slice(0, -1) : cap[1]
        }); else // text
        if (cap = this.rules.text.exec(src)) // Top-level should never reach here.
        src = src.substring(cap[0].length), this.tokens.push({
            type: "text",
            text: cap[0]
        }); else if (src) throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
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
    inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, 
    inline.link = replace(inline.link)("inside", inline._inside)("href", inline._href)(), 
    inline.reflink = replace(inline.reflink)("inside", inline._inside)(), /**
	 * Normal Inline Grammar
	 */
    inline.normal = assign({}, inline), /**
	 * Pedantic Inline Grammar
	 */
    inline.pedantic = assign({}, inline.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    }), /**
	 * GFM Inline Grammar
	 */
    inline.gfm = assign({}, inline.normal, {
        escape: replace(inline.escape)("])", "~|])")(),
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        ins: /^\+\+(?=\S)([\s\S]*?\S)\+\+/,
        text: replace(inline.text)("]|", "~+]|")()
    }), /**
	 * GFM + Line Breaks Inline Grammar
	 */
    inline.breaks = assign({}, inline.gfm, {
        br: replace(inline.br)("{2,}", "*")(),
        text: replace(inline.gfm.text)("{2,}", "*")()
    }), /**
	 * Expose Inline Rules
	 */
    InlineLexer.rules = inline, /**
	 * Static Lexing/Compiling Method
	 */
    InlineLexer.parse = function(src, links, options) {
        var inline = new InlineLexer(links, options);
        return inline.parse(src);
    }, /**
	 * Lexing/Compiling
	 */
    InlineLexer.prototype.parse = function(src) {
        for (var link, cap, out = new _syntheticDom.FragmentNode(); src; ) // escape
        if (cap = this.rules.escape.exec(src)) src = src.substring(cap[0].length), out.appendChild(new _syntheticDom.TextNode(cap[1])); else // link
        if (cap = this.rules.link.exec(src)) src = src.substring(cap[0].length), this.inLink = !0, 
        out.appendChild(this.outputLink(cap, {
            href: cap[2],
            title: cap[3]
        })), this.inLink = !1; else // reflink, nolink
        if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
            if (src = src.substring(cap[0].length), link = (cap[2] || cap[1]).replace(/\s+/g, " "), 
            link = this.links[link.toLowerCase()], !link || !link.href) {
                out.appendChild(new _syntheticDom.TextNode(cap[0].charAt(0))), src = cap[0].substring(1) + src;
                continue;
            }
            this.inLink = !0, out.appendChild(this.outputLink(cap, link)), this.inLink = !1;
        } else // strong
        if (cap = this.rules.strong.exec(src)) src = src.substring(cap[0].length), out.appendChild(this.renderer.strong(this.parse(cap[2] || cap[1]))); else // em
        if (cap = this.rules.em.exec(src)) src = src.substring(cap[0].length), out.appendChild(this.renderer.em(this.parse(cap[2] || cap[1]))); else // code
        if (cap = this.rules.code.exec(src)) src = src.substring(cap[0].length), out.appendChild(this.renderer.codespan(cap[2])); else // br
        if (cap = this.rules.br.exec(src)) src = src.substring(cap[0].length), out.appendChild(this.renderer.br()); else // del (gfm)
        if (cap = this.rules.del.exec(src)) src = src.substring(cap[0].length), out.appendChild(this.renderer.del(this.parse(cap[1]))); else // ins (gfm extended)
        if (cap = this.rules.ins.exec(src)) src = src.substring(cap[0].length), out.appendChild(this.renderer.ins(this.parse(cap[1]))); else // text
        if (cap = this.rules.text.exec(src)) src = src.substring(cap[0].length), out.appendChild(this.renderer.text(new _syntheticDom.TextNode(cap[0]))); else if (src) throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
        return out;
    }, /**
	 * Compile Link
	 */
    InlineLexer.prototype.outputLink = function(cap, link) {
        var href = link.href, title = link.title;
        return "!" !== cap[0].charAt(0) ? this.renderer.link(href, title, this.parse(cap[1])) : this.renderer.image(href, title, cap[1]);
    }, Renderer.prototype.code = function(childNode, lang) {
        var attributes = [];
        lang && attributes.push([ "class", this.options.langPrefix + lang ]);
        var codeNode = new _syntheticDom.ElementNode("code", attributes, [ childNode ]);
        return new _syntheticDom.ElementNode("pre", [], [ codeNode ]);
    }, Renderer.prototype.blockquote = function(childNode) {
        return new _syntheticDom.ElementNode("blockquote", [], [ childNode ]);
    }, Renderer.prototype.heading = function(childNode, level) {
        return new _syntheticDom.ElementNode("h" + level, [], [ childNode ]);
    }, Renderer.prototype.hr = function() {
        return new _syntheticDom.ElementNode("hr", [], _syntheticDom.SELF_CLOSING);
    }, Renderer.prototype.list = function(childNode, isOrdered) {
        return new _syntheticDom.ElementNode(isOrdered ? "ol" : "ul", [], [ childNode ]);
    }, Renderer.prototype.listitem = function(childNode) {
        return new _syntheticDom.ElementNode("li", [], [ childNode ]);
    }, Renderer.prototype.paragraph = function(childNode) {
        return new _syntheticDom.ElementNode("p", [], [ childNode ]);
    }, // span level renderer
    Renderer.prototype.strong = function(childNode) {
        return new _syntheticDom.ElementNode("strong", [], [ childNode ]);
    }, Renderer.prototype.em = function(childNode) {
        return new _syntheticDom.ElementNode("em", [], [ childNode ]);
    }, Renderer.prototype.codespan = function(text) {
        return new _syntheticDom.ElementNode("code", [], [ new _syntheticDom.TextNode(text) ]);
    }, Renderer.prototype.br = function() {
        return new _syntheticDom.ElementNode("br", [], _syntheticDom.SELF_CLOSING);
    }, Renderer.prototype.del = function(childNode) {
        return new _syntheticDom.ElementNode("del", [], [ childNode ]);
    }, Renderer.prototype.ins = function(childNode) {
        return new _syntheticDom.ElementNode("ins", [], [ childNode ]);
    }, Renderer.prototype.link = function(href, title, childNode) {
        var attributes = [ [ "href", href ] ];
        return title && attributes.push([ "title", title ]), new _syntheticDom.ElementNode("a", attributes, [ childNode ]);
    }, Renderer.prototype.image = function(href, title, alt) {
        var attributes = [ [ "src", href ] ];
        return title && attributes.push([ "title", title ]), alt && attributes.push([ "alt", alt ]), 
        new _syntheticDom.ElementNode("img", attributes, _syntheticDom.SELF_CLOSING);
    }, Renderer.prototype.text = function(childNode) {
        return childNode;
    }, /**
	 * Static Parse Method
	 */
    Parser.parse = function(src, options, renderer) {
        var parser = new Parser(options, renderer);
        return parser.parse(src);
    }, /**
	 * Parse Loop
	 */
    Parser.prototype.parse = function(src) {
        this.inline = new InlineLexer(src.links, this.options, this.renderer), this.tokens = src.slice().reverse();
        for (var out = new _syntheticDom.FragmentNode(); this.next(); ) out.appendChild(this.tok());
        return out;
    }, /**
	 * Next Token
	 */
    Parser.prototype.next = function() {
        return this.token = this.tokens.pop();
    }, /**
	 * Preview Next Token
	 */
    Parser.prototype.peek = function() {
        return this.tokens[this.tokens.length - 1] || 0;
    }, /**
	 * Parse Text Tokens
	 */
    Parser.prototype.parseText = function() {
        for (var body = this.token.text; "text" === this.peek().type; ) body += "\n" + this.next().text;
        return this.inline.parse(body);
    }, /**
	 * Parse Current Token
	 */
    Parser.prototype.tok = function() {
        switch (this.token.type) {
          case "space":
            return new _syntheticDom.TextNode("");

          case "hr":
            return this.renderer.hr();

          case "heading":
            return this.renderer.heading(this.inline.parse(this.token.text), this.token.depth);

          case "code":
            return this.renderer.code(this.token.text, this.token.lang);

          case "blockquote_start":
            for (var body = new _syntheticDom.FragmentNode(); "blockquote_end" !== this.next().type; ) body.appendChild(this.tok());
            return this.renderer.blockquote(body);

          case "list_start":
            for (var _body = new _syntheticDom.FragmentNode(), ordered = this.token.ordered; "list_end" !== this.next().type; ) _body.appendChild(this.tok());
            return this.renderer.list(_body, ordered);

          case "list_item_start":
            for (var _body2 = new _syntheticDom.FragmentNode(); "list_item_end" !== this.next().type; ) _body2.appendChild("text" === this.token.type ? this.parseText() : this.tok());
            return this.renderer.listitem(_body2);

          case "loose_item_start":
            for (var _body3 = new _syntheticDom.FragmentNode(); "list_item_end" !== this.next().type; ) _body3.appendChild(this.tok());
            return this.renderer.listitem(_body3);

          case "paragraph":
            return this.renderer.paragraph(this.inline.parse(this.token.text));

          case "text":
            return this.renderer.paragraph(this.parseText());
        }
    };
    var MarkdownParser = {
        parse: function(src, options) {
            options = assign({}, defaults, options);
            try {
                var fragment = Parser.parse(Lexer.parse(src, options), options);
            } catch (e) {
                if (!options.silent) throw e;
                fragment = new _syntheticDom.FragmentNode([ new _syntheticDom.ElementNode("p", [], [ new _syntheticDom.TextNode("An error occured:") ]), new _syntheticDom.ElementNode("pre", [], [ new _syntheticDom.TextNode(e.message) ]) ]);
            }
            return options.getAST ? new _syntheticDom.ElementNode("body", [], [ fragment ]) : fragment.toString(this.options.xhtml);
        }
    };
    exports.default = MarkdownParser;
}, /* 205 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function Link(props) {
        var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData(), url = _Entity$get$getData.url;
        return _react2.default.createElement("a", {
            href: url
        }, props.children);
    }
    function findLinkEntities(contentBlock, callback) {
        contentBlock.findEntityRanges(function(character) {
            var entityKey = character.getEntity();
            return null != entityKey && _draftJs.Entity.get(entityKey).getType() === _draftJsUtils.ENTITY_TYPE.LINK;
        }, callback);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _draftJs = __webpack_require__(2), _draftJsUtils = __webpack_require__(149);
    exports.default = {
        strategy: findLinkEntities,
        component: Link
    };
}, /* 206 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function findImageEntities(contentBlock, callback) {
        contentBlock.findEntityRanges(function(character) {
            var entityKey = character.getEntity();
            return null != entityKey && _draftJs.Entity.get(entityKey).getType() === _draftJsUtils.ENTITY_TYPE.IMAGE;
        }, callback);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _ImageSpan = __webpack_require__(207), _ImageSpan2 = _interopRequireDefault(_ImageSpan), _draftJs = __webpack_require__(2), _draftJsUtils = __webpack_require__(149);
    exports.default = {
        strategy: findImageEntities,
        component: _ImageSpan2.default
    };
}, /* 207 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _classAutobind = __webpack_require__(162), _classAutobind2 = _interopRequireDefault(_classAutobind), _classnames = __webpack_require__(160), _classnames2 = _interopRequireDefault(_classnames), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _draftJs = __webpack_require__(2), _ImageSpan = __webpack_require__(208), _ImageSpan2 = _interopRequireDefault(_ImageSpan), ImageSpan = function(_Component) {
        function ImageSpan(props) {
            _classCallCheck(this, ImageSpan);
            var _this = _possibleConstructorReturn(this, (ImageSpan.__proto__ || Object.getPrototypeOf(ImageSpan)).call(this, props));
            (0, _classAutobind2.default)(_this);
            var entity = _draftJs.Entity.get(_this.props.entityKey), _entity$getData = entity.getData(), width = _entity$getData.width, height = _entity$getData.height;
            return _this.state = {
                width: width,
                height: height
            }, _this;
        }
        return _inherits(ImageSpan, _Component), _createClass(ImageSpan, [ {
            key: "componentDidMount",
            value: function() {
                var _this2 = this, _state = this.state, width = _state.width, height = _state.height, entity = _draftJs.Entity.get(this.props.entityKey), image = new Image(), _entity$getData2 = entity.getData(), src = _entity$getData2.src;
                image.src = src, image.onload = function() {
                    null != width && null != height || (// TODO: isMounted?
                    _this2.setState({
                        width: image.width,
                        height: image.height
                    }), _draftJs.Entity.mergeData(_this2.props.entityKey, {
                        width: image.width,
                        height: image.height,
                        originalWidth: image.width,
                        originalHeight: image.height
                    }));
                };
            }
        }, {
            key: "render",
            value: function() {
                var _state2 = this.state, width = _state2.width, height = _state2.height, className = this.props.className, entity = _draftJs.Entity.get(this.props.entityKey), _entity$getData3 = entity.getData(), src = _entity$getData3.src;
                className = (0, _classnames2.default)(className, _ImageSpan2.default.root);
                var imageStyle = {
                    verticalAlign: "bottom",
                    backgroundImage: 'url("' + src + '")',
                    backgroundSize: width + "px " + height + "px",
                    lineHeight: height + "px",
                    fontSize: height + "px",
                    width: width,
                    height: height,
                    letterSpacing: width
                };
                return _react2.default.createElement("span", {
                    className: className,
                    style: imageStyle,
                    onClick: this._onClick
                }, _react2.default.createElement("span", {
                    style: {
                        opacity: "0"
                    }
                }, this.props.children));
            }
        }, {
            key: "_onClick",
            value: function() {
                console.log("image clicked");
            }
        }, {
            key: "_handleResize",
            value: function(event, data) {
                var _data$size = data.size, width = _data$size.width, height = _data$size.height;
                this.setState({
                    width: width,
                    height: height
                }), _draftJs.Entity.mergeData(this.props.entityKey, {
                    width: width,
                    height: height
                });
            }
        } ]), ImageSpan;
    }(_react.Component);
    exports.default = ImageSpan;
}, /* 208 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(209);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 209 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, ".ImageSpan__root___UNCON{background-repeat:no-repeat;display:inline-block;overflow:hidden;cursor:pointer}.ImageSpan__resize___2PEqf{border:1px dashed #78a300;position:relative;max-width:100%;display:inline-block;line-height:0;top:-1px;left:-1px,}.ImageSpan__resizeHandle___2JBaV{cursor:nwse-resize;position:absolute;z-index:2;line-height:1;bottom:-4px;right:-5px;border:1px solid #fff;background-color:#78a300;width:8px;height:8px}", "" ]), 
    // exports
    exports.locals = {
        root: "ImageSpan__root___UNCON",
        resize: "ImageSpan__resize___2PEqf",
        resizeHandle: "ImageSpan__resizeHandle___2JBaV"
    };
}, /* 210 */
/***/
function(module, exports) {
    "use strict";
    function composite(defaultFunc, customFunc) {
        return function(input) {
            if (customFunc) {
                var result = customFunc(input);
                if (null != result) return result;
            }
            return defaultFunc(input);
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = composite;
}, /* 211 */
/***/
function(module, exports) {
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
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }
    function isFunction(arg) {
        return "function" == typeof arg;
    }
    function isNumber(arg) {
        return "number" == typeof arg;
    }
    function isObject(arg) {
        return "object" == typeof arg && null !== arg;
    }
    function isUndefined(arg) {
        return void 0 === arg;
    }
    module.exports = EventEmitter, // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter, EventEmitter.prototype._events = void 0, 
    EventEmitter.prototype._maxListeners = void 0, // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10, // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
        return this._maxListeners = n, this;
    }, EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;
        // If there is no 'error' event listener then throw.
        if (this._events || (this._events = {}), "error" === type && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
            if (er = arguments[1], er instanceof Error) throw er;
            // At least give some kind of context to the user
            var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
            throw err.context = er, err;
        }
        if (handler = this._events[type], isUndefined(handler)) return !1;
        if (isFunction(handler)) switch (arguments.length) {
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
            args = Array.prototype.slice.call(arguments, 1), handler.apply(this, args);
        } else if (isObject(handler)) for (args = Array.prototype.slice.call(arguments, 1), 
        listeners = handler.slice(), len = listeners.length, i = 0; i < len; i++) listeners[i].apply(this, args);
        return !0;
    }, EventEmitter.prototype.addListener = function(type, listener) {
        var m;
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        // If we've already got an array, just append.
        // Adding the second element, need to change to array.
        // Optimize the case of one listener. Don't need the extra array object.
        // Check for listener leak
        // not supported in IE 10
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener), 
        this._events[type] ? isObject(this._events[type]) ? this._events[type].push(listener) : this._events[type] = [ this._events[type], listener ] : this._events[type] = listener, 
        isObject(this._events[type]) && !this._events[type].warned && (m = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners, 
        m && m > 0 && this._events[type].length > m && (this._events[type].warned = !0, 
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length), 
        "function" == typeof console.trace && console.trace())), this;
    }, EventEmitter.prototype.on = EventEmitter.prototype.addListener, EventEmitter.prototype.once = function(type, listener) {
        function g() {
            this.removeListener(type, g), fired || (fired = !0, listener.apply(this, arguments));
        }
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        var fired = !1;
        return g.listener = listener, this.on(type, g), this;
    }, // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[type]) return this;
        if (list = this._events[type], length = list.length, position = -1, list === listener || isFunction(list.listener) && list.listener === listener) delete this._events[type], 
        this._events.removeListener && this.emit("removeListener", type, listener); else if (isObject(list)) {
            for (i = length; i-- > 0; ) if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                position = i;
                break;
            }
            if (position < 0) return this;
            1 === list.length ? (list.length = 0, delete this._events[type]) : list.splice(position, 1), 
            this._events.removeListener && this.emit("removeListener", type, listener);
        }
        return this;
    }, EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;
        if (!this._events) return this;
        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[type] && delete this._events[type], 
        this;
        // emit removeListener for all listeners on all events
        if (0 === arguments.length) {
            for (key in this._events) "removeListener" !== key && this.removeAllListeners(key);
            return this.removeAllListeners("removeListener"), this._events = {}, this;
        }
        if (listeners = this._events[type], isFunction(listeners)) this.removeListener(type, listeners); else if (listeners) // LIFO order
        for (;listeners.length; ) this.removeListener(type, listeners[listeners.length - 1]);
        return delete this._events[type], this;
    }, EventEmitter.prototype.listeners = function(type) {
        var ret;
        return ret = this._events && this._events[type] ? isFunction(this._events[type]) ? [ this._events[type] ] : this._events[type].slice() : [];
    }, EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener)) return 1;
            if (evlistener) return evlistener.length;
        }
        return 0;
    }, EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };
}, /* 212 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(213);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {});
    content.locals && (module.exports = content.locals);
}, /* 213 */
/***/
function(module, exports) {
    module.exports = '/**\r\n * We inherit the height of the container by default\r\n */\r\n\r\n.DraftEditor-root,\r\n.DraftEditor-editorContainer,\r\n.public-DraftEditor-content {\r\n  height: inherit;\r\n  text-align: initial;\r\n}\r\n\r\n.DraftEditor-root {\r\n  position: relative;\r\n}\r\n\r\n/**\r\n * Zero-opacity background used to allow focus in IE. Otherwise, clicks\r\n * fall through to the placeholder.\r\n */\r\n\r\n.DraftEditor-editorContainer {\r\n  background-color: rgba(255, 255, 255, 0);\r\n  /* Repair mysterious missing Safari cursor */\r\n  border: 1px solid transparent;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.public-DraftEditor-content {\r\n  outline: none;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.public-DraftEditor-block {\r\n  position: relative;\r\n}\r\n\r\n.DraftEditor-alignLeft .public-DraftEditor-block {\r\n  text-align: left;\r\n}\r\n\r\n.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\r\n  left: 0;\r\n  text-align: left;\r\n}\r\n\r\n.DraftEditor-alignCenter .public-DraftEditor-block {\r\n  text-align: center;\r\n}\r\n\r\n.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.DraftEditor-alignRight .public-DraftEditor-block {\r\n  text-align: right;\r\n}\r\n\r\n.DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\r\n  right: 0;\r\n  text-align: right;\r\n}\r\n/**\r\n * @providesModule DraftEditorPlaceholder\r\n */\r\n\r\n.public-DraftEditorPlaceholder-root {\r\n  color: #9197a3;\r\n  position: absolute;\r\n  z-index: 0;\r\n}\r\n\r\n.public-DraftEditorPlaceholder-hasFocus {\r\n  color: #bdc1c9;\r\n}\r\n\r\n.DraftEditorPlaceholder-hidden {\r\n  display: none;\r\n}\r\n/**\r\n * @providesModule DraftStyleDefault\r\n */\r\n\r\n.public-DraftStyleDefault-block {\r\n  position: relative;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-ltr {\r\n  direction: ltr;\r\n  text-align: left;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-rtl {\r\n  direction: rtl;\r\n  text-align: right;\r\n}\r\n\r\n/**\r\n * These rules provide appropriate text direction for counter pseudo-elements.\r\n */\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-listLTR {\r\n  direction: ltr;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-listRTL {\r\n  direction: rtl;\r\n}\r\n\r\n/**\r\n * Default spacing for list container elements. Override with CSS as needed.\r\n */\r\n\r\n.public-DraftStyleDefault-ul,\r\n.public-DraftStyleDefault-ol {\r\n  margin: 16px 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Default counters and styles are provided for five levels of nesting.\r\n * If you require nesting beyond that level, you should use your own CSS\r\n * classes to do so. If you care about handling RTL languages, the rules you\r\n * create should look a lot like these.\r\n */\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {\r\n  margin-left: 1.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {\r\n  margin-right: 1.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {\r\n  margin-left: 3em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {\r\n  margin-right: 3em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {\r\n  margin-left: 4.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {\r\n  margin-right: 4.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {\r\n  margin-left: 6em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {\r\n  margin-right: 6em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {\r\n  margin-left: 7.5em;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {\r\n  margin-right: 7.5em;\r\n}\r\n\r\n/**\r\n * Only use `square` list-style after the first two levels.\r\n */\r\n\r\n.public-DraftStyleDefault-unorderedListItem {\r\n  list-style-type: square;\r\n  position: relative;\r\n}\r\n\r\n.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {\r\n  list-style-type: disc;\r\n}\r\n\r\n.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {\r\n  list-style-type: circle;\r\n}\r\n\r\n/**\r\n * Ordered list item counters are managed with CSS, since all list nesting is\r\n * purely visual.\r\n */\r\n\r\n.public-DraftStyleDefault-orderedListItem {\r\n  list-style-type: none;\r\n  position: relative;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {\r\n  left: -36px;\r\n  position: absolute;\r\n  text-align: right;\r\n  width: 30px;\r\n}\r\n\r\n/* @noflip */\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {\r\n  position: absolute;\r\n  right: -36px;\r\n  text-align: left;\r\n  width: 30px;\r\n}\r\n\r\n/**\r\n * Counters are reset in JavaScript. If you need different counter styles,\r\n * override these rules. If you need more nesting, create your own rules to\r\n * do so.\r\n */\r\n\r\n.public-DraftStyleDefault-orderedListItem:before {\r\n  content: counter(ol0) ". ";\r\n  counter-increment: ol0;\r\n}\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {\r\n  content: counter(ol1) ". ";\r\n  counter-increment: ol1;\r\n}\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {\r\n  content: counter(ol2) ". ";\r\n  counter-increment: ol2;\r\n}\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {\r\n  content: counter(ol3) ". ";\r\n  counter-increment: ol3;\r\n}\r\n\r\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {\r\n  content: counter(ol4) ". ";\r\n  counter-increment: ol4;\r\n}\r\n\r\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {\r\n  counter-reset: ol0;\r\n}\r\n\r\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {\r\n  counter-reset: ol1;\r\n}\r\n\r\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {\r\n  counter-reset: ol2;\r\n}\r\n\r\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {\r\n  counter-reset: ol3;\r\n}\r\n\r\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {\r\n  counter-reset: ol4;\r\n}\r\n';
}, /* 214 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(215);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(166)(content, {
        sourceMap: !0
    });
    content.locals && (module.exports = content.locals);
}, /* 215 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(165)(), // imports
    // module
    exports.push([ module.id, ".RichTextEditor__root___33zoV{background:#fff;border:1px solid #ddd;border-radius:3px;font-family:Georgia,serif;font-size:14px}.RichTextEditor__editor___1VEsr{cursor:text;font-size:16px}.RichTextEditor__editor___1VEsr .public-DraftEditor-content,.RichTextEditor__editor___1VEsr .public-DraftEditorPlaceholder-root{margin:0;padding:9px}.RichTextEditor__editor___1VEsr .public-DraftEditor-content{overflow:auto}.RichTextEditor__hidePlaceholder___3Kk-t .public-DraftEditorPlaceholder-root{display:none}.RichTextEditor__editor___1VEsr .RichTextEditor__paragraph___fFnY4,.RichTextEditor__editor___1VEsr pre{margin:14px 0}.RichTextEditor__editor___1VEsr .RichTextEditor__codeBlock___uySV1{background-color:#f3f3f3;font-family:Inconsolata,Menlo,Consolas,monospace;font-size:16px;margin:14px 0;padding:20px}.RichTextEditor__editor___1VEsr .RichTextEditor__codeBlock___uySV1 span[style]{padding:0!important}.RichTextEditor__editor___1VEsr .RichTextEditor__blockquote___2j6X-{border-left:5px solid #eee;color:#666;font-family:Hoefler Text,Georgia,serif;font-style:italic;margin:16px 0;padding:10px 20px}.RichTextEditor__editor___1VEsr .RichTextEditor__block___3k2zv:first-child,.RichTextEditor__editor___1VEsr ol:first-child,.RichTextEditor__editor___1VEsr pre:first-child,.RichTextEditor__editor___1VEsr ul:first-child{margin-top:0}.RichTextEditor__editor___1VEsr .RichTextEditor__block___3k2zv:last-child,.RichTextEditor__editor___1VEsr ol:last-child,.RichTextEditor__editor___1VEsr pre:last-child,.RichTextEditor__editor___1VEsr ul:last-child{margin-bottom:0}", "" ]), 
    // exports
    exports.locals = {
        root: "RichTextEditor__root___33zoV",
        editor: "RichTextEditor__editor___1VEsr",
        hidePlaceholder: "RichTextEditor__hidePlaceholder___3Kk-t",
        paragraph: "RichTextEditor__paragraph___fFnY4",
        codeBlock: "RichTextEditor__codeBlock___uySV1",
        blockquote: "RichTextEditor__blockquote___2j6X-",
        block: "RichTextEditor__block___3k2zv"
    };
} ]);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INLINE_STYLE_BUTTONS = exports.INLINE_STYLE_BUTTONS = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Strikethrough', style: 'STRIKETHROUGH' }, { label: 'Monospace', style: 'CODE' }, { label: 'Underline', style: 'UNDERLINE' }];
var BLOCK_TYPE_DROPDOWN = exports.BLOCK_TYPE_DROPDOWN = [{ label: 'Normal', style: 'unstyled' }, { label: 'Heading Large', style: 'header-one' }, { label: 'Heading Medium', style: 'header-two' }, { label: 'Heading Small', style: 'header-three' }, { label: 'Code Block', style: 'code-block' }];
var BLOCK_TYPE_BUTTONS = exports.BLOCK_TYPE_BUTTONS = [{ label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Blockquote', style: 'blockquote' }];

var EditorToolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'IMAGE_BUTTON', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN: BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS: BLOCK_TYPE_BUTTONS
};

exports.default = EditorToolbarConfig;
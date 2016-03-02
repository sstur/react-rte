export const BLOCK_TYPE = {
  UNSTYLED: 'unstyled',
  PARAGRAPH: 'paragraph',
  HEADER_ONE: 'header-one',
  HEADER_TWO: 'header-two',
  // This one is not actually in DraftBlockType but it seems to work.
  HEADER_THREE: 'header-three',
  UNORDERED_LIST_ITEM: 'unordered-list-item',
  ORDERED_LIST_ITEM: 'ordered-list-item',
  BLOCKQUOTE: 'blockquote',
  PULLQUOTE: 'pullquote',
  CODE: 'code-block',
  MEDIA: 'media',
};

export const INLINE_STYLE = {
  BOLD: 'BOLD',
  CODE: 'CODE',
  ITALIC: 'ITALIC',
  STRIKETHROUGH: 'STRIKETHROUGH',
  UNDERLINE: 'UNDERLINE',
};

export const INLINE_STYLE_BUTTONS = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Strikethrough', style: 'STRIKETHROUGH'},
  {label: 'Monospace', style: 'CODE'},
];

export const BLOCK_TYPE_DROPDOWN = [
  {label: 'Normal', style: 'unstyled'},
  {label: 'Heading Large', style: 'header-one'},
  {label: 'Heading Medium', style: 'header-two'},
  {label: 'Heading Small', style: 'header-three'},
  {label: 'Code Block', style: 'code-block'},
];
export const BLOCK_TYPE_BUTTONS = [
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Blockquote', style: 'blockquote'},
];

export default {
  INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
  BLOCK_TYPE,
  INLINE_STYLE,
};

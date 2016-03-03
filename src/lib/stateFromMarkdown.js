/* @flow */

import MarkdownParser from './MarkdownParser';
import stateFromElement from './stateFromElement';

import type {EditorState} from 'draft-js';

export default function stateFromMarkdown(markdown: string): EditorState {
  let element = MarkdownParser.parse(markdown, {getAST: true});
  return stateFromElement(element);
}

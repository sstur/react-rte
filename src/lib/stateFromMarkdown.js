/* @flow */

import MarkdownParser from './MarkdownParser';
import stateFromElement from './stateFromElement';

import type {EditorState} from 'draft-js';
import type {DraftDecoratorType as Decorator} from 'draft-js/lib/DraftDecoratorType';

export default function stateFromMarkdown(markdown: string, decorator: ?Decorator): EditorState {
  let element = MarkdownParser.parse(markdown, {getAST: true});
  return stateFromElement(element, decorator);
}

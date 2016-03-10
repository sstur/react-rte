/* @flow */

import MarkdownParser from './MarkdownParser';
import stateFromElement from './stateFromElement';

import type {ContentState} from 'draft-js';

export default function stateFromMarkdown(markdown: string): ContentState {
  let element = MarkdownParser.parse(markdown, {getAST: true});
  return stateFromElement(element);
}

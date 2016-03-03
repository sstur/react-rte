/* @flow */

import stateFromElement from './stateFromElement';

import type {EditorState} from 'draft-js';
import type {DraftDecoratorType as Decorator} from 'draft-js/lib/DraftDecoratorType';

export default function stateFromHTML(html: string, decorator: ?Decorator): EditorState {
  let parser = new DOMParser();
  let document = parser.parseFromString(html, 'text/html');
  let element = document.body;
  return stateFromElement(element, decorator);
}

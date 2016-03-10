/* @flow */

import stateFromElement from './stateFromElement';

import type {ContentState} from 'draft-js';

export default function stateFromHTML(html: string): ContentState {
  let parser = new DOMParser();
  let document = parser.parseFromString(html, 'text/html');
  let element = document.body;
  return stateFromElement(element);
}

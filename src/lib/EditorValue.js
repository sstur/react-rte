/* @flow */
import {EditorState} from 'draft-js';
import stateToHTML from './stateToHTML';
import stateFromHTML from './stateFromHTML';
import stateToMarkdown from './stateToMarkdown';
import stateFromMarkdown from './stateFromMarkdown';

import type {DraftDecoratorType as Decorator} from 'draft-js/lib/DraftDecoratorType';

type StringMap = {[key: string]: string};
type ValueSource = EditorState | [string, string];

const INIT_FROM_EMPTY = 'INIT_FROM_EMPTY';
const INIT_FROM_STATE = 'INIT_FROM_STATE';
const INIT_FROM_STRING = 'INIT_FROM_STRING';

export default class EditorValue {
  _editorState: EditorState;
  _cache: StringMap;

  constructor(initType: string, source: ValueSource, decorator: ?Decorator) {
    this._cache = {};
    switch (initType) {
      case INIT_FROM_EMPTY: {
        this._editorState = EditorState.createEmpty(decorator);
        break;
      }
      case INIT_FROM_STATE: {
        this._editorState = source;
        break;
      }
      case INIT_FROM_STRING: {
        let [markup, format] = source;
        this._cache[format] = markup;
        this._editorState = fromString(markup, format, decorator);
        break;
      }
    }
  }

  getEditorState(): EditorState {
    return this._editorState;
  }

  setEditorState(editorState: EditorState): EditorValue {
    return (this._editorState === editorState) ?
      this :
      new EditorValue(INIT_FROM_STATE, editorState);
  }

  toString(format: string): string {
    let fromCache = this._cache[format];
    if (fromCache != null) {
      return fromCache;
    }
    return (this._cache[format] = toString(this.getEditorState(), format));
  }

  setContentFromString(markup: string, format: string): EditorValue {
    // TODO: Preserve undo/redo (and any content if it's possible).
    let decorator = this._editorState.getDecorator();
    return new EditorValue(INIT_FROM_STRING, [markup, format], decorator);
  }

  static createEmpty(decorator: ?Decorator): EditorValue {
    return new EditorValue(INIT_FROM_EMPTY, null, decorator);
  }

  static createFromState(editorState: EditorState, decorator: ?Decorator): EditorValue {
    return new EditorValue(INIT_FROM_STATE, editorState, decorator);
  }

  static createFromString(markup: string, format: string, decorator: ?Decorator): EditorValue {
    return new EditorValue(INIT_FROM_STRING, [markup, format], decorator);
  }
}

function toString(editorState: EditorState, format: string): string {
  let contentState = editorState.getCurrentContent();
  switch (format) {
    case 'html': {
      return stateToHTML(contentState);
    }
    case 'markdown': {
      return stateToMarkdown(contentState);
    }
    default: {
      throw new Error('Format not supported: ' + format);
    }
  }
}

function fromString(markup: string, format: string, decorator: ?Decorator): EditorState {
  switch (format) {
    case 'html': {
      return stateFromHTML(markup, decorator);
    }
    case 'markdown': {
      return stateFromMarkdown(markup, decorator);
    }
    default: {
      throw new Error('Format not supported: ' + format);
    }
  }
}

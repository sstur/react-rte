/* @flow */
import {EditorState} from 'draft-js';
import stateToHTML from './stateToHTML';
import stateFromHTML from './stateFromHTML';
import stateToMarkdown from './stateToMarkdown';
import stateFromMarkdown from './stateFromMarkdown';

type StringMap = {[key: string]: string};

const INIT_FROM_EMPTY = 'INIT_FROM_EMPTY';
const INIT_FROM_STATE = 'INIT_FROM_STATE';
const INIT_FROM_STRING = 'INIT_FROM_STRING';

type ValueSource = EditorState | [string, string];

export default class EditorValue {
  _editorState: EditorState;
  _cache: StringMap;

  constructor(initType: string, source: ValueSource) {
    this._cache = {};
    switch (initType) {
      case INIT_FROM_EMPTY: {
        this._editorState = EditorState.createEmpty();
        break;
      }
      case INIT_FROM_STATE: {
        this._editorState = source;
        break;
      }
      case INIT_FROM_STRING: {
        let [markup, format] = source;
        this._cache[format] = markup;
        this._editorState = fromString(markup, format);
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

  static createEmpty(): EditorValue {
    return new EditorValue(INIT_FROM_EMPTY);
  }

  static createFromState(editorState: EditorState): EditorValue {
    return new EditorValue(INIT_FROM_STATE, editorState);
  }

  static createFromString(markup: string, format: string): EditorValue {
    return new EditorValue(INIT_FROM_STRING, [markup, format]);
  }
}

function toString(editorState, format) {
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

function fromString(markup, format) {
  switch (format) {
    case 'html': {
      return stateFromHTML(markup);
    }
    case 'markdown': {
      return stateFromMarkdown(markup);
    }
    default: {
      throw new Error('Format not supported: ' + format);
    }
  }
}

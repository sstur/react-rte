/* @flow */
import {EditorState} from 'draft-js';
import stateToHTML from './stateToHTML';

type StringMap = {[key: string]: string};

export default class EditorValue {
  _editorState: ?EditorState;
  _cache: StringMap;

  constructor(editorState: ?EditorState) {
    this._editorState = editorState;
    this._cache = {};
  }

  getEditorState(): EditorState {
    return this._editorState || EditorState.createEmpty();
  }

  setEditorState(editorState: EditorState): EditorValue {
    if (this._editorState === editorState) {
      return this;
    }
    return new EditorValue(editorState);
  }

  toString(format: string): string {
    let fromCache = this._cache[format];
    if (fromCache != null) {
      return fromCache;
    }
    return (this._cache[format] = toString(this.getEditorState(), format));
  }

  static createEmpty(): EditorValue {
    return new EditorValue();
  }

  static createFromString(source: string, format: string): EditorValue {
    let editorState = fromString(source, format);
    return new EditorValue(editorState);
  }

  static createFromState(editorState: EditorState): EditorValue {
    return new EditorValue(editorState);
  }
}

function toString(editorState, format) {
  let contentState = editorState.getCurrentContent();
  switch (format) {
    case 'html': {
      return stateToHTML(contentState);
    }
    default: {
      throw new Error('Format not supported: ' + format);
    }
  }
}

function fromString() {
  throw new Error('Not yet implemented: fromString');
}

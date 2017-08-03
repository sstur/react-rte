/* @flow */
import {ContentState, EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToMarkdown} from 'draft-js-export-markdown';
import {stateFromMarkdown} from 'draft-js-import-markdown';

import type {DraftDecoratorType as Decorator} from 'draft-js/lib/DraftDecoratorType';
import type {Options as ImportOptions} from 'draft-js-import-html';
import type {Options as ExportOptions} from 'draft-js-export-html';
export type {ImportOptions, ExportOptions};

type StringMap = {[key: string]: string};

export default class EditorValue {
  _editorState: EditorState;
  _cache: StringMap;

  constructor(editorState: EditorState, cache: StringMap = {}) {
    this._cache = cache;
    this._editorState = editorState;
  }

  getEditorState(): EditorState {
    return this._editorState;
  }

  setEditorState(editorState: EditorState): EditorValue {
    return (this._editorState === editorState) ?
      this :
      new EditorValue(editorState);
  }

  toString(format: string, options?: ExportOptions): string {
    let fromCache = this._cache[format];
    if (fromCache != null) {
      return fromCache;
    }
    return (this._cache[format] = toString(this.getEditorState(), format, options));
  }

  setContentFromString(markup: string, format: string, options?: ImportOptions): EditorValue {
    let editorState = EditorState.push(
      this._editorState,
      fromString(markup, format, options),
      'secondary-paste'
    );
    return new EditorValue(editorState, {[format]: markup});
  }

  static createEmpty(decorator: ?Decorator): EditorValue {
    let editorState = EditorState.createEmpty(decorator);
    return new EditorValue(editorState);
  }

  static createFromState(editorState: EditorState): EditorValue {
    return new EditorValue(editorState);
  }

  static createFromString(markup: string, format: string, decorator: ?Decorator, options?: ImportOptions): EditorValue {
    let contentState = fromString(markup, format, options);
    let editorState = EditorState.createWithContent(contentState, decorator);
    return new EditorValue(editorState, {[format]: markup});
  }
}

function toString(editorState: EditorState, format: string, options?: ExportOptions): string {
  let contentState = editorState.getCurrentContent();
  switch (format) {
    case 'html': {
      return stateToHTML(contentState, options);
    }
    case 'markdown': {
      return stateToMarkdown(contentState);
    }
    case 'raw': {
      return JSON.stringify(convertToRaw(contentState));
    }
    default: {
      throw new Error('Format not supported: ' + format);
    }
  }
}

function fromString(markup: string, format: string, options?: ImportOptions): ContentState {
  switch (format) {
    case 'html': {
      return stateFromHTML(markup, options);
    }
    case 'markdown': {
      return stateFromMarkdown(markup, options);
    }
    case 'raw': {
      return convertFromRaw(JSON.parse(markup));
    }
    default: {
      throw new Error('Format not supported: ' + format);
    }
  }
}

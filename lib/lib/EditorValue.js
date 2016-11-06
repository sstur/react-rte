'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draftJs = require('draft-js');

var _draftJsExportHtml = require('draft-js-export-html');

var _draftJsImportHtml = require('draft-js-import-html');

var _draftJsExportMarkdown = require('draft-js-export-markdown');

var _draftJsImportMarkdown = require('draft-js-import-markdown');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorValue = function () {
  function EditorValue(editorState) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, EditorValue);

    this._cache = cache;
    this._editorState = editorState;
  }

  _createClass(EditorValue, [{
    key: 'getEditorState',
    value: function getEditorState() {
      return this._editorState;
    }
  }, {
    key: 'setEditorState',
    value: function setEditorState(editorState) {
      return this._editorState === editorState ? this : new EditorValue(editorState);
    }
  }, {
    key: 'toString',
    value: function toString(format, options) {
      var fromCache = this._cache[format];
      if (fromCache != null) {
        return fromCache;
      }
      return this._cache[format] = _toString(this.getEditorState(), format, options);
    }
  }, {
    key: 'setContentFromString',
    value: function setContentFromString(markup, format, options) {
      var editorState = _draftJs.EditorState.push(this._editorState, fromString(markup, format, options), 'secondary-paste');
      return new EditorValue(editorState, _defineProperty({}, format, markup));
    }
  }], [{
    key: 'createEmpty',
    value: function createEmpty(decorator) {
      var editorState = _draftJs.EditorState.createEmpty(decorator);
      return new EditorValue(editorState);
    }
  }, {
    key: 'createFromState',
    value: function createFromState(editorState) {
      return new EditorValue(editorState);
    }
  }, {
    key: 'createFromString',
    value: function createFromString(markup, format, decorator, options) {
      var contentState = fromString(markup, format, options);
      var editorState = _draftJs.EditorState.createWithContent(contentState, decorator);
      return new EditorValue(editorState, _defineProperty({}, format, markup));
    }
  }]);

  return EditorValue;
}();

exports.default = EditorValue;


function _toString(editorState, format, options) {
  var contentState = editorState.getCurrentContent();
  switch (format) {
    case 'html':
      {
        return (0, _draftJsExportHtml.stateToHTML)(contentState, options);
      }
    case 'markdown':
      {
        return (0, _draftJsExportMarkdown.stateToMarkdown)(contentState);
      }
    case 'raw':
      {
        return JSON.stringify((0, _draftJs.convertToRaw)(contentState));
      }
    default:
      {
        throw new Error('Format not supported: ' + format);
      }
  }
}

function fromString(markup, format, options) {
  switch (format) {
    case 'html':
      {
        return (0, _draftJsImportHtml.stateFromHTML)(markup, options);
      }
    case 'markdown':
      {
        return (0, _draftJsImportMarkdown.stateFromMarkdown)(markup);
      }
    case 'raw':
      {
        return (0, _draftJs.convertFromRaw)(JSON.parse(markup));
      }
    default:
      {
        throw new Error('Format not supported: ' + format);
      }
  }
}
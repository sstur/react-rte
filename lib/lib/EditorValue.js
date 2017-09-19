'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _draftJs = require('draft-js');

var _draftJsExportHtml = require('draft-js-export-html');

var _draftJsImportHtml = require('draft-js-import-html');

var _draftJsExportMarkdown = require('draft-js-export-markdown');

var _draftJsImportMarkdown = require('draft-js-import-markdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorValue = function () {
  function EditorValue(editorState) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, EditorValue);

    this._cache = cache;
    this._editorState = editorState;
  }

  (0, _createClass3.default)(EditorValue, [{
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
      return new EditorValue(editorState, (0, _defineProperty3.default)({}, format, markup));
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
      return new EditorValue(editorState, (0, _defineProperty3.default)({}, format, markup));
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
        return (0, _stringify2.default)((0, _draftJs.convertToRaw)(contentState));
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
        return (0, _draftJsImportMarkdown.stateFromMarkdown)(markup, options);
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
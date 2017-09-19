'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageSpan = require('../ui/ImageSpan');

var _ImageSpan2 = _interopRequireDefault(_ImageSpan);

var _draftJsUtils = require('draft-js-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findImageEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    if (entityKey != null) {
      var entity = contentState ? contentState.getEntity(entityKey) : null;
      return entity != null && entity.getType() === _draftJsUtils.ENTITY_TYPE.IMAGE;
    }
    return false;
  }, callback);
}

exports.default = {
  strategy: findImageEntities,
  component: _ImageSpan2.default
};
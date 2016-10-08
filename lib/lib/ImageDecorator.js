'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageSpan = require('../ui/ImageSpan');

var _ImageSpan2 = _interopRequireDefault(_ImageSpan);

var _draftJs = require('draft-js');

var _draftJsUtils = require('draft-js-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findImageEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey != null && _draftJs.Entity.get(entityKey).getType() === _draftJsUtils.ENTITY_TYPE.IMAGE;
  }, callback);
}
exports.default = {
  strategy: findImageEntities,
  component: _ImageSpan2.default
};
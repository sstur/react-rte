'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _draftJsUtils = require('draft-js-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Link(props) {
  var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData(),
      url = _Entity$get$getData.url;

  return _react2.default.createElement(
    'a',
    { href: url },
    props.children
  );
}


function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey != null && _draftJs.Entity.get(entityKey).getType() === _draftJsUtils.ENTITY_TYPE.LINK;
  }, callback);
}

exports.default = {
  strategy: findLinkEntities,
  component: Link
};
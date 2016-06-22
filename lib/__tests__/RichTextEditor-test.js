'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _RichTextEditor = require('../RichTextEditor');

var _RichTextEditor2 = _interopRequireDefault(_RichTextEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global;
var describe = _global.describe;
var it = _global.it;


describe('RichTextEditor', function () {
  it('should render', function () {
    var renderer = (0, _reactAddonsTestUtils.createRenderer)();
    var value = (0, _RichTextEditor.createEmptyValue)();
    renderer.render(_react2.default.createElement(_RichTextEditor2.default, { value: value }));
    var output = renderer.getRenderOutput();
    (0, _expect2.default)(output.type).toEqual('div');
    (0, _expect2.default)(output.props.className).toBeA('string');
    (0, _expect2.default)(output.props.className).toInclude('RichTextEditor__root');
  });
});
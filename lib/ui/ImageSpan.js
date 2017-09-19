'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classAutobind = require('class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _ImageSpan = require('./ImageSpan.css');

var _ImageSpan2 = _interopRequireDefault(_ImageSpan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Use a more specific type here.
var ImageSpan = function (_Component) {
  (0, _inherits3.default)(ImageSpan, _Component);

  function ImageSpan(props) {
    (0, _classCallCheck3.default)(this, ImageSpan);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ImageSpan.__proto__ || (0, _getPrototypeOf2.default)(ImageSpan)).call(this, props));

    (0, _classAutobind2.default)(_this);
    var entity = props.contentState.getEntity(props.entityKey);

    var _entity$getData = entity.getData(),
        width = _entity$getData.width,
        height = _entity$getData.height;

    _this.state = {
      width: width,
      height: height
    };
    return _this;
  }

  (0, _createClass3.default)(ImageSpan, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _state = this.state,
          width = _state.width,
          height = _state.height;

      var entity = this.props.contentState.getEntity(this.props.entityKey);
      var image = new Image();

      var _entity$getData2 = entity.getData(),
          src = _entity$getData2.src;

      image.src = src;
      image.onload = function () {
        if (width == null || height == null) {
          // TODO: isMounted?
          _this2.setState({ width: image.width, height: image.height });
          _draftJs.Entity.mergeData(_this2.props.entityKey, {
            width: image.width,
            height: image.height,
            originalWidth: image.width,
            originalHeight: image.height
          });
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          width = _state2.width,
          height = _state2.height;
      var className = this.props.className;

      var entity = this.props.contentState.getEntity(this.props.entityKey);

      var _entity$getData3 = entity.getData(),
          src = _entity$getData3.src;

      className = (0, _classnames2.default)(className, _ImageSpan2.default.root);
      var imageStyle = {
        verticalAlign: 'bottom',
        backgroundImage: 'url("' + src + '")',
        backgroundSize: width + 'px ' + height + 'px',
        lineHeight: height + 'px',
        fontSize: height + 'px',
        width: width,
        height: height,
        letterSpacing: width
      };

      return _react2.default.createElement(
        'span',
        {
          className: className,
          style: imageStyle,
          onClick: this._onClick
        },
        this.props.children
      );
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      console.log('image clicked');
    }
  }, {
    key: '_handleResize',
    value: function _handleResize(event, data) {
      var _data$size = data.size,
          width = _data$size.width,
          height = _data$size.height;

      this.setState({ width: width, height: height });
      _draftJs.Entity.mergeData(this.props.entityKey, { width: width, height: height });
    }
  }]);
  return ImageSpan;
}(_react.Component);

exports.default = ImageSpan;
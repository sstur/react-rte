'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// $FlowIssue - Flow doesn't understand CSS Modules


// TODO: Use a more specific type here.
var ImageSpan = function (_Component) {
  _inherits(ImageSpan, _Component);

  function ImageSpan(props) {
    _classCallCheck(this, ImageSpan);

    var _this = _possibleConstructorReturn(this, (ImageSpan.__proto__ || Object.getPrototypeOf(ImageSpan)).call(this, props));

    (0, _classAutobind2.default)(_this);
    var entity = _draftJs.Entity.get(_this.props.entityKey);

    var _entity$getData = entity.getData(),
        width = _entity$getData.width,
        height = _entity$getData.height;

    _this.state = {
      width: width,
      height: height
    };
    return _this;
  }

  _createClass(ImageSpan, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _state = this.state,
          width = _state.width,
          height = _state.height;

      var entity = _draftJs.Entity.get(this.props.entityKey);
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

      var entity = _draftJs.Entity.get(this.props.entityKey);

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
        _react2.default.createElement(
          'span',
          { style: { opacity: '0' } },
          this.props.children
        )
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
/* @flow */
import React, {Component} from 'react';
import {Entity} from 'draft-js';
import {ENTITY_TYPE} from 'draft-js-utils';
import Resizable from './Resizable';

import type {ContentBlock} from 'draft-js';

type Props = {
  children: React.Node,
  entityKey: string,
};

type EntityRangeCallback = (start: number, end: number) => void;

const styles = {
  inlineImage: {
    color: 'transparent',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },
  resizeInlineImage: {
    border: '1px dashed #78a300',
    position: 'relative',
    maxWidth: '100%',
    display: 'inline-block',
    lineHeight: 0,
    top: '-1px',
    left: '-1px',
  },
  resizeInlineImageHandle: {
    cursor: 'nwse-resize',
    position: 'absolute',
    zIndex: 2,
    lineHeight: 1,
    bottom: '-4px',
    right: '-5px',
    border: '1px solid white',
    backgroundColor: '#78a300',
    width: '8px',
    height: '8px',
  },
};

class ImageSpan extends Component {
  constructor(props) {
    super(props);
    const entity = Entity.get(this.props.entityKey);
    const {width, height} = entity.getData();
    this.state = {resizing: false, width, height};
  }

  _handleImageSpanClick = () => {
    this.setState({resizing: !this.state.resizing});
  }

  _handleResize = (event, {size}) => {
    const {width, height} = size;
    this.setState({width, height});
    Entity.mergeData(
      this.props.entityKey,
      {width, height}
    );
  }

  componentDidMount() {
    const {width, height} = this.state;
    const entity = Entity.get(this.props.entityKey);
    const image = new Image();
    const {src} = entity.getData();
    image.src = src;

    const self = this;
    image.onload = () => {
      if (width == null || height == null) {
        self.setState({width: image.width, height: image.height});
        Entity.mergeData(
          self.props.entityKey,
          {
            width: image.width,
            height: image.height,
            originalWidth: image.width,
            originalHeight: image.height,
          }
        );
      }
    };
  }

  render() {
    const {resizing, width, height} = this.state;
    const entity = Entity.get(this.props.entityKey);
    const {src} = entity.getData();

    const resizingStyles = resizing ? styles.resizeInlineImage : {};

    const imageStyle = {
      ...styles.inlineImage,
      ...resizingStyles,
      backgroundImage: `url("${src}")`,
      backgroundSize: `${width}px ${height}px`,
      width,
      height,
    };

    const imageSpan = (
      <span {...this.props}
        style={imageStyle}
        onClick={this._handleImageSpanClick}
        contentEditable={false}
        >
        {this.props.children}
      </span>
    );

    const view = resizing ?
      <Resizable width={width} height={height}
        minConstraints={[100, 100]} maxConstraints={[1000, 1000]}
        onResize={this._handleResize}
        lockAspectRatio
        styles={{handle: styles.resizeInlineImageHandle}}>
        {imageSpan}
      </Resizable> :
      imageSpan;

    return view;
  }
}

function findImageEntities(contentBlock: ContentBlock, callback: EntityRangeCallback) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey != null &&
      Entity.get(entityKey).getType() === 'IMAGE'
    );
  }, callback);
}

export default {
  strategy: findImageEntities,
  component: ImageSpan,
};

/* @flow */

import autobind from 'class-autobind';
import cx from 'classnames';
import React, {Component} from 'react';
import {Entity} from 'draft-js';

import styles from './ImageSpan.css';

import type {ContentState} from 'draft-js';

// TODO: Use a more specific type here.
type ReactNode = any;

type Props = {
  children: ReactNode;
  entityKey: string;
  contentState: ContentState,
  className?: string;
};

type State = {
  width: string;
  height: string;
};

export default class ImageSpan extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    autobind(this);
    const entity = props.contentState.getEntity(props.entityKey);
    const {width, height} = entity.getData();
    this._setSize(width, height);
  }

  componentDidMount() {
    const {width, height} = this.state;
    const entity = this.props.contentState.getEntity(this.props.entityKey);
    const image = new Image();
    const {src} = entity.getData();
    image.src = src;
    image.onload = () => {
      if (width == null || height == null) {
        // TODO: isMounted?
        this._setSize({width: image.width, height: image.height});
        Entity.mergeData(
          this.props.entityKey,
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
    const {width, height} = this.state;
    let {className} = this.props;
    const entity = this.props.contentState.getEntity(this.props.entityKey);
    const {src} = entity.getData();

    className = cx(className, styles.root);
    const imageStyle = {
      verticalAlign: 'bottom',
      backgroundImage: `url("${src}")`,
      backgroundSize: `${width} ${height}`,
      lineHeight: `${height}`,
      fontSize: `${height}`,
      width,
      height,
      letterSpacing: width,
    };

    return (
      <span
        className={className}
        style={imageStyle}
        onClick={this._onClick}
      >
        {this.props.children}
      </span>
    );
  }

  _onClick() {
    console.log('image clicked');
  }

  _handleResize(event: Object, data: Object) {
    const {width, height} = data.size;
    this._setSize(width, height);
    Entity.mergeData(
      this.props.entityKey,
      {width, height}
    );
  }

  _setSize(width: string | number, height: string | number) {
    if (isFinite(width)) {
      width = `${width}px`;
    }
    if (isFinite(height)) {
      height = `${height}px`;
    }
    this.setState({width, height});
  }
}

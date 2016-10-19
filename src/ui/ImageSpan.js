/* @flow */

import autobind from 'class-autobind';
import cx from 'classnames';
import React, {Component} from 'react';
import {Entity} from 'draft-js';

// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './ImageSpan.css';

// TODO: Use a more specific type here.
type ReactNode = any;

type Props = {
  children: ReactNode;
  entityKey: string;
  className?: string;
};

type State = {
  width: number;
  height: number;
};

export default class ImageSpan extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    autobind(this);
    const entity = Entity.get(this.props.entityKey);
    const {width, height} = entity.getData();
    this.state = {
      width,
      height,
    };
  }

  componentDidMount() {
    const {width, height} = this.state;
    const entity = Entity.get(this.props.entityKey);
    const image = new Image();
    const {src} = entity.getData();
    image.src = src;
    image.onload = () => {
      if (width == null || height == null) {
        // TODO: isMounted?
        this.setState({width: image.width, height: image.height});
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
    const entity = Entity.get(this.props.entityKey);
    const {src} = entity.getData();

    className = cx(className, styles.root);
    const imageStyle = {
      verticalAlign: 'bottom',
      backgroundImage: `url("${src}")`,
      backgroundSize: `${width}px ${height}px`,
      lineHeight: `${height}px`,
      fontSize: `${height}px`,
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
        <span style={{opacity: '0'}}>
          {this.props.children}
        </span>
      </span>
    );
  }

  _onClick() {
    console.log('image clicked');
  }

  _handleResize(event: Object, data: Object) {
    const {width, height} = data.size;
    this.setState({width, height});
    Entity.mergeData(
      this.props.entityKey,
      {width, height}
    );
  }
}

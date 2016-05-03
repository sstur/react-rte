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
  resizing: boolean;
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
      resizing: false,
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
    const {width, height/*, resizing*/} = this.state;
    let {className} = this.props;
    const entity = Entity.get(this.props.entityKey);
    const {src, selected} = entity.getData();

    // const resizingStyles = resizing ? styles.resize : {};

    className = cx(className, {
      [styles.root]: true,
      [styles.selected]: selected,
    });
    const imageStyle = {
      //...resizingStyles,
      verticalAlign: 'bottom',
      backgroundImage: `url("${src}")`,
      backgroundSize: `${width}px ${height}px`,
      lineHeight: `${height}px`,
      fontSize: `${height}`,
      width,
      height,
      letterSpacing: width,
    };

    const imageSpan = (
      <span
        className={className}
        style={imageStyle}
        onClick={this._handleImageSpanClick}
        >
        {this.props.children}
      </span>
    );

    // const view = resizing ?
    //   <Resizable width={width} height={height}
    //     minConstraints={[100, 100]} maxConstraints={[1000, 1000]}
    //     onResize={this._handleResize}
    //     lockAspectRatio
    //     styles={{handle: styles.resizeInlineImageHandle}}
    //     contentEditable={false}>
    //     {imageSpan}
    //   </Resizable> :
    //   imageSpan;

    return imageSpan;
  }

  _handleImageSpanClick() {
    this.setState({resizing: !this.state.resizing});
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

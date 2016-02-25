/* @flow */
import React from 'react';

const {Component} = React;

type Props = {
  active: boolean;
  style: string;
  label: string;
  onToggle: (style: string) => any
};

export default class StyleButton extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this.onToggle = (event) => {
      event.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render(): React.Element {
    let className = 'RichTextEditor-styleButton';
    if (this.props.active) {
      className += ' RichTextEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

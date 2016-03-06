/* @flow */
import React, {Component} from 'react';
import PopoverIconButton from '../ui/PopoverIconButton';

type Props = {
  className: ?string;
  showInput: boolean;
  onToggle: Function;
};

export default class LinkButton extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._setURL = this._setURL.bind(this);
  }

  render(): React.Element {
    return (
      <PopoverIconButton
        {...this.props}
        label="Link"
        iconName="link"
        showPopover={this.props.showInput}
        onTogglePopover={this.props.onToggle}
        onSubmit={this._setURL}
      />
    );
  }

  _setURL(url: string) {
    console.log('add link', url);
  }
}

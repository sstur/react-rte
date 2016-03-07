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

  render(): React.Element {
    return (
      <PopoverIconButton
        {...this.props}
        label="Link"
        iconName="link"
        showPopover={this.props.showInput}
        onTogglePopover={this.props.onToggle}
      />
    );
  }
}

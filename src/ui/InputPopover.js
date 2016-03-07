/* @flow */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import IconButton from './IconButton';
import ButtonGroup from './ButtonGroup';

type Props = {
  onCancel: () => any;
  onSubmit: (value: string) => any;
};

export default class InputPopover extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._onDocumentClick = this._onDocumentClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._setInputRef = this._setInputRef.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this._onDocumentClick);
    document.addEventListener('keydown', this._onDocumentKeydown);
    this._inputRef.focus();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._onDocumentClick);
    document.removeEventListener('keydown', this._onDocumentKeydown);
  }

  render(): React.Element {
    return (
      <form className="ui-input-popover" onSubmit={this._onSubmit}>
        <div className="ui-input-popover-inner">
          <input
            ref={this._setInputRef}
            type="text"
            placeholder="https://example.com/"
            className="ui-input-popover-input"
          />
          <ButtonGroup className="ui-input-popover-button-group">
            <IconButton
              className="ui-input-popover-button"
              label="Cancel"
              iconName="cancel"
              onClick={this.props.onCancel}
            />
            <IconButton
              className="ui-input-popover-button"
              label="Submit"
              iconName="accept"
              formSubmit={true}
            />
          </ButtonGroup>
        </div>
      </form>
    );
  }

  _setInputRef(inputElement: Object) {
    this._inputRef = inputElement;
  }

  _onSubmit(event: Object) {
    event.preventDefault();
    this.props.onSubmit(this._inputRef.value);
  }

  _onDocumentClick(event: Object) {
    let rootNode = ReactDOM.findDOMNode(this);
    if (!rootNode.contains(event.target)) {
      // Here we pass the event so the parent can manage focus.
      this.props.onCancel(event);
    }
  }

  _onDocumentKeydown(event: Object) {
    if (event.keyCode === 27) {
      this.props.onCancel();
    }
  }
}

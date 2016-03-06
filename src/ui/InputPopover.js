/* @flow */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

type Props = {
  onCancel: () => any;
  onSubmit: (value: string) => any;
};

export default class InputPopover extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this.state = {};
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
        <div>
          <input
            ref={this._setInputRef}
            type="text"
            className="ui-input-popover-input"
          />
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
      this.props.onCancel();
    }
  }

  _onDocumentKeydown(event: Object) {
    if (event.keyCode === 27) {
      this.props.onCancel();
    }
  }
}

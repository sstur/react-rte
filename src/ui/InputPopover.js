/* @flow */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import IconButton from './IconButton';
import ButtonGroup from './ButtonGroup';
import autobind from 'class-autobind';
import cx from 'classnames';

import styles from './InputPopover.css';

type Props = {
  className?: string;
  onCancel: () => any;
  onSubmit: (value: string, openInNewTab: boolean) => any;
};

export default class InputPopover extends Component {
  props: Props;
  _inputRef: ?Object;

  constructor() {
    super(...arguments);
    autobind(this);
    this.openInNewTab = false;
  }

  componentDidMount() {
    document.addEventListener('click', this._onDocumentClick);
    document.addEventListener('keydown', this._onDocumentKeydown);
    if (this._inputRef) {
      this._inputRef.focus();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._onDocumentClick);
    document.removeEventListener('keydown', this._onDocumentKeydown);
  }

  render() {
    let {props} = this;
    let className = cx(props.className, styles.root);

    // If it has a url already, show that.
    let url = (props.data && props.data.url) ? props.data.url : '';
    return (
      <div className={className}>
        <div className={styles.inner}>
          <input
            ref={this._setInputRef}
            type="text"
            placeholder="https://example.com/"
            defaultValue={url}
            className={styles.input}
            onKeyPress={this._onInputKeyPress}
          />
          <ButtonGroup className={styles.buttonGroup}>
            <IconButton
              label="Cancel"
              iconName="cancel"
              onClick={props.onCancel}
            />
            <IconButton
              label="Submit"
              iconName="accept"
              onClick={this._onSubmit}
            />
          </ButtonGroup>
        </div>
        <div className={styles.inner}>
          <label className="radio-item">
            <input
              type="checkbox"
              onChange={this._setNewTabRef}
              checked={this._newTabRef}
            />
            <span> Open in New Tab </span>
          </label>
        </div>
      </div>
    );
  }

  _setInputRef(inputElement: Object) {
    this._inputRef = inputElement;
  }

  _setNewTabRef(inputElement: Object) {
    this.openInNewTab = !this.openInNewTab;
    this._newTabRef = inputElement;
  }

  _onInputKeyPress(event: Object) {
    if (event.which === 13) {
      // Avoid submitting a <form> somewhere up the element tree.
      event.preventDefault();
      this._onSubmit();
    }
  }

  _onSubmit() {
    let value = this._inputRef ? this._inputRef.value : '';
    this.props.onSubmit(value, this.openInNewTab);
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

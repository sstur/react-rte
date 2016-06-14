/* @flow */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import IconButton from './IconButton';
import ButtonGroup from './ButtonGroup';
import autobind from 'class-autobind';
import cx from 'classnames';

// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './InputPopover.css';

type Props = {
  className?: string;
  data: ?Object;
  onCancel: () => any;
  onSubmit: (value: string) => any;
};

export default class InputPopover extends Component {
  props: Props;
  _inputRef: ?Object;

  constructor() {
    super(...arguments);
    autobind(this);
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

  render(): React.Element {
    let {props} = this;
    let className = cx(props.className, styles.root);
    let defaultValue = props.data && props.data.url;
    return (
      <form className={className} onSubmit={this._onSubmit}>
        <div className={styles.inner}>
          <input
            ref={this._setInputRef}
            type="text"
            placeholder="https://example.com/"
            className={styles.input}
            defaultValue={defaultValue}
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
    event.stopPropagation();
    let value = this._inputRef ? this._inputRef.value : '';
    this.props.onSubmit(value);
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

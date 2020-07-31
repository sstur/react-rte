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
  defaultValue?: string;
  onCancel: () => any;
  onSubmit: (value: string) => any;
  target?: ?string;
  rel?: ?string;
};

type State = {
  target?: ?string;
  rel?: ?string;
};

export default class InputPopover extends Component {
  props: Props;
  state: State;
  _inputRef: ?Object;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      target: this.props.target,
      rel: this.props.rel,
    };
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
    return (
      <div className={className}>
        <div className={styles.inner}>
          <input
            ref={this._setInputRef}
            defaultValue={props.defaultValue}
            type="text"
            placeholder="https://example.com/"
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
        {(props.target || props.target === null) &&
          <div className={styles.targetBlank}>
            <label>
              <input
                type="checkbox"
                checked={this.state.target === '_blank'}
                onChange={this._onTargetBlankPress}
              />
              <span>Open link in new tab</span>
            </label>
          </div>
        }
        {(props.rel || props.rel === null) &&
          <div className={styles.noFollow}>
            <label>
              <input
                type="checkbox"
                checked={this.state.rel === 'nofollow'}
                onChange={this._onNoFollowPress}
              />
              <span>No follow</span>
            </label>
          </div>
        }
      </div>
    );
  }

  _setInputRef(inputElement: Object) {
    this._inputRef = inputElement;
  }

  _onTargetBlankPress(event: Object) {
    this.setState({
      target: event.target.checked ? '_blank' : null,
    });
  }

  _onNoFollowPress(event: Object) {
    this.setState({
      rel: event.target.checked ? 'nofollow' : null,
    });
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
    this.props.onSubmit(value, this.state.target, this.state.rel);
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

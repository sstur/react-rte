import React from 'react';
import ReactDOM from 'react-dom';
import EditorDemo from './EditorDemo';

let _error = console.error;
console.error = (...args) => {
  let message = args[0];
  if (typeof message !== 'string' || message.indexOf('component is `contentEditable`') === -1) {
    _error.apply(console, args);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  ReactDOM.render(
    <EditorDemo />,
    rootNode,
  );
});

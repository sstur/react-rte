import React from 'react';
import ReactDOM from 'react-dom';
import EditorExample from './EditorExample';

document.addEventListener('DOMContentLoaded', () => {
  let rootNode = document.createElement('div');
  rootNode.classList.add('example-container');
  document.body.appendChild(rootNode);
  ReactDOM.render(
    <EditorExample />,
    rootNode,
  );
});

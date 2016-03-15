/* @flow */
const {describe, it} = global;
import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect';
import RichTextEditor, {createEmptyValue} from '../RichTextEditor';

describe('RichTextEditor', () => {
  it('should render', () => {
    let renderer = createRenderer();
    let value = createEmptyValue();
    renderer.render(<RichTextEditor value={value} />);
    let output = renderer.getRenderOutput();
    expect(output.type).toEqual('div');
    expect(output.props.className).toBeA('string');
    expect(output.props.className).toInclude('RichTextEditor__root');
  });
});

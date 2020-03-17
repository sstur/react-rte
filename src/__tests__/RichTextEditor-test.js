/* @flow */
const {describe, it} = global;
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';
import RichTextEditor, {createEmptyValue} from '../RichTextEditor';

describe('RichTextEditor', () => {
  it('should render', () => {
    let renderer = new ShallowRenderer();
    let value = createEmptyValue();
    renderer.render(<RichTextEditor value={value} />);
    let output = renderer.getRenderOutput();
    expect(output.type).toEqual('div');
    expect(output.props.className).toBeA('string');
    expect(output.props.className).toInclude('RichTextEditor__root');
  });
});

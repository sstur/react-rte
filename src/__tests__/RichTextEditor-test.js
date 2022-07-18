/* @flow */
const {describe, it} = global;
import React from 'react';
import expect from 'expect';
import {render, screen} from '@testing-library/react';
import RichTextEditor, {createEmptyValue} from '../RichTextEditor';

describe('RichTextEditor', () => {
  it('should render', () => {
    let value = createEmptyValue();
    const {container} = render(<RichTextEditor value={value} ariaLabel="Hello Westeros" />);
    expect(container.querySelector('div').className).toInclude('RichTextEditor__root___');
  });

  describe('accessibility', () => {
    it('should have the given ariaLabel', () => {
      let value = createEmptyValue();
      render(<RichTextEditor value={value} ariaLabel="Hello Westeros" />);
      expect(screen.getByRole('textbox').getAttribute('aria-label')).toEqual('Hello Westeros');
    });

    it('should have the given ariaLabelledBy', () => {
      let value = createEmptyValue();
      render(<RichTextEditor value={value} ariaLabelledBy="jonsnow" />);
      expect(screen.getByRole('textbox').getAttribute('aria-labelledby')).toEqual('jonsnow');
    });

    it('should have the given ariaDescribedBy', () => {
      let value = createEmptyValue();
      render(<RichTextEditor value={value} ariaDescribedBy="sunandmoon" />);
      expect(screen.getByRole('textbox').getAttribute('aria-describedby')).toEqual('sunandmoon');
    });
  });
});

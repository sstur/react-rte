// @flow
const {describe, it} = global;

import composite from '../composite';
import expect from 'expect';

describe('composite', () => {
  it('should return the composite of two functions', () => {
    let addOne = (x) => x + 1;
    let addTwo = (x) => x + 2;
    expect(
      composite(addOne, addTwo)(5)
    ).toBe(7);
    expect(
      composite(addOne, undefined)(5)
    ).toBe(6);
  });
});

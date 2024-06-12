import {printArray} from './printArray.js';

describe('printArray', () => {
  it('returns the last array item', () => {
    const lastItem = printArray([1, 2, 3, 4]);
    expect(lastItem).toBe(4);
  });
});

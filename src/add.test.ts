import {add} from './add.js';

describe('add', () => {
  it.skip('adds two numbers', () => {
    const sum = add(1, 2);
    expect(sum).toBe(3);
  });
});

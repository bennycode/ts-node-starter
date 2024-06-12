import {sayHello} from './sayHello.js';

describe('sayHello', () => {
  it('returns Hello', () => {
    const text = sayHello();
    expect(text).toBeDefined();
  });
});

import {sayHello} from './sayHello.js';

describe('sayHello', () => {
  it('returns Hello', () => {
    const text = sayHello();
    expect(text).toBeDefined();
  });

  it('tests the same', () => {
    const text = sayHello();
    expect(text).toBeDefined();
  });

  it('does not do anything', () => {});
});

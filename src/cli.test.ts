import {sayHello} from './cli';

describe('sayHello', () => {
  it('prints to the console', () => {
    const text = sayHello();
    expect(text).toEqual(expect.any(String));
  });
});

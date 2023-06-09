import {describe, it, expect} from '@jest/globals';
import {sayHello} from './cli';

describe('sayHello', () => {
  it('prints to the console', () => {
    const text = sayHello();
    expect(text).toEqual(expect.any(String));
  });
});

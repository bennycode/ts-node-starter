import {describe, expect, it} from 'vitest';
import {sayHello} from './sayHello';

describe('sayHello', () => {
  it('prints to the console', () => {
    const text = `${sayHello()} ${process.env.NODE_ENV}`;
    expect(text).toEqual(`I am Command Line Interface test`);
  });
});

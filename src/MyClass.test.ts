import {describe, it, expect} from '@jest/globals';
import {MyClass} from './MyClass';

describe('MyClass', () => {
  describe('returnHello', () => {
    it('returns Hello', () => {
      const myInstance = new MyClass();
      expect(myInstance.returnHello()).toBe('Hello');
    });
  });
});

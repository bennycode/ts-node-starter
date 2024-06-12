import {Money} from './Money.js';

describe('Money', () => {
  describe('toDecimal', () => {
    it.skip('can be converted to a decimal', () => {
      const money = new Money(13, 37);
      expect(money.toDecimal()).toBe(1337);
    });
  });
});

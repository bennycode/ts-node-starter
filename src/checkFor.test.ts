import {Money} from './Money.js';
import {Payment} from './Payment.js';
import {User} from './User.js';
import {checkFor} from './checkFor.js';

describe('checkFor', () => {
  it('does not need an approval if payment is within range', () => {
    const initiator = new User('Benny', new Money(200, 0));
    const payment = new Payment(new Money(123, 0), initiator);
    const auth = checkFor(payment);
    expect(auth.approvalNeeded).toBeFalsy();
  });

  it('needs an approval if payment exceeds limit', () => {
    const supervisor = new User('Daniel', new Money(200, 0));
    const initiator = new User('Benny', new Money(100, 0), supervisor);
    const payment = new Payment(new Money(123, 0), initiator);
    const auth = checkFor(payment);
    expect(auth.approvalNeeded).toBeTruthy();
    expect(auth.primaryApprover?.name).toBe('Daniel');
  });
});

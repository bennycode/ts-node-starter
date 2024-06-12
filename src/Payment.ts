import {Money} from './Money.js';
import {User} from './User.js';

export class Payment {
  constructor(
    public amount: Money,
    public initiator: User
  ) {}
}

import type {Money} from './Money.js';
import type {User} from './User.js';

export class Payment {
  constructor(
    public amount: Money,
    public initiator: User
  ) {}
}

import type {Money} from './Money.js';
import type {User} from './User.js';

export const primaryApprover = (initiator: User, amount: Money) => {
  let supervisior = initiator.supervisior;
  let limit = supervisior.limit;
  const maxIterations = 10;
  for (let i = 0; i < maxIterations; i++) {
    if (amount.compareTo(limit) > 0) {
      supervisior = supervisior.supervisior;
      limit = supervisior.limit;
    }
  }
};

export const checkFor = (_payment: any) => {};

import {PaymentAuth} from './PaymentAuth.js';
import type {Money} from './Money.js';
import type {Payment} from './Payment.js';
import type {User} from './User.js';

export const checkFor = (payment: Payment) => {
  const paymentAuth = new PaymentAuth();
  const initiator = payment.initiator;
  const amount = payment.amount;
  const limit = initiator.limit;
  if (amount.exceedsLimit(limit)) {
    paymentAuth.approvalNeeded = true;
    const approver = primaryApprover(initiator, amount);
    paymentAuth.primaryApprover = approver;
  } else {
    paymentAuth.approvalNeeded = false;
  }
  return paymentAuth;
};

export const primaryApprover = (initiator: User, amount: Money) => {
  let supervisior = initiator.supervisior;

  while (supervisior) {
    if (!amount.exceedsLimit(supervisior.limit)) {
      return supervisior;
    }
    supervisior = supervisior.supervisior;
  }

  return initiator;
};

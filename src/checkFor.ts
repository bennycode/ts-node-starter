import type {Money} from './Money.js';
import {Payment} from './Payment.js';
import {PaymentAuth} from './PaymentAuth.js';
import type {User} from './User.js';

export const primaryApprover = (initiator: User, amount: Money) => {
  let supervisior = initiator.supervisior;
  if (!supervisior) {
    return initiator;
  }
  let limit = supervisior.limit;
  const maxIterations = 10;
  for (let i = 0; i < maxIterations; i++) {
    if (amount.compareTo(limit) > 0) {
      if (supervisior) {
        supervisior = supervisior.supervisior;
        limit = supervisior!.limit;
      }
    }
  }
  return supervisior;
};

export const checkFor = (payment: Payment) => {
  const paymentAuth = new PaymentAuth();
  const initiator = payment.initiator;
  const amount = payment.amount;
  const limit = initiator.limit;
  if (amount.compareTo(limit) <= 0) {
    paymentAuth.approvalNeeded = false;
  }
  if (amount.compareTo(limit) > 0) {
    paymentAuth.approvalNeeded = true;
    const approver = primaryApprover(initiator, amount);
    paymentAuth.primaryApprover = approver;
  }
  return paymentAuth;
};

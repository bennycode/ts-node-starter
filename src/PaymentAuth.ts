import {User} from './User.js';

export class PaymentAuth {
  public approvalNeeded = false;
  public primaryApprover: User | undefined;
}

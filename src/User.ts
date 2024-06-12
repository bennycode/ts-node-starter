import type {Money} from './Money.js';

export class User {
  constructor(
    public name: string,
    public limit: Money,
    public supervisior?: User
  ) {}
}

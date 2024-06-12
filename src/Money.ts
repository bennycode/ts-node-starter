export class Money {
  public currency = 'EUR';
  constructor(
    public majorAmount: number,
    public minorAmount: number
  ) {}
  toDecimal() {
    return this.majorAmount * 10 * 10 + this.minorAmount;
  }
  compareTo(other: Money) {
    return this.toDecimal() - other.toDecimal();
  }
  exceedsLimit(limit: Money) {
    if (this.compareTo(limit) > 0) {
      return true;
    } else {
      return false;
    }
  }
}

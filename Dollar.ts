class Dollar {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Dollar) {
    return dollar.amount === this.amount;
  }
}

export default Dollar;

const assert = require("assert")

class Dollar {
  constructor(amount) {
    this.amount = amount
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier)
  }
}

const fiveDollars = new Dollar(5)
const tenDollars = fiveDollars.times(2)

assert.strictEqual(tenDollars.amount, 10)

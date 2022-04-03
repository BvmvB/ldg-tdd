import Dollar from "./Dollar";

describe("Dollar", () => {
  test.each([
    [5, 3, 15],
    [5, 2, 10],
  ])("multiplication(%i, %i) = %i", (amount, multiplier, expected) => {
    const dollar = new Dollar(amount);

    const value = dollar.times(multiplier);

    expect(value.amount).toEqual(expected);
  });

  test.each([
    [5, 5, true],
    [5, 3, false],
  ])("equality(%i, %i) = %o", (amount1, amount2, expected) => {
    expect(new Dollar(amount1).equals(new Dollar(amount2))).toBe(expected);
  });
});

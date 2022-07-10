import { quotify } from "./quotify";

describe("quotify", () => {
  describe("given a quoate and an author", () => {
    test('should return <Author> says, "<Quote>"', () => {
      const author = "Obi-Wan Kenobi";
      const quote = "These aren't the droids you're looking for";

      const message = quotify(author, quote);

      expect(message).toBe(
        "Obi-Wan Kenobi says, \"These aren't the droids you're looking for\""
      );
    });
  });
});

import { countCharacters } from "./countCharacters";

describe("countCharacters", () => {
  describe("given the string foo", () => {
    it("should return 3", () => {
      let nrOfCharacters = countCharacters("foo");

      expect(nrOfCharacters).toBe(3);
    });
  });

  describe("given an empty string", () => {
    it("should return 0", () => {
      let nrOfCharacters = countCharacters("");

      expect(nrOfCharacters).toBe(0);
    });
  });
});

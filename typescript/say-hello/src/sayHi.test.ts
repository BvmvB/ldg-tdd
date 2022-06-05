import { sayHi } from "./sayHi";

describe("sayHi", () => {
  describe("given a name", () => {
    it("should return Hello, <name>, nice to meet you!", () => {
      let greeting = sayHi("Bogdan");

      expect(greeting).toBe("Hello, Bogdan, nice to meet you!");
    });
  });
});

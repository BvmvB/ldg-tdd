import { Greeter } from "./Greeter";

describe("Greeter", () => {
  let greeterBob = new Greeter();

  describe("greet", () => {
    describe("given the name Bogdan", () => {
      it("should return <Hello, Bogdan, nice to meet you!>", () => {
        let greetBogdan = greeterBob.greet("Bogdan");

        expect(greetBogdan).toBe("Hello, Bogdan, nice to meet you!");
      });
    });

    describe("given the name Florin", () => {
      it("should return <Hey, Florin, welcome back!>", () => {
        let greetBogdan = greeterBob.greet("Florin");

        expect(greetBogdan).toBe("Hey, Florin, welcome back!");
      });
    });

    describe("given an unknown name", () => {
      it("should return <Greetings stranger!>", () => {
        let greetBogdan = greeterBob.greet("Tarzan");

        expect(greetBogdan).toBe("Greetings stranger!");
      });
    });
  });
});

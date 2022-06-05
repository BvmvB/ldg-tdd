class Greeter {
  public greet(name: string): string {
    switch (name) {
      case "Bogdan":
        return `Hello, ${name}, nice to meet you!`;
      case "Florin":
        return `Hey, ${name}, welcome back!`;
      default:
        return "Greetings stranger!";
    }
  }
}
export { Greeter };

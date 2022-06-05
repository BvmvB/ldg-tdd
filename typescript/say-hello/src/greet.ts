const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

import { Greeter } from "./Greeter";

const rl = readline.createInterface({ input, output });

rl.question("What is your name? ", (name: string) => {
  let greeter = new Greeter();
  let greeting = greeter.greet(name);

  console.log(greeting);

  rl.close();
});

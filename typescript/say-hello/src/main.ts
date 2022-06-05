const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

import { sayHi } from "./sayHi";

const rl = readline.createInterface({ input, output });

rl.question("What is your name? ", (name: string) => {
  let greeting = sayHi(name);

  console.log(greeting);

  rl.close();
});

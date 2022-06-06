import { countCharacters } from "./countCharacters";
import { Terminal } from "../../node-utils/Terminal";

async function main() {
  let terminal = new Terminal();

  let input = await terminal.readLine("What is the input string?");

  let nrOfCharacters = countCharacters(input);

  terminal.display(`Homer has ${nrOfCharacters} characters.`);
  terminal.close();
}

main();

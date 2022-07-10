import { Terminal } from "../../node-utils/Terminal";
import { quotify } from "./quotify";

(async function () {
  const terminal = new Terminal();

  const quote = await terminal.readLine("What is the quote?");
  const author = await terminal.readLine("Who said it?");

  terminal.display(quotify(author, quote));
  terminal.close();
})();

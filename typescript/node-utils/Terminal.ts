const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

interface Readline {
  close: () => void;
  question: (prompt: string, callback: (answer: string) => void) => void;
}

class Terminal {
  private rl: Readline;

  constructor() {
    this.rl = readline.createInterface({ input, output });
  }

  public async readLine(prompt: string): Promise<string> {
    const input = await this.readInput(prompt);
    if (!input) {
      return this.readLine(prompt);
    }
    return input;
  }

  private readInput(prompt: string): Promise<string> {
    return new Promise((resolve, _) => {
      this.rl.question(`${prompt.trim()} `, (answer: string) => {
        resolve(answer);
      });
    });
  }

  public display(message: string) {
    console.log(message);
  }

  public close() {
    this.rl.close();
  }
}

export { Terminal };

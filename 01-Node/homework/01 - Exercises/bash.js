const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");
const { Console } = require("console");

function bash() {

  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
   
    let args = data.toString().trim().split(/\s+/);

    let cmd = args.shift();

    if (commands.hasOwnProperty(cmd)) {
      commands[cmd](print, args);
    } else {
      print(`command not found: ${cmd}`);
    }
    process.stdout.write("prompt > ");
  });
}

function print(output) {
  process.stdout.write(output);

  process.stdout.write("\nprompt > ");
}

bash();
module.exports = {
  print,
  bash,
};

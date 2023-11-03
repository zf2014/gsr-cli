#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figlet = require("figlet");
const commander_1 = require("commander");
console.log(figlet.textSync("GRS CLI"));
const program = new commander_1.Command();
program
  .version("1.0.0")
  .description("GRS文件扫描工具");
program.command('start')
  .option("-r --root <value>", "扫描路径", ".")
  .action(() => {
    console.log('start');
  });
program.parse(process.argv);
const options = program.opts();
//# sourceMappingURL=index.js.map
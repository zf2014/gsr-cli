#! /usr/bin/env node

const figlet = require("figlet")
import { Command } from 'commander'
import fs from 'node:fs'
import path from 'node:path'

console.log(figlet.textSync("GRS CLI"))
const program = new Command();

program
  .version("1.0.0")
  .description("分析GRS文件并生产相应的.xsls文件")

program.command('start')
  .option("-r --root <value>", "扫描路径", ".")
  .action(() => {
    console.log('start')
  })

program.parse(process.argv)

const options = program.opts()


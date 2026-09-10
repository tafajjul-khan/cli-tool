#!/usr/bin/env node
// console.log(process.argv)

import arg from "arg"
import chalk from "chalk";
// import pkg from './package.json' its not works becouse of becouse realtive path problems , missing assertion, top level dynamic path problems
import fs from "fs";
// import path from "path"; 
import {pkgUpSync} from "pkg-up";
import {start} from "../src/commands/start.js"
import { getConfig } from "../src/config/config-mgr.js"

// const pkgPath = path.join(process.cwd(), 'package.json');
// const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    })
    
    // console.log(args);
    if(args["--start"]){
        const config = getConfig();
        start(config)
    }
} catch (error) {
    console.error(chalk.yellowBright(error.message))
    console.log();
    usage();
}

function usage(){
    console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}
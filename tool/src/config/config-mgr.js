#!/usr/bin/env node
// console.log(process.argv)

import arg from "arg"
import chalk from "chalk";
import fs from "fs"
import { pkgUpSync } from "pkg-up";


export function getConfig() {
    const pkgPath = pkgUpSync({ cwd: process.cwd() });
    if (pkgPath) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

        if (pkg.tool) {
            console.log(chalk.green("Found configuration", pkg.tool));
            return pkg.tool;
        } else {
            console.log(chalk.yellow("Could not find tool configuration"));
        }
    } else if (hashJSConfigFile()) {
        return loadJSConfigFile();
    }
    else {
        console.log(chalk.red('Pakcage.json file not found!'))
        return {
            port: 3000,
            mode: "development"
        }
    }
    console.log(chalk.bgCyanBright("tool start"))

}

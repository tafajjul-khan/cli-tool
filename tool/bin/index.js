#!/usr/bin/env node

import arg from "arg"
import { createLogger } from "../src/logger.js";
import {start} from "../src/commands/start.js"
import { getConfig } from "../src/config/config-mgr.js"

const logger = createLogger('bin')
try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    })
    
    logger.debug("Recieved args", args);
    if(args["--start"]){
        const config = getConfig();
        start(config)
    }
} catch (error) {
    logger.warnings(error.message)
    console.log();
    usage();
}

function usage(){
    console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}
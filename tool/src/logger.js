import chalk from "chalk";
import debug from "debug";

export function createLogger(name){
    return {
        log: (...args) => console.log(chalk.grey(...args)),
        warnings: (...args) => console.log(chalk.yellow(...args)),
        hihglight: (...args) => console.log(chalk.bgCyanBright(...args)),
        debug:debug(name)
        
    }
}
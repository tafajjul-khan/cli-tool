import { createLogger } from "../logger.js";
import {cosmiconfigSync} from "cosmiconfig"
import schema from './schema.json' with { type: 'json' };
import betterArgvErrors from "better-ajv-errors"
import ajv from "ajv";


const configLoader = cosmiconfigSync('tool');
const Ajv = new ajv()
const logger = createLogger("config-mgr");

export function getConfig() {
    const result = configLoader.search(process.cwd());

    if(!result){
        logger.warnings("Could not fin configurations, using default");
        return {port: 1234};
    }else{
        const  isValid = Ajv.validate(schema, result.config);
        if(!isValid){
            logger.warnings("Invalid configurations suppiled");
            console.log();
            console.log(betterArgvErrors(schema, result.config, Ajv.errors));
            process.exit(1);
        }
        logger.debug('Found configuration', result.config);
        return result.config;
    }
}

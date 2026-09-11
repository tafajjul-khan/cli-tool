import  { createLogger } from "../logger.js";
const logger = createLogger("config-mgr");

export function start(config) {
  logger.hihglight('  Starting the app  ');
  logger.debug('Received configuration in start -', config);
}
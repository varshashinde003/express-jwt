const editEnv = require('./editEnv');
const chalk = require("chalk").default;
const getKey = require('./common').getKey;

try {
    editEnv("APP_KEY" , getKey(80));
    console.error(chalk.green("Key has been generated successfully"));
}
catch(e) {
    console.error(chalk.red(e.message));
}

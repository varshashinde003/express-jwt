const fs = require("fs");
const ora = require("ora").default();
const editEnv = require('./editEnv');
const chalk = require("chalk").default;
const getKey = require('./common').getKey;

const spinner = ora.start("Running post install script...");
if(fs.existsSync(".env")) {
    spinner.info(".env file already exists.");
}
else {
    fs.copyFile(".env.example" , ".env" , (error) => {

        try {
            editEnv("APP_KEY" , getKey(80));
            console.error(chalk.green("Key has been generated successfully"));
        }
        catch(e) {
            console.error(chalk.red(e.message));
        }

        if(error) {
            spinner.fail("Following error occured while copying .env file: " + error.message);
        }
        else {
            spinner.succeed(".env file copied.")
        }
    });
}
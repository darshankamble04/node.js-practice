const chalk = require("chalk");

console.log(chalk.blue.inverse('Hello') + chalk.red.inverse(' World') + chalk.red.inverse('!'));
console.log(chalk.green.inverse("success"));
console.log(chalk.red.inverse("denger!!"));

const validator = require("validator")

const email = validator.isEmail("daesjgmail.com")
console.log(email)
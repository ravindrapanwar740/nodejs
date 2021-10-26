const chalk = require('chalk');
const validator=require('validator')

//console.log(chalk.green.inverse('Success!'));

const res= validator.isEmail('foo@bar.com');
console.log(res? chalk.green.inverse(res):chalk.red.inverse(res))
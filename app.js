const chalk = require('chalk');
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(chalk.green('Success!'));
console.log(chalk.bold('This is bold'));
console.log(chalk.inverse('Inverse'));
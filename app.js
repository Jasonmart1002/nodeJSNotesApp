const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add comand
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//create read command

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading the note')
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'Listing a Note',
    handler: function () {
        console.log('Listing the note')
    }
})

//add, remove, read, list

console.log(yargs.argv)
const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add comand
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
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


yargs.parse()
//console.log(yargs.argv)
#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

// logic
const login = require('../logic/login')
const logout = require('../logic/logout')
const whoami = require('../logic/whoami')
const deploy = require('../logic/deploy')

const conf = require('../config')

program
    .version(pkg.version)
    .description(pkg.description)

// login command
program
    .command('login')
    .alias('l')
    .description('Login to the maxup API')
    .action(() => {
        login()
            .then(() => {
                process.exit(0)
            })
            .catch(err => {
                console.log(err.message)
                process.exit(1)
            })
    })

// logout command
program
    .command('logout')
    .alias('o')
    .description('Logout of the maxup API')
    .action(() => {
        logout()
            .then(() => {
                process.exit(0)
            })
            .catch(err => {
                console.log(err.message)
                process.exit(1)
            })
    })

// whoami command
program
    .command('whoami')
    .alias('w')
    .description('Check who you are logged into maxup API as')
    .action(() => {
        whoami()
            .then(() => {
                process.exit(0)
            })
            .catch(err => {
                console.log(err.message)
                process.exit(1)
            })
    })

// deploy command!
program
    .command('deploy [dir]', {
        isDefault: true
    })
    .alias('d')
    .description('Performs a deployment (default)')
    .action(() => {
        deploy()
            .then(() => {
                process.exit(0)
            })
            .catch(err => {
                console.log(err.message)
                process.exit(1)
            })
    })

program.parse(process.argv)
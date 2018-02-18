const Configstore = require('configstore')
const conf = require('../config')
const maxApi = require('../lib/maxApi')
const sleep = require('../lib/sleep')
const ms = require('ms')
const wait = require('../lib/output/wait')
const eraseLines = require('../lib/output/erase-lines')
const ok = require('../lib/output/ok')
const info = require('../lib/output/info')
const emailPrompt = require('email-prompt')
const {
    validate: validateEmail
} = require('email-validator')
const {
    cyan,
    bold
} = require('chalk')

module.exports = async () => {
    let stopSpinner
    if (conf.get('token')) {
        console.log('You are already logged in. Please logout with `max logout`')
        return
    }
    let email

    try {
        email = await emailPrompt({ /* options */ })
    } catch (err) {
        return
    }

    const emailIsValid = validateEmail(email)
    if (!emailIsValid) {
        process.stdout.write(eraseLines(1))
        console.log(`The email address provieded (${email}) is not valid.`)
        process.exit(1)
    }

    let verificationToken

    stopSpinner = wait('Sending you an email')

    try {
        const data = await maxApi.postLogin(email)
        verificationToken = data.token
    } catch (err) {
        stopSpinner()
        console.log(err.message)
        return 1
    }
    stopSpinner()
    process.stdout.write(eraseLines(1))

    console.log(info(`We sent an email to ${bold.underline(email)}. Please follow the steps provided inside it.`))

    stopSpinner = wait('Waiting for your confirmation')

    let token

    while (!token) {
        try {
            await sleep(ms('1s'))
            token = await maxApi.postVerify(email, verificationToken)
        } catch (err) {
            if (err.code === 'confirmation_failed') {
                // just wait for the user to click on the link
            } else {
                stopSpinner()
                console.log(err.message)
                return 1
            }
        }
    }
    stopSpinner()
    console.log(ok('Email confirmed'))
    conf.set('token', token)
    console.log(ok(cyan('Ready!')))
    return
}
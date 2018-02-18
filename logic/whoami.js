const conf = require('../config')
const maxApi = require('../lib/maxApi')
const wait = require('../lib/output/wait')
const info = require('../lib/output/info')

module.exports = async () => {
    let stopSpinner
    if (!conf.get('token')) {
        console.log('You are not logged in. Please login with `max login`')
        return
    }

    let email

    stopSpinner = wait('Checking...')

    try {
        const data = await maxApi.whoami()
        email = data.email
    } catch (err) {
        stopSpinner()
        console.log(err.message)
        return 1
    }

    stopSpinner()

    console.log(info(`Logged in as ${email}.`))
}
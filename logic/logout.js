const conf = require('../config')
const info = require('../lib/output/info')

module.exports = async () => {
    if (!conf.get('token')) {
        console.log('You are not logged in. Please login with `max login`')
        return
    }

    console.log(info('Logging out...'))

    await conf.delete('token')
}
const conf = require('../config')
const info = require('../lib/output/info')
const globby = require('globby')
const ignore = require('../lib/ignore')
const FormData = require('form-data')
const fs = require('fs')
const maxApi = require('../lib/maxApi')
const wait = require('../lib/output/wait')
const ok = require('../lib/output/ok')
const promiseLimit = require('promise-limit')
const limit = promiseLimit(10)
const {
    bold
} = require('chalk')
const path = require('path')

module.exports = async (siteName) => {
    if (!conf.get('token')) {
        console.log('You are not logged in. Please login with `max login`')
        return
    }
    let site = `${siteName}.maxup.sh`
    if (!siteName) {
        site = `${path.basename(process.cwd())}.maxup.sh`
    }
    console.log(site)
    let files
    let stopSpinning

    stopSpinning = wait('Deploying...')
    try {
        const pattern = ['**/*.*'].concat(ignore)

        files = await globby(pattern)
    } catch (err) {
        throw err
    }


    const fileMaps = files.map(file => {
        return limit(async () => {
            const formData = new FormData()
            formData.append('files', fs.createReadStream(file), file);

            try {
                return await maxApi.upload(formData, site, file)
            } catch (err) {
                throw err
            }
        })
    })

    await Promise.all(fileMaps)
    stopSpinning()

    console.log(ok(`Deploy succeeded! Check it out at ${bold.underline(`http://${site}`)}`))

    return
}
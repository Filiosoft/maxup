const axios = require('axios')
const conf = require('../config')

const apiVersion = 'v1'
const host = 'http://localhost:4000'
const apiBase = `${host}/${apiVersion}`
const jwtToken = conf.get('token')

axios.interceptors.request.use(config => {
    if (jwtToken) {
        config.headers.common.Authorization = `Bearer ${jwtToken}`
    }
    return config
})


const postLogin = (email) => {
    return axios.post(`${apiBase}/auth`, {
            email
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            throw err.response.data.error
        })
}

const getVerify = (email, token) => {
    return axios.get(`${apiBase}/auth/verify?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`)
        .then(res => {
            return res.data.token
        })
        .catch(err => {
            throw err.response.data.error
        })
}

const whoami = () => {
    return axios.get(`${apiBase}/auth/whoami`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            throw err.response.data.error
        })
}

const upload = (formdata, site, filename) => {
    let config = {
        headers: headers = {
            'x-maxup-site': site,
            'x-maxup-filename': filename
        }
    }
    config.headers = Object.assign(formdata.getHeaders(), config.headers)
    return axios.post(`${apiBase}/files`, formdata, config)
        .then(res => {
            return res.data
        })
        .catch(err => {
            throw err.response.data
        })
}

module.exports = {
    postLogin,
    getVerify,
    whoami,
    upload
}
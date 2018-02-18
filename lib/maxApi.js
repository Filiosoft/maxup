const axios = require('axios')
const conf = require('../config')

const apiVersion = 'v1'
const apiBase = `https://api.maxup.sh/${apiVersion}`
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

const postVerify = (email, token) => {
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

module.exports = {
    postLogin,
    postVerify,
    whoami
}
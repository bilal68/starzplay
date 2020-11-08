const axios = require('axios')

const get = async (options) => {
    const defaultOptions = {
        method: 'GET',
        headers: {
            'secret-key': '$2b$10$fNoHh3O2w6Wz9mn6Q0yS2eFeHby9IU17hPnmD6mcB1jGVAYosR3D.',
            'Content-Type': 'application/json',
        }
    }
    return await axios({ ...defaultOptions, ...options })
}
module.exports = {
    get
}
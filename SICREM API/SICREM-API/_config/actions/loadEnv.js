const fs = require('fs')
const ENV_PATH = `/_config/environments/inc/${process.env.NODE_ENV}.json`
const ENV = fs.readFileSync(global.appRoot + ENV_PATH, 'utf8')

module.exports = JSON.parse(ENV)

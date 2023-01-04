const Repo = require('../repositories')

module.exports = {
	generateClientID: require('./generateClientID')(Repo),
	generateCbesID: require('./generateCbesID')(Repo)
}

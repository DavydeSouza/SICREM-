const Repo = require('../repositories')

module.exports = {
	create: require('./create')(Repo),
	update: require('./update')(Repo),
	getById: require('./getById')(Repo)
}

const Repo = require('../repositories')

module.exports = {
	getAll: require('./getAll')(Repo),
	getById: require('./getById')(Repo)
}

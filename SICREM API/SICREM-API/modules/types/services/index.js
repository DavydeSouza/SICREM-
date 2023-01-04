const Repo = require('../repositories')
module.exports = {
	create: require('./create')(Repo),
	persistMultipleTypes: require('./persistMultipleTypes')(Repo),
	getById: require('./getById')(Repo),
	getAll: require('./getAll')(Repo)
}

const pgpdb = require('../../../_config/db/postgres')
module.exports = {
	create: require('./create')(pgpdb),
	persistMultipleTypes: require('./persistMultipleTypes')(pgpdb),
	getById: require('./getById')(pgpdb),
	getAll: require('./getAll')(pgpdb)
}

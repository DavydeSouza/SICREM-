const pgpdb = require('../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	update: require('./update')(pgpdb),
	getByName: require('./getByName')(pgpdb),
	getById: require('./getById')(pgpdb)
}

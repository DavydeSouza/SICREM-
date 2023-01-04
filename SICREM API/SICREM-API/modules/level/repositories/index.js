const pgpdb = require('../../../_config/db/postgres')

module.exports = {
	getAll: require('./getAll')(pgpdb),
	getById: require('./getById')(pgpdb)
}

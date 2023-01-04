const pgpdb = require('../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	createTx: require('./createTx')(),
	update: require('./update')(pgpdb),
	updateTx: require('./updateTx')(),
	inactive: require('./inactive')(pgpdb),
	getAll: require('./getAll')(pgpdb),
	getById: require('./getById')(pgpdb),
	getByCompanyId: require('./getByCompanyId')(pgpdb)
}

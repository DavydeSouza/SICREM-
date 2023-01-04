const pgpdb = require('../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	createTx: require('./createTx')(),
	update: require('./update')(pgpdb),
	updateTx: require('./updateTx')(),
	inativeTx: require('./inativeTx')(),
	getByName: require('./getByName')(pgpdb),
	getByClient: require('./getByClient')(pgpdb),
	getById: require('./getById')(pgpdb)
}

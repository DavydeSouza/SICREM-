const pgpdb = require('../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	createTx: require('./createTx')(),
	update: require('./update')(pgpdb),
	updateTx: require('./updateTx')(),
	inativeTx: require('./inativeTx')(),
	activateTx: require('./activateTx')(),
	deleteTx: require('./deleteTx')(),
	getClient: require('./getClient')(pgpdb),
	getByName: require('./getByName')(pgpdb),
	getByClinetId: require('./getByClinetId')(pgpdb)
}

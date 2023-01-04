const pgpdb = require('../../../_config/db/postgres')

module.exports = {

	authenticate: require('./authenticate')(pgpdb),
	// changePswd: require('./changePswd')(tp),

	create: require('./create')(pgpdb),
	qtd: require('./qtd')(pgpdb),
	createTx: require('./createTx')(),
	update: require('./update')(pgpdb),
	updateTx: require('./updateTx')(),
	updateClient: require('./updateClient')(pgpdb),
	activateTx: require('./activateTx')(),
	inative: require('./inative')(pgpdb),
	inativeTx: require('./inativeTx')(),
	delete: require('./delete')(pgpdb),
	deleteTx: require('./deleteTx')(),

	get: require('./get')(pgpdb),
	getAll: require('./getAll')(pgpdb),
	getById: require('./getById')(pgpdb),
	getByName: require('./getByName')(pgpdb),
	getClient: require('./getClient')(pgpdb),
	getClients: require('./getClients')(pgpdb),
	getToEditById: require('./getToEditById')(pgpdb),
	getToEditByCebsId: require('./getToEditByCebsId')(pgpdb),
	getByEmail: require('./getByEmail')(pgpdb),

	verifyStatusByEmail: require('./verifyStatusByEmail')(pgpdb)

}

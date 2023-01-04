const pgpdb = require('../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	qtd: require('./qtd')(pgpdb),
	update: require('./update')(pgpdb),
	delete: require('./delete')(pgpdb),
	deleteByShipOwnerTx: require('./deleteByShipOwnerTx')(),
	inativeTx: require('./inativeTx')(pgpdb),
	get: require('./get')(pgpdb),
	getCbesId: require('./getCbesId')(pgpdb),
	getByCbesId: require('./getByCbesId')(pgpdb),
	getById: require('./getById')(pgpdb)
}

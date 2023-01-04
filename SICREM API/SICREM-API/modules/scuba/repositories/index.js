const pgpdb = require('../../../_config/db/postgres')

module.exports = {
	create: require('./create')(pgpdb),
	createTx: require('./createTx')(),
	update: require('./update')(pgpdb),
	updateTx: require('./updateTx')(),
	inactiveByCertification: require('./inactiveByCertification')(pgpdb),
	getByCertificationId: require('./getByCertificationId')(pgpdb)
}

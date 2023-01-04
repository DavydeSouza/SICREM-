const Repo = require('../repositories')

module.exports = {
	create: require('./create')(Repo),
	createTx: require('./createTx')(Repo),
	update: require('./update')(Repo),
	updateTx: require('./updateTx')(Repo),
	inativeTx: require('./inativeTx')(Repo),
	getByName: require('./getByName')(Repo),
	getByClient: require('./getByClient')(Repo),
	getById: require('./getById')(Repo)
}

const Repo = require('../repositories')
const { deleteByShipOwnerTx } = require('../../ships/services')

module.exports = {
	create: require('./create')(Repo),
	createTx: require('./createTx')(Repo),
	update: require('./update')(Repo),
	updateTx: require('./updateTx')(Repo),
	inativeTx: require('./inativeTx')(Repo),
	activateTx: require('./activateTx')(Repo),
	deleteTx: require('./deleteTx')(Repo, deleteByShipOwnerTx),
	getClient: require('./getClient')(Repo),
	getByName: require('./getByName')(Repo),
	getByClinetId: require('./getByClinetId')(Repo)
}

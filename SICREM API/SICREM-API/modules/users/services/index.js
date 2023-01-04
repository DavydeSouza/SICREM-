const pgpdb = require('../../../_config/db/postgres')
const Repo = require('../repositories')
const ServiceSeq = require('../../sequences/services')
const ServiceShipOwner = require('../../shipowner/services')
const ServiceCompany = require('../../company/services')

module.exports = {

	home: require('./home')(Repo),

	authenticate: require('./authenticate')(Repo),
	changePswd: require('./changePswd')(Repo),

	create: require('./create')(Repo, ServiceSeq),
	createTx: require('./createTx')(Repo, ServiceSeq, ServiceShipOwner, ServiceCompany, pgpdb),
	update: require('./update')(Repo),
	updateTx: require('./updateTx')(Repo, ServiceCompany, pgpdb),
	activateTx: require('./activateTx')(Repo, ServiceCompany, pgpdb),
	inative: require('./inative')(Repo),
	qtd: require('./qtd')(Repo),
	inativeTx: require('./inativeTx')(Repo, ServiceShipOwner, ServiceCompany, pgpdb),
	delete: require('./delete')(Repo),
	deleteTx: require('./deleteTx')(Repo, ServiceCompany, pgpdb),

	get: require('./get')(Repo),
	getAll: require('./getAll')(Repo),
	getById: require('./getById')(Repo),
	getByName: require('./getByName')(Repo),
	getClient: require('./getClient')(Repo),
	getClients: require('./getClients')(Repo),
	getToEditById: require('./getToEditById')(Repo),
	getToEditByCebsId: require('./getToEditByCebsId')(Repo),
	getByEmail: require('./getByEmail')(Repo)

}

const pgpdb = require('../../../_config/db/postgres')
const Repo = require('../repositories')
const ServiceGtf = require('../../gtf/services')
const ServiceMtf = require('../../mtf/services')
const getCbesId = require('./getCbesId')(Repo)

module.exports = {
	create: require('./create')(Repo, ServiceGtf, ServiceMtf, getCbesId),
	update: require('./update')(Repo, ServiceGtf, ServiceMtf),
	qtd: require('./qtd')(Repo),
	delete: require('./delete')(Repo),
	deleteByShipOwnerTx: require('./deleteByShipOwnerTx')(Repo),
	inativeTx: require('./inativeTx')(Repo, pgpdb),
	get: require('./get')(Repo),
	getByCbesId: require('./getByCbesId')(Repo),
	getById: require('./getById')(Repo)
}

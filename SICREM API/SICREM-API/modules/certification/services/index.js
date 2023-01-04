const pgpdb = require('../../../_config/db/postgres')
const Repo = require('../repositories')
const ServiceSeq = require('../../sequences/services')
const ServiceSystem = require('../../scuba/services')

module.exports = {
	create: require('./create')(Repo, ServiceSeq, ServiceSystem),
	createTx: require('./createTx')(Repo, ServiceSeq, ServiceSystem, pgpdb),
	update: require('./update')(Repo, ServiceSystem),
	updateTx: require('./updateTx')(Repo, ServiceSystem, pgpdb),
	inactive: require('./inactive')(Repo, ServiceSystem),
	getAll: require('./getAll')(Repo),
	getById: require('./getById')(Repo),
	getByCompanyId: require('./getByCompanyId')(Repo)
}

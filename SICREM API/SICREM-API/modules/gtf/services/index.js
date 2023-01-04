const Repo = require('../repositories')
const ServiceTypes = require('../../types/services')
const ServicePort = require('../../port/services')
const ServiceShipYard = require('../../shipyard/services')

module.exports = {
	create: require('./create')(Repo, ServiceTypes, ServicePort, ServiceShipYard),
	update: require('./update')(Repo, ServiceTypes, ServicePort),
	updateTx: require('./updateTx')(Repo, ServiceShipYard),
	getById: require('./getById')(Repo)
}

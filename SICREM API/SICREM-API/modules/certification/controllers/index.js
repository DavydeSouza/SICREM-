const Service = require('../services')
module.exports = {
	create: require('./create')(Service),
	update: require('./update')(Service),
	inactive: require('./inactive')(Service),
	getAll: require('./getAll')(Service),
	getById: require('./getById')(Service),
	getByCompanyId: require('./getByCompanyId')(Service)
}

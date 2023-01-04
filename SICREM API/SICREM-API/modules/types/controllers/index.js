const Service = require('../services')
module.exports = {
	create: require('./create')(Service),
	getById: require('./getById')(Service),
	getAll: require('./getAll')(Service)
}

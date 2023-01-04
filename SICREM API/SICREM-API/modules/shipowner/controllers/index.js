const Service = require('../services')
module.exports = {
	create: require('./create')(Service),
	update: require('./update')(Service),
	getByName: require('./getByName')(Service),
	getByClient: require('./getByClient')(Service),
	getById: require('./getById')(Service)
}

const Service = require('../services')
module.exports = {
	create: require('./create')(Service),
	update: require('./update')(Service),
	getClient: require('./getClient')(Service),
	getByName: require('./getByName')(Service),
	getByClinetId: require('./getByClinetId')(Service)
}

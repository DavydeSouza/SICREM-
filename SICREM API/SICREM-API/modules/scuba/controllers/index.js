const Service = require('../services')
module.exports = {
	create: require('./create')(Service),
	update: require('./update')(Service),
	getByCertificationId: require('./getByCertificationId')(Service)
}

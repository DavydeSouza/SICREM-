const Service = require('../services')
module.exports = {
	getAll: require('./getAll')(Service),
	getById: require('./getById')(Service)
}

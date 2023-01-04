const Service = require('../services')
module.exports = {
	create: require('./create')(Service),
	qtd: require('./qtd')(Service),
	update: require('./update')(Service),
	delete: require('./delete')(Service),
	inative: require('./inative')(Service),
	get: require('./get')(Service),
	getByCbesId: require('./getByCbesId')(Service),
	getById: require('./getById')(Service)
}

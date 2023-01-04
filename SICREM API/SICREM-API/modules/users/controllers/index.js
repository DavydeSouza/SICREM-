const Service = require('../services')
module.exports = {

	home: require('./home')(Service),
	qtd: require('./qtd')(Service),

	authenticate: require('./authenticate')(Service),
	changePswd: require('./changePswd')(Service),

	create: require('./create')(Service),
	update: require('./update')(Service),
	activate: require('./activate')(Service),
	inative: require('./inative')(Service),
	delete: require('./delete')(Service),

	getAll: require('./getAll')(Service),
	getByName: require('./getByName')(Service),
	getClient: require('./getClient')(Service),
	getClients: require('./getClients')(Service),
	getToEditById: require('./getToEditById')(Service),
	getToEditByCebsId: require('./getToEditByCebsId')(Service),
	getById: require('./getById')(Service)

}

const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo, ServiceAdress) => async (id, body) => {
	try {
		let port = await Repo.update(id, body)
		if (port) {
			if (port.adress) {
				port.adress = await ServiceAdress.update(port.adress.id)
			}
		}
		return port
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

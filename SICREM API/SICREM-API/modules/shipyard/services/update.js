const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo, ServiceAdress) => async (id, body) => {
	try {
		let shipyard = await Repo.update(id, body)
		if (shipyard) {
			if (shipyard.adress) {
				shipyard.adress = await ServiceAdress.update(shipyard.adress.id)
			}
		}
		return shipyard
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

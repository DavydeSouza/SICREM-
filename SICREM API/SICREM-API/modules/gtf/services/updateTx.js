const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
const handleShipyard = require('./inc/handleShipyard')

module.exports = (Repo, ServiceShipYard) => async (gtf) => {
	try {
		gtf.shipyard = await handleShipyard(gtf.shipyard, ServiceShipYard)
		return Repo.update(gtf)
	} catch (error) {
		console.log(error)
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

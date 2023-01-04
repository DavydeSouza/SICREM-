const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (body, tx) => {
	try {
		body.address = JSON.stringify(body.address)
		const shipyard = await Repo.create(body, tx)
		return shipyard
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

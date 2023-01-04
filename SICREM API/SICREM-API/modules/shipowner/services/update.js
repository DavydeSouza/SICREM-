const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (id, body) => {
	try {
		const shipowner = await Repo.update(id, body)
		return shipowner
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

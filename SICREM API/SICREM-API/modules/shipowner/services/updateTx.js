const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (tx, id, body) => {
	try {
		const shipowner = await Repo.updateTx(tx, id, body)
		return shipowner
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

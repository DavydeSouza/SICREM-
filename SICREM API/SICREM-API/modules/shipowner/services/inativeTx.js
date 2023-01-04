const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (tx, user) => {
	try {
		await Repo.inativeTx(tx, user)
		return
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

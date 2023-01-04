const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (mtf, body) => {
	try {
		const souls = await Repo.update(mtf.id, body)
		return souls
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

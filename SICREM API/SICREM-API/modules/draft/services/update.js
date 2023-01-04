const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (id, body) => {
	try {
		const draft = await Repo.update(id, body)
		return draft
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

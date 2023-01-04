const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (id, body) => {
	try {
		const freeBoardArea = await Repo.update(id, body)
		return freeBoardArea
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

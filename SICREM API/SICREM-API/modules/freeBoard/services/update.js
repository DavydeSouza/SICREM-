const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (mtf, body) => {
	try {
		const freeBoard = await Repo.update(mtf, body)
		return freeBoard
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

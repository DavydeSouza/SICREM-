const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (body, freeBoard) => {
	try {
		const freeBoardArea = await Repo.create(body, freeBoard)
		return freeBoardArea
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

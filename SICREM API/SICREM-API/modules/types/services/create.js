const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (body, type_) => {
	try {
		body.table = `${type_}Type`
		const type = await Repo.create(body)
		return type
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

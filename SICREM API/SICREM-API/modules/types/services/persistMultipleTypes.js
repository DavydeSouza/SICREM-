const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (body) => {
	try {
		body.table = `${body.type}Type_Gtf`
		body.type = `${body.type}Type`
		const type = await Repo.persistMultipleTypes(body)
		return type
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

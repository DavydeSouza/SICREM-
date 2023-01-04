const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (body) => {
	try {
		const gtf = await Repo.update(body)
		return gtf
	} catch (error) {
		console.log(error)
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

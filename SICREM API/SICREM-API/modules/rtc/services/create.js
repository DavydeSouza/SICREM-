const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (body, ship) => {
	try {
		if (body.length) {
			const rtc = await Repo.create(body, ship)
			return rtc
		}
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

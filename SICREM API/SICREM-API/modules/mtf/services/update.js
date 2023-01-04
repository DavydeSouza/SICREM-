const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
module.exports = (Repo) => async (body) => {
	try {
		body.drafts = JSON.stringify([body.lightdraft, body.heavydraft])
		const mtf = await Repo.update(body)
		return mtf
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

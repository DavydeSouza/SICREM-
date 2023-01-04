const Guid = require('guid')
const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id

	body.address = body.address
		? body.address
		: null

	try {
		const port = await Repo.create(body)
		return port
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

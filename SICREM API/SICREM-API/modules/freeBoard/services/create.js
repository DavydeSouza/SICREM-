const Guid = require('guid')
const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo, ServiceAreas) => async (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	try {
		body.areas = JSON.stringify(body.areas)
		const freeBoard = await Repo.create(body)
		return freeBoard
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

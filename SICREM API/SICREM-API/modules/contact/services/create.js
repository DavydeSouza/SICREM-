const Guid = require('guid')
const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	try {
		const contact = await Repo.create(body)
		return contact
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

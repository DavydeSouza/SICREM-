const Guid = require('guid')
const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (tx, body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	try {
		const shipowner = await Repo.createTx(tx, body)
		return shipowner
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

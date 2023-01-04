const Guid = require('guid')
const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')

module.exports = (Repo) => async (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	try {
		body.id = id
		body.drafts = JSON.stringify([body.lightdraft, body.heavydraft])
		body.freeBoards = JSON.stringify(body.freeBoards)
		body.souls = JSON.stringify(body.souls)

		const mtf = await Repo.create(body)

		return mtf
	} catch (error) {
		console.log(error)
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

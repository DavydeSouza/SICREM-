const pgErrorHandler = require('../../../_config/error/handler/pgErrorHandler')
const { Erro, ErrorType } = require('./../../../_config/error')

module.exports = (Repo) => async (id, body) => {
	try {
		if (body.level === '2' && (!body.register || !body.clientid || !body.contacts.length)) {
			throw new Erro(ErrorType.INVALID_CLIENT_DATA)
		}

		let user = body.level === '2'
			? await Repo.updateClient(id, body)
			: await Repo.update(id, body)
		if (user) {
			user = await Repo.getById(user.id)
		}
		return user
	} catch (error) {
		if (error.constraint) {
			pgErrorHandler(error.constraint)
		}
		throw error
	}
}

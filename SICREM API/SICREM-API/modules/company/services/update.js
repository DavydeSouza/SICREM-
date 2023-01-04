const { Erro, ErrorType } = require('./../../../_config/error')

module.exports = (Repo) => async (id, body) => {
	try {
		if (body.clientid) {
			body.address = JSON.stringify(body.address)
			const company = await Repo.update(id, body)
			return company
		} else {
			throw new Erro(ErrorType.INVALID_SHIP_SCUBA_OWNER)
		}
	} catch (error) {
		throw error
	}
}

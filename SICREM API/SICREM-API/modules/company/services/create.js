const { Erro, ErrorType } = require('./../../../_config/error')

module.exports = (Repo) => async (body) => {
	if (body.clientid) {
		body.address = JSON.stringify(body.address)
		const company = await Repo.create(body)
		return company
	} else {
		throw new Erro(ErrorType.INVALID_SHIP_SCUBA_OWNER)
	}
}

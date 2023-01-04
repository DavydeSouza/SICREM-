const {PreparedStatement: PS} = require('pg-promise')
const moment = require('moment-timezone')
const stringDashRemove = require('../../../utils/stringDashRemove')

module.exports = () => async (tx, id, obj) => {
	obj.dtUpdate = moment()
		.tz('America/Sao_Paulo')
		.format('YYYY-MM-DD HH:mm:ss')
	const query = `
	UPDATE
		Company
	SET
		name = $1,
		register = $2,
		fcem = $3,
		fcemExpiration = $4,
		address = $5,
		dtUpdate = $6,
		"user" = $7
	WHERE
		id = $8
	RETURNING
		*;`

	const psName = `updateCompany_${stringDashRemove(id)}`

	const update = new PS({name: psName, text: query})
	update.values = [
		obj.name, obj.register, obj.fcem,
		obj.fcemExpiration, obj.address,
		obj.dtUpdate, obj.user, id
	]
	const result = await tx.one(update)
	return result
}

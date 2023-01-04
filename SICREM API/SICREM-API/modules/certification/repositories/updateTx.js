const {PreparedStatement: PS} = require('pg-promise')
const moment = require('moment-timezone')
const stringDashRemove = require('../../../utils/stringDashRemove')
const deallocate = require('../../../utils/deallocate')

module.exports = () => async (tx, id, obj) => {
	obj.dtUpdate = moment()
		.tz('America/Sao_Paulo')
		.format('YYYY-MM-DD HH:mm:ss')
	const query = `
	UPDATE
		Certification
	SET
		type = $1,
		issue = $2,
		expiration = $3,
		name = $4,
		maxDepth = $5,
		dtUpdate = $6,
		company = $7
	WHERE
		id = $8
	RETURNING
		*;`

	const psName = `updateCertification_${stringDashRemove(id)}`
	const update = new PS({name: psName, text: query})
	update.values = [
		obj.type, obj.issue, obj.expiration,
		obj.name, obj.maxDepth, obj.dtUpdate,
		obj.company, id
	]
	const result = tx.one(update)
	await deallocate(tx, psName)
	return result
}

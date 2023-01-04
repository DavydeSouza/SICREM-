const {PreparedStatement: PS} = require('pg-promise')
const stringDashRemove = require('../../../utils/stringDashRemove')
const deallocate = require('../../../utils/deallocate')
module.exports = (pgpdb) => async (id, obj) => {
	const query = `
	UPDATE
		Port
	SET
		name = $1
	WHERE
		id = $2
	RETURNING
		*;`

	const psName = `updatePort_${stringDashRemove(id)}`

	const update = new PS({name: psName, text: query})
	update.values = [obj.name, id]

	const result = await pgpdb.one(update)
	await deallocate(pgpdb, psName)
	return result
}

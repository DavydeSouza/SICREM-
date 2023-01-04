const {PreparedStatement: PS} = require('pg-promise')
const stringDashRemove = require('../../../utils/stringDashRemove')
const deallocate = require('../../../utils/deallocate')

module.exports = (pgpdb) => async (id, obj) => {
	const query = `
	UPDATE
		Contact
	SET
		name = $1,
		email = $2,
		phone = $3
	WHERE
		id = $4
	RETURNING
		*;`

	const psName = `updateContact_${stringDashRemove(id)}`

	const update = new PS({name: psName, text: query})
	update.values = [obj.name, obj.email, obj.phone, id]

	const result = await pgpdb.one(update)
	await deallocate(pgpdb, psName)
	return result
}

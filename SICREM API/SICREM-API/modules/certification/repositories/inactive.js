const {PreparedStatement: PS} = require('pg-promise')
const stringDashRemove = require('../../../utils/stringDashRemove')
const deallocate = require('../../../utils/deallocate')

module.exports = (pgpdb) => async (id) => {
	const query = `
	UPDATE
		Certification
	SET
		active = false
	WHERE
		id = $1;`

	const psName = `inativeCertification_${stringDashRemove(id)}`
	const inative = new PS({name: psName, text: query})
	inative.values = [id]
	const result = await pgpdb.one(inative)
	await deallocate(pgpdb, psName)
	return result
}

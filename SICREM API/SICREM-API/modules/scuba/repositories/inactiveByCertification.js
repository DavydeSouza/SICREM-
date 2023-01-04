const {PreparedStatement: PS} = require('pg-promise')
const stringDashRemove = require('../../../utils/stringDashRemove')
const deallocate = require('../../../utils/deallocate')

module.exports = (pgpdb) => async (certification) => {
	const query = `
	UPDATE
		System
	SET
		active = false
	WHERE
		certification = $1;`

	const psName = `inativeByCertification_${stringDashRemove(certification)}`

	const inative = new PS({name: psName, text: query})
	inative.values = [certification]

	const result = await pgpdb.none(inative)
	await deallocate(pgpdb, psName)
	return result
}

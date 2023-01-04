const {PreparedStatement: PS} = require('pg-promise')
const deallocate = require('../../../utils/deallocate')
module.exports = (pgpdb) => async (name) => {
	const columns = `id, name`
	const join = ``
	const query = `
	SELECT
		${columns}
	FROM
		Port p
		${join}
	WHERE
		LOWER(unaccent(p.name)) LIKE LOWER(unaccent($1));`

	const psName = 'getPortByName'

	const get = new PS({name: psName, text: query})
	get.values = [`%${name}%`]

	const result = await pgpdb.any(get)
	await deallocate(pgpdb, psName)
	return result
}

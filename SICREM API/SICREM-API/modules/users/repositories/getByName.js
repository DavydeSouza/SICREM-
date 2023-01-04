const {PreparedStatement: PS} = require('pg-promise')
const deallocate = require('../../../utils/deallocate')
module.exports = (pgpdb) => async (name) => {
	const columns = `id, name, email, level, clientid`
	const join = ``
	const query = `
	SELECT
		${columns}
	FROM
		Users u
		${join}
	WHERE
		LOWER(unaccent(u.name)) LIKE LOWER(unaccent($1));`

	const psName = 'getuserByName'
	const get = new PS({name: psName, text: query})
	const result = await pgpdb.one(get)
	await deallocate(pgpdb, psName)
	return result
}

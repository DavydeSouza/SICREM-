const {PreparedStatement: PS} = require('pg-promise')
const deallocate = require('../../../utils/deallocate')
module.exports = (pgpdb) => async (name) => {
	const columns = 'c.id, c.name, u.clientid'
	const join = 'JOIN Users u ON u.id = c.user'
	const query = `
	SELECT
	${columns}
	FROM
	Company c
	${join}
	WHERE
	LOWER(unaccent(c.name)) LIKE LOWER(unaccent($1));`

	const psName = 'getCompanyByName'

	const get = new PS({name: psName, text: query})
	get.values = [`%${name}%`]
	const result = await pgpdb.any(get)
	await deallocate(pgpdb, psName)
	return result
}

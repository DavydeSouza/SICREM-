const {PreparedStatement: PS} = require('pg-promise')
const deallocate = require('../../../utils/deallocate')
module.exports = (pgpdb) => async (email) => {
	const columns = `count(u.email)`
	const join = ``
	const query = `
	SELECT
		${columns}
	FROM
		Users u
		${join}
	WHERE
		u.active = FALSE
		AND LOWER(unaccent(u.email)) LIKE LOWER(unaccent($1));`

	const psName = 'verifyStatusEmail'
	const get = new PS({name: psName, text: query})
	get.values = [`${email}`]
	const result = await pgpdb.oneOrNone(get)
	await deallocate(pgpdb, psName)
	return result ? !!parseInt(result.count) : false
}

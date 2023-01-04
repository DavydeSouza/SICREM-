const {PreparedStatement: PS} = require('pg-promise')
const deallocate = require('../../../utils/deallocate')

module.exports = (pgpdb) => async (name = '', code) => {
	const columns = `id, name, email, level, clientid`
	const filter = filterByCodeOrName(code, name)
	const query = `
	SELECT
		${columns}
	FROM
		Users u
	WHERE
		u.clientid IS NOT NULL
		AND ${filter.param};`

	const psName = 'getClient'
	const get = new PS({name: psName, text: query})

	const result = await pgpdb.one(get)
	await deallocate(pgpdb, psName)
	return result
}

function filterByCodeOrName (code, name) {
	let param = null
	let values = [null]
	if (code) {
		param = `LOWER(u.clientid) LIKE LOWER($1)`
		values.push(`%${code}%`)
	} else {
		param = 'LOWER(unaccent(u.name)) LIKE LOWER(unaccent($1))'
		values.push([`%${name}%`])
	}
	return { param, values }
}

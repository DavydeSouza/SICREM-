const {PreparedStatement: PS} = require('pg-promise')
const stringDashRemove = require('../../../utils/stringDashRemove')
const deallocate = require('../../../utils/deallocate')

module.exports = (pgpdb) => async (filter) => {
	const query = `
	SELECT
		u."name" AS "user",
		u.clientid AS "clientid",
		c."name" AS company,
		c.id AS "companyId"
	FROM
		users u
		INNER JOIN company c ON c."user" = u.id
	WHERE  u.${filter.column} LIKE $1;
	`
	const psName = `getByClient_${stringDashRemove(filter.value)}`
	const get = new PS({name: psName, text: query})
	get.values = [`%${filter.value}%`]

	const result = await pgpdb.any(get)
	await deallocate(pgpdb, psName)
	return result
}

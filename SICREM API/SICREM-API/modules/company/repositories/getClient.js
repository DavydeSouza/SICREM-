module.exports = (pgpdb) => (name = '', code, isScuba = false) => {
	const columns = 'c.id, c.name, u.clientid, u.email, u.level'
	const join = 'JOIN Users u ON u.id = c.user'
	const filter = code
		? `LOWER(u.clientid) LIKE LOWER('%${code}%')`
		: `LOWER(unaccent(c.name)) LIKE LOWER(unaccent('%${name}%'))`
	const scubaFilter = `${isScuba ? 'AND c.fcem IS NOT NULL' : ''}`
	const query = `
	SELECT
		${columns}
	FROM
		Company c
		${join}
	WHERE
		u.clientid IS NOT NULL
		${scubaFilter}
		AND ${filter};`
	return pgpdb.any(query, {name})
}

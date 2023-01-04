module.exports = (pgpdb) => (name) => {
	const columns = 'id, name'
	const join = ''
	const query = `
	SELECT
		${columns}
	FROM
		Shipowner u
		${join}
	WHERE
		LOWER(unaccent(u.name)) LIKE LOWER(unaccent('%${name}%'));`
	return pgpdb.any(query, {name})
}

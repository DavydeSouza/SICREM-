module.exports = (pgpdb) => (table) => {
	const columns = `id, name`
	const query = `
	SELECT
		${columns}
	FROM
		${table};
	`
	return pgpdb.any(query)
}

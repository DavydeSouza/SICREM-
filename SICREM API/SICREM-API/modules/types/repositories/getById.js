module.exports = (pgpdb) => (id, table) => {
	const columns = `id, name`
	const query = `
	SELECT
		${columns}
	FROM
		${table}
	WHERE
		id = $<id>;
	`
	return pgpdb.oneOrNone(query, {id})
}

module.exports = (pgpdb) => () => {
	const columns = 'count(*)'
	const query = `
	SELECT
		${columns}
	FROM
		ship u;
	`
	return pgpdb.one(query)
}

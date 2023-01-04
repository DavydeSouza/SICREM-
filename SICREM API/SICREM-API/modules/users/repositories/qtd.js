module.exports = (pgpdb) => () => {
	const columns = 'count(*)'
	const query = `
	SELECT
		${columns}
	FROM
		users u;
	`
	return pgpdb.one(query)
}

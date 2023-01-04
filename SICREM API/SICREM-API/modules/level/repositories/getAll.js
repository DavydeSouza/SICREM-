module.exports = (pgpdb) => () => {
	const colums = '*'
	const query = `
	SELECT
		${colums}
	FROM
		level l;
	`
	return pgpdb.any(query)
}

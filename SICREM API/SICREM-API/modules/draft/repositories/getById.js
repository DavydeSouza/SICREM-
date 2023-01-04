module.exports = (pgpdb) => (id) => {
	const columns = `*`
	const query = `
	SELECT
		${columns}
	FROM
		Draft
	WHERE
		id = $<id>;`
	return pgpdb.oneOrNone(query, {id})
}

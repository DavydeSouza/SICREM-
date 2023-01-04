module.exports = (pgpdb) => (id) => {
	const columns = `*`
	const query = `
	SELECT
		${columns}
	FROM
		PropulsionAndPower
	WHERE
		id = $<id>;`
	return pgpdb.oneOrNone(query, {id})
}

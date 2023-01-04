module.exports = (pgpdb) => (id) => {
	const colums = '*'
	const queryInsert = `
	SELECT
		${colums}
	FROM
		level l
	WHERE
		l.id = $<id>;
	`
	return pgpdb.oneOrNone(queryInsert, {id})
}

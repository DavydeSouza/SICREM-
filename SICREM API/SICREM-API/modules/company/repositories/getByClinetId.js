module.exports = (pgpdb) => (user) => {
	const columns = `*`
	const query = `
	SELECT
		${columns}
	FROM
		Company c
	WHERE
		c."user" = $<user>;`
	return pgpdb.oneOrNone(query, {user})
}

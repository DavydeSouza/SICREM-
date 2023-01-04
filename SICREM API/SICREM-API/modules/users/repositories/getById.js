module.exports = (pgpdb) => (id) => {
	const columns = 'id, name, email, contacts, level, clientid'
	const join = ''
	const query = `
	SELECT
		${columns}
	FROM
		users u
		${join}
	WHERE
		u.id = $<id>;
	`
	return pgpdb.oneOrNone(query, {id})
}

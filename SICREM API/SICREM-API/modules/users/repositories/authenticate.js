const {PreparedStatement: PS} = require('pg-promise')

const login = (pgpdb) => async (email, pswd) => {
	const columns = 'u.id, u.name, u.email, l.value as level'
	const filter = `u.email LIKE $1
		AND u.password = $2
		AND u.active = TRUE
		AND l.value = u.level`
	const join = 'JOIN level l on l.value = u.level'
	const querySql = `SELECT ${columns} FROM users u ${join} WHERE ${filter};`
	const insert = new PS({name: 'insert', text: querySql})
	insert.values = [email, pswd]
	return pgpdb.oneOrNone(insert)
}
module.exports = login

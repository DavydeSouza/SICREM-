module.exports = (pgpdb) => (id) => {
	const queryInsert = 'UPDATE Users SET active = FALSE WHERE id = $<id>;'
	pgpdb.none(queryInsert, {id})
}

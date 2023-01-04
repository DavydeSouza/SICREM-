module.exports = (pgpdb) => (id) => {
	const queryInsert = 'DELETE FROM Ship WHERE id = $<id>;'
	pgpdb.none(queryInsert, {id})
}

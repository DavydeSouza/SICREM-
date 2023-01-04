module.exports = (pgpdb) => (id) => {
	const queryInsert = 'DELETE FROM MainTechinicalFeatures WHERE id = $<id>;'
	pgpdb.none(queryInsert, {id})
}

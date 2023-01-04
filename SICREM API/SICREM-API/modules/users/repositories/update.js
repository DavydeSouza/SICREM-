module.exports = (pgpdb) => (id, obj) => {
	const query = `UPDATE users
									SET
										name = $<name>,
										email = $<email>,
										level = $<level>,
										active = $<active>
									WHERE id = '${id}' RETURNING id;`
	return pgpdb.one(query, obj)
}

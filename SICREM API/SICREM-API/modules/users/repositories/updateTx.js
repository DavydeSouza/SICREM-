module.exports = () => (tx, id, obj) => {
	obj.idUser = id
	const returning = 'name, clientid, active, email, level, contacts'
	const query = `UPDATE users
									SET
										name = $<name>,
										email = $<email>,
										level = $<level>,
										contacts = $<contacts>,
										active = $<active>
									WHERE
										id = $<idUser>
									RETURNING
										${returning};`
	return tx.one(query, obj)
}

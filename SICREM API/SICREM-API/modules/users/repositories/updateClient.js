module.exports = (pgpdb) => (id, obj) => {
	obj.contacts = JSON.stringify(obj.contacts)
	obj.idUser = id
	const returning = 'id'
	const query = `UPDATE users
									SET
										name = $<name>,
										email = $<email>,
										level = $<level>,
										active = $<active>,
										register = $<register>,
										clientid = $<clientid>,
										contacts = $<contacts>
										WHERE
											id = $<idUser>
										RETURNING
											${returning};`
	return pgpdb.one(query, obj)
}

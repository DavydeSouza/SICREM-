module.exports = (pgpdb) => (id, obj) => {
	console.log(obj)
	const query = `
	UPDATE
		Shipowner
	SET
		name = $<name>,
		register = $<register>
	WHERE
		id = '${id}'
	RETURNING
		*;`
	return pgpdb.one(query, obj)
}

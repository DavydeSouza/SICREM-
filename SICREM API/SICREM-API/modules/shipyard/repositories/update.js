module.exports = (pgpdb) => (id, obj) => {
	console.log(obj)
	const query = `
	UPDATE
		Shipyard
	SET
		name = $<name>
	WHERE
		id = '${id}'
	RETURNING
		*;`
	return pgpdb.one(query, obj)
}

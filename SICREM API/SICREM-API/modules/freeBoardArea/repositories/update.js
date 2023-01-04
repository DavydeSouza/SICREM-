module.exports = (pgpdb) => (id, obj) => {
	console.log(obj)
	const query = `
	UPDATE
		FreeBoardArea
	SET
		size = $<size>,
		draft = $<draft>
	WHERE
		id = '${id}'
	RETURNING
		*;`
	return pgpdb.one(query, obj)
}

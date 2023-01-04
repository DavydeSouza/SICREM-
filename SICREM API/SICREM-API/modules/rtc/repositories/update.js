module.exports = (pgpdb) => (id, obj) => {
	console.log(obj)
	const query = `
	UPDATE
		RadiotelephoneCoverage
	SET
		name = $<name>,
		status = $<status>
	WHERE
		id = '${id}'
	RETURNING
		*;`
	return pgpdb.one(query, obj)
}

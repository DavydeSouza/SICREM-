
const repo = (pgpdb) => (body) => {
	let colums = `id, name, clientid`
	let values = `$<id>, $<name>, $<clientid>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO Shipowner (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo

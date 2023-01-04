
const repo = (pgpdb) => (body) => {
	let colums = `id, name, adress`
	let values = `$<id>, $<name>, $<address>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO Port (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo


const repo = (pgpdb) => (body) => {
	let colums = `id, name, email, phone`
	let values = `$<id>, $<name>, $<status>, $<phone>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO Contact (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo

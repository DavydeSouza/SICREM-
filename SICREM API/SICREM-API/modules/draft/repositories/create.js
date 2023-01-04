
const repo = (pgpdb) => (body) => {
	let colums = `id, av, ar, average, isligth, mtf`
	let values = `$<id>, $<ar>, $<av>, $<average>, $<isligth>, $<mtf>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO Draft (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo

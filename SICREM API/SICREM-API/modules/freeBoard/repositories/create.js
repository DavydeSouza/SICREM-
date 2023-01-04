
const repo = (pgpdb) => (body) => {
	let colums = `id, openseasize, isdraft, areas, mtf`
	let values = `$<id>, $<openseasize>, $<isdraft>, $<areas>, $<mtf>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO FreeBoard (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo

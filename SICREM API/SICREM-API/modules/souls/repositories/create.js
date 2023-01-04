const Guid = require('guid')
const repo = (pgpdb) => (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	let colums = `id, qtdpaxcabin8bunks, qtdotherpax,
	qtdunmannedprofessionals, crew, mtf`
	let values = `$<id>, $<qtdpaxcabin8bunks>, $<qtdotherpax>,
	$<qtdunmannedprofessionals>, $<crew>, $<mtf>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO Souls (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo

const Guid = require('guid')
const repo = (pgpdb) => (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	let colums = `id, cargoondeck, tank, toxicchemicalsorgas, glowless60,
	dangerouscargo, standBy, convoy, crossingsoperator`

	let values = `$<id>, $<cargoondeck>, $<tank>, $<toxicchemicalsorgas>, $<glowless60>,
		$<dangerouscargo>, $<standby>, $<convoy>, $<crossingsoperator>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO OtherInfos (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo

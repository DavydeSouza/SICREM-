const Guid = require('guid')

const repo = (pgpdb) => (body, tx) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id

	try {
		let colums = `id, name, adress`
		let values = `$<id>, $<name>, $<address>`
		const returnig = 'RETURNING id'
		const query = `INSERT INTO Shipyard (${colums}) VALUES (${values}) ${returnig};`
		const pgOrTX = tx || pgpdb
		const resp = pgOrTX.one(query, body)
		return resp
	} catch (error) {
		throw new Error(error)
	}
}
module.exports = repo

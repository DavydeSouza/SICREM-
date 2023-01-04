const Guid = require('guid')

module.exports = (pgpdb) => (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	const columns = `id, name`
	const values = `$<id>, $<name>`
	const returnig = 'RETURNING *'
	const table = body.table
	delete body.table

	const queryInsert = `INSERT INTO ${table} (${columns}) VALUES (${values}) ${returnig};`
	return pgpdb.oneOrNone(queryInsert, body)
}

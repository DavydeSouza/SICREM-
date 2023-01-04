const Guid = require('guid')
const repo = (pgpdb) => (body, ship) => {
	let colums = `id, name, ship`
	const returnig = 'RETURNING *'
	const insert = `INSERT INTO RadiotelephoneCoverage (${colums}) VALUES`
	const values = []

	body.forEach(b => {
		const id = Guid.raw()
		values.push(`('${id}', '${b.name}', '${ship}')`)
	})
	const query = `${insert} ${values.join(',')} ${returnig};`
	return pgpdb.many(query)
}
module.exports = repo

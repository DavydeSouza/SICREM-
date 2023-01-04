const Guid = require('guid')
const repo = (pgpdb) => (body, ship) => {
	const colums = `id, mcp, power, serial_number, manufacturer, model, ship`
	const insert = `INSERT INTO PropulsionAndPower (${colums}) VALUES`
	const returnig = 'RETURNING *'
	const values = []

	body.forEach(b => {
		const id = Guid.raw()
		values.push(`('${id}', '${b.mcp}', '${b.power}',
		'${b.serialNumber}', '${b.manufacturer}', '${b.model}',
		'${ship}')`)
	})
	const query = `${insert} ${values.join(',')} ${returnig};`
	return pgpdb.many(query)
}
module.exports = repo

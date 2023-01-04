const Guid = require('guid')
console.log('\n')
const repo = (pgpdb) => (body = [], freeboard) => {
	let colums = `id, areaorder, size, freeboard`
	const returnig = 'RETURNING id'
	const insert = `INSERT INTO FreeBoardArea (${colums}) VALUES`
	const values = []
	body.forEach(b => {
		const id = (b.id) ? b.id : Guid.raw()
		b.id = id
		values.push(`('${b.id}', ${b.areaOrder}, ${b.value}, '${freeboard}')`)
	})
	const query = `${insert} ${values.join(',')} ${returnig};`
	return pgpdb.many(query)
}
module.exports = repo

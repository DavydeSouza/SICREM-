
const repo = () => async (tx, body) => {
	let colums = `id, name, register, "user"`
	let values = `'${body.id}', '${body.name}', '${body.register}', '${body.user}'`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO Shipowner (${colums}) VALUES (${values}) ${returnig};`
	return tx.one(query)
}
module.exports = repo

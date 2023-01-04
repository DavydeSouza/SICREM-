module.exports = (pgpdb) => (body) => {
	const columns = `gtf, ${body.type}`
	const returnig = 'RETURNING *'
	const table = body.table
	const values = []
	body.values.forEach(value => {
		values.push(`('${body.gtf}', '${value}')`)
	})
	const queryInsert = `INSERT INTO ${table} (${columns}) VALUES ${values.join(',')} ${returnig};`
	return pgpdb.any(queryInsert, body)
}

module.exports = (pgpdb) => (id, obj) => {
	console.log(obj)
	const query = `
	UPDATE
		PropulsionAndPower
	SET
		mcp = $<mcp>,
		potencia = $<potencia>,
		serialNumber = $<serialNumber>,
		manufacturer = $<manufacturer>,
		model = $<model>,
		ship = $<ship>
	WHERE
		id = '${id}'
	RETURNING
		*;`
	return pgpdb.one(query, obj)
}

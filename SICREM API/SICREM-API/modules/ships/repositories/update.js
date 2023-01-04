const {PreparedStatement: PS} = require('pg-promise')
const deallocate = require('../../../utils/deallocate')

module.exports = (pgpdb) => async (id, obj) => {
	const query = `UPDATE
										Ship
									SET
										id = $1,
										name = $2,
										constructionyear = $3,
										updateyear = $4,
										charteredforeign = $5,
										haspropulsion = $6,
										solas = $7,
										hullcode = $8,
										registrationnumber = $9,
										otherInfos = $10,
										callsign = $11,
										imonumber = $12,
										shipOwner = $13
									WHERE
										id = $14
									RETURNING
									id;`

	const psName = `updateShip_${obj.cbesid}`

	const update = new PS({name: psName, text: query})
	update.values = [
		obj.id, obj.name, obj.constructionyear, obj.updateyear,
		obj.charteredforeign, obj.haspropulsion, obj.solas, obj.hullcode,
		obj.registrationnumber, JSON.stringify(obj.otherInfos), obj.callsign, obj.imonumber,
		obj.shipowner, id
	]

	const result = pgpdb.one(update)
	await deallocate(pgpdb, psName)
	return result
}

const Guid = require('guid')

const repo = (pgpdb) => (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	const values = `
	$<id>, $<hullmaterial>, $<operationport>,
	$<registrationport>, $<activitys>, $<navigationareas>,
	$<shipyard>, $<shiptype>, $<propulsionAndPower>, $<rtc>`
	const colums = `id, hullmaterial, operationport, registrationport,
	activitys, navigationareas,
	shipyard, shiptype, propulsionAndPower, rtc`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO GeneralTechinicalFeatures (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo

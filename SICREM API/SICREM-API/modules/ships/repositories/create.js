const Guid = require('guid')

const repo = (pgpdb) => (body) => {
	const id = (body.id) ? body.id : Guid.raw()
	body.id = id
	let colums = `id, constructionyear, updateyear,
	charteredforeign, haspropulsion, solas,
	name, hullcode, registrationnumber, callsign, imonumber,
	shipowner, gtf, mtf, otherInfos, cbesid`
	let values = `$<id>, $<constructionyear>, $<updateyear>,
	$<charteredforeign>, $<haspropulsion>, $<solas>, $<name>,
	$<hullcode>, $<registrationnumber>, $<callsign>,
	$<imonumber>, $<shipowner>, $<gtf>, $<mtf>, $<otherInfos>, $<cbesid>`
	const returnig = 'RETURNING *'
	const queryInsert = `INSERT INTO Ship (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(queryInsert, body)
}
module.exports = repo

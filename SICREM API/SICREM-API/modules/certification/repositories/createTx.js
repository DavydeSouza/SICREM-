const Guid = require('guid')
const moment = require('moment-timezone')

const repo = () => (tx, body) => {
	body.id = Guid.raw()
	body.dtInsert = moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
	let colums = `id, cbesid, type, issue, expiration, name, maxDepth, company, dtInsert`
	let values = `$<id>, $<cbesid>, $<type>, $<issue>, $<expiration>, $<name>, $<maxDepth>,
	$<company>, $<dtInsert>`

	const returnig = 'RETURNING *'
	const query = `INSERT INTO Certification (${colums}) VALUES (${values}) ${returnig};`
	return tx.one(query, body)
}
module.exports = repo

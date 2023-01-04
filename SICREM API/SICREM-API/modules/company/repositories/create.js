const Guid = require('guid')
const moment = require('moment-timezone')

const repo = (pgpdb) => (body) => {
	body.id = Guid.raw()
	body.dtInsert = moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
	let colums = 'id, name, fcem, fcemExpiration, address, clientid, dtInsert'
	let values = `$<id>, $<name>, $<fcem>, $<fcemExpiration>, $<address>,
		$<clientid>, $<dtInsert>`
	const returnig = 'RETURNING *'
	const query = `INSERT INTO Company (${colums}) VALUES (${values}) ${returnig};`
	return pgpdb.one(query, body)
}
module.exports = repo

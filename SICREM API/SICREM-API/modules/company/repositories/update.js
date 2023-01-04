const moment = require('moment-timezone')

module.exports = (pgpdb) => (id, obj) => {
	obj.dtUpdate = moment()
		.tz('America/Sao_Paulo')
		.format('YYYY-MM-DD HH:mm:ss')
	const query = `
	UPDATE
		Company
	SET
		name = $<name>,
		fcem = $<fcem>,
		fcemExpiration = $<fcemExpiration>,
		address = $<address>,
		dtUpdate = $<dtUpdate>,
		clientid = $<clientid>
	WHERE
		id = '${id}'
	RETURNING
		*;`
	return pgpdb.one(query, obj)
}

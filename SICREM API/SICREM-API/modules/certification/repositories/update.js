const moment = require('moment-timezone')

module.exports = (pgpdb) => (id, obj) => {
	obj.dtUpdate = moment()
		.tz('America/Sao_Paulo')
		.format('YYYY-MM-DD HH:mm:ss')
	const query = `
	UPDATE
		Certification
	SET
		type = $<type>,
		issue = $<issue>,
		expiration = $<expiration>,
		name = $<name>,
		maxDepth = $<maxDepth>,
		dtUpdate = $<dtUpdate>,
		company = $<company>
	WHERE
		id = '${id}'
	RETURNING
		*;`
	return pgpdb.one(query, obj)
}

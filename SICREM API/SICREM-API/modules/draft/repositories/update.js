const {PreparedStatement: PS} = require('pg-promise')
module.exports = (pgpdb) => (mtf, obj) => {
	const query = `
	UPDATE
		Draft
	SET
		av = $1,
		ar = $2,
		average = $3
	WHERE
		isligth = $4 AND
		mtf = $5
	RETURNING
		id;`
	const update = new PS({name: 'updateDraft', text: query})
	update.values = [obj.av, obj.ar, obj.average, obj.isligth, mtf.id]
	return pgpdb.one(update)
}

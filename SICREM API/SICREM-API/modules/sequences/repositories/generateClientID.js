const repo = (pgpdb) => async () => {
	const SEQUENCE_NAME = 'CLIENT_ID_SEQ'
	const query = `SELECT nextval('${SEQUENCE_NAME}')`
	const sequence = await pgpdb.one(query)
	return sequence.nextval
}
module.exports = repo

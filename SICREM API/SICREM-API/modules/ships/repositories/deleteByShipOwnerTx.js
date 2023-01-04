const repo = () => async (company, tx) => {
	try {
		const query = 'DELETE FROM ship s WHERE s.shipowner = $<company>;'
		return tx.none(query, { company })
	} catch (error) {
		throw error
	}
}
module.exports = repo

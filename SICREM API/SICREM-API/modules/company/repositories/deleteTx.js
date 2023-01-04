const repo = () => async (user, tx) => {
	try {
		const query = 'DELETE FROM company c WHERE c."user" = $<user>;'
		return tx.none(query, { user })
	} catch (error) {
		throw error
	}
}
module.exports = repo

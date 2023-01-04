const repo = () => async (id, tx) => {
	const query = 'DELETE FROM users WHERE id = $<id>;'
	return tx.none(query, {id})
}
module.exports = repo

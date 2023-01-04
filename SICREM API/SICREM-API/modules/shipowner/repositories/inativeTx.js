module.exports = () => (tx, user) => {
	const query = `UPDATE Shipowner SET active = FALSE WHERE "user" = '${user}';`
	return tx.none(query)
}

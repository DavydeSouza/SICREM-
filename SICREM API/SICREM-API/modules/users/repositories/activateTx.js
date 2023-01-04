module.exports = () => (tx, id) => {
	const queryInsert = 'UPDATE Users SET active = TRUE WHERE id = $<id>;'
	tx.none(queryInsert, {id})
}

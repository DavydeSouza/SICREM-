module.exports = () => (tx, id) => {
	const queryInsert = 'UPDATE Users SET active = FALSE WHERE id = $<id>;'
	tx.none(queryInsert, {id})
}

module.exports = () => (tx, id) => {
	const queryInative = 'UPDATE Ship SET active = FALSE WHERE id = $<id>;'
	tx.none(queryInative, {id})
}

const {PreparedStatement: PS} = require('pg-promise')
const stringDashRemove = require('../../../utils/stringDashRemove')

module.exports = () => async (tx, user) => {
	const query = `UPDATE Company SET active = TRUE WHERE "user" = $1;`
	const psName = `activateTxCompany_${stringDashRemove(user)}`
	const inative = new PS({name: psName, text: query})
	inative.values = [user]
	return tx.none(inative)
}

const {PreparedStatement: PS} = require('pg-promise')
const stringDashRemove = require('../../../utils/stringDashRemove')

module.exports = () => async (tx, user) => {
	const query = `UPDATE Company SET active = FALSE WHERE "user" = $1;`
	const psName = `inativeCompany_${stringDashRemove(user)}`
	const inative = new PS({name: psName, text: query})
	inative.values = [user]
	return tx.none(inative)
}

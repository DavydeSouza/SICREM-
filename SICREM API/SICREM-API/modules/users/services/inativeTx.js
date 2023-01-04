const { levelPropertyInvalid, onlyAdminUpdateThisUser } = require('../rules')

module.exports = (Repo, ServiceShipOwner, ServiceCompany, pgpdb) => async (id, body, user) => {
	try {
		return pgpdb.tx(async tx => {
			const { level } = body
			levelPropertyInvalid(level)
			onlyAdminUpdateThisUser(user.level, level)
			await Repo.inativeTx(tx, id)
			await ServiceCompany.inativeTx(tx, id)
		})
	} catch (error) {
		throw error
	}
}

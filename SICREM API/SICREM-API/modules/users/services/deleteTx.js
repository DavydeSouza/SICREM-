module.exports = (Repo, ServiceCompany, pgpdb) => async (user) => {
	try {
		return pgpdb.tx(async tx => {
			await ServiceCompany.deleteTx(user, tx)
			await Repo.deleteTx(user, tx)
		})
	} catch (error) {
		throw error
	}
}

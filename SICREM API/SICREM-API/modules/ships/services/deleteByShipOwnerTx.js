module.exports = (Repo) => async (company, tx) => {
	try {
		Repo.deleteByShipOwnerTx(company, tx)
	} catch (error) {
		throw error
	}
}

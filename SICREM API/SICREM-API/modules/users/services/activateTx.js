module.exports = (Repo, ServiceShipOwner, ServiceCompany, pgpdb) => async (id, body) => {
	try {
		return pgpdb.tx(async tx => {
			if (body.level === '2') {
				await Repo.activateTx(tx, id)
				await ServiceCompany.activateTx(tx, id)
			} else {
				await Repo.inative(id)
			}
		})
	} catch (error) {
		throw error
	}
}

module.exports = (Repo, pgpdb) => async (id, body) => {
	try {
		return pgpdb.tx(async tx => {
			await Repo.inativeTx(tx, id)
		})
	} catch (error) {
		throw error
	}
}

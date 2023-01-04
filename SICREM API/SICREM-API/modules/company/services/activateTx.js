
module.exports = (Repo) => async (tx, user) => {
	try {
		await Repo.activateTx(tx, user)
		return
	} catch (error) {
		throw error
	}
}

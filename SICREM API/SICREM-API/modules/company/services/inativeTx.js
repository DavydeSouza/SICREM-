
module.exports = (Repo) => async (tx, user) => {
	try {
		await Repo.inativeTx(tx, user)
		return
	} catch (error) {
		throw error
	}
}

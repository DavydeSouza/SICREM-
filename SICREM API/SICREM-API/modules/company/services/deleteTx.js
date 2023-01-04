module.exports = (Repo, deleteShip) => async (user, tx) => {
	try {
		const company = await Repo.getByClinetId(user)
		await deleteShip(company.id, tx)
		await Repo.deleteTx(user, tx)
	} catch (error) {
		throw error
	}
}

module.exports = (Repo) => async (id) => {
	try {
		let shipyard = await Repo.getById(id)
		return shipyard
	} catch (error) {
		throw error
	}
}

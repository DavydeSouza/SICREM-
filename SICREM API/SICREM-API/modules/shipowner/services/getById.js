module.exports = (Repo) => async (id) => {
	try {
		let shipowner = await Repo.getById(id)
		return shipowner
	} catch (error) {
		throw error
	}
}

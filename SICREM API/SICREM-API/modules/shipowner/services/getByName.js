module.exports = (Repo) => async (name) => {
	try {
		let shipowner = await Repo.getByName(name)
		return shipowner
	} catch (error) {
		throw error
	}
}

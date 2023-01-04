module.exports = (Repo) => async (name) => {
	try {
		let shipyards = await Repo.getByName(name)
		return shipyards
	} catch (error) {
		throw error
	}
}

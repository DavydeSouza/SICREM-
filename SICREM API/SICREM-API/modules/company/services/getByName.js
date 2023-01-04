module.exports = (Repo) => async (name) => {
	try {
		let company = await Repo.getByName(name)
		return company
	} catch (error) {
		throw error
	}
}

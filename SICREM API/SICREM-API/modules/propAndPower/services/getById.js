module.exports = (Repo) => async (id) => {
	try {
		let prop = await Repo.getById(id)
		return prop
	} catch (error) {
		throw error
	}
}

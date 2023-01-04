module.exports = (Repo) => async (id) => {
	try {
		let draft = await Repo.getById(id)
		return draft
	} catch (error) {
		throw error
	}
}

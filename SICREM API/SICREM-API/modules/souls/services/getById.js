module.exports = (Repo) => async (id) => {
	try {
		let souls = await Repo.getById(id)
		return souls
	} catch (error) {
		throw error
	}
}

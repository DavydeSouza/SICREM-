module.exports = (Repo) => async (id) => {
	try {
		let infos = await Repo.getById(id)
		return infos
	} catch (error) {
		throw error
	}
}

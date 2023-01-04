module.exports = (Repo) => async (id) => {
	try {
		let port = await Repo.getById(id)
		return port
	} catch (error) {
		throw error
	}
}

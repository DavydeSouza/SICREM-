module.exports = (Repo) => async (name) => {
	try {
		let port = await Repo.getByName(name)
		return port
	} catch (error) {
		throw error
	}
}

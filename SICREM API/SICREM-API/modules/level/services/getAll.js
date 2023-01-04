module.exports = (Repo) => async () => {
	try {
		const user = await Repo.getAll()
		return user
	} catch (error) {
		throw error
	}
}

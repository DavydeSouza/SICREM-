module.exports = (Repo) => async (id) => {
	try {
		await Repo.inative(id)
	} catch (error) {
		throw error
	}
}
